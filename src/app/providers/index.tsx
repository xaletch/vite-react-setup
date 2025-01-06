import { FC, PropsWithChildren } from 'react'
import { ReduxProvider } from './redux-provider'

export const Provider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReduxProvider>
      {children}
    </ReduxProvider>
  )
}
