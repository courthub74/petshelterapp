import React from 'react'
import DefaultLayout from './layouts/default'
import Nav from './components/Nav'
import Footer from './components/Footer'

const Login = (props) => {
    return (
        <DefaultLayout>
            <Nav />
            <h1>Login Page Here</h1>
            <Footer />
        </DefaultLayout>
    )
}

module.exports = Login