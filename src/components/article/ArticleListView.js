import React, {useEffect, useState} from "react";
import axios from "axios";
import Article from "./Article";
import AddArticle from "../AddArticle";

const ArticleList = () => {
    const apiurl = "https://only-speak.herokuapp.com";
    const [data, setData] = useState([]);

    const getData = async () => {
        const { data } = await axios.get(`${apiurl}/api/articles/`);
        setData(data);
        console.log(data);
    };
    
    
    useEffect(() => {
        getData();
    }, []);


    return (
       <div>
        { data.map(article => <Article dataset={article} />)}
        <AddArticle />
       </div> 
    )
}


export default ArticleList;