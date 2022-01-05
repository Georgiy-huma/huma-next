import { getBySlug } from '../../lib'
import fs from 'fs'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

const Post = ({ postData }) => { //thoughtpiece


  console.log('POST DATA', postData)


  // const { header, subHeader, author, publishDate, minToRead, postContent} = postData


  return <>
  {postData
    ?<>
      <span>BLOG</span>
      <h1>{postData.header}</h1>
      <h2>{postData.subHeader}</h2>
      <p>First published: {postData.publishDate} | {postData.minToRead} min read</p>
      <hr />
      <span><b>Author:</b> {postData.author}</span>
      <ReactMarkdown>
        {postData.postContent}
      </ReactMarkdown>
    </>
    : <>Empty post</>
  }
  </>
}

export async function getStaticPaths() {

  const files = fs.readdirSync('content/thoughtpiece')

  // console.log('Files!', files)

  const listOfPaths = []

  for ( let file of files) {
    listOfPaths.push(`/thoughtpiece/${file.substring(0, file.length-3)}`)
  }

  return {
    paths: listOfPaths,
    /* paths: [
      // String variant:
      '/thoughtpiece/sometesttitle',
      // Object variant:
      // { params: { slug: 'second-post' } },
    ], */
    fallback: true,
  }
}

export async function getStaticProps({ params }) {

  const { slug } = params

  console.log('Params! SLUG', slug)

  const postData = getBySlug('content/thoughtpiece', slug)

  console.log('DATA----------', postData)

  return {
    props: {
      postData
    }
  }
}

export default Post
