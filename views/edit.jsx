import React from 'react'
import DefaultLayout from './layouts/default'
import Nav from './components/Nav'
import Footer from './components/Footer'

const Edit = (props) => {
    return (
        
        <DefaultLayout title="Edit Cat">
            <Nav />
            {props.message ? <h2>{props.message}</h2> : null}
            <form
                // action="/edit"
                method="POST"
                class="cat-form"
                encType="multipart/form-data"
            >
                
                <h2>Edit Cat</h2>

                <label htmlFor="name">Name</label>
                <input type="text" id="name" value="Pretty Cat" name="name" />

                <label htmlFor="description">Description</label>

                <textarea id="description" name="description" placeholder='Enter new text Here'>

                </textarea>

                <label htmlFor="image">Image</label>

                <input type="file" id="image" name="image" />

                <label htmlFor="group">Breed</label>

                <select id="group" name="breed">
                    <option value="Fluffy Cat">Fluffy Cat</option>
                    <option value="Hunter Cat">Hunter Cat</option>
                </select>

                <button>Edit Cat</button>

            </form>
            <Footer />
        </DefaultLayout>
    )
}

module.exports = Edit
