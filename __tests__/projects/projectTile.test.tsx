import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import ProjectTile from "../../components/projects/projectTile";

const mockProps = {
  id: 0,
  imgSrc: "http://placebeard.it/200/200",
  title: "mockTitle",
  blurb: "mockBlurb",
  link: "mockLink"
}

describe("ProjectTile component", () => {
  beforeEach(() => {
    render(<ProjectTile {...mockProps} />)
  })
  it("Renders", () => {
    const projectTile = screen.getByTestId("project-tile")
    expect(projectTile).toBeInTheDocument()
  })
  it("Img is in the document", () => {
    const projectImg = screen.getByTestId("project-img")
    expect(projectImg).toBeInTheDocument()
  })
  it("Title is in the document", () => {
    const projectTile = screen.getByTestId("project-tile")
    expect(projectTile.textContent).toMatch(mockProps.title)
  })
  it("Link is in the document", () => {
    const projectTile = screen.getByTestId("project-tile")
    expect(projectTile.textContent).toMatch(mockProps.link)
  })
})