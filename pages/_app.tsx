import './styles/global.css'
import type { AppProps } from 'next/app'

function MyHomePageApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyHomePageApp
