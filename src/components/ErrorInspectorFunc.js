import { useEffect, useState } from 'react';
import useJsonFetch from "../customHooks/useJsonFetch";

export default function ErrorInspector(props) {
    const { url, options } = props;
    const [errorResponse, setErrorResponse] = useState(null)

    const {error} = useJsonFetch(url, options);

    useEffect(() => {
        setErrorResponse(String(error))
    }, [error])

    return (
        errorResponse &&
        <p className='error'>{errorResponse}</p>
    )
}