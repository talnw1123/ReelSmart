import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/landing/navbar"
import Footer from "@/components/landing/footer"
import FaqItem from "@/components/landing/faq-item"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "คำถามที่พบบ่อย | ReelSmart",
  description: "คำตอบสำหรับคำถามที่พบบ่อยเกี่ยวกับ ReelSmart",
}

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              คำถามที่<span className="text-blue-400">พบบ่อย</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">คำตอบสำหรับคำถามที่พบบ่อยเกี่ยวกับ ReelSmart</p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-10 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#general"
              className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full text-sm transition-colors"
            >
              ทั่วไป
            </a>
            <a
              href="#features"
              className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full text-sm transition-colors"
            >
              ฟีเจอร์
            </a>
            <a
              href="#pricing"
              className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full text-sm transition-colors"
            >
              ราคาและการชำระเงิน
            </a>
            <a
              href="#technical"
              className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full text-sm transition-colors"
            >
              เทคนิคและการใช้งาน
            </a>
            <a
              href="#account"
              className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full text-sm transition-colors"
            >
              บัญชีและความเป็นส่วนตัว
            </a>
          </div>

          {/* General Questions */}
          <div id="general" className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-800">คำถามทั่วไป</h2>
            <div className="space-y-4">
              <FaqItem
                question="ReelSmart คืออะไร?"
                answer="ReelSmart เป็นแพลตฟอร์มตัดต่อวิดีโอออนไลน์ที่ใช้เทคโนโลยี AI เพื่อช่วยให้การตัดต่อวิดีโอง่ายและรวดเร็วยิ่งขึ้น ไม่ว่าคุณจะเป็นมือใหม่หรือมืออาชีพ ReelSmart มีเครื่องมือที่จะช่วยให้คุณสร้างวิดีโอที่มีคุณภาพสูงได้อย่างรวดเร็ว"
              />
              <FaqItem
                question="ฉันจำเป็นต้องดาวน์โหลดหรือติดตั้งโปรแกรมหรือไม่?"
                answer="ไม่จำเป็น ReelSmart ทำงานบนเว็บเบราว์เซอร์ คุณสามารถใช้งานได้ทันทีโดยไม่ต้องดาวน์โหลดหรือติดตั้งโปรแกรมใดๆ เพียงแค่มีการเชื่อมต่ออินเทอร์เน็ตและเว็บเบราว์เซอร์ที่ทันสมัย"
              />
              <FaqItem
                question="ReelSmart เหมาะกับใคร?"
                answer="ReelSmart เหมาะสำหรับทุกคนที่ต้องการตัดต่อวิดีโอ ไม่ว่าจะเป็นผู้เริ่มต้นที่ไม่มีประสบการณ์ ครีเอเตอร์คอนเทนต์ นักการตลาดดิจิทัล หรือมืออาชีพด้านวิดีโอ ด้วยอินเทอร์เฟซที่ใช้งานง่ายและฟีเจอร์ AI ที่ช่วยอำนวยความสะดวก"
              />
              <FaqItem
                question="ฉันสามารถใช้งาน ReelSmart บนอุปกรณ์ใดได้บ้าง?"
                answer="ReelSmart สามารถใช้งานได้บนคอมพิวเตอร์ แล็ปท็อป แท็บเล็ต และสมาร์ทโฟนที่มีเว็บเบราว์เซอร์ที่ทันสมัย เช่น Chrome, Firefox, Safari หรือ Edge เวอร์ชันล่าสุด อย่างไรก็ตาม เราแนะนำให้ใช้งานบนคอมพิวเตอร์หรือแล็ปท็อปเพื่อประสบการณ์การใช้งานที่ดีที่สุด"
              />
              <FaqItem
                question="ฉันสามารถใช้งาน ReelSmart ออฟไลน์ได้หรือไม่?"
                answer="ไม่ได้ ReelSmart เป็นแอปพลิเคชันบนเว็บที่ต้องการการเชื่อมต่ออินเทอร์เน็ตเพื่อใช้งาน อย่างไรก็ตาม เรากำลังพัฒนาโหมดออฟไลน์สำหรับผู้ใช้ Pro ซึ่งจะเปิดตัวในอนาคต"
              />
            </div>
          </div>

          {/* Features Questions */}
          <div id="features" className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-800">คำถามเกี่ยวกับฟีเจอร์</h2>
            <div className="space-y-4">
              <FaqItem
                question="Prompt-Based Editing คืออะไร?"
                answer="Prompt-Based Editing เป็นฟีเจอร์ที่ใช้ AI เพื่อตัดต่อวิดีโอตามคำสั่งที่คุณป้อน เช่น 'ตัดฉากที่ไม่มีคนพูด', 'เพิ่มสโลว์โมชันในฉากแอคชัน' หรือ 'สร้างไฮไลท์ 30 วินาที' AI จะวิเคราะห์วิดีโอของคุณและทำการตัดต่อตามคำสั่งโดยอัตโนมัติ"
              />
              <FaqItem
                question="Auto Subtitles ทำงานอย่างไร?"
                answer="Auto Subtitles ใช้เทคโนโลยีการรู้จำเสียงพูด (Speech Recognition) เพื่อแปลงเสียงในวิดีโอของคุณเป็นข้อความโดยอัตโนมัติ คุณสามารถแก้ไขคำบรรยายที่สร้างขึ้น ปรับแต่งรูปแบบและสไตล์ และแปลเป็นภาษาอื่นได้"
              />
              <FaqItem
                question="Auto Sound Effects มีเสียงเอฟเฟกต์ให้เลือกกี่แบบ?"
                answer="Auto Sound Effects มีคลังเสียงเอฟเฟกต์มากกว่า 1,000 เสียง ครอบคลุมหลากหลายหมวดหมู่ เช่น เสียงแอมเบียนท์ เสียงเอฟเฟกต์สำหรับการเปลี่ยนฉาก เสียงดนตรีประกอบ และอื่นๆ อีกมากมาย AI จะวิเคราะห์เนื้อหาวิดีโอของคุณและแนะนำเสียงเอฟเฟกต์ที่เหมาะสม"
              />
              <FaqItem
                question="Auto Highlights สามารถตรวจจับช่วงเวลาสำคัญในวิดีโอได้อย่างไร?"
                answer="Auto Highlights ใช้ AI วิเคราะห์วิดีโอของคุณเพื่อตรวจจับช่วงเวลาสำคัญ เช่น การเคลื่อนไหวที่น่าสนใจ การแสดงออกทางสีหน้า การพูดที่สำคัญ หรือช่วงที่มีการเปลี่ยนแปลงอย่างมีนัยสำคัญ จากนั้นจะรวบรวมช่วงเวลาเหล่านี้เป็นวิดีโอไฮไลท์ที่น่าสนใจ"
              />
              <FaqItem
                question="ReelSmart รองรับไฟล์วิดีโอรูปแบบใดบ้าง?"
                answer="ReelSmart รองรับไฟล์วิดีโอหลากหลายรูปแบบ เช่น MP4, MOV, AVI, MKV, WMV และอื่นๆ อีกมากมาย สำหรับไฟล์เสียง เรารองรับ MP3, WAV, AAC และรูปแบบเสียงยอดนิยมอื่นๆ"
              />
            </div>
          </div>

          {/* Pricing Questions */}
          <div id="pricing" className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-800">คำถามเกี่ยวกับราคาและการชำระเงิน</h2>
            <div className="space-y-4">
              <FaqItem
                question="ฉันสามารถใช้งาน ReelSmart ได้ฟรีหรือไม่?"
                answer="ใช่ เรามีแพ็คเกจฟรีที่คุณสามารถใช้งานได้โดยไม่มีค่าใช้จ่าย แพ็คเกจฟรีมีข้อจำกัดบางประการ เช่น ความยาววิดีโอสูงสุด 10 นาที ความละเอียดในการส่งออกสูงสุด 720p และการใช้ฟีเจอร์ AI ที่จำกัด"
              />
              <FaqItem
                question="แพ็คเกจ Pro มีราคาเท่าไร?"
                answer="แพ็คเกจ Pro มีราคา 299 บาทต่อเดือน หรือ 2,990 บาทต่อปี (ประหยัด 20%) แพ็คเกจ Pro ให้คุณใช้งานฟีเจอร์ทั้งหมดได้ไม่จำกัด รวมถึงความยาววิดีโอไม่จำกัด ความละเอียดในการส่งออกสูงสุด 4K และคลาวด์สตอเรจ 100GB"
              />
              <FaqItem
                question="ฉันสามารถยกเลิกการสมัครได้เมื่อไหร่?"
                answer="คุณสามารถยกเลิกการสมัครได้ทุกเมื่อ โดยการยกเลิกจะมีผลเมื่อสิ้นสุดรอบการชำระเงินปัจจุบัน และคุณจะยังคงสามารถใช้งานได้จนกว่าจะสิ้นสุดรอบการชำระเงิน"
              />
              <FaqItem
                question="มีการทดลองใช้งานแพ็คเกจ Pro หรือไม่?"
                answer="ใช่ เรามีการทดลองใช้งานแพ็คเกจ Pro ฟรี 7 วัน สำหรับผู้ใช้ใหม่ทุกคน คุณสามารถยกเลิกได้ก่อนสิ้นสุดระยะเวลาทดลองใช้งานโดยไม่มีค่าใช้จ่าย"
              />
              <FaqItem
                question="ReelSmart รองรับวิธีการชำระเงินแบบใดบ้าง?"
                answer="เรารองรับการชำระเงินผ่านบัตรเครดิต/เดบิต (Visa, MasterCard, American Express), PayPal, และการโอนเงินผ่านธนาคาร สำหรับลูกค้าในประเทศไทย เรายังรองรับ QR Payment และ PromptPay อีกด้วย"
              />
            </div>
          </div>

          {/* Technical Questions */}
          <div id="technical" className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-800">คำถามเกี่ยวกับเทคนิคและการใช้งาน</h2>
            <div className="space-y-4">
              <FaqItem
                question="ReelSmart ทำงานบนเบราว์เซอร์ใดได้บ้าง?"
                answer="ReelSmart ทำงานได้บนเบราว์เซอร์ส่วนใหญ่ เช่น Chrome, Firefox, Safari และ Edge เวอร์ชันล่าสุด เราแนะนำให้ใช้ Chrome เพื่อประสิทธิภาพที่ดีที่สุด"
              />
              <FaqItem
                question="ฉันต้องมีคอมพิวเตอร์ที่มีสเปคสูงเพื่อใช้งาน ReelSmart หรือไม่?"
                answer="ไม่จำเป็น เนื่องจาก ReelSmart ประมวลผลส่วนใหญ่บนเซิร์ฟเวอร์ของเรา คุณสามารถใช้งานได้บนคอมพิวเตอร์ทั่วไป อย่างไรก็ตาม เราแนะนำให้มี RAM อย่างน้อย 4GB และการเชื่อมต่ออินเทอร์เน็ตที่เสถียรเพื่อประสบการณ์การใช้งานที่ดีที่สุด"
              />
              <FaqItem
                question="ฉันสามารถแชร์โปรเจกต์กับผู้อื่นได้หรือไม่?"
                answer="ใช่ ผู้ใช้แพ็คเกจ Pro สามารถแชร์โปรเจกต์กับผู้อื่นได้ โดยสามารถกำหนดสิทธิ์การเข้าถึงเป็นแบบดูอย่างเดียวหรือแก้ไขได้ ผู้ที่คุณแชร์โปรเจกต์ด้วยไม่จำเป็นต้องมีแพ็คเกจ Pro"
              />
              <FaqItem
                question="ฉันสามารถส่งออกวิดีโอในรูปแบบใดได้บ้าง?"
                answer="คุณสามารถส่งออกวิดีโอในรูปแบบ MP4, MOV, AVI, GIF และอื่นๆ อีกมากมาย สำหรับแพ็คเกจ Pro คุณยังสามารถปรับแต่งค่า bitrate, codec และการบีบอัดได้ตามต้องการ"
              />
              <FaqItem
                question="วิดีโอที่ส่งออกจะมีลายน้ำหรือไม่?"
                answer="สำหรับแพ็คเกจฟรี วิดีโอที่ส่งออกจะมีลายน้ำขนาดเล็กของ ReelSmart สำหรับแพ็คเกจ Pro วิดีโอที่ส่งออกจะไม่มีลายน้ำ"
              />
            </div>
          </div>

          {/* Account Questions */}
          <div id="account" className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-800">คำถามเกี่ยวกับบัญชีและความเป็นส่วนตัว</h2>
            <div className="space-y-4">
              <FaqItem
                question="ฉันจำเป็นต้องสร้างบัญชีเพื่อใช้งาน ReelSmart หรือไม่?"
                answer="ใช่ คุณจำเป็นต้องสร้างบัญชีเพื่อใช้งาน ReelSmart แม้แต่ในแพ็คเกจฟรี การสร้างบัญชีช่วยให้เราสามารถบันทึกโปรเจกต์ของคุณและให้คุณกลับมาทำงานต่อได้ในภายหลัง"
              />
              <FaqItem
                question="ReelSmart จัดการกับข้อมูลส่วนตัวของฉันอย่างไร?"
                answer="เราให้ความสำคัญกับความเป็นส่วนตัวของคุณอย่างมาก เราไม่ขายหรือแบ่งปันข้อมูลส่วนตัวของคุณกับบุคคลที่สาม วิดีโอและโปรเจกต์ของคุณจะถูกเก็บไว้อย่างปลอดภัยบนเซิร์ฟเวอร์ของเรา และเฉพาะคุณเท่านั้นที่สามารถเข้าถึงได้ (เว้นแต่คุณจะแชร์กับผู้อื่น) คุณสามารถอ่านนโยบายความเป็นส่วนตัวของเราเพื่อข้อมูลเพิ่มเติม"
              />
              <FaqItem
                question="ฉันสามารถลบบัญชีของฉันได้หรือไม่?"
                answer="ได้ คุณสามารถลบบัญชีของคุณได้ตลอดเวลาในหน้าการตั้งค่าบัญชี เมื่อคุณลบบัญชี ข้อมูลส่วนตัวและโปรเจกต์ทั้งหมดของคุณจะถูกลบออกจากระบบของเราอย่างถาวร"
              />
              <FaqItem
                question="ฉันสามารถเปลี่ยนอีเมลหรือรหัสผ่านของฉันได้หรือไม่?"
                answer="ได้ คุณสามารถเปลี่ยนอีเมลและรหัสผ่านของคุณได้ในหน้าการตั้งค่าบัญชี เราแนะนำให้ใช้รหัสผ่านที่แข็งแรงและไม่ซ้ำกับเว็บไซต์อื่นเพื่อความปลอดภัยสูงสุด"
              />
              <FaqItem
                question="ฉันจะติดต่อฝ่ายสนับสนุนได้อย่างไร?"
                answer="คุณสามารถติดต่อฝ่ายสนับสนุนของเราได้ผ่านทางอีเมล support@videoeditorai.com หรือแชทสดในเว็บไซต์ของเรา สำหรับผู้ใช้แพ็คเกจ Pro เรามีช่องทางสนับสนุนพิเศษที่ตอบกลับเร็วกว่า"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">ยังมีคำถามอื่นอีกหรือไม่?</h2>
            <p className="text-xl text-gray-400 mb-8">
              หากคุณไม่พบคำตอบที่คุณกำลังมองหา โปรดติดต่อทีมสนับสนุนของเรา เรายินดีที่จะช่วยเหลือคุณ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  ติดต่อเรา
                </Button>
              </Link>
              <Link href="mailto:support@videoeditorai.com">
                <Button variant="outline" size="lg" className="border-gray-600 hover:bg-gray-800">
                  support@videoeditorai.com
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
