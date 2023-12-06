import { AddIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import React from "react";

const CreatePosts = () => {
	return (
		<>
			<Button pos={"fixed"} bottom={10} right={10} leftIcon={<AddIcon />} bg={"gray"}>
				Post
			</Button>
		</>
	);
};

export default CreatePosts;
