import { useEffect, useState, useRef } from "react"
import {faCheck, faTimes, faInfocircle} from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "./api/axios"

const USER_REGEX = /^[A-Z][A-Z0-9-_]{3,23}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
const REGISTER_URL = "./Register.jsx"

const Register = () => {
  return (
    <div>Register</div>
  )
}

export default Register