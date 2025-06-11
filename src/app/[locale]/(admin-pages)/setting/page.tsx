import { routing } from "@/i18n/routing"
import { redirect } from "next/navigation"

type PageProps = { params: Promise<{ locale: string }> }
export default async function Page({ params }: PageProps) {
  const pageParams = await params
  const locale = pageParams.locale || routing.defaultLocale;
  redirect(`/${locale}/setting/account`)
}
