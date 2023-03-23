import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Arre voice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="We are taking a breather and pivoting!" />
        <p className="description">
        We are in process of revamping the platform and coming back in a new avatar. Stay tuned! We will back soon!

        </p>
        <p className="description">We are active on our social handles. Please follow us on</p>
        <p><a href="https://www.instagram.com/arre_voice/" target="_blank">Instagram</a></p>
        <p><a href="https://twitter.com/ArreVoice/" target="_blank" >Twitter</a></p>

      </main>

      <Footer />
    </div>
  )
}
