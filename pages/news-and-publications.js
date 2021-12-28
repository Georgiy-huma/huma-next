import { useState, useRef, useEffect } from 'react'
import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import GradientBackground from '../components/pages/GradientBackground'

import Builder from '../components/Builder'

import styles from '../styles/pages/news-and-publications.module.scss'

export default function NewsAndPubs({ /* blogsHome, */ listOfBlogs }) {

  // console.log('listOfBlogs', listOfBlogs)

  const elementsToRender = []

  
  for (let post of listOfBlogs) {
    // console.log('Post', post.builder)
    // const entry = []


    // const [ data ] = post.builder
    for (let item of post.builder) {
      const result = Builder({ id: post.slug, type: item.type, item })
      // console.log('Result', result)

      // entry.push(result)
      elementsToRender.push(result)

    }

    console.log('elementsToRender', elementsToRender[0])
  }

  // console.log('Array of posts', elementsToRender)

/*   const listItems = listOfBlogs.map((item) =>
    <article
      key={item.title}
      className={styles.blogPost}
    >
      <p>blog</p>

      <h2>{item.title}</h2>

      <p>
        {item.builder && item.builder.length
         ? <>{item.builder[0].Content}</> // fix this
         : <>DEFAULT CONTENT</>
         }
      </p>

      <p>
        2 Nov 2021 | 3 min read
      </p>
    </article>
  ) */

  const [ height, setHeight ] = useState(1000)
  const ref = useRef(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  }, [])

  return <main ref={ref} style={{ height: '100vh' }}>
    <GradientBackground height={height} />
    <h1 style={{ margin: '0', textAlign: 'center', paddingTop: '10rem' }}>Join the conversation</h1>
    <div className={styles.container}>
      {elementsToRender}
      {/* {listItems} */}
      {/* {elementsToRender.length && elementsToRender.map(element => {
        <p>11
        {element}
        </p>
      })} */}
      {/* entry */}
    </div>
  </main>
}

function getBySlug(dir, slug) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(dir, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data } = matter(fileContents)

  return data
}


export async function getStaticProps() {

  const files = fs.readdirSync('content/thoughtpiece')

  // const blogsHome = getBySlug('content/pages', 'news-and-publications')

  const listOfBlogs = []

  for (let file of files) {
    listOfBlogs.push(getBySlug('content/thoughtpiece', file.substring(0, file.length-3)))
  }

  return {
    props: {
      // blogsHome,
      listOfBlogs
    }
  }
}
