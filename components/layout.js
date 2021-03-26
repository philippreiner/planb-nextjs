// Layout component defines the outer box including header to be used in every page.

import NextHead from "next/head";
import Footer from "@components/footer/footer"
import { Box } from "@chakra-ui/react";

export default function Layout({ children, title }) {
  return (
    <Box as="main">
      <NextHead>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="Description" content="PlanB. Blog rund um Technologie und Software"/>

        <meta property="og:title" content="PlanB. Blog"/>
        <meta name="author" content="PlanB. GmbH"/>
        <link rel="preload" href="/assets/fonts/montserrat-v15-latin-800.woff2" as="font" type="font/woff2"></link>
        <link rel="preload" href="/assets/fonts/montserrat-v15-latin-800.woff" as="font" type="font/woff"></link>
      </NextHead>

      {children}

      <Footer />

      {process.env.NODE_ENV === "production" && (
        <script
          async
          defer
          data-domain="planb-nextjs.vercel.app" // ToDo: Add final domain here later, update Analytics
          src="https://plausible.io/js/plausible.js" // ToDo: Host on custom CNAME
        />
      )}
    </Box>
  );
}
Layout.defaultProps = {
  title: "PlanB.",
};