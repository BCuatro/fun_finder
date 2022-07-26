import LoginFormContainer from './login_form_container'
import SignupFormContainer from './signup_form_container'
import React from 'react';
import logo from "../../fun_finder.png"
import { Link } from "react-router-dom";


class Sessions extends React.Component {
    constructor(props){
        super(props)
        this.handleToggle =this.handleToggle.bind(this)
        // this.renderErrors =this.renderErrors.bind(this)
        this.state ={
            pos: "left"
        }
       
        
    }
    handleToggle() {

        // this.props.clearSignupErrors()
        // console.log(this.props)
       if (this.state.pos === "left"){
        
        this.setState({pos: "right"}) 
       } else {
        this.setState({pos: "left"}) 
       }
       
    }

    // renderErrors() {
    //     return(
    //       <ul>
    //         {Object.keys(this.state.errors).map((error, i) => (
    //           <li key={`error-${i}`}>
    //             {this.state.errors[error]}
    //           </li>
    //         ))}
    //       </ul>
    //     );
    //   }
    render() {
        return (
            <div>
                <div className="sessionscontainer">
                    <div><LoginFormContainer />
                        <button className="sessionbutton" id="signup" onClick ={this.handleToggle}>Go To SignUp</button>
                    </div> 
                    <div className="signupform"><SignupFormContainer/>
                        <button className ="sessionbutton" id="login" onClick ={this.handleToggle}>Go To Login</button>
                    </div>
                    <div className= "overlay" id= {this.state.pos} >
                        <h2>Welcome to Fun Finder</h2>
                        <Link to={'/'} ><img src={logo} className="seslogo" alt="seslogo" /></Link>
                        <h2>Tap and Snack</h2>
                        <p>Click center icon to go back to randomizer</p>
                    </div>
                </div>
                
            </div>
        );
    }
}
export default Sessions