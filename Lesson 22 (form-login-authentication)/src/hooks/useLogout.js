import axios from "../api/axios";
import useAuth from "./useAuth"

const useLogout = () => {
    const {setAuth} = useAuth();
    const logOut = async => {
        setAuth({})
        try {
            const response = await axios('/logout', {
                withCredentials: true
            })
        } catch (error) {
            console.log(error);
        }
    }
  return logOut
}

export default useLogout