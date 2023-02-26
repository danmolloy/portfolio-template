interface WorkListItemProps {
  company: string
  position: string
  years: string
}

export default function WorkListItem(props: WorkListItemProps) {
  const { company, position, years} = props
  return (
    <div className="flex flex-row justify-between py-2" data-testid="work-list-item">
      <div className="flex flex-col ">
        <h4 className="font-semibold text-sm">{company}</h4>
        <p className="text-sm text-slate-600">{position}</p>
      </div>
      <p className="text-sm text-slate-600">{years}</p>
    </div>
  )
}