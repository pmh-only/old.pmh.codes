import Container from '../components/Container'
import LogoBar from '../components/index/LogoBar'
import ContactBar from '../components/index/ContactBar'
import IntroduceBar from '../components/index/IntroduceBar'
import { motion, useTransform, useViewportScroll } from 'framer-motion'

export default function Home () {
  const { scrollYProgress } = useViewportScroll()
  const translateY = useTransform(scrollYProgress, [0, 0.2], [0, -500])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <div className="overflow-hidden">
      <div className="w-full top-0 fixed">
        <Container backgroundColor="#ffffff00">
          <motion.div style={{ scale, translateY }}>
            <div className="min-h-screen items-center flex flex-wrap justify-center">
              <div>
                <div className="flex items-center min-h-screen lg:min-h-0 lg:inline">
                  <div>
                    <LogoBar />
                    <ContactBar />
                  </div>
                </div>
                <div className="text-center">
                  <motion.div initial={{ opacity: 0 }} style={{ scale }} animate={{ translateY: -50, opacity: 1 }} className="inline-block lg:hidden border-b-2 text-white border-purple-300">
                    스크롤을 내려 더 자세히 보기
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <motion.div initial={{ opacity: 0 }} style={{ scale }} animate={{ translateY: -50, opacity: 1 }} className="hidden lg:inline-block border-b-2 text-white border-purple-300">
                스크롤을 내려 더 자세히 보기
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </div>
      <IntroduceBar />
    </div>
  )
}
