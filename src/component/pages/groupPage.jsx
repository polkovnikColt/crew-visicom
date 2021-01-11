import React, {useEffect, useState} from "react";
import './pages.styles.scss'
import Links from "./grooup_link/Links";
import {getLinks} from "../../server_data/rest";


export default function GroupPage() {

    const [links, setLinks] = useState([]);

    const call = async () => {
        const data = await getLinks();
        setLinks(data);
    }

    useEffect(() => {
        call();
    }, [])

    return (
        <div className={'page'}>
            <div className={'container'}>
                <div className={'mx-auto'}>
                    <Links className={'p-2'} links={links}/>
                </div>
            </div>
        </div>
    )
}