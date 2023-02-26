import WorkHistory, { workArr } from "../../components/home/workHistory";
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";

describe("WorkHistory component", () => {
  beforeEach(() => {
    render(<WorkHistory />)
  })
  it("Renders", () => {
    const workHistory = screen.getByTestId("work-history-div")
    expect(workHistory).toBeInTheDocument()
  })
  it("'Work' title is in the document", () => {
    const workTitle = screen.getByText(/Work/)
    expect(workTitle).toBeInTheDocument()
  })
  it("Work icon is in the document", () => {
    const workIcon = screen.getByTestId("work-icon")
    expect(workIcon).toBeInTheDocument()
  })
  it("Work history list div is in the document", () => {
    const workArrDiv = screen.getByTestId("work-arr-div")
    expect(workArrDiv).toBeInTheDocument()
  })
  it("Workplace titles are in the document", () => {
    for (let i = 0; i < workArr.length; i ++) {
      let workPlace = screen.getByText(workArr[i].company)
      expect(workPlace).toBeInTheDocument()
    }
  })
  it("Download CV link is in the document", () => {
    const cvLink = screen.getByTestId("cv-link")
    expect(cvLink).toBeInTheDocument()
  })
})

describe("workArr", () => {
  it("Is expected length", () => {
    expect(workArr).toHaveLength(4)
  })
})