import { faStream } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import Container from '../../Container'
import PostIt from '../PostIt'

export default function IntroduceProjects () {
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 0.1], [0.5, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  return (
    <motion.section id="projects" style={{ scale, opacity }}>
      <div className="h-full bg-yellow-500 w-full pb-10">
        <Container backgroundColor="#ffffff00">
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
          <div className="flex flex-wrap justify-center gap-5 mt-5">
            <PostIt image="/img/outgo.jpg" title="정심관 출사 관리 시스템" description="경북소프트웨어고등학교를 위한 기숙사 출사 관리 시스템"/>
            <PostIt image="/img/covidcheck.gif" height={300} title="장곡중 발열체크" description="장곡중학교를 위한 쉽고 빠른 발열 체크 기록 및 전산 시스템"/>
            <PostIt image="/img/lofigirl.gif" height={310} title="LofiGirl" description="디스코드 채팅 플랫폼을 통한 실시간 24시간 음악 스트리밍 서비스"/>
            <PostIt image="/img/blockchain.gif" height={340} title="BlobBlocks" description="블럭체인을 이용한 파일 스토리지 프로젝트"/>
            <PostIt image="/img/cheongraon.gif" height={350} title="청라온 CMS" description="소규모 언론을 위한 기사 작성 및 기사&기자 관리 시스템"/>
            <PostIt image="/img/scs.gif" height={340} title="장곡중 SCS" description="장곡중학교 학급 내 정보화기기 관리 페이지 및 프로그램 서비스"/>
            <PostIt image="/img/unityLearn.gif" height={320} title="원근감 Jump" description="3D 원근감을 이용해가며 앞으로 나아가는 유니티 엔진 기반 게임"/>
            <PostIt image="/img/handyedu.png" title="Handy Edu" description="손으로 만지듯이 시뮬레이터와 함깨 배워가는 컴퓨터 정보 보안 교육"/>
            <PostIt title="IntraEdu (구: 번들에듀)" description="일정 관리, 화상 교육, OJ서비스 등 통합 온라인 교육지원 플랫폼"/>
            <PostIt title="BounceNetwork" description="nginx중 SSL 프록시 및 리버스 프록시 기능만을 구현한 가벼운 시스템"/>
            <PostIt title="HostFrame" description="하나의 코드베이스에서 여러가지 express 서버를 돌릴 수 있도록 하는 수직 프록시 시스템"/>
            <PostIt title="ezlogin" description="단방향 암호화 기술 및 난수 생성기를 통한 계정 인증 솔루션"/>
          </div>
          <div className="opacity-70 text-white absolute -right-64 bottom-0 z-0" style={{ fontSize: '25px' }}><FontAwesomeIcon size="10x" icon={faStream}/></div>
        </Container>
      </div>
    </motion.section>
  )
}
