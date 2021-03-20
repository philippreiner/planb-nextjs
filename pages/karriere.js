import Layout from "@components/layout";
import Header from "@components/header/header";
import { Basicpage } from "@components/content/content";

import { Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <Layout>
      <Header />
      <Basicpage title="Karriere">
       Erklärt warum arbeiten be ider PlanB sinn mcht, welche jobs und benefits es gibt und eine info zur ausbildung
      </Basicpage>
    </Layout>
  );
}
