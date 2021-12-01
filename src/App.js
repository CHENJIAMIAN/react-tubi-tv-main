import 'src/style/App.css';
import React from 'react';
import Home from 'src/pages/Home.js';
import Account from 'src/pages/Account.js';
import Header from 'src/components/Header.js';
import FormLogin from 'src/pages/FormLogin.js';
import SearchResults from 'src/pages/SearchResults.js';
import Category from 'src/pages/Category.js';
import Movies from 'src/pages/Movies.js';
import Pay from 'src/pages/Pay.js';
import ListByTag from 'src/pages/ListByTag.js';

import {
    withRouter,
    Redirect,
    BrowserRouter as Router,
    Route,
    Switch,
    useParams,
} from 'react-router-dom';
import { getQueryVariable } from 'src/utils/util.js';

let initState = {
    isLogged: false,
    isStayFormLogin: false,
    isStayFormRegister: false,
    currUser: null,
};

class App extends React.Component {
    constructor() {
        super();
        this.state = localStorage.getItem('state')
            ? JSON.parse(localStorage.getItem('state'))
            : initState;
    }

    // Khong luu tren local duioc
    // 用于控制是否显示头部的搜索和登录(登录注册页面不显示), 当goFormLogin时,即到注册登录页面时,isStayFormLogin为true
    changeIsStayFormLogin = (bool) => {
        let state = this.state;
        state.isStayFormLogin = bool;
        localStorage.setItem('state', JSON.stringify(state));
        this.setState({ state: state }, () => null);
    };

    changeIsRegister = (bool) => {
        let state = this.state;
        state.isStayFormRegister = bool;
        localStorage.setItem('state', JSON.stringify(this.state));
        this.setState({ state: state }, () => null);
    };

    changeIsLogged = (curr) => {
        let bool = curr === null ? false : true;
        let newState = this.state;
        newState.isLogged = bool;
        newState.currUser = curr;
        localStorage.setItem('state', JSON.stringify(this.state));
        this.setState({ state: newState }, () => null);
        if (!bool) {
            localStorage.removeItem('email');
            localStorage.removeItem('token');
        }
    };

    render() {
        let state = this.state;
        return (
            <Router>
                <div id="app" className="app" style={{ background: '#26262D' }}>
                    <div className="tubiNotifications">
                        <div className="flexReverseOnMobile"></div>
                    </div>
                    <div className="appContent">
                        <Header
                            isLogged={state.isLogged}
                            currUser={state.currUser}
                            isStayFormLogin={state.isStayFormLogin}
                            isStayFormRegister={state.isStayFormRegister}
                            changeIsStayFormLogin={this.changeIsStayFormLogin}
                            changeIsRegister={this.changeIsRegister}
                            changeIsLogged={this.changeIsLogged}
                        />
                        <Switch>
                            <Route
                                path="/form-login/:status"
                                component={({ history, location, match }) => (
                                    <FormLogin
                                        history={history}
                                        location={location}
                                        match={match}
                                        changeIsStayFormLogin={
                                            this.changeIsStayFormLogin
                                        }
                                        changeIsRegister={this.changeIsRegister}
                                        changeIsLogged={this.changeIsLogged}
                                    />
                                )}
                            />
                            <Route
                                path="/search/:keyword"
                                component={({ history, location, match }) => (
                                    <SearchResults
                                        history={history}
                                        location={location}
                                        match={match}
                                    />
                                )}
                            />
                            <Route
                                path="/category/:name/:id"
                                component={({ history, match }) => (
                                    <Category history={history} match={match} />
                                )}
                            />
                            <Route
                                path="/movies/:id"
                                component={({ match }) => (
                                    <Movies match={match} />
                                )}
                            />
                            <Route
                                path="/tag/:tag"
                                component={({ history, match }) => (
                                    <ListByTag
                                        history={history}
                                        match={match}
                                    />
                                )}
                            />
                            <Route
                                exact
                                path="/home/"
                                component={({ history }) => (
                                    <Home
                                        history={history}
                                        isStayFormLogin={state.isStayFormLogin}
                                        changeIsStayFormLogin={
                                            this.changeIsStayFormLogin
                                        }
                                    />
                                )}
                            />
                            <Route
                                exact
                                path="/pay/"
                                component={({ history }) => (
                                    <Pay
                                        history={history}
                                        isStayFormLogin={state.isStayFormLogin}
                                    />
                                )}
                            />
                            <Route
                                path="/account/:type?"
                                component={({ history, match }) => (
                                    <Account
                                        match={match}
                                        history={history}
                                        isStayFormLogin={state.isStayFormLogin}
                                        changeIsStayFormLogin={
                                            this.changeIsStayFormLogin
                                        }
                                    />
                                )}
                            />
                            <Redirect from="/*" to="/home" />
                        </Switch>
                    </div>
                    <div id="GoogleOneTap" className="oneTap"></div>
                </div>
            </Router>
        );
    }
}

export default App;
