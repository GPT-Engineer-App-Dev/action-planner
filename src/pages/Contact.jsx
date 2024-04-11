import React from "react";
import { Box, Heading, Text, Link, UnorderedList, ListItem, Stack } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <Box maxWidth="800px" mx="auto" mt={8} p={4}>
      <Heading as="h1" size="2xl" mb={4}>
        Contact Us
      </Heading>
      <Stack spacing={4}>
        <Text fontSize="xl">Have a question or feedback about My Awesome Todo App? We'd love to hear from you!</Text>
        <Text fontSize="lg">
          Please email us at <Link href="mailto:info@awesometodo.com">info@awesometodo.com</Link> and we'll get back to you as soon as possible.
        </Text>
        <Text fontSize="lg">You can also find us on social media:</Text>
        <UnorderedList>
          <ListItem>
            <Link href="https://twitter.com/awesometodo" isExternal>
              <FaTwitter /> Twitter: @awesometodo
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://facebook.com/awesometodo" isExternal>
              <FaFacebook /> Facebook: @awesometodo
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/awesometodo" isExternal>
              <FaInstagram /> Instagram: @awesometodo
            </Link>
          </ListItem>
        </UnorderedList>
        <Text fontSize="lg">
          Our mailing address is:
          <br />
          My Awesome Todo App
          <br />
          123 Main St
          <br />
          Anytown, ST 12345
        </Text>
      </Stack>
    </Box>
  );
};

export default Contact;
