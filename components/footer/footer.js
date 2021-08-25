// Footer with the boring legal stuff
import {
    Box,
    Button,
    IconButton,
    useColorMode,
    Container,
    Flex,
    Spacer,
    Stack,
    Tooltip,
    Text,
    Image
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import NextLink from "next/link";
import Style from "./footer.module.css";
import { Divided } from "@components/blocks/blocks";

export default function Posthead({ title, published }) {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Divided>
            <Container maxW={["100em", null, null, null, "90%"]} pt={[4, 12]} pb={[0, 0]}>
                <Flex as="header" align={["flex-start", "center"]} direction={["column", "row"]}>
                    <Stack direction={["column-reverse", "row"]} spacing={[2, 8]} alignItems={["baseline", "center"]} w="100%">

                        <Box pb={[0, 0]} d="flex" alignItems="center" width="100%">
                            <NextLink href="/">
                                <a>
                                    <Image src="/assets/planb-logo.png" alt="PlanB." height="100px" mr="40px" />
                                </a>
                            </NextLink>
                            <Text display={["none", "inline"]} width="300px">© 2021 PlanB.GmbH</Text>
                            <Box display={["inline-flex", "none"]}>
                                <a target="_blank" href="https://www.linkedin.com/company/planbgmbh/"><Image src="/assets/icons/linkedin-icon-296px.png" width="16px" /></a>
                                <a target="_blank" href="https://twitter.com/planbgmbh"><Image src="/assets/icons/twitter-icon-296px.png" width="16px" ml="12px" /></a>
                                <a target="_blank" href="https://www.instagram.com/planb.gmbh/"><Image src="/assets/icons/instagram-icon-296px.png" width="16px" ml="12px" /></a>
                                <a target="_blank" href="https://www.facebook.com/PlanBGmbH"><Image src="/assets/icons/facebook-icon-296px.png" width="16px" ml="12px" /></a>
                            </Box>
                        </Box>

                        <Spacer />

                        <Box display={["none", "contents"]}>
                            <a target="_blank" href="https://www.linkedin.com/company/planbgmbh/"><Image src="/assets/icons/linkedin-icon-296px.png" width="16px" /></a>
                            <a target="_blank" href="https://twitter.com/planbgmbh"><Image src="/assets/icons/twitter-icon-296px.png" width="16px" ml="12px" /></a>
                            <a target="_blank" href="https://www.instagram.com/planb.gmbh/"><Image src="/assets/icons/instagram-icon-296px.png" width="16px" ml="12px" /></a>
                            <a target="_blank" href="https://www.facebook.com/PlanBGmbH"><Image src="/assets/icons/facebook-icon-296px.png" width="16px" ml="12px" /></a>
                        </Box>

                        <NextLink href="/datenschutz" passHref>
                            <Button variant="ghost">Datenschutz</Button>
                        </NextLink>
                        <NextLink href="/imprint" passHref>
                            <Button variant="ghost">Impressum</Button>
                        </NextLink>

                    </Stack>
                </Flex>
            </Container>
        </Divided>
    );
}