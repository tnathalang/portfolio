import React, { Component } from 'react';
import '../App.scss';


class Intro extends Component {
    render() {
        return (
            <div className="intro">
                <div className="bgimg-1 w3-disply-container w3-opacity-min" id="home">
                    <div className="w3-display-middle" style={{ whiteSpace: 'nowrap' }}>
                        <span className="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">Hi, I'm Tom</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Intro;
