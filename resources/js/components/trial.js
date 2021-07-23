import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import CreateUserF from './CreateUserF';
import DisplayUs from './DisplayUser';
import CreateItemF from './CreateItems';
import DisplayItem from './DisplayItem';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  }
}));


function SimpleCollapse() {
  const classes = useStyles();
  const [checkedUser, setCheckedUser] = React.useState(false);
  const [checkedItem, setCheckedItem] = React.useState(false);

  const handleChangeUser = () => {
    setCheckedUser((prev) => !prev);
  };

  const handleChangeItem = () => {
    setCheckedItem((prev) => !prev);
  };


  return (
    <div className={classes.root}>
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
      
    </div>
  );
}
export default SimpleCollapse;
if (document.getElementById('SimpleCollapse')) {
  ReactDOM.render(<SimpleCollapse />, document.getElementById('SimpleCollapse'));
}