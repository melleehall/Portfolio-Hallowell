import React, { Component } from 'react';
import './Headline.css'

export default class Headline extends Component {
    render() {
        return (
            <section>
                <h1 className='headline'>
                    <span role='img' class="wave" aria-label='jsx-a11y/accessible-emoji'>
                        👋🏽 
                    </span>
                    Hi, I'm Melanie - a software engineer based in Denver's Capitol Hill.
                </h1>
            </section>
        )
    }
}