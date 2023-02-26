interface WorkListItemProps {
  company: string
  position: string
  years: string
}

export default function WorkListItem(props: WorkListItemProps) {
  const { company, position, years} = props
  return (
    <div data-testid="work-list-item">
      <div>
        <h4>{company}</h4>
        <p>{position}</p>
      </div>
      <p>{years}</p>
    </div>
  )
}