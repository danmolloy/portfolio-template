import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import PostPreview from "../../components/home/postPreview";

const mockProps = {
  post: {
    key: 1,
    date: 'dateString',
    title: "titleString",
    body: "bodyString"
  }
}

describe("PostPreview component", () => {
  beforeEach(() => {
    render(<PostPreview {...mockProps} />)
  })
  it("Renders", () => {
    const post = screen.getByTestId(`post-${mockProps.post.key}`)
    expect(post).toBeInTheDocument()
  })
  it("Date is in the document", () => {
    const postDate = screen.getByTestId(`post-date`)
    expect(postDate).toBeInTheDocument()
  })
  it("Title is in the document", () => {
    const postTitle = screen.getByTestId(`post-title`)
    expect(postTitle).toBeInTheDocument()
  })
  it("Preview is in the document", () => {
    const preview = screen.getByTestId(`post-preview`)
    expect(preview).toBeInTheDocument()
  })
  it("Read Article button is in the document", () => {
    const readArticle = screen.getByText("Read article")
    expect(readArticle).toBeInTheDocument()
  })
})