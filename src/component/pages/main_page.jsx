import React, {useEffect,useState} from 'react'
import Card from "./additional_elements/card";
import './pages.styles.scss'
import {getBirthday, getEmployees} from "../../server_data/rest";
import {Link} from "react-router-dom";


const quant = 25

export default function MainPage() {

    const [count, setCount] = useState(0);
    const [info, setInfo] = useState([]);
    const [birth,setBirth] = useState(true);
    const [] = useState(0)

    const call = async () => {
        const data = await getBirthday();
        data.length ? setInfo(data) : setBirth(prev => !prev);
    }

    useEffect(() => {
        if (info.length === 0) {
            call();
        }
        setCount(info.length)
    }, [info]);

    return (
        <div className={'page'}>
            <div className={'container'}>
                <h3 className={"my-4"}>
                    День народження у <span className="badge badge-primary text-wrap">{count}</span> співробітника/ків
                </h3>
                <div className={"row"}>
                    <div className={'row mx-auto'}>
                        {birth
                            ? info.map((item, index) => (
                                <div className={'m-2'}>
                                    <Card key={index} info={item}/>
                                </div>
                            ))
                            : <h3>На жаль, зараз ніхто не святкує</h3>
                        }
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-5">
                <div className="row text-center">
                    <h3>У нас працює <span className="badge badge-primary text-wrap">{quant}</span> співробітників.
                        Всіх можливо знайти на сторінці - <Link to="/search">Співробітники</Link>
                    </h3>
                </div>
            </div>
            <div className="container mx-auto mt-5">
                <div className="row text-center">
                    <h3>Вже створенно <span className="badge badge-primary text-wrap">{quant}</span> розсилок.
                        Створити нову можливо на сторінці - <Link to={"/send"}>Розсилки</Link>
                    </h3>
                </div>
            </div>
        </div>
    )
}