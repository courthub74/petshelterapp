import React from 'react'
import DefaultLayout from './layouts/default'
import Nav from './components/Nav'


function About(props) {
    return (
        <DefaultLayout>
            <Nav />
            <h1>About Page</h1>
        </DefaultLayout>
        
    )
}

module.exports = About