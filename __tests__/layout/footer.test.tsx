import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Footer from "../../components/layout/footer";

describe("Footer component", () => {
  beforeEach(() => {
    render(<Footer />)
  })
  it("Renders", () => {
    const footerDiv = screen.getByTestId("footer-div")
    expect(footerDiv).toBeInTheDocument()
  })
  it("Links div is in the documents", () => {
    const footerLinks = screen.getByTestId("footer-links")
    expect(footerLinks).toBeInTheDocument()
  })
  it("About link is in the document", () => {
    const aboutLink = screen.getByTestId("about-link")
    expect(aboutLink).toBeInTheDocument()
  })
  it("Projects link is in the document", () => {
    const projectsLink = screen.getByTestId("projects-link")
    expect(projectsLink).toBeInTheDocument()
  })
  it("Speaking link is in the document", () => {
    const speakingLink = screen.getByTestId("speaking-link")
    expect(speakingLink).toBeInTheDocument()
  })
  it("Uses link is in the document", () => {
    const usesLink = screen.getByTestId("uses-link")
    expect(usesLink).toBeInTheDocument()
  })
  it("Copyright info is in the document", () => {
    const copyrightInfo = screen.getByTestId("copyright-info")
    expect(copyrightInfo).toBeInTheDocument()
  })

})