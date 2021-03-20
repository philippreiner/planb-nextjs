import Layout from "@components/layout";
import Header from "@components/header/header";
import { Basicpage } from "@components/content/content";

import { Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <Layout>
      <Header />
      <Basicpage title="Agiles Arbeiten">
       Erklärt die PlanB. und vor allem unsere agile Arbeitsweise
      </Basicpage>
    </Layout>
  );
}
