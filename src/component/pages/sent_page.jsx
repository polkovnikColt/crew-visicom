import React, {useState, useEffect} from "react";
import {Form} from "react-bootstrap";
import {getLinks} from "../../server_data/rest";
import './pages.styles.scss'

export default function Sent() {

    const [text, setText] = useState('');
    const [links, setLinks] = useState([]);

    const sendData = async () => {
        const rawResponse = await fetch('/sendMail', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(text)
        });
        const content = await rawResponse.json();
        console.log(content)
    }

    const call = async () => {
        const data = await getLinks();
        console.log(data);
        setLinks(data);
    }

    useEffect(() => {
        call();
    }, [])


    return (
        <div className="page">
            <div className={"container mt-3 "}>
                <Form.Control as="select">
                    {links.map(item => <option>{item.title}</option>)}
                </Form.Control>
                <div className="input-group mt-5">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Текст розсилки</span>
                    </div>
                    <textarea
                        className="form-control"
                        aria-label="With textarea"
                        style={{minHeight: '100px'}}
                        onChange={e => setText(e.target.value)}/>
                    <button className={'btn btn-outline-primary'} onClick={sendData}>
                        Надіслати
                    </button>
                </div>
            </div>
        </div>
    )
}