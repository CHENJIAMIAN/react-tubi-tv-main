function a(url, module, require) {
    function then(next) {
        return next ? next() : void 0;
    }
    function get(config, done) {
        var redirectUrl = config.location;
        if (redirectUrl && redirectUrl.query && redirectUrl.query.redirect) {
            done({
                pathname: redirectUrl.query.redirect,
            });
        } else {
            done({
                pathname: $scope.d.landing,
            });
        }
    }
    function notify(t) {
        var window = Object(root.useState)(false);
        var helloComponent = window[0];
        var addEventListener = window[1];
        var gallery = Object(root.useRef)();
        var loaded = Object(root.useCallback)(
            function () {
                addEventListener(true);
                if (gallery.current) {
                    clearTimeout(gallery.current);
                }
            },
            [gallery]
        );
        var e = Object(root.useCallback)(
            function () {
                if (null == t ? void 0 : t.delay) {
                    gallery.current = window.setTimeout(function () {
                        addEventListener(false);
                    }, t.delay);
                } else {
                    addEventListener(false);
                }
            },
            [null == t ? void 0 : t.delay]
        );
        var _ref = Object(root.useRef)();
        var u = Object(root.useCallback)(
            function (zoomLevel) {
                var elem;
                var next;
                var node;
                var cmd;
                if (!(null == t ? void 0 : t.skip)) {
                    if (!(null === (elem = _ref.current) || void 0 === elem)) {
                        elem.removeEventListener('mouseenter', loaded);
                    }
                    if (!(null === (next = _ref.current) || void 0 === next)) {
                        next.removeEventListener('mouseleave', e);
                    }
                    _ref.current = zoomLevel;
                    if (!(null === (node = _ref.current) || void 0 === node)) {
                        node.addEventListener('mouseenter', loaded);
                    }
                    if (!(null === (cmd = _ref.current) || void 0 === cmd)) {
                        cmd.addEventListener('mouseleave', e);
                    }
                }
            },
            [null == t ? void 0 : t.skip, loaded, e]
        );
        return (null == t ? void 0 : t.skip) ? [u, false] : [u, helloComponent];
    }
    function remove(store) {
        var getState = store.getState;
        var dispatch = store.dispatch;
        var promises = [];
        var key = getState().auth;
        return (
            (void 0 === key ? {} : key).user &&
                (promises.push(dispatch(Object(pt.e)())),
                promises.push(
                    Object(targetAssociation.a)(dispatch(Object(window.b)()))
                ),
                promises.push(
                    Object(targetAssociation.a)(dispatch(Object(hmVals.b)()))
                ),
                promises.push(
                    Object(targetAssociation.a)(dispatch(Object(spec.b)()))
                )),
            Y.a.all(promises).catch(function (e) {
                return (
                    request.a.error(
                        e,
                        'Error while fetching deferred data - App'
                    ),
                    Y.a.reject(e)
                );
            })
        );
    }
    function connect(store) {
        var getState = store.getState;
        var dispatch = store.dispatch;
        var key = getState().auth;
        if ((void 0 === key ? {} : key).user) {
            return (function (find, dispatch, deep) {
                return (
                    void 0 === deep && (deep = false),
                    dispatch(find())
                        .catch(function () {
                            return dispatch(find());
                        })
                        .catch(function (key) {
                            return deep ? Y.a.resolve() : Y.a.reject(key);
                        })
                );
            })(di.b, dispatch, true);
        }
    }
    require.r(module);
    var root = require(0);
    var row = require.n(root);
    var descriptor = require(11);
    var _reactRouter = require(14);
    var d = require(27);
    var log = require(230);
    var $scope = require(6);
    var requireConfig = require(518);
    var sublimeTextRender = require.n(requireConfig);
    var genBrick = require(36);
    var opt = (require(910), require(116));
    var options = require(5);
    var presenceLeave = (require(111), require(316), require(275));
    var event = require(110);
    var frame = require(71);
    var v = require(42);
    var new_opts = require(218);
    var A = require(223);
    var deps = (require(274), require(165));
    var currentTransformMatrix = require(105);
    var __WEBPACK_LABELED_MODULE__3 = require(88);
    var c2 = (require(270), require(21));
    var pt = require(79);
    var chromo = require(866);
    var uniqueIds = {
        history: options.HISTORY_CONTAINER_ID,
        1: 'trending',
        10: 'most_popular',
        1290: 'comedy',
        1291: 'drama',
        1293: 'romance',
        1295: 'documentary',
        1324: 'horror',
        1333: 'reality_tv',
        1413: 'foreign_favorites/s/korean_drama',
        1432: 'kids',
        1538: 'foreign_favorites',
        1562: 'foreign_favorites/s/special_interest/s/get_fit',
        1611: 'featured',
        1612: 'film_festival_favorites',
        1613: 'action',
        1643: 'new_arrivals',
        1851: 'not_on_netflix',
        1951: 'highly_rated_on_rotten_tomatoes',
        500001: 'featured',
        500002: 'martial_arts',
        500006: 'tv_comedies',
        500007: 'tv_dramas',
        500008: 'cult_favorites',
        500009: 'sci_fi_and_fantasy',
        500011: 'fan_favorites',
        500012: 'foreign_favorites/s/british_tv',
        500013: 'crime_tv',
        500015: 'special_interest',
        500016: 'special_interest/s/good_eats',
        500018: 'special_interest/s/wild_things',
        500020: 'special_interest/s/faith',
        500021: 'special_interest/s/music_and_musicals',
        500022: 'foreign_favorites/s/todo_en_espanol',
        500025: 'stand_up_comedy',
        500026: 'movie_night',
        500028: 'anime',
        500034: 'black_cinema',
        500035: 'impact',
        500037: 'foreign_favorites/s/chinese_drama',
        500040: 'featured',
        500042: 'classics',
        500043: 'featured',
        500044: 'featured',
        500046: 'thrillers',
    };
    var request = require(13);
    var run = function (input, initialWeights, done, next) {
        var db = input.getState().auth;
        if (!db.loaded) {
            return input
                .dispatch(Object(pt.e)())
                .then(function () {
                    if (!input.getState().auth.user) {
                        done({
                            pathname: $scope.d.signIn,
                        });
                    }
                    then(next);
                })
                .catch(function (mnemonics) {
                    request.a.error(mnemonics, 'Check auth fail');
                });
        }
        if (!db.user) {
            done({
                pathname: $scope.d.signIn,
            });
        }
        then(next);
    };
    var add = function (context, layer, n, next) {
        var token = layer.params.token;
        if (!context.getState().pwdReset.loaded) {
            return context
                .dispatch(Object(chromo.b)(token))
                .then(next)
                .catch(function (error_func) {
                    request.a.warn(
                        {
                            error: error_func,
                            token: token,
                        },
                        'token is invalid'
                    );
                    then(next);
                });
        }
        then(next);
    };
    var setup = function (tab, conf, name) {
        if (tab.getState().auth.user) {
            get(conf, name);
        }
    };
    var onEnter = function (data, callback) {
        var id = data.location.query.id;
        callback(
            id
                ? {
                      pathname: '/category/' + id,
                  }
                : {
                      pathname: '/404',
                  }
        );
    };
    var filter = function (object, event, done) {
        var i = (event.location.pathname || '').substring(1).split('/')[1];
        var id = uniqueIds[i];
        if (
            object.getState().auth.user ||
            -1 ===
                [
                    options.HISTORY_CONTAINER_ID,
                    options.QUEUE_CONTAINER_ID,
                ].indexOf(i)
        ) {
            if (id && i !== id) {
                done({
                    pathname: '/category/' + id,
                });
            }
        } else {
            done({
                pathname: '/404',
            });
        }
    };
    var end = function (options, callback) {
        var key = options.location.query.v;
        callback(
            key
                ? {
                      pathname: $scope.d.search + '/' + key,
                  }
                : {
                      pathname: $scope.d.home,
                  }
        );
    };
    var f = function (value, count, done) {
        var proxy = value.getState();
        var auth = proxy.auth;
        var addr = Object(new_opts.g)(proxy);
        if (auth.user || addr.isMxCountry) {
            done({
                pathname: $scope.d.home,
            });
        }
    };
    var validate = function (service, schema, instance, next) {
        var t = service.getState();
        var id = schema.params.id;
        var file = t.video.byId[id];
        return file && file.id
            ? (instance(
                  Object(c2.i)({
                      video: file,
                  })
              ),
              void then(next))
            : service
                  .dispatch(Object(opt.f)(id))
                  .then(function () {
                      var es = service.getState().video.byId[id];
                      instance(
                          Object(c2.i)({
                              video: es,
                          })
                      );
                      then(next);
                  })
                  .catch(function () {
                      instance($scope.d.home);
                      then(next);
                  });
    };
    var exports = function (value, suffix, done) {
        if (!Object(A.a)(value.getState())) {
            done({
                pathname: '/',
            });
        }
    };
    var parse = function (store, action, done) {
        return store.getState().auth.user
            ? get(action, done)
            : Object(v.c)(store.getState())
            ? done({
                  pathname: $scope.d.coppaRegistration,
                  query: action.location.query,
              })
            : void 0;
    };
    var register = function (e, info, keys, callback) {
        var a = Object(v.c)(e.getState());
        var afterBackLocation = info.location.pathname;
        var a1IsExp = !Object(deps.i)(afterBackLocation);
        if ((Object(presenceLeave.c)(e).logExposure(), a)) {
            var magnifier = e.getState();
            var $magnifier = Object(event.a)(magnifier);
            var a3IsVar = Object(v.b)(magnifier);
            if (
                (a1IsExp ||
                    (afterBackLocation === $scope.d.activate && $magnifier)) &&
                a3IsVar
            ) {
                e.dispatch(Object(d.u)(true));
            }
            if (Object(v.e)(magnifier)) {
                e.dispatch(Object(d.j)(true));
                if (!(a1IsExp || afterBackLocation === $scope.d.landing)) {
                    keys($scope.d.home);
                }
            }
        }
        then(callback);
    };
    var async = function (context, selector, done) {
        done({
            pathname: $scope.d.channel + '/' + selector.params.id,
        });
    };
    var tParentMatrix = require(87);
    var dialog = require(9);
    var Y = require.n(dialog);
    var instance = require(1);
    var schemas = require(557);
    var package2 = require(8);
    var resolve = require.n(package2);
    var type = require(115);
    var __WEBPACK_IMPORTED_MODULE_2_date_fns_difference_in_days___default =
        require.n(type);
    var file = require(140);
    var call = require.n(file);
    var copyProjectTemplateAndReplacePath = require(3);
    var _react = require.n(copyProjectTemplateAndReplacePath);
    var NonCachingExtractTextLoader = require(43);
    var BaseDao = require.n(NonCachingExtractTextLoader);
    var _DraggableCore2 = require(440);
    var radio_runway_names = require(138);
    var m2 = require(19);
    var hmVals = require(124);
    var window = require(168);
    var spec = require(874);
    var alias = require(66);
    var di = require(129);
    var Input = function (options) {
        var plugin = options.loader;
        var value = options.fallback;
        var text = void 0 === value ? null : value;
        var result = Object(root.lazy)(plugin);
        return row.a.createElement(
            root.Suspense,
            {
                fallback: text,
            },
            row.a.createElement(result, null)
        );
    };
    var q = require(24);
    var TagHourlyStat = require(517);
    var exportsB = require(683);
    var shapePath = require(689);
    var ast = require(16);
    var position = require(68);
    var f0c = require(371);
    var h = require(52);
    var targetAssociation = require(178);
    var curves = require(23);
    var resize = function () {
        var category = 'desktop';
        if ('undefined' == typeof document) {
            return category;
        }
        var sizeWindow = Math.max(
            document.documentElement.clientWidth || 0,
            window.innerWidth || 0
        );
        return (
            sizeWindow <= options.VIEWPORT_BREAKPOINTS.mobile
                ? (category = 'mobile')
                : sizeWindow <= options.VIEWPORT_BREAKPOINTS.tablet &&
                  (category = 'tablet'),
            category
        );
    };
    var doc = require(44);
    var originalB = require(30);
    var conversions = require(672);
    var normalizedMatrix = require.n(conversions);
    var TAG_SHY = Object(m2.b)(function (state) {
        var t = Object(v.e)(state);
        return {
            isLoggedIn: Object(event.a)(state),
            shouldShowOneTapPrompt: !state.ui.ageGateModal.isVisible && !t,
        };
    })(function (_props) {
        var m;
        var _localExports;
        var _name;
        var selected = _props.shouldShowOneTapPrompt;
        var buttonComponentClass = _props.isLoggedIn;
        var dispatch = _props.dispatch;
        var CAPTURE_ID = 'GoogleOneTap';
        var value =
            ((_localExports = [
                $scope.d.home,
                $scope.d.container,
                $scope.d.channel,
                $scope.d.series,
                $scope.d.search,
                $scope.d.activate,
            ]),
            (_name = Object(originalB.c)()),
            _localExports.some(function (alias) {
                return _name.startsWith(alias);
            }) || '/' === _name);
        var values = Object(root.useState)(false);
        var a = values[0];
        var med = values[1];
        var langClass = resolve()(
            normalizedMatrix.a.oneTap,
            (((m = {})[normalizedMatrix.a.inActivate] = a), m)
        );
        return (
            Object(root.useEffect)(function () {
                med(Object(originalB.c)().startsWith($scope.d.activate));
            }, []),
            Object(root.useEffect)(
                function () {
                    if (value && selected && 'undefined' != typeof window) {
                        Object(position.i)(
                            'https://accounts.google.com/gsi/client',
                            function () {
                                if (!buttonComponentClass) {
                                    window.google.accounts.id.initialize({
                                        client_id: doc.b.google.clientID,
                                        prompt_parent_id: CAPTURE_ID,
                                        auto_select: true,
                                        context: 'signin',
                                        callback: function (result) {
                                            var credentials = result.credential;
                                            dispatch(
                                                Object(pt.h)(
                                                    Object(originalB.c)()
                                                )
                                            );
                                            dispatch(
                                                Object(pt.i)(
                                                    credentials,
                                                    pt.a.GOOGLE_ONE_TAP
                                                )
                                            );
                                        },
                                    });
                                    window.google.accounts.id.prompt();
                                }
                            }
                        );
                    }
                },
                [selected]
            ),
            row.a.createElement('div', {
                id: CAPTURE_ID,
                className: langClass,
            })
        );
    });
    var document = require(4);
    var createElement = require.n(document);
    var CallConstant = require(72);
    var pkg = require(276);
    var router = require(29);
    var deferredHash = require(349);
    var _suggestList2 = require(519);
    var _suggestItem2 = require(239);
    var Client = require(90);
    var constraints = require(417);
    var ff00cc = require(426);
    var newRgbaColor = require(661);
    var SignupModal = require(145);
    var Helpers = require(46);
    var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_sprite_build___default = require(884);
    var x = require(182);
    var global = require.n(x);
    var animationSet = {
        appear: global.a.fadeAppear,
        appearActive: global.a.fadeAppearActive,
        appearDone: global.a.fadeAppearDone,
        enter: global.a.fadeEnter,
        enterActive: global.a.fadeEnterActive,
        enterDone: global.a.fadeEnterDone,
        exit: global.a.fadeExit,
        exitActive: global.a.fadeExitActive,
        exitDone: global.a.fadeExitDone,
    };
    var link = function (e) {
        var isOpen = e.isOpen;
        var item = e.onClose;
        var pubDateEl = e.onClickOverlay;
        var children = e.children;
        var key = e.overlayClassNames;
        var newElKey = void 0 === key ? animationSet : key;
        var remove = e.contentClassNames;
        var setOrRemove = void 0 === remove ? animationSet : remove;
        var parsed_expression = Object(instance.__rest)(e, [
            'isOpen',
            'onClose',
            'onClickOverlay',
            'children',
            'overlayClassNames',
            'contentClassNames',
        ]);
        var $ = Object(
            __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_sprite_build___default.a
        )(
            Object(instance.__assign)(
                {
                    isDefaultOpen: isOpen,
                },
                parsed_expression
            )
        );
        var isObject = $.closeModal;
        var widget = $.Modal;
        var hide = $.openModal;
        var timestampGenerator = Object(root.useRef)(0);
        var tiledImageBRs = Object(root.useState)(false);
        var tiledImageBR = tiledImageBRs[0];
        var suggestHistory = tiledImageBRs[1];
        var onEnter = Object(root.useCallback)(function () {
            timestampGenerator.current++;
        }, []);
        var onExited = Object(root.useCallback)(
            function () {
                timestampGenerator.current--;
                if (0 === timestampGenerator.current) {
                    if (item) {
                        item();
                    }
                    isObject();
                }
            },
            [item, isObject]
        );
        return (
            Object(root.useEffect)(
                function () {
                    if (isOpen) {
                        hide();
                        suggestHistory(true);
                    } else {
                        suggestHistory(false);
                    }
                },
                [suggestHistory, isObject, hide, isOpen]
            ),
            row.a.createElement(
                widget,
                null,
                row.a.createElement(
                    'div',
                    {
                        className: global.a.root,
                    },
                    row.a.createElement(
                        Helpers.CSSTransition,
                        {
                            appear: true,
                            classNames: newElKey,
                            in: tiledImageBR,
                            onEnter: onEnter,
                            onExited: onExited,
                            timeout: 300,
                        },
                        row.a.createElement('div', {
                            className: global.a.overlay,
                            onClick: pubDateEl,
                        })
                    ),
                    row.a.createElement(
                        Helpers.CSSTransition,
                        {
                            appear: true,
                            classNames: setOrRemove,
                            in: tiledImageBR,
                            onEnter: onEnter,
                            onExited: onExited,
                            timeout: 300,
                        },
                        children
                    )
                )
            )
        );
    };
    var __WEBPACK_IMPORTED_MODULE_19_date_fns_add_seconds__ = require(217);
    var __WEBPACK_IMPORTED_MODULE_19_date_fns_add_seconds___default = require.n(
        __WEBPACK_IMPORTED_MODULE_19_date_fns_add_seconds__
    );
    var ShapeMaker_1 = require(49);
    var ButtonBar = function (props) {
        return row.a.createElement(
            ShapeMaker_1.a,
            createElement()(
                {
                    viewBox: '0 0 12 5',
                },
                props
            ),
            row.a.createElement('path', {
                fill: 'currentColor',
                d: 'M19.5101147,20.9824691 L15.1222085,18.1291511 C14.7625781,17.8609086 14.3044469,18.0239987 14.0989439,18.4934232 C13.8934408,18.9628476 14.0183857,19.5608448 14.3780161,19.8290874 L18.8779198,22.7659425 C18.949842,22.8195882 19.0280761,22.8573102 19.1094446,22.8775766 C19.764809,23.0408078 20.235191,23.0408078 20.8905554,22.8775766 C20.9719239,22.8573102 21.050158,22.8195882 21.1220802,22.7659425 L25.6219839,19.8290874 C25.9816143,19.5608448 26.1065592,18.9628476 25.9010561,18.4934232 C25.6955531,18.0239987 25.2374219,17.8609086 24.8777915,18.1291511 L20.4898853,20.9824691 C20.127802,21.0619724 19.872198,21.0619724 19.5101147,20.9824691 Z',
                transform: 'translate(-14 -18)',
            })
        );
    };
    var key = require(119);
    var data = require.n(key);
    var clone = function (callback) {
        var el = Object(root.useRef)(callback);
        return (
            (el.current = callback),
            Object(root.useCallback)(function () {
                var argumentsArray = [];
                var i = 0;
                for (; i < arguments.length; i++) {
                    argumentsArray[i] = arguments[i];
                }
                return el.current.apply(el, argumentsArray);
            }, [])
        );
    };
    var callback = function (data) {
        var length = data.total;
        var time = data.interval;
        var content = data.handler;
        var assignedArguments = Object(root.useState)(0);
        var index = assignedArguments[0];
        var fnSameRequestId = assignedArguments[1];
        var parseInt = clone(function (staticIdx) {
            if ('prev' === staticIdx) {
                return index - 1 < 0 ? length - 1 : index - 1;
            }
            if ('next' === staticIdx) {
                return index + 1 === length ? 0 : index + 1;
            }
            throw new Error('Would never be here');
        });
        var previous = clone(function () {
            callback(parseInt('prev'));
        });
        var undefined = clone(function () {
            callback(parseInt('next'));
        });
        var timeout = Object(root.useRef)(0);
        var cancel = function () {
            timeout.current = window.setTimeout(content || undefined, time);
        };
        var complete = function () {
            window.clearTimeout(timeout.current);
        };
        var callback = function (message) {
            complete();
            fnSameRequestId(message);
            cancel();
        };
        return (
            Object(root.useEffect)(function () {
                return (
                    cancel(),
                    function () {
                        complete();
                    }
                );
            }, []),
            {
                active: index,
                peek: parseInt,
                prev: previous,
                next: undefined,
            }
        );
    };
    var items = [
        {
            title: {
                id: 'title1',
                description: 'title for carousel slide 1',
                defaultMessage:
                    'FREE with Fewer Ads<linebreak></linebreak>than Cable',
            },
            desc: {
                id: 'desc1',
                description: 'description for carousel slide 1',
                defaultMessage:
                    'Ads help keep Tubi 100% Free.<linebreak></linebreak>We will never ask for a credit card.',
            },
        },
        {
            title: {
                id: 'title2',
                description: 'title for carousel slide 2',
                defaultMessage:
                    'Thousands of Movies<linebreak></linebreak>& TV Shows',
            },
            desc: {
                id: 'desc2',
                description: 'description for carousel slide 2',
                defaultMessage:
                    'With over 30,000 titles, we always<linebreak></linebreak>have something for you.',
            },
        },
        {
            title: {
                id: 'title3',
                description: 'title for carousel slide 3',
                defaultMessage: 'Watch on the<linebreak></linebreak>Big Screen',
            },
            desc: {
                id: 'desc3',
                description: 'description for carousel slide 3',
                defaultMessage:
                    'Available on all streaming devices.<linebreak></linebreak>Check us out.',
            },
        },
        {
            title: {
                id: 'title4',
                description: 'title for carousel slide 4',
                defaultMessage:
                    'Over 80+ News<linebreak></linebreak>Channels<new></new>',
            },
            desc: {
                id: 'desc4',
                description: 'description for carousel slide 4',
                defaultMessage:
                    'Stay up to date with everything<linebreak></linebreak>happening locally and globally.',
            },
        },
    ].map(descriptor.a);
    var client = Object(descriptor.a)({
        newLabel: {
            defaultMessage: 'NEW',
            id: 'src/web/components/RegistrationPrompt/Carousel:newLabel',
        },
    });
    var from_watson = {
        enter: data.a.forwardEnter,
        enterActive: data.a.forwardEnterActive,
    };
    var de_btn_hide_user = {
        enter: data.a.backwardEnter,
        enterActive: data.a.backwardEnterActive,
    };
    var render = function () {
        var test = Object(pkg.a)();
        var tiledImageBRs = Object(root.useState)(false);
        var isUser = tiledImageBRs[0];
        var onStartStopButtonClick = tiledImageBRs[1];
        var BI_RC = Object(root.useState)(false);
        var c = BI_RC[0];
        var setNextDue = BI_RC[1];
        var value = callback({
            total: 4,
            interval: 2500,
            handler: function () {
                setNextDue(true);
            },
        });
        var i = value.active;
        var down = value.peek;
        var operator = value.prev;
        var j = value.next;
        var menuCloseButton = [down('prev'), i, down('next')].map(function (i) {
            return row.a.createElement(
                'div',
                {
                    className: resolve()(
                        data.a.item,
                        data.a['item_' + (i + 1)]
                    ),
                },
                row.a.createElement('div', {
                    className: data.a.itemImage,
                }),
                row.a.createElement(
                    'div',
                    {
                        className: data.a.itemDesc,
                    },
                    row.a.createElement(
                        'h2',
                        null,
                        test.formatMessage(items[i].title, {
                            linebreak: function () {
                                return row.a.createElement('br', null);
                            },
                            new: function () {
                                return row.a.createElement(
                                    'span',
                                    {
                                        className: data.a.new,
                                    },
                                    test.formatMessage(client.newLabel)
                                );
                            },
                        })
                    ),
                    row.a.createElement(
                        'p',
                        null,
                        test.formatMessage(items[i].desc, {
                            linebreak: function () {
                                return row.a.createElement('br', null);
                            },
                        })
                    )
                )
            );
        });
        return row.a.createElement(
            'div',
            {
                className: data.a.main,
            },
            row.a.createElement(
                Helpers.CSSTransition,
                {
                    classNames: isUser ? de_btn_hide_user : from_watson,
                    timeout: {
                        enter: 1000,
                        exit: 0,
                    },
                    onEntered: function () {
                        if (isUser) {
                            onStartStopButtonClick(false);
                            operator();
                        }
                        if (c) {
                            setNextDue(false);
                            j();
                        }
                    },
                    in: isUser || c,
                },
                row.a.createElement(
                    'div',
                    {
                        className: data.a.wrapper,
                    },
                    menuCloseButton
                )
            ),
            row.a.createElement(
                'div',
                {
                    className: data.a.indicators,
                },
                __WEBPACK_IMPORTED_MODULE_19_date_fns_add_seconds___default()(
                    Array(4),
                    function (canCreateDiscussions, value) {
                        var items;
                        return row.a.createElement('div', {
                            className: resolve()(
                                ((items = {}),
                                (items[data.a.active] = value === i),
                                items)
                            ),
                        });
                    }
                )
            ),
            row.a.createElement(
                SignupModal.a,
                {
                    shape: 'round',
                    className: resolve()(data.a.button, data.a.left),
                    onClick: function () {
                        if (!(isUser || c)) {
                            onStartStopButtonClick(true);
                        }
                    },
                },
                row.a.createElement(ButtonBar, null)
            ),
            row.a.createElement(
                SignupModal.a,
                {
                    shape: 'round',
                    className: resolve()(data.a.button, data.a.right),
                    onClick: function () {
                        if (!(isUser || c)) {
                            setNextDue(true);
                        }
                    },
                },
                row.a.createElement(ButtonBar, null)
            )
        );
    };
    var verify = require(101);
    var self = require.n(verify);
    var StandardText = row.a.memo(function (filterFormProps) {
        return row.a.createElement(
            'svg',
            createElement()(
                {
                    xmlns: 'http://www.w3.org/2000/svg',
                    viewBox: '0 0 18 18',
                },
                filterFormProps
            ),
            row.a.createElement('path', {
                d: 'M16.622 7.393A105.98 105.98 0 003.419.176C2.219-.374.847.426.756 1.734.589 4.134.5 6.554.5 8.996c0 2.444.088 4.868.256 7.27.092 1.307 1.464 2.108 2.663 1.558a106.11 106.11 0 0013.203-7.217 1.91 1.91 0 000-3.214z',
            })
        );
    });
    var FormioElement = row.a.memo(function (filterFormProps) {
        return row.a.createElement(
            'svg',
            createElement()(
                {
                    viewBox: '0 0 20 20',
                    xmlns: 'http://www.w3.org/2000/svg',
                },
                filterFormProps
            ),
            row.a.createElement('path', {
                d: 'M18.783 5.225l-.004-.004C17.694 4.148 16.241 4 14.832 4H5.154c-1.405 0-2.853.149-3.934 1.229C.095 6.345 0 7.84 0 9.154v5.677c0 1.325.095 2.832 1.217 3.944C2.235 19.792 3.533 20 5.168 20h9.663c1.636 0 2.934-.208 3.951-1.225C19.907 17.651 20 16.15 20 14.831V9.176c0-1.322-.093-2.827-1.217-3.951zM18 14.831c0 1.401-.165 2.063-.632 2.529-.465.467-1.154.64-2.536.64H5.168c-1.383 0-2.071-.173-2.54-.643C2.17 16.904 2 16.219 2 14.831V9.154c0-1.372.17-2.05.631-2.506C3.103 6.175 3.787 6 5.154 6h9.678c1.377 0 2.065.174 2.539.641.459.461.629 1.149.629 2.535v5.655zM5 2h10a1 1 0 100-2H5a1 1 0 000 2z',
            }),
            row.a.createElement('path', {
                d: 'M12.5 11H11V9.5a1 1 0 10-2 0V11H7.5a1 1 0 100 2H9v1.5a1 1 0 102 0V13h1.5a1 1 0 100-2z',
            })
        );
    });
    var SimpleBinding = row.a.memo(function (filterFormProps) {
        return row.a.createElement(
            'svg',
            createElement()(
                {
                    viewBox: '0 0 19 20',
                    xmlns: 'http://www.w3.org/2000/svg',
                },
                filterFormProps
            ),
            row.a.createElement('path', {
                d: 'M9.5 2C10.879 2 12 3.122 12 4.5S10.879 7 9.5 7A2.503 2.503 0 017 4.5C7 3.122 8.122 2 9.5 2zm0-2a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM9.5 12.841c3.504 0 6.439 2.462 7.179 5.746a.908.908 0 00.891.697.925.925 0 00.907-1.12C17.546 14.067 13.875 11 9.5 11S1.454 14.067.523 18.164a.926.926 0 00.907 1.12.908.908 0 00.891-.697c.74-3.284 3.675-5.746 7.18-5.746z',
            })
        );
    });
    var NgReactGridShowPerPage = row.a.memo(function (filterFormProps) {
        return row.a.createElement(
            'svg',
            createElement()(
                {
                    viewBox: '0 0 20 20',
                    xmlns: 'http://www.w3.org/2000/svg',
                },
                filterFormProps
            ),
            row.a.createElement('path', {
                d: 'M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm3.961 12.547a.999.999 0 1 1-1.414 1.414L10 11.414l-2.559 2.559a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414L8.586 10 6.05 7.464A.999.999 0 1 1 7.464 6.05L10 8.586l2.513-2.513a.999.999 0 1 1 1.414 1.414L11.414 10l2.547 2.547z',
            })
        );
    });
    var shape = Object(descriptor.a)({
        title: {
            defaultMessage: 'Start Watching Now',
            id: 'src/web/components/RegistrationPrompt/RegistrationPrompt:title',
        },
        desc: {
            defaultMessage:
                'FREE Forever With Fewer Ads Than Cable<linebreak></linebreak>No Credit Card Required',
            id: 'src/web/components/RegistrationPrompt/RegistrationPrompt:desc',
        },
        register: {
            defaultMessage: 'Continue with Email',
            id: 'src/web/components/RegistrationPrompt/RegistrationPrompt:register',
        },
        ownedAccountMessage: {
            defaultMessage:
                'Already have an account? <signInLink>Sign In</signInLink>',
            id: 'src/web/components/RegistrationPrompt/RegistrationPrompt:ownedAccountMessage',
        },
        continueAsGuest: {
            defaultMessage: 'Continue as Guest',
            id: 'src/web/components/RegistrationPrompt/RegistrationPrompt:continueAsGuest',
        },
        introTitle: {
            defaultMessage: 'Tubi is better when you sign up',
            id: 'src/web/components/RegistrationPrompt/RegistrationPrompt:introTitle',
        },
        feature1: {
            defaultMessage: 'Add to Your List',
            id: 'src/web/components/RegistrationPrompt/RegistrationPrompt:feature1',
        },
        desc1: {
            defaultMessage: 'Save Now, Watch Later',
            id: 'src/web/components/RegistrationPrompt/RegistrationPrompt:desc1',
        },
        feature2: {
            defaultMessage: 'Save Your Progress',
            id: 'src/web/components/RegistrationPrompt/RegistrationPrompt:feature2',
        },
        desc2: {
            defaultMessage: 'Pickup where you left off',
            id: 'src/web/components/RegistrationPrompt/RegistrationPrompt:desc2',
        },
        feature3: {
            defaultMessage: 'Made For You',
            id: 'src/web/components/RegistrationPrompt/RegistrationPrompt:feature3',
        },
        desc3: {
            defaultMessage: 'Unlock better recommendations',
            id: 'src/web/components/RegistrationPrompt/RegistrationPrompt:desc3',
        },
        free: {
            defaultMessage: 'Free Forever',
            id: 'src/web/components/RegistrationPrompt/RegistrationPrompt:free',
        },
        termsAgreement: {
            defaultMessage:
                "By registering, you agree to Tubi's<linebreak></linebreak><termsLink>Terms of Use</termsLink> and <privacyLink>Privacy Policy</privacyLink>",
            id: 'src/web/components/RegistrationPrompt/RegistrationPrompt:termsAgreement',
        },
    });
    var Stateful = Object(_reactRouter.withRouter)(function (options) {
        var resultData;
        var symlinkTpl;
        var permsTpl;
        var firstSeparator;
        var peerData;
        var router = options.router;
        var routes = options.routes;
        var assert = Object(pkg.a)();
        var callback = Object(m2.e)();
        var parsedAbsoluteUrl = Object(m2.f)(function (state) {
            return state.routing.locationBeforeTransitions;
        }, m2.d);
        var top = Object(m2.f)(function (n) {
            return n.ui.registrationPrompt;
        }, m2.d);
        var isOpen = top.isOpen;
        var onClose = top.onClose;
        var title = Object(m2.f)(function (Tundra) {
            return Tundra.ui.isMobile;
        });
        var localDictionaryValues =
            (null !==
                (symlinkTpl =
                    null == parsedAbsoluteUrl
                        ? void 0
                        : parsedAbsoluteUrl.pathname) && void 0 !== symlinkTpl
                ? symlinkTpl
                : '') +
            (null !==
                (permsTpl =
                    null == parsedAbsoluteUrl
                        ? void 0
                        : parsedAbsoluteUrl.search) && void 0 !== permsTpl
                ? permsTpl
                : '');
        var O =
            (null !==
                (firstSeparator =
                    null == parsedAbsoluteUrl
                        ? void 0
                        : parsedAbsoluteUrl.pathname) &&
            void 0 !== firstSeparator
                ? firstSeparator
                : '') +
            encodeURIComponent(
                null !==
                    (peerData =
                        null == parsedAbsoluteUrl
                            ? void 0
                            : parsedAbsoluteUrl.search) && void 0 !== peerData
                    ? peerData
                    : ''
            );
        var exportedP1 = Object(newRgbaColor.a)(constraints.b);
        var reciper = Object(newRgbaColor.a)(ff00cc.b);
        var force =
            exportedP1.getValue() === constraints.a.optional ||
            reciper.getValue() === ff00cc.a.optional;
        var forEachResult = function () {
            callback(
                Object(router.replace)($scope.d.signIn + '?redirect=' + O)
            );
        };
        var doRecycle = Object(root.useCallback)(function () {
            callback(Object(router.replace)($scope.d.terms));
        }, []);
        var toolbarHandler = Object(root.useCallback)(function () {
            callback(Object(router.replace)($scope.d.privacy));
        }, []);
        var wrap = function (value) {
            callback(Object(router.goBack)());
            if ('continue' === value) {
                Object(curves.g)(
                    q.j,
                    Object(ast.e)(
                        Object(originalB.c)(),
                        CallConstant.DialogType.REGISTRATION,
                        'continue_as_guest',
                        CallConstant.DialogAction.SHOW
                    )
                );
            } else {
                if ('close' === value) {
                    Object(curves.g)(
                        q.j,
                        Object(ast.e)(
                            Object(originalB.c)(),
                            CallConstant.DialogType.REGISTRATION,
                            '',
                            CallConstant.DialogAction.DISMISS_DELIBERATE
                        )
                    );
                }
            }
        };
        var setActiveSlide = Object(root.useCallback)(
            function () {
                return wrap('continue');
            },
            [wrap]
        );
        var updateRecStateUninit = Object(root.useCallback)(
            function () {
                return wrap('close');
            },
            [wrap]
        );
        var matrixTransformSVG = function () {
            BaseDao.a.save(options.COOKIE_REDIRECT_URL, localDictionaryValues, {
                maxAge: 300,
            });
        };
        Object(root.useEffect)(
            function () {
                if (isOpen) {
                    Object(curves.g)(
                        q.j,
                        Object(ast.e)(
                            Object(originalB.c)(),
                            CallConstant.DialogType.REGISTRATION,
                            '',
                            CallConstant.DialogAction.SHOW
                        )
                    );
                    router.setRouteLeaveHook(
                        routes[routes.length - 1],
                        function () {
                            callback(
                                Object(d.w)({
                                    isOpen: false,
                                })
                            );
                        }
                    );
                }
            },
            [isOpen]
        );
        var ui = Object(root.useRef)();
        var artistTrack = Object(root.useCallback)(function () {
            callback(
                Object(d.w)({
                    isOpen: false,
                })
            );
        }, []);
        Object(root.useEffect)(
            function () {
                return (
                    isOpen &&
                        (callback(
                            Object(router.push)(
                                Object(instance.__assign)(
                                    Object(instance.__assign)(
                                        {},
                                        parsedAbsoluteUrl
                                    ),
                                    {
                                        state: {
                                            registrationPrompt: true,
                                        },
                                    }
                                )
                            )
                        ),
                        (ui.current = Object(position.c)(window, 'popstate')),
                        Object(position.a)(window, 'popstate', artistTrack)),
                    function () {
                        var _ref;
                        if (!isOpen) {
                            Object(position.k)(window, 'popstate', artistTrack);
                            if (
                                !(
                                    null === (_ref = ui.current) ||
                                    void 0 === _ref
                                )
                            ) {
                                _ref.restore();
                            }
                        }
                    }
                );
            },
            [isOpen]
        );
        var App = Object(root.useRef)();
        var GET_AUTH_URL_TIMEOUT = Object(root.useCallback)(
            function (event) {
                event.stopImmediatePropagation();
                if (event.keyCode === Client.r.escape) {
                    updateRecStateUninit();
                }
            },
            [Client.r.escape, wrap]
        );
        return (
            Object(root.useEffect)(
                function () {
                    return (
                        isOpen &&
                            ((App.current = Object(position.c)(
                                window,
                                'keydown'
                            )),
                            Object(position.a)(
                                window,
                                'keydown',
                                GET_AUTH_URL_TIMEOUT
                            )),
                        function () {
                            var _ref;
                            if (!isOpen) {
                                Object(position.k)(
                                    window,
                                    'keydown',
                                    GET_AUTH_URL_TIMEOUT
                                );
                                if (
                                    !(
                                        null === (_ref = App.current) ||
                                        void 0 === _ref
                                    )
                                ) {
                                    _ref.restore();
                                }
                            }
                        }
                    );
                },
                [isOpen]
            ),
            row.a.createElement(
                link,
                {
                    isOpen: isOpen,
                    isCloseOnEscape: false,
                    onClose: onClose,
                    onClickOverlay: updateRecStateUninit,
                },
                row.a.createElement(
                    'div',
                    {
                        className: resolve()(
                            self.a.prompt,
                            ((resultData = {}),
                            (resultData[self.a.isMobile] = title),
                            resultData)
                        ),
                    },
                    row.a.createElement(
                        'button',
                        {
                            className: self.a.close,
                            onClick: updateRecStateUninit,
                        },
                        row.a.createElement(NgReactGridShowPerPage, {
                            fill: 'white',
                            width: '20',
                            height: '20',
                        })
                    ),
                    force
                        ? row.a.createElement(
                              'div',
                              {
                                  className: self.a.intro,
                              },
                              row.a.createElement(
                                  'div',
                                  null,
                                  row.a.createElement(
                                      'h1',
                                      null,
                                      assert.formatMessage(shape.introTitle),
                                      row.a.createElement(
                                          'span',
                                          null,
                                          assert.formatMessage(shape.free)
                                      )
                                  ),
                                  row.a.createElement(
                                      'ul',
                                      null,
                                      row.a.createElement(
                                          'li',
                                          null,
                                          row.a.createElement(
                                              'div',
                                              null,
                                              row.a.createElement(
                                                  FormioElement,
                                                  {
                                                      width: '20',
                                                      height: '20',
                                                  }
                                              )
                                          ),
                                          row.a.createElement(
                                              'h2',
                                              null,
                                              assert.formatMessage(
                                                  shape.feature1
                                              )
                                          ),
                                          row.a.createElement(
                                              'p',
                                              null,
                                              assert.formatMessage(shape.desc1)
                                          )
                                      ),
                                      row.a.createElement(
                                          'li',
                                          null,
                                          row.a.createElement(
                                              'div',
                                              null,
                                              row.a.createElement(
                                                  StandardText,
                                                  {
                                                      width: '17',
                                                      height: '18',
                                                  }
                                              )
                                          ),
                                          row.a.createElement(
                                              'h2',
                                              null,
                                              assert.formatMessage(
                                                  shape.feature2
                                              )
                                          ),
                                          row.a.createElement(
                                              'p',
                                              null,
                                              assert.formatMessage(shape.desc2)
                                          )
                                      ),
                                      row.a.createElement(
                                          'li',
                                          null,
                                          row.a.createElement(
                                              'div',
                                              null,
                                              row.a.createElement(
                                                  SimpleBinding,
                                                  {
                                                      width: '18',
                                                      height: '19',
                                                  }
                                              )
                                          ),
                                          row.a.createElement(
                                              'h2',
                                              null,
                                              assert.formatMessage(
                                                  shape.feature3
                                              )
                                          ),
                                          row.a.createElement(
                                              'p',
                                              null,
                                              assert.formatMessage(shape.desc3)
                                          )
                                      )
                                  )
                              )
                          )
                        : null,
                    row.a.createElement(
                        'div',
                        {
                            className: self.a.form,
                        },
                        title || force
                            ? null
                            : row.a.createElement(
                                  root.Fragment,
                                  null,
                                  row.a.createElement(_suggestItem2.a, {
                                      className: self.a.logo,
                                  }),
                                  row.a.createElement(
                                      'h1',
                                      null,
                                      assert.formatMessage(shape.title)
                                  )
                              ),
                        title
                            ? row.a.createElement(
                                  'h1',
                                  null,
                                  assert.formatMessage(
                                      force ? shape.introTitle : shape.title
                                  )
                              )
                            : null,
                        row.a.createElement(
                            'p',
                            null,
                            assert.formatMessage(shape.desc, {
                                linebreak: function () {
                                    return row.a.createElement('br', null);
                                },
                            })
                        ),
                        row.a.createElement(
                            'div',
                            {
                                className: self.a.sso,
                            },
                            row.a.createElement(deferredHash.b, {
                                formType: deferredHash.a.ACTIVATE,
                                facebookClass: self.a.button,
                                googleClass: self.a.button,
                                facebookOnClick: function (event) {
                                    event.preventDefault();
                                    matrixTransformSVG();
                                    window.location.href =
                                        '/oz/auth/facebook?formType=ACTIVATE&coppa=1';
                                },
                                googleOnClick: function (event) {
                                    event.preventDefault();
                                    matrixTransformSVG();
                                    callback(
                                        Object(pt.h)(localDictionaryValues)
                                    );
                                },
                            })
                        ),
                        row.a.createElement(
                            SignupModal.a,
                            {
                                icon: row.a.createElement(_suggestList2.a, {
                                    className: self.a.mailIcon,
                                }),
                                color: 'primary',
                                className: self.a.button,
                                onClick: function () {
                                    callback(
                                        Object(router.replace)(
                                            $scope.d.register + '?redirect=' + O
                                        )
                                    );
                                },
                            },
                            assert.formatMessage(shape.register)
                        ),
                        row.a.createElement(
                            'div',
                            {
                                className: self.a.continueOrSignIn,
                            },
                            row.a.createElement(
                                'div',
                                {
                                    className: self.a.ownedAccount,
                                },
                                assert.formatMessage(
                                    shape.ownedAccountMessage,
                                    {
                                        signInLink: function (num) {
                                            var n = num[0];
                                            return row.a.createElement(
                                                'span',
                                                {
                                                    className: self.a.link,
                                                    onClick: forEachResult,
                                                },
                                                n
                                            );
                                        },
                                    }
                                )
                            ),
                            force
                                ? row.a.createElement(
                                      SignupModal.a,
                                      {
                                          className: resolve()(
                                              self.a.button,
                                              self.a.skip
                                          ),
                                          onClick: setActiveSlide,
                                      },
                                      assert.formatMessage(
                                          shape.continueAsGuest
                                      )
                                  )
                                : null
                        ),
                        title
                            ? row.a.createElement(
                                  'div',
                                  {
                                      className: self.a.tip,
                                  },
                                  assert.formatMessage(shape.termsAgreement, {
                                      termsLink: function (boardManager) {
                                          var commentNodes = boardManager[0];
                                          return row.a.createElement(
                                              'span',
                                              {
                                                  className: self.a.link,
                                                  onClick: doRecycle,
                                              },
                                              commentNodes
                                          );
                                      },
                                      privacyLink: function (boardManager) {
                                          var commentNodes = boardManager[0];
                                          return row.a.createElement(
                                              'span',
                                              {
                                                  className: self.a.link,
                                                  onClick: toolbarHandler,
                                              },
                                              commentNodes
                                          );
                                      },
                                      linebreak: function () {
                                          return row.a.createElement(
                                              'br',
                                              null
                                          );
                                      },
                                  })
                              )
                            : null
                    ),
                    force
                        ? null
                        : row.a.createElement(
                              'div',
                              {
                                  className: self.a.promotion,
                              },
                              row.a.createElement(render, null)
                          )
                )
            )
        );
    });
    var ShapeViewer_1 = require(1511);
    var load = function (node) {
        var firstSeparator;
        var peerData;
        var clazz = node.className;
        var reBase = node.onClick;
        var c = node.children;
        var nodeType = Object(instance.__rest)(node, [
            'className',
            'onClick',
            'children',
        ]);
        var setPreferedEditor = Object(m2.e)();
        var parsedAbsoluteUrl = Object(m2.f)(function (state) {
            return state.routing.locationBeforeTransitions;
        }, m2.d);
        var p =
            (null !==
                (firstSeparator =
                    null == parsedAbsoluteUrl
                        ? void 0
                        : parsedAbsoluteUrl.pathname) &&
            void 0 !== firstSeparator
                ? firstSeparator
                : '') +
            encodeURIComponent(
                null !==
                    (peerData =
                        null == parsedAbsoluteUrl
                            ? void 0
                            : parsedAbsoluteUrl.search) && void 0 !== peerData
                    ? peerData
                    : ''
            );
        var f = Object(root.useCallback)(
            function () {
                if (reBase) {
                    reBase();
                }
                setPreferedEditor(
                    Object(router.push)($scope.d.register + '?redirect=' + p)
                );
            },
            [setPreferedEditor, reBase, p]
        );
        return row.a.createElement(
            SignupModal.a,
            createElement()(
                {
                    color: 'primary',
                    className: clazz,
                    onClick: f,
                },
                nodeType
            ),
            c
        );
    };
    var s = require(280);
    var o = require.n(s);
    var comp = Object(descriptor.a)({
        title: {
            defaultMessage: 'Be the First to Know',
            id: 'src/web/components/RemindModal/RemindModal:title',
        },
        desc: {
            defaultMessage:
                'We\u2019ll let you know when {title} and other new hits arrive.',
            id: 'src/web/components/RemindModal/RemindModal:desc',
        },
        or: {
            defaultMessage: 'OR',
            id: 'src/web/components/RemindModal/RemindModal:or',
        },
        register: {
            defaultMessage: 'Register with Email',
            id: 'src/web/components/RemindModal/RemindModal:register',
        },
    });
    var create = function () {
        var test = Object(pkg.a)();
        var checkContentChanges = Object(m2.e)();
        var self = Object(m2.f)(function (n) {
            return n.ui.remindModal;
        }, m2.d);
        var isOpen = self.isOpen;
        var actionTitle = self.title;
        var _oldStartWalking = self.onLogin;
        var updateRecStateUninit = Object(root.useCallback)(
            function () {
                checkContentChanges(
                    Object(d.x)({
                        isOpen: false,
                    })
                );
            },
            [checkContentChanges]
        );
        var sanedircontents = Object(root.useCallback)(
            function () {
                if (_oldStartWalking) {
                    _oldStartWalking();
                }
            },
            [_oldStartWalking]
        );
        var onPlusClick = Object(root.useCallback)(
            function () {
                sanedircontents();
                updateRecStateUninit();
            },
            [sanedircontents, updateRecStateUninit]
        );
        return row.a.createElement(
            link,
            {
                isOpen: isOpen,
                isCloseOnEscape: false,
                onClickOverlay: updateRecStateUninit,
            },
            row.a.createElement(
                'div',
                {
                    className: o.a.modal,
                },
                row.a.createElement(
                    'button',
                    {
                        className: o.a.close,
                        onClick: updateRecStateUninit,
                    },
                    row.a.createElement(ShapeViewer_1.a, {
                        fill: 'white',
                        width: '20',
                        height: '20',
                    })
                ),
                row.a.createElement(
                    'div',
                    null,
                    row.a.createElement(
                        'h1',
                        null,
                        test.formatMessage(comp.title)
                    ),
                    row.a.createElement(
                        'p',
                        null,
                        test.formatMessage(comp.desc, {
                            title: actionTitle,
                        })
                    ),
                    row.a.createElement(deferredHash.b, {
                        formType: deferredHash.a.ACTIVATE,
                        facebookClass: o.a.button,
                        googleClass: o.a.button,
                        buttonOnClick: sanedircontents,
                    }),
                    row.a.createElement(
                        'div',
                        {
                            className: o.a.divider,
                        },
                        test.formatMessage(comp.or)
                    ),
                    row.a.createElement(
                        load,
                        {
                            icon: row.a.createElement(_suggestList2.a, {
                                className: o.a.mailIcon,
                            }),
                            className: o.a.button,
                            onClick: onPlusClick,
                        },
                        test.formatMessage(comp.register)
                    )
                )
            )
        );
    };
    var normal = require(12);
    var cb = require.n(normal);
    var __WEBPACK_IMPORTED_MODULE_5__material_checkboxes_html__ = require(37);
    var Function = require.n(
        __WEBPACK_IMPORTED_MODULE_5__material_checkboxes_html__
    );
    var loaders = require(33);
    var apply = require.n(loaders);
    var warningReset = require(34);
    var r = require.n(warningReset);
    var sequence = require(28);
    var concat = require.n(sequence);
    var style = require(38);
    var match = require.n(style);
    var sha512 = require(205);
    var hash = require.n(sha512);
    var settings = require(871);
    var genWaveBrick = require(855);
    var through = require(856);
    var args = require(41);
    var _events = require(219);
    var Header = function (props) {
        return row.a.createElement(
            ShapeMaker_1.a,
            createElement()(
                {
                    viewBox: '0 0 13 13',
                },
                props
            ),
            row.a.createElement('path', {
                fill: 'currentColor',
                fillRule: 'evenodd',
                d: 'M6.5 5.793l-2.12-2.12-.708.706 2.12 2.12-2.12 2.12.707.708 2.12-2.12 2.12 2.12.708-.707-2.12-2.12 2.12-2.12-.707-.708-2.12 2.12zM7 13c-4.09 0-7-2.91-7-6 0-4.09 2.91-7 7-7 3.09 0 6 2.91 6 7 0 3.09-2.91 6-6 6z',
            })
        );
    };
    var AddTodo = function (props) {
        return row.a.createElement(
            ShapeMaker_1.a,
            createElement()(
                {
                    viewBox: '0 0 18.07 18.07',
                },
                props
            ),
            row.a.createElement('path', {
                fill: 'currentColor',
                d: 'M7.5,13A5.5,5.5,0,1,0,2,7.5,5.5,5.5,0,0,0,7.5,13Zm4.55.46A7.5,7.5,0,1,1,13.46,12l4.31,4.31a1,1,0,1,1-1.41,1.41Z',
            })
        );
    };
    var __WEBPACK_IMPORTED_MODULE_5__foundation_tabs__ = require(378);
    var mapsLayout = require.n(__WEBPACK_IMPORTED_MODULE_5__foundation_tabs__);
    var currentSearch = Object(descriptor.a)({
        search: {
            defaultMessage: 'Search',
            id: 'src/common/components/SearchBox/SearchBox:search',
        },
    });
    var _maskLayer = (function (assertions) {
        function component(t) {
            var self = assertions.call(this, t) || this;
            return (
                (self.searchInputRef = Object(root.createRef)()),
                (self.closeTimeout = 0),
                (self.moveCursorToEnd = function (input) {
                    if ('number' == typeof input.selectionStart) {
                        input.focus();
                        input.selectionStart = input.selectionEnd =
                            input.value.length;
                    }
                }),
                (self.clearAndExit = function () {
                    var context = self.props;
                    var tokenWriter = context.dispatch;
                    var key = context.fromPath;
                    var url = void 0 === key ? $scope.d.landing : key;
                    tokenWriter(Object(_events.a)());
                    self.context.router.push(url);
                    self.setState({
                        keyword: '',
                    });
                }),
                (self.setCustomRequiredMessage = function (event) {
                    if (self.props.customRequiredMessage) {
                        event.target.setCustomValidity(
                            self.props.customRequiredMessage
                        );
                    }
                }),
                (self.debouncedSearch = call()(self.search, 500, {
                    leading: false,
                    trailing: true,
                })),
                (self.queryLimit = 64),
                (self.state = {
                    keyword: t.initialKeyword || '',
                    isSearchPage: 0 === t.path.indexOf('' + $scope.d.search),
                    initialKeyword: t.initialKeyword,
                }),
                (self.onChange = self.onChange.bind(self)),
                (self.onSubmit = self.onSubmit.bind(self)),
                (self.search = self.search.bind(self)),
                self
            );
        }
        return (
            Object(instance.__extends)(component, assertions),
            (component.getDerivedStateFromProps = function (p, m) {
                var str = p.path;
                var value = p.initialKeyword;
                var a = m.isSearchPage;
                var lastValue = m.initialKeyword;
                var b = str && 0 === str.indexOf('' + $scope.d.search);
                var c = {};
                return (
                    lastValue !== value &&
                        (c = {
                            keyword: value,
                            initialKeyword: value,
                        }),
                    a !== b &&
                        ((c = Object(instance.__assign)(
                            Object(instance.__assign)({}, c),
                            {
                                isSearchPage: b,
                            }
                        )),
                        a &&
                            !b &&
                            (c = Object(instance.__assign)(
                                Object(instance.__assign)({}, c),
                                {
                                    keyword: '',
                                }
                            ))),
                    c
                );
            }),
            (component.prototype.componentDidMount = function () {
                if (this.searchInputRef.current && this.state.isSearchPage) {
                    this.moveCursorToEnd(this.searchInputRef.current);
                }
            }),
            (component.prototype.onChange = function (event) {
                if (this.props.customRequiredMessage) {
                    event.target.setCustomValidity('');
                }
                clearTimeout(this.closeTimeout);
                var keyword = event.target.value || '';
                if (keyword.trim().length > this.queryLimit) {
                    keyword = keyword.substring(0, this.queryLimit);
                }
                if (!(this.state.keyword === keyword || this.props.isMobile)) {
                    this.debouncedSearch(keyword);
                }
                this.setState({
                    keyword: keyword,
                });
            }),
            (component.prototype.onSubmit = function (event) {
                var current;
                event.preventDefault();
                if (this.props.isMobile) {
                    this.search(this.state.keyword);
                    if (
                        !(
                            null === (current = this.searchInputRef.current) ||
                            void 0 === current
                        )
                    ) {
                        current.blur();
                    }
                    this.props.dispatch(Object(d.d)());
                }
            }),
            (component.prototype.search = function (i) {
                var props = this.props;
                var dispatch = props.dispatch;
                var val = props.path;
                var json = void 0 === val ? '' : val;
                var context = encodeURIComponent(i);
                if (0 !== i.trim().length) {
                    dispatch(Object(_events.e)(json));
                    if (this.state.isSearchPage) {
                        this.context.router.replace(
                            $scope.d.search + '/' + context
                        );
                    } else {
                        this.context.router.push(
                            $scope.d.search + '/' + context
                        );
                    }
                } else {
                    this.clearAndExit();
                }
            }),
            (component.prototype.render = function () {
                var e;
                var _props = this.props;
                var width = _props.cls;
                var fluid = _props.intl;
                var micro =
                    _props.placeholder ||
                    fluid.formatMessage(currentSearch.search);
                var varKind = this.state.keyword;
                var source = !!varKind;
                var eventWidthCurrent = resolve()(
                    mapsLayout.a.searchContainer,
                    width
                );
                var valueClassName = resolve()(
                    mapsLayout.a.clearIcon,
                    (((e = {})[mapsLayout.a.show] = source), e)
                );
                return row.a.createElement(
                    'section',
                    {
                        className: eventWidthCurrent,
                    },
                    row.a.createElement(AddTodo, {
                        className: mapsLayout.a.searchIcon,
                    }),
                    row.a.createElement(
                        'form',
                        {
                            onSubmit: this.onSubmit,
                        },
                        row.a.createElement('input', {
                            className: mapsLayout.a.textInput,
                            type: 'search',
                            ref: this.searchInputRef,
                            placeholder: micro,
                            value: varKind,
                            onChange: this.onChange,
                            required: true,
                            onInvalid: this.setCustomRequiredMessage,
                        })
                    ),
                    row.a.createElement(Header, {
                        className: valueClassName,
                        onClick: this.clearAndExit,
                    })
                );
            }),
            (component.contextTypes = {
                router: _react.a.object.isRequired,
            }),
            component
        );
    })(root.Component);
    var events;
    var AnimatedIcon = Object(m2.b)(function (state) {
        var top;
        var request = state.search;
        var routing = state.routing;
        var self = state.ui;
        var loc =
            null !==
                (top =
                    null == routing
                        ? void 0
                        : routing.locationBeforeTransitions) && void 0 !== top
                ? top
                : {};
        var isMobile = self.isMobile;
        return {
            initialKeyword: request.key,
            fromPath: request.fromPath,
            path: loc.pathname || '',
            isMobile: isMobile,
        };
    })(Object(radio_runway_names.c)(_maskLayer));
    var inner = function (data) {
        return row.a.createElement(
            ShapeMaker_1.a,
            data,
            row.a.createElement('path', {
                d: 'M20.997 10.978l-3.713-3.685a1 1 0 00-1.415 0c-.391.391-.363 1.024.028 1.415L18.187 11H10a1 1 0 000 2h8.187l-2.294 2.292a1 1 0 101.415 1.415l3.697-3.697c.651-.651.672-1.353-.008-2.032z',
                fill: 'currentColor',
            }),
            row.a.createElement('path', {
                d: 'M13 15a1 1 0 00-1 1v.831c0 1.401-.166 2.062-.632 2.529-.466.467-1.154.64-2.537.64h-.662c-1.383 0-2.071-.173-2.541-.644C5.17 18.903 5 18.219 5 16.831V7.153c0-1.371.17-2.05.632-2.507C6.104 4.176 6.787 4 8.154 4h.677c1.378 0 2.067.174 2.537.64.466.466.632 1.13.632 2.537V8a1 1 0 102 0v-.823c0-1.323-.094-2.828-1.221-3.954C11.695 2.148 10.241 2 8.831 2h-.677c-1.404 0-2.853.149-3.933 1.229C3.094 4.345 3 5.84 3 7.153v9.678c0 1.325.094 2.832 1.217 3.943C5.348 21.905 6.85 22 8.169 22h.662c1.319 0 2.821-.095 3.951-1.226C13.906 19.651 14 18.15 14 16.831V16a1 1 0 00-1-1z',
                fill: 'currentColor',
            })
        );
    };
    var moduleToRemove = require(81);
    var frontEndModuleConfig = require(17);
    var inColl = require(125);
    var __WEBPACK_IMPORTED_MODULE_14_date_fns_set_hours__ = require(40);
    var moveTo = require.n(__WEBPACK_IMPORTED_MODULE_14_date_fns_set_hours__);
    var jsonfn = require(449);
    var Map = (function () {
        function init(media, done) {
            var $ = this;
            if (
                ((this.matches = false),
                (this.active = false),
                'undefined' == typeof window)
            ) {
                throw new Error('Please use this under browser env.');
            }
            if ('function' != typeof window.matchMedia) {
                throw new Error(
                    "Your current browser didn't support `window.matchMedia`"
                );
            }
            this.active = true;
            this.mediaQueryList = window.matchMedia(media);
            this.subscription = function (e) {
                if ($.mediaQueryList) {
                    $.matches = $.mediaQueryList.matches;
                }
                if ($.active) {
                    done(e);
                }
            };
            if (this.mediaQueryList) {
                this.mediaQueryList.addListener(this.subscription);
                this.matches = this.mediaQueryList.matches;
            }
        }
        return (
            (init.prototype.flush = function () {
                this.active = false;
                if (this.mediaQueryList) {
                    this.mediaQueryList.removeListener(this.subscription);
                }
            }),
            init
        );
    })();
    var Tip = (function (super$0) {
        function Connect() {
            return (null !== super$0 && super$0.apply(this, arguments)) || this;
        }
        return (
            Object(instance.__extends)(Connect, super$0),
            (Connect.prototype.componentDidMount = function () {
                var data = this.props.query;
                this.mediaQueryListener = new Map(
                    data,
                    this.handleMediaQueryChange
                );
                this.updateState();
            }),
            (Connect.prototype.componentWillUnmount = function () {
                if (this.mediaQueryListener) {
                    this.mediaQueryListener.flush();
                }
            }),
            (Connect.prototype.render = function () {
                var callback = this.props.children;
                return 'function' == typeof callback
                    ? callback(this.state)
                    : null;
            }),
            (Connect.prototype.handleMediaQueryChange = function () {
                this.updateState();
            }),
            (Connect.prototype.updateState = function () {
                var remote = this;
                if (this.mediaQueryListener) {
                    var matches = this.mediaQueryListener.matches;
                    this.setState(
                        {
                            matches: matches,
                        },
                        function () {
                            var callback = remote.props.onChange;
                            if ('function' == typeof callback) {
                                callback(matches);
                            }
                        }
                    );
                }
            }),
            Object(instance.__decorate)(
                [
                    jsonfn.boundMethod,
                    Object(instance.__metadata)('design:type', Function),
                    Object(instance.__metadata)('design:paramtypes', []),
                    Object(instance.__metadata)('design:returntype', void 0),
                ],
                Connect.prototype,
                'handleMediaQueryChange',
                null
            ),
            Connect
        );
    })(root.Component);
    !(function (opts) {
        opts.xs = 'xs';
        opts.sm = 'sm';
        opts.sMd = 'sMd';
        opts.md = 'md';
        opts.lg = 'lg';
        opts.xl = 'xl';
        opts.xxl = 'xxl';
    })(events || (events = {}));
    var Redirect;
    var _a;
    var ReactRpg;
    var gasSum;
    var obj;
    var _pivotCondition;
    var Route = (function (assertions) {
        function t(t) {
            var ref;
            var self = assertions.call(this, t) || this;
            var type;
            for (type in ((self.handlers = {}), events)) {
                if (events[type]) {
                    var method = events[type];
                    self.handlers[method] = self.handleMediaQueryChange(method);
                    self.state = Object(instance.__assign)(
                        Object(instance.__assign)({}, self.state),
                        (((ref = {})[method] = false), ref)
                    );
                }
            }
            return self;
        }
        return (
            Object(instance.__extends)(t, assertions),
            (t.prototype.render = function () {
                var callback = this.props.children;
                return row.a.createElement(
                    root.Fragment,
                    null,
                    row.a.createElement(Tip, {
                        onChange: this.handlers.xs,
                        query: '(max-width: 374px)',
                    }),
                    row.a.createElement(Tip, {
                        onChange: this.handlers.sm,
                        query: '(min-width: 375px) and (max-width: 539px)',
                    }),
                    row.a.createElement(Tip, {
                        onChange: this.handlers.sMd,
                        query: '(min-width: 540px) and (max-width: 767px)',
                    }),
                    row.a.createElement(Tip, {
                        onChange: this.handlers.md,
                        query: '(min-width: 768px) and (max-width: 959px)',
                    }),
                    row.a.createElement(Tip, {
                        onChange: this.handlers.lg,
                        query: '(min-width: 960px) and (max-width: 1169px)',
                    }),
                    row.a.createElement(Tip, {
                        onChange: this.handlers.xl,
                        query: '(min-width: 1170px) and (max-width: 1439px)',
                    }),
                    row.a.createElement(Tip, {
                        onChange: this.handlers.xxl,
                        query: '(min-width: 1440px)',
                    }),
                    'function' == typeof callback ? callback(this.state) : null
                );
            }),
            (t.prototype.handleMediaQueryChange = function (m) {
                var boilerStateMachine = this;
                return function (v) {
                    var _component2;
                    if (v) {
                        var artistTrack = moveTo()(events).reduce(function (
                            mmCoreSplitViewBlock,
                            name
                        ) {
                            var base;
                            return Object(instance.__assign)(
                                Object(instance.__assign)(
                                    {},
                                    mmCoreSplitViewBlock
                                ),
                                (((base = {})[name] = name === m && v), base)
                            );
                        },
                        {});
                        boilerStateMachine.setState(
                            Object(instance.__assign)(
                                Object(instance.__assign)({}, artistTrack),
                                (((_component2 = {})[m] = v), _component2)
                            )
                        );
                    }
                };
            }),
            Object(instance.__decorate)(
                [
                    jsonfn.boundMethod,
                    Object(instance.__metadata)('design:type', Function),
                    Object(instance.__metadata)('design:paramtypes', [String]),
                    Object(instance.__metadata)('design:returntype', void 0),
                ],
                t.prototype,
                'handleMediaQueryChange',
                null
            ),
            t
        );
    })(root.Component);
    var doc_rect = require(155);
    var clonedI = require(201);
    var command = Object(descriptor.a)({
        exitTitle: {
            defaultMessage: 'Exit Kids Mode',
            id: 'src/web/components/ExitKidsModeWrapper/ExitKidsModeWrapper:exitTitle',
        },
        exitDescription: {
            defaultMessage:
                "Are you sure you want to leave Tubi Kids? If you exit you'll see titles rated PG-13 and above",
            id: 'src/web/components/ExitKidsModeWrapper/ExitKidsModeWrapper:exitDescription',
        },
        exit: {
            defaultMessage: 'Exit Kids',
            id: 'src/web/components/ExitKidsModeWrapper/ExitKidsModeWrapper:exit',
        },
        close: {
            defaultMessage: 'Stay Here',
            id: 'src/web/components/ExitKidsModeWrapper/ExitKidsModeWrapper:close',
        },
        exitParentalDescription: {
            defaultMessage:
                'To exit Kids Mode please update your parental controls in account settings',
            id: 'src/web/components/ExitKidsModeWrapper/ExitKidsModeWrapper:exitParentalDescription',
        },
        goToSettings: {
            defaultMessage: 'Go to Settings',
            id: 'src/web/components/ExitKidsModeWrapper/ExitKidsModeWrapper:goToSettings',
        },
        cancel: {
            defaultMessage: 'Cancel',
            id: 'src/web/components/ExitKidsModeWrapper/ExitKidsModeWrapper:cancel',
        },
    });
    var tex = Object(m2.b)(function (archive) {
        return {
            parentalRating: archive.userSettings.parentalRating,
        };
    })(function (_ref) {
        var atoms = _ref.children;
        var dispatch = _ref.dispatch;
        var element = _ref.parentalRating;
        var artistTrack = Object(pkg.a)();
        return atoms(function (event) {
            event.preventDefault();
            dispatch(
                Object(d.a)(
                    (function (i18nUtil, suppressDisabledCheck, dispatch) {
                        var isCopy = suppressDisabledCheck >= doc_rect.b.TEENS;
                        var bribe_close_button = [
                            {
                                title: i18nUtil.formatMessage(command.exit),
                                primary: true,
                                action: function () {
                                    var remoteAddonFilename =
                                        CallConstant.DialogType.EXIT_KIDS_MODE;
                                    var addonMainFile = Object(ast.e)(
                                        Object(originalB.c)(),
                                        remoteAddonFilename
                                    );
                                    if (addonMainFile) {
                                        Object(curves.g)(q.j, addonMainFile);
                                    }
                                    Object(clonedI.b)(false);
                                    Object(clonedI.a)();
                                },
                            },
                            {
                                title: i18nUtil.formatMessage(command.close),
                            },
                        ];
                        var nodes = [
                            {
                                title: i18nUtil.formatMessage(
                                    command.goToSettings
                                ),
                                primary: true,
                                action: function () {
                                    dispatch(
                                        Object(router.push)(
                                            $scope.d.parentalControl
                                        )
                                    );
                                },
                            },
                            {
                                title: i18nUtil.formatMessage(command.cancel),
                            },
                        ];
                        return {
                            title: i18nUtil.formatMessage(command.exitTitle),
                            description: i18nUtil.formatMessage(
                                isCopy
                                    ? command.exitDescription
                                    : command.exitParentalDescription
                            ),
                            status: 'info',
                            autoDismiss: false,
                            buttons: isCopy ? bribe_close_button : nodes,
                        };
                    })(artistTrack, element, dispatch),
                    'exit-kids-prompt'
                )
            );
        });
    });
    var __WEBPACK_IMPORTED_MODULE_18_date_fns_add_hours__ = require(141);
    var __WEBPACK_IMPORTED_MODULE_18_date_fns_add_hours___default = require.n(
        __WEBPACK_IMPORTED_MODULE_18_date_fns_add_hours__
    );
    var __WEBPACK_IMPORTED_MODULE_15_date_fns_set_minutes__ = require(441);
    var __WEBPACK_IMPORTED_MODULE_15_date_fns_set_minutes___default = require.n(
        __WEBPACK_IMPORTED_MODULE_15_date_fns_set_minutes__
    );
    var source = require(114);
    var __WEBPACK_IMPORTED_MODULE_1_jquery__ = require(436);
    var __WEBPACK_IMPORTED_MODULE_1_jquery___default = require.n(
        __WEBPACK_IMPORTED_MODULE_1_jquery__
    );
    var __WEBPACK_IMPORTED_MODULE_17_date_fns_difference_in_minutes__ = require(181);
    var me = require.n(
        __WEBPACK_IMPORTED_MODULE_17_date_fns_difference_in_minutes__
    );
    var special = {
        enter: __WEBPACK_IMPORTED_MODULE_1_jquery___default.a.menuEnter,
        enterActive:
            __WEBPACK_IMPORTED_MODULE_1_jquery___default.a.menuEnterActive,
        exit: __WEBPACK_IMPORTED_MODULE_1_jquery___default.a.menuLeave,
        exitActive:
            __WEBPACK_IMPORTED_MODULE_1_jquery___default.a.menuLeaveActive,
    };
    var react = Object(descriptor.a)({
        newsOnTubi: {
            defaultMessage: 'Live TV',
            id: 'src/web/components/TopNav/LiveNewsMenu/LiveNewsMenu:newsOnTubi',
        },
    });
    var ResultsTableComponent = Object(root.memo)(function (options) {
        var t = options.data;
        var template = options.renderItem;
        var readOnlyFn = options.onLoadMore;
        var more = options.hasMore;
        var classes = options.className;
        var section = Object(root.useRef)(null);
        var resStepValues = Object(root.useState)(false);
        var need_modal = resStepValues[0];
        var d = resStepValues[1];
        Object(root.useEffect)(
            function () {
                d(false);
            },
            [t]
        );
        var onScroll =
            __WEBPACK_IMPORTED_MODULE_15_date_fns_set_minutes___default()(
                function () {
                    var obj = section.current;
                    if (obj && more && !need_modal) {
                        if (
                            obj.scrollHeight -
                                obj.scrollTop -
                                obj.clientHeight <
                            300
                        ) {
                            d(true);
                            readOnlyFn();
                        }
                    }
                },
                1000
            );
        return row.a.createElement(
            'div',
            {
                ref: section,
                onScroll: onScroll,
                className: classes,
            },
            t.map(function (branch_name, index) {
                return template({
                    item: branch_name,
                    index: index,
                });
            })
        );
    });
    var NgReactGridHeader = Object(m2.b)(function (s) {
        var that = s.ui;
        var malakh = that.liveNewsMenuVisible;
        var isMobile = that.isMobile;
        var _this = s.contentMode.linear;
        var $cityElement = _this.containerIdMap;
        var inputNums = _this.containerChildrenIdMap;
        var $numsBox = _this.containerLoadIdMap;
        return {
            containerIdMap: $cityElement,
            containerChildrenIdMap: inputNums,
            listLoaded: _this.listLoaded,
            videos: s.video.byId,
            containerLoadIdMap: $numsBox,
            liveNewsMenuVisible: malakh,
            isMobile: isMobile,
        };
    })(function (_this) {
        var t;
        var h;
        var icons = _this.containerChildrenIdMap;
        var right = _this.containerIdMap;
        var state = _this.containerLoadIdMap;
        var inputNums = _this.listLoaded;
        var options = _this.videos;
        var g = _this.inverse;
        var inConn = _this.liveNewsMenuVisible;
        var off = _this.linkTextClassname;
        var bottom = _this.isMobile;
        var expect = Object(m2.e)();
        var entries =
            __WEBPACK_IMPORTED_MODULE_18_date_fns_add_hours___default()(right);
        var data = Object(root.useState)(true);
        var xml = data[0];
        var callback = data[1];
        var tiledImageBRs = Object(root.useState)(true);
        var tiledImageBR = tiledImageBRs[0];
        var draw = tiledImageBRs[1];
        var e = Object(root.useContext)(source.d);
        Object(root.useEffect)(
            function () {
                var xmlemptyTag = xml && tiledImageBR;
                if (!xmlemptyTag !== inConn) {
                    expect(Object(d.k)(!xmlemptyTag));
                }
            },
            [xml, tiledImageBR]
        );
        Object(root.useEffect)(
            function () {
                if (!bottom) {
                    expect(Object(args.g)());
                }
            },
            [bottom]
        );
        var onMouseLeave = Object(root.useCallback)(function () {
            window.setTimeout(function () {
                draw(true);
            }, 300);
        }, []);
        var EX = Object(root.useCallback)(function () {
            window.setTimeout(function () {
                callback(true);
            }, 300);
        }, []);
        var n = resolve()(
            me.a.liveNewsMenuText,
            off,
            (((t = {})[me.a.inverse] = g),
            (t[me.a.webRefresh] = e.enabledTopNav),
            t)
        );
        var change = Object(root.useCallback)(function (file) {
            if (bottom) {
                window.location.href = Object(c2.f)(file);
            } else {
                var mockCandidateObj = Object(c2.i)({
                    video: file,
                });
                draw(true);
                expect(
                    Object(alias.b)({
                        startX: 0,
                        startY: 0,
                        containerSlug: options.LIVE_NEWS_CONTAINER_ID,
                        contentId: file.id,
                        componentType:
                            frontEndModuleConfig.ANALYTICS_COMPONENTS
                                .containerComponent,
                    })
                );
                expect(Object(router.push)(mockCandidateObj));
            }
        }, []);
        var defaultRenderItem = Object(root.useCallback)(
            function (e) {
                var i = e.item;
                var val = options[i];
                return val
                    ? row.a.createElement(
                          'div',
                          {
                              className: me.a.item,
                              key: i,
                          },
                          row.a.createElement('img', {
                              onClick: function () {
                                  return change(val);
                              },
                              alt: val.title,
                              src: val.landscape_images[0],
                          })
                      )
                    : null;
            },
            [options]
        );
        var next = function () {
            callback(true);
            expect(Object(router.push)($scope.d.live));
            expect(Object(d.d)());
            expect(
                Object(alias.b)({
                    startX: 0,
                    startY: 0,
                    containerSlug: $scope.d.live,
                    componentType:
                        frontEndModuleConfig.ANALYTICS_COMPONENTS
                            .navigationDrawerComponent,
                })
            );
        };
        return bottom
            ? row.a.createElement(
                  'div',
                  {
                      onClick: next,
                      className: n,
                  },
                  row.a.createElement(settings.a, react.newsOnTubi)
              )
            : row.a.createElement(
                  row.a.Fragment,
                  null,
                  row.a.createElement(
                      'div',
                      {
                          onClick: next,
                          className: n,
                          onMouseLeave: EX,
                          onMouseEnter: function () {
                              callback(false);
                          },
                      },
                      row.a.createElement(settings.a, react.newsOnTubi)
                  ),
                  row.a.createElement(
                      Helpers.CSSTransition,
                      {
                          key: 'liveNewsMenu',
                          in: inConn && inputNums,
                          classNames: special,
                          unmountOnExit: true,
                          timeout: 300,
                      },
                      row.a.createElement(
                          'div',
                          {
                              className: resolve()(
                                  me.a.liveNewsMenu,
                                  ((h = {}), (h[me.a.inverse] = g), h)
                              ),
                              onMouseLeave: onMouseLeave,
                              onMouseEnter: function () {
                                  draw(false);
                              },
                          },
                          entries.map(function (item, i) {
                              var t;
                              return row.a.createElement(
                                  row.a.Fragment,
                                  {
                                      key: item.id,
                                  },
                                  row.a.createElement(
                                      'div',
                                      {
                                          className: me.a.row,
                                      },
                                      row.a.createElement(
                                          'div',
                                          {
                                              className: me.a.title,
                                          },
                                          item.title
                                      ),
                                      row.a.createElement(
                                          ResultsTableComponent,
                                          {
                                              className: me.a.itemsContainer,
                                              data: icons[item.id],
                                              renderItem: defaultRenderItem,
                                              onLoadMore: function () {
                                                  return (
                                                      (f = item.id),
                                                      void expect(
                                                          Object(args.h)(
                                                              f,
                                                              null,
                                                              options
                                                                  .CONTENT_MODES
                                                                  .linear
                                                          )
                                                      )
                                                  );
                                                  var f;
                                              },
                                              hasMore: !!(null ===
                                                  (t = state[item.id]) ||
                                              void 0 === t
                                                  ? void 0
                                                  : t.cursor),
                                          }
                                      )
                                  ),
                                  i < entries.length - 1
                                      ? row.a.createElement('div', {
                                            className: me.a.line,
                                        })
                                      : null
                              );
                          }),
                          row.a.createElement('div', {
                              className: me.a.bottomMask,
                          })
                      )
                  )
              );
    });
    var _domAttr = require(668);
    var attr = require.n(_domAttr);
    var menuInfo = Object(descriptor.a)({
        linkText: {
            defaultMessage: 'Tubi Kids',
            id: 'src/web/components/TubiKidsNav/TubiKidsNav:linkText',
        },
    });
    var handleSelect = function (data) {
        var remoteAddonFilename = CallConstant.DialogType.ENTER_KIDS_MODE;
        var addonMainFile = Object(ast.e)(
            Object(originalB.c)(),
            remoteAddonFilename
        );
        if (addonMainFile) {
            Object(curves.g)(q.j, addonMainFile);
        }
        data.preventDefault();
        Object(clonedI.b)(true);
        Object(clonedI.a)();
    };
    var format = function (options) {
        var instrumented;
        var clipboard = Object(pkg.a)();
        var size = options.className;
        var annotationCSSUrl = options.url;
        var title = options.inverse;
        var add_title_to_td = void 0 !== title && title;
        var n = resolve()(
            attr.a.tubiKidsNav,
            size,
            (((instrumented = {})[attr.a.inverse] = add_title_to_td),
            instrumented)
        );
        return row.a.createElement(
            'a',
            {
                href: annotationCSSUrl,
                onClick: handleSelect,
                className: n,
            },
            clipboard.formatMessage(menuInfo.linkText)
        );
    };
    var value = require(56);
    var constraint = require.n(value);
    var __WEBPACK_IMPORTED_MODULE_20_date_fns_min__ = require(39);
    var __WEBPACK_IMPORTED_MODULE_20_date_fns_min___default = require.n(
        __WEBPACK_IMPORTED_MODULE_20_date_fns_min__
    );
    var state =
        ((_a = Redirect =
            (function (f) {
                function Link() {
                    var _Object$getPrototypeO;
                    var _i;
                    var _ref;
                    var joinBy;
                    apply()(this, Link);
                    var length = arguments.length;
                    var args = Array(length);
                    var i = 0;
                    for (; i < length; i++) {
                        args[i] = arguments[i];
                    }
                    return (
                        (_i = _ref =
                            concat()(
                                this,
                                (_Object$getPrototypeO =
                                    Link.__proto__ ||
                                    Function()(Link)).call.apply(
                                    _Object$getPrototypeO,
                                    [this].concat(args)
                                )
                            )),
                        (_ref.handleClick = function (i) {
                            var p = _ref.props;
                            (0, p.handleContainerClick)(i, p.slug);
                        }),
                        (joinBy = _i),
                        concat()(_ref, joinBy)
                    );
                }
                return (
                    match()(Link, f),
                    r()(Link, [
                        {
                            key: 'render',
                            value: function () {
                                var _props3 = this.props;
                                var className = _props3.className;
                                var to = _props3.to;
                                var title = _props3.title;
                                return row.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_20_date_fns_min___default.a,
                                    {
                                        className: className,
                                        to: to,
                                        onClick: this.handleClick,
                                    },
                                    title
                                );
                            },
                        },
                    ]),
                    Link
                );
            })(root.PureComponent)),
        (Redirect.propTypes = {
            handleContainerClick: _react.a.func.isRequired,
            slug: _react.a.string.isRequired,
            to: _react.a.string.isRequired,
            title: _react.a.node.isRequired,
            className: _react.a.string,
        }),
        _a);
    var __WEBPACK_IMPORTED_MODULE_0__foundation_util_box__ = require(203);
    var definedModule = require.n(
        __WEBPACK_IMPORTED_MODULE_0__foundation_util_box__
    );
    var NumberPicker =
        ((gasSum = ReactRpg =
            (function (e) {
                function t() {
                    var _Object$getPrototypeO;
                    var callback;
                    var me;
                    var m_callback;
                    apply()(this, t);
                    var length = arguments.length;
                    var args = Array(length);
                    var i = 0;
                    for (; i < length; i++) {
                        args[i] = arguments[i];
                    }
                    return (
                        (callback = me =
                            concat()(
                                this,
                                (_Object$getPrototypeO =
                                    t.__proto__ || Function()(t)).call.apply(
                                    _Object$getPrototypeO,
                                    [this].concat(args)
                                )
                            )),
                        (me.onContainerClick = function (e, width) {
                            me.props.handleContainerClick(e, width);
                        }),
                        (m_callback = callback),
                        concat()(me, m_callback)
                    );
                }
                return (
                    match()(t, e),
                    r()(t, [
                        {
                            key: 'render',
                            value: function () {
                                var me = this;
                                var that = this.props;
                                var title = that.tag;
                                var key = that.columns;
                                var newElKey = void 0 === key ? 1 : key;
                                var num = that.containers;
                                return row.a.createElement(
                                    'div',
                                    {
                                        className: definedModule.a.tagSection,
                                    },
                                    row.a.createElement(
                                        'div',
                                        {
                                            className:
                                                definedModule.a.menuHeader,
                                        },
                                        title
                                    ),
                                    1 === newElKey
                                        ? row.a.createElement(
                                              'div',
                                              {
                                                  className:
                                                      definedModule.a
                                                          .columnWrap,
                                              },
                                              row.a.createElement(
                                                  'div',
                                                  {
                                                      className:
                                                          definedModule.a
                                                              .containerList,
                                                  },
                                                  num
                                                      .sort()
                                                      .map(function (params) {
                                                          var n = params.id;
                                                          var pTitle =
                                                              params.title;
                                                          var slug =
                                                              params.slug;
                                                          var handleType =
                                                              params.type;
                                                          var id = Object(c2.d)(
                                                              n,
                                                              {
                                                                  type: handleType,
                                                              }
                                                          );
                                                          return row.a.createElement(
                                                              state,
                                                              {
                                                                  key: n,
                                                                  to: id,
                                                                  slug: slug,
                                                                  handleContainerClick:
                                                                      me.onContainerClick,
                                                                  title: pTitle,
                                                                  className:
                                                                      definedModule
                                                                          .a
                                                                          .containerMenuLink,
                                                              }
                                                          );
                                                      })
                                              )
                                          )
                                        : row.a.createElement(
                                              'div',
                                              {
                                                  className:
                                                      definedModule.a
                                                          .columnWrap,
                                              },
                                              row.a.createElement(
                                                  'div',
                                                  {
                                                      className:
                                                          definedModule.a
                                                              .containerList,
                                                  },
                                                  num
                                                      .slice(
                                                          0,
                                                          Math.ceil(
                                                              num.length / 2
                                                          )
                                                      )
                                                      .map(function (params) {
                                                          var n = params.id;
                                                          var pTitle =
                                                              params.title;
                                                          var slug =
                                                              params.slug;
                                                          var handleType =
                                                              params.type;
                                                          var id = Object(c2.d)(
                                                              n,
                                                              {
                                                                  type: handleType,
                                                              }
                                                          );
                                                          return row.a.createElement(
                                                              state,
                                                              {
                                                                  key: n,
                                                                  to: id,
                                                                  slug: slug,
                                                                  handleContainerClick:
                                                                      me.onContainerClick,
                                                                  title: pTitle,
                                                                  className:
                                                                      definedModule
                                                                          .a
                                                                          .containerMenuLink,
                                                              }
                                                          );
                                                      })
                                              ),
                                              row.a.createElement(
                                                  'div',
                                                  {
                                                      className:
                                                          definedModule.a
                                                              .containerList,
                                                  },
                                                  num
                                                      .slice(
                                                          Math.ceil(
                                                              num.length / 2
                                                          ),
                                                          num.length
                                                      )
                                                      .map(function (params) {
                                                          var n = params.id;
                                                          var pTitle =
                                                              params.title;
                                                          var slug =
                                                              params.slug;
                                                          var handleType =
                                                              params.type;
                                                          var id = Object(c2.d)(
                                                              n,
                                                              {
                                                                  type: handleType,
                                                              }
                                                          );
                                                          return row.a.createElement(
                                                              state,
                                                              {
                                                                  key: n,
                                                                  to: id,
                                                                  slug: slug,
                                                                  handleContainerClick:
                                                                      me.onContainerClick,
                                                                  title: pTitle,
                                                                  className:
                                                                      definedModule
                                                                          .a
                                                                          .containerMenuLink,
                                                              }
                                                          );
                                                      })
                                              )
                                          )
                                );
                            },
                        },
                    ]),
                    t
                );
            })(root.Component)),
        (ReactRpg.propTypes = {
            tag: _react.a.string.isRequired,
            columns: _react.a.number,
            containers: _react.a.array.isRequired,
            handleContainerClick: _react.a.func.isRequired,
        }),
        gasSum);
    var item = Object(descriptor.a)({
        popular: {
            defaultMessage: 'Popular',
            id: 'src/web/components/ContainerMenu/ContainerMenu:popular',
        },
        genres: {
            defaultMessage: 'Genres',
            id: 'src/web/components/ContainerMenu/ContainerMenu:genres',
        },
        collections: {
            defaultMessage: 'Collections',
            id: 'src/web/components/ContainerMenu/ContainerMenu:collections',
        },
        channels: {
            defaultMessage: 'Networks',
            id: 'src/web/components/ContainerMenu/ContainerMenu:channels',
        },
        exit: {
            defaultMessage: 'Exit Tubi Kids',
            id: 'src/web/components/ContainerMenu/ContainerMenu:exit',
        },
    });
    var pivotCondition =
        ((_pivotCondition = obj =
            (function (e) {
                function t() {
                    var _Object$getPrototypeO;
                    var deferred;
                    var p;
                    var _connectDeferred;
                    apply()(this, t);
                    var length = arguments.length;
                    var args = Array(length);
                    var i = 0;
                    for (; i < length; i++) {
                        args[i] = arguments[i];
                    }
                    return (
                        (deferred = p =
                            concat()(
                                this,
                                (_Object$getPrototypeO =
                                    t.__proto__ || Function()(t)).call.apply(
                                    _Object$getPrototypeO,
                                    [this].concat(args)
                                )
                            )),
                        (p.handleContainerClick = function (num, width) {
                            p.props.dispatch(
                                Object(alias.b)({
                                    startX: 0,
                                    startY: 0,
                                    containerSlug: width,
                                    componentType:
                                        frontEndModuleConfig
                                            .ANALYTICS_COMPONENTS
                                            .navigationDrawerComponent,
                                })
                            );
                            p.props.hideMenu();
                        }),
                        (_connectDeferred = deferred),
                        concat()(p, _connectDeferred)
                    );
                }
                return (
                    match()(t, e),
                    r()(t, [
                        {
                            key: 'renderSmallLayout',
                            value: function (e) {
                                var linkedsceneitem =
                                    e[options.CONTAINER_GROUPINGS.POPULAR];
                                var areaFields =
                                    e[options.CONTAINER_GROUPINGS.GENRES];
                                var realE =
                                    e[options.CONTAINER_GROUPINGS.COLLECTIONS];
                                var list =
                                    e[options.CONTAINER_GROUPINGS.CHANNELS];
                                var chai = this.props;
                                var expect = chai.isChannelsVisible;
                                var assert = chai.intl;
                                return row.a.createElement(
                                    'div',
                                    {
                                        className: constraint.a.menuWrapper,
                                    },
                                    row.a.createElement(NumberPicker, {
                                        tag: assert.formatMessage(item.popular),
                                        containers: linkedsceneitem,
                                        handleContainerClick:
                                            this.handleContainerClick,
                                    }),
                                    row.a.createElement(NumberPicker, {
                                        tag: assert.formatMessage(item.genres),
                                        containers: areaFields,
                                        handleContainerClick:
                                            this.handleContainerClick,
                                    }),
                                    row.a.createElement(NumberPicker, {
                                        tag: assert.formatMessage(
                                            item.collections
                                        ),
                                        containers: realE,
                                        handleContainerClick:
                                            this.handleContainerClick,
                                    }),
                                    expect &&
                                        row.a.createElement(NumberPicker, {
                                            tag: assert.formatMessage(
                                                item.channels
                                            ),
                                            containers: list,
                                            handleContainerClick:
                                                this.handleContainerClick,
                                        })
                                );
                            },
                        },
                        {
                            key: 'renderMediumLayout',
                            value: function (e) {
                                var linkedsceneitem =
                                    e[options.CONTAINER_GROUPINGS.POPULAR];
                                var areaFields =
                                    e[options.CONTAINER_GROUPINGS.GENRES];
                                var realE =
                                    e[options.CONTAINER_GROUPINGS.COLLECTIONS];
                                var list =
                                    e[options.CONTAINER_GROUPINGS.CHANNELS];
                                var _props = this.props;
                                var footer = _props.isChannelsVisible;
                                var assert = _props.intl;
                                return row.a.createElement(
                                    'div',
                                    {
                                        className: constraint.a.menuWrapper,
                                    },
                                    row.a.createElement(
                                        'div',
                                        {
                                            className: constraint.a.column,
                                        },
                                        row.a.createElement(NumberPicker, {
                                            tag: assert.formatMessage(
                                                item.popular
                                            ),
                                            containers: linkedsceneitem,
                                            handleContainerClick:
                                                this.handleContainerClick,
                                        }),
                                        row.a.createElement(NumberPicker, {
                                            tag: assert.formatMessage(
                                                item.collections
                                            ),
                                            containers: realE,
                                            handleContainerClick:
                                                this.handleContainerClick,
                                        })
                                    ),
                                    row.a.createElement(
                                        'div',
                                        {
                                            className: resolve()(
                                                constraint.a.column,
                                                constraint.a.darkTheme
                                            ),
                                        },
                                        row.a.createElement(NumberPicker, {
                                            tag: assert.formatMessage(
                                                item.genres
                                            ),
                                            containers: areaFields,
                                            handleContainerClick:
                                                this.handleContainerClick,
                                        })
                                    ),
                                    footer &&
                                        row.a.createElement(
                                            'div',
                                            {
                                                className: constraint.a.column,
                                            },
                                            row.a.createElement(NumberPicker, {
                                                tag: assert.formatMessage(
                                                    item.channels
                                                ),
                                                containers: list,
                                                handleContainerClick:
                                                    this.handleContainerClick,
                                            })
                                        )
                                );
                            },
                        },
                        {
                            key: 'renderLargeLayout',
                            value: function (data) {
                                var best =
                                    data[options.CONTAINER_GROUPINGS.POPULAR];
                                var details =
                                    data[options.CONTAINER_GROUPINGS.GENRES];
                                var values =
                                    data[
                                        options.CONTAINER_GROUPINGS.COLLECTIONS
                                    ];
                                var val =
                                    data[options.CONTAINER_GROUPINGS.CHANNELS];
                                var _props = this.props;
                                var footer = _props.isChannelsVisible;
                                var assert = _props.intl;
                                var _listItemHeight =
                                    23 *
                                        Math.max(
                                            best.length,
                                            details.length,
                                            values.length,
                                            val.length
                                        ) +
                                    27 +
                                    42;
                                return row.a.createElement(
                                    'div',
                                    {
                                        className: constraint.a.menuWrapper,
                                        style: {
                                            height: _listItemHeight + 'px',
                                        },
                                    },
                                    row.a.createElement(
                                        'div',
                                        {
                                            className: constraint.a.column,
                                        },
                                        row.a.createElement(NumberPicker, {
                                            tag: assert.formatMessage(
                                                item.popular
                                            ),
                                            containers: best,
                                            handleContainerClick:
                                                this.handleContainerClick,
                                        })
                                    ),
                                    row.a.createElement(
                                        'div',
                                        {
                                            className: resolve()(
                                                constraint.a.column,
                                                constraint.a.darkTheme
                                            ),
                                        },
                                        row.a.createElement(NumberPicker, {
                                            tag: assert.formatMessage(
                                                item.genres
                                            ),
                                            containers: details,
                                            handleContainerClick:
                                                this.handleContainerClick,
                                        })
                                    ),
                                    row.a.createElement(
                                        'div',
                                        {
                                            className: constraint.a.column,
                                        },
                                        row.a.createElement(NumberPicker, {
                                            tag: assert.formatMessage(
                                                item.collections
                                            ),
                                            containers: values,
                                            handleContainerClick:
                                                this.handleContainerClick,
                                        })
                                    ),
                                    footer &&
                                        row.a.createElement(
                                            'div',
                                            {
                                                className: resolve()(
                                                    constraint.a.column,
                                                    constraint.a.darkTheme
                                                ),
                                            },
                                            row.a.createElement(NumberPicker, {
                                                tag: assert.formatMessage(
                                                    item.channels
                                                ),
                                                containers: val,
                                                handleContainerClick:
                                                    this.handleContainerClick,
                                            })
                                        )
                                );
                            },
                        },
                        {
                            key: 'renderExtraLargeLayout',
                            value: function (data) {
                                var best =
                                    data[options.CONTAINER_GROUPINGS.POPULAR];
                                var list =
                                    data[options.CONTAINER_GROUPINGS.GENRES];
                                var values =
                                    data[
                                        options.CONTAINER_GROUPINGS.COLLECTIONS
                                    ];
                                var val =
                                    data[options.CONTAINER_GROUPINGS.CHANNELS];
                                var _listItemHeight =
                                    23 *
                                        Math.max(
                                            best.length,
                                            Math.ceil(list.length / 2),
                                            values.length,
                                            val.length
                                        ) +
                                    27 +
                                    42;
                                var _props = this.props;
                                var footer = _props.isChannelsVisible;
                                var assert = _props.intl;
                                return row.a.createElement(
                                    'div',
                                    {
                                        className: constraint.a.menuWrapper,
                                        style: {
                                            height: _listItemHeight + 'px',
                                        },
                                    },
                                    row.a.createElement(
                                        'div',
                                        {
                                            className: constraint.a.column,
                                        },
                                        row.a.createElement(NumberPicker, {
                                            tag: assert.formatMessage(
                                                item.popular
                                            ),
                                            containers: best,
                                            handleContainerClick:
                                                this.handleContainerClick,
                                        })
                                    ),
                                    row.a.createElement(
                                        'div',
                                        {
                                            className: resolve()(
                                                constraint.a.column,
                                                constraint.a.darkTheme,
                                                constraint.a.doubleColumn
                                            ),
                                        },
                                        row.a.createElement(NumberPicker, {
                                            tag: assert.formatMessage(
                                                item.genres
                                            ),
                                            containers: list,
                                            handleContainerClick:
                                                this.handleContainerClick,
                                            columns: 2,
                                        })
                                    ),
                                    row.a.createElement(
                                        'div',
                                        {
                                            className: constraint.a.column,
                                        },
                                        row.a.createElement(NumberPicker, {
                                            tag: assert.formatMessage(
                                                item.collections
                                            ),
                                            containers: values,
                                            handleContainerClick:
                                                this.handleContainerClick,
                                        })
                                    ),
                                    footer &&
                                        row.a.createElement(
                                            'div',
                                            {
                                                className: resolve()(
                                                    constraint.a.column,
                                                    constraint.a.darkTheme
                                                ),
                                            },
                                            row.a.createElement(NumberPicker, {
                                                tag: assert.formatMessage(
                                                    item.channels
                                                ),
                                                containers: val,
                                                handleContainerClick:
                                                    this.handleContainerClick,
                                            })
                                        )
                                );
                            },
                        },
                        {
                            key: 'render',
                            value: function () {
                                var pageOptimizer = this;
                                var options = this.props;
                                var sortedContents = options.containerMenuItems;
                                var spy = options.showMenu;
                                var hideMenu = options.hideMenu;
                                var f = options.isMobile;
                                var deferred = options.intl;
                                var tz = options.isKidsModeEnabled;
                                var inExec =
                                    options.isKidsModeAvailableInCountry;
                                var res = options.isUserLockedInKidsMode;
                                var n = options.isWebLiveNewsEnable;
                                if (!sortedContents.length) {
                                    return row.a.createElement(
                                        'div',
                                        {
                                            className:
                                                constraint.a.containerMenu,
                                            onMouseEnter: spy,
                                            onMouseLeave: hideMenu,
                                        },
                                        row.a.createElement(
                                            'div',
                                            {
                                                className:
                                                    constraint.a.searchWrapper,
                                            },
                                            row.a.createElement(AnimatedIcon, {
                                                cls: constraint.a.menuSearchBox,
                                            })
                                        )
                                    );
                                }
                                var data = Object(inColl.b)(sortedContents);
                                var imgLoaded = f && inExec && !res;
                                var children = f && n;
                                return row.a.createElement(
                                    'div',
                                    {
                                        className: constraint.a.containerMenu,
                                        onMouseEnter: spy,
                                        onMouseLeave: hideMenu,
                                    },
                                    row.a.createElement(
                                        'div',
                                        {
                                            className:
                                                constraint.a.searchWrapper,
                                        },
                                        row.a.createElement(AnimatedIcon, {
                                            cls: constraint.a.menuSearchBox,
                                        })
                                    ),
                                    imgLoaded
                                        ? row.a.createElement(
                                              'div',
                                              {
                                                  className:
                                                      constraint.a.navItem,
                                              },
                                              tz
                                                  ? row.a.createElement(
                                                        tex,
                                                        null,
                                                        function (
                                                            callbackCancel
                                                        ) {
                                                            return row.a.createElement(
                                                                'span',
                                                                {
                                                                    className:
                                                                        constraint
                                                                            .a
                                                                            .tubiKidsModeExit,
                                                                    onClick:
                                                                        callbackCancel,
                                                                },
                                                                deferred.formatMessage(
                                                                    item.exit
                                                                )
                                                            );
                                                        }
                                                    )
                                                  : row.a.createElement(
                                                        format,
                                                        {
                                                            className:
                                                                constraint.a
                                                                    .navLink,
                                                        }
                                                    )
                                          )
                                        : null,
                                    children
                                        ? row.a.createElement(
                                              'div',
                                              {
                                                  className:
                                                      constraint.a.navItem,
                                              },
                                              row.a.createElement(
                                                  NgReactGridHeader,
                                                  {
                                                      linkTextClassname:
                                                          constraint.a.navLink,
                                                  }
                                              )
                                          )
                                        : null,
                                    row.a.createElement(
                                        'div',
                                        {
                                            className:
                                                constraint.a.scrollingBox,
                                        },
                                        row.a.createElement(
                                            Route,
                                            null,
                                            function (_props) {
                                                var size = _props.xs;
                                                var sm = _props.sm;
                                                var layout = _props.sMd;
                                                return size || sm || layout
                                                    ? pageOptimizer.renderSmallLayout(
                                                          data
                                                      )
                                                    : null;
                                            }
                                        ),
                                        row.a.createElement(
                                            Route,
                                            null,
                                            function (options) {
                                                return options.md
                                                    ? pageOptimizer.renderMediumLayout(
                                                          data
                                                      )
                                                    : null;
                                            }
                                        ),
                                        row.a.createElement(
                                            Route,
                                            null,
                                            function (options) {
                                                return options.lg
                                                    ? pageOptimizer.renderLargeLayout(
                                                          data
                                                      )
                                                    : null;
                                            }
                                        ),
                                        row.a.createElement(
                                            Route,
                                            null,
                                            function (_props) {
                                                var Component = _props.xl;
                                                var layout = _props.xxl;
                                                return Component || layout
                                                    ? pageOptimizer.renderExtraLargeLayout(
                                                          data
                                                      )
                                                    : null;
                                            }
                                        )
                                    )
                                );
                            },
                        },
                    ]),
                    t
                );
            })(root.PureComponent)),
        (obj.propTypes = {
            containerMenuItems: _react.a.array.isRequired,
            trackingURI: _react.a.string.isRequired,
            showMenu: _react.a.func.isRequired,
            hideMenu: _react.a.func.isRequired,
            isChannelsVisible: _react.a.bool,
            isMobile: _react.a.bool,
            isKidsModeEnabled: _react.a.bool,
            isKidsModeAvailableInCountry: _react.a.bool,
            isUserLockedInKidsMode: _react.a.bool,
        }),
        (obj.contextType = source.d),
        _pivotCondition);
    var DropIndicator = Object(m2.b)(function (p) {
        var t = p.container.containerChildrenIdMap;
        var result = p.ui;
        var courseAssessments = result.twoDigitCountryCode;
        var courseSections = result.isKidsModeEnabled;
        return {
            containerChildrenIdMap: t,
            isChannelsVisible: Object(currentTransformMatrix.a)(
                'channels',
                courseAssessments
            ),
            isKidsModeEnabled: courseSections,
            isKidsModeAvailableInCountry: Object(currentTransformMatrix.a)(
                'kidsMode',
                courseAssessments
            ),
            isUserLockedInKidsMode: Object(v.c)(p) && Object(v.e)(p),
            isWebLiveNewsEnable: Object(A.a)(p),
        };
    })(Object(radio_runway_names.c)(pivotCondition));
    var __WEBPACK_IMPORTED_MODULE_3__foundation_smoothScroll__ = require(554);
    var waveformSliders = require.n(
        __WEBPACK_IMPORTED_MODULE_3__foundation_smoothScroll__
    );
    var Day = function (_ref) {
        var elem;
        var value = _ref.inverted;
        var onRestart = _ref.mobileTouchHandler;
        var onMouseEnter = _ref.onMouseEnter;
        var onMouseLeave = _ref.onMouseLeave;
        var langClass = resolve()(
            waveformSliders.a.hamburgerMenu,
            (((elem = {})[waveformSliders.a.inverted] = value), elem)
        );
        return row.a.createElement(
            'div',
            {
                className: langClass,
                onMouseEnter: onMouseEnter,
                onMouseLeave: onMouseLeave,
                onTouchEnd: onRestart,
                rel: 'nofollow',
            },
            row.a.createElement('span', {
                className: waveformSliders.a.hamburgerMenuIcon,
            })
        );
    };
    var local = require(913);
    var ev = require.n(local);
    var __WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_second__ = require(437);
    var __WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_second___default =
        require.n(__WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_second__);
    var app = require(255);
    var cfg = require.n(app);
    var auth = Object(descriptor.a)({
        accountSettings: {
            defaultMessage: 'Account Settings',
            id: 'src/web/components/TopNav/AccountBar/AccountCardDropdownMenu/AccountCardDropdownMenu:accountSettings',
        },
        helpCenter: {
            defaultMessage: 'Help Center',
            id: 'src/web/components/TopNav/AccountBar/AccountCardDropdownMenu/AccountCardDropdownMenu:helpCenter',
        },
        activateDevice: {
            defaultMessage: 'Activate Your Device',
            id: 'src/web/components/TopNav/AccountBar/AccountCardDropdownMenu/AccountCardDropdownMenu:activateDevice',
        },
        signOut: {
            defaultMessage: 'Sign Out',
            id: 'src/web/components/TopNav/AccountBar/AccountCardDropdownMenu/AccountCardDropdownMenu:signOut',
        },
        parentalControls: {
            defaultMessage: 'Parental Controls',
            id: 'src/web/components/TopNav/AccountBar/AccountCardDropdownMenu/AccountCardDropdownMenu:parentalControls',
        },
        register: {
            defaultMessage: 'Register',
            id: 'src/web/components/TopNav/AccountBar/AccountCardDropdownMenu/AccountCardDropdownMenu:register',
        },
        signin: {
            defaultMessage: 'Sign In',
            id: 'src/web/components/TopNav/AccountBar/AccountCardDropdownMenu/AccountCardDropdownMenu:signin',
        },
        parentalSignInTitle: {
            defaultMessage: 'You need to sign in or register!',
            id: 'src/web/components/TopNav/AccountBar/AccountCardDropdownMenu/AccountCardDropdownMenu:parentalSignInTitle',
        },
        parentalSignInMessage: {
            defaultMessage:
                'Please sign in or register to change your parental controls.',
            id: 'src/web/components/TopNav/AccountBar/AccountCardDropdownMenu/AccountCardDropdownMenu:parentalSignInMessage',
        },
        parentalSignIn: {
            defaultMessage: 'Sign In',
            id: 'src/web/components/TopNav/AccountBar/AccountCardDropdownMenu/AccountCardDropdownMenu:parentalSignIn',
        },
        parentalRegister: {
            defaultMessage: 'Register',
            id: 'src/web/components/TopNav/AccountBar/AccountCardDropdownMenu/AccountCardDropdownMenu:parentalRegister',
        },
    });
    var summary = {
        enter: cfg.a.accountEnter,
        enterActive: cfg.a.accountEnterActive,
        exit: cfg.a.accountLeave,
        exitActive: cfg.a.accountLeaveActive,
    };
    var handler = function (result) {
        var courseSections = result.handleLogout;
        var callbackOK = result.hideAccountCard;
        var quoteSummary = result.isLoggedIn;
        var p = result.pathname;
        var dispatch = result.dispatch;
        var origProvider = Object(pkg.a)();
        var value =
            !p ||
            p === $scope.d.landing ||
            p === $scope.d.home ||
            p.includes($scope.d.reset)
                ? ''
                : '?redirect=' + p;
        return {
            register: row.a.createElement(
                __WEBPACK_IMPORTED_MODULE_20_date_fns_min___default.a,
                {
                    key: 'register',
                    onClick: callbackOK,
                    activeAlternate: true,
                    to: '' + $scope.d.register + value,
                },
                row.a.createElement(settings.a, auth.register)
            ),
            signIn: row.a.createElement(
                __WEBPACK_IMPORTED_MODULE_20_date_fns_min___default.a,
                {
                    key: 'signin',
                    onClick: callbackOK,
                    activeAlternate: true,
                    to: '' + $scope.d.signIn + value,
                },
                row.a.createElement(settings.a, auth.signin)
            ),
            accountSettings: row.a.createElement(
                __WEBPACK_IMPORTED_MODULE_20_date_fns_min___default.a,
                {
                    key: 'accountsettings',
                    onClick: callbackOK,
                    activeAlternate: true,
                    activeClassName: '',
                    to: $scope.d.account,
                },
                row.a.createElement(settings.a, auth.accountSettings)
            ),
            parentalControls: row.a.createElement(
                __WEBPACK_IMPORTED_MODULE_20_date_fns_min___default.a,
                {
                    key: 'parental',
                    onClick: function (e) {
                        callbackOK(e);
                        if (!quoteSummary) {
                            if (!(null == e)) {
                                e.preventDefault();
                            }
                            Object(curves.g)(
                                q.j,
                                Object(ast.e)(
                                    Object(originalB.c)(),
                                    CallConstant.DialogType.SIGNIN_REQUIRED
                                )
                            );
                            dispatch(
                                Object(d.a)(
                                    (function (self, dispatch) {
                                        return {
                                            title: self.formatMessage(
                                                auth.parentalSignInTitle
                                            ),
                                            description: self.formatMessage(
                                                auth.parentalSignInMessage
                                            ),
                                            status: 'info',
                                            autoDismiss: true,
                                            buttons: [
                                                {
                                                    title: self.formatMessage(
                                                        auth.parentalSignIn
                                                    ),
                                                    primary: true,
                                                    action: function () {
                                                        dispatch(
                                                            Object(router.push)(
                                                                $scope.d
                                                                    .signIn +
                                                                    '?redirect=' +
                                                                    $scope.d
                                                                        .parentalControl
                                                            )
                                                        );
                                                    },
                                                },
                                                {
                                                    title: self.formatMessage(
                                                        auth.parentalRegister
                                                    ),
                                                    primary: true,
                                                    action: function () {
                                                        dispatch(
                                                            Object(router.push)(
                                                                $scope.d
                                                                    .register +
                                                                    '?redirect=' +
                                                                    $scope.d
                                                                        .parentalControl
                                                            )
                                                        );
                                                    },
                                                },
                                            ],
                                        };
                                    })(origProvider, dispatch),
                                    'parental-sign-in'
                                )
                            );
                        }
                    },
                    activeAlternate: true,
                    activeClassName: '',
                    to: $scope.d.parentalControl,
                },
                row.a.createElement(settings.a, auth.parentalControls)
            ),
            helpCenter: row.a.createElement(
                __WEBPACK_IMPORTED_MODULE_20_date_fns_min___default.a,
                {
                    key: 'help',
                    onClick: callbackOK,
                    targetBlank: true,
                    to: $scope.a.helpCenter,
                },
                row.a.createElement(settings.a, auth.helpCenter)
            ),
            activate: row.a.createElement(
                __WEBPACK_IMPORTED_MODULE_20_date_fns_min___default.a,
                {
                    key: 'activate',
                    onClick: callbackOK,
                    to: $scope.d.activate,
                },
                row.a.createElement(settings.a, auth.activateDevice)
            ),
            signOut: row.a.createElement(
                __WEBPACK_IMPORTED_MODULE_20_date_fns_min___default.a,
                {
                    key: 'signout',
                    onClick: courseSections,
                },
                row.a.createElement(settings.a, auth.signOut)
            ),
        };
    };
    var FilterFormInstance = Object(m2.b)()(function (result) {
        var user = result.accountCardVisible;
        var value = result.isLoggedIn;
        var index = result.dropDownPositionClassName;
        var data = handler(result);
        var targetWidgetId = resolve()(cfg.a.accountPopup, index);
        return row.a.createElement(
            Helpers.TransitionGroup,
            {
                component: 'div',
            },
            user
                ? row.a.createElement(
                      Helpers.CSSTransition,
                      {
                          key: 'accountCard',
                          classNames: summary,
                          timeout: 300,
                      },
                      row.a.createElement(
                          'div',
                          {
                              key: 'accountCard',
                              className: targetWidgetId,
                          },
                          value
                              ? [
                                    data.accountSettings,
                                    data.parentalControls,
                                    data.helpCenter,
                                    data.activate,
                                    row.a.createElement('span', {
                                        key: 'separator',
                                        className: cfg.a.separator,
                                    }),
                                    data.signOut,
                                ]
                              : [
                                    data.register,
                                    row.a.createElement('span', {
                                        key: 'separator1',
                                        className: cfg.a.separator,
                                    }),
                                    data.signIn,
                                    row.a.createElement('span', {
                                        key: 'separator2',
                                        className: cfg.a.separator,
                                    }),
                                    data.parentalControls,
                                    data.helpCenter,
                                    data.activate,
                                ]
                      )
                  )
                : null
        );
    });
    var policyToTest = require(254);
    var res = require.n(policyToTest);
    var intensity_data = Object(descriptor.a)({
        greetingNoName: {
            defaultMessage: 'Hi',
            id: 'src/web/components/TopNav/AccountBar/Greet/Greet:greetingNoName',
        },
        greetingName: {
            defaultMessage: 'Hi, <customtag>{name}</customtag>',
            id: 'src/web/components/TopNav/AccountBar/Greet/Greet:greetingName',
        },
        accountSettings: {
            defaultMessage: 'Account Settings',
            id: 'src/web/components/TopNav/AccountBar/Greet/Greet:accountSettings',
        },
        helpCenter: {
            defaultMessage: 'Help Center',
            id: 'src/web/components/TopNav/AccountBar/Greet/Greet:helpCenter',
        },
        activateDevice: {
            defaultMessage: 'Activate Your Device',
            id: 'src/web/components/TopNav/AccountBar/Greet/Greet:activateDevice',
        },
        signOut: {
            defaultMessage: 'Sign Out',
            id: 'src/web/components/TopNav/AccountBar/Greet/Greet:signOut',
        },
    });
    var update = function (options) {
        var e;
        var user = options.displayName;
        var readOnlyFn = options.handleLogout;
        var n = options.showAccountCard;
        var value = options.hideAccountCard;
        var i = options.accountCardVisible;
        var TreeNode = options.toggleAccountCard;
        var children = options.isMobile;
        var inverse = options.inverse;
        var langClass = resolve()(
            res.a.greet,
            res.a.greetAccount,
            ((e = {}),
            cb()(e, res.a.showAccountCard, i),
            cb()(e, res.a.showAccountCardDropdown, i),
            cb()(e, res.a.inverse, inverse),
            e)
        );
        return row.a.createElement(
            'div',
            {
                className: langClass,
                onClick: children ? TreeNode : null,
                onMouseEnter: children ? null : n,
                onMouseLeave: children ? null : value,
            },
            row.a.createElement(
                'div',
                {
                    className: res.a.greeting,
                },
                user
                    ? row.a.createElement(
                          settings.a,
                          createElement()({}, intensity_data.greetingName, {
                              values: {
                                  name: user,
                                  customtag: function (eventEnd) {
                                      var shareTxt =
                                          __WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_second___default()(
                                              eventEnd,
                                              1
                                          )[0];
                                      return row.a.createElement(
                                          'span',
                                          {
                                              className: res.a.name,
                                          },
                                          shareTxt
                                      );
                                  },
                              },
                          })
                      )
                    : row.a.createElement(
                          settings.a,
                          intensity_data.greetingNoName
                      )
            ),
            row.a.createElement(FilterFormInstance, {
                handleLogout: readOnlyFn,
                hideAccountCard: value,
                accountCardVisible: i,
                isLoggedIn: true,
                dropDownPositionClassName: res.a.accountDropdownPosition,
            })
        );
    };
    update.propTypes = {
        displayName: _react.a.string,
        handleLogout: _react.a.func.isRequired,
        showAccountCard: _react.a.func.isRequired,
        hideAccountCard: _react.a.func.isRequired,
        accountCardVisible: _react.a.bool.isRequired,
        toggleAccountCard: _react.a.func.isRequired,
        isMobile: _react.a.bool.isRequired,
        inverse: _react.a.bool.isRequired,
    };
    update.defaultProps = {
        displayName: '',
        accountCardVisible: false,
        inverse: false,
    };
    var ValueViewer;
    var _COMMENTS;
    var DraggableCore;
    var _classes;
    var _class2;
    var _temp;
    var block;
    var definition;
    var MP4AudioSampleEntry;
    var _opinionatedRules;
    var ns = update;
    var __WEBPACK_IMPORTED_MODULE_1_jsmidgen__ = require(244);
    var deepArrayTest = require.n(__WEBPACK_IMPORTED_MODULE_1_jsmidgen__);
    var readme = require(379);
    var _this = require.n(readme);
    var component = Object(descriptor.a)({
        register: {
            defaultMessage: 'Register',
            id: 'src/web/components/TopNav/AccountBar/RegisterAndSignIn/RegisterAndSignIn:register',
        },
        signin: {
            defaultMessage: 'Sign In',
            id: 'src/web/components/TopNav/AccountBar/RegisterAndSignIn/RegisterAndSignIn:signin',
        },
    });
    var COMMENTS =
        ((_COMMENTS = ValueViewer =
            (function (e) {
                function t() {
                    var _Object$getPrototypeO;
                    var ret;
                    var self;
                    var old_ret;
                    apply()(this, t);
                    var length = arguments.length;
                    var args = Array(length);
                    var i = 0;
                    for (; i < length; i++) {
                        args[i] = arguments[i];
                    }
                    return (
                        (ret = self =
                            concat()(
                                this,
                                (_Object$getPrototypeO =
                                    t.__proto__ || Function()(t)).call.apply(
                                    _Object$getPrototypeO,
                                    [this].concat(args)
                                )
                            )),
                        (self.getLinks = function () {
                            var req = self.props;
                            var _ = req.intl;
                            var p = req.pathname;
                            var value =
                                p === $scope.d.landing ||
                                p === $scope.d.home ||
                                p.includes($scope.d.reset)
                                    ? ''
                                    : '?redirect=' + p;
                            var r = p === $scope.d.register;
                            var is_meta = p === $scope.d.signIn;
                            var items = [];
                            return (
                                r ||
                                    items.push({
                                        title: _.formatMessage(
                                            component.register
                                        ),
                                        to: '' + $scope.d.register + value,
                                        className: _this.a.registerLink,
                                        testId: 'register',
                                    }),
                                is_meta ||
                                    items.push({
                                        title: _.formatMessage(
                                            component.signin
                                        ),
                                        to: '' + $scope.d.signIn + value,
                                        className: _this.a.signInLink,
                                        testId: 'signIn',
                                    }),
                                items
                            );
                        }),
                        (old_ret = ret),
                        concat()(self, old_ret)
                    );
                }
                return (
                    match()(t, e),
                    r()(t, [
                        {
                            key: 'render',
                            value: function () {
                                var inverse = this.props.inverse;
                                var links = this.getLinks();
                                if (0 === links.length) {
                                    return null;
                                }
                                var langClass = resolve()(
                                    _this.a.regSignInLinks,
                                    cb()({}, _this.a.inverse, inverse)
                                );
                                return row.a.createElement(
                                    'ul',
                                    {
                                        className: langClass,
                                    },
                                    links.map(function (data, n, inRevIdx) {
                                        var i = data.title;
                                        var newIndex = data.to;
                                        var cName = data.className;
                                        var format =
                                            (data.testId,
                                            2 === inRevIdx.length && 0 === n);
                                        var key = format
                                            ? row.a.createElement(
                                                  deepArrayTest.a,
                                                  {
                                                      color: 'secondary',
                                                      tabIndex: -1,
                                                      inverse: inverse,
                                                      block: true,
                                                  },
                                                  i
                                              )
                                            : i;
                                        return row.a.createElement(
                                            'li',
                                            {
                                                key: i,
                                                className: cName,
                                            },
                                            row.a.createElement(
                                                _reactRouter.Link,
                                                {
                                                    to: newIndex,
                                                    className: format
                                                        ? ''
                                                        : _this.a.signIn,
                                                },
                                                key
                                            )
                                        );
                                    })
                                );
                            },
                        },
                    ]),
                    t
                );
            })(root.PureComponent)),
        (ValueViewer.propTypes = {
            inverse: _react.a.bool,
            pathname: _react.a.string,
            intl: _react.a.object,
        }),
        (ValueViewer.defaultProps = {
            inverse: false,
            pathname: '',
        }),
        _COMMENTS);
    var element = Object(radio_runway_names.c)(COMMENTS);
    var classes =
        ((_classes = DraggableCore =
            (function (e) {
                function t() {
                    var _Object$getPrototypeO;
                    var local_mobile_core_user_remove_user_device;
                    var model;
                    var wsFunction;
                    apply()(this, t);
                    var length = arguments.length;
                    var args = Array(length);
                    var i = 0;
                    for (; i < length; i++) {
                        args[i] = arguments[i];
                    }
                    return (
                        (local_mobile_core_user_remove_user_device = model =
                            concat()(
                                this,
                                (_Object$getPrototypeO =
                                    t.__proto__ || Function()(t)).call.apply(
                                    _Object$getPrototypeO,
                                    [this].concat(args)
                                )
                            )),
                        (model.handleLogoutBtnClick = function (a) {
                            a.preventDefault();
                            if (model.props.onLogoutBtnClick) {
                                model.props.onLogoutBtnClick(a);
                            }
                        }),
                        (model.showAccountCard = function () {
                            var store = model.props;
                            var _dispatch = store.dispatch;
                            if (!store.accountCardVisible) {
                                _dispatch(Object(d.t)());
                            }
                        }),
                        (model.hideAccountCard = function (data) {
                            data.stopPropagation();
                            var store = model.props;
                            var _dispatch = store.dispatch;
                            if (store.accountCardVisible) {
                                _dispatch(Object(d.t)());
                            }
                        }),
                        (model.toggleAccountCard = function () {
                            model.props.dispatch(Object(d.t)());
                        }),
                        (wsFunction =
                            local_mobile_core_user_remove_user_device),
                        concat()(model, wsFunction)
                    );
                }
                return (
                    match()(t, e),
                    r()(t, [
                        {
                            key: 'render',
                            value: function () {
                                var self = this.props;
                                var parent = self.user;
                                var label = self.displayName;
                                var boxInput = self.accountCardVisible;
                                var inverse = self.inverse;
                                var isMobile = self.isMobile;
                                var path = self.pathname;
                                return row.a.createElement(
                                    row.a.Fragment,
                                    null,
                                    row.a.createElement(
                                        'div',
                                        {
                                            className: ev.a.account,
                                        },
                                        parent
                                            ? row.a.createElement(ns, {
                                                  inverse: inverse,
                                                  displayName: label,
                                                  handleLogout:
                                                      this.handleLogoutBtnClick,
                                                  showAccountCard:
                                                      this.showAccountCard,
                                                  hideAccountCard:
                                                      this.hideAccountCard,
                                                  accountCardVisible: boxInput,
                                                  toggleAccountCard:
                                                      this.toggleAccountCard,
                                                  isMobile: isMobile,
                                              })
                                            : row.a.createElement(element, {
                                                  inverse: inverse,
                                                  pathname: path,
                                              })
                                    )
                                );
                            },
                        },
                    ]),
                    t
                );
            })(root.PureComponent)),
        (DraggableCore.propTypes = {
            displayName: _react.a.string,
            user: _react.a.object,
            onLogoutBtnClick: _react.a.func.isRequired,
            accountCardVisible: _react.a.bool,
            isMobile: _react.a.bool,
            inverse: _react.a.bool,
            pathname: _react.a.string,
        }),
        (DraggableCore.defaultProps = {
            user: null,
            displayName: '',
            isMobile: false,
            accountCardVisible: false,
        }),
        _classes);
    var p = require(669);
    var msg = require.n(p);
    var cmd = Object(descriptor.a)({
        browse: {
            defaultMessage: 'Browse',
            id: 'src/web/components/TopNav/BrowseMenu/BrowseMenu:browse',
        },
    });
    var build = function (_ref) {
        var instrumented;
        var title = _ref.inverse;
        var add_title_to_td = void 0 !== title && title;
        var onMouseEnter = _ref.onMouseEnter;
        var onMouseLeave = _ref.onMouseLeave;
        var langClass = resolve()(
            msg.a.browseMenu,
            (((instrumented = {})[msg.a.inverse] = add_title_to_td),
            instrumented)
        );
        return row.a.createElement(
            'div',
            {
                className: langClass,
                onMouseEnter: onMouseEnter,
                onMouseLeave: onMouseLeave,
            },
            row.a.createElement(settings.a, cmd.browse)
        );
    };
    var invoke = require(50);
    var that = require.n(invoke);
    var messages = Object(descriptor.a)({
        searchPlaceholder: {
            defaultMessage: 'Find movies, TV shows and more',
            id: 'src/web/components/TopNav/TopNav:searchPlaceholder',
        },
        searchRequired: {
            defaultMessage: 'Please enter a search term.',
            id: 'src/web/components/TopNav/TopNav:searchRequired',
        },
        logoAltText: {
            defaultMessage: 'Stream Full Length Series & Movies',
            id: 'src/web/components/TopNav/TopNav:logoAltText',
        },
        exit: {
            defaultMessage: 'Exit Kids',
            id: 'src/web/components/TopNav/TopNav:exit',
        },
    });
    var animationEvent = {
        enter: that.a.menuEnter,
        enterActive: that.a.menuEnterActive,
        exit: that.a.menuLeave,
        exitActive: that.a.menuLeaveActive,
    };
    var errorBar = {
        enter: that.a.overlayEnter,
        enterActive: that.a.overlayEnterActive,
        exit: that.a.overlayLeave,
        exitActive: that.a.overlayLeaveActive,
    };
    var CategoricalChartWrapper =
        ((_temp = _class2 =
            (function (e) {
                function t(rt) {
                    apply()(this, t);
                    var me = concat()(
                        this,
                        (t.__proto__ || Function()(t)).call(this, rt)
                    );
                    return (
                        (me.showMenu = function () {
                            var vm = me.props;
                            var on = vm.dispatch;
                            var body = vm.isLoading;
                            var isMobile = vm.isMobile;
                            var isModern = vm.accountCardVisible;
                            var parent = vm.containerListLoaded;
                            clearTimeout(me.hideMenuTimeout);
                            if (!(parent || body)) {
                                on(Object(args.e)());
                            }
                            if (!(isMobile || isModern)) {
                                on(Object(d.r)());
                            }
                        }),
                        (me.mobileClickToggle = function () {
                            (0, me.props.dispatch)(Object(d.v)());
                        }),
                        (me.hideMenu = function () {
                            var store = me.props;
                            var _skToLastAccess = store.containerMenuVisible;
                            var _dispatch = store.dispatch;
                            if (_skToLastAccess) {
                                _dispatch(Object(d.d)());
                            }
                        }),
                        (me.handleLogout = function () {
                            BaseDao.a.remove(moduleToRemove.c);
                            if (window.google && window.google.accounts) {
                                window.google.accounts.id.disableAutoSelect();
                            }
                            window.location.href = Object(tParentMatrix.b)(
                                Object(c2.g)({
                                    isByUser: true,
                                })
                            );
                        }),
                        (me.state = {
                            atTop: true,
                        }),
                        (me.scrollOffsetY = 0),
                        (me.delayedHideMenu = function () {
                            clearTimeout(me.hideMenuTimeout);
                            me.hideMenuTimeout = setTimeout(function () {
                                me.hideMenu();
                            }, 800);
                        }),
                        me
                    );
                }
                return (
                    match()(t, e),
                    r()(t, [
                        {
                            key: 'componentDidMount',
                            value: function () {
                                this.checkScrollHandler(this.props.pathname);
                                this.handleScroll();
                            },
                        },
                        {
                            key: 'componentDidUpdate',
                            value: function (action) {
                                var tool = this.props.pathname;
                                if (tool !== action.pathname) {
                                    this.checkNavVisibility(tool);
                                    this.checkScrollHandler(tool);
                                }
                            },
                        },
                        {
                            key: 'componentWillUnmount',
                            value: function () {
                                this.scrollObserver.unsubscribe();
                            },
                        },
                        {
                            key: 'checkNavVisibility',
                            value: function (i) {
                                var _props = this.props;
                                var dataEndIndex = _props.topNavVisible;
                                var dispatch = _props.dispatch;
                                if (
                                    options.STATIC_TOP_NAV_PATHNAMES.indexOf(
                                        Object(tParentMatrix.a)(i, 0)
                                    ) > -1 &&
                                    !dataEndIndex
                                ) {
                                    dispatch(Object(d.o)(true));
                                }
                            },
                        },
                        {
                            key: 'checkScrollHandler',
                            value: function (i) {
                                var _self = this;
                                var n =
                                    options.STATIC_TOP_NAV_PATHNAMES.indexOf(
                                        Object(tParentMatrix.a)(i, 0)
                                    ) > -1;
                                if (n && this.scrollObserver) {
                                    this.scrollObserver.unsubscribe();
                                } else {
                                    if (
                                        !(
                                            n ||
                                            (this.scrollObserver &&
                                                !this.scrollObserver.isStopped)
                                        )
                                    ) {
                                        this.scrollObserver = Object(
                                            genWaveBrick.a
                                        )(window, 'scroll')
                                            .pipe(Object(through.a)(50))
                                            .subscribe(function () {
                                                _self.handleScroll();
                                            });
                                    }
                                }
                            },
                        },
                        {
                            key: 'handleScroll',
                            value: function () {
                                var _props = this.props;
                                var excludeSynced = _props.topNavVisible;
                                var dispatch = _props.dispatch;
                                var dataEndIndex = _props.containerMenuVisible;
                                var largeOffset = _props.liveNewsMenuVisible;
                                var mediumOffset = _props.accountCardVisible;
                                var yDistance = Math.round(window.pageYOffset);
                                if (
                                    !dataEndIndex &&
                                    !mediumOffset &&
                                    !largeOffset
                                ) {
                                    var excludeNotSynced =
                                        yDistance > this.scrollOffsetY;
                                    if (
                                        !excludeNotSynced &&
                                        0 === this.scrollOffsetY
                                    ) {
                                        return;
                                    }
                                    if (
                                        excludeSynced &&
                                        excludeNotSynced &&
                                        yDistance > 0
                                    ) {
                                        dispatch(Object(d.o)(false));
                                    } else {
                                        if (
                                            !(excludeSynced || excludeNotSynced)
                                        ) {
                                            dispatch(Object(d.o)(true));
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
                            },
                        },
                        {
                            key: 'render',
                            value: function () {
                                var e;
                                var ret;
                                var union;
                                var rando;
                                var data = this.props;
                                var params = data.user;
                                var cls = data.cls;
                                var uri = data.pathname;
                                var el = data.firstName;
                                var sat_item = data.topNavVisible;
                                var f = data.containerMenuVisible;
                                var d = data.accountCardVisible;
                                var w = data.liveNewsMenuVisible;
                                var isMobile = data.isMobile;
                                var dispatch = data.dispatch;
                                var _moods = data.containerMenuItems;
                                var node = data.containerListLoaded;
                                var old_queue_user_list = data.trackingURI;
                                var connect_sqlite3 = data.isFullscreen;
                                var self = data.intl;
                                var andTmp = data.isKidsModeEnabled;
                                var tmp = data.isKidsModeAvailableInCountry;
                                var title = data.isUserLockedInKidsMode;
                                var dp = data.isWebLiveNewsEnable;
                                var inName = void 0;
                                if (params) {
                                    inName = el || params.name || params.email;
                                }
                                var orTmp = !isMobile;
                                var descriptionEditable = !isMobile && dp;
                                var date = orTmp && !andTmp && tmp;
                                var isWikiwand =
                                    orTmp && andTmp && tmp && !title;
                                var search = Object(tParentMatrix.a)(uri, 0);
                                var color =
                                    !options.IGNORE_INVERTED_PAGE_PATHNAMES.includes(
                                        uri
                                    ) &&
                                    options.INVERTED_PAGE_PATHNAMES.includes(
                                        search
                                    );
                                var session_store_module =
                                    options.HIDE_TOP_NAV_PATHNAMES.indexOf(
                                        search
                                    ) > -1 || connect_sqlite3;
                                var flag = f || d || w;
                                var classname = resolve()(
                                    cls,
                                    that.a.topNav,
                                    ((e = {}),
                                    cb()(e, that.a.slideUp, !sat_item),
                                    cb()(e, that.a.inverted, color),
                                    cb()(
                                        e,
                                        that.a.withGradientBg,
                                        this.state.atTop
                                    ),
                                    cb()(
                                        e,
                                        that.a.hidden,
                                        session_store_module
                                    ),
                                    e)
                                );
                                var classLabel = resolve()(
                                    that.a.logo,
                                    ((ret = {}),
                                    cb()(
                                        ret,
                                        that.a.browseAndLogo,
                                        orTmp && !andTmp
                                    ),
                                    cb()(
                                        ret,
                                        that.a.browseAndKidsLogo,
                                        orTmp && andTmp
                                    ),
                                    ret)
                                );
                                var valueClassName = andTmp
                                    ? that.a.kidsModeLogo
                                    : that.a.logoIcon;
                                var width = row.a.createElement(
                                    _reactRouter.Link,
                                    {
                                        to: $scope.d.home,
                                        className: classLabel,
                                    },
                                    uri === $scope.d.home
                                        ? row.a.createElement(
                                              'h1',
                                              {
                                                  className: andTmp
                                                      ? that.a.kidsModeHeading
                                                      : null,
                                              },
                                              row.a.createElement(
                                                  _suggestItem2.a,
                                                  createElement()(
                                                      {
                                                          className:
                                                              valueClassName,
                                                          alt: self.formatMessage(
                                                              messages.logoAltText
                                                          ),
                                                          isKidsModeEnabled:
                                                              andTmp,
                                                      },
                                                      color
                                                          ? {
                                                                color: 'black',
                                                            }
                                                          : null
                                                  )
                                              )
                                          )
                                        : row.a.createElement(
                                              _suggestItem2.a,
                                              createElement()(
                                                  {
                                                      className: valueClassName,
                                                      isKidsModeEnabled: andTmp,
                                                  },
                                                  color
                                                      ? {
                                                            color: 'black',
                                                        }
                                                      : null
                                              )
                                          )
                                );
                                var previewClassName = resolve()(
                                    that.a.containerMenuWrapper,
                                    ((union = {}),
                                    cb()(union, that.a.hide, !f),
                                    cb()(
                                        union,
                                        that.a.containerBrowseMenuWrapper,
                                        orTmp && !andTmp
                                    ),
                                    cb()(
                                        union,
                                        that.a.containerKidsBrowseMenuWrapper,
                                        orTmp && andTmp
                                    ),
                                    union)
                                );
                                var classAttrs = resolve()(
                                    that.a.menuAndLogoWrapper,
                                    ((rando = {}),
                                    cb()(
                                        rando,
                                        that.a.browseMenuAndLogoWrapper,
                                        orTmp
                                    ),
                                    cb()(
                                        rando,
                                        that.a.mobileKidsMenuWrapper,
                                        isMobile && andTmp
                                    ),
                                    rando)
                                );
                                var liCss = resolve()(
                                    that.a.exitKidsModeContainer,
                                    cb()({}, that.a.inverse, color)
                                );
                                return row.a.createElement(
                                    'header',
                                    {
                                        className: classname,
                                    },
                                    row.a.createElement(
                                        Helpers.TransitionGroup,
                                        {
                                            component: 'div',
                                            className: that.a.overlayWrapper,
                                        },
                                        flag
                                            ? row.a.createElement(
                                                  Helpers.CSSTransition,
                                                  {
                                                      key: 'overlay',
                                                      classNames: errorBar,
                                                      timeout: 300,
                                                  },
                                                  row.a.createElement('div', {
                                                      key: 'overlay',
                                                      className:
                                                          that.a
                                                              .fullscreenOverlay,
                                                  })
                                              )
                                            : null
                                    ),
                                    row.a.createElement(
                                        hash.a,
                                        {
                                            className: that.a.container,
                                        },
                                        row.a.createElement(
                                            'div',
                                            {
                                                className: that.a.leftNavItems,
                                            },
                                            row.a.createElement(
                                                'div',
                                                {
                                                    className: classAttrs,
                                                },
                                                orTmp
                                                    ? null
                                                    : row.a.createElement(Day, {
                                                          inverted: color,
                                                          onMouseEnter:
                                                              this.showMenu,
                                                          onMouseLeave:
                                                              this
                                                                  .delayedHideMenu,
                                                          mobileTouchHandler:
                                                              this
                                                                  .mobileClickToggle,
                                                      }),
                                                row.a.createElement(
                                                    Helpers.TransitionGroup,
                                                    {
                                                        component: 'div',
                                                        className:
                                                            previewClassName,
                                                    },
                                                    f && node && _moods.length
                                                        ? row.a.createElement(
                                                              Helpers.CSSTransition,
                                                              {
                                                                  key: 'containerMenu',
                                                                  classNames:
                                                                      animationEvent,
                                                                  timeout: 300,
                                                              },
                                                              row.a.createElement(
                                                                  DropIndicator,
                                                                  {
                                                                      key: 'containerMenu',
                                                                      showMenu:
                                                                          this
                                                                              .showMenu,
                                                                      hideMenu:
                                                                          this
                                                                              .hideMenu,
                                                                      containerMenuItems:
                                                                          _moods,
                                                                      trackingURI:
                                                                          old_queue_user_list,
                                                                      isMobile:
                                                                          isMobile,
                                                                  }
                                                              )
                                                          )
                                                        : null
                                                ),
                                                width,
                                                orTmp
                                                    ? row.a.createElement(
                                                          build,
                                                          {
                                                              onMouseEnter:
                                                                  this.showMenu,
                                                              onMouseLeave:
                                                                  this
                                                                      .delayedHideMenu,
                                                              inverse: color,
                                                          }
                                                      )
                                                    : null,
                                                date
                                                    ? row.a.createElement(
                                                          format,
                                                          {
                                                              url: '#',
                                                              inverse: color,
                                                          }
                                                      )
                                                    : null,
                                                isWikiwand
                                                    ? row.a.createElement(
                                                          tex,
                                                          null,
                                                          function (
                                                              callbackCancel
                                                          ) {
                                                              return row.a.createElement(
                                                                  'div',
                                                                  {
                                                                      className:
                                                                          liCss,
                                                                      onClick:
                                                                          callbackCancel,
                                                                  },
                                                                  row.a.createElement(
                                                                      inner,
                                                                      {
                                                                          className:
                                                                              that
                                                                                  .a
                                                                                  .exitKidsModeIcon,
                                                                      }
                                                                  ),
                                                                  row.a.createElement(
                                                                      'span',
                                                                      null,
                                                                      row.a.createElement(
                                                                          settings.a,
                                                                          messages.exit
                                                                      )
                                                                  )
                                                              );
                                                          }
                                                      )
                                                    : null,
                                                descriptionEditable
                                                    ? row.a.createElement(
                                                          NgReactGridHeader,
                                                          {
                                                              inverse: color,
                                                          }
                                                      )
                                                    : null
                                            )
                                        ),
                                        row.a.createElement(AnimatedIcon, {
                                            cls: that.a.topnavSearchBox,
                                            placeholder: self.formatMessage(
                                                messages.searchPlaceholder
                                            ),
                                            customRequiredMessage:
                                                self.formatMessage(
                                                    messages.searchRequired
                                                ),
                                        }),
                                        row.a.createElement(
                                            'div',
                                            {
                                                className: that.a.rightNavItems,
                                            },
                                            title
                                                ? null
                                                : row.a.createElement(classes, {
                                                      displayName: inName,
                                                      user: params,
                                                      onLogoutBtnClick:
                                                          this.handleLogout,
                                                      accountCardVisible: d,
                                                      isMobile: isMobile,
                                                      dispatch: dispatch,
                                                      inverse: color,
                                                      pathname: uri,
                                                  })
                                        )
                                    )
                                );
                            },
                        },
                    ]),
                    t
                );
            })(root.Component)),
        (_class2.propTypes = {
            pathname: _react.a.string,
            user: _react.a.object,
            dispatch: _react.a.func.isRequired,
            cls: _react.a.string,
            topNavVisible: _react.a.bool.isRequired,
            firstName: _react.a.string,
            containerMenuVisible: _react.a.bool,
            liveNewsMenuVisible: _react.a.bool,
            accountCardVisible: _react.a.bool,
            isMobile: _react.a.bool,
            trackingURI: _react.a.string.isRequired,
            containerMenuItems: _react.a.array.isRequired,
            isKidsModeEnabled: _react.a.bool,
            containerListLoaded: _react.a.bool,
            isKidsModeAvailableInCountry: _react.a.bool,
            isUserLockedInKidsMode: _react.a.bool,
        }),
        (_class2.defaultProps = {
            firstName: '',
            user: null,
            containerMenuVisible: false,
            accountCardVisible: false,
            isMobile: false,
            pathname: '',
        }),
        _temp);
    var RedBox = Object(m2.b)(function (data) {
        var authData = data.auth;
        var code = data.userSettings;
        var name = void 0 === code ? {} : code;
        var self = data.ui;
        var state = data.container;
        var o = data.tracking.trackingURI;
        var boxInput = self.containerMenuVisible;
        var hparent = self.liveNewsMenuVisible;
        var constt = self.topNavVisible;
        var multiStartDate = self.accountCardVisible;
        var isMobile = self.isMobile;
        var oldValue = self.fullscreen;
        var startingCommitHash = self.isKidsModeEnabled;
        var start = self.twoDigitCountryCode;
        var configDatum = Object(frame.d)(data);
        var childStartView2 = Object(currentTransformMatrix.a)(
            'kidsMode',
            start
        );
        var E = Object(v.c)(data) && Object(v.e)(data);
        var queue_html = Object(A.a)(data);
        return {
            containerMenuItems: configDatum,
            isLoading: !(!state.isFetching && !state.listLoading),
            containerMenuVisible: boxInput,
            isWebLiveNewsEnable: queue_html,
            liveNewsMenuVisible: hparent,
            isMobile: isMobile,
            accountCardVisible: multiStartDate,
            containerListLoaded: state.listLoaded,
            trackingURI: o,
            topNavVisible: constt,
            isFullscreen: oldValue,
            firstName: name.first_name,
            user: authData.user,
            isKidsModeEnabled: startingCommitHash,
            isKidsModeAvailableInCountry: childStartView2,
            isUserLockedInKidsMode: E,
        };
    })(Object(radio_runway_names.c)(CategoricalChartWrapper));
    var __WEBPACK_IMPORTED_MODULE_21_date_fns_max__ = require(118);
    var put_rows = require.n(__WEBPACK_IMPORTED_MODULE_21_date_fns_max__);
    var analytics = require(2);
    var renderWaveLane = require(18);
    var api = function (props) {
        return row.a.createElement(
            ShapeMaker_1.a,
            createElement()(
                {
                    viewBox: '0 0 286.054 286.054',
                },
                props
            ),
            row.a.createElement('path', {
                d: 'M143.027 0C64.04 0 0 64.04 0 143.027c0 78.996 64.04 143.027 143.027 143.027 78.996 0 143.027-64.022 143.027-143.027C286.054 64.04 222.022 0 143.027 0zm0 259.236c-64.183 0-116.21-52.026-116.21-116.21S78.845 26.82 143.027 26.82s116.21 52.026 116.21 116.21-52.026 116.208-116.21 116.208zm.01-196.51c-10.245 0-17.996 5.346-17.996 13.98v79.202c0 8.644 7.75 13.972 17.997 13.972 9.994 0 17.995-5.55 17.995-13.972v-79.2c0-8.43-8-13.982-17.994-13.982zm0 124.997c-9.843 0-17.853 8.01-17.853 17.86 0 9.833 8.01 17.843 17.852 17.843s17.843-8.01 17.843-17.843c-.003-9.85-8.003-17.86-17.845-17.86z',
                fill: 'currentColor',
            })
        );
    };
    var c = function (attrs) {
        return row.a.createElement(
            ShapeMaker_1.a,
            createElement()(
                {
                    viewBox: '0 0 426.667 426.667',
                },
                attrs
            ),
            row.a.createElement('path', {
                d: 'M213.333 0C95.518 0 0 95.514 0 213.333s95.518 213.333 213.333 213.333c117.828 0 213.333-95.514 213.333-213.333S331.156 0 213.333 0zM174.2 322.918l-93.936-93.93 31.31-31.31L174.2 260.3l140.89-140.898 31.31 31.31-172.204 172.206z',
                fill: 'currentColor',
            })
        );
    };
    var har = require(99);
    var req = require.n(har);
    var props = Object(descriptor.a)({
        defaultButton: {
            defaultMessage: 'Close',
            id: 'src/web/components/TubiNotifications/TubiNotification:defaultButton',
        },
    });
    var NgReactGridStatus =
        ((definition = block =
            (function (f) {
                function Link(_ref) {
                    apply()(this, Link);
                    var response = concat()(
                        this,
                        (Link.__proto__ || Function()(Link)).call(this, _ref)
                    );
                    return (
                        (response.getStatusSection = function () {
                            var type = response.props.status;
                            if (!type) {
                                return null;
                            }
                            var DropIndicator = {
                                info: api,
                                warning: api,
                                alert: api,
                                success: c,
                            }[type];
                            var langClass = resolve()(req.a.icon, req.a[type]);
                            return row.a.createElement(
                                'div',
                                {
                                    className: req.a.status,
                                },
                                row.a.createElement(DropIndicator, {
                                    className: langClass,
                                })
                            );
                        }),
                        (response.selfDestruct = function () {
                            var customCloseFn = response.props.close;
                            return setTimeout(function () {
                                customCloseFn();
                            }, options.NOTIFICATION_DISMISS_TIMEOUT);
                        }),
                        (response.handleClick = function (i, name) {
                            var _ref = response.props;
                            var buttons = _ref.buttons;
                            var onClick = _ref.close;
                            var dispatch = _ref.dispatch;
                            var button = buttons[i];
                            var action = button.action;
                            var buttonY = button.needsDispatch;
                            if (!action) {
                                return onClick();
                            }
                            if (buttonY) {
                                dispatch(action(name));
                            } else {
                                action(name);
                            }
                            onClick();
                        }),
                        (response.statusSection = response.getStatusSection()),
                        response
                    );
                }
                return (
                    match()(Link, f),
                    r()(Link, [
                        {
                            key: 'componentDidMount',
                            value: function () {
                                if (this.props.autoDismiss) {
                                    this.selfDestruct();
                                }
                            },
                        },
                        {
                            key: 'render',
                            value: function () {
                                var base = this;
                                var options = this.props;
                                var type = options.status;
                                var category = options.title;
                                var content = options.description;
                                var buttons = options.buttons;
                                var langClass = resolve()(
                                    req.a.notification,
                                    req.a[type],
                                    cb()({}, req.a.hasStatus, type)
                                );
                                return row.a.createElement(
                                    'div',
                                    {
                                        className: langClass,
                                    },
                                    this.statusSection,
                                    row.a.createElement(
                                        'div',
                                        {
                                            className: req.a.main,
                                        },
                                        row.a.createElement(
                                            'div',
                                            {
                                                className: req.a.title,
                                            },
                                            category
                                        ),
                                        row.a.createElement(
                                            'div',
                                            {
                                                className: req.a.description,
                                            },
                                            content
                                        )
                                    ),
                                    row.a.createElement(
                                        'div',
                                        {
                                            className: req.a.buttons,
                                        },
                                        buttons.map(function (rv, i) {
                                            if (i >= 2) {
                                                return null;
                                            }
                                            var langClass = resolve()(
                                                req.a.button,
                                                cb()(
                                                    {},
                                                    req.a.primaryButton,
                                                    rv.primary
                                                )
                                            );
                                            return row.a.createElement(
                                                'div',
                                                {
                                                    key: i,
                                                    className: langClass,
                                                    onClick:
                                                        base.handleClick.bind(
                                                            null,
                                                            i
                                                        ),
                                                },
                                                rv.title ||
                                                    row.a.createElement(
                                                        settings.a,
                                                        props.defaultButton
                                                    )
                                            );
                                        })
                                    )
                                );
                            },
                        },
                    ]),
                    Link
                );
            })(root.PureComponent)),
        (block.propTypes = {
            dispatch: _react.a.func.isRequired,
            close: _react.a.func.isRequired,
            status: _react.a.oneOf(['info', 'warning', 'alert', 'success']),
            title: _react.a.string.isRequired,
            description: _react.a.string.isRequired,
            autoDismiss: _react.a.bool,
            buttons: _react.a.arrayOf(
                _react.a.shape({
                    title: _react.a.string.isRequired,
                    primary: _react.a.bool,
                    action: _react.a.func,
                    needsDispatch: _react.a.bool,
                })
            ),
        }),
        (block.defaultProps = {
            autoDismiss: true,
            buttons: [
                {
                    primary: true,
                },
            ],
        }),
        definition);
    var opinionatedRules =
        ((_opinionatedRules = MP4AudioSampleEntry =
            (function (e) {
                function t(rt) {
                    apply()(this, t);
                    var self = concat()(
                        this,
                        (t.__proto__ || Function()(t)).call(this, rt)
                    );
                    return (
                        (self.closeNotification = function (tag) {
                            self.props.dispatch(
                                Object(renderWaveLane.a)(analytics.mc, {
                                    id: tag,
                                })
                            );
                        }),
                        (self.transitionName = {
                            enter: req.a.animationEnter,
                            enterActive: req.a.animationEnterActive,
                            exit: req.a.animationLeave,
                            exitActive: req.a.animationleaveActive,
                        }),
                        self
                    );
                }
                return (
                    match()(t, e),
                    r()(t, [
                        {
                            key: 'render',
                            value: function () {
                                var $ = this;
                                var _props = this.props;
                                var notifications = _props.notifications;
                                var resizeHide = _props.isMobile;
                                var dispatch = _props.dispatch;
                                var langClass = resolve()(
                                    req.a.tubiNotifications,
                                    cb()({}, req.a.isMobile, resizeHide)
                                );
                                return row.a.createElement(
                                    'div',
                                    {
                                        className: langClass,
                                    },
                                    row.a.createElement(
                                        Helpers.TransitionGroup,
                                        {
                                            component: 'div',
                                            className:
                                                req.a.flexReverseOnMobile,
                                        },
                                        notifications.map(function (that) {
                                            var malakh = that.autoDismiss;
                                            var session = that.id;
                                            var actionTitle = that.title;
                                            var item = put_rows()(that, [
                                                'autoDismiss',
                                                'id',
                                                'title',
                                            ]);
                                            return row.a.createElement(
                                                Helpers.CSSTransition,
                                                {
                                                    key: session,
                                                    classNames:
                                                        $.transitionName,
                                                    timeout: 500,
                                                },
                                                row.a.createElement(
                                                    NgReactGridStatus,
                                                    createElement()(
                                                        {
                                                            key: session,
                                                            dispatch: dispatch,
                                                            close: $.closeNotification.bind(
                                                                null,
                                                                session
                                                            ),
                                                            autoDismiss: malakh,
                                                            title: actionTitle,
                                                        },
                                                        item
                                                    )
                                                )
                                            );
                                        })
                                    )
                                );
                            },
                        },
                    ]),
                    t
                );
            })(root.Component)),
        (MP4AudioSampleEntry.propTypes = {
            dispatch: _react.a.func,
            notifications: _react.a.arrayOf(_react.a.object).isRequired,
            isMobile: _react.a.bool,
        }),
        _opinionatedRules);
    var HorizontalScroller = Object(m2.b)(function (viz) {
        var data = viz.ui;
        return {
            notifications: data.notifications,
            isMobile: data.isMobile,
        };
    })(opinionatedRules);
    var Webview = row.a.memo(function (filterFormProps) {
        return row.a.createElement(
            'svg',
            Object(instance.__assign)(
                {
                    width: '1em',
                    height: '1em',
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                },
                filterFormProps
            ),
            row.a.createElement('path', {
                d: 'M3.50312 13.022L7.21612 16.707C7.60712 17.098 8.24012 17.098 8.63112 16.707C9.02212 16.316 8.99412 15.683 8.60312 15.292L6.31312 13L14.5001 13C15.0521 13 15.5001 12.552 15.5001 12C15.5001 11.448 15.0521 11 14.5001 11L6.31312 11L8.60712 8.708C8.99812 8.317 8.99812 7.684 8.60712 7.293C8.21612 6.902 7.58312 6.902 7.19212 7.293L3.49512 10.99C2.84412 11.641 2.82312 12.343 3.50312 13.022Z',
                fill: 'currentColor',
            }),
            row.a.createElement('path', {
                d: 'M12.5001 9V7.169C12.5001 5.768 12.6661 5.107 13.1321 4.64C13.5981 4.173 14.2861 4 15.6691 4H16.3311C17.7141 4 18.4021 4.173 18.8721 4.644C19.3301 5.097 19.5001 5.781 19.5001 7.169V16.847C19.5001 18.218 19.3301 18.897 18.8681 19.354C18.3961 19.824 17.7131 20 16.3461 20H15.6691C14.2911 20 13.6021 19.826 13.1321 19.36C12.6661 18.894 12.5001 18.23 12.5001 16.823V15L10.5001 15V16.823C10.5001 18.146 10.5941 19.651 11.7211 20.777C12.8051 21.852 14.2591 22 15.6691 22H16.3461C17.7501 22 19.1991 21.851 20.2791 20.771C21.4061 19.655 21.5001 18.16 21.5001 16.847L21.5001 7.169C21.5001 5.844 21.4061 4.337 20.2831 3.226C19.1521 2.095 17.6501 2 16.3311 2H15.6691C14.3501 2 12.8481 2.095 11.7181 3.226C10.5941 4.349 10.5001 5.85 10.5001 7.169V9H12.5001Z',
                fill: 'currentColor',
            })
        );
    });
    var ControlledText = row.a.memo(function (filterFormProps) {
        return row.a.createElement(
            'svg',
            Object(instance.__assign)(
                {
                    width: '1em',
                    height: '1em',
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                },
                filterFormProps
            ),
            row.a.createElement('path', {
                d: 'M20 8H4C3.448 8 3 7.552 3 7C3 6.448 3.448 6 4 6H20C20.553 6 21 6.448 21 7C21 7.552 20.553 8 20 8Z',
                fill: 'currentColor',
            }),
            row.a.createElement('path', {
                d: 'M20 18H4C3.448 18 3 17.552 3 17C3 16.448 3.448 16 4 16H20C20.553 16 21 16.448 21 17C21 17.552 20.553 18 20 18Z',
                fill: 'currentColor',
            }),
            row.a.createElement('path', {
                d: 'M20 13H4C3.448 13 3 12.552 3 12C3 11.448 3.448 11 4 11H20C20.553 11 21 11.448 21 12C21 12.552 20.553 13 20 13Z',
                fill: 'currentColor',
            })
        );
    });
    var insertSVGTemplate = require(363);
    var transitions = {
        slideInUp: 'slide-in-up',
        fadeIn: 'fade-in',
        slideInDown: 'slide-in-down',
        slideInLeft: 'slide-in-left',
        slideInRight: 'slide-in-right',
        scaleInDown: 'scale-in-down',
        scaleInUpRight: 'scale-in-up-right',
        featuredCarouselPreviewEnterLeft:
            'featured-carousel-preview-enter-left',
        browseMenuDesktop: 'browse-menu-desktop',
        browseMenuTablet: 'browse-menu-tablet',
        browseMenuMobile: 'browse-menu-mobile',
    };
    var defaults = {
        slideOutDown: 'slide-out-down',
        fadeOut: 'fade-out',
        slideOutLeft: 'slide-out-left',
        slideOutRight: 'slide-out-right',
        scaleOutUp: 'scale-out-up',
        scaleOutDownLeft: 'scale-out-down-left',
        featuredCarouselPreviewExitRight:
            'featured-carousel-preview-exit-right',
        browseMenuDesktop: 'browse-menu-desktop',
        browseMenuTablet: 'browse-menu-tablet',
        browseMenuMobile: 'browse-menu-mobile',
    };
    var out = Object(insertSVGTemplate.a)('web-enter-exit-transition');
    var d3_time_scaleSteps = Object(root.forwardRef)(function (
        options,
        oldRef
    ) {
        var sort;
        var cache;
        var i = options.entranceTransition;
        var context = options.exitTransition;
        var num = options.entranceStagger;
        var value = void 0 === num ? 0 : num;
        var offset = options.exitStagger;
        var start = void 0 === offset ? 0 : offset;
        var expanded = Object(instance.__rest)(options, [
            'entranceTransition',
            'exitTransition',
            'entranceStagger',
            'exitStagger',
        ]);
        var name = i ? out.modifier(transitions[i] + '-enter') : '';
        var range = i ? out.modifier(transitions[i] + '-enter-active') : '';
        var done = context ? out.modifier(defaults[context] + '-exit') : '';
        var nodeType = context
            ? out.modifier(defaults[context] + '-exit-active')
            : '';
        return row.a.createElement(
            Helpers.CSSTransition,
            Object(instance.__assign)(
                {
                    ref: oldRef,
                    timeout: {
                        enter: i ? 600 + 200 * value : 0,
                        exit: context ? 600 + 200 * start : 0,
                    },
                    classNames: {
                        enter: name,
                        enterActive: resolve()(
                            range,
                            ((sort = {}),
                            (sort[out.modifier('stagger-' + value)] =
                                value > 0),
                            sort)
                        ),
                        exit: done,
                        exitActive: resolve()(
                            nodeType,
                            ((cache = {}),
                            (cache[out.modifier('stagger-' + start)] =
                                start > 0),
                            cache)
                        ),
                    },
                },
                expanded
            )
        );
    });
    var i = Object(root.memo)(d3_time_scaleSteps);
    var insertSVGTemplateAssign = require(80);
    var uvRect = require(103);
    var _CalendarDay2 = require(1512);
    var error = require(252);
    var context = require.n(error);
    var transport = Object(descriptor.a)({
        accountSettings: {
            defaultMessage: 'Account Settings',
            id: 'src/web/rd/components/TopNav/Account/AccountDropdown/AccountDropdown:accountSettings',
        },
        helpCenter: {
            defaultMessage: 'Help Center',
            id: 'src/web/rd/components/TopNav/Account/AccountDropdown/AccountDropdown:helpCenter',
        },
        activateDevice: {
            defaultMessage: 'Activate Your Device',
            id: 'src/web/rd/components/TopNav/Account/AccountDropdown/AccountDropdown:activateDevice',
        },
        signOut: {
            defaultMessage: 'Sign Out',
            id: 'src/web/rd/components/TopNav/Account/AccountDropdown/AccountDropdown:signOut',
        },
    });
    var SettingsIcon = Object(root.memo)(function (amlNode) {
        var e;
        var n = amlNode.show;
        var notifier = notify({
            delay: 200,
        });
        var iaRef = notifier[0];
        var readable = notifier[1];
        var i = n || readable;
        var langClass = resolve()(
            context.a.accountDropdown,
            (((e = {})[context.a.show] = i), e)
        );
        var onPlusClick = Object(root.useCallback)(function () {
            BaseDao.a.remove(moduleToRemove.c);
            if (window.google && window.google.accounts) {
                window.google.accounts.id.disableAutoSelect();
            }
            window.location.href = Object(tParentMatrix.b)(
                Object(c2.g)({
                    isByUser: true,
                })
            );
        }, []);
        return row.a.createElement(
            'div',
            {
                className: langClass,
                ref: iaRef,
            },
            row.a.createElement(
                'div',
                {
                    className: context.a.menuItemContainer,
                },
                row.a.createElement(
                    _reactRouter.Link,
                    {
                        to: $scope.d.account,
                        className: context.a.menuItem,
                    },
                    row.a.createElement(settings.a, transport.accountSettings)
                ),
                row.a.createElement(
                    'a',
                    {
                        className: context.a.menuItem,
                        href: $scope.a.helpCenter,
                        target: '_blank',
                    },
                    row.a.createElement(settings.a, transport.helpCenter)
                ),
                row.a.createElement(
                    _reactRouter.Link,
                    {
                        to: $scope.d.activate,
                        className: context.a.menuItem,
                    },
                    row.a.createElement(settings.a, transport.activateDevice)
                )
            ),
            row.a.createElement(
                'div',
                {
                    className: context.a.signOut,
                },
                row.a.createElement(
                    'div',
                    {
                        className: context.a.signOutButton,
                        onClick: onPlusClick,
                    },
                    row.a.createElement(Webview, null),
                    row.a.createElement(settings.a, transport.signOut)
                )
            )
        );
    });
    var n = function (name) {};
    var object = Object(root.createContext)({
        showBrowseMenu: false,
        setShowBrowseMenu: n,
        hoverOnBrowseText: false,
        setHoverOnBrowseText: n,
        hoverOnBrowseMenu: false,
        setHoverOnBrowseMenu: n,
        showMobileMenu: false,
        setShowMobileMenu: n,
        showMobileAccountMenu: false,
        setShowMobileAccountMenu: n,
        isSearchInputFocused: false,
        setIsSearchInputFocused: n,
    });
    var range = require(279);
    var config = require.n(range);
    var AuthService = Object(descriptor.a)({
        greetingNoName: {
            defaultMessage: 'Hi',
            id: 'src/web/rd/components/TopNav/Account/Account:greetingNoName',
        },
        greetingName: {
            defaultMessage: 'Hi, <customtag>{name}</customtag>',
            id: 'src/web/rd/components/TopNav/Account/Account:greetingName',
        },
        register: {
            defaultMessage: 'Register',
            id: 'src/web/rd/components/TopNav/Account/Account:register',
        },
        signin: {
            defaultMessage: 'Sign In',
            id: 'src/web/rd/components/TopNav/Account/Account:signin',
        },
    });
    var factory = function (name) {
        return name === $scope.d.landing ||
            name === $scope.d.home ||
            name.includes($scope.d.reset)
            ? ''
            : '?redirect=' + name;
    };
    var parent = Object(root.memo)(function (bindData) {
        var result;
        var template = bindData.inverted;
        var i = Object(insertSVGTemplateAssign.a)(function (n) {
            return n.ui;
        }).viewportType;
        var model = notify({
            delay: 200,
            skip: 'desktop' !== i,
        });
        var attr = model[0];
        var loading = model[1];
        var json = Object(root.useContext)(object);
        var show = json.showMobileAccountMenu;
        var showNewSmsButton = json.setShowMobileAccountMenu;
        var file = Object(insertSVGTemplateAssign.a)(function (object) {
            return object.auth.user;
        });
        var doc = !!file;
        var exclusion = Object(insertSVGTemplateAssign.a)(function (settings) {
            var stackTileGraphic;
            var URLofViewer;
            return (
                (null ===
                    (URLofViewer =
                        null === (stackTileGraphic = settings.routing) ||
                        void 0 === stackTileGraphic
                            ? void 0
                            : stackTileGraphic.locationBeforeTransitions) ||
                void 0 === URLofViewer
                    ? void 0
                    : URLofViewer.pathname) || ''
            );
        });
        var user = Object(insertSVGTemplateAssign.a)(function (results) {
            var settings;
            var newFile;
            var data;
            return (
                (null === (settings = results.userSettings) ||
                void 0 === settings
                    ? void 0
                    : settings.first_name) ||
                (null === (newFile = file) || void 0 === newFile
                    ? void 0
                    : newFile.name) ||
                (null === (data = file) || void 0 === data
                    ? void 0
                    : data.email) ||
                ''
            );
        });
        var onPlusClick = Object(root.useCallback)(
            function () {
                if ('desktop' !== i) {
                    showNewSmsButton(!show);
                }
            },
            [showNewSmsButton, show, i]
        );
        return doc
            ? row.a.createElement(
                  'div',
                  {
                      className: resolve()(
                          config.a.account,
                          ((result = {}),
                          (result[config.a.opened] = show),
                          (result[config.a.inverted] = template),
                          result)
                      ),
                      ref: attr,
                      onClick: onPlusClick,
                  },
                  user
                      ? row.a.createElement(
                            settings.a,
                            createElement()({}, AuthService.greetingName, {
                                values: {
                                    name: user,
                                    customtag: function (boardManager) {
                                        var commentNodes = boardManager[0];
                                        return row.a.createElement(
                                            'span',
                                            {
                                                className: config.a.name,
                                            },
                                            commentNodes
                                        );
                                    },
                                },
                            })
                        )
                      : row.a.createElement(
                            settings.a,
                            AuthService.greetingNoName
                        ),
                  row.a.createElement(_CalendarDay2.a, {
                      className: config.a.chevronIcon,
                  }),
                  row.a.createElement(SettingsIcon, {
                      show: loading || show,
                  })
              )
            : row.a.createElement(
                  row.a.Fragment,
                  null,
                  row.a.createElement(
                      _reactRouter.Link,
                      {
                          to: $scope.d.signIn + factory(exclusion),
                          className: config.a.signIn,
                      },
                      row.a.createElement(settings.a, AuthService.signin)
                  ),
                  row.a.createElement(
                      _reactRouter.Link,
                      {
                          to: $scope.d.register + factory(exclusion),
                          className: config.a.register,
                      },
                      row.a.createElement(settings.a, AuthService.register)
                  )
              );
    });
    var CustomizeComponent = row.a.memo(function (filterFormProps) {
        return row.a.createElement(
            'svg',
            Object(instance.__assign)(
                {
                    width: '1em',
                    height: '1em',
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                },
                filterFormProps
            ),
            row.a.createElement('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5ZM4.125 10.5C4.125 14.015 6.985 16.875 10.5 16.875C14.015 16.875 16.875 14.015 16.875 10.5C16.875 6.985 14.015 4.125 10.5 4.125C6.985 4.125 4.125 6.985 4.125 10.5Z',
                fill: 'currentColor',
            }),
            row.a.createElement('path', {
                d: 'M18.636 17.214L20.708 19.294C21.098 19.685 21.097 20.318 20.706 20.708C20.511 20.903 20.255 21 20 21C19.744 21 19.487 20.902 19.291 20.706L17.219 18.626L18.636 17.214Z',
                fill: 'currentColor',
            })
        );
    });
    var def = require(253);
    var scope = require.n(def);
    var panel = Object(descriptor.a)({
        searchPlaceholder: {
            defaultMessage: 'Find movies, TV shows and more',
            id: 'src/web/rd/components/TopNav/SearchBar/SearchBar:searchPlaceholder',
        },
    });
    var TabTemplate = Object(root.memo)(function (bindData) {
        var _CLOSED$CLOSING$OPENI;
        var template = bindData.inverted;
        var _in = bindData.isMobileMenuShow;
        var Locale = Object(uvRect.b)();
        var c = Object(insertSVGTemplateAssign.a)(function (n) {
            return n.ui;
        }).viewportType;
        var node = Object(insertSVGTemplateAssign.a)(function (YoutubeService) {
            return YoutubeService.search;
        });
        var start2 = node.key;
        var key = node.fromPath;
        var parent = void 0 === key ? $scope.d.landing : key;
        var path = Object(insertSVGTemplateAssign.a)(function (state) {
            var routing;
            return (
                (null === (routing = null == state ? void 0 : state.routing) ||
                void 0 === routing
                    ? void 0
                    : routing.locationBeforeTransitions) || {}
            );
        }).pathname;
        var value = void 0 === path ? '' : path;
        var parts = Object(root.useState)(start2);
        var time = parts[0];
        var p = parts[1];
        var when = Object(m2.e)();
        var editor = Object(root.useRef)(null);
        var remove = 0 === value.indexOf('' + $scope.d.search);
        var O = Object(root.useContext)(object);
        var has = O.setShowMobileMenu;
        var setState = O.setIsSearchInputFocused;
        var updateDevicesAfterDelay = Object(root.useCallback)(function () {
            var element = editor.current;
            if (element && 'number' == typeof element.selectionStart) {
                setTimeout(function () {
                    element.focus();
                    element.selectionStart = element.selectionEnd =
                        element.value.length;
                }, 1);
            }
        }, []);
        Object(root.useEffect)(
            function () {
                if (remove) {
                    updateDevicesAfterDelay();
                } else {
                    p('');
                }
            },
            [remove, updateDevicesAfterDelay]
        );
        var updateRecStateUninit = Object(root.useCallback)(
            function () {
                when(Object(_events.a)());
                when(Object(router.push)(parent));
                p('');
            },
            [when, parent]
        );
        var rejectAfter$time = Object(root.useCallback)(
            function (e) {
                var t = encodeURIComponent(e);
                if (0 !== e.trim().length) {
                    when(Object(_events.e)(value));
                    when(
                        remove
                            ? Object(router.replace)($scope.d.search + '/' + t)
                            : Object(router.push)($scope.d.search + '/' + t)
                    );
                } else {
                    updateRecStateUninit();
                }
            },
            [updateRecStateUninit, when, remove, value]
        );
        var interpolateBar = Object(root.useCallback)(
            call()(rejectAfter$time, 500, {
                leading: false,
                trailing: true,
            }),
            [rejectAfter$time]
        );
        var _updateShellBoundsAndConformDims = Object(root.useCallback)(
            function (e) {
                var t = e.target.value || '';
                if (t.trim().length > 64) {
                    t = t.substring(0, 64);
                }
                if (time !== t && 'mobile' !== c) {
                    interpolateBar(t);
                }
                p(t);
            },
            [interpolateBar, time, c]
        );
        var onSubmit = Object(root.useCallback)(
            function (event) {
                event.preventDefault();
                if ('mobile' === c) {
                    rejectAfter$time(time);
                    has(false);
                }
            },
            [time, rejectAfter$time, has, c]
        );
        var callback = Object(root.useCallback)(
            function (L_key) {
                var cache;
                return resolve()(
                    L_key,
                    (((cache = {})[scope.a.open] = !!time),
                    (cache[scope.a.inverted] = template),
                    cache)
                );
            },
            [template, time]
        );
        return row.a.createElement(
            'div',
            {
                className: resolve()(
                    callback(scope.a.searchBar),
                    ((_CLOSED$CLOSING$OPENI = {}),
                    (_CLOSED$CLOSING$OPENI[scope.a.showOnMobile] = _in),
                    _CLOSED$CLOSING$OPENI)
                ),
            },
            row.a.createElement(CustomizeComponent, {
                className: scope.a.searchIcon,
            }),
            row.a.createElement(
                'form',
                {
                    onSubmit: onSubmit,
                    className: callback(scope.a.form),
                },
                row.a.createElement('input', {
                    ref: editor,
                    value: time,
                    className: callback(scope.a.textInput),
                    required: true,
                    type: 'search',
                    placeholder: Locale.formatMessage(panel.searchPlaceholder),
                    onChange: _updateShellBoundsAndConformDims,
                    onFocus: function () {
                        return setState(true);
                    },
                    onBlur: function () {
                        return setState(false);
                    },
                })
            ),
            time
                ? row.a.createElement(ShapeViewer_1.a, {
                      className: scope.a.closeIcon,
                      onClick: updateRecStateUninit,
                  })
                : null
        );
    });
    var _CalendarEvent2 = require(1510);
    var regexpStart = require(553);
    var m = require.n(regexpStart);
    var response = require(277);
    var signIn = require(176);
    var id = require(278);
    var query = require.n(id);
    var opts = Object(descriptor.a)({
        popular: {
            defaultMessage: 'Popular',
            id: 'src/web/rd/components/TopNav/Browse/BrowseMenu/BrowseMenu:popular',
        },
        genres: {
            defaultMessage: 'Genres',
            id: 'src/web/rd/components/TopNav/Browse/BrowseMenu/BrowseMenu:genres',
        },
        collections: {
            defaultMessage: 'Collections',
            id: 'src/web/rd/components/TopNav/Browse/BrowseMenu/BrowseMenu:collections',
        },
        channels: {
            defaultMessage: 'Networks',
            id: 'src/web/rd/components/TopNav/Browse/BrowseMenu/BrowseMenu:channels',
        },
        browse: {
            defaultMessage: 'Browse',
            id: 'src/web/rd/components/TopNav/Browse/BrowseMenu/BrowseMenu:browse',
        },
    });
    var Button = Object(root.memo)(function (model) {
        var title = model.tag;
        var predicates = model.items;
        var width = model.columns;
        var containerStyle = model.containerStyle;
        var s = model.itemsStyle;
        var gotoNewOfflinePage = Object(m2.e)();
        var config = Object(root.useContext)(object);
        var display_check = config.setShowBrowseMenu;
        var il = config.setHoverOnBrowseText;
        var protocol = config.setHoverOnBrowseMenu;
        var port = config.setShowMobileMenu;
        var v = Object(root.useContext)(source.d);
        var open = Object(root.useCallback)(
            function (isSlidingUp, canCreateDiscussions) {
                gotoNewOfflinePage(
                    Object(alias.b)({
                        startX: 0,
                        startY: 0,
                        containerSlug: canCreateDiscussions,
                        componentType:
                            frontEndModuleConfig.ANALYTICS_COMPONENTS
                                .navigationDrawerComponent,
                    })
                );
                display_check(false);
                il(false);
                protocol(false);
                port(false);
            },
            [gotoNewOfflinePage, protocol, il, display_check, port, v]
        );
        return row.a.createElement(
            response.a.Item,
            {
                className: query.a.gridContainer,
                desktop: width,
                tablet: 6,
                mobile: 6,
                style: containerStyle,
            },
            row.a.createElement(
                'div',
                {
                    className: query.a.containerTitle,
                },
                title
            ),
            row.a.createElement(
                'div',
                {
                    className: query.a.containerItems,
                    style: s,
                },
                predicates.sort().map(function (params) {
                    var button = params.id;
                    var pTitle = params.title;
                    var handleType = params.type;
                    var id = params.slug;
                    var after = Object(c2.d)(button, {
                        type: handleType,
                    });
                    return row.a.createElement(
                        _reactRouter.Link,
                        {
                            onClick: function (target) {
                                return open(target, id);
                            },
                            key: button,
                            to: after,
                            className: query.a.containerLink,
                        },
                        pTitle
                    );
                })
            )
        );
    });
    var NgGridHeaderCellInput = Object(root.memo)(function (info) {
        var elem;
        var size = info.className;
        var value = info.inverted;
        var streamer = Object(insertSVGTemplateAssign.a)(function (n) {
            return n.ui;
        });
        var stack = streamer.viewportType;
        var list = streamer.twoDigitCountryCode;
        var magnifier = Object(insertSVGTemplateAssign.a)(frame.d);
        var selected = Object(currentTransformMatrix.a)('channels', list);
        var forward_QMARK_ = 'mobile' === stack;
        var isMatchingStack = 'desktop' === stack;
        var data = notify({
            delay: 200,
            skip: !isMatchingStack,
        });
        var err = data[0];
        var song = data[1];
        var $magnifier = Object(inColl.b)(magnifier);
        var n = resolve()(
            query.a.browseMenu,
            size,
            (((elem = {})[query.a.inverted] = value), elem)
        );
        var _ = Object(uvRect.b)();
        var O = Object(root.useContext)(object);
        var blockhead = O.showBrowseMenu;
        var has = O.setShowBrowseMenu;
        var toISO = O.hoverOnBrowseText;
        var isGoodSong = O.setHoverOnBrowseMenu;
        Object(root.useContext)(source.d);
        Object(root.useEffect)(
            function () {
                if (isMatchingStack) {
                    if (!(song || toISO)) {
                        has(false);
                    }
                    if (song) {
                        has(true);
                    }
                    isGoodSong(song);
                }
            },
            [toISO, isMatchingStack, song, isGoodSong, has]
        );
        var _a = $magnifier;
        var out = _a[options.CONTAINER_GROUPINGS.POPULAR];
        var a = _a[options.CONTAINER_GROUPINGS.GENRES];
        var c = _a[options.CONTAINER_GROUPINGS.COLLECTIONS];
        var val = _a[options.CONTAINER_GROUPINGS.CHANNELS];
        var j = 'browseMenu' + (stack[0].toUpperCase() + stack.substr(1));
        var HeaderLevenshteinDistanceToLengthRatio = Math.max(
            out.length,
            Math.ceil(a.length / 2),
            c.length,
            val.length
        );
        var leftPanelStyle = {};
        var drawerContainerStyle = {};
        var paneStyle = {};
        if (isMatchingStack) {
            var maxDistanceToConsiderSimilar =
                28 * HeaderLevenshteinDistanceToLengthRatio;
            var maskHeight = maxDistanceToConsiderSimilar + 40;
            paneStyle = {
                height: maskHeight + 24,
            };
            drawerContainerStyle = {
                height: maskHeight,
            };
            leftPanelStyle = {
                maxHeight: maxDistanceToConsiderSimilar,
            };
        }
        var loc = row.a.createElement(
            'div',
            {
                className: n,
                style: paneStyle,
            },
            row.a.createElement(
                response.a.Container,
                {
                    ref: err,
                },
                row.a.createElement(
                    'div',
                    {
                        className: query.a.tabletTitle,
                    },
                    _.formatMessage(opts.browse),
                    row.a.createElement(
                        'div',
                        {
                            onClick: function () {
                                has(false);
                            },
                        },
                        row.a.createElement(ShapeViewer_1.a, null)
                    )
                ),
                row.a.createElement(Button, {
                    tag: _.formatMessage(opts.popular),
                    items: out,
                    columns: 3,
                    itemsStyle: leftPanelStyle,
                    containerStyle: drawerContainerStyle,
                }),
                row.a.createElement(Button, {
                    tag: _.formatMessage(opts.genres),
                    items: a,
                    columns: 6,
                    itemsStyle: leftPanelStyle,
                    containerStyle: drawerContainerStyle,
                }),
                row.a.createElement(Button, {
                    tag: _.formatMessage(opts.collections),
                    items: c,
                    columns: 4,
                    itemsStyle: leftPanelStyle,
                    containerStyle: drawerContainerStyle,
                }),
                selected
                    ? row.a.createElement(Button, {
                          tag: _.formatMessage(opts.channels),
                          items: val,
                          columns: 3,
                          itemsStyle: leftPanelStyle,
                          containerStyle: drawerContainerStyle,
                      })
                    : null
            )
        );
        var vec__8395 = forward_QMARK_
            ? loc
            : row.a.createElement(
                  i,
                  {
                      mountOnEnter: true,
                      unmountOnExit: true,
                      entranceTransition: j,
                      exitTransition: j,
                      in: blockhead,
                  },
                  loc
              );
        return 'tablet' !== stack
            ? vec__8395
            : 'undefined' == typeof document
            ? null
            : Object(signIn.createPortal)(vec__8395, document.body);
    });
    var info = Object(descriptor.a)({
        browse: {
            defaultMessage: 'Browse',
            id: 'src/web/rd/components/TopNav/Browse/Browse:browse',
        },
    });
    var ColumnHider = Object(root.memo)(function (options) {
        var request;
        var modelName = options.className;
        var inverted = options.inverted;
        var def2 = Object(insertSVGTemplateAssign.a)(function (n) {
            return n.ui.viewportType;
        });
        var filterText = 'mobile' === def2;
        var splitView = 'tablet' === def2;
        var returningPromisesWorks = 'desktop' === def2;
        var tiledImageBRs = notify({
            delay: 200,
            skip: 'desktop' !== def2,
        });
        var tiledImageBR = tiledImageBRs[0];
        var lng = tiledImageBRs[1];
        var data = Object(root.useContext)(object);
        var token = data.showBrowseMenu;
        var ok = data.setShowBrowseMenu;
        var proj = data.setHoverOnBrowseText;
        var jointKeys = data.hoverOnBrowseMenu;
        var i18nUtil = Object(uvRect.b)();
        Object(root.useEffect)(
            function () {
                if (returningPromisesWorks) {
                    if (!(lng || jointKeys)) {
                        ok(false);
                    }
                    if (lng) {
                        ok(true);
                    }
                    proj(lng);
                }
            },
            [jointKeys, returningPromisesWorks, lng, proj, ok]
        );
        var onPlusClick = Object(root.useCallback)(
            function () {
                if (filterText) {
                    ok(!token);
                }
                if (splitView) {
                    ok(true);
                }
            },
            [filterText, splitView, ok, token]
        );
        var item = resolve()(
            modelName,
            m.a.browse,
            (((request = {})[m.a.opened] = token), request)
        );
        return row.a.createElement(
            row.a.Fragment,
            null,
            filterText
                ? null
                : row.a.createElement(
                      'div',
                      {
                          className: item,
                          ref: tiledImageBR,
                          onClick: onPlusClick,
                      },
                      row.a.createElement(
                          'span',
                          null,
                          i18nUtil.formatMessage(info.browse)
                      ),
                      splitView
                          ? null
                          : row.a.createElement(_CalendarEvent2.a, null)
                  ),
            row.a.createElement(NgGridHeaderCellInput, {
                className: m.a.menu,
                inverted: inverted,
            })
        );
    });
    var l = require(100);
    var a = require.n(l);
    var message = Object(descriptor.a)({
        tubiKids: {
            defaultMessage: 'Tubi Kids',
            id: 'src/web/rd/components/TopNav/TopNav:tubiKids',
        },
        exitKids: {
            defaultMessage: 'Exit Kids',
            id: 'src/web/rd/components/TopNav/TopNav:exitKids',
        },
        close: {
            defaultMessage: 'Close',
            id: 'src/web/rd/components/TopNav/TopNav:close',
        },
    });
    var enlargeFontSize = function (e) {
        var remoteAddonFilename = CallConstant.DialogType.ENTER_KIDS_MODE;
        var addonMainFile = Object(ast.e)(
            Object(originalB.c)(),
            remoteAddonFilename
        );
        if (addonMainFile) {
            Object(curves.g)(q.j, addonMainFile);
        }
        e.preventDefault();
        Object(clonedI.b)(true);
        Object(clonedI.a)();
    };
    var TabsNav = Object(root.memo)(function (module) {
        var _dependsOn;
        var show = module.show;
        var PageFloatStore = module.viewportType;
        var depends = module.isBrowseMenuOpen;
        return row.a.createElement(
            i,
            {
                entranceTransition: 'fadeIn',
                exitTransition: 'fadeOut',
                mountOnEnter: true,
                unmountOnExit: true,
                in: show,
            },
            row.a.createElement('div', {
                className: resolve()(
                    a.a.overlay,
                    ((_dependsOn = {}),
                    (_dependsOn[a.a.tabletLeftMenuOverlay] =
                        'tablet' === PageFloatStore && depends),
                    _dependsOn)
                ),
            })
        );
    });
    var PivotButton = Object(root.memo)(function (e) {
        var _dependsOn;
        var _events;
        var shippoDocs;
        var c = e.pathname;
        var methods = Object(uvRect.b)();
        var tiledImageBRs = Object(root.useState)(true);
        var is_document = tiledImageBRs[0];
        var _updateFromStandalone = tiledImageBRs[1];
        var gotoNewOfflinePage = Object(m2.e)();
        var self = Object(insertSVGTemplateAssign.a)(function (n) {
            return n.ui;
        });
        var data = self.isKidsModeEnabled;
        var OPENING = self.viewportType;
        var trigger = self.liveNewsMenuVisible;
        var isMobile = self.isMobile;
        var filename = self.twoDigitCountryCode;
        var previous = self.fullscreen;
        var state = Object(insertSVGTemplateAssign.a)(function (toComp) {
            return toComp.container;
        });
        var startCharset = state.listLoaded;
        var endCharset = state.isFetching;
        var range = state.listLoading;
        var isOpen = 'mobile' === OPENING;
        var values = Object(root.useState)(false);
        var option = values[0];
        var notes_mac = values[1];
        var docsList = Object(root.useState)(false);
        var doc = docsList[0];
        var verify = docsList[1];
        var LU = Object(root.useState)(false);
        var L = LU[0];
        var U = LU[1];
        var list = Object(root.useState)(false);
        var randomProvider = list[0];
        var B = list[1];
        var cache = Object(root.useState)(false);
        var w = cache[0];
        var odatahash = cache[1];
        var tiledImageTLs = Object(root.useState)(false);
        var depends = tiledImageTLs[0];
        var tiledImageTL = tiledImageTLs[1];
        var open = isOpen ? w : option || trigger;
        var isNewStateNearStart = Object(insertSVGTemplateAssign.a)(A.a);
        var sourcefile = Object(currentTransformMatrix.a)('kidsMode', filename);
        var eod = Object(insertSVGTemplateAssign.a)(function (s) {
            return Object(v.c)(s) && Object(v.e)(s);
        });
        var isReplayingSong = !isMobile && isNewStateNearStart;
        var imgLoaded = !data && sourcefile;
        var isWikiwand = data && sourcefile && !eod;
        var skipPool = (isOpen && doc) || eod;
        var onPlusClick = Object(root.useCallback)(
            function () {
                if (isOpen) {
                    verify(!doc);
                }
            },
            [isOpen, doc]
        );
        var _cid = Object(tParentMatrix.a)(c, 0);
        var pair_target =
            options.HIDE_TOP_NAV_PATHNAMES.indexOf(_cid) > -1 || previous;
        var override =
            !options.IGNORE_INVERTED_PAGE_PATHNAMES.includes(c) &&
            options.INVERTED_PAGE_PATHNAMES.includes(_cid);
        var langClass = resolve()(
            a.a.navItem,
            (((_dependsOn = {})[a.a.inverted] = override),
            (_dependsOn[a.a.hidden] = 'tablet' === OPENING && depends),
            _dependsOn)
        );
        Object(root.useEffect)(
            function () {
                if (!(startCharset || endCharset || range)) {
                    gotoNewOfflinePage(Object(args.e)());
                }
            },
            [gotoNewOfflinePage, endCharset, startCharset, range]
        );
        Object(root.useEffect)(function () {
            var onInspectorMove = call()(function () {
                var _nextCheck = Math.round(window.pageYOffset);
                _updateFromStandalone(_nextCheck <= 0);
            }, 50);
            return (
                window.addEventListener('scroll', onInspectorMove),
                function () {
                    window.removeEventListener('scroll', onInspectorMove);
                }
            );
        }, []);
        var valueClassName = (function (aNetChannelMessage) {
            return aNetChannelMessage ? a.a.tubiKidsLogo : a.a.tubiLogo;
        })(data);
        var menuCloseButton = Object(root.useMemo)(
            function () {
                return row.a.createElement(
                    'div',
                    {
                        className: a.a.navItems,
                    },
                    row.a.createElement(ColumnHider, {
                        className: langClass,
                        inverted: override,
                    }),
                    imgLoaded
                        ? row.a.createElement(
                              'div',
                              {
                                  className: langClass,
                                  onClick: enlargeFontSize,
                              },
                              methods.formatMessage(message.tubiKids)
                          )
                        : null,
                    isReplayingSong
                        ? row.a.createElement(NgReactGridHeader, {
                              linkTextClassname: langClass,
                              inverse: override,
                          })
                        : null,
                    isWikiwand
                        ? row.a.createElement(
                              tex,
                              null,
                              function (callbackCancel) {
                                  return row.a.createElement(
                                      'button',
                                      {
                                          className: a.a.exitKids,
                                          onClick: callbackCancel,
                                      },
                                      row.a.createElement(Webview, null),
                                      methods.formatMessage(message.exitKids)
                                  );
                              }
                          )
                        : null
                );
            },
            [
                methods,
                override,
                langClass,
                imgLoaded,
                isReplayingSong,
                isWikiwand,
            ]
        );
        var command_module_id = Object(root.useMemo)(
            function () {
                return {
                    showBrowseMenu: option,
                    setShowBrowseMenu: notes_mac,
                    hoverOnBrowseMenu: randomProvider,
                    hoverOnBrowseText: L,
                    setHoverOnBrowseText: U,
                    setHoverOnBrowseMenu: B,
                    showMobileMenu: doc,
                    setShowMobileMenu: verify,
                    showMobileAccountMenu: w,
                    setShowMobileAccountMenu: odatahash,
                    isSearchInputFocused: depends,
                    setIsSearchInputFocused: tiledImageTL,
                };
            },
            [randomProvider, L, depends, option, w, doc]
        );
        var preview = row.a.createElement(
            _reactRouter.Link,
            {
                to: $scope.d.home,
            },
            row.a.createElement(_suggestItem2.a, {
                className: valueClassName,
                isKidsModeEnabled: data,
                color: override ? 'black' : 'white',
            })
        );
        return pair_target
            ? null
            : row.a.createElement(
                  object.Provider,
                  {
                      value: command_module_id,
                  },
                  row.a.createElement(
                      row.a.Fragment,
                      null,
                      row.a.createElement(TabsNav, {
                          show: open,
                          viewportType: OPENING,
                          isBrowseMenuOpen: option,
                      }),
                      row.a.createElement(
                          'nav',
                          {
                              className: resolve()(
                                  a.a.topNav,
                                  ((_events = {}),
                                  (_events[a.a.withGradientBackground] =
                                      (is_document &&
                                          !option &&
                                          !trigger &&
                                          !w) ||
                                      doc),
                                  (_events[a.a.inverted] = override),
                                  _events)
                              ),
                          },
                          row.a.createElement(
                              'div',
                              {
                                  className: a.a.sectionContainer,
                              },
                              row.a.createElement(
                                  'div',
                                  {
                                      className: a.a.menuTrigger,
                                      onClick: onPlusClick,
                                  },
                                  row.a.createElement(
                                      'div',
                                      {
                                          className: resolve()(
                                              a.a.mobileMenuIcon,
                                              ((shippoDocs = {}),
                                              (shippoDocs[a.a.closed] = doc),
                                              shippoDocs)
                                          ),
                                      },
                                      doc
                                          ? row.a.createElement(
                                                ShapeViewer_1.a,
                                                null
                                            )
                                          : row.a.createElement(
                                                ControlledText,
                                                null
                                            )
                                  ),
                                  doc
                                      ? row.a.createElement(
                                            'div',
                                            {
                                                className: a.a.closeText,
                                            },
                                            methods.formatMessage(message.close)
                                        )
                                      : null
                              ),
                              isOpen && doc ? null : preview,
                              isOpen
                                  ? row.a.createElement(
                                        i,
                                        {
                                            mountOnEnter: true,
                                            unmountOnExit: true,
                                            entranceTransition:
                                                'browseMenuMobile',
                                            exitTransition: 'browseMenuMobile',
                                            in: doc,
                                        },
                                        row.a.createElement(
                                            'div',
                                            {
                                                className:
                                                    a.a.mobileNavItemsContainer,
                                            },
                                            menuCloseButton
                                        )
                                    )
                                  : menuCloseButton
                          ),
                          row.a.createElement(
                              'div',
                              {
                                  className: resolve()(
                                      a.a.sectionContainer,
                                      a.a.rightSectionContainer
                                  ),
                              },
                              skipPool
                                  ? null
                                  : row.a.createElement(parent, {
                                        inverted: override,
                                    }),
                              row.a.createElement(TabTemplate, {
                                  inverted: override,
                                  isMobileMenuShow: doc,
                              })
                          )
                      )
                  )
              );
    });
    var point = require(552);
    var ob = require.n(point);
    var getKeys = function () {
        return Promise.all([
            require.e(2),
            require.e(0),
            require.e(3),
            require.e(25),
        ]).then(require.bind(null, 1850));
    };
    var b = function () {
        return Promise.all([
            require.e(2),
            require.e(1),
            require.e(0),
            require.e(22),
        ]).then(require.bind(null, 1835));
    };
    var content = Object(descriptor.a)({
        title: {
            defaultMessage: 'Maintenance',
            id: 'src/web/containers/App/App:title',
        },
        desc: {
            defaultMessage:
                'Tubi will be undergoing maintenance from 2am - 6am PST on Thursday, March 22nd. We apologize for any inconvenience this may cause.',
            id: 'src/web/containers/App/App:desc',
        },
    });
    var start = (function (e) {
        function Connect(context) {
            var that = e.call(this, context) || this;
            that.webRefreshStatus = source.e;
            that._sendReferredEvent = function () {
                var p = that.props;
                var r = p.query;
                var url = p.pathname;
                var specificResourceHandler = Object(curves.b)(r);
                if (specificResourceHandler) {
                    Object(curves.g)(
                        q.w,
                        Object(ast.p)(url, specificResourceHandler, q.v)
                    );
                }
            };
            that.handleResize = function () {
                var output = resize();
                if (output !== that.props.viewportType) {
                    that.props.dispatch(Object(d.q)(output));
                }
            };
            that.debouncedHandleResize = call()(that.handleResize, 50);
            var r = context.webRefresh.getValue();
            return (
                (that.webRefreshStatus = {
                    enabledPage:
                        'refresh_all' === r || 'refresh_pages_only' === r,
                    enabledTopNav:
                        'refresh_all' === r || 'refresh_top_nav_only' === r,
                }),
                that
            );
        }
        return (
            Object(instance.__extends)(Connect, e),
            (Connect.prototype.getChildContext = function () {
                return {
                    deviceId: this.props.deviceId,
                };
            }),
            (Connect.prototype.componentDidMount = function () {
                var state = this.props;
                var dispatch = state.dispatch;
                var self = state.intl;
                var cc = state.isPlaybackEnabled;
                var count = state.isThirdPartySDKLoadable;
                var action = state.query.notify;
                var lastForegroundAdded = state.youboraEnabled;
                var experiment = state.webRefresh;
                if (
                    (dispatch(Object(d.p)(Object(h.c)())),
                    dispatch(Object(d.q)(resize())),
                    Object(position.a)(
                        window,
                        'resize',
                        this.debouncedHandleResize
                    ),
                    action && dispatch(Object(d.e)(action)),
                    options.ENABLE_MAINTENANCE_NOTIFICATION &&
                        !BaseDao.a.load(
                            options.COOKIE_MAINTENANCE_NOTIFICATION
                        ))
                ) {
                    BaseDao.a.save(options.COOKIE_MAINTENANCE_NOTIFICATION);
                    var response = {
                        status: 'info',
                        title: self.formatMessage(content.title),
                        description: self.formatMessage(content.desc),
                        autoDismiss: false,
                    };
                    dispatch(Object(d.a)(response, 'Maintenance'));
                }
                dispatch(Object(alias.f)());
                this._sendReferredEvent();
                Object(f0c.a)();
                if (cc && count) {
                    schemas.resolvers.resolveImaSDK();
                    if (lastForegroundAdded) {
                        require.e(26).then(require.bind(null, 1851));
                    }
                }
                experiment.logExposure();
            }),
            (Connect.prototype.componentDidUpdate = function (mathjaxConfig) {
                var props = this.props;
                var dispatch = props.dispatch;
                var highlightedColumn = props.isAllowedToInitExternalSDK;
                var isExclued = props.isAgeGateModalVisible;
                var address = props.location;
                var params = props.params;
                if (
                    mathjaxConfig.isAgeGateModalVisible &&
                    !isExclued &&
                    highlightedColumn
                ) {
                    dispatch(
                        Object(alias.e)({
                            location: address,
                            params: params,
                        })
                    );
                }
            }),
            (Connect.prototype.render = function () {
                var imageData;
                var props = this.props;
                var action = props.pathname;
                var values = props.children;
                var data = props.containerMenuVisible;
                var value = props.intl;
                var config = props.isKidsModeEnabled;
                var langClass = resolve()(
                    ob.a.app,
                    (((imageData = {})[ob.a.noScroll] = data), imageData)
                );
                var children = this.webRefreshStatus.enabledTopNav
                    ? row.a.createElement(PivotButton, {
                          pathname: action,
                      })
                    : row.a.createElement(RedBox, {
                          pathname: action,
                      });
                return row.a.createElement(
                    'div',
                    {
                        id: 'app',
                        className: langClass,
                        style: {
                            background: doc.b.getAppThemeColor(
                                config,
                                this.webRefreshStatus
                            ),
                        },
                    },
                    row.a.createElement(
                        source.c,
                        {
                            value: this.webRefreshStatus,
                        },
                        row.a.createElement(
                            _DraggableCore2.a,
                            Object(doc.c)(value, config, this.webRefreshStatus)
                        ),
                        row.a.createElement(HorizontalScroller, null),
                        row.a.createElement(Input, {
                            loader: getKeys,
                        }),
                        row.a.createElement(Input, {
                            loader: b,
                        }),
                        row.a.createElement(Stateful, null),
                        row.a.createElement(create, null),
                        row.a.createElement(
                            'div',
                            {
                                className: ob.a.appContent,
                            },
                            (function (args) {
                                return ['/webview/content/'].every(function (
                                    inRangeAlready
                                ) {
                                    return !args.startsWith(inRangeAlready);
                                });
                            })(action)
                                ? children
                                : null,
                            values
                        ),
                        row.a.createElement(TAG_SHY, null)
                    )
                );
            }),
            (Connect.fetchData = connect),
            (Connect.fetchDataDeferred = remove),
            (Connect.childContextTypes = {
                deviceId: _react.a.string,
            }),
            Connect
        );
    })(root.Component);
    var elemnoA =
        __WEBPACK_IMPORTED_MODULE_2_date_fns_difference_in_days___default()(
            Object(m2.b)(function (config, org) {
                var url = org.location;
                var data = config.auth;
                var ui = config.ui;
                var isVisible = ui.ageGateModal.isVisible;
                var commandDefinitions = ui.containerMenuVisible;
                var $draggedLayerElement = ui.isKidsModeEnabled;
                var trOption = ui.viewportType;
                var path = url.pathname;
                var params = url.query;
                var id = data.deviceId;
                var key = void 0 === id ? '' : id;
                var configClone = Object(v.c)(config);
                var handler = Object(new_opts.e)(config);
                var computeHandler =
                    handler &&
                    (!configClone || (configClone && !Object(v.b)(config)));
                return {
                    deviceId: key,
                    pathname: path,
                    query: params,
                    containerMenuVisible: commandDefinitions,
                    isAgeGateModalVisible: isVisible,
                    isAllowedToInitExternalSDK: Object(v.a)(config),
                    isKidsModeEnabled: $draggedLayerElement,
                    isPlaybackEnabled: handler,
                    isThirdPartySDKLoadable: computeHandler,
                    youboraEnabled: Object(shapePath.c)(config),
                    isCoppaEnabled: configClone,
                    viewportType: trOption,
                };
            })(Object(radio_runway_names.c)(start)),
            start
        );
    var Xa = Object(exportsB.a)(elemnoA, {
        webRefresh: TagHourlyStat.a,
    });
    var schema = require(486);
    var text = require(170);
    var wordFrequencies = require.n(text);
    var subject = require(1514);
    var CheckHourlyStat = require(142);
    var _CalendarTitle2 = require(684);
    var PivotRow = row.a.memo(function (filterFormProps) {
        return row.a.createElement(
            'svg',
            Object(instance.__assign)(
                {
                    width: '1em',
                    height: '1em',
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                },
                filterFormProps
            ),
            row.a.createElement('path', {
                d: 'M10.2943 3.29156C9.90189 3.6803 9.90189 4.30965 10.2943 4.69839L17.5371 11.8708C17.6154 11.9483 17.6154 12.0746 17.5371 12.1521L10.3214 19.3016C9.92899 19.6904 9.90189 20.3197 10.2933 20.7084C10.6848 21.0972 11.3211 21.0972 11.7136 20.7084L19.4954 13.028C20.1769 12.353 20.1568 11.655 19.5034 11.0078L11.7136 3.29156C11.3221 2.90281 10.6858 2.90281 10.2943 3.29156Z',
                fill: 'currentColor',
            })
        );
    });
    var TouchableComponent = Object(root.memo)(function (config) {
        var to = config.href;
        var title = config.logo;
        var dialog = config.style;
        var size = config.className;
        var rows = config.children;
        var scalingSize = config.onLinkClick;
        var n = resolve()('web-row-header', size, {
            'web-row-header--link': !!to,
        });
        var commentNodes = row.a.createElement(
            row.a.Fragment,
            null,
            title
                ? row.a.createElement('div', {
                      className: 'web-row-header__logo',
                      style: {
                          backgroundImage: "url('" + title + "')",
                      },
                  })
                : null,
            row.a.createElement(
                'div',
                {
                    className: 'web-row-header__title',
                },
                rows
            ),
            to
                ? row.a.createElement(PivotRow, {
                      className: 'web-row-header__chevron',
                  })
                : null
        );
        return to
            ? row.a.createElement(
                  _reactRouter.Link,
                  {
                      to: to,
                      onClick: scalingSize,
                      className: n,
                      style: dialog,
                  },
                  commentNodes
              )
            : row.a.createElement(
                  'div',
                  {
                      className: n,
                      style: dialog,
                  },
                  commentNodes
              );
    });
    var t = require(1519);
    var cpu = require(183);
    var locals = Object(cpu.e)();
    var length = locals.TILES_PER_ROW;
    var tags = locals.RENDERED_ROWS;
    var next = function (self) {
        var m = self.titlesPerRow;
        var n = void 0 === m ? length : m;
        var key = self.rowsToShow;
        var newElKey = void 0 === key ? tags : key;
        var index = self.nextIndex;
        var h = self.totalVideosCount;
        return (
            null !== h && Math.floor(index / n) + newElKey > Math.ceil(h / n)
        );
    };
    var transform = require(1489);
    var method = require(35);
    var _AboutPage2 = require(225);
    var captureClicked = function () {
        return Object(method.a)(
            function (options) {
                return options.video.byId;
            },
            function (isSlidingUp, canCreateDiscussions) {
                return canCreateDiscussions;
            },
            function (eventsDict, event) {
                return eventsDict[event];
            }
        );
    };
    var device = Object(descriptor.a)({
        play: {
            defaultMessage: 'Play',
            id: 'src/web/rd/containers/LinearTile/LinearTile:play',
        },
        myList: {
            defaultMessage: 'My List',
            id: 'src/web/rd/containers/LinearTile/LinearTile:myList',
        },
    });
    var PivotCell = Object(root.memo)(function (that) {
        var contentId = that.id;
        var pIndex = that.indexInContainer;
        var template = that.onNavigation;
        var mapAndFilter = Object(m2.e)();
        var assertGetContentFails = Object(root.useMemo)(captureClicked, []);
        var node = Object(m2.f)(function (restContext) {
            return assertGetContentFails(restContext, contentId);
        });
        var autoRefresh = Object(insertSVGTemplateAssign.a)(function (Tundra) {
            return Tundra.ui.isMobile;
        });
        var assert = Object(pkg.a)();
        var loc =
            node &&
            Object(c2.i)({
                video: node,
            });
        var p = node && Object(c2.f)(node);
        var f = Object(root.useCallback)(
            function () {
                if (autoRefresh && p) {
                    window.location.href = p;
                } else {
                    if (!autoRefresh && loc) {
                        mapAndFilter(Object(router.push)(loc));
                        if (!(null == template)) {
                            template({
                                contentId: contentId,
                                index: pIndex,
                            });
                        }
                    }
                }
            },
            [p, mapAndFilter, contentId, pIndex, autoRefresh, template, loc]
        );
        if (!node) {
            return null;
        }
        var cc = node.has_subtitle;
        var parent = node.landscape_images;
        var _ = (void 0 === parent ? [] : parent)[0];
        var resourceTitle = node.title;
        return row.a.createElement(_AboutPage2.a, null, function (result) {
            var buffer = result.active;
            var ref = result.ref;
            return row.a.createElement(transform.a, {
                ref: ref,
                lazyActive: buffer,
                tileOrientation: 'landscape',
                cc: cc,
                title: resourceTitle,
                thumbnailSrc: _,
                playLabel: assert.formatMessage(device.play),
                myListLabel: assert.formatMessage(device.myList),
                onClick: f,
                onPlayClick: f,
                href: loc,
            });
        });
    });
    var ThoughtCollection = require(692);
    var script = require(674);
    var all = require.n(script);
    var changedRadioControls = [
        options.CONTAINER_TYPES.CONTINUE_WATCHING,
        options.CONTAINER_TYPES.LINEAR,
    ];
    var pjax;
    var _class;
    var AsyncFuzzyPicker;
    var _pivotFields;
    var newBorders;
    var keyCodes;
    var BugItem = Object(root.memo)(function (that) {
        var id = that.containerId;
        var category = that.containerTitle;
        var options = that.containerHref;
        var o = that.containerContents;
        var malakh = that.containerLogo;
        var cop = that.containerPosition;
        var CircularList = that.containerSlug;
        var values = that.containerType;
        var initialIndex = that.initialIndex;
        var i = that.onLoadMore;
        var template = that.onNavigation;
        var orientation = changedRadioControls.includes(values)
            ? 'landscape'
            : 'portrait';
        var _setNavigationCallback = Object(root.useCallback)(
            function (objItem) {
                var index = objItem.index;
                template({
                    containerPosition: cop,
                    containerId: id,
                    containerSlug: CircularList,
                    index: index,
                });
            },
            [cop, id, CircularList, template]
        );
        var maindata3 = Object(root.useMemo)(
            function () {
                return o.map(function (newWayId, index) {
                    return {
                        id: newWayId,
                        index: index,
                    };
                });
            },
            [o]
        );
        var defaultRenderItem = Object(root.useCallback)(
            function (ea) {
                var r = ea.id;
                var n = ea.index;
                return values === options.CONTAINER_TYPES.LINEAR
                    ? row.a.createElement(PivotCell, {
                          key: r,
                          id: r,
                          indexInContainer: n,
                          onNavigation: _setNavigationCallback,
                      })
                    : row.a.createElement(ThoughtCollection.a, {
                          key: r,
                          id: r,
                          indexInContainer: n,
                          tileOrientation: orientation,
                          showProgress: id === options.HISTORY_CONTAINER_ID,
                          onNavigation: _setNavigationCallback,
                      });
            },
            [id, values, _setNavigationCallback, orientation]
        );
        var E = Object(root.useCallback)(
            function (e) {
                var pubDateEl = e.colsPerPage;
                var i = e.itemIndex;
                if (
                    next({
                        titlesPerRow: pubDateEl,
                        nextIndex: i,
                        totalVideosCount: o.length,
                    })
                ) {
                    i(id);
                }
            },
            [o.length, id, i]
        );
        return row.a.createElement(
            'section',
            {
                className: all.a.section,
            },
            row.a.createElement(
                response.a.Container,
                null,
                row.a.createElement(
                    TouchableComponent,
                    {
                        href: options,
                        logo: malakh,
                        className: all.a.rowHeader,
                    },
                    category
                )
            ),
            row.a.createElement(t.a, {
                initialIndex: initialIndex,
                data: maindata3,
                tileOrientation: orientation,
                renderItem: defaultRenderItem,
                adjustPrevNextForContentTile: true,
                onIndexChange: E,
                advance: false,
                showItemOverflow: true,
            })
        );
    });
    var widget = require(380);
    var result = require.n(widget);
    var _AppDownload2 = require(678);
    var input = require(505);
    var _import = require(120);
    var base = require.n(_import);
    var PatchItem =
        ((_class = pjax =
            (function (e) {
                function t() {
                    var _Object$getPrototypeO;
                    var local_mobile_core_user_remove_user_device;
                    var scope;
                    var wsFunction;
                    apply()(this, t);
                    var length = arguments.length;
                    var args = Array(length);
                    var i = 0;
                    for (; i < length; i++) {
                        args[i] = arguments[i];
                    }
                    return (
                        (local_mobile_core_user_remove_user_device = scope =
                            concat()(
                                this,
                                (_Object$getPrototypeO =
                                    t.__proto__ || Function()(t)).call.apply(
                                    _Object$getPrototypeO,
                                    [this].concat(args)
                                )
                            )),
                        (scope.loadMore = function (data, type) {
                            var root = scope.props;
                            var text = root.loadMoreItems;
                            var val = root.id;
                            var input = root.contents;
                            if (
                                next({
                                    titlesPerRow: data,
                                    nextIndex: type,
                                    totalVideosCount: input.length,
                                })
                            ) {
                                text(val);
                            }
                        }),
                        (scope.trackingCb = function (i) {
                            var data = scope.props;
                            var index = data.idx;
                            var slug = data.slug;
                            var joiningClientId = data.id;
                            (0, data.trackCb)({
                                containerPosition: index,
                                containerSlug: slug,
                                contId: joiningClientId,
                                column: i,
                            });
                        }),
                        (scope.trackDotContainerClick = function () {
                            return scope.trackingCb(-1);
                        }),
                        (wsFunction =
                            local_mobile_core_user_remove_user_device),
                        concat()(scope, wsFunction)
                    );
                }
                return (
                    match()(t, e),
                    r()(t, [
                        {
                            key: 'render',
                            value: function () {
                                var e = this.props;
                                var pathname = e.id;
                                var text = e.title;
                                var tile = e.type;
                                var msg = e.contents;
                                var newIndex = e.to;
                                var a = e.logo;
                                var value = void 0 === a ? '' : a;
                                var psNode = e.storeContainerPosition;
                                var initialIndex = e.initialIndex;
                                var pubDateEl = e.isKidsModeEnabled;
                                var isMobile = e.isMobile;
                                var displayMode = e.displayMode;
                                var useJRD =
                                    pathname === options.HISTORY_CONTAINER_ID;
                                var result = {
                                    contents: msg,
                                    loadMoreItems: this.loadMore,
                                    trackCb: this.trackingCb,
                                    type: tile,
                                    containerId: pathname,
                                    initialIndex: initialIndex,
                                    isMobile: isMobile,
                                };
                                var langClass = resolve()(
                                    base.a.containerBackground,
                                    cb()(
                                        {},
                                        base.a.lightBackground,
                                        tile ===
                                            options.CONTAINER_TYPES.CHANNEL &&
                                            !pubDateEl
                                    )
                                );
                                var E = resolve()(
                                    base.a.carousel,
                                    cb()(
                                        {},
                                        base.a.hideBorder,
                                        tile === options.CONTAINER_TYPES.CHANNEL
                                    )
                                );
                                var stackSizeAttr = 'linear' === tile;
                                var nodePresentationAttributes = stackSizeAttr
                                    ? cpu.c
                                    : cpu.a;
                                var removeMessage = void 0;
                                removeMessage = stackSizeAttr
                                    ? row.a.createElement(
                                          input.c,
                                          createElement()(
                                              {
                                                  carouselClassName:
                                                      base.a.carousel,
                                                  containerTitle: text,
                                                  landscape: true,
                                                  storeContainerPosition:
                                                      psNode,
                                                  overflowHidden: pubDateEl,
                                              },
                                              result,
                                              cpu.c
                                          )
                                      )
                                    : Object(inColl.d)(tile)
                                    ? row.a.createElement(
                                          input.d,
                                          createElement()(
                                              {
                                                  carouselClassName: E,
                                                  containerTitle: text,
                                                  displayAs:
                                                      stackSizeAttr ||
                                                      'full' === displayMode
                                                          ? 'grid'
                                                          : 'carousel',
                                                  landscape: stackSizeAttr,
                                                  showProgress: useJRD,
                                                  storeContainerPosition:
                                                      psNode,
                                                  overflowHidden: pubDateEl,
                                              },
                                              result,
                                              nodePresentationAttributes
                                          )
                                      )
                                    : row.a.createElement(
                                          input.a,
                                          createElement()(
                                              {
                                                  carouselClassName:
                                                      base.a.carousel,
                                                  containerTitle: text,
                                                  landscape: true,
                                                  storeContainerPosition:
                                                      psNode,
                                                  overflowHidden: pubDateEl,
                                              },
                                              result,
                                              cpu.b
                                          )
                                      );
                                var elem = row.a.createElement(
                                    'h2',
                                    {
                                        className: base.a.title,
                                    },
                                    text
                                );
                                var displayables = row.a.createElement(
                                    _reactRouter.Link,
                                    {
                                        to: newIndex,
                                        className: resolve()(
                                            base.a.titleLink,
                                            base.a.titleHeading
                                        ),
                                    },
                                    elem
                                );
                                var step = stackSizeAttr
                                    ? null
                                    : row.a.createElement(
                                          _reactRouter.Link,
                                          {
                                              to: newIndex,
                                              onClick:
                                                  this.trackDotContainerClick,
                                          },
                                          row.a.createElement(
                                              'div',
                                              {
                                                  className:
                                                      base.a.dotContainer,
                                              },
                                              row.a.createElement('div', {
                                                  className: base.a.dots,
                                              })
                                          )
                                      );
                                return row.a.createElement(
                                    'section',
                                    {
                                        className: base.a.containerSection,
                                    },
                                    row.a.createElement('div', {
                                        className: langClass,
                                    }),
                                    row.a.createElement(
                                        hash.a,
                                        {
                                            className: base.a.container,
                                        },
                                        row.a.createElement(
                                            'div',
                                            {
                                                className: base.a.topRow,
                                            },
                                            row.a.createElement(
                                                'div',
                                                {
                                                    className: base.a.titleRow,
                                                },
                                                value
                                                    ? row.a.createElement(
                                                          _reactRouter.Link,
                                                          {
                                                              to: newIndex,
                                                              className:
                                                                  base.a
                                                                      .logoLink,
                                                          },
                                                          row.a.createElement(
                                                              _AppDownload2.a,
                                                              {
                                                                  url: value,
                                                                  className:
                                                                      base.a
                                                                          .logo,
                                                              }
                                                          )
                                                      )
                                                    : null,
                                                displayables
                                            ),
                                            step
                                        ),
                                        removeMessage
                                    )
                                );
                            },
                        },
                    ]),
                    t
                );
            })(root.PureComponent)),
        (pjax.propTypes = {
            id: _react.a.string.isRequired,
            slug: _react.a.string.isRequired,
            title: _react.a.string.isRequired,
            idx: _react.a.number.isRequired,
            type: _react.a.oneOf(
                moveTo()(options.CONTAINER_TYPES).map(function (syncKey) {
                    return options.CONTAINER_TYPES[syncKey];
                })
            ).isRequired,
            contents: _react.a.array.isRequired,
            to: _react.a.string.isRequired,
            loadMoreItems: _react.a.func.isRequired,
            trackCb: _react.a.func.isRequired,
            logo: _react.a.string,
            storeContainerPosition: _react.a.func,
            initialIndex: _react.a.number,
            isKidsModeEnabled: _react.a.bool,
            isMobile: _react.a.bool,
            displayMode: _react.a.oneOf(['carousel', 'full']),
        }),
        _class);
    var tree = Object(descriptor.a)({
        loading: {
            defaultMessage: 'Loading...',
            id: 'src/web/components/Containers/Containers:loading',
        },
        loadMore: {
            defaultMessage: 'Load More',
            id: 'src/web/components/Containers/Containers:loadMore',
        },
        failed: {
            defaultMessage: 'Failed... Try again?',
            id: 'src/web/components/Containers/Containers:failed',
        },
    });
    var depth0 = {
        enter: result.a.slideUp,
        enterActive: result.a.slideUpActive,
    };
    var button2 =
        ((_pivotFields = AsyncFuzzyPicker =
            (function (f) {
                function t(rt) {
                    apply()(this, t);
                    var self = concat()(
                        this,
                        (t.__proto__ || Function()(t)).call(this, rt)
                    );
                    return (
                        (self.buttonStateText = {
                            LOADING: self.props.intl.formatMessage(
                                tree.loading
                            ),
                            LOAD_MORE: self.props.intl.formatMessage(
                                tree.loadMore
                            ),
                            TRY_AGAIN: self.props.intl.formatMessage(
                                tree.failed
                            ),
                        }),
                        (self.state = {
                            loadButtonText: self.buttonStateText.LOAD_MORE,
                            isLoadMorePending: false,
                        }),
                        (self.attachScrollHandler = function () {
                            var previousEnd = 0;
                            self.source.scroll = Object(genWaveBrick.a)(
                                window,
                                'scroll'
                            )
                                .pipe(
                                    Object(through.a)(50),
                                    Object(CheckHourlyStat.a)(function () {
                                        var binFrequencyEnd =
                                            document.body.scrollTop ||
                                            document.documentElement.scrollTop;
                                        if (binFrequencyEnd <= previousEnd) {
                                            return false;
                                        }
                                        previousEnd = binFrequencyEnd;
                                        var rect =
                                            self.elContainer.getBoundingClientRect();
                                        var containerHeight = Math.max(
                                            document.documentElement
                                                .clientHeight,
                                            window.innerHeight || 0
                                        );
                                        return (
                                            rect.bottom <= containerHeight + 200
                                        );
                                    })
                                )
                                .subscribe(function () {
                                    self.increaseContainerNum();
                                });
                        }),
                        (self.loadMore = function (data) {
                            self.props.dispatch(
                                Object(args.d)({
                                    id: data,
                                    parentId: null,
                                    expand: 0,
                                })
                            );
                        }),
                        (self.trackCb = function (a) {
                            var y = a.containerPosition;
                            var i = a.containerSlug;
                            var notificationUpdated = a.contId;
                            var x = a.column;
                            var precastData = self.props.containerChildrenIdMap;
                            self.props.dispatch(
                                Object(alias.b)({
                                    startX: x,
                                    startY: y + 1,
                                    containerSlug: i,
                                    contentId: precastData[i][x],
                                    componentType:
                                        frontEndModuleConfig
                                            .ANALYTICS_COMPONENTS
                                            .containerComponent,
                                })
                            );
                            self.props.dispatch(
                                Object(args.k)(notificationUpdated)
                            );
                        }),
                        (self.handleCarouselNavigation = function (that) {
                            var cop = that.containerPosition;
                            var previousButtonBar = that.containerSlug;
                            var id = that.containerId;
                            var i = that.index;
                            self.trackCb({
                                containerPosition: cop,
                                containerSlug: previousButtonBar,
                                contId: id,
                                column: i,
                            });
                            self.props.dispatch(
                                Object(d.n)({
                                    containerId: id,
                                    index: i,
                                })
                            );
                        }),
                        (self.assignRef = function (navigatorType) {
                            self.elContainer = navigatorType;
                        }),
                        (self.handleLoadClick = function () {
                            return new Y.a(function (destroy_doc, userJQuery) {
                                var dispatch = self.props.dispatch;
                                if (self.props.videoDetailFullyLoaded) {
                                    destroy_doc();
                                    self.startRenderProgressively();
                                } else {
                                    self.setState({
                                        isLoadMorePending: true,
                                        loadButtonText:
                                            self.buttonStateText.LOADING,
                                    });
                                    dispatch(Object(args.c)())
                                        .then(destroy_doc)
                                        .catch(function (selector) {
                                            request.a.error(
                                                selector,
                                                'fetchData error - Home'
                                            );
                                            self.setState({
                                                isLoadMorePending: false,
                                                loadButtonText:
                                                    self.buttonStateText
                                                        .TRY_AGAIN,
                                            });
                                            userJQuery(selector);
                                        });
                                }
                            }).then(function () {
                                self.setState({
                                    loadButtonText:
                                        self.buttonStateText.LOAD_MORE,
                                });
                            });
                        }),
                        (self.source = {}),
                        (self.elContainer = null),
                        (self.storeContainerPosition =
                            self.storeContainerPosition.bind(self)),
                        self
                    );
                }
                return (
                    match()(t, f),
                    r()(t, [
                        {
                            key: 'componentDidUpdate',
                            value: function () {
                                if (
                                    this.props.videoDetailFullyLoaded &&
                                    this.state.isLoadMorePending
                                ) {
                                    this.startRenderProgressively();
                                }
                            },
                        },
                        {
                            key: 'componentDidMount',
                            value: function () {
                                if (
                                    this.props.renderedContainersCount >
                                    this.props.initContainerCount
                                ) {
                                    this.attachScrollHandler();
                                }
                            },
                        },
                        {
                            key: 'componentWillUnmount',
                            value: function () {
                                if (this.source.scroll) {
                                    this.source.scroll.unsubscribe();
                                }
                            },
                        },
                        {
                            key: 'storeContainerPosition',
                            value: function (options) {
                                var indices = options.index;
                                var containerId = options.containerId;
                                this.props.dispatch(
                                    Object(d.n)({
                                        containerId: containerId,
                                        index: indices,
                                    })
                                );
                            },
                        },
                        {
                            key: 'increaseContainerNum',
                            value: function () {
                                var state = this.props;
                                var t = state.renderedContainersCount;
                                var contents_array = state.containers;
                                (0, state.dispatch)(
                                    Object(d.m)(
                                        Math.min(t + 4, contents_array.length)
                                    )
                                );
                            },
                        },
                        {
                            key: 'startRenderProgressively',
                            value: function () {
                                this.attachScrollHandler();
                                this.increaseContainerNum();
                            },
                        },
                        {
                            key: 'render',
                            value: function () {
                                var self = this;
                                var that = this.props;
                                var e = that.containers;
                                var end = that.renderedContainersCount;
                                var tail_off = that.initContainerCount;
                                var malakh = that.containerIndexMap;
                                var CircularList = that.isKidsModeEnabled;
                                var isMobile = that.isMobile;
                                var thisState = this.state;
                                var isDeleteDisabled =
                                    thisState.isLoadMorePending;
                                var menuCloseButton = thisState.loadButtonText;
                                var tail_cut_QMARK_ = end > tail_off;
                                var isExclued =
                                    e.length <= end || tail_cut_QMARK_;
                                return row.a.createElement(
                                    'div',
                                    {
                                        ref: this.assignRef,
                                    },
                                    row.a.createElement(
                                        'div',
                                        {
                                            className: result.a.main,
                                        },
                                        row.a.createElement(
                                            source.a,
                                            null,
                                            function (mathjaxConfig) {
                                                return row.a.createElement(
                                                    row.a.Fragment,
                                                    null,
                                                    row.a.createElement(
                                                        Helpers.TransitionGroup,
                                                        {
                                                            component: 'div',
                                                            exit: false,
                                                        },
                                                        e
                                                            .slice(0, end)
                                                            .map(function (
                                                                data,
                                                                index
                                                            ) {
                                                                var msg =
                                                                    data.contents;
                                                                var id =
                                                                    data.id;
                                                                var slug =
                                                                    data.slug;
                                                                var actionTitle =
                                                                    data.title;
                                                                var displayObjectType =
                                                                    data.type;
                                                                var parentId =
                                                                    data.parentId;
                                                                var logo =
                                                                    data.logo;
                                                                var v = Object(
                                                                    c2.d
                                                                )(id, {
                                                                    parentId:
                                                                        parentId,
                                                                    type: displayObjectType,
                                                                });
                                                                var indexLookupKey =
                                                                    (parentId
                                                                        ? parentId +
                                                                          ':'
                                                                        : '') +
                                                                    id;
                                                                var initialIndex =
                                                                    malakh[
                                                                        id
                                                                    ] || 0;
                                                                return mathjaxConfig.enabledPage
                                                                    ? row.a.createElement(
                                                                          i,
                                                                          {
                                                                              key: indexLookupKey,
                                                                              in: true,
                                                                              entranceTransition:
                                                                                  'slideInUp',
                                                                          },
                                                                          row.a.createElement(
                                                                              BugItem,
                                                                              {
                                                                                  key: indexLookupKey,
                                                                                  containerId:
                                                                                      id,
                                                                                  containerSlug:
                                                                                      slug,
                                                                                  containerTitle:
                                                                                      actionTitle,
                                                                                  containerPosition:
                                                                                      index,
                                                                                  containerType:
                                                                                      displayObjectType,
                                                                                  containerHref:
                                                                                      v,
                                                                                  containerContents:
                                                                                      msg,
                                                                                  containerLogo:
                                                                                      logo,
                                                                                  initialIndex:
                                                                                      initialIndex,
                                                                                  onLoadMore:
                                                                                      self.loadMore,
                                                                                  onNavigation:
                                                                                      self.handleCarouselNavigation,
                                                                              }
                                                                          )
                                                                      )
                                                                    : row.a.createElement(
                                                                          Helpers.CSSTransition,
                                                                          {
                                                                              key: indexLookupKey,
                                                                              classNames:
                                                                                  depth0,
                                                                              timeout:
                                                                                  {
                                                                                      enter: 500,
                                                                                  },
                                                                          },
                                                                          row.a.createElement(
                                                                              PatchItem,
                                                                              {
                                                                                  key: indexLookupKey,
                                                                                  idx: index,
                                                                                  to: v,
                                                                                  title: actionTitle,
                                                                                  id: id,
                                                                                  slug: slug,
                                                                                  type: displayObjectType,
                                                                                  logo: logo,
                                                                                  contents:
                                                                                      msg,
                                                                                  loadMoreItems:
                                                                                      self.loadMore,
                                                                                  trackCb:
                                                                                      self.trackCb,
                                                                                  initialIndex:
                                                                                      initialIndex,
                                                                                  storeContainerPosition:
                                                                                      self.storeContainerPosition,
                                                                                  isKidsModeEnabled:
                                                                                      CircularList,
                                                                                  isMobile:
                                                                                      isMobile,
                                                                              }
                                                                          )
                                                                      );
                                                            })
                                                    ),
                                                    mathjaxConfig.enabledPage &&
                                                        !isExclued
                                                        ? row.a.createElement(
                                                              'div',
                                                              {
                                                                  className:
                                                                      result.a
                                                                          .center,
                                                              },
                                                              row.a.createElement(
                                                                  subject.a,
                                                                  {
                                                                      appearance:
                                                                          'tertiary',
                                                                      disabled:
                                                                          isDeleteDisabled,
                                                                      onClick:
                                                                          self.handleLoadClick,
                                                                  },
                                                                  menuCloseButton
                                                              )
                                                          )
                                                        : null,
                                                    mathjaxConfig.enabledPage ||
                                                        isExclued
                                                        ? null
                                                        : row.a.createElement(
                                                              hash.a,
                                                              null,
                                                              row.a.createElement(
                                                                  wordFrequencies.a,
                                                                  {
                                                                      className:
                                                                          result
                                                                              .a
                                                                              .center,
                                                                  },
                                                                  row.a.createElement(
                                                                      _CalendarTitle2.a,
                                                                      {
                                                                          size: 'large',
                                                                          disabled:
                                                                              isDeleteDisabled,
                                                                          defaultLabel:
                                                                              self
                                                                                  .buttonStateText
                                                                                  .LOAD_MORE,
                                                                          failureLabel:
                                                                              self
                                                                                  .buttonStateText
                                                                                  .TRY_AGAIN,
                                                                          submittingLabel:
                                                                              self
                                                                                  .buttonStateText
                                                                                  .LOADING,
                                                                          promise:
                                                                              self.handleLoadClick,
                                                                      }
                                                                  )
                                                              )
                                                          )
                                                );
                                            }
                                        )
                                    )
                                );
                            },
                        },
                    ]),
                    t
                );
            })(root.Component)),
        (AsyncFuzzyPicker.propTypes = {
            containers: _react.a.array.isRequired,
            dispatch: _react.a.func.isRequired,
            trackingURI: _react.a.string,
            renderedContainersCount: _react.a.number,
            initContainerCount: _react.a.number,
            containerIndexMap: _react.a.object.isRequired,
            videoDetailFullyLoaded: _react.a.bool.isRequired,
            intl: _react.a.object,
            isKidsModeEnabled: _react.a.bool,
            isMobile: _react.a.bool,
        }),
        (AsyncFuzzyPicker.defaultProps = {
            initContainerCount: options.HOMEPAGE_INIT_CONTAINER_COUNT,
        }),
        _pivotFields);
    var button2Component = Object(m2.b)(function (options) {
        var source = options.container;
        var n = options.tracking.trackingURI;
        var ui = options.ui;
        var commandDefinitions = ui.renderedContainersCount;
        var $draggedLayerElement = ui.containerIndexMap;
        var trOption = ui.isKidsModeEnabled;
        var isMobile = ui.isMobile;
        var files = source.containerLoadIdMap;
        var File = source.containerChildrenIdMap;
        var l =
            !!files &&
            moveTo()(files).every(function (current) {
                return files[current].loaded;
            });
        return {
            containers: Object(frame.f)(options),
            trackingURI: n,
            renderedContainersCount: commandDefinitions,
            containerIndexMap: $draggedLayerElement,
            videoDetailFullyLoaded: l,
            containerChildrenIdMap: File,
            isKidsModeEnabled: trOption,
            isMobile: isMobile,
        };
    })(button2);
    var NgReactGridFooter = Object(radio_runway_names.c)(button2Component);
    var History_1 = require(677);
    var requestHelpers = require(690);
    var pathOfModuleRaw = require(875);
    var _callUserDefinedCallback = require.n(pathOfModuleRaw);
    var isCurrentType = [];
    var loadingEle = [];
    var Observable = Object(method.a)(
        function (toComp) {
            return toComp.container.containerChildrenIdMap[
                options.FEATURED_CONTAINER_ID
            ];
        },
        function (isPrevType) {
            return isPrevType || isCurrentType;
        }
    );
    var observable = Object(method.a)(
        Observable,
        function (options) {
            return options.video.byId;
        },
        function (headerPlusSegments, eventsDict) {
            var e = headerPlusSegments
                .slice(0, 9)
                .map(function (event) {
                    return eventsDict[event];
                })
                .filter(Boolean);
            return (
                _callUserDefinedCallback()(e, loadingEle) || (loadingEle = e),
                loadingEle
            );
        }
    );
    var renderArcs = require(257);
    var __WEBPACK_IMPORTED_MODULE_1__material_array_html___default = require(876);
    var gun_get = require(323);
    var instrumentedPath = require(55);
    var $ = require.n(instrumentedPath);
    var site = require(70);
    var templates = require.n(site);
    var draw = function (props) {
        return row.a.createElement(
            ShapeMaker_1.a,
            createElement()(
                {
                    viewBox: '0 0 64 64',
                },
                props
            ),
            row.a.createElement('circle', {
                fill: 'none',
                strokeWidth: '4px',
                r: '30px',
                cx: '32',
                cy: '32',
            }),
            row.a.createElement('circle', {
                fill: 'currentColor',
                r: '30px',
                cx: '32',
                cy: '32',
            }),
            row.a.createElement('path', {
                d: 'M28.42,37.6c-2,1-3.42,0-3.42-2.35v-8.5c0-2.34,1.38-3.39,3.42-2.35l9,4.7c2,1,2.11,2.76.07,3.8Z',
            }),
            row.a.createElement('path', {
                strokeWidth: '20%',
                style: {
                    transform: 'scale(1.429)',
                    transformOrigin: '50%',
                },
                fill: '#FFF',
                d: 'M28.42,37.6c-2,1-3.42,0-3.42-2.35v-8.5c0-2.34,1.38-3.39,3.42-2.35l9,4.7c2,1,2.11,2.76.07,3.8Z',
            })
        );
    };
    var test = function (data) {
        var jointKeys = data.isSeries;
        var icon = void 0 !== jointKeys && jointKeys;
        var current = data.year;
        var version = void 0 === current ? '' : current;
        var b = data.genre;
        var target = void 0 === b ? '' : b;
        var val = data.duration;
        var json = void 0 === val ? '' : val;
        var name = data.rating;
        var label = void 0 === name ? '' : name;
        var value = target ? target.split('-').join(' ') : null;
        return row.a.createElement(
            'div',
            {
                className: $.a.contentDetail,
            },
            row.a.createElement('div', {
                className: $.a.fillerDiv,
            }),
            row.a.createElement(
                'div',
                {
                    className: $.a.contentData,
                },
                row.a.createElement(
                    'div',
                    {
                        className: $.a.epGenre,
                    },
                    icon
                        ? row.a.createElement('span', null, 'S1 \u00b7 E1')
                        : value
                ),
                row.a.createElement(
                    'div',
                    {
                        className: $.a.yearAndDuration,
                    },
                    '(' + version + ') ' || false,
                    version && json ? '\u00b7 ' : null,
                    json || null
                ),
                icon && value
                    ? row.a.createElement(
                          'div',
                          {
                              className: $.a.genres,
                          },
                          value
                      )
                    : null
            ),
            row.a.createElement(
                'div',
                {
                    className: $.a.rating,
                },
                label
            )
        );
    };
    var path = require(108);
    var results = require.n(path);
    var TableContext = Object(root.memo)(function (_ref) {
        var optionClassName = _ref.posterCls;
        var style = _ref.style;
        var close = _ref.position;
        var inBuildMode = _ref.isPrevActivePoster;
        var get = _ref.handleClick;
        return row.a.createElement('div', {
            className: optionClassName,
            style: style,
            onClick: function (data) {
                var inProgramMode = !inBuildMode;
                if (get) {
                    data.stopPropagation();
                    get(close, false, inProgramMode);
                }
            },
        });
    });
    var TodosLogin = Object(root.memo)(function (self) {
        var xOriginCookieURL = self.url;
        var boxInput = self.posterCls;
        var url = self.backgroundImage;
        var enabled = self.activePoster;
        var oldPos = self.position;
        var hparent = self.isPrevActivePoster;
        var handleClick = self.handleClick;
        var useStyleString = Object(root.useMemo)(
            function () {
                return {
                    backgroundImage: url,
                    cursor: enabled ? 'default' : 'pointer',
                };
            },
            [enabled, url]
        );
        return row.a.createElement(TableContext, {
            key: xOriginCookieURL,
            posterCls: boxInput,
            style: useStyleString,
            position: oldPos,
            isPrevActivePoster: hparent,
            handleClick: handleClick,
        });
    });
    var _draggerProcessor = {
        left: {
            enter: results.a.tileEnterLeft,
            enterActive: results.a.tileEnterLeftActive,
            exit: results.a.tileLeaveLeft,
            exitActive: results.a.tileLeaveLeftActive,
        },
        right: {
            enter: results.a.tileEnterRight,
            enterActive: results.a.tileEnterRightActive,
            exit: results.a.tileLeaveRight,
            exitActive: results.a.tileLeaveRightActive,
        },
        leftReverse: {
            enter: results.a.tileEnterLeftReverse,
            enterActive: results.a.tileEnterLeftActiveReverse,
            exit: results.a.tileLeaveLeftReverse,
            exitActive: results.a.tileLeaveLeftActiveReverse,
        },
        rightReverse: {
            enter: results.a.tileEnterRightReverse,
            enterActive: results.a.tileEnterRightActiveReverse,
            exit: results.a.tileLeaveRightReverse,
            exitActive: results.a.tileLeaveRightActiveReverse,
        },
    };
    var VInput = Object(root.memo)(function (_) {
        var root = _.posters;
        var gOffset = _.transitionType;
        var __pjs_tmp = _.isLeftCycle;
        var reverseName = void 0 === __pjs_tmp || __pjs_tmp;
        var l = _.goToIdx;
        var classes = _.className;
        return 0 === root.length
            ? null
            : row.a.createElement(
                  Helpers.TransitionGroup,
                  {
                      component: 'div',
                      className: resolve()(results.a.tileCycle, classes),
                  },
                  root.filter(Boolean).map(function (e, boardManager) {
                      var r;
                      var c = e.url;
                      var trackPosition = e.position;
                      var u = reverseName && 1 === boardManager;
                      var reverseIsSingle = reverseName && 0 === boardManager;
                      var d = resolve()(
                          results.a.poster,
                          (((r = {})[results.a.slideLeft] = 0 === boardManager),
                          r)
                      );
                      var url = u
                          ? 'url(' + c + ')'
                          : 'linear-gradient(to bottom right, rgba(38, 38, 45, 0.7), rgba(38, 38, 45, 0.7)), url(' +
                            c +
                            ')';
                      return row.a.createElement(
                          Helpers.CSSTransition,
                          {
                              key: c,
                              classNames: _draggerProcessor[gOffset],
                              timeout: 400,
                          },
                          row.a.createElement(TodosLogin, {
                              url: c,
                              posterCls: d,
                              backgroundImage: url,
                              activePoster: u,
                              position: trackPosition,
                              isPrevActivePoster: reverseIsSingle,
                              handleClick: u ? void 0 : l,
                          })
                      );
                  })
              );
    });
    var uo = Object(descriptor.a)({
        watchNow: {
            defaultMessage: 'Watch Now <customtag>FREE</customtag>',
            id: 'src/web/components/FeaturedCarousel/FeaturedContainer:watchNow',
        },
    });
    var NgReactGridSearch = (function (assertions) {
        function t(t) {
            var n = assertions.call(this, t) || this;
            return (
                (n.buttonInnerComponent = row.a.createElement(
                    settings.a,
                    createElement()({}, uo.watchNow, {
                        values: {
                            customtag: function (boardManager) {
                                var commentNodes = boardManager[0];
                                return row.a.createElement(
                                    'span',
                                    {
                                        className: $.a.freeSpan,
                                    },
                                    commentNodes
                                );
                            },
                        },
                    })
                )),
                n
            );
        }
        return (
            Object(instance.__extends)(t, assertions),
            (t.prototype.render = function () {
                var props = this.props;
                var spy = props.cancelTimer;
                var onMouseLeave = props.startTimer;
                var category = props.title;
                var getPixelPositionOffset = props.postersLeaving;
                var mapPaneName = props.postersEntering;
                var enter = props.forwards;
                var isFormSubmitted = props.isSeries;
                var y = props.year;
                var g = props.genre;
                var time = props.duration;
                var rating = props.rating;
                var incomingOptions = props.toVideo;
                var highlightedColumn = props.goToIdx;
                return row.a.createElement(
                    hash.a,
                    {
                        className: $.a.container,
                    },
                    row.a.createElement(
                        wordFrequencies.a,
                        {
                            className: $.a.titleRow,
                        },
                        row.a.createElement(
                            templates.a,
                            {
                                xs: '12',
                                md: '6',
                                className: $.a.col,
                            },
                            row.a.createElement(
                                'div',
                                {
                                    onMouseEnter: spy,
                                    onMouseLeave: onMouseLeave,
                                    className: $.a.playWrapper,
                                },
                                row.a.createElement(draw, {
                                    className: $.a.playButton,
                                })
                            ),
                            row.a.createElement(
                                'div',
                                {
                                    className: $.a.title,
                                },
                                row.a.createElement(
                                    'div',
                                    {
                                        className: $.a.titleText,
                                        onMouseEnter: spy,
                                        onMouseLeave: onMouseLeave,
                                    },
                                    category
                                )
                            )
                        )
                    ),
                    row.a.createElement(
                        wordFrequencies.a,
                        {
                            className: $.a.carouselFooter,
                        },
                        row.a.createElement(
                            templates.a,
                            {
                                lg: '4',
                                className: $.a.left,
                            },
                            row.a.createElement(VInput, {
                                posters: getPixelPositionOffset,
                                transitionType: enter ? 'left' : 'leftReverse',
                                goToIdx: highlightedColumn,
                            }),
                            row.a.createElement(test, {
                                isSeries: isFormSubmitted,
                                year: y,
                                genre: g,
                                duration: time,
                                rating: rating,
                            })
                        ),
                        row.a.createElement(
                            templates.a,
                            {
                                lg: '4',
                                className: $.a.center,
                            },
                            row.a.createElement(
                                _reactRouter.Link,
                                {
                                    to: incomingOptions,
                                },
                                row.a.createElement(
                                    SignupModal.a,
                                    {
                                        size: 'large',
                                        className: $.a.watchNowButton,
                                        onMouseEnter: spy,
                                        onMouseLeave: onMouseLeave,
                                    },
                                    this.buttonInnerComponent
                                )
                            )
                        ),
                        row.a.createElement(
                            templates.a,
                            {
                                lg: '4',
                                className: $.a.right,
                            },
                            row.a.createElement(VInput, {
                                className: $.a.rightCycle,
                                posters: mapPaneName,
                                transitionType: enter
                                    ? 'right'
                                    : 'rightReverse',
                                isLeftCycle: false,
                                goToIdx: highlightedColumn,
                            })
                        )
                    )
                );
            }),
            t
        );
    })(root.PureComponent);
    var tick = function (option) {
        var replaceInfoList = option.showBackgroundImg;
        var type = option.hero;
        var hex = option.background;
        var icon = option.landscape;
        var baseTrigger = option.isKidsModeEnabled;
        var temp =
            'linear-gradient(to bottom, rgba(38, 38, 45, 0.0), ' +
            doc.b.getAppThemeColor(baseTrigger) +
            ')';
        var data = {};
        if (replaceInfoList) {
            var i = Object(c2.j)(type || hex || icon);
            data.backgroundImage = temp + ', url(' + i + ')';
        } else {
            data.backgroundColor = temp;
        }
        return row.a.createElement('div', {
            style: data,
            className: $.a.featureImage,
        });
    };
    var classNames = {
        enter: $.a.marqueeEnter,
        enterActive: $.a.marqueeEnterActive,
        exit: $.a.marqueeLeave,
        exitActive: $.a.marqueeLeaveActive,
    };
    var elNameRegex = (function (doEvent) {
        function render(test) {
            var self = doEvent.call(this, test) || this;
            return (
                (self.touchInfo = {}),
                (self.getVideoUrl = function (value) {
                    return Object(c2.i)({
                        video: value,
                    });
                }),
                (self.getPosterLineup = Object(requestHelpers.a)(function (
                    buildInTemplates,
                    version
                ) {
                    var p;
                    var json = buildInTemplates.map(function (
                        canCreateDiscussions,
                        gridPosition
                    ) {
                        return {
                            url: canCreateDiscussions.posterarts[0],
                            position: gridPosition,
                        };
                    });
                    var isUp = 0 === version;
                    var i = version === json.length - 1;
                    var listener = version === json.length - 2;
                    var a = i ? 0 : version + 1;
                    return (
                        (p = i ? 1 : listener ? 0 : version + 2),
                        [
                            [
                                json[isUp ? json.length - 1 : version - 1],
                                json[version],
                            ],
                            [json[a], json[p]],
                        ]
                    );
                })),
                (self.onTouchStart = function (event) {
                    if (event.touches) {
                        var touch = event.touches[0];
                        self.touchInfo = {
                            startX: touch.pageX,
                            startY: touch.pageY,
                        };
                    }
                }),
                (self.onTouchMove = function (event) {
                    var e = event.touches[0];
                    var startX = self.touchInfo.startX;
                    var startY = self.touchInfo.startY;
                    var endX = e.pageX;
                    var endY = e.pageY;
                    var sizeWatcherDirection = Object(
                        __WEBPACK_IMPORTED_MODULE_1__material_array_html___default.a
                    )({
                        startX: startX,
                        endX: endX,
                        startY: startY,
                        endY: endY,
                    });
                    if (0 !== sizeWatcherDirection) {
                        event.preventDefault();
                    }
                    self.touchInfo = Object(instance.__assign)(
                        Object(instance.__assign)({}, self.touchInfo),
                        {
                            endX: endX,
                            endY: endY,
                            direction: sizeWatcherDirection,
                        }
                    );
                }),
                (self.onTouchEnd = function () {
                    self.handleSwipe();
                }),
                (self.onTouchCancel = function () {
                    self.handleSwipe();
                }),
                (self.handleSwipe = function () {
                    var is_horizontal = self.touchInfo.direction;
                    if (1 === is_horizontal) {
                        self.next();
                    }
                    if (-1 === is_horizontal) {
                        self.prev();
                    }
                    self.touchInfo = {};
                }),
                (self.next = function (e) {
                    var servos = self.props.videos;
                    var servoNumber = self.state.activeIdx;
                    var open =
                        servoNumber + 1 === servos.length ? 0 : servoNumber + 1;
                    self.goToIdx(open, e);
                }),
                (self.prev = function () {
                    var open =
                        self.state.activeIdx - 1 < 0
                            ? self.props.videos.length - 1
                            : self.state.activeIdx - 1;
                    self.trackTriggers(open);
                    self.goToIdx(open);
                }),
                (self.goToIdx = function (num, n, forwards) {
                    if (void 0 === n) {
                        n = false;
                    }
                    if (void 0 === forwards) {
                        forwards = true;
                    }
                    if (self.state.forwards !== forwards) {
                        self.setState(function () {
                            return {
                                forwards: forwards,
                            };
                        });
                    }
                    clearTimeout(self.rotateTimer);
                    if (!n) {
                        self.trackTriggers(num);
                    }
                    self.setState(function () {
                        return {
                            activeIdx: num,
                        };
                    });
                    self.rotateTimer = window.setTimeout(
                        self.next.bind(self, true),
                        5000
                    );
                }),
                (self.trackTriggers = function (x) {
                    var c = self.props.videos[x];
                    if (c) {
                        var contentId = 's' === c.type ? '0' + c.id : c.id;
                        renderArcs.a.trackCarouselTrigger({
                            startX: x,
                            endX: x,
                            contentId: contentId,
                            slug: self.props.featuredContainerSlug,
                            componentType:
                                frontEndModuleConfig.ANALYTICS_COMPONENTS
                                    .containerComponent,
                        });
                    }
                }),
                (self.trackLink = function () {
                    var x = self.state.activeIdx;
                    var result = self.props;
                    var e = result.videos;
                    var courseSections = result.featuredContainerSlug;
                    var log = result.dispatch;
                    var p = e[x];
                    log(
                        Object(alias.b)({
                            startX: x,
                            startY: 0,
                            containerSlug: courseSections,
                            contentId:
                                p.type === options.SERIES_CONTENT_TYPE
                                    ? '0' + p.id
                                    : p.id,
                            componentType:
                                frontEndModuleConfig.ANALYTICS_COMPONENTS
                                    .containerComponent,
                        })
                    );
                    log(Object(args.k)(options.FEATURED_CONTAINER_ID));
                }),
                (self.handleWatchClick = function () {
                    var e;
                    var action = self.props;
                    var functor = action.dispatch;
                    var signedTransactions = action.videos;
                    var signedTransactionsCounter = self.state.activeIdx;
                    var i = Object(c2.i)({
                        video: signedTransactions[signedTransactionsCounter],
                    });
                    self.trackLink();
                    i = Object(genBrick.addQueryStringToUrl)(
                        i,
                        (((e = {})[
                            options.AUTO_START_QUERY_PARAM_FROM_LINK
                        ] = true),
                        e)
                    );
                    functor(Object(router.push)(i));
                }),
                (self.cancelTimer = function () {
                    clearTimeout(self.rotateTimer);
                }),
                (self.startTimer = function () {
                    self.rotateTimer = window.setTimeout(function () {
                        self.next(true);
                    }, 5000);
                }),
                (self.state = {
                    activeIdx: 0,
                    firstImgLoaded: false,
                    forwards: true,
                }),
                (self.firstImage = null),
                self
            );
        }
        return (
            Object(instance.__extends)(render, doEvent),
            (render.prototype.componentDidMount = function () {
                var boilerStateMachine = this;
                var options = this.props.videos;
                if (options && 0 !== options.length) {
                    var data = options[0];
                    this.firstImage = new Image();
                    Object(position.a)(this.firstImage, 'load', function () {
                        boilerStateMachine.setState({
                            firstImgLoaded: true,
                        });
                    });
                    Object(position.a)(this.firstImage, 'error', function () {
                        boilerStateMachine.setState({
                            firstImgLoaded: true,
                        });
                    });
                    var num = data.hero_images;
                    var value = void 0 === num ? [] : num;
                    var item = data.backgrounds;
                    var blob = void 0 === item ? [] : item;
                    var mod = data.landscape_images;
                    var key = void 0 === mod ? [] : mod;
                    var text = value[0];
                    var selected = blob[0] || null;
                    var url = key[0];
                    this.firstImage.src = text || selected || url;
                    this.startTimer();
                }
            }),
            (render.prototype.componentWillUnmount = function () {
                clearTimeout(this.rotateTimer);
                if (this.firstImage) {
                    Object(position.k)(this.firstImage, 'load');
                    Object(position.k)(this.firstImage, 'error');
                }
            }),
            (render.prototype.getContentDetails = function (data) {
                var t = data.type;
                var actionTitle = data.title;
                var y = data.year;
                var current = data.tags;
                var b = data.ratings;
                var globals = void 0 === b ? {} : b;
                var duration = data.duration;
                var val = data.hero_images;
                var columnValue = void 0 === val ? [] : val;
                var num = data.backgrounds;
                var value = void 0 === num ? [] : num;
                var array = data.landscape_images;
                var result = void 0 === array ? [] : array;
                return {
                    toVideo: this.getVideoUrl(data),
                    isSeries: 's' === t,
                    genre: current ? current[0] : '',
                    title: actionTitle,
                    rating: globals[0] ? globals[0].value : '',
                    duration: duration ? Object(gun_get.c)(duration) : '',
                    year: y,
                    hero: columnValue[0],
                    background: value[0],
                    landscape: result[0],
                };
            }),
            (render.prototype.render = function () {
                var e;
                var self = this.props;
                var options = self.videos;
                var isMobile = self.isMobile;
                var boxInput = self.isKidsModeEnabled;
                if (!options || 0 === options.length) {
                    return null;
                }
                var state = this.state;
                var p = state.activeIdx;
                var noKeySpecified = state.firstImgLoaded;
                var direction = state.forwards;
                var l = this.getPosterLineup(options, p);
                var zoom = l[0];
                var caller_line = l[1];
                var data = this.getContentDetails(options[p]);
                var currentAnime = data.toVideo;
                var hero = data.hero;
                var background = data.background;
                var opt_landscapeOrHeight = data.landscape;
                var category = data.title;
                var old_queue_user_list = data.isSeries;
                var y = data.year;
                var param = data.genre;
                var duration = data.duration;
                var rating = data.rating;
                var langClass = resolve()(
                    $.a.featuredCarousel,
                    (((e = {})[$.a.isMobile] = !!isMobile),
                    (e[$.a.withRefreshTopNav] = this.context.enabledTopNav),
                    e)
                );
                return row.a.createElement(
                    'div',
                    {
                        className: langClass,
                        onTouchStart: this.onTouchStart,
                        onTouchMove: this.onTouchMove,
                        onTouchEnd: this.onTouchEnd,
                        onTouchCancel: this.onTouchCancel,
                        onClick: this.handleWatchClick,
                    },
                    row.a.createElement(
                        Helpers.TransitionGroup,
                        {
                            component: 'div',
                            className: $.a.transitionDiv,
                        },
                        row.a.createElement(
                            Helpers.CSSTransition,
                            {
                                key: category,
                                classNames: classNames,
                                timeout: 400,
                            },
                            row.a.createElement(tick, {
                                key: category,
                                showBackgroundImg: noKeySpecified || 0 === p,
                                hero: hero,
                                background: background,
                                landscape: opt_landscapeOrHeight,
                                isKidsModeEnabled: boxInput,
                            })
                        )
                    ),
                    row.a.createElement(NgReactGridSearch, {
                        cancelTimer: this.cancelTimer,
                        startTimer: this.startTimer,
                        forwards: direction,
                        postersLeaving: zoom,
                        postersEntering: caller_line,
                        toVideo: currentAnime,
                        isSeries: old_queue_user_list,
                        title: category,
                        year: y,
                        genre: param,
                        duration: duration,
                        rating: rating,
                        goToIdx: this.goToIdx,
                    })
                );
            }),
            (render.contextType = source.d),
            render
        );
    })(root.PureComponent);
    var name = Object(m2.b)(function (result) {
        var info = result.container;
        var courseSections = result.tracking;
        var browser = result.ui;
        var cache = {
            videos: [],
            featuredContainerTitle: '',
            isMobile: browser.isMobile,
        };
        if (
            !info ||
            !info.ttl ||
            !info.containerIdMap[options.FEATURED_CONTAINER_ID]
        ) {
            return cache;
        }
        var currentPost = info.containerIdMap[options.FEATURED_CONTAINER_ID];
        return {
            videos: observable(result),
            featuredContainerTitle: currentPost.title,
            featuredContainerSlug: currentPost.slug,
            trackingURI: courseSections.trackingURI,
            isMobile: browser.isMobile,
            isKidsModeEnabled: browser.isKidsModeEnabled,
        };
    })(elNameRegex);
    var elements = require(1515);
    var domain = require(925);
    var Counter_1 = require(915);
    var react_redux_1 = require(1513);
    var ColorPicker_1 = require(1516);
    var renderAssign = require(551);
    !(function (me) {
        me.Enter = 'enter';
        me.Left = 'left';
        me.Right = 'right';
    })(keyCodes || (keyCodes = {}));
    var stats = {
        desktop: 2,
        tablet: 1,
    };
    var paths = {
        desktop: 12,
        tablet: 4,
    };
    var finalCustomEvents =
        (((newBorders = {})[keyCodes.Enter] = {
            poster: {
                entrance: void 0,
                exit: void 0,
                entranceStagger: 0,
            },
            description: {
                entrance: void 0,
                exit: void 0,
                entranceStagger: 0,
            },
            nextPoster: {
                entrance: void 0,
                exit: void 0,
                entranceStagger: 0,
            },
            previewPoster: {
                entrance: void 0,
                exit: void 0,
                entranceStagger: 0,
            },
        }),
        (newBorders[keyCodes.Left] = {
            poster: {
                entrance: void 0,
                exit: 'fadeOut',
                entranceStagger: 0,
            },
            description: {
                entrance: 'slideInRight',
                exit: 'slideOutRight',
                entranceStagger: 1,
            },
            nextPoster: {
                entrance: 'scaleInUpRight',
                exit: void 0,
                entranceStagger: 0,
            },
            previewPoster: {
                entrance: void 0,
                exit: 'featuredCarouselPreviewExitRight',
                entranceStagger: 0,
            },
        }),
        (newBorders[keyCodes.Right] = {
            poster: {
                entrance: void 0,
                exit: 'fadeOut',
                entranceStagger: 0,
            },
            description: {
                entrance: 'slideInLeft',
                exit: 'slideOutLeft',
                entranceStagger: 1,
            },
            nextPoster: {
                entrance: void 0,
                exit: 'scaleOutDownLeft',
                entranceStagger: 0,
            },
            previewPoster: {
                entrance: 'featuredCarouselPreviewEnterLeft',
                exit: void 0,
                entranceStagger: 0,
            },
        }),
        newBorders);
    var el = Object(insertSVGTemplate.a)('web-featured-carousel');
    var CalendarHead = Object(root.memo)(function (config) {
        var value = config.index;
        var string = config.initialIndex;
        var body = void 0 === string ? 0 : string;
        var items = config.data;
        var map = config.extraKey;
        var done = config.renderDescription;
        var cb = config.renderPoster;
        var className = config.className;
        var dialog = config.style;
        var template = config.onIndexChange;
        var f = config.onTitleSelected;
        var elem = Object(root.useState)(body);
        var id = elem[0];
        var method = elem[1];
        var length = items.length;
        var context = Object(root.useRef)(keyCodes.Enter);
        var node = Object(root.useState)(id);
        var exp = node[0];
        var filter = node[1];
        var key = null != value ? value : exp;
        if (key !== id) {
            context.current = (function (b, a, length) {
                return !(a > b || (0 === a && b === length - 1)) ||
                    (a === length - 1 && 0 === b)
                    ? keyCodes.Left
                    : keyCodes.Right;
            })(id, key, length);
        }
        var eventType = context.current;
        Object(root.useEffect)(
            function () {
                if (key !== id) {
                    method(key);
                }
            },
            [key, id]
        );
        var parse = function (key) {
            var path;
            var customizationsPath;
            var value = items[key];
            return {
                index: key,
                item: value,
                key:
                    null !==
                        (customizationsPath =
                            null !== (path = value.id) && void 0 !== path
                                ? path
                                : null == map
                                ? void 0
                                : map(value, key)) &&
                    void 0 !== customizationsPath
                        ? customizationsPath
                        : key,
            };
        };
        var $ = Object(root.useCallback)(
            function (k) {
                var j = k % length;
                return j < 0 ? j + length : j;
            },
            [length]
        );
        var callback = Object(root.useCallback)(
            function () {
                var i = $(id + 1);
                if (!(null == template)) {
                    template({
                        index: i,
                        item: items[i],
                    });
                }
                filter(i);
            },
            [template, id, $, items]
        );
        var I = Object(root.useCallback)(
            function () {
                var i = $(id - 1);
                if (!(null == template)) {
                    template({
                        index: i,
                        item: items[i],
                    });
                }
                filter(i);
            },
            [template, id, $, items]
        );
        var onPlusClick = Object(root.useCallback)(
            function () {
                if (!(null == f)) {
                    f(items[id], id);
                }
            },
            [f, id, items]
        );
        if (0 === length) {
            return null;
        }
        var e = parse($(id));
        var res = parse($(id + 1));
        var data = parse($(id + 2));
        var opts = finalCustomEvents[eventType];
        return row.a.createElement(
            renderAssign.a,
            {
                className: className,
                style: dialog,
                hasNext: true,
                hasPrevious: true,
                onNext: callback,
                onPrevious: I,
                showItemOverflow: true,
            },
            row.a.createElement(
                response.a.Container,
                {
                    className: el.block,
                },
                row.a.createElement(
                    response.a.Item,
                    Object(instance.__assign)({}, stats),
                    row.a.createElement(
                        Helpers.TransitionGroup,
                        {
                            className: el.element('poster-container'),
                        },
                        row.a.createElement(
                            i,
                            {
                                key: e.key,
                                entranceTransition: opts.poster.entrance,
                                exitTransition: opts.poster.exit,
                                entranceStagger: opts.poster.entranceStagger,
                            },
                            row.a.createElement(
                                'div',
                                {
                                    className: el.element('poster'),
                                    onClick: onPlusClick,
                                },
                                cb(e.item, e.index)
                            )
                        )
                    )
                ),
                row.a.createElement(
                    response.a.Item,
                    Object(instance.__assign)({}, paths, {
                        onClick: onPlusClick,
                    }),
                    row.a.createElement(
                        Helpers.TransitionGroup,
                        {
                            className: el.element('description-container'),
                        },
                        row.a.createElement(
                            i,
                            {
                                key: e.key,
                                entranceTransition: opts.description.entrance,
                                exitTransition: opts.description.exit,
                                entranceStagger:
                                    opts.description.entranceStagger,
                            },
                            row.a.createElement(
                                'div',
                                {
                                    className: el.element('description'),
                                },
                                done(e.item, e.index)
                            )
                        )
                    )
                ),
                row.a.createElement(
                    response.a.Item,
                    Object(instance.__assign)({}, stats),
                    row.a.createElement(
                        Helpers.TransitionGroup,
                        {
                            className: el.element('poster-container'),
                        },
                        length > 1
                            ? row.a.createElement(
                                  i,
                                  {
                                      key: res.key,
                                      entranceTransition:
                                          opts.nextPoster.entrance,
                                      exitTransition: opts.nextPoster.exit,
                                      entranceStagger:
                                          opts.nextPoster.entranceStagger,
                                  },
                                  row.a.createElement(
                                      'div',
                                      {
                                          key: res.key,
                                          className: resolve()(
                                              el.element('poster'),
                                              el.elementModifier(
                                                  'poster',
                                                  'is-next'
                                              )
                                          ),
                                          onClick: callback,
                                      },
                                      cb(res.item, res.index)
                                  )
                              )
                            : null,
                        length > 2
                            ? row.a.createElement(
                                  i,
                                  {
                                      key: data.key,
                                      entranceTransition:
                                          opts.previewPoster.entrance,
                                      exitTransition: opts.previewPoster.exit,
                                      entranceStagger:
                                          opts.previewPoster.entranceStagger,
                                  },
                                  row.a.createElement(
                                      'div',
                                      {
                                          key: data.key,
                                          className: resolve()(
                                              el.element('poster'),
                                              el.elementModifier(
                                                  'poster',
                                                  'is-preview'
                                              )
                                          ),
                                      },
                                      cb(data.item, data.index)
                                  )
                              )
                            : null
                    )
                )
            )
        );
    });
    var featureHtml = require(157);
    var node = require.n(featureHtml);
    var reqArgs = Object(descriptor.a)({
        watchNow: {
            defaultMessage: 'Watch Now',
            id: 'src/web/rd/containers/FeaturedBillboard/FeaturedBillboard:watchNow',
        },
        freeTag: {
            defaultMessage: 'Free',
            id: 'src/web/rd/containers/FeaturedBillboard/FeaturedBillboard:freeTag',
        },
    });
    var integer = function (value) {
        var t;
        var writing =
            value.container.containerIdMap[options.FEATURED_CONTAINER_ID];
        return {
            videos: writing ? observable(value) : [],
            featuredContainerSlug:
                null !== (t = null == writing ? void 0 : writing.slug) &&
                void 0 !== t
                    ? t
                    : '',
        };
    };
    var target;
    var _childContextTypes;
    var init = function () {
        var e;
        var previous;
        var n;
        var that = Object(insertSVGTemplateAssign.a)(integer);
        var list = that.videos;
        var key = that.featuredContainerSlug;
        var filterText = Object(insertSVGTemplateAssign.a)(new_opts.c);
        var select = Object(m2.e)();
        var prop = Object(root.useState)(0);
        var index = prop[0];
        var res = prop[1];
        var i18nUtil = Object(pkg.a)();
        var data = list[index];
        var length = data
            ? Object(c2.i)({
                  video: data,
              })
            : '';
        var values = Object(genBrick.addQueryStringToUrl)(
            length,
            (((e = {})[options.AUTO_START_QUERY_PARAM_FROM_LINK] = true), e)
        );
        var val = data
            ? Object(c2.j)(
                  null !==
                      (n =
                          null !== (previous = data.hero_images[0]) &&
                          void 0 !== previous
                              ? previous
                              : data.backgrounds[0]) && void 0 !== n
                      ? n
                      : data.landscape_images[0]
              )
            : '';
        Object(root.useEffect)(
            function () {
                res(0);
            },
            [list]
        );
        var template = Object(root.useCallback)(
            function (object) {
                var x = object.index;
                var element = object.item;
                res(x);
                renderArcs.a.trackCarouselTrigger({
                    startX: x,
                    endX: x,
                    contentId:
                        element.type === options.SERIES_CONTENT_TYPE
                            ? '0' + element.id
                            : element.id,
                    slug: key,
                    componentType:
                        frontEndModuleConfig.ANALYTICS_COMPONENTS
                            .containerComponent,
                });
            },
            [key]
        );
        var N = Object(root.useCallback)(
            function () {
                var j = 0 === index ? list.length - 1 : index - 1;
                template({
                    index: j,
                    item: list[j],
                });
            },
            [index, list, template]
        );
        var onNext = Object(root.useCallback)(
            function () {
                var j = index === list.length - 1 ? 0 : index + 1;
                template({
                    index: j,
                    item: list[j],
                });
            },
            [index, list, template]
        );
        var onViewChange = Object(root.useCallback)(
            function () {
                select(
                    Object(alias.b)({
                        startX: index,
                        startY: 0,
                        containerSlug: key,
                        contentId:
                            data.type === options.SERIES_CONTENT_TYPE
                                ? '0' + data.id
                                : data.id,
                        componentType:
                            frontEndModuleConfig.ANALYTICS_COMPONENTS
                                .containerComponent,
                    })
                );
                select(Object(args.k)(options.FEATURED_CONTAINER_ID));
            },
            [data, key, index, select]
        );
        var onPlusClick = Object(root.useCallback)(
            function (event) {
                event.stopPropagation();
                onViewChange();
                select(Object(router.push)(values));
            },
            [values, select, onViewChange]
        );
        var doRecycle = Object(root.useCallback)(
            function () {
                onViewChange();
                select(Object(router.push)(values));
            },
            [values, select, onViewChange]
        );
        Object(root.useEffect)(
            function () {
                var autoResumeTimer = setTimeout(function () {
                    res(index === list.length - 1 ? 0 : index + 1);
                }, 5000);
                return function () {
                    clearTimeout(autoResumeTimer);
                };
            },
            [list, index]
        );
        var loaderProps = Object(domain.a)({
            onNext: onNext,
            onPrevious: N,
        });
        var j = Object(root.useCallback)(function (origEdges) {
            var addedNode;
            var n = origEdges.posterarts;
            return row.a.createElement(Counter_1.a, {
                src: Object(c2.j)(
                    null !== (addedNode = n[0]) && void 0 !== addedNode
                        ? addedNode
                        : ''
                ),
            });
        }, []);
        var value = Object(root.useCallback)(
            function (data) {
                var t;
                var y = data.year;
                var length = data.duration;
                var _deliverRatingJson = data.ratings;
                var tags = data.tags;
                var from = data.has_subtitle;
                var category = data.title;
                var base =
                    null == _deliverRatingJson ? void 0 : _deliverRatingJson[0];
                var toBeRemoved = Object(c2.i)({
                    video: data,
                });
                var item = Object(genBrick.addQueryStringToUrl)(
                    toBeRemoved,
                    (((t = {})[
                        options.AUTO_START_QUERY_PARAM_FROM_LINK
                    ] = true),
                    t)
                );
                return row.a.createElement(
                    'div',
                    null,
                    row.a.createElement(
                        _reactRouter.Link,
                        {
                            className: node.a.title,
                            onClick: onViewChange,
                            to: item,
                        },
                        category
                    ),
                    row.a.createElement(
                        'div',
                        {
                            className: node.a.attributes,
                        },
                        row.a.createElement(react_redux_1.a, {
                            year: y,
                            duration: sublimeTextRender()(length)
                                ? Object(gun_get.c)(length)
                                : void 0,
                            rating: null == base ? void 0 : base.value,
                            tags: tags,
                            descriptor: Object(__WEBPACK_LABELED_MODULE__3.a)(
                                null == base ? void 0 : base.descriptors
                            ),
                            cc: from,
                        })
                    ),
                    row.a.createElement(
                        subject.a,
                        {
                            className: node.a.watchNowButton,
                            tag: i18nUtil.formatMessage(reqArgs.freeTag),
                            icon: elements.a,
                            onClick: onPlusClick,
                        },
                        i18nUtil.formatMessage(reqArgs.watchNow)
                    )
                );
            },
            [onPlusClick, i18nUtil, onViewChange]
        );
        return row.a.createElement(
            'div',
            {
                className: node.a.featuredBillboard,
            },
            row.a.createElement(
                Helpers.TransitionGroup,
                {
                    className: node.a.backgroundContainer,
                    onClick: doRecycle,
                },
                row.a.createElement(
                    i,
                    {
                        key: null == data ? void 0 : data.id,
                        entranceTransition: 'scaleInDown',
                        exitTransition: 'scaleOutUp',
                    },
                    row.a.createElement(
                        'div',
                        {
                            className: node.a.background,
                        },
                        row.a.createElement(ColorPicker_1.a, {
                            src: val,
                        })
                    )
                )
            ),
            row.a.createElement(
                'div',
                {
                    className: node.a.content,
                },
                filterText
                    ? list.length > 0
                        ? row.a.createElement(
                              'div',
                              createElement()(
                                  {
                                      className: node.a.mobileContent,
                                  },
                                  loaderProps
                              ),
                              row.a.createElement(
                                  Helpers.TransitionGroup,
                                  {
                                      className:
                                          node.a.mobileDescriptionContainer,
                                  },
                                  row.a.createElement(
                                      i,
                                      {
                                          key: null == data ? void 0 : data.id,
                                          entranceStagger: 1,
                                          entranceTransition: 'fadeIn',
                                          exitTransition: 'fadeOut',
                                      },
                                      row.a.createElement(
                                          'div',
                                          {
                                              className:
                                                  node.a.mobileDescription,
                                          },
                                          value(data)
                                      )
                                  )
                              ),
                              row.a.createElement(
                                  'div',
                                  {
                                      className: node.a.mobilePagination,
                                  },
                                  row.a.createElement(
                                      'span',
                                      {
                                          className:
                                              node.a.mobilePaginationCurrent,
                                      },
                                      index + 1
                                  ),
                                  '\u00a0\u00b7\u00a0',
                                  list.length + 1
                              )
                          )
                        : null
                    : row.a.createElement(
                          'div',
                          {
                              className: node.a.featuredCarouselContainer,
                          },
                          row.a.createElement(CalendarHead, {
                              index: index,
                              data: list,
                              renderPoster: j,
                              renderDescription: value,
                              onTitleSelected: doRecycle,
                              onIndexChange: template,
                          })
                      )
            )
        );
    };
    var snapshotPath = require(673);
    var $rootScope = require.n(snapshotPath);
    var e = Object(descriptor.a)({
        title: {
            defaultMessage:
                'Watch Free Movies and TV Shows Online | Streaming Movies and TV | Tubi',
            id: 'src/web/containers/Home/Home:title',
        },
        description: {
            defaultMessage:
                'Watch free movies and TV shows online in HD on any device. Tubi offers streaming movies in genres like Action, Horror, Sci-Fi, Crime and Comedy. Watch now.',
            id: 'src/web/containers/Home/Home:description',
        },
        keywords: {
            defaultMessage:
                'Free, Movies, TV shows, legal, streaming, HD, full length, full movie',
            id: 'src/web/containers/Home/Home:keywords',
        },
    });
    var childContextTypes =
        ((_childContextTypes = target =
            (function (e) {
                function t() {
                    var _Object$getPrototypeO;
                    var ct;
                    var item;
                    var currTime;
                    apply()(this, t);
                    var length = arguments.length;
                    var args = Array(length);
                    var i = 0;
                    for (; i < length; i++) {
                        args[i] = arguments[i];
                    }
                    return (
                        (ct = item =
                            concat()(
                                this,
                                (_Object$getPrototypeO =
                                    t.__proto__ || Function()(t)).call.apply(
                                    _Object$getPrototypeO,
                                    [this].concat(args)
                                )
                            )),
                        (item.getMeta = function () {
                            var t = item.props.intl;
                            var torrent_title = t.formatMessage(e.title);
                            var nirXml = t.formatMessage(e.description);
                            return {
                                title: torrent_title,
                                link: [
                                    {
                                        rel: 'canonical',
                                        href: 'https://tubitv.com',
                                    },
                                ],
                                meta: [
                                    {
                                        name: 'keywords',
                                        content: t.formatMessage(e.keywords),
                                    },
                                    {
                                        name: 'description',
                                        content: nirXml,
                                    },
                                    {
                                        property: 'og:url',
                                        content: 'https://tubitv.com',
                                    },
                                    {
                                        property: 'al:android:url',
                                        content:
                                            'tubitv://open?utm_campaign=organic&utm_medium=mobile_web&utm_source=mobile_web',
                                    },
                                ],
                            };
                        }),
                        (currTime = ct),
                        concat()(item, currTime)
                    );
                }
                return (
                    match()(t, e),
                    r()(t, [
                        {
                            key: 'componentDidMount',
                            value: function () {
                                (0, this.props.dispatch)(
                                    Object(args.c)()
                                ).catch(function (e) {
                                    return (
                                        request.a.error(
                                            {
                                                error: e,
                                            },
                                            'fetchData error - Home'
                                        ),
                                        Y.a.reject(e)
                                    );
                                });
                                Object(schema.b)();
                            },
                        },
                        {
                            key: 'render',
                            value: function () {
                                var commonToolbarProps = this.getMeta();
                                var t = this.context;
                                return row.a.createElement(
                                    'div',
                                    {
                                        className: resolve()(
                                            $rootScope.a.home,
                                            cb()(
                                                {},
                                                $rootScope.a.webRefresh,
                                                t.enabledPage
                                            )
                                        ),
                                    },
                                    row.a.createElement(
                                        _DraggableCore2.a,
                                        commonToolbarProps
                                    ),
                                    t.enabledPage
                                        ? row.a.createElement(init, null)
                                        : row.a.createElement(name, null),
                                    row.a.createElement(NgReactGridFooter, {
                                        displayMode: 'carousel',
                                    }),
                                    row.a.createElement(History_1.default, null)
                                );
                            },
                        },
                    ]),
                    t
                );
            })(root.Component)),
        (target.propTypes = {
            dispatch: _react.a.func,
        }),
        (target.contextType = source.b),
        _childContextTypes);
    var newsView = Object(m2.b)()(
        Object(radio_runway_names.c)(childContextTypes)
    );
    newsView.fetchData = function (store) {
        var getState = store.getState;
        var dispatch = store.dispatch;
        var auth = getState().auth;
        var a = !(!auth || !auth.user);
        var i = [
            dispatch(
                Object(args.f)({
                    scope: options.HOME_DATA_SCOPE.firstScreen,
                })
            ),
        ];
        return (
            a &&
                i.push(
                    Object(targetAssociation.a)(dispatch(Object(hmVals.b)()))
                ),
            Y.a.all(i).catch(function (e) {
                return (
                    request.a.error(
                        {
                            error: e,
                        },
                        'fetchData error - Home'
                    ),
                    Y.a.reject(e)
                );
            })
        );
    };
    var StatsContainer = newsView;
    var params = Object(descriptor.a)({
        support: {
            defaultMessage: 'Contact Tubi Support',
            id: 'src/common/webRoutes:support',
        },
        terms: {
            defaultMessage: 'Terms',
            id: 'src/common/webRoutes:terms',
        },
        termsUse: {
            defaultMessage: 'Terms of Use',
            id: 'src/common/webRoutes:termsUse',
        },
        privacy: {
            defaultMessage: 'Privacy',
            id: 'src/common/webRoutes:privacy',
        },
        doNotSell: {
            defaultMessage: 'Do Not Sell My Personal Information',
            id: 'src/common/webRoutes:doNotSell',
        },
        supportedDevices: {
            defaultMessage: 'Supported Devices',
            id: 'src/common/webRoutes:supportedDevices',
        },
    });
    module.default = function (name) {
        var aggFuncNames = run.bind(null, name);
        var zipPart = setup.bind(null, name);
        var receiverDesc = filter.bind(null, name);
        var names = add.bind(null, name);
        var vec3Location = f.bind(null, name);
        var thisScene = validate.bind(null, name);
        var appExecutable = parse.bind(null, name);
        var treeConnectRequestPacket = register.bind(null, name);
        var trendFunctions = async.bind(null, name);
        var identifierName = exports.bind(null, name);
        return row.a.createElement(
            _reactRouter.Route,
            {
                path: '/',
                onEnter: treeConnectRequestPacket,
                component: Xa,
            },
            row.a.createElement(_reactRouter.IndexRoute, {
                onEnter: vec3Location,
                component: null,
                getComponent: function (name, cb) {
                    return Promise.all([require.e(0), require.e(19)])
                        .then(require.bind(null, 1839))
                        .then(function (scene) {
                            return cb(null, scene.default);
                        });
                },
            }),
            row.a.createElement(_reactRouter.Route, {
                path: 'home',
                component: StatsContainer,
            }),
            row.a.createElement(_reactRouter.Route, {
                path: 'movies/:id(/:title)',
                component: null,
                getComponent: function (name, cb) {
                    return Promise.all([
                        require.e(2),
                        require.e(0),
                        require.e(3),
                        require.e(25),
                    ])
                        .then(require.bind(null, 1837))
                        .then(function (scene) {
                            return cb(null, scene.default);
                        });
                },
            }),
            row.a.createElement(_reactRouter.Route, {
                path: 'tv-shows/:id(/:title)',
                component: null,
                getComponent: function (name, cb) {
                    return Promise.all([
                        require.e(2),
                        require.e(0),
                        require.e(3),
                        require.e(25),
                    ])
                        .then(require.bind(null, 1837))
                        .then(function (scene) {
                            return cb(null, scene.default);
                        });
                },
            }),
            row.a.createElement(_reactRouter.Route, {
                path: 'series/:id(/:title)',
                component: null,
                getComponent: function (name, cb) {
                    return Promise.all([
                        require.e(2),
                        require.e(0),
                        require.e(3),
                        require.e(25),
                    ])
                        .then(require.bind(null, 1852))
                        .then(function (scene) {
                            return cb(null, scene.default);
                        });
                },
            }),
            row.a.createElement(_reactRouter.Route, {
                path: Object(tParentMatrix.d)($scope.d.live),
                component: null,
                onEnter: identifierName,
                getComponent: function (name, cb) {
                    return Promise.all([
                        require.e(2),
                        require.e(0),
                        require.e(16),
                    ])
                        .then(require.bind(null, 1853))
                        .then(function (scene) {
                            return cb(null, scene.default);
                        });
                },
            }),
            row.a.createElement(_reactRouter.Route, {
                path: 'live/:id(/:title)',
                component: null,
                onEnter: identifierName,
                getComponent: function (name, cb) {
                    return Promise.all([
                        require.e(2),
                        require.e(0),
                        require.e(3),
                        require.e(25),
                    ])
                        .then(require.bind(null, 1838))
                        .then(function (scene) {
                            return cb(null, scene.default);
                        });
                },
            }),
            row.a.createElement(_reactRouter.Route, {
                path: 'search',
                onEnter: end,
            }),
            row.a.createElement(_reactRouter.Redirect, {
                from: 'search/activate',
                to: 'activate',
            }),
            row.a.createElement(_reactRouter.Route, {
                path: 'search/:keywords',
                component: null,
                getComponent: function (name, cb) {
                    return Promise.all([require.e(0), require.e(21)])
                        .then(require.bind(null, 1854))
                        .then(function (scene) {
                            return cb(null, scene.default);
                        });
                },
            }),
            row.a.createElement(_reactRouter.Redirect, {
                from: 'signup/email',
                to: 'signup',
            }),
            row.a.createElement(_reactRouter.Route, {
                path: 'signup',
                onEnter: appExecutable,
                component: null,
                getComponent: function (name, cb) {
                    return Promise.all([
                        require.e(2),
                        require.e(1),
                        require.e(0),
                        require.e(22),
                    ])
                        .then(require.bind(null, 1855))
                        .then(function (scene) {
                            return cb(null, scene.default);
                        });
                },
            }),
            row.a.createElement(_reactRouter.Route, {
                path: 'signup-a',
                onEnter: zipPart,
                component: null,
                getComponent: function (name, cb) {
                    return Promise.all([
                        require.e(2),
                        require.e(1),
                        require.e(0),
                        require.e(22),
                    ])
                        .then(require.bind(null, 1846))
                        .then(function (scene) {
                            return cb(null, scene.default);
                        });
                },
            }),
            row.a.createElement(
                _reactRouter.Route,
                {
                    path: 'account',
                    onEnter: aggFuncNames,
                    component: null,
                    getComponent: function (name, cb) {
                        return Promise.all([
                            require.e(2),
                            require.e(1),
                            require.e(0),
                            require.e(15),
                        ])
                            .then(require.bind(null, 1831))
                            .then(function (scene) {
                                return cb(null, scene.default);
                            });
                    },
                },
                row.a.createElement(_reactRouter.IndexRoute, {
                    component: null,
                    getComponent: function (name, cb) {
                        return Promise.all([
                            require.e(2),
                            require.e(1),
                            require.e(0),
                            require.e(15),
                        ])
                            .then(require.bind(null, 1843))
                            .then(function (scene) {
                                return cb(null, scene.default);
                            });
                    },
                }),
                row.a.createElement(_reactRouter.Route, {
                    path: 'parental',
                    component: null,
                    getComponent: function (name, cb) {
                        return Promise.all([
                            require.e(2),
                            require.e(1),
                            require.e(0),
                            require.e(15),
                        ])
                            .then(require.bind(null, 1832))
                            .then(function (scene) {
                                return cb(null, scene.default);
                            });
                    },
                }),
                row.a.createElement(_reactRouter.Route, {
                    path: 'notifications',
                    component: null,
                    getComponent: function (name, cb) {
                        return Promise.all([
                            require.e(2),
                            require.e(1),
                            require.e(0),
                            require.e(15),
                        ])
                            .then(require.bind(null, 1856))
                            .then(function (scene) {
                                return cb(null, scene.default);
                            });
                    },
                }),
                row.a.createElement(_reactRouter.Route, {
                    path: 'history',
                    component: null,
                    getComponent: function (name, cb) {
                        return Promise.all([
                            require.e(2),
                            require.e(1),
                            require.e(0),
                            require.e(15),
                        ])
                            .then(require.bind(null, 1845))
                            .then(function (scene) {
                                return cb(null, scene.default);
                            });
                    },
                })
            ),
            row.a.createElement(_reactRouter.Route, {
                path: 'preference/captions',
                component: null,
                getComponent: function (name, cb) {
                    return Promise.all([
                        require.e(2),
                        require.e(0),
                        require.e(17),
                    ])
                        .then(require.bind(null, 1847))
                        .then(function (scene) {
                            return cb(null, scene.default);
                        });
                },
            }),
            row.a.createElement(_reactRouter.Redirect, {
                from: 'register',
                to: 'login',
            }),
            row.a.createElement(_reactRouter.Route, {
                path: 'login',
                onEnter: zipPart,
                component: null,
                getComponent: function (name, cb) {
                    return Promise.all([
                        require.e(1),
                        require.e(0),
                        require.e(20),
                    ])
                        .then(require.bind(null, 1857))
                        .then(function (scene) {
                            return cb(null, scene.default);
                        });
                },
            }),
            ['forgot', 'password'].map(function (e) {
                return row.a.createElement(_reactRouter.Route, {
                    key: e,
                    path: e,
                    component: null,
                    getComponent: function (name, cb) {
                        return Promise.all([
                            require.e(1),
                            require.e(0),
                            require.e(20),
                        ])
                            .then(require.bind(null, 1858))
                            .then(function (scene) {
                                return cb(null, scene.default);
                            });
                    },
                });
            }),
            row.a.createElement(_reactRouter.Redirect, {
                from: 'roku',
                to: 'activate',
            }),
            row.a.createElement(_reactRouter.Route, {
                path: 'activate',
                component: null,
                getComponent: function (name, cb) {
                    return Promise.all([
                        require.e(1),
                        require.e(0),
                        require.e(14),
                    ])
                        .then(require.bind(null, 1840))
                        .then(function (scene) {
                            return cb(null, scene.default);
                        });
                },
            }),
            row.a.createElement(
                _reactRouter.Route,
                {
                    path: 'register/facebook',
                    component: null,
                    getComponent: function (name, cb) {
                        return Promise.all([
                            require.e(1),
                            require.e(0),
                            require.e(18),
                        ])
                            .then(require.bind(null, 1833))
                            .then(function (scene) {
                                return cb(null, scene.default);
                            });
                    },
                },
                row.a.createElement(_reactRouter.Route, {
                    path: 'create-password',
                    onEnter: aggFuncNames,
                    component: null,
                    getComponent: function (name, cb) {
                        return Promise.all([
                            require.e(1),
                            require.e(0),
                            require.e(18),
                        ])
                            .then(require.bind(null, 1633))
                            .then(function (scene) {
                                return cb(null, scene.default);
                            });
                    },
                })
            ),
            row.a.createElement(_reactRouter.Route, {
                path: 'reset/:token',
                onEnter: names,
                component: null,
                getComponent: function (name, cb) {
                    return Promise.all([
                        require.e(1),
                        require.e(0),
                        require.e(24),
                    ])
                        .then(require.bind(null, 1848))
                        .then(function (scene) {
                            return cb(null, scene.default);
                        });
                },
            }),
            row.a.createElement(_reactRouter.Route, {
                path: 'category',
                onEnter: onEnter,
            }),
            row.a.createElement(_reactRouter.Route, {
                path: 'category/:id(/:title)',
                onEnter: receiverDesc,
                component: null,
                getComponent: function (name, cb) {
                    return Promise.all([
                        require.e(2),
                        require.e(0),
                        require.e(16),
                    ])
                        .then(require.bind(null, 1841))
                        .then(function (scene) {
                            return cb(null, scene.default);
                        });
                },
            }),
            row.a.createElement(_reactRouter.Route, {
                path: 'category/:parentId/s/:id',
                component: null,
                getComponent: function (name, cb) {
                    return Promise.all([
                        require.e(2),
                        require.e(0),
                        require.e(16),
                    ])
                        .then(require.bind(null, 1841))
                        .then(function (scene) {
                            return cb(null, scene.default);
                        });
                },
            }),
            row.a.createElement(_reactRouter.Route, {
                path: 'networks/:id',
                component: null,
                getComponent: function (name, cb) {
                    return Promise.all([
                        require.e(2),
                        require.e(0),
                        require.e(16),
                    ])
                        .then(require.bind(null, 1841))
                        .then(function (scene) {
                            return cb(null, scene.default);
                        });
                },
            }),
            row.a.createElement(_reactRouter.Route, {
                path: 'channels/:id',
                onEnter: trendFunctions,
                component: function () {
                    return null;
                },
            }),
            row.a.createElement(_reactRouter.Route, {
                path: 'embed/:id(/:title)',
                onEnter: thisScene,
                component: function () {
                    return null;
                },
            }),
            row.a.createElement(_reactRouter.Route, {
                path: 'termsEmbedded.html',
                legalType: log.a.terms,
                embedded: true,
                titleMessageDescriptor: params.terms,
                onEnter: function () {
                    name.dispatch(Object(d.o)(false));
                },
                onLeave: function () {
                    name.dispatch(Object(d.o)(true));
                },
                component: null,
                getComponent: function (name, cb) {
                    return Promise.all([require.e(0), require.e(4)])
                        .then(require.bind(null, 1849))
                        .then(function (scene) {
                            return cb(null, scene.default);
                        });
                },
            }),
            row.a.createElement(_reactRouter.Redirect, {
                from: 'terms(.html)',
                to: 'static/terms',
            }),
            row.a.createElement(_reactRouter.Route, {
                path: 'static/terms',
                legalType: log.a.terms,
                titleMessageDescriptor: params.termsUse,
                component: null,
                getComponent: function (name, cb) {
                    return Promise.all([require.e(0), require.e(4)])
                        .then(require.bind(null, 1849))
                        .then(function (scene) {
                            return cb(null, scene.default);
                        });
                },
            }),
            row.a.createElement(_reactRouter.Route, {
                path: 'privacyEmbedded.html',
                embedded: true,
                legalType: log.a.privacy,
                titleMessageDescriptor: params.privacy,
                onEnter: function () {
                    name.dispatch(Object(d.o)(false));
                },
                onLeave: function () {
                    name.dispatch(Object(d.o)(true));
                },
                component: null,
                getComponent: function (name, cb) {
                    return Promise.all([require.e(0), require.e(4)])
                        .then(require.bind(null, 1849))
                        .then(function (scene) {
                            return cb(null, scene.default);
                        });
                },
            }),
            row.a.createElement(_reactRouter.Redirect, {
                from: 'privacy(.html)',
                to: 'static/privacy',
            }),
            row.a.createElement(_reactRouter.Route, {
                path: 'static/privacy',
                legalType: log.a.privacy,
                titleMessageDescriptor: params.privacy,
                component: null,
                getComponent: function (name, cb) {
                    return Promise.all([require.e(0), require.e(4)])
                        .then(require.bind(null, 1849))
                        .then(function (scene) {
                            return cb(null, scene.default);
                        });
                },
            }),
            row.a.createElement(_reactRouter.Route, {
                path: 'privacy/donotsell',
                legalType: log.a.doNotSell,
                titleMessageDescriptor: params.doNotSell,
                component: null,
                getComponent: function (name, cb) {
                    return Promise.all([require.e(0), require.e(4)])
                        .then(require.bind(null, 1849))
                        .then(function (scene) {
                            return cb(null, scene.default);
                        });
                },
            }),
            row.a.createElement(_reactRouter.Redirect, {
                from: 'help(.html)',
                to: 'static/support',
            }),
            row.a.createElement(_reactRouter.Redirect, {
                from: 'static/help/support',
                to: 'static/support',
            }),
            row.a.createElement(_reactRouter.Redirect, {
                from: 'support',
                to: 'static/support',
            }),
            row.a.createElement(_reactRouter.Route, {
                path: 'static/support',
                pageName: 'SupportPage',
                titleMessageDescriptor: params.support,
                component: null,
                getComponent: function (name, cb) {
                    return Promise.all([
                        require.e(2),
                        require.e(1),
                        require.e(0),
                        require.e(23),
                    ])
                        .then(require.bind(null, 1844))
                        .then(function (scene) {
                            return cb(null, scene.default);
                        });
                },
            }),
            row.a.createElement(_reactRouter.Redirect, {
                from: 'devices(.html)',
                to: 'static/devices',
            }),
            row.a.createElement(_reactRouter.Route, {
                path: 'static/devices',
                titleMessageDescriptor: params.supportedDevices,
                component: null,
                getComponent: function (name, cb) {
                    return Promise.all([
                        require.e(2),
                        require.e(1),
                        require.e(0),
                        require.e(23),
                    ])
                        .then(require.bind(null, 1842))
                        .then(function (scene) {
                            return cb(null, scene.default);
                        });
                },
            }),
            row.a.createElement(_reactRouter.Route, {
                path: 'static/supported-browsers',
                component: null,
                getComponent: function (name, cb) {
                    return Promise.all([
                        require.e(2),
                        require.e(1),
                        require.e(0),
                        require.e(23),
                    ])
                        .then(require.bind(null, 1834))
                        .then(function (scene) {
                            return cb(null, scene.default);
                        });
                },
            }),
            row.a.createElement(_reactRouter.Redirect, {
                from: 'universal/*',
                to: '/',
            }),
            null
        );
    };
}
