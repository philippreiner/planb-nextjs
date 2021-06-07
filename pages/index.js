import Layout from "@components/layout";

import VideoHead from "@components/videohead/videohead";

import {Main} from "@components/blocks/blocks";
import {Arrowlink} from "@components/atoms/atoms";

import Solutions from "@components/homepage/solutions";
import About from "@components/homepage/about";
import Usecases from "@components/homepage/usecases";
import Culture from "@components/homepage/culture";

import { getSortedPostsData } from "@library/posts";
import { Slide, Fade } from "react-awesome-reveal";


import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Button,
  DarkMode,
  Center,
  Flex
} from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const btnColor = useColorModeValue("primary", "primary");

  return (
    <Layout title="PlanB. - Experten für Modern Work und Software">
        <VideoHead >
        <Fade triggerOnce={true} delay={100}>
        <Main  maxW="full">
            <Box pt={[12, 20, 32]} pb={[12, 20, 32]}>
                <Heading
                  as="h1"
                  pb={[2, 4]}
                  fontSize={["24px", "36px","54px","72px"]}
                  textTransform="uppercase"
                  color="white"
                >
                  Changing the way how people and businesses communicate, work and collaborate.
                </Heading>
                <Box w="100px" bg="white" h="6px" my="2" mb={[4, 6]}>

                </Box>
              <Text 
              pb={[2, 4, 6]}
              maxW={[null, null,"80%", "45%"]}
              color="white"
              >
PlanB. ist Ihr Partner für die digitale Transformation und Zukunft der Zusammenarbeit.
Jeden Tag arbeiten wir an digitalen Produkten, innovativen Geschäftsmodellen, skalierbaren Cloud-Architekturen und der Zufriedenheit von hunderttausenden Menschen bei Ihrer Arbeit.

              </Text>
              <Arrowlink label="Warum Kunden PlanB. empfehlen" url="/about"/>
            </Box>
          </Main>
          </Fade>
        </VideoHead>
      
      <Solutions/>
      <About/>
      <Usecases/>
      <Culture/>
    </Layout>
  );
}
