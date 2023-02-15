import React, { useEffect, useRef } from 'react'
import styles from './styles.module.scss'

export default function Tooltip(props) {

    const tooltip = useRef()

    useEffect(() => {
        tooltip.current.parentElement.classList.add(styles.tooltip)
    }, [])

    return (
        <span className={styles.tooltiptext} ref={tooltip}>
            {props.text}
        </span>
    )
}