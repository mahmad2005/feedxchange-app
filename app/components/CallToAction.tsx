import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="bg-primary">
      <div className="max-w-7xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to Save on Feed Costs?</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-primary-foreground/80 max-w-2xl mx-auto">
          Join farmers across Western Canada saving time and money every day.
        </p>
        <Link href="/contact" passHref>
          <Button size="lg" className="mt-8 bg-white text-primary hover:bg-white/90">
            Get Started
          </Button>
        </Link>
      </div>
    </section>
  )
}

