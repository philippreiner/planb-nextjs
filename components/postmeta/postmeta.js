// Shows Author and recommended articles below post
import { Box, Link, Spacer, Text, VStack, Flex, useColorModeValue } from "@chakra-ui/react"
import Style from "./postmeta.module.css"
import NextImage from "next/image"
import NextLink from "next/link"

export default function Postmeta({ data }) {
    const bordercolor = useColorModeValue("brand.50", "gray.700");
    const txtcolor = useColorModeValue("gray.700", "gray.300")

    return (
        <Box borderColor={bordercolor} borderWidth="1px">
            <Box padding={[3, 8]} borderBottomWidth="1px" borderColor={bordercolor}>
                <Flex direction={["column-reverse", "row"]} align={["flex-start", "center"]}>
                    <Box pr={[0, 8]}>
                        <Text mb={[1, 1]} color={txtcolor} fontSize="sm" className={Style.hidden}>Von</Text>
                        <Text mb={[1, 1]}><strong>{data.name}</strong> {data.desc}</Text>
                        <Link href={data.contact} target="_blank" color="primary">Kontakt</Link>
                    </Box>
                    <Box mb={[1, 0]} className={Style.avatar}>
                        <NextImage
                            alt="Author Name"
                            src={data.image}
                            layout="fixed"
                            width="96px"
                            height="96px"
                        />
                    </Box>
                </Flex>
            </Box>
            <Box padding={[3, 8]}>
                <Text mb={[1, 1]} color={txtcolor} fontSize="sm">Ähnliche Artikel</Text>
                <VStack spacing={[1, 2]} align="left">
                    <Flex>
                        <NextLink href="/" passHref>
                            <Link color="primary">Titel des anderen Beitrags</Link>
                        </NextLink>
                        <Spacer className={Style.hidden} />
                        <Text className={Style.hidden} mb={[1, 1]} color={txtcolor} fontSize="sm">2020-09</Text>
                    </Flex>
                    <Flex>
                        <NextLink href="/" passHref>
                            <Link color="primary">Titel des anderen Beitrags</Link>
                        </NextLink>
                        <Spacer className={Style.hidden} />
                        <Text className={Style.hidden} mb={[1, 1]} color={txtcolor} fontSize="sm">2020-09</Text>
                    </Flex>
                    <Flex>
                        <NextLink href="/" passHref>
                            <Link color="primary">Titel des anderen Beitrags</Link>
                        </NextLink>
                        <Spacer className={Style.hidden} />
                        <Text className={Style.hidden} mb={[1, 1]} color={txtcolor} fontSize="sm">2020-09</Text>
                    </Flex>
                </VStack>
            </Box>
        </Box>
    );
}
