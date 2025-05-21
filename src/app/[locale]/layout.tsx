import { routing } from "@/i18n/routing"
import { notFound } from "next/navigation"
import { getMessages, setRequestLocale } from "next-intl/server"
import pick from "lodash.pick"

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  if (!routing.locales.includes(locale)) {
    notFound()
  }
  setRequestLocale(locale)

  const allMessages = await getMessages({ locale })
  const messages = pick(allMessages, "common")

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  )
}