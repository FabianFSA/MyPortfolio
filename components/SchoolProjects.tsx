import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react'
import type { BoxProps } from '@chakra-ui/react'
import React from 'react'

const Feature: React.FC<
  { title: string; desc: string; usedTechnologies: string } & BoxProps // eslint-disable-line @typescript-eslint/member-delimiter-style,@typescript-eslint/indent
> = ({ title, desc, usedTechnologies, ...rest }) => (
  <Box p={5} shadow="md" borderWidth="1px" maxW="600px" {...rest}>
    <Heading fontSize="xl">{title}</Heading>
    <Text mt={4}>{desc}</Text>
    <Heading mt={4} fontSize="xl">
      Used Technologies and Frameworks
    </Heading>
    <Text mt={4}>{usedTechnologies}</Text>
  </Box>
)

const SchoolProjects: React.FC = () => {
  return (
    <Box textAlign="center" width="100%" p={5}>
      <Heading mb={5}>Projects @ Hochschule Karlsruhe</Heading>
      <SimpleGrid minChildWidth="600px" spacing={10}>
        <Feature
          title="GraphQL/Restful API"
          desc="To learn how apis are working, we build a client and server application to learn on it. We learn witch frameworks are common and how to use them. We also learned about the Domain Driven Design and how to implement it in our application."
          usedTechnologies="Java 20, Spring Framework, PostgreSQL, Docker & Kubernetes"
        />
        <Feature
          title="Android App"
          desc="To learn the process from a business idea to the product. We develop our business idea to an android app. Our idea was a easy refund Deutsche Bahn ticket system. In this case we develop an android prototype application."
          usedTechnologies="Kotlin & RoomDatabase"
        />
        <Feature
          title="React Web App"
          desc="The GraphQL/Rest API from the previous semester should now be made available to end users with a suitable front end. For this purpose, the project was translated into JavaScript/TypeScript and supplemented, e.g. with a Jenkins pipeline or GitHub actions."
          usedTechnologies="JavaScript/TypeScript, Nest.js, Next.js with Chakra UI"
        />
        <Feature
          title="HKA APP"
          desc="Maintaining the IOS Campus App, more in the future"
          usedTechnologies="Swift"
        />
        <Feature
          title="ESG Web-Crawler"
          desc="Build an Web-Crawler for a company that collect a bunch of different ESG Reports to document their co2 footprint an compare to other companies"
          usedTechnologies="In Progress"
        />
      </SimpleGrid>
    </Box>
  )
}

export default SchoolProjects
