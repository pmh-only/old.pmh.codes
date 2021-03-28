import Container from '../components/Container'
import LogoBar from '../components/index/LogoBar'
import SkillBar from '../components/index/SkillBar'
import ContactBar from '../components/index/ContactBar'

export default function Home () {
  return (
    <Container backgroundColor="#ffffff">
      <LogoBar />
      <ContactBar />
      <SkillBar />
    </Container>
  )
}
