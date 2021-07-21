
import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  }, root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


function EditUser(props) {
  const {id} = props
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
// get single user
    const read1 = () => {
    const token = document.head.querySelector('meta[name="csrf-token"]').getAttribute('content');
      const UserData = {
        newName:NewName,
        NewUsername:NewUsername,
        NewPassword:NewPassword,
        NewAllow:NewAllow,
        userId:userId,
      };

      const request = {
        method: "POST",
        // redirect: 'follow',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-CSRF-TOKEN': token,
        },
        body: JSON.stringify(UserData),
      }
       fetch(userSingle/${id},request)
      .then(response=> response.json())
      .then((result)=> {
        console.log(result);
          window.location = '/admin';
      });
    }

    const update = () => {
     
      const token = document.head.querySelector('meta[name="csrf-token"]').getAttribute('content');
      const UserData = {
        newName:NewName,
        NewUsername:NewUsername,
        NewPassword:NewPassword,
        NewAllow:NewAllow,
        userId:userId,
      };

      const request = {
        method: "POST",
        // redirect: 'follow',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-CSRF-TOKEN': token,
        },
        body: JSON.stringify(UserData),
      }
       fetch('userCrud/update',request)
      .then(response=> response.json())
      .then((result)=> {
        console.log(result);
          window.location = '/admin';
      });
    };
    const [NewName, setNewName] = useState();
    const [NewUsername, setNewUsername] = useState();
    const [NewPassword, setNewPassword] = useState();
    const [NewAllow, setNewAllow] = useState(); 
    const [userId, setuserId] = useState();
    


    
    return (
      
      <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
        <Grid container spacing={1}>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Update User</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Edit User
                </DialogContentText>
               
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Confirm
                </Button>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                
                </DialogActions>
            </Dialog>
            {/* { 
            data.length == 0 ? "" : data.data.map((list) => {
              return(
                
              <form key={list.Id}>
               
                  <TextField id="Username" label="Input Name" variant="outlined" onChange={(event)=>setNewName(event.target.value)} value={list.Name} fullWidth/>
                

                
                  <TextField id="Username" label="Input Username" variant="outlined" value={list.Username} onChange={(event)=>setNewUsername(event.target.value)} fullWidth/>
                

              
                  <TextField id="Username" label="Input Password" variant="outlined" value= {list.Password}  onChange={(event)=>setNewPassword(event.target.value)} fullWidth/>
              
              
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="Allow">Allow</InputLabel>
                  <Select labelId="Allow" id="Allow" value={list.Allow} label="Allow" onChange={(event)=>setNewAllow(event.target.value)}>
                    <MenuItem value="">
                      <em></em>
                    </MenuItem>
                    <MenuItem value={1}>Admin</MenuItem>
                    <MenuItem value={2}>User</MenuItem>
                  </Select>
                </FormControl>
                
                <input type="hidden" name="userId" value={list.Id} onChange={setuserId}/>
              
                  <button onClick={EditUser} style={{ borderRadius: 20, backgroundColor: "#F8EA8C", padding: "10px 10px",fontSize: "15px"}} >
                    Edit
                  </button > 
                  <button style={{ borderRadius: 20, backgroundColor: "#FA270E", padding: "10px 10px",fontSize: "15px"}}>
                    Delete
                    </button>
                

              </form>
              )
            })
        } */}

            </Grid>
            <Grid item xs={3}></Grid>
        </Grid>
            
     </div>
        
    );
      
      }




export default EditUser;
if (document.getElementById('EditUser')) {
  ReactDOM.render(<EditUser />, document.getElementById('EditUser'));
}


// {
//     data.length == 0 ? "" : data.data.map((list,key) => {
//       return (
//         <h1 key={list.Id}>
//           List <br/>
//           <TextField id="Username" label="Input Name" variant="outlined" onChange={(event)=>setNewName(event.target.value)} value={NewName} /><br/>
//           Username {list.Username}<br/>
//           Password {list.Password}<br/>
//           UserType {list.UserType}<br/>
//           Allow {list.Allow}<br/>
//         </h1>
//       )
//     })
//   }
 