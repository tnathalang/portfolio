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
                <div class="top_categories">
                    <h3 class="skill-underline">Languages</h3>
                    <div className="link">
                        <div class="my-group">
                            Javascript es5 es6
                                </div>
                        <div class="my-group">
                            Ruby on Rails
                                </div>
                        <div class="my-group">
                            HTML 5
                                </div>
                        <div class="my-group">
                            CSS 3
                        </div>
                        <h3 class="skill-underline">Dev Tools</h3>
                        <div className="link">
                            <div class="my-group">
                                Git/ Github
                                </div>
                            <div class="my-group">
                                VSCode
                                </div>
                            <div class="my-group">
                                Terminal
                                </div>
                            <div class="my-group">
                                Wordpress
                                </div>
                            <div class="my-group">
                                Contentful
                                </div>
                        </div>
                    </div>
                    <h3 class="skill-underline">Frameworks</h3>
                    <div className="link">
                        <div class="my-group">
                            React
                                </div>
                        <div class="my-group">
                            Node.js
                                </div>
                        <div class="my-group">
                            Express
                                </div>
                        <div class="my-group">
                            Knex
                                </div>
                        <div class="my-group">
                            JQuery /Ajax
                                </div>
                        <div class="my-group">
                            SASS
                                </div>
                        <div class="my-group">
                            Bootstrap
                                </div>
                        <div class="my-group">
                            GraphQL
                                </div>
                        <div class="my-group">
                            PostgreSQL
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;
