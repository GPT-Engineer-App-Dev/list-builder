import { Box, Button, Container, Heading, Input, List, ListItem, VStack, HStack, useToast, IconButton, Text } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const toast = useToast();

  const addTodo = () => {
    if (task === "") {
      toast({
        title: "No task entered.",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Container centerContent>
      <VStack spacing={4} my={8}>
        <Heading>Todo App</Heading>
        <HStack>
          <Input placeholder="Add a task..." value={task} onChange={(e) => setTask(e.target.value)} />
          <IconButton icon={<FaPlus />} onClick={addTodo} colorScheme="blue" aria-label="Add todo" />
        </HStack>
        <Box w="100%">
          <List spacing={3}>
            {todos.map((todo, index) => (
              <ListItem key={index} p={2} shadow="md" borderRadius="md" bg="gray.100">
                <HStack justifyContent="space-between">
                  <Text>{todo}</Text>
                  <IconButton icon={<FaTrash />} onClick={() => deleteTodo(index)} colorScheme="red" aria-label="Delete todo" />
                </HStack>
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
