import { motion, useTransform, useViewportScroll } from 'framer-motion'
import Container from '../../Container'
import PostIt from '../PostIt'

export default function IntroduceProjects () {
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 0.2], [1.5, 1])
  const opacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1])

  return (
    <motion.section id="projects" className="h-screen" style={{ scale, opacity }}>
      <div className="h-screen bg-blue-500 w-full absolute left-0"></div>
      <Container backgroundColor="#ffffff00">
        <div className="h-screen">
          <div className="flex flex-warp justify-between">
            <div className="text-left text-white my-5">
              <h2 className="font-bold border-b-4 border-white border-opacity-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Pro-</h2>
              <h2 className="font-bold border-b-4 border-white border-opacity-10 -mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">jects.</h2>
            </div>
            <div className="text-right tracking-widest text-white opacity-60 my-5">
              <h2 className="font-bold text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">생각한것을</h2>
              <h2 className="font-bold mt-2 text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">현실로 실현합니다_</h2>
            </div>
          </div>
          <div className="flex flex-wrap space-x-2 gap-5 mt-5" style={{ alignContent: 'flex-start' }}>
            <PostIt image="/img/outgo.jpg" title="정심관 출사 관리 시스템" description="경북소프트웨어고등학교를 위한 기숙사 출사 관리 시스템"/>
            <PostIt image="/img/covidcheck.jpg" title="장곡중 발열체크" description="장곡중학교를 위한 쉽고 빠른 발열 체크 기록 및 전산 시스템"/>
            <PostIt image="/img/lofigirl.gif" height={270} title="LofiGirl" description="디스코드 채팅 플랫폼을 통한 실시간 24시간 음악 스트리밍 서비스"/>
            <PostIt title="BlobBlocks" description="블럭체인을 이용한 파일 스토리지 프로젝트"/>
            <PostIt title="IntraEdu" description="온라인 교육지원 플랫폼"/>
          </div>
        </div>
      </Container>
    </motion.section>
  )
}
