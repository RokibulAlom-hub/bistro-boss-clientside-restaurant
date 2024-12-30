import axios from "axios";
import { useEffect, useState } from "react";

const useMenudata = () => {
    const [menu,setMenu] = useState([])
    const [laoding,setLoading] = useState(true)
    useEffect(() =>{
        axios.get('/Menu.json')
    .then(res =>{
        setMenu(res.data)
        setLoading(false)
    })
    },[])
    return[menu,laoding]
};

export default useMenudata;