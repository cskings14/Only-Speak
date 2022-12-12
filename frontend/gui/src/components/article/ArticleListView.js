import React, {useEffect, useState} from "react";
import axios from "axios";
import Article from "./Article";

const ArticleList = () => {
    const [myArray, setMyArray] = useState([]);


    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/articles/").then(result => {
            setMyArray(result.data);
        });
    }, []);


    return (
       <div>
        <Article data={myArray} />
       </div> 
    )
}


export default ArticleList;