import Layout from "@components/layout";

import { Main } from "@components/blocks/blocks";
import { SegmentHeading, Arrowlink } from "@components/atoms/atoms";
import Hero from '@components/hero/hero';
import Slider from '@components/slider/slider';

import { Box, Heading, Text, Flex, Wrap } from "@chakra-ui/react";
import About from "@components/about/about";

export default function Home() {

    const sliderItems = [
        { id: 0, title: "Compliance & Information Protection", headline: 'Compliance & Information Protection', image: "/images/slider/cyber-security/compliance.jpeg", text: "Wo stehen wir derzeit? Wie sollte unsere Security-Roadmap aussehen, um unsere Unternehmenswerte zu schützen? Wie schaffen wir es, den Überblick bzw. den roten Faden nicht zu verlieren? Nur wenn die Ausgangssituation, die Anforderungen aller Stakeholder und das zukünftige Big-Picture bekannt sind besteht die Möglichkeit eine planbare und messbare Reise anzutreten. Wir fügen uns in Ihr Vorhaben ein in der Rolle des trusted Advisors, des CISO-Beraters oder als interims-CISO. Unsere erfahrenen Cybersecurity-Architekten bewegen sich sowohl auf der Ebene von Compliance-Frameworks und Datenschutzvorgaben aber auch auf der technologischen Ebene. Das bedeutet für Sie: unsere Reifegradanalysen, aber auch Handlungsempfehlungen sind nicht high-level und unscharf, sondern ganz konkret mit klaren Hinweisen an welcher Stelle Lücken im Security-Big-Picture bestehen und welche technischen Lösungsansätze zur Verfügung stehen. Auf Wunsch des Kunden stehen unsere Experten zur Verfügung diese Handlungsempfehlungen umzusetzen im Rahmen der anstehenden Projekte. Speziell im Bereich „Information Protection“ unterstützen unsere Experten Sie bei der Entwicklung und Implementierung eine Strategie zum Schutz von Informationen, welche an Ihren geschäftlichen Anforderungen ausgerichtet ist. Wir begleiten Sie von dem ersten Entwurf unternehmensorientierter Richtlinien bis hin zur Implementierung einer technischen Lösung, die sich in die moderne Arbeitswelt vollständig integriert. Die Experten der PlanB. setzen dabei auf die Cloud basierte Lösung von Microsoft Pureview Information Protection, um sensible Informationen zu erkennen, zu klassifizieren, zu schützen und zu verwalten, wo auch immer sie sich befinden oder transportiert werden. Dies umfasst neben den klassischen Office-Daten auch sensible Daten aus ihrem Konstruktionsbereich. ", link: null },
        { id: 1, title: "Identity & Access Management", headline: 'Identity & Access Management', image: "/images/slider/cyber-security/identity.png", text: "Die digitale Transformation verändert grundlegend die Art und Weise, wie, von wo und womit Mitarbeiter arbeiten und auf Unternehmensinformationen zugreifen. Single-Sign-On, Federations und die Integration von Cloud und on-premises Anwendungen zur Steigerung der Produktivität ihrer Mitarbeiter, sind dabei genauso wichtig, wie die Tatsache, jederzeit aussagekräftig zu sein welcher Mitarbeiter auf welche IT-Systeme und Daten zugreifen kann. Mitarbeiter haben die Erwartungshaltung schnell und einfach zusätzliche Zugriffe auf Daten und Anwendungen zu erhalten und diesen auch selbst verwalten zu können. Im Zeitalter der Cloud ergeben sich viele Logins an einer Vielzahl von Anwendungen, von unterschiedlichen Benutzern und von unterschiedlichen Geräten. Stets mit dem Ziel auf Daten zuzugreifen, welche idealerweise klassifiziert und verschlüsselt sind. Was für den End User wiederum eine Authentifizierung bedeutet. Beabsichtigter oder unbeabsichtigter Missbrauch von Berechtigungen und im schlimmsten Fall gehackte Benutzerkonten müssen schnell erkannt und die daraus resultierenden Vorfälle aktiv nachverfolgt und behandelt werden. Die digitale Identität und die zugehörigen Berechtigungen werden zum neuen Perimeter und benötigen ausreichenden Schutz. Eine digitale Identität stellt dabei nicht nur einen Mitarbeiter ihres Unternehmens dar, sondern kann auch ein Partner, Dienstleister oder sogar ihr Endkunde sein. Zusätzlich stellen aber auch IoT Devices eine digitale Identität dar und müssen entsprechend verwaltet und überwacht werden. Jeder Art von Identität erfordert eine eigene Verwaltung und hat einen eigenen Schutzbedarf. Ob Mitarbeiter, Administrator oder IoT Device - die PlanB. verfolgt immer den Ansatz von „least privilege“ und „zero standing access“. Die Transformation ihrer IT zu einem vollständigen Zero Trust Modell ist ohne eine automatisierte Verwaltung und regelmäßige und durch Machine Learning unterstützte Überprüfung ihrer Identitäten nur sehr schwer möglich. Getreu dem Motto „Vertrauen ist gut, Kontrolle und Sichtbarkeit ist besser!“ Die Experten der PlanB. unterstützen sie im Bereich Identity & Access Management auf dem Weg vom Wunsch zur Realität. Generell setzen wir auf moderne Cloudtechnologien – sowohl bei Eigenentwicklungen im Bereich Identity & Access aber auch bei Partnerlösungen. Hier setzt die PlanB. auf die Lösungen von Omada und Thales.", link: null },
        { id: 2, title: "Cloud Infrastructure", headline: 'Cloud Infrastructure ', image: "/images/slider/cyber-security/cloud.jpeg", text: "Public Cloud Plattformen bieten ein enormes Maß neuer Möglichkeiten. Die Nutzung solcher Plattformen bringt aber auch viele Veränderungen, eine neue Komplexität und Risiken mit sich. Design- und Architekturgrundsätze sowie Denkweisen im Bereich des IT-Service Management sowie IT-Organisationen müssen sich verändern. Heute geht es vor allem um Geschwindigkeit, Skalierung, Sicherheit und Kosteneffizienz. Anwendungslandschaften verändern sich Richtung „Serverless“. Die Bereitstellung von IT-Ressourcen ist kurzfristig erforderlich bei gleichzeitiger Erfüllung umfangreicher Sicherheitsvorgaben. IT-Administratoren werden mit neuen Themen konfrontiert und haben vor allem noch die gewohnte on-premise Welt in ihrem Verantwortungsbereich. Alles in allem gibt es viele Gründe, warum Cloud-Projekte scheitern können. Und genau hier setzen wir an. Am Anfang steht die IT- und Cloud-Strategie. Ein klares Verständnis darüber, wie die Zukunft aussehen soll. Ihr ganz individueller Bauplan für die zukünftige IT-Infrastruktur sowie Applikationslandschaft und die Möglichkeit altbekannte Probleme zu lösen, sowohl technologische, aber auch organisatorische – Schritt für Schritt. Denken Sie zum Beispiel daran den Reifegrad ihrer Infrastruktur aber auch die operativen Prozesse durch Automatisierung deutlich zu erhöhen, was auch im Falle eines Cyberangriffs zu reduzierten Ausfallzeiten bzw. schnelleren Wiederherstellungszeiten führt. Oder die Umsetzung von IT-Projekten unter Anwendung moderner/agiler Methoden zur Optimierung der Projektergebnisse und Reduktion von Reibungsverlusten zwischen beteiligten Fachbereichen. Und dabei haben sie durch ein passendes Cost-Management jederzeit die Kosten sowie die Erfüllung von Complianceanforderungen im Blick. ", link: null },
    ];

    const arKeywords = ["Modern Workplace", "Power Platform", "Cloud", "Security", "Azure Arc", "Managed Services", "Microsoft 365"]

    return (
        <Layout>
            <Hero background="url(images/cs-hero.jpeg)" backgroundSize={"cover"} backgroundPosition={"top left"} backgroundColor="#0097CE">
                <Main maxW="full">
                    <Box mt={[10, null, null]} pt={[12, 20, 32]} pb={[12, 20, 32]}>
                        <Heading
                            maxW="full"
                            as="h1"
                            pb={[2, 4]}
                            fontSize={["24px", "36px", "54px", "60px"]}
                            textTransform="uppercase"
                            color="white"
                        >
                            Cybersecurity &amp;<br/>Cloud Infrastructure 
                        </Heading>
                        <Box w="100px" bg="white" h="6px" my="2" mb={[4, 6]}></Box>
                        <SegmentHeading opacity={1} title="Was wir beobachten…" />
                        <Text
                            pb={[2, 4, 6]}
                            maxW={[null, null, "full", "80%"]}
                            color="white"
                        >
                        Jeder Betroffene wird sich mit der Frage beschäftigen: warum kam es dazu und was sollte ich tun, um mich oder das Unternehmen besser vor Angriffen zu schützen?
                        Nach einem erfolgten Angriff stehen jedoch andere zeitliche und monetäre Herausforderungen im Vordergrund. 
                        Zeit und Geld welches besser vorher investiert wird, um das für sich passende Security Big-Picture zu finden und umzusetzen. 
                        Dazu zählen Themen wie die Security-Roadmap, die organisatorischen und prozessualen Inhalte sowie die zugehörige technologische Architektur. 
                        Und genau hier liegt die Expertise des PlanB.-Cybersecurity Teams.  
                        </Text>
                        <Arrowlink label="Zum Portfolio" url="#portfolio" />
                    </Box>
                </Main>
            </Hero>

            <Box pos="relative" as="section" p={[4, 12, 24]} bgImage={"url(images/thumbnail.jpeg)"} backgroundSize="cover" backgroundPosition="center">
                <Box pos="relative" maxW="full" pb="100">
                    <SegmentHeading title="Wie verstehen wir die aktuelle Situation…" />
                    <Text>
                        Wir sind der Überzeugung, dass ein Flickenteppich von Sicherheitsprodukten und eine lückenhafte IT- und Prozessarchitektur den heutigen Bedrohungen nicht mehr standhält und am Ende auch nicht wirtschaftlich ist. 
                        Security, Infrastrukturdesign und Anwendungsentwicklung können heutzutage nicht mehr getrennt betrachtet werden. 
                        Security by Default und vor allem ein ganzheitlicher Ansatz ist unsere Designrichtlinie in allen Projekten. 
                    </Text>
                </Box>
                <Box pos="relative" maxW="full" pb="100">
                    <SegmentHeading title="Wie gehen wir vor…" />
                    <Text>
                        Oberstes Ziel ist die Reduktion von Risiken durch Prävention plus die Früherkennung von Anomalien und Angriffen, sowie ein klares Verständnis darüber was im Falle eines Falles zu tun ist. 
                        Das bedeutet eine für den Kunden maßgeschneiderte Lösung - unter Anwendung bewährter Standards und vollständig integrierbarer technologischer Lösungskomponenten. 
                        Ziel ist ein ganzheitliches organisatorisches und technologisches Konzept, welches alle modernen Aspekte berücksichtigt. 
                        Primär bedienen wir uns aus dem Microsoft Cloud Lösungsbaukasten sowie auserwählter Third-Party Systeme. 
                        Im Bereich der Methodik setzt die PlanB. auf bewährte Standards und jahrelange Projekterfahrung. 
                        Dazu zählen neben Zero-Trust Ansätzen natürlich auch agile Vorgehensweisen und die Anwendung etablierter (Compliance)Frameworks, wie beispielsweise NIST, CIS und das Microsoft Cloud Adoption Framework. 
                        
                        Neben dem Schutz ihrer Unternehmenswerte, ob Mitarbeiter, IT-Systeme oder Daten achten wir darauf den Workload der oft ohnehin überlasteten IT-Teams nicht zu erhöhen, sondern durch die Anwendung technologischer Lösungen den Aufwand in der Betriebsführung zu reduzieren bei gleichzeitiger Erhöhung der Effektivität. 
                    </Text>
                </Box>
            </Box>

            {/* Slider */}
            <Box id="portfolio">
                <Slider paddingDisabled={true} backgroundColor="#FF5100" label="Portfolio" sliderItems={sliderItems} />
            </Box>

            <Box pos="relative" as="section" px={[4, 12, 24]} backgroundSize="cover" backgroundPosition="center">
                <Box pos="relative" maxW="full" pb="100">
                    <SegmentHeading title="Microsoft FastTrack" />
                    <Text pb={[4, 8]}>
                        FastTrack ist ein kostenloser Service von Microsoft, der berechtigten Kunden bei der Bereitstellung von Microsoft Cloud-Lösungen unterstützt und die Benutzerakzeptanz fördert.<br/>
                        Als einer von wenigen Microsoft FastTrack Ready Partner in Deutschland sind wir bei PlanB. berechtigt die Vorteile des Programms an unsere Kunden weiterzugeben.
                    </Text>
                    <Arrowlink label="Weitere Informationen" url="https://www.landing.planb.net/de-fasttrack" />
                </Box>
            </Box>

            <About />
        </Layout>
    );
}