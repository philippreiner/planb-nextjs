import Layout from "@components/layout";

import { Main } from "@components/blocks/blocks";
import { SegmentHeading, Arrowlink } from "@components/atoms/atoms";

import Hero from '@components/hero/hero';


import { Fade } from "react-awesome-reveal";

import About from "@components/about/about";
import MSBadges from '@components/microsoft/msbadges';


import {
    Box,
    Heading,
    Text,
    Flex,
    Spacer,
    ListItem, UnorderedList
} from "@chakra-ui/react";

import NextImage from 'next/image';

export default function Home() {
    return (
        <Layout>
            <Hero background="url(images/human_meets_AI.png)" backgroundPosition={["0% -10%", null, null, null]} backgroundSize={["contain", "contain", "cover", "cover"]}>
                <Fade triggerOnce={true} delay={100}>
                    <Main maxW="full">
                        <Box pt={[12, 20, 32]} pb={[12, 20, 32]}>
                            <Heading
                                maxW="2xl"
                                as="h1"
                                pb={[2, 4]}
                                fontSize={["24px", "36px", "54px", "60px"]}
                                textTransform="uppercase"
                                color="white"
                            >
                                Agiles arbeiten &amp; besonderheiten der PlanB.
                            </Heading>
                            <Box w="100px" bg="white" h="6px" my="2" mb={[4, 6]}></Box>
                            <Text
                                pb={[2, 4, 6]}
                                maxW={[null, null, "80%", "45%"]}
                                color="white">
                                Wir sind 150+ kluge Köpfe für die digitale Transformation und Zukunft der Zusammenarbeit.
                                Jeden Tag arbeiten wir an den digitalen Produkten, innovativen Geschäftsmodellen,
                                skalierbaren Cloud-Architekturen und der Zufriedenheit von hunderttausenden Menschen bei Ihrer Arbeit.
                            </Text>
                            {/* <Arrowlink label="Die Menschen hinter PlanB." url="/about" /> */}
                        </Box>
                    </Main>
                </Fade>
            </Hero>

            {/* Mehr als nur Software */}
            <Box pos="relative" as="section" py={[4, 12, 24]} bgImage="url(images/about_faded_background.png)" backgroundSize="cover" backgroundRepeat="no-repeat">
                <Flex>
                    <Spacer />
                    <Box p={[4, 12, 24]} pos="relative" maxW={[null, null, "65%", "50%"]}>
                        <SegmentHeading title="Wer wir sind und was wir machen" />
                        <Heading as="h2" pb="4" fontWeight="normal" fontSize={["36px", "44px", null, "60px"]} textTransform="uppercase">
                            <strong>Mehr als nur Software</strong>
                        </Heading>
                        <Text pb={[2, 4, 6]}>
                            Wir sind Expertinnen für die digitale Transformation und die Zukunft der Arbeit.
                            Gemeinsam mit unseren Kunden stellen wir uns den größten Herausforderungen und lösen diese durch innovative Technologie und jahrelanger Erfahrung aus der Praxis.
                            Denn der digitale Erfolg eines Unternehmens ist deutlich umfangreicher als nur ein paar Zeilen Code.
                            Es sind Ergebnisse die jeden Tag Menschen glücklich machen und Mehrwert für das Unternehmen bringen.
                        </Text>
                        <Box pb="200">
                            <Box>
                                <Arrowlink label="Digitale Produktfabrik" url="dpf" />
                            </Box>
                            <Box py="4">
                                <Arrowlink label="Modern Workplace" url="modern-work" />
                            </Box>
                            <Box>
                                <Arrowlink label="Cyber Security" url="cyber-security" />
                            </Box>
                        </Box>
                    </Box>
                </Flex>
            </Box>

            {/* Ihr Partner für Digitalisierung */}
            <Box pos="relative" as="section" py={[4, 12, 24]} bgImage="url(images/destroyed_cubes.png)" bgRepeat="no-repeat" backgroundSize="cover">
                <Box pb="200">
                    <Box p={[4, 12, 24]} pos="relative" maxW={[null, null, "65%"]}>
                        <SegmentHeading title="Ihr Partner für Digitalisierung" />
                        <Heading as="h2" pb="4" fontWeight="normal" textTransform="uppercase" fontSize={["36px", "44px", null, "60px"]}>
                            <strong>Wachsende Komplexität Reduzieren</strong>
                        </Heading>
                        <Text pb={[2, 4, 6]}>
                            Wie löst man komplexe Herausforderungen in einem Umfeld,
                            das sich ständig ändert und weiterentwickelt?
                            Neue Technologien drängen immer schneller auf den Markt,
                            die Möglichkeiten der Cloud sind unzählig und IT ist absolut entscheidend für den Erfolg eines Unternehmens in wandelnden Märkten.
                            Haben Sie noch den Überblick?
                        </Text>
                        <Text>
                            Dort wo man keine Handbücher mehr schreiben kann und es hunderte Apps als Alternativen gibt brauchen unsere Kunden einen verlässlichen Partner der Technologie,
                            Business-Case und Erfahrung erfolgreich kombiniert. Das kann kein einzelner Nachmittag Ideen in den Raum werfen erfüllen,
                            sondern nur langfristige, nachhaltige Partnerschaften.
                            Diese Partnerschaften sind unsere Motivation.
                        </Text>
                    </Box>
                </Box>

                {/* Unser Ansatz */}
                <Box pos="relative">
                    <Box>
                        <Box p={[4, 12, 24]} pos="relative" maxW={[null, null, "100%", "100%", "60%"]}>
                            <SegmentHeading title="Unser Ansatz" />
                            <Heading as="h2" pb="4" fontWeight="normal" fontSize={["36px", "44px", null, "60px"]} textTransform="uppercase">
                                <strong>Agilität, Wissen &amp; Partnerschaften</strong>
                            </Heading>
                            <Text pb={[2, 4, 6]} maxW={[null, null, null, "60%", null, null]}>
                                Wir sind agil. Das bedeutet für unsere Kunden großartige Ergebnisse in kleinen Schritten. Jeden Tag arbeiten wir mit agilen Methoden und Denkweisen und validieren konstant Ergebnisse. Veränderungen bedeuten Wettbewerbsvorteile und daher bleiben wir flexibel. Das reduziert das Risiko und bringt unseren Kunden gleichzeitig konstant höheren Mehrwert.
                                Warum empfehlen Kunden PlanB. gerne weiter? Mit unserem agilen Denkmuster reduziert sich die Time-to-Market von Monaten auf wenige Wochen. Projekte bieten konstanten Fortschritt anstatt ungeplanter Kosten – inkl. Transparenz durch gemeinsame Aufgabenplanung. Bisher versteckte Möglichkeiten der IT werden neu genutzt und verbessert. PlanB. ermöglicht effizienteres Arbeiten und neue Geschäftsmodelle.
                                Das Fachwissen der über 150+ Köpfe bei PlanB. hat sich aus jahrelanger Erfahrung entwickelt und wird auch morgen durch Trainings und Zertifizierungen stärker. Wir haben für jede Aufgabe der Digitalisierung die richtige Person. Wir sind ständig auf der Suche. Und unsere eigene Ausbildung und Netzwerke sorgen für konstant neue Mindsets im Team.
                                Als Partner von Microsoft profitieren unsere Kunden von dem Zugang zu Technologien von Morgen die schon heute in Unternehmen eingesetzt werden können. Das zeigen unsere einzigartigen Referenzen zusammen mit Microsoft und unsere Zertifizierungen.
                            </Text>
                            {/* <Arrowlink label="Agiles Projektmanagement" url="" /> */}
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* Microsoft Partnership */}
            <MSBadges />

            {/* Unsere Mission */}
            <Box pos="relative" as="section" py={[4, 12, 24]} bgImage="url(images/future_is_creative.png)" bgSize="cover" bgRepeat="no-repeat">
                <Box>
                    <Box p={[4, 12, 24]} pos="relative" maxW={[null, null, "70%"]}>
                        <SegmentHeading title="Unsere Mission" />
                        <Heading as="h2" pb="4" fontWeight="normal" fontSize={["36px", "44px", null, "60px"]} textTransform="uppercase">
                            <strong>
                                Aus Gestern machen wir Zukunft
                                und gehen einen Schritt weiter
                                mit neuen digitalen Lösungen
                            </strong>
                        </Heading>
                        <Text pb={[2, 4, 6]}>
                            Wir sind uns sicher, dass die Digitalisierung die Art und Weise,
                            wie Menschen und Unternehmen handeln, kommunizieren und zusammenarbeiten verändert.
                            Unsere Mission ist es Kunden zu begeistern,
                            zu inspirieren und Menschen noch näher an ihre Ziele zu bringen.
                            Dabei bieten wir eine Vielzahl an Lösungen für geschäftliche Herausforderungen und digitale Innovationen.
                        </Text>
                    </Box>
                </Box>
            </Box>

            {/* Von Glücklichen Kunden Empfohlen */}
            <Box pos="relative" as="section" py={[4, 12, 24]} bgImage="url(images/cube_lines.png)" bgRepeat="no-repeat" bgSize="cover">
                <Box>
                    <Box p={[4, 12, 24]} pos="relative" maxW={[null, null, null, "75%"]}>
                        <SegmentHeading title="Von glücklichen Kunden empfohlen" />
                        <Heading as="h2" pb="4" fontWeight="normal" textTransform="uppercase" fontSize={["36px", "44px", null, "60px"]}>
                            <strong>
                                Warum Kunden PlanB. empfehlen
                            </strong>
                        </Heading>
                        <Flex flexDir={["column", "column", "column", "row", "row"]}>
                            <UnorderedList pb={[2, 4, 6]} pr={[4, 8, 12]} maxW={["100%", "100%", "100%", "100%", "75%"]}>
                                <ListItem mb="4">Mit unserem <code>agilen Denkmuster</code> reduziert sich die <code>Time-to-Market</code> von Monaten auf wenige Wochen.</ListItem>
                                <ListItem mb="4">Projekte bieten <code>konstanten Fortschritt</code> anstatt ungeplanter Kosten - inkl. <code>Transparenz</code> durch gemeinsame Aufgabenplanung.</ListItem>
                                <ListItem mb="4">Versteckte <code>Möglichkeiten der IT werden neu genutzt</code> und verbessert.</ListItem>
                                <ListItem mb="4">PlanB. ermöglicht <code>effizienteres Arbeiten</code> und <code>neue Geschäftsmodelle</code></ListItem>
                                <ListItem mb="4">Zugang zu <code>marktführenden Experten/Expertinnen</code> und <code>neuester Technologie.</code></ListItem>
                            </UnorderedList>
                            <UnorderedList pb={[2, 4, 6]} pr={[4, 8, 12]} maxW={["100%", "100%", "100%", "100%", "75%"]}>
                                <ListItem mb="4">Umfangreiches <code>Fachwissen</code> wird durch langjährige Erfahrung, Training und Zertifizierung ausgebaut.</ListItem>
                                <ListItem mb="4"><code>Ausbildung</code> und ein vielseitiges und weitreichendes <code>Netzwerk und Experten/Expertinnen</code> sorgen konstant für neue Mindsets im Team.</ListItem>
                                <ListItem mb="4">Als <code>Microsoft Partner</code> ermöglichen wir schon heute Zugang zu den Technologien von morgen.</ListItem>
                                <ListItem mb="4">Zusammen mit Microsoft besitzt PlanB. <code>einzigartige Referenzen</code> und hatte in der Vergangenheit bereits unzählige <code>Projekterfolge</code>.</ListItem>
                            </UnorderedList>
                        </Flex>
                    </Box>
                </Box>
            </Box>

            <About />
        </Layout>
    );
}
