import Layout from "@components/layout";
import Header from "@components/header/header";
import NextLink from "next/link";
import { Solid, Gradient } from "@components/blocks/blocks";
import { Lineheading } from "@components/atoms/atoms";
import About from "@components/about/about";

import { getSortedPostsData } from "@library/posts";

import {
  Container,
  Box,
  Heading,
  Text,
  Flex,
  Spacer,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const bordercolor = useColorModeValue("brand.50", "gray.700");
  return (
    <Layout>
      <Solid>
        <Header />
      </Solid>

      <NextLink href="/blog/" passHref>
        <Link color="primary">
          Blog
        </Link>
      </NextLink>
    </Layout>
  );
}
