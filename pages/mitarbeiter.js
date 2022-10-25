import Layout from "@components/layout";
import Header from "@components/header/header";
import { Basicpage } from "@components/content/content";
import { DevNote, SegmentHeading, Arrowlink } from "@components/atoms/atoms";
import { Flex, Box, Center, Link, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import { Wallpaper, Main } from "@components/blocks/blocks";

import { getAllCompanyMembers } from '@library/posts';

import Hero from "@components/hero/hero";
import { Slide, Fade } from "react-awesome-reveal";

import About from "@components/about/about";

import NextLink from "next/link";
import NextImage from "next/image";

export async function getStaticProps() {
    const allMembers = await getAllCompanyMembers();
    return {
        props: {
            allMembers,
        },
    };
}

export default function Home({ allMembers }) {

    const getTimeAtCompany = (employee) => {
        const currentDate = new Date();
        const employeeDate = currentDate.getFullYear() - new Date(employee.year_started, 1, 1, 0, 0, 0, 0).getFullYear();
        return `Seit ${employeeDate == 1 ? 'einem' : employeeDate} Jahr${employeeDate > 1 ? 'en' : ''}`;
    };

    return (
        <Layout>
            <Hero backgroundColor="#1D1D1D">
                <Fade triggerOnce={true} delay={100}>
                    <Main maxW="full">
                        <Box maxW="full" py={[12, 20, 32]}>
                            <Heading
                                maxW="full"
                                w="120%"
                                as="h1"
                                pb={[2, 2]}
                                fontSize={["24px", "36px", "54px", "60px"]}
                                textTransform="uppercase"
                                color="white"
                            >
                                Gesichter
                                < br />
                                der PlanB.
                            </Heading>
                            <Box w="100px" bg="white" h="6px" my="2" mb={[4, 6]}></Box>
                            <Text
                                pb={[1, 4, 6]}
                                maxW={[null, null, "80%", "100%"]}
                                color="white"
                            >
                                <strong>150+ </strong> Mitarbeiter <strong>30</strong> Auszubildende

                            </Text>

                            <SimpleGrid pos="relative" columns={[1, 2, 3, 4, 5]} spacingY={["19px"]} spacingX={[null, "10%"]} w="85vw">

                                {allMembers.map(employee => (
                                    <Box key={allMembers.indexOf(employee)} >

                                        {/* Image */}
                                        <Box bgImage={`url(${employee.image})`} bgSize="cover" bgPosition="top" w={["324px", "219px"]} h={["324px", "245px"]}></Box>
                                        {/* Name */}
                                        <Box h="51px" w={["324px", "219px"]} bgColor="#FF5100">
                                            <Text px={[4]} lineHeight="51px" fontSize={["30px", "30px", "30px", "30px"]} fontWeight="bold" w={["324px", "219px"]}>{employee.name.split(' ')[0]}</Text>
                                        </Box>
                                        {/* Jahr(e) */}
                                        <Box>
                                            <Text fontSize={["12px", "12px", "12px", "12px"]} py={[2, 4]} pl="15px" w={["324px", "219px"]}>{getTimeAtCompany(employee)} bei PlanB.</Text>
                                        </Box>
                                        {/* Quote */}
                                        <Box>
                                            <Text fontSize={["24px", "24px", "24px", "24px"]} fontWeight="100" fontStyle="italic" pb={[2, 4]} pl="15px" w={["324px", "219px"]}>"{employee.desc}"</Text>
                                        </Box>
                                    </Box>
                                ))}

                            </SimpleGrid>
                        </Box>

                    </Main>
                </Fade>

            </Hero>

            <Box pos="relative" as="section" bgImage="url(images/offices/huettlingen-baustelle.jpg)" bgRepeat="no-repeat">
                <Flex>
                    <Box p={[4, 12, 24]} pos="relative" maxW={["80%", "100%", "70%"]}>
                        <SegmentHeading title="Karriere" />
                        <Heading as="h2" pb="4" fontWeight="bold" fontSize={["36px", "44px", null, "60px"]}>
                            Wir haben noch Platz für dich!
                        </Heading>
                        <Heading
                            fontSize={["36px", "44px", null, "60px"]}
                            pb="4"
                            fontWeight="lighter"
                        >
                            Egal ob hier, im Neubau oder in deinem persönlichen Homeoffice.
                        </Heading>

                        <Box pb="200">
                            <Arrowlink label="Werde Teil unseres Teams!" url="" />
                        </Box>

                    </Box>
                </Flex>
            </Box>
            <About />
        </Layout>
    );
}
