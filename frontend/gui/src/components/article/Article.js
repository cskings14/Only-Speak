import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Button } from '@mui/material';
import defaultimg from '../../default.png'


const Article = props => {

    console.log(props);
    

  return (
    <Card sx={{ maxWidth: 345 }} >
      <CardActionArea>
      <CardMedia
          component="img"
          height="140"
          image={defaultimg}
          alt="default"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.dataset.title}
          </Typography>
          <Typography variant="body2" color="text.primary">
          {props.dataset.description}
          </Typography>
          <br />
          <Typography variant="body2" color="text.secondary">
          {props.dataset.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href='/${props.id}'>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Article;