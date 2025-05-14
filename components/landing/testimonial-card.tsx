interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  avatar: string
}

export default function TestimonialCard({ quote, author, role, avatar }: TestimonialCardProps) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className="text-yellow-400">
            ★
          </span>
        ))}
      </div>
      <p className="text-gray-300 mb-6 italic">"{quote}"</p>
      <div className="flex items-center">
        <img src={avatar || "/placeholder.svg"} alt={author} className="w-12 h-12 rounded-full mr-4 object-cover" />
        <div>
          <h4 className="font-bold">{author}</h4>
          <p className="text-gray-400 text-sm">{role}</p>
        </div>
      </div>
    </div>
  )
}
