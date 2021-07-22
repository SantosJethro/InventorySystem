import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



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



function CreateItemF() {
  const [ItemName, setItemName] = useState();
  const [ItemDesc, setItemDesc] = useState();
  const [ItemQuantity, setItemQuantity] = useState();
  // const {isDialogOpened, handleCloseDialog} = props;
  const [open, setOpen] = React.useState(false);

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


  const CreateItem = () => {
    const token = document.head.querySelector('meta[name="csrf-token"]').getAttribute('content');
    const itemData = {
      ItemName:ItemName,
      ItemDesc:ItemDesc,
      ItemQuantity:ItemQuantity,
    };
    
    const request = {
      method: "POST",
     
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-CSRF-TOKEN': token,
      },
      body: JSON.stringify(itemData),
    }
     fetch('./itemCrud',request)
    .then(response=> response.json())
    .then((result)=> {
      console.log(result);
        
    }).catch(error => {
      alert("ERRor::",error.response.data);
       response => alert(JSON.stringify(response.data))
     
        
        });
  };

  const cancel = () => {
    handleClose()
    console.log("ABORTED CREATE ITEMS")
  }
  
  
    return (
      <div>
              <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                  Open form dialog
              </Button>
              <Grid container spacing={3}>
                <Grid item xs={3}></Grid>
                  <Grid item xs={6}>
                  
                          <div className='form-group'>
                            <Grid container spacing={1} alignItems="flex-end">
                              <div>
                                <Grid item>
                                <TextField label="Enter Item Name" id="ItemName" name="ItemName" onChange={(event)=>setItemName(event.target.value)} type="text" fullWidth/>
                                </Grid>
                              </div>
                            </Grid>
                          </div>

                          <div className='form-group'>
                            <Grid container spacing={1} alignItems="flex-end">
                              <TextField label="Enter ItemDesc" id="ItemDesc" name="ItemDesc" onChange={(event)=>setItemDesc(event.target.value)} type="text"/>
                          </Grid>
                          </div>
                        
                        
                              <Grid container spacing={1} alignItems="flex-end">
                                <Grid item>
                                  <TextField id="ItemQuantity" label="Enter Item Quantity" onChange={(event)=>setItemQuantity(event.target.value)} type="text" fullWidth={true} />
                                </Grid>
                              </Grid>
                          

          
                        
                          
                              <Grid item xs={5}>
                                  <Button onClick={CreateItem}>
                                Create Item
                                </Button>
                              </Grid>
                        
                  </Grid>
                 <Grid item xs={3}></Grid> 
              </Grid>
              
            
              {/* <Dialog style={{height:'800px'}} open={isDialogOpened} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
                <DialogTitle id="form-dialog-title">Create User</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    
                    </DialogContentText>
                  
                    <TextField label="Enter Item Name" id="ItemName" name="ItemName" onChange={(event)=>setItemName(event.target.value)} type="text" fullWidth/>
                    <br/>
                    <br/>
                    <TextField label="Enter ItemDesc" id="ItemDesc" name="ItemDesc" onChange={(event)=>setItemDesc(event.target.value)} type="password"/>
                    <br/>
                    <br/>
                    <TextField id="Password" label="Input Password" InputLabelProps={{shrink:true}} variant="outlined" value={NewPassword} onChange={(event)=>setNewPassword(event.target.value)} fullWidth/>

                </DialogContent>
                <DialogActions>
                <Button onClick={CreateItem} color="primary">
                    CreateItem
                </Button>
                <Button onClick={cancel} color="primary">
                    Cancel
                </Button>
                
                </DialogActions>
            </Dialog> */}

       </div>       
    )
  }



export default CreateItemF;
if (document.getElementById('CreateItem')) {
    ReactDOM.render(<CreateItemF />, document.getElementById('CreateItem'));
 }