import Layout from "@components/layout";
import Header from "@components/header/header";
import { Basicpage } from "@components/content/content";
import {DevNote, SegmentHeading} from "@components/atoms/atoms";
import { Wallpaper, Main} from "@components/blocks/blocks";
import NextImage from 'next/image';

import Hero from '@components/hero/hero';
import { Slide, Fade } from 'react-awesome-reveal'
import { Arrowlink } from "@components/atoms/atoms";

import {
  Heading,
  Text,
  Center,
  Link,
  Flex,
  useColorModeValue,
  Button,
  DarkMode,
  Spacer,
  HStack,
  List, 
  ListItem, 
  ListIcon, 
  OrderedList, 
  UnorderedList,
  Box, 
  VStack, 
  Grid, 
  GridItem,
} from "@chakra-ui/react";

import NextLink from "next/link";
import About from "@components/about/about";

export default function Home() {
  return (
    <Layout >
      <Hero background="url(images/karriere-hero.png)" >
        <Fade triggerOnce={true} delay={100}>
          <Main maxW="full">
            <Box maxW="full" py={[12, 20, 32]}>
              <Heading
                maxW="full"
                as="h1"
                pb={[2, 4]}
                fontSize={["24px", "36px", "54px", "72px"]}
                textTransform="uppercase"
                color="white"
              >
                Erweitere deinen <br></br> Horizont
              </Heading>
              <Box w="100px" bg="white" h="6px" my="2" mb={[4, 6]}></Box>
              <Text
                pb={[1, 4, 6]}
                maxW={[null, null, "20%", "58%", "58%"]}
                color="white"
              >
                Wir suchen #MitGestalter mit Leidenschaft für digitale Produkte. 
              </Text>
              <Arrowlink label="Jetzt Bewerben" url="#products" />
            </Box>
          </Main>
        </Fade>
      </Hero>








      <Box as="section" pt={[4,12,24,44]} pb={[4,12,24]}>
        <Main  maxW="full">





          <Grid
              templateRows="2fr"
              templateColumns={["repeat(12, 1fr)"]}
              gap={[4,8]}
            >

            <GridItem pos="relative" colSpan={[1,null,2]}>
              <NextImage 
                src="/images/ausbildung-portraits.png"
                layout="fill"
                objectFit="cover"
                />
                
            </GridItem>

            <GridItem colSpan={[1,null,10]}>
              <SegmentHeading title="#YoungProfessionals"/>
                <Heading
                    as="h2"
                    pb={[2,4,8]}
                    pt={[2,4]}
                    textTransform="uppercase"
                    fontWeight="fat"
                    fontFamily="fat"
                    fontSize={["24px","36px","44px"]}
                >
                  Ausbildung und duales Studium bei PlanB.
                </Heading>
                <Text as="p" pb={[2,4,8]}>
                Das Ausbilden unserer Young Professionals ist ein wichtiger Bestandteil unserer Unternehmensphilosophie. Aus diesem Grund bieten wir abwechslungsreiche Praktika-, Ausbildungs- und Studienmöglichkeiten an. Dabei sammelst du vom ersten Tag an spannende Praxiserfahrung rund um digitale Produkte – beim eigenen „doing“ in ersten internen Projekten an unserem Standort in Hüttlingen und später als fester Bestandteil in interessanten Kundenprojekten.
                <br/>
                
                </Text>

            </GridItem>
            
            <Grid
              
              templateColumns={["repeat(12, 0fr)"]}
              gap={[4,8]}
              >

              <GridItem pos="relative" colSpan={[1,null,6]}>
                <Text align="center">
                  <strong>Florian Schmid</strong><br/>
                  Ausbilder im Bereich XY
                </Text>
              </GridItem>

              <GridItem pos="relative" colSpan={[1,null,6]}>
                <Text align="center">
                  <strong>Heiko Huber</strong><br/>
                  Ausbilder im Bereich XY
                </Text>
              </GridItem>
            </Grid>
            
          </Grid>





        </Main>
      </Box>
      <About /> 
    </Layout>
  );
}
