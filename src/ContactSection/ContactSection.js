import React, { Component } from 'react';
import './ContactSection.css'

export default class ContactSection extends Component {
    render() {
        return (
            <section>
                <h3 className='contact-header'>Let's Get In Touch</h3>
                <ul className='contact-link-list'>
                    <li className='contact-link'>
                        <a href='mailto:melleehall@gmail.com' target='_blank' rel="noopener noreferrer">
                            melleehall@gmail.com
                        </a>
                    </li>
                    <li className='contact-link'>
                        <a href='https://github.com/melleehall' target='_blank' rel="noopener noreferrer"> 
                            github.com/melleehall
                        </a>
                    </li>
                    <li className='contact-link'>
                        <a href='https://www.linkedin.com/in/mhallowell/' target='_blank' rel="noopener noreferrer">
                            linkedin.com/in/mhallowell/
                        </a> 
                    </li>
                </ul>
            </section>
        )
    }
}