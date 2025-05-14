"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, MessageSquare, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Navbar from "@/components/landing/navbar"
import Footer from "@/components/landing/footer"

export default function ContactPageClient() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [inquiryType, setInquiryType] = useState("general")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // จำลองการส่งข้อมูล
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setName("")
    setEmail("")
    setSubject("")
    setMessage("")
    setInquiryType("general")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              ติดต่อ<span className="text-blue-400">เรา</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              มีคำถามหรือต้องการความช่วยเหลือ? ทีมงานของเราพร้อมให้บริการคุณ
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">ข้อมูลการติดต่อ</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-blue-600/20 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">อีเมล</h3>
                    <p className="text-gray-400 mb-1">สำหรับการสอบถามทั่วไป:</p>
                    <a href="mailto:info@reelsmart.com" className="text-blue-400 hover:text-blue-300">
                      info@reelsmart.com
                    </a>
                    <p className="text-gray-400 mt-2 mb-1">สำหรับการสนับสนุนทางเทคนิค:</p>
                    <a href="mailto:support@reelsmart.com" className="text-blue-400 hover:text-blue-300">
                      support@reelsmart.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-600/20 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">โทรศัพท์</h3>
                    <p className="text-gray-400 mb-1">ฝ่ายบริการลูกค้า:</p>
                    <a href="tel:+6621234567" className="text-blue-400 hover:text-blue-300">
                      +66 2 123 4567
                    </a>
                    <p className="text-gray-400 mt-2 mb-1">ฝ่ายขาย:</p>
                    <a href="tel:+6621234568" className="text-blue-400 hover:text-blue-300">
                      +66 2 123 4568
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-600/20 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">ที่อยู่</h3>
                    <p className="text-gray-400">
                      อาคาร SCL
                      <br />
                      เลขที่ 123 ถนนยางมะตอย
                      <br />
                      แขวงทุ่งครุ เขตทุ่งครุ
                      <br />
                      กรุงเทพฯ 10110
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-600/20 p-3 rounded-full mr-4">
                    <MessageSquare className="h-6 w-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">แชทสด</h3>
                    <p className="text-gray-400 mb-2">
                      ทีมสนับสนุนของเราพร้อมให้บริการผ่านแชทสดในวันจันทร์-ศุกร์ เวลา 9:00 - 18:00 น.
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700">เริ่มแชท</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">ส่งข้อความถึงเรา</h2>

              {isSubmitted ? (
                <div className="bg-green-900/30 border border-green-500 rounded-xl p-8 text-center">
                  <div className="bg-green-600/20 p-4 rounded-full inline-flex mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">ขอบคุณสำหรับข้อความของคุณ!</h3>
                  <p className="text-gray-300 mb-6">เราได้รับข้อความของคุณแล้ว และจะติดต่อกลับโดยเร็วที่สุด</p>
                  <Button onClick={() => setIsSubmitted(false)} className="bg-blue-600 hover:bg-blue-700">
                    ส่งข้อความอีกครั้ง
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 bg-gray-800/30 rounded-xl p-6 border border-gray-700"
                >
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="inquiry-type">ประเภทการสอบถาม</Label>
                      <RadioGroup
                        id="inquiry-type"
                        value={inquiryType}
                        onValueChange={setInquiryType}
                        className="flex flex-wrap gap-4 mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="general" id="general" />
                          <Label htmlFor="general" className="font-normal">
                            ทั่วไป
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="support" id="support" />
                          <Label htmlFor="support" className="font-normal">
                            การสนับสนุน
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="sales" id="sales" />
                          <Label htmlFor="sales" className="font-normal">
                            ฝ่ายขาย
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="feedback" id="feedback" />
                          <Label htmlFor="feedback" className="font-normal">
                            ข้อเสนอแนะ
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">ชื่อ-นามสกุล</Label>
                        <Input
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="ชื่อ นามสกุล"
                          className="bg-gray-700 border-gray-600"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">อีเมล</Label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your@email.com"
                          className="bg-gray-700 border-gray-600"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">หัวข้อ</Label>
                      <Input
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="หัวข้อของคุณ"
                        className="bg-gray-700 border-gray-600"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">ข้อความ</Label>
                      <Textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="รายละเอียดข้อความของคุณ..."
                        className="bg-gray-700 border-gray-600 min-h-[150px]"
                        required
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        กำลังส่ง...
                      </>
                    ) : (
                      "ส่งข้อความ"
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">ที่ตั้งของเรา</h2>
            <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden relative">
            
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-400">แผนที่จะแสดงที่นี่</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-20 bg-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">คำถามที่พบบ่อย</h2>
            <p className="text-gray-400">คำตอบสำหรับคำถามที่พบบ่อยเกี่ยวกับการติดต่อและการสนับสนุน</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">ฉันจะได้รับการตอบกลับเร็วแค่ไหน?</h3>
              <p className="text-gray-400">
                เราพยายามตอบกลับทุกข้อความภายใน 24 ชั่วโมงในวันทำการ สำหรับผู้ใช้แพ็คเกจ Pro เรามีเวลาตอบกลับที่เร็วกว่า โดยปกติภายใน 4-6
                ชั่วโมง
              </p>
            </div>

            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">ฉันสามารถขอการสนับสนุนทางเทคนิคได้อย่างไร?</h3>
              <p className="text-gray-400">
                คุณสามารถขอการสนับสนุนทางเทคนิคได้หลายช่องทาง ได้แก่ อีเมล (support@reelsmart.com), แชทสดในเว็บไซต์ของเรา
                หรือกรอกแบบฟอร์มติดต่อในหน้านี้ โดยเลือกประเภทการสอบถามเป็น "การสนับสนุน"
              </p>
            </div>

            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">ฉันสามารถขอใบเสนอราคาสำหรับทีมได้หรือไม่?</h3>
              <p className="text-gray-400">
                ได้ คุณสามารถขอใบเสนอราคาสำหรับทีมได้โดยติดต่อฝ่ายขายของเราที่ sales@reelsmart.com หรือกรอกแบบฟอร์มติดต่อในหน้านี้
                โดยเลือกประเภทการสอบถามเป็น "ฝ่ายขาย" เราจะติดต่อกลับเพื่อสอบถามความต้องการเพิ่มเติมและเสนอราคาที่เหมาะสม
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
