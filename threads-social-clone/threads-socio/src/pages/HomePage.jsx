import { Button, Flex, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";
import Post from "../components/Post";
import { useRecoilState } from "recoil";
import postsAtom from "../atoms/postsAtom";

const HomePage = () => {
	const [posts, setPosts] = useRecoilState(postsAtom)
	const showToast = useShowToast();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getFeedPosts = async () => {
			setLoading(true);
			setPosts([])
			try {
				const res = await fetch("/api/posts/feed");
				const data = await res.json();
				if (data.error) {
					showToast("Error", data.error, "error");
					return;
				}
				setPosts(data);
			} catch (err) {
				showToast("Error", err.message, "error");
			} finally {
				setLoading(false);
			}
		};
		getFeedPosts();
	}, [showToast, setPosts]);

	return (
		<>
			{!loading && posts.length === 0 && (
				<Text>Please follow a user to see feed posts</Text>
			)}
			{loading && (
				<Flex justifyContent={"center"}>
					<Spinner size={"xl"} />
				</Flex>
			)}
      {posts.map((post) => (
        <Post post={post} postedBy={post.postedBy} key={post._id} />
      ))}
		</>
	);
};

export default HomePage;
