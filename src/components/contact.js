import React, { Component } from 'react';


class App extends Component {
    render() {
        return (
            <div href="#contact">
                <div className="bgimg-3 w3-display-container w3-opacity-min">
                    <div className="w3-display-middle">
                        <span className="w3-xxlarge w3-text-white w3-wide">CONTACT</span>
                    </div>
                </div>
                <div className="w3-content w3-container w3-padding-64" id="contact">
                    <h3 className="w3-center">Feel free to send me a message</h3>
                    <p className="w3-center"><em>from any of these platforms</em></p>
                    <div className="w3-col m8 w3-panel">
                        <div className="w3-large w3-margin-bottom">
                            <i className="fa fa-linkedin fa-fw w3-hover-text-black w3-xlarge w3-margin-right" /> Linkedin: tom-na-thalang <br />
                            <i className="fa fa-instagram fa-fw w3-hover-text-black w3-xlarge w3-margin-right" /> Instagram: itsdrunksushi<br />
                            <i className="fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right" /> Email: nathalang_t@hotmail.ca <br />
                        </div>
                        <div id="last-sentence">
                            <p> Thank you for visiting my website <i className="fas fa-tram fa-3x" id="logo-bottom" /></p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default App;
