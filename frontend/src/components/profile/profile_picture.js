import axios from 'axios';
import React from 'react';

class ProfilePictureForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.userId,
      profilePic: this.props.user.profilePic,
      file: null

    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileUploadHandler = this.fileUploadHandler.bind(this);
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this);

  }
  fileSelectedHandler = e => {
    e.preventDefault();
    this.setState({ file: e.target.files[0] });
  };

  fileUploadHandler = async () => {

    const formData = new FormData();

    formData.append('file', this.state.file);
    const result = await axios.post('/api/users/uploads/', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
    return result;
  };

  componentDidMount() {
    this.props.fetchUser(this.state.id);

  }

  handleSubmit = async (e) => {
    e.preventDefault();

    await this.fileUploadHandler()
      .then((res) => {
        this.setState({ "profilePic": res.data.location });
      });
    this.props.updateUser(this.state)
      .then(this.props.closeModal);

  };


  handleUpdate(type) {
    return e => this.setState({
      [type]: e.currentTarget.value
    });
  }


  render() {
    return (
      <div className="editform">
        <form onSubmit={this.handleSubmit} encType="multipart/form-data">
          <button onClick={() => { this.props.closeModal(); }} className="close-x" id="picture-x">X</button>
          <h2 className="modalTitle">Update Profile Photo</h2>
          <div className="picture-buttons">

            <input
              style={{ display: 'none' }} type="file"
              onChange={this.fileSelectedHandler}
              ref={fileInput => this.fileInput = fileInput}

            />

            <button className="buttons"
              id="choose-pic"
              onClick={() => this.fileInput.click()}> Pick Profile Photo </button>

            <button className="buttons"
              id="upload-pic"
              onClick={this.handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    );
  }

}
export default ProfilePictureForm;