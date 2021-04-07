// Generic Blocks to be re-used in layouts
import { Box, useColorModeValue } from "@chakra-ui/react";
import Styles from "./videohead.module.css";
import Header from "@components/header/header";

// Hero Wrap
export default function VideoHead({children, background}) {

  
    return (
      <Box bg="black" className={Styles.videohead}>
            <div className={Styles.overlay}></div>
            <video className={Styles.video} playsInline="true" disablePictureInPicture="true" poster="/videos/poster.jpg" autoPlay={true} loop={true} muted={true}>
               <source src="/videos/homepage.mp4"type="video/mp4" />
             </video>
            <Header /> 
            <Box className={Styles.center}>
                {children}
            </Box>
      </Box>
    );
  }
  