import { useEffect, useState } from 'react';
import useJsonFetch from "../customHooks/useJsonFetch";

export default function LoadingInspector(props) {
    const { url, options } = props;
    const [loadingResponse, setLoadingResponse] = useState(null)

    const {loading} = useJsonFetch(url, options);

    useEffect(() => {
        setLoadingResponse(loading)
    }, [loading])

    return (
        loadingResponse 
        ?
        <div className="loadingio-spinner-ripple-9pfdm10bnkh">
            <div className="ldio-i3pxrnc5q2">
                <div></div>
                <div></div>
            </div>
        </div> 
        :
        <p className='loading'>Loading complete</p>
    )
}

