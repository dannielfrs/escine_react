import React from 'react'
import Navbar from '../components/Navbar/Navbar'

export default function Home() {

    return (
        <main>
            <header className='page_header'>
                <Navbar />
            </header>
            <section className='bg-primary page_section'>
                <div className='page_bg'>
                    <div className='container'>
                        <div className='page_content d-flex align-items-end'>
                            <div className='col-12'>
                                <div className='d-flex justify-content-center mt-5'>
                                    <h1 className='display-2 text-white'>Bienvenido</h1>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <h4 className='text-white'>Guarda tus peliculas favoritas!</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}