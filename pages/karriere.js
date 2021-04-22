import Layout from "@components/layout";
import Header from "@components/header/header";
import { Basicpage } from "@components/content/content";
import {DevNote, SegmentHeading} from "@components/atoms/atoms";
import { Flex,Box,Center, Link } from "@chakra-ui/react";
import { Wallpaper, Main} from "@components/blocks/blocks";

import NextLink from "next/link";
import NextImage from "next/image";

export default function Home() {
  return (
    <Layout>
            <Header />
      <Wallpaper bgImage="/images/offices/huettlingen-baustelle.jpg">
        <Main maxW="full">
          <Flex height={["500px",null,"70vh"]} direction="column">
            <SegmentHeading title="Arbeiten bei PlanB."/>
            <Box flex="1" cursor="pointer" pt={[2,4,16,24]}>
                <Center>
                  <NextLink href="/karriere" passHref>
                    <NextImage
                      src="/images/decorative/epicstuff.svg"
                      width={968*2}
                      height={149*2}
                      alt="#epicstuff"
                    />
                  </NextLink>
                </Center>
            </Box>
            <NextLink href="/karriere" passHref>
              <Link color="primary">Karriere & Ausbildung</Link>
            </NextLink>
          </Flex>
        </Main>
      </Wallpaper>
      <Basicpage title="Karriere">
       <DevNote>
       Erklärt warum arbeiten bei der PlanB toll ist (Und ein paar worte über die firma z.b. standorte), die vorteile des jobs, erwartungen und stellenanzeigen sowie Ausbildungsverweis.
       </DevNote>
      </Basicpage>
    </Layout>
  );
}
