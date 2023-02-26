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
    <div data-testid={`post-${post.key}`}>
      <p data-testid="post-date">{post.date}</p>
      <h3 data-testid="post-title"></h3>
      <p data-testid="post-preview"></p>
      <Link href="/">Read article</Link>
    </div>
  )
}