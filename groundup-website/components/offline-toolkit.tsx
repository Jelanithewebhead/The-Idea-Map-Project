"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function OfflineToolkit() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="p-6 h-full overflow-hidden">
        <div className="flex flex-col md:flex-row gap-6 h-full">
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Offline Marketing Toolkit</h3>
            <p className="text-lg text-gray-700 mb-4">Connect with your community through physical touchpoints.</p>
            <div className="relative w-[150px] h-[150px] mx-auto md:mx-0">
              <Image src="/images/qr-code.png" alt="QR Code for Offline Marketing" fill className="object-contain" />
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-[200px] h-[350px]">
              <Image
                src="/images/offline-toolkit-app.png"
                alt="Offline Marketing Toolkit App"
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
