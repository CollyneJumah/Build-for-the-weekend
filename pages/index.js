import Head from 'next/head'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Main } from '../components/Main'
import { Navbar } from '../components/Navbar'
import { Projects } from '../components/Projects'
import { ToolKits } from '../components/ToolKits'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Build ForThe WeekEnd</title>
        <meta name="description" content="Build ForThe WeekEnd" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <ToolKits />
      <Projects />
      <Contact />
    </div>
  )
}
