// Generic Blocks to be re-used in layouts
import { Box, Heading, Text} from "@chakra-ui/react";
import { Main } from "@components/blocks/blocks";
import { SegmentHeading,Arrowlink } from "@components/atoms/atoms";


// Culture Section
export default function Culture({children}) {
  return (
      <Box as="section" pt={[4,12,24]}>
        <Main  maxW="full">
          <SegmentHeading title="Unsere Unternehmenskultur"/>
          <Heading as="h2">
            Chancen digitaler Innovationen nutzen.
          </Heading>
          <Text as="p">
          „Bei PlanB. leben wir eine Kultur, welche stets den Menschen im Mittelpunkt sieht. Unabhängig davon ob Nutzer, Kunde oder Mitarbeiter. Wir sind stolz eine offene Kultur geschaffen zu haben, die lebendige Neugierde fördert und Empathie voraussetzt. Eine Kultur, in der jeder aufgefordert ist, sich einzubringen, denn nur so schaffen wir die Grundlage für unser unverwechselbares, außergewöhnliches Unternehmen.”
          <br/>
<strong>Tobias Schmailzl</strong>
Managing Director / Co-Founder
          </Text>
          <Arrowlink label="Werde Teil unseres Teams" url="/karriere"/>
          <Arrowlink label="Die Menschen hinter PlanB" url="/404"/>

        </Main>
      </Box>
    );
  }
  