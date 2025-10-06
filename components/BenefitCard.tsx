import { ReactNode } from "react";

interface BenefitCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
}

export default function BenefitCard({
  title,
  description,
  icon,
  className = "",
}: BenefitCardProps) {
  return (
    <div
      className={`group relative glass-effect rounded-2xl p-6 border-2 border-gray-300 hover:border-blue-400 hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden ${className}`}
    >
      <div className="flex flex-col h-full">
        <div className="text-blue-600 mb-4">{icon}</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="absolute -inset-px bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none" />
    </div>
  );
}
