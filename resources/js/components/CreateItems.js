import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import { withStyles,makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';import Card from '@material-ui/core/Card';
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



function CreateItemF() {
  const classes1 = useStyles();
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
                                        <Grid item xs={12}>
                                            <TextField style={{backgroundColor: "white"}} variant="filled" label="Enter Item Name" id="ItemName" name="ItemName" onChange={(event)=>setItemName(event.target.value)} type="text" fullWidth/>
                                            <br/>

                                            <TextField style={{backgroundColor: "white"}} variant="filled" label="Enter ItemDesc" id="ItemDesc" name="ItemDesc" onChange={(event)=>setItemDesc(event.target.value)} type="text" fullWidth/>
                                            <br/>
                                            <TextField style={{backgroundColor: "white"}} variant="filled" id="ItemQuantity" label="Enter Item Quantity" onChange={(event)=>setItemQuantity(event.target.value)} type="text" fullWidth/>
                                            <br/>
                                            <br/>
                                            <Button style={{backgroundColor: "green"}} onClick={CreateItem} variant="outlined" endIcon={<SaveIcon />}>
                                              Create Item
                                            </Button>
                                        </Grid>
                                      </Grid>
                            </CardContent>
                          </Card>
                          

                          
                        
                  </Grid>
                 <Grid item xs={3}></Grid> 
              </Grid>
              <br/>
               <br/>
       </div>       
    )
  }



export default CreateItemF;
if (document.getElementById('CreateItem')) {
    ReactDOM.render(<CreateItems />, document.getElementById('CreateItem'));
 }