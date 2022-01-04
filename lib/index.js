import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export function getBySlug(dir, slug) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(dir, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data } = matter(fileContents)

  return data
}
