import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './navbar';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import CreateUserF from './CreateUserF';
import DisplayUs from './DisplayUser';

import CreateItemF from './CreateItems';
import DisplayItem from './DisplayItem';

function Adminpage() {  
  const [checkedUser, setCheckedUser] = React.useState(false);
  const [checkedItem, setCheckedItem] = React.useState(false);

  const handleChangeUser = () => {
    setCheckedUser((prev) => !prev);
  };

  const handleChangeItem = () => {
    setCheckedItem((prev) => !prev);
  };

    return (
      
        <div style={{ backgroundColor: '#B9B49E'}}>
            <Navbar />
            <Grid container spacing={1}>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                <FormControlLabel
                      control={<Switch checked={checkedUser} onChange={handleChangeUser} />}
                      label="Show Create/Update/Delete Users"
                    />
                      <Collapse in={checkedUser}>
                        <Paper elevation={4}>
                          <CreateUserF />
                          
                          <DisplayUs />
                        </Paper>
                      </Collapse>

                      <FormControlLabel
                      control={<Switch checked={checkedItem} onChange={handleChangeItem} />}
                      label="Show Create/Update/Delete Items"
                    />
                      <Collapse in={checkedItem}>
                        <Paper elevation={4}>
                          <CreateItemF />
                          <DisplayItem />
                        </Paper>
                      </Collapse>
                </Grid>
            </Grid>
        </div>

    );
}

export default Adminpage;

if (document.getElementById('adminPage')) {
    ReactDOM.render(<Adminpage />, document.getElementById('adminPage'));
}
