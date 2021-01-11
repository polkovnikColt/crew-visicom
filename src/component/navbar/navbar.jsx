import React, {useEffect} from 'react'
import {Link} from "react-router-dom";
import './navbar.styles.scss'
import Login from "../pages/additional_elements/modal";
import logo from './../images/compass.svg';


export default function Navbar({login,unlog}) {
    return (
        <nav className={"nav nav-orig position-sticky"}>
            <div className="row w-100">
                <div className='image mb-2'><img src={logo}/></div>
                <Link className={"nav-link text-light mt-2"} to="/main">Головна</Link>
                <Link className={"nav-link text-light mt-2"} to="/search">Співробітники</Link>
                <Link className={"nav-link text-light mt-2"} to="/group">Групи</Link>
                <Link className={"nav-link text-light mt-2"} to="/send">Розсилки</Link>
                <Link className={"nav-link text-light mt-2"} to="/document">Документи</Link>
                <Login login = {login} unlog ={unlog} />
            </div>
        </nav>
    )
}