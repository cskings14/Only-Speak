import React, {useEffect, useState} from "react";
import axios from "axios";
import Article from "./Article";

const ArticleList = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        const { data } = await axios.get("http://127.0.0.1:8000/api/articles/");
        setData(data);
        console.log(data);
    };
    
    
    useEffect(() => {
        getData();
    }, []);


    return (
       <div>
        { data.map(article => <Article dataset={article} />)}
       </div> 
    )
}


export default ArticleList;