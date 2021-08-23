
import { SegmentHeading, Arrowlink } from "@components/atoms/atoms";


import {
  Box,
  Text,
  Flex} from "@chakra-ui/react";

import NextImage from 'next/image';
import React, { useState } from "react";

export default function Slider({sliderItems, backgroundColor, label}) {


  const [index, setIndex] = useState(0);

  function clickItem(item) {
    const index = sliderItems.findIndex(i => i.id === item.id);

    if(index >= 0) {
      setIndex(index);
    }

  }

  return (
      <Box w="full" maxW="full" pos="relative" as="section">
        <Box bgColor={backgroundColor} p={[4, 6, 12]}>
          <SegmentHeading title={label} />
          {/* Slider Header Desktop */}
          <Flex display={["none", "none", "flex", "flex"]} maxW="full" w="full" py={[4, 12]} flexDir={["column", "row"]}>
            {sliderItems.map((item, i) => (
              <Text onClick={() => clickItem(item)} textAlign="left" maxW="100%" w="100%" fontSize="20px" cursor="pointer" flexGrow="1" fontWeight={index === i ? 'bold' : 'normal'}>{item.title}</Text>
            ))}
          </Flex>

          {/* Slider Header Mobile */}
          <Flex pos="relative" display={["flex", "flex", "none", "none"]} maxW="full" w="full" py={[4, null]} flexDir={["column", "row"]}>
            <Text textAlign="left" maxW="100%" fontSize="20px" cursor="pointer" flexGrow="1" fontWeight="bold" pb="8">{sliderItems[index].title}</Text>
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