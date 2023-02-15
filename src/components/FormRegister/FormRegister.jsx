import React, { useRef } from 'react'
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { userRegister } from '../../store/actions/usersActions'
import notification from '../../assets/libraries/notification'

export default function FormRegister() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const form = useRef()

    const onSubmit = e => {
        e.preventDefault()
        if (form.current.password.value === form.current.confirmPassword.value) {
            const formData = new FormData(form.current)
            dispatch(userRegister(formData))
        } else {
            notification("La contraseña no coincide", "error")
        }
    }

    return (
        <form className="needs-validation shadow p-3 mb-5 bg-secondary rounded" onSubmit={onSubmit} ref={form}>
            <div className="mb-3">
                <label htmlFor="validationCustom01" className="form-label">Nombre</label>
                <input
                    type="text"
                    className="form-control"
                    id="validationCustom01"
                    name="firstName"
                    required
                />
                <div className="invalid-feedback">
                    Por favor ingresa tu nombre
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="validationCustom02" className="form-label">Apellido</label>
                <input
                    type="text"
                    className="form-control"
                    id="validationCustom02"
                    name="lastName"
                    required
                />
                <div className="invalid-feedback">
                    Por favor ingresa tu apellido
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="validationCustom03" className="form-label">Correo electrónico</label>
                <input
                    type="email"
                    className="form-control"
                    id="validationCustom03"
                    name="email"
                    required
                />
                <div className="invalid-feedback">
                    Por favor ingresa un correo electrónico
                </div>
            </div>
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
            <div className="mb-3">
                <label htmlFor="inputPassword6" className="form-label">Confirmar contraseña</label>
                <input
                    type="password"
                    className="form-control"
                    id="inputPassword6"
                    name="confirmPassword"
                    required
                />
            </div>
            <div className="mb-3 d-grid col-5 mx-auto">
                <button type="submit" className="btn btn-info btn-lg">Enviar</button>
            </div>
            <div className="mb-3">
                <label className="form-label">Ya tienes una cuenta? <a className="link link-info" onClick={() => navigate('/login')} >Iniciar sesión</a></label>
            </div>
        </form>
    );
}