"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Email submitted:", email)
    setEmail("")
    // Show success message or redirect
  }

  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 py-8">
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-[#E05D35]">GroundUp</h1>
        <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-6">
          Built for the Block.
          <br />
          Grows with You.
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-md">
          The all-in-one marketing platform designed specifically for local businesses to connect with their
          neighborhoods.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E05D35]"
            required
          />
          <Button type="submit" className="bg-[#E05D35] hover:bg-[#c04d2b] text-white px-6">
            Get Started
          </Button>
        </form>
      </motion.div>

      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative w-full max-w-md h-[300px] md:h-[400px]">
          <Image
            src="/images/hero-illustration.png"
            alt="GroundUp local business illustration"
            fill
            className="object-contain"
          />
        </div>
      </motion.div>
    </section>
  )
}
