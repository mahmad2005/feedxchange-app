import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SignUpForm() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-gray-900">Take control of your feed buying</h2>
          <p className="mt-4 text-center text-gray-600">
            Sign up now to start saving time and money on your feed costs.
          </p>
          <form className="mt-8 space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">
                Full Name
              </label>
              <Input id="name" name="name" type="text" required placeholder="Full Name" />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <Input id="email" name="email" type="email" required placeholder="Email address" />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                Phone Number
              </label>
              <Input id="phone" name="phone" type="tel" required placeholder="Phone Number" />
            </div>
            <div>
              <label htmlFor="farm-name" className="sr-only">
                Farm Name
              </label>
              <Input id="farm-name" name="farm-name" type="text" required placeholder="Farm Name" />
            </div>
            <div>
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

