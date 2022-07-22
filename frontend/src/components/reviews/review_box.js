import React from 'react';

class ReviewBox extends React.Component {

    render() {
        const { reviewValue, handleReviewValue, 
        enterReviewLine, submitReviewLine} = this.props;

        const enableReviewButton = () => {
            return (reviewValue ? false : true);
    }
        const changeReviewButtonStyle = () => {
            return (reviewValue ? "reviews-button-enabled" : 
                "reviews-button-disabled");
    }

    return (
     <div className="reviews-box">
      <input onKeyPress={enterReviewLine} value={reviewValue}
        id="reviews-input" onChange={handleReviewValue}
        type="text" placeholder="Add a Review..." />
      <button onClick={submitReviewLine} type="submit"     
        className="reviews-button"id={changeReviewButtonStyle()}
        disabled={enableReviewButton()}>Post</button>
      </div>
    )
}
}

export default ReviewBox;