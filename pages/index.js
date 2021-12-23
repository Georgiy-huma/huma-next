import { useState, useRef, useEffect } from 'react'

import Link from 'next/link'
import Head from 'next/head'
// import Image from 'next/image'
import GradientBackground from '../components/pages/GradientBackground'
import styles from '../styles/Home.module.css'

export const getStaticProps = async () => {
  const content = await import(`../content/pages/${'home'}.md`)
  return { props: { content: content.default } }
}

export default function Home({ content }) {
  const { attributes } = content

  const [ height, setHeight ] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  }, [])

  // console.log('attr', attributes)

  return (
    <div ref={ref} className={styles.container}>
      <GradientBackground height={height} />
      <Head>
        <title>Huma Next</title>
        <meta name="description" content="Huma Next.js and headless CMS demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>{attributes.hero_title}</h1>
        <p>{attributes.hero_description}</p>

        <div className={styles.btnContainer}>
          <Link href="/admin">Login as admin</Link>
          <Link href="/news-and-publications">News and publications page</Link>
        </div>
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
    </div>
  )
}
