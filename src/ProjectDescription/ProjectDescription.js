import React, { Component } from 'react';
import './ProjectDescription.css'

export default class Screengrab extends Component {
    render() {
        return (
            <div className='description'>
                <h4>{this.props.name}</h4>
                <p className='grow-font'>
                    {this.props.description}
                </p>
                <p className='grow-font'>{this.props.tech}</p>
                <p className='grow-font'>{this.props.test}</p>
                <div className='live-repo'>
                    <a href={this.props.live} target='_blank' rel="noopener noreferrer">LIVE</a>  <a href={this.props.repo} target='_blank' rel="noopener noreferrer">REPO</a>
                </div>
            </div>
        )
    }
}