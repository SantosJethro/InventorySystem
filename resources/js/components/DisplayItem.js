
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
import EditItem from './editItem';
import DialogContent from '@material-ui/core/DialogContent';
import Modal from '@material-ui/core/Modal';
import { Replay10Rounded, SettingsInputComponent, SettingsPowerRounded } from '@material-ui/icons';
import { list } from 'postcss';

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

function DisplayItem() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [keyId, setkeyId] = useState();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(isOpen);
  };
  
  const AllItem = () => {
   fetch('./itemAll')
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

  const editItem = ($id) => {
      
     handleOpen();
     setkeyId($id);
   
    //  console.log($id)
     
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
    if(confirm("Delete this Item?")){
console.log($id)
    fetch(`itemCrud/delete/${id}`,request)
    .then(response=> response.json())
    .then((result)=> {
      console.log(result)
      window.location = './redirect';
    }).catch(error => {
      console.log(error)
    },
       )
    }else{
      alert('Delete Item Failed')
    }
     };
    

     useEffect(()=>{
      AllItem();
     },[]);
    
    return (
      
      <div>
      
      {/* <editItem open onclose id={id}/> */}
     
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Item Name</StyledTableCell>
            <StyledTableCell>Item Desc</StyledTableCell>
            <StyledTableCell>Item Quantity</StyledTableCell>
            <StyledTableCell>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
          { 
            data.length == 0 ? "" : data.data.map((list) => {
              return(
              <StyledTableRow key={list.ItemId}>
                <StyledTableCell>
                  {list.ItemName}
                </StyledTableCell>

                <StyledTableCell>
                  {list.ItemDesc}
                </StyledTableCell>

                <StyledTableCell>
                 {list.ItemQuantity}
                </StyledTableCell>


                <StyledTableCell>
                  <button onClick={() => editItem(list.ItemId)} style={{ borderRadius: 20, backgroundColor: "#F8EA8C", padding: "10px 10px",fontSize: "15px"}} >
                    Edit 
                   
                  </button > 
                  <button onClick={() => DeleteUser(list.ItemId)} style={{ borderRadius: 20, backgroundColor: "#FA270E", padding: "10px 10px",fontSize: "15px"}}>
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
    <EditItem keysId={keyId} isDialogOpened={isOpen} handleCloseDialog={() => setIsOpen(false)}/>
            
       
     </div>
        
    );
      
      }




export default DisplayItem;
if (document.getElementById('DisplayItem')) {
  ReactDOM.render(<DisplayItem />, document.getElementById('DisplayItem'));
}
