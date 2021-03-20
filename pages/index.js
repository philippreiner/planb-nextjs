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
        <Box p="10">
        HERO
        </Box>
      </Solid>
      <Box p="4">
        Intro zur PlanB. <br/>
        <NextLink href="/about" passHref>
              <Link color="primary">Warum Kunden PlanB. empfehlen</Link>
        </NextLink>
      </Box>
      <Box p="4">
        Liste an Themen/Schwerpunkten wie AI/Teams/IOT... <br/>
        <NextLink href="/solutions" passHref>
              <Link color="primary">Unsere Lösungen</Link>
        </NextLink>
      </Box>
      <Box p="4">
        Arbeiten bei PlanB. <br/>
        <NextLink href="/karriere" passHref>
              <Link color="primary">Karriere & Ausbildung</Link>
        </NextLink>
      </Box>
    </Layout>
  );
}
