import Layout from "@components/layout";
import Header from "@components/header/header";
import { Basicpage } from "@components/content/content";
import { DevNote, SegmentHeading } from "@components/atoms/atoms";
import { Flex, Box, Center, Link, SimpleGrid } from "@chakra-ui/react";
import { Wallpaper, Main } from "@components/blocks/blocks";
import Hero from '@components/hero/hero';
import { Fade } from 'react-awesome-reveal'
import { Arrowlink } from "@components/atoms/atoms";
import HeadlineCollection from '@components/headlinecollection/headlinecollection';
import About from "@components/about/about";

import {

    Heading,
    Text,
    useColorModeValue,
    Button,
    DarkMode,
    Spacer,
    HStack,
    Stack,
    Wrap,
    List, ListItem, ListIcon, OrderedList, UnorderedList
} from "@chakra-ui/react";
import Slider from "@components/slider/slider";


export default function Home() {

    const sliderItems = [
        { id: 0, title: "Augmented Reality App-Entwicklung", headline: 'Ein unterhaltsames AR-Spiel für einen knallharten Business-Case', image: "/images/slider/dpf/MRCS-Mockup-3.png", text: "Wie kann man ein klassisches Produktsortiment um digitale Value-Services erweitern? Für einen großen deutschen Hersteller von Alltagsprodukten stellte sich diese Frage und PlanB. wurde beauftragt eine Antwort zu finden – und entwickeln. Iterativ wurden verschiedene Ideen umgesetzt und verworfen. Am Ende wurde eine interaktive AR-Anwendung mit Unity für beide mobilen Betriebssysteme entwickelt die mit künstlicher Intelligenz Räume erkennt um so z.B. ein Sofa zu identifizieren. Da es sich um eine B2C-Anwendung handelt wurden Spielelemente implementiert und mit 3D-Modellen interaktive Erlebnisse geschaffen.", link: "/about" },
        { id: 1, title: "Portal für virtuelle Hauptversammlungen", headline: 'Hauptversammlungen im virtuellen Raum neu gedacht oder wenn der Aktionär Homeoffice macht.', image: "/images/slider/dpf/hauptversammlung.png", text: "In Unterstützung unseres Kunden haben wir einen Service zur digitalen Durchführung von Haupt-, Gesellschafter- und Mitgliederversammlungen für Unternehmen, Verbände und Vereine entwickelt, der Nachhaltigkeit und die Zeit nach der Pandemie im Auge hat.", link: "/about" },
        { id: 2, title: "App-Entwicklung für Luftreiniger/-Wäscher", headline: 'IoT für einfach gute Raumluft.', image: "/images/slider/dpf/luft.png", text: "Viele Menschen können ein Lied davon singen: schlaflose Nächte durch zu trockene Luft, gerötete Augen dank der alljährlich wiederkehrenden Pollenallergie oder eine schlechte Atmung durch Feinstaub daheim. Eine gute Luft in den eigenen vier Wänden trägt erheblich zur Lebensqualität bei. Luftwäscher und Luftreiniger unseres Kunden helfen bei der Optimierung der Raumluft durch Anpassung der Luftfeuchtigkeit und durch den Einsatz von Partikelfiltern. Wir haben den Auftrag erhalten das Leistungsspektrum der Geräte um eine funktionale Cloud-Lösung mit benutzerfreundlicher App für IOS und Android als Kommunikationsschnittstelle für den Nutzer zu seinem Gerät zu erweitert.", link: "/about" },
        { id: 3, title: "Digitales Fahrzeugmanagement ", headline: 'Auto öffne Dich – digitales Geschäftsmodell für einfaches, sicheres Fahrzeugmanagement.', image: "/images/slider/dpf/flinki.png", text: "In unserer Partnerschaft mit WITTE Digital haben wir ein System zur Marktreife gebracht, welches eine einfache und effiziente Möglichkeit bietet, beliebig viele Nutzer und Fahrzeuge zu verwalten. Der Zugriff und die Weitergabe von Fahrzeugen ist so ganz einfach über digitale Rechtevergabe möglich. Ob für Teams, Mitarbeiter oder Kunden – die Freigabe und Verwaltung erfolgt unkompliziert und zielgerichtet. Dabei reichen drei einfache Schritte, um mit digitalem Schlüsselmanagement zu starten: Box im Fahrzeug platzieren, App herunterladen, beliebig viele Fahrer und Fahrzeuge über das Portal verwalten und schön können die Fahrzeuge mit dem Smartphone sicher geöffnet und wieder verschlossen werden.", link: "/about" },
    ];

    const arKeywords = ["UX+UI", "Data Science + AI", "DevOps", "Agile", "Software Engineering", "Testing", "Architecture", "Cloud Native", "Robotics", "Product Management", "Prototyping"]

    return (
        <Layout>
            <Hero background="url(images/dpf_hero.png)">

                <Main maxW="full">
                    <Box pt={[12, 20, 32]} pb={[null, 20, 32]}>
                        <Heading
                            maxW="2xl"
                            as="h1"
                            pb={[2, 4]}
                            fontSize={["24px", "36px", "54px", "60px"]}
                            textTransform="uppercase"
                            color="white"
                        >
                            The Digital <br></br> Product Factory
                        </Heading>
                        <Box w="100px" bg="white" h="6px" my="2" mb={[4, 6]}></Box>
                        <Text
                            pb={[8]}
                            maxW={[null, null, "80%", "55%"]}
                            color="white"
                        >
                            Innovative Apps und Software werden in unserer Digital Product Factory zuverlässig und schnell entwickelt und ermöglichen skalierbare Geschäftmodelle und neue Anwendungsbereiche.
                        </Text>
                        <Arrowlink label="Zu den Projekten" url="#products" />
                    </Box>
                </Main>

            </Hero>

            <Box background="url(images/dpf_ui_ux.png)" backgroundSize="cover">
                <Box pt={[24, 12, 24]} px={[4, 12, 24]} pb={[4, 12, 24]} pos="relative" maxW="full">
                    <SegmentHeading title="Bereiche aus der Digital Product Factory" />
                    <Heading as="h2" pb="4" fontWeight="normal" fontSize={["24px", "36px", "54px"]} textTransform="uppercase">


                        <Wrap width={["85vw", "75vw"]}>
                            {arKeywords.map(item => (

                                <Box pr={["10px", "30px"]}>
                                    <Text fontSize={["17px", "44px"]} fontWeight="extrabold">{[item]}</Text>
                                </Box>

                            ))}
                        </Wrap>

                    </Heading>
                    <Stack direction={["column", "row"]} >

                        <Box width={["90vw", "40vw"]} mr="5vw">
                            <Text pb={[8]} >
                                In der Digitalen Produktfabrik bietet PlanB. innovative Software-Entwicklung aus einer Hand. Dabei definieren wir durch Technologie die Zukunft Ihres Unternehmens, digitalisieren
                                Prozesse und machen mit KI, AR und UX jede noch so komplexe Idee schnell Realität.
                            </Text>

                            <Text pb={[8]} >
                                Die Möglichkeiten an Talenten für Ihr Projekt sind lückenlos. Je nach Bedarf starten wir mit grundlegender User-Research können aber auf der anderen Seite des Spektrums auch
                                langjährige Softwareprojekte modernisieren und fit für die Zukunft machen. Dazwischen gibt es keine Grenzen – egal ob UI, Frontend, Backend oder skalierbare Cloud-Architektur.
                                Neuste Technologie wird reproduzierbar in handfeste Ergebnisse überführt.
                            </Text>
                        </Box>

                        <Box width={["90vw", "40vw"]}>
                            <Text pb={[8]} >
                                Für unsere Kunden bedeutet dies zuverlässige Verbesserungen der Software – die den täglichen Anforderungen gewachsen sind. Und das bei hoher Qualität und Sicherheit. Durch unsere
                                agile Arbeitsweise können wir Ergebnisse bereits in kurzer Zeit marktreif machen bei geringen Kosten.
                            </Text>
                            <Arrowlink pt={[8, null]} label="Mehr über PlanB." url="/about" />
                        </Box>

                    </Stack>
                </Box>
            </Box>

            <Box id="products">
                <Slider backgroundColor="#FF5100" label="Projekte aus der Digital Product Factory" sliderItems={sliderItems} layout="" />
            </Box>

            <About />
        </Layout>
    );
}
