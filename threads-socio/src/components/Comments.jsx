import { Avatar, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "./Actions";

const Comments = ({ comment, createdAt, likes, username, userAvater }) => {
    const [liked, setLiked] = useState(false)
  return (
    <>
      <Flex gap={4} my={2} py={2} w={"full"}>
        <Avatar
        src={userAvater}
          size={"sm"}
          name={username}
        />
        <Flex flexDir={"column"} gap={1} w={"full"}>
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            w={"full"}
          >
            <Text fontSize={"sm"} fontWeight={"bold"}>
              {username}
            </Text>
            <Flex gap={2} alignItems={"center"}>
              <Text fontSize={"sm"} color={"gray.light"}>{createdAt}</Text>
              <BsThreeDots />
            </Flex>
          </Flex>
          <Text>{comment}</Text>
          <Actions liked={liked} setLiked={setLiked} />
          <Text>{likes + (liked ? 1 : 0)} likes</Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Comments;
