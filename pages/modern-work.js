import Layout from "@components/layout";

import { Main, Fullheight, Wallpaper } from "@components/blocks/blocks";
import { SegmentHeading, Arrowlink } from "@components/atoms/atoms";
import HeadlineCollection from '@components/headlinecollection/headlinecollection';

import Hero from '@components/hero/hero';


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
  Spacer,
  HStack,
  List, ListItem, ListIcon, OrderedList, UnorderedList
} from "@chakra-ui/react";

import NextImage from 'next/image';

export default function Home() {

  const sliderItems = [
    { selected: true, title: "Microsoft 365 Kooperationen", image: "/images/modern_work_hero.png", text: "Sample Text for testing", linkText: "sample link text", link: "/about" },
    { selected: false, title: "Quick Roll-Out von Microsoft Teams", image: "url(images/modern_work_hero.png)", text: "Sample Text for testing", linkText: "sample link text", link: "/about" },
    { selected: false, title: "Digitale Transformation des Arbeitsplatzes", image: "url(images/modern_work_hero.png)", text: "Sample Text for testing", linkText: "sample link text", link: "/about" },
    { selected: false, title: "Low Code trifft XY", image: "url(images/modern_work_hero.png)", text: "Sample Text for testing", linkText: "sample link text", link: "/about" }
  ];

  function clickItem(item) {
    sliderItems.forEach(item => {
      item.selected = false;
    });
    item.selected = true;

    console.log(sliderItems);

  }

  return (
    <Layout>
      <Hero background="url(images/modern_work_hero.png)" backgroundSize={["contain", "cover"]} backgroundPosition={["top", null]} backgroundColor="#0097CE">
        <Fade triggerOnce={true} delay={100}>
          <Main maxW="full">
            <Box pt={[12, 20, 32]} pb={[12, 20, 32]}>
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
          <Flex maxW={["full", "full", "80%"]} flexDir={["column", "row"]}>
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
      <Box pos="relative" as="section" maxW="full" width="full">
        {/* Banner */}
        <Box bgColor="#0097CE" p={[4, 12]}>
          <SegmentHeading title="Projekte" />
          <Flex maxW="full" w="full" py={[4, 12]} flexDir={["column", "row"]}>
            {sliderItems.map((item) => (
              <Text onClick={() => clickItem(item)} textDecoration={item.selected ? 'underline' : 'none'} cursor="pointer" flexGrow="1" textAlign="left" fontSize="20" fontWeight="bold">{item.title}</Text>
            ))}
          </Flex>
        </Box>

        {/* Content */}
        <Box>
          <Flex>
            {sliderItems.filter(item => item.selected).map(selected => (
              <>
                <Box>
                  {/* <NextImage src={selected.image} layout="fill" /> */}
                </Box>

                <Box maxW="50%">
                  <Text>{selected.text}</Text>
                  <Arrowlink label={selected.linkText} url={selected.link} />
                </Box>
              </>
            ))}
          </Flex>
        </Box>
      </Box>
    </Layout>
  );
}
