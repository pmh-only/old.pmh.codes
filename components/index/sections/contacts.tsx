import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import Container from '../../Container'

export default function IntroduceContacts () {
  const { scrollYProgress } = useViewportScroll()
  const translateX5 = useTransform(scrollYProgress, [0.8, 1], [-1000, 0])

  return (
    <motion.div className="h-screen" style={{ translateX: translateX5 }}>
      <div className="h-screen bg-purple-500 w-full absolute left-0"></div>
      <Container backgroundColor="#ffffff00">
        <div className="h-screen">
          <div className="flex flex-warp justify-between">
            <div className="text-left tracking-widest text-white opacity-60 my-5">
              <h2 className="font-bold text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">누구에게든 마음을 열고</h2>
              <h2 className="font-bold mt-2 text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">소통합니다_</h2>
            </div>
            <div className="text-right text-white my-5">
              <h2 className="font-bold border-b-4 border-white border-opacity-20 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Con</h2>
              <h2 className="font-bold border-b-4 border-white border-opacity-20 -mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">tacts.</h2>
            </div>
          </div>
          <div className="text-white p-6 px-10 border-white border-4 inline-block">
            <p>언제든지 연락하세요</p>
            <p>24h available</p>
            <br />
            <ol>
              <li><a href="mailto:pmhstudio.pmh@gmail.com" className="hover:underline"><FontAwesomeIcon icon={faEnvelope}/> pmhstudio.pmh@gmail.com</a></li>
              <li><a href="https://discord.com/invite/VbcGYnv" className="hover:underline"><FontAwesomeIcon icon={faDiscord}/> Dev. PMH#7086</a></li>
              <li><a href="https://github.com/pmh-only" className="hover:underline"><FontAwesomeIcon icon={faGithub}/> @pmh-only</a></li>
            </ol>
          </div>
        </div>
      </Container>
    </motion.div>
  )
}
