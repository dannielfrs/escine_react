import React from 'react'
import Form from '../components/Form/Form'
import Layout from '../components/Layout/Layout'

export default function Add() {

    return (
        <Layout>
            <h1 className='display-4 text-white text-center text-md-start my-4'>Agregar pelicula</h1>
            <div className='content_section justify-content-center'>
                <Form />
            </div>
        </Layout>
    )
}