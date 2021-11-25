import React from 'react';
import '../style/header.css';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import { withRouter } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { dispatch, addTodo, toggleTodo, setFilter } from '../redux/actions';
import { getTodosByVisibilityFilter } from '../redux/selectors';
import options from 'src/Const.js';
import { fromEvent } from 'rxjs';
import {
    distinctUntilChanged,
    filter,
    map,
    pairwise,
    share,
    throttleTime,
} from 'rxjs/operators';

@connect(
    // mapStateToProps
    (state) => {
        const { visibilityFilter } = state;
        const todos = getTodosByVisibilityFilter(state, visibilityFilter);
        return { visibilityFilter, todos };
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
        };
    }

    routingFunction = (path) => {
        this.props.history.push({
            pathname: path,
        });
    };

    showAndHideHeaderWhenScroll = () => {
        const HEADER_HEIGHT = 80;
        let beforeY = 0;
        let header = document.querySelector('.header');
        window.addEventListener('scroll', () => {
            let path = this.props.location.pathname;
            if (path.indexOf('form-login') > -1) {
                header.style.background =
                    'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))';
                return;
            }
            let nowY = window.scrollY;
            if (nowY > beforeY) {
                header.style.top = -HEADER_HEIGHT + 'px';
                beforeY = nowY;
                return;
            }
            header.style.top = 0;
            beforeY = nowY;

            if (window.pageYOffset !== 0) {
                header.style.background = 'rgba(0, 0, 0, 0.6)';
                return;
            }
            header.style.background =
                'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))';
        });
    };

    goFormLogin = (str) => {
        let bool = str === 'register' ? true : false;
        this.props.changeIsStayFormLogin(true);
        this.changeIsRegister(bool);
    };

    changeIsRegister = (bool) => {
        this.props.changeIsRegister(bool);
    };

    searchHandle = (target) => {
        if (window.location.pathname !== '/search') {
            target.value.length > 0 && this.routingFunction('/search');
        }
        if (window.location.pathname === '/search') {
            target.value.length === 0 && this.routingFunction('/home/');
            // return
        }
        this.props.getSearchValue(target.value);
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
        let isStayFormLogin = this.props.isStayFormLogin;
        let props = this.props;
        let { atTop } = this.state;
        const { count, add } = this.props;
        console.log('src/components/Header.js', this.props);

        return (
            <header class={cx('topNav', 'inverted', atTop && 'withGradientBg')}>
                <div class="overlayWrapper"></div>
                <div class="Container container">
                    <div class="leftNavItems">
                        <div class="menuAndLogoWrapper browseMenuAndLogoWrapper">
                            <div class="containerMenuWrapper hide containerBrowseMenuWrapper"></div>
                            {/* <a class="logo browseAndLogo" href="/home">
                                <svg
                                    class="svgIcon tubi black logoIcon"
                                    preserveAspectRatio="xMidYMid meet"
                                    style={{ fill: 'currentcolor' }}
                                    viewBox="0 0 105 44"
                                >
                                    <path
                                        d="M55.5 12h-7v16a8 8 0 11-16 0V13a1 1 0 00-1-1h-7v16a16 16 0 0032 0V13a1 1 0 00-1-1zM24.1 40.96l-3.03-5.21a1 1 0 00-1.27-.42A8.05 8.05 0 018.54 28v-7a1 1 0 011-1H19.6a1 1 0 001-1v-6a1 1 0 00-1-1H9.54a1 1 0 01-1-1V1a1 1 0 00-1-1H.5v28c0 8.84 7.2 16 16.08 16 2.54 0 4.95-.59 7.1-1.64a1 1 0 00.42-1.4zM100.5 0a4 4 0 100 8 4 4 0 000-8zm3 12h-7v31a1 1 0 001 1h6a1 1 0 001-1V13a1 1 0 00-1-1zm-27 24a8 8 0 110-16 8 8 0 010 16zm0-24c-2.35 0-4.58.5-6.59 1.42a1 1 0 01-1.41-.92V1a1 1 0 00-1-1h-7v28a16 16 0 1016-16z"
                                        fill="currentcolor"
                                    ></path>
                                </svg>
                            </a> */}
                            <Link
                                class="browseMenu inverse"
                                style={{
                                    display: `${
                                        isStayFormLogin ? 'none' : 'block'
                                    }`,
                                }}
                                to="/home/"
                                onClick={this.showMenu}
                            >
                                Browse
                            </Link>
                            <i
                                style={{
                                    display: `${
                                        props.isStayFormLogin ? 'none' : ''
                                    }`,
                                }}
                                className="fas fa-bars menu"
                                onClick={this.showMenu}
                            ></i>
                        </div>
                    </div>
                    <section class="searchContainer topnavSearchBox">
                        <svg
                            class="svgIcon searchIcon"
                            preserveAspectRatio="xMidYMid meet"
                            style={{ fill: 'currentcolor' }}
                            viewBox="0 0 18.07 18.07"
                        >
                            <path
                                fill="currentColor"
                                d="M7.5,13A5.5,5.5,0,1,0,2,7.5,5.5,5.5,0,0,0,7.5,13Zm4.55.46A7.5,7.5,0,1,1,13.46,12l4.31,4.31a1,1,0,1,1-1.41,1.41Z"
                            ></path>
                        </svg>
                        <form>
                            <input
                                type="search"
                                class="textInput"
                                placeholder="Find movies, TV shows and more"
                                value=""
                                required=""
                                onChange={(e) => this.searchHandle(e.target)}
                            />
                        </form>
                        <svg
                            class="svgIcon clearIcon"
                            preserveAspectRatio="xMidYMid meet"
                            style={{ fill: 'currentcolor' }}
                            viewBox="0 0 13 13"
                        >
                            <path
                                fill="currentColor"
                                fill-rule="evenodd"
                                d="M6.5 5.793l-2.12-2.12-.708.706 2.12 2.12-2.12 2.12.707.708 2.12-2.12 2.12 2.12.708-.707-2.12-2.12 2.12-2.12-.707-.708-2.12 2.12zM7 13c-4.09 0-7-2.91-7-6 0-4.09 2.91-7 7-7 3.09 0 6 2.91 6 7 0 3.09-2.91 6-6 6z"
                            ></path>
                        </svg>
                    </section>
                    <div class="rightNavItems">
                        {!props.isStayFormLogin ? (
                            // 非注册页面
                            <div class="account">
                                {props.isLogged ? (
                                    // {/* 主页面已登录 */}
                                    <div class="greet greetAccount inverse">
                                        <div class="greeting">
                                            Hi,{' '}
                                            <span class="name">
                                                {props.currUser.name}
                                            </span>
                                        </div>
                                        <div>
                                            <div class="accountPopup accountDropdownPosition">
                                                <Link to="/account/">
                                                    Account Setting
                                                </Link>
                                                <Link to="/home/">
                                                    Parental Controls
                                                </Link>
                                                <Link to="/home/">
                                                    Help Center
                                                </Link>
                                                <Link to="/home/">
                                                    Activate Your Device
                                                </Link>
                                                <Link
                                                    to="/home/"
                                                    className="sign-out"
                                                    onClick={() =>
                                                        props.changeIsLogged(
                                                            null
                                                        )
                                                    }
                                                >
                                                    Sign Out
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    // {/* 主页面未登录 */}
                                    <div className={`sign-wrap`}>
                                        <ul class="regSignInLinks">
                                            <li class="registerLink">
                                                <Link
                                                    to="/form-login/register"
                                                    onClick={() =>
                                                        this.goFormLogin(
                                                            'register'
                                                        )
                                                    }
                                                >
                                                    <button
                                                        class="Button Button--secondary Button--block"
                                                        tabindex="-1"
                                                    >
                                                        <div class="Button__bg"></div>
                                                        <div class="Button__content">
                                                            Register
                                                        </div>
                                                    </button>
                                                </Link>
                                            </li>
                                            <li class="signInLink">
                                                <Link
                                                    to="/form-login/sign"
                                                    onClick={() =>
                                                        this.goFormLogin('sign')
                                                    }
                                                >
                                                    Sign In
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ) : (
                            // 注册/登录页面页面
                            <div className={`${'form-change'}`}>
                                {' '}
                                {props.isStayFormRegister ? (
                                    <Link
                                        to="/form-login/sign"
                                        onClick={() =>
                                            this.changeIsRegister(false)
                                        }
                                    >
                                        Sign In{' '}
                                    </Link>
                                ) : (
                                    <Link
                                        to="/form-login/register"
                                        onClick={() =>
                                            this.changeIsRegister(true)
                                        }
                                    >
                                        Register{' '}
                                    </Link>
                                )}
                            </div>
                        )}
                    </div>
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
                            <h2>GENRES</h2>
                            <Link to="/home/">Action</Link>
                            <Link to="/home/">Anime</Link>
                            <Link to="/home/">Classics</Link>
                            <Link to="/home/">Comendi</Link>
                            <Link to="/home/">Crime TV</Link>
                            <Link to="/home/">Horror</Link>
                            <Link to="/home/">Docuseries</Link>
                            <Link to="/home/">Drama</Link>
                            <Link to="/home/">Kids Show</Link>
                            <Link to="/home/">LifeStyle</Link>
                            <Link to="/home/">Thriller</Link>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
    componentDidMount() {
        this.showAndHideHeaderWhenScroll();
        // TODO:pathname哪里来的
        this.checkScrollHandler(this.props.pathname);
        this.handleScroll();
    }
    componentWillUnmount() {
        this.scrollObserver.unsubscribe();
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
        var excludeSynced = _props.topNavVisible;
        var dispatch = _props.dispatch;
        var dataEndIndex = _props.containerMenuVisible;
        var largeOffset = _props.liveNewsMenuVisible;
        var mediumOffset = _props.accountCardVisible;
        var yDistance = Math.round(window.pageYOffset);
        if (!dataEndIndex && !mediumOffset && !largeOffset) {
            var excludeNotSynced = yDistance > this.scrollOffsetY;
            if (!excludeNotSynced && 0 === this.scrollOffsetY) {
                return;
            }
            if (excludeSynced && excludeNotSynced && yDistance > 0) {
                // 'tb/ui/HIDE_TOP_NAV'
                // 'tb/ui/SHOW_TOP_NAV'
                // store.dispatch
                dispatch('tb/ui/HIDE_TOP_NAV');
            } else {
                if (!(excludeSynced || excludeNotSynced)) {
                    dispatch('tb/ui/SHOW_TOP_NAV');
                }
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
}

export default withRouter(Header);
