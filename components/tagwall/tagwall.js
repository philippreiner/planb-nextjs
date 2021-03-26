// Show the info about our company
import { Box} from "@chakra-ui/react";

export function TagWall({children}) {

  return (
    <Box>
           {children}
    </Box>
  );
}

export function TagWallItem({title}) {

    return (
      <Box>
        {title}
      </Box>
    );
  }
  