import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"

/* Customize Chakra Theming */
const theme = extendTheme({
    useSystemColorMode: false,
    colors: {
        primary: "#FF5100",
        secondary: "#0097CE",
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
            700: '#1E1E1E',
            800: '#0d0d0d',
            900: '#0d0d0d',
        }
    },
    fonts: {
        body: "'Roboto', sans-serif",
        heading: "'Roboto', sans-serif",
        fat: "'Montserrat','Roboto',sans-serif",
        mono: "'Menlo', monospace",
    },
    fontWeights: {
        normal: 400,
        medium: 500,
        bold: 700,
        fat: 800
    },
    fontSizes: {
        md: "16px",

    },
    styles: {
        global: (props) => ({
            "html, body": {
                fontSize: "md",
            }
        })
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
