import Link from "next/link";
import { menuLinks } from "./menu";
import { BsMoonStars, BsSun } from "react-icons/bs";
import Image from "next/image";
import { useRouter } from "next/router";

interface HeaderProps {
  setShowMenu: () => void
  showMenu: boolean
  offset: number
}

export default function StickyHeader(props: HeaderProps) {
  const { setShowMenu, showMenu, offset } = props
  const router = useRouter()


  const offsetFormula = offset < 100 ? 100 - (offset/2): 50

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
    <div className="bg-white dark:bg-zinc-900 w-screen sm:body-width z-20 w-full flex flex-col  items-center">
      <div className="pb-2 mt-2 sticky top-4 flex flex-row items-center justify-center ml-24 self-end md:self-center">
      <div className="border shadow-sm px-8 rounded-full hidden md:flex flex-row justify-evenly items-center text-slate-800 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-600">
        {menuLinks.map(i => (
          <Link className={String(router.pathname).slice(1) === i.title.toLowerCase() 
          ? " px-2 z-40 py-2 text-emerald-500 border-b bg-gradient dark:border-0 "
          : " px-2 py-2 hover:text-emerald-500"} href={i.link} key={i.title}>
            {i.title}
          </Link>
        ))}
      </div>
      <div className=" mr-8 flex flex-row ">
      <button className=" md:hidden text-slate-800 font-normal hover:bg-slate-100 dark:hover:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-600 border shadow-sm rounded-full h-10 px-4 mx-2" data-testid="menu-btn" onClick={() => setShowMenu()}>
        Menu
      </button>
      <button className=" hover:bg-slate-100 border shadow-sm rounded-full text-xl h-10 px-4 mx-2 dark:hover:bg-zinc-800 dark:text-emerald-300 dark:border-zinc-600" data-testid="night-toggle" onClick={() => handleToggle()}>
        <div className="hidden dark:flex" data-testid="moon-icon">
          <BsMoonStars />
        </div>
        <div className="dark:hidden flex" data-testid="sun-icon">
          <BsSun />
        </div>
      </button>
      </div>
      </div>
      {router.pathname === "/"
      ? <div className={offset > 100 
          ? "self-start mt-16 ml-12 rounded-full overflow-hidden flex items-center p-1 shadow" 
          : " self-start mt-16 ml-12 rounded-full overflow-hidden flex items-center p-1"}>
        <Image className="rounded-full " src={"/images/dan-boat-close.jpg"} width={offsetFormula} height={offsetFormula} alt="Placeholder for a profile pic" title="Profile picture placeholder" />
      </div>
      : <Link href="/" className="absolute self-start top-2 ml-12 rounded-full overflow-hidden flex items-center p-1 shadow">
          <Image className="rounded-full " src={"/images/dan-boat-close.jpg"} width={50} height={50} alt="Placeholder for a profile pic" title="Profile picture placeholder" />
      </Link>
      }
    </div>
  )
}