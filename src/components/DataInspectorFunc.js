import { useEffect, useState } from 'react';
import useJsonFetch from "../customHooks/useJsonFetch";

export default function DataInspector(props) {
    const { url, options } = props;
    const [dataResponse, setDataResponse] = useState(null)

    const {data} = useJsonFetch(url, options);

    useEffect(() => {
        setDataResponse(data)
    }, [data])

    return (
        dataResponse &&
        <p className='data'>{dataResponse.status}</p>
    )
}