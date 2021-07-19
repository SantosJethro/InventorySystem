import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { render } from 'sass';

class Display extends Component {
  constructor (props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      // Username : '',
      // Password : '',
      // Name : '',
      // Usertype : '',
      // Allow : '',
      data: []
  };

  }

  


  
  componentDidMount() {
     fetch('./userAll')
    .then(response=> response.json())
    .then((result)=> {
      this.setState({
        isLoaded: true,
        data: result.data
        // Username: result.Username,
        // Password: result.Password,
        // Name: result.Name,
        // UserType: result.UserType,
        // allow: result.Allow
   
      })
    }).catch(error => {
      this.setState({
        isLoaded: true,
        error
      });
    
     
        
        }
        )
  }

 

  
   render () {
  //   const{ error, isLoaded, username, password,name,Usertype,allow} = this.state;
  //   if (error) {
  //     return <div>Error: {error.message}</div>;
  //   } else if (!isLoaded) {
  //     return <div>Loading...</div>;
  //   } else {
    return (
      <ul>
        {
          data.map(data => (
          <li key={data.id}>
            {data.Name} {data.Password}
          </li>
        ))
      }
      </ul>
  );
   }
}