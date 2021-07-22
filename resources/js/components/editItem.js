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


function EditItem(props) {
  const {keysId,id, isDialogOpened, handleCloseDialog} = props;
  
  const [open, setOpen] = React.useState(false);
  const [NewItemName, setNewItemName] = useState();
  const [NewItemDesc, setNewItemDesc] = useState();
  const [NewItemQuantity, setNewItemQuantity] = useState();
  
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
      console.log('hahaha',keysId)
       fetch(`itemSingle/${keysId}`,request)
      .then(response=> response.json())
      .then((result)=> {
      
     
        console.log('dddd',result.data1Item[0].Allow)
        setNewItemName(
          result.data1Item[0].Name
        )
        setNewItemQuantity(
           result.data1Item[0].Password
        )
        setNewItemDesc(
           result.data1Item[0].Username
        )
        
        
      });
   

    
    }



    const update = () => {
     
      const token = document.head.querySelector('meta[name="csrf-token"]').getAttribute('content');
      const UserData = {
        NewItemName:NewItemName,
        NewItemDesc:NewItemDesc,
        NewItemQuantity:NewItemQuantity,
     
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
      fetch(`./itemCrud/update/${keysId}`,request)
      .then(response=> response.json())
      .then((result)=> {
        
        console.log(result);
        handleClose()
        // window.location = './redirect'
        
      });
    };

    const cancel = () => {
      handleClose()
      console.log("ABORTED UPDATE ITEMS")
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
                <DialogContent>
                <DialogContentText>
                <button style={{ borderRadius: 20, backgroundColor: "#00FF00", padding: "10px 10px",fontSize: "15px"}} onClick={read1}>Click To Get Details</button>
                </DialogContentText>
               
                  <TextField id="Item Name" label="Input Item Name" InputLabelProps={{shrink:true}} variant="outlined" value={NewItemName} onChange={(event)=>setNewItemName(event.target.value)} fullWidth/>
                
                <br/>
                <br/>
                
                  <TextField id="Item Desc" label="Input Username" InputLabelProps={{shrink:true}} variant="outlined" value={NewItemDesc}  onChange={(event)=>setNewItemDesc(event.target.value)} fullWidth/>
                
                  <br/>
                  <br/>
              
                  <TextField id="Item Quantity" label="Item Quantity" InputLabelProps={{shrink:true}} variant="outlined" value={NewItemQuantity} onChange={(event)=>setNewItemQuantity(event.target.value)} fullWidth/>
              
                  <br/>
                  <br/>

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

    


export default EditItem;
if (document.getElementById('EditItem')) {
  ReactDOM.render(<EditItem />, document.getElementById('EditItem'));
}


// {
//     data.length == 0 ? "" : data.data.map((list,key) => {
//       return (
//         <h1 key={list.Id}>
//           List <br/>
//           <TextField id="Username" label="Input Name" variant="outlined" onChange={(event)=>setNewItemName(event.target.value)} value={NewItemName} /><br/>
//           Username {list.Username}<br/>
//           Password {list.Password}<br/>
//           UserType {list.UserType}<br/>
//           Allow {list.Allow}<br/>
//         </h1>
//       )
//     })
//   }
 