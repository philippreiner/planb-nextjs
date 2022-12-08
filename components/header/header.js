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
    HStack,
    useColorModeValue
} from "@chakra-ui/react";

import { HamburgerIcon, EmailIcon } from '@chakra-ui/icons'

export default function Header() {
    const menuColor = useColorModeValue("black", "white");

    return (
        <Container className={Styles.header} maxW={["100em", null, null, null, "90%"]}>
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
                    <NextLink href="mailto:info@plan-b-gmbh.com">
                        <Button className={Styles.desktop} variant="ghost">
                            Kontakt
                        </Button>
                    </NextLink>
                    <NextLink href="/karriere/">
                        <Button className={Styles.desktop} variant="ghost">
                            Karriere
                        </Button>
                    </NextLink>
                    <Menu isLazy={true} autoSelect={false}>
                        <MenuButton >
                            <Button rightIcon={<HamburgerIcon w={6} h={6} />} variant="ghost">
                                <span className={Styles.desktop}>Menü</span>
                            </Button>
                        </MenuButton>
                        <MenuList color={menuColor} borderWidth="0">
                            <NextLink href="/dpf/">
                                <MenuItem padding={[3, 4]}>
                                    Digital Product Factory
                                </MenuItem>
                            </NextLink>
                            <NextLink href="/modern-work/">
                                <MenuItem padding={[3, 4]}>
                                    Modern Work
                                </MenuItem>
                            </NextLink>
                            <NextLink href="/cyber-security/">
                                <MenuItem padding={[3, 4]}>
                                    Cyber Security
                                </MenuItem>
                            </NextLink>
                            <NextLink href="/about/">
                                <MenuItem padding={[3, 4]}>
                                    Über PlanB.
                                </MenuItem>
                            </NextLink>
                            <NextLink href="/karriere/">
                                <MenuItem padding={[3, 4]}>
                                    Karriere
                                </MenuItem>
                            </NextLink>
                            <NextLink href="/partners/">
                                <MenuItem padding={[3, 4]}>
                                    Partners
                                </MenuItem>
                            </NextLink>
                        </MenuList>
                    </Menu>

                </HStack>
            </Flex>
        </Container>
    );
}
