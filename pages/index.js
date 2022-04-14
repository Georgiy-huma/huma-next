import { useState, useRef, useEffect } from 'react'

import Link from 'next/link'
import Head from 'next/head'
// import Image from 'next/image'
import GradientBackground from '../components/pages/GradientBackground'
import NavBar from '../components/navbar/NavBar'
import styles from '../styles/Home.module.scss'

export const getStaticProps = async () => {
  const content = await import(`../content/pages/${'home'}.md`)
  return { props: { content: content.default } }
}

export default function Home({ content }) {
  const { attributes } = content

  const [ height, setHeight ] = useState(0)
  const mainSectionRef = useRef(null)

  useEffect(() => {
    setHeight(mainSectionRef.current.clientHeight)
  }, [])

  // console.log('attr', attributes)

  return (
    <>
      <NavBar />
      <GradientBackground height={height} />
      <Head>
        <title>Huma Next</title>
        <meta name="description" content="Huma Next.js and headless CMS demo" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>

      <main ref={mainSectionRef} className={styles.main}>
        <h1>{attributes.heroTitle}</h1>
        <p className={styles.heroDescription}>{attributes.heroDescription}</p>

        <section className={styles.btnContainer}>
          <Link href="/admin">Login as admin</Link>
          <Link href="/news-and-publications">News and publications page</Link>
        </section>

        <section className={styles.linksContainer}>
          <a
            href="https://app.netlify.com/sites/huma-next/deploys?filter=main"
            target="_blank"
            rel="noopener noreferrer"
          >
            List of builds on netlify
          </a>
        </section>

      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </>
  )
}
