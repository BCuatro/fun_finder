import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import "../../styles/session.css"

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.currentUser ===true){
            this.props.history.push('/tweets');
        }
        this.setState({errors: nextProps.errors})
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
    renderErrors() {
        return(
          <ul>
            {Object.keys(this.state.errors).map((error, i) => (
              <li key={`error-${i}`}>
                {this.state.errors[error]}
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
                        <div className="overlay-left">
                            <Link to={'/signup'} id="sessionlinks">Signup</Link> 
                        </div>
                        <h2>Log In </h2>
                        <div className="modal-input-container">
                                <input type ="text"
                                    id ="email"
                                    required
                                    className= "modal-input"
                                    value = {this.state.email}
                                    onChange = {this.update('email')}
                                />
                                <label htmlFor='email' className="modal-label"> Email:</label> 
                            </div>
                        <br/>
                        <div className="modal-input-container">
                            <input type ="password"
                                id ="password"
                                required
                                className= "modal-input"
                                value = {this.state.password}
                                onChange = {this.update('password')}
                            />
                            <label htmlFor='password' className="modal-label">Password:</label> 
                        </div>
                        <br />
                        <input className="sessionbutton" type = "submit" value= "Submit" />
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
         )
      }
}

export default withRouter(LoginForm)