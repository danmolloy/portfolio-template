import Link from "next/link"
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai"

const linksArr: {
  id: string
  href: string
  title: string
  icon: React.ReactNode
}[] = [
  {
    id: "twitter-link",
    href: "/",
    title: "Twitter",
    icon: <AiOutlineTwitter />
  },
  {
    id: "insta-link",
    href: "/",
    title: "Instagram",
    icon: <AiOutlineInstagram />
  },
  {
    id: "github-link",
    href: "/",
    title: "GitHub",
    icon: <AiOutlineGithub />
  },
  {
    id: "linkedin-link",
    href: "/",
    title: "LinkedIn",
    icon: <AiOutlineLinkedin />
  },
]

export default function SocialLinks() {
  return (
    <div data-testid="social-links">
      {linksArr.map(i => (
        <div key={i.id} data-testid={i.id}>
          <div>
            {i.icon}
          </div>
          <Link href={i.href}>{i.title}</Link>
        </div>
      ))}
    </div>
  )
}