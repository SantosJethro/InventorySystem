import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
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
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import SaveIcon from '@material-ui/icons/Save';




const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
  },
}));



function CreateUserF() {
  const classes1 = useStyles();
  const [Username, setUsername] = useState();
  const [Password, setPassword] = useState();
  const [Name, setName] = useState();
  const [Usertype, setUsertype] = useState();
  const [Allow, setAllow] = useState();


  const CreateUser = () => {
    if(Name == null || Name == ""){
      alert("Error Name cannot be empty")
      
    }else if(Username == null  || Username == ""){
      alert("Error Username cannot be empty")
     
    }else if(Password == null  || Password == ""){
      alert("Error Password cannot be empty")

    }else if(Usertype == null  || Usertype == ""){
      alert("Error Please Select Admin or Stockman")

    }else if(Allow == null  || Allow == ""){
      alert("Error Please Select Yes or No")
    }else{
          const token = document.head.querySelector('meta[name="csrf-token"]').getAttribute('content');
          const data = {
            username:Username,
            password:Password,
            name:Name,
            usertype:Usertype,
            allow:Allow,
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
            if(result.isError) {
              alert(result.responseText)
            }else {
              console.log(result);
              window.location = './redirect';
            }
              
          }).catch(error => {
            alert("Error::",error.response.data);
            //  response => alert(JSON.stringify(response.data))

              });
      }
  };

 

  
  
    return (
      <div style={{ backgroundColor: '#CACACA'}}>
        <Grid container spacing={3}>
 
                      <Grid item xs={6}>
                      <Card className={classes1.root} style={{backgroundColor: "Black"}}>
                                <CardHeader
                                        avatar={
                                          <Avatar aria-label="recipe" className={classes1.avatar}>
                                            R
                                          </Avatar>
                                        }
                                        title="RADJ telcom Network Service" style={{color: "white"}}
                                />
                                <CardContent>
                                          <Grid container spacing={1}>
                                            <h1 style={{color: "white"}}>Create User</h1>
                                            <Grid item xs={12}>

                                                <TextField style={{backgroundColor: "white"}} variant="filled" id="Name" label="Enter Full Name" onChange={(event)=>setName(event.target.value)} type="text" fullWidth/>
                                                <br/><br/>

                                                <TextField style={{backgroundColor: "white"}} variant="filled" label="Enter Username" id="Username" name="Username" onChange={(event)=>setUsername(event.target.value)} type="text" fullWidth/>
                                                <br/><br/>

                                                <TextField style={{backgroundColor: "white"}} variant="filled" label="Enter Password" id="Password" name="Password" onChange={(event)=>setPassword(event.target.value)} type="password"  fullWidth/>
                                                <br/><br/>
                                                
                                                <FormControl variant="filled" style={{backgroundColor: "white"}} fullWidth>
                                                  <InputLabel >Usertype</InputLabel>
                                                  <Select 
                                                    onChange={(event)=>setUsertype(event.target.value)} defaultValue={0} variant="filled"
                                                  >
                                                    <MenuItem value={0}>Select One</MenuItem>
                                                    <MenuItem value={1}>Admin</MenuItem>
                                                    <MenuItem value={2}>Stockman</MenuItem>
                                                  </Select>
                                                  </FormControl>
                                                  <br/><br/>
                                                <FormControl variant="filled" style={{backgroundColor: "white"}} fullWidth>
                                                  <InputLabel>Allow To Login?</InputLabel>
                                                  <Select
                                                    onChange={(event)=>setAllow(event.target.value)} defaultValue={0} variant="filled"
                                                  >
                                                    <MenuItem value={0}>Select One</MenuItem>
                                                    <MenuItem value={1}>YES</MenuItem>
                                                    <MenuItem value={2}>NO</MenuItem>
                                                  </Select>
                                                </FormControl>
                                                <br/>
                                                <br/>
                                                <Button style={{backgroundColor: "green"}} type="submit" onClick={CreateUser} variant="outlined" endIcon={<SaveIcon />} >
                                                  Create User
                                                </Button>
                                            </Grid>
                                          </Grid>
                                </CardContent>
                              </Card>       
                      </Grid>
                      <Grid item xs={3}></Grid> 
                      </Grid>
                      <br/>
    </div>
    )
  }



export default CreateUserF;
if (document.getElementById('CreateUser')) {
    ReactDOM.render(<CreateUserF />, document.getElementById('CreateUser'));
 }