import React from 'react';
import "./../../styles/about_me.css";

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="about-me-container">
                <div className="Alisher">
                    Alisher
                </div>
                <div className="Eric">
                    Eric
                </div>
                <div className="David-Allen">
                    David-Allen
                </div>
            </div>
        );
    }
}

export default AboutMe;