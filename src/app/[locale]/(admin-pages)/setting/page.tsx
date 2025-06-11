import { routing } from "@/i18n/routing"
import { redirect } from "next/navigation"

export default function Page({ params }: { params: { locale: string } }) {
  const locale = params.locale || routing.defaultLocale;
  redirect(`/${locale}/setting/account`)
}
