import Link from "next/link"
import { ArrowRight, MessageSquare, Music, Sparkles, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/landing/navbar"
import Footer from "@/components/landing/footer"
import FeatureCard from "@/components/landing/feature-card"
import TestimonialCard from "@/components/landing/testimonial-card"
import PricingCard from "@/components/landing/pricing-card"
import FaqItem from "@/components/landing/faq-item"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 mix-blend-multiply"></div>
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Video editing background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              ตัดต่อวิดีโอด้วย <span className="text-blue-400">AI</span>
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
             อย่างมืออาชีพ
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              เปลี่ยนวิดีโอธรรมดาให้เป็นผลงานระดับมืออาชีพด้วยเครื่องมือ AI อัจฉริยะ ที่ช่วยให้การตัดต่อวิดีโอเป็นเรื่องง่ายและรวดเร็ว
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/editor">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  เริ่มต้นใช้งานฟรี <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                ดูตัวอย่าง <Play className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="relative mt-16 rounded-xl overflow-hidden shadow-2xl border border-gray-800">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8nRmJVUjfFtxslhxAsmwXaXNU3cDK3.png"
              alt="Video Editor Interface"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ฟีเจอร์ของ AI ในการตัดต่อวิดีโอ</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">ค้นพบฟีเจอร์ AI ที่จะเปลี่ยนวิธีการตัดต่อวิดีโอของคุณไปตลอดกาล</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<MessageSquare className="h-10 w-10 text-blue-400" />}
              title="Prompt-Based Editing"
              description="เพียงบอกสิ่งที่คุณต้องการ AI จะจัดการตัดต่อวิดีโอให้ตามคำสั่งของคุณ"
              color="blue"
            />
            <FeatureCard
              icon={<MessageSquare className="h-10 w-10 text-green-400" />}
              title="Auto Subtitles"
              description="สร้างคำบรรยายอัตโนมัติจากเสียงหรือข้อความ พร้อมแปลภาษาได้ทันที"
              color="green"
            />
            <FeatureCard
              icon={<Music className="h-10 w-10 text-purple-400" />}
              title="Auto Sound Effects"
              description="เพิ่มเอฟเฟกต์เสียงที่เหมาะสมกับเนื้อหาวิดีโอของคุณโดยอัตโนมัติ"
              color="purple"
            />
            <FeatureCard
              icon={<Sparkles className="h-10 w-10 text-amber-400" />}
              title="Auto Highlights"
              description="สร้างไฮไลท์จากช่วงเวลาสำคัญในวิดีโอของคุณโดยอัตโนมัติ"
              color="amber"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">วิธีการทำงาน</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">เพียง 3 ขั้นตอนง่ายๆ ก็สามารถสร้างวิดีโอระดับมืออาชีพได้</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">อัปโหลดวิดีโอ</h3>
              <p className="text-gray-400">อัปโหลดวิดีโอของคุณเข้าสู่ระบบ รองรับไฟล์หลากหลายรูปแบบ</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-blue-400">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">เลือกใช้ AI</h3>
              <p className="text-gray-400">เลือกฟีเจอร์ AI ที่คุณต้องการใช้และปรับแต่งตามความต้องการ</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-blue-400">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">เอ็กซ์พอร์ต</h3>
              <p className="text-gray-400">เอ็กซ์พอร์ตวิดีโอที่ตัดต่อเสร็จแล้วในคุณภาพสูง พร้อมแชร์ทันที</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">เสียงจากผู้ใช้งานจริง</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">ดูว่าผู้ใช้งานของเรารู้สึกอย่างไรกับ ReelSmart</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="ฟีเจอร์ Prompt-Based Editing ช่วยให้ผมประหยัดเวลาในการตัดต่อวิดีโอได้มากกว่า 50% เพียงแค่พิมพ์สิ่งที่ต้องการ AI ก็จัดการให้ทั้งหมด"
              author="สมชาย วิดีโอครีเอเตอร์"
              role="YouTuber"
              avatar="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              quote="Auto Subtitles ทำให้การสร้างคำบรรยายเป็นเรื่องง่าย ไม่ต้องเสียเวลาพิมพ์เอง และยังแปลภาษาได้อีกด้วย ช่วยให้วิดีโอของฉันเข้าถึงผู้ชมได้มากขึ้น"
              author="สมหญิง คอนเทนต์ครีเอเตอร์"
              role="Content Creator"
              avatar="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              quote="Auto Highlights ช่วยให้ผมสร้างคลิปสั้นๆ จากวิดีโอยาวๆ ได้อย่างรวดเร็ว เหมาะมากสำหรับการทำคอนเทนต์ลง Social Media"
              author="สมศักดิ์ มาร์เก็ตติ้ง"
              role="Digital Marketer"
              avatar="/placeholder.svg?height=100&width=100"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">แพ็คเกจและราคา</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">เลือกแพ็คเกจที่เหมาะกับความต้องการของคุณ</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard
              title="Free"
              price="0"
              description="เหมาะสำหรับผู้เริ่มต้น"
              features={["ตัดต่อวิดีโอพื้นฐาน", "วิดีโอความยาวไม่เกิน 2 นาที", "ส่งออกความละเอียดสูงสุด 720p", "ใช้ฟีเจอร์ AI ได้จำกัด","คลาวด์สตอเรจ 2GB"]}
              buttonText="เริ่มต้นใช้งานฟรี"
              buttonVariant="outline"
              popular={false}
            />
            <PricingCard
              title="Pro"
              price="299"
              period="ต่อเดือน"
              description="สำหรับครีเอเตอร์มืออาชีพ"
              features={[
                "ตัดต่อวิดีโอขั้นสูง",
                "วิดีโอความยาวไม่จำกัด",
                "ส่งออกความละเอียดสูงสุด 4K",
                "ใช้ฟีเจอร์ AI ได้ไม่จำกัด",
                "คลาวด์สตอเรจ 100GB",
                "การสนับสนุนทางอีเมล",
              ]}
              buttonText="สมัครแพ็คเกจ Pro"
              buttonVariant="default"
              popular={true}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">คำถามที่พบบ่อย</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">มีคำถาม? เราได้รวบรวมคำตอบสำหรับคำถามที่พบบ่อยไว้ที่นี่</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <FaqItem
              question="ReelSmart รองรับไฟล์วิดีโอรูปแบบใดบ้าง?"
              answer="ReelSmart รองรับไฟล์วิดีโอหลากหลายรูปแบบ เช่น MP4, MOV, AVI, MKV, WMV และอื่นๆ อีกมากมาย คุณสามารถอัปโหลดไฟล์วิดีโอจากแหล่งต่างๆ ได้อย่างง่ายดาย"
            />
            <FaqItem
              question="ฉันสามารถใช้ฟีเจอร์ AI ได้กี่ครั้งในแพ็คเกจฟรี?"
              answer="ในแพ็คเกจฟรี คุณสามารถใช้ฟีเจอร์ AI ได้จำกัด โดยสามารถใช้ Prompt-Based Editing ได้ 5 ครั้ง, Auto Subtitles 3 ครั้ง, Auto Sound Effects 3 ครั้ง และ Auto Highlights 3 ครั้งต่อเดือน"
            />
            <FaqItem
              question="ฉันสามารถแชร์โปรเจกต์กับทีมของฉันได้หรือไม่?"
              answer="ได้ ในแพ็คเกจ Pro คุณสามารถแชร์โปรเจกต์กับทีมของคุณได้ โดยสามารถจัดการสิทธิ์การเข้าถึงได้"
            />
            <FaqItem
              question="ReelSmart ทำงานบนเบราว์เซอร์ใดได้บ้าง?"
              answer="ReelSmart ทำงานได้บนเบราว์เซอร์ส่วนใหญ่ เช่น Chrome, Firefox, Safari และ Edge เวอร์ชันล่าสุด เราแนะนำให้ใช้ Chrome เพื่อประสิทธิภาพที่ดีที่สุด"
            />
            <FaqItem
              question="ฉันสามารถยกเลิกการสมัครได้เมื่อไหร่?"
              answer="คุณสามารถยกเลิกการสมัครได้ทุกเมื่อ โดยการยกเลิกจะมีผลเมื่อสิ้นสุดรอบการชำระเงินปัจจุบัน และคุณจะยังคงสามารถใช้งานได้จนกว่าจะสิ้นสุดรอบการชำระเงิน"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">พร้อมที่จะปฏิวัติการตัดต่อวิดีโอของคุณ?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            เริ่มต้นใช้งาน ReelSmart วันนี้ และค้นพบพลังของการตัดต่อวิดีโอด้วย AI
          </p>
          <Link href="/editor">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
              เริ่มต้นใช้งานฟรี <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
