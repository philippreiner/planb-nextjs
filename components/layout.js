// Layout component defines the outer box including header to be used in every page.

import NextHead from "next/head";
import Footer from "@components/footer/footer"
import { Box } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Box as="main">
      <NextHead>
        <title>PlanB Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="Description" content="PlanB. Blog rund um Technologie und Software">

        <meta property="og:title" content="PlanB Blog"/>
        <meta name="author" content="PlanB. GmbH"/>
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
