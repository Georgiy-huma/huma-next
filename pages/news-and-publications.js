import fs from 'fs'
import { join } from "path"
import matter from "gray-matter"

export default function NewsAndPubs({ blogsHome, listOfBlogs }) {

  const listItems = listOfBlogs.map((item) =>
    <li key={item.title}>{item.title}</li>
  )

  return <>
    {listItems}
  </>
}

function getBySlug(dir, slug) {
  const realSlug = slug.replace(/\.md$/, "")
  const fullPath = join(dir, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data } = matter(fileContents)

  return data
}


export async function getStaticProps() {

  const files = fs.readdirSync('content/thoughtpiece')

  const blogsHome = getBySlug("content/pages", "news-and-publications")

  const listOfBlogs = []

  for (let file of files) {
    listOfBlogs.push(getBySlug("content/thoughtpiece", file.substring(0, file.length-3)))
  }

  return {
    props: {
      blogsHome,
      listOfBlogs
    },
  };
}
