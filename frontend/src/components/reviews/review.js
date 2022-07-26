import React, { useState } from "react";
import { FaStar } from 'react-icons/fa';
import propic from "../../SMProfilePic.png"

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
                <h5 className='usrrev'>User Reviews</h5>
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
                              <img id= "review" src={propic} className="review picture" alt="review picture" />
                            </div>
                            <div className="name-user">
                              <strong>{this.props.props.fname + ' ' + this.props.props.lname}</strong>
                              
                            </div>
                          </div>
                     
                        {console.log("NEW REVIEW", li)}
                          {/* {console.log("PROPS", props)} */}
                        <div className="reviews">
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
                              <img id= "review" src={propic} className="review picture" alt="review picture" />
                            </div>
                            <div className="name-user">
                              <strong> {this.props.props.fname + ' ' + this.props.props.lname}</strong>
                              
                            </div>
                          </div>
                          {/* reviews aka stars */}
                            <div className="reviews">
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
                              <img id= "review" src={propic} className="review picture" alt="review picture"/>
                            </div>
                            <div className="name-user">
                              <strong> {this.props.props.fname + ' ' + this.props.props.lname}</strong>
                              
                            </div>
                          </div>
                          {/* reviews aka stars */}
                            <div className="reviews">
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
                              <img id= "review" src={propic} className="review picture" alt="review picture"/>
                            </div>
                            <div className="name-user">
                              <strong> {this.props.props.fname + ' ' + this.props.props.lname}</strong>
                              
                            </div>
                          </div>
                          {/* reviews aka stars */}
                            <div className="reviews">
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
                              <img id= "review" src={propic} className="review picture" alt="review picture"/>
                            </div>
                            <div className="name-user">
                              <strong> {this.props.props.fname + ' ' + this.props.props.lname}</strong>
                              
                            </div>
                          </div>
                          {/* reviews aka stars */}
                            <div className="reviews">
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
                          {/* <p>Hit the bar with my buddies and we had a blast!</p> */}
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



// // defualt values for all input fields
// const initialValues = {
//   listItems: [],
//   fname: '',
//   lname: '',
//   rating: '',
//   review: ''
// }

// export default function ExperienceForm(){
//   const [values, setValues] = useState(initialValues);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     setValues({
//       ...values,
//       [name]: value,
//     })
//   }
//   return (
//     <div> 
//       <form>
//       <h3>Experiences </h3>
//       <div className="form-container">
        
//           <label>FirstName:</label>
//           <input type="text" value={values.fname} onChange={handleInputChange} />
//           <label>LastName:</label>
//           <input type="text" value={values.lname} onChange={handleInputChange}  />
//         </div>
//         <div>
//           <h3>Rating:</h3>
//             <div class="rating">
//               <span id='5'>☆</span><span>☆</span><span>☆</span><span>☆</span><span id='1'>☆</span>
//             </div>
//           <h4>Tell Us More</h4>
//             <textarea placeholder="Please tell us about your activity" value={values.review} onChange={handleInputChange}/>
//             <button className="review-btn" type="submit">Submit</button>
          
//         </div>
//         </form>

//         <ul className="review-list">
//           {
//             values.listItems.map((li,key) => <li {...{key}}>{li}</li>)
//           }
//         </ul> 
       
//     </div>

//   )
// }

// import {
//   Card,
//   CardSubtitle,
//   CardText,
//   CardTitle,
//   CardBody,
//   CardImg,
// } from "reactstrap";

// var rate = 0;
 
// function submitRate(){
// 	var user=document.getElementById('user').value;
// 	var review=document.getElementById('review').value;
// 	if(rate != 0 && user !="" && review !=""){
// 		var html=
// 		"<h4>User: <label class='text-primary'>" + user + "</label></h4>"
// 		+"<h4>Rating: <label class='text-primary'>" + rate + "</label></h4>"
// 		+"<h4>Review</h4>"
// 		+"<p>"+review+"</p>"
// 		+"<hr style='border-top:1px solid #000;'/>";
// 		document.getElementById('result').innerHTML+=html;
 
// 		document.getElementById('user').value="";
// 		document.getElementById('review').value="";
// 	}
// }
 
// function startRating(item){
// 	rate=item.id[0];
// 	sessionStorage.star = rate;
// 	for(var i=0;i<5;i++){
// 		if(i<rate){
// 			document.getElementById((i+1)).style.color="yellow";
// 		}
// 		else{
// 			document.getElementById((i+1)).style.color="black";
// 		}
// 	}
// }

  /* <div class="col-md-3"></div>
          <div class="col-md-6 well">
            <h3 class="text-primary">JavaScript - Simple User Review Rating</h3>
            <hr />
            <div class="col-md-4">
              <div class="form-group">
                <label>User:</label>
                <input type="text" id="user" class="form-control" />
              </div>
              <div>
                <h3>Rating:</h3>
                <span id="1"   class="fa fa-star" onmouseover="startRating(this)" startRating="starmark(this)" ></span>
                <span id="2"   class="fa fa-star" onmouseover="startRating(this)" startRating="starmark(this)"></span>
                <span id="3"   class="fa fa-star" onmouseover="startRating(this)" startRating="starmark(this)"></span>
                <span id="4"   class="fa fa-star" onmouseover="startRating(this)" startRating="starmark(this)"></span>
                <span id="5"   class="fa fa-star" onmouseover="startRating(this)" startRating="starmark(this)"></span>
              </div>
              <br />
              <div class="form-group">
                <h3>Review:</h3>
                <textarea id="review" class="form-control" ></textarea>
              </div>
              <center><button class="btn btn-success" onclick="submitRate()">Submit</button></center>
            </div>
            <div class="col-md-6">
              <div id="result"></div>
            </div>
	        </div>
         */
// style="border-top:1px dotted #ccc;"
// style="font-size:30px; cursor:pointer;"
// style="font-size:30px; cursor:pointer;"
// style="font-size:30px; cursor:pointer;"
// style="font-size:30px; cursor:pointer;"
// style="font-size:30px; cursor:pointer;"
// style="resize:none; height:100px;"
// class ExperienceForm extends React.Component {

//   constructor(props) {
//     super(props)
//   }

//     render () {
//       console.log('LOOKIN FOR PROP'. props)
//         return (
//           <Card>
//           <CardBody>
//           <CardTitle tag="h1">Reviews Page</CardTitle>
//               <div className="reviews-top">
//               <div className="user-details">
//                 {/* <CardImg
//                   className="avatar"
//                   src={
//                     profilePic ||
//                     https://images.pexels.com/photos/7129713/pexels-photo-7129713.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500
//                   }
//                   alt="user avatar"
//                 /> */}

//                 <CardSubtitle className="mb-2 text-muted" tag="h6">
//                   {'David'} {'Allen' || "John Doe"}
//                 </CardSubtitle>
//                 {[...Array(5 || 5)].map((star) => {
//                   return <CardSubtitle tag="h5">⭐ </CardSubtitle>;
//                 })}
//               </div>
//               <div className="reviews-body">
//                 <CardText>
//                   {'yrttt' ||
//                     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut reiciendis delectus dignissimos, nisi pariatur fuga officiis itaque fugiat! Quibusdam accusantium quae beatae vel.Quas possimus reprehenderit sequi quia nesciunt sunt!"}
//                 </CardText>
//               </div>
//               <CardText>
//                 <small className="text-muted text-bold">
//                   {'1 min ago' || "3 mins ago"}
//                 </small>
//               </CardText>
//             </div>
//           </CardBody>
//         </Card>
//         )
//     }
// }

// export default ExperienceForm;