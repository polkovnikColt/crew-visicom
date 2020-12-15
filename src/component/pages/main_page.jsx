import React,{useEffect,useState} from 'react'
import Card from "./card/card";
import './pages.styles.scss'
const info =
    [{name:'Маргарита Петрівна',
    add: '04.12.2020' === new Date().toLocaleDateString() ?
        {today: true,text:'Сьогодні святкує день народження'} :
        {today: false,text:'Нещодавно святкував/ла день народження'}},
    {name:'Лариса Іванівна',
        add: '04.08.2020' === new Date().toLocaleDateString() ?
            {today: true,text:'Сьогодні святкує день народження'} :
            {today: false,text:'Нещодавно святкував/ла день народження'}}]

const quant = 25

export default function MainPage(){
    const [count,setCount] = useState(0)

    useEffect(() => {
        setCount(info.length)
    },[info])

    return(
        <div className={'page'}>
        <div className={'container'}>
            <h3 className={"my-4"}>
                Дні народження у <span className="badge badge-primary text-wrap">{count}</span> наших співробітників</h3>
            <div className={"row"}>
                <div className={'row mx-auto'}>
                     {info.map(item => <Card info={item} key ={item}/>)}
            </div></div>

            <div className="row">
                <h3 className={'text mx-auto mt-5'}>
                    У нас працює <span className="badge badge-primary text-wrap">
                    {quant}</span> сівробітників</h3>
                <h4 className={'mx-auto'}>Переглянути інормацію по нашим працівникам можливо на сторінці - <a href="/search" className={'stretched-link'}>Співробітники</a>
                </h4>
            </div>

            <div className="row">
                <h3 className={'text mx-auto mt-5'}>
                    Наразі створенно <span className="badge badge-primary text-wrap">
                    {quant}</span> розсилок</h3>
                <h4 className={'mx-auto'}>Створити нову можливо на сторінці - <a href="/send" className={'stretched-link'}>Розсилки</a>
                </h4>
            </div>


        </div>
        </div>
    )
}