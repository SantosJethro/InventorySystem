import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './navbar';
// import Login from './formLogin';
import CreateuserF from './CreateUserF';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import DialogContent from '@material-ui/core/DialogContent';

const useStyles = makeStyles((theme ) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
function Adminpage() {
    
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={{}} className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
      <Adminpage />
    </div>
  );
    return (
      
        <div>
            <Navbar />
            <Grid container spacing={3}>
                <Grid item xs={5}></Grid>
                <Grid item xs={8}>
                <button type="button" variant="contained" color="primary" onClick={handleOpen}>
        Create Users
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
          <DialogContent>
          <CreateuserF />
                </DialogContent>
                
        
      </Modal>
      <CreateuserF />
                </Grid>
            </Grid>
        </div>

    );
}

export default Adminpage;

if (document.getElementById('adminPage')) {
    ReactDOM.render(<Adminpage />, document.getElementById('adminPage'));
}
