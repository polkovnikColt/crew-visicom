import React,{useEffect} from 'react'
import './navbar.styles.scss'


export default function Navbar(){


    return(
        <nav className={"nav nav-orig position-sticky"}>
            <img src={'./../images/compass.svg'} alt="" style={{'width' : 50 + "px"}}/>
            <a className = {"nav-link text-light"} href="/">Головна</a>
            <a className = {"nav-link text-light"} href="/search">Співробітники</a>
            <a className = {"nav-link text-light"} href="/group">Групи</a>
            <a className = {"nav-link text-light"} href="/send">Розсилки</a>
            <a className = {"nav-link text-light"} href="/document">Документи</a>
        </nav>
    )
}