import { Button } from "@/components/ui/button"
import Hero from "@/components/hero"
import MarketingPlan from "@/components/marketing-plan"
import OfflineToolkit from "@/components/offline-toolkit"
import Neighborhoods from "@/components/neighborhoods"
import MobileAppShowcase from "@/components/mobile-app-showcase"
import Footer from "@/components/footer"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="container px-4 py-8 md:py-16">
        {/* Hero Section */}
        <Hero />

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <MarketingPlan />
          <OfflineToolkit />
          <Neighborhoods />
          <MobileAppShowcase />
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to grow your local business?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Join thousands of local businesses using GroundUp to connect with their neighborhoods.
          </p>
          <Link href="/find-local-businesses">
            <Button size="lg" className="bg-[#E05D35] hover:bg-[#c04d2b] text-white px-8 py-6 text-lg rounded-full">
              Get Started Free
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}
