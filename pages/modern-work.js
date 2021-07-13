import Layout from "@components/layout";

import { Main } from "@components/blocks/blocks";
import { SegmentHeading, Arrowlink } from "@components/atoms/atoms";
import HeadlineCollection from '@components/headlinecollection/headlinecollection';
import Hero from '@components/hero/hero';
import { Fade } from "react-awesome-reveal";
import  Slider  from '@components/slider/slider';


import {
  Box,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";
import About from "@components/about/about";

export default function Home() {

  const sliderItems = [
    { id: 0, title: "Digitale Transformation des Arbeitsplatzes", headline: 'Nehmen Sie Ihre Mitarbeiter mit auf die Reise zu einem modernen Arbeitsplatzerlebnis', image: "/images/slider/modern-work/transform-work.png", text: "Die digitale Transformation verändert grundlegend die Art und Weise, wie Unternehmen Technologie nutzen, um Mitarbeiter zu befähigen, Abläufe zu optimieren, Produkte zu transformieren und Kunden zu begeistern - und gleichzeitig müssen sie Compliance- und regulatorische Anforderungen erfüllen. Um wettbewerbsfähig zu sein, musste sich unser Kunde die Frage stellen, wie sie die Chancen der Digitalisierung nutzen können und wie ihr zukünftiger Arbeitsplatz aussehen sollte, um ihre digitale Transformation kontinuierlich voranzutreiben.", link: "/about" },
    { id: 1, title: "Quick Roll-Out von Microsoft Teams", headline: 'Quick Roll-Out von Microsoft Teams', image: "/images/slider/modern-work/rollout.png", text: "Durch COVID-19 wurde der Anteil der Home-Office Arbeiter stark erhöht. Die bestehende Video-, Voice- und Chat-Lösungen war diesen Anforderungen nicht gewachsen sowie nicht für die breite Anwenderbasis von mehreren tausend Anwendern verfügbar. Mit dem Roll-Out von Microsoft Teams ermöglichen wir es dem Kunden sein Tagesgeschäft in einer modernen, sicheren Umgebung aufrecht zu erhalten Nahtlose Kommunikationsmöglichkeit aus dem Homeoffice heraus wurde für jeden Mitarbeiter kurzfristig ermöglicht. Gemeinsame Arbeit in strukturierter Form, um den Betrieb sowie Projekte aufrecht zu halten. ", link: "/about" },
    { id: 2, title: "Microsoft 365 Kooperationen", headline: 'Zusammenarbeit mit M365 über lange Distanzen in der Pandemie', image: "/images/slider/modern-work/microsoft365.png", text: "Mit dem Roll-out für Modern Workplace auf Basis von M365 von Microsoft bieten wir unseren Kunden einen weiteren Schritt auf dem Weg zum digitalen Unternehmen.Wo früher noch die Excel-Tabelle über den Server im Keller per Mail versendet wurde, gibt es nun kollaborative, neue Möglichkeiten mit Microsoft 365 für die gemeinsame Zusammenarbeit in der Cloud. Das reduziert dem Kunden Kosten, beschleunigt Alltagsaufgaben und schafft der IT Zeit für die Anforderungen aus den Fachabteilungen.", link: "/about" },
  ];

  return (
    <Layout>
      <Hero background="url(images/modern_work_hero.png)" backgroundSize={["contain", "cover"]} backgroundPosition={["top", null]} backgroundColor="#0097CE">
        <Fade triggerOnce={true} delay={100}>
          <Main maxW="full">
            <Box mt={[10, null, null]} pt={[12, 20, 32]} pb={[12, 20, 32]}>
              <Heading
                maxW="full"
                as="h1"
                pb={[2, 4]}
                fontSize={["24px", "36px", "54px", "72px"]}
                textTransform="uppercase"
                color="white"
              >
                Mordern work &amp; Consulting
              </Heading>
              <Box w="100px" bg="white" h="6px" my="2" mb={[4, 6]}></Box>
              <Text
                pb={[2, 4, 6]}
                maxW={[null, null, "full", "80%"]}
                color="white"
              >
                Der Arbeitsplatz von morgen ist digital, flexibel und vor allem sicher. Modern Work lässt Ihr Unternehmen effizienter und zuverlässig arbeiten.
              </Text>
              <Arrowlink label="Zu den Projekten" url="/about" />
            </Box>
          </Main>
        </Fade>
      </Hero>

      {/* Moder Work & Managed Services */}
      <Box pos="relative" as="section" p={[4, 12, 24]} bgImage={["url(images/modern_work_mobile.png)", "url(images/modern_work_and_managed_services.png)"]} backgroundSize="cover">
        <Box pos="relative" maxW="full" pb="100">
          <SegmentHeading title="Modern Work &amp; Managed Services" />
          <HeadlineCollection tags={["Modern Workplace", "Power Platform", "Cloud", "Security", "Azure Arc", "Managed Services", "Microsoft 365"]} />
          <Flex maxW={["full", "full", "80%"]} flexDir={["column", "column", "row"]}>
            <Text pr={[4, 12, 24]} maxW={["100%", "100%", "50%"]} width={["full"]}>
              Die moderne IT-Landschaft wird ständig vielfältiger und Budgets kleiner.
              PlanB. ist als zuverlässiger Microsoft-Partner Ihre Lösung für die Migration in die Cloud und die Zukunft der digitalen Zusammenarbeit.
              <br /><br />
              Wir lösen komplexe Themen auf und planen skalierbare, moderne IT-Infrastruktur für jedes Endgerät.
              Die Migration zu Microsoft 365 (Office in der Cloud) ist mit uns kein Problem.
              Und durch die PowerPlattform und viele Jahre Erfahrung können wir Prozesse mit Microsoft-Standards digitalisieren und sparen Kosten für externe Software.
            </Text>
            <Text pr={[4, 12, 24]} maxW={["full", "full", "50%"]} width="full">
              Direkte Ansprechpartner können schnell und rund um die Uhr jedes Problem lösen.
              Dabei ist die Sicherheit Ihrer Daten und die Zufriedenheit der täglichen Anwender unsere höchste Priorität.
              Den nichts ist heute für den Erfolg Ihres Unternehmens so wichtig wie moderne IT-Services.

              <Box mt={[4, 12]}>
                <Arrowlink label="Mehr über PlanB." url="/about" />
              </Box>
            </Text>
          </Flex>
        </Box>
      </Box>

      {/* Slider */}
      <Slider backgroundColor="#0097CE" sliderItems={sliderItems}/>

      <About /> 
    </Layout>
  );
}
