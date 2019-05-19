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
      repos: [],
      nextPage: SignIn
    }



  }
  updateState(data) {
    this.setState({
    })
  }
  
change(e){
  console.log('5ara 3alaik motasem')
  this.setState({ [e.target.name]: e.target.value })
}
handleChange(event){
  this.setState({
    email : this.props.email,
     password : this.props.password
  })
}

  render() {
<<<<<<< HEAD
    return (
      <form>
        <div className='homePage'><center>

          <button onChange= {this.change.bind(this)}>
            Car Owner
          </button> <br>
          </br>
          <button onChange= {this.change.bind(this)}>
            Shop Owner
            </button>
        </center>
        </div>
      </form>
      // <div>
      //   <h1>SignUp</h1>
      //   <SignUp />
      //   {/* <SignUp repos = {this.state.repos} /> */}
      // </div>
    )
=======
    return (<div>
<<<<<<< HEAD
=======

      <h1>SginIn</h1>

      <SignUp repos = {this.state.repos} />



    </div>)
  }
}
>>>>>>> 17aa294bf3a3ba0da039e0818940d0e15ae715b5

      <h1>SginIn</h1>

      <SignUp repos = {this.state.repos} />



    </div>)
>>>>>>> 17aa294bf3a3ba0da039e0818940d0e15ae715b5
  }
}
ReactDOM.render(<App />, document.getElementById('app'));