import Image from "next/image";
import Pic1 from '../../public/images/1.png'
import Pic2 from '../../public/images/2.png'

export default function Home() {
  return (
    <main className="relative">
      <Section1 />
      <Section2 />
    </main>
  );
}

const Section1 = () => {
  return (
    <div className="h-screen bg-red700 text-grey900 text-9xl flex relative">
      <div className="relative w-[48.8%] h-full flex items-center bg-red700 ">
        <Image
          src={Pic1}
          alt="img"
          placeholder="blur"
          fill
          objectFit="contain"
        />
        <div className="z-40 text-center text-white font-ppgosha top[30%] flex ">
        SILHOUETTES
        </div>
      </div>
    </div>
  )
}

const Section2 = () => {
  return (
    <div className="h-screen bg-red200 text-blue600 text-2xl flex">
      <div className="relative w-[48.8%] h-full flex items-center bg-red700 right-0">
        <Image
          src={Pic2}
          alt="img"
          placeholder="blur"
          fill
          objectFit="contain"
        />
        <div className="z-40 text-center text-white font-ppgosha top[30%] flex ">
        SILHOUETTES
        </div>
      </div>
    </div>
  )
}
