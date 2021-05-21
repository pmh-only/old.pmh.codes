import { motion, useTransform, useViewportScroll } from 'framer-motion'
import Container from '../../Container'

export default function IntroduceAwards () {
  const { scrollYProgress } = useViewportScroll()
  const translateX = useTransform(scrollYProgress, [0.4, 0.6], [-1000, 0])

  return (
    <motion.section id="awards" className="h-screen" style={{ translateX }}>
      <div className="h-screen bg-red-500 w-5/6 lg:w-2/3 absolute left-0"></div>
      <Container backgroundColor="#ffffff00">
        <div className="h-screen">
          <div className="flex flex-warp justify-between">
            <div className="text-left tracking-widest text-white opacity-60 my-5">
              <h2 className="font-bold text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">항상 더 큰것을 꿈꾸고</h2>
              <h2 className="font-bold mt-2 te+xt-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">이루도록 항상 노력합니다_</h2>
            </div>
            <div className="text-right text-white my-5">
              <h2 className="font-bold border-b-4 border-red-500 border-opacity-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Awards &</h2>
              <h2 className="font-bold border-b-4 border-red-500 border-opacity-10 -mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Reports.</h2>
            </div>
          </div>
          <div className="text-white p-5 border-white border-4 inline-block">
            <p>작성중...</p>
          </div>
        </div>
      </Container>
    </motion.section>
  )
}
