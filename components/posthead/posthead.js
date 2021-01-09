// Header used for the blog head
import Header from "@components/header/header";

import { Text, Heading, Box, Container, useColorModeValue } from "@chakra-ui/react";

export default function Posthead({ title, author, published }) {

  const bgcolor = useColorModeValue("primary.50", "gray.700")
  const txtcolor = useColorModeValue("gray.500", "gray.300")

  return (
    <Box bg={bgcolor}>
      <Header />
      <Container maxW="40em">
        <Box pt={[12, 20]} pb={[4, 6]} >
          <Heading as="h1" pb={[2, 4]}size="xl">
            {title}
          </Heading>
          <Text color={txtcolor}>
            von <Text as="strong">{author}</Text> veröffentlich am {published}
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
