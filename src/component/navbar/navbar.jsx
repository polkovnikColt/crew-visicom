import React,{useEffect} from 'react'
import {Link} from "react-router-dom";
import './navbar.styles.scss'
import Login from "../pages/additional_elements/modal";


export default function Navbar(){
    return(
        <nav className={"nav nav-orig position-sticky"}>
            <div className="row">
            <img src={'./../images/compass.svg'} alt="" style={{'width' : 50 + "px"}}/>
            <Link className = {"nav-link text-light"} to="/main">Головна</Link>
            <Link className = {"nav-link text-light"} to="/search">Співробітники</Link>
            <Link className = {"nav-link text-light"} to="/group">Групи</Link>
            <Link className = {"nav-link text-light"} to="/send">Розсилки</Link>
            <Link className = {"nav-link text-light"} to="/document">Документи</Link>
              {/*<button className={'btn btn-outline-primary mx-sm-auto '}>Зайти як адміністратор</button>*/}
              <Login />
            </div>
        </nav>
    )
}