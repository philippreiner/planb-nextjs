// Small bits of ui helpers
import { Text, Heading, Box, useColorModeValue} from "@chakra-ui/react";
import Style from "./atoms.module.css";

// Styled Heading with border below
export function Lineheading({children, size}) {

  return (
    <Box>
      <Text d="inline-block" pr="2" mb="2" pb="2" borderColor="primary" borderBottomWidth="3px" as={size} fontSize={["md","xl"]}>
          {children}
      </Text>
    </Box>
  );
}

//PostIt for ToDos.
export function DevNote({children}) {
  return (
    <Box className={Style.postit}>
          {children}
    </Box>
  );
}

export function SegmentHeading({title}) {
  return (
    <Heading
      as="h2"
      pt={[4, 8, 12]}
      pb={[2, 4, 8]}
      textTransform="uppercase"
      fontSize={["xl", "2xl","2vw"]}
    >
      {title}
    </Heading>
  );
}

export function Card({children}) {
  const background = useColorModeValue("gray.50", "gray.700")

  return (
    <Box
      bg={background}
      borderRadius="1"
    >
      {children}
    </Box>
  );
}
