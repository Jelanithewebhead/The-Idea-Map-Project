"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full py-4 px-4 border-b border-gray-100">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#E05D35]">
          GroundUp
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/features" className="text-gray-700 hover:text-[#E05D35]">
            Features
          </Link>
          <Link href="/pricing" className="text-gray-700 hover:text-[#E05D35]">
            Pricing
          </Link>
          <Link href="/resources" className="text-gray-700 hover:text-[#E05D35]">
            Resources
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-[#E05D35]">
            About
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login">
            <Button variant="outline" className="border-[#E05D35] text-[#E05D35] hover:bg-[#FEF0EB]">
              Log In
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-[#E05D35] hover:bg-[#c04d2b] text-white">Sign Up</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden container mx-auto overflow-hidden"
          >
            <nav className="flex flex-col space-y-4 py-6">
              <Link href="/features" className="text-gray-700 hover:text-[#E05D35] py-2">
                Features
              </Link>
              <Link href="/pricing" className="text-gray-700 hover:text-[#E05D35] py-2">
                Pricing
              </Link>
              <Link href="/resources" className="text-gray-700 hover:text-[#E05D35] py-2">
                Resources
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-[#E05D35] py-2">
                About
              </Link>
              <div className="flex flex-col space-y-3 pt-4">
                <Link href="/login" className="w-full">
                  <Button variant="outline" className="border-[#E05D35] text-[#E05D35] hover:bg-[#FEF0EB] w-full">
                    Log In
                  </Button>
                </Link>
                <Link href="/signup" className="w-full">
                  <Button className="bg-[#E05D35] hover:bg-[#c04d2b] text-white w-full">Sign Up</Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
