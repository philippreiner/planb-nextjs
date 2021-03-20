import Layout from "@components/layout";
import Header from "@components/header/header";
import { Basicpage } from "@components/content/content";
import {DevNote} from "@components/atoms/atoms";
import { Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <Layout>
      <Header />
      <Basicpage title="Referenzen/Use-Cases">
       <DevNote>
       Liste an Use-Cases (Projekte die wir gemacht haben) als Referenz
         </DevNote>
         <DevNote>
       Jede Referenz linkt wieder auf die Lösungsseite
         </DevNote>
      </Basicpage>
    </Layout>
  );
}
