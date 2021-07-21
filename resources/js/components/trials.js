
import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: "green",
      
    },
    '&:nth-of-type(even)': {
      backgroundColor: "orange",
     
    },
  },
}))(TableRow);

const buttonStyles = {
  warning:{
      backgroundColor: "#F8EA8C",
      padding: "10px 10px",
      fontSize: "8px"
  },
  danger:{
    backgroundColor: "#FA270E",
      padding: "10px 10px",
      fontSize: "8px"
  },
}

function DisplayUs() {
  const styleBut = buttonStyles;
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [NewName, setNewName] = useState();
  const [NewUsername, setNewUsername] = useState();
  const [NewPassword, setNewPassword] = useState();
  const [NewAllow, setNewAllow] = useState(); 
  const [userId, setuserId] = useState();


  const AllUser = () => {
   fetch('./userAll')
   .then(response=> response.json())
    .then((result)=> {
      setData({
        data: result.datas
      });
      console.log('asd',result.datas);
    }).catch(error => {
      console.log(error)
    },
       )

    const EditUser = () => {
     
      const token = document.head.querySelector('meta[name="csrf-token"]').getAttribute('content');
      const data = {
        password:password,
        email:email,
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
       fetch('/auth/login/${userId}/editU',request)
      .then(response=> response.json())
      .then((result)=> {
        console.log(result);
          window.location = '/test';
      });
    };
    
};

    
    return (
      
      <div>
        <button onClick={AllUser}>aaaa</button>
        
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Username</StyledTableCell>
            <StyledTableCell>Password</StyledTableCell>
            <StyledTableCell>Allow</StyledTableCell>
            <StyledTableCell>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
          { 
            data.length == 0 ? "" : data.data.map((list) => {
              return(
              <StyledTableRow key={list.Id}>
                <StyledTableCell>
                  <TextField id="Username" label="Input Name" variant="outlined" value={list.Name} readOnly/>
                </StyledTableCell>

                <StyledTableCell>
                  <TextField id="Username" label="Input Username" variant="outlined" value={list.Username} readOnly/>
                </StyledTableCell>

                <StyledTableCell>
                  <TextField id="Username" label="Input Password" variant="outlined" value= {list.Password} readOnly/>
                </StyledTableCell>

              

                <StyledTableCell>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="Allow">Allow</InputLabel>
                  <Select labelId="Allow" id="Allow" value={list.Allow} label="Allow">
                    <MenuItem value="">
                      <em></em>
                    </MenuItem>
                    <MenuItem value={1}>Admin</MenuItem>
                    <MenuItem value={2}>User</MenuItem>
                  </Select>
                </FormControl>
                </StyledTableCell>

                <StyledTableCell>
                  <button style={{ borderRadius: 20, backgroundColor: "#F8EA8C", padding: "10px 10px",fontSize: "15px"}}>
                    Edit
                  </button > 
                  <button style={{ borderRadius: 20, backgroundColor: "#FA270E", padding: "10px 10px",fontSize: "15px"}}>
                    Delete
                    </button>
                </StyledTableCell>

              </StyledTableRow>
              )
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
        {
          data.length == 0 ? "" : data.data.map((list,key) => {
            return (
              <h1 key={list.Id}>
                List <br/>
                Name: {list.Name}<br/>
                Username {list.Username}<br/>
                Password {list.Password}<br/>
                UserType {list.UserType}<br/>
                Allow {list.Allow}<br/>
              </h1>
            )
          })
        }
       
     </div>
        
    );
      
      }




export default DisplayUs;
if (document.getElementById('displayU')) {
  ReactDOM.render(<DisplayUs />, document.getElementById('displayU'));
}
