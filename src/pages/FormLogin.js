import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../components/Register.js';
import SignIn from '../components/SignIn.js';
import Footer from 'src/components/Footer.js';
import { userRegister } from 'src/utils/request.js';
import { message } from 'antd';



class FormLogin extends React.Component {
    addNewAccount = (acc) => {
        userRegister(acc).then((response) => {
            message.success(response.msg);
            this.props.history.push('/form-login/sign');
            this.props.changeIsRegister(false);
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
                            <Route exact path="/form-login/sign">
                                <SignIn
                                    history={this.props.history}
                                    changeIsRegister={
                                        this.props.changeIsRegister
                                    }
                                    changeIsStayFormLogin={
                                        this.props.changeIsStayFormLogin
                                    }
                                    changeIsLogged={this.props.changeIsLogged}
                                />
                            </Route>
                            <Route path="/form-login/register">
                                <Register
                                    history={this.props.history}
                                    changeIsRegister={
                                        this.props.changeIsRegister
                                    }
                                    changeIsStayFormLogin={
                                        this.props.changeIsStayFormLogin
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

export default FormLogin;
