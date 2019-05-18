// import { BrowserRouter , Switch , Route} from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom';
// import { Button, Modal, OverlayTrigger, Popover, Tooltip, Nav, NavItem, Row, Col, FormGroup, FieldGroup, Checkbox,Form } from 'react-bootstrap'

import SignUp from './auth/SignUp.jsx';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
<<<<<<< HEAD

    
=======
    repos : []
>>>>>>> b16e6c3332b02bfb9f4ad5a37fc3c7f73e35e25f
    }


  }

  updateState(data){
    this.setState({
      repos : data
    })
  }
  

  render () {
    return (<div>

      <h1>rawan</h1>

      <h1>Item List</h1>
      <SignUp repos = {this.state.repos} />
      

     
    </div>)
  }
}


 

ReactDOM.render(<App />, document.getElementById('app'));