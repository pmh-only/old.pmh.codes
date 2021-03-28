import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CategoryTitle ({ title }: any) {
  return (
    <div className="px-2 flex justify-between items-center">
      <div>
        <motion.h1 initial={{ translateY: 10 }} animate={{ translateY: 0, width: 240 }} className="text-white font-black text-5xl pt-3 pb-1 text-left">
          {title}
        </motion.h1>
        <motion.div transition={{ delay: 0.4 }} initial={{ width: 0 }} animate={{ width: 240 }} className="bg-white w-60 h-1.5"></motion.div>
      </div>
      <div>
        <Link href="/">
          <div className="flex flex-col items-center text-white cursor-pointer bg-black p-1 m-1 bg-opacity-20 rounded">
            <motion.div transition={{ bounce: 0 }} initial={{ color: '#ffffff' }} whileHover={{ rotateY: 180, color: '#aaaaaa' }} className="p-1 text-white">
              <FontAwesomeIcon icon={faTimes} size="3x"/>
            </motion.div>
            <div>Back</div>
          </div>
        </Link>
      </div>
    </div>
  )
}
