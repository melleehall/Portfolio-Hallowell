import React, { Component } from 'react';
import './Screengrab.css'

export default class Screengrab extends Component {
    render() {
        return (
            <p>
                <img src={this.props.imageone} className='screengrab'/>
                <img src={this.props.imagetwo} className='screengrab'/>
            </p>
        )
    }
}