import React, {useCallback, useEffect, useState} from 'react'
import Card from "./card/card";
import './pages.styles.scss'
import {getBirthday, getEmployees} from "../../server_data/rest";


const quant = 25

export default function MainPage(){

    const [count,setCount] = useState(0);
    const [info, setInfo] = useState( []);

    // if(info.length === 0){
    //     (async function call(){
    //         const data = await getBirthday();
    //         console.log(123)
    //         setInfo(data);
    //     })();
    // }

    useEffect(() => {
        setCount(info.length)
    },[info]);

    return(
        <div className={'page'}>
        <div className={'container'}>
            <h3 className={"my-4"}>
                Дні народження у <span className="badge badge-primary text-wrap">{count}</span> наших співробітників</h3>
            <div className={"row"}>
                <div className={'row mx-auto'}>
                     {info.map(item => <Card info={item} key ={item}/>)}
            </div></div>

            <div className="container">
            <div className="row">
                <h3 className={'text mx-auto mt-5'}>
                    У нас працює <span className="badge badge-primary text-wrap">
                    {quant}</span> сівробітників</h3>
                <h4 className={'mx-auto'}>Переглянути інормацію по нашим працівникам можливо на сторінці - <a href="/search" className={'stretched-link'}>Співробітники</a>
                </h4>
            </div>
            </div>

            <div className="container">
                <div className="row">
                    <h3 className={'text mx-auto mt-5'}>
                        Вже створенно <span className="badge badge-primary text-wrap">
                    {quant}</span> розсилок</h3>
                    <h4 className={'mx-auto'}>Переглянути інормацію по розсилкам можливо на сторінці - <a href="/send" className={'stretched-link'}>Розсилки</a>
                    </h4>
                </div>
            </div>

        </div>
        </div>
    )
}