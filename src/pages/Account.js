import React from 'react';
import Hero from 'src/components/Hero.js';
import Main from 'src/components/Main.js';
import { films } from 'src/mock-data.js';
import Footer from 'src/components/Footer.js';
import 'src/style/web-auth.css';

class Home extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="navbar">
                    <div
                        className="item active"
                        data-index="0"
                        tabindex="0"
                        role="button"
                        aria-label="profile"
                    >
                        profile
                    </div>
                    <div
                        className="item"
                        data-index="1"
                        tabindex="0"
                        role="button"
                        aria-label="parental controls"
                    >
                        parental controls
                    </div>
                    <div
                        className="item"
                        data-index="2"
                        tabindex="0"
                        role="button"
                        aria-label="notifications"
                    >
                        notifications
                    </div>
                    <div
                        className="item"
                        data-index="3"
                        tabindex="0"
                        role="button"
                        aria-label="history &amp; my list"
                    >
                        history &amp;my list
                    </div>
                </div>
                <div className="Container">
                    <div>
                        <div className="Row row">
                            <div className="Col Col--9 Col--lg-6 Col--xxl-4 resetCol">
                                <div className="userProfile settingsContent">
                                    <div className="overlayDimmer"></div>
                                    <h1>My Account</h1>
                                    <div className="userInfo">
                                        <div className="photoSection">
                                            <img src="https://cdn.adrise.tv/tubitv-assets/img/default_profile_pic.png" />
                                        </div>
                                        <div className="demSection">
                                            <div className="Input Input--filled">
                                                <input
                                                    type="text"
                                                    className="Input__input"
                                                    name="firstName"
                                                    value="s"
                                                    autoComplete="given-name"
                                                />
                                                <span className="Input__label">
                                                    First Name
                                                </span>
                                            </div>
                                            <div className="Input Input--filled">
                                                <input
                                                    type="email"
                                                    className="Input__input"
                                                    name="email"
                                                    value="xtjm1234@gmail.com"
                                                    autoComplete="email"
                                                />
                                                <span className="Input__label">
                                                    Email
                                                </span>
                                            </div>
                                            <div
                                                id="gender"
                                                tabindex="0"
                                                className="Input Select Input--fixed"
                                                aria-haspopup="listbox"
                                                role="button"
                                            >
                                                <span className="Input__input"></span>
                                                <span className="Input__label">
                                                    Gender
                                                </span>
                                                <span className="Select__down-icon"></span>
                                            </div>
                                        </div>
                                        <div className="saveBtn">
                                            <button className="Button Button--large">
                                                <div className="Button__bg"></div>
                                                <div className="Button__content">
                                                    Save
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="passwordSection">
                                        <div>
                                            <h2>Change Password</h2>
                                        </div>
                                        <div>
                                            <div className="inputContainer">
                                                <div className="content">
                                                    <form novalidate="">
                                                        <div>
                                                            <div className="text">
                                                                It appears that
                                                                you have created
                                                                this account
                                                                using single
                                                                sign-on. You’ll
                                                                have to set a
                                                                new password
                                                                first.
                                                            </div>
                                                            <div
                                                                style={{
                                                                    'text-align':
                                                                        'center',
                                                                }}
                                                            >
                                                                <button
                                                                    className="Button Button--large"
                                                                    type="button"
                                                                >
                                                                    <div className="Button__bg"></div>
                                                                    <div className="Button__content">
                                                                        Set New
                                                                        Password
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="delTop" className="accountDelMain">
                                        <h2 className="sectionHead">
                                            DELETE MY ACCOUNT
                                        </h2>
                                        <div className="content">
                                            <div className="sectionInfo">
                                                <p>
                                                    Deleting your account from
                                                    Tubi will remove your list
                                                    and history and unlink the
                                                    devices associated with it.
                                                </p>
                                                <p>
                                                    Please allow up to 48 hours
                                                    before your request is
                                                    processed.
                                                </p>
                                            </div>
                                            <div className="btnArea">
                                                <button className="Button Button--large Button--inverse">
                                                    <div className="Button__bg"></div>
                                                    <div className="Button__content">
                                                        Delete Account
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
    componentDidMount() {
        console.log('did mount');
        if (this.props.isStayFormLogin) {
            this.props.changeIsStayFormLogin(false);
        }
        // this.checkScrollHandler(this.props.pathname);
        // this.handleScroll();
    }
    componentDidUpdate(e) {
        // var t = this.props.pathname;
        // t !== e.pathname &&
        //     (this.checkNavVisibility(t), this.checkScrollHandler(t));
    }
    componentWillUnmount() {
        window.scrollTo({ top: 0 });
    }
    // checkScrollHandler(e) {
    //     var t = this,
    //         n = m.STATIC_TOP_NAV_PATHNAMES.indexOf(Object(H.a)(e, 0)) > -1;
    //     n && this.scrollObserver
    //         ? this.scrollObserver.unsubscribe()
    //         : n ||
    //           (this.scrollObserver && !this.scrollObserver.isStopped) ||
    //           (this.scrollObserver = Object(Dt.a)(window, 'scroll')
    //               .pipe(Object(xt.a)(50))
    //               .subscribe(function () {
    //                   t.handleScroll();
    //               }));
    // }
    // handleScroll() {
    //     var _props = this.props;
    //     var topNavVisible = _props.topNavVisible;
    //     var dispatch = _props.dispatch;
    //     var dataEndIndex = _props.containerMenuVisible;
    //     var mediumOffset = _props.liveNewsMenuVisible;
    //     var largeOffset = _props.accountCardVisible;
    //     var maxPrimaryDepth = Math.round(window.pageYOffset);
    //     if (!dataEndIndex && !largeOffset && !mediumOffset) {
    //         var l = maxPrimaryDepth > this.scrollOffsetY;
    //         if (!l && 0 === this.scrollOffsetY) {
    //             return;
    //         }
    //         if (topNavVisible && l && maxPrimaryDepth > 0) {
    //             dispatch(Object(c.o)(false));
    //         } else {
    //             if (!(topNavVisible || l)) {
    //                 dispatch(Object(c.o)(true));
    //             }
    //         }
    //     }
    //     this.scrollOffsetY = Math.max(0, maxPrimaryDepth);
    //     var top = 0 === this.scrollOffsetY;
    //     if (this.state.atTop !== top) {
    //         this.setState({
    //             atTop: top,
    //         });
    //     }
    // }
}

export default Home;
