import { useState, useRef, useEffect } from 'react'
import fs from 'fs'
import GradientBackground from '../components/pages/GradientBackground'
import Image from 'next/image'
import { getBySlug } from '../lib'
import Link from 'next/link'
import NavBar from '../components/navbar/NavBar'

import styles from '../styles/pages/news-and-publications.module.scss'

export default function NewsAndPubs({listOfBlogs }) {

  const listItems = listOfBlogs.map((item) =>
  <Link
    key={item.slug}
    href={`/thoughtpiece/${item.slug}`}
    passHref
  >
      <article
        className={styles.blogPost}
      >
        <div className={styles.headerContainer}>
          <span className={styles.postType}>BLOG</span>
          <Image
            src="/img/svg/blog-post-icon.svg"
            height={24}
            width={24}
            alt="Huma logo icon."
            className={styles.blogIcon}
          />
        </div>

        <h2>{item.header}</h2>

        <p>
          {item.subHeader}
        </p>

        <p>
          {item.publishDate}
        </p>
      </article>
    </Link>
  )

  const [ height, setHeight ] = useState(1000)
  const ref = useRef(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  }, [])

  return <main ref={ref} className={styles.main}>
    <NavBar />
    <GradientBackground height={height} />
    <h1 style={{ margin: '0', textAlign: 'center', paddingTop: '10rem' }}>Join the conversation</h1>
    <div className={styles.container}>
      {listItems}
    </div>
  </main>
}

export async function getStaticProps() {
  const files = fs.readdirSync('content/thoughtpiece')
  const listOfBlogs = []

  for (let file of files) {
    listOfBlogs.push(getBySlug('content/thoughtpiece', file.substring(0, file.length-3)))
  }

  return {
    props: {
      listOfBlogs
    }
  }
}
