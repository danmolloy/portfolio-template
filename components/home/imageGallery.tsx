import Image from "next/image"

export const imageArr: {
  id: string
  title: string
  src: string
  height: number
  width: number
}[] = [
  {
    id: "0",
    title: "One beard",
    src: "http://placebeard.it/250/250",
    height: 200,
    width: 200,
  },
  {
    id: "1",
    title: "Two beard",
    src: "http://placebeard.it/200/200",
    height: 200,
    width: 200,
  },
  {
    id: "2",
    title: "Three beard",
    src: "http://placebeard.it/220/220",
    height: 200,
    width: 200,
  },
  {
    id: "3",
    title: "Four beard",
    src: "http://placebeard.it/230/230",
    height: 200,
    width: 200,
  },
  {
    id: "4",
    title: "Five beard",
    src: "http://placebeard.it/260/260",
    height: 200,
    width: 200,
  },
]

export default function ImageGallery() {
  return (
    <div className="flex flex-row justify-center " data-testid="img-gallery-div">
      {imageArr.map(i => (
/*         <div className={Number(i.id)%2 === 0 ? " rotate-6 m-2 rounded-lg overflow-hidden" : "rotate-left m-2 rounded-lg overflow-hidden"} key={i.id} data-testid={i.id}>
 */          <Image className={Number(i.id)%2 === 0 ? " rounded-lg rotate-6 m-2 " : "rounded-lg rotate-left m-2 "} src={i.src} width={i.width} height={i.height} alt={i.title} title={i.title} />
/*         </div>
 */      ))}
    </div>
  )
}