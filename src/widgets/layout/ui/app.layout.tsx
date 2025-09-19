import type { PropsWithChildren } from "react"

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="app">
      <header>{/* your header */}</header>

      <main className="flex flex-col flex-1">
        {children}
      </main>

      <footer>{/* your footer */}</footer>
    </div>
  )
}
