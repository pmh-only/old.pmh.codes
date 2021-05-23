import { motion } from 'framer-motion'
import Image from 'next/image'

export default function LogoBar () {
  return (
    <motion.div initial={{ scale: 1.4 }} animate={{ scale: 1 }} className="pt-7 pb-3 text-center">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileTap={{ scale: 2 }} whileHover={{ skew: -2 }}>
        <Image className="absolute left-0 rounded-lg z-20" src="/img/profile.png" width="300" height="300" priority/>
      </motion.div>
      <motion.h3 whileHover={{ skewX: 10, fontStyle: 'italic', color: '#aaaaaa' }} className="text-white text-2xl font-serif">Park Min Hyeok</motion.h3>
      <motion.p whileHover={{ skewX: 10, fontStyle: 'italic', color: '#aaaaaa' }} className="text-white mt-1 font-serif">{(new Date()).getFullYear() - 2018} years experience developer</motion.p>
    </motion.div>
  )
}
