// Generic Blocks to be re-used in layouts
import { Box, Text,Heading, Grid, Flex } from "@chakra-ui/react";
import { Main } from "@components/blocks/blocks";
import { SegmentHeading, Arrowlink } from "@components/atoms/atoms";
import Styles from "./homepage.module.css";


// List of Use-Cases
export default function Usecases({children, background}) {
  return (
      <Box as="section" pt={[4,8,12]}>
        <Main maxW="full">
          <SegmentHeading title="Aktuelle Use-Cases"/>
          <Grid pt="3" position="relative" zIndex="10" gap="5" templateColumns={["100%","1fr 1fr", null, "1fr 1fr 1fr 1fr"]}>
              <Box bg="gray.500" p={[2,4,8]}h={null,null,"300px","450px"}>
                Use-Case
              </Box>
              <Box bg="gray.500" p={[2,4,8]}h={null,null,"300px","450px"}>
                Use-Case
              </Box>
              <Box bg="gray.500" p={[2,4,8]}h={null,null,"300px","450px"}>
                Use-Case
              </Box>
              <Box bg="gray.500" p={[2,4,8]}h={null,null,"300px","450px"}>
                Use-Case
              </Box>
          </Grid>
        </Main>
        <Box bg="primary" w="100%" h="300px" className={Styles.deco}></Box>
      </Box>
    );
  }
  