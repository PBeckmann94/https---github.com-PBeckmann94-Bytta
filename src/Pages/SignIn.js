import { useState } from 'react'
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  useColorModeValue
} from '@chakra-ui/react'
import { AtSignIcon, LockIcon } from '@chakra-ui/icons'

const CFaUserAlt = chakra(AtSignIcon)
const CFaLock = chakra(LockIcon)

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false)

  const handleShowClick = () => setShowPassword(!showPassword)

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.300"
      justifyContent="center"
      alignItems="center"
      bg={useColorModeValue('#dddddd', '#202023')}
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="blue.400" />
        <Heading>Velkommen</Heading>
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <form>
            <Stack
              spacing={4}
              p="2rem"
              backgroundColor={useColorModeValue('#ff0000', '#0000ff')}
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="email" placeholder="E-mail adresse" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Passord"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>Glemt passord?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="blue"
                width="full"
              >
                Logg Inn
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Ny Bruker?{' '}
        <Link color="blue.500" href="#">
          Lag bruker
        </Link>
      </Box>
    </Flex>
  )
}

export default Signin
