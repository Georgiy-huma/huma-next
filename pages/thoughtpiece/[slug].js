import { getBySlug } from '../../lib'
import fs from 'fs'

const Post = ({ postData }) => { //thoughtpiece

  const { header, subHeader, author, publishDate, minToRead, postContent} = postData

  return <>
    <span>BLOG</span>
    <h1>{header}</h1>
    <h2>{subHeader}</h2>
    <p>First published: {publishDate} | {minToRead} min read</p>
    <hr />
    <span><b>Author:</b> {author}</span>
    <p>
      {postContent}
    </p>
  </>
}

export async function getStaticPaths() {

  const files = fs.readdirSync('content/thoughtpiece')

  console.log('Files!', files)

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

  console.log(params)

  const data = getBySlug('content/thoughtpiece', 'sometesttitle')

  return {
    props: {
      postData: data
    }
  }
}

export default Post
