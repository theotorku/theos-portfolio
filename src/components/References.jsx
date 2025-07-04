import React from 'react'
import {
  Box,
  Heading,
  Text,
  VStack,
  Avatar,
  HStack,
  Divider,
  Link,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const references = [
  {
    name: 'Gregory Asamoah',
    title: 'Data Governance/Data Quality Analyst/Metadata Management/Master Data/Reference Data/ODI/OBIEE/SSIS Developer at ECS',
    avatar: '/gregory.jpg', // Place gregory.jpg in your public folder
    quote:
      'Theophilus is a highly skilled BI developer with a keen eye for detail. His Power BI dashboards have transformed our reporting process.',
    contact: 'greg.marfo@gmail.com',
    link: 'https://www.linkedin.com/in/gregory-asamoah-603674136',
  },
  {
    name: 'Logan Bjorner',
    title: 'Business Operations Manager, WorldPac',
    avatar: '/logan.jpg', // Place logan.jpg in your public folder
    quote:
      'Working with Theophilus was a pleasure. He delivers on time and always exceeds expectations. Any team would be lucky to have him.',
    contact: 'loganrb@worldpac.com',
  },
]

const References = () => (
  <Box
    bg="white"
    _dark={{ bg: 'gray.800' }}
    borderRadius="lg"
    boxShadow="md"
    p={{ base: 4, md: 8 }}
    mt={10}
  >
    <Heading as="h2" size="lg" mb={6} color="blue.700" _dark={{ color: 'blue.300' }}>
      References
    </Heading>
    <VStack spacing={8} align="stretch">
      {references.map((ref, idx) => (
        <Box key={idx}>
          <HStack align="flex-start" spacing={4}>
            <Avatar name={ref.name} src={ref.avatar} size="lg" />
            <Box>
              <Text fontStyle="italic" mb={2}>"{ref.quote}"</Text>
              <Text fontWeight="bold">{ref.name}</Text>
              <Text fontSize="sm" color="gray.500">{ref.title}</Text>
              <Text fontSize="sm" color="gray.400">{ref.contact}</Text>
              {ref.link && (
                <Text fontSize="sm" mt={1}>
                  <Link href={ref.link} color="#0e76a8" isExternal>
                    LinkedIn <ExternalLinkIcon mx="2px" />
                  </Link>
                </Text>
              )}
            </Box>
          </HStack>
          {idx < references.length - 1 && <Divider my={4} />}
        </Box>
      ))}
    </VStack>
  </Box>
)

export default References