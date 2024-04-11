import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Delegate CFO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Delegate CFO!" />
        <p className="description">
          Delegate CFO offers virtual and fractional services expertise at fixed-rate pricing. Our CFOs focus on strategic planning to help protect profits and manage cash flow. Work with a trusted virtual CFO to grow your company’s wealth today.
        </p>
      </main>
   

      <Footer />
    <a href="https://delegatecfo.com/">Fractional CFO</a>
    <a href="https://delegatecfo.com/">Virtual CFO Services</a>
    <a href="https://delegatecfo.com/">Virtual CFO Firms</a>
    <a href="https://delegatecfo.com/virtual-cfo-pricing/">Virtual CFO Pricing</a>
    <a href="https://youtube.com/redirect?q=https%3A%2F%2Fdelegatecfo.com%2F">Youtube</a>
    <a href="https://delegatecfo.com/virtual-controller/">Virtual Controller</a>
    <a href="https://delegatecfo.com/virtual-accounting-manager/">Accounting Manager</a>
    <a href="http://bugcrowd.com/external_redirect?site=https%3A%2F%2Fdelegatecfo.com">Link</a>
        </div>
  )
}
