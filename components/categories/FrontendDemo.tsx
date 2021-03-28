import { motion } from 'framer-motion'
import { Carousel } from 'react-responsive-carousel'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

const urls = [
  'https://outgo.intraedu.kr',
  'https://study.trinets.xyz',
  'https://andro.trinets.xyz',
  'https://checks.trinets.xyz',
  'https://e.pmh.codes',
  'https://star.pmh.codes',
  'https://alpha.pmh.codes',
  'https://settings.trinets.xyz',
  'https://hcs.trinets.xyz',
  'https:/intraedu.kr',
  'https://eodi.ga'
]

export default function FrontendDemo () {
  return (
    <motion.div transition={{ delay: 1 }} className="p-3" initial={{ opacity: 0, translateY: 10, scaleY: 0 }} animate={{ opacity: 1, translateY: 0, scaleY: 1 }}>
      <h3 className="text-left text-white">Developed Sites</h3>
      <Carousel className="shadow-xl" showThumbs={false} autoPlay infiniteLoop interval={1500} showIndicators={false} showStatus={false}>
        {urls.map((url, i) => (
          <div className="bg-white" key={i}>
            <embed style={{ height: 500 }} className="w-full relative z-0" src={url}/>
            <div onClick={() => window.open(url, '_blank')} className="absolute z-10 w-full" style={{ height: 500, transform: 'translateY(-500px)' }}></div>
          </div>
        ))}
      </Carousel>
    </motion.div>
  )
}
