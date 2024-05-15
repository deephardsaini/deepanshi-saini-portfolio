'use client'

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
} from '@chakra-ui/react'
import axios from "axios";
import { useEffect, useState } from 'react';
import SkillCard from '../SkillCard/SkillCard';

export default function Skills() {
    const [techStacks, setTechStacks] = useState([]);
    useEffect(() => {
        console.log("Fetching tech stacks data...");
        const fetchTechStacks = async () => {
            // This is the async function
            try {
                const response = await axios.get("http://localhost:4000/techstack"); // Fetch tech stacks data from the server
                console.log("Fetched successfully:[Techstack]", response.data);
                setTechStacks(response.data); // Update state with fetched data
            } catch (error) {
                console.error("Error fetching tech stacks:", error); // Log error if fetching data fails
            }
        };

        fetchTechStacks(); // Call fetchTechStacks function
    }, []);
    console.log("Tech stacks from useState:", techStacks);

    return (
        <>
            <Container id="Skills" maxW={"6xl"}>
                <Stack
                    as={Box}
                    textAlign={"center"}
                    spacing={{ base: 4, md: 10 }}
                    py={{ base: 20, md: 20 }}
                >
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
                        lineHeight={"100%"}
                        color={"white"}
                    >
                        Skills <br />
                    </Heading>

                    <Stack>
                        <Box display={"flex"} justifyContent={"center"} flexWrap={"wrap"}>
                            {/* Map over techStacks array and render SkillCard component for each item */}
                            {techStacks?.map((item, idx) => (
                                <SkillCard key={idx} data={item} />
                            ))}
                        </Box>
                    </Stack>
                </Stack>
            </Container>
        </>
    );
}
