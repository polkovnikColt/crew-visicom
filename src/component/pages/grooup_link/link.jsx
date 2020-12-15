import React from "react";
import {Dropdown,Button,ButtonGroup} from 'react-bootstrap'

export default function Link({item}){
        return(
            <div className={'m-2'}>
            <Dropdown as={ButtonGroup} >
                    <Button variant="secondary">{item.title}</Button>
                { item.add ? <ButtonDropdown elem={item}/>: null}
            </Dropdown>

            </div>
        )
}

function ButtonDropdown({elem}){
    return(
        <div>
        <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />
            <Dropdown.Menu>
            {  elem.add.map(e =>{
                  return <Dropdown.Item href="#/action-1">{e}</Dropdown.Item>
                })}
    </Dropdown.Menu>
        </div>
    )
}