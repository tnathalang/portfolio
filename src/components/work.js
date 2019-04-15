import React, { Component } from 'react';
import Chatty from '../images/chatty.png'
import pearup from '../images/pearup.png'
import jungle from '../images/jungle.png'
import tweeter from '../images/tweeter.png'
import { Container, Row, Col } from 'reactstrap';




class Work extends Component {


    render() {
        return (
            <div href="#portfolio">
                <div className="portfolio">
                    <div className="bgimg-2 w3-display-container w3-opacity-min">
                        <div className="w3-display-middle">
                            <span className="w3-xxlarge w3-text-white w3-wide">PORTFOLIO</span>
                        </div>
                    </div>

                    <div className="w3-content w3-container w3-padding-16" id="portfolio">
                        <h3 className="w3-center">MY WORKS</h3>
                        <p className="w3-center"><em>Here are some of my latest works I did.<br /> Hover to see the tech stacks</em></p><br />
                    </div>
                </div>
                <Container>
                    <Row>
                        <Col xs="6">
                            <div class="container">
                                <img src={pearup} className="hover" alt="Pear-UP!" />
                                <a className="tech-stack" href="https://github.com/tnathalang/Pear-Up-">Made using React, Bootstrap, Rails and Postgres</a>
                                <p className="text-work">Matching base on common interest and asking someone to do an activity within a coworker space on the fly type of app</p>
                            </div>
                            <div>
                                <img src={jungle} className="hover" alt="Jungle" />
                                <a className="tech-stack" href="https://github.com/tnathalang/jungle-rails">Made using Ruby on Rails, Bootstrap</a>
                                <p className="text-work">An e-commerce Rails app, have review system and purchase system with Stripes</p>
                            </div>
                        </Col>
                        <Col xs="6">
                            <div>
                                <img src={Chatty} className="hover" alt="Chatty" />
                                <a className="tech-stack" href="https://github.com/tnathalang/chatty">Made using React, CSS 3</a>
                                <p className="text-work">A minimal chatting app built with React, support multiple users</p>
                            </div>
                            <div>
                                <img src={tweeter} className="hover" alt="Tweeter" />
                                <a className="tech-stack" href="https://github.com/tnathalang/tweeter">Made using JQuery, AJAX, Express, Node.js and CSS</a>
                                <p className="text-work">A twitter clone project to help learn front-end and css practice</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}








export default Work;
