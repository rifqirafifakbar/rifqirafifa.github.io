import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { useEffect,useState } from 'react'

// layout
import HeaderApp from '../src/component/header/HeaderApp'
import { Section1 } from '../src/component/section1/section1'
import { SkillSection } from '../src/component/skillSection/skillSection'

// render without SSR var = DynamicComponentWithNoSSR
// const HeaderApp = dynamic(() => import('../src/component/header/HeaderApp'), {
//   ssr: false,
// })

export const Home = () => {
  const [data, setData] = useState()
  const getYearNow = new Date().getFullYear();
  const getQuote = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await response.json()
    setData(data)
  }

  useEffect(() => {
    getQuote();
  }, [])
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Rifqi Rafif Akbar Portofolio</title>
        <meta name="description" content="Rifqi Rafif Akbar Portofolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <HeaderApp />
      
      {/* section 1 */}
      <Section1 />

      <SkillSection />


      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          © Created by Rifqi Rafif Akbar {getYearNow}
        </a>
      </footer>
    </div>
  )
}

export default Home ;