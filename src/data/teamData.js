const base = import.meta.env.BASE_URL;

export const teamMembers = [
  {
    id: 'lorenzo-francisco',
    name: 'Lorenzo Francisco',
    role: 'Founder & Growth Operations Strategist',
    image: `${base}Enzo 4_5 Photo_Growth Catalyst.png`,
    tagline: 'Architecting high-growth systems and operational infrastructure for modern enterprises.',
    bio: 'Lorenzo Francisco is the Founder and Growth Operations Strategist at Growth Catalyst Global. With extensive experience in organizational scaling, process optimization, and growth strategy, Lorenzo specializes in turning complex operational challenges into streamlined engines for sustainable revenue. He believes that true growth occurs at the intersection of robust operational frameworks, empowered talent, and data-backed execution.',
    bibliography: [
      'Founded Growth Catalyst Global to empower businesses with scalable growth systems and strategic clarity.',
      'Pioneered proprietary Growth Operations (GrowthOps) methodologies integrating marketing, sales, and operations.',
      'Advised and scaled operations for high-growth ventures across technology, professional services, and e-commerce.',

    ],
    expertise: [
      'Growth Operations & Architecture',
      'Strategic Business Scaling',
      'Process & Workflow Automation',
      'Revenue Engine Optimization',
      'Executive & Organizational Leadership'
    ],
    quote: 'Growth isn\'t just about moving fast, it\'s about building resilient systems that allow high performance to be repeatable and sustainable.',
    education: 'Automation & SEO Specialist',
    experienceYears: '2 years Experience',
    linkedin: 'https://linkedin.com',
    email: 'lorenzo@growthcatalyst.studio'
  },
  {
    id: 'lyka-bernandez',
    name: 'Angelika Bernadez',
    role: 'Growth Catalyst Brand Specialist',
    image: `${base}Lyka 4_5 Photo_Growth Catalyst.png`,
    tagline: 'Clarity in operations. Creativity in content. Confidence in growth.',
    bio: 'Angelika Bernadez is the reliable backend support behind organized operations and consistent content at Growth Catalyst. Combining administrative precision with a creative eye, Angelika helps startups, small businesses, and solo entrepreneurs stay organized, produce impactful content, and streamline digital workflows, using AI-assisted tools alongside careful human review to keep every output accurate and on-brand.',
    bibliography: [
      'Organized 10,000+ TikTok affiliate profiles and generated 8,165+ creator leads through research and data management.',
      'Delivered administrative, creative, and workflow support across e-commerce, coaching, architecture, and agency clients.',
      'Produced graphics, presentations, newsletters, and marketing materials while improving workflows to reduce repetitive tasks without sacrificing accuracy or quality.'
    ],
    expertise: [
      'Brand Operations & Support',
      'Creative Content & Graphics',
      'Workflow & Process Optimization',
      'Data Research & Lead Generation',
      'AI-Assisted Content Production'
    ],
    quote: 'I believe AI works best when combined with human judgment and creativity, using it to support research and content, then applying critical thinking to make sure the final output is accurate, relevant, and aligned with each client\'s goals.',
    education: 'B.F.A. in Advertising Arts',
    experienceYears: '3+ Years Experience',
    linkedin: 'https://linkedin.com',
    email: 'angelika@growthcatalyst.studio'
  },
  {
    id: 'growth-specialist',
    name: 'Kevin Nacague',
    role: 'Business Development Specialist',
    image: null,
    tagline: 'Expanding strategic boundaries and driving client growth acceleration.',
    bio: 'Specializing in strategic scaling, high-impact acquisition funnels, and data-informed execution, this specialist collaborates closely with cross-functional teams to identify and unlock rapid growth levers across evolving digital landscapes.',
    bibliography: [
      'Spearheading scalable growth sprint initiatives and multi-channel campaign architectures.',
      'Formulating data-backed customer acquisition and retention frameworks.',
      'Executing cross-functional growth experiments to optimize key performance metrics.',
      'Developing data visualization dashboards to drive executive-level decision making.'
    ],
    expertise: [
      'Growth Strategy & Funnels',
      'Data Analytics & Metrics',
      'Customer Acquisition',
      'Conversion Rate Optimization',
      'Strategic Experimentation'
    ],
    quote: 'Sustainable growth is built by turning strategic insight into relentless, disciplined execution.',
    education: 'B.S. in Business & Growth Analytics',
    experienceYears: '5+ Years Experience',
    linkedin: 'https://linkedin.com',
    email: 'specialist@growthcatalyst.studio'
  },
  {
    id: 'creative-specialist',
    name: 'Jeune Senarlo',
    role: 'Client Success & Operation Specialist',
    image: null,
    tagline: 'Transforming creative ideas into high-converting visual systems.',
    bio: 'Dedicated to elevating digital experiences and crafting impactful visual narratives, this specialist develops compelling multi-channel creative systems that build authority and deeply resonate with modern audiences.',
    bibliography: [
      'Designing end-to-end visual systems and digital brand touchpoints for emerging ventures.',
      'Creating high-converting creative assets and responsive interactive experiences.',
      'Aligning aesthetic innovation with user experience and business performance metrics.',
      'Curating dynamic digital design libraries and responsive UI/UX design systems.'
    ],
    expertise: [
      'Visual & UI/UX Design',
      'Motion & Visual Storytelling',
      'Brand Identity Systems',
      'Creative Production',
      'Digital Experience Strategy'
    ],
    quote: 'Exceptional design is not just what it looks like—it is how effortlessly it connects and converts.',
    education: 'B.A. in Visual Arts & Digital Design',
    experienceYears: '4+ Years Experience',
    linkedin: 'https://linkedin.com',
    email: 'creative@growthcatalyst.studio'
  }
];

export const getMemberById = (id) => {
  return teamMembers.find(member => member.id === id);
};
