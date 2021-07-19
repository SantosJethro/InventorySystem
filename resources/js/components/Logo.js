import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



// const useStyles = makeStyles({
//   root: {
//     width: 800,
//   },
//   media: {
//     height: 100,
//   },

// });
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      main: '#B9B49E',
    },
  }));

function RadjLogo() {
  const classes = useStyles();

  return (
    // <Card className={classes.root}>
    //   <CardActionArea>
    //     <CardMedia
    //       className={classes.media}
    //       image="../Images/logo.png"
    //       title="Logo"
    //     />
        
    //   </CardActionArea>
     
    // </Card>
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs>
          <Paper className={classes.paper}><img src="../images/logo.png" style={{width: 400,Height: 100}}/></Paper>
        </Grid>
    
        <Grid item xs>
          <Paper className={classes.paper}><img src="../images/logo.png" style={{width: 400,Height: 100}}/></Paper>
        </Grid>
        
        
      </Grid>
    </div>
    
   
  );
}

export default RadjLogo;
if (document.getElementById('RadjLogo')) {
    ReactDOM.render(<RadjLogo />, document.getElementById('RadjLogo'));
}