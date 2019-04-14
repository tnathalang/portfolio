import React, { Component } from 'react';




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
                        <p className="w3-center"><em>Here are some of my latest lorem work ipsum tipsum.<br /> Click on the images to make them bigger</em></p><br />
                    </div>
                </div>
                <div>
                    <div className="w3-row-padding w3-center">
                        <div className="w3-col m3">
                            <img src="/w3images/p1.jpg" style={{ width: '100%' }} onclick="onClick(this)" className="w3-hover-opacity" alt="Pear-UP!" />
                        </div>
                        <div className="w3-col m3">
                            <img src="/w3images/p2.jpg" style={{ width: '100%' }} onclick="onClick(this)" className="w3-hover-opacity" alt="Jungle" />
                        </div>
                        <div className="w3-col m3">
                            <img src="/w3images/p3.jpg" style={{ width: '100%' }} onclick="onClick(this)" className="w3-hover-opacity" alt="Chatty" />
                        </div>
                        <div className="w3-col m3">
                            <img src="/w3images/p4.jpg" style={{ width: '100%' }} onclick="onClick(this)" className="w3-hover-opacity" alt="Tweeter" />
                        </div>
                    </div>
                </div>
            </div >

        );
    }
}

export default Work;
