// Generic Blocks to be re-used in layouts
import { Text, Box, useColorModeValue } from "@chakra-ui/react";

// Just a gradient box for layouts
export function Gradient({children}) {
  const bggradient = useColorModeValue("linear(to-b, brand.50, white)", "linear(to-b, gray.700, gray.800)");

  return (
    <Box
      w="100%"
      bgGradient={bggradient}
    >
    {children}
    </Box>
  );
}

// Just a gradient box for layouts
export function Solid({children}) {

  const bgcolor = useColorModeValue("brand.50", "gray.700")

  return (
    <Box bg={bgcolor}>
    {children}
    </Box>
  );
}

// Border to top
export function Divided({children}) {

  const bordercolor = useColorModeValue("brand.50", "gray.700");

  return (
    <Box borderTopWidth="1px" borderColor={bordercolor}>
    {children}
    </Box>
  );
}