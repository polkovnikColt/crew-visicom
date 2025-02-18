import React,{useState,useEffect} from "react";
import Card from '../additional_elements/card';
import {Form} from "react-bootstrap";
import {getEmployees} from "../../../server_data/rest";

export default function Links({links}) {

    const [employees, setEmployees] = useState([]);
    const [branchEmployees, setBranchEmployees] = useState([]);
    const [branch, setBranch] = useState('');

    const call = async () => {
        const employeesServer = await getEmployees();
        setEmployees(employeesServer);
    }

    useEffect(() => {
        call();
    },[]);

    useEffect(() => {
        setBranchEmployees(employees.filter(item => item.branch === branch));
    },[branch])

    return (
        <div className={'container'}>
            <div className="row mt-2">
                    <Form.Control as="select" onChange = {e => setBranch(e.target.value)}>
                        {links.map(item => <option>{item.title}</option>)}
                    </Form.Control>
            </div>
            <div className="bg-gray row justify-content-center">
                {branchEmployees.length ? branchEmployees.map((item,index) => <Card info={item} key={index}/>)
                    : <h3>Виберіть відділення/наразі немає співробітників</h3>}
            </div>
        </div>
    )
}