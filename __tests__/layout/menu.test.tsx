import { render, screen, act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"
import Menu from "../../components/layout/menu"

const setShowMenu = jest.fn()

describe("Menu component", () => {
  beforeEach(() => {
    render(<Menu setShowMenu={setShowMenu}/>)
  })
  it("Renders", () => {
    const menuDiv = screen.getByTestId("menu-div")
    expect(menuDiv).toBeInTheDocument()
  })
  it("'Navigation' title is in the document", () => {
    const navTitle = screen.getByText(/Navigation/)
    expect(navTitle).toBeInTheDocument()
  })
  it("Close button is in the document", () => {
    const closeBtn = screen.getByTestId("close-btn")
    expect(closeBtn).toBeInTheDocument()
  })
  it("Close button call setShowMenu", () => {
    const closeBtn = screen.getByTestId("close-btn")
    act(() => {
      fireEvent.click(closeBtn)
    })
    expect(setShowMenu).toHaveBeenCalledWith(false)
  })
  it("About link is in the document", () => {
    const aboutLink = screen.getByText(/About/)
    expect(aboutLink).toBeInTheDocument()
  })
  it("Articles link is in the document", () => {
    const articlesLink = screen.getByText(/Articles/)
    expect(articlesLink).toBeInTheDocument()
  })
  it("Projects link is in the document", () => {
    const projectsLink = screen.getByText(/Projects/)
    expect(projectsLink).toBeInTheDocument()
  })
  it("Speaking link is in the document", () => {
    const speakingLink = screen.getByText(/Speaking/)
    expect(speakingLink).toBeInTheDocument()
  })
  it("Uses link is in the document", () => {
    const usesLink = screen.getByText(/Uses/)
    expect(usesLink).toBeInTheDocument()
  })
})