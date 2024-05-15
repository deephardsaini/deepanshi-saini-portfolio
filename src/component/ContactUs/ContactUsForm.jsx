'use client'

import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react'
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md'
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs'

import { FaLinkedin } from "react-icons/fa";
import GreenButton from '../Ui/GreenButton/GreenButton';

export default function ContactUsForm() {
  return (
    <Container bg={'rgba(72, 70, 98, .4)'} maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg={'rgba(72, 70, 98, .4)'}
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 10, sm: 2, md: 4, lg: 10 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="White">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="220px"
                        variant="ghost"
                        color="#DCE2FF"
                        paddingRight="83px"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdPhone color="White" size="20px" />}>
                        +91-790xxxx
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="220px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdEmail color="White" size="20px" />}>
                        deep.98saini@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="220px"
                        variant="ghost"
                        color="#DCE2FF"
                        paddingRight="83px"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdLocationOn color="White" size="20px" />}>
                        Haridwar, India
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start">
                    {/* <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: 'white' }}
                      icon={<MdFacebook size="28px" />}
                    /> */}
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      color={('#fff')}
                      _hover={{ bg: '#000' }}
                      icon={<BsGithub size="28px" />}
                      onClick={() => window.open("https://github.com/dashboard")}
                    />

                    <IconButton
                      aria-label="linkedin"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      color="#fff"
                      _hover={{ bg: "#0e76a8" }}
                      icon={<FaLinkedin size="28px" />}
                      onClick={() => window.open("https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit")}
                    />

                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="{'rgba(72, 70, 98, .4)'}" borderRadius="lg">
                  <Box m={8} color="#fff">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <BsPerson color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <MdOutlineEmail color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                      <GreenButton><a href="#">Contact Me</a></GreenButton>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  )
}