import { Provider } from "react-redux"
import { store } from "./conf"
import type { PropsWithChildren } from "react"

export const ReduxProvider = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store} children={children} />
  )
}
