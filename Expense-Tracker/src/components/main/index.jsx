import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Summary from "../summary";
import ExpenseView from "../expense-view";

const Main = () => {
  const {isOpen, onOpen, onClose} = useDisclosure()
  return (
    <Flex textAlign={"center"} flexDirection={"column"} pr={"5"} pl={"5"}>
      <Flex alignItems={"center"} justifyContent={"space-between"} mt={"4"}>
        <Heading
          color={"black.400"}
          display={["none", "block", "block", "block", "block"]}
        >
          Expense Tracker
        </Heading>
        <Flex alignItems={"center"}>
          <Button onClick={onOpen} bg={"black"} color={"white"} ml={"4"}>
            Add Transaction
          </Button>
        </Flex>
      </Flex>
      <Summary isOpen={isOpen} onClose={onClose}/>
      <Flex
        w={"full"}
        alignItems={"flex-start"}
        justifyContent={"space-evenly"}
        flexDirection={["column", "column", "column", "row", "row"]}
      >
        <ExpenseView />
        <ExpenseView />
      </Flex>
    </Flex>
  );
};

export default Main;
