import SignUp from "../../components/home/signUp";
import "@testing-library/jest-dom"
import { render, screen, act } from "@testing-library/react";

describe("SignUp component", () => {
  beforeEach(() => {
    render(<SignUp />)
  })
  it("Renders", () => {
    const signUpDiv = screen.getByTestId("sign-up-div")
    expect(signUpDiv).toBeInTheDocument()
  })
  it("Mail icon is in the document", () => {
    const mailIcon = screen.getByTestId("mail-icon")
    expect(mailIcon).toBeInTheDocument()
  })
  it("'Stay up to date' is in the document", () => {
    const header = screen.getByText(/Stay up to date/)
    expect(header).toBeInTheDocument()
  })
  it("Blurb is in the document", () => {
    const blurb = screen.getByTestId("signup-blurb")
    expect(blurb).toBeInTheDocument()
  })
  it("Input bar is in the document", () => {
    const emailInput = screen.getByTestId("email-input")
    expect(emailInput).toBeInTheDocument()
  })
  it("Input has 'Email address' placeholder", () => {
    const emailInput = screen.getByTestId("email-input")
    expect(emailInput.outerHTML).toMatch(/placeholder=\"email-input\"/)
  })
  it("Join button is in the document", () => {
    const joinBtn = screen.getByText(/Join/)
    expect(joinBtn).toBeInTheDocument()
  })
})