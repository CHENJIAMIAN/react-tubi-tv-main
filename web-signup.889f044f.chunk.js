(window.webpackJsonp = window.webpackJsonp || []).push([[22], {
    1524: function(e, a, t) {
        "use strict";
        var r = t(4)
          , n = t.n(r)
          , s = t(1)
          , o = t(1523)
          , i = t(0)
          , l = t.n(i);
        a.a = function(e) {
            var a = e.name
              , t = e.format
              , r = e.validate
              , i = e.component
              , c = e.handleBlur
              , m = Object(s.__rest)(e, ["name", "format", "validate", "component", "handleBlur"]);
            return l.a.createElement(o.a, {
                name: a,
                validate: r,
                render: function(e) {
                    var r = e.field
                      , o = r.onChange
                      , d = r.onBlur
                      , u = r.onFocus
                      , g = Object(s.__rest)(r, ["onChange", "onBlur", "onFocus"])
                      , b = e.form
                      , p = b.errors
                      , h = void 0 === p ? {} : p
                      , f = b.status
                      , E = void 0 === f ? {} : f
                      , M = b.setFieldError
                      , v = b.setStatus
                      , F = h && a && h[a]
                      , R = E.formError;
                    return l.a.createElement(i, n()({
                        name: a,
                        error: F,
                        onChange: function(e) {
                            t && (e.target.value = t(e.target.value)),
                            o(e),
                            R && v({
                                formError: ""
                            }),
                            F && M(a, "")
                        },
                        onBlur: function(e) {
                            c && c(e),
                            d(e)
                        },
                        onFocus: function(e) {
                            F && M(a, ""),
                            u && u(e)
                        }
                    }, g, m))
                }
            })
        }
    },
    1534: function(e, a, t) {
        "use strict";
        var r = t(12)
          , n = t.n(r)
          , s = t(8)
          , o = t.n(s)
          , i = t(3)
          , l = t.n(i)
          , c = t(0)
          , m = t.n(c)
          , d = t(11)
          , u = t(871)
          , g = t(14)
          , b = t(6)
          , p = t(239)
          , h = t(1537)
          , f = t.n(h)
          , E = Object(d.a)({
            register: {
                defaultMessage: "Register",
                id: "src/common/components/uilib/TopPlaceholder/TopPlaceholder:register"
            },
            signIn: {
                defaultMessage: "Sign In",
                id: "src/common/components/uilib/TopPlaceholder/TopPlaceholder:signIn"
            }
        })
          , M = function(e) {
            var a = e.logo
              , t = void 0 !== a && a
              , r = e.invert
              , s = void 0 !== r && r
              , i = e.login
              , l = void 0 !== i && i
              , c = e.register
              , d = void 0 !== c && c;
            return m.a.createElement("div", {
                className: o()(f.a.topPlaceholder, n()({}, f.a.transparentBackground, s))
            }, t ? m.a.createElement(g.Link, {
                to: b.d.home,
                className: f.a.logo
            }, m.a.createElement(p.a, {
                className: o()(f.a.logoIcon, n()({}, f.a.white, s))
            })) : null, function(e, a) {
                var t = null;
                if (e || a) {
                    var r = e ? b.d.signIn : b.d.register
                      , n = e ? E.signIn : E.register;
                    t = m.a.createElement(g.Link, {
                        to: r,
                        className: f.a.rightLink
                    }, m.a.createElement(u.a, n))
                }
                return t
            }(l, d))
        };
        M.propTypes = {
            logo: l.a.bool,
            invert: l.a.bool
        },
        a.a = M
    },
    1537: function(e, a, t) {
        e.exports = {
            topPlaceholder: "_2ptI5",
            transparentBackground: "_1Y33d",
            logo: "_3y1nF",
            logoIcon: "_2LoTi",
            white: "_2LTOX",
            rightLink: "_2xFC8"
        }
    },
    1543: function(e, a, t) {
        "use strict";
        var r = t(12)
          , n = t.n(r)
          , s = t(8)
          , o = t.n(s)
          , i = t(3)
          , l = t.n(i)
          , c = t(0)
          , m = t.n(c)
          , d = t(11)
          , u = t(871)
          , g = t(1570)
          , b = t.n(g)
          , p = Object(d.a)({
            or: {
                defaultMessage: "OR",
                id: "src/common/components/uilib/OrDivider/OrDivider:or"
            }
        })
          , h = function(e) {
            var a = e.className
              , t = e.inverted
              , r = o()(b.a.orRow, a, n()({}, b.a.inverted, t));
            return m.a.createElement("div", {
                className: r
            }, m.a.createElement("div", {
                className: b.a.line
            }), m.a.createElement("div", {
                className: b.a.orCircle
            }, m.a.createElement("div", {
                className: b.a.orText
            }, m.a.createElement(u.a, p.or))), m.a.createElement("div", {
                className: b.a.line
            }))
        };
        h.propTypes = {
            className: l.a.string
        },
        a.a = h
    },
    1544: function(e, a, t) {
        "use strict";
        var r = t(4)
          , n = t.n(r)
          , s = t(1)
          , o = t(1533)
          , i = t.n(o)
          , l = t(0)
          , c = t.n(l)
          , m = function(e) {
            function a() {
                var a = null !== e && e.apply(this, arguments) || this;
                return a.handleSelectChange = function(e) {
                    var t = a.props
                      , r = t.name
                      , n = t.error
                      , s = t.setFieldError
                      , o = t.handleSelectChange
                      , i = e.target.value;
                    n && s(r, ""),
                    o && i && o(r, i)
                }
                ,
                a
            }
            return Object(s.__extends)(a, e),
            a.prototype.render = function() {
                var e = this.props
                  , a = e.error
                  , t = e.name
                  , r = Object(s.__rest)(e, ["error", "name"]);
                return c.a.createElement(i.a, n()({
                    name: t,
                    onChange: this.handleSelectChange.bind(this),
                    error: a
                }, r))
            }
            ,
            a
        }(l.PureComponent);
        a.a = m
    },
    1554: function(e, a, t) {
        "use strict";
        t.d(a, "a", (function() {
            return s
        }
        )),
        t.d(a, "b", (function() {
            return o
        }
        ));
        var r = t(11)
          , n = Object(r.a)({
            ttsPanelTitle: {
                defaultMessage: "Text-To-Speech",
                id: "src/common/constants/constants-message:ttsPanelTitle"
            },
            parentalPanelTitle: {
                defaultMessage: "Parental Controls",
                id: "src/common/constants/constants-message:parentalPanelTitle"
            },
            ccPanelTitle: {
                defaultMessage: "Closed Captions",
                id: "src/common/constants/constants-message:ccPanelTitle"
            },
            aboutPanelTitle: {
                defaultMessage: "About",
                id: "src/common/constants/constants-message:aboutPanelTitle"
            },
            termsPanelTitle: {
                defaultMessage: "Terms of Service",
                id: "src/common/constants/constants-message:termsPanelTitle"
            },
            privacyPanelTitle: {
                defaultMessage: "Privacy Policy",
                id: "src/common/constants/constants-message:privacyPanelTitle"
            },
            doNotSellPanelTitle: {
                defaultMessage: "Do Not Sell My Info",
                id: "src/common/constants/constants-message:doNotSellPanelTitle"
            },
            signOutTitle: {
                defaultMessage: "Sign Out",
                id: "src/common/constants/constants-message:signOutTitle"
            },
            aboutTubi: {
                defaultMessage: "About Tubi",
                id: "src/common/constants/constants-message:aboutTubi"
            },
            aboutTubiDescription: {
                defaultMessage: "Tubi is the leading free, premium, video streaming app. We have the largest library of content with over 20,000 movies and television shows with far fewer ads than cable TV.",
                id: "src/common/constants/constants-message:aboutTubiDescription"
            },
            aboutTubiDescriptionMX: {
                defaultMessage: "Tubi is the leading free, premium, video streaming app. We have the largest library of content with thousands of movies and television shows with far fewer ads than cable TV.",
                id: "src/common/constants/constants-message:aboutTubiDescriptionMX"
            },
            needHelp: {
                defaultMessage: "Need Help?",
                id: "src/common/constants/constants-message:needHelp"
            },
            visit: {
                defaultMessage: "Visit ",
                id: "src/common/constants/constants-message:visit"
            },
            emailUs: {
                defaultMessage: "Email our Support team at ",
                id: "src/common/constants/constants-message:emailUs"
            },
            thirdPartyContactUs: {
                defaultMessage: "Reach us on Facebook, Instagram, Twitter, and on our website at:",
                id: "src/common/constants/constants-message:thirdPartyContactUs"
            }
        })
          , s = (n.ttsPanelTitle,
        n.parentalPanelTitle,
        n.ccPanelTitle,
        n.aboutPanelTitle,
        n.aboutTubi,
        n.aboutTubiDescription,
        n.aboutTubiDescriptionMX,
        n.needHelp,
        n.visit,
        n.emailUs,
        n.thirdPartyContactUs,
        n.termsPanelTitle,
        n.privacyPanelTitle,
        n.doNotSellPanelTitle,
        n.signOutTitle,
        Object(r.a)({
            jan: {
                defaultMessage: "January",
                id: "src/common/constants/constants-message:jan"
            },
            feb: {
                defaultMessage: "February",
                id: "src/common/constants/constants-message:feb"
            },
            mar: {
                defaultMessage: "March",
                id: "src/common/constants/constants-message:mar"
            },
            apr: {
                defaultMessage: "April",
                id: "src/common/constants/constants-message:apr"
            },
            may: {
                defaultMessage: "May",
                id: "src/common/constants/constants-message:may"
            },
            june: {
                defaultMessage: "June",
                id: "src/common/constants/constants-message:june"
            },
            july: {
                defaultMessage: "July",
                id: "src/common/constants/constants-message:july"
            },
            aug: {
                defaultMessage: "August",
                id: "src/common/constants/constants-message:aug"
            },
            sep: {
                defaultMessage: "September",
                id: "src/common/constants/constants-message:sep"
            },
            oct: {
                defaultMessage: "October",
                id: "src/common/constants/constants-message:oct"
            },
            nov: {
                defaultMessage: "November",
                id: "src/common/constants/constants-message:nov"
            },
            dec: {
                defaultMessage: "December",
                id: "src/common/constants/constants-message:dec"
            }
        }))
          , o = (Object(r.a)({
            title: {
                defaultMessage: "Age Required",
                id: "src/common/constants/constants-message:title"
            },
            greeting: {
                defaultMessage: "Welcome Back, {firstName}",
                id: "src/common/constants/constants-message:greeting"
            },
            description: {
                defaultMessage: "To continue please enter your date of birth",
                id: "src/common/constants/constants-message:description"
            },
            descriptionYearOfBirth: {
                defaultMessage: "To continue, please verify your year of birth",
                id: "src/common/constants/constants-message:descriptionYearOfBirth"
            },
            descriptionAge: {
                defaultMessage: "To continue, please verify your age",
                id: "src/common/constants/constants-message:descriptionAge"
            },
            startWatching: {
                defaultMessage: "Start Watching",
                id: "src/common/constants/constants-message:startWatching"
            },
            errorText: {
                defaultMessage: "Oops, an error occurred",
                id: "src/common/constants/constants-message:errorText"
            },
            whyAskingForAge: {
                defaultMessage: "Why is Tubi asking for my age?",
                id: "src/common/constants/constants-message:whyAskingForAge"
            }
        }),
        Object(r.a)({
            broughtToYouBy: {
                defaultMessage: "Brought to you by",
                id: "src/common/constants/constants-message:broughtToYouBy"
            }
        }))
    },
    1565: function(e, a, t) {
        "use strict";
        t.d(a, "a", (function() {
            return n
        }
        )),
        t.d(a, "b", (function() {
            return s
        }
        ));
        var r = t(154)
          , n = function(e) {
            try {
                var a = new Date(2020,11,30);
                return new Intl.DateTimeFormat(e).formatToParts(a).map((function(e) {
                    var a = e.type;
                    return ["month", "day", "year", "relatedYear"].includes(a) ? a : null
                }
                )).filter(Boolean)
            } catch (e) {
                return ["month", "day", "year"]
            }
        }
          , s = function(e, a) {
            return void 0 === a && (a = ""),
            e === r.c.EN_US ? "English" === a ? "" : a : e === r.c.ES_MX && "Spanish" === a ? "" : a
        }
    },
    1569: function(e, a, t) {
        "use strict";
        var r = t(4)
          , n = t.n(r)
          , s = t(0)
          , o = t.n(s)
          , i = t(49);
        a.a = function(e) {
            return o.a.createElement(i.a, n()({
                viewBox: "0 0 18 20"
            }, e), o.a.createElement("path", {
                d: "M9 2c1.379 0 2.5 1.122 2.5 2.5S10.379 7 9 7a2.503 2.503 0 01-2.5-2.5C6.5 3.122 7.622 2 9 2zm0-2a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM9 12.841c3.504 0 6.439 2.462 7.179 5.746a.908.908 0 00.891.697.925.925 0 00.907-1.12C17.046 14.067 13.375 11 9 11S.954 14.067.023 18.164a.926.926 0 00.907 1.12.908.908 0 00.891-.697c.74-3.284 3.675-5.746 7.18-5.746z",
                fill: "currentColor"
            }))
        }
    },
    1570: function(e, a, t) {
        e.exports = {
            orRow: "fdsLe",
            line: "_2nZU3",
            orCircle: "_3bhpg",
            orText: "_2fYE0",
            inverted: "_17H9b"
        }
    },
    1610: function(e, a, t) {
        "use strict";
        var r = t(217)
          , n = t.n(r)
          , s = t(1526)
          , o = t.n(s)
          , i = t(72)
          , l = t(8)
          , c = t.n(l)
          , m = t(1523)
          , d = t(0)
          , u = t.n(d)
          , g = t(11)
          , b = t(138)
          , p = t(14)
          , h = t(30)
          , f = t(96)
          , E = t(5)
          , M = (t(1554),
        t(81))
          , v = t(24)
          , F = t(183)
          , R = t(165)
          , w = t(16)
          , L = t(92)
          , _ = (t(801),
        t(23))
          , O = t(145)
          , T = t(1524)
          , A = t(1544)
          , y = t(1738)
          , N = t.n(y)
          , I = Object(g.a)({
            headerForNewUser: {
                defaultMessage: "Welcome to Tubi, {username}",
                id: "src/web/components/AgeGateForm/AgeGateForm:headerForNewUser"
            },
            headerForReturningUser: {
                defaultMessage: "Welcome back, {username}",
                id: "src/web/components/AgeGateForm/AgeGateForm:headerForReturningUser"
            },
            headerForGuestUser: {
                defaultMessage: "Age Required",
                id: "src/web/components/AgeGateForm/AgeGateForm:headerForGuestUser"
            },
            subheader: {
                defaultMessage: "Enter your birthday and gender",
                id: "src/web/components/AgeGateForm/AgeGateForm:subheader"
            },
            required: {
                defaultMessage: "Required Field",
                id: "src/web/components/AgeGateForm/AgeGateForm:required"
            },
            coppaErrorMessage: {
                defaultMessage: "blah",
                id: "src/web/components/AgeGateForm/AgeGateForm:coppaErrorMessage"
            },
            dobHeaderLabel: {
                defaultMessage: "Date of Birth",
                id: "src/web/components/AgeGateForm/AgeGateForm:dobHeaderLabel"
            },
            birthMonthLabel: {
                defaultMessage: "Month",
                id: "src/web/components/AgeGateForm/AgeGateForm:birthMonthLabel"
            },
            birthDayLabel: {
                defaultMessage: "Day",
                id: "src/web/components/AgeGateForm/AgeGateForm:birthDayLabel"
            },
            birthYearLabel: {
                defaultMessage: "Year",
                id: "src/web/components/AgeGateForm/AgeGateForm:birthYearLabel"
            },
            genderHeaderLabel: {
                defaultMessage: "Gender",
                id: "src/web/components/AgeGateForm/AgeGateForm:genderHeaderLabel"
            },
            genderFieldLabel: {
                defaultMessage: "Choose Gender",
                id: "src/web/components/AgeGateForm/AgeGateForm:genderFieldLabel"
            },
            submitLabel: {
                defaultMessage: "Submit",
                id: "src/web/components/AgeGateForm/AgeGateForm:submitLabel"
            },
            support: {
                defaultMessage: "Why do we ask for this information?",
                id: "src/web/components/AgeGateForm/AgeGateForm:support"
            },
            invalidBirthYear: {
                defaultMessage: "Please enter a valid date of birth",
                id: "src/web/components/AgeGateForm/AgeGateForm:invalidBirthYear"
            },
            confirmation: {
                defaultMessage: "Please be sure all of the information you entered is correct.",
                id: "src/web/components/AgeGateForm/AgeGateForm:confirmation"
            },
            birthYearLabel2: {
                defaultMessage: "Year of Birth",
                id: "src/web/components/AgeGateForm/AgeGateForm:birthYearLabel2"
            },
            ageLabel: {
                defaultMessage: "Age",
                id: "src/web/components/AgeGateForm/AgeGateForm:ageLabel"
            },
            ageExample: {
                defaultMessage: "Example: If you are 30.5 years old, enter 31",
                id: "src/web/components/AgeGateForm/AgeGateForm:ageExample"
            },
            invalidAge: {
                defaultMessage: "Please enter a valid age",
                id: "src/web/components/AgeGateForm/AgeGateForm:invalidAge"
            }
        })
          , S = E.REGISTRATION_FORM_FIELD_NAMES.SUBMIT
          , C = E.REGISTRATION_FORM_FIELD_NAMES.BIRTH_MONTH
          , D = E.REGISTRATION_FORM_FIELD_NAMES.BIRTH_DAY
          , P = E.REGISTRATION_FORM_FIELD_NAMES.BIRTH_YEAR
          , j = E.REGISTRATION_FORM_FIELD_NAMES.GENDER
          , k = E.REGISTRATION_FORM_FIELD_NAMES.AGE
          , G = function(e) {
            var a, t, r = e.intl.formatMessage, s = e.values, i = e.setFieldValue;
            return u.a.createElement("div", {
                className: N.a.ageWrapper
            }, u.a.createElement(T.a, {
                className: N.a.age,
                component: o.a,
                name: k,
                label: r(I.ageLabel),
                maxLength: 3,
                type: "text",
                showCounter: !1,
                onChange: function(e) {
                    var a = Object(R.b)(parseInt(e.target.value, 10))
                      , t = a.day
                      , r = a.month
                      , n = a.year;
                    i(k, e.target.value),
                    i(P, n),
                    i(C, r),
                    i(D, t)
                }
            }), u.a.createElement("div", {
                className: c()(N.a.agePlaceholder, (a = {},
                a[N.a.active] = Boolean(s.age.length),
                a))
            }, n()(Array(Math.min((null !== (t = s.age) && void 0 !== t ? t : "").length, 3)), (function() {
                return "  "
            }
            )).join(""), "Years"), u.a.createElement("div", {
                className: N.a.ageExample
            }, r(I.ageExample)))
        }
          , B = Object(m.b)({
            mapPropsToValues: function(e) {
                var a = function(e) {
                    if (e)
                        try {
                            return JSON.parse(Object(f.a)(M.a) || "{}")
                        } catch (e) {
                            return {}
                        }
                    return {}
                }(e.isRegistering)
                  , t = a.birthMonth
                  , r = a.birthDay
                  , n = a.birthYear;
                return {
                    birthMonth: null != t ? t : "",
                    birthDay: null != r ? r : "",
                    birthYear: null != n ? n : "",
                    gender: "",
                    age: ""
                }
            },
            validateOnChange: !0,
            validateOnBlur: !1,
            validate: function(e, a) {
                var t = a.intl.formatMessage
                  , r = a.hideGenderField
                  , n = {}
                  , s = ["birthMonth", "birthDay", "birthYear"];
                return r || s.push("gender"),
                s.forEach((function(a) {
                    e[a] || (n[a] = t(I.required))
                }
                )),
                void 0 !== e.age && Object(R.e)(Number(e.age)) ? (n.age = t(I.invalidAge),
                Object(_.g)(v.j, Object(w.e)(Object(h.c)(), i.DialogType.BIRTHDAY, "age_invalid")),
                n) : n
            },
            handleSubmit: function(e, a) {
                a.props.onSubmit(a, e)
            }
        })((function(e) {
            var a, t, r = e.className, n = e.setFieldError, s = e.values, o = e.errors, l = e.setFieldValue, m = e.asModal, g = void 0 !== m && m, b = e.hideGenderField, p = void 0 !== b && b, f = e.username, M = void 0 === f ? "" : f, T = e.intl, y = e.isSubmitting, C = e.handleSubmit, D = e.status, P = void 0 === D ? {} : D, k = e.isValid, B = e.trackRegisterProcess, x = T.formatMessage, Y = P.formError, H = Object(d.useState)([]), W = H[0], U = H[1];
            Object(d.useEffect)((function() {
                U(function(e) {
                    return [{
                        label: "",
                        value: ""
                    }].concat([{
                        label: e(E.genderOptionsMessages.male),
                        value: "MALE"
                    }, {
                        label: e(E.genderOptionsMessages.female),
                        value: "FEMALE"
                    }, {
                        label: e(E.genderOptionsMessages.other),
                        value: "OTHER"
                    }])
                }(x)),
                Object(_.g)(v.j, Object(w.e)(Object(h.c)(), i.DialogType.BIRTHDAY))
            }
            ), []);
            var q = Object(L.a)(o)
              , V = !Object(L.a)(s)
              , z = 4 === (null === (t = s.birthYear) || void 0 === t ? void 0 : t.length)
              , X = Object(d.useRef)(!1)
              , K = Object(d.useMemo)((function() {
                var e = s.birthYear
                  , a = s.birthMonth
                  , t = s.birthDay;
                if (e && a && t) {
                    var r = Object(R.c)(new Date(Date.UTC(parseInt(e, 10), parseInt(a, 10) - 1, parseInt(t, 10))), {
                        precision: 0
                    });
                    if (!X.current && r >= 2 && r <= 4)
                        return Object(_.g)(v.j, Object(w.e)(Object(h.c)(), i.DialogType.BIRTHDAY, "age_less_than_4")),
                        X.current = !0,
                        !0
                }
                return !1
            }
            ), [s.birthYear, s.birthMonth, s.birthDay])
              , J = y || q || V || K || !z
              , Z = c()(N.a.main, r, ((a = {})[N.a.asModal] = g,
            a))
              , Q = M ? x(g ? I.headerForReturningUser : I.headerForNewUser, {
                username: M
            }) : x(I.headerForGuestUser);
            return u.a.createElement("form", {
                onSubmit: C
            }, u.a.createElement("div", {
                className: Z
            }, u.a.createElement("div", {
                className: N.a.headers
            }, u.a.createElement("div", {
                className: N.a.header
            }, Q), g && M ? u.a.createElement("div", {
                className: N.a.subheader
            }, x(I.subheader)) : null), u.a.createElement("div", {
                className: N.a.form
            }, u.a.createElement(G, e), p ? null : u.a.createElement("div", {
                className: N.a.genderWrapper
            }, u.a.createElement("div", {
                className: N.a.fieldHeader
            }, x(I.genderHeaderLabel)), u.a.createElement(A.a, {
                name: j,
                setFieldError: n,
                label: x(I.genderFieldLabel),
                options: W,
                value: s.gender,
                className: N.a.gender,
                native: !0,
                handleSelectChange: function(e, a) {
                    B && B({
                        target: {
                            name: e,
                            value: a
                        }
                    }),
                    l(e, a)
                }
            })), u.a.createElement("div", {
                className: N.a.support
            }, u.a.createElement("a", {
                href: p ? "https://help.tubitv.com/hc/en-us/articles/1260804387429-Why-is-Tubi-asking-for-my-age-" : "https://help.tubitv.com/hc/en-us/articles/1260804545390-Why-is-Tubi-asking-for-my-Information-",
                target: "_blank"
            }, x(I.support))), u.a.createElement(O.a, {
                name: S,
                type: S,
                size: "large",
                color: k && !J ? "primary" : F.d,
                className: N.a.button,
                block: !0,
                disabled: J,
                tabIndex: 0
            }, x(I.submitLabel))), Y ? u.a.createElement("div", {
                className: N.a.errorMessage
            }, Y.message) : null, K ? u.a.createElement("div", {
                className: N.a.errorMessage
            }, x(I.confirmation)) : null))
        }
        ));
        a.a = Object(b.c)(Object(p.withRouter)(B))
    },
    1726: function(e, a, t) {
        e.exports = {
            content: "kLa5l",
            registrationWrapper: "_21W6L",
            circle: "_3kJfa",
            icon: "_2OnX_",
            row: "_2YgdS"
        }
    },
    1736: function(e, a, t) {
        e.exports = {
            main: "oCRcw",
            headers: "_1Ycb3",
            header: "_13Abu",
            subheader: "_2uFCq",
            button: "_3qAYO",
            orDivider: "o2c4E",
            formHeader: "_129st",
            formContainer: "vopXe",
            input: "exArK",
            link: "_2PhMm",
            birthdayRow: "Ldewm",
            birthday: "JP7AV",
            birthdayLabel: "M8cGB",
            gender: "k5fSn",
            submitWrapper: "_3E3BD",
            submit: "_3O5aw",
            formLabel: "_3Xpw1",
            errorText: "_3nmo_",
            shake: "GrX0c",
            statement: "_10L9a",
            h5: "_1Hl7i",
            fadeIn: "lCKA9",
            fadeInUp: "_2fuJt",
            slideDownAppear: "_21SOA",
            zoomIn: "_1KX89",
            rotate: "_1xHVH"
        }
    },
    1737: function(e, a, t) {
        e.exports = {
            main: "_2NhDC",
            registrationWrapper: "_1m7Kj",
            circle: "_3AHe-",
            icon: "M9Jra"
        }
    },
    1738: function(e, a, t) {
        e.exports = {
            main: "_1slj_",
            asModal: "_3OUbW",
            form: "_2tfju",
            support: "_1NMat",
            headers: "_1ktLQ",
            header: "_1M-us",
            subheader: "_38Y-l",
            birthdayWrapper: "jxaPI",
            fieldHeader: "_1X_lI",
            fieldError: "_9QsR4",
            birthdayFlexWrapper: "_2g8BI",
            birthMonth: "_2nSNZ",
            birthDay: "EM6pH",
            birthYear: "_1c-8f",
            yobWrapper: "_1Edc8",
            yob: "_3ng8_",
            yobPlaceholder: "WU5sS",
            ageWrapper: "_1qO9h",
            age: "_30j-R",
            ageExample: "_3rfoz",
            agePlaceholder: "_50Aqw",
            active: "_1FU2_",
            genderWrapper: "_101ea",
            gender: "_23mbW",
            button: "_1pLso",
            errorMessage: "_7axbD"
        }
    },
    1739: function(e, a, t) {
        e.exports = {
            main: "_3iF60",
            headers: "_343_U",
            header: "_7tLPt",
            subheader: "_7asmc",
            formContainer: "_3NUlp",
            input: "_2FGpT",
            link: "_3UTOI",
            submitWrapper: "BdLpX",
            formLabel: "_1UgFe",
            errorText: "_23_RH",
            shake: "_1VSnS",
            button: "_2dx5g",
            statement: "_3df1u",
            orDivider: "_2nyRr",
            h5: "XdVyZ",
            fadeIn: "_3mXb6",
            fadeInUp: "_2K8rW",
            slideDownAppear: "DWcSt",
            zoomIn: "_2n51z",
            rotate: "_3OW4F"
        }
    },
    1780: function(e, a, t) {
        e.exports = {
            main: "_1yYtA",
            ageGateModal: "_2EYq4",
            enter: "_3hqI-",
            enterActive: "_19Ssn",
            appear: "_1P1pq",
            appearActive: "oMxjl",
            exit: "_1VF3n",
            exitActive: "_2wmCq",
            exitDone: "_3AwvI"
        }
    },
    1835: function(e, a, t) {
        "use strict";
        t.r(a);
        var r = t(9)
          , n = t.n(r)
          , s = t(76)
          , o = t.n(s)
          , i = t(0)
          , l = t.n(i)
          , c = t(19)
          , m = t(29)
          , d = t(46)
          , u = t(30)
          , g = t(96)
          , b = t(79)
          , p = t(41)
          , h = t(66)
          , f = t(27)
          , E = t(129)
          , M = t(81)
          , v = t(6)
          , F = t(873)
          , R = t(73)
          , w = t(165)
          , L = t(1610)
          , _ = t(1780)
          , O = t.n(_)
          , T = {
            enter: O.a.enter,
            enterActive: O.a.enterActive,
            appear: O.a.appear,
            appearActive: O.a.appearActive,
            exit: O.a.exit,
            exitActive: O.a.exitActive,
            exitDone: O.a.exitDone
        };
        a.default = Object(c.b)((function(e) {
            var a = e.ui.ageGateModal
              , t = e.auth
              , r = !(!t || !t.user);
            return {
                isLoggedIn: r,
                isVisible: a.isVisible,
                username: r ? t.user.name : ""
            }
        }
        ))((function(e) {
            var a = e.isLoggedIn
              , t = e.dispatch
              , r = e.isVisible
              , s = e.username;
            return Object(F.a)(r),
            l.a.createElement(d.TransitionGroup, {
                component: "div"
            }, r ? l.a.createElement(d.CSSTransition, {
                classNames: T,
                timeout: 300
            }, l.a.createElement("div", {
                className: O.a.main,
                "data-nosnippet": !0
            }, l.a.createElement("div", {
                className: O.a.ageGateModal
            }, l.a.createElement(L.a, {
                asModal: !0,
                hideGenderField: !a,
                onSubmit: function(e, r) {
                    var s = r.birthYear
                      , i = r.birthMonth
                      , l = r.birthDay
                      , c = r.gender
                      , d = new Date(Date.UTC(parseInt(s, 10), parseInt(i, 10) - 1, parseInt(l, 10))).toISOString().substring(0, 10)
                      , F = a ? Object(E.h)({
                        birthday: d,
                        gender: c
                    }, !0) : Object(E.d)(d);
                    return t(F).then((function() {
                        a || (Object(w.g)(),
                        Object(g.e)(M.a, o()({
                            birthYear: s,
                            birthMonth: i,
                            birthDay: l
                        }), 14400)),
                        t(Object(f.u)(!1))
                    }
                    )).catch((function(r) {
                        if (r.coppaState === R.a.NOT_COMPLIANT) {
                            t(Object(f.j)(!0)),
                            Object(w.h)();
                            var s = a ? Object(b.j)() : Object(p.f)({
                                force: !0
                            });
                            return t(s).then((function() {
                                return t(Object(f.u)(!1))
                            }
                            )).then((function() {
                                return t(Object(m.replace)(v.d.home + "?t=" + Date.now()))
                            }
                            )).then((function() {
                                return t(Object(f.s)())
                            }
                            )).then((function() {
                                Object(u.c)() === v.d.home && t(Object(h.k)({
                                    nextPageUrl: v.d.home,
                                    currentPageUrl: Object(u.c)()
                                }))
                            }
                            ))
                        }
                        return r.coppaState === R.a.REQUIRE_LOGOUT ? t(Object(b.j)()).then((function() {
                            return t(Object(f.u)(!1))
                        }
                        )).then((function() {
                            return t(Object(m.replace)(v.d.home + "?t=" + Date.now()))
                        }
                        )).then((function() {
                            return t(Object(f.s)())
                        }
                        )) : (e.setStatus({
                            formError: r
                        }),
                        n.a.reject(r))
                    }
                    )).finally((function() {
                        e.setSubmitting(!1)
                    }
                    ))
                },
                username: s
            })))) : null)
        }
        ))
    },
    1846: function(e, a, t) {
        "use strict";
        t.r(a),
        t.d(a, "Registration", (function() {
            return Le
        }
        )),
        t.d(a, "mapStateToProps", (function() {
            return _e
        }
        ));
        var r, n, s = t(1), o = t(682), i = t(0), l = t.n(i), c = t(19), m = t(29), d = t(79), u = t(27), g = t(129), b = t(1534), p = t(4), h = t.n(p), f = t(49), E = function(e) {
            return l.a.createElement(f.a, h()({
                viewBox: "0 0 21 15"
            }, e), l.a.createElement("path", {
                d: "M18.782 1.225l-.004-.004C17.693.148 16.24 0 14.831 0H5.153C3.749 0 2.301.149 1.22 1.229.095 2.345 0 3.84 0 5.154v5.677c0 1.325.095 2.832 1.217 3.944C2.234 15.792 3.532 16 5.168 16h9.663c1.636 0 2.934-.208 3.951-1.225C19.906 13.651 20 12.15 20 10.831V5.176c0-1.322-.094-2.827-1.218-3.951zm-2.569 1.127l-5.888 5.052a.5.5 0 01-.652 0L3.778 2.352A.2.2 0 013.908 2h12.175a.2.2 0 01.13.352zm1.314 11.008c-.466.467-1.154.64-2.537.64H5.327c-1.383 0-2.071-.173-2.54-.643-.458-.454-.628-1.138-.628-2.526V4.032a.2.2 0 01.33-.152l5.884 5.042A2.495 2.495 0 0010 9.528c.578 0 1.156-.202 1.627-.606L17.829 3.6a.2.2 0 01.33.152v7.079c0 1.401-.165 2.063-.632 2.529z",
                fill: "currentColor"
            }))
        }, M = function(e) {
            return l.a.createElement(f.a, h()({
                viewBox: "0 0 20 20"
            }, e), l.a.createElement("path", {
                d: "M19.396 8.025C18.645 7.124 17.525 7 16.429 7H14.19a.252.252 0 01-.237-.327c.338-1.123.359-1.603.359-3.29v-.676C14.312 1.214 13.125 0 11.666 0h-.351C10.136 0 9.089.811 8.77 1.971l-.221.8a11.338 11.338 0 01-1.991 3.975.658.658 0 01-.371.214A2.984 2.984 0 004 6H3a3 3 0 00-3 3v7a3 3 0 003 3h1c.848 0 1.611-.357 2.157-.924A3.541 3.541 0 008.544 19h6.121c1.049 0 2.148-.109 3.082-.904.971-.825 1.234-1.929 1.405-2.9l.714-4.04c.179-1.021.306-2.189-.47-3.131zM5 16c0 .551-.449 1-1 1H3c-.551 0-1-.449-1-1V9c0-.551.449-1 1-1h1c.551 0 1 .449 1 1v7zm12.896-5.19l-.713 4.039c-.169.957-.36 1.408-.732 1.724-.371.315-.838.427-1.786.427H8.5c-.827 0-1.5-.673-1.5-1.5V9c0-.067-.016-.131-.02-.197a2.648 2.648 0 001.155-.827 13.31 13.31 0 002.342-4.673l.221-.8c.081-.296.335-.503.617-.503h.351c.355 0 .646.317.646.707v.676c0 1.916 0 1.916-.597 3.72a1.46 1.46 0 00.195 1.312c.264.366.692.585 1.144.585h3.375c.824 0 1.253.092 1.428.302.178.216.189.653.039 1.508z",
                fill: "currentColor",
                fillRule: "evenodd"
            }))
        }, v = t(5), F = t(6), R = t(42), w = t(73), L = t(165), _ = t(16), O = t(1610), T = t(1526), A = t.n(T), y = t(22), N = t(64), I = t(8), S = t.n(I), C = t(1523), D = t(11), P = t(138), j = t(14), k = t(486), G = t(349), B = t(1543), x = t(32), Y = t(688), H = t(183), W = t(92), U = t(145), q = t(1524), V = t(1739), z = t.n(V), X = Object(D.a)({
            birthdayDayLabel: {
                defaultMessage: "Day",
                id: "src/web/components/CredentialsForm/CredentialsForm:birthdayDayLabel"
            },
            birthdayMonthLabel: {
                defaultMessage: "Month",
                id: "src/web/components/CredentialsForm/CredentialsForm:birthdayMonthLabel"
            },
            birthdayYearLabel: {
                defaultMessage: "Year",
                id: "src/web/components/CredentialsForm/CredentialsForm:birthdayYearLabel"
            },
            emailExistsError: {
                defaultMessage: "Email has already been used. Please <signInLink>Login</signInLink> or <resetPasswordLink>Reset your password</resetPasswordLink>",
                id: "src/web/components/CredentialsForm/CredentialsForm:emailExistsError"
            },
            coppaErrorMessage: {
                defaultMessage: "Sorry there was a problem",
                id: "src/web/components/CredentialsForm/CredentialsForm:coppaErrorMessage"
            },
            emailRegHeading: {
                defaultMessage: "Register via Email",
                id: "src/web/components/CredentialsForm/CredentialsForm:emailRegHeading"
            },
            firstNameLabel: {
                defaultMessage: "First Name",
                id: "src/web/components/CredentialsForm/CredentialsForm:firstNameLabel"
            },
            lastNameLabel: {
                defaultMessage: "Last Name",
                id: "src/web/components/CredentialsForm/CredentialsForm:lastNameLabel"
            },
            emailLabel: {
                defaultMessage: "Email",
                id: "src/web/components/CredentialsForm/CredentialsForm:emailLabel"
            },
            emailHint: {
                defaultMessage: "We never share this",
                id: "src/web/components/CredentialsForm/CredentialsForm:emailHint"
            },
            passwordLabel: {
                defaultMessage: "Password",
                id: "src/web/components/CredentialsForm/CredentialsForm:passwordLabel"
            },
            passwordHint: {
                defaultMessage: "Pick something you can remember",
                id: "src/web/components/CredentialsForm/CredentialsForm:passwordHint"
            },
            password2Label: {
                defaultMessage: "Confirm Password",
                id: "src/web/components/CredentialsForm/CredentialsForm:password2Label"
            },
            password2Hint: {
                defaultMessage: "This has to match the above password",
                id: "src/web/components/CredentialsForm/CredentialsForm:password2Hint"
            },
            registerButtonLabel: {
                defaultMessage: "Next",
                id: "src/web/components/CredentialsForm/CredentialsForm:registerButtonLabel"
            },
            termsAgreement: {
                defaultMessage: "By registering, you agree to Tubi's <termsLink>Terms of Use</termsLink> and <privacyLink>Privacy Policy</privacyLink>",
                id: "src/web/components/CredentialsForm/CredentialsForm:termsAgreement"
            },
            ownedAccountMessage: {
                defaultMessage: "Already have an account? <signInLink>Sign In</signInLink>",
                id: "src/web/components/CredentialsForm/CredentialsForm:ownedAccountMessage"
            },
            required: {
                defaultMessage: "Required Field",
                id: "src/web/components/CredentialsForm/CredentialsForm:required"
            },
            passwordBlanksError: {
                defaultMessage: "Password cannot contain a blank space(s)",
                id: "src/web/components/CredentialsForm/CredentialsForm:passwordBlanksError"
            },
            passwordLengthError: {
                defaultMessage: "Length must be between 6 and 30",
                id: "src/web/components/CredentialsForm/CredentialsForm:passwordLengthError"
            },
            passwordMismatchError: {
                defaultMessage: "Passwords do not match",
                id: "src/web/components/CredentialsForm/CredentialsForm:passwordMismatchError"
            },
            invalidEmail: {
                defaultMessage: "Invalid email address",
                id: "src/web/components/CredentialsForm/CredentialsForm:invalidEmail"
            },
            welcome: {
                defaultMessage: "Let's get you set up",
                id: "src/web/components/CredentialsForm/CredentialsForm:welcome"
            },
            free: {
                defaultMessage: "It's free. No subscription required",
                id: "src/web/components/CredentialsForm/CredentialsForm:free"
            }
        }), K = v.REGISTRATION_FORM_FIELD_NAMES.FIRST_NAME, J = v.REGISTRATION_FORM_FIELD_NAMES.LAST_NAME, Z = v.REGISTRATION_FORM_FIELD_NAMES.EMAIL, Q = v.REGISTRATION_FORM_FIELD_NAMES.PASSWORD, $ = v.REGISTRATION_FORM_FIELD_NAMES.PASSWORD2, ee = v.REGISTRATION_FORM_FIELD_NAMES.SUBMIT, ae = o.ProgressType.COMPLETED_PASSWORD, te = o.ProgressType.COMPLETED_EMAIL, re = o.ProgressType.COMPLETED_NAME, ne = o.ProgressType.CLICKED_REGISTER, se = ((r = {})[$] = ae,
        r[Z] = te,
        r[K] = re,
        r[ee] = ne,
        r), oe = Object(C.b)({
            mapPropsToValues: function() {
                return {
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    password2: ""
                }
            },
            validateOnBlur: !1,
            validateOnChange: !1,
            validate: function(e, a) {
                var t = a.intl.formatMessage;
                Object(_.D)({
                    progress: se[ee]
                });
                var r = {};
                if (["firstName", "email", "password", "password2"].forEach((function(a) {
                    e[a] || (r[a] = t(X.required))
                }
                )),
                e.password) {
                    var n = e.password.length;
                    e.password.indexOf(" ") >= 0 && (r.password = t(X.passwordBlanksError)),
                    (n < 6 || n > 30) && (r.password = t(X.passwordLengthError)),
                    e.password !== e.password2 && (r.password = t(X.passwordMismatchError),
                    r.password2 = t(X.passwordMismatchError))
                }
                return e.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,10}$/i.test(e.email) && (r.email = t(X.invalidEmail)),
                r
            },
            handleSubmit: function(e, a) {
                (0,
                a.props.onSubmit)(a, e)
            }
        })((function(e) {
            var a = e.handleSubmit
              , t = e.status
              , r = void 0 === t ? {} : t
              , n = e.isSubmitting
              , o = e.setFieldError
              , i = e.errors
              , c = e.values
              , m = e.intl
              , d = e.trackRegisterProcess
              , u = e.isMobile
              , g = r.formError
              , b = m.formatMessage
              , p = function(e, a) {
                var t = e;
                return e === x.b && (t = l.a.createElement("span", null, a(X.emailExistsError, {
                    signInLink: function(e) {
                        var a = e[0];
                        return l.a.createElement(j.Link, {
                            className: z.a.link,
                            to: F.d.signIn
                        }, a)
                    },
                    resetPasswordLink: function(e) {
                        var a = e[0];
                        return l.a.createElement(j.Link, {
                            className: z.a.link,
                            to: F.d.forgotPassword
                        }, a)
                    }
                }))),
                l.a.createElement("p", {
                    className: z.a.errorText
                }, t || "")
            }(g, b)
              , h = S()("H5", z.a.h5)
              , f = Object(W.a)(i)
              , E = !Object(W.a)(c)
              , M = n || f || E || g;
            return l.a.createElement("div", {
                className: z.a.main
            }, l.a.createElement("div", {
                className: z.a.headers
            }, l.a.createElement("div", {
                className: z.a.header
            }, b(X.welcome)), l.a.createElement("div", {
                className: z.a.subheader
            }, b(X.free))), l.a.createElement(G.b, {
                formType: G.a.REGISTER,
                googleClass: z.a.button,
                facebookClass: z.a.button
            }), l.a.createElement(B.a, {
                className: z.a.orDivider,
                inverted: !0
            }), l.a.createElement("h5", {
                className: h
            }, b(X.emailRegHeading)), l.a.createElement("form", {
                className: z.a.formContainer,
                onSubmit: a,
                noValidate: !0
            }, p, l.a.createElement(q.a, {
                className: z.a.input,
                component: A.a,
                name: K,
                label: b(X.firstNameLabel),
                maxLength: 60,
                autoComplete: "given-name",
                autoFocus: !u,
                handleBlur: d
            }), l.a.createElement(q.a, {
                className: z.a.input,
                component: A.a,
                name: J,
                label: b(X.lastNameLabel),
                maxLength: 60,
                autoComplete: "family-name"
            }), l.a.createElement(q.a, {
                className: z.a.input,
                component: A.a,
                name: Z,
                type: "email",
                label: b(X.emailLabel),
                hint: "We never share this",
                autoComplete: "email",
                handleBlur: function(e) {
                    d && d(e),
                    function(e, a) {
                        Object(s.__awaiter)(void 0, void 0, void 0, (function() {
                            var t, r, n, o;
                            return Object(s.__generator)(this, (function(s) {
                                switch (s.label) {
                                case 0:
                                    if (t = e.target,
                                    r = t.name,
                                    !((n = t.value).length > 0))
                                        return [3, 5];
                                    o = !1,
                                    s.label = 1;
                                case 1:
                                    return s.trys.push([1, 3, , 4]),
                                    [4, Object(k.a)(n)];
                                case 2:
                                    return o = s.sent(),
                                    [3, 4];
                                case 3:
                                    return s.sent(),
                                    [3, 4];
                                case 4:
                                    o && (a(r, x.m),
                                    Object(_.C)({
                                        manip: y.Manipulation.SIGNUP,
                                        current: N.AuthType.EMAIL,
                                        message: Y.c,
                                        status: y.ActionStatus.FAIL
                                    })),
                                    s.label = 5;
                                case 5:
                                    return [2]
                                }
                            }
                            ))
                        }
                        ))
                    }(e, o)
                }
            }), l.a.createElement(q.a, {
                className: z.a.input,
                component: A.a,
                name: Q,
                type: "password",
                label: b(X.passwordLabel),
                hint: b(X.passwordHint)
            }), l.a.createElement(q.a, {
                className: z.a.input,
                component: A.a,
                name: $,
                type: "password",
                label: b(X.password2Label),
                hint: b(X.password2Hint),
                handleBlur: d
            }), l.a.createElement("div", {
                className: z.a.submitWrapper
            }, l.a.createElement(U.a, {
                name: ee,
                type: ee,
                size: "large",
                disabled: M,
                className: z.a.button,
                color: M ? H.d : void 0,
                block: !0
            }, b(X.registerButtonLabel))), l.a.createElement("div", {
                className: z.a.statement
            }, l.a.createElement("p", null, b(X.termsAgreement, {
                termsLink: function(e) {
                    var a = e[0];
                    return l.a.createElement(j.Link, {
                        className: z.a.link,
                        to: F.d.terms
                    }, a)
                },
                privacyLink: function(e) {
                    var a = e[0];
                    return l.a.createElement(j.Link, {
                        className: z.a.link,
                        to: F.d.privacy
                    }, a)
                }
            })), l.a.createElement("p", null, b(X.ownedAccountMessage, {
                signInLink: function(e) {
                    var a = e[0];
                    return l.a.createElement(j.Link, {
                        className: z.a.link,
                        to: F.d.signIn
                    }, a)
                }
            })))))
        }
        )), ie = Object(P.c)(oe), le = t(677), ce = t(1737), me = t.n(ce), de = v.REGISTRATION_FORM_FIELD_NAMES.FIRST_NAME, ue = v.REGISTRATION_FORM_FIELD_NAMES.EMAIL, ge = v.REGISTRATION_FORM_FIELD_NAMES.PASSWORD2, be = v.REGISTRATION_FORM_FIELD_NAMES.BIRTH_YEAR, pe = v.REGISTRATION_FORM_FIELD_NAMES.GENDER, he = v.REGISTRATION_FORM_FIELD_NAMES.SUBMIT, fe = o.ProgressType.COMPLETED_PASSWORD, Ee = o.ProgressType.COMPLETED_BIRTHDAY, Me = o.ProgressType.COMPLETED_EMAIL, ve = o.ProgressType.COMPLETED_GENDER, Fe = o.ProgressType.COMPLETED_NAME, Re = o.ProgressType.CLICKED_REGISTER, we = ((n = {})[ge] = fe,
        n[be] = Ee,
        n[ue] = Me,
        n[pe] = ve,
        n[de] = Fe,
        n[he] = Re,
        n), Le = function(e) {
            function a() {
                var a = null !== e && e.apply(this, arguments) || this;
                return a.state = {
                    submitting: !1
                },
                a.finishSubmission = function() {
                    a.setState({
                        processedSubmission: !0,
                        submitting: !1
                    })
                }
                ,
                a.trackRegisterProcess = function(e) {
                    var a = e.target
                      , t = a.name
                      , r = a.value;
                    r && r.length > 0 && Object(_.D)({
                        progress: we[t]
                    })
                }
                ,
                a.registrationStepOne = function(e, t) {
                    var r = e.setSubmitting
                      , n = e.setStatus;
                    (0,
                    a.props.dispatch)(Object(d.p)(t)),
                    r(!1),
                    n({
                        formError: ""
                    }),
                    "undefined" != typeof window && window.scrollTo(0, 0)
                }
                ,
                a.registrationStepTwo = function(e, t) {
                    var r = a.props
                      , n = r.dispatch
                      , o = r.loginCallback
                      , i = r.loginRedirect
                      , l = r.userCredentials
                      , c = e.setStatus
                      , u = e.setSubmitting
                      , g = Object(s.__assign)(Object(s.__assign)({}, t), l);
                    a.setState({
                        submitting: !0
                    }),
                    n(Object(d.m)(g)).then((function() {
                        u(!1),
                        c({
                            formError: ""
                        }),
                        o && o(),
                        n(Object(m.replace)(i || F.d.home)),
                        (i || o) && n(Object(d.d)())
                    }
                    )).catch((function(e) {
                        u(!1),
                        c({
                            formError: e
                        })
                    }
                    )).finally((function() {
                        a.finishSubmission()
                    }
                    ))
                }
                ,
                a.patchUserAge = function(e, t) {
                    var r = e.setSubmitting
                      , n = e.setStatus
                      , s = a.props
                      , o = s.dispatch
                      , i = s.loginRedirect
                      , l = t.birthYear
                      , c = t.birthMonth
                      , b = t.birthDay
                      , p = t.gender
                      , h = new Date(Date.UTC(parseInt(l, 10), parseInt(c, 10) - 1, parseInt(b, 10))).toISOString().substring(0, 10);
                    a.setState({
                        submitting: !0
                    }),
                    o(Object(g.h)({
                        birthday: h,
                        gender: p
                    }, !0)).then((function() {
                        r(!1),
                        n({
                            formError: ""
                        }),
                        o(Object(m.replace)(i || F.d.home)),
                        i && o(Object(d.d)())
                    }
                    )).catch((function() {
                        r(!1),
                        n({
                            formError: ""
                        }),
                        o(Object(d.j)()).then((function() {
                            return o(Object(m.replace)(F.d.home))
                        }
                        )).then((function() {
                            return o(Object(u.s)())
                        }
                        ))
                    }
                    )).finally((function() {
                        a.finishSubmission()
                    }
                    ))
                }
                ,
                a
            }
            return Object(s.__extends)(a, e),
            a.prototype.componentDidMount = function() {
                var e = this.props
                  , a = e.dispatch
                  , t = e.isCoppaEnabled;
                e.loginRedirect;
                t && Object(L.f)() && a(Object(m.replace)(F.d.home))
            }
            ,
            a.prototype.shouldComponentUpdate = function(e, a) {
                return !(a.processedSubmission || a.submitting)
            }
            ,
            a.prototype.render = function() {
                var e = this.props
                  , a = e.isMobile
                  , t = e.user
                  , r = e.userCredentials
                  , n = e.coppaState
                  , s = !!t && n === w.a.REQUIRE_AGE_GATE
                  , o = !!r
                  , i = s || o
                  , c = i ? M : E
                  , m = s ? this.patchUserAge : this.registrationStepTwo;
                return l.a.createElement("div", {
                    className: me.a.main
                }, l.a.createElement(b.a, {
                    logo: !0,
                    invert: !0,
                    login: !i
                }), l.a.createElement("div", {
                    className: me.a.registrationWrapper
                }, l.a.createElement("div", {
                    className: me.a.circle
                }, l.a.createElement(c, {
                    className: me.a.icon
                })), i ? l.a.createElement(O.a, {
                    onSubmit: m,
                    trackRegisterProcess: o ? this.trackRegisterProcess : null,
                    username: (null == r ? void 0 : r.firstName) || (null == t ? void 0 : t.name),
                    isRegistering: !0
                }) : l.a.createElement(ie, {
                    isMobile: a,
                    onSubmit: this.registrationStepOne,
                    trackRegisterProcess: this.trackRegisterProcess
                })), l.a.createElement(le.default, null))
            }
            ,
            a
        }(l.a.Component), _e = function(e, a) {
            var t, r = e.ui.isMobile, n = e.auth, s = e.userSettings, o = n.userCredentials, i = n.user, l = n.loginCallback, c = Object(R.c)(e), m = s.coppaState;
            return i && (t = i.authType),
            {
                isMobile: r,
                userCredentials: o,
                loginCallback: l,
                loginRedirect: a.location.query.redirect || n.loginRedirect,
                authType: t,
                user: i,
                isCoppaEnabled: c,
                coppaState: m
            }
        }, Oe = Object(c.b)(_e)(Le);
        a.default = Oe
    },
    1855: function(e, a, t) {
        "use strict";
        t.r(a),
        t.d(a, "SignUp", (function() {
            return ye
        }
        ));
        var r, n, s = t(0), o = t.n(s), i = t(19), l = t(1534), c = t(1569), m = t(677), d = t(437), u = t.n(d), g = t(149), b = t.n(g), p = t(241), h = t.n(p), f = t(12), E = t.n(f), M = t(170), v = t.n(M), F = t(70), R = t.n(F), w = t(1526), L = t.n(w), _ = t(22), O = t(64), T = t(682), A = t(1523), y = t(3), N = t.n(y), I = t(43), S = t.n(I), C = t(11), D = t(138), P = t(14), j = t(29), k = t(486), G = t(79), B = t(349), x = t(1543), Y = t(5), H = t(32), W = t(688), U = t(6), q = t(183), V = t(16), z = t(1565), X = t(1524), K = t(1544), J = t(145), Z = t(1736), Q = t.n(Z), $ = Object(C.a)({
            birthdayDayLabel: {
                defaultMessage: "Day",
                id: "src/web/components/RegistrationForm/RegistrationForm:birthdayDayLabel"
            },
            birthdayMonthLabel: {
                defaultMessage: "Month",
                id: "src/web/components/RegistrationForm/RegistrationForm:birthdayMonthLabel"
            },
            birthdayYearLabel: {
                defaultMessage: "Year",
                id: "src/web/components/RegistrationForm/RegistrationForm:birthdayYearLabel"
            },
            emailExistsError: {
                defaultMessage: "Email has already been used. Please <signInLink>Login</signInLink> or <resetPasswordLink>Reset your password</resetPasswordLink>",
                id: "src/web/components/RegistrationForm/RegistrationForm:emailExistsError"
            },
            coppaErrorMessage: {
                defaultMessage: "Sorry there was a problem",
                id: "src/web/components/RegistrationForm/RegistrationForm:coppaErrorMessage"
            },
            emailRegHeading: {
                defaultMessage: "Register via Email",
                id: "src/web/components/RegistrationForm/RegistrationForm:emailRegHeading"
            },
            firstNameLabel: {
                defaultMessage: "First Name",
                id: "src/web/components/RegistrationForm/RegistrationForm:firstNameLabel"
            },
            lastNameLabel: {
                defaultMessage: "Last Name",
                id: "src/web/components/RegistrationForm/RegistrationForm:lastNameLabel"
            },
            emailLabel: {
                defaultMessage: "Email",
                id: "src/web/components/RegistrationForm/RegistrationForm:emailLabel"
            },
            emailHint: {
                defaultMessage: "We never share this",
                id: "src/web/components/RegistrationForm/RegistrationForm:emailHint"
            },
            passwordLabel: {
                defaultMessage: "Password",
                id: "src/web/components/RegistrationForm/RegistrationForm:passwordLabel"
            },
            passwordHint: {
                defaultMessage: "Pick something you can remember",
                id: "src/web/components/RegistrationForm/RegistrationForm:passwordHint"
            },
            password2Label: {
                defaultMessage: "Confirm Password",
                id: "src/web/components/RegistrationForm/RegistrationForm:password2Label"
            },
            password2Hint: {
                defaultMessage: "This has to match the above password",
                id: "src/web/components/RegistrationForm/RegistrationForm:password2Hint"
            },
            birthdayLabel: {
                defaultMessage: "Birthday",
                id: "src/web/components/RegistrationForm/RegistrationForm:birthdayLabel"
            },
            genderLabel: {
                defaultMessage: "Gender",
                id: "src/web/components/RegistrationForm/RegistrationForm:genderLabel"
            },
            registerButtonLabel: {
                defaultMessage: "Register",
                id: "src/web/components/RegistrationForm/RegistrationForm:registerButtonLabel"
            },
            termsAgreement: {
                defaultMessage: "By registering, you agree to Tubi's <termsLink>Terms of Use</termsLink> and <privacyLink>Privacy Policy</privacyLink>",
                id: "src/web/components/RegistrationForm/RegistrationForm:termsAgreement"
            },
            ownedAccountMessage: {
                defaultMessage: "Already have an account? <signInLink>Sign In</signInLink>",
                id: "src/web/components/RegistrationForm/RegistrationForm:ownedAccountMessage"
            },
            required: {
                defaultMessage: "Required Field",
                id: "src/web/components/RegistrationForm/RegistrationForm:required"
            },
            passwordBlanksError: {
                defaultMessage: "Password cannot contain a blank space(s)",
                id: "src/web/components/RegistrationForm/RegistrationForm:passwordBlanksError"
            },
            passwordLengthError: {
                defaultMessage: "Length must be between 6 and 30",
                id: "src/web/components/RegistrationForm/RegistrationForm:passwordLengthError"
            },
            passwordMismatchError: {
                defaultMessage: "Passwords do not match",
                id: "src/web/components/RegistrationForm/RegistrationForm:passwordMismatchError"
            },
            invalidEmail: {
                defaultMessage: "Invalid email address",
                id: "src/web/components/RegistrationForm/RegistrationForm:invalidEmail"
            },
            invalidMonth: {
                defaultMessage: "Invalid Month",
                id: "src/web/components/RegistrationForm/RegistrationForm:invalidMonth"
            },
            invalidDay: {
                defaultMessage: "Invalid Day",
                id: "src/web/components/RegistrationForm/RegistrationForm:invalidDay"
            },
            invalidYear: {
                defaultMessage: "Invalid Year",
                id: "src/web/components/RegistrationForm/RegistrationForm:invalidYear"
            },
            invalidBirthday: {
                defaultMessage: "Invalid Birthday",
                id: "src/web/components/RegistrationForm/RegistrationForm:invalidBirthday"
            },
            futureBirthday: {
                defaultMessage: "Birthday cannot be in the future",
                id: "src/web/components/RegistrationForm/RegistrationForm:futureBirthday"
            },
            welcome: {
                defaultMessage: "Let's get you set up!",
                id: "src/web/components/RegistrationForm/RegistrationForm:welcome"
            },
            free: {
                defaultMessage: "It's free. No subscription required",
                id: "src/web/components/RegistrationForm/RegistrationForm:free"
            }
        }), ee = Y.REGISTRATION_FORM_FIELD_NAMES.FIRST_NAME, ae = Y.REGISTRATION_FORM_FIELD_NAMES.LAST_NAME, te = Y.REGISTRATION_FORM_FIELD_NAMES.EMAIL, re = Y.REGISTRATION_FORM_FIELD_NAMES.PASSWORD, ne = Y.REGISTRATION_FORM_FIELD_NAMES.PASSWORD2, se = Y.REGISTRATION_FORM_FIELD_NAMES.BIRTH_MONTH, oe = Y.REGISTRATION_FORM_FIELD_NAMES.BIRTH_DAY, ie = Y.REGISTRATION_FORM_FIELD_NAMES.BIRTH_YEAR, le = Y.REGISTRATION_FORM_FIELD_NAMES.GENDER, ce = Y.REGISTRATION_FORM_FIELD_NAMES.SUBMIT, me = T.ProgressType.COMPLETED_PASSWORD, de = T.ProgressType.COMPLETED_BIRTHDAY, ue = T.ProgressType.COMPLETED_EMAIL, ge = T.ProgressType.COMPLETED_GENDER, be = T.ProgressType.COMPLETED_NAME, pe = T.ProgressType.CLICKED_REGISTER, he = (r = {},
        E()(r, ne, me),
        E()(r, ie, de),
        E()(r, te, ue),
        E()(r, le, ge),
        E()(r, ee, be),
        E()(r, ce, pe),
        r), fe = {
            name: ie,
            label: $.birthdayYearLabel,
            hint: "YYYY",
            maxLength: 4
        }, Ee = {
            day: {
                name: oe,
                label: $.birthdayDayLabel,
                hint: "DD",
                maxLength: 2
            },
            month: {
                name: se,
                label: $.birthdayMonthLabel,
                hint: "MM",
                maxLength: 2
            },
            year: fe,
            relatedYear: fe
        }, Me = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return e.replace(/[^0-9]/, "")
        }, ve = function(e, a) {
            a && a.length > 0 && Object(V.D)({
                progress: he[e]
            })
        }, Fe = (n = h()(b.a.mark((function e(a, t) {
            var r, n, s, o;
            return b.a.wrap((function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        if (r = a.target,
                        n = r.name,
                        !((s = r.value).length > 0)) {
                            e.next = 12;
                            break
                        }
                        return o = !1,
                        e.prev = 3,
                        e.next = 6,
                        Object(k.a)(s);
                    case 6:
                        o = e.sent,
                        e.next = 11;
                        break;
                    case 9:
                        e.prev = 9,
                        e.t0 = e.catch(3);
                    case 11:
                        o && (t(n, H.m),
                        Object(V.C)({
                            manip: _.Manipulation.SIGNUP,
                            current: O.AuthType.EMAIL,
                            message: W.c,
                            status: _.ActionStatus.FAIL
                        }));
                    case 12:
                        ve(n, s);
                    case 13:
                    case "end":
                        return e.stop()
                    }
            }
            ), e, void 0, [[3, 9]])
        }
        ))),
        function(e, a) {
            return n.apply(this, arguments)
        }
        ), Re = function(e) {
            return [{
                label: "",
                value: ""
            }, {
                label: e(Y.genderOptionsMessages.male),
                value: "MALE"
            }, {
                label: e(Y.genderOptionsMessages.female),
                value: "FEMALE"
            }, {
                label: e(Y.genderOptionsMessages.other),
                value: "OTHER"
            }]
        }, we = function(e) {
            var a = e.handleSubmit
              , t = e.status
              , r = e.isSubmitting
              , n = e.isMobile
              , s = e.setFieldValue
              , i = e.setFieldError
              , l = e.values
              , c = e.errors
              , m = e.userLanguageLocale
              , d = e.intl
              , g = t.formError
              , b = d.formatMessage
              , p = function(e, a) {
                var t = e;
                return e === H.b && (t = o.a.createElement("span", null, a($.emailExistsError, {
                    signInLink: function(e) {
                        return o.a.createElement(P.Link, {
                            className: Q.a.link,
                            to: U.d.signIn
                        }, e)
                    },
                    resetPasswordLink: function(e) {
                        return o.a.createElement(P.Link, {
                            className: Q.a.link,
                            to: U.d.forgotPassword
                        }, e)
                    }
                }))),
                o.a.createElement("p", {
                    className: Q.a.errorText
                }, t || "")
            }(g, b)
              , h = r || !!S.a.load(Y.COOKIE_BELOW_MIN_AGE_COPPA) || c.email === H.m;
            return o.a.createElement("div", {
                className: Q.a.main
            }, o.a.createElement("div", {
                className: Q.a.headers
            }, o.a.createElement("div", {
                className: Q.a.header
            }, b($.welcome)), o.a.createElement("div", {
                className: Q.a.subheader
            }, b($.free))), o.a.createElement(B.b, {
                formType: B.a.REGISTER,
                facebookClass: Q.a.button,
                googleClass: Q.a.button
            }), o.a.createElement(x.a, {
                className: Q.a.orDivider,
                inverted: !0
            }), o.a.createElement("div", {
                className: Q.a.formHeader
            }, b($.emailRegHeading)), o.a.createElement("form", {
                className: Q.a.formContainer,
                onSubmit: a,
                noValidate: !0
            }, p, o.a.createElement(X.a, {
                component: L.a,
                name: ee,
                label: b($.firstNameLabel),
                maxLength: 60,
                autoComplete: "given-name",
                autoFocus: !n,
                handleBlur: ve,
                className: Q.a.input
            }), o.a.createElement(X.a, {
                component: L.a,
                name: ae,
                label: b($.lastNameLabel),
                maxLength: 60,
                autoComplete: "family-name",
                className: Q.a.input
            }), o.a.createElement(X.a, {
                component: L.a,
                name: te,
                type: "email",
                label: b($.emailLabel),
                hint: "We never share this",
                autoComplete: "email",
                handleBlur: function(e) {
                    Fe(e, i)
                },
                className: Q.a.input
            }), o.a.createElement(X.a, {
                component: L.a,
                name: re,
                type: "password",
                label: b($.passwordLabel),
                hint: b($.passwordHint),
                className: Q.a.input
            }), o.a.createElement(X.a, {
                component: L.a,
                name: ne,
                type: "password",
                label: b($.password2Label),
                hint: b($.password2Hint),
                handleBlur: ve,
                className: Q.a.input
            }), o.a.createElement(v.a, {
                className: Q.a.birthdayRow
            }, o.a.createElement(R.a, {
                xs: "12",
                md: "8",
                className: Q.a.birthday
            }, o.a.createElement("label", {
                className: Q.a.birthdayLabel
            }, b($.birthdayLabel)), function(e, a) {
                return Object(z.a)(e).map((function(e) {
                    var t = Ee[e]
                      , r = t.name
                      , n = t.label
                      , s = t.hint
                      , i = t.maxLength;
                    return o.a.createElement(X.a, {
                        key: e,
                        component: L.a,
                        name: r,
                        format: Me,
                        label: a(n),
                        hint: s,
                        maxLength: i,
                        showCounter: !1,
                        handleBlur: "year" === e ? ve : null
                    })
                }
                ))
            }(m, b)), o.a.createElement(R.a, {
                className: Q.a.gender
            }, o.a.createElement(K.a, {
                fixedLabel: !0,
                name: le,
                label: b($.genderLabel),
                native: n,
                options: Re(b),
                value: l.gender,
                error: c.gender,
                setFieldError: i,
                handleSelectChange: function(e, a) {
                    ve(e, a),
                    s(e, a)
                }
            }))), o.a.createElement("div", {
                className: Q.a.submitWrapper
            }, o.a.createElement(J.a, {
                name: ce,
                type: ce,
                size: "large",
                disabled: h,
                className: Q.a.submit,
                block: !0,
                color: q.d
            }, b($.registerButtonLabel))), o.a.createElement("div", {
                className: Q.a.statement
            }, o.a.createElement("p", null, b($.termsAgreement, {
                termsLink: function(e) {
                    var a = u()(e, 1)[0];
                    return o.a.createElement(P.Link, {
                        className: Q.a.link,
                        to: U.d.terms
                    }, a)
                },
                privacyLink: function(e) {
                    var a = u()(e, 1)[0];
                    return o.a.createElement(P.Link, {
                        className: Q.a.link,
                        to: U.d.privacy
                    }, a)
                }
            })), o.a.createElement("p", null, b($.ownedAccountMessage, {
                signInLink: function(e) {
                    var a = u()(e, 1)[0];
                    return o.a.createElement(P.Link, {
                        className: Q.a.link,
                        to: U.d.signIn
                    }, a)
                }
            })))))
        };
        we.propTypes = {
            isSubmitting: N.a.bool,
            status: N.a.shape({
                formError: N.a.string
            }),
            handleSubmit: N.a.func.isRequired,
            isMobile: N.a.bool.isRequired,
            values: N.a.object.isRequired,
            errors: N.a.object,
            setFieldValue: N.a.func.isRequired,
            setFieldError: N.a.func.isRequired,
            userLanguageLocale: N.a.string
        },
        we.defaultProps = {
            status: {}
        };
        var Le = {
            mapPropsToValues: function() {
                return {
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    password2: "",
                    birthMonth: "",
                    birthDay: "",
                    birthYear: "",
                    gender: ""
                }
            },
            validateOnBlur: !1,
            validateOnChange: !1,
            validate: function(e, a) {
                var t = a.intl.formatMessage;
                Object(V.D)({
                    progress: he[ce]
                });
                var r = {};
                if (["firstName", "email", "password", "password2", "birthDay", "birthMonth", "birthYear"].forEach((function(a) {
                    e[a] || (r[a] = t($.required))
                }
                )),
                e.password) {
                    var n = e.password.length;
                    e.password.indexOf(" ") >= 0 && (r.password = t($.passwordBlanksError)),
                    (n < 6 || n > 30) && (r.password = t($.passwordLengthError)),
                    e.password !== e.password2 && (r.password = t($.passwordMismatchError),
                    r.password2 = t($.passwordMismatchError))
                }
                e.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,10}$/i.test(e.email) && (r.email = t($.invalidEmail));
                var s = e.birthMonth
                  , o = void 0 === s ? "" : s
                  , i = e.birthDay
                  , l = void 0 === i ? "" : i
                  , c = e.birthYear
                  , m = void 0 === c ? "" : c;
                if (o || l || m) {
                    var d = parseInt(o, 10)
                      , u = parseInt(l, 10)
                      , g = parseInt(m, 10);
                    if ((!d || d <= 0 || d > 12) && (r.birthMonth = t($.invalidMonth)),
                    (!u || u <= 0 || u > 31) && (r.birthDay = t($.invalidDay)),
                    (!g || m.length < 4 || g > (new Date).getFullYear()) && (r.birthYear = t($.invalidYear)),
                    o && l && m && !r.birthYear) {
                        var b = o + "/" + l + "/" + m;
                        try {
                            var p = new Date(b);
                            p.toISOString(),
                            new Date - p < 0 && (r.birthYear = t($.futureBirthday))
                        } catch (e) {
                            r.birthYear = t($.invalidBirthday)
                        }
                    }
                }
                return r
            },
            handleSubmit: function(e, a) {
                var t = a.setSubmitting
                  , r = a.setStatus
                  , n = a.props
                  , s = n.dispatch
                  , o = n.loginCallback
                  , i = n.loginRedirect
                  , l = n.intl;
                return s(Object(G.m)(e)).then((function() {
                    t(!1),
                    r({
                        formError: "",
                        underRegistrationAge: !1
                    }),
                    o && o(),
                    s(Object(j.replace)(i || U.d.home)),
                    (i || o) && s(Object(G.d)())
                }
                )).catch((function(e) {
                    t(!1),
                    e.routeCode && e.routeCode === W.a ? (S.a.save(Y.COOKIE_BELOW_MIN_AGE_COPPA, 1, {
                        maxAge: Y.ONE_WEEK
                    }),
                    r({
                        formError: l.formatMessage($.coppaErrorMessage)
                    })) : r({
                        formError: e.message
                    })
                }
                ))
            }
        }
          , _e = Object(A.b)(Le)(we)
          , Oe = Object(D.c)(_e)
          , Te = t(1726)
          , Ae = t.n(Te)
          , ye = function(e) {
            var a = e.isMobile
              , t = e.dispatch
              , r = e.loginRedirect
              , n = e.loginCallback
              , s = e.userLanguageLocale;
            return o.a.createElement("div", {
                className: Ae.a.content
            }, o.a.createElement(l.a, {
                logo: !0,
                invert: !0,
                login: !0
            }), o.a.createElement("div", {
                className: Ae.a.registrationWrapper
            }, o.a.createElement("div", {
                className: Ae.a.circle
            }, o.a.createElement(c.a, {
                className: Ae.a.icon
            })), o.a.createElement(Oe, {
                isMobile: a,
                dispatch: t,
                loginRedirect: r,
                loginCallback: n,
                userLanguageLocale: s
            })), o.a.createElement(m.default, null))
        };
        a.default = Object(i.b)((function(e, a) {
            var t = a.location
              , r = e.auth
              , n = e.ui
              , s = t.query && t.query.redirect || r.loginRedirect
              , o = n.isMobile
              , i = n.userLanguageLocale;
            return {
                loginCallback: r.loginCallback,
                loginRedirect: s,
                isMobile: o,
                userLanguageLocale: i
            }
        }
        ))(ye)
    }
}]);
