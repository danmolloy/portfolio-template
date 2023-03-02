import { AiOutlineArrowRight } from "react-icons/ai"

interface SectionProps {
  date: string
  title: string
  body: string
  key: number
}

export default function SpeakingSection(props: SectionProps) {
  const { title, body, date } = props

  return (
    <div className="hover:cursor-pointer text-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800 hover:bg-zinc-100 rounded-lg p-6 mx-2" data-testid="section-div">
      <p className="border-l-2 dark:border-l-zinc-400 pl-2 my-2 text-slate-600 text-sm">{date}</p>
      <h3 className="dark:text-zinc-100 text-black hover:text-black font-semibold py-4">{title}</h3>
      <p className="  text-sm">{body.slice(0, 250)}</p>
      <div className=" flex flex-row items-center py-4 dark:text-emerald-300 text-emerald-500 hover:text-emerald-400 my-2">
        <p>Watch Video</p>
        <div className="px-2">
          <AiOutlineArrowRight />
        </div>
      </div>
    </div>
  )
}