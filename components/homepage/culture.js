// Generic Blocks to be re-used in layouts
import { Box, Heading, VStack, Text, Grid, GridItem} from "@chakra-ui/react";
import { Main } from "@components/blocks/blocks";
import { SegmentHeading,Arrowlink } from "@components/atoms/atoms";
import NextImage from 'next/image';

// Culture Section
export default function Culture({children}) {
  return (
      <Box as="section" pt={[4,12,24,44]} pb={[4,12,24]}>
        <Main  maxW="full">
        <Grid
            templateRows="1fr"
            templateColumns={["1fr",null,"repeat(12, 1fr)"]}
            gap={[4,8]}
          >
          <GridItem colSpan={[1,null,7]}>
              <SegmentHeading title="Unsere Unternehmenskultur"/>
                <Heading
                    as="h2"
                    pb={[2,4,8]}
                    pt={[2,4]}
                    textTransform="uppercase"
                    fontWeight="fat"
                    fontFamily="fat"
                    fontSize={["24px","36px","44px"]}
                >
                  Chancen digitaler Innovationen nutzen.
                </Heading>
                <Text as="p" pb={[2,4,8]}>
                „Bei PlanB. leben wir eine Kultur, welche stets den Menschen im Mittelpunkt sieht. Unabhängig davon ob Nutzer, Kunde oder Mitarbeiter. Wir sind stolz eine offene Kultur geschaffen zu haben, die lebendige Neugierde fördert und Empathie voraussetzt. Eine Kultur, in der jeder aufgefordert ist, sich einzubringen, denn nur so schaffen wir die Grundlage für unser unverwechselbares, außergewöhnliches Unternehmen.”
                <br/>
                <br/>
                  <strong>Tobias Schmailzl</strong><br/>
                  Managing Director / Co-Founder
                </Text>
                <VStack align="flex-start" spacing={[2,4]}>
                <Arrowlink label="Werde Teil unseres Teams" url="/karriere"/>
                <Arrowlink label="Die Menschen hinter PlanB" url="/404"/>
                </VStack>

            </GridItem>
            <GridItem pos="relative" colSpan={[1,null,5]} >
            <NextImage 
              src="/images/tobias-portrait-desk.jpg"
              layout="fill"
              objectFit="cover"
              />
            </GridItem>
        </Grid>
          

        </Main>
      </Box>
    );
  }
  