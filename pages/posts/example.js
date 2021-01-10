import Layout from "@components/layout"
import Content from "@components/content/content"
import Posthead from "@components/posthead/posthead"
import Postmeta from "@components/postmeta/postmeta"
import About from "@components/about/about"
import {Gradient} from "@components/blocks/blocks"

import { Container,Center, Link } from "@chakra-ui/react";


export default function Example() {
  return (
    <Layout>
        <Posthead 
        title="Entwicklerfreundliche Blogs einfach mit NextJS und dem modernen JAMSTACK in Rekordzeit entwickeln."
        published="2020-02-31"
        />
        <Container maxW="40em" pt={[4, 6]} pb={[4, 6]}>
        <Content>
       <p>Tausende Links und tolle Blogartikel sieht man jeden Tag auf LinkedIn und Co. Einige sind Müll, einige kann man durchaus lesen und andere sind einfach großartig. Und manchmal sind die Informationen und Gedanken so fundiert, dass man sich wiederholt an Sie erinnert.</p>
<p>Egal ob ich mit <em>euen Gründern</em>n rede oder wenn ich meinem vergangenen Ich eine Empfehlung geben könnte. Diese klugen Gedanken haben mir geholfen.</p>
<p><img 
src="/images/portrait.jpg" 
alt="Bild mit Büchern"
/></p>
<h2>Business Plan</h2>
<p>Den Business-Plan schreibst du für dich selbst - und erst danach für Banken, Investoren und deinem zukünftigen Team. Eine gute Outline für einen solchen Plan findet sich bei dem etablierte, großen Venture-Fond Sequoia Capital. Wer diese 10 Fragen ehrlich und tiefgehend beantwortet entdeckt ganz neue Perspektiven. Bonus wenn man dies dann noch jeweils in 2-3 Sätzen beantworten kann.</p>
<p><a href="https://www.sequoiacap.com/article/writing-a-business-plan/">Writing a Business Plan, Sequioa Capital</a></p>
<h2>Challenger Sales</h2>
<p>Der beste Weg zu Verkaufen, ist es den Kunden etwas neues beizubringen. Dies ist der Kern hinter dem Challenger-Sales-Model was etablierte Unternehmen und Startups gerne einsetzen. Mit der Frage "Was wäre wenn..." öffnen sich im Gespräch mit Interessenten viele Türen.</p>
<p><a href="https://www.amazon.de/Challenger-Sale-Control-Customer-Conversation/dp/0670922854">Challenger Sales Buch auf Amazon bestellen</a></p>
<h2>Entrepid Sales Process</h2>
<p>Es gibt <strong>viele</strong> Wege seine Sales-Pipeline zu strukturieren. Bei Conclurer hat die Methode von Entrepid-Partners funktioniert. Hier werden die richtigen Fragen im richtigen Moment gestellt und man kann bessere "Proposal" für seine Interessenten gestalten. Die Schwierigkeit welche entsteht ist, dass potentielle Kunden immer schnell eine Lösung sehen wollen während wir als Verkäufer zunächst den Kunden verstehen möchten. Hier ist die Balance schwer.</p>
<p><a href="https://www.entrepidpartners.com/how-to-sell-guide">How to Sell Guide Herunterladen</a></p>
<p>Bonus: <a href="https://www.entrepidpartners.com/blog/successful-trials-and-pilots">Ein guter Leidfaden für Pilotprojekte und Erwartungen</a></p>
<h2>Ask: Habe ich Traction bei Kunden?</h2>
<p>Das ist ein Test für Listen</p>
<ul>
  <li>Something awesome</li>
  <li>Even more awesome</li>
  <li>Greater than Donnie</li>
  <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </li>
  <li>OK I'll stop now</li>
</ul>
<p>Robin Dechant von Point Nine Capital hat eine sehr kompakte aber treffende Analyse bzw. Katalog an Fragen ob man wirklich die richtigen Kunden gefunden hat. Dies ist besonders im B2B-Industrie-Umfeld wichtig da hier die Mischung aus Interesse, Pilotkunden und Innovationsjägern nicht transparent ist</p>
<p><a href="https://medium.com/point-nine-news/selling-to-large-enterprises-do-your-early-customers-have-what-it-takes-ea8e22138d9d">Selling to Large Enterprises Blogpost</a></p>
<h2>Feature Factory</h2>
<p>Some more examples</p>
<blockquote>
  Das ist wirklich wunderbar gelöst und programmiert. Good Job.
</blockquote>
<p>Ein Dark-Pattern das sich schnell ausbreitet ist die "Feature-Factory". Natürlich ist es wichtig die Anforderungen von Kunden zu verstehen und umzusetzen. Man muss dann jedoch auch den "Impact" messen und sich der Konsequenz der Komplexität für die gesamte Lösung bewusst sein. Ansonsten baut man nur Funktion, nach Funktion den neue Ideen in Meetings gibt es immer.</p>
<p><a href="https://cutle.fish/blog/12-signs-youre-working-in-a-feature-factory">Signs you're working in a Feature Factory</a></p>
<p>Die Lösung dafür kann beispielse die "Northstar"-Methode sein:</p>
<p><a href="https://amplitude.com/north-star">Eine Kennzahl fürs Produkt, der Northstart</a></p>
<h2>The power of 1%</h2>
<p>Zum Abschluss ein Gedanke vom Shopify-Gründer: Werde einfach jeden Tag 1% besser als zuvor. Das Ergebnis wird dich erstaunen.</p>
<p><a href="https://markmacleod.me/the-power-of-getting-1-better-daily/">Zum Blogpost</a></p>

        </Content>
        </Container>
        <Container maxW="44em" pt={[4, 6]} pb={[4, 6]}>
          <Postmeta 
            author="authorobjecttodo"
            recommended="object with links and titles"
          />
          <Center pt={[4,6]}>
            <Link color="gray.500" href="#linkedinsharetodo">Auf LinkedIn teilen</Link>
          </Center>
        </Container>
        <Gradient>
            <About/>
        </Gradient>
       
    </Layout>
  )
}
