// Generic Blocks to be re-used in layouts
import { Box, useColorModeValue } from "@chakra-ui/react";
import Styles from "./hero.module.css";
import Header from "@components/header/header";

// Hero Wrap
export default function Hero({ children, background, backgroundSize, backgroundPosition, backgroundColor }) {


  return (
    <Box bgImage={background} bgSize={backgroundSize} bgPos={backgroundPosition} backgroundColor={backgroundColor} className={Styles.hero}>
      <Header />
      <Box className={Styles.center}>
        {children}
      </Box>
    </Box>
  );
}
