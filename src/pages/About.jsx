import React from "react";
import { Box, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";

const About = () => {
  return (
    <Box maxWidth="800px" mx="auto" mt={8} p={4}>
      <Heading as="h1" size="2xl" mb={4}>
        About My Awesome Todo App
      </Heading>
      <Text fontSize="xl" mb={8}>
        My Awesome Todo App is the best way to keep track of your tasks and stay organized!
      </Text>
      <Heading as="h2" size="xl" mb={4}>
        Features:
      </Heading>
      <UnorderedList spacing={3} mb={8}>
        <ListItem>Easily add and delete todo items</ListItem>
        <ListItem>Mark todos as completed</ListItem>
        <ListItem>Saves your todos for next time</ListItem>
      </UnorderedList>
      <Text fontSize="lg" mb={4}>
        My Awesome Todo App was created by GPT Engineer, an AI assistant.
      </Text>
      <Text fontSize="lg" fontStyle="italic" mb={8}>
        "My Awesome Todo App has completely transformed the way I manage my tasks. It's intuitive, feature-rich, and the perfect companion for staying organized in today's fast-paced world. I can't imagine going back to my old methods!" - Satisfied User
      </Text>
      <Text fontSize="xl" fontWeight="bold">
        Try My Awesome Todo App today and experience the difference it can make in your productivity!
      </Text>
    </Box>
  );
};

export default About;
