import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

import { AnimatePresence } from 'framer-motion'

interface Props {
  Component: any,
  pageProps: any[]
}

function MyApp ({ Component, pageProps }: Props) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp
