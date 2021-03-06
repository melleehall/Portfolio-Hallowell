import React, { Component } from 'react';
import Headshot from '../Headshot/Headshot'
import Headline from '../Headline/Headline'
import IntroPara from '../IntroPara/IntroPara'
import './IntroSection.css'

export default class IntroSection extends Component {
    render() {
        return (
            <section className='intro-container'>
                <div className='headshot-container'>
                    <Headshot />
                </div>
                <Headline />
                <IntroPara />
                <div className='divider'></div>
            </section>
        )
    }
}