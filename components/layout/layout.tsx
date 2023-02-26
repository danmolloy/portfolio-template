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
    <div className="" data-testid="layout-div">
      <Header setShowMenu={() => setShowMenu(!showMenu)}/>
      {showMenu 
      && <Menu />}
      <div data-testid="main-div">
        {children}
      </div>
      <Footer />
    </div>
  )
}