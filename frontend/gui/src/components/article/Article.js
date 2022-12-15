import * as React from 'react';
import defaultimg from '../../default.png'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Article.css';

const Article = props => {

    // console.log(props);
    // (<Card.Img variant="top" src={defaultimg} className='picture'/>)
    

  return (
    <Card className='card'>
      {props.dataset.photos ? (<Card.Img variant="top" src={props.dataset.photos} className='picture'/>) : <br /> }
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