import { useEffect, useState } from "react";
import UserHeader from "../components/UserHeader";
import UserPosts from "../components/UserPosts";
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";
import { Flex, Spinner } from "@chakra-ui/react";

const UserPage = () => {
	const [user, setUser] = useState(null);
	const { username } = useParams();
	const showToast = useShowToast();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getUser = async () => {
			try {
				const res = await fetch(`api/users/profile/${username}`);
				const data = await res.json();
				if (data.error) {
					showToast("Error", data.error, "error");
					return;
				}
				setUser(data);
			} catch (error) {
				showToast("Error", error, "error");
			} finally {
				setLoading(false);
			}
		};

		const getPosts = async () => {
			
		}

		getUser();
	}, [username, showToast]);

	if (!user && loading) {
		return (
			<Flex justifyContent={'center'}>
				<Spinner size={"xl"} />
			</Flex>
		)
	}

	return (
		<>
			<UserHeader user={user} />
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
