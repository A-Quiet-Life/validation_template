export const siteConfig = {
  name: "DemoApp",
  description:
    "Next.js landing page + demo w/ payment rails & waitlist. Use for problem validation.",

  // Navigation
  nav: {
    demo: "/demo",
    landing: "/",
    pricing: "/pricing",
  },

  // Pricing Plans (configure with your Stripe Price IDs)
  pricing: {
    plans: [
      {
        name: "Starter",
        price: "$9",
        priceId: "price_starter_monthly", // Replace with your Stripe Price ID
        description: "Perfect for trying out",
        features: ["Feature 1", "Feature 2", "Feature 3", "Email support"],
      },
      {
        name: "Pro",
        price: "$29",
        priceId: "price_pro_monthly", // Replace with your Stripe Price ID
        description: "For serious users",
        features: [
          "Everything in Starter",
          "Advanced Feature 1",
          "Advanced Feature 2",
          "Advanced Feature 3",
          "Priority support",
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        price: "$99",
        priceId: "price_enterprise_monthly", // Replace with your Stripe Price ID
        description: "For large teams",
        features: [
          "Everything in Pro",
          "Enterprise Feature 1",
          "Enterprise Feature 2",
          "Dedicated support",
          "Custom integration",
        ],
      },
    ],
  },

  // Landing Page Content
  landing: {
    hero: {
      title: "Validate Your Product Idea",
      subtitle:
        "Build, test, and validate your product with real users before investing months of development.",
      cta: "Join Waitlist",
      secondaryCta: "View Demo",
    },
    features: [
      {
        title: "Fast Setup",
        description: "Get your validation page live in minutes, not days.",
        icon: "⚡",
      },
      {
        title: "Payment Ready",
        description:
          "Integrated Stripe checkout to validate willingness to pay.",
        icon: "💳",
      },
      {
        title: "Waitlist Built-in",
        description:
          "Capture interest with a beautiful waitlist powered by Clerk.",
        icon: "📝",
      },
      {
        title: "Mobile Optimized",
        description: "Looks great on all devices with responsive design.",
        icon: "📱",
      },
    ],
    comparison: {
      title: "Choose the Right Plan",
      features: [
        { name: "Feature A", starter: true, pro: true, enterprise: true },
        { name: "Feature B", starter: true, pro: true, enterprise: true },
        { name: "Feature C", starter: false, pro: true, enterprise: true },
        { name: "Feature D", starter: false, pro: true, enterprise: true },
        { name: "Feature E", starter: false, pro: false, enterprise: true },
        { name: "Feature F", starter: false, pro: false, enterprise: true },
      ],
    },
    faq: [
      {
        question: "How does this work?",
        answer:
          "Simply customize the template with your product idea, deploy it, and share with potential users to validate demand.",
      },
      {
        question: "Do I need coding experience?",
        answer:
          "Basic knowledge of React and Next.js is helpful, but the template is designed to be easy to customize.",
      },
      {
        question: "Can I customize the design?",
        answer:
          "Yes! The template uses Tailwind CSS, making it easy to adjust colors, spacing, and layout to match your brand.",
      },
      {
        question: "What payment methods are supported?",
        answer:
          "We integrate with Stripe, which supports all major credit cards, Apple Pay, Google Pay, and more.",
      },
    ],
  },
};

export type SiteConfig = typeof siteConfig;
