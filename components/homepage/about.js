// Generic Blocks to be re-used in layouts
import { Box, Text,Heading, Grid, Flex } from "@chakra-ui/react";
import { Main } from "@components/blocks/blocks";
import { SegmentHeading, Arrowlink } from "@components/atoms/atoms";
import Styles from "./homepage.module.css";

// Hero Wrap
export default function About({children, background}) {
  return (
      <Box as="section" py={[4,12,24]}>
        <Main  maxW="full">
          <Heading>
          130 Kluge Köpfe<br/>
2007 gegründet<br/>
4 Standorte<br/>
          </Heading>

          <SegmentHeading title="Aktuelle Use-Cases"/>

        </Main>
      </Box>
    );
  }
  