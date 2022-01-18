import React from 'react'
import DefaultLayout from './layouts/default'
import Nav from './components/Nav'
import Footer from './components/Footer'

function Home(props) {
    return (
        // <h1>Home Page</h1>
        <DefaultLayout>
            <Nav />
            <main>
                <section class="cats">
                 <ul> {props.data.petters.map(pet => (  //props.thefoldername.theobjectname.map
                    <li>
                        <img src={pet.img} alt="" />
                        <h3>{pet.name}</h3>
                        <p><span>Breed: </span>{pet.breed}</p>
                        <p><span>Description: </span>{pet.description}</p>
                    <ul class="buttons">
                        <li class="btn edit"><a href="/edit">Change Info</a></li>
                        <li class="btn edit"><a href="">Delete</a></li>
                    </ul>
                    </li>
                    ))}
                </ul>
             
                </section>
            </main>
            <h1>Default Layout Homepage with ReactJS</h1>

            
            <Footer />
        </DefaultLayout>
    )
}

module.exports = Home