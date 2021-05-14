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
      <Basicpage title="Digital Product Factory">
       <DevNote>
          DPF Seite inkl case-studies slider
       </DevNote>
      </Basicpage>
    </Layout>
  );
}
