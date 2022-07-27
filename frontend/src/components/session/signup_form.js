import React from 'react';
import { withRouter } from 'react-router-dom';

import "../../styles/session.css";


class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            fname: "",
            lname: "",
            gender: "",
            birthdate: "",
            password: "",
            password2: "",
            // bYear: new Date().getFullYear(),
            // bMonth: new Date().getMonth() + 1,
            // bDay: new Date().getDate(),
            // profilepicture:"",
            signupErrors: []
        };


        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
        this.renderSignupErrors = this.renderSignupErrors.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/login');
        }
        this.setState({ signupErrors: nextProps.signupErrors });
    }
    getAge(dateString) {
        let today = new Date();
        let birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }


    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }


    handleSubmit(e) {
        e.preventDefault();

        let user = {
            email: this.state.email,
            fname: this.state.fname,
            lname: this.state.lname,
            gender: this.state.gender,
            // birthdate: this.state.birthdate,
            password: this.state.password,
            password2: this.state.password2,
        };
        this.props.signup(user, this.props.history);
    }
    renderSignupErrors() {
        return (
            <ul>
                {Object.keys(this.state.signupErrors).map((signupError, i) => (
                    <li key={`signupError-${i}`}>
                        {this.state.signupErrors[signupError]}
                    </li>
                ))}
            </ul>
        );
    }
    render() {
        return (
            <div className="form-container">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <br />
                        <div className="errors" id="signup-errors">
                            {this.renderSignupErrors()}
                        </div>
                        <h2 className="signuptitle">Sign Up</h2>
                        <div className="modal-input-container">
                            <input type="text"
                                id="first_name"
                                required
                                className="modal-input"
                                value={this.state.fname}
                                onChange={this.update('fname')}
                            />
                            <label htmlFor='first_name' className="modal-label">First Name:</label>
                        </div>

                        <br />
                        <div className="modal-input-container">
                            <input type="text"
                                id="last_name"
                                required
                                className="modal-input"
                                value={this.state.lname}
                                onChange={this.update('lname')}
                            />
                            <label htmlFor='last_name' className="modal-label">Last Name:</label>
                        </div>

                        <br />
                        <div className="modal-input-container">
                            <input type="text"
                                id="email"
                                required
                                className="modal-input"
                                value={this.state.email}
                                onChange={this.update('email')}
                            />
                            <label htmlFor='email' className="modal-label"> Email:</label>
                        </div>

                        <br />
                        <div className="modal-input-container">
                            <input type ="text"
                                id ="gender"
                                required
                                className= "modal-input"
                                value = {this.state.gender}
                                onChange = {this.update('gender')}
                            />
                            <label htmlFor='gender' className="modal-label">Gender:</label> 
                        </div>
                        <br/>
                        <div className="modal-input-container">
                            <input type="password"
                                id="password"
                                required
                                className="modal-input"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                            <label htmlFor='password' className="modal-label">Password:</label>
                        </div>
                        <br />

                        <div className="modal-input-container">
                            <input type="password"
                                id="password2"
                                required
                                className="modal-input"
                                value={this.state.password2}
                                onChange={this.update('password2')}
                            />
                            <label htmlFor='password2' className="modal-label">Confirm Password:</label>
                        </div>
                        {/* <div className="modal-input-container">
                            <input type ="file"
                                name= "profilePicture"
                                accept='image/*'
                                onChange={this.handleFile}
                            />
                            {/* <label htmlFor='file' className="modal-label">Upload Image:</label> 
                            </div>  */}

                        <br />
                        <input className="sessionbutton" type="submit" value="Submit" />
                        {/* <button className ="sessionbutton" id="login" onClick ={this.handleToggle}>Go To Login</button> */}



                    </div>
                </form>
            </div>
        );
    }

}

export default withRouter(SignupForm);