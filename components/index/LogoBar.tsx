import { motion } from 'framer-motion'
import Image from 'next/image'

const placeholder = 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUH/8QAIxAAAgIABgIDAQAAAAAAAAAAAQQCAwAFBgcRIRMxEiJhUv/EABUBAQEAAAAAAAAAAAAAAAAAAAAC/8QAGREAAgMBAAAAAAAAAAAAAAAAABEBAiES/9oADAMBAAIRAxEAPwCHthlE93c/Zu8GU5MgpXXVYqnQYylGPqRII5l2Tz+YQv7daNXfZpZzZY312ShYZV2kmQJB5Py77xkmwj7aOqnCk0wuZLd+Kww5+8ffB/cJdSMXy1FmhN1hJatJJkf7OL5eCbLT/9k='

export default function LogoBar () {
  return (
    <motion.div initial={{ scale: 1.4 }} animate={{ scale: 1 }} className="pt-7 pb-3 text-center">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ skew: -2 }}>
        <img className="absolute rounded-lg z-10" width="300" height="300" src={placeholder} alt="" />
        <Image className="absolute left-0 rounded-lg z-20" src="/img/profile.jpg" width="300" height="300" priority/>
      </motion.div>
      <motion.h3 whileHover={{ skewX: 10, fontStyle: 'italic', color: '#aaaaaa' }} className="text-white text-2xl font-serif">Park Min Hyeok</motion.h3>
      <motion.p whileHover={{ skewX: 10, fontStyle: 'italic', color: '#aaaaaa' }} className="text-white mt-1 font-serif">multi-position developer</motion.p>
    </motion.div>
  )
}
