import Header from "../components/Header"
import Footer from "../components/Footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, MessageSquare, Truck, Package, FileText, TrendingUpDown } from "lucide-react"
import Link from "next/link"
import ParallaxSection from "../components/ParallaxSection"
import Image from "next/image"

export default function ForBrokersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-gray-50 py-12 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-primary mb-6">Simplify Your Business, Maximize Your Reach</h2>
            <p className="text-xl text-gray-700 mb-8">
              We get it—managing customers, suppliers, logistics, and contracts while keeping up with market
              fluctuations is no small task. That's why FeedXchange is here to simplify your business and connect you
              with a growing network of farmers actively searching for feed solutions.
            </p>
          </div>
        </section>

        <ParallaxSection 
          imageSrc="/silos.jpg"
          imageAlt="Agricultural silos at sunset"
          overlayOpacity={40}
        />

        <section className="py-12 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">A Smarter Way to Manage Your Feed Business</h2>
            <p className="text-xl text-gray-700 mb-8">
              FeedXchange gives brokers and sellers the tools to streamline operations and stay ahead of the
              competition—all in one place:
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Access to More Buyers",
                  description: "Instantly connect with farmers across Western Canada who are ready to buy.",
                  icon: Users,
                },
                {
                  title: "Customer Management",
                  description:
                    "Easily organize and engage with clients to build lasting relationships and drive repeat business.",
                  icon: Users,
                },
                {
                  title: "Instant Messaging",
                  description:
                    "Handle inquiries, negotiations, and orders seamlessly with our built-in communication tools.",
                  icon: MessageSquare,
                },
                {
                  title: "Supplier Coordination",
                  description:
                    "Source and compare feed options from multiple suppliers, to simplify offering your customers the best deals.",
                  icon: Users,
                },
                {
                  title: "Inventory Tracking",
                  description: "Monitor stock levels in real-time to meet demand without delays.",
                  icon: Package,
                },
/*                 {
                  title: "Logistics Management",
                  description: "Optimize transportation, track shipments, and coordinate deliveries effortlessly.",
                  icon: Truck,
                }, */
                {
                  title: "Predictive Analytics",
                  description: "Gain insights into customer buying patterns and forecast future demand to stay ahead of the market.",
                  icon: TrendingUpDown,
                },
              ].map((feature, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <feature.icon className="h-6 w-6 text-primary mr-2" />
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
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">Expand Your Reach and Grow Your Business</h2>
            <p className="text-xl text-gray-700 mb-6">
              FeedXchange isn't just a management tool—it's a growth engine. By joining, you'll gain:
            </p>
            <ul className="list-disc list-inside text-xl text-gray-700 mb-8 space-y-4">
              <li>
                Increased Trust and Transparency: Showcase clear pricing and reliable service to build your reputation
                as a trusted supplier.
              </li>
              <li>
                Scalable Growth: Expand your customer base and streamline your operations with a platform built for
                sustainable growth.
              </li>
            </ul>
          </div>
        </section>

        {/* Static Finance Image Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <Image
            src="/finance-8836902_1920.jpg"
            alt="Financial data and analytics"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30" />
        </section>

        <section className="py-12 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">Why Brokers & Sellers Love FeedXchange</h2>
            <p className="text-xl text-gray-700 mb-6">We take the complexity out of feed sales by offering:</p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Time-Saving Efficiency",
                  description: "Eliminate the hassle of juggling multiple platforms—manage everything in one place.",
                },
                {
                  title: "More Sales Opportunities",
                  description: "Tap into a growing network of farmers ready to purchase.",
                },
                {
                  title: "A Competitive Edge",
                  description: "Deliver better service and faster response times with streamlined processes.",
                },
                {
                  title: "Stronger Relationships",
                  description:
                    "Stay organized and provide exceptional service with our tools for communication and management.",
                },
              ].map((benefit, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="h-6 w-6 text-primary mr-2" />
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-primary text-white text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold mb-6">Take Your Feed Business to the Next Level</h2>
            <p className="text-xl mb-8">Join FeedXchange today and unlock a smarter way to grow your business.</p>
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

