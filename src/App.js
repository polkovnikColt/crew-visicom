import React,{useState} from 'react'
import Navbar from "./component/navbar/navbar";
import Footer from "./component/footer/footer";
import {HashRouter, Route, Switch} from "react-router-dom";
import MainPage from "./component/pages/mainPage";
import SearchPage from "./component/pages/searchPage";
import GroupPage from "./component/pages/groupPage";
import Sent from "./component/pages/sendPage";
import Document from "./component/pages/documentPage";
import {getAdmins} from "./server_data/rest";

export const LoggedContext = React.createContext(false);

function App() {

    const [logged,setLogged] = useState(false);

    const login = async (password) => {
        const admin = await getAdmins();
        admin.filter(item => item.password === password).length !== 0
            ? setLogged(true)
            : alert("Не існує такого адміністратора");
    }

    const unlog = () => {
        setLogged(false)
    }

    return (
        <HashRouter>
            <LoggedContext.Provider value={logged}>
            <Navbar login = {login} unlog = {unlog}/>
            <Switch>
                <Route path={'/main'} component={MainPage} exact/>
                <Route path={'/search'} component={SearchPage}/>
                <Route path={'/group'} component={GroupPage}/>
                <Route path={'/send'} component={Sent}/>
                <Route path={'/document'} component={Document}/>
            </Switch>
            <Footer/>
            </LoggedContext.Provider>
        </HashRouter>
    );
}

export default App;
