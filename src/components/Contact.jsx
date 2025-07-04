import React from 'react'
import { Box, Heading, Text, Link, VStack } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'

const Contact = () => {
  return (
    <Box
      mt={10}
      mb={0}
      px={{ base: 4, md: 16 }}
      pb={12}
    >
      <Heading as="h2" size="lg" mb={4}>
        Contact
      </Heading>
      <VStack spacing={3} align="start">
        <Text>
          <EmailIcon mr={2} />
          <Link color="teal.500" href="mailto:theotorku1983@gmail.com">
            theotorku1983@gmail.com
          </Link>
        </Text>
        <Text>
          <Link color="teal.500" href="https://github.com/theotorku/financial-metrics" isExternal>
            GitHub: github.com/theotorku/financial-metrics
          </Link>
        </Text>
      </VStack>
    </Box>
  )
}

export default Contact