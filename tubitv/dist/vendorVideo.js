/**
 * @license
 For license information please see vendorVideo.f6a07997.chunk.js.LICENSE.txt */
'use strict';
(window.webpackJsonp = window.webpackJsonp || []).push([
    [2],
    {
        1533: function (module, exports, __weex_require__) {
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule
                    ? obj
                    : {
                          default: obj,
                      };
            }
            function fn(pos) {
                return (fn =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                        ? function (object) {
                              return typeof object;
                          }
                        : function (obj) {
                              return obj &&
                                  'function' == typeof Symbol &&
                                  obj.constructor === Symbol &&
                                  obj !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof obj;
                          })(pos);
            }
            function h(className, a) {
                return !a || ('object' !== fn(a) && 'function' != typeof a)
                    ? (function (value) {
                          if (void 0 === value) {
                              throw new ReferenceError(
                                  "this hasn't been initialised - super() hasn't been called"
                              );
                          }
                          return value;
                      })(className)
                    : a;
            }
            function next(cb) {
                return (next = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (arr) {
                          return arr.__proto__ || Object.getPrototypeOf(arr);
                      })(cb);
            }
            function t(d, props) {
                var i = 0;
                for (; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ('value' in descriptor) {
                        descriptor.writable = true;
                    }
                    Object.defineProperty(d, descriptor.key, descriptor);
                }
            }
            function check(p, n, a) {
                return n && t(p.prototype, n), a && t(p, a), p;
            }
            function extend(ctor, proto) {
                return (extend =
                    Object.setPrototypeOf ||
                    function (e, source) {
                        return (e.__proto__ = source), e;
                    })(ctor, proto);
            }
            Object.defineProperty(exports, '__esModule', {
                value: true,
            });
            exports.default = void 0;
            var _propTypes2 = _interopRequireDefault(__weex_require__(3));
            var row = (function (e) {
                if (e && e.__esModule) {
                    return e;
                }
                var t = {};
                if (null != e) {
                    var k;
                    for (k in e) {
                        if (Object.prototype.hasOwnProperty.call(e, k)) {
                            var descriptor =
                                Object.defineProperty &&
                                Object.getOwnPropertyDescriptor
                                    ? Object.getOwnPropertyDescriptor(e, k)
                                    : {};
                            if (descriptor.get || descriptor.set) {
                                Object.defineProperty(t, k, descriptor);
                            } else {
                                t[k] = e[k];
                            }
                        }
                    }
                }
                return (t.default = e), t;
            })(__weex_require__(0));
            var _deepAssign2 = _interopRequireDefault(__weex_require__(8));
            var modal = __weex_require__(691);
            var onKeyPress = function () {};
            var LOGIN_REQUIRED_QUESTION = 13;
            var FLOAT_TYPE = 38;
            var INT32_TYPE = 40;
            var Input = (function (_WebInspector$GeneralTreeElement) {
                function render(props) {
                    var _this;
                    return (
                        (function (impromptuInstance, Impromptu) {
                            if (!(impromptuInstance instanceof Impromptu)) {
                                throw new TypeError(
                                    'Cannot call a class as a function'
                                );
                            }
                        })(this, render),
                        ((_this = h(
                            this,
                            next(render).call(this, props)
                        )).handleClickWhenDropDownOpen = function (e) {
                            var element2 = e.target;
                            if (
                                20 ===
                                _this.node.compareDocumentPosition(element2)
                            ) {
                                var data = (element2 || {}).dataset;
                                var selectLayersValue = (
                                    void 0 === data ? {} : data
                                ).value;
                                if (void 0 !== selectLayersValue) {
                                    _this.handleChange(
                                        {
                                            target: {
                                                value: selectLayersValue,
                                            },
                                        },
                                        e
                                    );
                                }
                            }
                            _this.removeClickEventListener();
                            _this.setState({
                                active: false,
                            });
                        }),
                        (_this.handleKeyDownWhenDropDownOpen = function (
                            event
                        ) {
                            event.preventDefault();
                            var type = event.which || event.keyCode;
                            var o = _this.props.options;
                            var index = _this.state.highlightIndex;
                            switch (type) {
                                case FLOAT_TYPE:
                                    var t = index - 1;
                                    if (o[t]) {
                                        _this.scrollToOption(t);
                                        _this.setState({
                                            highlightIndex: t,
                                        });
                                    }
                                    break;
                                case INT32_TYPE:
                                    var current = index + 1;
                                    if (o[current]) {
                                        _this.scrollToOption(current);
                                        _this.setState({
                                            highlightIndex: current,
                                        });
                                    }
                                    break;
                                case LOGIN_REQUIRED_QUESTION:
                                    if (index >= 0 && index < o.length) {
                                        var selectLayersValue = o[index].value;
                                        _this.handleChange(
                                            {
                                                target: {
                                                    value: selectLayersValue,
                                                },
                                            },
                                            event
                                        );
                                        _this.setState({
                                            active: false,
                                        });
                                    }
                            }
                        }),
                        (_this.scrollToOption = function (k) {
                            var container =
                                _this.node.getElementsByTagName('ul')[0];
                            var element =
                                _this.node.getElementsByTagName('li')[k];
                            var y = element.getBoundingClientRect().height;
                            if (element.offsetTop < container.scrollTop) {
                                container.scrollTop = element.offsetTop;
                            } else {
                                if (
                                    element.offsetTop + y >
                                    container.scrollTop + container.clientHeight
                                ) {
                                    container.scrollTop =
                                        element.offsetTop +
                                        y -
                                        container.clientHeight;
                                }
                            }
                        }),
                        (_this.removeKeyDownEvent = function () {
                            window.removeEventListener(
                                'keydown',
                                _this.handleKeyDownWhenDropDownOpen
                            );
                        }),
                        (_this.handleClick = function () {
                            if (!_this.props.disabled) {
                                _this.setState({
                                    active: true,
                                });
                            }
                        }),
                        (_this.handleFocus = function (e) {
                            var _props = _this.props;
                            var onFocus = _props.onFocus;
                            if (!_props.disabled) {
                                if (onFocus) {
                                    onFocus(e);
                                }
                                _this.setState({
                                    active: true,
                                });
                            }
                        }),
                        (_this.handleBlur = function (e) {
                            var _props = _this.props;
                            var onBlur = _props.onBlur;
                            if (!_props.disabled) {
                                if (onBlur) {
                                    onBlur(e);
                                }
                                _this.setState({
                                    active: false,
                                });
                            }
                        }),
                        (_this.handleChange = function (target, value) {
                            var onChange = _this.props.onChange;
                            if (onChange) {
                                onChange(target, value);
                            }
                        }),
                        (_this.nativeOnChange = function (obj) {
                            _this.setState({
                                active: false,
                            });
                            _this.props.onChange(obj);
                        }),
                        (_this.renderDesktopSelect = function () {
                            var item = _this.state;
                            var buffer = item.active;
                            var x = item.highlightIndex;
                            var element = _this.props;
                            var attributes = element.options;
                            var newValue = element.value;
                            return buffer
                                ? row.default.createElement(
                                      'ul',
                                      {
                                          className: 'Select__list',
                                          role: 'listbox',
                                      },
                                      attributes.map(function (_props, x_or_y) {
                                          var value = _props.value;
                                          var text = _props.label;
                                          var activeStyle = _props.optionStyle;
                                          var isSelected = newValue === value;
                                          var langClass = (0,
                                          _deepAssign2.default)(
                                              'Select__listItem',
                                              {
                                                  'Select__listItem--selected':
                                                      isSelected,
                                                  'Select__listItem--highlighted':
                                                      x_or_y === x,
                                              }
                                          );
                                          return row.default.createElement(
                                              'li',
                                              {
                                                  'data-value': value,
                                                  key: value,
                                                  className: langClass,
                                                  style: activeStyle,
                                                  role: 'option',
                                                  'aria-selected': isSelected,
                                              },
                                              text || value
                                          );
                                      })
                                  )
                                : null;
                        }),
                        (_this.renderMobileSelect = function () {
                            var element = _this.props;
                            var attributes = element.options;
                            var imgPath = element.value;
                            var o = element.name;
                            return row.default.BlockAdBlock(
                                'select',
                                {
                                    name: o,
                                    value: imgPath,
                                    className: 'Select__native',
                                    onChange: _this.nativeOnChange,
                                    tabIndex: 0,
                                },
                                attributes.map(function (child) {
                                    var value = child.value;
                                    var text = child.label;
                                    return row.default.createElement(
                                        'option',
                                        {
                                            key: value,
                                            value: value,
                                        },
                                        text || value
                                    );
                                })
                            );
                        }),
                        (_this.state = {
                            active: props.autoFocus && !props.disabled,
                            highlightIndex: props.options.findIndex(function (
                                item
                            ) {
                                return item.value === props.value;
                            }),
                        }),
                        _this
                    );
                }
                return (
                    (function (fn, superClass) {
                        if (
                            'function' != typeof superClass &&
                            null !== superClass
                        ) {
                            throw new TypeError(
                                'Super expression must either be null or a function'
                            );
                        }
                        fn.prototype = Object.create(
                            superClass && superClass.prototype,
                            {
                                constructor: {
                                    value: fn,
                                    writable: true,
                                    configurable: true,
                                },
                            }
                        );
                        if (superClass) {
                            extend(fn, superClass);
                        }
                    })(render, _WebInspector$GeneralTreeElement),
                    check(render, null, []),
                    check(render, [
                        {
                            key: 'getDerivedStateFromProps',
                            value: function (options, attrs) {
                                return options.disabled && attrs.active
                                    ? {
                                          active: false,
                                      }
                                    : null;
                            },
                        },
                        {
                            key: 'componentDidUpdate',
                            value: function (target, view) {
                                var cpc = this;
                                if (!this.props.native) {
                                    var is_document = view.active;
                                    var option = this.state.active;
                                    if (
                                        (is_document &&
                                            !option &&
                                            (this.removeClickEventListener(),
                                            this.removeKeyDownEvent()),
                                        !is_document && option)
                                    ) {
                                        var PipeBinding =
                                            this.props.options.findIndex(
                                                function (_object1Property) {
                                                    return (
                                                        _object1Property.value ===
                                                        cpc.props.value
                                                    );
                                                }
                                            );
                                        this.setState({
                                            highlightIndex: PipeBinding,
                                        });
                                        this.scrollToOption(PipeBinding);
                                        window.addEventListener(
                                            'click',
                                            this.handleClickWhenDropDownOpen,
                                            {
                                                once: true,
                                                capture: true,
                                            }
                                        );
                                        window.addEventListener(
                                            'keydown',
                                            this.handleKeyDownWhenDropDownOpen
                                        );
                                    }
                                }
                            },
                        },
                        {
                            key: 'componentWillUnmount',
                            value: function () {
                                if (!this.props.native) {
                                    this.removeClickEventListener();
                                    this.removeKeyDownEvent();
                                }
                            },
                        },
                        {
                            key: 'getSelectedOption',
                            value: function () {
                                var _props = this.props;
                                var yAxis = _props.options;
                                var data = _props.value;
                                return yAxis[
                                    (0, modal.findIndex)(
                                        yAxis,
                                        function (newObj) {
                                            return newObj.value === data;
                                        }
                                    )
                                ];
                            },
                        },
                        {
                            key: 'removeClickEventListener',
                            value: function () {
                                window.removeEventListener(
                                    'click',
                                    this.handleClickWhenDropDownOpen,
                                    {
                                        once: true,
                                        capture: true,
                                    }
                                );
                            },
                        },
                        {
                            key: 'render',
                            value: function () {
                                var orginData = this;
                                var _props = this.props;
                                var disabled = _props.disabled;
                                var dataEndIndex = _props.fixedLabel;
                                var error = _props.error;
                                var size = _props.className;
                                var vulnData = _props.value;
                                var placeholder = _props.label;
                                var c = _props.name;
                                var selected = _props.native;
                                var val = this.state.active;
                                var unread = error && !val;
                                var css = (0, _deepAssign2.default)(
                                    'Input',
                                    'Select',
                                    {
                                        'Input--disabled': disabled,
                                        'Input--fixed': dataEndIndex,
                                        'Input--errored': unread,
                                        'Input--filled': vulnData,
                                    },
                                    size
                                );
                                var langClass = (0, _deepAssign2.default)(
                                    'Select__down-icon',
                                    {
                                        'Select__down-icon--active': val,
                                    }
                                );
                                var user = this.getSelectedOption();
                                return row.default.createElement(
                                    'div',
                                    {
                                        id: c,
                                        tabIndex: selected ? -1 : 0,
                                        className: css,
                                        onBlur: this.handleBlur,
                                        onFocus: this.handleFocus,
                                        onClick: this.handleClick,
                                        onKeyPress: onKeyPress,
                                        'aria-haspopup': 'listbox',
                                        role: 'button',
                                        ref: function (x) {
                                            orginData.node = x;
                                        },
                                    },
                                    user && void 0 !== user.label
                                        ? row.default.createElement(
                                              'span',
                                              {
                                                  className: 'Input__input',
                                                  style: user.optionStyle,
                                              },
                                              user.label
                                          )
                                        : null,
                                    unread
                                        ? row.default.createElement(
                                              'span',
                                              {
                                                  className: 'Input__label',
                                              },
                                              error
                                          )
                                        : null,
                                    !unread && placeholder
                                        ? row.default.createElement(
                                              'span',
                                              {
                                                  className: 'Input__label',
                                              },
                                              placeholder
                                          )
                                        : null,
                                    row.default.createElement('span', {
                                        className: langClass,
                                    }),
                                    selected
                                        ? this.renderMobileSelect()
                                        : this.renderDesktopSelect()
                                );
                            },
                        },
                    ]),
                    render
                );
            })(row.PureComponent);
            exports.default = Input;
            Input.propTypes = {
                name: _propTypes2.default.string,
                value: _propTypes2.default.string.isRequired,
                onChange: _propTypes2.default.func.isRequired,
                options: _propTypes2.default.arrayOf(
                    _propTypes2.default.shape({
                        value: _propTypes2.default.string.isRequired,
                        label: _propTypes2.default.string,
                        optionStyle: _propTypes2.default.object,
                    })
                ).isRequired,
                onBlur: _propTypes2.default.func,
                label: _propTypes2.default.string,
                error: _propTypes2.default.string,
                onFocus: _propTypes2.default.func,
                disabled: _propTypes2.default.bool,
                autoFocus: _propTypes2.default.bool,
                fixedLabel: _propTypes2.default.bool,
                className: _propTypes2.default.string,
                native: _propTypes2.default.bool,
            };
            Input.defaultProps = {
                autoFocus: false,
                disabled: false,
                name: 'select-input',
                native: true,
            };
        },
        1599: function (module, exports, __webpack_require__) {
            module.exports = {
                default: __webpack_require__(1654),
                __esModule: true,
            };
        },
        1607: function (module, downloads, filter) {
            var match = filter(384);
            var fn = filter(1693);
            module.exports = function (value, f) {
                var result = [];
                if (!value || !value.length) {
                    return result;
                }
                var i = -1;
                var array = [];
                var l = value.length;
                f = match(f, 3);
                for (; ++i < l; ) {
                    var msg = value[i];
                    if (f(msg, i, value)) {
                        result.push(msg);
                        array.push(i);
                    }
                }
                return fn(value, array), result;
            };
        },
        1608: function (candidate, value, exec) {
            var check = exec(1699);
            candidate.exports = function (params, i) {
                var j = -1;
                var n = params.length;
                var x = n - 1;
                i = void 0 === i ? n : i;
                for (; ++j < i; ) {
                    var i = check(j, x);
                    var val = params[i];
                    params[i] = params[j];
                    params[j] = val;
                }
                return (params.length = i), params;
            };
        },
        1646: function (rawPads, i) {
            !(function (window) {
                var BlockAdBlock = function (options) {
                    this._options = {
                        checkOnLoad: false,
                        resetOnEnd: false,
                        loopCheckTime: 50,
                        loopMaxNumber: 5,
                        baitClass:
                            'pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links',
                        baitStyle:
                            'width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;',
                        debug: false,
                    };
                    this._var = {
                        version: '3.2.1',
                        bait: null,
                        checking: false,
                        loop: null,
                        loopNumber: 0,
                        event: {
                            detected: [],
                            notDetected: [],
                        },
                    };
                    if (void 0 !== options) {
                        this.setOption(options);
                    }
                    var self = this;
                    var eventCallback = function () {
                        setTimeout(function () {
                            if (true === self._options.checkOnLoad) {
                                if (true === self._options.debug) {
                                    self._log(
                                        'onload->eventCallback',
                                        'A check loading is launched'
                                    );
                                }
                                if (null === self._var.bait) {
                                    self._creatBait();
                                }
                                setTimeout(function () {
                                    self.check();
                                }, 1);
                            }
                        }, 1);
                    };
                    if (void 0 !== window.addEventListener) {
                        window.addEventListener('load', eventCallback, false);
                    } else {
                        window.attachEvent('onload', eventCallback);
                    }
                };
                BlockAdBlock.prototype._options = null;
                BlockAdBlock.prototype._var = null;
                BlockAdBlock.prototype._bait = null;
                BlockAdBlock.prototype._log = function (method, message) {
                    console.log('[BlockAdBlock][' + method + '] ' + message);
                };
                BlockAdBlock.prototype.setOption = function (options, val) {
                    if (void 0 !== val) {
                        var method = options;
                        (options = {})[method] = val;
                    }
                    var name;
                    for (name in options) {
                        this._options[name] = options[name];
                        if (true === this._options.debug) {
                            this._log(
                                'setOption',
                                'The option "' +
                                    name +
                                    '" he was assigned to "' +
                                    options[name] +
                                    '"'
                            );
                        }
                    }
                    return this;
                };
                BlockAdBlock.prototype._creatBait = function () {
                    var bait = document.createElement('div');
                    bait.setAttribute('class', this._options.baitClass);
                    bait.setAttribute('style', this._options.baitStyle);
                    this._var.bait = window.document.body.appendChild(bait);
                    this._var.bait.offsetParent;
                    this._var.bait.offsetHeight;
                    this._var.bait.offsetLeft;
                    this._var.bait.offsetTop;
                    this._var.bait.offsetWidth;
                    this._var.bait.clientHeight;
                    this._var.bait.clientWidth;
                    if (true === this._options.debug) {
                        this._log('_creatBait', 'Bait has been created');
                    }
                };
                BlockAdBlock.prototype._destroyBait = function () {
                    window.document.body.removeChild(this._var.bait);
                    this._var.bait = null;
                    if (true === this._options.debug) {
                        this._log('_destroyBait', 'Bait has been removed');
                    }
                };
                BlockAdBlock.prototype.check = function (loop) {
                    if (
                        (void 0 === loop && (loop = true),
                        true === this._options.debug &&
                            this._log(
                                'check',
                                'An audit was requested ' +
                                    (true === loop ? 'with a' : 'without') +
                                    ' loop'
                            ),
                        true === this._var.checking)
                    ) {
                        return (
                            true === this._options.debug &&
                                this._log(
                                    'check',
                                    'A check was canceled because there is already an ongoing'
                                ),
                            false
                        );
                    }
                    this._var.checking = true;
                    if (null === this._var.bait) {
                        this._creatBait();
                    }
                    var self = this;
                    return (
                        (this._var.loopNumber = 0),
                        true === loop &&
                            (this._var.loop = setInterval(function () {
                                self._checkBait(loop);
                            }, this._options.loopCheckTime)),
                        setTimeout(function () {
                            self._checkBait(loop);
                        }, 1),
                        true === this._options.debug &&
                            this._log('check', 'A check is in progress ...'),
                        true
                    );
                };
                BlockAdBlock.prototype._checkBait = function (loop) {
                    var t = false;
                    if (
                        (null === this._var.bait && this._creatBait(),
                        (null === window.document.body.getAttribute('abp') &&
                            null !== this._var.bait.offsetParent &&
                            0 != this._var.bait.offsetHeight &&
                            0 != this._var.bait.offsetLeft &&
                            0 != this._var.bait.offsetTop &&
                            0 != this._var.bait.offsetWidth &&
                            0 != this._var.bait.clientHeight &&
                            0 != this._var.bait.clientWidth) ||
                            (t = true),
                        void 0 !== window.getComputedStyle)
                    ) {
                        var computedStyle = window.getComputedStyle(
                            this._var.bait,
                            null
                        );
                        if (
                            !(
                                !computedStyle ||
                                ('none' !=
                                    computedStyle.getPropertyValue('display') &&
                                    'hidden' !=
                                        computedStyle.getPropertyValue(
                                            'visibility'
                                        ))
                            )
                        ) {
                            t = true;
                        }
                    }
                    if (true === this._options.debug) {
                        this._log(
                            '_checkBait',
                            'A check (' +
                                (this._var.loopNumber + 1) +
                                '/' +
                                this._options.loopMaxNumber +
                                ' ~' +
                                (1 +
                                    this._var.loopNumber *
                                        this._options.loopCheckTime) +
                                'ms) was conducted and detection is ' +
                                (true === t ? 'positive' : 'negative')
                        );
                    }
                    if (true === loop) {
                        this._var.loopNumber++;
                        if (
                            this._var.loopNumber >= this._options.loopMaxNumber
                        ) {
                            this._stopLoop();
                        }
                    }
                    if (true === t) {
                        this._stopLoop();
                        this._destroyBait();
                        this.emitEvent(true);
                        if (true === loop) {
                            this._var.checking = false;
                        }
                    } else {
                        if (!(null !== this._var.loop && false !== loop)) {
                            this._destroyBait();
                            this.emitEvent(false);
                            if (true === loop) {
                                this._var.checking = false;
                            }
                        }
                    }
                };
                BlockAdBlock.prototype._stopLoop = function (detected) {
                    clearInterval(this._var.loop);
                    this._var.loop = null;
                    this._var.loopNumber = 0;
                    if (true === this._options.debug) {
                        this._log('_stopLoop', 'A loop has been stopped');
                    }
                };
                BlockAdBlock.prototype.emitEvent = function (detected) {
                    if (true === this._options.debug) {
                        this._log(
                            'emitEvent',
                            'An event with a ' +
                                (true === detected ? 'positive' : 'negative') +
                                ' detection was called'
                        );
                    }
                    var s =
                        this._var.event[
                            true === detected ? 'detected' : 'notDetected'
                        ];
                    var c;
                    for (c in s) {
                        if (true === this._options.debug) {
                            this._log(
                                'emitEvent',
                                'Call function ' +
                                    (parseInt(c) + 1) +
                                    '/' +
                                    s.length
                            );
                        }
                        if (s.hasOwnProperty(c)) {
                            s[c]();
                        }
                    }
                    return (
                        true === this._options.resetOnEnd && this.clearEvent(),
                        this
                    );
                };
                BlockAdBlock.prototype.clearEvent = function () {
                    this._var.event.detected = [];
                    this._var.event.notDetected = [];
                    if (true === this._options.debug) {
                        this._log(
                            'clearEvent',
                            'The event list has been cleared'
                        );
                    }
                };
                BlockAdBlock.prototype.on = function (e, data) {
                    return (
                        this._var.event[
                            true === e ? 'detected' : 'notDetected'
                        ].push(data),
                        true === this._options.debug &&
                            this._log(
                                'on',
                                'A type of event "' +
                                    (true === e ? 'detected' : 'notDetected') +
                                    '" was added'
                            ),
                        this
                    );
                };
                BlockAdBlock.prototype.onDetected = function (fn) {
                    return this.on(true, fn);
                };
                BlockAdBlock.prototype.onNotDetected = function (fn) {
                    return this.on(false, fn);
                };
                window.BlockAdBlock = BlockAdBlock;
                if (void 0 === window.blockAdBlock) {
                    window.blockAdBlock = new BlockAdBlock({
                        checkOnLoad: true,
                        resetOnEnd: true,
                    });
                }
            })(window);
        },
        1654: function (mixin, doPost, __webpack_require__) {
            __webpack_require__(1655);
            mixin.exports = __webpack_require__(57).Number.isNaN;
        },
        1655: function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(84);
            $export($export.S, 'Number', {
                isNaN: function (value) {
                    return value != value;
                },
            });
        },
        1670: function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_RESULT__;
            !(function (root, n) {
                var MODEL = 'model';
                var NAME = 'name';
                var TYPE = 'type';
                var VENDOR = 'vendor';
                var VERSION = 'version';
                var MOBILE = 'mobile';
                var TABLET = 'tablet';
                var SMARTTV = 'smarttv';
                var util = {
                    extend: function (obj, extensions) {
                        var toObj = {};
                        var i;
                        for (i in obj) {
                            if (
                                extensions[i] &&
                                extensions[i].length % 2 == 0
                            ) {
                                toObj[i] = extensions[i].concat(obj[i]);
                            } else {
                                toObj[i] = obj[i];
                            }
                        }
                        return toObj;
                    },
                    has: function (a, i) {
                        return (
                            'string' == typeof a &&
                            -1 !== i.toLowerCase().indexOf(a.toLowerCase())
                        );
                    },
                    lowerize: function (str) {
                        return str.toLowerCase();
                    },
                    major: function (a) {
                        return 'string' == typeof a
                            ? a.replace(/[^\d\.]/g, '').split('.')[0]
                            : void 0;
                    },
                    trim: function (index, value) {
                        return (
                            (index = index.replace(
                                /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                                ''
                            )),
                            void 0 === value ? index : index.substring(0, 255)
                        );
                    },
                };
                var mapper = {
                    rgx: function (ua, arrays) {
                        var index;
                        var pos;
                        var k;
                        var v;
                        var value;
                        var args;
                        var i = 0;
                        for (; i < arrays.length && !value; ) {
                            var array = arrays[i];
                            var t = arrays[i + 1];
                            index = pos = 0;
                            for (; index < array.length && !value; ) {
                                if ((value = array[index++].exec(ua))) {
                                    k = 0;
                                    for (; k < t.length; k++) {
                                        args = value[++pos];
                                        if (
                                            'object' == typeof (v = t[k]) &&
                                            v.length > 0
                                        ) {
                                            if (2 == v.length) {
                                                if ('function' == typeof v[1]) {
                                                    this[v[0]] = v[1].call(
                                                        this,
                                                        args
                                                    );
                                                } else {
                                                    this[v[0]] = v[1];
                                                }
                                            } else {
                                                if (3 == v.length) {
                                                    if (
                                                        'function' !=
                                                            typeof v[1] ||
                                                        (v[1].exec && v[1].test)
                                                    ) {
                                                        this[v[0]] = args
                                                            ? args.replace(
                                                                  v[1],
                                                                  v[2]
                                                              )
                                                            : void 0;
                                                    } else {
                                                        this[v[0]] = args
                                                            ? v[1].call(
                                                                  this,
                                                                  args,
                                                                  v[2]
                                                              )
                                                            : void 0;
                                                    }
                                                } else {
                                                    if (4 == v.length) {
                                                        this[v[0]] = args
                                                            ? v[3].call(
                                                                  this,
                                                                  args.replace(
                                                                      v[1],
                                                                      v[2]
                                                                  )
                                                              )
                                                            : void 0;
                                                    }
                                                }
                                            }
                                        } else {
                                            this[v] = args || void 0;
                                        }
                                    }
                                }
                            }
                            i = i + 2;
                        }
                    },
                    str: function (obj, map) {
                        var i;
                        for (i in map) {
                            if (
                                'object' == typeof map[i] &&
                                map[i].length > 0
                            ) {
                                var j = 0;
                                for (; j < map[i].length; j++) {
                                    if (util.has(map[i][j], obj)) {
                                        return '?' === i ? void 0 : i;
                                    }
                                }
                            } else {
                                if (util.has(map[i], obj)) {
                                    return '?' === i ? void 0 : i;
                                }
                            }
                        }
                        return obj;
                    },
                };
                var maps = {
                    browser: {
                        oldSafari: {
                            version: {
                                '1.0': '/8',
                                1.2: '/1',
                                1.3: '/3',
                                '2.0': '/412',
                                '2.0.2': '/416',
                                '2.0.3': '/417',
                                '2.0.4': '/419',
                                '?': '/',
                            },
                        },
                        oldEdge: {
                            version: {
                                0.1: '12.',
                                21: '13.',
                                31: '14.',
                                39: '15.',
                                41: '16.',
                                42: '17.',
                                44: '18.',
                            },
                        },
                    },
                    os: {
                        windows: {
                            version: {
                                ME: '4.90',
                                'NT 3.11': 'NT3.51',
                                'NT 4.0': 'NT4.0',
                                2e3: 'NT 5.0',
                                XP: ['NT 5.1', 'NT 5.2'],
                                Vista: 'NT 6.0',
                                7: 'NT 6.1',
                                8: 'NT 6.2',
                                8.1: 'NT 6.3',
                                10: ['NT 6.4', 'NT 10.0'],
                                RT: 'ARM',
                            },
                        },
                    },
                };
                var regexes = {
                    browser: [
                        [/\b(?:crmo|crios)\/([\w\.]+)/i],
                        [VERSION, [NAME, 'Chrome']],
                        [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                        [VERSION, [NAME, 'Edge']],
                        [
                            /(opera\smini)\/([\w\.-]+)/i,
                            /(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i,
                            /(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i,
                        ],
                        [NAME, VERSION],
                        [/opios[\/\s]+([\w\.]+)/i],
                        [VERSION, [NAME, 'Opera Mini']],
                        [/\sopr\/([\w\.]+)/i],
                        [VERSION, [NAME, 'Opera']],
                        [
                            /(kindle)\/([\w\.]+)/i,
                            /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
                            /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,
                            /(ba?idubrowser)[\/\s]?([\w\.]+)/i,
                            /(?:ms|\()(ie)\s([\w\.]+)/i,
                            /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,
                            /(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i,
                            /(weibo)__([\d\.]+)/i,
                        ],
                        [NAME, VERSION],
                        [
                            /(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i,
                        ],
                        [VERSION, [NAME, 'UCBrowser']],
                        [
                            /(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i,
                        ],
                        [VERSION, [NAME, 'WeChat(Win) Desktop']],
                        [/micromessenger\/([\w\.]+)/i],
                        [VERSION, [NAME, 'WeChat']],
                        [/konqueror\/([\w\.]+)/i],
                        [VERSION, [NAME, 'Konqueror']],
                        [/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],
                        [VERSION, [NAME, 'IE']],
                        [/yabrowser\/([\w\.]+)/i],
                        [VERSION, [NAME, 'Yandex']],
                        [/(avast|avg)\/([\w\.]+)/i],
                        [[NAME, /(.+)/, '$1 Secure Browser'], VERSION],
                        [/focus\/([\w\.]+)/i],
                        [VERSION, [NAME, 'Firefox Focus']],
                        [/opt\/([\w\.]+)/i],
                        [VERSION, [NAME, 'Opera Touch']],
                        [/coc_coc_browser\/([\w\.]+)/i],
                        [VERSION, [NAME, 'Coc Coc']],
                        [/dolfin\/([\w\.]+)/i],
                        [VERSION, [NAME, 'Dolphin']],
                        [/coast\/([\w\.]+)/i],
                        [VERSION, [NAME, 'Opera Coast']],
                        [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                        [VERSION, [NAME, 'MIUI Browser']],
                        [/fxios\/([\w\.-]+)/i],
                        [VERSION, [NAME, 'Firefox']],
                        [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
                        [[NAME, '360 Browser']],
                        [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
                        [[NAME, /(.+)/, '$1 Browser'], VERSION],
                        [/(comodo_dragon)\/([\w\.]+)/i],
                        [[NAME, /_/g, ' '], VERSION],
                        [
                            /\s(electron)\/([\w\.]+)\ssafari/i,
                            /(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i,
                            /m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i,
                        ],
                        [NAME, VERSION],
                        [/(MetaSr)[\/\s]?([\w\.]+)/i, /(LBBROWSER)/i],
                        [NAME],
                        [/;fbav\/([\w\.]+);/i],
                        [VERSION, [NAME, 'Facebook']],
                        [/FBAN\/FBIOS|FB_IAB\/FB4A/i],
                        [[NAME, 'Facebook']],
                        [
                            /safari\s(line)\/([\w\.]+)/i,
                            /\b(line)\/([\w\.]+)\/iab/i,
                            /(chromium|instagram)[\/\s]([\w\.-]+)/i,
                        ],
                        [NAME, VERSION],
                        [/\bgsa\/([\w\.]+)\s.*safari\//i],
                        [VERSION, [NAME, 'GSA']],
                        [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                        [VERSION, [NAME, 'Chrome Headless']],
                        [/\swv\).+(chrome)\/([\w\.]+)/i],
                        [[NAME, 'Chrome WebView'], VERSION],
                        [
                            /droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i,
                        ],
                        [VERSION, [NAME, 'Android Browser']],
                        [
                            /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,
                        ],
                        [NAME, VERSION],
                        [/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],
                        [VERSION, [NAME, 'Mobile Safari']],
                        [/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],
                        [VERSION, NAME],
                        [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                        [
                            NAME,
                            [
                                VERSION,
                                mapper.str,
                                maps.browser.oldSafari.version,
                            ],
                        ],
                        [/(webkit|khtml)\/([\w\.]+)/i],
                        [NAME, VERSION],
                        [/(navigator|netscape)\/([\w\.-]+)/i],
                        [[NAME, 'Netscape'], VERSION],
                        [/ile\svr;\srv:([\w\.]+)\).+firefox/i],
                        [VERSION, [NAME, 'Firefox Reality']],
                        [
                            /ekiohf.+(flow)\/([\w\.]+)/i,
                            /(swiftfox)/i,
                            /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                            /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,
                            /(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,
                            /(mozilla)\/([\w\.]+)\s.+rv:.+gecko\/\d+/i,
                            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                            /(links)\s\(([\w\.]+)/i,
                            /(gobrowser)\/?([\w\.]*)/i,
                            /(ice\s?browser)\/v?([\w\._]+)/i,
                            /(mosaic)[\/\s]([\w\.]+)/i,
                        ],
                        [NAME, VERSION],
                    ],
                    cpu: [
                        [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                        [['architecture', 'amd64']],
                        [/(ia32(?=;))/i],
                        [['architecture', util.lowerize]],
                        [/((?:i[346]|x)86)[;\)]/i],
                        [['architecture', 'ia32']],
                        [/\b(aarch64|armv?8e?l?)\b/i],
                        [['architecture', 'arm64']],
                        [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                        [['architecture', 'armhf']],
                        [/windows\s(ce|mobile);\sppc;/i],
                        [['architecture', 'arm']],
                        [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                        [['architecture', /ower/, '', util.lowerize]],
                        [/(sun4\w)[;\)]/i],
                        [['architecture', 'sparc']],
                        [
                            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
                        ],
                        [['architecture', util.lowerize]],
                    ],
                    device: [
                        [
                            /\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i,
                        ],
                        [MODEL, [VENDOR, 'Samsung'], [TYPE, TABLET]],
                        [
                            /\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i,
                            /\ssamsung[\s-]([\w-]+)/i,
                            /sec-(sgh\w+)/i,
                        ],
                        [MODEL, [VENDOR, 'Samsung'], [TYPE, MOBILE]],
                        [/\((ip(?:hone|od)[\s\w]*);/i],
                        [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]],
                        [
                            /\((ipad);[\w\s\),;-]+apple/i,
                            /applecoremedia\/[\w\.]+\s\((ipad)/i,
                            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
                        ],
                        [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]],
                        [/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],
                        [MODEL, [VENDOR, 'Huawei'], [TYPE, TABLET]],
                        [
                            /d\/huawei([\w\s-]+)[;\)]/i,
                            /\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i,
                            /\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i,
                        ],
                        [MODEL, [VENDOR, 'Huawei'], [TYPE, MOBILE]],
                        [
                            /\b(poco[\s\w]+)(?:\sbuild|\))/i,
                            /\b;\s(\w+)\sbuild\/hm\1/i,
                            /\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,
                            /\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i,
                            /\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i,
                        ],
                        [
                            [MODEL, /_/g, ' '],
                            [VENDOR, 'Xiaomi'],
                            [TYPE, MOBILE],
                        ],
                        [/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],
                        [
                            [MODEL, /_/g, ' '],
                            [VENDOR, 'Xiaomi'],
                            [TYPE, TABLET],
                        ],
                        [
                            /;\s(\w+)\sbuild.+\soppo/i,
                            /\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i,
                        ],
                        [MODEL, [VENDOR, 'OPPO'], [TYPE, MOBILE]],
                        [
                            /\svivo\s(\w+)(?:\sbuild|\))/i,
                            /\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i,
                        ],
                        [MODEL, [VENDOR, 'Vivo'], [TYPE, MOBILE]],
                        [/\s(rmx[12]\d{3})(?:\sbuild|;)/i],
                        [MODEL, [VENDOR, 'Realme'], [TYPE, MOBILE]],
                        [
                            /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i,
                            /\smot(?:orola)?[\s-](\w*)/i,
                            /((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i,
                        ],
                        [MODEL, [VENDOR, 'Motorola'], [TYPE, MOBILE]],
                        [/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                        [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]],
                        [
                            /((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i,
                        ],
                        [MODEL, [VENDOR, 'LG'], [TYPE, TABLET]],
                        [
                            /(lm-?f100[nv]?|nexus\s[45])/i,
                            /lg[e;\s\/-]+((?!browser|netcast)\w+)/i,
                            /\blg(\-?[\d\w]+)\sbuild/i,
                        ],
                        [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]],
                        [
                            /(ideatab[\w\-\s]+)/i,
                            /lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i,
                        ],
                        [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]],
                        [
                            /(?:maemo|nokia).*(n900|lumia\s\d+)/i,
                            /nokia[\s_-]?([\w\.-]*)/i,
                        ],
                        [
                            [MODEL, /_/g, ' '],
                            [VENDOR, 'Nokia'],
                            [TYPE, MOBILE],
                        ],
                        [/droid.+;\s(pixel\sc)[\s)]/i],
                        [MODEL, [VENDOR, 'Google'], [TYPE, TABLET]],
                        [/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],
                        [MODEL, [VENDOR, 'Google'], [TYPE, MOBILE]],
                        [
                            /droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
                        ],
                        [MODEL, [VENDOR, 'Sony'], [TYPE, MOBILE]],
                        [
                            /sony\stablet\s[ps]\sbuild\//i,
                            /(?:sony)?sgp\w+(?:\sbuild\/|\))/i,
                        ],
                        [
                            [MODEL, 'Xperia Tablet'],
                            [VENDOR, 'Sony'],
                            [TYPE, TABLET],
                        ],
                        [
                            /\s(kb2005|in20[12]5|be20[12][59])\b/i,
                            /\ba000(1)\sbuild/i,
                            /\boneplus\s(a\d{4})[\s)]/i,
                        ],
                        [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]],
                        [
                            /(alexa)webm/i,
                            /(kf[a-z]{2}wi)(\sbuild\/|\))/i,
                            /(kf[a-z]+)(\sbuild\/|\)).+silk\//i,
                        ],
                        [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]],
                        [/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],
                        [
                            [MODEL, 'Fire Phone'],
                            [VENDOR, 'Amazon'],
                            [TYPE, MOBILE],
                        ],
                        [/\((playbook);[\w\s\),;-]+(rim)/i],
                        [MODEL, VENDOR, [TYPE, TABLET]],
                        [/((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10;\s(\w+)/i],
                        [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]],
                        [
                            /(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i,
                        ],
                        [MODEL, [VENDOR, 'ASUS'], [TYPE, TABLET]],
                        [/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],
                        [MODEL, [VENDOR, 'ASUS'], [TYPE, MOBILE]],
                        [/(nexus\s9)/i],
                        [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]],
                        [
                            /(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,
                            /(zte)-(\w*)/i,
                            /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i,
                        ],
                        [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]],
                        [/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
                        [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]],
                        [
                            /droid.+;\s(m[1-5]\snote)\sbuild/i,
                            /\bmz-([\w-]{2,})/i,
                        ],
                        [MODEL, [VENDOR, 'Meizu'], [TYPE, MOBILE]],
                        [
                            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
                            /(hp)\s([\w\s]+\w)/i,
                            /(asus)-?(\w+)/i,
                            /(microsoft);\s(lumia[\s\w]+)/i,
                            /(lenovo)[_\s-]?([\w-]+)/i,
                            /linux;.+(jolla);/i,
                            /droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i,
                        ],
                        [VENDOR, MODEL, [TYPE, MOBILE]],
                        [
                            /(archos)\s(gamepad2?)/i,
                            /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                            /(kindle)\/([\w\.]+)/i,
                            /\s(nook)[\w\s]+build\/(\w+)/i,
                            /(dell)\s(strea[kpr\s\d]*[\dko])/i,
                            /[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i,
                            /[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i,
                            /\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i,
                            /\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i,
                        ],
                        [VENDOR, MODEL, [TYPE, TABLET]],
                        [/\s(surface\sduo)\s/i],
                        [MODEL, [VENDOR, 'Microsoft'], [TYPE, TABLET]],
                        [/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],
                        [MODEL, [VENDOR, 'Fairphone'], [TYPE, MOBILE]],
                        [/\s(u304aa)\sbuild/i],
                        [MODEL, [VENDOR, 'AT&T'], [TYPE, MOBILE]],
                        [/sie-(\w*)/i],
                        [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]],
                        [/[;\/]\s?(rct\w+)\sbuild/i],
                        [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]],
                        [/[;\/\s](venue[\d\s]{2,7})\sbuild/i],
                        [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]],
                        [/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],
                        [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]],
                        [
                            /[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i,
                        ],
                        [MODEL, [VENDOR, 'Barnes & Noble'], [TYPE, TABLET]],
                        [/[;\/]\s(tm\d{3}\w+)\sbuild/i],
                        [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]],
                        [/;\s(k88)\sbuild/i],
                        [MODEL, [VENDOR, 'ZTE'], [TYPE, TABLET]],
                        [/;\s(nx\d{3}j)\sbuild/i],
                        [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]],
                        [/[;\/]\s?(gen\d{3})\sbuild.*49h/i],
                        [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]],
                        [/[;\/]\s?(zur\d{3})\sbuild/i],
                        [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]],
                        [/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],
                        [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]],
                        [
                            /[;\/]\s([yr]\d{2})\sbuild/i,
                            /[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i,
                        ],
                        [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]],
                        [/[;\/]\s?(ns-?\w{0,9})\sbuild/i],
                        [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]],
                        [/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],
                        [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]],
                        [
                            /[;\/]\s?(xtreme_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i,
                        ],
                        [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]],
                        [/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],
                        [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]],
                        [/;\s(ph-1)\s/i],
                        [MODEL, [VENDOR, 'Essential'], [TYPE, MOBILE]],
                        [/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],
                        [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]],
                        [/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],
                        [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]],
                        [/[;\/]\s?tu_(1491)\sbuild/i],
                        [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]],
                        [/(shield[\w\s]+)\sbuild/i],
                        [MODEL, [VENDOR, 'Nvidia'], [TYPE, TABLET]],
                        [/(sprint)\s(\w+)/i],
                        [VENDOR, MODEL, [TYPE, MOBILE]],
                        [/(kin\.[onetw]{3})/i],
                        [
                            [MODEL, /\./g, ' '],
                            [VENDOR, 'Microsoft'],
                            [TYPE, MOBILE],
                        ],
                        [
                            /droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i,
                        ],
                        [MODEL, [VENDOR, 'Zebra'], [TYPE, TABLET]],
                        [/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],
                        [MODEL, [VENDOR, 'Zebra'], [TYPE, MOBILE]],
                        [/\s(ouya)\s/i, /(nintendo)\s([wids3utch]+)/i],
                        [VENDOR, MODEL, [TYPE, 'console']],
                        [/droid.+;\s(shield)\sbuild/i],
                        [MODEL, [VENDOR, 'Nvidia'], [TYPE, 'console']],
                        [/(playstation\s[345portablevi]+)/i],
                        [MODEL, [VENDOR, 'Sony'], [TYPE, 'console']],
                        [/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],
                        [MODEL, [VENDOR, 'Microsoft'], [TYPE, 'console']],
                        [/smart-tv.+(samsung)/i],
                        [VENDOR, [TYPE, SMARTTV]],
                        [/hbbtv.+maple;(\d+)/i],
                        [
                            [MODEL, /^/, 'SmartTV'],
                            [VENDOR, 'Samsung'],
                            [TYPE, SMARTTV],
                        ],
                        [/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],
                        [
                            [VENDOR, 'LG'],
                            [TYPE, SMARTTV],
                        ],
                        [/(apple)\s?tv/i],
                        [VENDOR, [MODEL, 'Apple TV'], [TYPE, SMARTTV]],
                        [/crkey/i],
                        [
                            [MODEL, 'Chromecast'],
                            [VENDOR, 'Google'],
                            [TYPE, SMARTTV],
                        ],
                        [/droid.+aft([\w])(\sbuild\/|\))/i],
                        [MODEL, [VENDOR, 'Amazon'], [TYPE, SMARTTV]],
                        [/\(dtv[\);].+(aquos)/i],
                        [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]],
                        [
                            /hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i,
                        ],
                        [
                            [VENDOR, util.trim],
                            [MODEL, util.trim],
                            [TYPE, SMARTTV],
                        ],
                        [/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],
                        [[TYPE, SMARTTV]],
                        [/((pebble))app\/[\d\.]+\s/i],
                        [VENDOR, MODEL, [TYPE, 'wearable']],
                        [/droid.+;\s(glass)\s\d/i],
                        [MODEL, [VENDOR, 'Google'], [TYPE, 'wearable']],
                        [/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],
                        [MODEL, [VENDOR, 'Zebra'], [TYPE, 'wearable']],
                        [/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],
                        [VENDOR, [TYPE, 'embedded']],
                        [
                            /droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i,
                        ],
                        [MODEL, [TYPE, MOBILE]],
                        [
                            /droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i,
                        ],
                        [MODEL, [TYPE, TABLET]],
                        [
                            /\s(tablet|tab)[;\/]/i,
                            /\s(mobile)(?:[;\/]|\ssafari)/i,
                        ],
                        [[TYPE, util.lowerize]],
                        [/(android[\w\.\s\-]{0,9});.+build/i],
                        [MODEL, [VENDOR, 'Generic']],
                        [/(phone)/i],
                        [[TYPE, MOBILE]],
                    ],
                    engine: [
                        [/windows.+\sedge\/([\w\.]+)/i],
                        [VERSION, [NAME, 'EdgeHTML']],
                        [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                        [VERSION, [NAME, 'Blink']],
                        [
                            /(presto)\/([\w\.]+)/i,
                            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                            /ekioh(flow)\/([\w\.]+)/i,
                            /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,
                            /(icab)[\/\s]([23]\.[\d\.]+)/i,
                        ],
                        [NAME, VERSION],
                        [/rv:([\w\.]{1,9})\b.+(gecko)/i],
                        [VERSION, NAME],
                    ],
                    os: [
                        [/microsoft\s(windows)\s(vista|xp)/i],
                        [NAME, VERSION],
                        [
                            /(windows)\snt\s6\.2;\s(arm)/i,
                            /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,
                            /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i,
                        ],
                        [NAME, [VERSION, mapper.str, maps.os.windows.version]],
                        [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                        [
                            [NAME, 'Windows'],
                            [VERSION, mapper.str, maps.os.windows.version],
                        ],
                        [
                            /ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,
                            /cfnetwork\/.+darwin/i,
                        ],
                        [
                            [VERSION, /_/g, '.'],
                            [NAME, 'iOS'],
                        ],
                        [
                            /(mac\sos\sx)\s?([\w\s\.]*)/i,
                            /(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i,
                        ],
                        [
                            [NAME, 'Mac OS'],
                            [VERSION, /_/g, '.'],
                        ],
                        [
                            /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,
                            /(blackberry)\w*\/([\w\.]*)/i,
                            /(tizen|kaios)[\/\s]([\w\.]+)/i,
                            /\((series40);/i,
                        ],
                        [NAME, VERSION],
                        [/\(bb(10);/i],
                        [VERSION, [NAME, 'BlackBerry']],
                        [
                            /(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i,
                        ],
                        [VERSION, [NAME, 'Symbian']],
                        [/mozilla.+\(mobile;.+gecko.+firefox/i],
                        [[NAME, 'Firefox OS']],
                        [
                            /web0s;.+rt(tv)/i,
                            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i,
                        ],
                        [VERSION, [NAME, 'webOS']],
                        [/crkey\/([\d\.]+)/i],
                        [VERSION, [NAME, 'Chromecast']],
                        [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                        [[NAME, 'Chromium OS'], VERSION],
                        [
                            /(nintendo|playstation)\s([wids345portablevuch]+)/i,
                            /(xbox);\s+xbox\s([^\);]+)/i,
                            /(mint)[\/\s\(\)]?(\w*)/i,
                            /(mageia|vectorlinux)[;\s]/i,
                            /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i,
                            /(hurd|linux)\s?([\w\.]*)/i,
                            /(gnu)\s?([\w\.]*)/i,
                            /\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                            /(haiku)\s(\w+)/i,
                        ],
                        [NAME, VERSION],
                        [/(sunos)\s?([\w\.\d]*)/i],
                        [[NAME, 'Solaris'], VERSION],
                        [
                            /((?:open)?solaris)[\/\s-]?([\w\.]*)/i,
                            /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,
                            /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,
                            /(unix)\s?([\w\.]*)/i,
                        ],
                        [NAME, VERSION],
                    ],
                };
                var UAParser = function (uastring, extensions) {
                    if (
                        ('object' == typeof uastring &&
                            ((extensions = uastring), (uastring = void 0)),
                        !(this instanceof UAParser))
                    ) {
                        return new UAParser(uastring, extensions).getResult();
                    }
                    var n =
                        uastring ||
                        (void 0 !== root &&
                        root.navigator &&
                        root.navigator.userAgent
                            ? root.navigator.userAgent
                            : '');
                    var rgxmap = extensions
                        ? util.extend(regexes, extensions)
                        : regexes;
                    return (
                        (this.getBrowser = function () {
                            var browser = {
                                name: void 0,
                                version: void 0,
                            };
                            return (
                                mapper.rgx.call(browser, n, rgxmap.browser),
                                (browser.major = util.major(browser.version)),
                                browser
                            );
                        }),
                        (this.getCPU = function () {
                            var e = {
                                architecture: void 0,
                            };
                            return mapper.rgx.call(e, n, rgxmap.cpu), e;
                        }),
                        (this.getDevice = function () {
                            var e = {
                                vendor: void 0,
                                model: void 0,
                                type: void 0,
                            };
                            return mapper.rgx.call(e, n, rgxmap.device), e;
                        }),
                        (this.getEngine = function () {
                            var e = {
                                name: void 0,
                                version: void 0,
                            };
                            return mapper.rgx.call(e, n, rgxmap.engine), e;
                        }),
                        (this.getOS = function () {
                            var e = {
                                name: void 0,
                                version: void 0,
                            };
                            return mapper.rgx.call(e, n, rgxmap.os), e;
                        }),
                        (this.getResult = function () {
                            return {
                                ua: this.getUA(),
                                browser: this.getBrowser(),
                                engine: this.getEngine(),
                                os: this.getOS(),
                                device: this.getDevice(),
                                cpu: this.getCPU(),
                            };
                        }),
                        (this.getUA = function () {
                            return n;
                        }),
                        (this.setUA = function (a) {
                            return (
                                (n =
                                    'string' == typeof a && a.length > 255
                                        ? util.trim(a, 255)
                                        : a),
                                this
                            );
                        }),
                        this.setUA(n),
                        this
                    );
                };
                UAParser.VERSION = '0.7.28';
                UAParser.BROWSER = {
                    NAME: NAME,
                    MAJOR: 'major',
                    VERSION: VERSION,
                };
                UAParser.CPU = {
                    ARCHITECTURE: 'architecture',
                };
                UAParser.DEVICE = {
                    MODEL: MODEL,
                    VENDOR: VENDOR,
                    TYPE: TYPE,
                    CONSOLE: 'console',
                    MOBILE: MOBILE,
                    SMARTTV: SMARTTV,
                    TABLET: TABLET,
                    WEARABLE: 'wearable',
                    EMBEDDED: 'embedded',
                };
                UAParser.ENGINE = {
                    NAME: NAME,
                    VERSION: VERSION,
                };
                UAParser.OS = {
                    NAME: NAME,
                    VERSION: VERSION,
                };
                if (void 0 !== exports) {
                    if (void 0 !== module && module.exports) {
                        exports = module.exports = UAParser;
                    }
                    exports.UAParser = UAParser;
                } else {
                    if (
                        !(
                            void 0 ===
                            (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                                return UAParser;
                            }.call(
                                exports,
                                __webpack_require__,
                                exports,
                                module
                            ))
                        )
                    ) {
                        module.exports = __WEBPACK_AMD_DEFINE_RESULT__;
                    }
                }
                var env = void 0 !== root && (root.jQuery || root.Zepto);
                if (env && !env.ua) {
                    var parser = new UAParser();
                    env.ua = parser.getResult();
                    env.ua.get = function () {
                        return parser.getUA();
                    };
                    env.ua.set = function (uastring) {
                        parser.setUA(uastring);
                        var initVars = parser.getResult();
                        var prop;
                        for (prop in initVars) {
                            env.ua[prop] = initVars[prop];
                        }
                    };
                }
            })('object' == typeof window ? window : this);
        },
        1693: function (mixin, doPost, promiseSupplier) {
            var recalcBody = promiseSupplier(687);
            var s = promiseSupplier(448);
            var n = Array.prototype.splice;
            mixin.exports = function (target, matches) {
                var j = target ? matches.length : 0;
                var k = j - 1;
                for (; j--; ) {
                    var a = matches[j];
                    if (j == k || a !== p) {
                        var p = a;
                        if (s(a)) {
                            n.call(target, a, 1);
                        } else {
                            recalcBody(target, a);
                        }
                    }
                }
                return target;
            };
        },
        1697: function (mixin, name, require) {
            var signed_out = require(1698);
            var signed_in = require(1700);
            var getUnusedModules = require(127);
            mixin.exports = function (signedInUser) {
                return (
                    getUnusedModules(signedInUser) ? signed_out : signed_in
                )(signedInUser);
            };
        },
        1698: function (blob, options, seriesStackIndexCallback) {
            var getTouchCenter = seriesStackIndexCallback(445);
            var panToNewPosition = seriesStackIndexCallback(1608);
            blob.exports = function (targetTouches) {
                return panToNewPosition(getTouchCenter(targetTouches));
            };
        },
        1699: function (mixin, doPost) {
            var floor = Math.floor;
            var random = Math.random;
            mixin.exports = function (min, max) {
                return min + floor(random() * (max - min + 1));
            };
        },
        1700: function (blob, id, require) {
            var ok = require(1608);
            var equal = require(812);
            blob.exports = function (num) {
                return ok(equal(num));
            };
        },
        1708: function (mixin, doPost, __webpack_require__) {
            var isArray = __webpack_require__(127);
            mixin.exports = function () {
                if (!arguments.length) {
                    return [];
                }
                var type = arguments[0];
                return isArray(type) ? type : [type];
            };
        },
        1714: function (mixin, doPost) {
            mixin.exports = function (execFile_opt) {
                return null == execFile_opt;
            };
        },
        1715: function (module, exports, __webpack_require__) {
            module.exports = {
                default: __webpack_require__(1716),
                __esModule: true,
            };
        },
        1716: function (blob, options, seriesStackIndexCallback) {
            seriesStackIndexCallback(383);
            seriesStackIndexCallback(281);
            seriesStackIndexCallback(1717);
            seriesStackIndexCallback(1718);
            seriesStackIndexCallback(1719);
            blob.exports = seriesStackIndexCallback(57).WeakSet;
        },
        1717: function (onerror, define, require) {
            var weak = require(937);
            var toSrtTime = require(327);
            require(559)(
                'WeakSet',
                function (saveNotifs) {
                    return function () {
                        return saveNotifs(
                            this,
                            arguments.length > 0 ? arguments[0] : void 0
                        );
                    };
                },
                {
                    add: function (key) {
                        return weak.def(toSrtTime(this, 'WeakSet'), key, true);
                    },
                },
                weak,
                false,
                true
            );
        },
        1718: function (onerror, define, require) {
            require(560)('WeakSet');
        },
        1719: function (onerror, define, require) {
            require(561)('WeakSet');
        },
        1723: function (mixin, doPost, promiseSupplier) {
            var replaceString = promiseSupplier(556);
            var s = promiseSupplier(1724);
            var reUnescapedHtml = /&(?:amp|lt|gt|quot|#39);/g;
            var reHasEscapedHtml = RegExp(reUnescapedHtml.source);
            mixin.exports = function (string) {
                return (string = replaceString(string)) &&
                    reHasEscapedHtml.test(string)
                    ? string.replace(reUnescapedHtml, s)
                    : string;
            };
        },
        1724: function (module, metadata, packageSuccess) {
            var storeMixin = packageSuccess(1725)({
                '&amp;': '&',
                '&lt;': '<',
                '&gt;': '>',
                '&quot;': '"',
                '&#39;': "'",
            });
            module.exports = storeMixin;
        },
        1725: function (mixin, doPost) {
            mixin.exports = function (right) {
                return function (property) {
                    return null == right ? void 0 : right[property];
                };
            };
        },
    },
]);
