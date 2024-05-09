"use client";

import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import CustomButton from "../CustomButton/CustomButton";

export default function ProjectCard({ img, head, des, stack,githubLink,liveLink}) {
  console.log("githubLink", githubLink)
  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "1100px" }}
        height={{ sm: "80px", md: "25rem" }}
        direction={{ base: "column", md: "row" }}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        background={"rgba(72, 70, 98, .4)"}
        boxShadow={"2xl"}
        padding={4}
      >
        <Flex flex={1.5} bg="blue.200">
          <Image objectFit="cover" boxSize="100%" Image src={img} alt="#" />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading
            fontSize={"2xl"}
            fontFamily={"body"}
            color={"rgb(0 107 179)"}
            marginBottom={"2"}
          >
            {head}
          </Heading>

          <Text color={useColorModeValue("white")} px={3}>
           {des}
          </Text>

          <Box display={"flex"} gap={"3"} marginTop={"5"}>
            {stack?.map((item) => {
              return <Image width={"40px"} src={item} alt="#" />;
            })}
          </Box>
          <Stack
            width={"60%"}
            mt={"1rem"}
            direction={"row"}
            padding={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
            >
             <a href={githubLink}>Github</a>
            </Button>

            <CustomButton>
              <a href={liveLink}>Live</a>
            </CustomButton>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
}
