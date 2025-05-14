import Link from "next/link"
import type { Metadata } from "next"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/landing/navbar"
import Footer from "@/components/landing/footer"

export const metadata: Metadata = {
  title: "ราคา | ReelSmart",
  description: "แพ็คเกจและราคาสำหรับ ReelSmart ที่เหมาะกับทุกความต้องการ",
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              แพ็คเกจและ<span className="text-blue-400">ราคา</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              เลือกแพ็คเกจที่เหมาะกับความต้องการของคุณ เริ่มต้นใช้งานฟรีหรืออัปเกรดเพื่อฟีเจอร์เพิ่มเติม
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-gray-500 transition-colors">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Free</h2>
                <p className="text-gray-400">เหมาะสำหรับผู้เริ่มต้น</p>
              </div>

              <div className="mb-6">
                <div className="text-4xl font-bold">฿0</div>
                <p className="text-gray-400">ฟรีตลอดไป</p>
              </div>

              <div className="border-t border-gray-700 my-6 pt-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-2 shrink-0 mt-0.5" />
                    <span>ตัดต่อวิดีโอพื้นฐาน</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-2 shrink-0 mt-0.5" />
                    <span>วิดีโอความยาวไม่เกิน 2 นาที</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-2 shrink-0 mt-0.5" />
                    <span>ส่งออกความละเอียดสูงสุด 720p</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-2 shrink-0 mt-0.5" />
                    <span>Prompt-Based Editing (1 ครั้ง/เดือน)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-2 shrink-0 mt-0.5" />
                    <span>Auto Subtitles (2 ครั้ง/เดือน)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-2 shrink-0 mt-0.5" />
                    <span>Auto Sound Effects (2 ครั้ง/เดือน)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-2 shrink-0 mt-0.5" />
                    <span>Auto Highlights (2 ครั้ง/เดือน)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-2 shrink-0 mt-0.5" />
                    <span>คลาวด์สตอเรจ 2GB</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-2 shrink-0 mt-0.5" />
                    <span>การสนับสนุนผ่านฟอรั่มชุมชน</span>
                  </li>
                </ul>
              </div>

              <Link href="/register">
                <Button variant="outline" className="w-full">
                  เริ่มต้นใช้งานฟรี
                </Button>
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="bg-blue-900/20 border border-blue-500 rounded-xl p-8 relative">
              <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                แนะนำ
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Pro</h2>
                <p className="text-gray-400">สำหรับครีเอเตอร์มืออาชีพ</p>
              </div>

              <div className="mb-6">
                <div className="text-4xl font-bold">฿299</div>
                <p className="text-gray-400">ต่อเดือน</p>
              </div>

              <div className="border-t border-blue-800 my-6 pt-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                    <span>ตัดต่อวิดีโอขั้นสูง</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                    <span>วิดีโอความยาวไม่จำกัด</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                    <span>ส่งออกความละเอียดสูงสุด 4K</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                    <span>Prompt-Based Editing ไม่จำกัด</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                    <span>Auto Subtitles ไม่จำกัด</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                    <span>Auto Sound Effects ไม่จำกัด</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                    <span>Auto Highlights ไม่จำกัด</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                    <span>คลาวด์สตอเรจ 50GB</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                    <span>การสนับสนุนทางอีเมลและแชท</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                    <span>ไม่มีลายน้ำ</span>
                  </li>
                </ul>
              </div>

              <Link href="/register">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">สมัครแพ็คเกจ Pro</Button>
              </Link>
            </div>
          </div>

          {/* <div className="max-w-5xl mx-auto mt-12 bg-gray-800/30 border border-gray-700 rounded-xl p-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold">ต้องการแพ็คเกจสำหรับทีมหรือองค์กร?</h3>
              <p className="text-gray-400">เรามีแพ็คเกจพิเศษสำหรับทีมและองค์กรที่ต้องการใช้งานร่วมกัน</p>
            </div>
            <div className="flex justify-center">
              <Link href="/contact">
                <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-900/20">
                  ติดต่อฝ่ายขาย
                </Button>
              </Link>
            </div>
          </div> */}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">คำถามเกี่ยวกับราคา</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">คำถามที่พบบ่อยเกี่ยวกับแพ็คเกจและราคาของเรา</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">ฉันสามารถยกเลิกการสมัครได้เมื่อไหร่?</h3>
              <p className="text-gray-400">
                คุณสามารถยกเลิกการสมัครได้ทุกเมื่อ โดยการยกเลิกจะมีผลเมื่อสิ้นสุดรอบการชำระเงินปัจจุบัน
                และคุณจะยังคงสามารถใช้งานได้จนกว่าจะสิ้นสุดรอบการชำระเงิน
              </p>
            </div>

            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">มีส่วนลดสำหรับการชำระเงินรายปีหรือไม่?</h3>
              <p className="text-gray-400">
                ใช่ เรามีส่วนลด 20% สำหรับการชำระเงินรายปี ทำให้คุณประหยัดได้มากกว่าการชำระเงินรายเดือน
              </p>
            </div>

            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">ฉันสามารถอัปเกรดหรือดาวน์เกรดแพ็คเกจได้หรือไม่?</h3>
              <p className="text-gray-400">
                ได้ คุณสามารถอัปเกรดได้ทุกเมื่อ และการอัปเกรดจะมีผลทันที ส่วนการดาวน์เกรดจะมีผลเมื่อสิ้นสุดรอบการชำระเงินปัจจุบัน
              </p>
            </div>

            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">มีการทดลองใช้งานแพ็คเกจ Pro หรือไม่?</h3>
              <p className="text-gray-400">
                เรามีการทดลองใช้งานแพ็คเกจ Pro ฟรี 7 วัน สำหรับผู้ใช้ใหม่ทุกคน
                คุณสามารถยกเลิกได้ก่อนสิ้นสุดระยะเวลาทดลองใช้งานโดยไม่มีค่าใช้จ่าย
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">พร้อมที่จะเริ่มต้นใช้งานแล้วหรือยัง?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            เริ่มต้นใช้งาน ReelSmart วันนี้ และค้นพบพลังของการตัดต่อวิดีโอด้วย AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                เริ่มต้นใช้งานฟรี
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                ติดต่อฝ่ายขาย
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
