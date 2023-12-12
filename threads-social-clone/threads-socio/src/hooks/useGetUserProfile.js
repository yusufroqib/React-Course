import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useShowToast from './useShowToast'

const useGetUserProfile = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const { username } = useParams()
  const showToast = useShowToast()

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch(`/api/users/profile/${username}`);
        const data = await res.json();

        if (data.error) {
          showToast("Error", data.error, "error");
          return;
        }
        // console.log(data);

        setUser(data);
      } catch (error) {
        showToast("Error", error, "error");
      } finally {
        setLoading(false);
      }
    }

    getUsers()
  }, [username, showToast])
  return { loading, user }
}

export default useGetUserProfile