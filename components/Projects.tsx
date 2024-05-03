import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react'
import type { BoxProps } from '@chakra-ui/react'
import React from 'react'

const Feature: React.FC<
  { title: string; desc: string; usedTechnologies: string } & BoxProps // eslint-disable-line @typescript-eslint/member-delimiter-style,@typescript-eslint/indent
> = ({ title, desc, usedTechnologies, ...rest }) => (
  <Box p={5} shadow="md" borderWidth="1px" maxW="600px" minH="300px" {...rest}>
    <Heading fontSize="xl">{title}</Heading>
    <Text mt={4}>{desc}</Text>
    <Heading mt={4} fontSize="xl">
      Used Technologies and Frameworks
    </Heading>
    <Text mt={4}>{usedTechnologies}</Text>
  </Box>
)

const Projects: React.FC = () => {
  return (
    <Box textAlign="center" width="100%" mb={10} p={5}>
      <Heading mb={5}>Projects @ Objektkultur</Heading>
      <SimpleGrid minChildWidth="600px" spacing={10}>
        <Feature
          title="RestFul App Api"
          desc="There was a given API for a timebooking web application. The project target was to create a new RestFul Api for a mobile app. This API was used for mobile timebooking, skill management and vacation management."
          usedTechnologies="C#, RestFul, Open API, Swagger"
        />
        <Feature
          title="Change PDF Generator
          "
          desc="The PDF generator-modul was deprecated. The support of this PDF generator will be end at the end of the year 2024. My Task was to find a proper new PDF generator. After a research we choose QuestPDF. The implementation of the new QuestPDF PDF generator was simply and quick."
          usedTechnologies="C#, QuestPDF"
        />
        <Feature
          title="Service Instruction Service with Power Platform"
          desc="Customer wanted send some service instruction to his employees with a approvel. This has been relaized with the Power Platform suite from Microsoft including Power Automate and Power App."
          usedTechnologies="Power Apps, Power Automate Flow, Dataverse"
        />
        <Feature
          title="CRM Sync (Project as Intern)"
          desc="The client is internationally active and is pursuing a digitalisation offensive to standardise its processes and make them scalable. The client recently replaced its previous CRM system with Dynamics 365. The customer data is composed of different data sources. In addition, different data was more relevant than others for each country. Another team prepared the data from the data sources and sent it uniformly via an Azure Service Bus. The team I supported had the task of synchronising this data into Dynamics 365, among other things. I was significantly involved in the development of the Azure function that was responsible for this."
          usedTechnologies="Power Apps, Azure Function, Dynamics 365, JavaScript, TypeScript, C#"
        />
        <Feature
          title="New Exhibitioner Portal"
          desc="A big german fair want a new exhibitioner portal overhaul. Ans specially for specific fairs they want separate portals. I was involved in the development of the booth request system. This was realised by logic apps. I was also involved in the process of creating a monitoring concept for the whole project. But just in early beginning phase."
          usedTechnologies="ogic Apps, Azure Functions, Dynamics 365"
        />
      </SimpleGrid>
    </Box>
  )
}

export default Projects
