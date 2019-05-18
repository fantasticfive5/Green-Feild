// import { BrowserRouter , Switch , Route} from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom';
// import { Button, Modal, OverlayTrigger, Popover, Tooltip, Nav, NavItem, Row, Col, FormGroup, FieldGroup, Checkbox,Form } from 'react-bootstrap'
import SignIn from './auth/SignIn.jsx';
import SignUp from './auth/SignUp.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    // console.log(this.props.repos)
  }
  updateState(data) {
    this.setState({
    })
  }

  render() {
    return (<div>
      <h1>SignIn</h1>
      <SignIn />
      {/* <SignUp repos = {this.state.repos} /> */}
    </div>)
  }
}




ReactDOM.render(<App />, document.getElementById('app'));