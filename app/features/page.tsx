import Link from "next/link"
import type { Metadata } from "next"
import { MessageSquare, Music, Sparkles, Wand2, Scissors, Palette, Clock, Video, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/landing/navbar"
import Footer from "@/components/landing/footer"

export const metadata: Metadata = {
  title: "ฟีเจอร์ | ReelSmart",
  description: "ค้นพบฟีเจอร์ทั้งหมดของ ReelSmart ที่จะช่วยให้การตัดต่อวิดีโอของคุณง่ายและรวดเร็วยิ่งขึ้น",
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 mix-blend-multiply"></div>
          <img
                  src="/LOGO.png"
                  alt="ReelSmart Logo"
                  className="w-full h-full object-contain"
                />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              ฟีเจอร์ <span className="text-blue-400">ทั้งหมด</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              ค้นพบเครื่องมือและฟีเจอร์ทั้งหมดที่จะช่วยให้การตัดต่อวิดีโอของคุณง่ายและรวดเร็วยิ่งขึ้น
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  เริ่มต้นใช้งานฟรี
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  ดูแพ็คเกจและราคา
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ฟีเจอร์ AI อัจฉริยะ</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">เทคโนโลยี AI ที่จะเปลี่ยนวิธีการตัดต่อวิดีโอของคุณไปตลอดกาล</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-colors">
              <div className="bg-blue-600/20 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <MessageSquare className="h-7 w-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Prompt-Based Editing</h3>
              <p className="text-gray-400 mb-4">
                เพียงบอกสิ่งที่คุณต้องการ AI จะจัดการตัดต่อวิดีโอให้ตามคำสั่งของคุณ ไม่ว่าจะเป็นการตัดฉากที่ไม่ต้องการ การเพิ่มเอฟเฟกต์
                หรือการสร้างไฮไลท์
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>สั่งงานด้วยภาษาธรรมชาติ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>ประหยัดเวลาในการตัดต่อ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>รองรับคำสั่งที่ซับซ้อน</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-green-500 transition-colors">
              <div className="bg-green-600/20 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <MessageSquare className="h-7 w-7 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Auto Subtitles</h3>
              <p className="text-gray-400 mb-4">
                สร้างคำบรรยายอัตโนมัติจากเสียงหรือข้อความ พร้อมแปลภาษาได้ทันที ช่วยให้วิดีโอของคุณเข้าถึงผู้ชมได้มากขึ้น
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>แปลงเสียงเป็นข้อความอัตโนมัติ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>รองรับหลายภาษา</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>ปรับแต่งรูปแบบและสไตล์ได้</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-purple-500 transition-colors">
              <div className="bg-purple-600/20 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Music className="h-7 w-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Auto Sound Effects</h3>
              <p className="text-gray-400 mb-4">
                เพิ่มเอฟเฟกต์เสียงที่เหมาะสมกับเนื้อหาวิดีโอของคุณโดยอัตโนมัติ ทั้งเสียงเอฟเฟกต์ เสียงแอมเบียนท์ และดนตรีประกอบ
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>วิเคราะห์เนื้อหาวิดีโออัตโนมัติ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>คลังเสียงเอฟเฟกต์มากกว่า 1,000 เสียง</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>ปรับแต่งความเข้มของเสียงได้</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-amber-500 transition-colors">
              <div className="bg-amber-600/20 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Sparkles className="h-7 w-7 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Auto Highlights</h3>
              <p className="text-gray-400 mb-4">
                สร้างไฮไลท์จากช่วงเวลาสำคัญในวิดีโอของคุณโดยอัตโนมัติ เหมาะสำหรับการสร้างคลิปสั้นๆ สำหรับโซเชียลมีเดีย
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">✓</span>
                  <span>ตรวจจับช่วงเวลาสำคัญอัตโนมัติ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">✓</span>
                  <span>ปรับแต่งความยาวของไฮไลท์ได้</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">✓</span>
                  <span>เพิ่มเอฟเฟกต์และดนตรีประกอบอัตโนมัติ</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ฟีเจอร์หลัก</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">เครื่องมือพื้นฐานที่ทรงพลังสำหรับการตัดต่อวิดีโอระดับมืออาชีพ</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:bg-gray-800/30 transition-colors">
              <div className="mb-4">
                <Scissors className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">การตัดต่อขั้นสูง</h3>
              <p className="text-gray-400">
                เครื่องมือตัดต่อที่ครบครัน รองรับการตัดต่อแบบ non-linear การทำ transitions และการปรับแต่งความเร็วของวิดีโอ
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:bg-gray-800/30 transition-colors">
              <div className="mb-4">
                <Palette className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Color Grading</h3>
              <p className="text-gray-400">
                ปรับแต่งสีและโทนของวิดีโอได้อย่างละเอียด ด้วยเครื่องมือ color grading ระดับมืออาชีพ พร้อม presets มากมาย
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:bg-gray-800/30 transition-colors">
              <div className="mb-4">
                <Wand2 className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Visual Effects</h3>
              <p className="text-gray-400">
                เพิ่มเอฟเฟกต์ภาพให้กับวิดีโอของคุณ ทั้งเอฟเฟกต์พื้นฐานและเอฟเฟกต์ขั้นสูง พร้อมการปรับแต่งที่ยืดหยุ่น
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:bg-gray-800/30 transition-colors">
              <div className="mb-4">
                <Clock className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Timeline ที่ยืดหยุ่น</h3>
              <p className="text-gray-400">
                จัดการ timeline ได้อย่างมีประสิทธิภาพ รองรับหลาย tracks ทั้งวิดีโอและเสียง พร้อมการซูมและการเลื่อนที่ราบรื่น
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:bg-gray-800/30 transition-colors">
              <div className="mb-4">
                <Video className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">รองรับหลายรูปแบบไฟล์</h3>
              <p className="text-gray-400">
                รองรับไฟล์วิดีโอและเสียงหลากหลายรูปแบบ เช่น MP4, MOV, AVI, MKV, WAV, MP3 และอื่นๆ อีกมากมาย
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:bg-gray-800/30 transition-colors">
              <div className="mb-4">
                <Zap className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Export คุณภาพสูง</h3>
              <p className="text-gray-400">Export วิดีโอคุณภาพสูงสุดถึง 4K รองรับการปรับแต่งค่า bitrate และการบีบอัดที่หลากหลาย</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      {/* <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">เปรียบเทียบแพ็คเกจ</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">เลือกแพ็คเกจที่เหมาะกับความต้องการของคุณ</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="py-4 px-6 text-left">ฟีเจอร์</th>
                  <th className="py-4 px-6 text-center bg-gray-800/50">Free</th>
                  <th className="py-4 px-6 text-center bg-blue-900/30">Pro</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6">ความยาววิดีโอสูงสุด</td>
                  <td className="py-4 px-6 text-center bg-gray-800/50">10 นาที</td>
                  <td className="py-4 px-6 text-center bg-blue-900/30">ไม่จำกัด</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6">ความละเอียดในการส่งออก</td>
                  <td className="py-4 px-6 text-center bg-gray-800/50">สูงสุด 720p</td>
                  <td className="py-4 px-6 text-center bg-blue-900/30">สูงสุด 4K</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6">Prompt-Based Editing</td>
                  <td className="py-4 px-6 text-center bg-gray-800/50">จำกัด 5 ครั้ง/เดือน</td>
                  <td className="py-4 px-6 text-center bg-blue-900/30">ไม่จำกัด</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6">Auto Subtitles</td>
                  <td className="py-4 px-6 text-center bg-gray-800/50">จำกัด 3 ครั้ง/เดือน</td>
                  <td className="py-4 px-6 text-center bg-blue-900/30">ไม่จำกัด</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6">Auto Sound Effects</td>
                  <td className="py-4 px-6 text-center bg-gray-800/50">จำกัด 3 ครั้ง/เดือน</td>
                  <td className="py-4 px-6 text-center bg-blue-900/30">ไม่จำกัด</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6">Auto Highlights</td>
                  <td className="py-4 px-6 text-center bg-gray-800/50">จำกัด 3 ครั้ง/เดือน</td>
                  <td className="py-4 px-6 text-center bg-blue-900/30">ไม่จำกัด</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6">คลาวด์สตอเรจ</td>
                  <td className="py-4 px-6 text-center bg-gray-800/50">2GB</td>
                  <td className="py-4 px-6 text-center bg-blue-900/30">100GB</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6">การสนับสนุน</td>
                  <td className="py-4 px-6 text-center bg-gray-800/50">ฟอรั่มชุมชน</td>
                  <td className="py-4 px-6 text-center bg-blue-900/30">อีเมลและแชท</td>
                </tr>
                <tr>
                  <td className="py-4 px-6"></td>
                  <td className="py-4 px-6 text-center bg-gray-800/50">
                    <Link href="/register">
                      <Button variant="outline" className="w-full border-gray-600">
                        เริ่มต้นใช้งานฟรี
                      </Button>
                    </Link>
                  </td>
                  <td className="py-4 px-6 text-center bg-blue-900/30">
                    <Link href="/pricing">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">สมัครแพ็คเกจ Pro</Button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section> */}

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
