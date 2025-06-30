import type { PropsWithChildren } from "react"
import { ReduxProvider } from "./redux-provider"
import { Sonner } from "@/shared/ui"

export const Provider = ({ children }: PropsWithChildren) => {
  return (
    <ReduxProvider>
      {children}
      <Sonner />
    </ReduxProvider>
  )
}
