import { motion } from 'framer-motion'
import Image from 'next/image'

export default function PostIt ({ height = 320, title, description, image }: any) {
  return (
      <motion.div className="hover:shadow-xl shadow inline-block bg-yellow-200 w-60 break-all">
        <>
          <div className="absolute w-0 h-0" style={{ borderTop: '30px solid rgb(252, 211, 77)', borderRight: '30px solid transparent' }}></div>
          { image ? <Image width={320} height={height} src={image}/> : <></> }
          <div className="p-10">
            <h3 className="text-lg">{title}</h3>
            <p className="font-thin">{description}</p>
          </div>
        </>
      </motion.div>
  )
}
