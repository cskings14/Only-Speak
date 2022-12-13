import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { useParams } from 'react-router-dom';



const ArticleDetail = () => {

    const [article, setArticle] = useState({});
    const { articleID } = useParams();

    const getArticle = async () => {
        const article  = await (
            await fetch(
                `http://127.0.0.1:8000/api/articles/${articleID}/`, {
                method: "GET"
            })
        ).json();
        setArticle(article);
    };

    useEffect(() => {
        if(articleID) {
            getArticle();
          }
    }, [articleID]);
    

    return (
        <div>
            <div>{article.title}</div>
            <div>{article.description}</div>
            <div>{article.content}</div>
            <br />
            <br />
            <div>Comments</div>
        </div>
    )


}
export default ArticleDetail;