import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './navbar';
// import Login from './formLogin';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
function Example() {
    
    const classes = useStyles();
    return (
        <div>
            <Navbar />
            {/* <Login /> */}
        </div>

    );
}

export default Example;

if (document.getElementById('app')) {
    ReactDOM.render(<Example />, document.getElementById('app'));
}
