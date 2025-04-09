import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import About from "./components/About"
import Features from "./components/Features"
import MarketInsights from "./components/MarketInsights"
import CallToAction from "./components/CallToAction"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Features />
        <MarketInsights />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

