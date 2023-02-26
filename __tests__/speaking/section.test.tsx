import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import SpeakingSection from "../../components/speaking/section";

const mockProps = {
  date: "mockLocation",
  title: "mockTitle",
  body: "mockBlurb",
  key: 1
}

describe("SpeakingSection component", () => {
  beforeEach(() => {
    render(<SpeakingSection {...mockProps} />)
  })
  it("Renders", () => {
    const section = screen.getByTestId("section-div")
    expect(section).toBeInTheDocument()
  })
  it("Date is in the document", () => {
    const section = screen.getByTestId("section-div")
    expect(section.textContent).toMatch(mockProps.date)
  })
  it("Title is in the document", () => {
    const section = screen.getByTestId("section-div")
    expect(section.textContent).toMatch(mockProps.title)
  })
  it("Body is in the document", () => {
    const section = screen.getByTestId("section-div")
    expect(section.textContent).toMatch(mockProps.body)
  })
})