import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Speaking, { conferencesArr, podcastsArr } from "../../components/speaking";

describe("Speaking component", () => {
  beforeEach(() => {
    render(<Speaking />)
  })
  it("Renders", () => {
    const speakingDiv = screen.getByTestId("speaking-div")
    expect(speakingDiv).toBeInTheDocument()
  })
  it("PageHead is in the document", () => {
    const pageHead = screen.getByTestId("page-head")
    expect(pageHead).toBeInTheDocument()
  })
  it("Conferences div is in the document", () => {
    const conferencesDiv = screen.getByTestId("conferences-div")
    expect(conferencesDiv).toBeInTheDocument()
  })
  it("All conferences are in the document", () => {
    const conferencesDiv = screen.getByTestId("conferences-div")
    for(let i = 0; i < conferencesArr.length; i++) {
      expect(conferencesDiv.textContent).toMatch(conferencesArr[i].title)
      expect(conferencesDiv.textContent).toMatch(conferencesArr[i].body)

    }
  })
  it("Podcasts div is in the document", () => {
    const podcastsDiv = screen.getByTestId("podcasts-div")
    expect(podcastsDiv).toBeInTheDocument()
  })
  it("All podcasts are in the document", () => {
    const podcastsDiv = screen.getByTestId("podcasts-div")
    for(let i = 0; i < conferencesArr.length; i++) {
      expect(podcastsDiv.textContent).toMatch(podcastsArr[i].title)
      expect(podcastsDiv.textContent).toMatch(podcastsArr[i].body)

    }
  })
})