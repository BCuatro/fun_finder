import React from 'react';


class EditForm extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            id: this.props.userId,
            // fname:"",
            // lname:""
            fname: this.props.user.fname, 
            lname: this.props.user.lname,
            gender: this.props.user.gender,
            pronouns: this.props.user.pronouns,
            slogan: this.props.user.slogan,

        }
       
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleFile = this.handleFile.bind(this)
        // this.handleProfilePic =this.handleProfilePic.bind(this)
        
      }
      componentWillUnmount(){
        // this.props.removeErrors();

      }
      componentDidMount() {
        
        this.props.fetchUser(this.state.id)
        // this.setState({
        //     fname: this.props.user.fname, 
        //     lname: this.props.user.lname
        // })
        // .then(
        //     data =>console.log(data)
        // )
    
      }

        // handleFile(e) {
        //     this.setState({photoFile: e.currentTarget.value});
        // }

      handleSubmit(e) {
        e.preventDefault();
        
        this.props.updateUser(this.state)
        .then( this.forceUpdate())
        .then(this.props.closeModal)
    //     const formData = new FormData();
    //     formData.append('user[profile_pic]', this.state.photoFile)
        
      }
    

    handleUpdate(type) {
        return e => this.setState({
            [type]: e.currentTarget.value
        })
    }
    // componentDidUpdate(prevProps, prevState) {
    //     console.log(this.state)
    //     console.log(prevState)
    //     console.log(prevProps)
    //     if (prevState.fname !== this.state.fname || prevState.lname !== this.state.lname) {
    //         this.props.fetchUser(this.state.id)
    //     }
    //   }

    // handleProfilePic(user){
    //     if (!user.profile_picUrl) {
    //         return <p>no photo</p>
    //     } else {
    //         return <img className="profilePic"src={user.profile_picUrl} />;
    //     }
    // }
   


   
    
    render(){ 
        debugger
        return (
            <div className="editform">
                <form onSubmit={this.handleSubmit}>
                    <button onClick={()=>{this.props.closeModal()}} className="close-x">X</button>
             
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
                            <input type ="text"
                                id ="gender"
                                required
                                className= "modal-input"
                                value = {this.state.gender}
                                onChange = {this.handleUpdate('gender')}
                            />
                            <label htmlFor='last_name' className="modal-label">Gender:</label> 
                    </div>
                    <div className="modal-input-container">
                            <input type ="text"
                                id ="pronouns"
                                required
                                className= "modal-input"
                                value = {this.state.pronouns}
                                onChange = {this.handleUpdate('pronouns')}
                            />
                            <label htmlFor='last_name' className="modal-label">Pronouns</label> 
                    </div>
                   
                    <div className="modal-input-container">
                        <input type="text"  //take a look at your label
                            id="slogan"
                            required
                            className= "modal-input"
                            value={this.state.slogan}
                            onChange={this.handleUpdate('slogan')}
                        />
                        <label htmlFor= "slogan" className="modal-label">Slogan</label>
                    </div>
                    
                    <button onClick = {this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
     }
  
}
export default EditForm