import React from 'react'
import Navbar from "./component/navbar/navbar";
import Footer from "./component/footer/footer";
import {HashRouter, Route, Switch} from "react-router-dom";
import MainPage from "./component/pages/main_page";
import SearchPage from "./component/pages/search_page";
import GroupPage from "./component/pages/group_page";
import Sent from "./component/pages/sent_page";
import Document from "./component/pages/document_page";


function App() {
    return (
        <HashRouter>
            <Navbar/>
            <Switch>
                <Route path={'/main'} component={MainPage} exact/>
                <Route path={'/search'} component={SearchPage}/>
                <Route path={'/group'} component={GroupPage}/>
                <Route path={'/send'} component={Sent}/>
                <Route path={'/document'} component={Document}/>
            </Switch>
            <Footer/>
        </HashRouter>
    );
}

export default App;
