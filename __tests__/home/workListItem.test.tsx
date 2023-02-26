import WorkListItem from "../../components/home/workListItem";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"

const mockProps = {
  company: "BBCSO",
  position: "Principal Bass",
  years: "2001-2009"
}

describe("WorkListItem component", () => {
  beforeEach(() => {
    render(<WorkListItem {...mockProps} />)
  })
  it("Company is in the document", () => {
    const company = screen.getByText(mockProps.company)
    expect(company).toBeInTheDocument()
  })
  it("Position is in the document", () => {
    const position = screen.getByText(mockProps.position)
    expect(position).toBeInTheDocument()
  })
  it("Years is in the document", () => {
    const years = screen.getByText(mockProps.years)
    expect(years).toBeInTheDocument()
  })
})