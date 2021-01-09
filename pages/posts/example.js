import Layout from "@components/layout"

import Posthead from "@components/posthead/posthead"
import NextLink from "next/link"

export default function Example() {
  return (
    <Layout>
        <Posthead 
        title="Entwicklerfreundliche Blogs einfach mit NextJS und dem modernen JAMSTACK in Rekordzeit entwickeln."
        author="Aaron Czichon"
        published="2020-02-31"
        />
    
      Blogpost here
    </Layout>
  )
}
