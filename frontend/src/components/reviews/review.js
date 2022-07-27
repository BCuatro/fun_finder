import React, { useState } from "react";
import { FaStar } from 'react-icons/fa';
// import this.props.props.profilePic from "../../SMProfilePic.png"

class ExperienceForm extends React.Component {
  constructor(props) {
    super(props);
    // console.log('FOR PROPS', props);
    this.state = {
      listItems: [],
      fname: this.props.props.fname, 
      lname: this.props.props.lname,
      rating: '',
      review: '',
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
 

    // console.log('FOR PROPS AFTER', props);
  }

  // handleChange(event) {    
  //   this.setState({value: event.target.value});  
  // }

  // fnameHandler = e => this.setState({
  //   fname: e.target.value,
  // })
  // lnameHandler = e => this.setState({
  //   lname: e.target.value,
  // })

  ratingHandler = e => this.setState({
    rating: e.target.value,
  })

  // ratingHandler(e) {
  //   return e => this.setState({ rating: e.target.value})
  // }


  reviewHandler = e => this.setState({
    review: e.target.value,
  })

  // starFiller() {
  //   if (this.state.rating === 1) {
  //     this.state.rating = <FaStar className="star" color="ffc107"  />
  //   }
  // }

  submitHandler = e =>{
    e.preventDefault()
    this.setState({
      listItems: [
        ...this.state.listItems, 
        { fname: this.state.fname, 
          lname: this.state.lname, 
          rating: this.state.rating, 
          review: this.state.review}],
      fname: '',
      lname: '',
      rating: '',
      review: '',
    })
  }    

  // state

  // listAddHandler = () => {
  //   var listElement = document.createElement('li')
  //   listElement.appendChild("ul")
  // }

  // handleSubmit(event) {
  //   // alert('A name was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }

    render () {
      // {console.log("PROPS NAME=", this.props.props.fname)}
        return (
          <div> 
            <form onSubmit={this.submitHandler}>
            {/* <h3>Experiences </h3>
            <div className="form-container">
              
                <input type="text" placeholder="FirstName.." value={this.state.fname} onChange={this.fnameHandler} />
                <input type="text" placeholder="LastName.." value={this.state.lname} onChange={this.lnameHandler}  />
              </div> */}
                <h3>Rating:</h3>
                  <div className="rating">
                    {/* <i id='5'>☆</i><i id="4">☆</i><i id="3">☆</i><i id="2">☆</i><i id='1'>☆</i> */}
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;

                      
                      return ( 
                        <label>
                          <input 
                            type="radio" 
                            name="radioting" 
                            value={ratingValue} 
                            onClick={this.ratingHandler}/>
                            <FaStar 
                              className="star" 
                              color={ratingValue <= this.state.rating ? "rgb(255, 123, 0)" : "e4e5e9"} 
                              size={25} /> 
                              {/* {console.log(this.state.rating)} */}
                        </label>
                        )
                    })}
                <h4>How was your most recent adventure?</h4>
                  <textarea 
                    placeholder="Please tell us about your activity"
                    cols={80}
                    rows={15}
                    maxLength={350} 
                    value={this.state.review} 
                    onChange={this.reviewHandler}/>
                    <br></br>
                  <button className="rvw-buttons" type="submit">Submit</button>
                
              </div>
              </form>
                {/* <div className="review-container">
                <h5 className='usrrev'>User rvw-star</h5>
                  <ul className="review-list">
                {
                  this.state.listItems.map((li,key) => 
                    <li {...{key}}>{li}</li>)
                }
                </ul> 
                </div> */}

                <section id="testimonials" >
                  <div className="testimonial-heading">
                    <span>User Reviews</span>
                    {/* <h3>Client Says</h3> */}
                  </div>
                  <ul className="review-list">
                    {
                      this.state.listItems.map((li,key) => 
              
                      
                        <li {...{key}}>{
                        
                                  
                      <div className="testimonial-box-container">
                      <div className="testimonial-box">
                        <div className="box-top">
                          <div className="profile">
                            <div className="profile-img">
                              <img id= "review" src={this.props.props.profilePic} className="review picture" alt="review picture" />
                            </div>
                            <div className="name-user">
                              <strong>{this.props.props.fname + ' ' + this.props.props.lname}</strong>
                              
                            </div>
                          </div>
                     
                        {/* {console.log("NEW REVIEW", li)} */}
                          {/* {console.log("PROPS", props)} */}
                        <div className="rvw-star">
                        {[...Array(Number(li.rating))].map((star, i) => {
                      
                              return ( 
                                <FaStar 
                                className="star" 
                                color="rgb(255, 123, 0)" 
                                size={25} /> 
                                )
                          })
                        }
                        </div>
                        
                        </div> 

                        <div className="user-review">
                            <p>{li.review}</p>
                          </div>
                        
                        </div></div>

                        
                        }</li>)

                     
                    }
                  </ul> 
                  {/* box */}
                    <div className="testimonial-box-container">
                      {/* top */}
                      <div className="testimonial-box">

                        <div className="box-top">
                          {/* profile */}
                          <div className="profile">
                            {/* img */}
                            <div className="profile-img">
                              <img id= "review" src={this.props.props.profilePic} className="review picture" alt="review picture" />
                            </div>
                            <div className="name-user">
                              <strong> {this.props.props.fname + ' ' + this.props.props.lname}</strong>
                              
                            </div>
                          </div>
                          {/* rvw-star aka stars */}
                            <div className="rvw-star">
                                <FaStar 
                                  className="star" 
                                  color="rgb(255, 123, 0)" 
                                  size={25} /> 
                                <FaStar 
                                  className="star" 
                                  color="rgb(255, 123, 0)" 
                                  size={25} /> 
                                <FaStar 
                                  className="star" 
                                  color="rgb(255, 123, 0)" 
                                  size={25} /> 
                                <FaStar 
                                  className="star" 
                                  color="rgb(255, 123, 0)" 
                                  size={25} /> 
                                  <FaStar 
                                  className="star" 
                                  color="rgb(255, 123, 0)" 
                                  size={25} /> 
                          </div>
                          </div>

                          {/* comments */}
                          <div className="user-review">
                            <p>This is the best app ever</p>
                          </div>
                        
                        </div>
                    </div>
                    <div className="testimonial-box-container">
                      {/* top */}
                      <div className="testimonial-box">

                        <div className="box-top">
                          {/* profile */}
                          <div className="profile">
                            {/* img */}
                            <div className="profile-img">
                              <img id= "review" src={this.props.props.profilePic} className="review picture" alt="review picture"/>
                            </div>
                            <div className="name-user">
                              <strong> {this.props.props.fname + ' ' + this.props.props.lname}</strong>
                              
                            </div>
                          </div>
                          {/* rvw-star aka stars */}
                            <div className="rvw-star">
                                <FaStar 
                                  className="star" 
                                  color="rgb(255, 123, 0)" 
                                  size={25} /> 
                                  <FaStar 
                                  className="star" 
                                  color="rgb(255, 123, 0)" 
                                  size={25} /> 
                           
                          </div>
                          </div>

                          {/* comments */}
                          <div className="user-review">
                            <p>Didn't like that pizza place downtown </p>
                          </div>
                        
                        </div>
                    </div>
                    <div className="testimonial-box-container">
                      {/* top */}
                      <div className="testimonial-box">

                        <div className="box-top">
                          {/* profile */}
                          <div className="profile">
                            {/* img */}
                            <div className="profile-img">
                              <img id= "review" src={this.props.props.profilePic} className="review picture" alt="review picture"/>
                            </div>
                            <div className="name-user">
                              <strong> {this.props.props.fname + ' ' + this.props.props.lname}</strong>
                              
                            </div>
                          </div>
                          {/* rvw-star aka stars */}
                            <div className="rvw-star">
                                <FaStar 
                                  className="star" 
                                  color="rgb(255, 123, 0)" 
                                  size={25} /> 
                                <FaStar 
                                  className="star" 
                                  color="rgb(255, 123, 0)" 
                                  size={25} /> 
                                <FaStar 
                                  className="star" 
                                  color="rgb(255, 123, 0)" 
                                  size={25} /> 
                              
                          </div>
                          </div>

                          {/* comments */}
                          <div className="user-review">
                            <p>Gym was fun! I'm out of shape though!</p>
                          </div>
                        
                        </div>
                    </div>
                    <div className="testimonial-box-container">
                      {/* top */}
                      <div className="testimonial-box">

                        <div className="box-top">
                          {/* profile */}
                          <div className="profile">
                            {/* img */}
                            <div className="profile-img">
                              <img id= "review" src={this.props.props.profilePic} className="review picture" alt="review picture"/>
                            </div>
                            <div className="name-user">
                              <strong> {this.props.props.fname + ' ' + this.props.props.lname}</strong>
                              
                            </div>
                          </div>
                          {/* rvw-star aka stars */}
                            <div className="rvw-star">
                                <FaStar 
                                  className="star" 
                                  color="rgb(255, 123, 0)" 
                                  size={25} /> 
                                <FaStar 
                                  className="star" 
                                  color="rgb(255, 123, 0)" 
                                  size={25} /> 
                                <FaStar 
                                  className="star" 
                                  color="rgb(255, 123, 0)" 
                                  size={25} /> 
                                <FaStar 
                                  className="star" 
                                  color="rgb(255, 123, 0)" 
                                  size={25} /> 
                    
                          </div>
                          </div>
                          {/* comments */}
                          <div className="user-review">
                            <p>Hit the bar with my buddies and we had a blast!</p>
                          </div>
                        
                             
                        </div>
                    </div>
                </section>
          </div>


          
        )
    }
}

export default ExperienceForm;

