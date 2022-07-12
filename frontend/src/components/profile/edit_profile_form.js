import React from 'react';


class EditForm extends React.Component{
    constructor(props) {
        super(props);
        this.state =this.props.currentUser
       
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleFile = this.handleFile.bind(this)
        // this.handleProfilePic =this.handleProfilePic.bind(this)
        
      }
    
      componentDidMount() {
        this.props.fetchUser(this.state.id)
      }

        // handleFile(e) {
        //     this.setState({photoFile: e.currentTarget.value});
        // }

      handleSubmit(e) {
        e.preventDefault();
        this.props.updateUser(this.state).then(this.props.closeModal)
    //     const formData = new FormData();
    //     formData.append('user[profile_pic]', this.state.photoFile)
      }
    

    handleUpdate(type) {
        return e => this.setState({
            [type]: e.currentTarget.value
        })
    }

    // handleProfilePic(user){
    //     if (!user.profile_picUrl) {
    //         return <p>no photo</p>
    //     } else {
    //         return <img className="profilePic"src={user.profile_picUrl} />;
    //     }
    // }
   


   
    
    render(){ 
        return (
            <div className="editform">
                <form onSubmit={this.handleSubmit}>
                    <button onClick={()=>{this.props.closeModal();}} className="close-x">X</button>
             
                    <h2>Edit Profile</h2>
                    <div className="modal-input-container">
                            <input type ="text"
                                id ="first_name"
                                required
                                className= "modal-input"
                                value = {this.state.fname}
                                onChange = {this.handleUpdate('fname')}
                            />
                            <label htmlFor='first_name' className="modal-label">First Name:</label> 
                        </div>

                    <br />
                    <div className="modal-input-container">
                            <input type ="text"
                                id ="last_name"
                                required
                                className= "modal-input"
                                value = {this.state.lname}
                                onChange = {this.handleUpdate('lname')}
                            />
                            <label htmlFor='last_name' className="modal-label">Last Name:</label> 
                        </div>
                    <div className="modal-input-container">
                        <input type="text"  //take a look at your label
                            id="bio"
                            required
                            className= "modal-input"
                            value={this.state.bio}
                            onChange={this.handleUpdate('bio')}
                        />
                        <label htmlFor= "bio" className="modal-label">Bio</label>
                    </div>
                    
                    <button onClick = {this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
     }
  
}
export default EditForm