import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import styles from './styles.module.scss'
import { FaBars, FaTimes } from "react-icons/fa";
import { GiCigar } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { userLogout } from '../../store/actions/usersActions'

export default function Navbar() {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const [visible, setVisible] = useState(false);

    const toggleMenu = () => {
        setVisible(!visible)
    }

    const hideMenu = () => {
        setVisible(false)
    }

    const logout = () => {
        dispatch(userLogout())
    }

    return (
        <nav className={`${styles.navbar} bg-secondary text-light`}>
            <div className={`${styles.navbar_container}`}>
                <div className={styles.navbar_left}>
                    <div className={styles.navbar_item}>
                        <Link
                            to='/'
                            className={styles.navbar_brand}
                            onClick={hideMenu}
                        >
                            <GiCigar />EsCine.com
                        </Link>
                    </div>
                    <ul className={visible ? `${styles.navbar_menu} ${styles.active} bg-secondary` : styles.navbar_menu}>
                        <li className={styles.navbar_item} >
                            <Link
                                to="/movies"
                                className={`${styles.navbar_button}`}
                                onClick={hideMenu}>
                                Mis peliculas
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.navbar_right}>
                    <div className={styles.navbar_item}>
                        {user && user.user.username}
                    </div>
                    <div className={user.isLoggedin ? "d-none" : `${styles.navbar_item} ms-1`} >
                        <Link
                            to='/login'
                            className="btn btn-light"
                            onClick={hideMenu}>
                            Iniciar sesión
                        </Link>
                    </div>
                    <div className={user.isLoggedin ? "d-none" : `${styles.navbar_item} ms-1`} >
                        <Link
                            to='/register'
                            className="btn btn-info"
                            onClick={hideMenu}>
                            Registrarse
                        </Link>
                    </div>
                    <div className={user.isLoggedin ? `${styles.navbar_item} ms-1` : "d-none"} >
                        <Link
                            to='/'
                            className="btn btn-light"
                            onClick={logout}>
                            Cerrar sesión
                        </Link>
                    </div>
                    <div className={styles.navbar_icon} onClick={toggleMenu}>
                        {visible ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </div>
        </nav>
    )
}