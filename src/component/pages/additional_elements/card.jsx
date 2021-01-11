import React,{useContext} from 'react'
import '../pages.styles.scss'
import {LoggedContext} from "../../../App";
import cross from './../../images/x-mark.svg';

export default function Card({info}){

    const logged = useContext(LoggedContext);

    return(
        <div className="card mx-auto m-3 p-1 border-secondary" style={{'width': 230 + 'px'}}>
            {logged ? <div className='cross'>{<img src={cross} className='w-100'/>}</div> : null}
        <img style={{'height': 250 + "px"}}
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5AZPjAW8V7bnKIljk-8bKAZ9T5PEQC4dtAg&usqp=CAU" className="card-img-top" alt="..."/>
        <div className="card-body" >
        <p className="card-text text">
            <h2 className={'text '}>{info.name}</h2>
            <div className={'text add'}>{info.birthday}</div>
            <div className={'text add'}>{info.branch}</div>
        </p>
    </div>
</div>
    )
}