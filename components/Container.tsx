import { motion } from 'framer-motion'

export default function Container ({ children, backgroundColor }: any) {
  return (
    <motion.div initial={{ backgroundColor: '#ffffff' }} animate={{ backgroundColor }} exit={{ backgroundColor: '#ffffff' }} className="overflow-x-hidden text-center h-screen" style={{ backgroundColor }}>
      <div className="bg-red-100 hover:bg-pink-100 transition ease-in-out shadow">
        <span className="block">알파에염 ㅇㅅㅇ / 아직 구현 안된것들이 많아요</span>
        <span className="block">this is alpha version owo / please check me later</span>
      </div>
      <div className="relative z-10 px-5 max-w-screen-lg xl:max-w-screen-xl mx-auto h-full">
        {children}
      </div>
    </motion.div>
  )
}
