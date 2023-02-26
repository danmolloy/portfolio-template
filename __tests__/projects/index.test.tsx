import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Projects from "../../components/projects";

describe("Projects component", () => {
  beforeEach(() => {
    render(<Projects />)
  })
  it("Renders", () => {
    const projectsIndex = screen.getByTestId("projects-index")
    expect(projectsIndex).toBeInTheDocument()
  })
  it("PageHead is in the document", () => {
    const pageHead = screen.getByTestId("page-head")
    expect(pageHead).toBeInTheDocument()
  })
  it("All expected projects are in the document", () => {
    const projectTiles = screen.getAllByTestId("project-tile")
    expect(projectTiles).toHaveLength(4)
  })
})