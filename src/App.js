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

import {
    Redirect,
    BrowserRouter as Router,
    Route,
    Switch,
    useParams,
} from 'react-router-dom';

import Footer from 'src/components/Footer';

let initState = {
    isLogged: false,
    isStayFormLogin: false,
    isStayFormRegister: false,
    currUser: null,
    searchValue: null,
};

let store = window.localStorage;

class App extends React.Component {
    constructor() {
        super();
        this.state = store.getItem('state')
            ? JSON.parse(store.getItem('state'))
            : initState;
    }

    // Khong luu tren local duioc
    changeIsStayFormLogin = (bool) => {
        let state = this.state;
        state.isStayFormLogin = bool;
        store.setItem('state', JSON.stringify(state));
        this.setState({ state: state }, () => null);
    };

    changeIsRegister = (bool) => {
        let state = this.state;
        state.isStayFormRegister = bool;
        store.setItem('state', JSON.stringify(this.state));
        this.setState({ state: state }, () => null);
    };

    changeIsLogged = (curr) => {
        let bool = curr === null ? false : true;
        let newState = this.state;
        newState.isLogged = bool;
        newState.currUser = curr;
        store.setItem('state', JSON.stringify(this.state));
        this.setState({ state: newState }, () => null);
    };

    getSearchValue = (str) => {
        this.setState({ searchValue: str }, () => null);
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
                            getSearchValue={this.getSearchValue}
                        />
                        <Switch>
                            <Route
                                path="/form-login/:status"
                                component={({ history }) => (
                                    <FormLogin
                                        history={history}
                                        changeIsStayFormLogin={
                                            this.changeIsStayFormLogin
                                        }
                                        changeIsRegister={this.changeIsRegister}
                                        changeIsLogged={this.changeIsLogged}
                                    />
                                )}
                            />
                            <Route
                                exact
                                path="/search"
                                component={({ history }) => (
                                    <SearchResults
                                        history={history}
                                        searchValue={state.searchValue}
                                    />
                                )}
                            />
                            <Route
                                exact
                                path="/category/:name/:id"
                                component={({ history, match }) => (
                                    <Category history={history} match={match} />
                                )}
                            />
                            <Route
                                exact
                                path="/movies/:id"
                                component={({ match }) => (
                                    <Movies match={match} />
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
                            {/* <Route
                                path="/account"
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
                            /> */}
                            <Route
                                path="/account/:type"
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
                            {/* <Route
                                path="*"
                                component={({ history }) => (
                                    <Home
                                        history={history}
                                        isStayFormLogin={state.isStayFormLogin}
                                        changeIsStayFormLogin={
                                            this.changeIsStayFormLogin
                                        }
                                    />
                                )}
                            >
                                \
                            </Route> */}
                        </Switch>
                    </div>
                    <div id="GoogleOneTap" className="oneTap"></div>
                </div>
            </Router>
        );
    }
    routerWillLeave(nextLocation) {
        debugger;
        //nextLocation 接下来要跳转的路由
        //isChange 页面是否有更改
    }
}

export default App;
