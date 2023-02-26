import Link from "next/link"
import { AiOutlineClose } from "react-icons/ai"

interface MenuProps {
  setShowMenu: (arg: boolean) => void
}

const menuLinks: {
  title: string
  link: string
}[] = [
  {
    title: "About",
    link: "/about"
  },
  {
    title: "Articles",
    link: "/articles"
  },
  {
    title: "Projects",
    link: "/projects"
  },
  {
    title: "Speaking",
    link: "/speaking"
  },
  {
    title: "Uses",
    link: "/uses"
  }
]

export default function Menu(props: MenuProps) {
  const { setShowMenu } = props
  return(
    <div className="shadow p-4 rounded-lg w-4/5 mt-16 absolute z-10 bg-white" data-testid="menu-div">
      <div className="mb-2 flex flex-row justify-between">
        <h2 className="text-slate-600 text-sm">Navigation</h2>
        <button className="text-lg text-slate-600" onClick={() => setShowMenu(false)} data-testid="close-btn">
          <AiOutlineClose />
        </button>
      </div>
      {menuLinks.map(i => (
        <Link href={i.link} key={i.title}>
          <p className="font-light border-b py-1 my-1 px-2">{i.title}</p>
        </Link>
      ))}
    </div>
  )
}