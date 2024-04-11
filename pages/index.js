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
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
    <a href="https://delegatecfo.com/">Fractional CFO</a>
    <a href="https://delegatecfo.com/">Virtual CFO Services</a>
    <a href="https://delegatecfo.com/">Virtual CFO Firms</a>
    <a href="https://delegatecfo.com/">Virtual CFO Pricing</a>
    <a href="https://youtube.com/redirect?q=https%3A%2F%2Fdelegatecfo.com%2F">Youtube</a>

      <Footer />
    </div>
  )
}
