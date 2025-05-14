import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "ติดต่อเรา | ReelSmart",
  description: "ติดต่อทีมงาน ReelSmart เพื่อสอบถามข้อมูลเพิ่มเติมหรือขอความช่วยเหลือ",
}

export default function ContactPage() {
  return <ContactPageClient />
}
