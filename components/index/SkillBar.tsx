import SkillBtn from './SkillBtn'
import { motion } from 'framer-motion'
import { faServer, faWindowRestore, faGamepad, faRobot, faBrain, faLink } from '@fortawesome/free-solid-svg-icons'

export default function SkillBar () {
  return (
    <div className="my-10 max-w-2xl">
      <motion.div className="pt-2 pb-3 text-center flex flex-wrap justify-center">
        <SkillBtn url="/categories/backend" icon={faServer} color="#bf616a" title="BackEnd" subtitle="Security • API • RDB"/>
        <SkillBtn url="/categories/frontend" icon={faWindowRestore} color="#d08770" title="FrontEnd" subtitle="React • SSR • UI/UX"/>
        <SkillBtn url="/categories/blockchain" icon={faLink} color="#ebcb8b" title="BlockChain" subtitle="P2P • PoW"/>
        <SkillBtn url="/categories/game" icon={faGamepad} color="#a3be8c" title="GameDev" subtitle="Unity • CTF • Plugins"/>
        <SkillBtn url="/categories/chatbots" icon={faRobot} color="#7289da" title="ChatBots" subtitle="IRC • VoIP • Discord.js"/>
        <SkillBtn url="/categories/ai" icon={faBrain} color="#b48ead" title="AIDev" subtitle="NLP • Tensor • Brain.js"/>
      </motion.div>
      <motion.p className="text-right w-full text-sm" whileHover={{ skewX: 10, fontStyle: 'italic', color: '#aaaaaa' }}>
        *카테고리들을 눌러보세요
      </motion.p>
    </div>
  )
}
