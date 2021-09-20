// Generic Blocks to be re-used in layouts
import { Box, Text,Heading} from "@chakra-ui/react";
import { Main } from "@components/blocks/blocks";
import { SegmentHeading } from "@components/atoms/atoms";

// Hero Wrap
export function Countline({number, label}) {
  return (
            <Heading textTransform="uppercase" pb="2" fontSize={["24px","40px","72px"]} fontWeight="normal" as="h4">
                <Text display="inline" fontWeight="bold">{number}&nbsp;</Text>{label}
            </Heading>
    );
}

// Hero Wrap
export default function About({children, background}) {
  return (
      <Box as="section" pt={[4,12,24]}>
        <Main  maxW="full">
          <Box pt={[4,8,2]} pb={[2]}>
              <Countline number="130" label="Kluge Köpfe"/>
              <Countline number="2007" label="gegründet"/>
              <Countline number="3" label="Standorte"/>
          </Box>
        </Main>
      </Box>
    );
  }
  