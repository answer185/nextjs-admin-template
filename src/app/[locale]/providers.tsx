"use client"

import { type AbstractIntlMessages } from "next-intl"
import { TooltipProvider } from "@/components/ui/tooltip"
import I18nProvider from "@/components/I18nProvider"
import ThemeProvider from "@/components/ThemeProvider"
import { FontProvider } from "@/context/font-context"

export default function Providers({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode
  locale: string
  messages: AbstractIntlMessages
}) {
  return (
    <I18nProvider locale={locale} messages={messages}>
      <ThemeProvider>
        <FontProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </FontProvider>
      </ThemeProvider>
    </I18nProvider>
  )
}
