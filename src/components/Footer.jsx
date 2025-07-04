import React from 'react'
import { Box, Text, useColorModeValue } from '@chakra-ui/react'

const Footer = () => {
  const bg = useColorModeValue('gray.200', 'gray.700')
  return (
    <Box bg={bg} py={4} textAlign="center">
      <Text fontSize="sm">© 2025 Theophilus C. Torku. All rights reserved.</Text>
    </Box>
  )
}

export default Footer
