import { Avatar, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BsThreeDots } from "react-icons/bs";

const PostPage = () => {
  return (
    <>
      <Flex>
        <Flex
          w={"full"}
          gap={3}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Avatar src="/aliumusa.jpeg" name="Aliu Musa" size={"md"} />
          <Flex alignItems={"center"}>
            <Text fontSize={"sm"}>Aliu Musa</Text>
            <Image src="/verified.png" h={4} w={4} ml={2} />
          </Flex>
          <Flex alignItems={"center"} gap={4}>
            <Text fontSize={"sm"} w={36} color={"gray.light"}>
              2day
            </Text>
            <BsThreeDots />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default PostPage;
