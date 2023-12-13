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
import { useNavigate, useParams } from "react-router-dom";
import useGetUserProfile from "../hooks/useGetUserProfile";
import { formatDistanceToNow } from "date-fns";
import { DeleteIcon } from "@chakra-ui/icons";
import { useRecoilState, useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";
import Comments from "../components/Comments";
import postsAtom from "../atoms/postsAtom";

const PostPage = () => {
	const { user, loading } = useGetUserProfile();
	const [posts, setPosts] = useRecoilState(postsAtom);
	const showToast = useShowToast();
	const { pid } = useParams();
	const currentUser = useRecoilValue(userAtom);
	const navigate = useNavigate();

	const currentPost = posts[0];
	useEffect(() => {
		const getPosts = async () => {
			try {
				const res = await fetch(`/api/posts/${pid}`);
				const data = await res.json();
				if (data.error) {
					showToast("Error", data.error, "error");
					return;
				}
				setPosts([data]);
				console.log(data);
			} catch (error) {
				showToast("Error", error, "error");
			}
		};
		getPosts();
	}, [showToast, pid, setPosts]);

	const handleDeletePost = async () => {
		try {
			if (!window.confirm("Are you sure you want to delete this post?")) return;

			const res = await fetch(`/api/posts/${currentPost._id}`, {
				method: "DELETE",
			});

			const data = await res.json();

			if (data.error) {
				showToast("Error", data.error, "error");
				return;
			}
			showToast("Success", "Post deleted successfully", "success");
			navigate(`/${user.username}`);
		} catch (error) {
			showToast("Error", error.message, "error");
		}
	};

	if (!user && loading) {
		return (
			<Flex justifyContent={"center"}>
				<Spinner size={"xl"} />
			</Flex>
		);
	}

	if (!currentPost) return null;

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
					<Text
						fontSize={"xs"}
						width={36}
						textAlign={"right"}
						color={"gray.light"}
					>
						{formatDistanceToNow(new Date(currentPost.createdAt))} ago
					</Text>
					{currentUser?._id === user._id && (
						<DeleteIcon
							cursor={"pointer"}
							size={20}
							onClick={handleDeletePost}
						/>
					)}
				</Flex>
			</Flex>
			<Text my={3}>{currentPost.text}</Text>

			{currentPost.img && (
				<Box
					borderRadius={6}
					overflow={"hidden"}
					border={"1px solid"}
					borderColor={"gray.light"}
				>
					<Image src={currentPost.img} width={"full"} />
				</Box>
			)}

			<Flex>
				<Actions post={currentPost} />
			</Flex>

			<Divider my={4} />

			<Flex justifyContent={"space-between"}>
				<Flex alignItems={"center"} gap={2}>
					<Text fontSize={"2xl"}>👋</Text>
					<Text color={"gray.light"}>Get the app to like, reply and post.</Text>
				</Flex>
				<Button>Get</Button>
			</Flex>

			<Divider my={4} />
			<Divider my={4} />
			{currentPost.replies.map((reply) => (
				<Comments
					key={reply._id}
					reply={reply}
					lastReply={
						reply._id ===
						currentPost.replies[currentPost.replies.length - 1]._id
					}
				/>
			))}

			{/* <Comments username={'Ryan Florence'} likes={12} createdAt={'2 min ago'} userAvatar={'https://bit.ly/ryan-florence'} comment={"Keep it up!!"} /> */}
		</>
	);
};

export default PostPage;
