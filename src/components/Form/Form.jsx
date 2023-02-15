import React, { useRef } from 'react'
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { addMovie, editMovie } from '../../store/actions/moviesActions'

export default function Form(props) {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const form = useRef()

    const years = Array.from(Array(44).keys()).map(i => 1980 + i);

    const onSubmit = e => {
        e.preventDefault()
        const formData = new FormData(form.current)
        if (props.data) {
            dispatch(editMovie(formData, props.data.id))
        } else {
            dispatch(addMovie(formData))
        }
        navigate('/movies')
    }

    return (
        <form className="needs-validation shadow p-3 mb-5 bg-secondary rounded" onSubmit={onSubmit} ref={form}>
            <div className="mb-3">
                <label htmlFor="validationCustom01" className="form-label">Titulo</label>
                <input
                    type="text"
                    className="form-control"
                    id="validationCustom01"
                    name="title"
                    defaultValue={props.data ? props.data.title : ''}
                    required
                />
                <div className="invalid-feedback">
                    Por favor ingresa un titulo
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="validationCustom04" className="form-label">Año</label>
                <select
                    className="form-select"
                    id="validationCustom04"
                    name="year"
                    defaultValue={props.data ? props.data.year : ''}
                    required
                >
                    <option selected value="">Seleccionar...</option>
                    {years.map((item) => {
                        return (
                            <option value={item} key={item}>{item}</option>
                        )
                    })}
                </select>
                <div className="invalid-feedback">
                    Por favor selecciona un año
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="validationCustom02" className="form-label">Gènero</label>
                <input
                    type="text"
                    className="form-control"
                    id="validationCustom02"
                    name="genre"
                    defaultValue={props.data ? props.data.genre : ''}
                    required
                />
                <div className="invalid-feedback">
                    Por favor ingresa un género
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="validationCustom03" className="form-label">Duración</label>
                <input
                    type="text"
                    className="form-control"
                    id="validationCustom03"
                    name="duration"
                    defaultValue={props.data ? props.data.duration : ''}
                    required
                />
                <div className="invalid-feedback">
                    Por favor ingresa la duración en minutos
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Descripción</label>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="description"
                    defaultValue={props.data ? props.data.description : ''}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="formFile" className="form-label">Imagen de portada</label>
                <input
                    className="form-control"
                    type="file"
                    id="formFile"
                    name="image"
                />
            </div>
            <div className="d-grid col-5 mx-auto">
                <button type="submit" className="btn btn-info btn-lg">Enviar</button>
            </div>
        </form>
    );
}