import type { PropsWithChildren } from "react"
import { ReduxProvider } from "./redux-provider"

export const Provider = ({ children }: PropsWithChildren) => {
  return (
    <ReduxProvider>
      {children}
    </ReduxProvider>
  )
}
