import React from 'react'
import DefaultLayout from './layouts/default'


function Home(props) {
    return (
        // <h1>Home Page</h1>
        <DefaultLayout title="Home Page">
            <h1>Default Layout Homepage </h1>
            { props.data }
        </DefaultLayout>
    )
}

module.exports = Home