import { Center, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <header>
      <Center bg='tomato' h='100px' color='white'>
        <Heading as="h1">Eriks Briedis</Heading>
      </Center>
    </header>
  )
} 

export default Header;