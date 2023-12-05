import { Button } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineLogout } from 'react-icons/ai'
import { useSetRecoilState } from 'recoil'
import userAtom from '../atoms/userAtom'

const LogoutButton = () => {
    const setUser = useSetRecoilState(userAtom)
    const showToast = useShowToast()
    const handleLogout = async () => {
        try {
            const res = await fetch("/api/users/logout", {
                
            })
        } catch (error) {
            
        }
    }
  return (
    <Button position={"fixed"} top={"30px"} right={"30px"} size={"sm"}>
        <AiOutlineLogout size={20} />
    </Button>
  )
}

export default LogoutButton