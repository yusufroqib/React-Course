import { useEffect, useState } from "react";
import UserHeader from "../components/UserHeader";
import UserPosts from "../components/UserPosts";
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";
import { Flex, Spinner } from "@chakra-ui/react";
import Post from "../components/Post";
import useGetUserProfile from "../hooks/useGetUserProfile";

const UserPage = () => {
	const {user, loading} = useGetUserProfile()
	const { username } = useParams();
	const showToast = useShowToast();
	const [posts, setPosts] = useState([]);
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
				const res = await fetch(`api/posts/user/${username}`);
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
	}, [username, showToast]);

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

			{/* <UserPosts
				likes={200}
				replies={50}
				postImg={"/post1.png"}
				postTitle={"Here we are guys. This is what I am doing..."}
			/>
			<UserPosts
				likes={10}
				replies={20}
				postImg={""}
				postTitle={"Hello World! Here we have it"}
			/>
			<UserPosts
				likes={3}
				replies={1}
				postImg={"/post3.png"}
				postTitle={"This is awesome. Isn't it amazing?"}
			/> */}
		</>
	);
};

export default UserPage;
