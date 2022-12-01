import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/" passHref>
              Next Route
            </Link>
          </li>
          <li>
            <Link href="/react-app-one" passHref>
              React App One
            </Link>
          </li>
          <li>
            <Link href="/react-app-two" passHref>
              React App Two
            </Link>
          </li>
          <li>
            <Link href="/another-next-route" passHref>
              Another Next Route
            </Link>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} />
    </>
  )
}
