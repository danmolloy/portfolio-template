import { act, fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Header from '../../components/layout/header'

const setShowMenu = jest.fn()

describe("Header component", () => {
  beforeEach(() => {
    render(<Header setShowMenu={setShowMenu}/>)
  })
  it("Renders", () => {
    const header = screen.getByTestId("header-div")
    expect(header).toBeInTheDocument()
  })
  it("Header img is in the document", () => {
    const headerImg = screen.getByTestId("header-img")
    expect(headerImg).toBeInTheDocument()
  })
  it("Menu btn is in the document", () => {
    const menuBtn = screen.getByTestId("menu-btn")
    expect(menuBtn).toBeInTheDocument()
  })
  it("Menu button calls setShowMenu", () => {
    const menuBtn = screen.getByTestId("menu-btn")
    act(() => {
      fireEvent.click(menuBtn)
    }) 
    
    expect(setShowMenu).toBeCalled()
  })
  it("Nightmode toggle is in the document", () => {
    const nightToggle = screen.getByTestId("night-toggle")
    expect(nightToggle).toBeInTheDocument()
  })
  it("Nightmode toggle triggers/untriggers nightmode on click", () => {
    const nightToggle = screen.getByTestId("night-toggle")
    localStorage.removeItem("theme")
    act(() => {
      fireEvent.click(nightToggle)
    })
    expect(localStorage.getItem("theme")).toMatch("dark")
    act(() => {
      fireEvent.click(nightToggle)
    })
    expect(localStorage.getItem("theme")).toBe(null)
  })
})