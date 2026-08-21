export const teamMembers = [
  {
    id: 'lorenzo-francisco',
    name: 'Lorenzo Francisco',
    role: 'Founder & Growth Operations Strategist',
    image: '/Enzo 4_5 Photo_Growth Catalyst.png',
    tagline: 'Architecting high-growth systems and operational infrastructure for modern enterprises.',
    bio: 'Lorenzo Francisco is the Founder and Growth Operations Strategist at Growth Catalyst Studio. With extensive experience in organizational scaling, process optimization, and growth strategy, Lorenzo specializes in turning complex operational challenges into streamlined engines for sustainable revenue. He believes that true growth occurs at the intersection of robust operational frameworks, empowered talent, and data-backed execution.',
    bibliography: [
      'Founded Growth Catalyst Studio to empower businesses with scalable growth systems and strategic clarity.',
      'Pioneered proprietary Growth Operations (GrowthOps) methodologies integrating marketing, sales, and operations.',
      'Advised and scaled operations for high-growth ventures across technology, professional services, and e-commerce.',
      'Mentored over 50+ emerging strategists and business leaders in organizational efficiency and leadership.'
    ],
    expertise: [
      'Growth Operations & Architecture',
      'Strategic Business Scaling',
      'Process & Workflow Automation',
      'Revenue Engine Optimization',
      'Executive & Organizational Leadership'
    ],
    quote: 'Growth isn\'t just about moving fast—it\'s about building resilient systems that allow high performance to be repeatable and sustainable.',
    education: 'B.S. in Business Administration & Operational Strategy',
    experienceYears: '8+ Years Experience',
    linkedin: 'https://linkedin.com',
    email: 'lorenzo@growthcatalyst.studio'
  },
  {
    id: 'lyka-bernandez',
    name: 'Lyka Bernandez',
    role: 'Growth Catalyst Brand Specialist',
    image: '/Lyka 4_5 Photo_Growth Catalyst.png',
    tagline: 'Crafting distinctive brand identities and compelling narrative experiences that drive market resonance.',
    bio: 'Lyka Bernandez leads Brand Strategy and Creative Direction at Growth Catalyst Studio. Bringing a sharp creative vision and strategic positioning expertise, Lyka helps organizations discover their authentic voice, refine visual identities, and build high-impact brand narratives that captivate audiences and establish long-term market authority.',
    bibliography: [
      'Spearheaded multi-channel brand transformations for high-growth tech startups and established corporate brands.',
      'Developed comprehensive brand design systems, tone-of-voice frameworks, and visual identity guidelines.',
      'Curated content strategies that increased brand engagement and emotional resonance across key demographics.',
      'Passionate advocate for human-centered design principles and story-first brand communication.'
    ],
    expertise: [
      'Brand Strategy & Positioning',
      'Visual Identity & Design Systems',
      'Creative Direction',
      'Brand Narrative & Copywriting',
      'UX/UI Alignment & Experience Design'
    ],
    quote: 'A great brand doesn\'t just get noticed—it creates emotional clarity and builds lasting trust in every single touchpoint.',
    education: 'B.A. in Creative Media & Brand Communication',
    experienceYears: '6+ Years Experience',
    linkedin: 'https://linkedin.com',
    email: 'lyka@growthcatalyst.studio'
  },
  {
    id: 'clint-navarro',
    name: 'Clint Navarro',
    role: 'Growth Catalyst Media Specialist',
    image: '/Clint 4_5 Photo_Growth Catalyst.png',
    tagline: 'Driving multi-platform content production, media strategy, and high-engagement digital reach.',
    bio: 'Clint Navarro is the Media Specialist at Growth Catalyst Studio. Focusing on high-conversion media production, video strategy, and performance content distribution, Clint crafts visual media strategies that elevate brand visibility and turn passive viewers into active brand advocates across modern digital channels.',
    bibliography: [
      'Engineered end-to-end digital media campaigns achieving multi-million impression reach across digital ecosystems.',
      'Produced high-production corporate media assets, strategic video series, and performance creatives.',
      'Pioneered video-first acquisition funnels that significantly improved audience retention and conversion rates.',
      'Specializes in algorithmic distribution, short-form visual storytelling, and media performance analytics.'
    ],
    expertise: [
      'Digital Media & Video Production',
      'Multi-Platform Content Strategy',
      'Performance Media Distribution',
      'Visual Storytelling & Motion',
      'Media Analytics & Campaign Optimization'
    ],
    quote: 'Media is the bridge between a company\'s message and the audience\'s attention—make every single frame count.',
    education: 'B.S. in Digital Film & Multimedia Production',
    experienceYears: '5+ Years Experience',
    linkedin: 'https://linkedin.com',
    email: 'clint@growthcatalyst.studio'
  }
];

export const getMemberById = (id) => {
  return teamMembers.find(member => member.id === id);
};
