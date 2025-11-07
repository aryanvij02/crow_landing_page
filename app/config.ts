export const config = {
  company: {
    name: 'Crow',
    tagline: 'From Deal Chaos to Clarity in Minutes',
    description: "Crow is your AI underwriting copilot that reads offering memorandums, rent rolls, financial statements, and even email threads—turning them into complete, investor-ready underwriting models built around how you think."
  },
  ctaLinks: {
    bookDemo: '#book-demo',
    joinWaitlist: '#join-waitlist',
    howItWorks: '#how-it-works'
  }
} as const;

// Helper to get CTA links with type safety
export const getCTALink = (type: keyof typeof config.ctaLinks) => {
  return config.ctaLinks[type];
}; 