import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux"
import Form from '../components/Form/Form'
import Layout from '../components/Layout/Layout'

export default function Edit() {

    let { id } = useParams()
    var [movieId] = id.match(/(\d+)/)
    const allMovies = useSelector(state => state.movies)
    const [movie] = allMovies.filter(item => item.id == movieId)

    return (
        <Layout>
            <h1 className='display-4 text-white text-center text-md-start my-4'>Editar pelicula</h1>
            <div className='content_section justify-content-center'>
                <Form data={movie} />
            </div>
        </Layout>
    )
}