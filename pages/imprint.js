import Layout from "@components/layout";
import Header from "@components/header/header";
import { Basicpage } from "@components/content/content";

import { Container } from "@chakra-ui/react";

export default function Home() {
    return (
        <Layout>
            <Header />
            <Basicpage title="Impressum & Datenschutz">
                <p>Anbieter im Sinne des §5 TMG:​</p>
                <p>
                    <strong>PlanB. GmbH</strong> <br />
                    Kocherstrasse 15 <br />
                    73460 Huettlingen <br />
                    info@plan-b-gmbh.com
                    <br />
                </p>
                <p>
                    Geschäftsführer:
                    <br /> Tobias Schmailzl, Ralph Sturm
                </p>
                <p>
                    Vertretungsberechtigte:
                    <br /> Tobias Schmailzl, Ralph Sturm
                </p>
                <p>
                    Registergericht Ulm HRB 720355 <br />
                    Sitz der Gesellschaft ist Hüttlingen
                    <br />
                    Ust.ID DE250875731
                </p>

                <p>
                    Datenschutzbeauftragter: HANAK-Datenschutz <br />
                    info@hanak-datenschutz.de <br />
                    Tel.: +49 (0) 7161 - 354 026 2
                </p>

            </Basicpage>
        </Layout>
    );
}
