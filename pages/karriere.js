import Layout from "@components/layout";
import { SegmentHeading } from "@components/atoms/atoms";
import { Main } from "@components/blocks/blocks";
import NextImage from 'next/image';

import Hero from '@components/hero/hero';
import { Arrowlink } from "@components/atoms/atoms";

import {
    Heading,
    Text,
    Flex,
    Box
} from "@chakra-ui/react";

import About from "@components/about/about";

export default function Home() {
    return (
        <Layout >
            <Hero background="url(images/karriere-hero.png)" arrowDisplay="none">

                <Main maxW="full">
                    <Box width="100%" pt={[12, 20, 32]} pb={[12, 20, 32]}>
                        <Heading
                            wordBreak="keep-all"
                            overflowWrap="unset"
                            maxW="100%"
                            as="h1"
                            pb={[2, 4]}
                            fontSize={["24px", "36px", "54px", "60px"]}
                            textTransform="uppercase"
                            color="white"
                        >Werde jetzt <br />teil des teams</Heading>
                        <Box w="100px" bg="white" h="6px" my="2" mb={[4, 6]}></Box>

                        <Box display={["block", "block", "none", "none", "none"]}>
                            <Box pt="12px"><Arrowlink color="#FF5100" target="_blank" label="Azure Solution Expert" url="/documents/PlanB_AzureSolutionExpert.pdf" width="100%" /></Box>
                            <Box pt="12px"><Arrowlink color="#FF5100" target="_blank" label="Data Scientist" url="/documents/PlanB_DataScientist.pdf" width="100%" /></Box>
                            <Box pt="12px"><Arrowlink color="#FF5100" target="_blank" label="Software Engineer" url="/documents/PlanB_SoftwareEngineer.pdf" width="100%" /></Box>
                            <Box pt="12px"><Arrowlink color="#FF5100" target="_blank" label="System Engineer" url="/documents/PlanB_SystemEngineer.pdf" width="100%" /></Box>
                            <Box pt="12px"><Arrowlink color="#FF5100" target="_blank" label="Praktikant UX/UI" url="/documents/PlanB_Praktikant_UX_UI.pdf" width="100%" /></Box>
                        </Box>
                        <Box display={["none", "none", "block", "block", "block"]}>
                            <Box pt="12px"><Arrowlink color="#FFF" target="_blank" label="Azure Solution Expert" url="/documents/PlanB_AzureSolutionExpert.pdf" width="100%" /></Box>
                            <Box pt="12px"><Arrowlink color="#FFF" target="_blank" label="Data Scientist" url="/documents/PlanB_DataScientist.pdf" width="100%" /></Box>
                            <Box pt="12px"><Arrowlink color="#FFF" target="_blank" label="Software Engineer" url="/documents/PlanB_SoftwareEngineer.pdf" width="100%" /></Box>
                            <Box pt="12px"><Arrowlink color="#FFF" target="_blank" label="System Engineer" url="/documents/PlanB_SystemEngineer.pdf" width="100%" /></Box>
                            <Box pt="12px"><Arrowlink color="#FFF" target="_blank" label="Praktikant UX/UI" url="/documents/PlanB_Praktikant_UX_UI.pdf" width="100%" /></Box>
                        </Box>
                    </Box>
                </Main>

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
                        <Text fontSize={["14px", "16px", "18px"]} pt={[4, 8, 12]} w={["100%", "100%", "80%", "80%"]}>
                            Das Ausbilden unserer Young Professionals ist ein wichtiger Bestandteil unserer Unternehmensphilosophie. Aus diesem Grund bieten wir abwechslungsreiche Praktika-, Ausbildungs- und Studienmöglichkeiten an. Dabei sammelst du vom ersten Tag an spannende Praxiserfahrung rund um digitale Produkte – beim eigenen „doing“ in ersten internen Projekten an unserem Standort in Hüttlingen und später als fester Bestandteil in interessanten Kundenprojekten.
                        </Text>
                        <Text mt={[4, 6, 8]} as="p" textAlign="left" w="100%" fontSize={["14px", "16px", "18px"]} color="#FF5100">
                            <Text as="a" href="mailto:young.professionals@plan-b-gmbh.com">
                                young.professionals@plan-b-gmbh.com
                            </Text>
                        </Text>
                    </Box>
                </Flex>
            </Box>
            <About />
        </Layout>
    );
}