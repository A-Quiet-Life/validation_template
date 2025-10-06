# Validation Template

A Next.js template for validating product ideas. Includes landing page, demo, pricing, Stripe checkout, and Clerk waitlist.

## Quick Start

```bash
# Install dependencies
npm install

# Copy environment template
cp env.template .env.local

# Add your API keys to .env.local
# - Clerk: https://dashboard.clerk.com/last-active?path=api-keys
# - Stripe: https://dashboard.stripe.com/test/apikeys

# Start development server
npm run dev
```

## Project Structure

```
validation_template/
├── app/
│   ├── page.tsx                      # Landing page (split hero, bento benefits, how it works, pricing, FAQ, waitlist)
│   ├── demo/page.tsx                 # Interactive demo (mobile/desktop toggle)
│   ├── pricing/page.tsx              # Full pricing page with Stripe checkout
│   ├── success/page.tsx              # Post-checkout success page
│   ├── layout.tsx                    # Root layout with ClerkProvider
│   └── api/create-checkout-session/  # Stripe checkout API route
├── components/
│   ├── Navbar.tsx                    # Responsive navigation with waitlist button
│   ├── PhoneMockup.tsx              # iPhone mockup for mobile demo
│   ├── PricingCards.tsx             # Reusable pricing cards (landing + pricing pages)
│   ├── BenefitCard.tsx              # Bento-style benefit cards for landing page
│   └── HowItWorksCard.tsx           # Step cards for "How it Works" section
├── lib/
│   └── stripe.ts                     # Configured Stripe SDK instance
├── config/
│   └── site.ts                       # All content configuration (pricing, features, FAQ)
├── middleware.ts                     # Clerk authentication middleware
└── env.template                      # Environment variables template
```

## Configuration

### Environment Variables

Required in `.env.local`:

```env
# Clerk (authentication & waitlist)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx
CLERK_SECRET_KEY=sk_test_xxxxx

# Stripe (payments)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
STRIPE_SECRET_KEY=sk_test_xxxxx

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Optional: Lock demo view (mobile or desktop)
# NEXT_PUBLIC_DEMO_VIEW_LOCK=desktop
```

### Content Configuration

Edit `config/site.ts` to customize:

- **App name and description**
- **Pricing plans** (add your Stripe Price IDs)
- **Landing page content** (hero, features, FAQ)
- **Feature comparison table**

```typescript
export const siteConfig = {
  name: "Your App Name",
  pricing: {
    plans: [
      {
        name: "Starter",
        price: "$9",
        priceId: "price_xxxxx", // Your Stripe Price ID
        features: ["Feature 1", "Feature 2"],
      },
    ],
  },
  landing: {
    hero: {
      title: "Your Hero Title",
      subtitle: "Your subtitle",
    },
    features: [...],
    faq: [...],
  },
};
```

### Demo Page

Customize `app/demo/page.tsx` to showcase your product:

```tsx
const DemoContent = () => (
  <div className="p-6 space-y-6">
    {/* Add your product mockup, screenshots, or interactive demo */}
  </div>
);
```

**Lock Demo View:** Set `NEXT_PUBLIC_DEMO_VIEW_LOCK=mobile` or `NEXT_PUBLIC_DEMO_VIEW_LOCK=desktop` to hide the toggle and force a specific view.

## Key Features

### Clerk Integration

- Uses `clerkMiddleware()` in `middleware.ts` (App Router approach)
- `<ClerkProvider>` wraps app in `layout.tsx`
- All routes are public by default (modify `middleware.ts` to protect routes)
- Waitlist placeholder in landing page (add Clerk Waitlist component)

### Stripe Integration

- Shared Stripe instance in `lib/stripe.ts`
- API version: `2025-09-30.clover`
- Checkout session API route at `/api/create-checkout-session`
- Test with card: `4242 4242 4242 4242`

### Responsive Design

- Mobile-first with Tailwind CSS
- Desktop/mobile toggle on demo page
- Realistic iPhone mockup component
- Responsive navbar with mobile menu

## Setup Steps

1. **Get Clerk Keys**

   - Sign up at [clerk.com](https://clerk.com)
   - Create application → Copy API keys
   - Add to `.env.local`

2. **Get Stripe Keys**

   - Sign up at [stripe.com](https://stripe.com)
   - Use test mode → Copy API keys
   - Add to `.env.local`

3. **Create Stripe Products**

   - Dashboard → Products → Add Product
   - Create pricing tiers with recurring prices
   - Copy Price IDs (starts with `price_`)
   - Add to `config/site.ts`

4. **Customize Content**
   - Edit `config/site.ts` for all text content
   - Edit `app/demo/page.tsx` for product demo
   - Modify colors in Tailwind config or find/replace color classes

## Using the Stripe Module

```typescript
import { stripe } from "@/lib/stripe";

// Create checkout session
const session = await stripe.checkout.sessions.create({...});

// Create customer
const customer = await stripe.customers.create({
  email: "customer@example.com",
});

// List products
const products = await stripe.products.list();
```

## Deployment

### Vercel (Recommended)

```bash
# Deploy to Vercel
vercel

# Or connect GitHub repo at vercel.com
# Add environment variables in Vercel dashboard
# Use production keys (pk_live_xxx, sk_live_xxx)
```

### Environment Variables for Production

Set these in your hosting platform:

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` (use `pk_live_xxx`)
- `CLERK_SECRET_KEY` (use `sk_live_xxx`)
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` (use `pk_live_xxx`)
- `STRIPE_SECRET_KEY` (use `sk_live_xxx`)
- `NEXT_PUBLIC_APP_URL` (your production domain)

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Clerk** - Authentication and waitlist
- **Stripe** - Payment processing
- **Lucide React** - Icon library

## Commands

```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run start  # Start production server
npm run lint   # Run ESLint
```

## Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Clerk Next.js Quickstart](https://clerk.com/docs/quickstarts/nextjs)
- [Stripe API Reference](https://stripe.com/docs/api)
- [Tailwind CSS](https://tailwindcss.com/docs)

## Additional Files

- **CLERK_INTEGRATION.md** - Detailed Clerk setup guide
- **ENVIRONMENT.md** - Environment configuration guide
- **lib/README.md** - Stripe module usage

## License

ISC License - Use freely for your projects.

---

Built for entrepreneurs who want to validate before they build.
