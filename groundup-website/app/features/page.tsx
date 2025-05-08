import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FeaturesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="container px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Powerful Features for Local Businesses</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to grow your local business and connect with your community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-[#FEF0EB] rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#E05D35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Community Engagement</h3>
            <p className="text-gray-600 mb-6">
              Connect with your local community through targeted campaigns and neighborhood events.
            </p>
            <Link href="/features/community-engagement">
              <Button variant="outline" className="text-[#E05D35] border-[#E05D35] hover:bg-[#FEF0EB]">
                Learn More
              </Button>
            </Link>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-[#FEF0EB] rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#E05D35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Analytics Dashboard</h3>
            <p className="text-gray-600 mb-6">
              Track your business growth with detailed analytics and insights about your local market.
            </p>
            <Link href="/features/analytics">
              <Button variant="outline" className="text-[#E05D35] border-[#E05D35] hover:bg-[#FEF0EB]">
                Learn More
              </Button>
            </Link>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-[#FEF0EB] rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#E05D35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Marketing Tools</h3>
            <p className="text-gray-600 mb-6">
              Powerful marketing tools designed specifically for local businesses to reach their target audience.
            </p>
            <Link href="/features/marketing-tools">
              <Button variant="outline" className="text-[#E05D35] border-[#E05D35] hover:bg-[#FEF0EB]">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to grow your local business?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Join thousands of local businesses using GroundUp to connect with their neighborhoods.
          </p>
          <Link href="/signup">
            <Button size="lg" className="bg-[#E05D35] hover:bg-[#c04d2b] text-white px-8 py-6 text-lg rounded-full">
              Get Started Free
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
} 