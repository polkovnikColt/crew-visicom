import React, {useState, useContext} from "react";
import {Modal, Button} from "react-bootstrap";
import './modal.styles.scss';
import {LoggedContext} from "../../../App";


export default function Login({login,unlog}) {

    const logged = useContext(LoggedContext);
    const [show, setShow] = useState(false);
    const [password, setPassword] = useState('');

    const handleCloseSave = () => {
        login(password);
        setShow(false)
    };
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="outline-primary" onClick={logged ? unlog : handleShow} className='login'>
                {logged ? "Вийти" : "Зайти як адміністратор"}
            </Button>
            <Modal show={show} onHide={handleClose} className='mt-5'>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Ваш пароль</label>
                            <input type="password"
                                   className="form-control"
                                   id="exampleInputPassword1"
                                   onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Зберегти дані</label>
                        </div>
                        <Button variant="primary" onClick={handleCloseSave}>
                            Save Changes
                        </Button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}
