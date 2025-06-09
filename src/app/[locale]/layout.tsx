import { routing } from "@/i18n/routing"
import { getMessages, setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import Providers from "./providers"

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale)) {
    notFound()
  }
  setRequestLocale(locale)

  const allMessages = await getMessages({ locale })
  // const messages = pick(allMessages, "common")

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <Providers locale={locale} messages={allMessages}>
          {children}
        </Providers>
      </body>
    </html>
  )
}
