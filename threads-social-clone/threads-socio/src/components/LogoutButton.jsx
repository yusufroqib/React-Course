import { Button } from '@chakra-ui/react'
import React from 'react'
import { FiLogout } from 'react-icons/fi'

const LogoutButton = () => {
  return (
    <Button position={"fixed"} top={"30px"} right={"30px"} size={"sm"}>
        <FiLogout size={20} />
    </Button>
  )
}

export default LogoutButton