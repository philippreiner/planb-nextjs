// Generic Blocks to be re-used in layouts
import { Box, Text, Heading, Grid, Flex } from "@chakra-ui/react";
import { Main } from "@components/blocks/blocks";
import { SegmentHeading, Arrowlink } from "@components/atoms/atoms";
import Styles from "./homepage.module.css";


// Career Reference
export default function Career({ children }) {
    return (
        <Box pos="relative" as="section" py={[4, 12, 24]} bgImage="url('/images/offices/huettlingen-baustelle.jpg')" className={Styles.career}>
            <Box as="div" className={Styles.overlay}>&nbsp;</Box>
            <Main maxW="full">
                <SegmentHeading title="Karriere" />
                <Box py={[4, 12, 24]} pos="relative">
                    <Heading
                        fontSize={["36px", "44px", null, "60px"]}
                        pb="4"
                        fontWeight="normal"
                    >
                        <strong>Wir haben noch Platz für dich!</strong><br />
                        Egal ob hier, im Neubau oder in deinem persönlichen Homeoffice.
                    </Heading>
                    <Arrowlink url="/karriere" label="Werde Teil unseres Teams" />
                </Box>
            </Main>

        </Box>
    );
}
