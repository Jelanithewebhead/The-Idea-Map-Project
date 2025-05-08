"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

export default function Neighborhoods() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <Card className="p-6 h-full overflow-hidden">
        <div className="flex flex-col md:flex-row gap-6 h-full">
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">For Real People & Neighborhoods</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-6 w-6 text-[#E05D35] flex-shrink-0 mt-0.5" />
                <span className="text-lg">Stories</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-6 w-6 text-[#E05D35] flex-shrink-0 mt-0.5" />
                <span className="text-lg">Tips</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-6 w-6 text-[#E05D35] flex-shrink-0 mt-0.5" />
                <span className="text-lg">lox-inspiration</span>
              </li>
            </ul>
          </div>

          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-[200px] h-[350px]">
              <Image
                src="/images/neighborhoods-app.png"
                alt="Neighborhoods Mobile App"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
