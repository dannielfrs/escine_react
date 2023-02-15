import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Layout({ children }) {

    return (
        <main>
            <header className='page_header'>
                <Navbar />
            </header>
            <section className='bg-primary page_section'>
                <div className='container'>
                    <div className='page_content'>
                        {children}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}