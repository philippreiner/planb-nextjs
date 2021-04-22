import Layout from "@components/layout";
import Header from "@components/header/header";

import {SegmentHeading, Glowtext} from "@components/atoms/atoms";
import { Gradient, Solid, Main } from "@components/blocks/blocks";
import About from "@components/about/about"

import { Box, Text} from "@chakra-ui/react";

export default function Home() {
  return (
    <Layout>
      <Solid>
      <Header />

        <Main>
        <SegmentHeading title="Lösungen"/>
          </Main>
      </Solid>
          <Main>
            <Box pt={[4,12]} pb={[4,8,16]}>
                   <Text mb={[2,4]}>Digital Product Factory</Text>
                <Glowtext>Something</Glowtext>
                <Glowtext>Something Tw0</Glowtext>
                <Glowtext variant="secondary">Another 2021</Glowtext>
            </Box>
            </Main>
      <Gradient>
      <About />
      </Gradient>
    </Layout>
  );
}
