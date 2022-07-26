import React from 'react';
import { withRouter } from 'react-router-dom';
import "../../styles/session.css";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            loginErrors: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/');
        }
        this.setState({ loginErrors: nextProps.loginErrors });
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
            password: this.state.password
        };
        this.props.login(user);
    }
    handleDemoUser(e) {
        e.preventDefault();
        const demoUser = { email: "spiderman@avengers.com", password: "spiderman" };
        this.props.login(demoUser);
    }
    renderErrors() {
        return (
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


        return (
            <div className="form-container">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <br />
                        <div className="errors" id="login-errors">
                            {this.renderErrors()}
                        </div>

                        <h2 className="logintitle">Log In </h2>
                        <div className="modal-input-container">
                            <input type="text"
                                id="loginemail"
                                required
                                className="modal-input"
                                value={this.state.email}
                                onChange={this.update('email')}
                            />
                            <label htmlFor='loginemail' className="modal-label"> Email:</label>
                        </div>
                        <br />
                        <div className="modal-input-container">
                            <input type="password"
                                id="loginpassword"
                                required
                                className="modal-input"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                            <label htmlFor='loginpassword' className="modal-label">Password:</label>
                        </div>
                        <br />
                        <input className="sessionbutton" type="submit" value="Submit" />
                        <br />
                        <button className="sessionbutton" id="demo" onClick={this.handleDemoUser}>DemoUser</button>


                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);