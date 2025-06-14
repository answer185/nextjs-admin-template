"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { COLOR_MODE_STORAGE_KEY } from "@/lib/constants"

/**
 * Primary theming wrapper for use with color mode. Uses the theme provider
 * from `next-themes`.
 *
 * Applied to _app.tsx as the main provider for the project, and supplied as the
 * primary decorator to Storybook.
 */
const ThemeProvider = ({ children }: Pick<ThemeProviderProps, "children">) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      disableTransitionOnChange
      storageKey={COLOR_MODE_STORAGE_KEY}
    >
      {children}
    </NextThemesProvider>
  )
}

export default ThemeProvider
