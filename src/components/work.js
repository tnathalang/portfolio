import React, { Component } from 'react';
import Chatty from '../images/chatty.png'
import pearup from '../images/pearup.png'
import jungle from '../images/jungle.png'
import tweeter from '../images/tweeter.png'




class Work extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="bgimg-2 w3-display-container w3-opacity-min">
                        <div className="w3-display-middle">
                            <span className="w3-xxlarge w3-text-white w3-wide">PORTFOLIO</span>
                        </div>
                    </div>

                    <div className="w3-content w3-container w3-padding-64" id="portfolio">
                        <h3 className="w3-center">MY WORK</h3>
                        <p className="w3-center"><em>Here are some of my latest works I did.<br /> Click on the images to make them bigger</em></p><br />
                    </div>
                </div>
                <div>
                    <div className="w3-row-padding w3-center">
                        <div className="w3-col m3">
                            <img src={pearup} style={{ width: '100%' }} onclick="onClick(this)" className="w3-hover-opacity" alt="Pear-UP!" />
                        </div>
                        <div className="w3-col m3">
                            <img src={jungle} style={{ width: '100%' }} onclick="onClick(this)" className="w3-hover-opacity" alt="Jungle" />
                        </div>
                        <div className="w3-col m3">
                            <img src={Chatty} style={{ width: '100%' }} onclick=" onClick(this)" className="w3-hover-opacity" alt="Chatty" />
                        </div>
                        <div className="w3-col m3">
                            <img src={tweeter} style={{ width: '100%' }} onclick="onClick(this)" className="w3-hover-opacity" alt="Tweeter" />
                        </div>
                    </div>
                </div>
            </div >

        );
    }
}

export default Work;
