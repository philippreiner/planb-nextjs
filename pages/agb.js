import Layout from "@components/layout";
import Header from "@components/header/header";
import { Basicpage } from "@components/content/content";
import {DevNote} from "@components/atoms/atoms";
import { Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <Layout>
      <Header />
      <Basicpage title="Rechtliche Dokumente">
       <DevNote>
       Liste an rechtlichen Dokumenten wie AGBs, Datenschutz,.. für Verträge mit der PlanB.
         </DevNote>
      </Basicpage>
    </Layout>
  );
}
