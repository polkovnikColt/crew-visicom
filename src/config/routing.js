import {BrowserRouter,Switch,Route} from "react-router-dom";
import MainPage from "../component/pages/main_page";
import SearchPage from "../component/pages/search_page";
import GroupPage from "../component/pages/group_page";
import Sent from "../component/pages/sent_page";
import React from "react";

export default function Routing(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path={'/'} component={MainPage} exact={true}/>
                <Route path={'/search'} component={SearchPage}/>
                <Route path={'/group'} component={GroupPage}/>
                <Route path={'/send'} component={Sent}/>
                <Route path={'/document'} />
            </Switch>
        </BrowserRouter>
    )
}