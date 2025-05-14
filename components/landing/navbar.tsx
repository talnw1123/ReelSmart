"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-black/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center overflow-hidden">
            <Link href="/" className="flex items-center">
              <div className=" p-1 rounded mr-2 w-9 h-9 flex items-center justify-center">
                <img
                  src="https://github.com/talnw1123/ReelSmart/blob/main/public/LOGO.png"
                  alt="ReelSmart Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold">ReelSmart</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-gray-300 hover:text-white transition-colors">
              ฟีเจอร์
            </Link>
            <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
              ราคา
            </Link>
            <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
              ติดต่อ
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" className="text-gray-300 hover:text-white">
                เข้าสู่ระบบ
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-blue-600 hover:bg-blue-700">สมัครสมาชิก</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/features"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                ฟีเจอร์
              </Link>
              <Link
                href="/pricing"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                ราคา
              </Link>
              <Link
                href="/faq"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                ติดต่อ
              </Link>
              <div className="pt-4 flex flex-col space-y-3">
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="text-gray-300 hover:text-white justify-start w-full">
                    เข้าสู่ระบบ
                  </Button>
                </Link>
                <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                  <Button className="bg-blue-600 hover:bg-blue-700 w-full">สมัครสมาชิก</Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
