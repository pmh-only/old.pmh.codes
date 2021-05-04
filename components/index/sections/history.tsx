import { motion, useTransform, useViewportScroll } from 'framer-motion'
import Container from '../../Container'

export default function IntroduceHistory () {
  const { scrollYProgress } = useViewportScroll()
  const translateX2 = useTransform(scrollYProgress, [0.2, 0.4], [+1000, 0])

  return (
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
              <h2 className="font-bold text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">동료와 함께하고</h2>
              <h2 className="font-bold mt-2 text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">앞으로 이끌어나갑니다_</h2>
            </div>
          </div>
          <div className="text-right text-white">
            <ul>
              <li className="block">
                <div className="bg-black bg-opacity-20 p-5 my-3 w-auto inline-block">
                  <h3>2021년 3월 ~</h3>
                  <p>경북 소프트웨어 고등학교</p>
                  <p>웹 애플리케이션 개발 동아리 팀장</p>
                </div>
              </li>
              <li className="block">
                <div className="bg-black bg-opacity-20 p-5 my-3 w-auto inline-block">
                  <h3>2020년 7월 ~</h3>
                  <p>(칠곡) 장곡중학교</p>
                  <p>학생회 전교회장</p>
                </div>
              </li>
              <li className="block">
                <div className="bg-black bg-opacity-20 p-5 my-3 w-auto inline-block">
                  <h3>2020년 3월 ~</h3>
                  <p>(칠곡) 장곡중학교</p>
                  <p>소프트웨어 동아리 (SWAG) 회장</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </motion.div>
  )
}
