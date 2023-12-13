import React from 'react'
import { useToast } from '@chakra-ui/react'
import useShowToast from './useShowToast'

const useLogout = () => {
    const setUser = useSetRecoilState(userAtom)
    const showToast = useShowToast()

    const logout = async () => {
        try {
            const res = await fetch("/api/users/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const data = await res.json()

            if(data.error) {
                showToast("Error", data.error, "error")
                return;
            }
            localStorage.removeItem("user-threads")
            setUser(null)
        } catch (error) {
            showToast("Error", error, "error")
        }
    }
}

export default useLogout