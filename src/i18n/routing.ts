import { defineRouting } from "next-intl/routing"
import { DEFAULT_LOCALE } from "@/lib/constants"

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "zh"] as string[],

  // Used when no locale matches
  defaultLocale: DEFAULT_LOCALE,
  localeCookie: false,
})
