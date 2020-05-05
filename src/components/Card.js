import React from 'react'

import Nav from './Nav'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const MyCard = (projectLink, projectImage, highlights, description, repositoryLinks) => {
  return(
    <Card className='card'>
      <CardActionArea>
        <a href=`${projectLink}` target='_blank'>
        <CardMedia
          component="img"
          alt="Application Preview"
          height="250"
          image={projectImage}
          title="AirBnb"
        /></a>

        <CardContent>
          <center>
            <Typography gutterBottom variant="h5" component="h2">
              <a href=`${projectLink}` target='_blank'><h1 className='project-title'>Airbnb Clone</h1></a>
            </Typography>
          </center>
          
          <Typography variant="body2" color="textSecondary" component="p" style={{color:'black'}}>
            <div style={{height:"150px"}}>
              <center><b>Highlights</b></center>
              <div style={{display: 'grid', gridTemplateColumns:'1fr 1fr'}}>
                <ul>
                  {highlights.map((highlight,i) => <li key={i}>{highlight}</li>)}
                </ul>
              </div>
            </div>
            <Divider />

            <div style={{height:"300px", marginTop:"5%"}}>							
              <center><b>Description</b></center>
              <p>{description}</b></p>
              <Divider />
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr'}}>
                {
                  repositoryLinks.map((repositoryLink,i) => <a className='project-link' href={repositoryLink} target='_blank'> <i class="fab fa-github"></i></a>
)
                }
              </div>
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default MyCard
