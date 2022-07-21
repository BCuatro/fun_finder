import React from 'react';
import { withRouter } from 'react-router-dom';
import "../../styles/session.css"

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            loginErrors: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
        this.handleToggle = this.handleToggle.bind(this)
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.currentUser ===true){
            this.props.history.push('/tweets');
        }
        this.setState({loginErrors: nextProps.loginErrors})
    }
    // componentWillUnmount(){
    //         this.props.removeErrors();
    // }

    handleToggle() {
        
        if (this.state.pos === "left"){
         
         this.setState({pos: "right"}) 
        } else {
         this.setState({pos: "left"}) 
        }
     }

    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        let user ={
            email: this.state.email,
            password: this.state.password
        };
        this.props.login(user);
    }
    handleDemoUser(e){
        e.preventDefault();
        const demoUser = { email: "spiderman@avengers.com", password:"spiderman"}
        this.props.login(demoUser)
    }
    renderErrors() {
        return(
          <ul>
            {Object.keys(this.state.loginErrors).map((loginError, i) => (
              <li key={`loginError-${i}`}>
                {this.state.loginErrors[loginError]}
              </li>
            ))}
          </ul>
        );
      }
      render() {
        

         return(
            <div className = "form-container">
                <form onSubmit ={this.handleSubmit}>
                    <div> 
                        <br />
                        {/* <div className="overlay-left">
                            <Link to={'/signup'} id="sessionlinks">Signup</Link> 
                        </div> */}
                        <h2 className="logintitle">Log In </h2>
                        <div className="modal-input-container">
                                <input type ="text"
                                    id ="loginemail"
                                    required
                                    className= "modal-input"
                                    value = {this.state.email}
                                    onChange = {this.update('email')}
                                />
                                <label htmlFor='loginemail' className="modal-label"> Email:</label> 
                            </div>
                        <br/>
                        <div className="modal-input-container">
                            <input type ="password"
                                id ="loginpassword"
                                required
                                className= "modal-input"
                                value = {this.state.password}
                                onChange = {this.update('password')}
                            />
                            <label htmlFor='loginpassword' className="modal-label">Password:</label> 
                        </div>
                        <br />
                        <input className="sessionbutton" type = "submit" value= "Submit" />
                        <br />
                        <button className ="sessionbutton" id="demo" onClick = {this.handleDemoUser}>DemoUser</button>
                        {/* <button className="sessionbutton" id="signup" onClick ={this.handleToggle}>Go To SignUp</button> */}
                       {/* <div id= {this.state.pos}>
                            <div id= "overlay" >
                                <h2>Welcome to Fun Finder</h2>
                                <Link to={'/'} ><img src={logo} className="seslogo" alt="seslogo" /></Link>
                                <h2>Tap and Snack</h2>
                                <p>Click center icon to go back to randomizer</p>
                            </div>
                        </div> */}
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
         )
      }
}

export default withRouter(LoginForm)