import Image from "next/image"
import Link from "next/link"

interface ProjectTileProps {
  id: number
  imgSrc: string
  title: string
  blurb: string
  link: string
}

export default function ProjectTile(props: ProjectTileProps) {
  const { imgSrc, title, blurb, link } = props

  return (
    <div data-testid="project-tile">
      <Image data-testid="project-img" src={imgSrc} width={75} height={75} alt={"Project preview"} title={title} />
      <h2>{title}</h2>
      <p>{blurb}</p>
      <Link href={"/"}>{link}</Link>
    </div>
  )
}