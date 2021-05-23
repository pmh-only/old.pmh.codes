import { motion } from 'framer-motion'
import Image from 'next/image'

export default function PostIt ({ height = 320, title, description, image, color }: any) {
  return (
      <motion.div className={'z-10 hover:shadow-xl shadow justify-self-center bg-white ' + color} style={{ maxWidth: '300px', minWidth: '250px', flex: '20%' }}>
        <div className="absolute w-0 h-0" style={{ borderTop: '30px solid rgb(252, 211, 77)', borderRight: '30px solid transparent' }}></div>
        { image ? <div className="hidden sm:block"><Image width={320} height={height} src={image}/></div> : <></> }
        <div className="p-10">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="">{description}</p>
        </div>
      </motion.div>
  )
}
