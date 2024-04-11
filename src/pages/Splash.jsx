import React, { useEffect } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Box textAlign="center" mt={20}>
      <Heading size="4xl" mb={4}>
        🚀
      </Heading>
      <Heading size="xl">My Awesome Todo App</Heading>
    </Box>
  );
};

export default Splash;
