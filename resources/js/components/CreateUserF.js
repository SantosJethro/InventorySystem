import ReactDOM from 'react-dom';
import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { Component } from 'react';
import { FormControl } from '@material-ui/core';



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



class CreateUserF extends Component {
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
          <div className='col-md-6'>
            <div className='card'>
              <div className='card-header'>USER CREATION</div>
              <div className='card-body'>
                <form onSubmit={this.CreateUser}>
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
                          <TextField id="Name" label="Enter Full Name" onChange={this.name} type="text" fullWidth={true} />
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                  

                  
                  <div className='form-group'>
                    
                    <div className={useStyles.margin}>
                      <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                        <label>
                              USERTYPE
                              <select value={this.state.value} onChange={this.handleChange}>
                                <option value={1}>Admin</option>
                                <option value={2}>STOCKMAN</option>
                              </select>
                            </label>
                        </Grid>
                      </Grid>
                    </div>
                  </div>

                  <div className='form-group'>
                    
                    <div className={useStyles.margin}>
                      <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                        <label>
                              ALLOW LOGIN
                              <select value={this.state.value} onChange={this.handleChange}>
                                <option value={1}>YES</option>
                                <option value={2}>NO</option>
                              </select>
                            </label>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                 
                  <Grid container>
                  <Grid item xs={5}></Grid>
                  <Grid item xs={5}>
                    <Button type="submit">
                    Create User
                  </Button>
                  </Grid>
              </Grid>
              </div>
                </form>
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