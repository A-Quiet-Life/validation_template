"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PricingCards from "@/components/PricingCards";
import BenefitCard from "@/components/BenefitCard";
import HowItWorksCard from "@/components/HowItWorksCard";
import { siteConfig } from "@/config/site";
import {
  ChevronDown,
  ChevronUp,
  Zap,
  Shield,
  Target,
  Users,
  TrendingUp,
  Heart,
  Sparkles,
  CheckCircle,
  Rocket,
  ClipboardList,
  Send,
  BarChart,
} from "lucide-react";
import { Waitlist } from "@clerk/nextjs";

export default function LandingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Split Layout */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-100 via-indigo-100/70 to-purple-100/80 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-200/60 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-200/50 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Hero Text */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="inline-flex items-center space-x-2 px-4 py-2 glass-effect rounded-full text-blue-700 text-sm font-medium shadow-lg">
                <Sparkles size={16} />
                <span>Validate before you build</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {siteConfig.landing.hero.title}
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                {siteConfig.landing.hero.subtitle}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#pricing"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  See Plans
                  <Rocket className="ml-2" size={20} />
                </Link>
                <a
                  href="#waitlist"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-blue-500 hover:bg-gray-50 transition-all"
                >
                  Join Waitlist
                  <Send className="ml-2" size={20} />
                </a>
              </div>

              {/* Social Proof */}
              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">
                    Products Validated
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Right: Hero Box */}
            <div className="relative animate-slide-in-right delay-200">
              <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-3xl p-8 shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-all duration-300 animate-float">
                <div className="absolute inset-0 bg-grid-pattern opacity-10 rounded-3xl"></div>
                <div className="relative space-y-6">
                  <div className="glass-dark rounded-2xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">
                          Fast Setup
                        </h3>
                        <p className="text-blue-100 text-sm">
                          Launch your validation page in hours, not weeks
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="glass-dark rounded-2xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <BarChart className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">
                          Real Data
                        </h3>
                        <p className="text-blue-100 text-sm">
                          Get actual metrics on demand before building
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="glass-dark rounded-2xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <Target className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">
                          Make Decisions
                        </h3>
                        <p className="text-blue-100 text-sm">
                          Build what users actually want and will pay for
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Bento Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built-in tools and features to validate your product idea
            </p>
          </div>

          {/* Bento Grid: 3 rows with different layouts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-scale-in delay-200">
            {/* Row 1 */}
            <BenefitCard
              title="Lightning Fast"
              description="Deploy in minutes, not days. Get your validation page live instantly."
              icon={<Zap size={32} />}
              className="md:col-span-1"
            />
            <BenefitCard
              title="Payment Ready"
              description="Stripe integration out of the box. Test willingness to pay."
              icon={<Shield size={32} />}
              className="md:col-span-1"
            />
            <BenefitCard
              title="Built-in Analytics"
              description="Track every interaction and conversion automatically."
              icon={<BarChart size={32} />}
              className="md:col-span-1"
            />

            {/* Row 2 - Different sizes */}
            <BenefitCard
              title="Waitlist Management"
              description="Capture early interest with Clerk's powerful waitlist component. Build your launch list."
              icon={<Users size={32} />}
              className="lg:col-span-2 md:row-span-1"
            />
            <BenefitCard
              title="Mobile Optimized"
              description="Perfect on any device with responsive design."
              icon={<Target size={32} />}
              className="lg:col-span-1"
            />

            {/* Row 3 */}
            <BenefitCard
              title="Easy Customization"
              description="Single config file controls all content. No hunting through code."
              icon={<Sparkles size={32} />}
              className="md:col-span-1"
            />
            <BenefitCard
              title="Growth Focused"
              description="Optimize for conversions with built-in best practices."
              icon={<TrendingUp size={32} />}
              className="md:col-span-1"
            />
            <BenefitCard
              title="Support Included"
              description="Documentation and examples to get you started fast."
              icon={<Heart size={32} />}
              className="md:col-span-1"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to validate your product idea
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-scale-in delay-200">
            <HowItWorksCard
              step={1}
              title="Customize Your Page"
              description="Update the config file with your product details, pricing, and features. No complex setup required."
              icon={<ClipboardList size={40} />}
            />
            <HowItWorksCard
              step={2}
              title="Launch & Share"
              description="Deploy to Vercel or any host in minutes. Share your validation page with potential users."
              icon={<Rocket size={40} />}
            />
            <HowItWorksCard
              step={3}
              title="Collect Data"
              description="Track signups, measure interest, and test pricing. Make informed decisions before building."
              icon={<BarChart size={40} />}
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that's right for you. Start validating today.
            </p>
          </div>

          <div className="animate-scale-in delay-200">
            <PricingCards showCheckout={false} />
          </div>

          <div className="text-center mt-12">
            <Link
              href="/pricing"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 text-lg"
            >
              View full pricing details →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">Everything you need to know</p>
          </div>
          <div className="space-y-4 animate-fade-in delay-200">
            {siteConfig.landing.faq.map((faq, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition-colors"
              >
                <button
                  onClick={() =>
                    setOpenFaqIndex(openFaqIndex === index ? null : index)
                  }
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section
        id="waitlist"
        className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-600/20 via-transparent to-transparent"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Clerk Waitlist Component */}
          <div className="max-w-4xl mx-auto">
            <Waitlist
              appearance={{
                elements: {
                  rootBox: {
                    width: "100%",
                    minHeight: "500px",
                  },
                  cardBox: {
                    width: "100%",
                    padding: "none",
                  },
                  card: {
                    backgroundColor: "white",
                    padding: "3rem 2.5rem",
                    borderRadius: "1.5rem",
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    border: "1px solid rgba(226, 232, 240, 0.8)",
                  },
                  form: {
                    gap: "0.5rem",
                  },
                  formButtonPrimary: {
                    backgroundColor: "#2563eb",
                    fontSize: "1rem",
                    fontWeight: "600",
                    padding: "1rem 1.5rem",
                    minHeight: "3.5rem",
                    marginTop: "1.5rem",
                    borderRadius: "0.75rem",
                    boxShadow:
                      "0 4px 6px -1px rgba(37, 99, 235, 0.3), 0 2px 4px -1px rgba(37, 99, 235, 0.2)",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      backgroundColor: "#1d4ed8",
                      transform: "translateY(-1px)",
                      boxShadow:
                        "0 6px 10px -1px rgba(37, 99, 235, 0.4), 0 4px 6px -1px rgba(37, 99, 235, 0.3)",
                    },
                    "&:active": {
                      transform: "translateY(0)",
                    },
                  },
                  formFieldInput: {
                    fontSize: "1rem",
                    padding: "1rem 1.25rem",
                    minHeight: "3.5rem",
                    borderRadius: "0.75rem",
                    border: "2px solid #e2e8f0",
                    backgroundColor: "#f8fafc",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      borderColor: "#cbd5e1",
                      backgroundColor: "white",
                    },
                    "&:focus": {
                      borderColor: "#2563eb",
                      backgroundColor: "white",
                      boxShadow: "0 0 0 3px rgba(37, 99, 235, 0.1)",
                      outline: "none",
                    },
                  },
                  formFieldLabel: {
                    marginBottom: "0.5rem",
                    fontSize: "0.95rem",
                    fontWeight: "600",
                    color: "#1e293b",
                  },
                  headerTitle: {
                    fontSize: "2rem",
                    fontWeight: "700",
                    marginBottom: "0.75rem",
                    color: "#0f172a",
                    letterSpacing: "-0.025em",
                  },
                  headerSubtitle: {
                    fontSize: "1.0625rem",
                    marginBottom: "2rem",
                    lineHeight: "1.7",
                    color: "#64748b",
                    fontWeight: "400",
                  },
                  footer: {
                    display: "none",
                    marginTop: "2rem",
                    paddingTop: "1.5rem",
                    borderTop: "1px solid #e2e8f0",
                  },
                },
              }}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-300 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <p className="text-sm">© 2025 {siteConfig.name}.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
