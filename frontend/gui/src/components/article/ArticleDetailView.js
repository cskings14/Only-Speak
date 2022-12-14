import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Comment from './Comment'
import axios from 'axios';


const ArticleDetail = () => {
    const navigate = useNavigate();
    let { user } = useContext(AuthContext);

    const [article, setArticle] = useState({});
    const [data, setData] = useState([]);
    const { articleID } = useParams();

    const getArticle = async () => {
        const article = await (
            await fetch(
                `http://127.0.0.1:8000/api/articles/${articleID}/`, {
                method: "GET"
            })
        ).json();
        setArticle(article);
    };


    const getData = async () => {
        const { data } = await axios.get(`http://127.0.0.1:8000/api/comments/`);
        setData(data);
        console.log(data);
    };

    useEffect(() => {
        if (articleID) {
            getArticle();
            getData();
        }
    }, [articleID]);

    const deleteArticle = async () => {
        const article = await (
            await fetch(
                `http://127.0.0.1:8000/api/articles/${articleID}/`, {
                method: "DELETE"
            })
        )
        navigate('/');

    }

    const handleEditSubmit = e => {
        e.preventDefault();
        const author = user.username;
        const title = e.target.title.value;
        const description = e.target.description.value;
        const content = e.target.content.value;

        const response = fetch(`http://127.0.0.1:8000/api/articles/${articleID}/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                author,
                title,
                description,
                content
            })
        });
        if (response.status !== 400) {
            navigate("/");
        } else {
            alert("Something went wrong!");
        }
    }

    const handlePostSubmit = e => {
        e.preventDefault();
        const author = user.username;
        const content = e.target.content.value;
        const article = articleID;

        const response = fetch(`http://127.0.0.1:8000/api/articles/${articleID}/comments/create/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                author,
                content,
                article
            })
        });
        if (response.status !== 400) {
            navigate("/");
        } else {
            alert("Something went wrong!");
        }
    }

    const handleDeleteCommentSubmit = e => {
        e.preventDefault();
        const commentID = e.target.id;
        // console.log(`http://127.0.0.1:8000/api/articles/${articleID}/comments/${commentID}/delete/`);
        const response = fetch(`http://127.0.0.1:8000/api/comments/${commentID}/`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (response.status !== 400) {
            navigate("/");
        } else {
            alert("Something went wrong!");
        }
    }
// if comment.article === article.id then make the comment
    function Component() {
        return data.map((comment) => (
            comment.article === article.id && (
            <>
                <Comment dataset={comment} />
                {
                    comment.author === user.username &&
                    (
                        <>
                            <Form onSubmit={handleDeleteCommentSubmit} className="form" id={comment.id}>
                                <Button variant="primary" type="submit">
                                    Submit Deletion
                                </Button>
                            </Form>
                        </>
                    )
                }
            </>
        ))
        )
    }


    return (
        <div>
            <div>{article.title} by {article.author}</div>
            <div>{article.description}</div>
            <div>{article.content}</div>
            {user.username === article.author ? (
                <>
                    <button onClick={deleteArticle}>Delete</button>
                    <Form onSubmit={handleEditSubmit} className="form">


                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="title" placeholder="Edit Title" id="title" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="description" placeholder="Edit Description" id="description" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Content</Form.Label>
                            <Form.Control type="content" placeholder="Edit Content" id="content" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit Edits
                        </Button>
                    </Form>
                </>
            ) : <br />}

            <br />
            <br />
            <div>Comments</div>
            <Component />
            {/* { data.map(comment => <Comment dataset={comment} />) }
            {Comment.author === user.username ? (
                <>
                <button>delete</button>
                <button>update</button>
                </>
            ): <br />
            } */}



            <br />
            <br />
            <Form onSubmit={handlePostSubmit} className="form">

                <Form.Group className="mb-3">
                    <Form.Label>Add Comment</Form.Label>
                    <Form.Control type="content" placeholder="Enter Content" id="content" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )


}
export default ArticleDetail;