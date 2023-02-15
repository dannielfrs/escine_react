import React from 'react'
import styles from './styles.module.scss'
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import moment from 'moment';
import 'moment/locale/es';
import { MdOutlineModeEdit, MdDeleteOutline } from "react-icons/md";
import { getMovies, deleteMovie } from '../../store/actions/moviesActions'
import Tooltip from '../Tooltip/Tooltip'

export default function Card(props) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const editItem = () => {
        navigate(`/movies/edit/:${props.id}`)
    }

    const deleteItem = () => {
        dispatch(deleteMovie(props.id))
        dispatch(getMovies())
    }

    return (
        <div className={`${styles.card} card mb-3 mx-1 bg-secondary text-white`}>
            <div className="bg-dark">
                <img src={props.url + props.imagePath} className={`${styles.card_img}`} alt="..." />
            </div>
            <div className={`${styles.card_body} card-body`}>
                <div className="d-flex justify-content-end">
                    <button
                        onClick={editItem}
                        className="btn btn-outline-light rounded-circle border border-2 h1"
                    >
                        <Tooltip text="Editar" />
                        <MdOutlineModeEdit />
                    </button >
                    <button
                        onClick={deleteItem}
                        className="btn btn-outline-light rounded-circle border border-2 ms-1 h5"
                    >
                        <Tooltip text="Eliminar" />
                        <MdDeleteOutline />
                    </button >
                </div>
                <h5 className="card-title">{props.title}</h5>
                <div className="card-text"><strong>Año: </strong>{props.year}</div>
                <div className="card-text"><strong>Género: </strong>{props.genre}</div>
                <div className="card-text"><strong>Duración: </strong>{props.duration} min</div>
                <strong>Descripción:</strong>
                <div className={`${styles.card_description} card-text`}>{props.description}</div>
            </div>
            <div className="card-footer">
                <p className="card-text"><small>Agregada {moment(props.created_at).fromNow()}</small></p>
            </div>
        </div>
    )
}