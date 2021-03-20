import Layout from "@components/layout";
import Header from "@components/header/header";
import { Basicpage } from "@components/content/content";
import {DevNote} from "@components/atoms/atoms";
import { Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <Layout>
      <Header />
      <Basicpage title="Karriere">
       <DevNote>
       Erklärt warum arbeiten bei der PlanB toll ist (Und ein paar worte über die firma z.b. standorte), die vorteile des jobs, erwartungen und stellenanzeigen sowie Ausbildungsverweis.
       </DevNote>
      </Basicpage>
    </Layout>
  );
}
