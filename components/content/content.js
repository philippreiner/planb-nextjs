// Wraps content
import { Box } from "@chakra-ui/react";
import Style from "./content.module.css";

export default function Content({children}) {

  return (
    <Box className={Style.content}>
      {children}
    </Box>
  );
}
