# React Readme file for more information

*​Note: this is just how I started the react side of the project. Several Changes have been made...*

### 1) Dependencies

To start, we will need to download a couple dependencies.

1. Node/React. To be able to create a React app, we will first need to download node. Go to [node](https://nodejs.org/en/) and download the dependency.

2. Axios. Axios is a package meant for HTTP requests. Most of the time, I will used fetch which is built into node but Axios is necessary in some cases. Input __npm install react-axios__ into a terminal in order to install Axios.

3. React Router Dom. RRD is a package meant for routing. To install RRD, input __npm install react-router-dom__ into a terminal.

4.  React Bootstrap. Along with normal css, I will be using React Bootstrap in order to style my components / website. Input __npm install react-bootstrap bootstrap__ into a terminal to install React Bootstrap.

### 2) Files And Their Meanings

I will now go over some of the most important files.

* App.js - This file will be used as the main area for routing. I will use react router dom as well as importing components for this feature. 

* package.json - This shows what commands can be used with your react app as well as any installed components. 

* 
    Components folder - This is where we are adding the most code. Components have jsx which is how we will view the website (what is rendered). There are also functions which carry the logic of the client side. This could be things like authentication on the client side or posting to the server using a form.

### 3) Starting From Scratch

## BASIC STARTUP

1. Install node if you haven't done so.

2. Create a new react app using __npx create-react-app my-app__. 

3. Install other dependencies  once inside the app.

4. Delete unecessary files like the icons inside the public folder.

## CREATING THE ADDARTICLE COMPONENT

- Create a components folder in the src folder of your react app. Create the file AddArticle.js and add the following code: 

```
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AddArticle.css'

const AddArticle = () => {
    const apiurl = "https://only-speak.herokuapp.com";
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
        

        const response = fetch(`${apiurl}/api/articles/`, {
            method: "POST",
            body: form_data
        });
        if (response.status !== 400) {
            navigate("/");
            window.location.reload(true);
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
```

- Let's deconstruct what this means. To start off, I will talk about the imports. useContext is a react hook that allows the programmer to manage state / features in a file. We use this hook with AuthContext (our way of authentication in the client side) to use specific functions. useNavigate is a way to move through routes. Buttton and Form are react bootstrap components. We will use them in our jsx for a styled form. Lastly, we have a css file for manual styling.

- Let's now take a look at the handleSubmit function. This function will take the data of the form and return it as a post method to the django rest framework api. I have printed out the data variables for testing purposes. 

- Now, let's talk about the returned value. The returned value is what we see on the website. It is a react bootstrap form in order to take in text input for the title/description/content fields and an image for photos field (the photos field will be sent to the api which then sends the image to google cloud storage so I don't have to store the images in the django database). Once the button is clicked, the handleSubmit will run and send the user back to the base route if everything works.




