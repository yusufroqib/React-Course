import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";
import useShowToast from "../hooks/useShowToast";

const Actions = ({ post: post_ }) => {
	const user = useRecoilValue(userAtom);
	const [post, setPost] = useState(post_);
	const [liked, setLiked] = useState(post.likes.includes(user?._id));
   const [isLiking, setIsLiking] = useState(false);
   const [reply, setReply] = useState('');
   const [isReplying, setIsReplying] = useState(false);
	const showToast = useShowToast();

	const handleLikeAndUnlike = async () => {
		if (!user) {
			return showToast(
				"Error",
				"You must be logged in to like a post",
				"error"
			);
		}

      if(isLiking) return;
      setIsLiking(true)

		try {
			const res = await fetch("/api/posts/like/" + post._id, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
			});
			const data = await res.json();
			if (!liked) {
				//Add the id of the user to the likes array...
				setPost({ ...post, likes: [...post.likes, user._id] });
			} else {
				//Remove the id of the user from the likes array...
				setPost({ ...post, likes: post.likes.filter((id) => id !== user._id) });
			}
			setLiked(!liked);
		} catch (error) {
			showToast("Error", error.message, "error");
		} finally {
         setIsLiking(false)
      
      }
	};

   const handleReply = async () => {
      if(!user) {
         return showToast("Error", "You must be logged in to reply to a post", "error")
      }

      if(isReplying) return;
      setIsReplying(true)

      try {
         const res = await fetch("/api/posts/reply/" + post._id, {
            method: "PUT",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               reply
            })
         });
         const data = await res.json();
         setPost({...post, replies: [...post.replies, data.reply]})
         setReply('')
      } catch (error) {
         showToast("Error", error.message, "error")
      } finally {
         setIsReplying(false)
      }
   
   }

	return (
		<Flex flexDir={"column"}>
			<Flex
				cursor={"pointer"}
				gap={3}
				my={2}
				onClick={(e) => e.preventDefault()}
			>
				<svg
					aria-label="Like"
					fill={liked ? "rgb(237, 73, 86)" : "transparent"}
					color={liked ? "rgb(237, 73, 86)" : ""}
					height="20"
					role="img"
					viewBox="0 0 20 20"
					width="20"
					onClick={handleLikeAndUnlike}
				>
					<title>Like</title>
					<path
						d="M1.2 7.328c0 3.66 3.118 7.269 7.99 10.347.27.163.592.325.81.325.226 0 .548-.162.81-.325 4.87-3.078 7.99-6.687 7.99-10.347C18.8 4.189 16.595 2 13.737 2c-1.655 0-2.953.753-3.738 1.881C9.233 2.761 7.926 2 6.262 2c-2.85 0-5.063 2.19-5.063 5.328Z"
						stroke="currentColor"
						strokeWidth="1.75"
					></path>
				</svg>

				<svg
					aria-label="Reply"
					fill="currentColor"
					height="20"
					role="img"
					viewBox="0 0 24 24"
					width="20"
				>
					<title>Reply</title>
					<path
						d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
						fill="none"
						stroke="currentColor"
						strokeLinejoin="round"
						strokeWidth="2"
					></path>
				</svg>
				<RepostSVG />
				<ShareSVG />
			</Flex>
			<Flex gap={2} color={"gray.light"} fontSize={"sm"} alignItems={"center"}>
				<Text>{post.replies.length} replies</Text>
				<Box w={0.5} h={0.5} bg={"gray.light"} borderRadius={"full"}></Box>
				<Text>{post.likes.length} likes</Text>
			</Flex>
		</Flex>
	);
};

export default Actions;

const RepostSVG = () => {
	return (
		<svg
			aria-label="Repost"
			fill="currentColor"
			height="20"
			role="img"
			viewBox="0 0 24 24"
			width="20"
		>
			<title>Repost</title>
			<path d="M19.998 9.497a1 1 0 0 0-1 1v4.228a3.274 3.274 0 0 1-3.27 3.27h-5.313l1.791-1.787a1 1 0 0 0-1.412-1.416L7.29 18.287a1.004 1.004 0 0 0-.294.707v.001c0 .023.012.042.013.065a.923.923 0 0 0 .281.643l3.502 3.504a1 1 0 0 0 1.414-1.414l-1.797-1.798h5.318a5.276 5.276 0 0 0 5.27-5.27v-4.228a1 1 0 0 0-1-1Zm-6.41-3.496-1.795 1.795a1 1 0 1 0 1.414 1.414l3.5-3.5a1.003 1.003 0 0 0 0-1.417l-3.5-3.5a1 1 0 0 0-1.414 1.414l1.794 1.794H8.27A5.277 5.277 0 0 0 3 9.271V13.5a1 1 0 0 0 2 0V9.271a3.275 3.275 0 0 1 3.271-3.27Z"></path>
		</svg>
	);
};

const ShareSVG = () => {
	return (
		<svg
			aria-label="Share"
			fill="currentColor"
			height="20"
			role="img"
			viewBox="0 0 24 24"
			width="20"
		>
			<title>Share</title>
			<line
				fill="none"
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth="2"
				x1="22"
				x2="9.218"
				y1="3"
				y2="10.083"
			></line>
			<polygon
				fill="none"
				points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth="2"
			></polygon>
		</svg>
	);
};
