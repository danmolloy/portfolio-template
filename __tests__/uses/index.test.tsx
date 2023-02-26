import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import UsesIndex, { workstationArr, devToolsArr } from "../../components/Uses";

describe("UsesIndex component", () => {
  beforeEach(() => {
    render(<UsesIndex />)
  })
  it("Renders", () => {
    const usesIndex = screen.getByTestId("uses-index")
    expect(usesIndex).toBeInTheDocument()
  })
  it("PageHead is in the document", () => {
    const pageHead = screen.getByTestId("page-head")
    expect(pageHead).toBeInTheDocument()
  })
  it("Workstation div is in the document", () => {
    const workstationDiv = screen.getByTestId("workstation-div")
    expect(workstationDiv).toBeInTheDocument()
  })
  it("WorkstationArr items are in the document", () => {
    const workstationDiv = screen.getByTestId("workstation-div")
    for(let i = 0; i < workstationArr.length; i ++) {
      expect(workstationDiv.textContent).toMatch(workstationArr[i].title)
      expect(workstationDiv.textContent).toMatch(workstationArr[i].body)

    }
  })
  it("Dev tools div is in the document", () => {
    const devToolsDiv = screen.getByTestId("devtools-div")
    expect(devToolsDiv).toBeInTheDocument()
  })
  it("DevToolsArr items are in the document", () => {
    const devToolsDiv = screen.getByTestId("devtools-div")
    for(let i = 0; i < devToolsArr.length; i ++) {
      expect(devToolsDiv.textContent).toMatch(devToolsArr[i].title)
      expect(devToolsDiv.textContent).toMatch(devToolsArr[i].body)

    }
  })
})