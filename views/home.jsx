import React from 'react'
import DefaultLayout from './layouts/default'
import Nav from './components/Nav'

function Home(props) {
    return (
        // <h1>Home Page</h1>
        <DefaultLayout>
            <Nav />
            <h1>Default Layout Homepage with ReactJS</h1>
        </DefaultLayout>
    )
}

module.exports = Home