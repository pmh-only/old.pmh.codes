import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ContactBtn ({ url, icon }: any) {
  return (
    <Link href={url}>
      <motion.div initial={{ translateY: -10, opacity: 0 }} animate={{ translateY: 0, opacity: 1 }} whileHover={{ translateY: 3 }} whileTap={{ scale: 0.9 }} className="inline-block mx-1 p-2 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-300 shadow hover:shadow-none">
        <FontAwesomeIcon icon={icon}/>
      </motion.div>
    </Link>
  )
}
