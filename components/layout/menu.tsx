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
    <div data-testid="menu-div">
      <div>
        <h2>Navigation</h2>
        <button onClick={() => setShowMenu(false)} data-testid="close-btn">
          <AiOutlineClose />
        </button>
      </div>
      {menuLinks.map(i => (
        <Link href={i.link} key={i.title}>
          <p>{i.title}</p>
        </Link>
      ))}
    </div>
  )
}