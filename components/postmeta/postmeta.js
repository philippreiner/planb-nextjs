// Shows Author and recommended articles below post
import { Box,Link, Spacer, Text, VStack, Flex, useColorModeValue, useBreakpointValue } from "@chakra-ui/react"
import Style from "./postmeta.module.css"
import NextImage from "next/image"
import NextLink from "next/link"

export default function Postmeta({ author, recommended }) {
  const bordercolor = useColorModeValue("brand.50", "gray.700");
  const portraitsize = useBreakpointValue({ base: "80", md: "140" })

  return (
    <Box borderColor={bordercolor} borderWidth="1px">
      <Box padding={[3,8]} borderBottomWidth="1px" borderColor={bordercolor}>
        <Flex direction={["column-reverse","row"]}>
            <Box pr={[0,8]}>
                <Text mb={[1,1]} color="gray.500" fontSize="sm">Von</Text>
                <Text mb={[1,1]}><strong>Aaron Czichon</strong> ist Solution Expert mit Fokus auf performante Webanwendungen. Nach einigen Jahren als CTO und Autor macht er nun bei PlanB #epicshit</Text>
                <Link href="#kontakturltodo" target="_blank" color="primary">Kontakt</Link>
            </Box>
            <Box pt={[1,0]} mb={[1,0]} className={Style.avatar}>
                <NextImage
                    alt="Author Name"
                    src="/images/portrait.jpg"
                    layout="fixed"
                    width="96px"
                    height="96px"
                />
            </Box>
        </Flex>
      </Box>
      <Box padding={[3,8]}>
        <Text mb={[1,1]} color="gray.500" fontSize="sm">Ähnliche Artikel</Text>
        <VStack spacing={[1,2]} align="left">
            <Flex>
                <NextLink href="/" passHref>
                    <Link color="primary">Titel des anderen Beitrags</Link>
                </NextLink>
                <Spacer className={Style.hidden}/>
                <Text className={Style.hidden} mb={[1,1]} color="gray.500" fontSize="sm">2020-09</Text>
            </Flex>
            <Flex>
                <NextLink href="/" passHref>
                    <Link color="primary">Titel des anderen Beitrags</Link>
                </NextLink>
                <Spacer className={Style.hidden}/>
                <Text className={Style.hidden} mb={[1,1]} color="gray.500" fontSize="sm">2020-09</Text>
            </Flex>
            <Flex>
                <NextLink href="/" passHref>
                    <Link color="primary">Titel des anderen Beitrags</Link>
                </NextLink>
                <Spacer className={Style.hidden}/>
                <Text className={Style.hidden} mb={[1,1]} color="gray.500" fontSize="sm">2020-09</Text>
            </Flex>
        </VStack>
      </Box>
    </Box>
  );
}
