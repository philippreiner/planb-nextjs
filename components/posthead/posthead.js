// Header used for the blog head
import Header from "@components/header/header";
import {Solid} from "@components/blocks/blocks"


import { Text, HStack, Heading, Box, Container, useColorModeValue } from "@chakra-ui/react";

export default function Posthead({ title, published }) {

  const txtcolor = useColorModeValue("gray.500", "gray.300")

  return (
    <Solid>
      <Header />
      <Container maxW="40em">
        <Box pt={[12, 20]} pb={[4, 6]} >
          <Heading as="h1" pb={[2, 4]} size="xl">
            {title}
          </Heading>
          <HStack spacing="2">
            <Text color={txtcolor}>{published}</Text>
          </HStack>
        </Box>
      </Container>
    </Solid>
  );
}
