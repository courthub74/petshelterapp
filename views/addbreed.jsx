import React from 'react'
import DefaultLayout from './layouts/default'
import Nav from './components/Nav'
import Footer from './components/Footer'


function Addbreed(props) {
    return (
        <DefaultLayout>
            <Nav />
            <h1>Addbreed Page with ReactJS</h1>
            <Footer />
        </DefaultLayout>
    )
}

module.exports = Addbreed