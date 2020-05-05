{ /* Angular mockups */}
<Card className='card'>
  <CardActionArea>
    <a href="https://joshua-angular-todo.herokuapp.com/" target='_blank'>
    <CardMedia
      component="img"
      alt=""
      height="250"
      image="./angular.png"
      title=""
    /></a>
    <CardContent>
      <center>
        <Typography gutterBottom variant="h5" component="h2" >
          <p className='project-title'>Angular</p>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr', alignItems:'center', marginTop:-50}}>
            <a href="https://joshua-angular-todo.herokuapp.com/" target='_blank'><h1 className='project-title'>(To-do List</h1></a>
            <p>&</p>
            <a href="https://joshua-angular-ui.herokuapp.com/" target='_blank'><h1 className='project-title'>Mock-up)</h1></a>
          </div>
        </Typography>
      </center>
      <Typography variant="body2" color="textSecondary" component="p" style={{color:'black'}}>
        <center><b>Highlights</b></center>
          <ul style={{display:'grid', gridTemplateColumns: '1fr 1fr'}}>
            <li>Angular 9</li>
            <li>Bootstrap</li>
          </ul>
        <Divider />
        <center><b>Description</b></center>
        <p>These are two Angular projects that I created to familiarize myself with the framework. The to-do list was created by following a tutorial and the mock-up was me creating something on my own to further deepen my understanding of Angular.</p>
        <Divider />
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr'}}>
          <a className='project-link' href="https://github.com/JoshuaJoness/myapp" target='_blank'>
            <i class="fab fa-github"></i> (To-do list)
          </a>
          <a className='project-link' href="https://github.com/JoshuaJoness/example" target='_blank'>
            <i class="fab fa-github"></i> (Mock-up)
          </a>
        </div>
      </Typography>
    </CardContent>
  </CardActionArea>
</Card>
            