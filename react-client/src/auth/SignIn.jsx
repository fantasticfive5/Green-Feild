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