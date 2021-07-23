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
  const {keysId,id, isDialogOpened, handleCloseDialog} = props;
  
  const [open, setOpen] = React.useState(false);
  const [NewName, setNewName] = useState();
  const [NewUsername, setNewUsername] = useState();
  const [NewPassword, setNewPassword] = useState();
  const [NewAllow, setNewAllow] = useState(); 
  
  useEffect(() => {
    handleClickOpen();
  }, []);

  const handleClickOpen = () => {
    
    //setOpen(true);
    //setTimeout(() => setOpen(false), 16000);
  };

  const handleClose = () => {
    //setOpen(false);
    handleCloseDialog(true);
  };

  const classes = useStyles();
// get single user


  const read1 = () => {
    const token = document.head.querySelector('meta[name="csrf-token"]').getAttribute('content');
    const request = {
        method: "POST",
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'X-CSRF-TOKEN': token,
        },
        body: JSON.stringify(keysId),
      }
     
       fetch(`userSingle/${keysId}`,request)
      .then(response=> response.json())
      .then((result)=> {
      
     
        setNewName(
          result.data1User[0].Name
        )
        setNewPassword(
           result.data1User[0].Password
        )
        setNewUsername(
           result.data1User[0].Username
        )
        setNewAllow(
          result.data1User[0].Allow
        )
        
      });
   

    
    }



    const update = () => {
      if(NewName == ""){
        alert("Error Name cannot be empty")
        
      }else if(NewUsername == ""){
        alert("Error Username cannot be empty")
       
      }else if(NewPassword == ""){
        alert("Error Password cannot be empty")
      
      }else if(NewAllow == ""){
        alert("Error Please Select Yes or No")
      }else{
            const token = document.head.querySelector('meta[name="csrf-token"]').getAttribute('content');
            const UserData = {
              NewName:NewName,
              NewUsername:NewUsername,
              NewPassword:NewPassword,
              NewAllow:NewAllow,
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
            console.log('EDIT');
            fetch(`./userCrud/update/${keysId}`,request)
            .then(response=> response.json())
            .then((result)=> {
              
              console.log(result);
              handleClose()
              window.location = './redirect'
        
      });
    }
  };

    const cancel = () => {
      handleClose()
      console.log("ABORTED EDIT USERS")
      // window.location = './redirect'
     
    }
    
  
    
    // useEffect(()=>{
    //   read1();
    //  },keysId);
  

    return (
      
      <div>
        
        <React.Fragment>
        {/* <Button variant="outlined" color="primary" onClick={handleOpen}>
        Open form dialog
      </Button> */}
      
        <Grid >
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
            <Dialog style={{height:'800px'}} open={isDialogOpened} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
                <DialogTitle id="form-dialog-title">Update User</DialogTitle>
                <DialogContent style={{backgroundColor: "Black"}}>
                <DialogContentText>
                <button style={{ borderRadius: 20, backgroundColor: "#00FF00", padding: "10px 10px",fontSize: "15px"}} onClick={read1}>Click To Get Details</button>
                </DialogContentText>
               
                  <TextField style={{backgroundColor: "white"}} id="Name" label="Input Name" InputLabelProps={{shrink:true}} variant="filled" value={NewName} onChange={(event)=>setNewName(event.target.value)} fullWidth/>
                
                <br/>
                <br/>
                
                  <TextField style={{backgroundColor: "white"}} id="Username" label="Input Username" InputLabelProps={{shrink:true}} variant="filled" value={NewUsername}  onChange={(event)=>setNewUsername(event.target.value)} fullWidth/>
                
                  <br/>
                  <br/>
              
                  <TextField style={{backgroundColor: "white"}} id="Password" label="Input Password" InputLabelProps={{shrink:true}} variant="filled" value={NewPassword} onChange={(event)=>setNewPassword(event.target.value)} fullWidth/>
              
                  <br/>
                  <br/>
                <FormControl variant="filled" className={classes.formControl} style={{backgroundColor: "white"}}>
                  <InputLabel id="Allow">Allow</InputLabel>
                  <Select labelId="Allow" id="Allow" label="Allow" value={NewAllow} onChange={(event)=>setNewAllow(event.target.value)}>
                    <MenuItem value={NewAllow}>
                      <em></em>
                    </MenuItem>
                    <MenuItem value={1}>YES</MenuItem>
                    <MenuItem value={2}>No</MenuItem>
                  </Select>
                </FormControl>
                
  

                </DialogContent>
                <DialogActions>
                <Button onClick={update} color="primary">
                    Confirm
                </Button>
                <Button onClick={cancel} color="primary">
                    Cancel
                </Button>
                
                </DialogActions>
            </Dialog>

            </Grid>
            <Grid item xs={3}></Grid>
        </Grid>
        </React.Fragment>
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
 