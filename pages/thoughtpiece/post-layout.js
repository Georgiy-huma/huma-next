import { useState, useRef, useEffect } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

import GradientBackground from '../../components/pages/GradientBackground'

import styles from '../../styles/thoughtpiece/post-layout.module.scss'

const PostLayout = ({ post }) => {

  const [ height, setHeight ] = useState(1000)
  const ref = useRef(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight) // this should be a custom hook
  }, [])

  return <>
    {post
      ? <section ref={ref} className={styles.mainSection}>
      <GradientBackground height={height} />
      <article className={styles.postContainer}>
        <div className={styles.mainColumn}>
          <span>BLOG</span>
          <h1>{post.header}</h1>
          <h2>{post.subHeader}</h2>

          <p>First published: {post.publishDate} | {post.minToRead} min read</p>

          <hr />

          <p className={styles.authorInfo}>
            <b>Author:</b> {post.author}
          </p>
          
          <div className={styles.postContent}>
            <ReactMarkdown>
              {post.postContent}
            </ReactMarkdown>
          </div>

        </div>
      </article>
    </section>
    : <>Post data missing</>
    }
  </>
}

export default PostLayout
