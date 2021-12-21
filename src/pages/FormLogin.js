import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../components/Register.js';
import SignIn from '../components/SignIn.js';
import Footer from 'src/components/Footer.js';
import { userRegister,userAuth,request } from 'src/utils/request.js';
import { message } from 'antd';
import { withRouter } from 'react-router';
import { getQueryVariable } from 'src/utils/util.js';

class FormLogin extends React.Component {
    addNewAccount = (acc) => {
        const { location } = this.props;
        const redirect = getQueryVariable('redirect');
        userRegister(acc).then((response) => {
            if(!response.data) return;
            console.log('userRegister token ' + response.data.token);
            // response.data.type 用户类型 0普通用户  1会员
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userType', response.data.type);
            localStorage.setItem('email', acc.email);

            request.extendOptions({
                headers: {
                    token: response.data.token,
                },
            });

            clearInterval(window.checkAuth)
            window.checkAuth = setInterval(() => {
                //30分钟后检查登录态
                userAuth({ vid: 0 });
            }, 60 * 1000 * 30);

            this.props.history.push(redirect);
        });
    };

    render() {
        window.scrollTo({ top: 0 });
        return (
            <div>
                <div className="sign-in-page">
                    <div className="success flex">
                        <i className="fas fa-check-circle"></i>
                        <h2>Create Success</h2>
                    </div>
                    <div className="sign-page-wrap">
                        <div className="icon">
                            <i className="far fa-user"></i>
                        </div>
                        <Switch>
                            <Route path="/form-login/sign">
                                <SignIn
                                    changeIsHidePartOfHeader={
                                        this.props.changeIsHidePartOfHeader
                                    }
                                />
                            </Route>
                            <Route path="/form-login/register">
                                <Register
                                    changeIsHidePartOfHeader={
                                        this.props.changeIsHidePartOfHeader
                                    }
                                    addNewAccount={this.addNewAccount}
                                />
                            </Route>
                        </Switch>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
    componentWillUnmount() {
        window.scrollTo({ top: 0 });
    }
}

export default withRouter(FormLogin);
