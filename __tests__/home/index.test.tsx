import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Home from "../../components/home/index"

describe("Home Component", () => {
  beforeEach(() => {
    render(<Home />)
  })
  it("Renders", () => {
    const homeDiv = screen.getByTestId("home-component")
    expect(homeDiv).toBeInTheDocument()
  })
  it("Hero section is in the document", () => {
    const heroDiv = screen.getByTestId("hero-div")
    expect(heroDiv).toBeInTheDocument()
  })
  it("Image Gallery is in the document", () => {
    const imgGallery = screen.getByTestId("img-gallery-div")
    expect(imgGallery).toBeInTheDocument()
  })
  it("Posts Section is in the document", () => {
    const posts = screen.getByTestId("posts-div")
    expect(posts).toBeInTheDocument()
  })
  it("SignUp section is in the document", () => {
    const signUp = screen.getByTestId("sign-up-div")
    expect(signUp).toBeInTheDocument()
  })
  it("Work History section is in the document", () => {
    const workHistory = screen.getByTestId("work-history-div")
    expect(workHistory).toBeInTheDocument()
  })
})