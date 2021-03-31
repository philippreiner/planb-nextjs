import Layout from "@components/layout";
import Hero from "@components/hero/hero";
import { Basicpage } from "@components/content/content";
import { Solid, Gradient, Main} from "@components/blocks/blocks";
import {DevNote} from "@components/atoms/atoms";
import { Container, DarkMode, useColorModeValue } from "@chakra-ui/react";
import About from "@components/about/about"


export default function Home() {
  const aboutImg = useColorModeValue("url(/images/westhausen.jpg)", "url(/images/westhausen.jpg)");

  return (
    <Layout>
      <DarkMode>
      <Hero background={aboutImg}>
        <Main>        
          <DevNote>
            Video von Tobi/Regina auf der Couch sitzend, 10sekunden schleife.
        </DevNote>
        </Main>
      </Hero>
      </DarkMode>

      <Basicpage title="Kontakt">
        <DevNote>
          Kontaktdaten und Standorte hier. Wichtige Personen vorstellen für den Kontakt.
        </DevNote>
        TBD
      </Basicpage>
      <Gradient>
      <About />
      </Gradient>
    </Layout>
  );
}
