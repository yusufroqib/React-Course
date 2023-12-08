import { Button, Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {

  useEffect(() => {
    const getFeedPosts = async () => {
      const res = await fetch("/api/posts/feed")
    }
   
  }, [])
  

  return (
    <div>
      <Link to={"/markzuckerberg"}>
        <Flex w={"full"} justifyContent={"center"}>
          <Button mx={"auto"}>Visit Profile Page</Button>
        </Flex>
      </Link>
    </div>
  )
}

export default HomePage