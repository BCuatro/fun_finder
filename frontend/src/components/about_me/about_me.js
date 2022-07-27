import React from 'react';
import "./../../styles/about_me.css";
import linkedin from "./linkedin.png"
import github from "./github.png"
import porfolio from "./porfolio.png"

class AboutMe extends React.Component {

    render() {
        return (
            <div className="about-me-container">
                <div className="person-container">
                    <div className="person">
                        Alisher Podavonov
                    </div>
                    <div className="about-me-links">
                        <a target="_blank" href="https://github.com/apodavonov3616">
                            <img src={github} alt="github" width="39px" id="github" />
                        </a>
                        <a target="_blank" href="https://alisher-podavonov.com/">
                            <img src={porfolio} alt="portfolio" width="39px" id="portfolio" />
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/alisher-podavonov-80b85a23b/">
                            <img src={linkedin} alt="linkedin" width="39px" id="linked" />
                        </a>
                    </div>
                </div>
                <div className="person-container">
                    <div className="person">
                        Eric Balfour
                    </div>
                    <div className="about-me-links">
                        <a target="_blank" href="https://github.com/BCuatro">
                            <img src={github} alt="github" width="39px" id="github" />
                        </a>
                        <a target="_blank" href="https://bcuatro.github.io/Eric-Balfour/">
                            <img src={porfolio} alt="portfolio" width="39px" id="portfolio" />
                        </a>
                        <a target="_blank" href="www.linkedin.com/in/eric-balfour">
                            <img src={linkedin} alt="linkedin" width="39px" id="linked" />
                        </a>
                    </div>
                </div>
                <div className="person-container">
                    <div className="person">
                        David-Allen Asencio
                    </div>
                    <div className="about-me-links">
                        <a target="_blank" href="https://github.com/davida11en">
                            <img src={github} alt="github" width="39px" id="github" />
                        </a>
                        <a target="_blank" href="google.com">
                            <img src={porfolio} alt="portfolio" width="39px" id="portfolio" />
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/david-allen-asencio-9107b0122/">
                            <img src={linkedin} alt="linkedin" width="39px" id="linked" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;