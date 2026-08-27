// Vercel Serverless Function — Contact Form Handler
// Sends emails via Gmail SMTP using Nodemailer
// Requires GMAIL_USER and GMAIL_APP_PASSWORD environment variables

import nodemailer from 'nodemailer';

// --- Validation helpers ---

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validateFields({ name, email, message }) {
  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return 'Name is required.';
  }
  if (!email || typeof email !== 'string' || email.trim().length === 0) {
    return 'Email is required.';
  }
  if (!EMAIL_REGEX.test(email.trim())) {
    return 'Please provide a valid email address.';
  }
  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    return 'Message is required.';
  }
  if (name.trim().length > 200) {
    return 'Name is too long (max 200 characters).';
  }
  if (email.trim().length > 320) {
    return 'Email is too long.';
  }
  if (message.trim().length > 5000) {
    return 'Message is too long (max 5000 characters).';
  }
  return null;
}

// --- Handler ---

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, error: 'Method not allowed.' });
  }

  try {
    const { name, email, message, _honeypot, _loadedAt } = req.body || {};

    // Honeypot check — bots auto-fill hidden fields.
    // If filled, pretend success so the bot thinks it worked.
    if (_honeypot) {
      return res.status(200).json({ success: true });
    }

    // Timestamp-based rate limiting — reject if submitted too fast (< 2s)
    if (_loadedAt) {
      const elapsed = Date.now() - Number(_loadedAt);
      if (elapsed < 2000) {
        return res.status(200).json({ success: true }); // silent rejection
      }
    }

    // Validate fields
    const validationError = validateFields({ name, email, message });
    if (validationError) {
      return res.status(400).json({ success: false, error: validationError });
    }

    // Ensure env vars are configured
    const gmailUser = process.env.GMAIL_USER ? process.env.GMAIL_USER.trim() : null;
    const rawPass = process.env.GMAIL_APP_PASSWORD;
    const gmailPass = rawPass ? rawPass.replace(/['"]/g, '').replace(/\s+/g, '') : null;

    if (!gmailUser || !gmailPass) {
      console.error('Missing GMAIL_USER or GMAIL_APP_PASSWORD environment variables.');
      return res.status(500).json({
        success: false,
        error: 'Server configuration error. Please try again later.',
      });
    }

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    // Compose & send email
    await transporter.sendMail({
      from: `"Growth Catalyst Website" <${gmailUser}>`,
      replyTo: `"${name.trim()}" <${email.trim()}>`,
      to: gmailUser,
      subject: `New Contact Form Submission from ${name.trim()}`,
      text: [
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        '',
        `Message:`,
        message.trim(),
      ].join('\n'),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0a2463; border-bottom: 2px solid #0a2463; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #555; width: 80px;">Name</td>
              <td style="padding: 8px 12px;">${escapeHtml(name.trim())}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #555;">Email</td>
              <td style="padding: 8px 12px;">
                <a href="mailto:${escapeHtml(email.trim())}">${escapeHtml(email.trim())}</a>
              </td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background-color: #f5f7fa; border-radius: 6px;">
            <p style="margin: 0 0 8px; font-weight: bold; color: #555;">Message</p>
            <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(message.trim())}</p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #999;">
            Sent from the Growth Catalyst website contact form.
          </p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return res.status(500).json({
      success: false,
      error: 'Failed to send message. Please try again later.',
    });
  }
}

// Simple HTML escaping to prevent XSS in email HTML body
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
