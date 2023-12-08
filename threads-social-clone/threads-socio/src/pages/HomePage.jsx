import { Button, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";

const HomePage = () => {
	const showToast = useShowToast();
  const [loading, setLoading] = useState(true)

	useEffect(() => {
		const getFeedPosts = async () => {
      setLoading(true)
	
			try {
				const res = await fetch("/api/posts/feed");
			} catch (err) {
				showToast("Error", err.message, "error");
			} finally {
        setLoading(false)
      }
		};
    getFeedPosts()
	}, [showToast]);

	return (
		<div>
			<Link to={"/markzuckerberg"}>
				<Flex w={"full"} justifyContent={"center"}>
					<Button mx={"auto"}>Visit Profile Page</Button>
				</Flex>
			</Link>
		</div>
	);
};

export default HomePage;
