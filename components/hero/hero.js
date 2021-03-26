// Generic Blocks to be re-used in layouts
import { Box, useColorModeValue } from "@chakra-ui/react";
import Styles from "./hero.module.css";
import Header from "@components/header/header";
import '@animxyz/core';

// Hero Wrap
export default function Hero({children, background}) {

  
    return (
      <Box bgImage={background} className={Styles.hero}>
            <Header /> 
            <Box className={Styles.center}>
                {children}
            </Box>
      </Box>
    );
  }
  