import React from 'react';
import '../style/formLogin.css';
import { Link, withRouter } from 'react-router-dom';
import { userLogin, request,userAuth } from 'src/utils/request.js';
import { message } from 'antd';
import { getQueryVariable } from 'src/utils/util.js';

class SignIn extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.curr = null;
    }
    submitForm = (target) => {
        // map qua account tim acc === email => {}
        // Neu tra ve object thi checkPass()
        target = target.parentElement;
        let email = target.querySelector('input.email').value;
        let password = target.querySelector('input.password').value;
        this.validateEmail(email, target);
        this.curr !== null && this.validatePassword(password, target);
        if (this.isPassword) {
            userLogin({ email, password }).then((response) => {
                console.log('token ' + response.data.token);
                // response.data.type 用户类型 0普通用户  1会员
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('userType', response.data.type);
                localStorage.setItem('email', email);

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

                target.querySelector('input.email').value = '';
                target.querySelector('input.password').value = '';
                this.loginSuccess();
            });
        }
    };

    validateEmail = (email, target) => {
        this.isEmail = false;
        this.curr = null;
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            target.querySelector('span.email').style.display = 'none';
            this.curr = { email };
            return;
        }
        if (!email) {
            target.querySelector('span.email').style.display = 'block';
            target.querySelector('span.email').innerText = 'Enter you email!';
            return;
        }
        target.querySelector('span.email').style.display = 'block';
        target.querySelector('span.email').innerText = 'Email not validate';
    };

    validatePassword = (password, target) => {
        this.isPassword = false;
        if (password.length > 5) {
            target.querySelector('span.password').style.display = 'none';
            this.isPassword = true;
            return;
        }
        if (!password) {
            target.querySelector('span.password').style.display = 'block';
            target.querySelector('span.password').innerText =
                'Enter your password';
            return;
        }
        target.querySelector('span.password').style.display = 'block';
        target.querySelector('span.password').innerText =
            'Password must 6 character';
    };

    loginSuccess = () => {
        const path =
            getQueryVariable('redirect') || this.props.location.query.redirect;
        if (path) {
            window.location.href = path;
        } else {
            this.props.history.push({ pathname: '/home' });
        }
    };

    render() {
        let props = this.props;
        return (
            <div className="sign-in">
                <h1>Welcome Back!</h1>
                <input
                    className="email"
                    type="text"
                    placeholder="Email"
                    onKeyUp={(e) =>
                        e.keyCode === 13 && this.submitForm(e.target)
                    }
                />
                <span className="email hide"></span>
                <input
                    className="password"
                    type="password"
                    placeholder="Password"
                    onKeyUp={(e) =>
                        e.keyCode === 13 && this.submitForm(e.target)
                    }
                />
                <span className="password hide"></span>
                <button
                    className="submit"
                    onClick={(e) => this.submitForm(e.target)}
                >
                    Sign In
                </button>
                <span className="forgot">Forgot password?</span>
                <div className="to-register">
                    <p>
                        Create new Account!
                        <Link to="/form-login/register">Register</Link>
                    </p>
                </div>
            </div>
        );
    }
    componentWillUnmount() {
        window.location.pathname.indexOf('form-login') === -1 &&
            this.props.changeIsHidePartOfHeader(false);
    }
}

export default withRouter(SignIn);
