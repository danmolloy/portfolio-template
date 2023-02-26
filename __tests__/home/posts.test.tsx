import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Posts, { postsArr } from '../../components/home/posts'

describe("Posts Component", () => {
  beforeEach(() => {
    render(<Posts />)
  })
  it("Renders", () => {
    const postsDiv = screen.getByTestId("posts-div")
    expect(postsDiv).toBeInTheDocument()
  })
  it("All posts are in the document", () => {
    let post;
    for(let i = 0; i < postsArr.length; i++) {
      post = screen.getByTestId(`post-${postsArr[i].key}`)
      expect(post).toBeInTheDocument()
    }
  })
})