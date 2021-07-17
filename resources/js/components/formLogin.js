  import ReactDOM from 'react-dom';
import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import { blue } from '@material-ui/core/colors';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import {useEffect,useState} from 'react';
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";
import { Route , withRouter} from 'react-router-dom';
import { Component } from 'react'



const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  avatar: {
    backgroundColor: '#03a9f4' ,
  },
  title:{
        variant:'h1'
  },

}));



class FormLogin extends Component {
  constructor (props) {
    super(props)
    this.state = {
      Username : '',
      Password : ''
  }
 
  this.Username = this.Username;
  this.Password = this.Password;
  this.Login = this.Login;
  }

Username = (event) => {
    this.setState({username : event.target.value})
}
Password = (event) => {
  this.setState({password : event.target.value})
}

  

  LogInU = () => {
    const packets = {
      username:  this.state.username,
      password: this.state.password,
  };
  
  axios.post('./userLog', packets
  // ,{headers: {
  //     "Content-Type": "form-data"
  //   }}
    )
  .then(response => {
   
      // response => alert(JSON.stringify(response.data))
   
      const { id, allow ,userUN,userP,userT  } = response.data;
       window.location = "./user";
  })
            // .then(
            //    response => alert(JSON.stringify(response.data))
            //     )
            .catch(error => {
                console.log("ERROR:: ",error.response.data);
                
                });

  // axios({
  //   method: 'post',
  //   url: 'http://localhost/InventorySystem1/public/userLog',
  //   data: {
  //     username: this.state.username,
  //     password: this.state.password,
  //   }
  // })

    
  }

  
  render () {
    return (
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-3'>
            <div className='card'>
              <div className='card-header'>User LogIn</div>
              <div className='card-body'>
                <form onSubmit={this.LogInU}>
                  <div className='form-group'>
                  <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <AccountCircle />
                  </Grid>
                  <div>
                    <Grid item>
                      <TextField label="Enter Username" id="Username" name="Username" onChange={this.Username} type="text" style ={{width: '100%'}} />
                    </Grid>
                  </div>
                </Grid>
                    
                  </div>
                  <div className='form-group'>
                  <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <LockIcon />
                  </Grid>
                    <TextField label="Enter Password" id="Password" name="Password" onChange={this.Password} type="password"/>
                </Grid>
                  </div>
                  <Grid container>
                  <Grid item xs={5}></Grid>
                  <Grid item xs={2}>
                    <Button type="submit">
                    LogIN
                  </Button>
                  </Grid>
              </Grid>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default FormLogin;
if (document.getElementById('Login')) {
    ReactDOM.render(<FormLogin />, document.getElementById('Login'));
 }