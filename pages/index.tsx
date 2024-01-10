import React from 'react'
import {
  Box,
  ChakraProvider,
  Container,
  Heading,
  Spacer,
  Text,
} from '@chakra-ui/react'

const homepage: React.FC = () => {
  return (
    <ChakraProvider>
      <Container>
        <Box>
          <Heading>Hi,</Heading>
          <Heading>I´m Fabian Sauer</Heading>
          <Text>
            I´m a business Informatics Student of the Hochschule Karlsruhe for
            Economic and Engineering
          </Text>
        </Box>
        <Box>
          <Text>
            I am in my 8th semester of Business Informatics. I am 27 years old
            and currently live in Offenbach an der Queich. My first contact with
            computer science was during my apprenticeship as an electronics
            technician for devices and systems in the German Army (Bundeswehr)
            as a civil person. My first informatic project was an Ohm calculator
            programmed in HTML. That stayed in my head for years. how much fun
            it was. Through the book 'Rich Dad Poor Dad' I became more involved
            with my own finances. This increased my interest in business topics
            immensely. So my choice was pretty clear
            Business Informatics!
            In my free time, I like to
            go hiking or tinker with my own website here. Maintaining social
            contacts should not be forgotten.
          </Text>
        </Box>
      </Container>
    </ChakraProvider>
  )
}

export default homepage
