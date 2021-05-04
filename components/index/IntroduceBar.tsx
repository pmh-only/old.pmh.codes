import IntroduceProjects from './sections/projects'
import IntroduceHistory from './sections/history'
import IntroduceAwards from './sections/awards'
import IntroduceSkills from './sections/skills'
import IntroduceContacts from './sections/contacts'

export default function IntroduceBar () {
  return (
    <div style={{ marginTop: '100vh' }}>
      <IntroduceProjects />
      <IntroduceHistory />
      <IntroduceAwards />
      <IntroduceSkills />
      <IntroduceContacts />
    </div>
  )
}
