import React from 'react'
import DefaultLayout from './layouts/default'
import Nav from './components/Nav'
import Footer from './components/Footer'


function About(props) {
    return (
        <DefaultLayout title="Home Page">
            <Nav />
                About
            <Footer />
        </DefaultLayout>
        
    )
}

module.exports = About