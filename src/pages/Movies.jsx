import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card/Card'
import { getMovies } from '../store/actions/moviesActions'
import { userGet } from '../store/actions/usersActions'
import { BsPlusLg } from "react-icons/bs"
import Layout from '../components/Layout/Layout'
import { config } from '../config'

export default function Movies() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const allMovies = useSelector(state => state.movies)
    const message = useSelector(state => state.message)
    const url = config.URL

    const addItem = () => {
        navigate('/movies/add')
    }

    useEffect(() => {
        dispatch(userGet())
        dispatch(getMovies())
    }, [dispatch, message])

    return (
        <Layout>
            <div className='d-flex justify-content-between'>
                <h1 className='display-4 text-white text-center text-md-start my-4'>Mis peliculas</h1>
                <div className='d-flex align-items-center'>
                    <button className="btn btn-info btn-lg" onClick={addItem} >
                        <BsPlusLg /> Agregar
                    </button>
                </div>
            </div>
            <div className='content_section'>
                {allMovies.map((item, index) => {
                    return (
                        <div className="mx-auto mx-sm-0 col-7 col-sm-6 col-md-4 col-xl-3" key={index}>
                            <Card
                                title={item.title}
                                year={item.year}
                                genre={item.genre}
                                duration={item.duration}
                                description={item.description}
                                imagePath={item.imagePath}
                                url={url}
                                created_at={item.created_at}
                                id={item.id}
                            />
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
}