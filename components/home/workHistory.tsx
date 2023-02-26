import Link from "next/link"
import { MdWorkOutline } from "react-icons/md"
import WorkListItem from "./workListItem"

export const workArr: {
  company: string
  position: string
  years: string
  id: string
}[] = [
  {
    company: "BBCSO",
    position: "Principal Bass",
    years: "2019-present",
    id: "job-0"
  },
  {
    company: "LSO",
    position: "Principal Bass",
    years: "2018-19",
    id: "job-1"
  },
  {
    company: "RPO",
    position: "Principal Bass",
    years: "2017-19",
    id: "job-2"
  },
  {
    company: "QSO",
    position: "Principal Bass",
    years: "2010-2017",
    id: "job-3"
  },
]

export default function WorkHistory() {
  return (
    <div className="flex flex-col border shadow-sm m-8 p-6 rounded-lg" data-testid="work-history-div">
      <div className="flex flex-row items-center py-2">
        <div data-testid="work-icon">
          <MdWorkOutline />
        </div>
        <h2 className="ml-2 font-semibold">Work</h2>
      </div>
      <div data-testid="work-arr-div">
        {workArr.map(i => (
          <div key={i.id}>
            <WorkListItem company={i.company} position={i.position} years={i.years}/>
          </div>
        ))}
      </div>
      <Link className="rounded bg-slate-50 hover:bg-slate-100 text-center p-2 text-sm " href="/" data-testid="cv-link">
        Download CV
      </Link>
    </div>
  )
}