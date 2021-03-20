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
        <Container maxW="42em">
          <Box pt={[12, 20]} pb={[4, 6]}>
            <Heading
              as="h1"
              pb={[2, 4]}
              fontSize={["xl", "3xl"]}
              textTransform="uppercase"
            >
              Changing the way how people and businesses work, communicate and collaborate.
            </Heading>
            <Text pb={[2, 4]}>
            PlanB sind 130 kluge Köpfe welche mutig die digitale Transformation und die Zukunft der Arbeit schon heute gestalten.
            </Text>
            <NextLink href="/about" passHref>
              <Link color="primary">Warum Kunden PlanB. empfehlen</Link>
            </NextLink>
          </Box>
        </Container>
      </Solid>
      <Container maxW="42em">
      <Box pt="4">
        Liste an Themen/Schwerpunkten wie AI/Teams/IOT... <br/>
        <NextLink href="/solutions" passHref>
              <Link color="primary">Unsere Lösungen</Link>
        </NextLink>
      </Box>
      <Box pt="4">
        Arbeiten bei PlanB. <br/>
        <NextLink href="/karriere" passHref>
              <Link color="primary">Karriere & Ausbildung</Link>
        </NextLink>
      </Box>
      </Container>
    </Layout>
  );
}
