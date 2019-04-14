import React, { Component } from 'react';


class Skills extends Component {
    render() {
        return (
            <div className="skills">
                <p class="w3-large w3-center w3-padding-16">Some of the things I can do</p>
                <div className="skill-list">
                    <div>
                        <ul><h3>Programing Skills</h3></ul>
                        <ol>Javascript es5 es6</ol>
                        <ol>Ruby</ol>
                        <ol>HTML 5</ol>
                        <ol>CSS 3</ol>
                    </div>
                    <div>
                        <ul><h3>Freameworks, Library,<br /> Env, Database</h3></ul>
                        <ol>NodeJS</ol>
                        <ol>React</ol>
                        <ol>Rails</ol>
                        <ol>Ajax</ol>
                        <ol>JQuery</ol>
                        <ol>Express</ol>
                        <ol>Knex</ol>
                        <ol>Bootstrap</ol>
                        <ol>PostgreSQL</ol>
                        <ol>GraphQL</ol>
                        <ol>SQL</ol>
                    </div>
                    <div>
                        <ul><h3>Extra</h3></ul>
                        <ol>Git/Github</ol>
                        <ol>WordPress</ol>
                        <ol>Contentful</ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;
