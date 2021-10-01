// Generic Blocks to be re-used in layouts
import { Box, Text, Heading, Grid, Flex } from "@chakra-ui/react";
import { Main } from "@components/blocks/blocks";
import { SegmentHeading, Arrowlink } from "@components/atoms/atoms";
import Styles from "./homepage.module.css";

// Hero Wrap
export default function Solutions({ children, background }) {
    return (
        <Box as="section" py={[4, 12, 24]} bgImage="url('/images/background-solutions.jpg')" className={Styles.solutions}>
            <Main maxW="full">
                <SegmentHeading title="Unsere Kompetenzbereiche" />
                <Grid templateRows="" gap="5" templateColumns={["1fr", null, "1fr 1fr"]}>
                    <Box position="relative" w="100%" h="100%" p={[4, null]} pb={[4, 4, "100%"]} bg="gray.900">
                        <Flex className={Styles.full} p={[4, 4, 6, 12]} alignItems="center">
                            <Box>
                                <Heading
                                    textTransform="uppercase"
                                    fontWeight="fat"
                                    fontFamily="fat"
                                    fontSize={["42px", "50px", null, "60px"]}
                                    bgGradient="linear(to-r, primary,white)"
                                    bgClip="text"
                                    display="inline-block"
                                    pb="4"
                                >
                                    Digital<br />
                                    Product<br />
                                    Factory<br />
                                </Heading>
                                <Text pb={[4, 8]} color="gray.100">
                                    Unsere komplette Lösung für erfolgreiche Produkte, neuste Technologien und digitale Geschäftsmodelle.
                                </Text>
                                <Arrowlink url="/dpf" label="Zu unseren digitalen Lösungen" color="#FF5100" />
                            </Box>
                        </Flex>
                    </Box>
                    <Box position="relative" w="100%" h="100%" p={[4, null]} pb={[4, 4, "100%"]} bg="gray.900">
                        <Flex className={Styles.full} p={[4, 4, 6, 12]} alignItems="center">
                            <Box>
                                <Heading
                                    textTransform="uppercase"
                                    fontWeight="fat"
                                    fontFamily="fat"
                                    fontSize={["42px", "50px", null, "60px"]}
                                    bgGradient="linear(to-r, secondary,white)"
                                    bgClip="text"
                                    display="inline-block"
                                    pb="4"
                                >
                                    Modern<br />
                                    Work &<br />
                                    Services<br />
                                </Heading>
                                <Text pb={[4, 8]} color="gray.100">
                                    Erfahrene ExpertInnen für die Transformation der Zusammenarbeit, Microsoft und Modern IT.                    </Text>
                                <Arrowlink url="/modern-work" label="Serviceleistungen entdecken" color="#0097CE" />
                            </Box>
                        </Flex>
                    </Box>
                </Grid>
            </Main>
        </Box>
    );
}
