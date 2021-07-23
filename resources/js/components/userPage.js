import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './navbar';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import Profile from './profile';
import CreateItemF from './CreateItems';
import DisplayItemUser from './DisplayItemUser';



function Userpage() {  
  
  const [checkedItem, setCheckedItem] = React.useState(false);
  const [checkedPassChange, setPassChange] = React.useState(false);
  const [NewPassword, setNewPassword] = useState();

  const handleChangePass = () => {
    setPassChange((prev) => !prev);
  };

  const handleChangeItem = () => {
    setCheckedItem((prev) => !prev);
  };


  const update = () => {
   if(NewPassword == ""){
      alert("Error Password cannot be empty")
    }else{
          const token = document.head.querySelector('meta[name="csrf-token"]').getAttribute('content');
          const UserData = {
            NewPassword:NewPassword,
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
          if(confirm("Are You Sure?")){
            console.log('Password Change');
            fetch(`./userCrud/updatePass`,request)
            .then(response=> response.json())
            .then((result)=> {
              
              console.log(result);
              window.location = './redirect'
        
          });

          }else{
              alert("Password Change Aborted")
          }
          
        }
    };


    return (
      
        <div style={{ backgroundColor: '#B9B49E'}}>
            <Navbar />
          
            <Grid container spacing={1}>
                <Grid item xs={1}></Grid>
                <Grid item xs={2}>
                     <Profile />
                     <FormControlLabel
                      control={<Switch checked={checkedPassChange} onChange={handleChangePass} />}
                      label="Change your password?"
                    />
                      <Collapse in={checkedPassChange}>
                        <Paper elevation={4}>
                        <TextField label="New Password" variant="filled" type="password" value={NewPassword} onChange={(event)=>setNewPassword(event.target.value)} fullWidth/>
                          
                        </Paper>
                        <br/>
                        <button onClick={update} style={{ borderRadius: 20, backgroundColor: "#F8DE7E", padding: "10px 10px",fontSize: "15px"}}>
                              Update Password
                        </button>
                      </Collapse>
                </Grid> 
                <Grid item xs={8}>
                <FormControlLabel
                      control={<Switch checked={checkedItem} onChange={handleChangeItem} />}
                      label="Show Create/Update/Delete Items"
                    />
                      <Collapse in={checkedItem}>
                        <Paper elevation={4}>
                          <CreateItemF />
                          <DisplayItemUser />
                        </Paper>
                      </Collapse>
                </Grid>
            </Grid>
        </div>

    );
}

export default Userpage;

if (document.getElementById('userPage')) {
    ReactDOM.render(<Userpage />, document.getElementById('userPage'));
}
