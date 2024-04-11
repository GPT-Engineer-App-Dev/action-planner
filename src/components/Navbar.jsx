import React from "react";
import { Box, Flex, Spacer, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex bg="gray.100" p={4} alignItems="center">
      <Box>
        <Link as={RouterLink} to="/" fontWeight="bold">
          My Awesome Todo App
        </Link>
      </Box>
      <Spacer />
      <Box>
        <Link as={RouterLink} to="/" mr={4}>
          Home
        </Link>
        <Link as={RouterLink} to="/about" mr={4}>
          About Us
        </Link>
        <Link as={RouterLink} to="/contact">
          Contact Us
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
