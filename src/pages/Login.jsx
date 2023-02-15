import React from 'react'
import FormLogin from '../components/FormLogin/FormLogin'
import Layout from '../components/Layout/Layout'

export default function Login() {

    return (
        <Layout>
            <h1 className='display-4 text-white text-center text-md-start my-4'>Iniciar sesión</h1>
            <div className='content_section justify-content-center'>
                <FormLogin />
            </div>
        </Layout>
    )
}