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
    <div className="hover:cursor-pointer text-slate-600 hover:text-emerald-500 hover:bg-slate-50 rounded-lg p-6 mx-2" data-testid="section-div">
      <p className="border-l-2 pl-2 my-2 text-slate-600 text-sm">{date}</p>
      <h3 className="text-black hover:text-black font-semibold py-4">{title}</h3>
      <p className="text-slate-700  text-sm">{body.slice(0, 250)}</p>
      <div className=" flex flex-row items-center py-4">
        <p>Watch Video</p>
        <div className="px-2">
          <AiOutlineArrowRight />
        </div>
      </div>
    </div>
  )
}