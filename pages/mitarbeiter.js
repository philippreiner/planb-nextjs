import Layout from "@components/layout";
import Header from "@components/header/header";
import { Basicpage } from "@components/content/content";
import { DevNote, SegmentHeading, Arrowlink } from "@components/atoms/atoms";
import { Flex, Box, Center, Link, Heading, Text } from "@chakra-ui/react";
import { Wallpaper, Main } from "@components/blocks/blocks";

import Hero from "@components/hero/hero";
import { Slide, Fade } from "react-awesome-reveal";


import NextLink from "next/link";
import NextImage from "next/image";

export default function Home() {
    return (
        <Layout>
            <Hero background="url(images/background-solutions.jpg)">
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
                        Agiles arbeiten &amp; besonderheiten der Plan.B
                    </Heading>
                    <Box w="100px" bg="white" h="6px" my="2" mb={[4, 6]}></Box>
                    <Text
                        pb={[2, 4, 6]}
                        maxW={[null, null, "80%", "45%"]}
                        color="white"
                    >
                        Wir sind 130 kluge Köpfe für die digitale Transformation und Zukunft der Zusammenarbeit.
                        Jeden Tag arbeiten wir an den digitalen Produkten, innovativen Geschäftsmodellen, 
                        skalierbaren Cloud-Architekturen und der Zufriedenheit von hunderttausenden Menschen bei Ihrer Arbeit.
                    </Text>
                    <Arrowlink label="Die Menschen hinter PlanB." url="/about" />
                    </Box>
                </Main>
                </Fade>
            </Hero>
        </Layout>
    );
}
