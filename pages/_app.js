import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"

/* Customize Chakra Theming */
const theme = extendTheme({
  colors: {
    primary: "#FF5100"
  },
  fonts: {
    body: "-apple-system, system-ui,'Segoe UI', 'Roboto', sans-serif", /* Use the System for most text */
    heading: "'Montserrat', sans-serif",
    mono: "'Menlo', monospace",
  },  
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 800,
  },
  fontSizes: {
    md: "17px"
  }
})

function App({ Component, pageProps }) {
  return (
    <>
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
    </>
  )
}

export default App
