import React from 'react'
import '../pages.styles.scss'

export default function Card({info}){
    return(
        <div className="card mx-auto m-3 p-1 border-secondary" style={{'width': 230 + 'px'}}>
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