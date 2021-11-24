import React from 'react';
import Hero from './Hero.js';
import Main from './Main.js';
import { films } from './data.js';
import Footer from 'src/components/Footer.js';

class Home extends React.Component {
    render() {
        return (
            <div class="wrapper">
                <div class="navbar">
                    <div
                        class="item active"
                        data-index="0"
                        tabindex="0"
                        role="button"
                        aria-label="profile"
                    >
                        profile
                    </div>
                    <div
                        class="item"
                        data-index="1"
                        tabindex="0"
                        role="button"
                        aria-label="parental controls"
                    >
                        parental controls
                    </div>
                    <div
                        class="item"
                        data-index="2"
                        tabindex="0"
                        role="button"
                        aria-label="notifications"
                    >
                        notifications
                    </div>
                    <div
                        class="item"
                        data-index="3"
                        tabindex="0"
                        role="button"
                        aria-label="history &amp; my list"
                    >
                        history &amp;my list
                    </div>
                </div>
                <div class="Container">
                    <div>
                        <div class="Row row">
                            <div class="Col Col--9 Col--lg-6 Col--xxl-4 resetCol">
                                <div class="userProfile settingsContent">
                                    <div class="overlayDimmer"></div>
                                    <h1>My Account</h1>
                                    <div class="userInfo">
                                        <div class="photoSection">
                                            <img src="https://cdn.adrise.tv/tubitv-assets/img/default_profile_pic.png" />
                                        </div>
                                        <div class="demSection">
                                            <div class="Input Input--filled">
                                                <input
                                                    type="text"
                                                    class="Input__input"
                                                    name="firstName"
                                                    value="s"
                                                    autoComplete="given-name"
                                                />
                                                <span class="Input__label">
                                                    First Name
                                                </span>
                                            </div>
                                            <div class="Input Input--filled">
                                                <input
                                                    type="email"
                                                    class="Input__input"
                                                    name="email"
                                                    value="xtjm1234@gmail.com"
                                                    autoComplete="email"
                                                />
                                                <span class="Input__label">
                                                    Email
                                                </span>
                                            </div>
                                            <div
                                                id="gender"
                                                tabindex="0"
                                                class="Input Select Input--fixed"
                                                aria-haspopup="listbox"
                                                role="button"
                                            >
                                                <span class="Input__input"></span>
                                                <span class="Input__label">
                                                    Gender
                                                </span>
                                                <span class="Select__down-icon"></span>
                                            </div>
                                        </div>
                                        <div class="saveBtn">
                                            <button class="Button Button--large">
                                                <div class="Button__bg"></div>
                                                <div class="Button__content">
                                                    Save
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="passwordSection">
                                        <div>
                                            <h2>Change Password</h2>
                                        </div>
                                        <div>
                                            <div class="inputContainer">
                                                <div class="content">
                                                    <form novalidate="">
                                                        <div>
                                                            <div class="text">
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
                                                                    class="Button Button--large"
                                                                    type="button"
                                                                >
                                                                    <div class="Button__bg"></div>
                                                                    <div class="Button__content">
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
                                    <div id="delTop" class="accountDelMain">
                                        <h2 class="sectionHead">
                                            DELETE MY ACCOUNT
                                        </h2>
                                        <div class="content">
                                            <div class="sectionInfo">
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
                                            <div class="btnArea">
                                                <button class="Button Button--large Button--inverse">
                                                    <div class="Button__bg"></div>
                                                    <div class="Button__content">
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
