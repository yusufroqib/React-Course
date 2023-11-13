import React, { useEffect, useRef, useState } from 'react'


function Login() {
    const userRef = useRef()
    const errRef = useRef()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
      userRef.current.focus()
    
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [username, password])
    

  return (
    <>
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
                {errMsg}
            </p>
            <h1>Sign In</h1>
            <form >
                <label>
                    Username:
                    <input
                        type="text"
                        id='username'
                        ref={userRef}
                        autoComplete='off'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button >
                    Sign In
                </button>
            </form>
        </section>
    </>
  )
}

export default Login