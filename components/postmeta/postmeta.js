// Shows Author and recommended articles below post
import { Box, Stack, useColorModeValue } from "@chakra-ui/react"
import NextImage from "next/image"

export default function Postmeta({ author, recommended }) {
  const bordercolor = useColorModeValue("brand.50", "gray.700");

  return (
    <Box borderColor={bordercolor} borderWidth="1px">
      <Box padding={[2,8]} borderBottomWidth="1px" borderColor={bordercolor}>
        <Stack spacing={[2,4]} direction={["column-reverse","row"]}>
            <Box>
                Das ist über den Autor
            </Box>
            <NextImage
                src="/assets/planb-logo.png"
                alt="Author Name"
                width={200}
                height={200}

            />
        </Stack>
      </Box>
      <Box padding={[2,8]}>
        Recommend
      </Box>
    </Box>
  );
}
