import React, { useState, useEffect } from "react";
import { Box, Text, IconButton, useToast } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const JokeCarousel = () => {
  const [jokeIndex, setJokeIndex] = useState(0);
  const toast = useToast();

  const jokes = ["Why don't scientists trust atoms? Because they make up everything!", "I'm reading a book about anti-gravity. It's impossible to put down!", "What do you call a fake noodle? An impasta!", "How many apples grow on a tree? All of them!", "Want to hear a joke about construction? I'm still working on it!"];

  useEffect(() => {
    const timer = setInterval(() => {
      setJokeIndex((prevIndex) => (prevIndex + 1) % jokes.length);
    }, 10000);

    return () => {
      clearInterval(timer);
    };
  }, [jokes.length]);

  const handlePrevJoke = () => {
    setJokeIndex((prevIndex) => (prevIndex - 1 + jokes.length) % jokes.length);
  };

  const handleNextJoke = () => {
    setJokeIndex((prevIndex) => (prevIndex + 1) % jokes.length);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" my={8}>
      <IconButton icon={<FaArrowLeft />} onClick={handlePrevJoke} aria-label="Previous Joke" mr={4} />
      <Box textAlign="center" maxW="400px">
        {jokes[jokeIndex] ? <Text fontSize="xl">{jokes[jokeIndex]}</Text> : <Text color="red.500">Sorry, the jokes couldn't be loaded!</Text>}
      </Box>
      <IconButton icon={<FaArrowRight />} onClick={handleNextJoke} aria-label="Next Joke" ml={4} />
    </Box>
  );
};

export default JokeCarousel;
