import React from 'react'
import DefaultLayout from './layouts/default'
import Nav from './components/Nav'
import Footer from './components/Footer'

const Login = (props) => {
    return (
        <DefaultLayout>
            <Nav />
            <form
                //Required
                action="/login"
                method='POST' //overwrite the default GET method
                encType='multipart/form-data'
                //Optional
                class="cat-form" 
                >
                <h2>Login</h2>

                <div className=''>
                    <input type="text" name="email" placeholder='Add email here....' />
                </div>

                <div className=''>
                    <input type="text" name="password" placeholder='Add password....' />
                </div>

                <button type="submit">Login</button>
            </form>
            <Footer />
        </DefaultLayout>
    )
}

module.exports = Login