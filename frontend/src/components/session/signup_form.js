import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import "../../styles/session.css"


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
            // bYear: new Date().getFullYear(),
            // bMonth: new Date().getMonth() + 1,
            // bDay: new Date().getDate(),
            // profilepicture:"",
            signupErrors: []
        };
        console.log(new Date().getFullYear()-17)
        console.log(new Date().getMonth() + 1)
        console.log(new Date().getDate())
        console.log(new Date()/1000)
        console.log(this.update("birthdate"))
       
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
        this.renderSignupErrors = this.renderSignupErrors.bind(this);
        // this.handleFile = this.handleFile.bind(this)
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.signedIn ===true){
            this.props.history.push('/login');
        }
        this.setState({signupErrors: nextProps.signupErrors})
    }
    // componentWillUnmount(){
    //     this.props.removeErrors();
    // }   
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
    // handleFile = (event) => {
	// 	if (event.target.files && event.target.files.length > 0) {
	// 		const reader = new FileReader();
	// 		reader.readAsDataURL(event.target.files[0])
	// 	}
	// };

    handleSubmit(e) {
        e.preventDefault();
        // let profilePicture = new FormData()
        // // formData.append("email", this.state.email)
        // // formData.append("fname", this.state.fname)
        // // formData.append("lname", this.state.lname)
        // // formData.append("gender", this.state.gender)
        // // formData.append("password", this.state.password)
        // // formData.append("password2", this.state.password2)
        // // formData.append("profilePicture", this.state.profilePicture)
        // profilePicture.append('picture', this.state.file);
        // // this.props.uploadPicture(profilePicture).then(url => {this.setState({
        // //     errors: [],
        // //     inputReset: Date.now(),
        // //     file: null,
        // //     pictureUrl: null,
        // //   })
        // // })
        let user ={
            email: this.state.email,
            fname: this.state.fname,
            lname: this.state.lname,
            // gender: this.state.gender,
            // birthdate: this.state.birthdate,
            password: this.state.password,
            password2: this.state.password2,
            // profilepicture: this.state.profilepicture
        };
        this.props.signup(user,this.props.history);
    }
    renderSignupErrors() {
        return(
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
         return(
            <div className = "form-container">
                <form onSubmit ={this.handleSubmit}>
                    <div>
                        <br /> 
                        {this.renderSignupErrors()}
                        <h2 className="signuptitle">Sign Up</h2>
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
                        {/* <div className="modal-input-container">
                            <input type ="text"
                                id ="gender"
                                required
                                className= "modal-input"
                                value = {this.state.gender}
                                onChange = {this.update('gender')}
                            />
                            <label htmlFor='gender' className="modal-label">Gender:</label> 
                        </div> */}
                       
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
                        {/* <div className="modal-input-container">
                            <input type ="file"
                                name= "profilePicture"
                                accept='image/*'
                                onChange={this.handleFile}
                            />
                            {/* <label htmlFor='file' className="modal-label">Upload Image:</label> 
                            </div>  */}
                        
                        <br/>
                        <input className="sessionbutton" type = "submit" value= "Submit" />
                        {/* <button className ="sessionbutton" id="login" onClick ={this.handleToggle}>Go To Login</button> */}
                        

                        
                    </div>
                </form>
            </div>
         )
      }

}

export default withRouter(SignupForm)