import React, { useState, useEffect, useRef } from 'react';
import './InternPage.css';

const InternPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    track: '',
    portfolio: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
    setFormData({ name: '', email: '', track: '', portfolio: '', message: '' });
  };

  const benefits = [
    {
      title: 'Mentorship',
      desc: 'Learn directly from experienced strategists and creatives.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    },
    {
      title: 'Real Projects',
      desc: 'Work on actual client campaigns — not busy work.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
    },
    {
      title: 'Flexible Hours',
      desc: 'Remote-friendly with schedules that fit your life.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
    },
    {
      title: 'Certificate & Reference',
      desc: 'Leave with a professional reference and certificate of completion.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
    }
  ];

  const tracks = [
    { title: 'Social Media Management', desc: 'Craft engaging content and manage community interactions.' },
    { title: 'Analytics & Reporting', desc: 'Dive into data to uncover actionable growth insights.' },
    { title: 'Video Editing', desc: 'Produce compelling short-form video content.' },
    { title: 'Business Strategy', desc: 'Assist in developing high-level strategic plans for clients.' }
  ];

  return (
    <div className="intern-page">
      <section className="section section--dark intern-hero">
        <div className="container reveal">
          <h1 className="intern-hero__title">Be Our Intern</h1>
          <p className="intern-hero__subtitle">Gain hands-on experience, mentorship from industry professionals, and work on real client projects that make an impact.</p>
        </div>
      </section>

      <section className="section section--white intern-benefits-section">
        <div className="container">
          <div className="intern-benefits">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="intern-benefit-card reveal">
                <div className="intern-benefit-card__icon">{benefit.icon}</div>
                <h3 className="intern-benefit-card__title">{benefit.title}</h3>
                <p className="intern-benefit-card__desc">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--off-white intern-tracks-section">
        <div className="container">
          <div className="section-label reveal">OPEN TRACKS</div>
          <div className="intern-tracks">
            {tracks.map((track, idx) => (
              <div key={idx} className="intern-track-card reveal">
                <h3 className="intern-track-card__title">{track.title}</h3>
                <p className="intern-track-card__desc">{track.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white intern-apply-section">
        <div className="container">
          <div className="section-label reveal">APPLY NOW</div>
          <div className="intern-form-wrapper reveal">
            {submitted ? (
              <div className="intern-form__success">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="intern-form__success-icon"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <p>Application received! We'll be in touch soon.</p>
              </div>
            ) : (
              <form className="intern-form" onSubmit={handleSubmit}>
                {error && <div className="intern-form__error">{error}</div>}
                
                <div className="intern-form__group">
                  <label htmlFor="name" className="intern-form__label">Name *</label>
                  <input type="text" id="name" name="name" required className="intern-form__input" value={formData.name} onChange={handleChange} />
                </div>

                <div className="intern-form__group">
                  <label htmlFor="email" className="intern-form__label">Email *</label>
                  <input type="email" id="email" name="email" required className="intern-form__input" value={formData.email} onChange={handleChange} />
                </div>

                <div className="intern-form__group">
                  <label htmlFor="track" className="intern-form__label">Track/Role Interested In *</label>
                  <select id="track" name="track" required className="intern-form__input intern-form__select" value={formData.track} onChange={handleChange}>
                    <option value="" disabled>Select a track</option>
                    {tracks.map((t, idx) => <option key={idx} value={t.title}>{t.title}</option>)}
                  </select>
                </div>

                <div className="intern-form__group">
                  <label htmlFor="portfolio" className="intern-form__label">Portfolio/Resume Link</label>
                  <input type="url" id="portfolio" name="portfolio" className="intern-form__input" value={formData.portfolio} onChange={handleChange} placeholder="https://" />
                </div>

                <div className="intern-form__group">
                  <label htmlFor="message" className="intern-form__label">Short Message *</label>
                  <textarea id="message" name="message" required className="intern-form__input intern-form__textarea" rows="4" value={formData.message} onChange={handleChange}></textarea>
                </div>

                <button type="submit" className="btn btn--primary intern-form__btn">Submit Application</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternPage;
