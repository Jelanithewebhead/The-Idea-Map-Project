"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ArrowRight, BarChart2, Users, Globe } from "lucide-react"
import Link from "next/link"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}

function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className="p-6 h-full hover:shadow-lg transition-shadow">
        <div className="bg-[#FEF0EB] p-3 rounded-full w-fit mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href="#" className="text-[#E05D35] font-medium flex items-center gap-1 hover:gap-2 transition-all">
          Learn more <ArrowRight className="h-4 w-4" />
        </Link>
      </Card>
    </motion.div>
  )
}

export default function FeatureSection() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose GroundUp?</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Our platform is designed specifically for local businesses looking to grow their presence in their
          communities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<BarChart2 className="h-6 w-6 text-[#E05D35]" />}
          title="Data-Driven Insights"
          description="Get actionable insights about your local market and customer behavior to optimize your marketing strategy."
          delay={0}
        />
        <FeatureCard
          icon={<Users className="h-6 w-6 text-[#E05D35]" />}
          title="Community Focused"
          description="Build meaningful connections with your neighborhood through targeted, community-centric campaigns."
          delay={0.1}
        />
        <FeatureCard
          icon={<Globe className="h-6 w-6 text-[#E05D35]" />}
          title="Omni-Channel Approach"
          description="Seamlessly integrate online and offline marketing efforts to create a cohesive brand experience."
          delay={0.2}
        />
      </div>
    </section>
  )
}
