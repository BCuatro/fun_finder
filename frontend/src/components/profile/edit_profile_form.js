import React from 'react';

class EditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userId,
            fname: this.props.user.fname,
            lname: this.props.user.lname,
            gender: this.props.user.gender,
            pronouns: this.props.user.pronouns,
            slogan: this.props.user.slogan,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

        this.props.fetchUser(this.state.id);


    }

    handleSubmit = async (e) => {
        e.preventDefault();
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
                    <button onClick={() => { this.props.closeModal(); }} className="close-x">X</button>

                    <h2>Edit Profile</h2>
                    <div className="modal-input-container">
                        <input type="text"
                            id="first_name"
                            required
                            className="modal-input"
                            value={this.state.fname}
                            onChange={this.handleUpdate('fname')}
                        />
                        <label htmlFor='first_name' className="modal-label-edit">First Name:</label>
                    </div>
                    <div className="modal-input-container">
                        <input type="text"
                            id="last_name"
                            required
                            className="modal-input"
                            value={this.state.lname}
                            onChange={this.handleUpdate('lname')}
                        />
                        <label htmlFor='last_name' className="modal-label-edit">Last Name:</label>
                    </div>
                    <div className="modal-input-container">
                        <input type="text"
                            id="gender"
                            required
                            className="modal-input"
                            value={this.state.gender}
                            onChange={this.handleUpdate('gender')}
                        />
                        <label htmlFor='last_name' className="modal-label-edit">Gender:</label>
                    </div>
                    <div className="modal-input-container">
                        <input type="text"
                            id="pronouns"
                            required
                            className="modal-input"
                            value={this.state.pronouns}
                            onChange={this.handleUpdate('pronouns')}
                        />
                        <label htmlFor='last_name' className="modal-label-edit">Pronouns</label>
                    </div>

                    <div className="modal-input-container">
                        <input type="text"
                            id="slogan"
                            required
                            className="modal-input"
                            value={this.state.slogan}
                            onChange={this.handleUpdate('slogan')}
                        />
                        <label htmlFor="slogan" className="modal-label-edit">Slogan</label>
                    </div>


                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }

}
export default EditForm;