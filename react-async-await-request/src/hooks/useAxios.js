import { useState, useEffect } from "react";

const useAxios = (configObj) => {
    const {
            axiosInstance,
            method,
            url,
            requestConfig = {}
    } = configObj

    const [response, setResponse] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
}