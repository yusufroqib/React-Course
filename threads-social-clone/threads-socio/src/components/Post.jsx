import {
	Avatar,
	Box,
	Flex,
	Image,
	Menu,
	MenuButton,
	MenuDivider,
	MenuGroup,
	MenuItem,
	MenuList,
	Text,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Actions from "./Actions";
import { useEffect, useState } from "react";
import useShowToast from "../hooks/useShowToast";
import { formatDistanceToNow } from "date-fns";

const Post = ({ post, postedBy }) => {
	const [liked, setLiked] = useState(false);
	const [user, setUser] = useState(null);
	const showToast = useShowToast();
	const navigate = useNavigate();

	useEffect(() => {
		const getUser = async () => {
			try {
				const res = await fetch(`/api/users/profile/${postedBy}`);
				const data = await res.json();
				console.log(data);
				setUser(data);
				if (data.error) {
					showToast("Error", data.error, "error");
					return;
				}
			} catch (err) {
				showToast("Error", err.message, "error");
				setUser(null);
			}
		};
		getUser();
	}, [postedBy, showToast]);

	if (!user) return null;

	return (
		<Link to={`/${user.username}/post/${post._id}`}>
			<Flex gap={3} mb={4} py={5}>
				<Flex flexDir={"column"} alignItems={"center"}>
					<Avatar
						src={user.profilePic}
						name={`${user.name} ${user.username}`}
						size={"md"}
						onClick={(e) => {
							e.preventDefault();
							navigate(`/${user.username}`);
						}}
					/>
					<Box w={"1px"} h={"full"} bg={"gray.light"} my={2}></Box>
					<Box pos={"relative"} w={"full"}>
						{post.replies.length === 0 && <Text textAlign={"center"}>😏</Text>}
						{post.replies[0] && (
							<Avatar
								src={post.replies[0].userProfilePic}
								name={post.replies[0].username}
								size={"xs"}
								pos={"absolute"}
								top={"0"}
								left={"15px"}
								padding={"2px"}
							/>
						)}
						{post.replies[1] && (
							<Avatar
								src={post.replies[1].userProfilePic}
								name={post.replies[1].username}
								size={"xs"}
								pos={"absolute"}
								top={"0"}
								left={"15px"}
								padding={"2px"}
							/>
						)}
						{post.replies[2] && (
							<Avatar
								src={post.replies[2].userProfilePic}
								name={post.replies[2].username}
								size={"xs"}
								pos={"absolute"}
								top={"0"}
								left={"15px"}
								padding={"2px"}
							/>
						)}
					</Box>
				</Flex>

				<Flex flex={1} flexDir={"column"} gap={2}>
					<Flex w={"full"} justifyContent={"space-between"}>
						<Flex
							alignItems={"center"}
							// w={"full"}
							onClick={(e) => {
								e.preventDefault();
								navigate(`/${user.username}`);
							}}
						>
							<Text>{user.username}</Text>
							<Image src="/verified.png" ml={1} w={4} h={4} />
						</Flex>
						<Flex
							alignItems={"center"}
              justifyContent={"space-around"}
							gap={4}
							onClick={(e) => e.preventDefault()}
						>
							<Text fontSize={"xs"} width={36} textAlign={"right"}>{formatDistanceToNow(new Date(post.createdAt))} ago</Text>
							<Menu>
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
							</Menu>
						</Flex>
					</Flex>

					<Text fontSize={"sm"}>{post.text}</Text>
					{post.img && (
						<Box
							overflow={"hidden"}
							borderRadius={6}
							border={"1px solid"}
							borderColor={"gray.light"}
						>
							<Image src={post.img} width={"full"} />
						</Box>
					)}
					<Flex>
						<Actions liked={liked} setLiked={setLiked} />
					</Flex>

					<Flex
						gap={2}
						color={"gray.light"}
						fontSize={"sm"}
						alignItems={"center"}
					>
						<Text>{post.replies.length} replies</Text>
						<Box w={0.5} h={0.5} bg={"gray.light"} borderRadius={"full"}></Box>
						<Text>{post.likes.length} likes</Text>
					</Flex>
				</Flex>
			</Flex>
		</Link>
	);
};

export default Post;
