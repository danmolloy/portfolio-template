import Link from "next/link"

interface PostPreviewProps {
  post: {
    key: number
    date: string
    title: string
    body: string
  }
}

export default function PostPreview(props: PostPreviewProps) {
  const { post } = props
  return (
    <div className="p-8" data-testid={`post-${post.key}`}>
      <p className="border-l-2 pl-2 my-2 text-slate-600 text-sm" data-testid="post-date">{post.date}</p>
      <h3 className="font-semibold py-1 my-2" data-testid="post-title">{post.title}</h3>
      <p className="text-sm font-light text-slate-600 my-2" data-testid="post-preview">{`${post.body.slice(0, 250)}...`}</p>
      <Link className="text-sm text-emerald-500 hover:text-emerald-400 my-2" href="/">Read article</Link>
    </div>
  )
}