import { ReactNode } from "react";

interface HowItWorksCardProps {
  step: number;
  title: string;
  description: string;
  icon: ReactNode;
}

export default function HowItWorksCard({
  step,
  title,
  description,
  icon,
}: HowItWorksCardProps) {
  return (
    <div className="relative glass-effect rounded-2xl p-8 border-2 border-gray-300 hover:border-blue-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
      {/* Icon */}
      <div className="text-blue-600 mb-6">{icon}</div>

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>

      {/* Hover glow effect */}
      <div className="absolute -inset-px bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none -z-10" />
    </div>
  );
}
