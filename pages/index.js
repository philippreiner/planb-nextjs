import Layout from "@components/layout"
import Header from "@components/header/header"
import NextLink from "next/link"

export default function Home() {
  return (
    <Layout>
      <Header/>
      <NextLink href="/posts/example">
        <a>
          Das ist ein Beispielpost
        </a>
      </NextLink>
    </Layout>
  )
}
