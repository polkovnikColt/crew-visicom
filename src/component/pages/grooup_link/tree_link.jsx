import React from "react";
import Link from "./link";

export default function Tree({arr}){
    return(
        <div className={'container'}>
            <div className="row align-content-start">
                {arr.map(item => <Link item={item}/>)}
            </div>
        </div>
    )
}