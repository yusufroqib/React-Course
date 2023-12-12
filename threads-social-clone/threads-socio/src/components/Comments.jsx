import {
	Avatar,
	Divider,
	Flex,
	Menu,
	MenuButton,
	MenuDivider,
	MenuGroup,
	MenuItem,
	MenuList,
	Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "./Actions";

const Comments = ({ reply }) => {
	const [liked, setLiked] = useState(false);
	return (
		<>
			<Flex gap={4} my={2} py={2} w={"full"}>
				<Avatar src={userAvater} size={"sm"} name={username} />
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
							<Text fontSize={"sm"} color={"gray.light"}>
								{createdAt}
							</Text>
							{/* <Menu >
                <MenuButton>
                  <BsThreeDots cursor={"pointer"} />
                </MenuButton>
                <MenuList>
                  <MenuGroup>
                    <MenuItem color={"gray.light"}>Mute</MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup>
                    <MenuItem color={"red"}>Block</MenuItem>
                    <MenuItem color={"gray.light"}>Hide</MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup>
                    <MenuItem color={"red"}>Report</MenuItem>
                  </MenuGroup>
                </MenuList>
              </Menu> */}
						</Flex>
					</Flex>
					<Text>{comment}</Text>
				</Flex>
			</Flex>
			<Divider />
		</>
	);
};

export default Comments;
