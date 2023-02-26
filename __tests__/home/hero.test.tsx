import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Hero from "../../components/home/hero"

describe("Hero component", () => {
  beforeEach(() => {
    render(<Hero />)
  })
  it("Renders", () => {
    const heroDiv = screen.getByTestId("hero-div")
    expect(heroDiv).toBeInTheDocument()
  })
  it("hero-h1 is in the document", () => {
    const heroH1 = screen.getByTestId("hero-h1")
    expect(heroH1).toBeInTheDocument()
  })
  it("hero-blurb is in the document", () => {
    const heroBlurb = screen.getByTestId("hero-blurb")
    expect(heroBlurb).toBeInTheDocument()
  })
  it("social-links are in the document", () => {
    const socialLinks = screen.getByTestId("social-links")
    expect(socialLinks).toBeInTheDocument()
  })
  it("Twitter link is in the document", () => {
    const twitterLink = screen.getByTestId("twitter-link")
    expect(twitterLink).toBeInTheDocument()
  })
  it("Instagram link is in the document", () => {
    const instaLink = screen.getByTestId("insta-link")
    expect(instaLink).toBeInTheDocument()
  })
  it("GitHub link is in the document", () => {
    const gitHubLink = screen.getByTestId("github-link")
    expect(gitHubLink).toBeInTheDocument()
  })
  it("LinkedIn link is in the document", () => {
    const linkedIn = screen.getByTestId("linkedin-link")
    expect(linkedIn).toBeInTheDocument()
  })
})