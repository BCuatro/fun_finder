import axios from 'axios';
import React from 'react';

class PhotoAlbumForm extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            id: this.props.userId,
            // fname: this.props.user.fname, 
            // lname: this.props.user.lname,
            // gender: this.props.user.gender,
            // pronouns: this.props.user.pronouns,
            // slogan: this.props.user.slogan,
            aboutMePicA: this.props.user.aboutMePicA,
            file: null

        }
       
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileUploadHandler= this.fileUploadHandler.bind(this);
        this.fileSelectedHandler= this.fileSelectedHandler.bind(this)
        
      }
      fileSelectedHandler = e => {
        e.preventDefault();
        this.setState({file: e.target.files[0]})
      }
      
      fileUploadHandler = async () => {

        const formData = new FormData();

        formData.append('file', this.state.file)
        const result = await axios.post('/api/users/uploads/', formData, { headers: {'Content-Type': 'multipart/form-data'}})
       
        console.log(this.state)
        return result
      }
      
      componentDidMount() {
        
        this.props.fetchUser(this.state.id)
      
    
      }

       

      handleSubmit= async (e)=> {
        e.preventDefault();
        
        await this.fileUploadHandler()
        .then((res)=> {
        console.log(res)
        this.setState({aboutMePicA: res.data.location})})
        console.log("check state here", this.state)
        this.props.updateUser(this.state)
        .then(this.props.closeModal)
        
      }
    

    handleUpdate(type) {
        return e => this.setState({
            [type]: e.currentTarget.value
        })
    }
 
   
    render(){ 
        return (
            <div className="editform">
                <form onSubmit={this.handleSubmit} encType="multipart/form-data">
                    <button onClick={()=>{this.props.closeModal()}} className="close-x" id="picture-x">X</button>
                    
                    <h2>Update My Picture - Photo A</h2>
                    <div className= "picture-buttons">

                      <input 
                      style ={{display: 'none'}} 
                      type = "file" 
                      onChange= {this.fileSelectedHandler}  
                      ref={fileInput => this.fileInput = fileInput}
                      />
                      <button className= "buttons" 
                      id="choose-pic"
                      onClick ={() => this.fileInput.click()}> Pick Photo A  </button>
                      <button className = "buttons" 
                      id="upload-pic"
                      onClick = {this.handleSubmit}>Submit</button>
                    </div>

                </form>
            </div>
        )
     }
  
}
export default PhotoAlbumForm