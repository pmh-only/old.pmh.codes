import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function SkillBtn ({ url, icon, color, title, subtitle }: any) {
  return (
    <motion.div
      initial={{ translateY: 20, scale: 1.5, opacity: 0 }}
      animate={{ translateY: 0, scale: 1, opacity: 1 }}
      exit={{ translateY: 20, scale: 1.5, opacity: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="inline-block m-1 py-3 px-5 w-48 cursor-pointer">
        <Link href={url}>
          <div>
            <svg className="block m-auto rounded-full w-100 bg-gray-100 hover:bg-gray-300 shadow hover:shadow-none" width="75" height="75" xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid slice" focusable="false">
              <rect width="100%" height="100%" fill="#00000000"></rect>
              <foreignObject y="23" width="75" height="75">
                <FontAwesomeIcon icon={icon} size="2x" color={color} />
              </foreignObject>
            </svg>
            <div className="mt-3">
              <motion.div whileHover={{ rotateZ: 10 }} className="cursor-default text-lg">{title}</motion.div>
              <motion.div whileHover={{ rotateZ: 10 }} className="cursor-default text-sm">{subtitle}</motion.div>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  )
}
