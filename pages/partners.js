import Layout from "@components/layout";
import { Main } from "@components/blocks/blocks";
import { Arrowlink,SegmentHeading } from "@components/atoms/atoms";
import Hero from '@components/hero/hero';
import {
    Box,
    Heading,
    Text,
    Grid, Flex
} from "@chakra-ui/react";
import MSBadges from "@components/microsoft/msbadges";
import Styles from "../components/homepage/homepage.module.css";
import NextImage from 'next/image';
import About from "@components/about/about";

export default function Partners() {
    return (
        <Layout title="PlanB. - Experten für Modern Work und Software">
            <Hero background="url(images/partners/dna_oben.jpg)" backgroundColor="blackAlpha.700" backgroundBlendMode="darken">
                <Main maxW="full">
                    <Box pt={[12, 20, 32]} pb={[12, 20, 32]}>
                        <Heading
                            as="h1"
                            pb={[2, 4]}
                            fontSize={["24px", "36px", "54px", "60px"]}
                            textTransform="uppercase"
                            color="white"
                        >
                            Enge Zusammenarbeit mit Partnern ist Teil unserer Unternehmens-DNA
                        </Heading>
                        <Box w="100px" bg="white" h="6px" my="2" mb={[4, 6]}>

                        </Box>
                        <Text pb={[2, 4, 6]} maxW={[null, null, "80%", "45%"]} color="white" textTransform="uppercase" fontSize={["16px", "24px", "36px"]}>
                            Microsoft Partnerschaft - unser Fundament
                        </Text>
                        <Text
                            pb={[2, 4, 6]}
                            maxW={[null, null, "80%", "45%"]}
                            color="white"
                        >
                            Gemeinsam mit Microsoft arbeiten wir mit einer Vorlaufzeit von etwa 18 Monaten an neuen Anwendungen für neu entstehende Technologien. Dies führt dazu, dass wir wichtige technische Neuerungen sehr früh in die Planung und die Konzepte unserer Kunden integrieren können. 
                        </Text>
                    </Box>
                </Main>
            </Hero>

            <MSBadges />

            <Box as="section" py={[4, 12, 24]} bgImage="url('/images/partners/dna_unten.jpg')" bgColor="blackAlpha.700" bgBlendMode="darken" className={Styles.solutions}>
            <Main maxW="full">
                <SegmentHeading title="UNSER NETZWERK" />
                <Grid templateRows="" gap="5" templateColumns={["1fr", "1fr", "1fr 1fr", "1fr 1fr", "1fr 1fr"]}>
                    
                    <Box position="relative" w="100%" p={[4, null]} pb={[4, 4, null]} bg="gray.900">
                        <Flex p={[4, 4, 6, 12]} alignItems="center" flexDirection="column">
                            <NextImage src="/images/partners/png/scaleit.png" layout="fixed" width="250px" height="200px"/>
                            <Box>
                                <Text pb={[4, 8]} color="gray.100" fontSize={["16px", "24px", "36px"]}>
                                    SCALEit
                                </Text>
                                <Text pb={[4, 8]} color="gray.100">
                                    Die Welt der Industrie 4.0 unter einem Dach! <br/>
                                    Wir sind Teil der Genossenschaft SCALE it – weshalb? Weil pragmatische und zugleich verlässliche Lösungen für die Zukunft des Mittelstands aus einem Guss kommen müssen. 
                                    SCALE it bringt Kompetenzträger zusammen, bündelt dieses Know-How und koordiniert Projekte mit dem Fokus auf Innovation und Industrie 4.0. 
                                </Text>
                                <Arrowlink url="https://scale-it.org/" label="https://scale-it.org/" />
                            </Box>
                        </Flex>
                    </Box>

                    <Box position="relative" w="100%" p={[4, null]} pb={[4, 4, null]} bg="gray.900">
                        <Flex p={[4, 4, 6, 12]} alignItems="center" flexDirection="column">
                            <NextImage src="/images/partners/png/nvidia2.png" layout="fixed" width="250px" height="200px"/>
                            <Box>
                                <Text pb={[4, 8]} color="gray.100" fontSize={["16px", "24px", "36px"]}>
                                    Nvidia
                                </Text>
                                <Text pb={[4, 8]} color="gray.100">
                                    Wir freuen uns nun auch Teil des erlesenen NVIDIA Inception Programms zu sein, welches Unternehmen im Bereich der Künstlichen Intelligenz (KI) fördert. 
                                    Der frühzeitige Zugang zu modernster Nvidia Technologie unterstützt uns in den Phasen der Produktentwicklung, des Prototypings und der Produktbereitstellung. 
                                    Die enge Zusammenarbeit mit Nvidia wird unserer Entwicklungsrate in Bezug auf Zeit und Qualität weiter erhöhen. 
                                </Text>
                                <Arrowlink url="https://nvidia.com/de-de/" label="https://nvidia.com/de-de/" />
                            </Box>
                        </Flex>
                    </Box>

                    <Box position="relative" w="100%" p={[4, null]} pb={[4, 4, null]} bg="gray.900">
                        <Flex p={[4, 4, 6, 12]} alignItems="center" flexDirection="column">
                            <NextImage src="/images/partners/png/digiz.png" layout="fixed" width="250px" height="200px"/>
                            <Box>
                                <Text pb={[4, 8]} color="gray.100" fontSize={["16px", "24px", "36px"]}>
                                    digiZ
                                </Text>
                                <Text pb={[4, 8]} color="gray.100">
                                    Das digiZ | Digitalisierungszentrum Ostwürttemberg versteht sich als zentraler Ansprechpartner, Unterstützer und Dienstleister für die Digitalisierung in der Region. 
                                    Der Erfahrungstransfer, der Austausch von Kompetenzen und die kontinuierliche Entwicklung von neuen Angeboten und Dienstleistungen sollen helfen, neue Werte für Unternehmen zu schöpfen. 
                                    PlanB. ist Partner des digiZ und Mitglied im Digitalisierungsausschuss Ostwürttemberg. 
                                </Text>
                                <Arrowlink url="http://digiz-ow.de" label="http://digiz-ow.de" />
                            </Box>
                        </Flex>
                    </Box>

                    <Box position="relative" w="100%" p={[4, null]} pb={[4, 4, null]} bg="gray.900">
                        <Flex p={[4, 4, 6, 12]} alignItems="center" flexDirection="column">
                            <NextImage src="/images/partners/png/netzwerkknoten.png" layout="fixed" width="250px" height="200px"/>
                            <Box>
                                <Text pb={[4, 8]} color="gray.100" fontSize={["16px", "24px", "36px"]}>
                                    Netzwerkknoten
                                </Text>
                                <Text pb={[4, 8]} color="gray.100">
                                    Netzwerkknoten bieten ein Rundumpaket an Beratung, Coaching, Prozessbegleitung und Trainings für Ihre agile Transformation und die Herausforderungen Ihrer Veränderungsprozesse. 
                                </Text>
                                <Arrowlink url="https://netzwerkknoten.com" label="https://netzwerkknoten.com " />
                            </Box>
                        </Flex>
                    </Box>
                </Grid>
            </Main>
        </Box>

        <About />

        </Layout>
    );
}