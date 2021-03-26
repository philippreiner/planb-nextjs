import Layout from "@components/layout";

import Hero from "@components/hero/hero";
import { TagWall, TagWallItem}from "@components/tagwall/tagwall";

import NextLink from "next/link";
import { Solid, Gradient, Main} from "@components/blocks/blocks";
import { SegmentHeading, DevNote, Card} from "@components/atoms/atoms";

import { getSortedPostsData } from "@library/posts";

import {
  Container,
  Box,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Button,
  SimpleGrid
} from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const btnColor = useColorModeValue("primary", "primary");
  const bgImg = useColorModeValue(null, "url(/assets/gradient1.jpg)")

  return (
    <Layout title="PlanB. - Experten für Modern Work und Software">
      <Hero background={bgImg}>
        <Container maxW="90%">
          <Box pt={[12, 20, 32]} pb={[12, 20, 32]}>
              <Heading
                as="h1"
                pb={[2, 4]}
                fontSize={["xl", "4xl","3vw","4vw"]}
                textTransform="uppercase"
                maxW={[null, null, null,"90%"]}
              >
                Changing the way how people and businesses communicate, work and collaborate.
              </Heading>
            <Text 
            pb={[2, 4, 6]}
            maxW={[null, null, "82%"]}
            >
            PlanB. sind 130 kluge Köpfe welche mutig die digitale Transformation und die Zukunft der Arbeit schon heute gestalten.
            </Text>
            <NextLink href="/about" passHref>
              <Button size="md" variant="link" color={btnColor} leftIcon={<ArrowForwardIcon w={6} h={6} />}>Warum Kunden PlanB. empfehlen</Button>
            </NextLink>
          </Box>
        </Container>
      </Hero>

      <Main maxW="full">
       <DevNote>
          Liste an Themen/Schwerpunkten wie AI/Teams/IOT/UX... <br/>
          <NextLink href="/topics" passHref>
                <Link color="primary">Schwerpunkte</Link>
          </NextLink>
          <br/>
          <NextLink href="/solutions" passHref>
                <Link color="primary">Lösungen (DPF/MW)</Link>
          </NextLink>
        </DevNote>
        <SegmentHeading title="Themen"/>
        <TagWall>
          <TagWallItem        
            title="User Experience"
            area="dpf"
            url="/topics/user-experience"
          />
          <TagWallItem        
            title="Microsoft 365"
            area="mw"
            url="/topics/user-experience"
          />
          <TagWallItem        
            title="Artifical Intelligence"
            area="dpf"
            url="/topics/user-experience"
          />
        </TagWall>

        <SegmentHeading title="TODO"/>
        <SimpleGrid 
          columns={["1","2","3",null,"4","6"]}
          spacing={[2,4,8]}
        >
          <Card>
            Something
          </Card>
          <Card>
            Something<br/>
            Else
          </Card>
          <Card>
            Something<br/>
            Else
          </Card>
          <Card>
            Something<br/>
            Else
          </Card>
          <Card>
            Something<br/>
            Else
          </Card>
        </SimpleGrid>
      </Main>

     
      <Container maxW="42em">
      <Box pt="4">
        
      </Box>
      <Box pt="4">
        <DevNote>
        Arbeiten bei PlanB. <br/>
        <NextLink href="/karriere" passHref>
              <Link color="primary">Karriere & Ausbildung</Link>
        </NextLink>
        </DevNote>
      </Box>
      </Container>

    </Layout>
  );
}
