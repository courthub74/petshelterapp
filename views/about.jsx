import React from 'react'
import DefaultLayout from './layouts/default'
import Nav from './components/Nav'
import Footer from './components/Footer'


function About(props) {
    return (
        <DefaultLayout>
            <Nav />
            <h1>About Page</h1>
            <Footer />
        </DefaultLayout>
        
    )
}

module.exports = About