import { CheckCircle } from "lucide-react"
import Image from "next/image"

export default function Features() {
  const features = [
    {
      title: "Lowest Prices",
      description: "Compare the best deals on byproduct feeds from suppliers across Western Canada — instantly.",
    },
    {
      title: "Save Time",
      description:
        "Skip the endless phone calls with brokers, searching for what you need. Our platform connects you directly to the brokers who have the product you want.",
    },
    {
      title: "Market Insights",
      description:
        "Stay ahead of trends with the latest feed market data to make smarter, more informed purchasing decisions.",
    },
    {
      title: "Simplified Buying",
      description: "Easily place orders, manage contracts, and track deliveries, all in one streamlined dashboard.",
    },
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Why Farmers Choose Us
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.title} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <CheckCircle className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-20 relative w-full h-[400px] bg-white">
          <Image
            src="/3 phones.png"
            alt="Three phones showing FeedXchange app interface"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  )
}

