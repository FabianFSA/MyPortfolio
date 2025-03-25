import './styles/global.css' // Globale Styles laden
import type { AppProps } from 'next/app'

function MyHomePageApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} /> // Render die aktuelle Seite
}

export default MyHomePageApp
