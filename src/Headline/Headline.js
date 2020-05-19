import React, { Component } from 'react';
import './Headline.css'

export default class Headline extends Component {
    render() {
        return (
            <section>
                <h1 className='headline'><span class="wave">👋🏽 </span>Hi, I'm Melanie - a Front End Web Developer based in the foothills of Boulder, Colorado.</h1>
            </section>
        )
    }
}