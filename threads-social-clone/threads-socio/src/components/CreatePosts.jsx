import { AddIcon } from "@chakra-ui/icons";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	useDisclosure,
	FormControl,
	Textarea,
	Text,
	Input,
	Flex,
	Image,
	CloseButton,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import usePreviewImg from "../hooks/usePreviewImg";
import { BsFillImageFill } from "react-icons/bs";
import userAtom from "../atoms/userAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import useShowToast from "../hooks/useShowToast";
import { useParams } from "react-router-dom";
import postsAtom from "../atoms/postsAtom";

const MAX_CHAR = 500;

const CreatePosts = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [postText, setPostText] = useState("");
	const { handleImageChange, imgUrl, setImgUrl } = usePreviewImg();
	const imageRef = useRef(null);
	const [remainingChar, setRemainingChar] = useState(MAX_CHAR);
	const [loading, setLoading] = useState(false);
	const user = useRecoilValue(userAtom);
	const showToast = useShowToast();
	const { username } = useParams();
	const [posts, setPosts] = useRecoilState(postsAtom);

	const handleTextChange = (e) => {
		const inputText = e.target.value;
		if (inputText.length > MAX_CHAR) {
			const truncatedText = inputText.slice(0, MAX_CHAR);
			setPostText(truncatedText);
			setRemainingChar(0);
		} else {
			setPostText(inputText);
			setRemainingChar(MAX_CHAR - inputText.length);
		}
	};
	const handleCreatePost = async () => {
		setLoading(true);
		try {
			const res = await fetch("/api/posts/create", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					postedBy: user._id,
					text: postText,
					img: imgUrl,
				}),
			});
			const data = await res.json();
			if (data.error) {
				showToast("Error", data.error, "error");
				return;
			}
			showToast("Success", "Post Created Successfully", "success");
			if (username === user.username) {
				setPosts([data, ...posts]);
			}
			onClose();
			setPostText("")
			// setImgUrl("")
		} catch (error) {
			showToast("Error", error, "error");
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<Button
				pos={"fixed"}
				bottom={10}
				right={10}
				leftIcon={<AddIcon />}
				bg={"gray"}
				onClick={onOpen}
			>
				Post
			</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Create Post</ModalHeader>
					<ModalCloseButton />
					<ModalBody pd={6}>
						<FormControl>
							<Textarea
								placeholder="Post content goes here"
								onChange={handleTextChange}
								value={postText}
							/>
							<Text
								fontSize={"xs"}
								fontWeight={"bold"}
								textAlign={"right"}
								m={"1"}
								color={"gray.800"}
							>
								{remainingChar}/{MAX_CHAR}
							</Text>
							<Input
								type="file"
								hidden
								ref={imageRef}
								onChange={handleImageChange}
							/>
							<BsFillImageFill
								style={{ marginLeft: "5px", cursor: "pointer" }}
								size={16}
								onClick={() => imageRef.current.click()}
							/>
						</FormControl>
						{imgUrl && (
							<Flex mt={"full"} position={"relative"}>
								<Image src={imgUrl} alt="select img" />
								<CloseButton
									onClick={() => {
										setImgUrl("");
									}}
									bg={"gray.800"}
									position={"absolute"}
									top={2}
									right={2}
								/>
							</Flex>
						)}
					</ModalBody>

					<ModalFooter>
						<Button
							colorScheme="blue"
							mr={3}
							onClick={handleCreatePost}
							isLoading={loading}
						>
							Post
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default CreatePosts;
