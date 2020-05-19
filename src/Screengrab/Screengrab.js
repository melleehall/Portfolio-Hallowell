import React, { Component } from 'react';
import './Screengrab.css'

export default class Screengrab extends Component {
    render() {
        return (
            <div className='screengrab-container'>
                <img src={this.props.imageone} className='screengrab' alt='screenshot of app'/>
                <img src={this.props.imagetwo} className='screengrab'alt='screenshot of app'/>
            </div>
        )
    }
}