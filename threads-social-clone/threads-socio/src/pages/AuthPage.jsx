import React from "react";
import LoginCard from "../components/LoginCard";
import SignupCard from "../components/SignUpCard";
import authScreenAtom from "../atoms/authAtom";
import { useRecoilValue } from "recoil";

const AuthPage = () => {
	const authScreenState = useRecoilValue(authScreenAtom);

	return <>{authScreenState === "login" ? <LoginCard /> : <SignupCard />}</>;
};

export default AuthPage;
