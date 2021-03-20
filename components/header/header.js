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
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  HStack
} from "@chakra-ui/react";

import { HamburgerIcon, EmailIcon } from '@chakra-ui/icons'

export default function Header() {

  return (
    <Container maxW="80em">
      <Flex as="header" align="center">
        <Box>
          <NextLink href="/">
            <a>
              <img className={Styles.logo} src="/assets/planb-logo.png" alt="PlanB." />
            </a>
          </NextLink>
        </Box>
        <Spacer />
        <HStack spacing="4">
        <NextLink  href="/contact/">
            <Button className={Styles.desktop} variant="ghost">
              Kontakt
            </Button>
          </NextLink>
          <Menu isLazy={true} autoSelect={false}>
            <MenuButton >
            <Button rightIcon={<HamburgerIcon w={6} h={6} />} variant="ghost">
                Menü
            </Button>
            </MenuButton>
            <MenuList borderWidth="0">
              <NextLink href="/blog/">
                <MenuItem padding={[2,4]}>
                  Lösungen
                </MenuItem>
              </NextLink>
              <NextLink href="/blog/">
                <MenuItem padding={[2,4]}>
                  Warum PlanB.?
                </MenuItem>
              </NextLink>
              <NextLink href="/blog/">
                <MenuItem padding={[2,4]}>
                  Referenzen
                </MenuItem>
              </NextLink>
              <NextLink href="/blog/">
                <MenuItem padding={[2,4]}>
                  Karriere
                </MenuItem>
              </NextLink>
              <NextLink href="/blog/">
                <MenuItem padding={[2,4]}>
                  Blog
                </MenuItem>
              </NextLink>
              <NextLink href="/blog/">
                <MenuItem padding={[2,4]}>
                  Kontakt
                </MenuItem>
              </NextLink>
            </MenuList>
          </Menu>
        
        </HStack>
      </Flex>
    </Container>
  );
}
