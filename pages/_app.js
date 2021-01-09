import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"

/* Customize Chakra Theming */
const theme = extendTheme({
  useSystemColorMode: true,
  initialColorMode: "light",
  colors: {
    primary:"#FF5100",
    brand: 
    {
      50: '#f3edeb',
      100: '#ffcaaf',
      200: '#ffa77e',
      300: '#ff854c',
      400: '#ff621a',
      500: '#e64900',
      600: '#b43800',
      700: '#812800',
      800: '#4f1600',
      900: '#210400',
    },
    gray: 
    {
      50: '#f2f2f2',
      100: '#d9d9d9',
      200: '#bfbfbf',
      300: '#a6a6a6',
      400: '#8c8c8c',
      500: '#737373',
      600: '#595959',
      700: '#404040',
      800: '#262626',
      900: '#0d0d0d',
    }
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
    md: "17px",

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
