import { motion, useTransform, useViewportScroll } from 'framer-motion'
import Container from '../../Container'

export default function IntroduceSkills () {
  const { scrollYProgress } = useViewportScroll()
  const translateX4 = useTransform(scrollYProgress, [0.6, 0.8], [+1000, 0])

  return (
    <motion.div className="h-screen" style={{ translateX: translateX4 }}>
      <div className="h-screen bg-yellow-500 w-5/6 lg:w-2/3 absolute right-0"></div>
      <Container backgroundColor="#ffffff00">
        <div className="h-screen">
          <div className="flex flex-warp justify-between">
            <div className="text-left text-white my-5">
              <h2 className="font-bold border-b-4 border-yellow-500 border-opacity-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">skills.</h2>
            </div>
            <div className="text-right tracking-widest text-white opacity-60 my-5">
              <h2 className="font-bold text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">배움의 즐거움을 느끼고</h2>
              <h2 className="font-bold mt-2 text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">많은 분야의 지식을 습득합니다_</h2>
            </div>
          </div>
          <div className="text-right">
            <div className="text-white p-5 border-white border-4 inline-block">
              <p>작성중...</p>
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  )
}
