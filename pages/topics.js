import Layout from "@components/layout";
import Header from "@components/header/header";
import { Basicpage } from "@components/content/content";

import { Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <Layout>
      <Header />
      <Basicpage title="Schwerpunkte">
        Themen und Schwerpunkte wie AI und Teams kommen hier.
      </Basicpage>
    </Layout>
  );
}
