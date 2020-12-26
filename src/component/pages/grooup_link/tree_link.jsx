import React from "react";
import {Button} from "react-bootstrap";

export default function Tree({links}){
    return(
        <div className={'container'}>
            <div className="row mx-auto">
                {links.map(item => <Button className = 'm-2' variant={'outline-primary'} key = {item}>{item.title}</Button>)}
            </div>
        </div>
    )
}