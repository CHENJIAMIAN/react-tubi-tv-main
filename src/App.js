import 'src/style/App.css';
import React from 'react';
import Home from 'src/pages/Home.js';
import Account from 'src/pages/Account.js';
import Header from 'src/components/Header.js';
import FormLogin from 'src/pages/FormLogin.js';
import SearchResults from 'src/pages/SearchResults.js';
import Category from 'src/pages/Category.js';
import Movies from 'src/pages/Movies.js';
import ListByTag from 'src/pages/ListByTag.js';

import {
    Redirect,
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        let state = this.state;

        return (
            <Router>
                <div id="app" className="app">
                    <div className="tubiNotifications">
                        <div className="flexReverseOnMobile"></div>
                    </div>
                    <div className="appContent">
                        <Header />
                        <Switch>
                            <Route
                                path="/form-login/:status"
                                component={FormLogin}
                            />
                            <Route
                                path="/search/:keyword"
                                component={SearchResults}
                            />
                            <Route
                                path="/category/:name/:id"
                                component={Category}
                            />
                            <Route path="/movies/:id" component={Movies} />
                            <Route path="/tag/:tag" component={ListByTag} />
                            <Route exact path="/home/" component={Home} />
                            <Route path="/account/:type?" component={Account} />
                            <Redirect from="/*" to="/home" />
                        </Switch>
                    </div>
                    <div id="GoogleOneTap" className="oneTap"></div>
                </div>
            </Router>
        );
    }
}
export default connect(
    //connect返回一个高阶组件函数, 加强了组件
    (state) => ({ ...state.ping }), //mapStateToProps 把state映射到props
    (dispatch) => {
        return {
            changeIsHidePartOfHeader: (payload) =>
                dispatch({ type: 'CHANGE_IS_HIDE_PART_OF_HEADER', payload }),
            dispatch,
        };
    } //mapDispatchToProps
    //mergeProps?: (stateProps, dispatchProps, ownProps) => Object //return value as this.props
)(App);
