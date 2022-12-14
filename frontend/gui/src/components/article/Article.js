import * as React from 'react';
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