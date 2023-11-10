import { useEffect, useState, useRef } from "react"
import {faCheck, faTimes, faInfocircle} from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "./api/axios"

const USER_REGEX = /^[A-Z][A-Z0-9-_]{3,23}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
const REGISTER_URL = "/register"

const Register = () => {
    const userRef = useRef()
    const errRef = useRef()

    const [user, setUser] = useState("")
    const [validName, setValidName] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    const [matchPwd, setMatchPwd] = useState('')
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)

    const [errMsg, setErrMsg] = useState("")
    const [success, setSuccess] = useState(false)
  
  return (
    <div>Register</div>
  )
}

export default Register