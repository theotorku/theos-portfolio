import React from 'react'
import { Box, Heading, Text, Link, VStack } from '@chakra-ui/react'

const projects = [
  {
    title: 'AI-Powered Lead Generator',
    description: 'An intelligent lead generation platform with LinkedIn prospecting, web scraping, and automated email outreach.',
    tech: 'Python, FastAPI, Supabase, Docker',
    github: '#'
  },
  {
    title: 'Financial Metrics Dashboard',
    description: 'This Power BI project visualizes key financial metrics from our latest data report, covering sales, profit margins, product breakdowns, and regional performance.',
    tech: 'Power BI, DAX, SQL',
    github: '#'
  },
  {
    title: 'Mobile Mechanic Service Platform',
    description: 'An enterprise-grade solution featuring real-time GPS tracking, secure payments, and predictive analytics.',
    tech: 'React, Node.js, Stripe, Kafka',
    github: '#'
  }
]

const Projects = () => {
  return (
    <Box>
      <Heading as="h2" size="lg" mb={4}>Projects</Heading>
      <VStack spacing={6} align="stretch">
        {projects.map((project, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="lg">
            <Heading as="h3" size="md">{project.title}</Heading>
            <Text mt={2}>{project.description}</Text>
            <Text mt={2} fontStyle="italic"><strong>Tech:</strong> {project.tech}</Text>
            <Link mt={2} color="teal.500" href={project.github} isExternal>
              View on GitHub
            </Link>
          </Box>
        ))}
      </VStack>
    </Box>
  )
}

export default Projects




