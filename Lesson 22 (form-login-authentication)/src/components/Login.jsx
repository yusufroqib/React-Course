import { useEffect, useRef, useState } from "react";
import axios from "../api/axios";
import useAuth from "../hooks/useAuth";
import { useNavigate, Link, useLocation } from "react-router-dom";
import useInput from "../hooks/useInput";

function Login() {
   const LOGIN_URL = "/auth";
   const { setAuth, persist, setPersist } = useAuth();

   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";

   const userRef = useRef(); 
   const errRef = useRef();

   const [user, resetUser, userAttribs] = useInput('') //useState("");
   const [pwd, setPwd] = useState("");
   const [errMsg, setErrMsg] = useState("");

   useEffect(() => {
      userRef.current.focus();
   }, []);

   useEffect(() => {
      setErrMsg("");
   }, [user, pwd]);

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const response = await axios.post(
            LOGIN_URL,
            JSON.stringify({ user, pwd }),
            {
               headers: { "Content-Type": "application/json" },
               withCredentials: true,
            }
         );
         console.log(JSON.stringify(response?.data));
         const accessToken = response?.data?.accessToken;
         const roles = response?.data?.roles;

         setAuth({ user, pwd, roles, accessToken });

         resetUser("");
         setPwd("");
         navigate(from, { replace: true });
      } catch (error) {
         if (!error.response) {
            setErrMsg("No Server Response");
         } else if (error.response?.status === 400) {
            setErrMsg("Missing Username or Password");
         } else if (error.response?.status === 401) {
            setErrMsg("Unauthorized");
         } else {
            setErrMsg("Login Failed");
         }
         errRef.current.focus();
      }
      // if (user === "" || pwd === "") {
      //    setErrMsg("User and pwd are required");
      //    return;
      // }
   };

   const togglePersist = () => {
      setPersist((prev) => !prev);
   };

   useEffect(() => {
      localStorage.setItem("persist", persist);
   }, [persist]);

   return (
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
               {...userAttribs}
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
            <div className="persistCheck">
               <input
                  type="checkbox"
                  id="persist"
                  checked={persist}
                  onChange={togglePersist}
               />
               <label htmlFor="persist">Trust this device</label>
            </div>
         </form>
         <p>
            Need an Acount? <br />
            <span className="line">
               <Link to="/register">Sign Up</Link>
            </span>
         </p>
      </section>
   );
}

export default Login;
