import { Avatar, Box, Flex } from "@chakra-ui/react"
import { Link } from "react-router-dom"


const UserPosts = () => {
  return (
    <Link to={"/aliumusa/post/1"}>
        <Flex gap={3} mb={4} py={5}>
            <Flex flexDir={"column"}>
                <Avatar src="/post1.png" name="Mark Zuckerberg" size={"md"}/>
                <Box w={"1px"} h={"full"} bg={"gray.light"} my={2}></Box>
            </Flex>
        </Flex>
    </Link>
    
  )
}

export default UserPosts