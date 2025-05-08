import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function ResourcesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="container px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources for Local Businesses</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to grow your local business and connect with your community.
          </p>
        </div>

        {/* Blog Posts Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/blog/local-marketing.jpg"
                  alt="Local Marketing Tips"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">10 Local Marketing Tips for Small Businesses</h3>
                <p className="text-gray-600 mb-4">
                  Learn how to effectively market your business to your local community and build lasting relationships.
                </p>
                <Link href="/blog/local-marketing-tips">
                  <Button variant="outline" className="text-[#E05D35] border-[#E05D35] hover:bg-[#FEF0EB]">
                    Read More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/blog/social-media.jpg"
                  alt="Social Media Strategy"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Social Media Strategy for Local Businesses</h3>
                <p className="text-gray-600 mb-4">
                  Discover how to leverage social media to connect with your local audience and drive foot traffic.
                </p>
                <Link href="/blog/social-media-strategy">
                  <Button variant="outline" className="text-[#E05D35] border-[#E05D35] hover:bg-[#FEF0EB]">
                    Read More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/blog/customer-loyalty.jpg"
                  alt="Customer Loyalty"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Building Customer Loyalty in Your Community</h3>
                <p className="text-gray-600 mb-4">
                  Learn proven strategies to build and maintain customer loyalty in your local market.
                </p>
                <Link href="/blog/customer-loyalty">
                  <Button variant="outline" className="text-[#E05D35] border-[#E05D35] hover:bg-[#FEF0EB]">
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Guides Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12">Free Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-[#FEF0EB] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#E05D35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Local Business Marketing Guide</h3>
              <p className="text-gray-600 mb-6">
                A comprehensive guide to marketing your local business effectively in the digital age.
              </p>
              <Link href="/guides/local-marketing">
                <Button variant="outline" className="text-[#E05D35] border-[#E05D35] hover:bg-[#FEF0EB]">
                  Download Guide
                </Button>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-[#FEF0EB] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#E05D35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Community Engagement Toolkit</h3>
              <p className="text-gray-600 mb-6">
                Tools and strategies to help you build strong relationships with your local community.
              </p>
              <Link href="/guides/community-engagement">
                <Button variant="outline" className="text-[#E05D35] border-[#E05D35] hover:bg-[#FEF0EB]">
                  Download Toolkit
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-[#FEF0EB] rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest tips, guides, and resources for local businesses.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E05D35]"
              />
              <Button className="bg-[#E05D35] hover:bg-[#c04d2b] text-white px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 