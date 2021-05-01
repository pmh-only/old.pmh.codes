import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'

import { config, dom } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

interface Props {
  Component: any,
  pageProps: any[]
}

function MyApp ({ Component, pageProps }: Props) {
  return (
    <>
      <Head><style>{dom.css()}</style></Head>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  )
}

export default MyApp
