import React, { Component } from 'react';
import { Tabs, Tab, Fade } from 'react-bootstrap'



class Skills extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            key: 'home',
        };
    }

    render() {
        return (
            <div className="skills">
                <div className="minibox">
                    <p class="w3-large w3-center w3-padding-16"><h3>Some of the things I can do</h3></p>
                </div>
                <div className="skill-list">
                    <div className="softskills">
                        <h3 class="skill-underline">Languages</h3>
                        <div class="top_categories">
                            <div class="my-group">
                                <div class="cat_icon">
                                    <i class="fab fa-js-square fa-3x"></i>
                                </div>
                                <div class="cat_text">
                                    Javascript es5 es6
                                </div>
                            </div>
                            <div class="my-group">
                                <div class="cat_icon">
                                    <i class="fab fa-html5 fa-3x"></i>
                                </div>
                                <div class="cat_text">
                                    Ruby on Rails
                                </div>
                            </div>
                            <div class="my-group">
                                <div class="cat_icon">
                                    <i class="fab fa-html5 fa-3x"></i>
                                </div>
                                <div class="cat_text">
                                    HTML 5
                                </div>
                            </div>
                            <div class="my-group">
                                <div class="cat_icon">
                                    <i class="fab fa-css3 fa-3x"></i>
                                </div>
                                <div class="cat_text">
                                    CSS 3
                                </div>
                            </div>

                        </div>

                        <div>
                            <h3 class="skill-underline">Dev Tools</h3>
                            <div class="my-group">
                                <div class="cat_icon">
                                    <i class="fab fa-github fa-3x"></i>
                                </div>
                                <div class="cat_text">
                                    Git/Github
                                </div>
                            </div>

                            VS Code
                            Terminal
                            WordPress
                            Contentful
                        </div>



                    </div>
                    {/* <div>
                        <ul><h3>Freameworks, Library,<br /> Env, Database</h3></ul>
                        <ol>NodeJS</ol>
                        <ol>React</ol>
                        <ol>Rails</ol>
                        <ol>Ajax</ol>
                        <ol>JQuery</ol>
                        <ol>Express</ol>
                        <ol>Knex</ol>
                        <ol>SASS</ol>
                        <ol>Bootstrap</ol>
                        <ol>PostgreSQL</ol>
                        <ol>GraphQL</ol>
                        <ol>SQL</ol>
                    </div> */}
                </div>
            </div >
        );
    }
}

export default Skills;
