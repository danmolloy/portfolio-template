import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Layout from "../../components/layout/layout"

const mockProps = {
  children: <div></div>
}

describe("Layout component", () => {
  beforeEach(() => {
    render(<Layout {...mockProps}/>)
  })
  it("Renders", () => {
    const layoutDiv = screen.getByTestId("layout-div")
    expect(layoutDiv).toBeInTheDocument()
  })
  it("Header is in the document", () => {
    const header = screen.getByTestId("header-div")
    expect(header).toBeInTheDocument()
  })
  it("Main element is in the document", () => {
    const mainDiv = screen.getByTestId("main-div")
    expect(mainDiv).toBeInTheDocument()
  })
  it("Footer is in the document", () => {
    const footer = screen.getByTestId('footer-div')
    expect(footer).toBeInTheDocument()
  })
})