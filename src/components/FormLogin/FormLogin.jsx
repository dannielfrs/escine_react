import React, { useRef } from 'react'
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { userLogin } from '../../store/actions/usersActions'

export default function FormLogin() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const form = useRef()

    const onSubmit = e => {
        e.preventDefault()
        const formData = new FormData(form.current)
        dispatch(userLogin(formData))
    }

    return (
        <form className="needs-validation shadow p-3 mb-5 bg-secondary rounded" onSubmit={onSubmit} ref={form}>
            <div className="mb-3">
                <label htmlFor="validationCustomUsername" className="form-label">Usuario</label>
                <input
                    type="text"
                    className="form-control"
                    id="validationCustomUsername"
                    name="username"
                    required
                />
                <div className="invalid-feedback">
                    Por favor ingresa un nombre de usuario
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="inputPassword5" className="form-label">Contraseña</label>
                <input
                    type="password"
                    className="form-control"
                    id="inputPassword5"
                    name="password"
                    required
                />
            </div>
            <div className="mb-3 d-grid col-8 mx-auto">
                <button type="submit" className="btn btn-info btn-lg">Iniciar sesión</button>
            </div>
            <div className="mb-3">
                <label className="form-label">No tienes una cuenta? <a className="link link-info" onClick={() => navigate('/register')} >Registrarse</a></label>
            </div>
        </form>
    );
}