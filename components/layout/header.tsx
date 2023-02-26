import Image from "next/image";
import { useState } from "react";
import Menu from "./menu";
import { BsMoonStars, BsSun } from 'react-icons/bs'
import Link from "next/link";

interface HeaderProps {
  setShowMenu: () => void
  showMenu: boolean
}

export default function Header(props: HeaderProps) {
  const { setShowMenu, showMenu } = props

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
    <div className={showMenu ? "blur saturate-50 body-width bg-white flex flex-row justify-between h-24 items-center " : "body-width bg-white flex flex-row justify-between h-24 items-center "} data-testid="header-div">
      <div className=" rounded-full overflow-hidden flex items-center  p-1 shadow ml-8">
      <Link href="/" className="rounded-full overflow-hidden w-12 h-12 " data-testid="header-img">
        <Image src={"http://placebeard.it/200/200"} width={50} height={50} alt="Placeholder for a profile pic" title="Profile picture placeholder" />
      </Link>
      </div>
      <div className="mr-8 flex flex-row items-center">
      <button className="hover:bg-slate-100 border shadow-sm rounded-full h-10 px-4 mx-2" data-testid="menu-btn" onClick={() => setShowMenu()}>
        Menu
      </button>
      <button className="hover:bg-slate-100  border shadow-sm rounded-full text-xl h-10 px-4 mx-2" data-testid="night-toggle" onClick={() => handleToggle()}>
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