// Small bits of ui helpers
import { Text, Box } from "@chakra-ui/react";

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
