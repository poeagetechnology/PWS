export const plans = [
  {
    name: "Starter",
    monthly: 25000,
    yearly: 240000,
    tagline: "For small businesses starting online",
    features: [
      { name: "Website maintenance", available: true },
      { name: "SEO setup", available: true },
      { name: "Performance optimization", available: true },
      { name: "Monthly report", available: true },
      { name: "Priority support", available: false },
      { name: "Automation systems", available: false }
    ]
  },

  {
    name: "Professional",
    monthly: 60000,
    yearly: 600000,
    tagline: "Growing businesses scaling traffic",
    highlighted: true,
    features: [
      { name: "Website maintenance", available: true },
      { name: "SEO strategy", available: true },
      { name: "Performance engineering", available: true },
      { name: "Conversion optimization", available: true },
      { name: "Priority support", available: true },
      { name: "Automation systems", available: false }
    ]
  },

  {
    name: "Enterprise",
    price: "Custom",
    tagline: "Large organizations with complex needs",
    features: [
      { name: "Website infrastructure", available: true },
      { name: "Performance engineering", available: true },
      { name: "Automation systems", available: true },
      { name: "Dedicated account manager", available: true },
      { name: "24/7 support", available: true },
      { name: "Custom integrations", available: true }
    ]
  }
];

export const pricingFaq = [
  {
    q: "What's the contract length?",
    a: "Starter and Professional plans are monthly with no long-term lock-in."
  },
  {
    q: "Can I upgrade or downgrade?",
    a: "Yes. You can change plans anytime."
  },
  {
    q: "Do you offer refunds?",
    a: "Yes. We offer a 30-day money-back guarantee."
  },
  {
    q: "Is onboarding included?",
    a: "Yes. All plans include onboarding."
  },
  {
    q: "Can I customize a plan?",
    a: "Enterprise plans are fully customizable."
  }
];