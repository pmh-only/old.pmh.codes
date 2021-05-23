import { motion } from 'framer-motion'

export default function Container ({ children, backgroundColor }: any) {
  return (
    <motion.div initial={{ backgroundColor: '#ffffff' }} animate={{ backgroundColor }} exit={{ backgroundColor: '#ffffff' }} className="overflow-hidden" style={{ backgroundColor }}>
      <div className="relative z-10 px-5 max-w-screen-lg xl:max-w-screen-xl mx-auto">
        {children}
      </div>
    </motion.div>
  )
}
