import React from 'react'
import DefaultLayout from './layouts/default'
import Nav from './components/Nav'
import Footer from './components/Footer'


function About(props) {
    return (
        <DefaultLayout title="Home Page">
            <Nav />
                <h1>About</h1>
            <Footer />
        </DefaultLayout>
        
    )
}

module.exports = About