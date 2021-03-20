import Layout from "@components/layout";
import Header from "@components/header/header";
import { Basicpage } from "@components/content/content";
import {DevNote} from "@components/atoms/atoms";

import { Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <Layout>
      <Header />
      <Basicpage title="Schwerpunkte">
        <DevNote>
        Themen und Schwerpunkte als Übersicht kommen hier
        </DevNote>
        <DevNote>
          Beispielsweise zeitlich relevante wie: AI, IOT, Robotics, MS FastTrack, O365-Migration,...
        </DevNote>
      </Basicpage>
    </Layout>
  );
}
