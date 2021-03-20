import Layout from "@components/layout";
import Header from "@components/header/header";
import { Basicpage } from "@components/content/content";

import { Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <Layout>
      <Header />
      <Basicpage title="Referenzen">
       Liste an Use-Cases (Projekte die wir gemacht haben) für die Referenz
      </Basicpage>
    </Layout>
  );
}
