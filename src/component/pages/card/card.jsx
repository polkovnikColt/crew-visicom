import React from 'react'
import '../pages.styles.scss'

export default function Card({info}){
    // console.log(info.name)
    return(
        <div className="card m-2 border-secondary" style={{'max-width': 220 + 'px'}}>
        <img style={{'height': 250 + "px"}}
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5AZPjAW8V7bnKIljk-8bKAZ9T5PEQC4dtAg&usqp=CAU" className="card-img-top" alt="..."/>
        <div className="card-body" >
        <p className="card-text text">
            {info.add ? <p>{info.add.text}</p> : null}
            <span className={'text'}>{info.name}</span>
        </p>
    </div>
</div>
    )
}