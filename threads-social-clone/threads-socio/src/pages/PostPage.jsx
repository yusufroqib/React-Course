import React, { useState, useEffect } from "react";
import { BsThreeDots } from "react-icons/bs";
import {
	Avatar,
	Box,
	Button,
	Divider,
	Flex,
	Image,
	Spinner,
	Text,
} from "@chakra-ui/react";
import Actions from "../components/Actions";
import useShowToast from "../hooks/useShowToast";
import { useParams } from "react-router-dom";
import useGetUserProfile from "../hooks/useGetUserProfile";
import { formatDistanceToNow } from "date-fns";
import { DeleteIcon } from "@chakra-ui/icons";
import { useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";

const PostPage = () => {
	const { user, loading } = useGetUserProfile();
	const [post, setPost] = useState(null);
	const showToast = useShowToast();
	const { pid } = useParams();
	const currentUser = useRecoilValue(userAtom);


	useEffect(() => {
		const getPosts = async () => {
			try {
				const res = await fetch(`/api/posts/${pid}`);
				const data = await res.json();
				if (data.error) {
					showToast("Error", data.error, "error");
					return;
				}
				setPost(data);
				console.log(data);
			} catch (error) {
				showToast("Error", error, "error");
			}
		};
		getPosts();
	}, [showToast, pid]);

	if (!user && loading) {
		return (
			<Flex justifyContent={"center"}>
				<Spinner size={"xl"} />
			</Flex>
		);
	}

	if (!post) return null;

	return (
		<>
			<Flex
				w={"full"}
				gap={3}
				alignItems={"center"}
				justifyContent={"space-between"}
			>
				<Flex alignItems={"center"}>
					<Avatar src={user.profilePic} name={user.name} size={"md"} mr={2} />
					<Text fontSize={"sm"}>{user.username}</Text>
					<Image src="/verified.png" h={4} w={4} ml={2} />
				</Flex>

				<Flex
					alignItems={"center"}
					justifyContent={"space-around"}
					gap={4}
					onClick={(e) => e.preventDefault()}
				>
					<Text fontSize={"xs"} width={36} textAlign={"right"}>
						{formatDistanceToNow(new Date(post.createdAt))} ago
					</Text>
					{currentUser?._id === user._id && (
						<DeleteIcon size={20} onClick={handleDeletePost} />
					)}
				</Flex>
			</Flex>
			<Text my={3}>{post.text}</Text>

			{post.img && (
				<Box
					borderRadius={6}
					overflow={"hidden"}
					border={"1px solid"}
					borderColor={"gray.light"}
				>
					<Image src={post.img} width={"full"} />
				</Box>
			)}

			<Flex>
				<Actions post={post} />
			</Flex>

			{/* <Flex color={"gray.light"} gap={2} fontSize={"sm"} alignItems={"center"}>
				<Text>{post.replies.length} replies</Text>
				<Box w={0.5} h={0.5} bg={"gray.light"}></Box>
				<Text>{post.likes.length} likes</Text>
			</Flex> */}

			<Divider my={4} />

			<Flex justifyContent={"space-between"}>
				<Flex alignItems={"center"} gap={2}>
					<Text fontSize={"2xl"}>👋</Text>
					<Text color={"gray.light"}>Get the app to like, reply and post.</Text>
				</Flex>
				<Button>Get</Button>
			</Flex>

			<Divider my={4} />

			{/* <Comments username={'Ryan Florence'} likes={12} createdAt={'2 min ago'} userAvatar={'https://bit.ly/ryan-florence'} comment={"Keep it up!!"} /> */}
		</>
	);
};

export default PostPage;
