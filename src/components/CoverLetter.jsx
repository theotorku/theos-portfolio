import React from 'react'
import { Box, Heading, Text, VStack } from '@chakra-ui/react'

const CoverLetter = () => (
  <Box maxW="3xl" mx="auto" mt={10} p={8} bg="white" _dark={{ bg: 'gray.800' }} borderRadius="lg" boxShadow="md">
    <VStack align="start" spacing={4}>
      <Heading as="h2" size="lg" color="blue.700" _dark={{ color: 'blue.300' }}>
        Cover Letter
      </Heading>
      <Text>
        Dear Hiring Manager,
      </Text>
      <Text>

I bring to the table a unique blend of analytical precision, hands-on development, and operational strategy—all backed by a drive to build scalable solutions that empower decision-makers. I am writing to express my interest in an opportunity within your organization. With a background in professional environments and a strong drive to contribute meaningfully, I am eager to bring my skills, experience, and dedication to a role where I can add value and grow.

In my previous positions, I have developed and applied a variety of transferable skills including communication, problem-solving, collaboration, and adaptability. I take pride in delivering high-quality work, learning quickly, and maintaining a positive, solutions-oriented mindset. I am confident that my work ethic and commitment make me a strong candidate for a range of roles.

I am particularly interested in working in an environment that values growth, innovation, and integrity. I’m motivated by the opportunity to contribute to meaningful goals while continuing to develop professionally.

Thank you for your time and consideration. I would welcome the opportunity to speak further and learn how I can contribute to your team. I am available at your convenience and look forward to connecting.


      </Text>
      <Text>
        Sincerely,<br />
        Theophilus C. Torku <br />
        469-858-6013 
      </Text>
    </VStack>
  </Box>
)

export default CoverLetter