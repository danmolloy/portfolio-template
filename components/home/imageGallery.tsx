import Image from "next/image"

export const imageArr: {
  id: string
  title: string
  src: string
  height: number
  width: number
}[] = [
  {
    id: "img-one",
    title: "One beard",
    src: "http://placebeard.it/200/200",
    height: 150,
    width: 150,
  },
  {
    id: "img-two",
    title: "Two beard",
    src: "http://placebeard.it/200/200",
    height: 150,
    width: 150,
  },
  {
    id: "img-three",
    title: "Three beard",
    src: "http://placebeard.it/200/200",
    height: 150,
    width: 150,
  },
  {
    id: "img-four",
    title: "Four beard",
    src: "http://placebeard.it/200/200",
    height: 150,
    width: 150,
  },
  {
    id: "img-five",
    title: "Five beard",
    src: "http://placebeard.it/200/200",
    height: 150,
    width: 150,
  },
]

export default function ImageGallery() {
  return (
    <div data-testid="img-gallery-div">
      {imageArr.map(i => (
        <div key={i.id} data-testid={i.id}>
          <Image src={i.src} width={i.width} height={i.height} alt={i.title} title={i.title} />
        </div>
      ))}
    </div>
  )
}