import Link from "next/link"
import type { Metadata } from "next"
import LoginForm from "@/components/auth/login-form"

export const metadata: Metadata = {
  title: "เข้าสู่ระบบ | ReelSmart",
  description: "เข้าสู่ระบบเพื่อใช้งาน ReelSmart",
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="flex items-center">
            <img
                  src="https://raw.githubusercontent.com/talnw1123/ReelSmart/main/public/LOGO.png"
                  alt="ReelSmart Logo"
                  className="w-10 h-10 object-contain"
                />
            <span className="text-xl font-bold">ReelSmart</span>
          </Link>
          <Link href="/register" className="text-sm text-blue-400 hover:text-blue-300">
            ยังไม่มีบัญชี? สมัครสมาชิก
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center py-12">
          <div className="w-full max-w-md">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur-xl opacity-20 rounded-2xl"></div>
              <div className="relative bg-gray-900 border border-gray-800 rounded-xl p-8 shadow-2xl">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold mb-2">เข้าสู่ระบบ</h1>
                  <p className="text-gray-400">เข้าสู่ระบบเพื่อใช้งาน ReelSmart</p>
                </div>

                <LoginForm />

                <div className="mt-6 text-center text-sm text-gray-400">
                  <p>
                    การเข้าสู่ระบบถือว่าคุณยอมรับ{" "}
                    <Link href="#" className="text-blue-400 hover:text-blue-300">
                      เงื่อนไขการใช้งาน
                    </Link>{" "}
                    และ{" "}
                    <Link href="#" className="text-blue-400 hover:text-blue-300">
                      นโยบายความเป็นส่วนตัว
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href="/" className="text-sm text-gray-400 hover:text-white">
                กลับไปยังหน้าหลัก
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
