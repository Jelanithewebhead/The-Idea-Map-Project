import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="container px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to help local businesses thrive in their communities through technology and innovation.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At GroundUp, we believe that local businesses are the backbone of our communities. Our mission is to provide them with the tools and technology they need to succeed in today's digital world while maintaining their local charm and personal touch.
            </p>
            <p className="text-gray-600">
              We're committed to making advanced marketing and business tools accessible to businesses of all sizes, helping them connect with their communities in meaningful ways.
            </p>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/images/mission.jpg"
              alt="Our mission"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-[#FEF0EB] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#E05D35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Community First</h3>
              <p className="text-gray-600">
                We believe in the power of local communities and work to strengthen the bonds between businesses and their neighbors.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-[#FEF0EB] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#E05D35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We constantly innovate to provide cutting-edge solutions that help local businesses stay ahead in the digital age.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-[#FEF0EB] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#E05D35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Trust & Reliability</h3>
              <p className="text-gray-600">
                We build trust through transparency and reliability, ensuring our partners can always count on us.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Team members would go here */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/images/team/ceo.jpg"
                  alt="CEO"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Sarah Johnson</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Be part of the movement to empower local businesses and strengthen communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="bg-[#E05D35] hover:bg-[#c04d2b] text-white px-8 py-6 text-lg rounded-full">
                Get Started
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-[#E05D35] text-[#E05D35] hover:bg-[#FEF0EB] px-8 py-6 text-lg rounded-full">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
} 