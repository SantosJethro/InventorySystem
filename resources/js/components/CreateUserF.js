import ReactDOM from 'react-dom';
import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Component } from 'react';
import { FormControl } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';



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
  },formControl: {
    margin: theme.spacing(1),
    minWidth: 4000,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

}));



class CreateUserF extends Component {
  constructor (props) {
    super(props)
    this.state = {
      Username : '',
      Password : '',
      Name : '',
      Usertype : 2,
      Allow : 2,
  }
 
 

  this.Username = this.Username;
  this.Password = this.Password;
  this.Name = this.Name;
  this.Usertype = this.Usertype;
  this.Allow = this.Allow;
  this.CreateUser = this.CreateUser;
  }

  

Username = (event) => {
    this.setState({username : event.target.value})
}
Password = (event) => {
  this.setState({password : event.target.value})
}
Name = (event) => {
  this.setState({name : event.target.value})
}
Usertype = (event) => {
  this.setState({usertype : event.target.value})
} 
Allow = (event) => {
this.setState({allow : event.target.value})
}

  
  CreateUser = () => {
    const token = document.head.querySelector('meta[name="csrf-token"]').getAttribute('content');
    const data = {
      username:  this.state.username,
      password: this.state.password,
      name:  this.state.name,
      usertype:  this.state.usertype,
      allow:  this.state.allow,
    };
    const request = {
      method: "POST",
      // redirect: 'follow',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-CSRF-TOKEN': token,
      },
      body: JSON.stringify(data),
    }
     fetch('./userCrud',request)
    .then(response=> response.json())
    .then((result)=> {
      console.log(result);
        window.location = './redirect';
    }).catch(error => {
      alert("ERRor::",error.response.data);
       response => alert(JSON.stringify(response.data))
     
        
        });
  };

 

  
  render () {
    return (
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <div className='card'>
              <div className='card-header'>USER CREATION</div>
              <div className='card-body'>
                
<div className='col-md-10'>
                  <div className='form-group'>
                    <Grid container spacing={1} alignItems="flex-end">
                      <div>
                        <Grid item>
                          <TextField label="Enter Username" id="Username" name="Username" onChange={this.Username} type="text"/>
                        </Grid>
                      </div>
                    </Grid>
                  </div>

                  <div className='form-group'>
                    <Grid container spacing={1} alignItems="flex-end">
                      <TextField label="Enter Password" id="Password" name="Password" onChange={this.Password} type="password"/>
                  </Grid>
                  </div>
                
                  <div className='form-group'>
                    
                    <div className={useStyles.margin}>
                      <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                          <TextField id="Name" label="Enter Full Name" onChange={this.Name} type="text" fullWidth={true} />
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                  

                  
                  <div className='form-group'>
                    
                    <div className={useStyles.margin}>
                      <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                       
                             <InputLabel>Usertype</InputLabel>
                              <Select
                                onChange={this.Usertype} value={this.Usertype}
                              >

                                <MenuItem value={1}>Admin</MenuItem>
                                <MenuItem value={2}>Stockman</MenuItem>
                              </Select>
                        </Grid>
                      </Grid>
                    </div>
                  </div>

                  <div className='form-group'>
                    
                    <div className={useStyles.margin}>
                      <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                       
                        <InputLabel>Allow To Login?</InputLabel>
                              <Select
                                onChange={this.Allow}
                              >

                                <MenuItem value={1}>YES</MenuItem>
                                <MenuItem value={2}>NO</MenuItem>
                              </Select>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                 
                  <Grid container>
                  <Grid item xs={5}></Grid>
                  <Grid item xs={5}>
                    <Button type="submit" onClick={this.CreateUser}>
                    Create User
                  </Button>
                  </Grid>
              </Grid>
              </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}


export default CreateUserF;
if (document.getElementById('CreateUser')) {
    ReactDOM.render(<CreateUserF />, document.getElementById('CreateUser'));
 }