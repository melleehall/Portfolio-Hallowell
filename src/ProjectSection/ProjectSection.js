import React, { Component } from 'react';
import Project from '../Project/Project'
import CCBSignupPage from '../CCBScreengrabs/CCBSignupPage.png'
import CCBMobileNav from '../CCBScreengrabs/CCBMobileNav.png'
import HHTripsList from '../HomeHolidayScreengrabs/HHTripsList.png'
import HHNav from '../HomeHolidayScreengrabs/HHNav.png'
import EconomyPumpHHIncome from '../EconomyPumpScreengrabs/EconomyPumpHHIncomeView.jpg'
import EconomyPumpShopView from '../EconomyPumpScreengrabs/EconomyPumpShopView.jpg'
import './ProjectSection.css'

export default class IntroSection extends Component {
    render() {
        return (
            <section className='project-container'>
                <h3 className='projects-header'>Recent Projects</h3>
                <Project 
                    name='Clear Creek Broadband'
                    description="I created this application for Clear Creek Broadband (CCB), a local internet service company located outside of Denver, CO. The purpose of this application is to provide an easy channel for users to request service, join the mailing list to stay informed, and/or volunteer. The website is also used to keep interested parties updated on network progress and provide answers to commonly asked questions saving CCB Board Members time." 
                    tech = 'Node.js, Express, React, PostgreSQL, JS ES6, HTML5, CSS3'
                    test='Testing: Mocha, Chai, Supertest, Jest'
                    live='https://www.clearcreekbroadband.com/'
                    repo='https://github.com/melleehall/ccb-app'
                    imageone={CCBMobileNav}
                    imagetwo={CCBSignupPage}
                />
                <Project 
                    name='Home Holiday'
                    description="Home holiday is a virtual trip itinerary generator that inspires authentic connection among friends and family. I was inspired by the virtual vacations many people around the globe are creating in their living rooms and backyards while sheltering at home due to COVID-19. Users can choose from carefully created experiences that will immerse them in the spirit of their destination or create itineraries of their own." 
                    tech = 'Node.js, Express, React, PostgreSQL, JS ES6, HTML5, CSS3'
                    test='Testing: Mocha, Chai, Supertest, Jest'
                    live='https://home-holiday.now.sh/'
                    repo='https://github.com/melleehall/home-holiday'
                    imageone={HHNav}
                    imagetwo={HHTripsList}
                    />
                <Project 
                    name='Economy Pump'
                    description="Economy Pump was created with the belief that there is power in your dollar and that more people will purchase products Made In The US if they have an easy channel to do so. Leveraging the US Census API, Economy Pump shows users the deviation of each US state's median household income as compared to the US and then suggests products to purchase directly from a small business located in their chosen area and available to purchase from Etsy." 
                    tech = 'JavaScript / jQuery, HTML5, CSS3, Etsy API, US Census API'
                    live='https://melleehall.github.io/EconomyPump/'
                    repo='https://github.com/melleehall/EconomyPump'
                    imageone={EconomyPumpHHIncome}
                    imagetwo={EconomyPumpShopView}
                    />
            </section>
        )
    }
}