import { Footer, Header } from "@/widgets"
import { Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <main className="main">
        <Outlet />
      </main>
      
      <footer>
        <Footer />
      </footer>
    </>
  )
}
