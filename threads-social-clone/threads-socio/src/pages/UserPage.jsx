import { useEffect, useState } from "react";
import UserHeader from "../components/UserHeader";
import UserPosts from "../components/UserPosts";
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";
import { Flex, Spinner } from "@chakra-ui/react";
import Post from "../components/Post";
import useGetUserProfile from "../hooks/useGetUserProfile";
import { useRecoilState } from "recoil";
import postsAtom from "../atoms/postsAtom";

const UserPage = () => {
	const { user, loading } = useGetUserProfile();
	const { username } = useParams();
	const showToast = useShowToast();
	const [posts, setPosts] = useRecoilState(postsAtom);
	const [fetchingPosts, setFetchingPosts] = useState(false);

	useEffect(() => {
		// const getUser = async () => {
		// 	try {
		// 		const res = await fetch(`api/users/profile/${username}`);
		// 		const data = await res.json();
		// 		if (data.error) {
		// 			showToast("Error", data.error, "error");
		// 			return;
		// 		}
		// 		setUser(data);
		// 	} catch (error) {
		// 		showToast("Error", error, "error");
		// 	} finally {
		// 		setLoading(false);
		// 	}
		// };

		const getPosts = async () => {
			setFetchingPosts(true);
			try {
				const res = await fetch(`/api/posts/user/${username}`);
				const data = await res.json();
				// console.log(data);
				setPosts(data);
			} catch (error) {
				showToast("Error", error.message, "error");
				setPosts([]);
			} finally {
				setFetchingPosts(false);
			}
		};

		getPosts();
	}, [username, showToast, setPosts]);
	// console.log('posts is here and recoil state', posts)

	if (!user && loading) {
		return (
			<Flex justifyContent={"center"}>
				<Spinner size={"xl"} />
			</Flex>
		);
	}

	return (
		<>
			<UserHeader user={user} />
			{!fetchingPosts && posts.length === 0 && <h1>User has no posts</h1>}
			{fetchingPosts && (
				<Flex justifyContent={"center"}>
					<Spinner size={"xl"} />
				</Flex>
			)}

			{posts.map((post) => (
				<Post key={post._id} post={post} postedBy={post.postedBy} />
			))}
		</>
	);
};

export default UserPage;
