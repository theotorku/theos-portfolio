import React from 'react'
import { Box, Heading, Text, VStack } from '@chakra-ui/react'

const experiences = [
  {
    title: 'Warehouse Associate – WorldPac',
    location: 'Lewisville, TX',
    duration: 'March 2024 – March 2025',
    details: [
      'Picking and packaging parts for delivery while maintaining speed and accuracy',
      'Ensuring the accuracy of parts picked for delivery by verifying against order lists.',
      'Addressing concerns and requests from Sales Associates and Delivery drivers.',
      'Daily Replenishment of bins from received shipments using RF scanner.',
      'Receiving and processing returned parts inside or using Cash Management software.'
    ]
  },
  {
    title: 'Data Analyst / Power BI Developer – Code Analytics',
    location: 'Plano, TX',
    duration: 'July 2022 – August 2024',
    details: [
      'Developed interactive Power BI dashboards for governance metrics.',
      'Built KPIs and DAX measures to enhance decision-making processes.',
      'Integrated multiple data sources to ensure data quality and compliance.',
      'Built, published, and customized interactive reports and dashboards, and managed report scheduling using Microsoft Fabric.'
    ]
  },
  {
    title: 'Data Analyst / Data Steward – Inogen',
    location: 'Plano, TX',
    duration: 'September 2020 – April 2022',
    details: [
      'Managed ETL pipelines using SSIS and SQL for accurate reporting.',
      'performed data validation and cleansing to ensure data integrity.',
      'performed data modeling and created complex SQL queries for data extraction.',
      'As Data Steward, ensured data quality and compliance with governance standards.',
      'Reduced data inconsistencies by 30% with Power BI dashboards.'
    ]
  },
  {
    title: 'Report Developer / BI Analyst – Nordyne Inc',
    location: 'Poplar Bluff, MO',
    duration: 'September 2009 – September 2014',
    details: [
      'Built and scheduled Tableau dashboards and SSRS reports.',
      'Collaborated with stakeholders to translate requirements into BI solutions.'
    ]
  },
  {
    title: 'Business Analyst – CSIR Ghana',
    location: 'Accra, Ghana',
    duration: 'August 2008 – August 2009',
    details: [
      'Gathered project requirements and developed dashboards.',
      'Led stakeholder meetings and managed functional documentation.'
    ]
  }
]

const Experience = () => {
  return (
    <Box>
      <Heading as="h2" size="lg" mb={4}>Experience</Heading>
      <VStack spacing={6} align="stretch">
        {experiences.map((exp, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="lg">
            <Heading as="h3" size="md">{exp.title}</Heading>
            <Text fontSize="sm" color="gray.500">
              {exp.location} | {exp.duration}
            </Text>
            <VStack mt={2} spacing={1} align="stretch">
              {exp.details.map((item, idx) => (
                <Text key={idx}>• {item}</Text>
              ))}
            </VStack>
          </Box>
        ))}
      </VStack>
    </Box>
  )
}

export default Experience
