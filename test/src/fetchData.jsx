import React, { useEffect, useState } from "react";
import axios from 'axios';

const FetchData = () => {
    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const testApi = async () => {
        try{
            setLoading(true);
            const response = await axios.get('https://dummyjson.com/products');
            setData(response.data.products);
            console.log(response);
        }
        catch{
            setError(true);
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        testApi();
    },[])


    return(
        <div>
            <h1>dados</h1>
            {loading && <h2>Carregando...</h2>}
            {error && <h2>Erro!!!</h2>}
            {data && data.map(item => <h3>{item.title}</h3>)}
        </div>
    )
}

export default FetchData;