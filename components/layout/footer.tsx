import Link from "next/link"

const footerLinks: {
  title: string
  id: string
  link: string
}[] = [
  {
    title: "About",
    id: "about-link",
    link: "/about"
  },
  {
    title: "Projects",
    id: "projects-link",
    link: "/projects"
  },
  {
    title: "Speaking",
    id: "speaking-link",
    link: "/speaking"
  },
  {
    title: "Uses",
    id: "uses-link",
    link: "/uses"
  }
    
]

export default function Footer() {
  return (
    <div data-testid="footer-div">
      <div data-testid="footer-links">
        {footerLinks.map(i => (
          <Link href={i.link} key={i.id} data-testid={i.id}>
            {i.title}
          </Link>
        ))}
      </div>
      <p data-testid="copyright-info">
        Daniel Molloy 2023
      </p>
    </div>
  )
}