import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import ImageGallery, { imageArr } from "../../components/home/imageGallery";

describe("ImageGallery component", () => {
  beforeEach(() => {
    render(<ImageGallery />)
  })
  it("Renders", () => {
    const gallery = screen.getByTestId("img-gallery-div")
    expect(gallery).toBeInTheDocument()
  })
  it("Has all expected images in the document", () => {
    const gallery = screen.getByTestId("img-gallery-div")
    let imgId;
    for (let i = 0; i < imageArr.length; i++) {
      imgId = screen.getByTestId(imageArr[i].id)
      expect(imgId).toBeInTheDocument()
    }
  })
})

describe("imageArr", () => {
  it("Has a length of 5", () => {
    expect(imageArr).toHaveLength(5)
  })
})