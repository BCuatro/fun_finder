import React from 'react';
import { withRouter } from 'react-router-dom';
import "../../styles/signup.css"

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
            password2:"",
            bYear: new Date().getFullYear(),
            bMonth: new Date().getMonth() + 1,
            bDay: new Date().getDate(),
            errors: {}
        };
        console.log(new Date().getFullYear()-17)
        console.log(new Date().getMonth() + 1)
        console.log(new Date().getDate())
        console.log(new Date()/1000)
        console.log(this.update("birthdate"))
       
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
        this.renderErrors = this.renderErrors.bind(this);
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.signedIn ===true){
            this.props.history.push('/login');
        }
        this.setState({errors: nextProps.errors})
    }
    getAge(dateString) {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
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
            fname: this.state.fname,
            lname: this.state.lname,
            gender: this.state.gender,
            birthdate: this.state.birthdate,
            password: this.state.password,
            password2: this.state.password2
        };
        this.props.signup(user,this.props.history);
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
            <div className = "sign-form-container">
                <form onSubmit ={this.handleSubmit}>
                    <div>
                        <br /> 
                        <div className="modal-input-container">
                            <input type ="text"
                                id ="first_name"
                                required
                                className= "modal-input"
                                value = {this.state.fname}
                                onChange = {this.update('fname')}
                            />
                            <label htmlFor='first_name' className="modal-label">First Name:</label> 
                        </div>
                        
                        <br/>
                        <div className="modal-input-container">
                            <input type ="text"
                                id ="last_name"
                                required
                                className= "modal-input"
                                value = {this.state.lname}
                                onChange = {this.update('lname')}
                            />
                            <label htmlFor='last_name' className="modal-label">Last Name:</label> 
                        </div>
                        
                        <br/>
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

                        <div className="modal-input-container">
                            <input type ="password"
                                id ="password2"
                                required
                                className= "modal-input"
                                value = {this.state.password2}
                                onChange = {this.update('password2')}
                            />
                            <label htmlFor='password2' className="modal-label">Confirm Password:</label> 
                        </div>
                        
                        <br/>
                        <input className="button" type = "submit" value= "Submit" />
                        {this.renderErrors()}
                        {/* <input type ="date"
                            value = {this.state.birthdate}
                            onChange = {this.update('birthdate')}
                        /> */}
                    </div>
                </form>
            </div>
         )
      }

}

export default withRouter(SignupForm)