import React from 'react'
import DefaultLayout from './layouts/default'
import Nav from './components/Nav'
import Footer from './components/Footer'


function About(props) {
    return (
        <DefaultLayout title="Home Page">
            <Nav />
            <main>
                <section class="cats">
                    <ul> {props.data.dataton.map(thing => (
                        <li>
                            <img src={thing.img} alt="" />
                            <h3>{thing.name}</h3>
                            <p>{thing.style}</p>
                        <ul>
                            <li class="btn edit"><a href="">Change Info</a></li>
                        </ul>
                        </li>
                    ))}
                    </ul>
                </section>
            </main>
            {/* <h1>About Page</h1> */}
            <Footer />
        </DefaultLayout>
        
    )
}

module.exports = About