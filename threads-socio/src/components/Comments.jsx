import { Avatar, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BsThreeDots } from "react-icons/bs";

const Comments = ({ comment, createdAt, likes, username, userAvater }) => {
  return (
    <>
      <Flex gap={4} my={2} py={2} w={"full"}>
        <Avatar
          src="https://bit.ly/ryan-florence"
          size={"sm"}
          name="Ryan Florence"
        />
        <Flex flexDir={"column"} gap={1} w={"full"} border={"2px solid white"}>
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            w={"full"}
          >
            <Text fontSize={"sm"} fontWeight={"bold"}>
              JohnDoe
            </Text>
            <Flex gap={2} alignItems={"center"}>
              <Text fontSize={"sm"} color={"gray.light"}>2 min ago</Text>
              <BsThreeDots />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Comments;
