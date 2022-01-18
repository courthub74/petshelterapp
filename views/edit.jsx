import React from 'react'
import DefaultLayout from './layouts/default'
import Nav from './components/Nav'
import Footer from './components/Footer'

const Edit = ({ img, name, alt, breed, description }) => {
    return (
        <DefaultLayout title="Edit Cat">
            <Nav />
            <form>
                
                <h2>Edit Cat</h2>
             
            </form>
            <Footer />
        </DefaultLayout>
    )
}

module.exports = Edit
