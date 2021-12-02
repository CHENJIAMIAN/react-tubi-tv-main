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

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isHidePartOfHeader: false,
            currUser: null,
        };
    }

    // Khong luu tren local duioc
    // 用于控制是否显示头部的搜索和登录(登录注册页面不显示), 当goFormLogin时,即到注册登录页面时,isStayFormLogin为true
    changeIsHidePartOfHeader = (bool) => {
        this.setState({ isHidePartOfHeader: bool }, () => null);
    };


    render() {
        let state = this.state;
        return (
            <Router>
                <div id="app" className="app">
                    <div className="tubiNotifications">
                        <div className="flexReverseOnMobile"></div>
                    </div>
                    <div className="appContent">
                        <Header
                            currUser={state.currUser}
                            isHidePartOfHeader={state.isHidePartOfHeader}
                            changeIsHidePartOfHeader={
                                this.changeIsHidePartOfHeader
                            }
                        />
                        <Switch>
                            <Route
                                path="/form-login/:status"
                                component={({ history, location, match }) => (
                                    <FormLogin
                                        history={history}
                                        location={location}
                                        match={match}
                                        changeIsHidePartOfHeader={
                                            this.changeIsHidePartOfHeader
                                        }
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
                                        isHidePartOfHeader={
                                            state.isHidePartOfHeader
                                        }
                                        changeIsHidePartOfHeader={
                                            this.changeIsHidePartOfHeader
                                        }
                                    />
                                )}
                            />
                            <Route
                                path="/account/:type?"
                                component={({ history, match }) => (
                                    <Account
                                        match={match}
                                        history={history}
                                        isHidePartOfHeader={
                                            state.isHidePartOfHeader
                                        }
                                        changeIsHidePartOfHeader={
                                            this.changeIsHidePartOfHeader
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
