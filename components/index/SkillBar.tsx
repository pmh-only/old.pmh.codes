import SkillBtn from './SkillBtn'
import { motion } from 'framer-motion'
import { faServer, faWindowRestore, faDesktop, faGamepad, faRobot, faBrain } from '@fortawesome/free-solid-svg-icons'

export default function SkillBar () {
  return (
    <div className="my-10 max-w-2xl">
      <motion.div className="pt-2 pb-3 text-center flex flex-wrap justify-center">
        <SkillBtn url="/categories/backend" icon={faServer} color="#bf616a" title="BackEnd" subtitle="Security • API • RDB"/>
        <SkillBtn url="/categories/frontend" icon={faWindowRestore} color="#d08770" title="FrontEnd" subtitle="React • SSR • UI/UX"/>
        <SkillBtn url="/categories/webapps" icon={faDesktop} color="#ebcb8b" title="WebApps" subtitle="Electron • PWA • Flutter"/>
        <SkillBtn url="/categories/game" icon={faGamepad} color="#a3be8c" title="GameDev" subtitle="Unity • CTF • Plugins"/>
        <SkillBtn url="/categories/chatbots" icon={faRobot} color="#7289da" title="ChatBots" subtitle="IRC • VoIP • Discord.js"/>
        <SkillBtn url="/categories/ai" icon={faBrain} color="#b48ead" title="AIDev" subtitle="NLP • Tensor • Brain.js"/>
      </motion.div>
    </div>
  )
}
