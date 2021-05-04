import { motion, useTransform, useViewportScroll } from 'framer-motion'
import Container from '../../Container'

export default function IntroduceProjects () {
  const { scrollYProgress } = useViewportScroll()
  const translateX1 = useTransform(scrollYProgress, [0, 0.2], [-1000, 0])

  return (
    <motion.div className="h-screen" style={{ translateX: translateX1 }}>
      <div className="h-screen bg-blue-500 w-full absolute left-0"></div>

      <Container backgroundColor="#ffffff00">
        <div className="h-screen">
          <div className="flex flex-warp justify-between">
            <div className="text-left text-white my-5">
              <h2 className="font-bold border-b-4  border-white border-opacity-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Proj</h2>
              <h2 className="font-bold border-b-4  border-white border-opacity-10 -mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">ects.</h2>
            </div>
            <div className="text-right tracking-widest text-white opacity-60 my-5">
              <h2 className="font-bold text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">생각한것을</h2>
              <h2 className="font-bold mt-2 text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">현실로 실현합니다_</h2>
            </div>
          </div>
          <div className="text-white p-5 border-white border-4 inline-block">
            <p>작성중...</p>
          </div>
        </div>
      </Container>
    </motion.div>
  )
}
