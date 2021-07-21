
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
import editUser from './editUser';

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
  const classes = useStyles();
  const [data, setData] = useState([]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  const AllUser = () => {
   fetch('./userAll')
   .then(response=> response.json())
    .then((result)=> {
      setData({
        data: result.datas
      });
    
    }).catch(error => {
      console.log(error)
    },
       )
      };
    const EditUser = ($id) => {
      setOpen(true);
     
     console.log($id)
     
    };

    const DeleteUser = ($id) => {
      const token = document.head.querySelector('meta[name="csrf-token"]').getAttribute('content');
      const id = $id;
    const request = {
      method: "POST",
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-TOKEN': token
      },
      body: JSON.stringify(id),
    }
    if(confirm("Delete this User?")){
console.log($id)
    fetch(`userCrud/delete/${id}`,request)
    .then(response=> response.json())
    .then((result)=> {
      console.log(result)
    }).catch(error => {
      console.log(error)
    },
       )
    }else{
      alert('Delete User Failed')
    }
     };
    

     useEffect(()=>{
      AllUser();
     },[]);
    
    return (
      
      <div>
      
      {/* <EditUser open onclose id={id}/> */}
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        asd
      </Button>
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
                  {list.Name}
                </StyledTableCell>

                <StyledTableCell>
                  {list.Username}
                </StyledTableCell>

                <StyledTableCell>
                 {list.Password}
                </StyledTableCell>

                <StyledTableCell>
                  {list.Allow == 1 ? "YES" : "NO"}
                </StyledTableCell>

                <StyledTableCell>
                  <button onClick={() => EditUser(list.Id)} style={{ borderRadius: 20, backgroundColor: "#F8EA8C", padding: "10px 10px",fontSize: "15px"}} >
                    Edit 
                  </button > 
                  <button onClick={() => DeleteUser(list.Id)} style={{ borderRadius: 20, backgroundColor: "#FA270E", padding: "10px 10px",fontSize: "15px"}}>
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
