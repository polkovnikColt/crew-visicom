import React,{useState} from "react";
import Card from "./card/card";
let employees = [{name:'Маргарита Петрівна'},
                 {name:'Лариса Іванівна'},
                 {name:'Павло Колінько'},
                 {name:'Віталій Петров'},
                 {name:'Кирило Сидоров'}, {name: 'Кирило Петров'}]


export default function SearchPage(){

    const [arr,setArr] = useState(employees)

    const alphSort = () =>{
        console.log("No " + arr.length > 0 ? employees: arr)
        let temp_arr = arr.length === 0 ? employees.sort() : arr.sort()
        console.log("Sort" + arr.length > 0 ? employees: arr)
        setArr(() => temp_arr)
    }

    const find = (e) =>{
        let temp_arr = []
        employees.map(item =>{
            if(item.name.toLocaleLowerCase().startsWith(e.toLowerCase(),0)){
                temp_arr.push(item);
            }
        })
        setArr(() => temp_arr)
    }

    return(
        <div className={'page'}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-6 mt-3 align-content-start'}>
                    <div className="input-group ">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="addon-wrapping">Ім'я</span>
                        </div>
                        <input onChange={(event) =>
                        {find(event.target.value)}}
                               type="text"
                               className="form-control"
                               aria-label="Username"
                               aria-describedby="addon-wrapping"/>

                        <div className="btn-group btn-group-md" role="group" aria-label="...">
                            <button className={'btn btn-secondary'} onClick={() => alphSort()}>За алфавітом</button>
                            <button className={'btn btn-secondary'}>1</button>
                            <button className={'btn btn-secondary'}>1</button>

                        </div> </div> </div></div>

                </div>
                <div className={'container'}>
                    <div className="row align-content-between">
                        {arr.map(item => {
                            return <Card info = {item}/>})}
                    </div>
                </div>
            </div>

    )
}