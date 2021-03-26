import Layout from "@components/layout";
import Header from "@components/header/header";
import Hero from "@components/hero/hero";
import NextLink from "next/link";
import { Solid, Gradient } from "@components/blocks/blocks";
import { Lineheading, DevNote } from "@components/atoms/atoms";
import About from "@components/about/about";
import Styles from "styles/pages.module.css";

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
  const bordercolor = useColorModeValue("gray.100", "gray.700");
  return (
    <Layout title="PlanB. - Experten für Modern Work und Software">
      <Hero>
        <Container maxW="90%">
          <Box pt={[12, 20, 32,48]} pb={[12, 20, 32]}>
            <Heading
              as="h1"
              pb={[2, 4]}
              fontSize={["xl", "4xl","3vw","4vw"]}
              textTransform="uppercase"
              maxW={[null, null, null,"90%"]}
            >
              Changing the way how people and businesses communicate, work and collaborate.
            </Heading>
            <Text 
            pb={[2, 4]}
            maxW={[null, null, "80%"]}
            >
            PlanB sind 130 kluge Köpfe welche mutig die digitale Transformation und die Zukunft der Arbeit schon heute gestalten.
            </Text>
            <NextLink href="/about" passHref>
              <Link color="primary">Warum Kunden PlanB. empfehlen</Link>
            </NextLink>
          </Box>
        </Container>
      </Hero>
      <Container maxW="42em">
      <Box pt="4">
        <DevNote>
        Liste an Themen/Schwerpunkten wie AI/Teams/IOT/UX... <br/>
        <NextLink href="/topics" passHref>
              <Link color="primary">Schwerpunkte</Link>
        </NextLink>
        <br/>
        <NextLink href="/solutions" passHref>
              <Link color="primary">Lösungen (DPF/MW)</Link>
        </NextLink>
        </DevNote>
      </Box>
      <Box pt="4">
        <DevNote>
        Arbeiten bei PlanB. <br/>
        <NextLink href="/karriere" passHref>
              <Link color="primary">Karriere & Ausbildung</Link>
        </NextLink>
        </DevNote>
      </Box>
      </Container>
    </Layout>
  );
}
