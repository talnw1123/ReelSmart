import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  color: string
}

export default function FeatureCard({ icon, title, description, color }: FeatureCardProps) {
  const getBgColor = () => {
    switch (color) {
      case "blue":
        return "bg-blue-600/10 border-blue-600/30"
      case "green":
        return "bg-green-600/10 border-green-600/30"
      case "purple":
        return "bg-purple-600/10 border-purple-600/30"
      case "amber":
        return "bg-amber-600/10 border-amber-600/30"
      default:
        return "bg-gray-800 border-gray-700"
    }
  }

  return (
    <div className={`rounded-xl p-6 border ${getBgColor()} hover:scale-105 transition-transform duration-300`}>
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}
