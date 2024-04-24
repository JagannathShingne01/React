import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import TransactionForm from "../add-transaction";
import TransactionChartSummary from "../chart";

const Summary = ({onClose,isOpen, totalExpense, totalIncome}) => {
  return (
    <Box
      p={"6"}
      border={"1px solid"}
      borderColor={"gray.100"}
      overflow={"hidden"}
      borderRadius={"10"}
      background={"white"}
      display={"flex"}
      my={"5"}
    >
      <Flex
        w={"full"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
      >
        <Flex
          flex={"1"}
          w={"full"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          ml={"-20"}
          mr={"2"}
        >
          <Heading size={"md"} mb={"4"} color={"black"}>
            Balance is {totalIncome - totalExpense} ₹
          </Heading>
          <Flex
            w={"full"}
            h={"100px"}
            border={"1px solid"}
            borderColor={"gray.100"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            bg={"gray.100"}
            
          >
            <Flex flexDirection={"column"}>
              <Heading color={"gray.700"}>{totalIncome} ₹</Heading>
              <Text color={"gray.700"}>Total Income </Text>
            </Flex>
          </Flex>
          <Flex
            w={"full"}
            h={"100px"}
            border={"1px solid"}
            borderColor={"gray.100"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            bg={"gray.100"}
           
          >
            <Flex flexDirection={"column"}>
              <Heading color={"gray.700"}>{totalExpense} ₹</Heading>
              <Text color={"gray.700"}>Total Expense </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          flex={"1"}
          mt={"10"}
          mr={"-90px"}
          width={"300px"}
          height={"300px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Heading><TransactionChartSummary income={100} expense={1000}/></Heading>
        </Box>
      </Flex>
      <TransactionForm onClose={onClose} isOpen={isOpen}/>
    </Box>
  );
};

export default Summary;
