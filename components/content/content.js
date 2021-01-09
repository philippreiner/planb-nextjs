// Wraps content
import { Box, Container, Heading } from "@chakra-ui/react";
import Style from "./content.module.css";

export default function Content({children}) {

  return (
    <Box className={Style.content}>
      {children}
    </Box>
  );
}

export function Basicpage({children, title}) {

  return (
    <Container maxW="40em" pt={[4, 6]} pb={[4, 6]}>
      <Heading pt={[4,12]} pb={[2,4]} as="h1">
        {title}
      </Heading>
      <Content>
        {children}
      </Content>
    </Container>
  );
}