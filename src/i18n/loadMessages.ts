import { INTL_MODULES } from "@/lib/constants"

const messagesCache: Record<string, Record<string, string>> = {}

export async function loadMessages(locale: string) {
  if (messagesCache[locale]) {
    return messagesCache[locale]
  }

  const messages: Record<string, string> = {}

  const namespaces = INTL_MODULES

  for (const ns of namespaces) {
    messages[ns] = (await import(`../intl/${locale}/${ns}.json`)).default
  }

  messagesCache[locale] = messages
  return messages
}
