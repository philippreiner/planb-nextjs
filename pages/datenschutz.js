import Layout from "@components/layout";
import Header from "@components/header/header";
import { Basicpage } from "@components/content/content";
import {DevNote} from "@components/atoms/atoms";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Link
} from "@chakra-ui/react"

const title = "Datenschutz & Rechtliches"
export default function Home() {
  return (
    <Layout title={title}>
      <Header />
      <Basicpage title={title}>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <div>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Datenschutz auf dieser Webseite
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </div>
            <AccordionPanel pb={4}>
            <p><em>
          Die folgende Datenschutzerklärung bezieht sich nur auf diese Domain.
        </em></p>
        <p>
          Diese Webseite verwendet keine Cookies, mit Ausnahme von technisch
          notwendigen Cookies im Einzelfall (z.B. zur Formularkontrolle). Sie werden auf Cookies hingewiesen.
        </p>

        <p>
          Ihre Datenübertragung zur Webseite ist mit einem SSL-Verfahren
          verschlüsselt.
        </p>
        <p>
          Sollten Daten zu externen Anbietern übertragen werden (z.B. Youtube-Video) oder externe Cookies gespeichert, bitten wir Sie in diesem Moment um Ihre Einverständnis. Ohne Einverständnis werden standardmäßig keine Daten übermittelt, es kann jedoch zu technisch bedingten funktionalen Einschränkungen kommen.
        </p>
        <p>
          Um dieses Onlineangebot sicher und effizient bereitstellen zu können,
          nehmen wir die Leistungen von einem oder mehreren <strong>Webhosting-Anbietern</strong>
            in Anspruch, von deren Servern (bzw. von ihnen verwalteten Servern)
          das Onlineangebot abgerufen werden kann. Zu diesen Zwecken können wir
          Infrastruktur- und Plattformdienstleistungen, Rechenkapazität,
          Speicherplatz und Datenbankdienste sowie Sicherheitsleistungen und
          technische Wartungsleistungen in Anspruch nehmen. Zu den im Rahmen der
          Bereitstellung des Hostingangebotes verarbeiteten Daten können alle
          die Nutzer unseres Onlineangebotes betreffenden Angaben gehören, die
          im Rahmen der Nutzung und der Kommunikation anfallen. Hierzu gehören
          regelmäßig die IP-Adresse, die notwendig ist, um die Inhalte von
          Onlineangeboten an Browser ausliefern zu können, und alle innerhalb
          unseres Onlineangebotes oder von Webseiten getätigten Eingaben.
          Erhebung von Zugriffsdaten und Logfiles: Wir selbst (bzw. unser
          Webhostinganbieter) erheben Daten zu jedem Zugriff auf den Server
          (sogenannte Serverlogfiles). Zu den Serverlogfiles können die Adresse
          und Name der abgerufenen Webseiten und Dateien, Datum und Uhrzeit des
          Abrufs, übertragene Datenmengen, Meldung über erfolgreichen Abruf,
          Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL
          (die zuvor besuchte Seite) und im Regelfall IP-Adressen und der
          anfragende Provider gehören.
        </p>
        <p>
          Bei der <strong>Kontaktaufnahme</strong> mit uns (z.B. per Kontaktformular, E-Mail,
          Telefon oder via soziale Medien) werden die Angaben der anfragenden
          Personen verarbeitet, soweit dies zur Beantwortung der Kontaktanfragen
          und etwaiger angefragter Maßnahmen erforderlich ist. Die Beantwortung
          der Kontaktanfragen im Rahmen von vertraglichen oder vorvertraglichen
          Beziehungen erfolgt zur Erfüllung unserer vertraglichen Pflichten oder
          zur Beantwortung von (vor)vertraglichen Anfragen und im Übrigen auf
          Grundlage der berechtigten Interessen an der Beantwortung der
          Anfragen.
        </p>
        <p>
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser
          Website ist die im <Link href="/imprint">Impressum</Link> genannte PlanB. GmbH bzw. Frau Anja Schmid.
        </p>
        <p>
          Wir haben für unser Unternehmen einen <strong>Datenschutzbeauftragen</strong> bestellt.
          <br />
          HANAK-Datenschutz
          <br />
          Bünzwanger Straße 8<br />
          73066 Uhingen
          <br />
          Telefon: +49 (0) 7161 - 3540262<br />
          E-Mail: info@hanak-datenschutz.de
        </p>
        <p>
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
          das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
          personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck
          der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung
          oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
          personenbezogene Daten können Sie sich jederzeit unter der im
          Impressum angegebenen Adresse an uns wenden. Sofern Sie die direkte Übertragung der Daten an
          einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es
          technisch machbar ist.
        </p>
        <h3>
          Hinweise
        </h3>
        <p>Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird jedoch keine Gewähr übernommen. Gemäß § 7 Abs.1 TMG ist der Dienstanbieter für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG besteht jedoch keine Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden diese Inhalte umgehend entfernt.</p>
        <p>Dieses Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte keinen Einfluss besteht. Deshalb kann für diese fremden Inhalte auch keine Gewähr übernommen werden. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden derartige Links umgehend entfernt.</p>
        <p>Der Nutzung von im Rahmen der Impressumpflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen.</p>
            <br/> <br/>
            <em>Letzte Änderung: 09/2021</em>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <div>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Datenschutz bei der PlanB. GmbH
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </div>
            <AccordionPanel pb={4}>
              <Link href="/downloads/privacy/kunden.pdf">
                Für Kunden
              </Link><br/>
              <Link href="/downloads/privacy/lieferanten.pdf">
                Für Lieferanten
              </Link><br/>
              <Link href="/downloads/privacy/bewerber.pdf">
                Für BewerberInnen
              </Link>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Basicpage>
    </Layout>
  );
}
