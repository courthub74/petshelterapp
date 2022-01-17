import React from 'react'
import DefaultLayout from './layouts/default'
import Nav from './components/Nav'


function Addbreed(props) {
    return (
        <DefaultLayout>
            <Nav />
            <h1>Addbreed Page with ReactJS</h1>
        </DefaultLayout>
    )
}

module.exports = Addbreed