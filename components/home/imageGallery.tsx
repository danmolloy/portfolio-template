import Image from "next/image"

export const imageArr: {
  id: string
  title: string
  src: string
  height: number
  width: number
  rotation: string
}[] = [
  {
    id: "0",
    title: "One beard",
    src: "http://placebeard.it/250/250",
    height: 225,
    width: 225,
    rotation: "rotate-6"
  },
  {
    id: "1",
    title: "Two beard",
    src: "http://placebeard.it/200/200",
    height: 225,
    width: 225,
    rotation: "rotate-left"
  },
  {
    id: "2",
    title: "Three beard",
    src: "http://placebeard.it/220/220",
    height: 225,
    width: 225,
    rotation: "rotate-6"
  },
  {
    id: "3",
    title: "Four beard",
    src: "http://placebeard.it/230/230",
    height: 225,
    width: 225,
    rotation: "rotate-left"
  },
  {
    id: "4",
    title: "Five beard",
    src: "http://placebeard.it/260/260",
    height: 225,
    width: 225,
    rotation: "rotate-6"
  },
]

export default function ImageGallery() {
  return (
    <div className=" flex flex-row justify-center overflow-hidden lg:overflow-visible" data-testid="img-gallery-div">
      {imageArr.map(i => (
            <Image key={i.id} className={` w-44 h-44 md:w-60 md:h-60 ${i.rotation} rounded-lg m-2`} src={i.src} width={200} height={200} alt={i.title} title={i.title} />
         /* <div key={i.id} data-testid={i.id}> */
/*           <Image key={i.id} className={Number(i.id) < 3 ?  `${i.rotation} rounded-lg m-2` : `${i.rotation} hidden sm:flex rounded-lg  m-2 `} src={i.src} width={i.width} height={i.height} alt={i.title} title={i.title} />
 */         /* </div> */
     ))}
    </div>
  )
}