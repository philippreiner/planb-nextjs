import Layout from "@components/layout";
import Header from "@components/header/header";
import { Basicpage } from "@components/content/content";
import { DevNote, SegmentHeading, Arrowlink } from "@components/atoms/atoms";
import { Flex, Box, Center, Link, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import { Wallpaper, Main } from "@components/blocks/blocks";

import { getAllCompanyMembers } from '@library/posts';

import Hero from "@components/hero/hero";
import { Slide, Fade } from "react-awesome-reveal";


import NextLink from "next/link";
import NextImage from "next/image";

// const employees = [
//     {
//         firstName: 'Jens',
//         lastName: 'Reiner',
//         picturePath: "url(images/Mitarbeiter/beispielimage-mitarbeiter.png)"
//     },
//     {
//         firstName: 'Cedric',
//         lastName: 'Döz',
//         picturePath: "url(images/Mitarbeiter/beispielimage-mitarbeiter.png)"
//     },
//     {
//         firstName: 'Jens',
//         lastName: 'Reiner',
//         picturePath: "url(images/Mitarbeiter/beispielimage-mitarbeiter.png)"
//     },
//     {
//         firstName: 'Cedric',
//         lastName: 'Döz',
//         picturePath: "url(images/Mitarbeiter/beispielimage-mitarbeiter.png)"
//     },
//     {
//         firstName: 'Jens',
//         lastName: 'Reiner',
//         picturePath: "url(images/Mitarbeiter/beispielimage-mitarbeiter.png)"
//     },
//     {
//         firstName: 'Cedric',
//         lastName: 'Döz',
//         picturePath: "url(images/Mitarbeiter/beispielimage-mitarbeiter.png)"
//     },
//     {
//         firstName: 'Jens',
//         lastName: 'Reiner',
//         picturePath: "url(images/Mitarbeiter/beispielimage-mitarbeiter.png)"
//     },
//     {
//         firstName: 'Cedric',
//         lastName: 'Döz',
//         picturePath: "url(images/Mitarbeiter/beispielimage-mitarbeiter.png)"
//     },
//     {
//         firstName: 'Jens',
//         lastName: 'Reiner',
//         picturePath: "url(images/Mitarbeiter/beispielimage-mitarbeiter.png)"
//     },
//     {
//         firstName: 'Cedric',
//         lastName: 'Döz',
//         picturePath: "url(images/Mitarbeiter/beispielimage-mitarbeiter.png)"
//     },
    
// ]

const employees = []; //async() => await getAllCompanyMembers();

export async function getStaticProps() {
    const allMembers = await getAllCompanyMembers();
    return {
      props: {
        allMembers,
      },
    };
  }


const pictureBoxes = ({allMembers}) => allMembers.map((employee) => {
    // return (<Box bgImage={employee.picturePath} bgSize="cover" w="219px" h="296px">
    //     <Box bg="tomato" pos="relative" bottom="-247" h="51px" w="100%">
    //         <text py="auto">{employee.firstName}</text>
    //     </Box>
    //     <Box pos="relative" w="100%" h="51px">
    //         <Text>This is a sample text for showing the difference between some nice work and other qoutes.</Text>
    //     </Box>
    // </Box>);

    return (
        <Box>
            {/*  */}
            <Box bgImage={employee.picturePath} bgSize="cover" w="100%" h="296px"></Box>
            {/* Name */}
            <Box h="51px" bgColor="tomato">
                <Text px={[2, 4, 8]} lineHeight="51px" fontSize={["30px", "30px", "30px", "30px"]} fontWeight="bold">{employee.firstName}</Text>
            </Box>
            {/* Jahr(e) */}
            <Box>
                <Text fontSize={["12px", "12px", "12px", "12px"]} py={[2, 4]}>1. Jahr bei PlanB. / Solution Manager</Text>
            </Box>
            {/* Quote */}
            <Box>
                <Text fontSize={["24px","24px","24px","24px"]} fontStyle="italic" pb={[2, 4]}>"This is sample quote for showcasing some text features or other stuff."</Text>
            </Box>
        </Box>
    );
})

export default function Home({allMembers}) {
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
                                fontSize={["24px", "36px", "54px", "72px"]}
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
                                <strong>130</strong> Mitarbeiter <strong>30</strong> Auszubildende

                            </Text>

                            <SimpleGrid pos="relative" columns={[1, 3, 5]} spacingX={["35px", "80px"]} spacingY={["19px"]}>

                                {allMembers.map(employee => (
                                    <Box key={allMembers.indexOf(employee)}>
                                        {/* Image */}
                                        <Box bgImage={`url(${employee.image})`} bgSize="cover" bgPosition="top" w="100%" h="296px"></Box>
                                        {/* Name */}
                                        <Box h="51px" bgColor="#FF5100">
                                            <Text px={[4]} lineHeight="51px" fontSize={["30px", "30px", "30px", "30px"]} fontWeight="bold">{employee.name.split(' ')[0]}</Text>
                                        </Box>
                                        {/* Jahr(e) */}
                                        <Box>
                                            <Text fontSize={["12px", "12px", "12px", "12px"]} py={[2, 4]} px="15px" >{Date.now() - employee.year_started} bei PlanB.</Text>
                                        </Box>
                                        {/* Quote */}
                                        <Box>
                                            <Text fontSize={["24px","24px","24px","24px"]} fontWeight="100" fontStyle="italic" pb={[2, 4]}  px="15px">"{employee.desc}"</Text>
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
                        <Heading as="h2" pb="4" fontWeight="bold" fontSize={["36px", "44px", null, "72px"]}>
                            Wir haben noch Platz für dich!
                        </Heading>
                        <Heading
                            fontSize={["36px", "44px", null, "72px"]}
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
            
        </Layout>
    );
}
