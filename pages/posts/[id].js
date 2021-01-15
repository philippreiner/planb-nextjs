import Layout from "@components/layout"
import Content from "@components/content/content"
import Posthead from "@components/posthead/posthead"
import Postmeta from "@components/postmeta/postmeta"
import About from "@components/about/about"
import { Gradient } from "@components/blocks/blocks"
import { getAllPostIds, getPostData } from "@library/posts"
import NextHead from "next/head"
import ReactMarkdown from "react-markdown"
import { markdownRenderers } from '@library/renders';

import { Container, Center, Link } from "@chakra-ui/react";


export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {

  var title = postData.title + ' - PlanB. Blog'
  return (
    <Layout>
      <NextHead>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:image" content={postData.image} />
      </NextHead>
      <Posthead
        title={postData.title}
        published={postData.date}
      />
      <Container maxW="40em" pt={[4, 6]} pb={[4, 6]}>
        <Content>
          <ReactMarkdown
            children={postData.contentHtml}
            renderers={markdownRenderers()}
          />
        </Content>
      </Container>
      <Container maxW="44em" pt={[4, 6]} pb={[4, 6]}>
        <Postmeta
          author="authorobjecttodo"
          recommended="object with links and titles"
        />
        <Center pt={[4, 6]}>
          <Link color="gray.500" href="#linkedinsharetodo">Auf LinkedIn teilen</Link>
        </Center>
      </Container>
      <Gradient>
        <About />
      </Gradient>

    </Layout>
  )
}
