import { HStack, VStack } from "@chakra-ui/react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>2022</footer>
    </>
  )
}

export default Layout;