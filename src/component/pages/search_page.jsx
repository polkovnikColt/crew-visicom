import React,{useState,useEffect} from "react";
import Card from "./card/card";
import {getEmployees} from "../../server_data/rest";

export default function SearchPage(){

    const [employees,setEmployees] = useState( []);
    useEffect( () => {
    (async function call(){
        const employeesServer = await getEmployees();
        setEmployees(employeesServer);
    })()},[employees])

    const find = (e) =>{
        let temp_arr = [];
        employees.map(item =>{
            if(item.name.toLocaleLowerCase().startsWith(e.toLowerCase(),0)){
                temp_arr.push(item);
            }
        });
        setEmployees(() => temp_arr);
    };

    return(
        <div className={'page'}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-6 mt-3 '}>
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
                            <button className={'btn btn-secondary'}>За алфавітом</button>
                            <button className={'btn btn-secondary'}>1</button>
                            <button className={'btn btn-secondary'}>1</button>

                        </div> </div> </div></div>

                </div>
                <div className={'container'}>
                    <div className="row text-center">
                        {employees.map(item => {
                            return <Card info = {item}/>})}
                    </div>
                </div>
            </div>

    )
}