"use client";

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Project() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    console.log("Fetching projects data...");
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:4000/projects");
        console.log("fetched successfully:[Projects]", response.data);
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects(); // Call fetchProjects function
  }, []);
  console.log("Projects from useState:", projects);

  return (
    <>
      <Container id="Projects" maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 4, md: 10 }}
          py={{ base: 10, md: 20 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"50%"}
            color={"white"}
          >
            Projects <br />
          </Heading>

          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            {/* Map over projects array and render ProjectCard component for each item */}
            {projects?.map((singleProject, idx) => (
              <ProjectCard key={idx} data={singleProject} />
            ))}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}


