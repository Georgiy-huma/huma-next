import ReactMarkdown from "react-markdown"
import { getBySlug } from '../../lib'


const Post = ({ postData }) => { //thoughtpiece

  const { header, subHeader, author, publishDate, minToRead, postContent} = postData

  return <>
    <span>BLOG</span>
    <h1>{header}</h1>
    <h2>{subHeader}</h2>
    <p>First published: {publishDate} | {minToRead} min read</p>
    <hr />
    <span><b>Author:</b> {author}</span>
    <ReactMarkdown>
      {postContent}
    </ReactMarkdown>
  </>
}

export async function getServerSideProps(context) {

  const data = getBySlug('content/thoughtpiece', context.query.slug)

  return {
    props: {
      postData: data
    }
  }
}

export default Post
