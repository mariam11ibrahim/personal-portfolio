import { useEffect, useState } from "react";

const API_URL = "https://portfolio-820b0-default-rtdb.firebaseio.com/data/";

const useHttp = (path="") => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true)
        const abortController=new AbortController();
        const signal=abortController.signal;
        const sendRequest = async () => {
            let res = await fetch(`${API_URL}${path}.json`,{signal});
            if(!res.ok) throw new Error("something went wrong")
            let data = await res.json();
            setData(data);
        }
        sendRequest().catch(error=>console.log(error))
        
        // setIsLoading(false)
        const timer =setTimeout(()=>setIsLoading(false),2500);
        return ()=>{abortController.abort();clearTimeout(timer)}

    }, [])
    return {data,isLoading};
}
export default useHttp;