import React, { Component } from "react";
import profile from "../images/tom.jpg";

class AboutMe extends Component {
  render() {
    return (
      <div id="#about">
        <div>
          <div className="AboutMe">
            <div className="profile">
              <img src={profile} className="w3-round w3-image" alt="portrait" />
            </div>
            <div className="AboutMe-text">
              {/* <div className="w3-content w3-container w3-padding-64" id="about"> */}
              <h3 className="title">
                <b>ABOUT ME</b>
              </h3>
              <p className="summary">
                I want to build something that contributes to the bigger things
              </p>
              <p>
                Ever since I was a kid, I always had a curiosity for technology
                and video games. At first, as a kid, I wanted to become an
                architect or even a video-games developer, since I love playing
                it so much. However, as I get older, and trying out many
                different job fields, I realize that{" "}
                <b>nothing sparks me joy as much as programming.</b>, With the
                technology world evolving extremely fast, to be able to learn
                something and create something at the same time, it honestly
                feels very fulfilling. My go to cuisine is Japanese cuisine, but
                I also love Thai food, the spicier the better, I love Jazz, RnB
                and Hip-Hop.{" "}
                <b>
                  (I am currently working on this portfolio, there's a lot to be
                  fix!)
                </b>
              </p>
            </div>
            <h3 className="proverb">
              <h3 className="quote">
                <b>I live by</b>{" "}
              </h3>
              虎穴に入らずんば虎子を得ず. (nothing ventured, nothing gained). -
              Japanese Proverb
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
