import React, { Component } from 'react';
import profile from '../images/tom.jpg'



class AboutMe extends Component {
    render() {
        return (
            <div className="AboutMe">
                <div className="profile">
                    <img src={profile} className="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Photo of Me" />
                </div>
                <div className="AboutMe-text">
                    {/* <div className="w3-content w3-container w3-padding-64" id="about"> */}
                    <h3 className="title">ABOUT ME</h3>
                    <p className="summary">I want to build something that contributes to the bigger things</p>
                    <p>
                        Ever since I was a kid, I always had a curiosity for technology and video games.
                        At first, I wasn't sure exactly wanted to get into programming since it was a hobby, something I love reading about.
                        As I get older, and trying out many different job fields, I realize that <b>nothing sparks me joy as much as programming.</b>
                        With the technology world evolving extremely fast, to be able to learn something and create something at the same time,
                        it honestly feels very fufilling. <b>One of my dreams would be to work in Japan as a developer one day.</b>
                    </p>
                    <h3 className="proverb">
                        虎穴に入らずんば虎子を得ず.
                        (nothing ventured, nothing gained).
                        - Japanese Proverb
                    </h3>
                </div>
                {/* </div> */}
            </div>
        );
    }
}

export default AboutMe;
