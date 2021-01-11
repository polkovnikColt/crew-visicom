import React, {useContext, useState, useEffect} from "react";
import {getEmployees} from "../../server_data/rest";
import Card from "./additional_elements/card";
import {LoggedContext} from "../../App";


export default function SearchPage() {

    const logged = useContext(LoggedContext);
    const [employees, setEmployees] = useState([]);
    const [employeesCopy, setCopy] = useState([]);

    const call = async () => {
        const employeesServer = await getEmployees();
        if (employeesServer.length) {
            setEmployees(employeesServer);
            setCopy(employeesServer);
        }
    }

    const sort = (TYPE) => {
        switch (TYPE) {
            case 'ALPH': {
                setEmployees(employees.sort((a, b) => {
                    if (a.name.charAt(0) > b.name.charAt(0)) return 1;
                    else if (a.name.charAt(0) < b.name.charAt(0)) return -1;
                    else return 0;
                }));
            }
        }
    }

    //TODO refactor when API data is valid
    useEffect(() => {
        if (!employees.length) call();
    }, []);

    const find = (e) => {
        if (e.length === 0) {
            setEmployees(employeesCopy);
            return;
        }
        const temp_arr = [];
        employees.forEach(item => {
            if (item.name.toLowerCase().startsWith(e.toLowerCase(), 0)) {
                temp_arr.push(item);
            }
        });
        if (temp_arr.length > 0) {
            setEmployees(temp_arr);
        } else {

        }
    };

    return (
        <div className={'page'}>
            <div className={'container-fluid'}>
                <div className={'row'}>
                    <div className={'col-12 mt-3 '}>
                        <div className="input-group ">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="addon-wrapping">Ім'я</span>
                            </div>
                            <input onChange={(event) => {
                                find(event.target.value)
                            }}
                                   type="text"
                                   className="form-control mx-auto"
                                   aria-label="Username"
                                   aria-describedby="addon-wrapping"/>
                            {logged ? <button className="btn btn-outline-info mx-2">Додати</button> : null}
                            <div className=" btn-group btn-group-md" role="group" aria-label="...">
                                <button className={'btn btn-secondary'} onClick={() => sort("ALPH")}>За алфавітом
                                </button>
                                <button className={'btn btn-secondary'}>За Д.Н.</button>
                                <button className={'btn btn-secondary'}>За віком</button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={'container'}>
                <div className="row mx-auto align-content-between">
                    {employees.map((item, key) => <Card info={item} key={key}/>)}
                </div>
            </div>
        </div>

    )
}