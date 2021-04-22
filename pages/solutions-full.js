import Layout from "@components/layout";
import Header from "@components/header/header";
import { Basicpage } from "@components/content/content";
import {DevNote} from "@components/atoms/atoms";
import { Solid, Gradient, Divided } from "@components/blocks/blocks";
import About from "@components/about/about"

import { Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <Layout>
      <Header />
      <Basicpage title="Lösungen">
       <DevNote>
         Übersicht von Digital Product Factory und danach Modern Work
       </DevNote>
       <DevNote>
         Jeweils Beschreibung + Link zu Projekten / Schwerpunkten + Liste an Kontaktpersonen
       </DevNote>
       <h2>Digital Product Factory</h2>
       <h4>
       Innovative Apps und Software werden in unserer Digital Product Factory zuverlässig und schnell entwickelt. Und ermöglichen skalierbare Geschäftsmodelle und neue Anwendungsbereiche.
       </h4>

       <p>
       In der Digitalen Produktfabrik bietet PlanB. innovative Software-Entwicklung aus einer Hand. Dabei definieren wir durch Technologie die Zukunft Ihres Unternehmens, digitalisieren Prozesse und machen mit KI, AR und UX jede noch so komplexe Idee schnell Realität.
       </p>
       <p>
Die Möglichkeiten an Talenten für Ihr Projekt sind lückenlos. Je nach Bedarf starten wir mit grundlegender User-Research können aber auf der anderen Seite des Spektrums auch langjährige Softwareprojekte modernisieren und fit für die Zukunft machen. Dazwischen gibt es keine Grenzen – egal ob UI, Frontend, Backend oder skalierbare Cloud-Architektur. Neuste Technologie wird reproduzierbar in handfeste Ergebnisse überführt.
</p>
       <p>
Für unsere Kunden bedeutet dies zuverlässige Verbesserungen der Software – die den täglichen Anforderungen gewachsen sind. Und das bei hoher Qualität und Sicherheit. Durch unsere agile Arbeitsweise können wir Ergebnisse bereits in kurzer Zeit marktreif machen bei geringen Kosten. 
       </p>
       <h4>Schwerpunkte</h4>
<ul>
    <li>
        Externe Entwicklungskapazität
    </li>
    <li>
        Machine Learning und Data Sciene
    </li>
    <li>
        Identity Management
    </li>
    <li>
        IIoT-Plattformen
    </li>
    <li>
        Industrie 4.0
    </li>
    <li>
        Digital Product Building (UX)
    </li>
</ul>
       <h4>Leistungen</h4>
       <ul>
    <li>
        UI / User Experience
    </li>
    <li>
        Software Engineering / Architektur
    </li>
    <li>
        Cognitive Services (AI)
    </li>
    <li>
        Digital Product Management
    </li>
    <li>
        Agile Coaches
    </li>
    <li>
        DevOps
    </li>
    <li>
        Software Testing
    </li>
</ul>
<h4>Use-Cases</h4>
<ul>
    <li>
        Robotics Beispiel
    </li>
    <li>
        QMS Beispiel Zeiss
    </li>
    <li>
        Identity bei Zeiss / anderen Firmen
    </li>
    <li>
        Zeiss Vision
    </li>
    <li>
        Witte Digital Box
    </li>
    <li>
        Venta App
    </li>
    <li>
        BlackPin
    </li>
    <li>
        MRCS-AR Anwendung (ProWin oder Freudenberg)
    </li>
    <li>
        Virtuelle Hauptversammlung
    </li>
    <li>
        Medizinische KI-Vorhersagen
    </li>
    <li>
        iLive Mobile App
    </li>
    <li>
        BPW-Portallösungen
    </li>
</ul>

<h4>Kontakt</h4>
<p>Christoph und Tobias
</p>      <Divided>
  <h2>Modern Work</h2>
<h4>Der Arbeitsplatz von morgen ist digital, flexibel und vor allem sicher. Modern Work lässt Ihr Unternehmen effizienter und zuverlässig arbeiten.</h4>
<p>
    Die moderne IT-Landschaft wird ständig vielfältiger und Budgets kleiner.
    PlanB. ist als zuverlässiger Microsoft-Partner Ihre Lösung für die
    Migration in die Cloud und die Zukunft der digitalen Zusammenarbeit.
</p>
<p>
    Wir lösen komplexe Themen auf und planen skalierbare, moderne
    IT-Infrastruktur für jedes Endgerät. Die Migration zu Microsoft 365 (Office
    in der Cloud) ist mit uns kein Problem. Und durch die PowerPlattform und
    viele Jahre Erfahrung können wir Prozesse mit Microsoft-Standards
    digitalisieren und sparen Kosten für externe Software.
</p>
<p>
    Direkte Ansprechpartner können schnell und rund um die Uhr jedes Problem
    lösen. Dabei ist die Sicherheit Ihrer Daten und die Zufriedenheit der
    täglichen Anwender unsere höchste Priorität. Den nichts ist heute für den
    Erfolg Ihres Unternehmens so wichtig wie moderne IT-Services.
</p>
<h4>Schwerpunkte</h4>
<ul>
    <li>
        Microsoft FastTrack
    </li>
    <li>
        Office 365 Migration
    </li>
    <li>
        Mobile Security /BYOD
    </li>
    <li>
        PowerPlattform
    </li>
    <li>
        Experience Service Partner (XLA)
    </li>
    <li>
        Managed Service
    </li>
</ul>
<h4>Leistungen</h4>
<ul>
    <li>
        Cloud &amp; Service Architektur
    </li>
    <li>
        Modern Workplace
    </li>
    <li>
        Microsoft 365
    </li>
    <li>
        Managed Services
    </li>
    <li>
        IT-Sicherheit
    </li>
</ul>
<h4>Use-Cases</h4>
<ul>
    <li>
        MAPAL Dokumentgenehmigung
    </li>
    <li>
        SAP Dokumentenapp
    </li>
    <li>
        Daimler-Tätigkeiten
    </li>
    <li>
        SAP-Tätigkeiten
    </li>
    <li>
        Fieldservice mit PowerPlattform
    </li>
    <li>
        EagleBurgmann Migrationen von On-Prem in Cloud
    </li>
    <li>
        IT-Workshops
    </li>
</ul>
<h4>Kontakt</h4>
Tobias Abele und Tobias Schmailzl?
</Divided>  
      </Basicpage>
      <Gradient>
      <About />
      </Gradient>
    </Layout>
  );
}
