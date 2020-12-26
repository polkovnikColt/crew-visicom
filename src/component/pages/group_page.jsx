import React,{useEffect,useState} from "react";
import './pages.styles.scss'
import Tree from "./grooup_link/tree_link";
import {getLinks} from "../../server_data/rest";


export default function GroupPage() {

    const [links,setLinks] = useState([]);

    const call = async () => {
        const data = await getLinks();
        setLinks(data);
    }

    useEffect(() => {
        call();
    },[])

    return (
        <div className={'page'}>
            <div className={'container'}>
                <div className={'mx-auto'}>
                    <div className={'bg-gray mt-2'}>
                        <Tree className={'p-2'} links={links}/>
                    </div>
                </div>
            </div>
        </div>
    )
}