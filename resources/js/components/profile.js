import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AccountBoxSharpIcon from '@material-ui/icons/AccountBoxSharp';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },cus:{
      color: "white"
  }
}));

 function Profile() {
  const classes = useStyles();
  const myDate = new Date();
  const hour = myDate.getHours();
  const [greet, setGreet] = useState();
  const [username, setUsername] = useState();
  const [name, setName] = useState();
  const [usertype, setUsertype] = useState();
  const id= (2);
  
  const GreetMe = () => {
    if (hour < 12){
        setGreet(
            'Good Morning'
        )
  }else if (hour >= 12 && hour <= 17){
        setGreet(
            'Good Afternoon'
        )
       
    }else if (hour >= 17 && hour <= 24){
        setGreet(
            'Good Evening'
        )
    }else{
            setGreet(
                'Good Day'
            ) 
        }
  }

  const read1 = () => {
    const token = document.head.querySelector('meta[name="csrf-token"]').getAttribute('content');
    const request = {
        method: "POST",
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'X-CSRF-TOKEN': token,
        },
        body: JSON.stringify(id),
      }
    
       fetch(`userCrud/profile/${id}/`,request)
      .then(response=> response.json())
      .then((result)=> {
          console.log(result)
        // console.log('dddd',result.profile[0].Name)
        // console.log('dddd2',result.profile[0].Username)
        // console.log('dddd3',result.profile[0].UserType)
        setName(
          result.profile[0].Name
        )
        setUsername(
           result.profile[0].Username
        )
        setUsertype(
           result.profile[0].UserType
        )
        
        
      });
   

    
    }
  useEffect(() => {
    read1();
  }, []);
  useEffect(() => {
    GreetMe();
  }, []);

  return (
    <Card className={classes.root} style={{backgroundColor: "Black"}}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        } style={{color: 'white'}}
        title="RADJ Telcom Network Services"
      />
      <CardContent>
      <Typography className={classes.cus} variant="h5">{greet}</Typography>
        <Grid container spacing={1}>
            <Grid item xs={2}>
                <AccountBoxSharpIcon style={{color: "red",height: "50",width: "50"}}/>
            </Grid>
            <Grid item xs>
                <div className={classes.cus}>
                    <Typography>Name: {name}</Typography>
                    <Typography>Username: {username}</Typography>
                    <Typography>I am a {usertype == 1 ? "Admin" : "Stockman"}</Typography>
                </div>
            </Grid>
        </Grid>
        
            
       
      
      </CardContent>
      
    </Card>
  );
}
export default Profile;
if (document.getElementById('Profile')) {
  ReactDOM.render(<Profile />, document.getElementById('Profile'));
}