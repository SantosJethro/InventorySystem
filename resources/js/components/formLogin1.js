  import ReactDOM from 'react-dom';
import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import axios from 'axios';
import { Component } from 'react';
import  { Redirect } from 'react-router-dom';



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

  // fetch('./userLog', packets)
  // .then((response) => {
  //   if (response.ok) {
  //   return response.json();
  //   }
  //   throw response;
  //   })
  //   .catch((error) => {
  //   console.error("Error fetching data: ", error);
  //   setError(error);
  //   })
  //   .finally(() => {
  //   setLoading(false);
  //   });
    
    
  
  axios.post('./userLog', packets
  // ,{headers: {
  //     "Content-Type": "form-data"
  //   }}
    )
  .then(response => {
   
      // response => alert(JSON.stringify(response.data))
      
      const { id, allow ,userUN,userP,userT  } = response.data;
      // return <Redirect to='/user'/>
      
      window.location = "./user";
  })
            // .then(
            //    response => alert(JSON.stringify(response.data))
            //     )
            .catch(error => {
              alert("ERRor::",error.response.data);
              response => alert(JSON.stringify(response.data))
              window.location = "./ssuser";
                
                });

                window.location = "./usessr";
  }

  
  render () {
    return (
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-3'>
            <div className='card'>
              <div className='card-header'>User LogIn</div>
              <div className='card-body'>
                
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
                    <Button type="submit" onClick={this.LogInU}>
                    LogIN
                  </Button>
                  </Grid>
              </Grid>
           
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default FormLogin1;
if (document.getElementById('Login1')) {
    ReactDOM.render(<FormLogin1 />, document.getElementById('Login1'));
 }