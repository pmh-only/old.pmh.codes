import Container from '../components/Container'
import LogoBar from '../components/index/LogoBar'
import SkillBar from '../components/index/SkillBar'
import ContactBar from '../components/index/ContactBar'

export default function Home () {
  return (
    <Container backgroundColor="#ffffff">
      <div className="flex flex-wrap justify-center">
        <div>
          <LogoBar />
          <ContactBar />
        </div>
        <SkillBar />
      </div>
    </Container>
  )
}
