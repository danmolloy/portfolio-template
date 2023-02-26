import About from "../../components/about";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"

describe("About component", () => {
  beforeEach(() => {
    render(<About />)
  })
  it("renders", () => {
    const aboutDiv = screen.getByTestId("about-div")
    expect(aboutDiv).toBeInTheDocument()
  })
  it("About img is in the document", () => {
    const aboutImg = screen.getByTestId("about-img")
    expect(aboutImg).toBeInTheDocument()
  })
  it("Page Head is in the document", () => {
    const pageHead = screen.getByTestId("page-head")
    expect(pageHead).toBeInTheDocument()
  })
  it("Social media links div is in the document", () => {
    const socialLinks = screen.getByTestId("social-links")
    expect(socialLinks).toBeInTheDocument()
  })
  it("email address and icon is in the document", () => {
    const emailLink = screen.getByTestId("email-link")
    expect(emailLink).toBeInTheDocument()
  })
})