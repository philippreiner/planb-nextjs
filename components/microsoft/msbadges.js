import Layout from "@components/layout";

import { Main } from "@components/blocks/blocks";
import { SegmentHeading, Arrowlink } from "@components/atoms/atoms";

import Hero from '@components/hero/hero';


import { Fade } from "react-awesome-reveal";

import About from "@components/about/about";


import {
    Box,
    Heading,
    Text,
    Flex,
    Spacer,
    ListItem, UnorderedList
} from "@chakra-ui/react";

import NextImage from 'next/image';

export default function MSBadges({background}) {
    return (
    <Box maxW="full" as="section" p={[4, 12, 24]} backgroundColor={background ?? undefined} pos="relative">
        <Flex flexDir={["column", "column", "column", "row", "row"]}>
            <NextImage src="/images/microsoft/silver.png" width="600px" height="280px" objectFit="contain" />
            <Spacer />
            <NextImage src="/images/microsoft/gold_a.png" width="600px" height="280px" objectFit="contain" />
            <Spacer />
            <NextImage src="/images/microsoft/gold_d.png" width="600px" height="280px" objectFit="contain" />
        </Flex>
    </Box>
);
}