import React from 'react';
import ReviewBox from './review_box';
let reviewCounter = 1;

class Review extends React.Component {
    constructor() {
        super();

        this.state = {
            reviewValue: "",
            reviewLine: [{ reviewId: "", text: "", }],
        };
    }

    handleReviewValue = (e) => {
        this.setState({
            reviewValue: e.target.value
        });
    };



    setReviewLine = () => {
        this.setState({
          reviewLine: [
           ...this.state.reviewLine,
           { reviewId: reviewCounter++, text: this.state.reviewValue }],
          reviewValue: "",
        });
    }

    submitReviewLine = (e) => {
        e.preventDefault();
        this.setReviewLine();
    };

    enterReviewLine = (e) => {
        if (e.charCode === 13) {
         this.setReviewLine();
        }
    };

    render () {
        return (
            <>
                <ReviewBox 
                    reviewValue={this.state.reviewValue}
                    handleReviewValue={this.handleReviewValue}
                    enterReviewine={this.enterReviewLine}
                    submitReviewLine={this.submitReviewLine}
                />
                {/* <ReviewLine /> */}
            </>
        )
    }
}

class ReviewLine extends React.Component {
    render() {
     const { reviewLine } = this.props;
     return (
      <ul className="reviews-list">
      {reviewLine.map((val) => {return 
        <li className="each-review"  
         key={val.reviewId}>{val.text}
        </li>
        })
       }
      </ul>
    )};
}

export default Review;