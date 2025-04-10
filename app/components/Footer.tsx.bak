import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--footer))] text-[hsl(var(--footer-foreground))]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div>
              <h3 className="text-sm font-semibold text-[hsl(var(--footer-foreground))] opacity-80 tracking-wider uppercase">Navigation</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="/" className="text-base text-[hsl(var(--footer-foreground))] opacity-80 hover:opacity-100">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-base text-[hsl(var(--footer-foreground))] opacity-80 hover:opacity-100">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/for-farmers" className="text-base text-[hsl(var(--footer-foreground))] opacity-80 hover:opacity-100">
                    For Farmers
                  </Link>
                </li>
                <li>
                  <Link href="/for-brokers" className="text-base text-[hsl(var(--footer-foreground))] opacity-80 hover:opacity-100">
                    For Brokers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <h3 className="text-sm font-semibold text-[hsl(var(--footer-foreground))] opacity-80 tracking-wider uppercase">
              Subscribe to our newsletter
            </h3>
            <p className="mt-4 text-base text-[hsl(var(--footer-foreground))] opacity-80">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <Input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full bg-white text-[hsl(var(--footer))] placeholder:text-[hsl(var(--footer))] placeholder:opacity-60 border-white/20"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <Button type="submit">Subscribe</Button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-opacity-20 border-[hsl(var(--footer-foreground))] pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <Link href="https://www.facebook.com/share/1DDm2y64PB/?mibextid=wwXIfr" className="text-[hsl(var(--footer-foreground))] opacity-80 hover:opacity-100">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" aria-hidden="true" />
            </Link>
            <Link href="https://www.linkedin.com/company/feedxchange/" className="text-[hsl(var(--footer-foreground))] opacity-80 hover:opacity-100">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" aria-hidden="true" />
            </Link>
          </div>
          <p className="mt-8 text-base text-[hsl(var(--footer-foreground))] opacity-80 md:mt-0 md:order-1">
            &copy; 2023 FeedXchange Solutions Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

