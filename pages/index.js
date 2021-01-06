import Layout from "@components/layout"
import NextImage from 'next/image'

export default function Home() {
  return (
    <Layout>
      <h1>Our fancy new blog is comming soon</h1>
      Promised. Just as in JS.<br></br>
      <NextImage
        src="/images/test.png"
        alt="Some test"
        width={200}
        height={200}
      />

    </Layout>
  )
}
