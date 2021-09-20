import Layout from "@components/layout";
import Header from "@components/header/header";
import { Basicpage } from "@components/content/content";
import { DevNote, SegmentHeading } from "@components/atoms/atoms";
import { Wallpaper, Main } from "@components/blocks/blocks";
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
            <Hero background="url(images/karriere-hero.png)">
                <Fade triggerOnce={true} delay={100}>
                    <Main maxW="full">
                        <Box pt={[12, 20, 32]} pb={[12, 20, 32]}>
                            <Heading
                                maxW="2xl"
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
                                pb={[2, 4, 6]}
                                maxW={[null, null, "80%", "45%"]}
                                color="white"
                            >
                                Wir suchen #MitGestalter mit Leidenschaft für digitale Produkte.
                            </Text>
                            <Arrowlink label="Die Menschen hinter PlanB." url="/about" />
                        </Box>
                    </Main>
                </Fade>
            </Hero>


            <Box pos="relative" as="section" p={[4, 12, 24]} >
                <SegmentHeading title="Werde teil des Teams" />

                <Heading
                    as="h2"
                    textTransform="uppercase"
                    fontWeight="fat"
                    fontFamily="fat"
                    fontSize={["24px", "36px", "44px"]}>
                    Kontaktiere uns
                </Heading>

                <Flex direction={["column", "column", "row", "row"]}>
                    <Box w={["100%", "100%", "50%", "50%"]} py="12px" padding="48px">
                        <NextImage src="/images/ausbildung-portraits.png" layout="responsive" width="100%" height="50px" draggable="false" objectFit="cover" />
                        <Flex py="24px">
                            <Box w="50%">
                                <Text align="center" w="90%" fontWeight="bold" fontSize={["14px", "16px", "18px"]}>Florian Schmid</Text>
                                <Text align="center" w="90%" fontSize={["14px", "16px", "18px"]}>Ausbilder</Text>
                            </Box>
                            <Box w="50%">
                                <Text align="center" w="90%" fontWeight="bold" fontSize={["14px", "16px", "18px"]}>Heiko Huber</Text>
                                <Text align="center" w="90%" fontSize={["14px", "16px", "18px"]}>Ausbilder</Text>
                            </Box>
                        </Flex>
                    </Box>
                    <Box w={["100%", "50%", "50%", "50%"]} py="48px">
                        <SegmentHeading title="#YOUNGPROFESSIONALS" />
                        <Heading as="h2" textTransform="uppercase" fontWeight="bold" fontFamily="fat" fontSize={["24px", "36px", "44px"]}>
                            Ausbildung und Duales Studium bei PlanB.
                        </Heading>
                        <Text fontSize={["14px", "16px", "18px"]} py={[4, 8, 12]} w={["100%", "100%", "80%", "80%"]}>
                            Das Ausbilden unserer Young Professionals ist ein wichtiger Bestandteil unserer Unternehmensphilosophie. Aus diesem Grund bieten wir abwechslungsreiche Praktika-, Ausbildungs- und Studienmöglichkeiten an. Dabei sammelst du vom ersten Tag an spannende Praxiserfahrung rund um digitale Produkte – beim eigenen „doing“ in ersten internen Projekten an unserem Standort in Hüttlingen und später als fester Bestandteil in interessanten Kundenprojekten.
                        </Text>
                    </Box>
                </Flex>
            </Box>

            <Box as="section" display={["none", "block", "block", "block"]} pos="relative" p={[4, 12, 24]} bgImage="url('/images/offices/huettlingen-baustelle-blured.png')">
                <SegmentHeading title="Karriere" />
                <Heading as="h1" textAlign="center" w="80%" mx="10%" mt={[4, 12, 24]} fontSize={["24px", "44px", "72px"]} textTransform="uppercase" fontWeight="bold">
                    Wir haben noch Platz für dich!
                </Heading>

                <Box w="100%">
                    <Text mt={[8, 12]} as="p" textAlign="center" w="100%" fontSize={["16px", "28px", "36px"]} fontWeight="bold" color="#FF5100">
                        <Text as="a" href="mailto:professionals@plan-b-gmbh.com">
                            professionals@plan-b-gmbh.com
                        </Text>
                    </Text>
                    
                    <Text mt={[8, 12]} as="p" textAlign="center" w="100%" fontSize={["12px", "16px", "24px"]} color="#FF5100">
                        <Text as="a" href="mailto:young.professionals@plan-b-gmbh.com">
                            young.professionals@plan-b-gmbh.com
                        </Text>
                    </Text>
                </Box>

                <Flex mt={[12, 24, 48]}>
                    <Box w="33%">
                        <Flex mt="12px" alignItems="center" align="center" alignContent="center">
                            <Box mt="18px" w="10%">
                                <NextImage src="/assets/icons/location-icon.png" height="41px" width="30px"/>
                            </Box>
                            <Box w="80%">
                                <Text>PlanB. GmbH</Text>
                                <Text>Kocherstrasse 10</Text>
                                <Text>DE-73460 Hüttlingen</Text>
                            </Box>
                        </Flex>
                    </Box>

                    <Box w="33%">
                        <Flex direction="column"  alignItems="center" align="center" alignContent="center">
                            <Box width="100%">
                                <Flex>
                                    <NextImage src="/assets/icons/phone-icon.png" height="30px" width="30px"/>
                                    <Text width="80%" ml="12px">+49 7361 55 62 10</Text>
                                </Flex>
                            </Box>
                            <Box width="100%" mt={[4, 8, 8]}>
                                <Flex>
                                    <NextImage src="/assets/icons/mail-icon.png" height="21px" width="30px" />
                                    <Text width="80%" ml="12px">info@plan-b-gmbh.com</Text>
                                </Flex>
                            </Box>
                        </Flex>
                    </Box>

                    <Box w="33%">
                        <Flex mt="36px" px="48px" alignItems="center" align="center" alignContent="center">
                            <Box w="25%">
                                <a target="_blank" href="https://www.facebook.com/PlanBGmbH">
                                    <NextImage src="/assets/icons/facebook-icon.png" width="30px" height="30px" />
                                </a>
                            </Box>
                            <Box w="25%">
                                <a target="_blank" href="https://www.instagram.com/planb.gmbh/">
                                    <NextImage src="/assets/icons/instagram-icon.png" width="30px" height="30px" />
                                </a>
                            </Box>
                            <Box w="25%">
                                <a target="_blank" href="https://twitter.com/planbgmbh">
                                    <NextImage src="/assets/icons/twitter-icon.png" width="30px" height="30px" />
                                </a>
                            </Box>
                            <Box w="25%">
                                <a target="_blank" href="https://www.linkedin.com/company/planbgmbh/">
                                    <NextImage src="/assets/icons/linkedin-icon.png" width="30px" height="30px" />
                                </a>
                            </Box>
                        </Flex>
                    </Box>


                </Flex>
            </Box>

            <About />
        </Layout>
    );
}