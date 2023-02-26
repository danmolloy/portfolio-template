
interface PageHeadProps {
  headline: string
  text: string
}

export default function PageHead(props: PageHeadProps) {
  const { headline, text } = props
  return (
    <div className=" px-4 py-8" data-testid="page-head">
      <h1 className="py-4 font-semibold text-5xl">{headline}</h1>
      <p className="py-2 text-slate-600">{text}</p>
    </div>
  )
}