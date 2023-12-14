import {
	Avatar,
	Divider,
	Flex,
	Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "./Actions";

const Comments = ({ reply, lastReply }) => {
	const [liked, setLiked] = useState(false);
	return (
		<>
			<Flex gap={4} my={2} py={2} w={"full"}>
				<Avatar src={reply.userProfilePic} size={"sm"} name={reply.username} />
				<Flex flexDir={"column"} gap={1} w={"full"}>
					<Flex
						justifyContent={"space-between"}
						alignItems={"center"}
						w={"full"}
					>
						<Text fontSize={"sm"} fontWeight={"bold"}>
							{reply.username}
						</Text>
					</Flex>
					<Text>{reply.text}</Text>
				</Flex>
			</Flex>
			{!lastReply ? <Divider />: null}
		</>
	);
};

export default Comments;
