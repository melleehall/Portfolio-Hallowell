import React, { Component } from 'react';
import ProjectDescription from '../ProjectDescription/ProjectDescription'
import Screengrab from '../Screengrab/Screengrab'
import './Project.css'

export default class Project extends Component {
    render() {
        return (
            <div className='project-container'>
                <ProjectDescription 
                    name={this.props.name} 
                    description={this.props.description} 
                    tech={this.props.tech} 
                    test={this.props.test}
                    live={this.props.live}
                    repo={this.props.repo}
                />
                <div className='screengrabs'>
                    <Screengrab imageone={this.props.imageone} imagetwo={this.props.imagetwo} />
                </div>
                <div className='divider'></div>
            </div>
        )
    }
}