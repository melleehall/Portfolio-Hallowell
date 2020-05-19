import React, { Component } from 'react';
import './ProjectDescription.css'

export default class Screengrab extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.name}</h4>
                <p>
                    {this.props.description}
                </p>
                <p>{this.props.tech}</p>
                <p>{this.props.test}</p>
                <div className='live-repo'>
                    <a href={this.props.live} target='_blank'>LIVE</a>  <a href={this.props.repo} target='_blank'>REPO</a>
                </div>
            </div>
        )
    }
}