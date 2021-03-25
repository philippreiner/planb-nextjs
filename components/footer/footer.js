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
  Tooltip
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import NextLink from "next/link";
import Style from "./footer.module.css";
import { Divided } from "@components/blocks/blocks";

export default function Posthead({ title, published }) {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Divided>
      <Container maxW="90%" pt={[4, 12]} pb={[4, 0]}>
        <Flex as="header" align={["flex-start", "center"]} direction={["column", "row"]}>
          <Box pb={[4, 0]}>
            <NextLink href="/">
              <a>
                <img
                  className={Style.logo}
                  src="/assets/planb-logo.png"
                  alt="PlanB."
                />
              </a>
            </NextLink>
          </Box>
          <Spacer />
          <Stack direction={["column", "row"]} spacing={[2, 8]}>
            <Tooltip label={colorMode === "light" ? "Licht aus" : "Licht an"}>
              <IconButton aria-label="Farbmodus" icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />} variant="ghost" onClick={toggleColorMode} />
            </Tooltip>

            <NextLink href="/agb" passHref>
              <Button variant="ghost" >AGB</Button>
            </NextLink>
            <NextLink href="/imprint" passHref>

              <Button variant="ghost">Impressum & Datenschutz</Button>
            </NextLink>
          </Stack>
        </Flex>
      </Container>
    </Divided>
  );
}
