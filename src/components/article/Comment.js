import * as React from 'react';
import Card from 'react-bootstrap/Card';


const Comment = props => {
  // basic comment structure
  return (
    <Card className='card'>
        <Card.Body>
          <Card.Text className='title'>
            {props.dataset.author} said:  {props.dataset.content}
          </Card.Text>
        </Card.Body>
      </Card>
  );
}

export default Comment;