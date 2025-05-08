import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 mt-20">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-[#E05D35]">GroundUp</h3>
            <p className="mt-4 text-gray-600 max-w-md">
              The all-in-one marketing platform designed specifically for local businesses to connect with their
              neighborhoods.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="https://facebook.com" className="text-gray-500 hover:text-[#E05D35]">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://twitter.com" className="text-gray-500 hover:text-[#E05D35]">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="https://instagram.com" className="text-gray-500 hover:text-[#E05D35]">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://linkedin.com" className="text-gray-500 hover:text-[#E05D35]">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-gray-600 hover:text-[#E05D35]">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 hover:text-[#E05D35]">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-600 hover:text-[#E05D35]">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-600 hover:text-[#E05D35]">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[#E05D35]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-[#E05D35]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-[#E05D35]">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#E05D35]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">© 2025 GroundUp. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-600 hover:text-[#E05D35] text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-600 hover:text-[#E05D35] text-sm">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="text-gray-600 hover:text-[#E05D35] text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
