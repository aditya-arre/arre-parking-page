import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="We are taking a breather and pivoting!" />
        <p className="description">
        We are in process of revamping the platform and coming back in a new avatar. Stay tuned! We will back soon!

        </p>
        <p>Thank you for supporting arre.co.in</p>
        <p>We are active on our social handles. Please follow us on</p>
        <p><a href="https://www.instagram.com/arreindia/" target="_blank">Instagram</a></p>
        <p><a href="https://www.youtube.com/c/ArreIndia" target="_blank">YouTube</a></p>
        <p><a href="https://twitter.com/Arretweets" target="_blank" >Twitter</a></p>
        <p><a href="https://www.facebook.com/ArreIndia" target="_blank">Facebook</a></p>

      </main>

      <Footer />
    </div>
  )
}
