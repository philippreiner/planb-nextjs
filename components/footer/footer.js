// Footer with the boring legal stuff
import {
    Box,
    Button,
    useColorMode,
    Container,
    Flex,
    Spacer,
    Stack,
    Image
} from "@chakra-ui/react";
import NextLink from "next/link";
import Style from "./footer.module.css";
import { Divided } from "@components/blocks/blocks";

export default function Posthead({ title, published }) {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Divided>
            <Container maxW={["100em", null, null, null, "90%"]} pt={[4, 12]} pb={[0, 0]}>
                <Flex as="footer" align={["flex-start",null,"center"]} direction={["column-reverse", null, "row"]}>
                    <Flex w="100%" grow={null,null,1} direction={["row"]} align={["center"]}>
                        <NextLink passHref href="/">
                            <a>
                                <Image src="/assets/planb-logo.png" alt="PlanB." height="100px" mr="40px" />
                            </a>
                        </NextLink>
                        <Spacer/>
                        <Stack direction={["row"]} mt={[null,null,"-8px"]} spacing="16px">
                            <a target="_blank" href="https://www.linkedin.com/company/planbgmbh/"><Image src="/assets/icons/linkedin-icon-296px.png" width="16px"/></a>
                            <a target="_blank" href="https://twitter.com/planbgmbh"><Image src="/assets/icons/twitter-icon-296px.png" width="16px"  /></a>
                            <a target="_blank" href="https://www.instagram.com/planb.gmbh/"><Image src="/assets/icons/instagram-icon-296px.png" width="16px" /></a>
                            <a target="_blank" href="https://www.facebook.com/PlanBGmbH"><Image src="/assets/icons/facebook-icon-296px.png" width="16px"/></a>
                        </Stack>
                    </Flex>

                    <Stack ml={[null,null,"16px"]} direction={["row-reverse","row"]} mb={2}spacing="16px">
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