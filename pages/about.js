import Layout from "@components/layout";
import Header from "@components/header/header";
import { Basicpage } from "@components/content/content";
import {DevNote} from "@components/atoms/atoms";
import { Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <Layout>
      <Header />
      <Basicpage title="Agiles Arbeiten">
       <DevNote>
        Erklärt die PlanB. (inkl. Bild vom Standort) und vor allem unsere agile Arbeitsweise
       </DevNote>
       <h2>Mehr als nur Software</h2>
       Wir sind Expertinnen für die digitale Transformation und die Zukunft der Arbeit. Gemeinsam mit unseren Kunden stellen wir uns den größten Herausforderungen und lösen diese durch innovative Technologie und jahrelanger Erfahrung aus der Praxis. Denn der digitale Erfolg eines Unternehmens ist deutlicher umfangreicher als nur ein paar Zeilen Code. Es sind Ergebnisse die jeden Tag Menschen glücklich machen und Mehrwert für das Unternehmen bringen.

       <h2>Komplexität als Feind der Digitalisierung</h2>
Wie löst man komplexe Herausforderungen in einem Umfeld, das sich ständig ändert und weiter-entwickelt?  Neue Technologien drängen immer schneller auf den Markt, die Möglichkeiten der Cloud sind unzählig und IT ist absolut entscheidend für den Erfolg eines Unternehmens in wandelnden Märkten. Haben Sie noch den Überblick?
Dort wo man keine Handbücher mehr schreiben kann und es hunderte Apps als Alternativen gibt brauchen unsere Kunden einen verlässlichen Partner der Technologie, Business-Case und Erfahrung erfolgreich kombiniert. Das kann kein einzelner Nachmittag Ideen in den Raum werfen erfüllen, sondern nur langfristige, nachhaltige Partnerschaften. Diese Partnerschaften sind unsere Motivation.

<h2>Unser Ansatz: Agilität, Wissen und Partnerschaften</h2>
Wir sind agil. Das bedeutet für unsere Kunden großartige Ergebnisse in kleinen Schritten. Jeden Tag arbeiten wir mit agilen Methoden und Denkweisen und validieren konstant Ergebnisse. Veränderungen bedeuten Wettbewerbsvorteile und daher bleiben wir flexibel. Das reduziert das Risiko und bringt unseren Kunden gleichzeitig konstant höheren Mehrwert.
Warum empfehlen Kunden PlanB. gerne weiter? Mit unserem agilen Denkmuster reduziert sich die Time-to-Market von Monaten auf wenige Wochen. Projekte bieten konstanten Fortschritt anstatt ungeplanter Kosten – inkl. Transparenz durch gemeinsame Aufgabenplanung. Bisher versteckte Möglichkeiten der IT werden neu genutzt und verbessert. PlanB ermöglicht effizienteres Arbeiten und neue Geschäftsmodelle. 
Das Fachwissen der über 130 Köpfe bei PlanB hat sich aus jahrelanger Erfahrung entwickelt und wird auch morgen durch Trainings und Zertifizierungen stärker. Wir haben für jede Aufgabe der Digitalisierung die richtige Person. Wir sind ständig auf der Suche. Und unsere eigene Ausbildung und Netzwerke sorgen für konstant neue Mindsets im Team. 
Als Partner von Microsoft profitieren unsere Kunden von dem Zugang zu Technologien von Morgen die schon heute in Unternehmen eingesetzt werden können. Das zeigen unsere einzigartigen Referenzen zusammen mit Microsoft und unsere Zertifizierungen.

<h2>Aus Gestern machen wir Zukunft und gehen einen Schritt weiter mit neuen digitalen Lösungen.</h2>
Wir sind uns sicher, dass die Digitalisierung die Art und Weise, wie Menschen und Unternehmen handeln, kommunizieren und zusammenarbeiten verändert.
Unsere Mission ist es Kunden zu begeistern, inspirieren und Menschen noch näher an ihre Ziele zu bringen. Dabei bieten wir eine Vielzahl an Lösungen für geschäftlichen Herausforderungen und digitalen Innovationen.

      </Basicpage>
    </Layout>
  );
}
