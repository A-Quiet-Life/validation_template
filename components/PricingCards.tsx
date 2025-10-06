"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Loader2 } from "lucide-react";
import { siteConfig } from "@/config/site";

interface PricingCardsProps {
  showCheckout?: boolean;
}

export default function PricingCards({
  showCheckout = false,
}: PricingCardsProps) {
  const [loading, setLoading] = useState<string | null>(null);

  const handleCheckout = async (priceId: string) => {
    setLoading(priceId);

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceId }),
      });

      const { url, error } = await response.json();

      if (error) {
        console.error("Error creating checkout session:", error);
        return;
      }

      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error("Checkout error:", error);
      setLoading(null);
    }
  };

  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {siteConfig.pricing.plans.map((plan, index) => (
        <div
          key={index}
          className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
            plan.popular
              ? "border-4 border-blue-600 transform scale-105"
              : "border-2 border-gray-200"
          }`}
        >
          {plan.popular && (
            <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
              Most Popular
            </div>
          )}

          <div className="p-8">
            {/* Plan Header */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-600 text-sm">{plan.description}</p>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline">
                <span className="text-5xl font-bold text-gray-900">
                  {plan.price}
                </span>
                <span className="text-gray-600 ml-2">/month</span>
              </div>
            </div>

            {/* CTA Button */}
            {showCheckout ? (
              <button
                onClick={() => handleCheckout(plan.priceId)}
                disabled={loading !== null}
                className={`w-full py-3 rounded-lg font-semibold transition-all mb-6 flex items-center justify-center ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {loading === plan.priceId ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={20} />
                    Processing...
                  </>
                ) : (
                  "Start Free Trial"
                )}
              </button>
            ) : (
              <Link
                href="/pricing"
                className={`w-full py-3 rounded-lg font-semibold transition-all mb-6 flex items-center justify-center ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                Get Started
              </Link>
            )}

            {/* Features List */}
            <div className="space-y-3">
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
