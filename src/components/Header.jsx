import React, { useRef, useState } from 'react'
import {
  Box,
  Flex,
  Heading,
  Text,
  IconButton,
  Spacer,
  Avatar,
  useColorMode,
  Link,
  VStack,
  Tooltip,
} from '@chakra-ui/react'
import { SunIcon, MoonIcon, EmailIcon } from '@chakra-ui/icons'
import { Link as RouterLink } from 'react-router-dom'

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const [avatar, setAvatar] = useState(null)
  const inputRef = useRef(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (ev) => setAvatar(ev.target.result)
      reader.readAsDataURL(file)
    }
  }

  // Use a static image URL (place your image in /public or use an external link)
  const avatarUrl = '/avatar.jpg' // Place avatar.jpg in your public folder

  return (
    <Box
      bgGradient="linear(to-r, blue.700, blue.400)"
      color="white"
      py={10}
      px={{ base: 4, md: 12 }}
      mb={10}
      borderRadius="lg"
      boxShadow="lg"
    >
      <Flex alignItems="center" gap={6} flexWrap="wrap">
        <Box position="relative">
          <Avatar
            size="2xl"
            name="Theophilus C. Torku"
            src="/avatar.jpg" // Relative path from the public folder root
            bg="white"
            color="blue.700"
            border="3px solid"
            borderColor="whiteAlpha.800"
            boxShadow="md"
          />
        </Box>
        <Box>
          <Heading as="h1" size="xl" letterSpacing="tight">
            Theophilus C. Torku
          </Heading>
          <Text fontSize="lg" fontWeight="medium" mt={1}>
            Business Intelligence &amp; Power BI Developer
          </Text>
          <VStack align="start" spacing={1} mt={3}>
            <Text fontSize="md">
              <EmailIcon mr={2} />
              <Link color="teal.200" href="mailto:theotorku1983@gmail.com">
                theotorku1983@gmail.com
              </Link>
            </Text>
            <Text fontSize="md">
              <Link as={RouterLink} color="teal.200" to="/cover-letter">
                📄 View Cover Letter
              </Link>
            </Text>
          </VStack>
        </Box>
        <Spacer />
        <IconButton
          aria-label="Toggle theme"
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          variant="ghost"
          colorScheme="whiteAlpha"
          fontSize="xl"
          size="lg"
        />
      </Flex>
    </Box>
  )
}

export default Header
