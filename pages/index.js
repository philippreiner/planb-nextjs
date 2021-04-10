import Layout from "@components/layout";

import VideoHead from "@components/videohead/videohead";
import Hero from "@components/hero/hero";
import { TagWall, TagWallItem}from "@components/tagwall/tagwall";

import NextLink from "next/link";
import NextImage from "next/image";
import { Solid, Wallpaper, Gradient, Main, Fullheight} from "@components/blocks/blocks";
import { SegmentHeading, DevNote, Card} from "@components/atoms/atoms";

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
  Flex,
  Spacer
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
      <DarkMode>
        <VideoHead >
        <Fade triggerOnce={true} delay={100}>
        <Main  maxW="full">
            <Box pt={[12, 20, 32]} pb={[12, 20, 32]}>
                <Heading
                  as="h1"
                  pb={[2, 4]}
                  fontSize={["xl", "4xl","3vw","4vw"]}
                  textTransform="uppercase"
                  maxW={[null, null, null,"90%"]}
                  color="white"
                >
                  Changing the way how people and businesses communicate, work and collaborate.
                </Heading>
              <Text 
              pb={[2, 4, 6]}
              maxW={[null, null, "82%"]}
              color="white"
              >
              PlanB. sind 130 kluge Köpfe welche mutig die digitale Transformation und die Zukunft der Arbeit schon heute gestalten.
              </Text>
              <NextLink href="/about" passHref>
                <Button whiteSpace={['break-spaces']} textAlign={['left']} size="md" variant="link" color={btnColor} rightIcon={<ArrowForwardIcon d={['none','block']} w={0,6} h={0,6}/>} >Warum Kunden PlanB. empfehlen</Button>
              </NextLink>
            </Box>
          </Main>
          </Fade>
        </VideoHead>
      </DarkMode>
      
      <Fullheight>
      <Slide triggerOnce={true} fraction={0} delay={100} direction="up">
        <Main maxW="full">
        <SegmentHeading title="Use-Cases"/>
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
        </Main>
        </Slide>
      </Fullheight>
    
      <Wallpaper bgImage="/images/offices/huettlingen-baustelle.jpg">
        <Main maxW="full">
          <Flex height={["500px",null,"70vh"]} direction="column">
            <SegmentHeading title="Arbeiten bei PlanB."/>
            <Box flex="1" cursor="pointer" pt={[2,4,16,24]}>
                <Center>
                  <NextLink href="/karriere" passHref>
                    <NextImage
                      src="/images/decorative/epicstuff.svg"
                      width={968*2}
                      height={149*2}
                      alt="#epicstuff"
                    />
                  </NextLink>
                </Center>
            </Box>
            <NextLink href="/karriere" passHref>
              <Link color="primary">Karriere & Ausbildung</Link>
            </NextLink>
          </Flex>
        </Main>
      </Wallpaper>
    </Layout>
  );
}
