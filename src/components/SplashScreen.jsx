import React, { useState, useEffect } from "react";
import { Box, Heading, Image, Progress } from "@chakra-ui/react";

const SplashScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box textAlign="center" mt={20}>
      <Image src="/path/to/logo.png" alt="App Logo" mx="auto" mb={8} />
      <Heading size="2xl" mb={4}>
        My Awesome Todo App
      </Heading>
      <Progress isIndeterminate mb={8} />
    </Box>
  );
};

export default SplashScreen;
