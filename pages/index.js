import Layout from "@components/layout";
import Header from "@components/header/header";
import NextLink from "next/link";
import { Solid } from "@components/blocks/blocks";
import { Lineheading } from "@components/atoms/atoms";

import {
  Container,
  Box,
  Heading,
  Text,
  Flex,
  Spacer,
  useColorModeValue,
  Link
} from "@chakra-ui/react";

export default function Home() {
  const bordercolor = useColorModeValue("brand.50", "gray.700");
  return (
    <Layout>
      <Solid>
        <Header />
        <Container maxW="48em">
          <Box pt={[12, 20]} pb={[4, 6]}>
            <Heading
              as="h1"
              color="primary"
              pb={[2, 4]}
              fontSize={["2xl", "5xl"]}
            >
              BUILDING THE DIGITAL FUTURE ALREADY TODAY.
            </Heading>
            <Text pb={[2, 4]}>
              Wissen, Erfahrung und praktische Beispiele über die Zukunft von
              Arbeit, Software und Technologie.
            </Text>
          </Box>
        </Container>
      </Solid>
      <Container pt={[4, 8]} pb={[4, 8]} maxW="54em">
        <Lineheading size="h2">Neuste Artikel</Lineheading>
        <Box pt={[2, 8]}>
          <Flex
            pb={[2, 4]}
            mb={[2, 4]}
            borderBottomWidth={[0, "1px"]}
            borderColor={bordercolor}
            direction={["column", "row"]}
          >
            <NextLink href="/posts/example" passHref>
              <Link color="primary">Der etwas längere Titel des Blogbeitrags</Link>
            </NextLink>
            <Spacer />
            <Text color="gray.300">01/21</Text>
          </Flex>
          <Flex
            pb={[2, 4]}
            mb={[2, 4]}
            borderBottomWidth={[0, "1px"]}
            borderColor={bordercolor}
            direction={["column", "row"]}
          >
            <NextLink href="/posts/example" passHref>
              <Link color="primary">Der etwas längere Titel des Blogbeitrags</Link>
            </NextLink>
            <Spacer />
            <Text color="gray.300">01/21</Text>
          </Flex>
          <Flex
            pb={[2, 4]}
            mb={[2, 4]}
            borderBottomWidth={[0, "1px"]}
            borderColor={bordercolor}
            direction={["column", "row"]}
          >
            <NextLink href="/posts/example" passHref>
              <Link color="primary">Der etwas längere Titel des Blogbeitrags</Link>
            </NextLink>
            <Spacer />
            <Text color="gray.300">01/21</Text>
          </Flex>
          <Flex
            pb={[2, 4]}
            mb={[2, 4]}
            borderBottomWidth={[0, "1px"]}
            borderColor={bordercolor}
            direction={["column", "row"]}
          >
            <NextLink href="/posts/example" passHref>
              <Link color="primary">Der etwas längere Titel des Blogbeitrags</Link>
            </NextLink>
            <Spacer />
            <Text color="gray.300">01/21</Text>
          </Flex>
          <Flex
            pb={[2, 4]}
            mb={[2, 4]}
            borderBottomWidth={[0, "1px"]}
            borderColor={bordercolor}
            direction={["column", "row"]}
          >
            <NextLink href="/posts/example" passHref>
              <Link color="primary">Der etwas längere Titel des Blogbeitrags</Link>
            </NextLink>
            <Spacer />
            <Text color="gray.300">01/21</Text>
          </Flex>
        </Box>
      </Container>
    </Layout>
  );
}
