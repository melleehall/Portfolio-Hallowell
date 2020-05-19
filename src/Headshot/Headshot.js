import React, { Component } from 'react';
import Headshot from '../Images/Headshot.jpg'
import './Headshot.css'

export default class Headline extends Component {
    render() {
        return (
            <img src={Headshot} alt='Headshot' className='headshot' />
        )
    }
}