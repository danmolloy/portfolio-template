import Image from "next/image";
import { useState } from "react";
import Menu from "./menu";
import { BsMoonStars, BsSun } from 'react-icons/bs'
import Link from "next/link";

interface HeaderProps {
  setShowMenu: () => void
}

export default function Header(props: HeaderProps) {
  const { setShowMenu } = props

  const handleToggle = () => {
    if (!localStorage.theme){
      document.documentElement.classList.add('dark')
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.removeItem("theme")
    }
    
  }

  return (
    <div className="outline w-full flex flex-row h-24 items-center " data-testid="header-div">
      <Link href="/" className="rounded-full overflow-hidden w-16 h-16" data-testid="header-img">
        <Image src={"http://placebeard.it/200/200"} width={75} height={75} alt="Placeholder for a profile pic" title="Profile picture placeholder" />
      </Link>
      <div>
      <button data-testid="menu-btn" onClick={() => setShowMenu()}>
        Menu
      </button>
      <button data-testid="night-toggle" onClick={() => handleToggle()}>
        <div className="hidden dark:flex" data-testid="moon-icon">
          <BsMoonStars />
        </div>
        <div className="dark:hidden flex" data-testid="sun-icon">
          <BsSun />
        </div>
      </button>
      </div>
    </div>
  )
}