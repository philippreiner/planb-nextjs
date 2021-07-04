import Layout from "@components/layout";
import Header from "@components/header/header";
import { Basicpage } from "@components/content/content";
import { DevNote, SegmentHeading } from "@components/atoms/atoms";
import { Flex, Box, Center, Link } from "@chakra-ui/react";
import { Wallpaper, Main } from "@components/blocks/blocks";
import Hero from '@components/hero/hero';
import { Slide, Fade } from 'react-awesome-reveal'
import { Arrowlink } from "@components/atoms/atoms";
import NextLink from "next/link";
import NextImage from "next/image";

import {

  Heading,
  Text,
  useColorModeValue,
  Button,
  DarkMode,
  Spacer,
  HStack,
  List, ListItem, ListIcon, OrderedList, UnorderedList
} from "@chakra-ui/react";


export default function Home() {
  return (
    <Layout>
      <Hero background="url(images/dpf_hero.png)">
        <Fade triggerOnce={true} delay={100}>
          <Main maxW="full">
            <Box pt={[12, 20, 32]} pb={[null, 20, 32]}>
              <Heading
                maxW="2xl"
                as="h1"
                pb={[2, 4]}
                fontSize={["24px", "36px", "54px", "72px"]}
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
        </Fade>
      </Hero>

      <Box background="url(images/dpf_ui_ux.png)" backgroundSize="cover">
        <Box pt={[24, 12, 24]} px={[4, 12, 24]} pb={[4, 12, 24]} pos="relative" maxW="full">
          <SegmentHeading title="Bereiche aus der Ditigal Product Factory" />
          <Heading as="h2" pb="4" fontWeight="normal" fontSize={["24px", "36px", "54px"]} textTransform="uppercase">
            <strong >
              UI+UX Data Science + AI DevOps
              Agile Software Engineering Testing
              Architecture Cloud Native Robotics
              Product Management Prototyping
            </strong>
          </Heading>
          <Flex>
            <Spacer />
            <Box maxW={[null, "33%"]} py={[12, 16]}>
              <Text pb={[8]} >
                Für unsere Kunden bedeutet dies zuverlässige
                Verbesserungen der Software - die den täglichen Anforderungen gewachsen sind.
                Und das bei hoher Qualität und Sicherheit.
                Durch unsere agile Arbeitsweise können wir Ergebnisse bereits in kurzer Zeit marktreif machen bei geringen Kosten.
              </Text>
              <Arrowlink pt={[8, null]} label="Mehr über PlanB." url="/about" />
            </Box>
            <Spacer />
          </Flex>
        </Box>
      </Box>
<Box id="products">
    <DevNote >
        Virtueller Inspektions-Assistent
        Augumented Reality App-Entwicklung
        Portal für virtuelle Hauptversammlungen
        App-Entwicklung for Luftreiniger/-Wäscher
        Digitales Fahrzeugmanagement

        Hauptversammlungen im virtuellen Raum neu gedacht oder wenn der Aktionär Homeoffice macht.
        In Unterstützung unseres Kunden haben wir einen Service zur digitalen Durchführung von Hapt-, Gesellschafter- und Mitgliedsversammlungen Für
        Unternehmen, Verbände und Vereine entwickelt, der Nachhaltigkeit und die Zeit nach der Pandemie im Auge hat.  
      </DevNote>
</Box>
      




    </Layout>
  );
}
