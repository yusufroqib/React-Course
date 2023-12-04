import React from "react";
import LoginCard from "../components/LoginCard";
import SignupCard from "../components/SignUpCard";

const AuthPage = () => {
	return (
		<>
			"login" ? <LoginCard /> : <SignupCard />{" "}
		</>
	);
};

export default AuthPage;
