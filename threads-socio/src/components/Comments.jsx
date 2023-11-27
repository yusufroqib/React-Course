import { Avatar, Flex } from '@chakra-ui/react'
import React from 'react'

const Comments = ({comment, createdAt, likes, username, userAvater}) => {
  return (
    <>
        <Flex gap={4} my={2} py={2} w={"full"}>
            <Avatar />
        </Flex>
    </>
  )
}

export default Comments