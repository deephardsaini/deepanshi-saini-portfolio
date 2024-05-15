"use client";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import { Link } from "react-scroll";
import GreenButton from "../Ui/GreenButton/GreenButton";

const Links = ["Home","About", "Skills","Projects","Contact Us"];

const NavLink = (props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("glass-bg-2", "red.900")}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"center"}
          position={"fixed"}
          width={"100%"}
          top={"0"}
          zIndex={99999}
          bg={
            "rgba(72, 70, 98, .4)"
          } /* Fallback background color for browsers that don't support backdrop-filter */
          backdropFilter={
            "blur(10px)"
          } /* Apply blur effect to create the glass background */
          color={"white"}
          background={"rgba(72, 70, 98, .4)"}
          box-shadow={"0 8px 32px 0 rgba(31, 38, 135, .37)"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={10} alignItems={"center"} justifyContent={"center"}>
            
            <HStack
              as={"nav"}
              spacing={10}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <Link 
                  smooth={true}
                  duration={500}
                  offset={0}
                  to={link}
                  key={link}
                  color="white"
                >
                  {link}
                </Link>
              ))}
              
            </HStack>
            <GreenButton>Resume</GreenButton>
          </HStack>
          {/* <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
            </Menu>
          </Flex> */}
        </Flex>

        {isOpen ? (
          <Box  background={"rgba(72, 70, 98, .4)"}
          box-shadow={"0 8px 32px 0 rgba(31, 38, 135, .37)"} py={4} display={{ md: "none" } }>
            <Stack as={"nav"} spacing={4} color="white" padding={"20px"} >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
