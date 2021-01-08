// Header used on every page, incldues the menu
import NextLink from "next/link"
import React from "react" 
import Styles from "./header.module.css"

import {
  Box,
  Flex,
  Spacer,
  Container,
  Button,
  useColorMode
} from "@chakra-ui/react";

export default function Header() {
    const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Container maxW="54em">
        <Flex as="header" align="center">
        <Box>
            <NextLink href="/">
            <a>
                <img className={Styles.logo} src="/assets/planb-logo.png" alt="PlanB." />
            </a>
            </NextLink>
        </Box>
        <Spacer/>
        <Box>
                <Button onClick={toggleColorMode}>
                Toggle {colorMode === "light" ? "Dark" : "Light"}
            </Button>
            MENÜ
        </Box>
        </Flex>
    </Container>
  );
}
