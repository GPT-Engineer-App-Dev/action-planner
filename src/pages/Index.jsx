import React, { useState, useEffect } from "react";
import { Box, VStack, HStack, Text, Input, Button, IconButton, Checkbox, Heading } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const handleToggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <Box maxWidth="400px" margin="auto" mt={8}>
      <Heading mb={8}>Todo App</Heading>
      <VStack spacing={4} align="stretch">
        <HStack>
          <Input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Enter a new todo" />
          <IconButton icon={<FaPlus />} onClick={handleAddTodo} aria-label="Add todo" />
        </HStack>
        {todos.map((todo, index) => (
          <HStack key={index}>
            <Checkbox isChecked={todo.completed} onChange={() => handleToggleTodo(index)} />
            <Text flex={1} textDecoration={todo.completed ? "line-through" : "none"}>
              {todo.text}
            </Text>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;
