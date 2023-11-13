import React, { useEffect, useRef, useState } from "react";

function Login() {
   const userRef = useRef();
   const errRef = useRef();

   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [errMsg, setErrMsg] = useState("");
   const [success, setSuccess] = useState(false);

   useEffect(() => {
      userRef.current.focus();
   }, []);

   useEffect(() => {
      setErrMsg("");
   }, [username, password]);

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (username === "" || password === "") {
         setErrMsg("Username and password are required");
         return;
      }
      setSuccess(true);
      setUsername("");
      setPassword("");
   };

   return (
      <>
         {success ? (
            <section>
               <h1>Login Successful</h1>
               <a href="/">Home</a>
            </section>
         ) : (
            <section>
               <p
                  ref={errRef}
                  className={errMsg ? "errmsg" : "offscreen"}
                  aria-live="assertive"
               >
                  {errMsg}
               </p>
               <h1>Sign In</h1>
               <form onSubmit={handleSubmit}>
                  <label>Username:</label>
                  <input
                     type="text"
                     id="username"
                     ref={userRef}
                     autoComplete="off"
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                     required
                  />

                  <label>Password:</label>
                  <input
                     type="password"
                     id="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     required
                  />
                  <button>Sign In</button>
               </form>
               <p>
                  Need an Acount? <br />
                  <span>
                     <a href="#">Sign Up</a>
                  </span>
               </p>
            </section>
         )}
      </>
   );
}

export default Login;
