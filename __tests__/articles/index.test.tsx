import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Articles from "../../components/articles";

describe("Articles component", () => {
  beforeEach(() => {
    render(<Articles />)
  })
  it("Renders", () => {
    const articlesDiv = screen.getByTestId("articles-div")
    expect(articlesDiv).toBeInTheDocument()
  })
  it("Page Head is in the document", () => {
    const pageHead = screen.getByTestId("page-head")
    expect(pageHead).toBeInTheDocument()
  })
  it("Posts component is in the document", () => {
    const postsDiv = screen.getByTestId("posts-div")
    expect(postsDiv).toBeInTheDocument()
  })
})