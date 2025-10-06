"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import PhoneMockup from "@/components/PhoneMockup";
import { Monitor, Smartphone } from "lucide-react";

// Get locked view mode from environment variable
const LOCKED_VIEW_MODE = process.env.NEXT_PUBLIC_DEMO_VIEW_LOCK as "mobile" | "desktop" | undefined;

export default function DemoPage() {
  const [viewMode, setViewMode] = useState<"mobile" | "desktop">(LOCKED_VIEW_MODE || "desktop");
  const isLocked = !!LOCKED_VIEW_MODE;

  // Demo content that will be shown in both views
  const DemoContent = () => (
    <div className="p-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Welcome to Demo</h1>
        <p className="text-gray-600">
          Customize this page to showcase your product mockup
        </p>
      </div>

      {/* Feature Cards */}
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Feature Highlight</h3>
          <p className="text-blue-50">
            Showcase your main feature here with engaging visuals
          </p>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-2 text-gray-900">
            Interactive Demo
          </h3>
          <p className="text-gray-600 mb-4">
            Add interactive elements to let users experience your product
          </p>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Try It Now
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <div className="text-2xl mb-2">✨</div>
            <h4 className="font-semibold text-gray-900 text-sm">Easy Setup</h4>
            <p className="text-gray-600 text-xs mt-1">Get started quickly</p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <div className="text-2xl mb-2">🚀</div>
            <h4 className="font-semibold text-gray-900 text-sm">Fast</h4>
            <p className="text-gray-600 text-xs mt-1">Lightning speed</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 rounded-2xl p-6 text-center text-white">
        <h3 className="text-xl font-semibold mb-2">Ready to get started?</h3>
        <p className="text-gray-300 mb-4">
          Join thousands of users already using our product
        </p>
        <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
          Sign Up Free
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-2xl font-bold text-blue-600">10K+</div>
          <div className="text-xs text-gray-600">Users</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-green-600">99%</div>
          <div className="text-xs text-gray-600">Satisfaction</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-purple-600">24/7</div>
          <div className="text-xs text-gray-600">Support</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        {/* View Toggle - Only show if not locked */}
        {!isLocked && (
          <div className="flex justify-center mb-6">
            <div className="inline-flex rounded-md border border-gray-300 bg-white p-0.5 shadow-sm">
              <button
                onClick={() => setViewMode("desktop")}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md transition-all text-sm ${
                  viewMode === "desktop"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Monitor size={14} />
                <span className="font-medium">Desktop</span>
              </button>
              <button
                onClick={() => setViewMode("mobile")}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md transition-all text-sm ${
                  viewMode === "mobile"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Smartphone size={14} />
                <span className="font-medium">Mobile</span>
              </button>
            </div>
          </div>
        )}

        {/* Content Display */}
        <div className="flex justify-center">
          {viewMode === "desktop" ? (
            <div className="w-full max-w-7xl bg-white rounded-2xl shadow-lg overflow-hidden">
              <DemoContent />
            </div>
          ) : (
            <PhoneMockup>
              <DemoContent />
            </PhoneMockup>
          )}
        </div>
      </div>
    </div>
  );
}
