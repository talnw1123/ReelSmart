import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PricingCardProps {
  title: string
  price: string
  period?: string
  description: string
  features: string[]
  buttonText: string
  buttonVariant: "default" | "outline"
  popular?: boolean
}

export default function PricingCard({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  buttonVariant,
  popular = false,
}: PricingCardProps) {
  return (
    <div
      className={`rounded-xl p-6 ${popular ? "bg-blue-600/20 border-blue-500" : "bg-gray-800 border-gray-700"} border relative`}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
          แนะนำ
        </div>
      )}

      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>

      <div className="mb-6">
        <span className="text-4xl font-bold">฿{price}</span>
        {period && <span className="text-gray-400 ml-2">{period}</span>}
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle2 className={`h-5 w-5 mr-2 ${popular ? "text-blue-400" : "text-green-400"} shrink-0 mt-0.5`} />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        className={`w-full ${buttonVariant === "default" ? "bg-blue-600 hover:bg-blue-700" : "border-white text-white hover:bg-white/10"}`}
        variant={buttonVariant}
      >
        {buttonText}
      </Button>
    </div>
  )
}
