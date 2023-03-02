import { useState } from "react";
import Footer from "./footer";
import Header from "./header";
import Menu from "./menu";

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  const { children } = props
  const [showMenu, setShowMenu] = useState<boolean>(false)
  return (
    <div className="dark:bg-black flex flex-col items-center w-screen bg-gray-50" data-testid="layout-div">
      <Header showMenu={showMenu} setShowMenu={() => setShowMenu(!showMenu)}/>
      {showMenu 
      && <Menu setShowMenu={(arg) => setShowMenu(arg)}/>}
      <div className={showMenu ? "text-black dark:bg-zinc-900 blur saturate-50 body-width bg-white " : " dark:bg-zinc-900 body-width bg-white"} data-testid="main-div">
        {children}
      </div>
      <Footer />
    </div>
  )
}