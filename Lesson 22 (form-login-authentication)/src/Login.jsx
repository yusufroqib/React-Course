import React, { useEffect, useRef, useState, useContext } from "react";
import AuthContext from "./context/AuthProvider";
import axios from "./api/axios";




function Login() {
   const LOGIN_URL = '/auth'
   const {setAuth} = useContext(AuthContext)

   const userRef = useRef();
   const errRef = useRef();

   const [user, setUser] = useState("");
   const [pwd, setPwd] = useState("");
   const [errMsg, setErrMsg] = useState("");
   const [success, setSuccess] = useState(false);

   useEffect(() => {
      userRef.current.focus();
   }, []);

   useEffect(() => {
      setErrMsg("");
   }, [user, pwd]);

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         setSuccess(true);
         setUser("");
         setPwd("");
      } catch (err) {
         
      }
      // if (user === "" || pwd === "") {
      //    setErrMsg("User and pwd are required");
      //    return;
      // }
    
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
                     value={user}
                     onChange={(e) => setUser(e.target.value)}
                     required
                  />

                  <label>Password:</label>
                  <input
                     type="password"
                     id="password"
                     value={pwd}
                     onChange={(e) => setPwd(e.target.value)}
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
