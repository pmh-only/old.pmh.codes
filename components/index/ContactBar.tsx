import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'
import ContactBtn from './ContactBtn'

export default function ContactBar () {
  return (
    <div className="text-center">
      <ContactBtn url="mailto:pmhstudio.pmh@gmail.com" icon={faEnvelope}/>
      <ContactBtn url="https://discord.com/invite/VbcGYnv" icon={faDiscord}/>
      <ContactBtn url="https://github.com/pmh-only" icon={faGithub}/>
    </div>
  )
}
