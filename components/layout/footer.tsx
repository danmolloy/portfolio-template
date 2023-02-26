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
    <div className="body-width text-sm flex flex-row justify-evenly items-center h-32  border-t bg-white" data-testid="footer-div">
      <div className=" flex flex-row" data-testid="footer-links">
        {footerLinks.map(i => (
          <Link className="hover:text-emerald-500 m-1 p-1" href={i.link} key={i.id} data-testid={i.id}>
            {i.title}
          </Link>
        ))}
      </div>
      <p className="font-light text-slate-400" data-testid="copyright-info">
        Daniel Molloy 2023
      </p>
    </div>
  )
}