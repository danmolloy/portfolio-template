import Image from "next/image"
import Link from "next/link"
import { BsLink45Deg } from "react-icons/bs"

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
    <Link href={"/"} data-testid="project-tile" className="text-zinc-700 dark:text-zinc-400 hover:text-emerald-500 dark:hover:bg-zinc-800 w-full md:w-1/3 hover:bg-slate-50 rounded-lg p-6">
      <div className=" rounded-full overflow-hidden flex justify-center items-center p-1 shadow w-14 h-14">
        <Image className=" rounded-full overflow-hidden w-12 h-12" data-testid="project-img" src={imgSrc} width={50} height={50} alt={"Project preview"} title={title} />
      </div>
      <h2 className="text-zinc-900 hover:text-zinc-900 dark:text-zinc-100 font-semibold py-4">{title}</h2>
      <p className="text-zinc-900 hover:text-zinc-900 dark:text-zinc-400">{blurb.slice(0, 150)}...</p>
      <div className=" flex flex-row items-center py-4 dark:text-zinc-100" >
        <div className="mr-2">
          <BsLink45Deg />
        </div>
        {link}
      </div>
    </Link>
  )
}