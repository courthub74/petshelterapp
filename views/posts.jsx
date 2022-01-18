import React from 'react'
import DefaultLayout from './layouts/default'
import Nav from './components/Nav'
import Footer from './components/Footer'


function Posts(props) {
    return (
        <DefaultLayout title="Home Page">
            <Nav />
             <h1>Posts Page with ReactJS</h1>
            <Footer />
        </DefaultLayout>
    )
}

module.exports = Posts