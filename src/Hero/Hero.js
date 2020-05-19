import React, {Component} from 'react'
import './Hero.css'

export default class Hero extends Component {
    render() {
        return (
            <div className="hero-image">
                <div className="hero-text">
                    <div className='name-container'>
                        <h1>Melanie Lee Hallowell</h1>
                        <h2>software engineer</h2>
                    </div>
                </div>
            </div>
        )
    }
}