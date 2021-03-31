// Layout component defines the outer box including header to be used in every page.

import NextHead from "next/head";
import Footer from "@components/footer/footer"
import { Box } from "@chakra-ui/react";

const defaultTitle = 'PlanB. - Experten für Modern Work und Software';

export default function Layout({ children, title }) {

  if(title != defaultTitle) {
    title = title + " - PlanB."
  }
  return (
    <Box as="main">
      <NextHead>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content={title}/>
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
          data-domain="planb-website.vercel.app" // ToDo: Add final domain here later, update Analytics
          src="https://plausible.io/js/plausible.js" // ToDo: Host on custom CNAME
        />
      )}
    </Box>
  );
}
Layout.defaultProps = {
  title: defaultTitle,
};