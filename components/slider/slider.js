import Layout from "@components/layout";

import { Main, Fullheight, Wallpaper } from "@components/blocks/blocks";
import { SegmentHeading, Arrowlink } from "@components/atoms/atoms";
import HeadlineCollection from '@components/headlinecollection/headlinecollection';
import Hero from '@components/hero/hero';
import { Slide, Fade } from "react-awesome-reveal";


import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Button,
  DarkMode,
  Center,
  Flex,
  Spacer,
  HStack,
  List, ListItem, ListIcon, OrderedList, UnorderedList, propNames
} from "@chakra-ui/react";

import NextImage from 'next/image';
import React, { setState, useState } from "react";

export default function Slider({sliderItems}) {


  const [index, setIndex] = useState(0);

  function clickItem(item) {
    const index = sliderItems.findIndex(i => i.id === item.id);

    if(index >= 0) {
      setIndex(index);
    }

  }

  return (
      <Box w="full" maxW="full" pos="relative" as="section">
        <Box bgColor="#0097CE" p={[4, 12]}>
          <SegmentHeading title="Projekte" />
          {/* Slider Header Desktop */}
          <Flex display={["none", "none", "flex", "flex"]} maxW="full" w="full" py={[4, 12]} flexDir={["column", "row"]}>
            {sliderItems.map((item, i) => (
              <Text onClick={() => clickItem(item)} textAlign="left" fontSize="20px" cursor="pointer" flexGrow="1" textDecor={index === i ? 'underline' : 'none'} fontWeight={index === i ? 'bold' : 'normal'}>{item.title}</Text>
            ))}
          </Flex>

          {/* Slider Header Mobile */}
          <Flex pos="relative" display={["flex", "flex", "none", "none"]} maxW="full" w="full" py={[8, 12]} flexDir={["column", "row"]}>
            <Text textAlign="left" maxW="60%" fontSize="20px" cursor="pointer" flexGrow="1" textDecor="underline" fontWeight="bold">{sliderItems[index].title}</Text>
            <Flex pos="absolute" bottom="0px" right="0px">
              {sliderItems.map((item , i) => (
                <Box pos="relative" p="4px">
                  <Box onClick={() => clickItem(item)} borderRadius="50%" w="12px" h="12px" border="1px solid white" backgroundColor={index === i ? 'white' : 'none'}></Box>
                </Box>
              ))}
            </Flex>
          </Flex>
        </Box>

        <Box maxW="100%" p={[4, 12, 24]}>
          <Flex w="100%" flexDir={["column", "column", "row"]}>
            <Box w={["100%"]} p={[4, 8, 12]}>
              <NextImage src={sliderItems[index].image} layout="responsive" p={[4, 8, 12]} width="auto" height="auto" />
            </Box>

            <Box p={[4, 12, 24]}>
              <Text fontSize={[20, 24]} pb={[4, 8, 12]} fontWeight="bold">{sliderItems[index].headline}</Text>
              <Text pb={[4, 8, 12]}>{sliderItems[index].text}</Text>
              <Arrowlink label="Mehr Informationen" url={sliderItems[index].link} />
            </Box>
          </Flex>
        </Box>
      </Box>
  );
}