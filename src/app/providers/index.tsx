import type { PropsWithChildren } from "react"
import { ReduxProvider } from "./redux-provider"
import { Sonner } from "@/shared/ui"
import { ThemeProvider } from "./theme-provider"

export const Provider = ({ children }: PropsWithChildren) => {
  return (
    <ReduxProvider>
      <ThemeProvider defaultTheme="light">
        {children}
        <Sonner />
      </ThemeProvider>
    </ReduxProvider>
  )
}
