import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check } from "lucide-react"

export default function PricingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="container px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your local business. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Starter Plan */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold mb-2">Starter</h3>
            <p className="text-gray-600 mb-6">Perfect for small local businesses</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">$29</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#E05D35] mr-2" />
                <span>Up to 1,000 local contacts</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#E05D35] mr-2" />
                <span>Basic analytics</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#E05D35] mr-2" />
                <span>Email support</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#E05D35] mr-2" />
                <span>Basic marketing tools</span>
              </li>
            </ul>
            <Link href="/signup?plan=starter" className="block">
              <Button className="w-full bg-[#E05D35] hover:bg-[#c04d2b] text-white">
                Start Free Trial
              </Button>
            </Link>
          </div>

          {/* Professional Plan */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-[#E05D35] relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#E05D35] text-white px-4 py-1 rounded-full text-sm">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold mb-2">Professional</h3>
            <p className="text-gray-600 mb-6">For growing local businesses</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">$79</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#E05D35] mr-2" />
                <span>Up to 5,000 local contacts</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#E05D35] mr-2" />
                <span>Advanced analytics</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#E05D35] mr-2" />
                <span>Priority support</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#E05D35] mr-2" />
                <span>Advanced marketing tools</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#E05D35] mr-2" />
                <span>Custom reporting</span>
              </li>
            </ul>
            <Link href="/signup?plan=professional" className="block">
              <Button className="w-full bg-[#E05D35] hover:bg-[#c04d2b] text-white">
                Start Free Trial
              </Button>
            </Link>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
            <p className="text-gray-600 mb-6">For large local businesses</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">$199</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#E05D35] mr-2" />
                <span>Unlimited local contacts</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#E05D35] mr-2" />
                <span>Custom analytics</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#E05D35] mr-2" />
                <span>24/7 dedicated support</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#E05D35] mr-2" />
                <span>All marketing tools</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#E05D35] mr-2" />
                <span>API access</span>
              </li>
            </ul>
            <Link href="/signup?plan=enterprise" className="block">
              <Button className="w-full bg-[#E05D35] hover:bg-[#c04d2b] text-white">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Can I change plans later?</h3>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">What happens after the free trial?</h3>
              <p className="text-gray-600">After your 14-day free trial, you'll be automatically charged for the plan you selected. You can cancel anytime before the trial ends.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Do you offer refunds?</h3>
              <p className="text-gray-600">Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 