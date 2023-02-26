import SocialLinks from "../../components/about/socialLinks";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"

describe("SocialLinks component", () => {
  beforeEach(() => {
    render(<SocialLinks />)
  })
  it("Renders", () => {
    const socialLinks = screen.getByTestId("social-links")
    expect(socialLinks).toBeInTheDocument()
  })
  it("Twitter link is in the document", () => {
    const twitterLink = screen.getByTestId("twitter-link")
    expect(twitterLink).toBeInTheDocument()
  })
  it("Insta link is in the document", () => {
    const instaLink = screen.getByTestId("insta-link")
    expect(instaLink).toBeInTheDocument()
  })
  it("Github link is in the document", () => {
    const githubLink = screen.getByTestId("github-link")
    expect(githubLink).toBeInTheDocument()
  })
  it("LinkedIn link is in the document", () => {
    const linkedInLink = screen.getByTestId("linkedin-link")
    expect(linkedInLink).toBeInTheDocument()
  })
})