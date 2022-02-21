import Layout from "@components/layout"
import Content from "@components/content/content"
import Posthead from "@components/posthead/posthead"
import Postmeta from "@components/postmeta/postmeta"
import About from "@components/about/about"
import Hero from '@components/hero/hero';
import { Gradient } from "@components/blocks/blocks"
import { getAllArticleIds, getArticleData } from "@library/posts"
import NextHead from "next/head"
import NextImage from 'next/image';
import ReactMarkdown from "react-markdown"
import { markdownRenderers } from '@library/renders';

import { Container, Center, Link } from "@chakra-ui/react";
import Header from "@components/header/header";
import { Basicpage } from "@components/content/content";
import { DevNote, SegmentHeading } from "@components/atoms/atoms";
import { Flex, Box, SimpleGrid } from "@chakra-ui/react";
import { Wallpaper, Main } from "@components/blocks/blocks";
import { Fade } from 'react-awesome-reveal'
import { Arrowlink } from "@components/atoms/atoms";
import HeadlineCollection from '@components/headlinecollection/headlinecollection';

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


export async function getStaticProps({ params }) {
    const postData = await getArticleData(params.id);

    return {
        props: {
            postData
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllArticleIds();
    return {
        paths,
        fallback: false,
    };
}

export default function Post({ postData }) {

    console.log(postData);

    return (
        <Layout>
            <Hero background={`url(${postData.hero_image})`}>
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
                            {postData.title}
                        </Heading>
                        <Box w="100px" bg="white" h="6px" my="2" mb={[4, 6]}></Box>
                        <Text
                            pb={[8]}
                            maxW={[null, null, "80%", "55%"]}
                            color="white"
                        >
                            {postData.subline}
                        </Text>
                        {/* <Arrowlink label="Zu den Projekten" url="#products" /> */}
                    </Box>
                </Main>
            </Hero>

            {/* Double Text Block */}
            <Box pos="relative" as="section" p={[4, 12, 24]} backgroundSize="cover">
                <Box pos="relative" maxW="full" pb="100">
                    <SegmentHeading title="Modern Work &amp; Managed Services" />
                    <Flex maxW={["full", "full", "full", "100%"]} flexDir={["column", "column", "column", "row"]}>
                        <Text pr={[4, 12, 24]} maxW={["100%", "100%", "full", "50%"]} width={["full"]}>
                            Die moderne IT-Landschaft wird ständig vielfältiger und Budgets kleiner.
                            PlanB. ist als zuverlässiger Microsoft-Partner Ihre Lösung für die Migration in die Cloud und die Zukunft der digitalen Zusammenarbeit.
                            <br /><br />
                            Wir lösen komplexe Themen auf und planen skalierbare, moderne IT-Infrastruktur für jedes Endgerät.
                            Die Migration zu Microsoft 365 (Office in der Cloud) ist mit uns kein Problem.
                            Und durch die PowerPlattform und viele Jahre Erfahrung können wir Prozesse mit Microsoft-Standards digitalisieren und sparen Kosten für externe Software.
                        </Text>
                        <Text pr={[4, 12, 24]} maxW={["100%", "100%", "full", "50%"]} width={["full"]}>
                            Die moderne IT-Landschaft wird ständig vielfältiger und Budgets kleiner.
                            PlanB. ist als zuverlässiger Microsoft-Partner Ihre Lösung für die Migration in die Cloud und die Zukunft der digitalen Zusammenarbeit.
                            <br /><br />
                            Wir lösen komplexe Themen auf und planen skalierbare, moderne IT-Infrastruktur für jedes Endgerät.
                            Die Migration zu Microsoft 365 (Office in der Cloud) ist mit uns kein Problem.
                            Und durch die PowerPlattform und viele Jahre Erfahrung können wir Prozesse mit Microsoft-Standards digitalisieren und sparen Kosten für externe Software.
                        </Text>
                    </Flex>
                </Box>
            </Box>

            <Box pos="relative" as="section" p={[4, 12, 24]} backgroundSize="cover">
                <Box pos="relative" maxW="full" pb="100">
                    <SegmentHeading title="Modern Work &amp; Managed Services" />
                    <Flex maxW={["full", "full", "full", "100%"]} flexDir={["column", "column", "column", "row"]}>
                        <Text pr={[4, 12, 24]} maxW={["100%", "100%", "full", "100%"]} width={["full"]}>
                            Die moderne IT-Landschaft wird ständig vielfältiger und Budgets kleiner.
                            PlanB. ist als zuverlässiger Microsoft-Partner Ihre Lösung für die Migration in die Cloud und die Zukunft der digitalen Zusammenarbeit.
                            <br /><br />
                            Wir lösen komplexe Themen auf und planen skalierbare, moderne IT-Infrastruktur für jedes Endgerät.
                            Die Migration zu Microsoft 365 (Office in der Cloud) ist mit uns kein Problem.
                            Und durch die PowerPlattform und viele Jahre Erfahrung können wir Prozesse mit Microsoft-Standards digitalisieren und sparen Kosten für externe Software.
                        </Text>
                    </Flex>
                </Box>
            </Box>

            <Box pos="relative" as="section" p={[4, 12, 24]} backgroundSize="cover">
                <Box pos="relative" maxW="full" pb="100">
                    <SegmentHeading title="Modern Work &amp; Managed Services" />
                    <Flex maxW={["full", "full", "full", "100%"]} flexDir={["column", "column", "column", "row"]}>
                        <Text pr={[4, 12, 24]} maxW={["100%", "100%", "full", "50%"]} width={["full"]}>
                            Die moderne IT-Landschaft wird ständig vielfältiger und Budgets kleiner.
                            PlanB. ist als zuverlässiger Microsoft-Partner Ihre Lösung für die Migration in die Cloud und die Zukunft der digitalen Zusammenarbeit.
                            <br /><br />
                            Wir lösen komplexe Themen auf und planen skalierbare, moderne IT-Infrastruktur für jedes Endgerät.
                            Die Migration zu Microsoft 365 (Office in der Cloud) ist mit uns kein Problem.
                            Und durch die PowerPlattform und viele Jahre Erfahrung können wir Prozesse mit Microsoft-Standards digitalisieren und sparen Kosten für externe Software.
                        </Text>
                        <Box width="100%" height="450px" background="url(/images/dpf_hero.png)" backgroundSize="cover">
                            &nbsp;
                        </Box>
                        {/* <NextImage src="/images/dpf_hero.png" width="300px" height="300px" /> */}
                    </Flex>
                </Box>
            </Box>

            <Box pos="relative" as="section" p={[4, 12, 24]} backgroundSize="cover">
                <Box pos="relative" maxW="full" pb="100">
                    <SegmentHeading title="Modern Work &amp; Managed Services" />
                    <Flex maxW={["full", "full", "full", "100%"]} flexDir={["column", "column", "column", "row"]}>
                        <Box width="100%" height="450px" background="url(/images/dpf_hero.png)" backgroundSize="cover">
                            &nbsp;
                        </Box>
                        <Text pl={[4, 12, 24]} maxW={["100%", "100%", "full", "50%"]} width={["full"]}>
                            Die moderne IT-Landschaft wird ständig vielfältiger und Budgets kleiner.
                            PlanB. ist als zuverlässiger Microsoft-Partner Ihre Lösung für die Migration in die Cloud und die Zukunft der digitalen Zusammenarbeit.
                            <br /><br />
                            Wir lösen komplexe Themen auf und planen skalierbare, moderne IT-Infrastruktur für jedes Endgerät.
                            Die Migration zu Microsoft 365 (Office in der Cloud) ist mit uns kein Problem.
                            Und durch die PowerPlattform und viele Jahre Erfahrung können wir Prozesse mit Microsoft-Standards digitalisieren und sparen Kosten für externe Software.
                        </Text>
                        {/* <NextImage src="/images/dpf_hero.png" width="300px" height="300px" /> */}
                    </Flex>
                </Box>
            </Box>
        </Layout>
    );
}