// Generic Blocks to be re-used in layouts
import { Box, useColorModeValue, Text } from "@chakra-ui/react";
import Styles from "./hero.module.css";
import Header from "@components/header/header";
import NextImage from 'next/image';

// Hero Wrap
export default function Hero({ children, background, backgroundSize, backgroundPosition, backgroundColor, arrowDisplay }) {


  return (
    <Box bgImage={background} bgSize={backgroundSize} bgPos={backgroundPosition} backgroundColor={backgroundColor} className={Styles.hero}>
      <Header />
      <Box pos="absolute" left="calc(50% - (42px / 2))" bottom="48px" transform="scale(1.5)" display={arrowDisplay}>
        <NextImage src="/assets/icons/downarrow.png" width="42px" height="11px"/>
      </Box>
      <Box className={Styles.center}>
        {children}
      </Box>
    </Box>
  );
}
