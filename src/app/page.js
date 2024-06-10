'use client';

import Pic1 from '../../public/images/1.png'
import Pic2 from '../../public/images/2.png'
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from 'lenis';

export default function Home() {

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  })

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main ref={container} className="relative h-[200vh]">
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </main>
  );
}

const Section1 = ({ scrollYProgress }) => {

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -10])
  return (
    <motion.div style={{ scale, rotate }} className="relative flex h-screen text-[3.5vw]  flex-col  text-white pb-[10vh]">

      <div className="h-[100vh] w-100vh bg-red200 text-blue600 text-2xl flex">
        <div className="relative w-[48.8%] h-[100vh] flex items-center bg-red200 right-0">
          <Image
            src={Pic1}
            alt="img"
            placeholder="blur"
            fill

          />
          <div className="fixed text-blue600 text-2xl md:text-4xl lg:text-7xl  font-ppgosha  flex top-[24%] left-[8%]">
          SILHOUETTES OF IMAGINATION
        </div>
        </div>

      </div>

    </motion.div>
  )
}

const Section2 = ({ scrollYProgress }) => {

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-20, 0])

  return (
    <motion.div style={{ scale, rotate }} className="relative h-screen">
      <div className="h-screen bg-red200 text-blue600 text-base flex">
        <div className="relative w-[48.8%] h-100vh flex bg-red200 ">
          <Image
            src={Pic2}
            alt="img"
            placeholder="blur"
            fill

          />
          <div className="absolute text-red200 text-[4vw] font-ppgosha flex top-[70%] break-before-left h-[25%] w-[50%] right-0 leading-tight ">
          Shadows of Creative Vision
          </div>
        </div>
      </div>
    </motion.div>
  )
}
