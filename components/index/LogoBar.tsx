import { motion } from 'framer-motion'
import Image from 'next/image'

export default function LogoBar () {
  return (
    <motion.div initial={{ scale: 1.4 }} animate={{ scale: 1 }} className="pt-7 pb-3 text-center">
      <Image className="rounded-lg" src="/img/profile.jpg" width="300" height="300"></Image>
      <motion.h3 whileHover={{ skewX: 10, fontStyle: 'italic', color: '#aaaaaa' }} className="text-2xl font-bold">Park Min Hyeok</motion.h3>
      <motion.p whileHover={{ skewX: 10, fontStyle: 'italic', color: '#aaaaaa' }} className="mt-1">multi-position developer</motion.p>
    </motion.div>
  )
}
