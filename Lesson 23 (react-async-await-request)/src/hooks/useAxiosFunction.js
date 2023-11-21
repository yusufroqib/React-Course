import { useState, useEffect } from "react";

const useAxiosFunction = () => {
    const [response, setResponse] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [controller, setController] = useState()

    const axiosFetch = async (configObj) => {
        const {
            axiosInstance,
            method,
            url,
            requestConfig = {}
        } = configObj

        try {
            setLoading(true)
            const ctrl = new AbortController()
            setController(ctrl)

            const res = await axiosInstance[method.toLowerCase()](url, {
                ...requestConfig,
                signal: ctrl.signal
            })

            console.log(res);
            setResponse(res.data)
        } catch (error) {
            console.log(error);
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        console.log(controller);

        //clean up
        return () => controller && controller.abort()

    }, [controller])
    return [response, loading, error, axiosFetch]
    
}

export default useAxiosFunction