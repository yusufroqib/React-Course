import React from 'react'
import useAxios from '../hooks/useAxios'
import axios from '../apis/dadjokes'

const Jokes = () => {
    const [joke, error, loading] = useAxios({
        axiosInstance : axios,
        url : '/',
        method : 'GET',
        requestConfig : {
            headers: {
                'Content-Language' : 'en-US'
            }
        }
    })
  return (
    <article>
        <h2>Random Dad Jokes</h2>
        {loading && <p>Loading...</p>}
        {!loading && error && <p className="errMsg">{error}</p> }
        {!loading && !error && joke && <p>{joke?.joke}</p> }
        {!loading && !error && !joke && <p>No Joke to Display! 😞</p> }
    </article>
  )
}

export default Jokes