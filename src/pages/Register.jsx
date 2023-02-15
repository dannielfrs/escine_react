import React from 'react'
import FormRegister from '../components/FormRegister/FormRegister'
import Layout from '../components/Layout/Layout'

export default function Register() {

    return (
        <Layout>
            <h1 className='display-4 text-white text-center text-md-start my-4'>Registrarse</h1>
            <div className='content_section'>
                <div className='mx-auto col-10 col-sm-8 col-lg-5'>
                    <FormRegister />
                </div>
            </div>
        </Layout>
    )
}