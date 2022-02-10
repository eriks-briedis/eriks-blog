import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout"

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default App;