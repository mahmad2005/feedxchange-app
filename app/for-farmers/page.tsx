import Header from "../components/Header"
import Footer from "../components/Footer"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import ParallaxSection from "../components/ParallaxSection"
import Image from "next/image"

export default function ForFarmersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-gray-50 py-12 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-primary mb-6">Empowering You to Save Time and Money</h2>
            <p className="text-xl text-gray-700 mb-8">
            Farming isn’t just your job—it’s your way of life. Between managing operations, caring for animals, and making financial decisions, you have enough to worry about.  Sourcing affordable feed shouldn’t be another stressor. That’s where FeedXchange steps in.
            </p>

          </div>
        </section>

        <section className="relative h-[60vh] overflow-hidden">
          <Image
            src="/black cow.jpg"
            alt="Black cow in a farm field"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30" />
        </section>

        <section className="py-12 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Lowest Prices",
                  description:
                    "Instantly compare competitive prices on byproduct feeds like canola meal and DDGS from suppliers across Western Canada. No guesswork, no overpaying—just transparent, real-time pricing.",
                },
                {
                  title: "Time-Saving Convenience",
                  description:
                    "Skip the endless broker calls and emails. Connect directly to the brokers who have the product you want. Manage everything from price comparisons to contracts on one easy-to-use platform.",
                },
                {
                  title: "Trusted Market Insights",
                  description:
                    "Make informed decisions with real-time data and expert analysis, so you can lock in the best prices at the right time.",
                },
                {
                  title: "Seamless Ordering & Tracking",
                  description:
                    "Place orders, track deliveries, and manage contracts effortlessly—no more paperwork headaches.",
                },
              ].map((feature, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="h-6 w-6 text-primary mr-2" />
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-12 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">Why Farmers Trust FeedXchange</h2>
            <p className="text-xl text-gray-700 mb-6">
              We've been in your boots, and we know the challenges you face. FeedXchange was built to help farmers:
            </p>
            <ul className="list-disc list-inside text-xl text-gray-700 mb-8 space-y-4">
              <li>Reduce costs and boost profitability with competitive pricing.</li>
              <li>Simplify the feed-buying process with a hassle-free digital solution.</li>
              <li>Make smarter decisions using real-time market data.</li>
              <li>Focus on what truly matters—running your farm and caring for your animals.</li>
            </ul>
            <p className="text-xl text-gray-700 mb-8">
              Whether you're raising dairy cows, beef, poultry, or hogs, FeedXchange gives you the tools to optimize
              your feed sourcing and keep your farm running smoothly.
            </p>
          </div>
        </section>

        {/* Static Calf Image Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <Image
            src="/Calf.jpg"
            alt="Young calf in a farm field"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30" />
        </section>

        <section className="py-12 md:py-24 bg-primary text-white text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold mb-6">Take Control of Your Feed Costs</h2>
            <p className="text-xl mb-8">Experience the FeedXchange advantage today.</p>
            <Link href="/contact" passHref>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Sign Up Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

