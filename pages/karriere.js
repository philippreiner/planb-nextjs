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
  Textarea,
  GridItem,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText
} from "@chakra-ui/react";

import NextLink from "next/link";
import About from "@components/about/about";

export default function Home() {
  return (
    <Layout >
      <Hero background="url(images/karriere-hero.png)" >
        <Fade triggerOnce={true} delay={100}>
          <Main maxW="full">
            <Box maxW="full" py={[12, 20, 32]} w="800px">
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
          <SegmentHeading title="Werde teil des Teams"/>
          <Heading
                as="h2"
                pb={[2,4,8]}
                pt={[2,4]}
                textTransform="uppercase"
                fontWeight="fat"
                fontFamily="fat"
                fontSize={["24px","36px","44px"]}
                >
              Kontaktiere uns
            </Heading>


          <Grid templateColumns={["repeat(8, 1fr)"]}
              gap={[4,8]}>
          
            <GridItem pos="relative" colSpan={[1,null,3]}>  {/*------------------------Linke Hälfte (Infos)------------------------*/}

              <Grid templateColumns={["repeat(7, 1fr)"]}
                      gap={[10,10]}>

                <GridItem pos="relative"> {/*---location Icon----*/}
                  <Center h="100%">
                    <NextImage 
                      src="/assets/icons/location-icon.png"
                      height="41px"
                      width="30px"
                      />
                    </Center>
                </GridItem>

                <GridItem pos="relative" colSpan={[1,null,6]}> {/*---Text 1. Reihe----*/}
                  <Text fontSize="24px"> <strong>PlanB. GmbH</strong> <br></br>Kocherstrasse 10<br></br>DE-73460 Hüttlingen</Text> 
                </GridItem>
              
              
                <GridItem pos="relative">{/*---phone Icon----*/}
                  <Center h="100%">
                    <NextImage 
                      src="/assets/icons/phone-icon.png"
                      height="30px"
                      width="30px"
                      />
                  </Center>
                </GridItem>
                
                <GridItem pos="relative" colSpan={[1,null,6]}> {/*---Text 2. Reihe----*/} 
                    <Text fontSize="24px">+49 7361 55 62 10</Text> 
                </GridItem>
              

              
                <GridItem pos="relative">{/*---mail Icon----*/}
                  <Center h="100%"> 
                    <NextImage 
                      src="/assets/icons/mail-icon.png"
                      height="21px"
                      width="30px"
                      />
                  </Center>
                </GridItem>

                <GridItem pos="relative" colSpan={[1,null,6]} > {/*---Text 3. Reihe----*/}
                    <Text fontSize="24px">info@plan-b-gmbh.com</Text> 
                </GridItem>
              

              {/*------------------------Social Media Icons------------------------*/}

                <GridItem pos="relative"></GridItem>
                <GridItem pos="relative">
                  <NextImage 
                    src="/assets/icons/facebook-icon.png"
                    height="30px"
                    width="30px"
                    />
                </GridItem>
                <GridItem pos="relative">
                  <NextImage 
                      src="/assets/icons/instagram-icon.png"
                      height="30px"
                      width="30px"
                      />
                </GridItem>
                <GridItem pos="relative">
                <NextImage 
                      src="/assets/icons/twitter-icon.png"
                      height="30px"
                      width="30px"
                      />
                </GridItem>
                <GridItem pos="relative">
                  <NextImage 
                        src="/assets/icons/linkedin-icon.png"
                        height="30px"
                        width="30px"
                        />
                </GridItem>
                <GridItem pos="relative"> </GridItem>
                <GridItem pos="relative"> </GridItem>
              </Grid>
            </GridItem>

            <GridItem pos="relative" colSpan={[1,null,5]}> {/*------------------------Rechte Hälfte (Eingabeformular)------------------------*/}
              
              <Grid templateColumns={["repeat(3, 1fr)"]}
                    gap={[5,5]}>

                <GridItem pos="relative"> 
                  <FormControl id="name">
                  <FormLabel>NAME</FormLabel>
                  <Input type="name" placeholder="Max Mustermann" borderRadius="0" borderColor="white"/>
                  </FormControl>
                </GridItem>

                <GridItem pos="relative"> 
                  <FormControl id="email">
                  <FormLabel>E-MAIL-ADRESSE</FormLabel>
                  <Input type="email" placeholder="max@adresse.com"  borderRadius="0" borderColor="white"/>
                  </FormControl>
                </GridItem>

                <GridItem pos="relative"> </GridItem>

                <GridItem pos="relative" colSpan={[1,null,3]}> 
                  <FormControl id="betreff">
                  <FormLabel>BETREFF</FormLabel>
                  <Input type="betreff" placeholder="Bitte geben Sie einen Betreff ein..."  borderRadius="0" borderColor="white"/>
                  </FormControl>
                </GridItem>

                <GridItem pos="relative" colSpan={[1,null,3]} rowSpan={[1,null,2]} >
                  <FormControl id="nachricht">
                  <FormLabel size="185">NACHRICHT</FormLabel>
                  <Input type="nachricht" h="185" placeholder="Bitte geben Sie eine Nachricht ein..."  borderRadius="0" borderColor="white"/>
                  </FormControl>
                </GridItem>

                <GridItem pos="relative"  colSpan={[1,null,3]} h="50px"> 
                <Box as="button" bg='#FF5100' color="white" h="100%" w="100%" > Nachricht senden </Box>
                </GridItem>

              </Grid>
            </GridItem>     
          </Grid>
        </Main>
      </Box>

      <Box as="section" pt={[4,12,24,44]} pb={[4,12,24]}>
        <Main  maxW="full">

          <Grid
              templateRows="2fr"
              templateColumns={["repeat(12, 1fr)"]}
              gap={[4,8]}
            >

            <GridItem pos="relative" colSpan={[1,null,4]} width="474px">
              <NextImage 
                src="/images/ausbildung-portraits.png"
                width="474px"
                height="304px"
                />

              <Box d="flex">
                <Box w="49%">
                  <Text align="center">
                    <strong>Florian Schmid</strong><br/>
                    Ausbilder im Bereich XY
                  </Text>
                </Box>
                <Box w="49%">
                  <Text align="center">
                    <strong>Heiko Huber</strong><br/>
                    Ausbilder im Bereich XY
                  </Text>
                </Box>
              </Box>
            </GridItem>

            <GridItem colSpan={[1,null,8]}>
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
                <Text>
                  Das Ausbilden unserer Young Professionals ist ein wichtiger Bestandteil unserer Unternehmensphilosophie. Aus diesem Grund bieten wir abwechslungsreiche Praktika-, Ausbildungs- und Studienmöglichkeiten an. Dabei sammelst du vom ersten Tag an spannende Praxiserfahrung rund um digitale Produkte – beim eigenen „doing“ in ersten internen Projekten an unserem Standort in Hüttlingen und später als fester Bestandteil in interessanten Kundenprojekten.
                  <br/>
                </Text>
            </GridItem>
          </Grid>
        </Main>
      </Box>
      <About /> 
    </Layout>
  );
}
