// Layout component defines the outer box including header to be used in every page.

import NextHead from "next/head";
import Footer from "@components/footer/footer"
import { Box } from "@chakra-ui/react";

const defaultTitle = 'PlanB. - Experten für Modern Work und Software';

export default function Layout({ children, title }) {

    if (title != defaultTitle) {
        title = title + " - PlanB."
    }
    return (
        <Box as="main">
            <NextHead>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />

                <meta property="og:title" content={title} />
                <meta name="author" content="PlanB. GmbH" />

                <meta property="og:url" content="http://planb.net" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="" />
                <meta property="og:image" content="https://planb.net/assets/planb-logo.png" />


                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content="" />
                <meta name="twitter:image" content="https://planb.net/assets/planb-logo.png" />

                <link rel="preload" href="/assets/fonts/montserrat-v15-latin-800.woff2" as="font" type="font/woff2"></link>
                <link rel="preload" href="/assets/fonts/montserrat-v15-latin-800.woff" as="font" type="font/woff"></link>
            </NextHead>

            {children}

            <Footer />
            <script
                async
                defer
                data-domain="www.planb.net"
                src="/js/p.js"
            />

        </Box>
    );
}
Layout.defaultProps = {
    title: defaultTitle,
};