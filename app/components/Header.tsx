import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="sr-only">FeedXChange</span>
              <img
                src="/logo.svg"
                alt="FeedXChange"
                className="h-6 w-auto"
              />
            </Link>
          </div>
          <div className="flex items-center lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-6">
                  <Link href="/" className="text-lg font-medium text-gray-900 hover:text-primary">
                    Home
                  </Link>
                  <Link href="/about" className="text-lg font-medium text-gray-900 hover:text-primary">
                    About
                  </Link>
                  <Link href="/for-farmers" className="text-lg font-medium text-gray-900 hover:text-primary">
                    For Farmers
                  </Link>
                  <Link href="/for-brokers" className="text-lg font-medium text-gray-900 hover:text-primary">
                    For Brokers
                  </Link>
                  <Link href="/contact" passHref>
                    <Button className="w-full mt-4">Get Started</Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          <nav className="hidden lg:flex space-x-10">
            <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
              About
            </Link>
            <Link href="/for-farmers" className="text-base font-medium text-gray-500 hover:text-gray-900">
              For Farmers
            </Link>
            <Link href="/for-brokers" className="text-base font-medium text-gray-500 hover:text-gray-900">
              For Brokers
            </Link>
          </nav>
          <div className="hidden lg:flex items-center justify-end lg:flex-1 lg:w-0">
            <Link href="/contact" passHref>
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

