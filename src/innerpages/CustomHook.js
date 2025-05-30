import React, { useEffect, useState } from "react";
import axios from "axios";

const useCustomHook = (url) => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(url)
        .then((res)=> {
            setData(res.data);
        })
        .catch((error) => {
            console.log(error);
        })
    } )
    return data;
}
export default useCustomHook