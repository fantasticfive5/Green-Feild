import React, { Component } from 'react';

class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: ""
    }
  }
  changed(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div>
        <br>
        </br>
        <input type="text" name="email" placeholder="Enter Your email" onChange={this.changed.bind(this)} /><br>
        </br>
        <input type="password" name="password" placeholder="Enter Your Password" onChange={this.changed.bind(this)} />
      </div>
    )
  }
}
export default SignIn;
