import Layout from "@components/layout";

import { Main } from "@components/blocks/blocks";
import { Arrowlink } from "@components/atoms/atoms";

import Solutions from "@components/homepage/solutions";
import About from "@components/homepage/about";
import Culture from "@components/homepage/culture";
import Career from "@components/homepage/career";
import Hero from '@components/hero/hero';


import { getSortedPostsData } from "@library/posts";



import {
    Box,
    Heading,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({ allPostsData }) {
    const btnColor = useColorModeValue("primary", "primary");

    return (
        <Layout title="PlanB. - Experten für Modern Work und Software">
            <Hero background="url(images/offices/PlanB_Office_2.jpg)" backgroundColor="blackAlpha.700" backgroundBlendMode="darken">
                <Main maxW="full">
                    <Box pt={[12, 20, 32]} pb={[12, 20, 32]}>
                        <Heading
                            as="h1"
                            pb={[2, 4]}
                            fontSize={["24px", "36px", "54px", "60px"]}
                            textTransform="uppercase"
                            color="white"
                        >
                            Changing the way how people and businesses communicate, work and collaborate.
                        </Heading>
                        <Box w="100px" bg="white" h="6px" my="2" mb={[4, 6]}>

                        </Box>
                        <Text
                            pb={[2, 4, 6]}
                            maxW={[null, null, "80%", "45%"]}
                            color="white"
                        >
                            PlanB. ist Ihr Partner für die digitale Transformation und Zukunft der Zusammenarbeit.
                            Jeden Tag arbeiten wir an digitalen Produkten, innovativen Geschäftsmodellen, skalierbaren Cloud-Architekturen und der Zufriedenheit von hunderttausenden Menschen bei Ihrer Arbeit.

                        </Text>
                        <Arrowlink label="Warum Kunden PlanB. empfehlen" url="/about" />
                    </Box>
                </Main>
            </Hero>

            <Solutions />
            <About />
            <Culture />
            <Career />
        </Layout>
    );
}
