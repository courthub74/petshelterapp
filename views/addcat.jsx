import React from 'react'
import DefaultLayout from './layouts/default'
import Nav from './components/Nav'
import Footer from './components/Footer'

function Addcat(props) {
    return (
        // <h1>Addcat Page</h1>
        <DefaultLayout>
            <Nav />
            <h1>Add Cat Page with ReactJS</h1>
            <Footer />
        </DefaultLayout>
    )
}

module.exports = Addcat