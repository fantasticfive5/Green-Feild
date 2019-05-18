<<<<<<< HEAD
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
        Hello SHABA7<br>
        </br>
        <input type="text" name="email" placeholder="Enter Your email" onChange={this.changed.bind(this)} /><br>
        </br>
        <input type="password" name="password" placeholder="Enter Your Password" onChange={this.changed.bind(this)} />
      </div>
    )
  }
}
export default SignIn;
=======
import React , { Component } from "react";



class signIn extends Component {
    constructor(props){
        super(props);

        this.state = {
            username : "",
            password : ""
        };
    }
   
    

    render() {
        return (
       <div className = "container">
         <div>
            <h3>SignIN</h3>
          </div>

       </div>    
        );
    }
}
export default signIn;
>>>>>>> 0f26452fc0aefb0952283086b56e877cea1e5647
