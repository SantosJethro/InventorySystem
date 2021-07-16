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



export function FormLogin() {
  
  const classes = useStyles();
  
  // const [msg,setMsg] = useState('');
 
  // const [Username, setUsername] = useState("");
  // const [Password, setPass] = useState("");

  // const [user, setUser] = useState({
  //     Username: "",
  //     Password:""
  //   });

  //   let history = useHistory(); 

  //   const {username,password} = user;
  //   const onInputChange = e => {
  //     setUser({ ...user, [e.target.name]: e.target.value });
  //   };
  //   const signIn = () =>
  //   {
 
  //     const users = { username };  // To Store Email in Localstore and send to Home Page 
 
  //      if(user.email === '')
  //      {
  //        alert('Email Field is empty')
  //      }
  //      else if(user.password === '')
  //      {
  //        alert('Pass Field is empty')
  //      }
 
  //      axios.post("/InventorySystem1/public/user",user)
  //      .then(response => {
  //       setMsg(response.data);
  //       localStorage.setItem("users",response.data);
  //       history.push("/");
  //     });
  //   }
  // another bckup
//   import ReactDOM from 'react-dom';
// import React from 'react';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import LockIcon from '@material-ui/icons/Lock';
// import VpnKeyIcon from '@material-ui/icons/VpnKey';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Paper from '@material-ui/core/Paper';
// import { blue } from '@material-ui/core/colors';
// import CardHeader from '@material-ui/core/CardHeader';
// import Avatar from '@material-ui/core/Avatar';
// import {useEffect,useState} from 'react';
// import axios from 'axios';
// import { useHistory, useParams } from "react-router-dom";
// import { Route , withRouter} from 'react-router-dom';
// import { Component } from 'react'



// const useStyles = makeStyles((theme) => ({
//   margin: {
//     margin: theme.spacing(1),
//   },
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
//   avatar: {
//     backgroundColor: '#03a9f4' ,
//   },
//   title:{
//         variant:'h1'
//   },

// }));



// class FormLogin extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       Username : '',
//       Password : ''
//   }
//   this.Username = this.Username.bind(this);
//   this.Password = this.Password.bind(this);
//   this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   Username(event){
//     this.setState({username : event.target.value})
// }
// Password(event){
//   this.setState({password : event.target.value})
// }

  

//   Login () {
//     const packets = {
//       firstname:  this.state.firstname,
//       password: this.state.password,
//   };
//   axios.post('/user', packets)
//             .then(
//                 response => alert(JSON.stringify(response.data))
               
//                 )
//             .catch(error => {
//                 console.log("ERROR:: ",error.response.data);
                
//                 });
    
//   }

  
//   render () {
//     return (
//       <div className='container py-4'>
//         <div className='row justify-content-center'>
//           <div className='col-md-6'>
//             <div className='card'>
//               <div className='card-header'>Create new project</div>
//               <div className='card-body'>
//                 <form>
//                   <div className='form-group'>
//                   <Grid container spacing={1} alignItems="flex-end">
//                   <Grid item>
//                     <AccountCircle />
//                   </Grid>
//                   <div>
//                     <Grid item>
//                       <TextField label="Enter Username" id="Username" name="Username" onChange={this.Username} type="text"/>
//                     </Grid>
//                   </div>
//                 </Grid>
                    
//                   </div>
//                   <div className='form-group'>
//                   <Grid container spacing={1} alignItems="flex-end">
//                   <Grid item>
//                     <LockIcon />
//                   </Grid>
//                     <TextField label="Enter Password" id="Password" name="Password" onChange={this.Password} type="password"/>
//                 </Grid>
//                   </div>
//                   <Grid container>
//                   <Grid item xs={5}></Grid>
//                   <Grid item xs={2}>
//                     <Button type="submit" variant="contained" onClick={this.Login} color="primary" endIcon={<VpnKeyIcon >send</VpnKeyIcon>} >
//                     LogIN
//                   </Button>
//                   </Grid>
//               </Grid>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }


// export default FormLogin;
// if (document.getElementById('Login')) {
//     ReactDOM.render(<FormLogin />, document.getElementById('Login'));
//  }



  return (
    <div>
      <div className={classes.margin}>
        <Grid container spasing={0}>
          <Grid item xs={8}>
              
            </Grid>

            <Card className={classes.root} variant="outlined">
            <CardHeader avatar={ 
            <Avatar aria-label="recipe" className={classes.avatar}> R </Avatar>
        }
        
        title="Radj Technologies"
        subheader="Inventory System"
      />
              <CardContent>
                <form>
                  
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <AccountCircle />
                  </Grid>
                  <div>
                    <Grid item>
                      <TextField label="Enter Username" id="Username" name="Username" type="text"/>
                    </Grid>
                  </div>
                </Grid>
                <br/>
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <LockIcon />
                  </Grid>
                    <TextField label="Enter Password" id="Password" name="Password" type="password"/>
                </Grid>
                <br/>
                <Grid container>
                  <Grid item xs={5}></Grid>
                  <Grid item xs={2}>
                    <Button type="submit" variant="contained" value="Submit" color="primary" className={classes.button} endIcon={<VpnKeyIcon >send</VpnKeyIcon>} >
                    LogIN
                  </Button>
                  </Grid>
              </Grid>
              </form>
              </CardContent>
            </Card>
        </Grid>
      </div>      
    </div>
  );
      }

export default withRouter(FormLogin);
if (document.getElementById('Login')) {
    ReactDOM.render(<FormLogin />, document.getElementById('Login'));
 }
