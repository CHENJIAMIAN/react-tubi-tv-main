import '../style/header.css';
import classnames from 'classnames';
import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fromEvent } from 'rxjs';
import {
    distinctUntilChanged,
    filter,
    map,
    pairwise,
    share,
    throttleTime,
} from 'rxjs/operators';
import options from 'src/utils/ConstantTypes.js';
import { addTodo, dispatch, setFilter, toggleTodo } from '../redux/actions';
import { getQueryVariable } from 'src/utils/util.js';

import { categoryList } from 'src/utils/request.js';

@connect(
    // mapStateToProps
    (state) => {
        const { visibilityFilter } = state;
        return { visibilityFilter };
    },
    // mapDispatchToProps object | function
    {
        dispatch,
        addTodo,
        toggleTodo,
        setFilter,
    }
)
class Header extends React.Component {
    constructor(props) {
        super(props);
        //存储状态
        this.state = {
            atTop: false,
            categorys: [],
        };

        const channel = getQueryVariable('channel');
        // 第一次进 页面存channel, 之后其他跳转在UNSAFE_componentWillReceiveProps去获取
        localStorage.setItem('channel', channel);
    }

    routingFunction = (path) => {
        this.props.history.push({
            pathname: path,
        });
    };

    HEADER_HEIGHT = 80;
    beforeY = 0;
    scrollListener = () => {
        const header = document.querySelector('.header');
        if (!header) return;
        let path = this.props.location.pathname;
        if (path.indexOf('form-login') > -1) {
            return;
        }
        let nowY = window.scrollY;
        if (nowY > this.beforeY) {
            header.style.top = -this.HEADER_HEIGHT + 'px';
            this.beforeY = nowY;
            return;
        }
        header.style.top = 0;
        this.beforeY = nowY;

        if (window.pageYOffset !== 0) {
            header.style.background = 'rgba(0, 0, 0, 0.6)';
            return;
        }
        header.style.background =
            'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))';
    };

    showAndHideHeaderWhenScroll = (props) => {
        const header = document.querySelector('.header');
        if (header) {
            header.style = {};
        }

        const isWhite = props.location.pathname.includes('/account');
        const search = document.querySelector('.search');

        if (!isWhite) {
            if (search) search.style.visibility = 'initial';
            window.addEventListener('scroll', this.scrollListener);
        } else {
            // 白色条
            if (search) search.style.visibility = 'hidden';
        }
    };

    goFormLogin = (str) => {
        this.props.changeIsHidePartOfHeader(true);
    };

    searchHandle = (target) => {
        this.hideMenu()
        if (window.location.pathname !== '/search') {
            target.value.length > 0 &&
                this.routingFunction(`/search/${target.value}`);
        }
        if (window.location.pathname === '/search') {
            target.value.length === 0 && this.routingFunction('/home/');
            // return
        }
    };

    showMenu = () => {
        let menu = document.querySelector('.menu-content');
        menu.style.display = 'block';
        menu.style.opacity = 0;
        let left = -60;
        let opacity = 0;
        let id = setInterval(() => {
            left += 10;
            opacity += 0.2;
            if (left <= 0) {
                menu.style.left = left + '%';
                menu.style.opacity = opacity;
                return;
            }
            clearInterval(id);
        }, 30);
    };

    hideMenu = () => {
        let menu = document.querySelector('.menu-content');
        let left = 0;
        let opacity = 1;
        let id = setInterval(() => {
            left -= 10;
            opacity -= 0.1;
            if (left > -60) {
                menu.style.left = left + '%';
                menu.style.opacity = opacity;
                return;
            }
            clearInterval(id);
            menu.style.display = 'none';
        }, 30);
    };

    render() {
        const { isHidePartOfHeader, location } = this.props;
        const { categorys } = this.state;
        const isWhite = location.pathname.includes('/account');
        const isLogined = localStorage.getItem('email');
        const isSignPage = location.pathname.includes('/sign');

        return (
            <header
                className={classnames(
                    { 'header flex topNav': !isWhite },
                    {
                        'topNav inverted withGradientBg': isWhite,
                    }
                )}
            >
                <div className="logo flex">
                    <Link to="/home/">Home</Link>
                    <Link
                        className="hide-small"
                        style={{
                            display: `${isHidePartOfHeader ? 'none' : 'block'}`,
                        }}
                        to="/home/"
                        onClick={this.showMenu}
                    >
                        Browse
                    </Link>
                    <i
                        style={{
                            display: `${isHidePartOfHeader ? 'none' : ''}`,
                        }}
                        className="fas fa-bars menu"
                        onClick={this.showMenu}
                    ></i>
                </div>
                <div
                    className={`${
                        isHidePartOfHeader ? 'hide' : 'search flex'
                    } `}
                >
                    <i className="fas fa-search"></i>
                    <input
                        type="text"
                        placeholder="Find movies and TV show"
                        onChange={(e) => this.searchHandle(e.target)}
                    />
                </div>
                <div
                    className={`${isHidePartOfHeader ? 'hide' : 'login flex'} `}
                >
                    <div className="register-wrap">
                        {isLogined && (
                            <div className="welcome flex">
                                <h1
                                    title={localStorage.getItem('email')}
                                >{`Hi, ${localStorage.getItem('email')}`}</h1>
                                <i className="fas fa-sort-down sign-in"></i>
                                <div className="brige"></div>
                                <div className="account">
                                    <Link to="/account">Account Setting</Link>
                                    <Link
                                        to="/home/"
                                        className="sign-out"
                                        onClick={() => {
                                            localStorage.removeItem('email');
                                            localStorage.removeItem('token');
                                        }}
                                    >
                                        Sign Out
                                    </Link>
                                </div>
                            </div>
                        )}
                        {!isLogined && !isHidePartOfHeader && (
                            // 注册按钮，只在非登录主页页面显示，只在未登录时显示
                            <Link
                                to="/form-login/register"
                                className="register"
                                onClick={() => this.goFormLogin('register')}
                            >
                                Register
                            </Link>
                        )}
                    </div>
                    <div className={`sign-wrap ${isLogined ? 'hide' : ''}`}>
                        <Link
                            to="/form-login/sign"
                            onClick={() => this.goFormLogin('sign')}
                        >
                            Sign In
                        </Link>
                    </div>
                </div>

                <div
                    className={`${isHidePartOfHeader ? 'form-change' : 'hide'}`}
                >
                    {!isSignPage ? (
                        <Link to="/form-login/sign">Sign In</Link>
                    ) : (
                        <Link to="/form-login/register">Register</Link>
                    )}
                </div>
                <div className="menu-content">
                    <div className="overlay" onClick={this.hideMenu}></div>
                    <div className="content">
                        <div className="search-mobile flex">
                            <i className="fas fa-search"></i>
                            <input
                                type="text"
                                placeholder="Find movies"
                                onChange={(e) => this.searchHandle(e.target)}
                                onKeyUp={(e) =>
                                    e.keyCode === 13 && this.hideMenu()
                                }
                            />
                        </div>
                        <div className="genres">
                            <h2>Category</h2>
                            {categorys.map((category) => (
                                <Link
                                    key={category.id}
                                    onClick={this.hideMenu}
                                    to={`/category/${category.name}/${category.id}`}
                                >
                                    {category.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </header>
        );
    }

    componentDidMount() {
        // withRouter注入 location 等到props
        this.showAndHideHeaderWhenScroll(this.props);
        this.checkScrollHandler(this.props.location.pathname);
        this.handleScroll();
        categoryList().then((response) => {
            this.setState({
                categorys: response.data,
            });
        });
    }

    componentWillUnmount() {
        this.scrollObserver.unsubscribe();
        window.removeEventListener('scroll', this.scrollListener);
    }
    checkScrollHandler(path) {
        var _self = this;
        // STATIC_TOP_NAV_PATHNAMES: ['account', 'static', 'preference'],
        var n = path === 'account';
        if (n && this.scrollObserver) {
            // 取消绑定
            this.scrollObserver.unsubscribe();
        } else {
            if (
                !(n || (this.scrollObserver && !this.scrollObserver.isStopped))
            ) {
                this.scrollObserver = fromEvent(window, 'scroll')
                    .pipe(throttleTime(50))
                    .subscribe(function () {
                        _self.handleScroll();
                    });
            }
        }
    }
    handleScroll() {
        var _props = this.props;
        var dispatch = _props.dispatch;
        var yDistance = Math.round(window.pageYOffset);
        var excludeNotSynced = yDistance > this.scrollOffsetY;
        if (!excludeNotSynced && 0 === this.scrollOffsetY) {
            return;
        }
        if (excludeNotSynced && yDistance > 0) {
            // 'tb/ui/HIDE_TOP_NAV'
            // 'tb/ui/SHOW_TOP_NAV'
            // store.dispatch
            dispatch('tb/ui/HIDE_TOP_NAV');
        } else {
            if (!excludeNotSynced) {
                dispatch('tb/ui/SHOW_TOP_NAV');
            }
        }
        this.scrollOffsetY = Math.max(0, yDistance);
        var top = 0 === this.scrollOffsetY;
        if (this.state.atTop !== top) {
            this.setState({
                atTop: top,
            });
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        // 判断跳转路由不等于当前路由
        if (nextProps.location.pathname !== this.props.location.pathname) {
            console.log(
                'UNSAFE_componentWillReceiveProps 路由改变触发',
                nextProps.location.pathname,
                nextProps,
                this.props.location.pathname
            );
            // 第一次进 页面存channel, 之后其他跳转在UNSAFE_componentWillReceiveProps去获取
            const channel = getQueryVariable('channel');
            channel && localStorage.setItem('channel', channel);

            window.removeEventListener('scroll', this.scrollListener);
            this.showAndHideHeaderWhenScroll(nextProps);
        }
    }
}

export default withRouter(Header);
