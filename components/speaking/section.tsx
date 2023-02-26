
interface SectionProps {
  date: string
  title: string
  body: string
  key: number
}

export default function SpeakingSection(props: SectionProps) {
  const { title, body, date } = props

  return (
    <div data-testid="section-div">
      <p>{date}</p>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  )
}