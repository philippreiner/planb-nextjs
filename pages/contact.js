import Layout from "@components/layout";
import Header from "@components/header/header";
import { Basicpage } from "@components/content/content";
import {DevNote} from "@components/atoms/atoms";
import { Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <Layout>
      <Header />
      <Basicpage title="Kontakt">
        <DevNote>
          Kontaktdaten und Standorte hier. Wichtige Personen vorstellen für den Kontakt.
        </DevNote>
        TBD
      </Basicpage>
    </Layout>
  );
}
