// Generic Blocks to be re-used in layouts
import { Box, useColorModeValue } from "@chakra-ui/react";
import Styles from "./hero.module.css";
import Header from "@components/header/header";

// Hero Wrap
export default function Hero({children}) {

    const bgcolor = useColorModeValue("white", "gray.700")
  
    return (
      <Box bg={bgcolor} className={Styles.hero}>
            <Header />
            <Box className={Styles.center}>
                {children}
            </Box>
      </Box>
    );
  }
  