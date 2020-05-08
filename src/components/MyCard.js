import React, { useState, useEffect } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import '../styles/projects.css'

const MyCard = ({project}) => {
  const [fontFamily, setFontFamily] = useState('')

  useEffect(() => {
    switch(project.projectTitle){
      case 'Zen Chat': return setFontFamily("'Concert One', cursive");
      case 'Airbnb Clone': return setFontFamily("'Knewave', cursive")
      case 'Fleet Tracker': return setFontFamily("'Balsamiq Sans', cursive")
      case 'Calorie Calulator': return setFontFamily("'Happy Monkey', cursive")
      default: return setFontFamily("'Pacifico', cursive")
      }
    },[])

  return(
    <Card className='card'>
    {/* Image */}
    {/* <CardActionArea>	 This is for opacity of card on hover*/}	
    {
      project.projectImage.includes('youtu') ? 
      <iframe 
      width="100%" 
      height="250px" 
      volume="0" 
      allowFullScreen
      src={project.projectImage}>
      </iframe>
      :
      <a href={project.projectLink} target='_blank'>
      <CardMedia
      component="img"
      alt="Application Preview"
      height="250"
      image={project.projectImage}
      title={project.projectTitle}
      /></a>
    }  
    {/* Title */}
    <CardContent>
    <center>
    <Typography gutterBottom variant="h5" component="h2">
    <a href={project.projectLink} target='_blank'>
    <h1 style={{fontFamily:fontFamily, color:'#F6C28B'}} className='project-title'>{project.projectTitle}</h1>
    </a>
    </Typography>
    </center>  
    {/* Highlights */}
    <Typography variant="body2" color="textSecondary" component="p" style={{color:'black'}}>
    <div style={{height:"180px"}}>
    {/*<center><b style={{fontFamily: "'Baloo 2', cursive", fontSize:'1.7rem'}}>Highlights</b></center>*/}
    {
      
      project.highlights.length > 2 ?
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr'}}>
      {project.highlights.map((highlight, i) => <div className='label' style={styles.label}>{highlight}</div>)}
      
      
      </div>
      :
      <div>
      
      {project.highlights.map((highlight, i) => {
        return <div className='label' style={styles.label}>{highlight}</div>
      })}
      
      </div>
    }
    
    </div> 
    {/* Links */}
    <div style={{ height:"100px", display:'flex'}}>							   
    {project.projectLinks.map((link, index) => {
      if (link.includes('github')) {
        return <a style={styles.link} href={link} target='_blank'>
        <button style={styles.button}>
        <i class="fab fa-github" style={{marginRight:'10px'}}></i>											
        
        GitHub
        </button> 
        </a>
      } else if (link.includes('apple')) {
        return <a style={styles.link} href={link} target='_blank'>
        <button style={styles.button}>                   
        <i class="fab fa-apple" style={{marginRight:'10px'}}></i>										
        
        App Store
        </button> 
        </a>
      }
    })}
    </div>   
    {/* Description */}
    <div style={{height:"200px", border:'1px solid #d3d3d3', borderRadius:'6px', backgroundColor:'#eeeeee', paddingBottom:'5%', paddingTop:'2%'}}>
    <center><b style={{fontFamily: "'Baloo 2', cursive", fontSize:'1.7rem'}}>Description</b></center>
    <ul>
    {project.projectDescription.map((description, index) => {
      return <li style={styles.description}>{description}</li>
    })}
    </ul>
    </div>    
    </Typography>
    </CardContent>
    {/* </CardActionArea> */}
    </Card>
  )
}

const styles = {
  label: {
    margin:'10px',
    display:'flex', 
    justifyContent:'center',
    border:'1px solid #eeeeee', 
    background:'#d3d3d3', 
    paddingTop:'5px', 
    paddingBottom:'5px',
    borderRadius:'6px',
    fontFamily: "'Baloo 2', cursive",
    fontWeight:'bold'
  },
  button: {
    margin:'10px',
    display:'flex', 
    justifyContent:'center',
    border:'1px solid #eeeeee', 
    background:'#465775', 
    paddingTop:'5px', 
    paddingBottom:'5px',
    borderRadius:'6px',
    width:'160px',
    height:'50px',
    color:'#F6C28B',
    fontSize:'1.2rem',
    fontFamily: "'Baloo 2', cursive",
    fontWeight:'bold',
    alignItems:'center',
  },
  description: {
    fontFamily: "'Baloo 2', cursive",
    fontWeight:'bold',
    paddingLeft:'5%',
    paddingRight:'5%',
    marginBottom:'5%'
  },
  link: {
    display:'grid', 
    gridTemplateColumns:'1fr 1fr',
    color:'#B2A877', 
    fontSize:'1.8rem'
  }
}

export default MyCard


