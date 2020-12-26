import React,{useState} from "react";
import {Modal,Button} from "react-bootstrap";


export default function Login() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="outline-primary" className = {'mx-auto'} onClick={handleShow}>
                Зайти як адміністратор
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Ваш пароль</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Зберегти дані</label>
                        </div>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}
