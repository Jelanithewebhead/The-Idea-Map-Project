"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function MobileAppShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <Card className="p-6 h-full overflow-hidden">
        <div className="flex flex-col h-full">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Mobile App</h3>
          <p className="text-lg text-gray-700 mb-6">Manage your marketing on the go with our powerful mobile app.</p>

          <div className="flex justify-center items-center gap-4 mt-auto">
            <Button className="bg-black hover:bg-gray-800 text-white">
              <Image src="/images/app-store.svg" alt="App Store" width={24} height={24} className="mr-2" />
              App Store
            </Button>
            <Button className="bg-black hover:bg-gray-800 text-white">
              <Image src="/images/google-play.svg" alt="Google Play" width={24} height={24} className="mr-2" />
              Google Play
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
