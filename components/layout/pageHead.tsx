
interface PageHeadProps {
  headline: string
  text: string
}

export default function PageHead(props: PageHeadProps) {
  const { headline, text } = props
  return (
    <div className="" data-testid="page-head">
      <h1>{headline}</h1>
      <p>{text}</p>
    </div>
  )
}