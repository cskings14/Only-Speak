import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AddArticle.css'

const AddArticle = () => {
    const navigate = useNavigate();
    let { user } = useContext(AuthContext);


    const handleSubmit = e => {
        e.preventDefault();
        const author = user.username;
        const title = e.target.title.value;
        const description = e.target.description.value;
        const content = e.target.content.value;
        console.log(author);
        console.log(title);
        console.log(description);
        console.log(content);
        const photos = document.getElementById("photos").files[0];
        console.log(photos);
        let form_data = new FormData();
        form_data.append("author", author);
        form_data.append("title", title);
        form_data.append("description", description);
        form_data.append("content", content);
        if (photos){
        form_data.append("photos", photos);
        }
        

        const response = fetch("http://127.0.0.1:8000/api/articles/", {
            method: "POST",
            body: form_data
        });
        if (response.status !== 400) {
            navigate("/");
        } else {
            alert("Something went wrong!");
        }
    }

    return (
        <Form onSubmit={handleSubmit} className="form">


            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="title" placeholder="Enter Title" id="title" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control type="description" placeholder="Enter Description" id="description" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Content</Form.Label>
                <Form.Control type="content" placeholder="Enter Content" id="content" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Enter Image (Optional)</Form.Label>
                <Form.Control type="file" id="photos" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default AddArticle;