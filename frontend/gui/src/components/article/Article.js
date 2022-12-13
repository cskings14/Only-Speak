import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea, CardActions, Button } from '@mui/material';
import defaultimg from '../../default.png'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Article.css';

const Article = props => {

    // console.log(props);
    

  return (
    <Card className='card'>
        <Card.Img variant="top" src={defaultimg} className='picture'/>
        <Card.Body>
          <Card.Text className='title'>
            {props.dataset.title} by {props.dataset.author}
          </Card.Text>
          <Card.Text className='description'>
          {props.dataset.description}
          </Card.Text>
          <Card.Text className='content'>
          {props.dataset.content}
          </Card.Text>
        </Card.Body>
        <Button variant="primary" href={`/${props.dataset.id}`}>
        Read More
      </Button>
      </Card>
  );
}

export default Article;