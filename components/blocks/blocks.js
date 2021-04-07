// Generic Blocks to be re-used in layouts
import { Container, Text, Box, useColorModeValue } from "@chakra-ui/react";
import Styles from "./blocks.module.css";

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

// Just a solid box for layouts
export function Solid({children}) {

  const bgcolor = useColorModeValue("gray.50", "gray.700")

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

// Hero Wrap
export function Fullheight({children,bg}) {

  return (
    <Box bg={bg} className={Styles.fullheight}>

    {children}
    </Box>
  );
}
Fullheight.defaultProps = {
  bg: null
}

// Main Container
export function Main({children, maxW}) {

  if(maxW === "full") maxW = ["100em",null,null,null,"90%"];
  
  return (
    <Container
      maxW={maxW}
    >
    {children}
    </Container>
  );
}

Main.defaultProps = {
  maxW: "60em",
};