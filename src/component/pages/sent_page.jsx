import React from "react";
import './pages.styles.scss'

export default function Sent(){
    return(
        <div className="page">
        <div className={"container mt-3 "}>
            <div>
            <input type="text" class="form-control" aria-label="Text input with dropdown button" />
            </div>

            <div className="input-group mt-5">
                <div className="input-group-prepend">
                    <span className="input-group-text">Текст розсилки</span>
                </div>
                <textarea className="form-control"
                          aria-label="With textarea"
                          style={{'min-heigth': 20 + '%'}}></textarea>
            </div>
            </div></div>
    )
}