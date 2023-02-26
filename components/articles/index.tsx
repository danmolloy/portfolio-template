import React from "react"
import PageHead from "../layout/pageHead"
import Posts from "../home/posts"

const headInfo = {
  headline: "My posts",
  text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
}

export default function Articles() {
  return (
    <div data-testid="articles-div">
      <PageHead {...headInfo} />
      <Posts />
    </div>
  )
}