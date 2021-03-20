// Small bits of ui helpers
import { Text, Box, StylesProvider } from "@chakra-ui/react";
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

export function DevNote({children}) {
  return (
    <Box className={Style.postit}>
          {children}
    </Box>
  );
}