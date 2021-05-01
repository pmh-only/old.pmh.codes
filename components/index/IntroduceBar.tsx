import Container from '../Container'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function IntroduceBar () {
  const { scrollYProgress } = useViewportScroll()
  const translateX1 = useTransform(scrollYProgress, [0, 0.2], [-1000, 0])
  const translateX2 = useTransform(scrollYProgress, [0.2, 0.4], [+1000, 0])
  const translateX3 = useTransform(scrollYProgress, [0.4, 0.6], [-1000, 0])
  const translateX4 = useTransform(scrollYProgress, [0.6, 0.8], [+1000, 0])
  const translateX5 = useTransform(scrollYProgress, [0.8, 1], [-1000, 0])

  return (
    <div style={{ marginTop: '100vh' }}>
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
                <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">생각한것을</h2>
                <h2 className="font-bold mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">현실로 실현합니다_</h2>
              </div>
            </div>
            <div className="text-white p-5 border-white border-4 inline-block">
              <p>작성중...</p>
            </div>
          </div>
        </Container>
      </motion.div>

      <motion.div className="h-screen" style={{ translateX: translateX2 }}>
        <div className="h-screen bg-green-500 w-5/6 lg:w-2/3 absolute right-0"></div>
        <Container backgroundColor="#ffffff00">
          <div className="h-screen">
            <div className="flex flex-warp justify-between">
              <div className="text-left text-white my-5">
                <h2 className="font-bold border-b-4 border-green-500 border-opacity-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Co-op</h2>
                <h2 className="font-bold border-b-4 border-green-500 border-opacity-10 -mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">History.</h2>
              </div>
              <div className="text-right tracking-widest text-white opacity-60 my-5">
                <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">동료와 함깨하고</h2>
                <h2 className="font-bold mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">앞으로 이끌어나갑니다_</h2>
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

      <motion.div className="h-screen" style={{ translateX: translateX3 }}>
        <div className="h-screen bg-red-500 w-5/6 lg:w-2/3 absolute left-0"></div>
        <Container backgroundColor="#ffffff00">
          <div className="h-screen">
            <div className="flex flex-warp justify-between">
              <div className="text-left tracking-widest text-white opacity-60 my-5">
                <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">항상 더 큰것을 꿈꾸고</h2>
                <h2 className="font-bold mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">그 꿈을 이루도록 항상 노력합니다_</h2>
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
      </motion.div>

      <motion.div className="h-screen" style={{ translateX: translateX4 }}>
        <div className="h-screen bg-yellow-500 w-5/6 lg:w-2/3 absolute right-0"></div>
        <Container backgroundColor="#ffffff00">
          <div className="h-screen">
            <div className="flex flex-warp justify-between">
              <div className="text-left text-white my-5">
                <h2 className="font-bold border-b-4 border-yellow-500 border-opacity-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">ski</h2>
                <h2 className="font-bold border-b-4 border-yellow-500 border-opacity-10 -mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">lls.</h2>
              </div>
              <div className="text-right tracking-widest text-white opacity-60 my-5">
                <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">배움의 즐거움을 느끼고</h2>
                <h2 className="font-bold mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">많은 분야의 지식을 습득합니다_</h2>
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

      <motion.div className="h-screen" style={{ translateX: translateX5 }}>
        <div className="h-screen bg-purple-500 w-full absolute left-0"></div>
        <Container backgroundColor="#ffffff00">
          <div className="h-screen">
            <div className="flex flex-warp justify-between">
              <div className="text-left tracking-widest text-white opacity-60 my-5">
                <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">누구에게든 마음을 열고</h2>
                <h2 className="font-bold mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">소통합니다_</h2>
              </div>
              <div className="text-right text-white my-5">
                <h2 className="font-bold border-b-4 border-purple-500 border-opacity-20 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Cont</h2>
                <h2 className="font-bold border-b-4 border-purple-500 border-opacity-20 -mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">acts.</h2>
              </div>
            </div>
            <div className="text-white p-5 border-white border-4 inline-block">
              <p>언제든 연락하세요</p>
              <ol>
                <li><FontAwesomeIcon icon={faEnvelope}/> pmhstudio.pmh@gmail.com</li>
                <li><FontAwesomeIcon icon={faDiscord}/> Dev. PMH#7086</li>
                <li><FontAwesomeIcon icon={faGithub}/> @pmh-only</li>
              </ol>
            </div>
          </div>
        </Container>
      </motion.div>
    </div>
  )
}
