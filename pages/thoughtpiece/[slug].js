import fs from 'fs'
import { getBySlug } from '../../lib'

import PostLayout from './post-layout'

const Post = ({ postData }) => { //thoughtpiece

  return <PostLayout post={postData}/>
}

export async function getStaticPaths() {

  const files = fs.readdirSync('content/thoughtpiece')
  const listOfPaths = []

  for (let file of files) {
    listOfPaths.push(`/thoughtpiece/${file.substring(0, file.length-3)}`)
  }

  return {
    paths: listOfPaths,
    fallback: true
  }
}

export async function getStaticProps({ params }) {

  const { slug } = params // get slug from route
  const postData = getBySlug('content/thoughtpiece', slug)

  return {
    props: {
      postData
    }
  }
}

export default Post
