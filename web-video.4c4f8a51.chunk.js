(window.webpackJsonp = window.webpackJsonp || []).push([[25], {
    1532: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.clamp = t.pick = void 0,
        t.pick = function(e, t) {
            return t.reduce((function(t, n) {
                return e.hasOwnProperty(n) && (t[n] = e[n]),
                t
            }
            ), {})
        }
        ,
        t.clamp = function(e, t, n) {
            return Math.min(n, Math.max(t, e))
        }
    },
    1536: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return c
        }
        )),
        n.d(t, "d", (function() {
            return u
        }
        )),
        n.d(t, "a", (function() {
            return d
        }
        )),
        n.d(t, "c", (function() {
            return p
        }
        ));
        var a = n(35)
          , r = n(5)
          , i = n(71)
          , o = n(92)
          , s = n(679)
          , l = function(e) {
            return e.video.byId
        }
          , c = Object(a.a)(l, (function(e) {
            return e.video.autoPlayContentsById
        }
        ), (function(e, t) {
            return t
        }
        ), (function(e, t, n) {
            return ((t[n] || {}).contents || []).map((function(t) {
                return e[t]
            }
            ))
        }
        ))
          , u = (Object(a.a)(l, (function(e, t) {
            return t
        }
        ), (function(e, t) {
            var n = (e[t] || {}).series_id;
            if (!n)
                return {};
            var a = e["0" + n];
            if (!a)
                return {};
            var r = a.seasons;
            return a.is_recurring ? {
                nextEpisodeId: Object(s.c)(r, t),
                previousEpisodeId: Object(s.b)(r, t)
            } : {
                nextEpisodeId: Object(s.b)(r, t),
                previousEpisodeId: Object(s.c)(r, t)
            }
        }
        )),
        Object(a.a)((function(e) {
            return e.video.relatedContentsById
        }
        ), (function(e, t) {
            return t
        }
        ), (function(e, t) {
            return (e[t] || []).slice(0, r.RELATED_CONTENTS_LIMIT)
        }
        )))
          , d = Object(a.a)(i.b, (function(e) {
            return e.ottUI.containerGrid.activeContainerGridId
        }
        ), l, (function(e, t, n) {
            return e[t].filter((function(e) {
                return !!n[e]
            }
            ))
        }
        ))
          , p = Object(a.a)((function(e) {
            return e.contentMode.linear
        }
        ), l, (function(e, t) {
            if (!e)
                return r.FREEZED_EMPTY_ARRAY;
            var n = e.containersList
              , a = e.containerChildrenIdMap
              , i = [];
            return n.forEach((function(e) {
                i = i.concat(a[e])
            }
            )),
            (i = Object(o.b)(i)).map((function(e) {
                return t[e]
            }
            )).filter(Boolean)
        }
        ));
        Object(a.a)(i.b, l, (function(e, t) {
            var n = e[r.COMING_SOON_CONTAINER_ID];
            return n ? n.map((function(e) {
                return t[e]
            }
            )).filter(Boolean).slice(0, 3) : []
        }
        ))
    },
    1539: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return b
        }
        ));
        n(76),
        n(40);
        var a = n(385)
          , r = n.n(a)
          , i = (n(96),
        n(5),
        n(92),
        n(1))
          , o = n(11)
          , s = {
            ON: "on",
            OFF: "off",
            WHITE: "255, 255, 255",
            BLACK: "0, 0, 0",
            RED: "255, 0, 0",
            GREEN: "0, 128, 0",
            BLUE: "0, 0, 255",
            YELLOW: "255, 255, 0",
            MAGENTA: "255, 0, 255",
            CYAN: "0, 255, 255",
            OPACITY_OPAQUE: "1",
            OPACITY_75: "0.75",
            OPACITY_50: "0.50",
            OPACITY_25: "0.25",
            OPACITY_0: "0",
            FONT_SMALL: "50%",
            FONT_MEDIUM: "75%",
            FONT_STANDARD: "100%",
            FONT_LARGE: "150%",
            FONT_EXTRA_LARGE: "200%",
            FONT_DEFAULT: "Vaud",
            FONT_COURIER: "Courier",
            FONT_LORA: "Lora",
            FONT_UBUNTU_MONO: "Ubuntu Mono",
            FONT_ROBOTO: "Roboto",
            FONT_CASUAL: "Casual",
            FONT_COURGETTE: "Courgette",
            FONT_SMALL_CAPS: "inherit",
            FONT_VARIANT_NORMAL: "normal",
            EDGES_NONE: "none",
            EDGES_RAISED: "0 3px 0 #999999",
            EDGES_DEPRESSED: "0 -3px 0 #999999",
            EDGES_UNIFORM: "\n    -3px 3px 0 #999999,\n    3px -3px 0 #999999,\n    3px 3px 0 #999999,\n    -3px -3px 0 #999999\n  ",
            EDGES_DROP_SHADOW_EDGES: "3px 3px 0 #999999"
        }
          , l = Object(o.a)({
            switch: {
                defaultMessage: "Captions Off",
                id: "src/ott/constants/captionSettings:switch"
            },
            color: {
                defaultMessage: "Character Color",
                id: "src/ott/constants/captionSettings:color"
            },
            opacity: {
                defaultMessage: "Character Opacity",
                id: "src/ott/constants/captionSettings:opacity"
            },
            size: {
                defaultMessage: "Character Size",
                id: "src/ott/constants/captionSettings:size"
            },
            font: {
                defaultMessage: "Font",
                id: "src/ott/constants/captionSettings:font"
            },
            bgColor: {
                defaultMessage: "Caption Background Color",
                id: "src/ott/constants/captionSettings:bgColor"
            },
            bgOpacity: {
                defaultMessage: "Caption Background Opacity",
                id: "src/ott/constants/captionSettings:bgOpacity"
            },
            edge: {
                defaultMessage: "Caption Edge Attributes",
                id: "src/ott/constants/captionSettings:edge"
            },
            windowColor: {
                defaultMessage: "Caption Window Color",
                id: "src/ott/constants/captionSettings:windowColor"
            },
            windowOpacity: {
                defaultMessage: "Caption Window Opacity",
                id: "src/ott/constants/captionSettings:windowOpacity"
            },
            reset: {
                defaultMessage: "Reset Default Caption Settings",
                id: "src/ott/constants/captionSettings:reset"
            },
            white: {
                defaultMessage: "White",
                id: "src/ott/constants/captionSettings:white"
            },
            black: {
                defaultMessage: "Black",
                id: "src/ott/constants/captionSettings:black"
            },
            red: {
                defaultMessage: "Red",
                id: "src/ott/constants/captionSettings:red"
            },
            green: {
                defaultMessage: "Green",
                id: "src/ott/constants/captionSettings:green"
            },
            blue: {
                defaultMessage: "Blue",
                id: "src/ott/constants/captionSettings:blue"
            },
            yellow: {
                defaultMessage: "Yellow",
                id: "src/ott/constants/captionSettings:yellow"
            },
            magenta: {
                defaultMessage: "Magenta",
                id: "src/ott/constants/captionSettings:magenta"
            },
            cyan: {
                defaultMessage: "Cyan",
                id: "src/ott/constants/captionSettings:cyan"
            },
            transparent75: {
                defaultMessage: "75% Transparent",
                id: "src/ott/constants/captionSettings:transparent75"
            },
            transparent50: {
                defaultMessage: "50% Transparent",
                id: "src/ott/constants/captionSettings:transparent50"
            },
            transparent25: {
                defaultMessage: "25% Transparent",
                id: "src/ott/constants/captionSettings:transparent25"
            },
            solid: {
                defaultMessage: "Solid",
                id: "src/ott/constants/captionSettings:solid"
            },
            transparent100: {
                defaultMessage: "100% Transparent",
                id: "src/ott/constants/captionSettings:transparent100"
            },
            noEdge: {
                defaultMessage: "No Edge",
                id: "src/ott/constants/captionSettings:noEdge"
            },
            raised: {
                defaultMessage: "Raised",
                id: "src/ott/constants/captionSettings:raised"
            },
            depressed: {
                defaultMessage: "Depressed",
                id: "src/ott/constants/captionSettings:depressed"
            },
            uniform: {
                defaultMessage: "Uniform",
                id: "src/ott/constants/captionSettings:uniform"
            },
            dropShadowEdges: {
                defaultMessage: "Drop Shadow Edges",
                id: "src/ott/constants/captionSettings:dropShadowEdges"
            },
            tubiDefault: {
                defaultMessage: "Tubi Default",
                id: "src/ott/constants/captionSettings:tubiDefault"
            },
            courier: {
                defaultMessage: "Courier",
                id: "src/ott/constants/captionSettings:courier"
            },
            lora: {
                defaultMessage: "Lora",
                id: "src/ott/constants/captionSettings:lora"
            },
            ubuntuMono: {
                defaultMessage: "Ubuntu Mono",
                id: "src/ott/constants/captionSettings:ubuntuMono"
            },
            roboto: {
                defaultMessage: "Roboto",
                id: "src/ott/constants/captionSettings:roboto"
            },
            casual: {
                defaultMessage: "Casual",
                id: "src/ott/constants/captionSettings:casual"
            },
            courgette: {
                defaultMessage: "Courgette",
                id: "src/ott/constants/captionSettings:courgette"
            },
            smallCaps: {
                defaultMessage: "Small Caps",
                id: "src/ott/constants/captionSettings:smallCaps"
            },
            small: {
                defaultMessage: "Small",
                id: "src/ott/constants/captionSettings:small"
            },
            medium: {
                defaultMessage: "Medium",
                id: "src/ott/constants/captionSettings:medium"
            },
            standard: {
                defaultMessage: "Standard",
                id: "src/ott/constants/captionSettings:standard"
            },
            large: {
                defaultMessage: "Large",
                id: "src/ott/constants/captionSettings:large"
            },
            extraLarge: {
                defaultMessage: "Extra-Large",
                id: "src/ott/constants/captionSettings:extraLarge"
            },
            on: {
                defaultMessage: "On",
                id: "src/ott/constants/captionSettings:on"
            },
            off: {
                defaultMessage: "Off",
                id: "src/ott/constants/captionSettings:off"
            }
        })
          , c = [{
            title: l.white,
            value: s.WHITE
        }, {
            title: l.black,
            value: s.BLACK
        }, {
            title: l.red,
            value: s.RED
        }, {
            title: l.green,
            value: s.GREEN
        }, {
            title: l.blue,
            value: s.BLUE
        }, {
            title: l.yellow,
            value: s.YELLOW
        }, {
            title: l.magenta,
            value: s.MAGENTA
        }, {
            title: l.cyan,
            value: s.CYAN
        }]
          , u = [{
            title: l.transparent75,
            value: s.OPACITY_25
        }, {
            title: l.transparent50,
            value: s.OPACITY_50
        }, {
            title: l.transparent25,
            value: s.OPACITY_75
        }, {
            title: l.solid,
            value: s.OPACITY_OPAQUE
        }]
          , d = Object(i.__spreadArrays)([{
            title: l.transparent100,
            value: s.OPACITY_0
        }], u)
          , p = [{
            title: l.noEdge,
            value: s.EDGES_NONE,
            nativeValue: "none"
        }, {
            title: l.raised,
            value: s.EDGES_RAISED,
            nativeValue: "raised"
        }, {
            title: l.depressed,
            value: s.EDGES_DEPRESSED,
            nativeValue: "depressed"
        }, {
            title: l.uniform,
            value: s.EDGES_UNIFORM,
            nativeValue: "uniform"
        }, {
            title: l.dropShadowEdges,
            value: s.EDGES_DROP_SHADOW_EDGES,
            nativeValue: "drop_shadow"
        }]
          , m = [{
            title: l.tubiDefault,
            value: s.FONT_DEFAULT,
            nativeValue: "default"
        }, {
            title: l.courier,
            value: s.FONT_COURIER,
            nativeValue: "monospaced_serif"
        }, {
            title: l.lora,
            value: s.FONT_LORA,
            nativeValue: "proportional_serif"
        }, {
            title: l.ubuntuMono,
            value: s.FONT_UBUNTU_MONO,
            nativeValue: "monospaced_sanserif"
        }, {
            title: l.roboto,
            value: s.FONT_ROBOTO,
            nativeValue: "proportional_sanserif"
        }, {
            title: l.casual,
            value: s.FONT_CASUAL,
            nativeValue: "casual"
        }, {
            title: l.courgette,
            value: s.FONT_COURGETTE,
            nativeValue: "cursive"
        }, {
            title: l.smallCaps,
            value: s.FONT_SMALL_CAPS,
            nativeValue: "smallcaps",
            style: {
                fontVariant: "small-caps"
            }
        }]
          , h = [{
            title: l.small,
            value: s.FONT_SMALL,
            nativeValue: "small"
        }, {
            title: l.medium,
            value: s.FONT_MEDIUM,
            nativeValue: "medium"
        }, {
            title: l.standard,
            value: s.FONT_STANDARD,
            nativeValue: "standard"
        }, {
            title: l.large,
            value: s.FONT_LARGE,
            nativeValue: "large"
        }, {
            title: l.extraLarge,
            value: s.FONT_EXTRA_LARGE,
            nativeValue: "extra_large"
        }]
          , v = [{
            title: l.on,
            value: s.ON
        }, {
            title: l.off,
            value: s.OFF
        }]
          , f = (l.switch,
        l.color,
        l.opacity,
        l.size,
        l.font,
        l.bgColor,
        l.bgOpacity,
        l.edge,
        l.windowColor,
        l.windowOpacity,
        l.reset,
        function(e) {
            return r()(e, (function(e) {
                return !!e
            }
            ))
        }
        );
        var E = function(e) {
            var t = e.styling
              , n = t.stylingType
              , a = t.stylingColor.activeRGBValue;
            switch (n.value) {
            case "drop":
                return "1px 1px 1px rgb(" + a + ")";
            case "raised":
                return "0 -1px 0 #FFF, 0 1px 0 rgb(" + a + ")";
            case "depressed":
                return "0 -1px 0 rgb(" + a + "), 0 1px 0 rgb(255, 255, 255)";
            case "uniform":
                return "\n        -1px 1px 0 rgb(" + a + "),\n        1px -1px 0 rgb(" + a + "),\n        1px 1px 0 rgb(" + a + "),\n        -1px -1px 0 rgb(" + a + ")";
            default:
                return
            }
        }
          , g = function(e) {
            return e.isSemitransparent ? "0.6" : "1"
        }
          , y = function(e) {
            var t = e.background
              , n = t.backgroundColor;
            if (!t.toggle.active)
                return "none";
            var a = g(n);
            return "rgba(" + n.activeRGBValue + ", " + a + ")"
        }
          , b = function(e) {
            var t, n, a = e.font, r = a.size, i = a.family, o = a.fontColor, s = i.variant, l = i.type, c = s;
            return {
                type: "web",
                font: f({
                    fontSize: r.vw,
                    fontFamily: l,
                    fontVariant: c,
                    color: "rgba(" + o.activeRGBValue + ", " + g(o) + ")",
                    background: y(e),
                    textShadow: E(e)
                }),
                window: f((t = e.window,
                n = t.windowColor,
                {
                    background: n.activeRGBValue ? "rgba(" + n.activeRGBValue + ", " + g(n) + ")" : null
                }))
            }
        }
    },
    1540: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
          , r = this && this.__awaiter || function(e, t, n, a) {
            return new (n || (n = Promise))((function(r, i) {
                function o(e) {
                    try {
                        l(a.next(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function s(e) {
                    try {
                        l(a.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function l(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(o, s)
                }
                l((a = a.apply(e, t || [])).next())
            }
            ))
        }
          , i = this && this.__generator || function(e, t) {
            var n, a, r, i, o = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function s(i) {
                return function(s) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; o; )
                            try {
                                if (n = 1,
                                a && (r = 2 & i[0] ? a.return : i[0] ? a.throw || ((r = a.return) && r.call(a),
                                0) : a.next) && !(r = r.call(a, i[1])).done)
                                    return r;
                                switch (a = 0,
                                r && (i = [2 & i[0], r.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    r = i;
                                    break;
                                case 4:
                                    return o.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++,
                                    a = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = o.ops.pop(),
                                    o.trys.pop();
                                    continue;
                                default:
                                    if (!(r = o.trys,
                                    (r = r.length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                        o.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && o.label < r[1]) {
                                        o.label = r[1],
                                        r = i;
                                        break
                                    }
                                    if (r && o.label < r[2]) {
                                        o.label = r[2],
                                        o.ops.push(i);
                                        break
                                    }
                                    r[2] && o.ops.pop(),
                                    o.trys.pop();
                                    continue
                                }
                                i = t.call(e, o)
                            } catch (e) {
                                i = [6, e],
                                a = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, s])
                }
            }
        }
          , o = this && this.__rest || function(e, t) {
            var n = {};
            for (var a in e)
                Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var r = 0;
                for (a = Object.getOwnPropertySymbols(e); r < a.length; r++)
                    t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
            }
            return n
        }
          , s = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.infoActions = t.drmActions = t.controlActions = t.reset = t.init = t.updateVolume = t.transit = void 0;
        var l, c, u, d, p = s(n(1644)), m = n(117), h = n(1532), v = s(n(875)), f = n(438), E = n(206), g = n(936), y = function() {
            return d
        }, b = new p.default, C = function(e) {
            return function(t, n) {
                var a = h.pick(n().player.progress, Object.keys(e));
                v.default(a, e) || t({
                    type: E.ActionTypes.UPDATE_PLAYER_PROGRESS,
                    payload: e
                })
            }
        }, _ = function(e) {
            return function(t, n) {
                var a = h.pick(n().player.adProgress, Object.keys(e));
                v.default(a, e) || t({
                    type: E.ActionTypes.UPDATE_AD_PROGRESS,
                    payload: e
                })
            }
        };
        t.transit = function(e, t) {
            return void 0 === t && (t = {}),
            function(n, r) {
                var i = r().player
                  , o = i.playerState
                  , s = i.contentType
                  , l = i.seekDirection
                  , c = i.seekRate
                  , u = a(a({}, t), {
                    playerState: e
                });
                e === E.State.seeking && (o === e && t.seekDirection === l ? u.seekRate = (c + 1) % f.PLAYER_SEEK_INTERVALS.length : u.seekRate = 0),
                (e === E.State.seeking || t.contentType && t.contentType !== s) && n(C({
                    bufferPosition: 0
                })),
                n({
                    type: E.ActionTypes.TRANSIT_PLAYER_STATE,
                    payload: u
                })
            }
        }
        ,
        t.updateVolume = function(e) {
            var t = e.volume
              , n = e.isMuted;
            return function(e, a) {
                var r = a().player.volume
                  , i = r.volume
                  , o = r.isMuted;
                void 0 !== t && t !== i ? e({
                    type: E.ActionTypes.UPDATE_PLAYER_VOLUME,
                    payload: {
                        volume: t,
                        isMuted: void 0 !== n && n
                    }
                }) : void 0 !== n && n !== o && e({
                    type: E.ActionTypes.UPDATE_PLAYER_VOLUME,
                    payload: {
                        isMuted: n
                    }
                })
            }
        }
        ;
        var A = function(e) {
            return function(t, n) {
                var a = e.visualQualityIndex
                  , r = o(e, ["visualQualityIndex"]);
                if (a) {
                    var i = n().player.quality
                      , s = i.qualityList
                      , l = i.isHD
                      , c = s[a].height >= 720;
                    c !== l && (r.isHD = c)
                }
                0 !== Object.keys(r).length && t({
                    type: E.ActionTypes.UPDATE_PLAYER_QUALITY,
                    payload: r
                })
            }
        }
          , S = -1
          , T = function(e, n, a, r) {
            a.on(f.PLAYER_EVENTS.play, (function() {
                e(t.transit(E.State.playing, {
                    contentType: f.PLAYER_CONTENT_TYPE.video
                }))
            }
            )),
            a.on(f.PLAYER_EVENTS.pause, (function() {
                e(t.transit(E.State.paused))
            }
            )),
            a.on(f.PLAYER_EVENTS.time, (function(t) {
                var a = t.position
                  , i = t.duration
                  , o = n().player.progress.position
                  , s = Math.floor(a);
                o > 0 && 0 === s && isNaN(i) || s !== o && e(C({
                    position: s,
                    duration: Math.floor(i) || r
                }))
            }
            )),
            a.on(f.PLAYER_EVENTS.complete, (function() {
                e(t.transit(E.State.completed))
            }
            )),
            a.on(f.PLAYER_EVENTS.mute, (function(n) {
                e(t.updateVolume({
                    isMuted: n.mute
                }))
            }
            )),
            a.on(f.PLAYER_EVENTS.volume, (function(n) {
                e(t.updateVolume(n))
            }
            )),
            a.on(f.PLAYER_EVENTS.adPlay, (function() {
                e(t.transit(E.State.playing, {
                    contentType: f.PLAYER_CONTENT_TYPE.ad
                }))
            }
            )),
            a.on(f.PLAYER_EVENTS.adPause, (function() {
                e(t.transit(E.State.paused))
            }
            )),
            a.on(f.PLAYER_EVENTS.adStart, (function(t) {
                1 === t.adSequence && e(_({
                    duration: 0,
                    position: 0
                }))
            }
            )),
            a.on(f.PLAYER_EVENTS.adTime, (function(t) {
                var n;
                e((n = {
                    adCount: t.podcount || 1,
                    adSequence: t.sequence || 1
                },
                function(e, t) {
                    v.default(t().player.ad, n) || e({
                        type: E.ActionTypes.UPDATE_PLAYER_AD_INFO,
                        payload: n
                    })
                }
                )),
                e(_({
                    position: Math.max(0, Math.floor(10 * t.position) / 10),
                    duration: Math.max(0, Math.floor(t.duration))
                }))
            }
            )),
            a.on(f.PLAYER_EVENTS.adPodComplete, (function() {
                e(t.transit(E.State.playing, {
                    contentType: f.PLAYER_CONTENT_TYPE.video
                }))
            }
            )),
            a.on(f.PLAYER_EVENTS.bufferChange, (function(t) {
                var n = Math.floor(t.duration * t.bufferPercent / 100);
                e(C({
                    bufferPosition: n
                })),
                S = m.now()
            }
            )),
            a.on(f.PLAYER_EVENTS.bufferStart, (function() {
                clearTimeout(l),
                l = window.setTimeout((function() {
                    e(C({
                        isBuffering: !0
                    }))
                }
                ), 500)
            }
            )),
            a.on(f.PLAYER_EVENTS.bufferEnd, (function() {
                clearTimeout(l),
                e(C({
                    isBuffering: !1
                }))
            }
            )),
            a.on(f.PLAYER_EVENTS.captionsListChange, (function(t) {
                var n = t.captionsList;
                e({
                    type: E.ActionTypes.UPDATE_PLAYER_CAPTIONS,
                    payload: {
                        captionsList: n
                    }
                })
            }
            )),
            a.on(f.PLAYER_EVENTS.captionsChange, (function(t) {
                var n = t.captionsIndex;
                e({
                    type: E.ActionTypes.UPDATE_PLAYER_CAPTIONS,
                    payload: {
                        captionsIndex: n
                    }
                })
            }
            )),
            a.on(f.PLAYER_EVENTS.captionsStylesChange, (function(t) {
                var n = t.captionsStyles;
                e({
                    type: E.ActionTypes.UPDATE_PLAYER_CAPTIONS,
                    payload: {
                        captionsStyles: n
                    }
                })
            }
            )),
            a.on(f.PLAYER_EVENTS.qualityListChange, (function(t) {
                var n = t.qualityList;
                e(A({
                    qualityList: n.map((function(e) {
                        if (e.width && e.label) {
                            var t = Math.round(9 * e.width / 16);
                            e.height = t,
                            e.label = e.label.replace(/\b\d+p\b/, t + "p")
                        }
                        return e
                    }
                    ))
                }))
            }
            )),
            a.on(f.PLAYER_EVENTS.qualityChange, (function(t) {
                var n = t.qualityIndex;
                e(A({
                    qualityIndex: n
                }))
            }
            )),
            a.on(f.PLAYER_EVENTS.visualQualityChange, (function(t) {
                var n = t.qualityIndex;
                e(A({
                    visualQualityIndex: n
                }))
            }
            ))
        }
          , O = function() {
            clearInterval(c)
        }
          , R = function() {
            return function(e, n) {
                O(),
                c = window.setInterval((function() {
                    var a = n().player
                      , r = a.seekDirection
                      , i = a.seekRate
                      , o = a.progress
                      , s = o.position
                      , l = o.duration - 10
                      , c = s + (r === f.PLAYER_SEEK_DIRECTIONS.rewind ? -1 : 1) * f.PLAYER_SEEK_INTERVALS[i] / f.PLAYER_SEEK_TIMES_PER_SECOND;
                    c <= 0 ? e(t.controlActions.seek(c)) : (c >= l && (c = l,
                    O()),
                    e(C({
                        position: c
                    })))
                }
                ), 1e3 / f.PLAYER_SEEK_TIMES_PER_SECOND)
            }
        }
          , M = function(e) {
            return function(t, n) {
                if (!(e <= 0)) {
                    var a = n().player.bitrate;
                    if (e !== a)
                        return t({
                            type: E.ActionTypes.UPDATE_PLAYER_BITRATE,
                            payload: e
                        })
                }
            }
        }
          , P = function(e) {
            return function(t, n) {
                t({
                    type: E.ActionTypes.UPDATE_TIME_GAP_TO_LAST_BUFFER,
                    payload: e
                })
            }
        }
          , w = function(e) {
            var t, n;
            return (null === (n = null === (t = y()) || void 0 === t ? void 0 : t.actionsTimeout) || void 0 === n ? void 0 : n[e]) || -1
        };
        t.init = function(e, n, a) {
            return void 0 === n && (n = 0),
            void 0 === a && (a = 0),
            function(r, i) {
                T(r, i, e, a),
                e.shouldReportBitrate && function(e, t) {
                    window.clearInterval(u),
                    u = window.setInterval((function() {
                        var n = t.getBitrate();
                        if (e(M(n)),
                        S > 0) {
                            var a = m.now() - S;
                            e(P(a))
                        }
                    }
                    ), 500)
                }(r, e),
                d = e,
                r(t.transit(E.State.inited)),
                r(C({
                    position: n,
                    duration: a
                })),
                r(t.updateVolume({
                    isMuted: e.getMute(),
                    volume: e.getVolume()
                }))
            }
        }
        ,
        t.reset = function() {
            return clearTimeout(l),
            clearInterval(u),
            O(),
            b.abortAll(),
            d = void 0,
            S = -1,
            {
                type: E.ActionTypes.RESET_PLAYER
            }
        }
        ,
        t.controlActions = {
            play: function() {
                return function(e, n) {
                    return b.createPromise((function(a) {
                        var r = n().player
                          , i = r.playerState
                          , o = r.contentType
                          , s = r.progress.position;
                        if (i !== E.State.playing) {
                            var l = o === f.PLAYER_CONTENT_TYPE.ad ? f.PLAYER_EVENTS.adPlay : f.PLAYER_EVENTS.play
                              , c = function() {
                                y().once(l, a),
                                y().play(),
                                o === f.PLAYER_CONTENT_TYPE.ad && e(t.transit(E.State.playing, {
                                    contentType: f.PLAYER_CONTENT_TYPE.ad
                                }))
                            };
                            return i === E.State.seeking ? e(t.controlActions.seek(s, c)) : c(),
                            {
                                onReject: function() {
                                    return y().removeListener(l, a)
                                }
                            }
                        }
                        a()
                    }
                    ), {
                        timeout: w(E.ActionTypeInTimeoutPromise.PLAY) > 0 ? m.secs(w(E.ActionTypeInTimeoutPromise.PLAY)) : m.secs(5)
                    })
                }
            },
            pause: function() {
                return function(e, n) {
                    return b.createPromise((function(a) {
                        var r = n().player
                          , i = r.playerState
                          , o = r.contentType
                          , s = r.progress.position;
                        if (i !== E.State.paused) {
                            var l = o === f.PLAYER_CONTENT_TYPE.ad ? f.PLAYER_EVENTS.adPause : f.PLAYER_EVENTS.pause
                              , c = function() {
                                y().once(l, a),
                                y().pause(),
                                o === f.PLAYER_CONTENT_TYPE.ad && e(t.transit(E.State.paused))
                            };
                            return i === E.State.seeking ? e(t.controlActions.seek(s, c)) : c(),
                            {
                                onReject: function() {
                                    return y().removeListener(l, a)
                                }
                            }
                        }
                        a()
                    }
                    ), {
                        timeout: w(E.ActionTypeInTimeoutPromise.PAUSE) > 0 ? m.secs(w(E.ActionTypeInTimeoutPromise.PAUSE)) : m.secs(5)
                    })
                }
            },
            seek: function(e, n) {
                return function(a, r) {
                    return b.createPromise((function(i) {
                        var o = r().player
                          , s = o.progress.duration
                          , l = o.playerState
                          , c = h.clamp(e, 0, s || Number.POSITIVE_INFINITY);
                        O();
                        var u = function() {
                            a(C({
                                position: e
                            })),
                            n ? n() : a(t.controlActions.play()),
                            i(c)
                        };
                        return y().shouldWaitForSeekedEvent && y().once(f.PLAYER_EVENTS.seeked, u),
                        l === E.State.completed && a(t.transit(E.State.inited)),
                        y().seek(c),
                        y().shouldWaitForSeekedEvent || u(),
                        {
                            onReject: function() {
                                y().removeListener(f.PLAYER_EVENTS.seeked, u)
                            }
                        }
                    }
                    ), {
                        timeout: w(E.ActionTypeInTimeoutPromise.SEEK) > 0 ? m.secs(w(E.ActionTypeInTimeoutPromise.SEEK)) : m.secs(10)
                    })
                }
            },
            stepRewind: function() {
                return function(e, n) {
                    var a = n().player.progress.position;
                    return e(t.controlActions.seek(a - f.PLAYER_STEP_SEEK_INTERVAL))
                }
            },
            stepForward: function() {
                return function(e, n) {
                    var a = n().player.progress.position;
                    return e(t.controlActions.seek(a + f.PLAYER_STEP_SEEK_INTERVAL))
                }
            },
            rewind: function() {
                return function(e, n) {
                    var a = function() {
                        e(t.transit(E.State.seeking, {
                            seekDirection: f.PLAYER_SEEK_DIRECTIONS.rewind
                        })),
                        e(R())
                    };
                    n().player.playerState === E.State.playing ? e(t.controlActions.pause()).then(a) : a()
                }
            },
            fastForward: function() {
                return function(e, n) {
                    var a = function() {
                        e(t.transit(E.State.seeking, {
                            seekDirection: f.PLAYER_SEEK_DIRECTIONS.forward
                        })),
                        e(R())
                    };
                    n().player.playerState === E.State.playing ? e(t.controlActions.pause()).then(a) : a()
                }
            },
            setVolume: function(e) {
                var t = e.volume
                  , n = e.isMuted;
                return function() {
                    void 0 !== t ? y().setVolume(t) : y().setMute(!!n)
                }
            },
            setCaptions: function(e) {
                return function() {
                    return new Promise((function(t) {
                        y().once(f.PLAYER_EVENTS.captionsChange, (function(e) {
                            return t(e.number)
                        }
                        )),
                        y().setCaptions(e)
                    }
                    ))
                }
            },
            setQuality: function(e) {
                return function() {
                    return y().setQuality(e),
                    Promise.resolve()
                }
            }
        },
        t.drmActions = {
            updateDrmKeySystem: function() {
                return function(e, t) {
                    return r(void 0, void 0, void 0, (function() {
                        var n;
                        return i(this, (function(a) {
                            switch (a.label) {
                            case 0:
                                if (null !== t().player.drmKeySystem)
                                    return [3, 4];
                                a.label = 1;
                            case 1:
                                return a.trys.push([1, 3, , 4]),
                                [4, b.createPromise((function(e, t) {
                                    g.getDrmKeySystem().then((function(t) {
                                        return e(t)
                                    }
                                    )).catch((function(e) {
                                        return t && t(e)
                                    }
                                    ))
                                }
                                ), {
                                    timeout: w(E.ActionTypeInTimeoutPromise.UPDATE_DRM_KEY) > 0 ? m.secs(w(E.ActionTypeInTimeoutPromise.UPDATE_DRM_KEY)) : m.secs(5)
                                })];
                            case 2:
                                return n = a.sent(),
                                e({
                                    type: E.ActionTypes.UPDATE_DRM_KEY_SYSTEM,
                                    payload: n
                                }),
                                [3, 4];
                            case 3:
                                return a.sent(),
                                e({
                                    type: E.ActionTypes.UPDATE_DRM_KEY_SYSTEM,
                                    payload: E.DrmKeySystem.Invalid
                                }),
                                [3, 4];
                            case 4:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
            }
        },
        t.infoActions = {
            updateBitrate: M,
            updateProgress: C,
            updateTimeGapToLastBuffer: P
        }
    },
    1541: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return v
        }
        )),
        n.d(t, "c", (function() {
            return f
        }
        )),
        n.d(t, "b", (function() {
            return E
        }
        )),
        n.d(t, "e", (function() {
            return g
        }
        )),
        n.d(t, "d", (function() {
            return b
        }
        ));
        var a = n(9)
          , r = n.n(a)
          , i = n(76)
          , o = n.n(i)
          , s = n(40)
          , l = n.n(s)
          , c = n(1)
          , u = n(96)
          , d = n(2)
          , p = n(5)
          , m = n(32)
          , h = n(23);
        function v() {
            return Object(u.b)(p.WEB_CAPTION_SETTINGS)
        }
        function f(e) {
            return function(t, n) {
                var a = n().captionSettings
                  , r = [];
                l()(a).forEach((function(t) {
                    e[t] !== a[t] && r.push(t)
                }
                )),
                Object(h.k)({
                    type: m.p.clientInfo,
                    subtype: m.h.CAPTIONS_SETTINGS,
                    message: {
                        changedOptions: r
                    }
                }),
                t(y(e)),
                Object(u.f)(p.WEB_CAPTION_SETTINGS, o()(e))
            }
        }
        function E(e) {
            return y(JSON.parse(e))
        }
        function g(e) {
            return function(t, n) {
                var a = n().captionSettings;
                t(f(Object(c.__assign)(Object(c.__assign)({}, a), {
                    defaultCaptions: e
                })))
            }
        }
        function y(e) {
            return {
                type: d.de,
                captionSettings: e
            }
        }
        function b(e) {
            var t = e.setting
              , n = e.attributeKey
              , a = e.attributeValue;
            return function(e, i) {
                var o, s, l = i().captionSettings, u = Object(c.__assign)(Object(c.__assign)({}, l), ((o = {})[t] = Object(c.__assign)(Object(c.__assign)({}, l[t]), ((s = {})[n] = a,
                s)),
                o));
                return e(f(u)),
                r.a.resolve(u)
            }
        }
    },
    1562: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        }
        )),
        n.d(t, "b", (function() {
            return a
        }
        ));
        var a, r = "urn:x-cast:com.tubitv.cast.message";
        !function(e) {
            e.AUTOPLAY_SHOW = "AUTOPLAY_SHOW",
            e.AUTOPLAY_PAUSE = "AUTOPLAY_PAUSE",
            e.AUTOPLAY_RESUME = "AUTOPLAY_RESUME",
            e.AUTOPLAY_START = "AUTOPLAY_START",
            e.AUTOPLAY_CANCEL = "AUTOPLAY_CANCEL"
        }(a || (a = {}))
    },
    1563: function(e, t, n) {
        "use strict";
        var a = n(1)
          , r = n(1532)
          , i = n(8)
          , o = n.n(i)
          , s = n(441)
          , l = n.n(s)
          , c = n(0)
          , u = n.n(c)
          , d = n(68)
          , p = n(1666)
          , m = n.n(p)
          , h = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.isDraggingScrubber = !1,
                n.ref = Object(c.createRef)(),
                n.handleMouseMove = function(e) {
                    var t;
                    n.isDraggingScrubber && (n.setState({
                        value: n.computeTargetPosition(e.clientY)
                    }),
                    null === (t = n.onChanging) || void 0 === t || t.call(n, n.computeTargetPosition(e.clientY)))
                }
                ,
                n.handleMouseUp = function(e) {
                    var t, a;
                    n.isDraggingScrubber && (window.setTimeout((function() {
                        n.isDraggingScrubber = !1
                    }
                    ), 0),
                    null === (a = (t = n.props).onChanged) || void 0 === a || a.call(t, n.computeTargetPosition(e.clientY)))
                }
                ,
                n.handleClick = function(e) {
                    var t, a;
                    e.stopPropagation(),
                    n.isDraggingScrubber || null === (a = (t = n.props).onChanged) || void 0 === a || a.call(t, n.computeTargetPosition(e.clientY))
                }
                ,
                n.handleScrubberMouseDown = function() {
                    n.isDraggingScrubber = !0
                }
                ,
                n.state = {
                    value: t.value
                },
                n.props.onChanging && (n.onChanging = l()(n.props.onChanging, 200)),
                n
            }
            return Object(a.__extends)(t, e),
            t.getDerivedStateFromProps = function(e, t) {
                var n = e.value;
                return n !== t.previousValue ? n !== t.value ? {
                    value: n,
                    previousValue: n
                } : {
                    previousValue: n
                } : null
            }
            ,
            t.prototype.componentDidMount = function() {
                Object(d.a)(window, "mousemove", this.handleMouseMove),
                Object(d.a)(window, "mouseup", this.handleMouseUp)
            }
            ,
            t.prototype.componentWillUnmount = function() {
                Object(d.k)(window, "mousemove", this.handleMouseMove),
                Object(d.k)(window, "mouseup", this.handleMouseUp)
            }
            ,
            t.prototype.computeTargetPosition = function(e) {
                var t = this.props
                  , n = t.min
                  , a = t.max
                  , i = this.ref.current;
                if (i) {
                    var o = i.getBoundingClientRect()
                      , s = Object(r.clamp)((o.bottom - e) / o.height, 0, 1);
                    return Math.floor(s * (a - n))
                }
                return 0
            }
            ,
            t.prototype.render = function() {
                var e, t = this.props, n = t.min, a = t.max, r = t.className, i = t.isLive, s = this.state.value;
                return u.a.createElement("div", {
                    className: o()(m.a.inputRange, r, (e = {},
                    e[m.a.live] = i,
                    e)),
                    onClick: this.handleClick,
                    ref: this.ref
                }, u.a.createElement("div", {
                    className: m.a.track
                }, u.a.createElement("div", {
                    className: m.a.past,
                    style: {
                        height: s / (a - n) * 100 + "%"
                    }
                })), u.a.createElement("span", {
                    className: m.a.scrubber,
                    onMouseDown: this.handleScrubberMouseDown,
                    style: {
                        bottom: s / (a - n) * 100 + "%"
                    }
                }))
            }
            ,
            t
        }(c.PureComponent);
        t.a = h
    },
    1564: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return s
        }
        ));
        var a = n(4)
          , r = n.n(a)
          , i = n(35)
          , o = function(e) {
            return e.video.byId
        }
          , s = Object(i.a)([o, function(e, t) {
            var n = e.history.contentIdMap[t] || {}
              , a = n.position
              , r = n.episodes;
            return (void 0 === r ? [] : r)[a]
        }
        , function(e, t) {
            return e.video.byId[t] || {}
        }
        , function(e, t) {
            return t
        }
        ], (function(e, t, n, a) {
            var i = null;
            if (t) {
                var o = e[t.contentId];
                o && (i = r()({}, t, {
                    title: o.title,
                    duration: o.duration,
                    type: o.type,
                    id: o.id
                }))
            }
            return !i && Array.isArray(n.seasons) && n.seasons[0] && (i = r()({}, e[n.seasons[0].episodeIds[0]])),
            i && (i.series_id = a.slice(1)),
            i
        }
        ))
          , l = (Object(i.a)([o, s], (function(e, t) {
            return t ? e[t.id] : null
        }
        )),
        Object(i.a)((function(e) {
            return e.contentIdMap
        }
        ), (function(e, t) {
            return t
        }
        ), (function(e, t) {
            return e[t]
        }
        )));
        Object(i.a)(l, (function(e) {
            var t = {};
            return e && e.episodes && e.episodes.forEach((function(e) {
                t[e.contentId] = {
                    position: e.position
                }
            }
            )),
            t
        }
        ))
    },
    1565: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        }
        )),
        n.d(t, "b", (function() {
            return i
        }
        ));
        var a = n(154)
          , r = function(e) {
            try {
                var t = new Date(2020,11,30);
                return new Intl.DateTimeFormat(e).formatToParts(t).map((function(e) {
                    var t = e.type;
                    return ["month", "day", "year", "relatedYear"].includes(t) ? t : null
                }
                )).filter(Boolean)
            } catch (e) {
                return ["month", "day", "year"]
            }
        }
          , i = function(e, t) {
            return void 0 === t && (t = ""),
            e === a.c.EN_US ? "English" === t ? "" : t : e === a.c.ES_MX && "Spanish" === t ? "" : t
        }
    },
    1566: function(e, t, n) {
        
    },
    1567: function(e, t, n) {
        
    },
    1568: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        }
        ));
        var a = n(35)
          , r = Object(a.a)((function(e) {
            return e.search.recommendedContainerId
        }
        ), (function(e) {
            return e.container.containerChildrenIdMap
        }
        ), (function(e, t) {
            return t[e]
        }
        ))
    },
    1590: function(e, t, n) {
        "use strict";
        var a = n(8)
          , r = n.n(a)
          , i = n(0)
          , o = n.n(i)
          , s = n(11)
          , l = n(276)
          , c = n(39)
          , u = n.n(c)
          , d = n(1567)
          , p = n.n(d)
          , m = function(e) {
            var t, n = e.children, a = e.className, i = e.onClick, s = e.targetBlank, l = e.text, c = e.to, d = function() {
                "function" == typeof i && i()
            }, m = r()(p.a.listButton, ((t = {})[p.a.link] = "string" == typeof c,
            t), a), h = l.length ? o.a.createElement("span", {
                className: p.a.text
            }, l) : null;
            return c ? o.a.createElement(u.a, {
                className: m,
                to: c,
                onClick: d,
                targetBlank: s
            }, n, h) : o.a.createElement("div", {
                className: m,
                onClick: d
            }, n, h)
        }
          , h = n(443)
          , v = n(693)
          , f = n(24)
          , E = n(23)
          , g = n(1566)
          , y = n.n(g)
          , b = Object(s.a)({
            twitterText: {
                defaultMessage: "Watch {title} on Tubi: ",
                id: "src/common/components/ShareMenu/ShareMenu:twitterText"
            }
        });
        t.a = function(e) {
            var t = Object(l.a)()
              , n = e.className
              , a = e.contentUrl
              , i = e.title
              , s = r()(y.a.shareMenu, n)
              , c = t.formatMessage(b.twitterText, {
                title: i
            });
            return o.a.createElement("div", {
                className: s
            }, o.a.createElement(m, {
                to: "https://www.facebook.com/sharer/sharer.php?u=" + Object(E.a)(a, "facebook"),
                targetBlank: !0,
                text: "Facebook",
                className: y.a.iconWrapper,
                onClick: function() {
                    var t = e.trackSocialClick;
                    t && t(f.E)
                }
            }, o.a.createElement(h.a, {
                className: y.a.facebookIcon
            })), o.a.createElement(m, {
                to: "https://twitter.com/intent/tweet?text=" + c + Object(E.a)(a, "twitter"),
                targetBlank: !0,
                text: "Twitter",
                className: y.a.iconWrapper,
                onClick: function() {
                    var t = e.trackSocialClick;
                    t && t(f.F)
                }
            }, o.a.createElement(v.a, {
                className: y.a.twitterIcon
            })))
        }
    },
    1591: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return E
        }
        ));
        var a = n(9)
          , r = n.n(a)
          , i = n(194)
          , o = n(27)
          , s = n(2)
          , l = n(24)
          , c = n(26)
          , u = n(18)
          , d = n(16)
          , p = n(1592)
          , m = n(23)
          , h = n(93)
          , v = n(1562)
          , f = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , a = t.auth
              , r = t.video.byId
              , i = a.deviceId
              , o = a.user
              , s = void 0 === o ? {} : o
              , l = s.userId
              , u = s.token
              , d = r[e]
              , p = d.ratings
              , m = void 0 === p ? [] : p
              , h = d.description
              , v = d.duration
              , f = d.year
              , E = d.publisher_id
              , g = d.tags
              , y = d.type
              , b = d.series_id
              , C = (m[0] || {}).value
              , _ = {
                contentId: e,
                contentType: y,
                parentId: b,
                rating: C,
                description: h,
                duration: v,
                year: f,
                pubId: E,
                tags: g
            }
              , A = {
                deviceId: i,
                userId: l,
                platform: c.a.web,
                authToken: u
            };
            return {
                autoplay: {
                    automatic: !!n.isFromAutoplayAutomatic,
                    deliberate: !!n.isFromAutoplayDeliberate
                },
                content: _,
                device: A
            }
        }
          , E = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return function(n, a) {
                n(Object(u.a)(s.v, {
                    contentId: e
                }));
                var c = t.resumeFromCurrentPosition
                  , E = window
                  , g = E.cast
                  , y = E.chrome
                  , b = a()
                  , C = g.framework.CastContext.getInstance()
                  , _ = b.video.byId
                  , A = b.player
                  , S = b.history.contentIdMap
                  , T = void 0 === S ? {} : S
                  , O = b.ui.chromecastAutoplayVisible
                  , R = _[e]
                  , M = R.url
                  , P = R.posterarts
                  , w = void 0 === P ? [] : P
                  , L = R.series_id
                  , N = R.has_subtitle
                  , I = new y.cast.media.MediaInfo(M,"application/x-mpegurl");
                if (I.customData = f(e, b, t),
                O && (n(Object(o.g)(!1)),
                Object(p.a)({
                    type: v.b.AUTOPLAY_CANCEL
                })),
                w[0])
                    I.metadata = new y.cast.media.MovieMediaMetadata,
                    I.metadata.images = [new y.cast.Image(w[0])];
                else if (L) {
                    var k = (_["0" + L] || {}).posterarts;
                    k && k.length && (I.metadata = new y.cast.media.MovieMediaMetadata,
                    I.metadata.images = [new y.cast.Image(k[0])])
                }
                if (N) {
                    var D = new y.cast.media.Track("1",window.chrome.cast.media.TrackType.TEXT);
                    D.trackContentId = "1",
                    D.trackContentType = "text/vtt",
                    D.subtype = y.cast.media.TextTrackType.SUBTITLES,
                    D.name = "English",
                    D.language = "en-US",
                    D.customData = null,
                    I.tracks = [D]
                }
                var j = new y.cast.media.LoadRequest(I)
                  , x = Object(h.e)({
                    byId: _,
                    contentId: e,
                    history: T[e],
                    isSeries: !1
                }).position
                  , V = 0;
                return c ? V = A.progress.position : x > 0 && (V = x),
                j.currentTime = V,
                C.getCurrentSession().loadMedia(j).then((function() {
                    n(Object(u.a)(s.x));
                    var t = Object(d.c)(e, V, i.CastType.CHROMECAST);
                    return Object(m.g)(l.g, t),
                    r.a.resolve()
                }
                )).catch((function(e) {
                    return n(Object(u.a)(s.w, {
                        error: e
                    })),
                    r.a.reject(e)
                }
                ))
            }
        }
    },
    1592: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        }
        ));
        var a = n(1562)
          , r = function(e) {
            var t;
            return null === (t = cast.framework.CastContext.getInstance().getCurrentSession()) || void 0 === t ? void 0 : t.sendMessage(a.a, e)
        }
    },
    1593: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return b
        }
        ));
        var a, r = n(40), i = n.n(r), o = n(76), s = n.n(o), l = n(1), c = n(439), u = n(36), d = n(607), p = n.n(d), m = n(96), h = n(32), v = n(326), f = n(23), E = Object(v.a)("VideoResourceManager");
        !function(e) {
            e.HDCP_V2_ERROR = "HDCP_V2_ERROR",
            e.HDCP_V2 = "HDCP_V2",
            e.HDCP_V1_ERROR = "HDCP_V1_ERROR",
            e.HDCP_V1 = "HDCP_V1",
            e.SD_ERROR = "SD_ERROR",
            e.SD = "SD",
            e.DEFAULT = "DEFAULT"
        }(a || (a = {}));
        var g = function(e) {
            return !!e.license_server
        }
          , y = function(e) {
            return !!e.license_server && "hdcp_disabled" !== e.license_server.hdcp_version
        };
        var b = p()((function(e) {
            return new C(e)
        }
        ), (function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            return s()(e)
        }
        ))
          , C = function() {
            function e(e) {
                if (this.DRMIndex = 0,
                this.CDNIndex = 0,
                this.rememberFallback = !1,
                this.isUsingRememberValue = !1,
                this.videoResourceLevels = this.createLevels(e),
                E("levels", this.videoResourceLevels),
                this.rememberFallback = !!e.rememberFallback,
                this.rememberFallback) {
                    var t = this.readResourceLevelFromStorage();
                    this.resetDRMIndexFromDefaultLevel(t)
                }
            }
            return e.prototype.getCurrentResource = function() {
                var e;
                return (null === (e = this.getCurrentDRMResource()) || void 0 === e ? void 0 : e.resources[this.CDNIndex]) || null
            }
            ,
            e.prototype.switchCDN = function() {
                var e = this.getCurrentDRMResource();
                if (!e)
                    return null;
                this.CDNIndex++;
                var t = e.resources.length;
                return this.CDNIndex >= t && (this.CDNIndex = 0),
                e.resources[this.CDNIndex]
            }
            ,
            e.prototype.fallback = function(e) {
                void 0 === e && (e = {
                    skipDRM: !1
                }),
                this.isUsingRememberValue && this.DRMIndex > 0 ? (this.isUsingRememberValue = !1,
                this.DRMIndex = 0,
                Object(m.d)("videoResourceManagerResourceUsed")) : this.DRMIndex++;
                var t = this.getCurrentDRMResource();
                if (!t)
                    return null;
                if (e.skipDRM && t.drm)
                    return this.fallback({
                        skipDRM: !0
                    });
                if (this.rememberFallback)
                    try {
                        this.saveResourceLevel()
                    } catch (e) {
                        E("save resource level faild", e)
                    }
                return t.resources[this.CDNIndex]
            }
            ,
            e.prototype.getAllLevels = function() {
                return this.videoResourceLevels
            }
            ,
            e.prototype.saveResourceLevel = function() {
                var e = this.getCurrentDRMResource();
                e && void 0 !== e.drm && void 0 !== e.hdcp && Object(m.f)("videoResourceManagerResourceUsed", s()({
                    drm: e.drm,
                    hdcp: e.hdcp,
                    time: +new Date
                }))
            }
            ,
            e.prototype.readResourceLevelFromStorage = function() {
                var e = Object(m.b)("videoResourceManagerResourceUsed");
                if (e)
                    try {
                        var t = JSON.parse(e);
                        return t.time > (new Date).getTime() + 864e5 ? (Object(m.d)("videoResourceManagerResourceUsed"),
                        Object(f.k)({
                            type: h.p.videoInfo,
                            subtype: h.h.PLAYBACK.DRM_LEVEL_STORAGE_EXPIRED,
                            message: {
                                content: t
                            }
                        }),
                        {}) : t
                    } catch (e) {
                        E("read resource level faild", e)
                    }
                return {}
            }
            ,
            e.prototype.resetDRMIndexFromDefaultLevel = function(e) {
                if (void 0 !== e.drm && void 0 !== e.hdcp)
                    for (var t = 0; t < this.videoResourceLevels.length; t++)
                        if (this.videoResourceLevels[t].drm === e.drm && this.videoResourceLevels[t].hdcp === e.hdcp)
                            return this.DRMIndex = t,
                            this.isUsingRememberValue = !0,
                            void Object(f.k)({
                                type: h.p.videoInfo,
                                subtype: h.h.PLAYBACK.RESTORE_DRM_LEVEL_FROM_STORAGE,
                                message: {
                                    drm: e.drm,
                                    hdcp: e.hdcp
                                }
                            })
            }
            ,
            e.prototype.getCurrentDRMResource = function() {
                var e = this.videoResourceLevels[this.DRMIndex];
                return E("current resource", e),
                e
            }
            ,
            e.prototype.preprocessVideoResources = function(e) {
                return e
            }
            ,
            e.prototype.preprocessWebVideoResources = function(e) {
                var t = window.DEBUG_VIDEO_RESOURCE_TYPES;
                if (!Array.isArray(t))
                    return e;
                var n = i()(a);
                if (t.length > 0 && t.some((function(e) {
                    return !n.includes(e)
                }
                )) && (E("debug video resource types must be in range of", n, ", but applied value is", t),
                t = t.filter((function(e) {
                    return n.includes(e)
                }
                ))),
                0 === t.length)
                    return e;
                var r = e.find((function(e) {
                    return "hlsv6_playready" === e.type
                }
                ))
                  , o = e.find((function(e) {
                    return "hlsv6_widevine" === e.type
                }
                ))
                  , s = e.find((function(e) {
                    return "hlsv6_fairplay" === e.type
                }
                ))
                  , c = e.find((function(e) {
                    return "hlsv3" === e.type
                }
                ))
                  , d = []
                  , p = t.map((function(e) {
                    return function(e) {
                        switch (e) {
                        case a.HDCP_V2_ERROR:
                            return 5;
                        case a.HDCP_V2:
                            return 4;
                        case a.HDCP_V1_ERROR:
                            return 3;
                        case a.HDCP_V1:
                            return 2;
                        case a.SD_ERROR:
                            return 1;
                        case a.SD:
                            return 0;
                        case a.DEFAULT:
                            return -1;
                        default:
                            return null
                        }
                    }(e)
                }
                )).filter((function(e) {
                    return "number" == typeof e
                }
                ));
                p.sort((function(e, t) {
                    return t - e
                }
                ));
                for (var m = 0, h = p; m < h.length; m++) {
                    var v = h[m]
                      , f = v >= 0 ? Math.round((v + 1) / 2) - 1 : -1;
                    if (f >= 0)
                        for (var g = 0, y = [r, o, s].filter(Boolean); g < y.length; g++) {
                            var b = y[g]
                              , C = {}
                              , _ = C.hdcp_version
                              , A = C.drm_token;
                            d.push(Object(l.__assign)(Object(l.__assign)({}, b), {
                                license_server: Object(l.__assign)(Object(l.__assign)({}, b.license_server), {
                                    hdcp_version: _,
                                    url: v % 2 != 0 ? "https://example.com" : Object(u.addQueryStringToUrl)(b.license_server.url, {
                                        drm_token: A
                                    })
                                })
                            }))
                        }
                    else
                        c && d.push(Object(l.__assign)({}, c))
                }
                return d
            }
            ,
            e.prototype.preprocessOTTVideoResources = function(e) {
                return Object(l.__spreadArrays)(e)
            }
            ,
            e.prototype.normalizeResoureLevel = function(e) {
                if (!e[0])
                    return e;
                for (var t = e[0].resources.length, n = [e[0]], a = 1; a < e.length; a++)
                    e[a] && e[a].resources.length === t ? n.push(e[a]) : Object(f.k)({
                        type: h.p.videoInfo,
                        subtype: h.h.PLAYBACK.INVALID_CDN_RESOURCE,
                        message: {
                            resouces: e
                        }
                    });
                return n
            }
            ,
            e.prototype.createLevels = function(e) {
                var t = e.drmKeySystem
                  , n = e.isDRMSupported
                  , a = e.videoResources
                  , r = this.preprocessVideoResources(a);
                if (!n) {
                    var i = r.filter((function(e) {
                        return !g(e)
                    }
                    ));
                    return i.length > 0 ? [{
                        drm: !1,
                        hdcp: !1,
                        resources: i
                    }] : []
                }
                for (var o = [], s = {}, l = 0, u = r.map((function(e) {
                    return {
                        drm: g(e),
                        hdcp: y(e),
                        resource: e
                    }
                }
                )).filter((function(e) {
                    return !e.drm || void 0 === t || function(e, t) {
                        switch (t) {
                        case c.DrmKeySystem.PlayReady:
                            return e.type.includes("playready");
                        case c.DrmKeySystem.Widevine:
                            return e.type.includes("widevine");
                        case c.DrmKeySystem.FairPlay:
                            return e.type.includes("fairplay");
                        default:
                            return !1
                        }
                    }(e.resource, t)
                }
                )); l < u.length; l++) {
                    var d = u[l]
                      , p = "" + d.drm + d.hdcp;
                    void 0 === s[p] && (s[p] = o.length,
                    o.push({
                        drm: d.drm,
                        hdcp: d.hdcp,
                        resources: []
                    })),
                    o[s[p]].resources.push(d.resource)
                }
                return this.normalizeResoureLevel(o)
            }
            ,
            e
        }();
        t.a = C
    },
    1594: function(e, t, n) {
        "use strict";
        var a = n(8)
          , r = n.n(a)
          , i = n(0)
          , o = n.n(i)
          , s = n(11)
          , l = n(103)
          , c = n(1648)
          , u = n.n(c)
          , d = Object(s.a)({
            posterAlt: {
                defaultMessage: "poster background",
                id: "src/web/rd/components/BackgroundImage/BackgroundImage:posterAlt"
            }
        });
        t.a = Object(i.memo)((function(e) {
            var t, n = e.src, a = Object(i.useState)(!1), s = a[0], c = a[1], p = Object(i.useRef)(null), m = Object(l.b)(), h = r()(((t = {})[u.a.load] = s,
            t)), v = function() {
                c(!0)
            };
            return Object(i.useEffect)((function() {
                p.current && p.current.complete && setTimeout(v, 200)
            }
            ), []),
            o.a.createElement("div", {
                className: u.a.backgroundImage
            }, o.a.createElement("img", {
                ref: p,
                src: n,
                alt: m.formatMessage(d.posterAlt),
                className: h,
                onLoad: v
            }))
        }
        ))
    },
    1595: function(e, t, n) {
        
    },
    1596: function(e, t, n) {
        
    },
    1597: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return c
        }
        )),
        n.d(t, "c", (function() {
            return u
        }
        )),
        n.d(t, "a", (function() {
            return d
        }
        ));
        var a = n(4)
          , r = n.n(a)
          , i = n(1)
          , o = n(0)
          , s = n.n(o)
          , l = n(49)
          , c = function(e) {
            e.active;
            var t = Object(i.__rest)(e, ["active"])
              , n = Object(o.useMemo)((function() {
                return s.a.createElement("path", {
                    d: "M30,2A28,28,0,1,0,58,30,28,28,0,0,0,30,2Zm0,52A24,24,0,1,1,54,30,24,24,0,0,1,30,54ZM24.5,17A2.49,2.49,0,0,0,22,19.49v22a2.5,2.5,0,0,0,5,0v-22A2.5,2.5,0,0,0,24.5,17Zm11,0A2.49,2.49,0,0,0,33,19.49v22a2.5,2.5,0,0,0,5,0v-22A2.5,2.5,0,0,0,35.5,17Z"
                })
            }
            ), []);
            return s.a.createElement(l.a, r()({
                viewBox: "0 0 60 60"
            }, t), n)
        }
          , u = function(e) {
            e.active;
            var t = Object(i.__rest)(e, ["active"])
              , n = Object(o.useMemo)((function() {
                return s.a.createElement("path", {
                    d: "M43.62,28.26l-.26-.13-19.08-9.7-.22-.12A2.86,2.86,0,0,0,22.74,18,2.66,2.66,0,0,0,20,20.58V40.42A2.66,2.66,0,0,0,22.74,43a2.86,2.86,0,0,0,1.32-.32l.22-.11,19.09-9.7.25-.13a2.51,2.51,0,0,0,0-4.49ZM30,2A28,28,0,1,0,58,30,28,28,0,0,0,30,2Zm0,52A24,24,0,1,1,54,30,24,24,0,0,1,30,54Z"
                })
            }
            ), []);
            return s.a.createElement(l.a, r()({
                viewBox: "0 0 60 60"
            }, t), n)
        }
          , d = function(e) {
            e.active;
            var t = Object(i.__rest)(e, ["active"])
              , n = Object(o.useMemo)((function() {
                return s.a.createElement("path", {
                    d: "M41,1H21C10,1,1,10,1,21c0,11,9,20,20,20h20c11,0,20-9,20-20C61,10,52,1,41,1z M41,37H21c-8.8,0-16-7.2-16-16 S12.2,5,21,5h20c8.8,0,16,7.2,16,16S49.8,37,41,37z M24.5,26.7c-2.8,0-3.7-2.6-3.7-5.5c0-2.9,0.9-5.5,3.7-5.5c1.9,0,2.9,1.1,3.1,2.8 h3.1c-0.4-3.2-2.6-5.5-6.2-5.5c-4.8,0-6.8,3.7-6.8,8.2c0,4.6,2,8.1,6.8,8.1c3.6,0,6-2.3,6.3-5.5h-3.2C27.5,25.6,26.4,26.7,24.5,26.7 z M39.3,26.7c-2.8,0-3.7-2.6-3.7-5.5c0-2.9,0.9-5.5,3.7-5.5c1.9,0,2.9,1.1,3.1,2.8h3.1c-0.4-3.2-2.6-5.5-6.2-5.5 c-4.8,0-6.8,3.7-6.8,8.2c0,4.6,2,8.1,6.8,8.1c3.6,0,6-2.3,6.3-5.5h-3.2C42.2,25.6,41.2,26.7,39.3,26.7z"
                })
            }
            ), []);
            return s.a.createElement(l.a, r()({
                viewBox: "0 0 62 42"
            }, t), n)
        }
    },
    1598: function(e, t, n) {
        
    },
    1600: function(e, t, n) {
        "use strict";
        var a = n(4)
          , r = n.n(a)
          , i = n(0)
          , o = n.n(i)
          , s = n(49);
        t.a = function(e) {
            return o.a.createElement(s.a, r()({
                viewBox: "0 0 24 24"
            }, e), o.a.createElement("path", {
                d: "M2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12ZM17.8 9.8C18.2 10.2 18.2 10.8 17.8 11.2L13 15.9C12.3 16.6 11.6 16.6 11 15.9L6.3 11.1C5.9 10.7 5.9 10.1 6.3 9.7C6.7 9.3 7.3 9.3 7.7 9.7L11.9 13.9C12 14 12.1 14 12.2 13.9L16.4 9.7C16.7 9.4 17.4 9.4 17.8 9.8Z",
                fill: "currentColor"
            }))
        }
    },
    1601: function(e, t, n) {
        "use strict";
        var a = n(4)
          , r = n.n(a)
          , i = n(0)
          , o = n.n(i)
          , s = n(49);
        t.a = function(e) {
            return o.a.createElement(s.a, r()({
                viewBox: "0 0 24 24"
            }, e), o.a.createElement("path", {
                d: "M21.735 6.971C21.607 5.754 20.688 4.773 19.479 4.583C17.042 4.201 14.545 4 12 4C9.455 4 6.958 4.201 4.521 4.583C3.312 4.773 2.393 5.754 2.265 6.971C2.091 8.624 2 10.301 2 12C2 13.699 2.091 15.376 2.265 17.029C2.393 18.246 3.312 19.227 4.521 19.417C6.958 19.799 9.455 20 12 20C14.545 20 17.042 19.799 19.479 19.417C20.688 19.227 21.607 18.246 21.735 17.029C21.909 15.376 22 13.699 22 12C22 10.301 21.909 8.624 21.735 6.971ZM11.539 11.25H9.539V10.8C9.539 10.359 9.18 10 8.738 10H8.338C7.897 10 7.538 10.358 7.538 10.8V13.2C7.538 13.641 7.896 14 8.338 14H8.737C9.178 14 9.538 13.642 9.538 13.2V12.75H11.538V13.2C11.538 14.744 10.281 16 8.737 16H8.338C6.794 16 5.538 14.744 5.538 13.2V10.8C5.538 9.256 6.794 8 8.338 8H8.737C10.281 8 11.538 9.256 11.538 10.8V11.25H11.539ZM18.461 11.25H16.461V10.8C16.461 10.359 16.103 10 15.661 10H15.261C14.82 10 14.461 10.358 14.461 10.8V13.2C14.461 13.641 14.819 14 15.261 14H15.661C16.102 14 16.461 13.642 16.461 13.2V12.75H18.461V13.2C18.461 14.744 17.205 16 15.661 16H15.261C13.717 16 12.461 14.744 12.461 13.2V10.8C12.461 9.256 13.717 8 15.261 8H15.661C17.205 8 18.461 9.256 18.461 10.8V11.25Z",
                fill: "currentColor"
            }))
        }
    },
    1602: function(e, t, n) {
        "use strict";
        var a = n(0)
          , r = n.n(a);
        t.a = function(e) {
            var t = e.className;
            return r.a.createElement("div", {
                className: t,
                dangerouslySetInnerHTML: {
                    __html: '<button is="google-cast-button"/>'
                }
            })
        }
    },
    1603: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getAdTrackFn = t.buildAdQueue = t.fetchJsonAds = void 0;
        var a = n(926);
        function r(e) {
            return void 0 === e && (e = {}),
            (e.items || []).map((function(e) {
                return {
                    id: e.ad_id,
                    video: e.media.streamurl,
                    duration: parseInt(e.media.duration, 10),
                    imptracking: e.imptracking || [],
                    trackingevents: e.media.trackingevents,
                    clickthrough: e.clickthrough,
                    clicktracking: e.clicktracking || []
                }
            }
            ))
        }
        t.fetchJsonAds = function(e) {
            return fetch(e, {
                headers: {
                    Accept: "application/json"
                }
            }).then((function(e) {
                return e.json()
            }
            )).then((function(e) {
                return r(e)
            }
            ))
        }
        ,
        t.buildAdQueue = r,
        t.getAdTrackFn = function(e) {
            var t = [0, 25, 50, 75, 100]
              , n = {};
            return function(r) {
                t.some((function(t) {
                    if (n[t])
                        return !1;
                    if (r < Math.ceil(e.duration * t / 100))
                        return !1;
                    n[t] = !0,
                    0 === t && a.sendBeaconRequest(e.imptracking);
                    var i = e.trackingevents["tracking_" + t];
                    return i && a.sendBeaconRequest(i),
                    !0
                }
                ))
            }
        }
    },
    1604: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getComputedValue = t.removeVideoElement = t.cancelAnimationFrame = t.requestAnimationFrame = void 0,
        t.requestAnimationFrame = function(e) {
            return window.requestAnimationFrame ? window.requestAnimationFrame(e) : window.setTimeout(e, 17)
        }
        ,
        t.cancelAnimationFrame = function(e) {
            window.cancelAnimationFrame ? window.cancelAnimationFrame(e) : window.clearTimeout(e)
        }
        ,
        t.removeVideoElement = function(e) {
            var t;
            e.pause(),
            e.removeAttribute("src"),
            e.load(),
            null === (t = e.parentElement) || void 0 === t || t.removeChild(e)
        }
        ,
        t.getComputedValue = function(e, t) {
            var n = "string" == typeof e ? document.querySelector(e) : e;
            return n ? window.getComputedStyle(n).getPropertyValue("" + t) : ""
        }
    },
    1605: function(e, t, n) {
        "use strict";
        var a = n(0)
          , r = ["mousedown", "touchstart"];
        t.a = function(e, t) {
            Object(a.useEffect)((function() {
                var n = function(n) {
                    e.current && !e.current.contains(n.target) && t(n)
                };
                return r.forEach((function(e) {
                    document.addEventListener(e, n)
                }
                )),
                function() {
                    r.forEach((function(e) {
                        document.removeEventListener(e, n)
                    }
                    ))
                }
            }
            ), [e, t])
        }
    },
    1606: function(e, t, n) {
        
    },
    1630: function(e, t, n) {
        "use strict";
        var a = n(1512)
          , r = n(277)
          , i = n(1513)
          , o = n(0)
          , s = n.n(o)
          , l = n(11)
          , c = n(276)
          , u = n(5)
          , d = n(80)
          , p = n(88)
          , m = n(323)
          , h = n(21)
          , v = n(39)
          , f = n.n(v)
          , E = n(17)
          , g = n(19)
          , y = n(30)
          , b = n(219)
          , C = n(66)
          , _ = n(6)
          , A = n(270)
          , S = n(103)
          , T = n(1684)
          , O = n.n(T)
          , R = Object(l.a)({
            director: {
                defaultMessage: "Directed by",
                id: "src/web/rd/components/ContentDetail/DirectorAndActor/DirectorAndActor:director"
            },
            starring: {
                defaultMessage: "Starring",
                id: "src/web/rd/components/ContentDetail/DirectorAndActor/DirectorAndActor:starring"
            }
        })
          , M = function(e) {
            var t = e.directors
              , n = void 0 === t ? [] : t
              , a = e.actors
              , r = void 0 === a ? [] : a
              , i = Object(g.e)()
              , o = Object(S.b)()
              , l = function(e) {
                return e.map((function(e) {
                    if ("N/A" === e)
                        return e;
                    var t = Object(A.c)(e);
                    return s.a.createElement(f.a, {
                        to: _.d.search + "/" + encodeURIComponent(t),
                        key: e,
                        onClick: function() {
                            return function(e) {
                                i(Object(C.b)({
                                    actorName: e,
                                    componentType: E.ANALYTICS_COMPONENTS.castListComponent
                                })),
                                i(Object(b.e)(Object(y.c)()))
                            }(e)
                        }
                    }, s.a.createElement("span", {
                        className: O.a.castText
                    }, e))
                }
                ))
            };
            return s.a.createElement("div", {
                className: O.a.directorAndStarring
            }, (null == r ? void 0 : r.length) ? s.a.createElement("div", {
                className: O.a.line
            }, s.a.createElement("span", {
                className: O.a.label
            }, o.formatMessage(R.starring)), s.a.createElement("span", null, l(r))) : null, (null == n ? void 0 : n.length) ? s.a.createElement("div", {
                className: O.a.line
            }, s.a.createElement("span", {
                className: O.a.label
            }, o.formatMessage(R.director)), s.a.createElement("span", null, l(n))) : null)
        }
          , P = n(915)
          , w = n(8)
          , L = n.n(w)
          , N = n(4)
          , I = n.n(N)
          , k = n(1540)
          , D = n(1515)
          , j = n(1517)
          , x = n(1518)
          , V = n(1514)
          , U = n(1564)
          , B = n(240)
          , H = n(68)
          , Y = n(679)
          , F = n(503)
          , W = n(194)
          , G = n(1682)
          , q = n(1683)
          , K = n(1511)
          , z = n(1);
        var Q = s.a.memo((function(e) {
            return s.a.createElement("svg", Object(z.__assign)({
                width: "1em",
                height: "1em",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), s.a.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9 12C9 11.4477 8.55228 11 8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13C8.55228 13 9 12.5523 9 12ZM12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11ZM16 11C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11Z",
                fill: "currentColor"
            }))
        }
        ))
          , Z = n(1605)
          , X = n(24)
          , J = n(16)
          , $ = n(23)
          , ee = n(1681)
          , te = n.n(ee)
          , ne = Object(l.a)({
            reportAProblem: {
                defaultMessage: "Report a problem",
                id: "src/web/rd/components/ContentDetail/MoreActions/MoreActions:reportAProblem"
            },
            share: {
                defaultMessage: "Share",
                id: "src/web/rd/components/ContentDetail/MoreActions/MoreActions:share"
            },
            twitterText: {
                defaultMessage: "Watch {title} on Tubi: ",
                id: "src/web/rd/components/ContentDetail/MoreActions/MoreActions:twitterText"
            }
        })
          , ae = function(e) {
            var t, n, a, r = e.title, i = e.contentId, l = e.type, c = e.innerRef, u = e.isWrapped, d = Object(S.b)(), p = Object(o.useState)(!1), m = p[0], v = p[1];
            Object(Z.a)(c, (function() {
                return v(!1)
            }
            ));
            var E = function(e) {
                var t = e.shareUrl
                  , n = e.twitterText;
                return [{
                    name: "facebook",
                    Icon: G.a,
                    trackType: X.E,
                    url: "https://www.facebook.com/sharer/sharer.php?u=" + Object($.a)(t, "facebook")
                }, {
                    name: "twitter",
                    Icon: q.a,
                    trackType: X.F,
                    url: "https://twitter.com/intent/tweet?text=" + n + Object($.a)(t, "twitter")
                }]
            }({
                shareUrl: Object(h.h)({
                    type: l,
                    id: i,
                    title: r,
                    absolute: !0
                }),
                twitterText: d.formatMessage(ne.twitterText, {
                    title: r
                })
            })
              , g = {
                pathname: _.d.support,
                query: {
                    title: r,
                    contentId: i
                }
            };
            return s.a.createElement("div", {
                className: L()(te.a.moreActions, (t = {},
                t[te.a.wrapped] = u,
                t)),
                ref: c
            }, u ? null : s.a.createElement(V.a, {
                appearance: "tertiary",
                onClick: function() {
                    return v(!m)
                },
                className: te.a.iconButton
            }, m ? s.a.createElement(K.a, {
                className: te.a.icon
            }) : s.a.createElement(Q, {
                className: te.a.icon
            })), m || u ? s.a.createElement("div", {
                className: L()(te.a.menu, (n = {},
                n[te.a.wrapped] = u,
                n))
            }, s.a.createElement("div", {
                className: L()(te.a.options, (a = {},
                a[te.a.wrapped] = u,
                a))
            }, s.a.createElement("div", {
                className: te.a.option
            }, d.formatMessage(ne.share), s.a.createElement("span", {
                className: te.a.shareIcons
            }, E.map((function(e) {
                var t = e.Icon
                  , n = e.url
                  , a = e.trackType
                  , r = e.name;
                return s.a.createElement("a", {
                    key: r,
                    href: n,
                    target: "_blank",
                    onClick: function() {
                        return function(e) {
                            var t = Object(J.u)(i, e, W.Action.CLICK);
                            Object($.g)(X.D, t),
                            v(!1)
                        }(a)
                    }
                }, s.a.createElement(t, null))
            }
            )))), s.a.createElement(f.a, {
                className: te.a.option,
                to: g
            }, d.formatMessage(ne.reportAProblem)))) : null)
        }
          , re = n(1680)
          , ie = n.n(re)
          , oe = Object(l.a)({
            watchNow: {
                defaultMessage: "Watch Now",
                id: "src/web/rd/components/ContentDetail/ButtonGroup/ButtonGroup:watchNow"
            },
            free: {
                defaultMessage: "Free",
                id: "src/web/rd/components/ContentDetail/ButtonGroup/ButtonGroup:free"
            },
            myList: {
                defaultMessage: "My List",
                id: "src/web/rd/components/ContentDetail/ButtonGroup/ButtonGroup:myList"
            },
            watch: {
                defaultMessage: "Watch",
                id: "src/web/rd/components/ContentDetail/ButtonGroup/ButtonGroup:watch"
            },
            watchLastEpisode: {
                defaultMessage: "Watch Latest Episode",
                id: "src/web/rd/components/ContentDetail/ButtonGroup/ButtonGroup:watchLastEpisode"
            },
            resume: {
                defaultMessage: "Resume",
                id: "src/web/rd/components/ContentDetail/ButtonGroup/ButtonGroup:resume"
            }
        })
          , se = function(e) {
            var t = e.isRecurring
              , n = e.id
              , a = e.belongSeries
              , r = e.type
              , i = e.title
              , l = e.onClickWatch
              , c = e.className
              , p = e.isSeriesDetail
              , m = Object(S.b)()
              , h = Object(g.e)()
              , v = Object(d.a)((function(e) {
                return e.player
            }
            )).playerState
              , f = Object(o.useRef)(null)
              , E = Object(o.useRef)(null)
              , y = Object(o.useRef)(0)
              , b = Object(o.useState)(!1)
              , C = b[0]
              , _ = b[1]
              , A = Object(d.a)((function(e) {
                return e.ui.isMobile
            }
            ))
              , T = Object(d.a)((function(e) {
                var t, a, i = !1, o = "", s = n;
                return r === u.SERIES_CONTENT_TYPE && (s = Object(B.a)(n),
                o = null !== (a = null === (t = Object(U.a)(e, s)) || void 0 === t ? void 0 : t.title) && void 0 !== a ? a : "",
                i = !!e.history.contentIdMap[s]),
                {
                    isInHistory: i,
                    episodeTitle: o
                }
            }
            ))
              , O = T.episodeTitle
              , R = T.isInHistory
              , M = {
                children: m.formatMessage(oe.watchNow),
                tag: m.formatMessage(oe.free),
                icon: D.a
            };
            Object(o.useEffect)((function() {
                function e() {
                    var e = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
                    f.current && E.current && (f.current.offsetTop === E.current.offsetTop || C || (_(!0),
                    y.current = e),
                    e > y.current && C && _(!1))
                }
                return setTimeout(e, 100),
                Object(H.a)(window, "resize", e),
                function() {
                    Object(H.k)(window, "resize", e)
                }
            }
            ), [C]);
            var P = Object(o.useCallback)((function(e) {
                var t, n = e.dispatchQueueAction, a = e.isInQueue;
                return s.a.createElement(V.a, {
                    ref: E,
                    onClick: n,
                    appearance: "tertiary",
                    textAlign: "left",
                    icon: a ? j.a : x.a,
                    className: L()(ie.a.myListButton, (t = {},
                    t[ie.a.wrapped] = C,
                    t))
                }, m.formatMessage(oe.myList))
            }
            ), [m, C]);
            t ? M = {
                icon: D.a,
                children: R ? m.formatMessage(oe.resume) : m.formatMessage(oe.watchLastEpisode),
                textAlign: "left"
            } : O && (M = {
                icon: D.a,
                children: m.formatMessage(R ? oe.resume : oe.watch) + " " + Object(Y.d)(O),
                textAlign: "left"
            });
            return s.a.createElement("div", {
                className: L()(ie.a.buttonGroup, c)
            }, p ? s.a.createElement(V.a, I()({}, M, {
                onClick: function() {
                    A ? null == l || l() : "inited" === v || "paused" === v ? h(k.controlActions.play()) : "playing" === v ? h(k.controlActions.pause()) : null == l || l()
                },
                className: ie.a.watchButton
            })) : null, s.a.createElement(F.a, {
                id: n,
                belongSeries: a
            }, P), s.a.createElement(ae, {
                title: i,
                contentId: n,
                type: r,
                innerRef: f,
                isWrapped: C
            }))
        }
          , le = n(1830);
        var ce = s.a.memo((function(e) {
            return s.a.createElement("svg", Object(z.__assign)({
                width: "1em",
                height: "1em",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), s.a.createElement("path", {
                d: "M12.26 21.978C13.552 21.819 14.542 20.853 14.811 19.65L9.22197 20.336C9.77397 21.438 10.968 22.136 12.26 21.978Z",
                fill: "currentColor"
            }), s.a.createElement("path", {
                d: "M20.078 15.219L19.085 15.341L18.071 7.09603C17.581 4.32403 14.141 1.58403 10.279 2.05403C6.44797 2.52403 3.71397 6.02403 4.18397 9.85503L5.06897 17.063L4.19697 17.17C3.64897 17.237 3.25897 17.736 3.32597 18.284C3.39297 18.833 3.89197 19.222 4.43997 19.155L20.321 17.205C20.869 17.138 21.259 16.639 21.192 16.091C21.125 15.541 20.626 15.151 20.078 15.219ZM7.05397 16.818L6.16897 9.61003C6.00697 8.29103 6.37197 6.98303 7.19697 5.92703C8.02197 4.87103 9.20297 4.20003 10.522 4.03803C13.217 3.70903 15.782 5.63003 16.094 7.39203L17.1 15.585L7.05397 16.818Z",
                fill: "currentColor"
            }))
        }
        ))
          , ue = n(43)
          , de = n.n(ue)
          , pe = n(79)
          , me = n(874)
          , he = n(27)
          , ve = n(110)
          , fe = n(1679)
          , Ee = n.n(fe)
          , ge = Object(l.a)({
            remindMe: {
                defaultMessage: "Remind Me",
                id: "src/web/rd/components/ContentDetail/RemindButton/RemindButton:remindMe"
            },
            reminderSet: {
                defaultMessage: "Reminder Set",
                id: "src/web/rd/components/ContentDetail/RemindButton/RemindButton:reminderSet"
            },
            reminderDesc: {
                defaultMessage: "You’ll be notified via email when this becomes available",
                id: "src/web/rd/components/ContentDetail/RemindButton/RemindButton:reminderDesc"
            }
        })
          , ye = function(e) {
            var t = e.contentId
              , n = e.contentType
              , a = e.title
              , r = Object(S.b)()
              , i = Object(g.e)()
              , l = Object(g.f)((function(e) {
                return e.reminder.contentIdMap[t]
            }
            ))
              , c = Object(g.f)((function(e) {
                return e.reminder.inProgress[t]
            }
            ))
              , d = Object(g.f)(ve.a)
              , p = Object(o.useCallback)((function() {
                c || i(Object(me.a)(t, n))
            }
            ), [i, t, n, c])
              , m = Object(o.useCallback)((function(e) {
                de.a.save(u.COOKIE_REDIRECT_URL, e, {
                    maxAge: 300,
                    path: "/"
                })
            }
            ), [])
              , h = Object(o.useCallback)((function() {
                d ? p() : i(Object(he.x)({
                    isOpen: !0,
                    title: a,
                    onLogin: function() {
                        var e = Object(y.c)();
                        m(e),
                        i(Object(pe.h)(e)),
                        i(Object(pe.g)(p))
                    }
                }))
            }
            ), [d, i, p, m, a])
              , v = Object(o.useCallback)((function() {
                !c && l && i(Object(me.c)(l.id, t))
            }
            ), [i, l, t, c])
              , f = l ? s.a.createElement(V.a, {
                icon: le.a,
                className: L()(Ee.a.button, Ee.a.selected),
                appearance: "tertiary",
                onClick: v
            }, s.a.createElement("span", null, r.formatMessage(ge.reminderSet))) : s.a.createElement(V.a, {
                icon: ce,
                className: Ee.a.button,
                appearance: "tertiary",
                onClick: h
            }, r.formatMessage(ge.remindMe));
            return s.a.createElement("div", {
                className: Ee.a.remind
            }, f, s.a.createElement("div", {
                className: Ee.a.desc
            }, r.formatMessage(ge.reminderDesc)))
        }
          , be = n(1678)
          , Ce = n.n(be)
          , _e = function(e) {
            var t = e.onClickWatch
              , n = e.posterUrl
              , a = e.content
              , r = e.belongSeries
              , i = e.isContentUnavailable
              , o = e.className
              , l = e.isSeriesDetail
              , c = a
              , u = c.id
              , p = c.is_recurring
              , m = c.title
              , h = c.type
              , v = Object(d.a)((function(e) {
                return e.player
            }
            )).progress;
            return s.a.createElement("div", {
                className: L()(Ce.a.posterContainer, o)
            }, s.a.createElement(P.a, {
                src: n,
                progress: v.position / v.duration
            }), i ? s.a.createElement(ye, {
                contentId: u,
                contentType: "s" === h ? "series" : "movie",
                title: m
            }) : s.a.createElement(se, {
                id: u,
                belongSeries: r,
                isRecurring: p,
                type: h,
                title: m,
                onClickWatch: t,
                isSeriesDetail: l
            }))
        }
          , Ae = n(36)
          , Se = n(1489)
          , Te = n(1519)
          , Oe = n(29)
          , Re = n(1536)
          , Me = n(257)
          , Pe = n(1686)
          , we = n.n(Pe)
          , Le = Object(l.a)({
            youMayAlsoLike: {
                defaultMessage: "You May Also Like",
                id: "src/web/rd/components/RelatedContents/RelatedContents:youMayAlsoLike"
            }
        })
          , Ne = Object(o.memo)((function(e) {
            var t = e.contentId
              , n = e.playLabel
              , a = e.myListLabel
              , r = Object(S.b)()
              , i = Object(g.e)()
              , l = Object(o.useCallback)((function(e) {
                return Object(Re.d)(e, t)
            }
            ), [t])
              , c = Object(d.a)(l)
              , p = Object(o.useState)(0)
              , m = p[0]
              , v = p[1]
              , f = Object(d.a)((function(e) {
                return e.video.byId
            }
            ))
              , y = Object(d.a)((function(e) {
                return e.history
            }
            ))
              , b = Object(o.useMemo)((function() {
                return c.map((function(e, t) {
                    var r, o, s = f[e], l = null != s ? s : {}, c = l.has_subtitle, d = l.title, p = l.tags, m = l.posterarts, v = void 0 === m ? [] : m, g = l.ratings, b = y.contentIdMap[e];
                    b && "movie" === b.contentType && (o = b.position / b.contentLength);
                    var _ = function() {
                        var n, a = Object(h.i)({
                            video: s
                        });
                        a = Object(Ae.addQueryStringToUrl)(a, ((n = {})[u.AUTO_START_QUERY_PARAM_FROM_LINK] = !0,
                        n)),
                        i(Object(C.b)({
                            startX: t,
                            startY: 0,
                            containerSlug: null,
                            contentId: e,
                            componentType: E.ANALYTICS_COMPONENTS.relatedComponent
                        })),
                        i(Object(Oe.push)(a))
                    };
                    return {
                        id: e,
                        cc: c,
                        title: d,
                        tags: p,
                        posterSrc: v[0],
                        playLabel: n,
                        progress: o,
                        onClick: _,
                        onPlayClick: _,
                        rating: null === (r = null == g ? void 0 : g[0]) || void 0 === r ? void 0 : r.value,
                        myListLabel: a
                    }
                }
                ))
            }
            ), [c, i, y.contentIdMap, a, n, f])
              , _ = Object(o.useCallback)((function(e) {
                var n = e.itemIndex;
                v((function(e) {
                    return Me.a.trackCarouselTrigger({
                        startX: e,
                        endX: n,
                        contentId: t,
                        slug: "related",
                        componentType: E.ANALYTICS_COMPONENTS.relatedComponent
                    }),
                    n
                }
                ))
            }
            ), [t])
              , A = Object(o.useCallback)((function(e) {
                return s.a.createElement(F.a, {
                    id: e.id
                }, (function(t) {
                    var n = t.isInQueue
                      , a = t.dispatchQueueAction;
                    return s.a.createElement(Se.a, I()({
                        hoverBgEffect: !1,
                        myListStatus: n ? "inList" : "notInList",
                        onMyListUpdate: a
                    }, e))
                }
                ))
            }
            ), []);
            return c.length ? s.a.createElement("div", {
                className: we.a.relatedContents
            }, s.a.createElement("div", {
                className: we.a.title
            }, r.formatMessage(Le.youMayAlsoLike)), s.a.createElement(Te.a, {
                index: m,
                onIndexChange: _,
                className: we.a.carousel,
                data: b,
                renderItem: A,
                adjustPrevNextForContentTile: !0
            })) : null
        }
        ))
          , Ie = n(1510);
        var ke = s.a.memo((function(e) {
            return s.a.createElement("svg", Object(z.__assign)({
                width: "1em",
                height: "1em",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), s.a.createElement("path", {
                d: "M21.545 16.017L14.908 4.678C14.305 3.643 13.192 3 12.004 3C10.793 3 9.704 3.627 9.092 4.677L2.458 16.021C2.159 16.525 2 17.097 2 17.67C2 19.6 3.42 21 5.376 21H18.624C20.58 21 22 19.6 22 17.67C22 17.092 21.842 16.519 21.545 16.017ZM18.624 19H5.376C4.361 19 4 18.312 4 17.67C4 17.452 4.06 17.24 4.182 17.035L10.82 5.685C11.07 5.256 11.513 5 12.004 5C12.49 5 12.93 5.256 13.18 5.687L19.821 17.031C19.938 17.229 20 17.45 20 17.67C20 18.312 19.639 19 18.624 19Z",
                fill: "currentColor"
            }), s.a.createElement("path", {
                d: "M12 8C11.189 8 10.549 8.688 10.607 9.496L10.929 14.002C10.969 14.565 11.437 15 12 15C12.563 15 13.031 14.565 13.071 14.003L13.393 9.497C13.451 8.688 12.811 8 12 8Z",
                fill: "currentColor"
            }), s.a.createElement("path", {
                d: "M12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z",
                fill: "currentColor"
            }))
        }
        ))
          , De = Object(o.memo)((function(e) {
            var t = e.label
              , n = e.defaultOption
              , a = e.options
              , r = e.onSelect
              , i = e.error
              , l = Object(o.useState)(null == n ? void 0 : n.value)
              , c = l[0]
              , u = l[1]
              , d = Object(o.useState)(!1)
              , p = d[0]
              , m = d[1]
              , h = Object(o.useRef)(null)
              , v = Object(o.useRef)(null)
              , f = a.find((function(e) {
                return e.value === c
            }
            ))
              , E = a.findIndex((function(e) {
                return e.value === c
            }
            ))
              , g = Object(o.useState)(E)
              , y = g[0]
              , b = g[1]
              , C = Object(o.useCallback)((function(e) {
                u(e.value),
                m(!1),
                null == r || r(e)
            }
            ), [r])
              , _ = Object(o.useCallback)((function(e) {
                p && v.current && (v.current.scrollTop = 56 * (e - 1))
            }
            ), [p])
              , A = Object(o.useCallback)((function(e) {
                switch (e.preventDefault(),
                e.key) {
                case "Enter":
                    a[y] && C(a[y]);
                    break;
                case "ArrowUp":
                    (t = y - 1) >= 0 && (b(t),
                    _(t));
                    break;
                case "ArrowDown":
                    var t;
                    (t = y + 1) < a.length && (b(t),
                    _(t))
                }
            }
            ), [a, y, C, _]);
            Object(o.useEffect)((function() {
                return p && window.addEventListener("keydown", A),
                function() {
                    window.removeEventListener("keydown", A)
                }
            }
            ), [p, y, a, A]),
            Object(o.useEffect)((function() {
                _(E),
                p || b(E)
            }
            ), [p, _, E]);
            var S = L()("web-dropdown", {
                "web-dropdown__open": p,
                "web-dropdown__error": !!i
            })
              , T = L()("web-dropdown--arrow-icon", {
                "web-dropdown--arrow-icon__open": p
            });
            return Object(Z.a)(h, (function() {
                return m(!1)
            }
            )),
            s.a.createElement("div", {
                className: "web-dropdown--container"
            }, p ? s.a.createElement("div", {
                className: "web-dropdown--placeholder"
            }) : null, s.a.createElement("div", {
                className: S,
                ref: h
            }, s.a.createElement("div", {
                className: "web-dropdown--input",
                onClick: function() {
                    m(!p)
                },
                tabIndex: -1,
                role: "button"
            }, t ? s.a.createElement("span", {
                className: "web-dropdown--label"
            }, t) : null, s.a.createElement("span", {
                className: "web-dropdown--input-text"
            }, null == f ? void 0 : f.label), s.a.createElement(Ie.a, {
                className: T
            })), p ? s.a.createElement("ul", {
                className: "web-dropdown--options",
                tabIndex: -1,
                role: "listbox",
                ref: v
            }, a.map((function(e, t) {
                return s.a.createElement("li", {
                    className: L()("web-dropdown--option", {
                        "web-dropdown--option__selected": e.value === c || t === y
                    }),
                    key: e.value,
                    onClick: function() {
                        return C(e)
                    },
                    role: "option",
                    "aria-selected": c === e.value
                }, e.label)
            }
            ))) : null, i ? s.a.createElement("div", {
                className: "web-dropdown--error"
            }, s.a.createElement(ke, null), i) : null))
        }
        ))
          , je = n(1685)
          , xe = n.n(je)
          , Ve = Object(o.memo)((function(e) {
            var t, n = e.seasons, a = e.episodeSeasonIndex, r = e.episodeIndex, i = e.playLabel, l = e.myListLabel, c = Object(g.e)(), p = Object(o.useState)(a), m = p[0], v = p[1], f = Object(o.useState)(r), y = f[0], b = f[1], _ = Object(d.a)((function(e) {
                return e.video.byId
            }
            )), A = Object(d.a)((function(e) {
                return e.history
            }
            )), S = n.map((function(e) {
                var t = e.title;
                return {
                    value: t,
                    label: t
                }
            }
            )), T = (null === (t = n[m]) || void 0 === t ? void 0 : t.episodeIds) || [], O = Object(o.useCallback)((function(e, t) {
                var n, a, r, o = _[e], d = "0" + o.series_id, p = A.contentIdMap[d], m = null === (n = null == p ? void 0 : p.episodes) || void 0 === n ? void 0 : n.find((function(t) {
                    return String(t.contentId) === String(e)
                }
                ));
                m && (r = m.position / m.contentLength);
                var v = o.has_subtitle
                  , f = o.title
                  , g = o.thumbnails
                  , y = void 0 === g ? [] : g
                  , b = o.description
                  , S = o.ratings
                  , T = function() {
                    var n, a = Object(h.i)({
                        video: o
                    });
                    a = Object(Ae.addQueryStringToUrl)(a, ((n = {})[u.AUTO_START_QUERY_PARAM_FROM_LINK] = !0,
                    n)),
                    c(Object(C.b)({
                        startX: t,
                        startY: 0,
                        containerSlug: null,
                        contentId: e,
                        componentType: E.ANALYTICS_COMPONENTS.episodeVideoListComponent
                    })),
                    c(Object(Oe.push)(a))
                }
                  , O = {
                    id: e,
                    cc: v,
                    title: f,
                    thumbnailSrc: y[0],
                    rating: null === (a = null == S ? void 0 : S[0]) || void 0 === a ? void 0 : a.value,
                    playLabel: i,
                    myListLabel: l,
                    description: b,
                    progress: r
                };
                return s.a.createElement(Se.a, I()({
                    autoHeightForContentInfo: !0,
                    alwaysShowMetadata: !0,
                    tileOrientation: "landscape",
                    hoverBgEffect: !1,
                    onClick: T,
                    onPlayClick: T
                }, O))
            }
            ), [_, A.contentIdMap, i, l, c]), R = Object(o.useCallback)((function(e) {
                var t = e.itemIndex;
                b((function(e) {
                    return Me.a.sendNavigateWithinPage({
                        startX: e,
                        startY: 0,
                        endX: t,
                        endY: 0,
                        contentId: T[e],
                        componentType: E.ANALYTICS_COMPONENTS.episodeVideoListComponent
                    }),
                    t
                }
                ))
            }
            ), [T]);
            return s.a.createElement("div", {
                className: xe.a.videoDetailSeriesSelect
            }, s.a.createElement("div", {
                className: xe.a.headerContainer
            }, s.a.createElement(De, {
                options: S,
                defaultOption: S[m],
                onSelect: function(e) {
                    var t = e.value;
                    b(0),
                    v(S.findIndex((function(e) {
                        return e.value === t
                    }
                    )))
                }
            })), s.a.createElement(Te.a, {
                index: y,
                tileOrientation: "landscape",
                data: T,
                onIndexChange: R,
                adjustPrevNextForContentTile: !0,
                extraKey: function(e) {
                    return e
                },
                renderItem: O
            }))
        }
        ))
          , Ue = n(1677)
          , Be = n.n(Ue)
          , He = Object(l.a)({
            play: {
                defaultMessage: "Play",
                id: "src/web/rd/components/ContentDetail/ContentDetail:play"
            },
            myList: {
                defaultMessage: "My List",
                id: "src/web/rd/components/ContentDetail/ContentDetail:myList"
            },
            channelLogo: {
                defaultMessage: "{network} network logo",
                id: "src/web/rd/components/ContentDetail/ContentDetail:channelLogo"
            },
            scrollToDetail: {
                defaultMessage: "Scroll for Title Details",
                id: "src/web/rd/components/ContentDetail/ContentDetail:scrollToDetail"
            },
            contentUnavailable: {
                defaultMessage: "content unavailable",
                id: "src/web/rd/components/ContentDetail/ContentDetail:contentUnavailable"
            }
        });
        t.a = function(e) {
            var t, n, l = e.content, v = e.posterUrl, f = e.seasons, E = e.episodeIndex, g = void 0 === E ? 0 : E, y = e.episodeSeasonIndex, b = void 0 === y ? 0 : y, C = e.belongSeries, _ = e.seriesTitle, A = e.onClickWatch, S = e.isContentReady, T = e.playbackStarted, O = e.isSeriesDetail, R = e.handleMobilePlayClick, P = e.isContentUnavailable, w = Object(c.a)(), L = l, N = L.id, I = L.year, k = L.title, D = L.duration, j = L.has_subtitle, x = L.ratings, V = L.tags, U = L.description, B = L.actors, H = L.directors, Y = L.type, F = L.series_id, W = L.channel_logo, G = L.channel_id, q = L.channel_name, K = L.is_recurring, z = Object(m.b)(D, w.formatMessage), Q = !!F, Z = Object(d.a)((function(e) {
                return e.ui.isMobile
            }
            )), X = Object(d.a)((function(e) {
                return e.ui.viewportType
            }
            )), J = "mobile" === X, $ = !(S && T || O || "desktop" !== X), ee = Object(o.useMemo)((function() {
                return Q ? s.a.createElement(s.a.Fragment, null, s.a.createElement("h1", {
                    className: Be.a.title
                }, _), s.a.createElement("h2", {
                    className: Be.a.subTitle
                }, k)) : s.a.createElement("h1", {
                    className: Be.a.title
                }, k)
            }
            ), [Q, _, k]), te = Object(o.useCallback)((function() {
                A ? A() : Z && R()
            }
            ), [R, Z, A]);
            return s.a.createElement(r.a.Container, {
                className: Be.a.contentDetail
            }, $ ? s.a.createElement("div", {
                className: Be.a.scrollToDetail
            }, w.formatMessage(He.scrollToDetail), s.a.createElement(a.a, null)) : null, $ ? s.a.createElement("div", {
                className: Be.a.scrollToDetail
            }, w.formatMessage(He.scrollToDetail), s.a.createElement(a.a, null)) : null, J ? null : s.a.createElement(r.a.Item, {
                desktop: 4,
                tablet: 2,
                mobile: 6
            }, s.a.createElement(_e, {
                content: l,
                posterUrl: v,
                belongSeries: C,
                onClickWatch: te,
                isContentUnavailable: P,
                isSeriesDetail: O
            })), s.a.createElement(r.a.Item, {
                desktop: 12,
                tablet: 4,
                mobile: 6
            }, P ? s.a.createElement("div", {
                className: Be.a.unavailable
            }, w.formatMessage(He.contentUnavailable)) : null, ee, s.a.createElement(i.a, {
                year: I,
                duration: z,
                cc: j,
                rating: null === (t = null == x ? void 0 : x[0]) || void 0 === t ? void 0 : t.value,
                descriptor: Object(p.a)(null === (n = null == x ? void 0 : x[0]) || void 0 === n ? void 0 : n.descriptors),
                tags: V,
                channelLogoAltText: w.formatMessage(He.channelLogo, {
                    network: q
                }),
                channelLogo: W,
                channelUrl: G ? Object(h.d)(G, {
                    type: u.CONTAINER_TYPES.CHANNEL
                }) : ""
            }), J ? s.a.createElement(se, {
                id: N,
                isRecurring: K,
                type: Y,
                title: k,
                onClickWatch: te,
                className: Be.a.buttonGroup,
                isSeriesDetail: O
            }) : null, s.a.createElement("div", {
                className: Be.a.description
            }, U), s.a.createElement(M, {
                actors: B,
                directors: H
            }), f && f.length ? s.a.createElement(Ve, {
                seasons: f,
                episodeIndex: g,
                episodeSeasonIndex: b,
                playLabel: w.formatMessage(He.play),
                myListLabel: w.formatMessage(He.myList)
            }) : null, s.a.createElement(Ne, {
                contentId: N,
                playLabel: w.formatMessage(He.play),
                myListLabel: w.formatMessage(He.myList)
            })))
        }
    },
    1631: function(e, t, n) {
        "use strict";
        var a, r, i, o, s, l, c, u, d, p, m, h, v, f, E = n(37), g = n.n(E), y = n(33), b = n.n(y), C = n(34), _ = n.n(C), A = n(28), S = n.n(A), T = n(38), O = n.n(T), R = n(3), M = n.n(R), P = n(0), w = n.n(P), L = n(5), N = n(205), I = n.n(N), k = n(170), D = n.n(k), j = n(70), x = n.n(j), V = n(39), U = n.n(V), B = n(8), H = n.n(B), Y = n(14), F = n(4), W = n.n(F), G = n(49), q = function(e) {
            return w.a.createElement(G.a, W()({
                viewBox: "0 0 28 18"
            }, e), w.a.createElement("g", {
                fill: "currentColor",
                fillRule: "evenodd"
            }, w.a.createElement("path", {
                fillRule: "nonzero",
                d: "M2 9c0 3.867 3.13 7 6.994 7h10.012C22.868 16 26 12.866 26 9c0-3.867-3.13-7-6.994-7H8.994C5.132 2 2 5.134 2 9zM0 9c0-4.97 4.027-9 8.994-9h10.012C23.973 0 28 4.028 28 9c0 4.97-4.027 9-8.994 9H8.994C4.027 18 0 13.972 0 9z"
            }), w.a.createElement("path", {
                d: "M11.844 10.195c-.088.836-.517 1.375-1.32 1.375-1.21 0-1.606-1.22-1.606-2.475 0-1.287.374-2.464 1.606-2.464.803 0 1.232.53 1.342 1.354h1.815c-.252-1.716-1.363-2.98-3.156-2.98-2.42 0-3.443 1.858-3.443 4.09 0 2.278 1.057 4.07 3.433 4.07 1.804 0 3.07-1.286 3.212-2.97h-1.88zm7.38 0c-.087.836-.516 1.375-1.32 1.375-1.21 0-1.605-1.22-1.605-2.475 0-1.287.373-2.464 1.605-2.464.803 0 1.232.53 1.342 1.354h1.815c-.253-1.716-1.364-2.98-3.157-2.98-2.42 0-3.443 1.858-3.443 4.09 0 2.278 1.056 4.07 3.432 4.07 1.804 0 3.07-1.286 3.212-2.97h-1.88z"
            })))
        }, K = n(386), z = n(1565), Q = n(103), Z = n(1687), X = n.n(Z), J = function(e) {
            var t, n = e.title, a = e.channelLogo, r = e.channelUrl, i = e.duration, o = e.year, s = e.ratings, l = e.genres, c = e.seriesTitle, u = e.className, d = e.titleClassName, p = e.labelRowClassName, m = e.to, h = e.showCC, v = e.lang, f = H()(X.a.contentMetadataWrapper, u), E = H()(X.a.title, ((t = {})[X.a.titleLink] = !!m,
            t), d), g = m ? w.a.createElement("div", null, w.a.createElement(Y.Link, {
                to: m,
                className: X.a.link
            }, w.a.createElement("h3", {
                className: E
            }, c || n))) : w.a.createElement("h3", {
                className: X.a.title
            }, c || n), y = c ? w.a.createElement("div", {
                className: X.a.episodeTitle
            }, n) : null, b = Object(Q.b)(), C = Object(z.b)(b.locale, v), _ = [];
            return [{
                component: w.a.createElement(K.g, {
                    key: "year",
                    year: o
                }),
                contentField: o
            }, {
                component: w.a.createElement(K.b, {
                    key: "duration",
                    duration: i
                }),
                contentField: i
            }, {
                component: w.a.createElement(w.a.Fragment, null, Object(K.e)({
                    language: C
                })),
                contentField: C
            }].filter((function(e) {
                return e.contentField
            }
            )).forEach((function(e, t) {
                0 !== t && _.push(w.a.createElement("span", {
                    key: "dot_" + t,
                    className: X.a.dot
                }, "·")),
                _.push(e.component)
            }
            )),
            w.a.createElement("div", {
                className: f
            }, n ? g : null, y, w.a.createElement("div", {
                className: X.a.metadataRow
            }, w.a.createElement("div", {
                className: X.a.metadataSubRow
            }, _), w.a.createElement("div", {
                className: X.a.ccAndRating
            }, h ? w.a.createElement(q, {
                className: X.a.closedCaptions
            }) : null, w.a.createElement("div", null, w.a.createElement(K.f, {
                rating: s,
                overrideDescriptorClass: X.a.descriptor
            })))), w.a.createElement("div", {
                className: H()(X.a.labelRow, p)
            }, w.a.createElement(K.c, {
                genres: l,
                cls: X.a.genres
            })), a && r ? w.a.createElement("div", {
                className: X.a.channelRow
            }, w.a.createElement(Y.Link, {
                to: r
            }, w.a.createElement("img", {
                className: X.a.logo,
                src: a
            }))) : null)
        }, $ = n(21), ee = n(17), te = n(11), ne = n(871), ae = n(19), re = n(41), ie = n(66), oe = n(257), se = n(505), le = Object(te.a)({
            ymal: {
                defaultMessage: "You May Also Like",
                id: "src/web/components/RelatedContentsSlider/RelatedContentsSlider:ymal"
            }
        }), ce = (r = a = function(e) {
            function t() {
                var e, n, a, r;
                b()(this, t);
                for (var i = arguments.length, o = Array(i), s = 0; s < i; s++)
                    o[s] = arguments[s];
                return n = a = S()(this, (e = t.__proto__ || g()(t)).call.apply(e, [this].concat(o))),
                a.trackTileClick = function(e) {
                    var t = a.props
                      , n = t.contents
                      , r = t.dispatch
                      , i = t.shouldClearContainerContext
                      , o = n[e];
                    i && r(Object(re.b)()),
                    r(Object(ie.b)({
                        startX: e,
                        startY: 0,
                        containerSlug: null,
                        contentId: o,
                        componentType: ee.ANALYTICS_COMPONENTS.relatedComponent
                    }))
                }
                ,
                a.trackRelatedCarouselTrigger = function(e) {
                    var t = e.startX
                      , n = e.endX
                      , a = e.contentId;
                    a && oe.a.trackCarouselTrigger({
                        startX: t,
                        endX: n,
                        contentId: a,
                        slug: "related",
                        componentType: ee.ANALYTICS_COMPONENTS.relatedComponent
                    })
                }
                ,
                r = n,
                S()(a, r)
            }
            return O()(t, e),
            _()(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.contents
                      , n = e.xs
                      , a = e.sm
                      , r = e.md
                      , i = e.lg
                      , o = e.xl
                      , s = e.xxl;
                    if (0 === t.length)
                        return null;
                    var l = {
                        xs: n,
                        sm: a,
                        md: r,
                        lg: i,
                        xl: o,
                        xxl: s
                    };
                    return w.a.createElement("div", null, w.a.createElement("h2", null, w.a.createElement(ne.a, le.ymal)), w.a.createElement(se.d, W()({
                        contents: t,
                        trackTriggerClick: this.trackRelatedCarouselTrigger,
                        trackCb: this.trackTileClick,
                        showTrailerLink: !1,
                        overflowHidden: !0
                    }, l)))
                }
            }]),
            t
        }(P.PureComponent),
        a.propTypes = {
            contents: M.a.array,
            dispatch: M.a.func.isRequired,
            trackingURI: M.a.string,
            xs: M.a.string,
            sm: M.a.string,
            md: M.a.string,
            lg: M.a.string,
            xl: M.a.string,
            xxl: M.a.string,
            shouldClearContainerContext: M.a.bool
        },
        r), ue = Object(ae.b)((function(e) {
            return {
                trackingURI: e.tracking.trackingURI
            }
        }
        ))(ce), de = n(12), pe = n.n(de), me = n(437), he = n.n(me), ve = n(194), fe = n(138), Ee = n(46), ge = n(1590), ye = n(24), be = n(1564), Ce = n(16), _e = n(240), Ae = n(679), Se = n(23), Te = n(878), Oe = n(145), Re = n(6), Me = n(1689), Pe = n.n(Me), we = Object(te.a)({
            reportAProblem: {
                defaultMessage: "Report a problem",
                id: "src/web/components/VideoDetailButtonGroup/ExtrasMenu/ExtrasMenu:reportAProblem"
            }
        }), Le = (o = i = function(e) {
            function t() {
                return b()(this, t),
                S()(this, (t.__proto__ || g()(t)).apply(this, arguments))
            }
            return O()(t, e),
            _()(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.title
                      , n = e.contentId
                      , a = e.className
                      , r = {
                        pathname: Re.d.support,
                        query: {
                            title: t,
                            contentId: n
                        }
                    }
                      , i = H()(Pe.a.extrasMenu, a);
                    return w.a.createElement("div", {
                        className: i
                    }, w.a.createElement(U.a, {
                        cls: Pe.a.link,
                        to: r,
                        rel: "nofollow"
                    }, w.a.createElement(ne.a, we.reportAProblem)))
                }
            }]),
            t
        }(P.PureComponent),
        i.propTypes = {
            contentId: M.a.string.isRequired,
            title: M.a.string.isRequired,
            className: M.a.string
        },
        o), Ne = n(1688), Ie = n.n(Ne), ke = Object(te.a)({
            share: {
                defaultMessage: "Share",
                id: "src/web/components/VideoDetailButtonGroup/VideoDetailButtonGroup:share"
            },
            watchNowFree: {
                defaultMessage: "Watch Now <custom>FREE</custom>",
                id: "src/web/components/VideoDetailButtonGroup/VideoDetailButtonGroup:watchNowFree"
            },
            resume: {
                defaultMessage: "Resume",
                id: "src/web/components/VideoDetailButtonGroup/VideoDetailButtonGroup:resume"
            },
            watch: {
                defaultMessage: "Watch",
                id: "src/web/components/VideoDetailButtonGroup/VideoDetailButtonGroup:watch"
            },
            watchLastEpisode: {
                defaultMessage: "Watch Latest Episode",
                id: "src/web/components/VideoDetailButtonGroup/VideoDetailButtonGroup:watchLastEpisode"
            }
        }), De = {
            enter: Ie.a.enter,
            enterActive: Ie.a.enterActive,
            exit: Ie.a.leave,
            exitActive: Ie.a.leaveActive
        }, je = (l = s = function(e) {
            function t(e) {
                b()(this, t);
                var n = S()(this, (t.__proto__ || g()(t)).call(this, e));
                return n.closeMenus = function() {
                    n.state.activeMenu && n.setState({
                        activeMenu: ""
                    })
                }
                ,
                n.toggleShareMenu = function(e) {
                    e.stopPropagation();
                    var t = "share" === n.state.activeMenu;
                    t || n.trackSocialClick(ye.C),
                    n.setState({
                        activeMenu: t ? "" : "share"
                    })
                }
                ,
                n.toggleExtrasMenu = function(e) {
                    e.stopPropagation(),
                    n.setState({
                        activeMenu: "extras" === n.state.activeMenu ? "" : "extras"
                    })
                }
                ,
                n.trackSocialClick = function(e) {
                    var t = n.props.id
                      , a = e === ye.C ? ve.Channel.UNKNOWN_CHANNEL : e
                      , r = Object(Ce.u)(t, a, ve.Action.CLICK);
                    Object(Se.g)(ye.D, r)
                }
                ,
                n.state = {
                    activeMenu: ""
                },
                n
            }
            return O()(t, e),
            _()(t, [{
                key: "componentDidMount",
                value: function() {
                    window.addEventListener("click", this.closeMenus)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    window.removeEventListener("click", this.closeMenus)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.id
                      , n = e.type
                      , a = e.title
                      , r = e.seriesId
                      , i = e.onClickWatch
                      , o = e.className
                      , s = e.isInHistory
                      , l = e.episodeTitle
                      , c = e.isRecurring
                      , u = e.belongSeries
                      , d = e.intl
                      , p = this.state.activeMenu
                      , m = "share" === p
                      , h = "extras" === p
                      , v = H()(Ie.a.buttonGroup, o)
                      , f = Object($.h)({
                        type: n,
                        id: t,
                        title: a,
                        absolute: !0
                    })
                      , E = r ? "0" + r : t
                      , g = w.a.createElement("div", null, w.a.createElement(ne.a, W()({}, ke.watchNowFree, {
                        values: {
                            custom: function(e) {
                                var t = he()(e, 1)[0];
                                return w.a.createElement("span", {
                                    className: Ie.a.freeSpan
                                }, t)
                            }
                        }
                    })));
                    c ? g = s ? w.a.createElement("div", {
                        className: Ie.a.buttonText
                    }, d.formatMessage(ke.resume)) : w.a.createElement("div", null, d.formatMessage(ke.watchLastEpisode)) : l && (g = w.a.createElement("div", {
                        className: Ie.a.buttonText
                    }, d.formatMessage(s ? ke.resume : ke.watch), " ", Object(Ae.d)(l)));
                    var y = H()(Ie.a.shareButton, pe()({}, Ie.a.active, m))
                      , b = H()(Ie.a.extrasButton, pe()({}, Ie.a.active, h));
                    return w.a.createElement("div", {
                        className: v,
                        "data-nosnippet": !0
                    }, i ? w.a.createElement(Oe.a, {
                        size: "large",
                        className: Ie.a.watchButton,
                        block: !0,
                        onClick: i
                    }, g) : null, w.a.createElement("div", {
                        className: Ie.a.secondRow
                    }, w.a.createElement(Te.a, {
                        belongSeries: u,
                        className: Ie.a.addToQueue,
                        id: E,
                        mode: "button"
                    }), w.a.createElement("div", {
                        className: Ie.a.shareGroup
                    }, w.a.createElement(Oe.a, {
                        color: "transparent",
                        className: y,
                        onClick: this.toggleShareMenu
                    }, w.a.createElement("span", null, d.formatMessage(ke.share))), w.a.createElement(Oe.a, {
                        color: "transparent",
                        className: b,
                        onClick: this.toggleExtrasMenu
                    }, w.a.createElement("div", {
                        className: Ie.a.dot
                    })), w.a.createElement(Ee.TransitionGroup, {
                        component: "div"
                    }, m ? w.a.createElement(Ee.CSSTransition, {
                        key: "share",
                        classNames: De,
                        timeout: 200
                    }, w.a.createElement(ge.a, {
                        key: "share",
                        title: a,
                        contentUrl: f,
                        trackSocialClick: this.trackSocialClick,
                        className: Ie.a.shareMenu
                    })) : null, h ? w.a.createElement(Ee.CSSTransition, {
                        key: "extras",
                        classNames: De,
                        timeout: 200
                    }, w.a.createElement(Le, {
                        key: "extras",
                        contentId: E,
                        title: a,
                        className: Ie.a.extrasMenu
                    })) : null))))
                }
            }]),
            t
        }(P.PureComponent),
        s.propTypes = {
            id: M.a.string.isRequired,
            type: M.a.string.isRequired,
            title: M.a.string.isRequired,
            trackingURI: M.a.string.isRequired,
            seriesId: M.a.string,
            onClickWatch: M.a.func,
            className: M.a.string,
            isInHistory: M.a.bool,
            episodeTitle: M.a.string,
            isRecurring: M.a.bool,
            belongSeries: M.a.oneOfType([M.a.string, M.a.number])
        },
        l), xe = Object(ae.b)((function(e, t) {
            var n = t.id
              , a = t.type
              , r = e.history
              , i = void 0
              , o = void 0
              , s = n;
            return a === L.SERIES_CONTENT_TYPE && (s = Object(_e.a)(n),
            o = Object(be.a)(e, s),
            i = !!r.contentIdMap[s]),
            {
                isInHistory: i,
                episodeTitle: o ? o.title : ""
            }
        }
        ))(Object(fe.c)(je)), Ve = n(118), Ue = n.n(Ve), Be = n(1533), He = n.n(Be), Ye = n(92), Fe = n(1690), We = n.n(Fe), Ge = [], qe = (u = c = function(e) {
            function t(e) {
                b()(this, t);
                var n = S()(this, (t.__proto__ || g()(t)).call(this, e));
                return n.onChange = function(e) {
                    var t = e.target
                      , a = void 0 === t ? {} : t
                      , r = Object(Ye.c)(n.props.seasons, (function(e) {
                        return e.title === a.value
                    }
                    ));
                    n.setState({
                        selectedSeasonIndex: r,
                        selectedEpisodeIndex: 0
                    })
                }
                ,
                n.trackClick = function(e) {
                    var t = e.startX
                      , n = e.endX
                      , a = e.contentId;
                    oe.a.sendNavigateWithinPage({
                        startX: t,
                        startY: 0,
                        endX: n,
                        endY: 0,
                        contentId: a,
                        componentType: ee.ANALYTICS_COMPONENTS.episodeVideoListComponent
                    })
                }
                ,
                n.trackContentClick = function(e, t) {
                    n.props.dispatch(Object(ie.b)({
                        startX: e,
                        startY: 0,
                        containerSlug: null,
                        contentId: t,
                        componentType: ee.ANALYTICS_COMPONENTS.episodeVideoListComponent
                    }))
                }
                ,
                n.state = {
                    selectedSeasonIndex: e.episodeSeasonIndex,
                    selectedEpisodeIndex: e.episodeIndex
                },
                n
            }
            return O()(t, e),
            _()(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.isMobile
                      , n = e.seasons
                      , a = e.seriesHistory
                      , r = (e.isKidsModeEnabled,
                    Ue()(e, ["isMobile", "seasons", "seriesHistory", "isKidsModeEnabled"]))
                      , i = this.state
                      , o = i.selectedEpisodeIndex
                      , s = i.selectedSeasonIndex;
                    if (0 === n.length)
                        return null;
                    var l = H()(We.a.carousel)
                      , c = n[s] || {}
                      , u = c.episodeIds
                      , d = c.title
                      , p = a ? a.episodes : Ge
                      , m = w.a.createElement("h3", {
                        className: We.a.seasonTitle
                    }, d);
                    if (n.length > 1) {
                        var h = n.map((function(e) {
                            return {
                                value: e.title,
                                label: e.title
                            }
                        }
                        ))
                          , v = H()(We.a.select);
                        m = w.a.createElement(He.a, {
                            fixedLabel: !0,
                            name: "parental",
                            value: d,
                            native: t,
                            options: h,
                            onChange: this.onChange,
                            className: v
                        })
                    }
                    return w.a.createElement("div", {
                        className: We.a.seriesSelectCol
                    }, m, u.length ? w.a.createElement(se.b, W()({
                        key: s,
                        carouselClassName: l,
                        contents: u,
                        historyEpisodes: p,
                        initialIndex: o,
                        trackTriggerClick: this.trackClick,
                        trackCb: this.trackContentClick,
                        overflowHidden: !0,
                        xs: "6",
                        lg: "4"
                    }, r)) : null)
                }
            }]),
            t
        }(P.PureComponent),
        c.propTypes = {
            seasons: M.a.array,
            seriesHistory: M.a.object,
            episodeSeasonIndex: M.a.number,
            episodeIndex: M.a.number,
            isMobile: M.a.bool,
            isKidsModeEnabled: M.a.bool
        },
        c.defaultProps = {
            episodeIndex: 0,
            episodeSeasonIndex: 0,
            isMobile: !1,
            seasons: [],
            seriesHistory: {
                episodes: []
            }
        },
        u), Ke = Object(ae.b)((function(e) {
            var t = e.ui;
            return {
                isMobile: t.isMobile,
                isKidsModeEnabled: t.isKidsModeEnabled
            }
        }
        ))(qe), ze = n(504), Qe = n(678), Ze = n(1606), Xe = n.n(Ze), Je = (p = d = function(e) {
            function t() {
                return b()(this, t),
                S()(this, (t.__proto__ || g()(t)).apply(this, arguments))
            }
            return O()(t, e),
            _()(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.belongSeries
                      , n = e.content
                      , a = e.position
                      , r = e.onClickWatch
                      , i = e.trackingURI
                      , o = e.onCastClick
                      , s = e.contentHistory
                      , l = e.seasons
                      , c = e.related
                      , u = e.vw
                      , d = e.to
                      , p = e.seriesTitle
                      , m = e.posterUrl
                      , h = e.episodeSeasonIndex
                      , v = e.episodeIndex
                      , f = n.id
                      , E = n.type
                      , g = n.title
                      , y = n.description
                      , b = n.ratings
                      , C = n.year
                      , _ = n.tags
                      , A = void 0 === _ ? [] : _
                      , S = n.directors
                      , T = void 0 === S ? [] : S
                      , O = n.actors
                      , R = void 0 === O ? [] : O
                      , M = n.duration
                      , P = n.has_subtitle
                      , N = n.series_id
                      , k = n.channel_logo
                      , j = n.channel_id
                      , V = n.is_recurring
                      , B = n.lang
                      , H = !!N
                      , Y = u < L.BREAKPOINTS.xl ? 4 : 5
                      , F = H ? w.a.createElement("div", null, w.a.createElement("div", {
                        className: Xe.a.underline
                    }, w.a.createElement(U.a, {
                        to: d
                    }, w.a.createElement("h1", {
                        className: Xe.a.title
                    }, p))), w.a.createElement("div", {
                        className: Xe.a.subtitle
                    }, g)) : w.a.createElement("div", {
                        className: Xe.a.underline
                    }, w.a.createElement("h1", {
                        className: Xe.a.title
                    }, g))
                      , W = 4 === Y ? "3" : "1-5"
                      , G = 4 === Y ? "9" : "4-5";
                    return w.a.createElement("div", {
                        className: Xe.a.contentDetail
                    }, w.a.createElement(I.a, {
                        className: Xe.a.container
                    }, w.a.createElement(D.a, {
                        className: Xe.a.row
                    }, w.a.createElement(x.a, {
                        xs: W
                    }, w.a.createElement("div", {
                        className: Xe.a.constrainPoster
                    }, w.a.createElement(Qe.a, {
                        url: m,
                        className: Xe.a.posterImage
                    }, "number" == typeof a ? w.a.createElement(ze.a, {
                        className: Xe.a.progress,
                        percentComplete: a / M
                    }) : null), w.a.createElement(xe, {
                        className: Xe.a.positionButtons,
                        id: f,
                        type: E,
                        title: g,
                        seriesId: N,
                        trackingURI: i,
                        onClickWatch: r,
                        isRecurring: V,
                        belongSeries: t
                    }))), w.a.createElement(x.a, {
                        xs: G
                    }, F, w.a.createElement(J, {
                        className: Xe.a.metadata,
                        duration: M,
                        year: C,
                        lang: B,
                        ratings: b,
                        genres: A,
                        showCC: P,
                        channelLogo: k,
                        channelUrl: j ? Object($.d)(j, {
                            type: L.CONTAINER_TYPES.CHANNEL
                        }) : ""
                    }), w.a.createElement("div", {
                        className: Xe.a.description
                    }, y), w.a.createElement(K.a, {
                        cls: Xe.a.directorWrapper,
                        handleCastClick: o,
                        directors: T,
                        actors: R
                    }), l && l.length ? w.a.createElement(Ke, {
                        seasons: l,
                        seriesHistory: s,
                        episodeSeasonIndex: h,
                        episodeIndex: v
                    }) : null, c && c.length ? w.a.createElement(ue, {
                        contents: c,
                        xs: 4 === Y ? "4" : "3",
                        shouldClearContainerContext: !0
                    }) : null))))
                }
            }]),
            t
        }(P.Component),
        d.propTypes = {
            content: M.a.object.isRequired,
            position: M.a.number,
            onClickWatch: M.a.func,
            trackingURI: M.a.string.isRequired,
            posterUrl: M.a.string,
            seriesTitle: M.a.string,
            onCastClick: M.a.func,
            seasons: M.a.array,
            related: M.a.array,
            contentHistory: M.a.object,
            to: M.a.string,
            vw: M.a.number,
            episodeSeasonIndex: M.a.number,
            episodeIndex: M.a.number,
            belongSeries: M.a.oneOfType([M.a.string, M.a.number])
        },
        p), $e = (h = m = function(e) {
            function t() {
                return b()(this, t),
                S()(this, (t.__proto__ || g()(t)).apply(this, arguments))
            }
            return O()(t, e),
            _()(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.belongSeries
                      , n = e.content
                      , a = e.position
                      , r = e.onClickWatch
                      , i = e.trackingURI
                      , o = e.onCastClick
                      , s = e.contentHistory
                      , l = e.seasons
                      , c = e.related
                      , u = e.to
                      , d = e.seriesTitle
                      , p = e.posterUrl
                      , m = e.episodeSeasonIndex
                      , h = e.episodeIndex
                      , v = n.id
                      , f = n.type
                      , E = n.title
                      , g = n.description
                      , y = n.ratings
                      , b = n.year
                      , C = n.tags
                      , _ = void 0 === C ? [] : C
                      , A = n.directors
                      , S = void 0 === A ? [] : A
                      , T = n.actors
                      , O = void 0 === T ? [] : T
                      , R = n.duration
                      , M = n.has_subtitle
                      , P = n.series_id
                      , N = n.channel_logo
                      , k = n.channel_id
                      , j = n.is_recurring
                      , V = !!P ? w.a.createElement("div", null, w.a.createElement(U.a, {
                        to: u
                    }, w.a.createElement("h1", {
                        className: Xe.a.title
                    }, d)), w.a.createElement("div", {
                        className: Xe.a.subtitle
                    }, E)) : w.a.createElement("h1", {
                        className: Xe.a.title
                    }, E);
                    return w.a.createElement("div", {
                        className: Xe.a.contentDetail
                    }, w.a.createElement(I.a, {
                        className: Xe.a.container
                    }, w.a.createElement(D.a, {
                        className: Xe.a.row
                    }, w.a.createElement(x.a, {
                        xs: "4"
                    }, w.a.createElement("div", {
                        className: Xe.a.constrainPoster
                    }, w.a.createElement(Qe.a, {
                        url: p,
                        className: Xe.a.posterImage
                    }, "number" == typeof a ? w.a.createElement(ze.a, {
                        className: Xe.a.progress,
                        percentComplete: a / R
                    }) : null))), w.a.createElement(x.a, {
                        className: Xe.a.alignBottom,
                        xs: "8"
                    }, V, w.a.createElement(J, {
                        className: Xe.a.metadata,
                        duration: R,
                        year: b,
                        ratings: y,
                        genres: _,
                        showCC: M,
                        channelLogo: N,
                        channelUrl: k ? Object($.d)(k, {
                            type: L.CONTAINER_TYPES.CHANNEL
                        }) : ""
                    }))), w.a.createElement(D.a, {
                        className: Xe.a.row
                    }, w.a.createElement(x.a, {
                        xs: "12"
                    }, w.a.createElement(xe, {
                        id: v,
                        type: f,
                        title: E,
                        seriesId: P,
                        trackingURI: i,
                        onClickWatch: r,
                        isRecurring: j,
                        belongSeries: t
                    }))), w.a.createElement(D.a, {
                        className: Xe.a.row
                    }, w.a.createElement(x.a, {
                        xs: "12"
                    }, w.a.createElement("div", {
                        className: Xe.a.description
                    }, g))), w.a.createElement(D.a, {
                        className: Xe.a.row
                    }, w.a.createElement(x.a, {
                        xs: "12"
                    }, w.a.createElement(K.a, {
                        cls: Xe.a.directorWrapper,
                        handleCastClick: o,
                        directors: S,
                        actors: O
                    }))), l && l.length ? w.a.createElement(D.a, {
                        className: Xe.a.row
                    }, w.a.createElement(x.a, {
                        xs: "12"
                    }, w.a.createElement(Ke, {
                        seasons: l,
                        seriesHistory: s,
                        episodeSeasonIndex: m,
                        episodeIndex: h
                    }))) : null, c && c.length ? w.a.createElement(D.a, {
                        className: Xe.a.row
                    }, w.a.createElement(x.a, {
                        xs: "12"
                    }, w.a.createElement(ue, {
                        contents: c,
                        xs: "4",
                        shouldClearContainerContext: !0
                    }))) : null))
                }
            }]),
            t
        }(P.Component),
        m.propTypes = {
            content: M.a.object.isRequired,
            position: M.a.number,
            onClickWatch: M.a.func,
            posterUrl: M.a.string,
            seriesTitle: M.a.string,
            trackingURI: M.a.string.isRequired,
            vw: M.a.number,
            onCastClick: M.a.func,
            seasons: M.a.array,
            related: M.a.array,
            contentHistory: M.a.object,
            to: M.a.string,
            episodeSeasonIndex: M.a.number,
            episodeIndex: M.a.number,
            belongSeries: M.a.oneOfType([M.a.string, M.a.number])
        },
        h), et = (f = v = function(e) {
            function t() {
                return b()(this, t),
                S()(this, (t.__proto__ || g()(t)).apply(this, arguments))
            }
            return O()(t, e),
            _()(t, [{
                key: "render",
                value: function() {
                    return this.props.vw < L.BREAKPOINTS.lg ? w.a.createElement($e, this.props) : w.a.createElement(Je, this.props)
                }
            }]),
            t
        }(P.PureComponent),
        v.propTypes = {
            content: M.a.object.isRequired,
            position: M.a.number,
            onClickWatch: M.a.func,
            posterUrl: M.a.string,
            seriesTitle: M.a.string,
            trackingURI: M.a.string.isRequired,
            onCastClick: M.a.func,
            seasons: M.a.array,
            related: M.a.array,
            contentHistory: M.a.object,
            to: M.a.string,
            episodeSeasonIndex: M.a.number,
            episodeIndex: M.a.number,
            vw: M.a.number.isRequired,
            dispatch: M.a.func.isRequired,
            belongSeries: M.a.oneOfType([M.a.string, M.a.number])
        },
        f);
        t.a = et
    },
    1632: function(e, t, n) {
        "use strict";
        var a = n(1)
          , r = n(1656)
          , i = n(17)
          , o = n(8)
          , s = n.n(o)
          , l = n(3)
          , c = n.n(l)
          , u = n(0)
          , d = n.n(u)
          , p = n(11)
          , m = n(871)
          , h = n(19)
          , v = n(29)
          , f = n(66)
          , E = n(116)
          , g = n(1600)
          , y = n(2)
          , b = n(5)
          , C = n(24)
          , _ = n(1536)
          , A = n(257)
          , S = n(18)
          , T = n(16)
          , O = n(21)
          , R = function(e, t) {
            return e ? 5 : t || 20
        }
          , M = function(e) {
            return Object(O.i)({
                video: e
            }) + "?autoplay=true"
        }
          , P = n(23)
          , w = n(1659)
          , L = n.n(w)
          , N = n(39)
          , I = n.n(N)
          , k = n(1601)
          , D = n(386)
          , j = n(1662)
          , x = n.n(j)
          , V = function(e) {
            var t = e.duration
              , n = e.year
              , a = e.ratings
              , r = e.genres
              , i = e.showCC;
            return d.a.createElement("div", {
                className: x.a.autoplayContentMetadata
            }, d.a.createElement("div", {
                className: x.a.row
            }, n ? d.a.createElement("div", null, n) : null, n && t ? d.a.createElement("span", null, " · ") : null, d.a.createElement(D.b, {
                key: "duration",
                duration: t
            }), i ? d.a.createElement(k.a, {
                className: x.a.ccIcon
            }) : null, d.a.createElement(D.f, {
                rating: a,
                cls: x.a.rating,
                descriptorCls: x.a.descriptor
            })), d.a.createElement("div", {
                className: x.a.row
            }, d.a.createElement(D.d, {
                genres: r,
                splitSymbol: " · "
            })))
        }
          , U = n(1661)
          , B = n.n(U)
          , H = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.handleLinkClick = function(e) {
                    null == e || e.preventDefault(),
                    t.props.onLinkClick(e)
                }
                ,
                t
            }
            return Object(a.__extends)(t, e),
            t.prototype.render = function() {
                var e = this.props
                  , t = e.content
                  , n = e.counter
                  , a = e.toUrl
                  , r = e.className
                  , i = t.title
                  , o = t.description
                  , l = t.year
                  , c = t.duration
                  , u = t.tags
                  , p = void 0 === u ? [] : u
                  , m = t.ratings
                  , h = void 0 === m ? [] : m
                  , v = t.has_subtitle;
                return d.a.createElement("div", {
                    className: s()(B.a.autoplayDetail, r)
                }, n ? d.a.createElement("div", {
                    className: B.a.counter
                }, "Starting in ", n, " s") : null, d.a.createElement("div", null, d.a.createElement(I.a, {
                    onClick: this.handleLinkClick,
                    to: a,
                    className: B.a.title
                }, i)), d.a.createElement(V, {
                    duration: c,
                    year: l,
                    ratings: h,
                    genres: p,
                    showCC: v,
                    className: B.a.contentMetadata,
                    labelRowClassName: B.a.labelRow
                }), d.a.createElement("div", {
                    className: B.a.description
                }, o))
            }
            ,
            t
        }(u.Component)
          , Y = n(267)
          , F = n(678)
          , W = n(1660)
          , G = n.n(W)
          , q = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.getSrcImg = function() {
                    var e = t.props
                      , n = e.content
                      , a = e.isEpisode
                      , r = n.posterarts
                      , i = void 0 === r ? [] : r
                      , o = n.thumbnails;
                    return a ? (void 0 === o ? [] : o)[0] : i[0]
                }
                ,
                t.handleClick = function(e) {
                    e.preventDefault();
                    var n = t.props
                      , a = n.index;
                    (0,
                    n.onTileClick)(a)
                }
                ,
                t
            }
            return Object(a.__extends)(t, e),
            t.prototype.render = function() {
                var e, t = this.props, n = t.active, a = t.isEpisode, r = s()(G.a.tile, ((e = {})[G.a.activeTile] = n,
                e[G.a.episode] = a,
                e)), i = this.getSrcImg();
                return d.a.createElement("div", {
                    className: r,
                    onClick: this.handleClick
                }, d.a.createElement(F.a, {
                    className: G.a.backgroundImage,
                    url: i
                }, n ? d.a.createElement(Y.a, {
                    className: G.a.play
                }) : null))
            }
            ,
            t
        }(u.PureComponent)
          , K = function(e) {
            var t = e.contents
              , n = e.isEpisode
              , a = e.toUrl
              , r = e.activeIndex
              , i = e.counter
              , o = e.className
              , l = e.onTileClick
              , c = e.onLinkClick;
            return d.a.createElement("div", {
                className: s()(L.a.autoplayContents, o)
            }, d.a.createElement("div", {
                className: L.a.contentsRow
            }, t.map((function(e, t) {
                var o, u, p, m = r === t, h = s()(L.a.content, ((o = {})[L.a.active] = m,
                o)), v = s()(L.a.tileCol, ((u = {})[L.a.episode] = n,
                u[L.a.active] = m,
                u)), f = s()(L.a.detailCol, ((p = {})[L.a.episode] = n,
                p));
                return d.a.createElement("div", {
                    className: h,
                    key: e.id
                }, d.a.createElement("div", {
                    className: v
                }, d.a.createElement(q, {
                    content: e,
                    active: m,
                    index: t,
                    isEpisode: n,
                    onTileClick: l
                })), m ? d.a.createElement("div", {
                    className: f
                }, d.a.createElement(H, {
                    className: L.a.detail,
                    content: e,
                    counter: i,
                    toUrl: a,
                    onLinkClick: c
                })) : null)
            }
            ))))
        }
          , z = n(14)
          , Q = n(1658)
          , Z = n.n(Q)
          , X = function(e) {
            var t = e.title
              , n = e.toUrl
              , a = e.className
              , r = e.onLinkClick;
            return d.a.createElement("div", {
                className: s()(Z.a.minimizedDetail, a)
            }, d.a.createElement("div", {
                className: Z.a.title
            }, d.a.createElement(z.Link, {
                onClick: function(e) {
                    e.preventDefault(),
                    r(e)
                },
                to: n
            }, t)), d.a.createElement("div", {
                className: Z.a.prompt
            }, "Playing Next"))
        }
          , J = n(1657)
          , $ = n.n(J)
          , ee = Object(p.a)({
            hideAutoplay: {
                defaultMessage: "Hide",
                id: "src/web/components/AutoPlay/AutoPlay:hideAutoplay"
            },
            openAutoplay: {
                defaultMessage: "Open",
                id: "src/web/components/AutoPlay/AutoPlay:openAutoplay"
            }
        })
          , te = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                n.counterTimer = null,
                n.stopPropagation = function(e) {
                    return e.stopPropagation()
                }
                ,
                n.timeHandler = function() {
                    if (!n.props.videoPaused && !n.state.minimized) {
                        if (n.state.timeLeft <= 0)
                            return n.props.dispatch(Object(S.a)(y.Ac, {
                                fromAutoplayDeliberate: !1
                            })),
                            n.clearCounterTimer(),
                            void n.autoPlay();
                        n.setState({
                            timeLeft: n.state.timeLeft - 1
                        })
                    }
                }
                ,
                n.changeActiveIndex = function(e) {
                    n.state.activeIndex !== e && n.setState({
                        activeIndex: e,
                        timeLeft: R(n.props.isEpisode)
                    })
                }
                ,
                n.autoPlay = function(e) {
                    void 0 === e && (e = !1);
                    var t = n.props
                      , a = t.contents
                      , r = t.dispatch
                      , i = t.onAutoplay
                      , o = a[n.state.activeIndex]
                      , s = M(o);
                    r(Object(v.push)(s)),
                    i && i({
                        contentId: o.id,
                        isFromAutoplayDeliberate: e,
                        isFromAutoplayAutomatic: !e
                    })
                }
                ,
                n.toggle = function() {
                    return n.setState({
                        minimized: !n.state.minimized
                    })
                }
                ,
                n.onTileClick = function(e) {
                    if (e === n.state.activeIndex)
                        n.manualAutoPlay();
                    else {
                        var t = n.state.activeIndex
                          , a = n.props.contents[t].id;
                        A.a.trackCarouselTrigger({
                            startX: t,
                            endX: e,
                            contentId: a,
                            slug: "",
                            componentType: i.ANALYTICS_COMPONENTS.autoplayComponent
                        }),
                        n.changeActiveIndex(e)
                    }
                }
                ,
                n.onLinkClick = function() {
                    n.manualAutoPlay()
                }
                ;
                var a = t.isEpisode;
                return n.state = {
                    timeLeft: R(a),
                    activeIndex: 0,
                    minimized: !1
                },
                n
            }
            return Object(a.__extends)(t, e),
            t.prototype.componentDidMount = function() {
                var e = this
                  , t = this.props
                  , n = t.dispatch
                  , a = t.id
                  , i = t.isEpisode
                  , o = t.isFromAutoplay
                  , s = t.contentLimit;
                Object(P.g)(C.e, Object(T.a)(a, r.AutoPlayAction.SHOW));
                var l = i ? 1 : 5;
                n(Object(E.b)(a, {
                    isAutoPlayVideo: o,
                    limit: null != s ? s : l
                })).then((function() {
                    0 !== e.props.contents.length && (e.props.onAutoplayContentLoaded && e.props.onAutoplayContentLoaded(e.props.contents, e.state.timeLeft),
                    e.handleMountWithContents())
                }
                ))
            }
            ,
            t.prototype.componentWillUnmount = function() {
                this.clearCounterTimer()
            }
            ,
            t.prototype.componentDidUpdate = function(e, t) {
                var n = this.state.minimized || this.props.videoPaused;
                n !== (t.minimized || e.videoPaused) && (n && this.props.onPause && this.props.onPause(),
                !n && this.props.onResume && this.props.onResume())
            }
            ,
            t.prototype.handleMountWithContents = function() {
                this.counterTimer = setInterval(this.timeHandler, 1e3)
            }
            ,
            t.prototype.clearCounterTimer = function() {
                this.counterTimer && clearInterval(this.counterTimer)
            }
            ,
            t.prototype.manualAutoPlay = function() {
                var e = this.state.activeIndex
                  , t = this.props
                  , n = t.dispatch
                  , a = t.contents[e]
                  , r = a.id
                  , o = a.type;
                n(Object(f.b)({
                    startX: this.state.activeIndex,
                    startY: 0,
                    containerSlug: null,
                    contentId: o === b.SERIES_CONTENT_TYPE ? "0" + r : r,
                    componentType: i.ANALYTICS_COMPONENTS.autoplayComponent
                })),
                n(Object(S.a)(y.Ac, {
                    fromAutoplayDeliberate: !0
                })),
                this.autoPlay(!0)
            }
            ,
            t.prototype.render = function() {
                var e, t = this.props, n = t.contents, a = t.isEpisode, r = t.className;
                if (0 === n.length)
                    return null;
                var i = this.state
                  , o = i.minimized
                  , l = i.activeIndex
                  , c = i.timeLeft
                  , u = n[l]
                  , p = M(u)
                  , h = s()($.a.triggerIcon, ((e = {})[$.a.open] = o,
                e))
                  , v = o ? ee.openAutoplay : ee.hideAutoplay;
                return d.a.createElement("div", {
                    className: s()($.a.autoplayWrapper, r),
                    onClick: this.stopPropagation
                }, d.a.createElement("div", {
                    className: $.a.gradient
                }), d.a.createElement("div", {
                    className: $.a.row
                }, d.a.createElement("div", {
                    className: $.a.triggerRow
                }, d.a.createElement(g.a, {
                    className: h
                }), d.a.createElement("div", {
                    className: $.a.trigger,
                    onClick: this.toggle
                }, d.a.createElement(m.a, v))), o ? d.a.createElement(X, {
                    className: $.a.miniDetail,
                    title: u.title,
                    toUrl: p,
                    onLinkClick: this.onLinkClick
                }) : d.a.createElement(K, {
                    contents: n,
                    counter: c,
                    activeIndex: l,
                    isEpisode: a,
                    toUrl: p,
                    onTileClick: this.onTileClick,
                    onLinkClick: this.onLinkClick
                })))
            }
            ,
            t.contextTypes = {
                router: c.a.object.isRequired
            },
            t
        }(u.PureComponent);
        t.a = Object(h.b)((function(e, t) {
            var n = t.id;
            return {
                contents: Object(_.b)(e, n)
            }
        }
        ))(te)
    },
    1634: function(e, t, n) {
        "use strict";
        var a = n(1)
          , r = n(1532)
          , i = n(8)
          , o = n.n(i)
          , s = n(0)
          , l = n.n(s)
          , c = n(46)
          , u = n(855)
          , d = n(858)
          , p = n(856)
          , m = n(441)
          , h = n.n(m)
          , v = n(446)
          , f = n(323)
          , E = n(1664)
          , g = n.n(E)
          , y = function(e) {
            var t = e.position
              , n = e.duration
              , a = e.countPerSprite
              , r = e.interval
              , i = Math.floor(n / r) - 1
              , o = Math.min(Math.floor(t / r), i);
            return {
                spriteIndex: Math.floor(o / a),
                thumbnailIndex: o % a
            }
        }
          , b = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    backgroundImage: "none",
                    backgroundPosition: "-1px bottom"
                },
                t.updateThumbnailBackground = h()((function() {
                    var e = t.props
                      , n = e.indicatorPosition
                      , a = e.duration
                      , r = e.thumbnailSprites[v.b + "x"]
                      , i = r.count_per_sprite
                      , o = void 0 === i ? 1 : i
                      , s = r.frame_width
                      , l = void 0 === s ? 120 : s
                      , c = r.sprites
                      , u = void 0 === c ? [] : c;
                    if (t.isComponentMounted && 0 !== u.length) {
                        var d = y({
                            position: n,
                            duration: a,
                            countPerSprite: o,
                            interval: 5
                        })
                          , p = d.spriteIndex
                          , m = d.thumbnailIndex;
                        t.setState({
                            backgroundImage: 'url("' + u[p] + '")',
                            backgroundPosition: "-" + (m * l + 1) + "px bottom"
                        })
                    }
                }
                ), 200),
                t.isComponentMounted = !1,
                t.handleClick = function(e) {
                    var n = t.props.handleClick;
                    null == n || n(e)
                }
                ,
                t
            }
            return Object(a.__extends)(t, e),
            t.prototype.componentDidMount = function() {
                this.isComponentMounted = !0,
                this.updateThumbnailBackground()
            }
            ,
            t.prototype.componentDidUpdate = function(e) {
                e.indicatorPosition !== this.props.indicatorPosition && this.updateThumbnailBackground()
            }
            ,
            t.prototype.componentWillUnmount = function() {
                this.isComponentMounted = !1
            }
            ,
            t.prototype.render = function() {
                var e, t, n = this.props, a = n.duration, i = n.indicatorPosition, s = n.isAnimated, c = n.isShowText, u = n.positionOffset, d = n.positionWidth, p = n.thumbnailSprites[v.b + "x"], m = p.frame_width, h = void 0 === m ? 120 : m, E = p.height, y = void 0 === E ? 0 : E, b = p.sprites, C = void 0 === b ? [] : b, _ = this.state, A = _.backgroundImage, S = _.backgroundPosition, T = h / 2, O = d > 0 ? T / d : 0, R = 1 - O, M = i / a;
                if (M = Object(r.clamp)(M, O, R),
                Array.isArray(u)) {
                    var P = (u[0] + T) / d
                      , w = (u[1] - T) / d;
                    M = Object(r.clamp)(M, P, w)
                }
                var L = a > 0 ? 100 * M + "%" : 0
                  , N = i ? Object(f.a)(i) : "00:00";
                return 0 !== C.length || c ? 0 === C.length ? l.a.createElement("span", {
                    className: g.a.timeText,
                    style: {
                        left: L
                    }
                }, N) : l.a.createElement("div", {
                    className: o()(g.a.container, (e = {},
                    e[g.a.isAnimated] = s,
                    e)),
                    onClick: this.handleClick,
                    style: {
                        height: y + 2 + "px",
                        left: L,
                        width: h + "px"
                    }
                }, l.a.createElement("div", {
                    className: o()(g.a.thumbnail, (t = {},
                    t[g.a.isAnimated] = s,
                    t)),
                    style: {
                        backgroundImage: A,
                        backgroundPosition: S
                    }
                }), c ? l.a.createElement("span", {
                    className: g.a.timeText
                }, N) : null) : null
            }
            ,
            t
        }(s.PureComponent)
          , C = n(68)
          , _ = n(114)
          , A = n(1663)
          , S = n.n(A)
          , T = {
            enter: S.a.previewEnter,
            enterActive: S.a.previewEnterActive,
            exit: S.a.previewLeave,
            exitActive: S.a.previewLeaveActive
        }
          , O = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.resizeSourceObserver$ = Object(u.a)(window, "resize").pipe(Object(d.a)(0), Object(p.a)(50)),
                n.handleClick = function(e) {
                    e.stopPropagation();
                    var t = n.props
                      , a = t.isAd
                      , r = t.seek;
                    a || !r || n.clickTimer || r(n.computeTargetPosition(e.clientX))
                }
                ,
                n.handlePreviewClick = function() {
                    var e = n.props.seek;
                    e && e(n.state.indicatorPosition)
                }
                ,
                n.handleGlobalMouseMove = function(e) {
                    if (n.state.isDraggingScrubber && !n.props.isAd) {
                        var t = n.computeTargetPosition(e.clientX);
                        n.setState({
                            position: t
                        })
                    }
                }
                ,
                n.handleGlobalMouseUp = function(e) {
                    var t = n.props
                      , a = t.isAd
                      , r = t.seek;
                    n.state.isDraggingScrubber && !a && (n.setState({
                        isDraggingScrubber: !1
                    }),
                    r && r(n.computeTargetPosition(e.clientX)),
                    n.clickTimer = setTimeout((function() {
                        n.clickTimer = void 0
                    }
                    ), 0))
                }
                ,
                n.handleMouseEnter = function(e) {
                    var t = e.clientX;
                    n.state.isDraggingScrubber || n.props.isAd || (n.indicatorTimer = setTimeout((function() {
                        n.indicatorTimer = void 0,
                        n.setState({
                            indicatorPosition: n.computeTargetPosition(t)
                        })
                    }
                    ), 200))
                }
                ,
                n.handleMouseMove = function(e) {
                    n.state.isDraggingScrubber || n.props.isAd || n.indicatorTimer || n.setState({
                        indicatorPosition: n.computeTargetPosition(e.clientX)
                    })
                }
                ,
                n.handleMouseLeave = function() {
                    n.state.isDraggingScrubber || n.props.isAd || (n.indicatorTimer && (clearTimeout(n.indicatorTimer),
                    n.indicatorTimer = void 0),
                    n.setState({
                        indicatorPosition: -1
                    }))
                }
                ,
                n.handleScrubberMouseDown = function() {
                    n.props.isAd || (n.handleMouseLeave(),
                    n.setState({
                        isDraggingScrubber: !0
                    }))
                }
                ,
                n.timelineRefCallback = function(e) {
                    n.elTimeline = e
                }
                ,
                n.state = {
                    indicatorPosition: -1,
                    position: t.position,
                    left: 0,
                    width: 0,
                    isDraggingScrubber: !1
                },
                n
            }
            return Object(a.__extends)(t, e),
            t.getDerivedStateFromProps = function(e, t) {
                var n = e.position;
                return t.isDraggingScrubber || n === t.position ? null : {
                    position: n
                }
            }
            ,
            t.prototype.componentDidMount = function() {
                var e = this;
                Object(C.a)(window, "mousemove", this.handleGlobalMouseMove),
                Object(C.a)(window, "mouseup", this.handleGlobalMouseUp),
                this.resizeSourceSubscription = this.resizeSourceObserver$.subscribe((function() {
                    e.updateTimelineDimension()
                }
                ))
            }
            ,
            t.prototype.componentWillUnmount = function() {
                var e;
                Object(C.k)(window, "mousemove", this.handleGlobalMouseMove),
                Object(C.k)(window, "mouseup", this.handleGlobalMouseUp),
                null === (e = this.resizeSourceSubscription) || void 0 === e || e.unsubscribe()
            }
            ,
            t.prototype.computeTargetPosition = function(e) {
                var t = this.state
                  , n = t.left
                  , a = t.width
                  , i = Object(r.clamp)((e - n) / a, 0, 1);
                return Math.floor(i * this.props.duration)
            }
            ,
            t.prototype.updateTimelineDimension = function() {
                var e;
                if (this.elTimeline) {
                    var t = null === (e = this.elTimeline) || void 0 === e ? void 0 : e.getBoundingClientRect();
                    this.setState({
                        left: t.left,
                        width: t.width
                    })
                }
            }
            ,
            t.prototype.render = function() {
                var e, t, n = this.props, a = n.isAd, r = n.isMobile, i = n.bufferPosition, s = n.duration, u = n.thumbnailSprites, d = n.enablePreview, p = (n.adBreaks,
                this.state), m = p.position, h = p.indicatorPosition, v = p.width, E = p.isDraggingScrubber, g = 100 * (s > 0 && void 0 !== i ? parseFloat((i / s).toFixed(4)) : 0) + "%", y = 100 * (s > 0 ? parseFloat((h / s).toFixed(4)) : 0) + "%", C = 100 * (s > 0 ? parseFloat((m / s).toFixed(4)) : 0) + "%", _ = d && !r && !a && h >= 0, A = o()(S.a.progressBar, ((e = {})[S.a.ad] = !!a,
                e));
                return l.a.createElement("div", {
                    className: A,
                    onMouseEnter: this.handleMouseEnter,
                    onMouseMove: this.handleMouseMove,
                    onMouseLeave: this.handleMouseLeave
                }, l.a.createElement("div", {
                    className: S.a.timeRow
                }, l.a.createElement("span", {
                    className: S.a.timeText
                }, m ? Object(f.a)(m) : "00:00"), l.a.createElement(c.TransitionGroup, {
                    component: "div",
                    className: S.a.previewRail
                }, _ ? l.a.createElement(c.CSSTransition, {
                    key: "thumbnailPreview",
                    classNames: T,
                    timeout: 300
                }, l.a.createElement(b, {
                    duration: s,
                    handleClick: this.handlePreviewClick,
                    indicatorPosition: h,
                    isAnimated: !0,
                    isShowText: !0,
                    key: "thumbnailPreview",
                    positionWidth: v,
                    thumbnailSprites: u || {}
                })) : null), l.a.createElement("span", {
                    className: S.a.timeText
                }, s ? Object(f.a)(s) : "00:00")), l.a.createElement("div", {
                    className: S.a.timeline,
                    onClick: this.handleClick,
                    ref: this.timelineRefCallback
                }, l.a.createElement("div", {
                    className: S.a.track
                }, i ? l.a.createElement("div", {
                    className: S.a.buffer,
                    style: {
                        width: g
                    }
                }) : null, !a && h >= 0 ? l.a.createElement("div", {
                    className: S.a.indicator,
                    style: {
                        width: y
                    }
                }) : null, l.a.createElement("div", {
                    className: S.a.past,
                    style: {
                        width: C
                    }
                }), null), a ? null : l.a.createElement("span", {
                    className: o()(S.a.scrubber, (t = {},
                    t[S.a.scrubberActive] = E,
                    t)),
                    style: {
                        left: C
                    },
                    onMouseDown: this.handleScrubberMouseDown
                })))
            }
            ,
            t.contextType = _.d,
            t
        }(s.PureComponent);
        t.a = O
    },
    1644: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
            function e() {
                this.pendingHandlerList = []
            }
            return e.prototype.createPromise = function(e, t) {
                var n = this;
                return new Promise((function(a, r) {
                    var i = n.start(a, r, t)
                      , o = e(i.wrappedResolve, i.wrappedReject);
                    o && o.onReject && (i.onReject = o.onReject)
                }
                ))
            }
            ,
            e.prototype.start = function(e, t, n) {
                var a = this;
                void 0 === n && (n = {});
                var r = function() {
                    i.settled = !0,
                    i.timer && clearTimeout(i.timer),
                    a.stop(i)
                }
                  , i = {
                    wrappedResolve: function(t) {
                        i.settled || (r(),
                        e(t))
                    },
                    wrappedReject: function(e) {
                        var n;
                        i.settled || (r(),
                        null === (n = i.onReject) || void 0 === n || n.call(i),
                        t(e))
                    },
                    onReject: n.onReject,
                    settled: !1
                };
                return n.timeout && (i.timer = setTimeout((function() {
                    i.wrappedReject(new Error(n.timeoutMessage || "Promise timeout."))
                }
                ), n.timeout)),
                this.pendingHandlerList.push(i),
                i
            }
            ,
            e.prototype.stop = function(e) {
                var t = this.pendingHandlerList.indexOf(e);
                -1 !== t && this.pendingHandlerList.splice(t, 1)
            }
            ,
            e.prototype.abort = function(e, t) {
                (0,
                e.wrappedReject)(new Error(t || "Promise aborted."))
            }
            ,
            e.prototype.abortAll = function(e) {
                for (; ; ) {
                    var t = this.pendingHandlerList.pop();
                    if (!t)
                        return;
                    this.abort(t, e)
                }
            }
            ,
            e
        }();
        t.default = a
    },
    1645: function(e, t, n) {
        
    },
    1647: function(e, t, n) {
        
    },
    1648: function(e, t, n) {
        
    },
    1649: function(e, t, n) {
        
    },
    1650: function(e, t, n) {
        
    },
    1651: function(e, t, n) {
        
    },
    1652: function(e, t, n) {
        
    },
    1653: function(e, t, n) {
        
    },
    1656: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.AutoPlayAction = void 0,
        function(e) {
            e.UNKNOWN = "UNKNOWN",
            e.SHOW = "SHOW",
            e.DISMISS = "DISMISS",
            e.STILL_WATCHING = "STILL_WATCHING"
        }(t.AutoPlayAction || (t.AutoPlayAction = {}))
    },
    1657: function(e, t, n) {
        
    },
    1658: function(e, t, n) {
        
    },
    1659: function(e, t, n) {
        
    },
    1660: function(e, t, n) {
        
    },
    1661: function(e, t, n) {
        
    },
    1662: function(e, t, n) {
        
    },
    1663: function(e, t, n) {
        
    },
    1664: function(e, t, n) {
        
    },
    1665: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(1).__importDefault(n(0))
          , r = function(e) {
            var t = e.label
              , n = e.children
              , r = e.placement;
            return t ? a.default.createElement("div", {
                className: "web-tooltip"
            }, a.default.createElement("div", {
                className: "web-tooltip__container " + r
            }, t), n) : n
        };
        r.defaultProps = {
            placement: "top"
        },
        t.default = r
    },
    1666: function(e, t, n) {
        
    },
    1667: function(e, t, n) {
        
    },
    1668: function(e, t, n) {
        "use strict";
        var a, r = this && this.__extends || (a = function(e, t) {
            return (a = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function n() {
                this.constructor = e
            }
            a(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        ), i = this && this.__assign || function() {
            return (i = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
        , o = this && this.__decorate || function(e, t, n, a) {
            var r, i = arguments.length, o = i < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                o = Reflect.decorate(e, t, n, a);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (o = (i < 3 ? r(o) : i > 3 ? r(t, n, o) : r(t, n)) || o);
            return i > 3 && o && Object.defineProperty(t, n, o),
            o
        }
        , s = this && this.__awaiter || function(e, t, n, a) {
            return new (n || (n = Promise))((function(r, i) {
                function o(e) {
                    try {
                        l(a.next(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function s(e) {
                    try {
                        l(a.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function l(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(o, s)
                }
                l((a = a.apply(e, t || [])).next())
            }
            ))
        }
        , l = this && this.__generator || function(e, t) {
            var n, a, r, i, o = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function s(i) {
                return function(s) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; o; )
                            try {
                                if (n = 1,
                                a && (r = 2 & i[0] ? a.return : i[0] ? a.throw || ((r = a.return) && r.call(a),
                                0) : a.next) && !(r = r.call(a, i[1])).done)
                                    return r;
                                switch (a = 0,
                                r && (i = [2 & i[0], r.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    r = i;
                                    break;
                                case 4:
                                    return o.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++,
                                    a = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = o.ops.pop(),
                                    o.trys.pop();
                                    continue;
                                default:
                                    if (!(r = o.trys,
                                    (r = r.length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                        o.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && o.label < r[1]) {
                                        o.label = r[1],
                                        r = i;
                                        break
                                    }
                                    if (r && o.label < r[2]) {
                                        o.label = r[2],
                                        o.ops.push(i);
                                        break
                                    }
                                    r[2] && o.ops.pop(),
                                    o.trys.pop();
                                    continue
                                }
                                i = t.call(e, o)
                            } catch (e) {
                                i = [6, e],
                                a = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, s])
                }
            }
        }
        , c = this && this.__spreadArrays || function() {
            for (var e = 0, t = 0, n = arguments.length; t < n; t++)
                e += arguments[t].length;
            var a = Array(e)
              , r = 0;
            for (t = 0; t < n; t++)
                for (var i = arguments[t], o = 0, s = i.length; o < s; o++,
                r++)
                    a[r] = i[o];
            return a
        }
        , u = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var d = n(36)
          , p = u(n(1669))
          , m = n(449)
          , h = n(322)
          , v = n(438)
          , f = u(n(935))
          , E = n(206)
          , g = u(n(1671))
          , y = n(1603)
          , b = n(1672)
          , C = n(1604)
          , _ = n(1673)
          , A = n(1674)
          , S = u(n(1675))
          , T = n(928)
          , O = n(557)
          , R = n(1676)
          , M = n(926)
          , P = function(e) {
            function t(n) {
                var a = e.call(this) || this;
                return a.isPlayingAd = !1,
                a.isBuffering = !1,
                a.isPrerollStarted = !1,
                a.isReadyEmitted = !1,
                a.isUnsupported = !1,
                a.state = E.State.idle,
                a.contentDuration = 0,
                a.qualityLevelList = [],
                a.captionsList = [],
                a.captionsIndex = 0,
                a.captionsStylesString = "",
                a.captionsUnits = [],
                a.previousCaptionsText = "",
                a.isAdFetching = !1,
                a.isVideoElementUsedByAdsInAdPlayer = !1,
                a.isPlayerSetup = !1,
                a.mediaAttachTimer = 0,
                a.rafId = 0,
                a.shouldUseHls = !1,
                a.emeEnable = !1,
                a.config = n,
                a.contentPosition = n.resumePosition || 0,
                a.manifestLoadingRetry = 0,
                a.manifestLoadingMaxRetry = n.manifestLoadingMaxRetry || v.MANIFEST_LOADING_MAX_RETRY,
                a.log = n.debug ? M.debug("HlsAdapter") : function() {}
                ,
                a.videoElement = document.getElementById(t.VIDEO_COMPONENT_ID),
                a.captionsElement = document.getElementById(t.CAPTIONS_COMPONENT_ID),
                a.adContainerElement = document.getElementById(t.AD_COMPONENT_ID),
                a.init(),
                a
            }
            return r(t, e),
            t.prototype.setup = function() {
                var e, n;
                return s(this, void 0, void 0, (function() {
                    var a, r, o, s, c, u, d = this;
                    return l(this, (function(l) {
                        switch (l.label) {
                        case 0:
                            return a = this.config,
                            r = a.extraOptions,
                            o = a.drmKeySystem,
                            s = a.licenseUrl,
                            a.performanceCollectorEnabled && (this.performanceCollector = new T.PerformanceCollector({
                                ExternalHls: t.Hls,
                                reporter: function(e) {
                                    return d.emit(v.PLAYER_EVENTS.startupPerformance, {
                                        isAd: !1,
                                        metrics: e,
                                        isAfterMidroll: 0 !== d.getPosition()
                                    })
                                },
                                debug: this.config.debug
                            }),
                            this.performanceCollector.setVideoElement(this.videoElement)),
                            c = p.default(),
                            this.isPlayerSetup = !0,
                            this.log("setup", this.getPosition()),
                            "Safari" !== c.browser.name || o !== E.DrmKeySystem.FairPlay ? [3, 2] : [4, this.setupFairPlay()];
                        case 1:
                            return l.sent(),
                            this.detachVideoElementEvents = this.attachVideoElementEvents(),
                            this.attachPlayerEvents(),
                            [2];
                        case 2:
                            if (this.shouldUseHls = !0,
                            !this.isSupported())
                                return this.isUnsupported = !0,
                                this.handleUnsupport(),
                                [2];
                            if (this.config.performanceCollectorEnabled && (this.performanceCollector = new T.PerformanceCollector({
                                ExternalHls: t.Hls,
                                reporter: function(e) {
                                    return d.emit(v.PLAYER_EVENTS.startupPerformance, {
                                        isAd: !1,
                                        metrics: e,
                                        isAfterMidroll: 0 !== d.contentPosition
                                    })
                                },
                                debug: this.config.debug
                            }),
                            this.performanceCollector.setVideoElement(this.videoElement)),
                            u = i({
                                debug: !!this.config.debug,
                                maxBufferSize: 3e7,
                                maxMaxBufferLength: 180
                            }, null == r ? void 0 : r.hls),
                            s) {
                                switch (o) {
                                case E.DrmKeySystem.PlayReady:
                                    u = i(i({}, u), {
                                        playreadyLicenseUrl: s
                                    });
                                    break;
                                case E.DrmKeySystem.Widevine:
                                    u = i(i({}, u), {
                                        widevineLicenseUrl: s
                                    })
                                }
                                u = i(i({}, u), {
                                    emeEnabled: !0
                                }),
                                this.emeEnable = !0
                            }
                            return this.player = new t.Hls(u),
                            null === (e = this.performanceCollector) || void 0 === e || e.setHls(this.player),
                            this.detachVideoElementEvents = this.attachVideoElementEvents(),
                            this.attachPlayerEvents(),
                            this.player.attachMedia(this.videoElement),
                            this.startResizeCheck(),
                            this.mediaAttachTimer = window.setTimeout((function() {
                                d.onError(new Error("Media attach timeout."))
                            }
                            ), 15e3),
                            null === (n = this.performanceCollector) || void 0 === n || n.setHls(this.player),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.loadSource = function() {
                var e, t = this.config.mediaUrl;
                null === (e = this.player) || void 0 === e || e.loadSource(t)
            }
            ,
            t.prototype.play = function() {
                var e, t = this, n = this.config.prerollUrl;
                if (this.log("play", this.isPlayingAd),
                !this.isUnsupported && !this.isAdClientBooting())
                    return n && !this.isPrerollStarted ? (this.isPrerollStarted = !0,
                    this.onPlay(),
                    void this.playAdTag(n)) : void (this.isPlayingAd ? null === (e = this.adClient) || void 0 === e || e.play() : Promise.resolve().then((function() {
                        return t.videoElement.play()
                    }
                    )).catch(this.onError))
            }
            ,
            t.prototype.pause = function() {
                var e;
                this.log("pause"),
                this.isUnsupported || this.isAdClientBooting() || (this.isAd() ? null === (e = this.adClient) || void 0 === e || e.pause() : this.videoElement.pause())
            }
            ,
            t.prototype.seek = function(e) {
                (this.log("seek", e),
                this.isUnsupported || this.isAd()) || ((this.shouldUseIMA() ? this.isVpaidAdClientWorking() && !this.isAdClientBooting() : this.isAdFetching) || (this.emit(v.PLAYER_EVENTS.seek, {
                    position: this.getPosition(),
                    offset: e
                }),
                this.videoElement.currentTime = e))
            }
            ,
            t.prototype.getAdUrl = function() {
                var e;
                return null === (e = this.adClient) || void 0 === e ? void 0 : e.getAdUrl()
            }
            ,
            t.prototype.getState = function() {
                return this.state
            }
            ,
            t.prototype.getVideoElement = function() {
                return this.videoElement
            }
            ,
            t.prototype.getPosition = function() {
                return this.contentPosition
            }
            ,
            t.prototype.getDuration = function() {
                return this.contentDuration
            }
            ,
            t.prototype.getBitrate = function() {
                if (!this.player)
                    return -1;
                if (void 0 !== this.player.bandwidthEstimate)
                    return this.player.bandwidthEstimate;
                var e = this.player
                  , t = e.abrController._bwEstimator
                  , n = e.currentLevel
                  , a = void 0 === n ? -1 : n
                  , r = e.levels
                  , i = void 0 === r ? [] : r;
                if (!t)
                    return -1 !== a && i[a] ? i[a].bitrate : -1;
                var o = t.getEstimate();
                return Number.isNaN(o) ? -1 : o
            }
            ,
            t.prototype.getRendition = function() {
                var e = this.player || {}
                  , t = e.currentLevel
                  , n = void 0 === t ? -1 : t
                  , a = e.levels
                  , r = -1 !== n ? (void 0 === a ? [] : a)[n] : null;
                if (r) {
                    if (r.name)
                        return r.name;
                    if (r.bitrate)
                        return M.buildRenditionString({
                            width: r.width,
                            height: r.height,
                            bitrate: r.bitrate
                        })
                } else if (this.videoElement)
                    return M.buildRenditionString({
                        width: this.videoElement.videoWidth,
                        height: this.videoElement.videoHeight
                    });
                return ""
            }
            ,
            t.prototype.remove = function() {
                var e, t, n, a;
                return s(this, void 0, void 0, (function() {
                    var r;
                    return l(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            this.log("remove"),
                            i.label = 1;
                        case 1:
                            return i.trys.push([1, 3, , 4]),
                            [4, this.destroyHls()];
                        case 2:
                            return i.sent(),
                            [3, 4];
                        case 3:
                            return r = i.sent(),
                            this.log(r, "Error while destroying extension before cue point."),
                            [3, 4];
                        case 4:
                            return null === (e = this.detachVideoElementEvents) || void 0 === e || e.call(this),
                            null === (t = this.detachFairPlayEvents) || void 0 === t || t.call(this),
                            this.adClient && this.adClient.remove(),
                            null === (n = this.performanceCollector) || void 0 === n || n.destroy(),
                            this.setState(E.State.destroyed),
                            this.stopResizeCheck(),
                            null === (a = this.performanceCollector) || void 0 === a || a.destroy(),
                            window.clearTimeout(this.mediaAttachTimer),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.playAdTag = function(e) {
                var t = this;
                if (this.shouldUseIMA()) {
                    if (this.log("playAdTag", this.isVpaidAdClientWorking(), e),
                    this.isVpaidAdClientWorking())
                        return;
                    this.setupAdClient(),
                    this.adClient && this.adClient.playAd(e)
                } else {
                    if (this.isAdFetching || this.isAd())
                        return;
                    this.isAdFetching = !0;
                    var n = d.addQueryStringToUrl(e, {
                        vpaid_enabled: !1
                    });
                    y.fetchJsonAds(n).then((function(e) {
                        t.isAdFetching = !1,
                        t.videoElement.poster = "",
                        t.playAdResponse(e)
                    }
                    ), (function(e) {
                        t.isAdFetching = !1,
                        t.emit(v.PLAYER_EVENTS.adError, new f.default({
                            type: E.ErrorType.AD_ERROR,
                            detail: E.ErrorDetail.FETCH_ERROR,
                            message: null == e ? void 0 : e.message
                        })),
                        t.resume()
                    }
                    ))
                }
            }
            ,
            t.prototype.playAdResponse = function(e) {
                var t, n;
                return s(this, void 0, void 0, (function() {
                    var a;
                    return l(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            return this.shouldUseIMA() ? (this.log("playAdResponse:ima", this.isVpaidAdClientWorking(), e),
                            this.isVpaidAdClientWorking() ? [2] : (this.setupAdClient(),
                            this.adClient && this.adClient.playAdResponse(e),
                            [3, 7])) : [3, 1];
                        case 1:
                            if (this.log("playAdResponse:adplayer", e),
                            this.getState() === E.State.destroyed)
                                return [2];
                            if (0 === e.length)
                                return this.emit(v.PLAYER_EVENTS.adPodEmpty),
                                this.resume(),
                                [2];
                            if (this.pause(),
                            !this.config.reuseVideoElement)
                                return [3, 6];
                            null === (t = this.detachVideoElementEvents) || void 0 === t || t.call(this),
                            r.label = 2;
                        case 2:
                            return r.trys.push([2, 4, , 5]),
                            [4, this.destroyHls()];
                        case 3:
                            return r.sent(),
                            [3, 5];
                        case 4:
                            return a = r.sent(),
                            this.log(a, "Error while destroying extension before cue point."),
                            [3, 5];
                        case 5:
                            this.isVideoElementUsedByAdsInAdPlayer = !0,
                            r.label = 6;
                        case 6:
                            this.setupAdClient(),
                            null === (n = this.adClient) || void 0 === n || n.playAdResponse(e),
                            r.label = 7;
                        case 7:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.resume = function() {
                var e, t, n = this.config.reuseVideoElement;
                if (this.log("resume", n, this.isAd(), this.getPosition()),
                n)
                    return this.isVideoElementUsedByAdsInAdPlayer ? (this.isVideoElementUsedByAdsInAdPlayer = !1,
                    null === (e = this.detachFairPlayEvents) || void 0 === e || e.call(this),
                    null === (t = this.detachVideoElementEvents) || void 0 === t || t.call(this),
                    void this.setup()) : void this.play();
                this.isPlayerSetup ? this.play() : this.setup()
            }
            ,
            t.prototype.getCaptions = function() {
                return this.captionsIndex
            }
            ,
            t.prototype.setCaptions = function(e) {
                var t = this;
                if (this.log("setCaptions", e, this.captionsIndex),
                this.captionsIndex !== e)
                    if (this.captionsIndex = e,
                    this.captionsUnits = [],
                    this.emit(v.PLAYER_EVENTS.captionsChange, {
                        captionsIndex: this.captionsIndex
                    }),
                    0 !== this.captionsIndex) {
                        var n = this.captionsList[this.captionsIndex];
                        b.fetchData(n.id).then((function(e) {
                            t.captionsUnits = e,
                            t.showCaptions()
                        }
                        )).catch((function(e) {
                            t.log("fetch subtitle error", e),
                            t.setCaptions(0)
                        }
                        ))
                    } else
                        this.hideCaptions()
            }
            ,
            t.prototype.setCaptionsList = function(e) {
                this.captionsList = e,
                0 !== this.captionsList.length && (this.captionsList.unshift({
                    id: "Off",
                    label: "Off",
                    lang: "Off"
                }),
                this.emit(v.PLAYER_EVENTS.captionsListChange, {
                    captionsList: this.captionsList
                }),
                this.emit(v.PLAYER_EVENTS.allCaptionsAvailable, {
                    captionsList: this.captionsList
                }))
            }
            ,
            t.prototype.setCaptionsStyles = function(e) {
                this.captionsStyles = e,
                this.captionsStylesString = b.convertStyleObjectToString(e.font),
                this.emit(v.PLAYER_EVENTS.captionsStylesChange, {
                    captionsStyles: e
                })
            }
            ,
            t.prototype.getCaptionsList = function() {
                return this.captionsList
            }
            ,
            t.prototype.getMute = function() {
                return this.videoElement.muted
            }
            ,
            t.prototype.setMute = function(e) {
                var t;
                this.setVideoElementMute(e),
                this.emit(v.PLAYER_EVENTS.mute, {
                    mute: e
                }),
                R.set(v.PLAYER_STORAGE_MUTE, e),
                null === (t = this.adClient) || void 0 === t || t.setVolume(e ? 0 : this.getVolume())
            }
            ,
            t.prototype.getVolume = function() {
                return Math.floor(100 * this.videoElement.volume)
            }
            ,
            t.prototype.setVolume = function(e) {
                this.setVideoElementVolume(e),
                this.emit(v.PLAYER_EVENTS.volume, {
                    volume: e
                }),
                this.setMute(!1),
                R.set(v.PLAYER_STORAGE_VOLUME, e),
                this.isPlayingAd && this.adClient && this.adClient.setVolume(e)
            }
            ,
            t.prototype.setQuality = function(e) {
                var t = this;
                if (this.player)
                    if (this.emit(v.PLAYER_EVENTS.qualityChange, {
                        qualityIndex: e
                    }),
                    0 !== e) {
                        var n = this.player.levels.findIndex((function(n) {
                            return n.bitrate === t.qualityLevelList[e].bitrate
                        }
                        ));
                        this.player.nextLevel = n
                    } else
                        this.player.nextLevel = -1
            }
            ,
            t.prototype.setPrerollUrl = function(e) {
                this.config.prerollUrl = e
            }
            ,
            t.prototype.isAd = function() {
                return this.isPlayingAd
            }
            ,
            t.prototype.updateCaptionsWindowStyle = function(e) {
                var t, n;
                e && this.captionsElement.style.background ? this.captionsElement.style.background = "" : (null === (t = this.captionsStyles) || void 0 === t ? void 0 : t.type) === E.Platform.web && (this.captionsElement.style.background = null === (n = this.captionsStyles) || void 0 === n ? void 0 : n.window.background)
            }
            ,
            t.prototype.isSupported = function() {
                var e = p.default().browser
                  , n = e.name
                  , a = e.version;
                if (a && a.split(".").length) {
                    var r = Number(a.split(".")[0]);
                    if ("Edge" === n && 18 === r)
                        return !0
                }
                return t.Hls.isSupported()
            }
            ,
            t.prototype.init = function() {
                var e = this.config
                  , t = e.poster
                  , n = e.mute
                  , a = e.captionsStyles;
                t && (this.videoElement.poster = t),
                (void 0 === n ? R.get(v.PLAYER_STORAGE_MUTE) : n) && this.setVideoElementMute(!0);
                var r = R.get(v.PLAYER_STORAGE_VOLUME);
                null !== r && this.setVideoElementVolume(r),
                a && this.setCaptionsStyles(a)
            }
            ,
            t.prototype.isAdClientBooting = function() {
                return !(!this.adClient || !("isBooting"in this.adClient)) && this.adClient.isBooting()
            }
            ,
            t.prototype.isVpaidAdClientWorking = function() {
                return !(!this.adClient || !("isFinished"in this.adClient)) && !this.adClient.isFinished()
            }
            ,
            t.prototype.startResizeCheck = function() {
                this.stopResizeCheck(),
                this.rafId = C.requestAnimationFrame(this.checkResize)
            }
            ,
            t.prototype.stopResizeCheck = function() {
                C.cancelAnimationFrame(this.rafId)
            }
            ,
            t.prototype.checkResize = function() {
                var e = this.videoElement.videoWidth
                  , t = this.videoElement.videoHeight;
                if (this.log("resize check", e, t),
                e && t)
                    return this.log("resize detected", e, t),
                    void this.notifyPlayerReady();
                this.startResizeCheck()
            }
            ,
            t.prototype.handleUnsupport = function() {
                var e = this
                  , n = document.getElementById(t.WARNING_COMPONENT_ID);
                n.textContent = "\n      Oops, your web browser is no longer supported.\n      Please upgrade to a modern, fully supported browser\n    ",
                n.style.display = "block",
                setTimeout((function() {
                    e.isReadyEmitted = !0,
                    e.emit(v.PLAYER_EVENTS.ready),
                    e.emit(v.PLAYER_EVENTS.error, new Error("browser is no longer supported"))
                }
                ), 0)
            }
            ,
            t.prototype.setupFairPlay = function() {
                return s(this, void 0, void 0, (function() {
                    var e, t, n, a, r, i;
                    return l(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            return this.log("setup FairPlay"),
                            e = this.config,
                            t = e.drmKeySystem,
                            n = e.licenseUrl,
                            a = e.mediaUrl,
                            r = e.serverCertificateUrl,
                            [4, fetch(r)];
                        case 1:
                            return [4, o.sent().arrayBuffer()];
                        case 2:
                            return i = o.sent(),
                            this.detachFairPlayEvents = _.setup(this.videoElement, t, n, new Uint8Array(i), this.onError),
                            this.videoElement.src = a,
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.setVideoElementMute = function(e) {
                this.videoElement.muted = e
            }
            ,
            t.prototype.setVideoElementVolume = function(e) {
                this.videoElement.volume = e / 100
            }
            ,
            t.prototype.setState = function(e) {
                this.state = e
            }
            ,
            t.prototype.startBuffering = function() {
                this.isBuffering || (this.isBuffering = !0,
                this.emit(v.PLAYER_EVENTS.bufferStart))
            }
            ,
            t.prototype.stopBuffering = function() {
                this.isBuffering && (this.isBuffering = !1,
                this.emit(v.PLAYER_EVENTS.bufferEnd))
            }
            ,
            t.prototype.showCaptions = function() {
                this.captionsElement.style.display = "block"
            }
            ,
            t.prototype.hideCaptions = function() {
                this.captionsElement.style.display = "none"
            }
            ,
            t.prototype.updateCaptions = function() {
                var e, t, n, a = this;
                if (0 !== this.captionsUnits.length) {
                    var r = b.locate(this.getPosition(), this.captionsUnits)
                      , i = r ? r.text.map((function(e) {
                        return '<span style="' + a.captionsStylesString + '">' + e + "</span>"
                    }
                    )).join("<br />") : "";
                    i !== this.previousCaptionsText && (this.captionsElement.innerHTML = i,
                    this.previousCaptionsText = i,
                    (null === (e = this.captionsStyles) || void 0 === e ? void 0 : e.type) === E.Platform.web && (null === (n = null === (t = this.captionsStyles) || void 0 === t ? void 0 : t.window) || void 0 === n ? void 0 : n.background) && this.updateCaptionsWindowStyle("" === i))
                }
            }
            ,
            t.prototype.notifyPlayerReady = function() {
                var e = this;
                if (this.log("notifyPlayerReady"),
                !this.isReadyEmitted && (this.isReadyEmitted = !0,
                this.stopResizeCheck(),
                this.emit(v.PLAYER_EVENTS.ready),
                this.config.subtitles && (this.setCaptionsList(this.config.subtitles.map((function(e) {
                    return {
                        id: e.url,
                        label: e.lang,
                        lang: e.lang
                    }
                }
                ))),
                this.config.defaultCaptions))) {
                    var t = this.getCaptionsList().findIndex((function(t) {
                        return t.label === e.config.defaultCaptions
                    }
                    ));
                    this.setCaptions(t)
                }
            }
            ,
            t.prototype.onLoadedMetaData = function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                this.log("onLoadedMetaData", e),
                this.notifyPlayerReady()
            }
            ,
            t.prototype.onCanPlay = function() {
                this.log("onCanPlay"),
                this.stopBuffering()
            }
            ,
            t.prototype.onPlaying = function() {
                this.log("onPlaying"),
                this.onPlay()
            }
            ,
            t.prototype.onPlay = function() {
                this.log("onPlay", this.isPlayingAd),
                this.stopBuffering(),
                this.setState(E.State.playing),
                this.emit(this.isPlayingAd ? v.PLAYER_EVENTS.adPlay : v.PLAYER_EVENTS.play)
            }
            ,
            t.prototype.onPause = function() {
                this.log("onPause", this.isPlayingAd),
                this.stopBuffering(),
                this.setState(E.State.paused),
                this.emit(this.isPlayingAd ? v.PLAYER_EVENTS.adPause : v.PLAYER_EVENTS.pause)
            }
            ,
            t.prototype.onSeeked = function() {
                this.contentPosition = this.videoElement.currentTime,
                this.log("onSeeked", this.contentPosition),
                this.emit(v.PLAYER_EVENTS.seeked, {
                    offset: this.getPosition()
                })
            }
            ,
            t.prototype.onTimeupdate = function() {
                var e = this.videoElement.currentTime;
                this.stopBuffering(),
                this.isPlayingAd || (this.contentPosition = e,
                this.emit(v.PLAYER_EVENTS.time, {
                    position: this.getPosition(),
                    duration: this.getDuration()
                }),
                this.updateCaptions())
            }
            ,
            t.prototype.onWaiting = function() {
                if (this.log("onWaiting"),
                this.startBuffering(),
                0 === this.videoElement.currentTime && this.videoElement.buffered.length) {
                    var e = this.videoElement.buffered.start(0);
                    e > 0 && e < 1 && this.seek(Math.ceil(10 * e) / 10)
                }
            }
            ,
            t.prototype.onEnded = function() {
                this.log("onEnded"),
                this.stopBuffering(),
                this.setState(E.State.completed),
                this.emit(v.PLAYER_EVENTS.complete)
            }
            ,
            t.prototype.onError = function(e) {
                this.log("onError", e),
                this.emit(v.PLAYER_EVENTS.error, e)
            }
            ,
            t.prototype.onDurationChange = function() {
                var e = this.videoElement.duration;
                this.contentDuration = e,
                this.log("onDurationChange", e)
            }
            ,
            t.prototype.setupAdClient = function() {
                this.adClient || (this.shouldUseIMA() ? this.adClient = new S.default(this,this.videoElement,this.adContainerElement,{
                    debug: !!this.config.debug,
                    volume: this.getMute() ? 0 : this.getVolume()
                }) : this.adClient = new g.default({
                    container: this.adContainerElement,
                    videoElement: this.videoElement,
                    reuseVideoElement: this.config.reuseVideoElement,
                    debug: this.config.debug,
                    volume: this.getMute() ? 0 : this.getVolume(),
                    clickThroughEnabled: !0,
                    performanceCollectorEnabled: this.config.performanceCollectorEnabled
                }),
                this.attachAdClientEvents())
            }
            ,
            t.prototype.destroyHls = function() {
                var e, t;
                this.player && (null === (e = this.player) || void 0 === e ? void 0 : e.destroy) && (window.clearTimeout(this.mediaAttachTimer),
                null === (t = this.player) || void 0 === t || t.destroy(),
                delete this.player,
                this.videoElement.setMediaKeys(null))
            }
            ,
            t.prototype.shouldUseIMA = function() {
                var e, t;
                return null === (t = null === (e = this.config) || void 0 === e ? void 0 : e.extraOptions) || void 0 === t ? void 0 : t.vpaid_enabled
            }
            ,
            t.prototype.attachAdClientEvents = function() {
                var e = this
                  , t = this.adClient
                  , n = function() {
                    var n, a;
                    e.showCaptions(),
                    (null === (n = e.config) || void 0 === n ? void 0 : n.poster) && (e.videoElement.poster = null === (a = e.config) || void 0 === a ? void 0 : a.poster),
                    e.shouldUseIMA() || (null == t || t.remove(),
                    delete e.adClient,
                    e.resume())
                };
                t && (t.on(v.PLAYER_EVENTS.adStart, (function(t) {
                    e.log("Adapter adStart"),
                    e.isPlayingAd = !0,
                    e.emit(v.PLAYER_EVENTS.adStart, t),
                    e.hideCaptions()
                }
                )),
                t.on(v.PLAYER_EVENTS.adPlay, (function() {
                    e.log("Adapter adPlay"),
                    e.setState(E.State.playing),
                    e.emit(v.PLAYER_EVENTS.adPlay)
                }
                )),
                t.on(v.PLAYER_EVENTS.adPause, (function() {
                    e.log("Adapter adPause"),
                    e.setState(E.State.paused),
                    e.emit(v.PLAYER_EVENTS.adPause)
                }
                )),
                t.on(v.PLAYER_EVENTS.adComplete, (function(t) {
                    e.log("Adapter adComplete"),
                    e.isPlayingAd = !1,
                    e.emit(v.PLAYER_EVENTS.adComplete, t)
                }
                )),
                t.on(v.PLAYER_EVENTS.adPodComplete, (function() {
                    e.log("Adapter adPodComplete"),
                    e.isPlayingAd = !1,
                    e.emit(v.PLAYER_EVENTS.adPodComplete),
                    n()
                }
                )),
                t.on(v.PLAYER_EVENTS.adPodEmpty, (function() {
                    e.log("Adapter adPodEmpty"),
                    e.isPlayingAd = !1,
                    e.emit(v.PLAYER_EVENTS.adPodEmpty),
                    n()
                }
                )),
                t.on(v.PLAYER_EVENTS.adTime, (function(t) {
                    e.log("Adapter adTime"),
                    e.emit(v.PLAYER_EVENTS.adTime, t)
                }
                )),
                t.on(v.PLAYER_EVENTS.adError, (function(t) {
                    e.log("Adapter adError", t),
                    e.emit(v.PLAYER_EVENTS.adError, t)
                }
                )),
                t.on(v.PLAYER_EVENTS.adClick, (function(t) {
                    e.log("Adapter adClick", t),
                    e.emit(v.PLAYER_EVENTS.adClick, t)
                }
                )))
            }
            ,
            t.prototype.attachVideoElementEvents = function() {
                var e = this
                  , t = {
                    durationchange: this.onDurationChange,
                    loadedmetadata: this.onLoadedMetaData,
                    canplay: this.onCanPlay,
                    playing: this.onPlaying,
                    play: this.onPlay,
                    pause: this.onPause,
                    seeked: this.onSeeked,
                    timeupdate: this.onTimeupdate,
                    waiting: this.onWaiting,
                    ended: this.onEnded,
                    error: this.onError
                };
                return Object.keys(t).forEach((function(n) {
                    e.videoElement.addEventListener(n, t[n])
                }
                )),
                function() {
                    Object.keys(t).forEach((function(n) {
                        e.videoElement.removeEventListener(n, t[n])
                    }
                    ))
                }
            }
            ,
            t.prototype.attachPlayerEvents = function() {
                var e = this
                  , n = this.contentPosition;
                if (n > 0 && this.once(v.PLAYER_EVENTS.time, (function() {
                    e.seek(n)
                }
                )),
                this.player) {
                    var a = t.Hls
                      , r = this.config.mediaUrl;
                    this.player.on(a.Events.MEDIA_ATTACHED, (function(t, n) {
                        e.log("Hls.Events.MEDIA_ATTACHED", n),
                        e.loadSource(),
                        window.clearTimeout(e.mediaAttachTimer)
                    }
                    )),
                    this.player.on(a.Events.MANIFEST_LOADED, (function() {
                        e.manifestLoadingRetry = 0
                    }
                    )),
                    this.player.on(a.Events.MANIFEST_PARSED, (function(t, n) {
                        e.log("Hls.Events.MANIFEST_PARSED", n),
                        e.qualityLevelList = c([{
                            bitrate: 0,
                            width: 0,
                            height: 0,
                            label: "Auto"
                        }], n.levels.map((function(e) {
                            return {
                                bitrate: e.bitrate,
                                width: e.width,
                                height: e.height,
                                label: M.getQualityLevelLabel(e)
                            }
                        }
                        )).sort((function(e, t) {
                            return t.bitrate - e.bitrate
                        }
                        ))),
                        e.emit(v.PLAYER_EVENTS.qualityListChange, {
                            qualityList: e.qualityLevelList
                        }),
                        e.config.autoStart && e.play()
                    }
                    ));
                    var i = -1;
                    this.player.on(a.Events.FRAG_CHANGED, (function(t, n) {
                        var a, r = n.frag.level;
                        if (i !== r) {
                            i = r;
                            var o = null === (a = e.player) || void 0 === a ? void 0 : a.levels[r]
                              , s = e.qualityLevelList.findIndex((function(e) {
                                return e.bitrate === (null == o ? void 0 : o.bitrate)
                            }
                            ));
                            e.log("Hls.Events.FRAG_CHANGED visualQualityChange", n),
                            e.emit(v.PLAYER_EVENTS.visualQualityChange, {
                                qualityIndex: s
                            })
                        }
                    }
                    )),
                    this.player.on(a.Events.BUFFER_APPENDED, (function() {
                        var t = e.videoElement.buffered;
                        if (0 !== t.length) {
                            var n = Math.max(Math.min(t.end(t.length - 1) / e.getDuration(), 1), 0);
                            e.emit(v.PLAYER_EVENTS.bufferChange, {
                                bufferPercent: 100 * n,
                                position: e.getPosition(),
                                duration: e.getDuration()
                            })
                        }
                    }
                    )),
                    this.player.on(a.Events.ERROR, (function(t, n) {
                        var i, o, s = n.type, l = n.details, c = n.fatal, u = n.reason, d = n.err, p = a.ErrorDetails;
                        if (c && ([p.KEY_SYSTEM_INVALID_HDCP_VERSION, p.KEY_SYSTEM_LICENSE_INVALID_STATUS].includes(l) ? e.emit(v.PLAYER_EVENTS.error, {
                            type: v.PLAYER_ERROR_TYPE.DRM,
                            message: v.PLAYER_ERROR_DETAILS.HDCP_INCOMPLIANCE,
                            details: l,
                            fatal: c,
                            source: "Hlsjs"
                        }, r) : e.emit(v.PLAYER_EVENTS.error, {
                            type: A.convertHlsErrorType(s, a),
                            message: l,
                            details: l,
                            fatal: c,
                            source: "Hlsjs",
                            reason: u,
                            err: d
                        }, r),
                        c))
                            switch (s) {
                            case a.ErrorTypes.NETWORK_ERROR:
                                l === a.ErrorDetails.MANIFEST_LOAD_TIMEOUT ? e.manifestLoadingRetry < e.manifestLoadingMaxRetry ? (e.manifestLoadingRetry++,
                                e.loadSource()) : e.destroyHls() : null === (i = e.player) || void 0 === i || i.startLoad();
                                break;
                            case a.ErrorTypes.MEDIA_ERROR:
                                null === (o = e.player) || void 0 === o || o.recoverMediaError();
                                break;
                            default:
                                e.destroyHls()
                            }
                    }
                    ))
                } else
                    !this.shouldUseHls && this.config.autoStart && this.play()
            }
            ,
            t.VIDEO_COMPONENT_ID = "videoPlayerComponent",
            t.CAPTIONS_COMPONENT_ID = "captionsComponent",
            t.AD_COMPONENT_ID = "adComponent",
            t.WARNING_COMPONENT_ID = "warningComponent",
            t.htmlString = '\n    <div id="' + v.PLAYER_CONTAINER_IDS.hls + '">\n      <video id="' + t.VIDEO_COMPONENT_ID + '"></video>\n      <div id="' + t.CAPTIONS_COMPONENT_ID + '"></div>\n      <div id="' + t.AD_COMPONENT_ID + '"></div>\n      <div id="' + t.WARNING_COMPONENT_ID + '" style="display: none"></div>\n    </div>\n  ',
            t.loadScript = function(e) {
                var n;
                void 0 === e && (e = {});
                var a = (null === (n = e.extraOptions) || void 0 === n ? void 0 : n.externalHlsResolver) ? e.extraOptions.externalHlsResolver.then((function(e) {
                    t.Hls = e
                }
                )) : O.resolvers.resolveHlsSDK().then((function() {
                    t.Hls = window.Hls
                }
                ));
                return Promise.all([a, e.autoStart ? O.resolvers.resolveImaSDK() : Promise.resolve()])
            }
            ,
            o([m.boundMethod], t.prototype, "checkResize", null),
            o([m.boundMethod], t.prototype, "onLoadedMetaData", null),
            o([m.boundMethod], t.prototype, "onCanPlay", null),
            o([m.boundMethod], t.prototype, "onPlaying", null),
            o([m.boundMethod], t.prototype, "onPlay", null),
            o([m.boundMethod], t.prototype, "onPause", null),
            o([m.boundMethod], t.prototype, "onSeeked", null),
            o([m.boundMethod], t.prototype, "onTimeupdate", null),
            o([m.boundMethod], t.prototype, "onWaiting", null),
            o([m.boundMethod], t.prototype, "onEnded", null),
            o([m.boundMethod], t.prototype, "onError", null),
            o([m.boundMethod], t.prototype, "onDurationChange", null),
            t
        }(h.EventEmitter);
        t.default = P
    },
    1669: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(1670)
          , r = new a.UAParser(void 0,{
            device: [[/(playstation\s5)/i], [a.UAParser.DEVICE.MODEL, [a.UAParser.DEVICE.VENDOR, "Sony"], [a.UAParser.DEVICE.TYPE, a.UAParser.DEVICE.CONSOLE]]],
            os: [[/(playstation)\s(5)/i], [a.UAParser.OS.NAME, a.UAParser.OS.VERSION]]
        });
        t.default = function(e) {
            if (!e)
                try {
                    e = window.navigator.userAgent
                } catch (t) {
                    e = ""
                }
            return r.setUA(e).getResult()
        }
    },
    1671: function(e, t, n) {
        "use strict";
        var a, r = this && this.__extends || (a = function(e, t) {
            return (a = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function n() {
                this.constructor = e
            }
            a(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        ), i = this && this.__decorate || function(e, t, n, a) {
            var r, i = arguments.length, o = i < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                o = Reflect.decorate(e, t, n, a);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (o = (i < 3 ? r(o) : i > 3 ? r(t, n, o) : r(t, n)) || o);
            return i > 3 && o && Object.defineProperty(t, n, o),
            o
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(449)
          , s = n(322)
          , l = n(438)
          , c = n(206)
          , u = n(1603)
          , d = n(1604)
          , p = n(928)
          , m = n(926)
          , h = function(e) {
            function t(t) {
                var n = e.call(this) || this;
                if (n.state = c.AdClientState.idle,
                t.reuseVideoElement && !t.videoElement)
                    throw new Error("`videoElement` must be specified if `reuseVideoElement` is true.");
                return n.options = t,
                n.log = t.debug ? m.debug("AdPlayer") : function() {}
                ,
                n
            }
            return r(t, e),
            t.prototype.playAdResponse = function(e) {
                this.log("playAdResponse action", e),
                this.adList = e,
                this.adSequence = 0,
                this.adCount = e.length,
                0 !== this.adCount ? (this.setup(),
                this.playNextAd()) : this.emit(l.PLAYER_EVENTS.adPodEmpty)
            }
            ,
            t.prototype.play = function() {
                var e;
                null === (e = this.videoElement) || void 0 === e || e.play()
            }
            ,
            t.prototype.pause = function() {
                var e;
                null === (e = this.videoElement) || void 0 === e || e.pause()
            }
            ,
            t.prototype.getState = function() {
                return this.state
            }
            ,
            t.prototype.getAdUrl = function() {
                return this.getCurrentAd().video
            }
            ,
            t.prototype.remove = function() {
                var e, t;
                this.state !== c.AdClientState.destroyed && (this.setState(c.AdClientState.destroyed),
                null === (e = this.detachEvents) || void 0 === e || e.call(this),
                null === (t = this.detachClickThrough) || void 0 === t || t.call(this),
                !this.options.reuseVideoElement && this.videoElement && (d.removeVideoElement(this.videoElement),
                this.videoElement = null))
            }
            ,
            t.prototype.setState = function(e) {
                this.state = e
            }
            ,
            t.prototype.setup = function() {
                var e = this.options
                  , t = e.container
                  , n = e.reuseVideoElement
                  , a = e.videoElement
                  , r = e.volume;
                this.container = t,
                n ? this.videoElement = a : (this.videoElement = document.createElement("video"),
                this.videoElement.style.zIndex = "" + Number.POSITIVE_INFINITY,
                t.appendChild(this.videoElement)),
                this.videoElement.type = "video/mp4",
                this.detachEvents = this.attachEvents(),
                this.setState(c.AdClientState.inited),
                void 0 !== r && this.setVolume(r)
            }
            ,
            t.prototype.attachEvents = function() {
                for (var e = this, t = {
                    loadeddata: this.onLoadeddata,
                    timeupdate: this.onTimeupdate,
                    play: this.onPlay,
                    pause: this.onPause,
                    ended: this.onEnded,
                    error: this.onError
                }, n = 0, a = Object.entries(t); n < a.length; n++) {
                    var r = a[n]
                      , i = r[0]
                      , o = r[1];
                    this.videoElement.addEventListener(i, o)
                }
                return function() {
                    for (var n = 0, a = Object.entries(t); n < a.length; n++) {
                        var r = a[n]
                          , i = r[0]
                          , o = r[1];
                        e.videoElement.removeEventListener(i, o)
                    }
                }
            }
            ,
            t.prototype.attachClickThrough = function() {
                var e = this
                  , t = this.getCurrentAd()
                  , n = t.clickthrough
                  , a = t.clicktracking
                  , r = void 0 === a ? [] : a
                  , i = function() {
                    e.emit(l.PLAYER_EVENTS.adClick, n),
                    m.sendBeaconRequest(r),
                    window.open(n)
                };
                this.container.addEventListener("click", i);
                var o = this.container.style.cursor;
                return this.container.style.cursor = "pointer",
                function() {
                    e.container.removeEventListener("click", i),
                    e.container.style.cursor = o || "initial"
                }
            }
            ,
            t.prototype.playNextAd = function() {
                var e, t, n = this;
                this.adSequence++,
                null === (e = this.performanceCollector) || void 0 === e || e.destroy();
                var a = this.getCurrentAd();
                a ? (this.adTrackFn = u.getAdTrackFn(a),
                this.options.performanceCollectorEnabled && (this.performanceCollector = new p.PerformanceCollector({
                    debug: this.options.debug,
                    reporter: function(e) {
                        return n.emit(l.PLAYER_EVENTS.startupPerformance, {
                            isAd: !0,
                            metrics: e
                        })
                    }
                }),
                this.performanceCollector.setVideoElement(this.videoElement)),
                this.videoElement.src = a.video,
                this.options.clickThroughEnabled && a.clickthrough && (null === (t = a.clicktracking) || void 0 === t ? void 0 : t.length) && (this.detachClickThrough = this.attachClickThrough())) : this.emit(l.PLAYER_EVENTS.adPodComplete)
            }
            ,
            t.prototype.getCurrentAd = function() {
                return this.adList[this.adSequence - 1]
            }
            ,
            t.prototype.onLoadeddata = function() {
                this.log("onLoadeddata"),
                this.emit(l.PLAYER_EVENTS.adStart, {
                    ad: this.getCurrentAd(),
                    adSequence: this.adSequence,
                    adsCount: this.adCount,
                    adPosition: 0
                }),
                this.play()
            }
            ,
            t.prototype.onTimeupdate = function() {
                var e, t = this.videoElement.currentTime;
                this.log("onTimeupdate", t),
                null === (e = this.adTrackFn) || void 0 === e || e.call(this, t),
                this.emit(l.PLAYER_EVENTS.adTime, {
                    position: t,
                    duration: this.videoElement.duration || 0,
                    sequence: this.adSequence,
                    podcount: this.adCount
                })
            }
            ,
            t.prototype.setVolume = function(e) {
                this.videoElement.volume = e / 100
            }
            ,
            t.prototype.onPlay = function() {
                this.log("onPlay"),
                this.setState(c.AdClientState.playing),
                this.emit(l.PLAYER_EVENTS.adPlay)
            }
            ,
            t.prototype.onPause = function() {
                this.log("onPause"),
                this.setState(c.AdClientState.paused),
                this.emit(l.PLAYER_EVENTS.adPause)
            }
            ,
            t.prototype.onEnded = function() {
                var e, t;
                this.log("onEnded"),
                this.setState(c.AdClientState.completed),
                null === (e = this.adTrackFn) || void 0 === e || e.call(this, Number.POSITIVE_INFINITY),
                this.emit(l.PLAYER_EVENTS.adComplete, {
                    ad: this.getCurrentAd(),
                    adsCount: this.adCount,
                    adSequence: this.adSequence,
                    adPosition: this.videoElement.currentTime
                }),
                null === (t = this.detachClickThrough) || void 0 === t || t.call(this),
                this.playNextAd()
            }
            ,
            t.prototype.onError = function() {
                var e, t = this.videoElement.error;
                this.log("onError", t),
                this.setState(c.AdClientState.errored),
                this.emit(l.PLAYER_EVENTS.adError, t),
                null === (e = this.detachClickThrough) || void 0 === e || e.call(this),
                this.playNextAd()
            }
            ,
            i([o.boundMethod], t.prototype, "onLoadeddata", null),
            i([o.boundMethod], t.prototype, "onTimeupdate", null),
            i([o.boundMethod], t.prototype, "onPlay", null),
            i([o.boundMethod], t.prototype, "onPause", null),
            i([o.boundMethod], t.prototype, "onEnded", null),
            i([o.boundMethod], t.prototype, "onError", null),
            t
        }(s.EventEmitter);
        t.default = h
    },
    1672: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.parseSrt = t.locate = t.convertStyleObjectToString = t.fetchData = t.CACHE_CAPACITY = void 0,
        t.CACHE_CAPACITY = 5;
        var a = []
          , r = {};
        t.fetchData = function(e) {
            if (!r[e] && (r[e] = fetch(e).then((function(e) {
                var n = e.headers.get("content-type") || "";
                return e.text().then((function(e) {
                    return n.includes("binary/octet-stream") ? t.parseSrt(e) : JSON.parse(e)
                }
                ))
            }
            )),
            a.push(e),
            a.length > t.CACHE_CAPACITY)) {
                var n = a.shift();
                delete r[n]
            }
            return r[e]
        }
        ,
        t.convertStyleObjectToString = function(e) {
            var t = /([A-Z])/g;
            return Object.keys(e).map((function(n) {
                var a = e[n];
                return n.replace(t, "-$1").toLowerCase() + ":" + a + ";"
            }
            )).join("")
        }
        ,
        t.locate = function(e, t) {
            return t.find((function(t) {
                return 1e3 * e >= t.start && 1e3 * e <= t.end
            }
            ))
        }
        ,
        t.parseSrt = function(e) {
            var t = e.trim().split(/\r\n|\n|\r/)
              , n = []
              , a = {
                text: []
            }
              , r = function(e) {
                return -1 !== e.indexOf(" --\x3e ")
            }
              , i = function(e, n) {
                return /^\d+$/.test(e) && r(t[n + 1])
            }
              , o = function(e) {
                var t = e.split(":")
                  , n = t[2].split(",");
                return 1e3 * (60 * (60 * parseInt(t[0], 10) + parseInt(t[1], 10)) + parseInt(n[0], 10)) + parseInt(n[1], 10)
            };
            return t.push(""),
            t.forEach((function(e, s) {
                if (i(e, s))
                    a.index = parseInt(e, 10);
                else if (r(e)) {
                    var l = e.split(" --\x3e ");
                    a.start = o(l[0]),
                    a.end = o(l[1])
                } else
                    !function(e, n) {
                        return "" === e && (i(t[n + 1], n + 1) || n === t.length - 1)
                    }(e, s) ? a.text.push(e) : (n.push(a),
                    a = {
                        text: []
                    })
            }
            )),
            n
        }
    },
    1673: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.setup = void 0;
        var a = n(438)
          , r = n(926).debug("FairPlay utility");
        function i(e) {
            var t, n = (t = new Uint16Array(e.buffer),
            String.fromCharCode.apply(null, t));
            if (n.startsWith("L\0skd://"))
                return n = n.substr(8);
            var a = document.createElement("a");
            return a.href = n,
            a.hostname
        }
        function o(e, t, n) {
            var a = 0
              , r = function(e) {
                for (var t = new ArrayBuffer(2 * e.length), n = new Uint16Array(t), a = e.length, r = 0; r < a; r++)
                    n[r] = e.charCodeAt(r);
                return n
            }(t)
              , i = new ArrayBuffer(e.byteLength + 4 + r.byteLength + 4 + n.byteLength)
              , o = new DataView(i);
            new Uint8Array(i,a,e.byteLength).set(e),
            a += e.byteLength,
            o.setUint32(a, r.byteLength, !0),
            a += 4;
            var s = new Uint16Array(i,a,r.length);
            return s.set(r),
            a += s.byteLength,
            o.setUint32(a, n.byteLength, !0),
            a += 4,
            new Uint8Array(i,a,n.byteLength).set(n),
            new Uint8Array(i,0,i.byteLength)
        }
        t.setup = function(e, t, n, s, l) {
            var c, u;
            function d(e) {
                var n = e.target
                  , r = e.initData
                  , d = o(r, u = i(r), s);
                n.webkitKeys || n.webkitSetMediaKeys(new window.WebKitMediaKeys(t)),
                n.webkitKeys ? (c = n.webkitKeys.createSession("video/mp4", d)) ? (c.addEventListener("webkitkeymessage", p),
                c.addEventListener("webkitkeyerror", v)) : l({
                    type: a.PLAYER_ERROR_TYPE.DRM,
                    details: a.PLAYER_ERROR_DETAILS.KEY_SYSTEM_NO_SESSION,
                    fatal: !0
                }) : l({
                    type: a.PLAYER_ERROR_TYPE.DRM,
                    details: a.PLAYER_ERROR_DETAILS.KEY_SYSTEM_NO_KEYS,
                    fatal: !0
                })
            }
            function p(e) {
                var t = e.message
                  , a = new XMLHttpRequest;
                a.responseType = "text",
                a.addEventListener("load", m, !1),
                a.addEventListener("error", h, !1);
                var r = "spc=" + function(e) {
                    for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", n = "", a = 0; a < e.length; ) {
                        var r = e[a++]
                          , i = a < e.length ? e[a++] : Number.NaN
                          , o = a < e.length ? e[a++] : Number.NaN
                          , s = r >> 2
                          , l = (3 & r) << 4 | i >> 4
                          , c = (15 & i) << 2 | o >> 6
                          , u = 63 & o;
                        isNaN(i) ? c = u = 64 : isNaN(o) && (u = 64),
                        n += t.charAt(s) + t.charAt(l) + t.charAt(c) + t.charAt(u)
                    }
                    return n
                }(t) + "&assetId=" + encodeURIComponent(u);
                a.open("POST", n, !0),
                a.setRequestHeader("Content-Type", "text/html; charset=utf-8"),
                a.send(r)
            }
            function m(e) {
                var t = e.target;
                if (t.status >= 400)
                    return r("licenseRequestLoaded wrong status", t),
                    void l({
                        type: a.PLAYER_ERROR_TYPE.DRM,
                        details: a.PLAYER_ERROR_DETAILS.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                        fatal: !0
                    });
                var n = t.responseText.trim();
                "<ckc>" === n.substr(0, 5) && "</ckc>" === n.substr(-6) && (n = n.slice(5, -6)),
                c.update(function(e) {
                    for (var t = window.atob(e), n = t.length, a = new Uint8Array(new ArrayBuffer(n)), r = 0; r < n; r++)
                        a[r] = t.charCodeAt(r);
                    return a
                }(n))
            }
            function h(e) {
                r("licenseRequestFailed", e),
                l({
                    type: a.PLAYER_ERROR_TYPE.DRM,
                    details: a.PLAYER_ERROR_DETAILS.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                    fatal: !0
                })
            }
            function v(e) {
                r("onkeyerror", e),
                l({
                    type: a.PLAYER_ERROR_TYPE.DRM,
                    details: a.PLAYER_ERROR_DETAILS.KEY_SYSTEM_LICENSE_INVALID_STATUS,
                    fatal: !0
                })
            }
            return e.addEventListener("webkitneedkey", d, !1),
            function() {
                e.removeEventListener("webkitneedkey", d)
            }
        }
    },
    1674: function(e, t, n) {
        "use strict";
        var a, r = this && this.__extends || (a = function(e, t) {
            return (a = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function n() {
                this.constructor = e
            }
            a(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        ), i = this && this.__assign || function() {
            return (i = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
        , o = this && this.__awaiter || function(e, t, n, a) {
            return new (n || (n = Promise))((function(r, i) {
                function o(e) {
                    try {
                        l(a.next(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function s(e) {
                    try {
                        l(a.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function l(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(o, s)
                }
                l((a = a.apply(e, t || [])).next())
            }
            ))
        }
        , s = this && this.__generator || function(e, t) {
            var n, a, r, i, o = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function s(i) {
                return function(s) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; o; )
                            try {
                                if (n = 1,
                                a && (r = 2 & i[0] ? a.return : i[0] ? a.throw || ((r = a.return) && r.call(a),
                                0) : a.next) && !(r = r.call(a, i[1])).done)
                                    return r;
                                switch (a = 0,
                                r && (i = [2 & i[0], r.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    r = i;
                                    break;
                                case 4:
                                    return o.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++,
                                    a = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = o.ops.pop(),
                                    o.trys.pop();
                                    continue;
                                default:
                                    if (!(r = o.trys,
                                    (r = r.length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                        o.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && o.label < r[1]) {
                                        o.label = r[1],
                                        r = i;
                                        break
                                    }
                                    if (r && o.label < r[2]) {
                                        o.label = r[2],
                                        o.ops.push(i);
                                        break
                                    }
                                    r[2] && o.ops.pop(),
                                    o.trys.pop();
                                    continue
                                }
                                i = t.call(e, o)
                            } catch (e) {
                                i = [6, e],
                                a = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, s])
                }
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.convertHlsErrorType = t.DESTROY_TIMEOUT = void 0;
        var l = n(322)
          , c = n(438)
          , u = n(926);
        t.DESTROY_TIMEOUT = 5e3,
        t.convertHlsErrorType = function(e, t) {
            var n = t.ErrorTypes;
            switch (e) {
            case n.NETWORK_ERROR:
                return c.PLAYER_ERROR_TYPE.NETWORK;
            case n.MEDIA_ERROR:
                return c.PLAYER_ERROR_TYPE.MEDIA;
            case n.KEY_SYSTEM_ERROR:
                return c.PLAYER_ERROR_TYPE.DRM;
            default:
                return c.PLAYER_ERROR_TYPE.OTHER
            }
        }
        ;
        var d = function(e) {
            function n(t, n) {
                var a, r, o, s;
                void 0 === n && (n = window.Hls);
                var l = e.call(this) || this;
                return l.url = t.url,
                l.videoElement = t.videoElement,
                l.manifestLoadingMaxRetry = t.manifestLoadingMaxRetry || c.MANIFEST_LOADING_MAX_RETRY,
                l.shouldReportBufferChange = null !== (a = t.shouldReportBufferChange) && void 0 !== a && a,
                l.relyOnAutoplayAttribute = null !== (r = t.relyOnAutoplayAttribute) && void 0 !== r && r,
                l.autoStart = null !== (o = t.autoStart) && void 0 !== o && o,
                l.manifestLoadingRetry = 0,
                l.emeEnabled = !!(null === (s = t.hls) || void 0 === s ? void 0 : s.emeEnabled),
                l.Hls = n,
                l.log = t.debug ? u.debug("HlsExtension") : function() {}
                ,
                l.hls = new n(i({
                    enableWorker: !1,
                    maxBufferLength: 20,
                    maxMaxBufferLength: 60,
                    debug: t.debug,
                    shouldRemoveUsedBuffer: t.shouldRemoveUsedBufferOnHls,
                    backBufferLength: t.shouldRemoveUsedBufferOnHls ? 15 : 1 / 0
                }, t.hls || {})),
                l.setup(),
                l.startBufferCleanerTimer(),
                l.attachHlsEvents(),
                l
            }
            return r(n, e),
            n.prototype.getHlsInstance = function() {
                return this.hls
            }
            ,
            n.prototype.getBitrate = function() {
                if (this.hls) {
                    var e = this.hls
                      , t = e.currentLevel
                      , n = void 0 === t ? -1 : t
                      , a = e.levels
                      , r = void 0 === a ? [] : a
                      , i = e.abrController._bwEstimator;
                    if (!i)
                        return -1 !== n && r[n] ? r[n].bitrate : -1;
                    var o = i.getEstimate();
                    return Number.isNaN(o) ? -1 : o
                }
            }
            ,
            n.prototype.destroy = function() {
                return o(this, void 0, void 0, (function() {
                    var e = this;
                    return s(this, (function(n) {
                        return this.isDestroyed ? [2] : (this.isDestroyed = !0,
                        clearInterval(this.bufferCleanupTimer),
                        this.emeEnabled ? [2, new Promise((function(n, a) {
                            var r, i = function() {
                                clearTimeout(r),
                                delete e.hls,
                                n()
                            }, o = e.Hls;
                            e.hls.destroy(),
                            e.hls.on(o.Events.EME_DESTROYED, i),
                            r = setTimeout((function() {
                                e.hls.off(o.Events.EME_DESTROYED, i),
                                delete e.hls,
                                a(new Error("HlsExtension destroy timeout."))
                            }
                            ), t.DESTROY_TIMEOUT)
                        }
                        ))] : (this.hls.destroy(),
                        delete this.hls,
                        [2]))
                    }
                    ))
                }
                ))
            }
            ,
            n.prototype.loadSource = function() {
                this.log("load source"),
                this.hls.loadSource(this.url),
                this.relyOnAutoplayAttribute || this.autoStart && this.videoElement.play()
            }
            ,
            n.prototype.setup = function() {
                var e = this;
                this.log("setup"),
                this.hls.once(this.Hls.Events.MEDIA_ATTACHED, (function() {
                    e.log("MEDIA_ATTACHED"),
                    e.loadSource()
                }
                )),
                this.hls.attachMedia(this.videoElement)
            }
            ,
            n.prototype.attachHlsEvents = function() {
                var e = this
                  , n = this.Hls;
                this.hls.on(n.Events.ERROR, (function(a, r) {
                    var i = r.type
                      , o = r.details
                      , s = r.fatal
                      , l = r.reason
                      , u = r.err
                      , d = r.frag
                      , p = r.response
                      , m = n.ErrorDetails;
                    if ([m.KEY_SYSTEM_INVALID_HDCP_VERSION, m.KEY_SYSTEM_LICENSE_INVALID_STATUS].includes(o) ? e.emit(c.PLAYER_EVENTS.error, {
                        type: c.PLAYER_ERROR_TYPE.DRM,
                        message: c.PLAYER_ERROR_DETAILS.HDCP_INCOMPLIANCE,
                        fatal: s,
                        source: "Hlsjs"
                    }, e.url) : o === m.FRAG_LOAD_ERROR ? e.emit(c.PLAYER_EVENTS.error, {
                        type: t.convertHlsErrorType(i, n),
                        message: o,
                        fatal: s,
                        source: "Hlsjs",
                        reason: l,
                        fragUrl: null == d ? void 0 : d.url,
                        response: p,
                        err: u
                    }, e.url) : e.emit(c.PLAYER_EVENTS.error, {
                        type: t.convertHlsErrorType(i, n),
                        message: o,
                        fatal: s,
                        source: "Hlsjs",
                        reason: l,
                        err: u
                    }, e.url),
                    s)
                        switch (i) {
                        case n.ErrorTypes.NETWORK_ERROR:
                            o === n.ErrorDetails.MANIFEST_LOAD_TIMEOUT ? e.manifestLoadingRetry < e.manifestLoadingMaxRetry ? (e.manifestLoadingRetry++,
                            e.loadSource()) : e.destroy() : e.hls.startLoad();
                            break;
                        case n.ErrorTypes.MEDIA_ERROR:
                            e.hls.recoverMediaError();
                            break;
                        default:
                            e.destroy()
                        }
                }
                )),
                this.hls.on(n.Events.MANIFEST_LOADED, (function() {
                    e.manifestLoadingRetry = 0
                }
                )),
                this.shouldReportBufferChange && this.hls.on(n.Events.BUFFER_APPENDED, (function() {
                    var t = e.videoElement
                      , n = t.buffered
                      , a = t.duration
                      , r = t.currentTime;
                    if (0 !== n.length && 0 !== a) {
                        var i = Math.max(Math.min(n.end(n.length - 1) / a, 1), 0);
                        e.emit(c.PLAYER_EVENTS.bufferChange, {
                            bufferPercent: 100 * i,
                            position: r,
                            duration: a
                        })
                    }
                }
                ))
            }
            ,
            n.prototype.startBufferCleanerTimer = function() {
                var e = this;
                this.bufferCleanupTimer = setInterval((function() {
                    try {
                        var t = e.videoElement.buffered;
                        if (t.length <= 1)
                            return;
                        for (var n = e.videoElement.currentTime, a = 0; a < t.length; a++) {
                            var r = t.start(a)
                              , i = t.end(a);
                            if (n > i || n < r) {
                                var o = e.hls.coreComponents[4].sourceBuffer;
                                o && (o.video.updating || o.video.remove(r, i),
                                o.audio.updating || o.audio.remove(r, i))
                            }
                        }
                    } catch (t) {
                        e.log("Buffer removal fails.", t)
                    }
                }
                ), 1e4)
            }
            ,
            n
        }(l.EventEmitter);
        t.default = d
    },
    1675: function(e, t, n) {
        "use strict";
        var a, r = this && this.__extends || (a = function(e, t) {
            return (a = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function n() {
                this.constructor = e
            }
            a(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        ), i = this && this.__decorate || function(e, t, n, a) {
            var r, i = arguments.length, o = i < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                o = Reflect.decorate(e, t, n, a);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (o = (i < 3 ? r(o) : i > 3 ? r(t, n, o) : r(t, n)) || o);
            return i > 3 && o && Object.defineProperty(t, n, o),
            o
        }
        , o = this && this.__awaiter || function(e, t, n, a) {
            return new (n || (n = Promise))((function(r, i) {
                function o(e) {
                    try {
                        l(a.next(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function s(e) {
                    try {
                        l(a.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function l(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(o, s)
                }
                l((a = a.apply(e, t || [])).next())
            }
            ))
        }
        , s = this && this.__generator || function(e, t) {
            var n, a, r, i, o = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function s(i) {
                return function(s) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; o; )
                            try {
                                if (n = 1,
                                a && (r = 2 & i[0] ? a.return : i[0] ? a.throw || ((r = a.return) && r.call(a),
                                0) : a.next) && !(r = r.call(a, i[1])).done)
                                    return r;
                                switch (a = 0,
                                r && (i = [2 & i[0], r.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    r = i;
                                    break;
                                case 4:
                                    return o.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++,
                                    a = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = o.ops.pop(),
                                    o.trys.pop();
                                    continue;
                                default:
                                    if (!(r = o.trys,
                                    (r = r.length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                        o.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && o.label < r[1]) {
                                        o.label = r[1],
                                        r = i;
                                        break
                                    }
                                    if (r && o.label < r[2]) {
                                        o.label = r[2],
                                        o.ops.push(i);
                                        break
                                    }
                                    r[2] && o.ops.pop(),
                                    o.trys.pop();
                                    continue
                                }
                                i = t.call(e, o)
                            } catch (e) {
                                i = [6, e],
                                a = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, s])
                }
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = n(449)
          , c = n(322)
          , u = n(438)
          , d = n(206)
          , p = n(557)
          , m = n(926)
          , h = function(e) {
            function t(t, n, a, r) {
                var i = e.call(this) || this;
                return i.tag = "",
                i.state = d.AdClientState.idle,
                i.progressInterval = null,
                i.isAdContainerInited = !1,
                i.adapter = t,
                i.videoElement = n,
                i.adContainerElement = a,
                i.volume = r.volume,
                i.log = r.debug ? m.debug("ImaAdClient") : function() {}
                ,
                i
            }
            return r(t, e),
            t.prototype.playAd = function(e) {
                return o(this, void 0, void 0, (function() {
                    return s(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return this.log("AdClient playAd action"),
                            this.tag = e,
                            [4, this.init()];
                        case 1:
                            return t.sent(),
                            this.requestAds({
                                adTagUrl: e
                            }),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.playAdResponse = function(e) {
                return o(this, void 0, void 0, (function() {
                    return s(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return this.log("AdClient playAdResponse action"),
                            [4, this.init()];
                        case 1:
                            return t.sent(),
                            this.requestAds({
                                adResponse: e
                            }),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.play = function() {
                this.adManager && this.adManager.resume()
            }
            ,
            t.prototype.pause = function() {
                this.adManager && this.adManager.pause()
            }
            ,
            t.prototype.setVolume = function(e) {
                this.volume = e,
                this.adManager && this.adManager.setVolume(e / 100)
            }
            ,
            t.prototype.resize = function(e, t, n) {
                if (void 0 === n && (n = !1),
                this.adManager) {
                    var a = n ? google.ima.ViewMode.FULLSCREEN : google.ima.ViewMode.NORMAL;
                    this.adManager.resize(e, t, a)
                }
            }
            ,
            t.prototype.getAdUrl = function() {
                var e, t;
                return null === (t = null === (e = this.adManager) || void 0 === e ? void 0 : e.getCurrentAd()) || void 0 === t ? void 0 : t.getMediaUrl()
            }
            ,
            t.prototype.getState = function() {
                return this.state
            }
            ,
            t.prototype.isBooting = function() {
                return this.getState() === d.AdClientState.inited
            }
            ,
            t.prototype.isFinished = function() {
                return [d.AdClientState.completed, d.AdClientState.errored].includes(this.getState())
            }
            ,
            t.prototype.remove = function() {
                for (var e in window.removeEventListener("resize", this.onResize),
                u.FULLSCREEN_CHANGE_EVENTS)
                    document.removeEventListener(u.FULLSCREEN_CHANGE_EVENTS[e], this.onResize);
                this.clearProgressInterval(),
                this.adLoader && this.adLoader.destroy(),
                this.adManager && this.adManager.destroy(),
                this.adDisplayContainer && (this.adDisplayContainer.destroy(),
                this.isAdContainerInited = !1)
            }
            ,
            t.prototype.setState = function(e) {
                this.state = e
            }
            ,
            t.prototype.init = function() {
                return o(this, void 0, void 0, (function() {
                    return s(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return this.isAdContainerInited ? [2] : [4, p.resolvers.resolveImaSDK()];
                        case 1:
                            e.sent(),
                            google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.INSECURE),
                            this.adDisplayContainer = new google.ima.AdDisplayContainer(this.adContainerElement,this.videoElement),
                            this.adLoader = new google.ima.AdsLoader(this.adDisplayContainer),
                            this.adLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this.onAdsManagerLoaded, !1),
                            this.adLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdError, !1);
                            try {
                                this.adDisplayContainer.initialize(),
                                this.isAdContainerInited = !0,
                                this.setState(d.AdClientState.inited)
                            } catch (e) {
                                this.log("init error", e),
                                this.handleException(e, "init error")
                            }
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.getAdPodInfo = function(e) {
                var t = e.getAdPodInfo()
                  , n = e.getAdId()
                  , a = t.getAdPosition()
                  , r = t.getTotalAds()
                  , i = e.getDuration()
                  , o = i - this.adManager.getRemainingTime();
                return {
                    ad: {
                        id: n,
                        video: this.tag,
                        duration: i
                    },
                    adSequence: a,
                    adsCount: r,
                    adPosition: o
                }
            }
            ,
            t.prototype.onAdsManagerLoaded = function(e) {
                var t = this;
                this.log("onAdsManagerLoaded"),
                this.setState(d.AdClientState.loaded);
                var n = new google.ima.AdsRenderingSettings;
                n.loadVideoTimeout = 15e3,
                this.adManager = e.getAdsManager(this.videoElement, n);
                var a = function() {
                    t.adLoader.contentComplete()
                };
                for (var r in this.adManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdError),
                this.adManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, (function() {
                    t.log("onContentPauseRequested"),
                    t.setVolume(t.volume),
                    t.adapter.removeListener(u.PLAYER_EVENTS.complete, a),
                    t.adapter.pause()
                }
                )),
                this.adManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, (function() {
                    t.log("onContentResumeRequested"),
                    t.adapter.on(u.PLAYER_EVENTS.complete, a),
                    t.adapter.play()
                }
                )),
                this.adManager.addEventListener(google.ima.AdEvent.Type.STARTED, (function(e) {
                    t.log("AdEvent.Type.STARTED");
                    var n = e.getAd();
                    t.setState(d.AdClientState.playing),
                    t.emit(u.PLAYER_EVENTS.adStart, t.getAdPodInfo(n)),
                    t.emit(u.PLAYER_EVENTS.adPlay),
                    t.startProgressInterval(n)
                }
                )),
                this.adManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, (function(e) {
                    var n = e.getAd();
                    t.log("AdEvent.Type.COMPLETE"),
                    t.setState(d.AdClientState.paused),
                    t.emit(u.PLAYER_EVENTS.adComplete, t.getAdPodInfo(n)),
                    t.clearProgressInterval()
                }
                )),
                this.adManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, (function() {
                    t.log("AdEvent.Type.ALL_ADS_COMPLETED"),
                    t.setState(d.AdClientState.completed),
                    t.emit(u.PLAYER_EVENTS.adPodComplete),
                    t.reset()
                }
                )),
                this.adManager.addEventListener(google.ima.AdEvent.Type.AD_METADATA, (function() {
                    for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                    t.log("AD_METADATA event", e)
                }
                )),
                this.adManager.addEventListener(google.ima.AdEvent.Type.PAUSED, (function() {
                    t.setState(d.AdClientState.paused),
                    t.emit(u.PLAYER_EVENTS.adPause),
                    t.log("AD PAUSED event")
                }
                )),
                this.adManager.addEventListener(google.ima.AdEvent.Type.RESUMED, (function() {
                    t.setState(d.AdClientState.playing),
                    t.emit(u.PLAYER_EVENTS.adPlay),
                    t.log("AD RESUMED event")
                }
                )),
                this.adManager.addEventListener(google.ima.AdEvent.Type.CLICK, (function(e) {
                    var n = e.getAd().clickThroughUrl;
                    t.emit(u.PLAYER_EVENTS.adClick, n),
                    t.log("AD CLICK event")
                }
                )),
                window.addEventListener("resize", this.onResize),
                u.FULLSCREEN_CHANGE_EVENTS)
                    document.addEventListener(u.FULLSCREEN_CHANGE_EVENTS[r], this.onResize);
                var i = this.videoElement.getBoundingClientRect()
                  , o = i.width
                  , s = i.height;
                try {
                    this.adManager.init(o, s, google.ima.ViewMode.NORMAL),
                    this.adManager.start()
                } catch (e) {
                    this.log("adManager start error", e),
                    this.handleException(e, "adManager start error")
                }
            }
            ,
            t.prototype.handleException = function(e, t) {
                this.setState(d.AdClientState.errored),
                this.emit(u.PLAYER_EVENTS.adError, {
                    message: e.message,
                    type: t,
                    tag: this.tag
                }),
                this.remove(),
                this.adapter.play()
            }
            ,
            t.prototype.onAdError = function(e) {
                var t = e.getError();
                if (this.log("onAdError", t),
                t.getType() === google.ima.AdError.Type.AD_LOAD && t.getErrorCode() === google.ima.AdError.ErrorCode.VAST_EMPTY_RESPONSE)
                    return this.setState(d.AdClientState.completed),
                    this.emit(u.PLAYER_EVENTS.adPodEmpty),
                    this.reset(),
                    void this.adapter.play();
                this.setState(d.AdClientState.errored),
                this.emit(u.PLAYER_EVENTS.adError, this.getAdError(t)),
                this.remove(),
                this.adapter.play()
            }
            ,
            t.prototype.getAdError = function(e) {
                return {
                    message: e.getMessage(),
                    type: e.getType(),
                    code: e.getErrorCode(),
                    vastErrorCode: e.getVastErrorCode(),
                    tag: this.tag
                }
            }
            ,
            t.prototype.onResize = function() {
                var e, t = this.videoElement.getBoundingClientRect(), n = t.width, a = t.height;
                null === (e = this.adManager) || void 0 === e || e.resize(n, a, google.ima.ViewMode.NORMAL)
            }
            ,
            t.prototype.requestAds = function(e) {
                var t = e.adTagUrl
                  , n = e.adResponse
                  , a = new google.ima.AdsRequest
                  , r = this.videoElement.getBoundingClientRect()
                  , i = r.width
                  , o = r.height;
                if (t)
                    a.adTagUrl = t;
                else {
                    if (!n)
                        throw new Error("No valid ad tag url or ad response for ad request.");
                    a.adsResponse = n
                }
                a.linearAdSlotWidth = i,
                a.linearAdSlotHeight = o,
                a.nonLinearAdSlotWidth = i,
                a.nonLinearAdSlotHeight = o,
                this.log("AdClient requestAds", a),
                this.adLoader.requestAds(a)
            }
            ,
            t.prototype.startProgressInterval = function(e) {
                var t = this;
                e.isLinear() && (this.progressInterval = setInterval((function() {
                    if (t.getState() === d.AdClientState.playing) {
                        var n = t.getAdPodInfo(e)
                          , a = n.ad.duration
                          , r = n.adSequence
                          , i = n.adsCount
                          , o = n.adPosition;
                        t.emit(u.PLAYER_EVENTS.adTime, {
                            position: o,
                            duration: a,
                            sequence: r,
                            podcount: i
                        })
                    }
                }
                ), 250))
            }
            ,
            t.prototype.clearProgressInterval = function() {
                clearInterval(this.progressInterval)
            }
            ,
            t.prototype.reset = function() {
                this.adManager && this.adManager.destroy(),
                this.adLoader && this.adLoader.contentComplete()
            }
            ,
            i([l.boundMethod], t.prototype, "onAdsManagerLoaded", null),
            i([l.boundMethod], t.prototype, "onAdError", null),
            i([l.boundMethod], t.prototype, "onResize", null),
            t
        }(c.EventEmitter);
        t.default = h
    },
    1676: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.set = t.get = void 0,
        t.get = function(e) {
            var t = localStorage.getItem(e);
            return null === t ? t : JSON.parse(t)
        }
        ,
        t.set = function(e, t) {
            localStorage.setItem(e, JSON.stringify(t))
        }
    },
    1677: function(e, t, n) {
        
    },
    1678: function(e, t, n) {
        
    },
    1679: function(e, t, n) {
        
    },
    1680: function(e, t, n) {
        
    },
    1681: function(e, t, n) {
        
    },
    1682: function(e, t, n) {
        "use strict";
        var a = n(1)
          , r = n(0)
          , i = n.n(r);
        var o = i.a.memo((function(e) {
            return i.a.createElement("svg", Object(a.__assign)({
                width: "1em",
                height: "1em",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), i.a.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H12.4124V14.0363H10.3262C10.1461 14.0363 10 13.8903 10 13.71V11.0795C10 10.8993 10.146 10.7531 10.3262 10.7531H12.4124V8.93762C12.4124 6.54552 13.9188 5 16.2498 5L18.3247 5.00333C18.5046 5.00366 18.6504 5.14964 18.6504 5.32958V7.77211C18.6504 7.95222 18.5044 8.09836 18.3243 8.09836L16.9266 8.09886C15.963 8.09886 15.7868 8.47438 15.7868 9.2141V10.7531H18.2268C18.3133 10.7531 18.3966 10.7876 18.4577 10.8488C18.5188 10.9101 18.5532 10.993 18.5532 11.0795L18.5522 13.71C18.5522 13.8903 18.4062 14.0363 18.226 14.0363H15.7868V22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6Z",
                fill: "currentColor"
            }))
        }
        ));
        t.a = o
    },
    1683: function(e, t, n) {
        "use strict";
        var a = n(1)
          , r = n(0)
          , i = n.n(r);
        var o = i.a.memo((function(e) {
            return i.a.createElement("svg", Object(a.__assign)({
                width: "1em",
                height: "1em",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), i.a.createElement("path", {
                d: "M22 5.89415C21.2563 6.21538 20.4637 6.42831 19.6375 6.53169C20.4875 6.032 21.1363 5.24677 21.4412 4.30031C20.6488 4.76554 19.7738 5.09415 18.8412 5.27754C18.0887 4.48862 17.0162 4 15.8462 4C13.5763 4 11.7487 5.81415 11.7487 8.03815C11.7487 8.35815 11.7762 8.66585 11.8438 8.95877C8.435 8.79508 5.41875 7.18646 3.3925 4.736C3.03875 5.34031 2.83125 6.032 2.83125 6.77662C2.83125 8.17477 3.5625 9.41415 4.6525 10.1317C3.99375 10.1194 3.3475 9.93108 2.8 9.63446C2.8 9.64677 2.8 9.66277 2.8 9.67877C2.8 11.6406 4.22125 13.2702 6.085 13.6455C5.75125 13.7354 5.3875 13.7785 5.01 13.7785C4.7475 13.7785 4.4825 13.7637 4.23375 13.7095C4.765 15.3083 6.2725 16.4837 8.065 16.5218C6.67 17.5963 4.89875 18.2437 2.98125 18.2437C2.645 18.2437 2.3225 18.2289 2 18.1883C3.81625 19.3415 5.96875 20 8.29 20C15.835 20 19.96 13.8462 19.96 8.512C19.96 8.33354 19.9538 8.16123 19.945 7.99015C20.7588 7.42154 21.4425 6.71138 22 5.89415Z",
                fill: "currentColor"
            }))
        }
        ));
        t.a = o
    },
    1684: function(e, t, n) {
        
    },
    1685: function(e, t, n) {
        
    },
    1686: function(e, t, n) {
        
    },
    1687: function(e, t, n) {
        
    },
    1688: function(e, t, n) {
        
    },
    1689: function(e, t, n) {
        
    },
    1690: function(e, t, n) {
        
    },
    1691: function(e, t, n) {
        
    },
    1692: function(e, t, n) {
        
    },
    1696: function(e, t, n) {
        
    },
    1701: function(e, t, n) {
        
    },
    1702: function(e, t, n) {
        e.exports = n.p + "img/856133f98253.gif"
    },
    1703: function(e, t, n) {
        e.exports = n.p + "img/8bc51f3678b5.gif"
    },
    1704: function(e, t, n) {
        e.exports = n.p + "img/3b752ad901c0.gif"
    },
    1705: function(e, t, n) {
        e.exports = n.p + "img/a1d77e055e5f.gif"
    },
    1706: function(e, t, n) {
        
    },
    1707: function(e, t, n) {
        
    },
    1709: function(e, t, n) {
        
    },
    1710: function(e, t, n) {
        
    },
    1711: function(e, t, n) {
        e.exports = n.p + "img/46fa04e51169.png"
    },
    1712: function(e, t, n) {
        e.exports = n.p + "img/f30432f7ff8d.png"
    },
    1713: function(e, t, n) {
        
    },
    1720: function(e, t, n) {
        
    },
    1721: function(e, t, n) {
        
    },
    1722: function(e, t, n) {
        
    },
    1778: function(e, t, n) {
        
    },
    1779: function(e, t, n) {
        
    },
    1825: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n(9)
          , r = n.n(a)
          , i = n(217)
          , o = n.n(i)
          , s = n(1599)
          , l = n.n(s)
          , c = n(1715)
          , u = n.n(c)
          , d = n(1)
          , p = n(557)
          , m = n(322)
          , h = n(206)
          , v = n(149)
          , f = n.n(v)
          , E = n(241)
          , g = n.n(E)
          , y = n(437)
          , b = n.n(y)
          , C = n(4)
          , _ = n.n(C)
          , A = n(33)
          , S = n.n(A)
          , T = n(34)
          , O = n.n(T)
          , R = n(1635)
          , M = n.n(R)
          , P = n(423)
          , w = n(5)
          , L = n(32)
          , N = n(13)
          , I = n(326)
          , k = n(442)
          , D = n(23)
          , j = Object(I.a)("HlsUtility")
          , x = ["IDLE", "STOPPED"]
          , V = function(e) {
            switch (e) {
            case M.a.ErrorTypes.NETWORK_ERROR:
                return L.l.NETWORK;
            case M.a.ErrorTypes.MEDIA_ERROR:
                return L.l.MEDIA;
            case M.a.ErrorTypes.KEY_SYSTEM_ERROR:
                return L.l.DRM;
            default:
                return L.l.OTHER
            }
        }
          , U = (function() {
            function e(t) {
                var n = this;
                S()(this, e),
                this.detectHDCPIncompliance = function() {
                    if (n.videoElement.error)
                        ;
                }
                ,
                this.removeUnusedAudioVideoBufferSegments = function() {
                    try {
                        var e = n.videoElement.buffered;
                        if (e.length <= 1)
                            return;
                        for (var t = n.videoElement.currentTime, a = 0; a < e.length; a++) {
                            var r = e.start(a)
                              , i = e.end(a);
                            if (t > i || t < r) {
                                var o = n.hls.coreComponents[4].sourceBuffer;
                                o && (o.video.updating || o.video.remove(r, i),
                                o.audio.updating || o.audio.remove(r, i))
                            }
                        }
                    } catch (e) {
                        j("==== Buffer Removal Failure  ===", e),
                        N.a.error(e, "Buffer Removal Failure")
                    }
                }
                ;
                var a = t.url
                  , r = t.videoElement
                  , i = t.playerWrapper
                  , o = t.hdcpVersion
                  , s = t.shouldRemoveUsedBufferOnHls
                  , l = t.relyOnAutoplayAttribute
                  , c = t.autoStart
                  , u = t.hlsProps
                  , d = void 0 === u ? {} : u
                  , p = _()({
                    enableWorker: !1,
                    maxBufferLength: 20,
                    maxMaxBufferLength: 60,
                    debug: !1
                }, Object(P.a)(d && d.emeEnabled, o));
                this.shouldRemoveUsedBufferOnHls = s,
                this.relyOnAutoplayAttribute = l,
                this.autoStart = c,
                this.hls = new M.a(_()({}, p, d)),
                this.url = a,
                this.videoElement = r,
                this.playerWrapper = i,
                this.emeEnabled = d.emeEnabled,
                this.manifestLoadingRetry = 0,
                this._setup(),
                this.setupBufferCleanerTimer(),
                this.attachHlsEvents()
            }
            var t;
            O()(e, [{
                key: "_setup",
                value: function() {
                    var e = this;
                    this.hls.once(M.a.Events.MEDIA_ATTACHED, (function() {
                        e.loadSource()
                    }
                    )),
                    this.emeEnabled && this.videoElement.addEventListener("error", this.detectHDCPIncompliance),
                    this.attachMedia()
                }
            }, {
                key: "loadSource",
                value: function() {
                    this.hls.loadSource(this.url),
                    this.relyOnAutoplayAttribute || this.autoStart && this.videoElement.play()
                }
            }, {
                key: "attachMedia",
                value: function() {
                    this.hls.attachMedia(this.videoElement)
                }
            }, {
                key: "attachHlsEvents",
                value: function() {
                    var e = this;
                    this.hls.on(M.a.Events.ERROR, (function(t, n) {
                        var a = n.type
                          , r = n.details
                          , i = n.fatal;
                        if ([M.a.ErrorDetails.KEY_SYSTEM_INVALID_HDCP_VERSION, M.a.ErrorDetails.KEY_SYSTEM_LICENSE_INVALID_STATUS].includes(r) ? e.playerWrapper.emit(w.TUBI_PLAYER_EVENTS.error, {
                            type: L.l.DRM,
                            message: L.k.HDCP_INCOMPLIANCE,
                            fatal: !0
                        }, e.url) : e.playerWrapper.emit(w.TUBI_PLAYER_EVENTS.error, {
                            type: V(a),
                            message: r,
                            fatal: i
                        }, e.url),
                        i) {
                            if (N.a.error(n, L.c),
                            Object(k.i)(r))
                                return;
                            switch (a) {
                            case M.a.ErrorTypes.NETWORK_ERROR:
                                r === M.a.ErrorDetails.MANIFEST_LOAD_TIMEOUT ? e.manifestLoadingRetry < 1 ? (e.manifestLoadingRetry++,
                                Object(D.l)({
                                    videoUrl: e.url,
                                    retry: e.manifestLoadingRetry
                                }),
                                e.loadSource()) : (Object(D.l)({
                                    videoUrl: e.url,
                                    retry: e.manifestLoadingRetry,
                                    result: !1
                                }),
                                e.destroy()) : e.hls.startLoad();
                                break;
                            case M.a.ErrorTypes.MEDIA_ERROR:
                                e.hls.recoverMediaError();
                                break;
                            default:
                                e.destroy()
                            }
                        }
                    }
                    )),
                    this.hls.on(M.a.Events.MANIFEST_LOADED, (function() {
                        0 !== e.manifestLoadingRetry && (Object(D.l)({
                            videoUrl: e.url,
                            retry: e.manifestLoadingRetry,
                            result: !0
                        }),
                        e.manifestLoadingRetry = 0)
                    }
                    )),
                    this.shouldRemoveUsedBufferOnHls && this.hls.on(M.a.Events.BUFFER_APPENDED, (function() {
                        var t = b()(e.hls.networkControllers, 3)
                          , n = t[1]
                          , a = t[2];
                        if (n.fragPlaying && x.includes(n.state) && x.includes(a.state)) {
                            var r = n.fragPlaying.start - 1;
                            n.state = "BUFFER_FLUSHING",
                            e.hls.trigger(M.a.Events.BUFFER_FLUSHING, {
                                startOffset: 0,
                                endOffset: r
                            }),
                            a.state = "BUFFER_FLUSHING",
                            e.hls.trigger(M.a.Events.BUFFER_FLUSHING, {
                                startOffset: 0,
                                endOffset: r,
                                type: "audio"
                            })
                        }
                    }
                    ))
                }
            }, {
                key: "setupBufferCleanerTimer",
                value: function() {
                    this.bufferCleanupIntervalTimer = setInterval(this.removeUnusedAudioVideoBufferSegments, 1e4)
                }
            }, {
                key: "destroy",
                value: (t = g()(f.a.mark((function e() {
                    var t = this;
                    return f.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!this.isDestroyed) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                if (this.isDestroyed = !0,
                                clearInterval(this.bufferCleanupIntervalTimer),
                                this.emeEnabled && this.videoElement.removeEventListener("error", this.detectHDCPIncompliance),
                                this.emeEnabled) {
                                    e.next = 9;
                                    break
                                }
                                return this.hls.destroy(),
                                this.hls = null,
                                e.abrupt("return");
                            case 9:
                                return e.abrupt("return", new r.a((function(e, n) {
                                    var a = void 0
                                      , r = function() {
                                        clearTimeout(a),
                                        t.hls = null,
                                        e()
                                    };
                                    t.hls.destroy(),
                                    t.hls.on(M.a.Events.EME_DESTROYED, r),
                                    a = setTimeout((function() {
                                        t.hls.off(M.a.Events.EME_DESTROYED, r),
                                        t.hls = null,
                                        n(new Error("HlsUtility destroy timeout."))
                                    }
                                    ), 5e3)
                                }
                                )));
                            case 10:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this)
                }
                ))),
                function() {
                    return t.apply(this, arguments)
                }
                )
            }])
        }(),
        function(e) {
            var t = e.ExternalHls
              , a = e.useHlsNext;
            return function(e) {
                function t(t) {
                    var r = e.call(this, t) || this;
                    return n.e(27).then(n.bind(null, 1836)).then((function(e) {
                        var t = (0,
                        e.manifestPreloader)({
                            useHlsNext: a
                        })
                          , n = r.load.bind(r);
                        r.load = function(e, a, i) {
                            return Object(d.__awaiter)(r, void 0, void 0, (function() {
                                var r, o, s, l, c;
                                return Object(d.__generator)(this, (function(u) {
                                    switch (u.label) {
                                    case 0:
                                        if (o = (r = e).type,
                                        s = r.url,
                                        "manifest" !== o || !t.isKnown(s))
                                            return [3, 4];
                                        l = t.getPromiseFor(s),
                                        u.label = 1;
                                    case 1:
                                        return u.trys.push([1, 3, , 4]),
                                        [4, l];
                                    case 2:
                                        return (c = u.sent()) && c.length ? (i.onSuccess.apply(i, c),
                                        [2]) : [3, 4];
                                    case 3:
                                        return u.sent(),
                                        n(e, a, i),
                                        [2];
                                    case 4:
                                        return n(e, a, i),
                                        [2]
                                    }
                                }
                                ))
                            }
                            ))
                        }
                    }
                    )),
                    r
                }
                return Object(d.__extends)(t, e),
                t
            }(t.DefaultConfig.loader)
        }
        )
          , B = n(655)
          , H = ["captions", "subtitles"]
          , Y = function(e) {
            function t(n) {
                var a = e.call(this) || this;
                a.state = h.State.idle,
                a.fps = 0,
                a.totalDroppedFrames = 0,
                a.textTrackSet = new u.a,
                a.getPlayer = function() {
                    return a.player
                }
                ,
                a.emitReady = function() {
                    a.emit(w.TUBI_PLAYER_EVENTS.ready)
                }
                ,
                a.emitTime = function() {
                    a.emit(w.TUBI_PLAYER_EVENTS.time, {
                        position: a.getPosition()
                    })
                }
                ,
                a.emitPlay = function() {
                    a.emit(w.TUBI_PLAYER_EVENTS.play),
                    a.setState(h.State.playing)
                }
                ,
                a.emitPlaying = function() {
                    a.emitPlay()
                }
                ,
                a.emitPause = function() {
                    a.setState(h.State.paused),
                    a.emit(w.TUBI_PLAYER_EVENTS.pause)
                }
                ,
                a.onBufferAppended = function() {
                    var e = a.videoElement
                      , t = e.buffered
                      , n = e.currentTime;
                    0 !== t.length && a.emit(w.TUBI_PLAYER_EVENTS.bufferChange, {
                        bufferPercent: 100,
                        position: n,
                        duration: t.end(t.length - 1)
                    })
                }
                ,
                a.bindEvents = function(e) {
                    var n, r, i, o, s, l, c, u, d, p, m, h, v, f, E, g, y, b, C, _, A;
                    void 0 === e && (e = !1);
                    var S = a.eventHandlers
                      , T = S.waitingHandler
                      , O = void 0 === T ? function() {}
                    : T
                      , R = S.canplayHandler
                      , M = void 0 === R ? function() {}
                    : R
                      , P = e ? "off" : "on"
                      , w = e ? "removeEventListener" : "addEventListener";
                    if (a.player && t.Hls) {
                        var L = t.Hls.Events
                          , I = a.player[P];
                        I.call(a.player, L.FRAG_PARSED, a.updateFPS),
                        I.call(a.player, L.FPS_DROP, a.updateTotalDroppedFrames),
                        I.call(a.player, L.MANIFEST_PARSED, a.emitReady),
                        I.call(a.player, L.ERROR, a.hlsErrorHandler),
                        null === (n = a.videoElement) || void 0 === n || n[w]("timeupdate", a.emitTime),
                        null === (r = a.videoElement) || void 0 === r || r[w]("error", a.nativeErrorHandler),
                        a.shouldReportBufferChange && I.call(a.player, L.BUFFER_APPENDED, a.onBufferAppended)
                    } else
                        N.a.error(a.player + " or " + t.Hls + " do not exist");
                    null === (s = null === (o = null === (i = a.videoElement) || void 0 === i ? void 0 : i.textTracks) || void 0 === o ? void 0 : o[w]) || void 0 === s || s.call(o, "change", a.captionsListChange),
                    null === (u = null === (c = null === (l = a.videoElement) || void 0 === l ? void 0 : l.textTracks) || void 0 === c ? void 0 : c[w]) || void 0 === u || u.call(c, "addtrack", a.textTrackListChangeHandler),
                    null === (m = null === (p = null === (d = a.videoElement) || void 0 === d ? void 0 : d.textTracks) || void 0 === p ? void 0 : p[w]) || void 0 === m || m.call(p, "removetrack", a.textTrackListChangeHandler),
                    null === (v = null === (h = a.videoElement) || void 0 === h ? void 0 : h[w]) || void 0 === v || v.call(h, "playing", a.emitPlaying),
                    null === (E = null === (f = a.videoElement) || void 0 === f ? void 0 : f[w]) || void 0 === E || E.call(f, "play", a.emitPlay),
                    null === (y = null === (g = a.videoElement) || void 0 === g ? void 0 : g[w]) || void 0 === y || y.call(g, "pause", a.emitPause),
                    null === (C = null === (b = a.videoElement) || void 0 === b ? void 0 : b[w]) || void 0 === C || C.call(b, "waiting", O),
                    null === (A = null === (_ = a.videoElement) || void 0 === _ ? void 0 : _[w]) || void 0 === A || A.call(_, "canplay", M)
                }
                ,
                a.captionsListChange = function() {
                    a.emit(w.TUBI_PLAYER_EVENTS.captionsListChange)
                }
                ,
                a.nativeErrorHandler = function() {
                    var e = a.eventHandlers.reload;
                    a.emit(w.TUBI_PLAYER_EVENTS.error, a.videoElement.error || {});
                    var t = a.videoElement.error || {
                        code: -1
                    }
                      , n = t.code;
                    n && n > 2 && "function" == typeof e && e(t)
                }
                ,
                a.hlsErrorHandler = function(e, n) {
                    var r, i = n.type, o = n.details, s = n.fatal, l = a.eventHandlers.reload, c = {
                        code: i,
                        type: V(i),
                        message: o,
                        fatal: s
                    };
                    a.emit(w.TUBI_PLAYER_EVENTS.error, c, a.mediaUrl),
                    s && "function" == typeof l && l(c, {
                        needReattach: i === (null === (r = t.Hls) || void 0 === r ? void 0 : r.ErrorTypes.MEDIA_ERROR)
                    })
                }
                ,
                a.updateFPS = function() {
                    var e, t = a.videoElement;
                    if ("function" == typeof t.getVideoPlaybackQuality) {
                        var n = t.getVideoPlaybackQuality();
                        a.fps = n.totalVideoFrames
                    } else
                        a.fps = null !== (e = a.videoElement.webkitDecodedFrameCount) && void 0 !== e ? e : -1
                }
                ,
                a.updateTotalDroppedFrames = function(e, t) {
                    a.totalDroppedFrames = t.totalDroppedFrames
                }
                ,
                a.textTrackListChangeHandler = function() {
                    "string" == typeof a.currentLanguage && a.setCaptions(a.currentLanguage)
                }
                ,
                a.play = function() {
                    var e;
                    null === (e = a.videoElement) || void 0 === e || e.play()
                }
                ,
                a.pause = function() {
                    var e;
                    null === (e = a.videoElement) || void 0 === e || e.pause()
                }
                ,
                a.stop = function() {}
                ,
                a.getPosition = function() {
                    var e;
                    return (null === (e = a.videoElement) || void 0 === e ? void 0 : e.currentTime) || 0
                }
                ,
                a.config = n;
                var r = n.videoElement
                  , i = n.eventHandlers
                  , o = void 0 === i ? {} : i
                  , s = n.shouldReportBufferChange
                  , l = void 0 !== s && s
                  , c = n.mediaUrl
                  , d = n.useHlsNext
                  , p = void 0 !== d && d;
                return a.videoElement = r,
                a.eventHandlers = o,
                a.mediaUrl = c,
                a.shouldReportBufferChange = l,
                a.useHlsNext = p,
                a
            }
            return Object(d.__extends)(t, e),
            t.prototype.setup = function() {
                return Object(d.__awaiter)(this, void 0, void 0, (function() {
                    var e, n, a, r, i, o, s, l, c;
                    return Object(d.__generator)(this, (function(u) {
                        switch (u.label) {
                        case 0:
                            return u.trys.push([0, 3, , 4]),
                            e = this.config,
                            n = e.mediaUrl,
                            a = void 0 === n ? "" : n,
                            r = e.videoElement,
                            i = e.debug,
                            o = void 0 !== i && i,
                            s = e.shouldRemoveUsedBuffer,
                            l = void 0 !== s && s,
                            t.Hls ? [3, 2] : [4, t.loadScript(this.config)];
                        case 1:
                            u.sent(),
                            u.label = 2;
                        case 2:
                            return c = new t.Hls(Object(d.__assign)(Object(d.__assign)({
                                pLoader: U({
                                    ExternalHls: t.Hls,
                                    useHlsNext: this.useHlsNext
                                }),
                                debug: o,
                                enableWorker: !1,
                                maxBufferLength: 20,
                                maxMaxBufferLength: 60
                            }, Object(P.a)(!1)), {
                                shouldRemoveUsedBuffer: l,
                                backBufferLength: l ? 15 : 1 / 0
                            })),
                            N.a.info("Player Created"),
                            this.player = c,
                            this.loadSource(a),
                            this.attachMedia(r),
                            this.bindEvents(),
                            [3, 4];
                        case 3:
                            return u.sent(),
                            N.a.warn("Failed to load hls.js"),
                            [3, 4];
                        case 4:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.getBitrate = function() {
                if (!this.player)
                    return -1;
                if (void 0 !== this.player.bandwidthEstimate)
                    return this.player.bandwidthEstimate;
                var e = this.player
                  , t = e.currentLevel
                  , n = e.levels
                  , a = void 0 === n ? [] : n
                  , r = e.abrController._bwEstimator;
                if (!r)
                    return -1 !== t && a[t] ? a[t].bitrate : -1;
                var i = r.getEstimate();
                return l()(i) ? -1 : i
            }
            ,
            t.prototype.loadSource = function(e) {
                var t;
                null === (t = this.player) || void 0 === t || t.loadSource(e)
            }
            ,
            t.prototype.attachMedia = function(e) {
                var t;
                null === (t = this.player) || void 0 === t || t.attachMedia(e)
            }
            ,
            t.prototype.getActiveCaptions = function(e) {
                var t, n = o()((null === (t = this.videoElement) || void 0 === t ? void 0 : t.textTracks) || []).find((function(t) {
                    var n;
                    return Object(B.a)(t, e) && (null === (n = t.activeCues) || void 0 === n ? void 0 : n.length)
                }
                ));
                if (!n)
                    return [];
                var a = n.activeCues;
                return a ? o()(a).map((function(e) {
                    return e.text
                }
                )) : []
            }
            ,
            t.prototype.setCaptions = function(e) {
                var t, n = this;
                (null === (t = this.videoElement) || void 0 === t ? void 0 : t.textTracks) && (o()(this.videoElement.textTracks).forEach((function(t) {
                    if (H.includes(t.kind))
                        if (Object(B.a)(t, e)) {
                            if ("subtitles" === t.kind && (n.textTrackSet.has(t) || (n.textTrackSet.add(t),
                            t.addEventListener("cuechange", (function() {
                                "showing" === this.mode && (this.mode = "hidden")
                            }
                            )))),
                            "hidden" !== t.mode) {
                                if ("subtitles" === t.kind && "disabled" === t.mode) {
                                    n.videoElement.textTracks.addEventListener("change", (function e() {
                                        t.mode = "hidden",
                                        n.videoElement.textTracks.removeEventListener("change", e)
                                    }
                                    ))
                                }
                                t.mode = "hidden"
                            }
                        } else
                            "disabled" !== t.mode && (t.mode = "disabled")
                }
                )),
                this.currentLanguage !== e && (this.emit(w.TUBI_PLAYER_EVENTS.subtitleChange, e),
                this.currentLanguage = e))
            }
            ,
            t.prototype.setVolume = function(e) {
                this.setMute(!1),
                this.videoElement.volume = e / 100
            }
            ,
            t.prototype.getVolume = function() {
                return Math.floor(100 * this.videoElement.volume)
            }
            ,
            t.prototype.setState = function(e) {
                this.state = e
            }
            ,
            t.prototype.getState = function() {
                return this.state
            }
            ,
            t.prototype.getDuration = function() {
                return 1 / 0
            }
            ,
            t.prototype.remove = function() {
                var e;
                return Object(d.__awaiter)(this, void 0, void 0, (function() {
                    return Object(d.__generator)(this, (function(t) {
                        return this.player && this.player.detachMedia(),
                        null === (e = this.player) || void 0 === e || e.destroy(),
                        this.setState(h.State.destroyed),
                        [2]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.seek = function() {}
            ,
            t.prototype.getAdUrl = function() {}
            ,
            t.prototype.isAd = function() {
                return !1
            }
            ,
            t.prototype.playAdTag = function(e) {
                return e
            }
            ,
            t.prototype.getCaptions = function() {
                return 0
            }
            ,
            t.prototype.getCaptionsList = function() {
                return []
            }
            ,
            t.prototype.setMute = function(e) {
                this.videoElement.muted = e
            }
            ,
            t.prototype.getMute = function() {
                return this.videoElement.muted
            }
            ,
            t.loadScript = function(e) {
                return void 0 === e && (e = {}),
                Object(d.__awaiter)(void 0, void 0, r.a, (function() {
                    var n, a;
                    return Object(d.__generator)(this, (function(i) {
                        return n = (null === (a = e.extraOptions) || void 0 === a ? void 0 : a.externalHlsResolver) ? e.extraOptions.externalHlsResolver.then((function(e) {
                            t.Hls = e
                        }
                        )) : p.resolvers.resolveHlsSDK().then((function() {
                            t.Hls = window.Hls
                        }
                        )),
                        [2, r.a.all([n])]
                    }
                    ))
                }
                ))
            }
            ,
            t.getExternalHls = function() {
                return t.Hls
            }
            ,
            t
        }(m.EventEmitter);
        t.default = Y
    },
    1830: function(e, t, n) {
        "use strict";
        var a = n(1)
          , r = n(0)
          , i = n.n(r);
        var o = i.a.memo((function(e) {
            return i.a.createElement("svg", Object(a.__assign)({
                width: "1em",
                height: "1em",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), i.a.createElement("path", {
                d: "M20.729 7.83799L9.86101 18.707C9.66601 18.902 9.41001 19 9.15401 19C8.89801 19 8.64201 18.902 8.44701 18.707L4.29301 14.554C3.90201 14.163 3.90201 13.531 4.29301 13.14C4.68301 12.749 5.31601 12.749 5.70701 13.14L9.15401 16.586L19.315 6.42399C19.706 6.03299 20.338 6.03299 20.729 6.42399C21.12 6.81499 21.12 7.44799 20.729 7.83799Z",
                fill: "currentColor"
            }))
        }
        ));
        t.a = o
    },
    1837: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "mapStateToProps", (function() {
            return Fa
        }
        )),
        n.d(t, "rawComponent", (function() {
            return Ga
        }
        ));
        var a = n(9)
          , r = n.n(a)
          , i = n(4)
          , o = n.n(i)
          , s = n(12)
          , l = n.n(s)
          , c = n(37)
          , u = n.n(c)
          , d = n(33)
          , p = n.n(d)
          , m = n(34)
          , h = n.n(m)
          , v = n(28)
          , f = n.n(v)
          , E = n(38)
          , g = n.n(E)
          , y = n(1540)
          , b = n(17)
          , C = n(8)
          , _ = n.n(C)
          , A = n(690)
          , S = n(3)
          , T = n.n(S)
          , O = n(0)
          , R = n.n(O)
          , M = n(440)
          , P = n(19)
          , w = n(1591)
          , L = n(124)
          , N = n(219)
          , I = n(66)
          , k = n(116)
          , D = n(5)
          , j = n(155)
          , x = n(417)
          , V = n(681)
          , U = n(13)
          , B = n(683)
          , H = n(689)
          , Y = n(218)
          , F = n(1536)
          , W = n(1)
          , G = n(326)
          , q = function() {
            function e(e) {
                void 0 === e && (e = {}),
                this.options = e,
                this.log = e.debug ? Object(G.a)("AdBlockerDetector") : function() {}
            }
            return e.prototype.check = function() {
                return Object(W.__awaiter)(this, void 0, r.a, (function() {
                    var e;
                    return Object(W.__generator)(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, this.checkOnetime()];
                        case 1:
                            return (e = t.sent()) ? [2, e] : [4, new r.a((function(e) {
                                return setTimeout(e, 1e4)
                            }
                            ))];
                        case 2:
                            return t.sent(),
                            [2, this.checkOnetime()]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.checkOnetime = function() {
                return r.a.all([this.checkByBlockAdBlock(), this.checkByRequestBait()]).then((function(e) {
                    return e.some(Boolean)
                }
                ))
            }
            ,
            e.prototype.checkByBlockAdBlock = function() {
                var e = this;
                return void 0 !== window.blockAdBlock && "function" != typeof window.blockAdBlock.setOption && (window.blockAdBlock = null,
                window.blockAdBlock = void 0),
                n(1646),
                new r.a((function(t) {
                    var n = window.blockAdBlock;
                    if (void 0 === n)
                        return e.log("BlockAdBlock script isn't loaded, it should be caused by ad blockers"),
                        void t(!0);
                    n.setOption({
                        resetOnEnd: !0,
                        debug: e.options.debug
                    }),
                    n.onDetected((function() {
                        return t(!0)
                    }
                    )),
                    n.onNotDetected((function() {
                        return t(!1)
                    }
                    )),
                    n.check()
                }
                ))
            }
            ,
            e.prototype.checkByRequestBait = function() {
                var t = this;
                return fetch(e.AD_BLOCK_BAIT_URL).then((function() {
                    return !1
                }
                ), (function(e) {
                    return t.log("Error happens when requesting bait", e),
                    !0
                }
                ))
            }
            ,
            e.AD_BLOCK_BAIT_URL = "https://cdn.adrise.tv/js/ads.js",
            e
        }()
          , K = n(266)
          , z = n(679)
          , Q = n(263)
          , Z = n(178)
          , X = n(88)
          , J = n(93)
          , $ = n(518)
          , ee = n.n($)
          , te = n(439)
          , ne = n(1532)
          , ae = n(312)
          , re = n(72)
          , ie = n(45)
          , oe = n.n(ie)
          , se = n(680)
          , le = n.n(se)
          , ce = n(441)
          , ue = n.n(ce)
          , de = n(855)
          , pe = n(856)
          , me = n(30)
          , he = n(27)
          , ve = n(1541)
          , fe = n(32)
          , Ee = n(24)
          , ge = n(446)
          , ye = n(859)
          , be = n(426)
          , Ce = n(517)
          , _e = n(137)
          , Ae = n(1593)
          , Se = n(16)
          , Te = n(1539)
          , Oe = n(68)
          , Re = n(520)
          , Me = n(442)
          , Pe = n(23)
          , we = n(21)
          , Le = n(44)
          , Ne = n(1631)
          , Ie = n(678)
          , ke = n(11)
          , De = n(276)
          , je = n(46)
          , xe = n(49)
          , Ve = function(e) {
            return R.a.createElement(xe.a, o()({
                viewBox: "0 0 40 40"
            }, e), R.a.createElement("path", {
                d: "M20 3.33333333c9.2047458 0 16.6666667 7.46192087 16.6666667 16.66666667 0 9.2047458-7.4619209 16.6666667-16.6666667 16.6666667-9.2047458 0-16.66666667-7.4619209-16.66666667-16.6666667C3.33333333 10.7952542 10.7952542 3.33333333 20 3.33333333zm0 1.19047619C11.452736 4.52380952 4.52380952 11.452736 4.52380952 20c0 8.547264 6.92892648 15.4761905 15.47619048 15.4761905 8.547264 0 15.4761905-6.9289265 15.4761905-15.4761905 0-8.547264-6.9289265-15.47619048-15.4761905-15.47619048zm4.4271429 9.48660718l1.4730952 1.4731547-4.6020238 4.6019048L25.9002381 24.6875l-1.4732143 1.4730952-4.6019048-4.6019047-4.6019761 4.6019047L13.75 24.6875l4.6020238-4.6020238L13.75 15.4835714l1.4731429-1.4731547 4.6019761 4.6019643 4.6020239-4.6019643z"
            }))
        }
          , Ue = n(884)
          , Be = n(145)
          , He = n(1691)
          , Ye = n.n(He)
          , Fe = {
            appear: Ye.a.drmErrorModalOverlayFadeAppear,
            appearActive: Ye.a.drmErrorModalOverlayFadeAppearActive,
            appearDone: Ye.a.drmErrorModalOverlayFadeAppearDone,
            enter: Ye.a.drmErrorModalOverlayFadeEnter,
            enterActive: Ye.a.drmErrorModalOverlayFadeEnterActive,
            enterDone: Ye.a.drmErrorModalOverlayFadeEnterDone,
            exit: Ye.a.drmErrorModalOverlayFadeExit,
            exitActive: Ye.a.drmErrorModalOverlayFadeExitActive,
            exitDone: Ye.a.drmErrorModalOverlayFadeExitDone
        }
          , We = {
            appear: Ye.a.drmErrorModalContentSlideAppear,
            appearActive: Ye.a.drmErrorModalContentSlideAppearActive,
            appearDone: Ye.a.drmErrorModalContentSlideAppearDone,
            enter: Ye.a.drmErrorModalContentSlideEnter,
            enterActive: Ye.a.drmErrorModalContentSlideEnterActive,
            enterDone: Ye.a.drmErrorModalContentSlideEnterDone,
            exit: Ye.a.drmErrorModalContentSlideExit,
            exitActive: Ye.a.drmErrorModalContentSlideExitActive,
            exitDone: Ye.a.drmErrorModalContentSlideExitDone
        }
          , Ge = Object(ke.a)({
            buttonBack: {
                defaultMessage: "Back",
                id: "src/web/components/DrmErrorModal/DrmErrorModal:buttonBack"
            },
            buttonTryAgain: {
                defaultMessage: "Try Again",
                id: "src/web/components/DrmErrorModal/DrmErrorModal:buttonTryAgain"
            },
            errorContentAdditionalHelp1: {
                defaultMessage: "Additional Help",
                id: "src/web/components/DrmErrorModal/DrmErrorModal:errorContentAdditionalHelp1"
            },
            errorContentAdditionalHelp2: {
                defaultMessage: "If this persists, write to us at",
                id: "src/web/components/DrmErrorModal/DrmErrorModal:errorContentAdditionalHelp2"
            },
            errorContentDrm1: {
                defaultMessage: "We are having issues playing this protected content",
                id: "src/web/components/DrmErrorModal/DrmErrorModal:errorContentDrm1"
            },
            errorContentDrm2: {
                defaultMessage: "To fix this:",
                id: "src/web/components/DrmErrorModal/DrmErrorModal:errorContentDrm2"
            },
            errorContentDrm3: {
                defaultMessage: "Refresh the page",
                id: "src/web/components/DrmErrorModal/DrmErrorModal:errorContentDrm3"
            },
            errorContentDrm4: {
                defaultMessage: "Reset your network connection",
                id: "src/web/components/DrmErrorModal/DrmErrorModal:errorContentDrm4"
            },
            errorContentDrm5: {
                defaultMessage: "Clear your browser cache",
                id: "src/web/components/DrmErrorModal/DrmErrorModal:errorContentDrm5"
            },
            errorContentDrm6: {
                defaultMessage: "Try playing a different movie/show",
                id: "src/web/components/DrmErrorModal/DrmErrorModal:errorContentDrm6"
            },
            errorContentHdcp1: {
                defaultMessage: "It looks like HDCP isn't supported by your HDMI connection",
                id: "src/web/components/DrmErrorModal/DrmErrorModal:errorContentHdcp1"
            },
            errorContentHdcp2: {
                defaultMessage: "To fix this:",
                id: "src/web/components/DrmErrorModal/DrmErrorModal:errorContentHdcp2"
            },
            errorContentHdcp3: {
                defaultMessage: "Use a different HDMI cable that supports HDCP",
                id: "src/web/components/DrmErrorModal/DrmErrorModal:errorContentHdcp3"
            },
            errorContentHdcp4: {
                defaultMessage: "Unplug and reconnect the HDMI cable from your device and TV",
                id: "src/web/components/DrmErrorModal/DrmErrorModal:errorContentHdcp4"
            },
            errorContentHdcp5: {
                defaultMessage: "Try a different HDMI input on your TV",
                id: "src/web/components/DrmErrorModal/DrmErrorModal:errorContentHdcp5"
            },
            errorContentHdcp6: {
                defaultMessage: "Restart your device and try again",
                id: "src/web/components/DrmErrorModal/DrmErrorModal:errorContentHdcp6"
            },
            errorContentHdcp7: {
                defaultMessage: "Try another display that supports HDCP",
                id: "src/web/components/DrmErrorModal/DrmErrorModal:errorContentHdcp7"
            },
            errorContentHdcp8: {
                defaultMessage: "What is HDCP?",
                id: "src/web/components/DrmErrorModal/DrmErrorModal:errorContentHdcp8"
            },
            errorContentHdcp9: {
                defaultMessage: "High-bandwidth Digital Content Protection (HDCP) is a form of digital copy protection to prevent copying of digital, audio & video content as it plays between devices.",
                id: "src/web/components/DrmErrorModal/DrmErrorModal:errorContentHdcp9"
            },
            errorTitleDrm: {
                defaultMessage: "Digital Rights Management (DRM) Error",
                id: "src/web/components/DrmErrorModal/DrmErrorModal:errorTitleDrm"
            },
            errorTitleHdcp: {
                defaultMessage: "HDCP is required to play this content",
                id: "src/web/components/DrmErrorModal/DrmErrorModal:errorTitleHdcp"
            }
        })
          , qe = function(e) {
            var t = e.isOpen
              , n = e.onClose
              , a = e.playerErrorDetails
              , r = Object(De.a)()
              , i = Object(O.useRef)(!1)
              , o = Object(O.useRef)(0)
              , s = Object(O.useState)(!1)
              , l = s[0]
              , c = s[1]
              , u = Object(O.useCallback)((function() {
                o.current++
            }
            ), [])
              , d = Object(O.useCallback)((function() {
                o.current--,
                0 === o.current && n && n(i.current)
            }
            ), [n])
              , p = Object(Ue.a)({
                isDefaultOpen: t
            })
              , m = p.closeModal
              , h = p.Modal
              , v = p.openModal
              , f = Object(O.useCallback)((function() {
                i.current = !1,
                c(!1)
            }
            ), [c])
              , E = Object(O.useCallback)((function() {
                i.current = !0,
                c(!1)
            }
            ), [c]);
            Object(O.useEffect)((function() {
                t ? (v(),
                c(!0)) : m()
            }
            ), [c, m, v, t]);
            var g = Object(O.useCallback)((function(e) {
                e.stopPropagation()
            }
            ), []);
            return R.a.createElement(h, null, R.a.createElement("div", {
                className: Ye.a.drmErrorModalRoot
            }, R.a.createElement(je.CSSTransition, {
                appear: !0,
                classNames: Fe,
                in: l,
                onEnter: u,
                onExited: d,
                timeout: 300
            }, R.a.createElement("div", {
                className: Ye.a.drmErrorModalOverlay,
                onClick: f
            })), R.a.createElement(je.CSSTransition, {
                appear: !0,
                classNames: We,
                in: l,
                onEnter: u,
                onExited: d,
                timeout: 300
            }, R.a.createElement("div", {
                className: Ye.a.drmErrorModalDialog,
                onClick: g
            }, R.a.createElement("div", {
                className: Ye.a.drmErrorModalContent
            }, R.a.createElement("div", {
                className: Ye.a.drmErrorModalContentHead
            }, R.a.createElement("span", null, a === fe.k.HDCP_INCOMPLIANCE ? r.formatMessage(Ge.errorTitleHdcp) : r.formatMessage(Ge.errorTitleDrm)), R.a.createElement("button", {
                className: Ye.a.drmErrorModalContentHeadCloser,
                onClick: f
            }, R.a.createElement(Ve, {
                color: "inherit"
            }))), R.a.createElement("div", {
                className: Ye.a.drmErrorModalContentBody
            }, a === fe.k.HDCP_INCOMPLIANCE ? R.a.createElement("section", {
                className: Ye.a.drmErrorModalContentBodyDescription
            }, R.a.createElement("p", null, R.a.createElement("b", null, r.formatMessage(Ge.errorContentHdcp1))), R.a.createElement("p", null, R.a.createElement("b", null, r.formatMessage(Ge.errorContentHdcp2))), R.a.createElement("ul", null, R.a.createElement("li", null, r.formatMessage(Ge.errorContentHdcp3)), R.a.createElement("li", null, r.formatMessage(Ge.errorContentHdcp4)), R.a.createElement("li", null, r.formatMessage(Ge.errorContentHdcp5)), R.a.createElement("li", null, r.formatMessage(Ge.errorContentHdcp6)), R.a.createElement("li", null, r.formatMessage(Ge.errorContentHdcp7))), R.a.createElement("p", null, R.a.createElement("b", null, r.formatMessage(Ge.errorContentHdcp8))), R.a.createElement("div", null, r.formatMessage(Ge.errorContentHdcp9)), R.a.createElement("p", null, R.a.createElement("b", null, r.formatMessage(Ge.errorContentAdditionalHelp1))), R.a.createElement("div", null, r.formatMessage(Ge.errorContentAdditionalHelp2), " ", R.a.createElement("a", {
                href: "mailto:support@tubi.tv"
            }, "support@tubi.tv"))) : R.a.createElement("section", {
                className: Ye.a.drmErrorModalContentBodyDescription
            }, R.a.createElement("p", null, R.a.createElement("b", null, r.formatMessage(Ge.errorContentDrm1))), R.a.createElement("p", null, R.a.createElement("b", null, r.formatMessage(Ge.errorContentDrm2))), R.a.createElement("ul", null, R.a.createElement("li", null, r.formatMessage(Ge.errorContentDrm3)), R.a.createElement("li", null, r.formatMessage(Ge.errorContentDrm4)), R.a.createElement("li", null, r.formatMessage(Ge.errorContentDrm5)), R.a.createElement("li", null, r.formatMessage(Ge.errorContentDrm6))), R.a.createElement("p", null, R.a.createElement("b", null, r.formatMessage(Ge.errorContentAdditionalHelp1))), R.a.createElement("div", null, r.formatMessage(Ge.errorContentAdditionalHelp2), " ", R.a.createElement("a", {
                href: "mailto:support@tubi.tv"
            }, "support@tubi.tv"))), R.a.createElement("div", {
                className: Ye.a.drmErrorModalContentBodyButtonGroup
            }, R.a.createElement(Be.a, {
                color: "primary",
                onClick: f,
                size: "large"
            }, r.formatMessage(Ge.buttonBack)), R.a.createElement(Be.a, {
                color: "primary",
                inverse: !0,
                onClick: E,
                size: "large"
            }, r.formatMessage(Ge.buttonTryAgain)))))))))
        }
          , Ke = n(268)
          , ze = n(114)
          , Qe = n(1594)
          , Ze = n(1630)
          , Xe = n(437)
          , Je = n.n(Xe)
          , $e = n(39)
          , et = n.n($e)
          , tt = n(871)
          , nt = n(444)
          , at = n(6)
          , rt = n(76)
          , it = n.n(rt)
          , ot = n(151)
          , st = n.n(ot)
          , lt = n(206)
          , ct = n(141)
          , ut = n.n(ct)
          , dt = n(807)
          , pt = n.n(dt)
          , mt = {
            normal: "normal",
            skipped_ads: "skipped_ads",
            stalled: "stalled",
            stalledAfterRetry: "stalledAfterRetry",
            destroyed: "destroyed"
        };
        var ht, vt = "retry", ft = "overrun", Et = "waiting", gt = [375, 750, 1500, 3e3, 6e3], yt = [100, 2e3, 4e3], bt = function() {
            function e(e) {
                var t = e.videoElement
                  , n = e.getPlayerState
                  , a = e.setup
                  , r = e.shouldRetryMediaErrDecode
                  , i = void 0 !== r && r;
                this.timersMap = {},
                this.latestTimerIndex = 0,
                this.videoElement = t,
                this.getPlayerState = n,
                this.setup = a,
                this.shouldRetryMediaErrDecode = i,
                this.retryErrorSet = new pt.a
            }
            return e.prototype.destroy = function() {
                delete this.videoElement,
                ut()(this.timersMap).forEach((function(e) {
                    return clearTimeout(e)
                }
                )),
                this.timersMap = {},
                this.latestErrorSnapshot && (this.reportPlayerStatusAndRetry(this.latestErrorSnapshot, {
                    isPlayerDestroyed: !0
                }),
                delete this.latestErrorSnapshot)
            }
            ,
            e.prototype.getPlayerStatus = function(e) {
                var t = e.videoUrl
                  , n = e.errorPosition
                  , a = e.retryPosition
                  , r = e.isPlayerDestroyed;
                if (!this.videoElement || r)
                    return mt.destroyed;
                var i = this.videoElement
                  , o = i.currentTime
                  , s = i.src;
                return t === s || s.startsWith("blob") ? (a || n) < o ? mt.normal : a ? mt.stalledAfterRetry : mt.stalled : mt.skipped_ads
            }
            ,
            e.prototype.startMonitor = function(e) {
                if (this.videoElement) {
                    var t = e.isAd
                      , n = e.videoUrl
                      , a = e.error
                      , r = e.position
                      , i = e.contentId;
                    if (a.code !== MediaError.MEDIA_ERR_ABORTED && a.code !== MediaError.MEDIA_ERR_NETWORK) {
                        var o = !1;
                        if (this.retryErrorSet.forEach((function(e) {
                            var t = e.error;
                            a.code === t.code && a.message === t.message && (o = !0)
                        }
                        )),
                        !o) {
                            var s = this.videoElement
                              , l = s.paused
                              , c = s.networkState
                              , u = s.readyState
                              , d = {
                                isAd: t,
                                videoUrl: n,
                                contentId: i,
                                error: a,
                                errorNetworkState: c,
                                errorPaused: l,
                                errorPosition: r,
                                errorReadyState: u,
                                errorTimestamp: Date.now(),
                                retryTimes: 0
                            };
                            this.latestErrorSnapshot = d,
                            this.setupMonitorTimers(d)
                        }
                    }
                }
            }
            ,
            e.prototype.stopFollowingReport = function(e, t) {
                for (var n = gt.length - t, a = 1; a < n; a++)
                    clearTimeout(this.timersMap[a + e])
            }
            ,
            e.prototype.reportPlayerStatusAndRetry = function(e, t) {
                var n = void 0 === t ? {} : t
                  , a = n.isPlayerDestroyed
                  , r = void 0 !== a && a
                  , i = n.index
                  , o = void 0 === i ? 1 / 0 : i
                  , s = n.timerIndex
                  , l = void 0 === s ? 1 / 0 : s
                  , c = Date.now()
                  , u = e.videoUrl
                  , d = e.errorPosition
                  , p = e.retryPosition
                  , m = this.getPlayerStatus({
                    videoUrl: u,
                    errorPosition: d,
                    isPlayerDestroyed: r,
                    retryPosition: p
                })
                  , h = this.videoElement
                  , v = {};
                h && ([mt.normal, mt.stalled, mt.stalledAfterRetry].includes(m) && (v = {
                    reportPaused: h.paused,
                    reportPosition: h.currentTime,
                    reportNetworkState: h.networkState,
                    reportReadyState: h.readyState
                }),
                [mt.normal, mt.skipped_ads].includes(m) && (this.stopFollowingReport(l, o),
                this.retryErrorSet.delete(e)));
                var f = c - e.errorTimestamp;
                Object(Pe.m)(Object(W.__assign)(Object(W.__assign)({
                    reportTimestamp: c,
                    duration: f,
                    playerStatus: m,
                    playerState: this.getPlayerState(),
                    inRetryExperiment: this.shouldRetryMediaErrDecode
                }, e), v));
                var E = this.trySkipStalledPosition({
                    errorSnapshot: e,
                    playerStatus: m,
                    timerIndex: l,
                    index: o
                });
                E === vt ? Object(Pe.o)({
                    isAd: e.isAd,
                    videoUrl: u,
                    err: e.error,
                    position: e.errorPosition,
                    contentId: e.contentId
                }) : E === ft && o === gt.length - 1 && Object(Pe.h)({
                    isAd: e.isAd,
                    videoUrl: u,
                    err: e.error,
                    position: e.errorPosition,
                    contentId: e.contentId
                })
            }
            ,
            e.prototype.setupMonitorTimers = function(e) {
                var t = this;
                gt.forEach((function(n, a) {
                    var r = t.latestTimerIndex++
                      , i = setTimeout((function() {
                        delete t.timersMap[r],
                        t.reportPlayerStatusAndRetry(e, {
                            timerIndex: r,
                            index: a
                        })
                    }
                    ), n);
                    t.timersMap[r] = i
                }
                ))
            }
            ,
            e.prototype.trySkipStalledPosition = function(e) {
                var t = e.errorSnapshot
                  , n = e.playerStatus
                  , a = e.timerIndex
                  , r = e.index;
                if (!this.shouldRetryMediaErrDecode)
                    return Et;
                if (![mt.stalled, mt.stalledAfterRetry].includes(n))
                    return Et;
                var i = t.error
                  , o = t.errorPosition
                  , s = t.retryTimes
                  , l = t.retryPosition
                  , c = t.retryTimestamp
                  , u = t.errorTimestamp
                  , d = i.message || fe.j.UNKNOWN_ERROR;
                if (s >= 3)
                    return this.retryErrorSet.delete(t),
                    ft;
                if (!function(e) {
                    var t = e || {
                        code: "",
                        error: ""
                    }
                      , n = t.code
                      , a = t.message;
                    return n === MediaError.MEDIA_ERR_DECODE && (a === fe.j.UNKNOWN_ERROR || a === fe.j.PIPELINE_ERROR_DECODE || !a)
                }(i))
                    return Et;
                var p = Date.now()
                  , m = p - (c || u);
                return d === fe.j.UNKNOWN_ERROR && m < 0 || d === fe.j.PIPELINE_ERROR_DECODE && m < 0 ? Et : (t.retryTimestamp = p,
                t.retryPosition = (l || o) + yt[t.retryTimes] / 1e3,
                t.retryTimes++,
                this.retryErrorSet.add(t),
                this.stopFollowingReport(a, r),
                this.setup(t.retryPosition),
                this.setupMonitorTimers(t),
                vt)
            }
            ,
            e
        }(), Ct = n(82), _t = n(117), At = function(e, t) {
            Object(Pe.k)({
                type: e ? fe.p.adInfo : fe.p.videoInfo,
                subtype: "BUFFERING",
                message: "Buffered for " + t + " milliseconds"
            })
        };
        ht = n(1668).default;
        var St = function(e) {
            var t = e.contentId
              , n = void 0 === t ? "" : t
              , a = e.resumePosition
              , r = e.captionSettings
              , i = Object(W.__rest)(e, ["contentId", "resumePosition", "captionSettings"])
              , o = r ? function(e) {
                return Object(Te.a)(e)
            }(r) : void 0
              , s = e.reuseVideoElement
              , l = new te.Player(Object(W.__assign)(Object(W.__assign)({}, i), {
                captionsStyles: o,
                Adapter: ht,
                debug: !1,
                resumePosition: a,
                reuseVideoElement: s,
                shouldReportBitrate: !1,
                shouldWaitForSeekedEvent: !Object(me.i)()
            }));
            return function(e) {
                var t = {};
                e.on(te.PLAYER_EVENTS.seek, (function(n) {
                    var a = n.offset;
                    t[a] || (t[a] = 0),
                    e.once(te.PLAYER_EVENTS.seeked, (function() {
                        e.once(te.PLAYER_EVENTS.time, (function(n) {
                            var r = n.position;
                            a > D.SEEK_TOLERANCE_OFFSET && r <= D.RESTART_CLOSE_OFFSET && (t[a] >= D.MAX_RESEEK_ATTEMPTS ? (t = {},
                            U.a.error({
                                targetPosition: a,
                                position: r
                            }, "Player - restarts happened"),
                            Object(Pe.k)({
                                type: "VIDEO:PLAYBACK",
                                level: "error",
                                subtype: "Restart",
                                message: "Re-seek failed. Seek to " + a + ", but restart to " + r
                            })) : (e.seek(a),
                            t[a]++,
                            Object(Pe.k)({
                                type: fe.p.videoInfo,
                                level: "info",
                                subtype: "ReSeek",
                                message: "Re-Seek performed. Seek to " + a + ", but restart to " + r
                            })))
                        }
                        ))
                    }
                    ))
                }
                ))
            }(l),
            function(e, t) {
                var n = 0;
                e.on(te.PLAYER_EVENTS.bufferStart, (function() {
                    n = Object(_t.now)()
                }
                )),
                e.on(te.PLAYER_EVENTS.bufferEnd, (function() {
                    var t = Object(_t.now)() - n;
                    n > 0 && t > D.VIDEO_BUFFERING_THRESHOLD && At(e.isAd(), t),
                    n = 0
                }
                )),
                e.on(te.PLAYER_EVENTS.adStart, (function(e) {
                    var n = e.ad
                      , a = e.adsCount
                      , r = e.adSequence
                      , i = e.adPosition;
                    Object(I.h)({
                        ad: n,
                        adsCount: a,
                        adSequence: r,
                        contentId: t,
                        startPosition: i,
                        isFullscreen: !1
                    })
                }
                )),
                e.on(te.PLAYER_EVENTS.adComplete, (function(e) {
                    var n = e.ad
                      , a = e.adsCount
                      , r = e.adSequence
                      , i = e.adPosition;
                    Object(I.d)({
                        ad: n,
                        adsCount: a,
                        adSequence: r,
                        contentId: t,
                        endPosition: i,
                        isFullscreen: !1
                    })
                }
                ))
            }(l, n),
            l
        }
          , Tt = n(1667)
          , Ot = n.n(Tt)
          , Rt = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.isUnmounted = !1,
                n.handlePlayerError = function(e) {
                    var t;
                    if (e.type === te.ErrorType.SETUP_ERROR) {
                        var a = n.props.onPlayerSetupError;
                        a && a(e)
                    }
                    var r = n.state.playerRef;
                    if (e instanceof MediaError && r) {
                        var i = {
                            isAd: !1,
                            videoUrl: r.getMediaUrl(),
                            error: e,
                            position: r.getPosition(),
                            contentId: n.props.data.id
                        };
                        null === (t = n.playerStatusMonitor) || void 0 === t || t.startMonitor(i)
                    }
                }
                ,
                n.state = {
                    prerollUrl: t.prerollUrl
                },
                n
            }
            return Object(W.__extends)(t, e),
            t.getDerivedStateFromProps = function(e, t) {
                return e.prerollUrl !== t.prerollUrl ? (t.playerRef && t.playerRef.setPrerollUrl(e.prerollUrl),
                {
                    prerollUrl: e.prerollUrl
                }) : null
            }
            ,
            t.prototype.componentDidMount = function() {
                this.buildPlayer()
            }
            ,
            t.prototype.shouldComponentUpdate = function(e) {
                var t;
                return !this.props.isMonitoringEnabled && e.isMonitoringEnabled && this.state.playerRef && this.monitor(this.state.playerRef, e.isMonitoringEnabled),
                !this.props.autoStart && e.autoStart && (null === (t = this.state.playerRef) || void 0 === t ? void 0 : t.getState()) === lt.State.idle && this.state.playerRef.play(),
                !1
            }
            ,
            t.prototype.componentWillUnmount = function() {
                var e, t, n;
                this.isUnmounted = !0,
                null === (e = this.monitoring) || void 0 === e || e.remove(),
                null === (t = this.playerStatusMonitor) || void 0 === t || t.destroy();
                var a = this.state.playerRef;
                a && a.removeListener(te.PLAYER_EVENTS.error, this.handlePlayerError),
                null === (n = this.suitestPlayerAdapter) || void 0 === n || n.remove()
            }
            ,
            t.prototype.monitor = function(e, t) {
                return void 0 === t && (t = !1),
                Object(W.__awaiter)(this, void 0, void 0, (function() {
                    var a, r, i, o, s, l, c, u, d, p, m, h, v, f, E, g, y;
                    return Object(W.__generator)(this, (function(b) {
                        switch (b.label) {
                        case 0:
                            if (a = this.props,
                            r = a.analyticsConfig,
                            i = a.data,
                            o = i.id,
                            s = i.title,
                            l = i.lang,
                            c = i.duration,
                            u = a.isMonitoringEnabled,
                            d = void 0 !== u && u,
                            p = a.userId,
                            m = a.videoResource,
                            h = void 0 === m ? {} : m,
                            this.setupPlayerStatusMonitor(e),
                            !d && !t)
                                return [2];
                            v = this.props,
                            f = v.experimentName,
                            E = v.experimentTreatmentName,
                            b.label = 1;
                        case 1:
                            return b.trys.push([1, 3, , 4]),
                            [4, n.e(26).then(n.bind(null, 1851))];
                        case 2:
                            return g = b.sent().setup,
                            this.isUnmounted ? [2] : (this.monitoring = g(e, {
                                analyticsConfig: r,
                                contentId: o,
                                drm: h && Object(J.i)(h) || void 0,
                                duration: c,
                                experimentName: f,
                                experimentTreatmentName: E,
                                language: l,
                                playbackType: null == h ? void 0 : h.type,
                                title: s,
                                userId: p,
                                titanVersion: null == h ? void 0 : h.titan_version
                            }),
                            [3, 4]);
                        case 3:
                            return y = b.sent(),
                            U.a.error(y, "Failed to setup youbora"),
                            [3, 4];
                        case 4:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.setupPlayerStatusMonitor = function(e) {
                var t, n = e.getVideoElement();
                n && (this.playerStatusMonitor = new bt({
                    videoElement: n,
                    getPlayerState: function() {
                        return e.getState()
                    },
                    setup: function(t) {
                        return e.reload(t)
                    },
                    shouldRetryMediaErrDecode: null === (t = this.props.extraOptions) || void 0 === t ? void 0 : t.shouldRetryMediaErrDecode
                }))
            }
            ,
            t.prototype.buildPlayer = function() {
                var e;
                return Object(W.__awaiter)(this, void 0, void 0, (function() {
                    var t, n, a, r, i, o, s, l, c, u, d, p, m, h, v, f, E, g, y, b, C, _, A, S, T;
                    return Object(W.__generator)(this, (function(O) {
                        switch (O.label) {
                        case 0:
                            if (t = this.props,
                            n = t.resumePos,
                            a = void 0 === n ? 0 : n,
                            r = t.data,
                            i = t.trailerId,
                            o = t.prerollUrl,
                            s = t.onPlayerCreate,
                            l = t.onPlayerSetupError,
                            c = t.autoStart,
                            u = void 0 !== c && c,
                            d = t.poster,
                            p = t.playerType,
                            m = t.extraOptions,
                            h = t.reuseVideoElement,
                            v = t.removeIma,
                            f = t.videoResource,
                            E = t.performanceCollectorEnabled,
                            g = t.useHlsNext,
                            y = r.id,
                            b = r.trailers,
                            C = void 0 === b ? [] : b,
                            _ = i || "number" == typeof i,
                            A = Object(J.g)(C, i),
                            _) {
                                if (!A.mediaUrl && !f && l)
                                    return l(new Error("No video resource found.")),
                                    [2]
                            } else
                                A = Object(J.j)(f);
                            return S = this.getCaptionsConfig(_),
                            (T = St(Object(W.__assign)(Object(W.__assign)(Object(W.__assign)({
                                contentId: y,
                                autoStart: u
                            }, S), {
                                resumePosition: a,
                                poster: d,
                                prerollUrl: o,
                                playerType: p,
                                extraOptions: Object(W.__assign)(Object(W.__assign)(Object(W.__assign)({}, Object(Me.f)({
                                    isDrmContent: !!(null == A ? void 0 : A.licenseUrl),
                                    hdcpVersion: null == A ? void 0 : A.hdcpVersion,
                                    removeIma: v,
                                    useHlsNext: g
                                })), {
                                    systemData: {
                                        systemVersion: Ct.default.getSystemVersion && Ct.default.getSystemVersion() || void 0
                                    }
                                }), m),
                                mediaUrl: null !== (e = null == A ? void 0 : A.mediaUrl) && void 0 !== e ? e : "",
                                reuseVideoElement: h,
                                performanceCollectorEnabled: E,
                                fqdn: Le.b.fqdn,
                                actionsTimeout: ge.a[""]
                            }), A))).on(te.PLAYER_EVENTS.error, this.handlePlayerError),
                            s(T),
                            this.setState({
                                playerRef: T
                            }),
                            [4, this.monitor(T)];
                        case 1:
                            return O.sent(),
                            [4, T.setup()];
                        case 2:
                            return O.sent(),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.getCaptionsConfig = function(e) {
                if (e)
                    return {
                        subtitles: []
                    };
                var t = this.props
                  , n = t.data
                  , a = t.captionSettings
                  , r = n.subtitles
                  , i = void 0 === r ? [] : r;
                return {
                    captionSettings: a,
                    defaultCaptions: a.defaultCaptions,
                    subtitles: Object(Me.b)(Object(Me.a)(i))
                }
            }
            ,
            t.prototype.render = function() {
                var e;
                return R.a.createElement("div", {
                    className: Ot.a.playerSkin,
                    dangerouslySetInnerHTML: {
                        __html: null !== (e = ht.htmlString) && void 0 !== e ? e : ""
                    }
                })
            }
            ,
            t.contextTypes = {
                deviceId: T.a.string
            },
            t
        }(O.Component)
          , Mt = n(860)
          , Pt = n(861)
          , wt = n(347);
        var Lt = n(1599)
          , Nt = n.n(Lt)
          , It = n(938)
          , kt = n.n(It)
          , Dt = function(e) {
            function t(n) {
                for (var a = [], r = 1; r < arguments.length; r++)
                    a[r - 1] = arguments[r];
                var i = e.call(this, n) || this
                  , o = a[0]
                  , s = a[1]
                  , l = a[2]
                  , c = a[3]
                  , u = a[4];
                return i.message = "invalid " + c + ' "' + (u || o[s]) + '" supplied to ' + l + ', message: "' + n + '"',
                i.stack = "",
                kt()(i, t.prototype),
                i
            }
            return Object(W.__extends)(t, e),
            t
        }(Error);
        function jt(e, t) {
            return void 0 === e && (e = -1 / 0),
            void 0 === t && (t = 1 / 0),
            function(e) {
                function t(t) {
                    for (var n = [], a = 1; a < arguments.length; a++)
                        n[a - 1] = arguments[a];
                    var r = n[0]
                      , i = n[1]
                      , o = r[i];
                    return null == o ? t ? new (Dt.bind.apply(Dt, Object(W.__spreadArrays)([void 0, "value is marked as required."], n))) : null : e.apply(void 0, n)
                }
                var n = t.bind(null, !1);
                return n.isRequired = t.bind(null, !0),
                n
            }((function() {
                for (var n = [], a = 0; a < arguments.length; a++)
                    n[a] = arguments[a];
                var r = n[0]
                  , i = n[1]
                  , o = r[i];
                return "number" != typeof o ? new (Dt.bind.apply(Dt, Object(W.__spreadArrays)([void 0, "value is expected to be number type."], n))) : Nt()(o) || o < e || o > t ? new (Dt.bind.apply(Dt, Object(W.__spreadArrays)([void 0, "value is expected in range from " + e + " to " + t + "."], n))) : null
            }
            ))
        }
        T.a.shape({
            onceBefore: T.a.string,
            onceAfter: T.a.string,
            text: T.a.string
        });
        var xt = n(1653)
          , Vt = n.n(xt)
          , Ut = function() {
            return R.a.createElement(xe.a, {
                viewBox: "0 0 1 86",
                className: Vt.a.halfCircleSvg
            }, R.a.createElement("path", {
                d: "M0 0v6c20.4 0 37 16.6 37 37S20.4 80 0 80v6c23.7 0 43-19.3 43-43S23.7 0 0 0z"
            }))
        }
          , Bt = function(e) {
            var t, n = e.innerText, a = e.progress, r = void 0 === a ? 0 : a, i = _()(Vt.a.progressContainer, ((t = {})[Vt.a.web] = !0,
            t), e.className);
            return R.a.createElement("div", {
                className: i
            }, R.a.createElement("div", {
                className: Vt.a.rightHalfCircle
            }, R.a.createElement("div", {
                className: Vt.a.svgContainer,
                style: Ft(r)
            }, R.a.createElement(Ut, null))), r < .5 ? null : R.a.createElement("div", {
                className: Vt.a.leftHalfCircle
            }, R.a.createElement("div", {
                className: Vt.a.svgContainer,
                style: Yt(r)
            }, R.a.createElement(Ut, null))), R.a.createElement("div", {
                className: Vt.a.innerCircle
            }, n ? R.a.createElement("span", {
                className: Vt.a.innerCircleText
            }, n) : null))
        };
        Bt.propTypes = {
            progress: jt(0, 1).isRequired
        };
        var Ht = Bt;
        function Yt(e) {
            return {
                transform: "rotate(" + Math.floor((e - .5) / .5 * 180) + "deg)"
            }
        }
        function Ft(e) {
            return 0 === e ? {
                transform: "rotate(185deg)"
            } : e >= .49 ? {
                transform: "rotate(360deg)"
            } : {
                transform: "rotate(" + Math.floor(185 + e / .51 * 175) + "deg)"
            }
        }
        var Wt = n(1652)
          , Gt = n.n(Wt)
          , qt = Object(ke.a)({
            adMessage: {
                defaultMessage: "Your video will resume after the break",
                id: "src/common/components/AdMessage/AdMessage:adMessage"
            }
        })
          , Kt = function(e) {
            var t, n = e.progress, a = e.showProgressBar, r = _()(Gt.a.adMessage, e.className);
            return t = a ? R.a.createElement(Ht, {
                innerText: "AD",
                progress: n
            }) : R.a.createElement("div", {
                className: Gt.a.adMessageProgressBar
            }, "AD"),
            R.a.createElement("div", {
                className: r
            }, t, R.a.createElement("div", {
                className: Gt.a.adMessageText
            }, R.a.createElement(tt.a, qt.adMessage)))
        };
        Kt.propTypes = {
            progress: jt(0, 1).isRequired
        };
        var zt = Kt
          , Qt = Object(P.b)((function(e, t) {
            t.shouldUsePlayerPackage,
            e.ottPlayer;
            var n = e.player
              , a = n.ad
              , r = a.adCount
              , i = a.adSequence
              , o = n.adProgress;
            return {
                adCount: r,
                adSequence: i,
                duration: o.duration,
                position: o.position
            }
        }
        ))((function(e) {
            var t = e.adCount
              , n = e.adSequence
              , a = e.duration
              , r = e.position;
            return R.a.createElement(zt, {
                progress: function() {
                    if (0 === a)
                        return 0;
                    var e = function(e) {
                        for (var t = {
                            0: 0
                        }, n = 1; n < e + 1; n++)
                            if (e === n)
                                t[n] = 1;
                            else {
                                var a = t[n - 1] || 0;
                                t[n] = a + Math.floor(100 / e) / 100
                            }
                        return t
                    }(t)
                      , i = e[n - 1]
                      , o = r / a * (e[n] - i);
                    return Object(ne.clamp)(Math.round(100 * (o + i)) / 100, 0, 1)
                }(),
                className: e.className,
                showProgressBar: !0
            })
        }
        ))
          , Zt = n(1634)
          , Xt = n(267)
          , Jt = n(386)
          , $t = n(1650)
          , en = n.n($t)
          , tn = {
            enter: en.a.slideDownEnter,
            enterActive: en.a.slideDownEnterActive,
            exit: en.a.slideDownLeave,
            exitActive: en.a.slideDownLeaveActive
        }
          , nn = {
            enter: en.a.heightDownEnter,
            enterActive: en.a.heightDownEnterActive,
            exit: en.a.heightDownLeave,
            exitActive: en.a.heightDownLeaveActive
        }
          , an = function(e) {
            var t, n = e.active, a = e.ratings, r = e.className, i = e.ratingClassName, o = e.ratingValueClassName, s = e.leftBannerClassName, l = e.ratedClassName, c = e.descriptorsClassName;
            if (!a || a.length <= 0)
                return null;
            var u = R.a.createElement(Jt.f, {
                rating: a,
                cls: _()(en.a.rateBlock, en.a.rating, i),
                descriptorCls: _()(o)
            })
              , d = null === (t = a[0].descriptors) || void 0 === t ? void 0 : t.map((function(e) {
                return e.description
            }
            )).join(", ");
            return R.a.createElement("div", {
                className: _()(en.a.ratingOverlay, r)
            }, R.a.createElement(je.CSSTransition, {
                in: n,
                key: "leftBanner",
                timeout: 500,
                classNames: nn,
                unmountOnExit: !0
            }, R.a.createElement("div", {
                className: _()(en.a.leftBanner, s)
            })), R.a.createElement(je.CSSTransition, {
                in: n,
                timeout: 1e3,
                classNames: tn,
                unmountOnExit: !0
            }, R.a.createElement("div", null, R.a.createElement("div", null, R.a.createElement("div", {
                className: _()(en.a.rateBlock, en.a.rated, l)
            }, "Rated"), u), d ? R.a.createElement("div", {
                className: _()(en.a.descriptors, c)
            }, d) : null)))
        }
          , rn = n(1651)
          , on = n.n(rn)
          , sn = {
            enter: on.a.titleFadeDownEnter,
            enterActive: on.a.titleFadeDownEnterActive,
            exit: on.a.titleFadeDownLeave,
            exitActive: on.a.titleFadeDownLeaveActive
        }
          , ln = function(e) {
            var t = e.className
              , n = e.subtitle
              , a = e.subtitleClassName
              , r = e.title
              , i = e.titleClassName
              , o = e.ratingOverlay
              , s = e.showTitle
              , l = R.a.createElement("div", {
                className: on.a.titleColumn
            }, R.a.createElement("h1", {
                className: _()(on.a.title, i)
            }, r), n ? R.a.createElement("h2", {
                className: _()(on.a.subtitle, a)
            }, n) : null);
            return R.a.createElement("div", {
                className: _()(on.a.main, t),
                onClick: function(e) {
                    e.stopPropagation()
                }
            }, R.a.createElement(je.CSSTransition, {
                in: s,
                timeout: 800,
                classNames: sn,
                unmountOnExit: !0
            }, R.a.createElement("div", {
                className: on.a.wrapper
            }, l)), o)
        }
          , cn = n(90)
          , un = n(876)
          , dn = n(1632)
          , pn = n(170)
          , mn = n.n(pn)
          , hn = n(70)
          , vn = n.n(hn);
        var fn = R.a.memo((function(e) {
            return R.a.createElement("svg", Object(W.__assign)({
                width: "1em",
                height: "1em",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), R.a.createElement("path", {
                d: "M20.707 3.29301C20.316 2.90201 19.684 2.90201 19.293 3.29301L3.29301 19.293C2.90201 19.684 2.90201 20.316 3.29301 20.707C3.48801 20.902 3.74401 21 4.00001 21C4.25601 21 4.51201 20.902 4.70701 20.707L20.707 4.70701C21.098 4.31601 21.098 3.68401 20.707 3.29301Z",
                fill: "currentColor"
            }), R.a.createElement("path", {
                d: "M14 18.102C14 18.28 13.785 18.369 13.659 18.243L11.829 16.413L10.415 17.827L14.294 21.706C14.297 21.709 14.3 21.709 14.303 21.712C14.388 21.795 14.486 21.855 14.589 21.903C14.62 21.917 14.652 21.926 14.685 21.937C14.767 21.965 14.851 21.981 14.938 21.987C14.958 21.989 14.978 22 15 22C15.013 22 15.025 21.993 15.038 21.992C15.15 21.988 15.262 21.969 15.37 21.926C15.374 21.924 15.379 21.925 15.383 21.923C15.756 21.769 16 21.404 16 21V12.242L14 14.242V18.102Z",
                fill: "currentColor"
            }), R.a.createElement("path", {
                d: "M7.00001 12.758V10.442C7.00001 9.48101 7.51001 9.00001 8.43101 9.00001L8.43201 9.00201C8.44401 9.00201 8.45601 9.00001 8.46701 9.00001H9.08301C10.144 9.00001 11.161 8.57901 11.911 7.82801L16.032 3.70701C16.423 3.31601 16.423 2.68401 16.032 2.29301C15.641 1.90201 15.009 1.90201 14.618 2.29301L10.492 6.41901C10.119 6.79101 9.61301 7.00001 9.08601 7.00001L8.29201 6.99901C6.13101 6.99901 5.00001 8.12001 5.00001 10.261V13.739C5.00001 14.076 5.03801 14.378 5.09401 14.664L7.00001 12.758Z",
                fill: "currentColor"
            }))
        }
        ));
        var En = R.a.memo((function(e) {
            return R.a.createElement("svg", Object(W.__assign)({
                width: "1em",
                height: "1em",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), R.a.createElement("path", {
                d: "M15 5.00002V7.00002C17.757 7.00002 20 9.24302 20 12C20 14.757 17.757 17 15 17V19C18.866 19 22 15.866 22 12C22 8.13402 18.866 5.00002 15 5.00002Z",
                fill: "currentColor"
            }), R.a.createElement("path", {
                d: "M18 12C18 10.343 16.657 9.00002 15 9.00002V11C15.551 11 16 11.449 16 12C16 12.551 15.551 13 15 13V15C16.657 15 18 13.657 18 12Z",
                fill: "currentColor"
            }), R.a.createElement("path", {
                d: "M12.383 2.07602C12.379 2.07402 12.374 2.07502 12.37 2.07302C12.262 2.03002 12.15 2.01102 12.038 2.00702C12.025 2.00702 12.013 1.99902 12 1.99902C11.978 1.99902 11.958 2.01002 11.936 2.01202C11.849 2.01802 11.766 2.03402 11.683 2.06202C11.65 2.07302 11.619 2.08202 11.587 2.09602C11.483 2.14302 11.385 2.20402 11.301 2.28702C11.298 2.29002 11.295 2.29002 11.292 2.29302L7.167 6.41902C6.793 6.79102 6.288 7.00002 5.76 7.00002L5.292 6.99902C3.131 6.99902 2 8.12002 2 10.261V13.739C2 15.879 3.131 17 5.292 17L5.761 16.999C6.288 16.999 6.793 17.208 7.167 17.58L11.293 21.706C11.296 21.709 11.299 21.709 11.302 21.712C11.387 21.795 11.485 21.855 11.588 21.903C11.619 21.917 11.651 21.926 11.684 21.937C11.766 21.965 11.85 21.981 11.937 21.987C11.958 21.989 11.978 22 12 22C12.013 22 12.025 21.993 12.038 21.992C12.15 21.988 12.262 21.969 12.37 21.926C12.374 21.924 12.379 21.925 12.383 21.923C12.756 21.769 13 21.404 13 21V3.00002C13 2.59602 12.756 2.23002 12.383 2.07602ZM11 18.102C11 18.28 10.785 18.369 10.659 18.243L8.586 16.17C7.836 15.42 6.818 14.998 5.758 14.998H5.468C5.456 14.998 5.445 14.996 5.433 14.996L5.432 14.998C4.51 14.999 4 14.518 4 13.558V10.442C4 9.48102 4.51 9.00002 5.431 9.00002L5.432 9.00202C5.444 9.00202 5.456 9.00002 5.467 9.00002H5.757C6.818 9.00002 7.835 8.57902 8.585 7.82802L10.658 5.75502C10.785 5.63002 11 5.71902 11 5.89702V18.102Z",
                fill: "currentColor"
            }))
        }
        ))
          , gn = n(1488);
        var yn = R.a.memo((function(e) {
            return R.a.createElement("svg", Object(W.__assign)({
                width: "1em",
                height: "1em",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), R.a.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M21.2539 10.8644C20.9535 11.1746 20.7933 11.5848 20.7933 12.015C20.7933 12.4452 20.9535 12.8354 21.2339 13.0955C21.9648 13.8659 22.1851 14.9465 21.8146 15.917L21.7746 16.017L21.7245 16.1171C21.304 17.0775 20.3828 17.6878 19.3015 17.7279C18.891 17.7479 18.5105 17.918 18.2101 18.2181C17.8997 18.5283 17.7395 18.8984 17.7195 19.3087C17.6795 20.3892 17.0387 21.3397 16.0975 21.7299L16.0074 21.7799C14.9961 22.2001 13.8847 21.99 13.1138 21.2596C12.513 20.6593 11.4517 20.6793 10.891 21.2396C10.3704 21.7399 9.70954 22 9.02869 22C8.70829 22 8.38789 21.95 8.07751 21.8299L7.90729 21.7499C6.92607 21.3197 6.31531 20.3992 6.27526 19.3187C6.25524 18.9185 6.08503 18.5283 5.78465 18.2281C5.47427 17.918 5.11382 17.7579 4.69329 17.7379C3.61195 17.6978 2.66076 17.0675 2.27028 16.1171L2.22021 16.037C1.8097 14.9865 2.02998 13.8859 2.74086 13.1356C3.04124 12.8154 3.19142 12.4452 3.19142 12.015C3.19142 11.5848 3.03122 11.1946 2.75087 10.9145C2.01996 10.1441 1.8097 9.07354 2.17015 8.09305L2.2903 7.84292C2.68079 6.94247 3.60193 6.33216 4.68328 6.29214C5.08378 6.27213 5.47427 6.10205 5.77464 5.8019C6.08503 5.49174 6.24523 5.12156 6.26525 4.71135C6.3053 3.63081 6.93609 2.68034 7.88727 2.29014L8.06749 2.2001C9.18889 1.77989 10.1301 2.05002 10.861 2.72036C11.5118 3.35067 12.5331 3.31065 13.0938 2.75037C13.8647 2.02001 14.9461 1.8099 15.9173 2.17008L16.0174 2.22011L16.1075 2.27013C17.0687 2.68034 17.6795 3.6008 17.7195 4.68134C17.7395 5.08154 17.9097 5.47174 18.2101 5.77189C18.5205 6.08204 18.881 6.24212 19.3015 6.26213C20.3828 6.30215 21.334 6.94247 21.7245 7.88294L21.8046 8.03302C22.1951 8.98349 21.9848 10.094 21.2539 10.8644ZM19.9423 15.2066C20.0424 14.9765 19.9823 14.6963 19.8021 14.5063C19.1613 13.8659 18.7908 12.9755 18.8109 11.995C18.8109 11.0545 19.1613 10.1541 19.8121 9.47374C19.9923 9.28364 20.0524 9.01351 19.9623 8.7934L19.8822 8.64332C19.7821 8.41321 19.5318 8.26313 19.2314 8.25313C18.3102 8.22311 17.4692 7.85293 16.7984 7.18259C16.1375 6.52226 15.7571 5.66183 15.727 4.75137C15.707 4.45122 15.5568 4.2011 15.3165 4.10105L15.2064 4.04102C14.9761 3.95097 14.6957 4.011 14.5055 4.19109C13.8647 4.83141 12.9636 5.1916 12.0024 5.1916C11.0512 5.1916 10.1901 4.85142 9.49928 4.19109C9.36911 4.07103 9.21893 4.011 9.02869 4.011C8.99865 4.011 8.91855 4.02101 8.77838 4.07103L8.65823 4.13106C8.42794 4.23111 8.27776 4.48124 8.26774 4.78139C8.22769 5.70185 7.85723 6.54227 7.19641 7.22261C6.53559 7.87294 5.67451 8.25313 4.76338 8.29315C4.45299 8.30315 4.20268 8.45323 4.10256 8.69335L4.03247 8.83342C3.96238 9.07354 4.02246 9.33367 4.18266 9.49375C4.82346 10.1341 5.1839 11.0345 5.1839 11.995C5.1839 12.9455 4.84348 13.8059 4.18266 14.4962C4.00243 14.6863 3.94236 14.9765 4.03247 15.2066L4.07252 15.2666C4.20268 15.5668 4.45299 15.7169 4.75337 15.7269C5.67451 15.7569 6.51556 16.1271 7.1864 16.7974C7.83721 17.4577 8.21768 18.3182 8.25773 19.2286C8.26774 19.5388 8.41793 19.7889 8.65823 19.8889L8.77838 19.949C9.00867 20.039 9.28901 19.979 9.47925 19.7989C10.12 19.1586 11.0112 18.7984 11.9824 18.7984C12.9536 18.7984 13.8447 19.1586 14.5055 19.8189C14.6857 19.989 14.9561 20.049 15.1763 19.959L15.2665 19.909C15.5568 19.7789 15.707 19.5288 15.717 19.2286C15.7471 18.3082 16.1175 17.4677 16.7884 16.7974C17.4492 16.1471 18.3102 15.7669 19.2214 15.7269C19.5318 15.7169 19.7821 15.5668 19.8822 15.3267L19.9423 15.2066ZM8.49969 12.005C8.49969 13.936 10.0697 15.5067 11.9997 15.5067C13.9297 15.5067 15.4997 13.936 15.4997 12.005C15.4997 10.074 13.9297 8.50323 11.9997 8.50323C10.0697 8.50323 8.49969 10.074 8.49969 12.005ZM10.4997 12.005C10.4997 11.1746 11.1697 10.5042 11.9997 10.5042C12.8297 10.5042 13.4997 11.1746 13.4997 12.005C13.4997 12.8354 12.8297 13.5057 11.9997 13.5057C11.1697 13.5057 10.4997 12.8354 10.4997 12.005Z",
                fill: "currentColor"
            }))
        }
        ));
        var bn = R.a.memo((function(e) {
            return R.a.createElement("svg", Object(W.__assign)({
                width: "1em",
                height: "1em",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), R.a.createElement("path", {
                d: "M8.786 11H7.214C5.527 11 4.194 11 3.098 12.097C2.008 13.186 2.002 14.544 2 15.986C2 15.919 2 15.855 2 15.785V16.214C2 16.145 2 16.082 2.001 16.016C2.003 17.455 2.009 18.813 3.098 19.903C4.195 21 5.527 21 7.214 21H8.785C10.472 21 11.805 21 12.903 19.902C13.995 18.808 13.997 17.445 13.998 15.999C13.997 14.554 13.995 13.189 12.902 12.098C11.805 11 10.473 11 8.786 11ZM8.786 19H7.214C5.694 19 5.002 18.979 4.511 18.488C4.051 18.028 4.002 17.376 4 16.001C4.002 14.624 4.051 13.972 4.512 13.512C5.002 13.021 5.695 13 7.214 13H8.785C10.305 13 10.997 13.021 11.488 13.512C11.947 13.971 11.996 14.62 11.999 15.988C11.999 15.992 11.999 15.996 11.999 16C11.999 16.004 11.999 16.008 11.999 16.011C11.997 17.379 11.947 18.03 11.489 18.488C10.998 18.979 10.305 19 8.786 19Z",
                fill: "currentColor"
            }), R.a.createElement("path", {
                d: "M20.782 5.225L20.779 5.223C19.695 4.148 18.241 4 16.831 4H9.154C7.75 4 6.301 4.149 5.221 5.229C4.282 6.159 4.061 7.35 4.014 8.482C4.002 8.764 4.224 9 4.506 9H8.786C10.59 9 12.939 8.821 14.622 10.504C16.302 12.182 15.998 14.377 16 16.001V17.169C16 17.6285 16.3725 18.001 16.832 18.001C18.469 18.001 19.768 17.793 20.783 16.776C21.906 15.652 22 14.15 22 12.831V9.177C22 7.854 21.906 6.348 20.782 5.225Z",
                fill: "currentColor"
            }))
        }
        ));
        var Cn = R.a.memo((function(e) {
            return R.a.createElement("svg", Object(W.__assign)({
                width: "1em",
                height: "1em",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), R.a.createElement("path", {
                d: "M7.78598 12H6.21398C4.64498 12 3.60898 12 2.80398 12.805C2.03798 13.57 2.00198 14.552 2.00098 16C2.00298 17.447 2.03898 18.429 2.80498 19.196C3.60898 20 4.64598 20 6.21398 20H7.78498C9.35398 20 10.39 20 11.196 19.195C11.962 18.429 11.997 17.446 11.999 15.999C11.997 14.552 11.961 13.57 11.195 12.804C10.391 12 9.35398 12 7.78598 12Z",
                fill: "currentColor"
            }), R.a.createElement("path", {
                d: "M20.515 5.487C19.194 4.181 17.391 4 15.64 4H9.28C7.537 4 5.742 4.182 4.425 5.497C3.449 6.464 3.111 7.682 2.997 8.893V10H4.998V9.076C5.086 8.152 5.311 7.435 5.835 6.915C6.503 6.248 7.437 6 9.28 6H15.639C17.497 6 18.437 6.246 19.103 6.905C19.85 7.652 20 8.784 20 10.37V12.64C20 14.529 19.766 15.433 19.104 16.095C18.443 16.755 17.505 17 15.64 17H14V19H15.64C17.673 19 19.281 18.746 20.518 17.509C21.886 16.141 22 14.278 22 12.64V10.37C22 8.727 21.886 6.859 20.515 5.487Z",
                fill: "currentColor"
            }))
        }
        ));
        var _n = R.a.memo((function(e) {
            return R.a.createElement("svg", Object(W.__assign)({
                width: "1em",
                height: "1em",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), R.a.createElement("path", {
                d: "M13 3.99997H12V2.72897C12 2.18797 11.413 1.85197 10.947 2.12497L7.06098 4.39597C7.03398 4.41197 7.02398 4.43997 6.99998 4.45797V2.72797C6.99998 2.18697 6.41298 1.85097 5.94698 2.12397L2.06098 4.39597C1.59898 4.66597 1.59898 5.33397 2.06098 5.60497L5.94598 7.87597C6.41298 8.14897 6.99998 7.81197 6.99998 7.27097V5.54097C7.02398 5.55997 7.03398 5.58797 7.06098 5.60397L10.946 7.87497C11.413 8.14897 12 7.81197 12 7.27097V5.99997H13C16.859 5.99997 20 9.13997 20 13C20 16.86 16.859 20 13 20C9.14098 20 5.99998 16.86 5.99998 13C5.99998 12.448 5.55298 12 4.99998 12C4.44698 12 3.99998 12.448 3.99998 13C3.99998 17.962 8.03698 22 13 22C17.963 22 22 17.962 22 13C22 8.03797 17.963 3.99997 13 3.99997Z",
                fill: "currentColor"
            }), R.a.createElement("path", {
                d: "M15.502 16.431C14.889 16.424 13.495 16.183 13.46 14.097V11.913C13.494 9.83497 14.884 9.58197 15.48 9.56797C16.1 9.58097 17.482 9.83397 17.535 11.896V14.085C17.482 16.185 16.095 16.425 15.502 16.431ZM15.48 10.855C15.212 10.861 14.764 10.871 14.747 11.924V14.087C14.764 15.137 15.208 15.142 15.501 15.145C15.78 15.142 16.221 15.137 16.248 14.071V11.923C16.219 10.872 15.774 10.862 15.48 10.855Z",
                fill: "currentColor"
            }), R.a.createElement("path", {
                d: "M12.518 13.511C12.402 13.273 12.22 13.062 11.978 12.884C12.213 12.706 12.383 12.502 12.484 12.276C12.579 12.028 12.628 11.766 12.628 11.498C12.622 10.969 12.443 10.504 12.097 10.114C11.733 9.71397 11.238 9.50697 10.621 9.50097C10.133 9.50797 9.70698 9.68897 9.35698 10.042C9.00098 10.396 8.79598 10.837 8.74698 11.352L8.73798 11.446H9.83498L9.84898 11.378C9.90398 11.122 10.011 10.931 10.168 10.81C10.318 10.689 10.478 10.63 10.657 10.63C10.913 10.636 11.116 10.717 11.276 10.877C11.437 11.045 11.519 11.254 11.524 11.517C11.524 11.777 11.446 11.981 11.285 12.143C11.124 12.309 10.901 12.39 10.604 12.39H10.197V13.409H10.681C10.949 13.409 11.163 13.49 11.334 13.657C11.51 13.83 11.598 14.07 11.603 14.389C11.598 14.704 11.51 14.938 11.332 15.107C11.16 15.285 10.954 15.372 10.702 15.372C10.467 15.372 10.285 15.309 10.144 15.178C10.002 15.049 9.89098 14.876 9.81398 14.666L9.79298 14.61H8.69998L8.71798 14.711C8.82298 15.287 9.05598 15.733 9.41198 16.039C9.76798 16.346 10.183 16.501 10.646 16.501C11.241 16.494 11.735 16.295 12.115 15.91C12.502 15.532 12.701 15.011 12.707 14.36C12.707 14.066 12.644 13.781 12.518 13.511Z",
                fill: "currentColor"
            }))
        }
        ));
        var An = R.a.memo((function(e) {
            return R.a.createElement("svg", Object(W.__assign)({
                width: "1em",
                height: "1em",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), R.a.createElement("path", {
                d: "M8.5 21H6.5C5.675 21 5 20.325 5 19.5V4.5C5 3.675 5.675 3 6.5 3H8.5C9.325 3 10 3.675 10 4.5V19.5C10 20.325 9.325 21 8.5 21Z",
                fill: "currentColor"
            }), R.a.createElement("path", {
                d: "M17.5 21H15.5C14.675 21 14 20.325 14 19.5V4.5C14 3.675 14.675 3 15.5 3H17.5C18.325 3 19 3.675 19 4.5V19.5C19 20.325 18.325 21 17.5 21Z",
                fill: "currentColor"
            }))
        }
        ))
          , Sn = n(1515);
        var Tn = R.a.memo((function(e) {
            return R.a.createElement("svg", Object(W.__assign)({
                width: "1em",
                height: "1em",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), R.a.createElement("path", {
                d: "M11 3.99997H12V2.72897C12 2.18797 12.587 1.85197 13.053 2.12497L16.938 4.39597C16.966 4.41197 16.976 4.43997 17 4.45797V2.72797C17 2.18697 17.587 1.85097 18.053 2.12397L21.938 4.39497C22.4 4.66497 22.4 5.33297 21.938 5.60397L18.053 7.87497C17.587 8.14897 17 7.81197 17 7.27097V5.54097C16.976 5.55897 16.966 5.58797 16.939 5.60297L13.054 7.87397C12.587 8.14897 12 7.81197 12 7.27097V5.99997H11C7.141 5.99997 4 9.13997 4 13C4 16.86 7.141 20 11 20C14.859 20 18 16.86 18 13C18 12.448 18.447 12 19 12C19.553 12 20 12.448 20 13C20 17.962 15.963 22 11 22C6.037 22 2 17.962 2 13C2 8.03797 6.037 3.99997 11 3.99997Z",
                fill: "currentColor"
            }), R.a.createElement("path", {
                d: "M13.6021 16.431C12.9891 16.424 11.5951 16.183 11.5601 14.097V11.913C11.5941 9.83499 12.9841 9.58199 13.5801 9.56799C14.2001 9.58099 15.5821 9.83399 15.6351 11.896V14.085C15.5821 16.185 14.1951 16.425 13.6021 16.431ZM13.5801 10.855C13.3121 10.861 12.8641 10.871 12.8471 11.924V14.087C12.8641 15.137 13.3081 15.142 13.6011 15.145C13.8801 15.142 14.3211 15.137 14.3481 14.071V11.923C14.3191 10.872 13.8741 10.862 13.5801 10.855Z",
                fill: "currentColor"
            }), R.a.createElement("path", {
                d: "M10.618 13.511C10.502 13.273 10.32 13.062 10.078 12.884C10.313 12.706 10.483 12.502 10.584 12.276C10.68 12.028 10.728 11.766 10.728 11.498C10.722 10.969 10.543 10.504 10.197 10.114C9.83405 9.713 9.33805 9.507 8.72205 9.5C8.23405 9.507 7.80805 9.688 7.45805 10.041C7.10205 10.395 6.89705 10.836 6.84805 11.351L6.83905 11.445H7.93605L7.95005 11.377C8.00505 11.121 8.11205 10.93 8.26905 10.809C8.41905 10.688 8.57905 10.629 8.75805 10.629C9.01405 10.635 9.21705 10.716 9.37705 10.876C9.53805 11.044 9.62005 11.253 9.62505 11.516C9.62505 11.776 9.54705 11.98 9.38605 12.142C9.22505 12.308 9.00205 12.389 8.70505 12.389H8.29905V13.408H8.78305C9.05105 13.408 9.26505 13.489 9.43605 13.656C9.61205 13.829 9.70005 14.069 9.70505 14.388C9.70005 14.703 9.61205 14.937 9.43405 15.106C9.26205 15.284 9.05605 15.371 8.80405 15.371C8.56905 15.371 8.38705 15.308 8.24605 15.177C8.10405 15.048 7.99305 14.875 7.91605 14.665L7.89505 14.609H6.80005L6.81805 14.71C6.92305 15.286 7.15605 15.732 7.51205 16.038C7.86805 16.344 8.28305 16.5 8.74605 16.5C9.34105 16.493 9.83505 16.294 10.215 15.909C10.602 15.531 10.801 15.01 10.807 14.359C10.807 14.066 10.744 13.781 10.618 13.511Z",
                fill: "currentColor"
            }))
        }
        ))
          , On = n(1830)
          , Rn = R.a.memo((function(e) {
            var t = e.option
              , n = e.idx
              , a = e.activeIdx
              , r = e.onOptionSelect
              , i = a === n
              , o = i ? "active" : ""
              , s = R.a.useCallback((function() {
                n !== a && r && r(n)
            }
            ), [n, a, r]);
            return R.a.createElement("li", {
                "data-index": n,
                className: o,
                onClick: s
            }, i ? R.a.createElement(On.a, {
                className: "checkmark"
            }) : null, t.label)
        }
        ))
          , Mn = function(e) {
            var t = e.options
              , n = e.activeLabel
              , a = e.onOptionSelect
              , r = t.findIndex((function(e) {
                return e.label === n
            }
            ));
            return R.a.createElement("ul", {
                className: "option-list"
            }, t.map((function(e, t) {
                return R.a.createElement(Rn, Object(W.__assign)({
                    key: e.label
                }, {
                    option: e,
                    idx: t,
                    activeIdx: r,
                    onOptionSelect: a
                }))
            }
            )))
        }
          , Pn = function(e) {
            var t = e.label
              , n = e.children
              , a = e.placement;
            return t ? R.a.createElement("div", {
                className: "web-tooltip"
            }, R.a.createElement("div", {
                className: "web-tooltip__container " + a
            }, t), n) : n
        };
        Pn.defaultProps = {
            placement: "top"
        };
        var wn, Ln, Nn, In, kn, Dn, jn, xn, Vn, Un, Bn = Pn, Hn = function(e) {
            var t = e.icon
              , n = e.tooltip
              , a = e.className
              , r = void 0 === a ? "" : a
              , i = e.onClick
              , o = e.tooltipPlacement
              , s = Object(W.__rest)(e, ["icon", "tooltip", "className", "onClick", "tooltipPlacement"])
              , l = Object(O.useCallback)((function(e) {
                e.stopPropagation(),
                null == i || i(e)
            }
            ), [i]);
            return R.a.createElement("div", Object(W.__assign)({}, s, {
                onClick: l
            }), R.a.createElement(Bn, {
                label: n,
                placement: o
            }, R.a.createElement("div", {
                className: "web-iconButton " + r
            }, t)))
        }, Yn = n(1665), Fn = n.n(Yn), Wn = n(138), Gn = n(1602), qn = function(e) {
            return R.a.createElement(xe.a, o()({
                viewBox: "0 0 40 40"
            }, e), R.a.createElement("g", {
                stroke: "none",
                strokeWidth: "1",
                fill: "none",
                fillRule: "evenodd",
                transform: "matrix(-1 0 0 1 40 0)"
            }, R.a.createElement("path", {
                fill: "currentColor",
                d: "M32 21v-9H8v16h15v-7h9zM6 11.99C6 10.892 6.9 10 7.991 10H32.01c1.1 0 1.991.898 1.991 1.99v16.02c0 1.099-.9 1.99-1.991 1.99H7.99C6.891 30 6 29.102 6 28.01V11.99z"
            }), R.a.createElement("path", {
                stroke: "currentColor",
                strokeOpacity: ".1",
                strokeWidth: "1",
                d: "M22.5 27.5v.5l.5-.5h-.5zm-14 0H8l.5.5v-.5zm0-15V12l-.5.5h.5zm23 0h.5l-.5-.5v.5zm0 8v.5l.5-.5h-.5zm0 0h-9v7h-14v-15h23v8zm-26-8.51A2.496 2.496 0 0 1 7.991 9.5H32.01a2.495 2.495 0 0 1 2.491 2.49v16.02a2.496 2.496 0 0 1-2.491 2.49H7.99A2.495 2.495 0 0 1 5.5 28.01V11.99z"
            })))
        }, Kn = function(e) {
            return R.a.createElement(xe.a, o()({
                viewBox: "0 0 40 40"
            }, e), R.a.createElement("g", {
                stroke: "none",
                fill: "none",
                fillRule: "evenodd"
            }, R.a.createElement("path", {
                fill: "currentColor",
                d: "M8,27 L8,28 L15,28 L15,26 L10,26 L10,21 L8,21 L8,27 Z M34,11.9907951 L34,28.0092049 C34,29.1017876 33.1084896,30 32.0087557,30 L7.99124431,30 C6.89989752,30 6,29.1086907 6,28.0092049 L6,11.9907951 C6,10.8982124 6.89151044,10 7.99124431,10 L32.0087557,10 C33.1001025,10 34,10.8913093 34,11.9907951 Z"
            }), R.a.createElement("path", {
                stroke: "currentColor",
                strokeOpacity: "0.1",
                strokeWidth: "1",
                d: "M8.5,21.5 L8.5,21 L8,21.5 L8.5,21.5 Z M9.5,21.5 L10,21.5 L9.5,21 L9.5,21.5 Z M14.5,26.5 L15,26.5 L14.5,26 L14.5,26.5 Z M14.5,27.5 L14.5,28 L15,27.5 L14.5,27.5 Z M8.5,27.5 L8,27.5 L8.5,28 L8.5,27.5 Z M8.5,21.5 L9.5,21.5 L9.5,26.5 L14.5,26.5 L14.5,27.5 L8.5,27.5 L8.5,21.5 Z M34.5,11.9907951 L34.5,28.0092049 C34.5,29.3800719 33.3824958,30.5 32.0087557,30.5 L7.99124431,30.5 C6.6212083,30.5 5.5,29.3822965 5.5,28.0092049 L5.5,11.9907951 C5.5,10.6199281 6.61750422,9.5 7.99124431,9.5 L32.0087557,9.5 C33.3787917,9.5 34.5,10.6177035 34.5,11.9907951 Z"
            })))
        }, zn = n(1563), Qn = n(1598), Zn = n.n(Qn), Xn = Object(ke.a)({
            cc: {
                defaultMessage: "Closed Captions",
                id: "src/web/components/WebPlayerOverlay/PlayerControls/PlayerControls:cc"
            },
            fontSize: {
                defaultMessage: "Font Size",
                id: "src/web/components/WebPlayerOverlay/PlayerControls/PlayerControls:fontSize"
            },
            background: {
                defaultMessage: "Background",
                id: "src/web/components/WebPlayerOverlay/PlayerControls/PlayerControls:background"
            },
            settings: {
                defaultMessage: "Advanced Settings",
                id: "src/web/components/WebPlayerOverlay/PlayerControls/PlayerControls:settings"
            },
            closeFullscreen: {
                defaultMessage: "Close Fullscreen",
                id: "src/web/components/WebPlayerOverlay/PlayerControls/PlayerControls:closeFullscreen"
            },
            goFullscreen: {
                defaultMessage: "Go Fullscreen",
                id: "src/web/components/WebPlayerOverlay/PlayerControls/PlayerControls:goFullscreen"
            },
            cast: {
                defaultMessage: "Play on TV",
                id: "src/web/components/WebPlayerOverlay/PlayerControls/PlayerControls:cast"
            },
            videoQuality: {
                defaultMessage: "Video Quality",
                id: "src/web/components/WebPlayerOverlay/PlayerControls/PlayerControls:videoQuality"
            }
        }), Jn = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.showVolumeRangeTimer = 0,
                n.hideVolumeRangeTimer = 0,
                n.showCaptionsListTimer = 0,
                n.hideCaptionsListTimer = 0,
                n.showQualityListTimer = 0,
                n.hideQualityListTimer = 0,
                n._volumeChangedByUser = !1,
                n._volumeMuteChangedByUser = !1,
                n._isMutedBeforeAd = !1,
                n._volumeBeforeAd = 0,
                n._cachedIconComponents = {
                    chromeCast: R.a.createElement(Gn.a, null),
                    fullScreen: R.a.createElement(qn, null),
                    fullScreenDisable: R.a.createElement(Kn, null)
                },
                n.handleFullscreenChange = function() {
                    var e = !!Object(Oe.f)();
                    e !== n.state.fullscreen && n.setState({
                        fullscreen: e
                    })
                }
                ,
                n.showVolumeRange = function() {
                    window.clearTimeout(n.hideVolumeRangeTimer),
                    n.showVolumeRangeTimer = window.setTimeout((function() {
                        n.state.showVolumeRange || n.setState({
                            showVolumeRange: !0
                        })
                    }
                    ), 200)
                }
                ,
                n.hideVolumeRange = function() {
                    window.clearTimeout(n.showVolumeRangeTimer),
                    n.hideVolumeRangeTimer = window.setTimeout((function() {
                        n.state.showVolumeRange && n.setState({
                            showVolumeRange: !1
                        })
                    }
                    ), 200)
                }
                ,
                n.toggleFullscreen = function() {
                    var e = n.state.fullscreen;
                    n.props.requestFullscreen(!e),
                    n.setState({
                        fullscreen: !e
                    })
                }
                ,
                n.showCaptionsList = function() {
                    window.clearTimeout(n.hideCaptionsListTimer),
                    n.showCaptionsListTimer = window.setTimeout((function() {
                        n.state.showCaptionsList || n.setState({
                            showCaptionsList: !0
                        })
                    }
                    ), 200)
                }
                ,
                n.hideCaptionsList = function() {
                    window.clearTimeout(n.showCaptionsListTimer),
                    n.hideCaptionsListTimer = window.setTimeout((function() {
                        n.state.showCaptionsList && n.setState({
                            showCaptionsList: !1
                        })
                    }
                    ), 200)
                }
                ,
                n.handleAdvancedSettingsClick = function(e) {
                    var t = n.props
                      , a = t.pause
                      , r = t.position
                      , i = t.isLoggedIn;
                    if (e.stopPropagation(),
                    a(),
                    !i) {
                        /startPos=\d+/.test("" + window.location) || window.history.replaceState(null, "", window.location + "?" + D.START_POS_QUERY + "=" + r)
                    }
                }
                ,
                n.handleClickCaptionsChoice = function(e) {
                    var t;
                    e.stopPropagation();
                    var a = parseInt(null !== (t = e.target.dataset.index) && void 0 !== t ? t : "0", 10);
                    n.props.setCaptions(a !== n.props.captionsIndex ? a : 0)
                }
                ,
                n.handleCaptionLanguageChange = function(e) {
                    n.props.setCaptions(e !== n.props.captionsIndex ? e : 0)
                }
                ,
                n.handleClickCaptionsIcon = function(e) {
                    e.stopPropagation(),
                    n.toggleCaptions()
                }
                ,
                n.handleClickStepRewind = function(e) {
                    e.stopPropagation(),
                    n.props.stepRewind()
                }
                ,
                n.handleClickStepForward = function(e) {
                    e.stopPropagation(),
                    n.props.stepForward()
                }
                ,
                n.toggleVolumeMute = function() {
                    n._volumeMuteChangedByUser = !0,
                    n.props.toggleVolumeMute()
                }
                ,
                n.showQualityList = function() {
                    window.clearTimeout(n.hideQualityListTimer),
                    n.showQualityListTimer = window.setTimeout((function() {
                        n.state.showQualityList || n.setState({
                            showQualityList: !0
                        })
                    }
                    ), 200)
                }
                ,
                n.hideQualityList = function() {
                    window.clearTimeout(n.showQualityListTimer),
                    n.hideQualityListTimer = window.setTimeout((function() {
                        n.state.showQualityList && n.setState({
                            showQualityList: !1
                        })
                    }
                    ), 200)
                }
                ,
                n.handleClickQualityIcon = function(e) {
                    e.stopPropagation(),
                    n.showQualityList()
                }
                ,
                n.handleClickQuality = function(e) {
                    var t;
                    e.stopPropagation();
                    var a = parseInt(null !== (t = e.target.dataset.index) && void 0 !== t ? t : "0", 10);
                    n.props.setQuality(a)
                }
                ,
                n.handleQualityChange = function(e) {
                    n.props.setQuality(e)
                }
                ,
                n.stopPropagation = function(e) {
                    e.stopPropagation()
                }
                ,
                n.handleClickPlayPause = function(e) {
                    e.stopPropagation();
                    var t = n.props
                      , a = t.playerState
                      , r = t.pause
                      , i = t.play;
                    a === te.State.playing ? r() : i()
                }
                ,
                n.state = {
                    showVolumeRange: !1,
                    fullscreen: !!Object(Oe.f)(),
                    showCaptionsList: !1,
                    showQualityList: !1
                },
                n._isMutedBeforeAd = t.isMuted,
                n._volumeBeforeAd = t.volume,
                n.handleClickChromecast = n.handleClickChromecast.bind(n),
                n.handleClickFullscreen = n.handleClickFullscreen.bind(n),
                n.handleClickVolume = n.handleClickVolume.bind(n),
                n.setVolume = n.setVolume.bind(n),
                n
            }
            return Object(W.__extends)(t, e),
            Object.defineProperty(t.prototype, "volumeChangedByUser", {
                get: function() {
                    return this._volumeChangedByUser
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "volumeMuteChangedByUser", {
                get: function() {
                    return this._volumeMuteChangedByUser
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "isMutedBeforeAd", {
                get: function() {
                    return this._isMutedBeforeAd
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "volumeBeforeAd", {
                get: function() {
                    return this._volumeBeforeAd
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.componentDidMount = function() {
                Object(Oe.a)(document, D.FULLSCREEN_CHANGE_EVENTS, this.handleFullscreenChange)
            }
            ,
            t.prototype.componentDidUpdate = function(e) {
                var t = e.isAd
                  , n = e.adSequence
                  , a = e.isMuted
                  , r = e.volume
                  , i = e.toggleVolumeMute
                  , o = e.updateVolume
                  , s = this.props.isAd && !t
                  , l = !this.props.isAd && t || this.props.adSequence !== n;
                s && (this._volumeChangedByUser = !1,
                this._volumeMuteChangedByUser = !1,
                this._isMutedBeforeAd = a,
                this._volumeBeforeAd = r),
                l && (this._volumeMuteChangedByUser || this._isMutedBeforeAd === a || i(),
                this._volumeChangedByUser || this._volumeBeforeAd === r || o(this._volumeBeforeAd))
            }
            ,
            t.prototype.componentWillUnmount = function() {
                Object(Oe.k)(document, D.FULLSCREEN_CHANGE_EVENTS, this.handleFullscreenChange)
            }
            ,
            t.prototype.handleClickChromecast = function(e) {
                e.stopPropagation()
            }
            ,
            t.prototype.handleClickFullscreen = function(e) {
                e.stopPropagation(),
                this.toggleFullscreen()
            }
            ,
            t.prototype.handleClickVolume = function(e) {
                e.stopPropagation(),
                this.toggleVolumeMute()
            }
            ,
            t.prototype.toggleCaptions = function() {
                var e = this.props.captionsIndex;
                this.props.setCaptions(0 === e ? 1 : 0)
            }
            ,
            t.prototype.setVolume = function(e) {
                var t = this.props
                  , n = t.isMuted
                  , a = t.updateVolume;
                this._volumeChangedByUser = !0,
                n && (this._volumeMuteChangedByUser = !0),
                a(e)
            }
            ,
            t.prototype.renderCaptionsList = function() {
                var e = this.props
                  , t = e.captionsList
                  , n = e.captionsIndex
                  , a = e.basicCaptionSettings
                  , r = a.fontSize
                  , i = a.backgroundToggle
                  , o = e.handleCaptionSizeChange
                  , s = e.handleCaptionBackgroundChange;
                return t.length <= 1 ? null : R.a.createElement("div", {
                    id: "captionsList",
                    onClick: this.stopPropagation,
                    className: Zn.a.captionsList
                }, R.a.createElement("section", null, R.a.createElement("h3", null, R.a.createElement(tt.a, Xn.cc)), R.a.createElement(Mn, {
                    options: t,
                    activeLabel: t[n].label,
                    onOptionSelect: this.handleCaptionLanguageChange
                })), R.a.createElement("div", {
                    className: Zn.a.separatorLine
                }), R.a.createElement("section", null, R.a.createElement("h3", null, R.a.createElement(tt.a, Xn.fontSize)), R.a.createElement(Mn, {
                    options: Ke.i,
                    activeLabel: r.label,
                    onOptionSelect: function(e) {
                        return o(e)
                    }
                })), R.a.createElement("div", {
                    className: Zn.a.separatorLine
                }), R.a.createElement("section", null, R.a.createElement("h3", null, R.a.createElement(tt.a, Xn.background)), R.a.createElement(Mn, {
                    options: Ke.c,
                    activeLabel: i.label,
                    onOptionSelect: s
                })))
            }
            ,
            t.prototype.renderQualityList = function() {
                var e = this.props
                  , t = e.qualityList
                  , n = e.qualityIndex;
                return t.length <= 1 ? null : R.a.createElement("div", {
                    id: "qualityList",
                    onClick: this.stopPropagation,
                    className: Zn.a.qualityList
                }, R.a.createElement("section", null, R.a.createElement("h3", null, R.a.createElement(tt.a, Xn.videoQuality)), R.a.createElement(Mn, {
                    options: t,
                    activeLabel: t[n].label,
                    onOptionSelect: this.handleQualityChange
                })))
            }
            ,
            t.prototype.renderExtraControls = function() {
                var e, t, n = this.props, a = n.isAd, r = n.captionsList, i = n.captionsIndex, o = n.isMuted, s = n.intl, l = n.volume, c = n.qualityList, u = n.qualityIndex, d = n.isMobile, p = n.castApiAvailable, m = this.state, h = m.showVolumeRange, v = m.fullscreen, f = m.showCaptionsList, E = m.showQualityList, g = [], y = !a && c.length > 1, b = !a && r.length > 1, C = {
                    enter: Zn.a.fadeEnter,
                    enterActive: Zn.a.fadeEnterActive,
                    exit: Zn.a.fadeLeave,
                    exitActive: Zn.a.fadeLeaveActive
                };
                return p && g.push(R.a.createElement("span", {
                    key: "cast",
                    id: "castButtonArea",
                    className: Zn.a.extraControl,
                    onClick: this.handleClickChromecast
                }, R.a.createElement("div", {
                    className: Zn.a.castButton
                }, R.a.createElement(Fn.a, {
                    label: s.formatMessage(Xn.cast)
                }, this._cachedIconComponents.chromeCast)))),
                g.push(R.a.createElement("span", {
                    key: "volume",
                    id: "volumeArea",
                    className: Zn.a.extraControl,
                    onMouseEnter: d ? void 0 : this.showVolumeRange,
                    onMouseLeave: d ? void 0 : this.hideVolumeRange
                }, R.a.createElement(Hn, {
                    icon: o ? R.a.createElement(fn, null) : R.a.createElement(En, null),
                    onClick: this.handleClickVolume
                }), !o && h ? R.a.createElement(je.CSSTransition, {
                    key: "volumeRange",
                    classNames: C,
                    timeout: 300
                }, R.a.createElement("div", {
                    className: Zn.a.volumeRange
                }, R.a.createElement(zn.a, {
                    min: 1,
                    max: 100,
                    value: l,
                    onChanging: this.setVolume,
                    useRefresh: !0
                }))) : null)),
                b && g.push(R.a.createElement("span", {
                    key: "captions",
                    className: _()(Zn.a.extraControl, Zn.a.captions, (e = {},
                    e[Zn.a.extraControlActive] = i > 0,
                    e)),
                    onMouseEnter: this.showCaptionsList,
                    onMouseLeave: this.hideCaptionsList
                }, f ? this.renderCaptionsList() : null, R.a.createElement(Hn, {
                    icon: R.a.createElement(gn.a, null),
                    onClick: this.handleClickCaptionsIcon,
                    className: Zn.a.cc
                }))),
                y && g.push(R.a.createElement("span", {
                    key: "quality",
                    id: "qualityArea",
                    className: _()(Zn.a.extraControl, (t = {},
                    t[Zn.a.extraControlActive] = u > 0,
                    t)),
                    onMouseEnter: this.showQualityList,
                    onMouseLeave: this.hideQualityList
                }, E ? this.renderQualityList() : null, R.a.createElement(Hn, {
                    icon: R.a.createElement(yn, null),
                    onClick: this.handleClickQualityIcon
                }))),
                g.push(R.a.createElement("span", {
                    key: "fullscreen",
                    id: "fullscreenArea",
                    className: Zn.a.extraControl
                }, R.a.createElement(Hn, {
                    icon: v ? R.a.createElement(bn, null) : R.a.createElement(Cn, null),
                    tooltip: v ? s.formatMessage(Xn.closeFullscreen) : s.formatMessage(Xn.goFullscreen),
                    tooltipPlacement: "topLeft",
                    onClick: this.handleClickFullscreen
                }))),
                g
            }
            ,
            t.prototype.renderPlaybackButtons = function() {
                var e = this.props
                  , t = e.playerState
                  , n = e.isAd
                  , a = t === te.State.playing
                  , r = []
                  , i = _()(Zn.a.playbackButton, Zn.a.negligibleUnderXS);
                return n || r.push(R.a.createElement("span", {
                    key: "stepRewind",
                    className: i
                }, R.a.createElement(Hn, {
                    icon: R.a.createElement(_n, null),
                    onClick: this.handleClickStepRewind
                }))),
                r.push(R.a.createElement("span", {
                    key: "playPause",
                    className: Zn.a.playbackButton
                }, R.a.createElement(Hn, {
                    icon: a ? R.a.createElement(An, null) : R.a.createElement(Sn.a, null),
                    onClick: this.handleClickPlayPause
                }))),
                n || r.push(R.a.createElement("span", {
                    key: "stepForward",
                    className: i
                }, R.a.createElement(Hn, {
                    icon: R.a.createElement(Tn, null),
                    onClick: this.handleClickStepForward
                }))),
                r
            }
            ,
            t.prototype.render = function() {
                return R.a.createElement(mn.a, {
                    className: Zn.a.playerControls
                }, R.a.createElement(vn.a, {
                    xs: "4",
                    className: Zn.a.infoSection
                }), R.a.createElement(vn.a, {
                    xs: "4",
                    className: Zn.a.playbackButtons
                }, this.renderPlaybackButtons()), R.a.createElement(vn.a, {
                    xs: "4",
                    className: Zn.a.extraControls
                }, this.renderExtraControls()))
            }
            ,
            t
        }(O.PureComponent), $n = Object(Wn.c)(Jn), ea = {
            enter: Zn.a.fadeEnter,
            enterActive: Zn.a.fadeEnterActive,
            exit: Zn.a.fadeLeave,
            exitActive: Zn.a.fadeLeaveActive
        }, ta = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.hasPlayActionTriggered = !1,
                n.playerOverlayRef = Object(O.createRef)(),
                n.updateVolume = function(e) {
                    n.setVolume({
                        volume: e
                    })
                }
                ,
                n.toggleVolumeMute = function() {
                    var e = n.props
                      , t = e.playerStore;
                    (0,
                    e.dispatch)(y.controlActions.setVolume({
                        isMuted: !t.volume.isMuted
                    }))
                }
                ,
                n.togglePlay = function() {
                    n.props.playerStore.playerState === te.State.playing ? n.explicitPause() : n.explicitPlay()
                }
                ,
                n.onMouseMove = function() {
                    n.refreshActiveTimer()
                }
                ,
                n.onMouseLeave = function() {
                    n.props.playerStore.playerState !== te.State.playing || n.state.isShowingOverlayOnStartPlayback || (clearTimeout(n.hideActiveTimer),
                    n.setInactiveTimer = window.setTimeout(n.setInactive, 500))
                }
                ,
                n.onTouchStart = function(e) {
                    if (e.touches) {
                        var t = e.touches[0];
                        n.touchInfo = {
                            startX: t.pageX,
                            startY: t.pageY
                        }
                    }
                }
                ,
                n.onTouchMove = function(e) {
                    if (n.touchInfo) {
                        var t = n.touchInfo
                          , a = t.startX
                          , r = void 0 === a ? -1 : a
                          , i = t.startY
                          , o = void 0 === i ? -1 : i;
                        if (!(r < 0 || o < 0)) {
                            var s = e.touches[0]
                              , l = s.pageX
                              , c = s.pageY
                              , u = Object(un.a)({
                                startX: r,
                                endX: l,
                                startY: o,
                                endY: c,
                                vertical: !0
                            });
                            n.touchInfo = Object(W.__assign)(Object(W.__assign)({}, n.touchInfo), {
                                endX: l,
                                endY: c,
                                direction: u
                            })
                        }
                    }
                }
                ,
                n.onTouchEnd = function() {
                    return n.handleSwipe()
                }
                ,
                n.onTouchCancel = function() {
                    return n.handleSwipe()
                }
                ,
                n.handleSwipe = function() {
                    var e, t = (null !== (e = n.touchInfo) && void 0 !== e ? e : {}).direction;
                    1 === t || void 0 === t ? n.refreshActiveTimer() : n.setInactive(),
                    n.touchInfo = {}
                }
                ,
                n.onMouseMove = ue()(n.onMouseMove, 50),
                n._hotKeyHandler = n._hotKeyHandler.bind(n),
                n._hotKeyHandler = ue()(n._hotKeyHandler, 50),
                n.onClick = n.onClick.bind(n),
                n.onDoubleClick = n.onDoubleClick.bind(n),
                n.play = n.play.bind(n),
                n.pause = n.pause.bind(n),
                n.seek = n.seek.bind(n),
                n.stepRewind = n.stepRewind.bind(n),
                n.stepForward = n.stepForward.bind(n),
                n.setVolume = n.setVolume.bind(n),
                n.setCaptions = n.setCaptions.bind(n),
                n.setQuality = n.setQuality.bind(n),
                n.isAd = n.isAd.bind(n),
                n.setInactive = n.setInactive.bind(n),
                n.refreshActiveTimer = n.refreshActiveTimer.bind(n),
                n.explicitPlay = n.play.bind(n, !0),
                n.explicitPause = n.pause.bind(n, !0),
                n.state = {
                    active: !0,
                    ratingActive: !1,
                    showLargePlayButton: !0,
                    isShowingOverlayOnStartPlayback: !0,
                    shouldShowRatingLayout: !0
                },
                n
            }
            return Object(W.__extends)(t, e),
            t.getDerivedStateFromProps = function(e, t) {
                if (t.showLargePlayButton) {
                    var n = e.playerStore;
                    if (n && n.playerState === te.State.playing)
                        return {
                            showLargePlayButton: !1
                        }
                }
                return null
            }
            ,
            t.prototype.componentDidMount = function() {
                this.showOverlayOnStartPlayback(),
                Object(Oe.a)(window, "keydown", this._hotKeyHandler)
            }
            ,
            t.prototype.componentDidUpdate = function() {
                this.state.isShowingOverlayOnStartPlayback && this.showOverlayOnStartPlayback()
            }
            ,
            t.prototype.componentWillUnmount = function() {
                clearTimeout(this.hideActiveTimer),
                clearTimeout(this.setInactiveTimer),
                clearTimeout(this.hideRatingActiveTimer),
                clearInterval(this.showRatingDuringPlaybackTimer),
                clearTimeout(this.renderControlTimeout),
                Object(Oe.k)(window, "keydown", this._hotKeyHandler)
            }
            ,
            t.prototype.setRatingShowInPlayTimer = function() {
                var e = this;
                this.showRatingDuringPlaybackTimer && clearTimeout(this.showRatingDuringPlaybackTimer),
                this.showRatingDuringPlaybackTimer = window.setTimeout((function() {
                    e.setShouldShowRating(!0),
                    e.showRatingOverlay()
                }
                ), 36e5)
            }
            ,
            t.prototype.setRatingState = function(e) {
                this.setState({
                    ratingActive: e
                })
            }
            ,
            t.prototype.setShouldShowRating = function(e) {
                this.setState({
                    shouldShowRatingLayout: e
                })
            }
            ,
            t.prototype.showRatingOverlay = function() {
                var e = this;
                this.state.shouldShowRatingLayout && (this.isAd() || this.props.playerStore.playerState === te.State.playing && (this.setState({
                    ratingActive: !0,
                    shouldShowRatingLayout: !1
                }),
                this.hideRatingActiveTimer && clearTimeout(this.hideRatingActiveTimer),
                this.hideRatingActiveTimer = window.setTimeout((function() {
                    e.setState({
                        ratingActive: !1
                    }),
                    e.setRatingShowInPlayTimer()
                }
                ), 15e3)))
            }
            ,
            t.prototype.play = function(e) {
                var t = this
                  , n = this.props
                  , a = n.dispatch
                  , r = n.video
                  , i = void 0 === r ? {
                    id: ""
                } : r
                  , o = n.webEnhancedRegistration
                  , s = n.hasShownRegistrationPrompt;
                if (!n.isLoggedIn) {
                    var l = o.getValue();
                    if (l === x.a.forced)
                        return void a(Object(he.w)({
                            isOpen: !0
                        }));
                    if (l === x.a.optional && !s)
                        return void a(Object(he.w)({
                            isOpen: !0,
                            title: i.id,
                            onClose: function() {
                                t.play(!0)
                            }
                        }))
                }
                return e && !this.hasPlayActionTriggered && (this.hasPlayActionTriggered = !0),
                a(y.controlActions.play()).then((function() {
                    if (e) {
                        t.refreshActiveTimer();
                        var n = Object(Se.m)(i.id, wt.PauseState.RESUMED);
                        Object(Pe.g)(Ee.r, n)
                    }
                }
                )).catch((function(e) {
                    throw e
                }
                ))
            }
            ,
            t.prototype.pause = function(e) {
                var t = this
                  , n = this.props
                  , a = n.dispatch
                  , r = n.video
                  , i = void 0 === r ? {
                    id: ""
                } : r;
                return a(y.controlActions.pause()).then((function() {
                    if (e) {
                        t.refreshActiveTimer();
                        var n = Object(Se.m)(i.id, wt.PauseState.PAUSED);
                        Object(Pe.g)(Ee.r, n)
                    }
                }
                ))
            }
            ,
            t.prototype.seek = function(e) {
                var t = this
                  , n = this.props
                  , a = n.dispatch
                  , r = n.video
                  , i = void 0 === r ? {
                    id: ""
                } : r
                  , o = n.playerStore.progress.position;
                return a(y.controlActions.seek(e)).then((function() {
                    t.refreshActiveTimer();
                    var n = Object(Se.t)({
                        videoId: i.id,
                        fromPosition: o,
                        toPosition: e
                    });
                    Object(Pe.g)(Ee.B, n)
                }
                ))
            }
            ,
            t.prototype.stepRewind = function() {
                var e = this
                  , t = this.props
                  , n = t.dispatch
                  , a = t.video
                  , r = void 0 === a ? {
                    id: ""
                } : a
                  , i = t.playerStore.progress.position;
                return n(y.controlActions.stepRewind()).then((function(t) {
                    e.refreshActiveTimer();
                    var n = Object(Se.t)({
                        videoId: r.id,
                        fromPosition: i,
                        toPosition: t
                    });
                    Object(Pe.g)(Ee.B, n)
                }
                ))
            }
            ,
            t.prototype.stepForward = function() {
                var e = this
                  , t = this.props
                  , n = t.dispatch
                  , a = t.video
                  , r = void 0 === a ? {
                    id: ""
                } : a
                  , i = t.playerStore.progress.position;
                return n(y.controlActions.stepForward()).then((function(t) {
                    e.refreshActiveTimer();
                    var n = Object(Se.t)({
                        videoId: r.id,
                        fromPosition: i,
                        toPosition: t
                    });
                    Object(Pe.g)(Ee.B, n)
                }
                ))
            }
            ,
            t.prototype.setVolume = function(e) {
                return this.refreshActiveTimer(),
                this.props.dispatch(y.controlActions.setVolume(e))
            }
            ,
            t.prototype.setCaptions = function(e) {
                var t = this
                  , n = this.props
                  , a = n.dispatch
                  , r = n.video
                  , i = void 0 === r ? {
                    id: ""
                } : r;
                return a(y.controlActions.setCaptions(e)).then((function() {
                    t.refreshActiveTimer();
                    var e = t.props.playerStore.captions || {}
                      , n = e.captionsList
                      , a = "off" === (void 0 === n ? [] : n)[e.captionsIndex].label.toLowerCase() ? wt.ToggleState.OFF : wt.ToggleState.ON
                      , r = Object(Se.y)(i.id, a);
                    Object(Pe.g)(Ee.J, r)
                }
                ))
            }
            ,
            t.prototype.setQuality = function(e) {
                var t = this
                  , n = this.props
                  , a = n.dispatch
                  , r = n.video
                  , i = void 0 === r ? {
                    id: ""
                } : r;
                return a(y.controlActions.setQuality(e)).then((function() {
                    t.refreshActiveTimer();
                    var n = Object(Se.o)(i.id, e);
                    Object(Pe.g)(Ee.u, n)
                }
                ))
            }
            ,
            t.prototype._hotKeyHandler = function(e) {
                var t = e.keyCode
                  , n = e.altKey
                  , a = e.ctrlKey
                  , r = e.metaKey
                  , i = e.shiftKey;
                if (!(n || a || r || i || document.activeElement && "input" === document.activeElement.tagName.toLowerCase())) {
                    var o = this.props
                      , s = o.requestFullscreen
                      , l = o.playerStore
                      , c = l.playerState
                      , u = l.volume.isMuted
                      , d = l.captions
                      , p = d.captionsList
                      , m = d.captionsIndex
                      , h = cn.r.space
                      , v = cn.r.k
                      , f = cn.r.arrowLeft
                      , E = cn.r.j
                      , g = cn.r.arrowRight
                      , y = cn.r.l
                      , b = cn.r.m
                      , C = cn.r.f
                      , _ = cn.r.c
                      , A = cn.r.escape;
                    switch (t) {
                    case h:
                        e.preventDefault();
                    case v:
                        c === te.State.paused ? this.play(!0) : this.pause(!0);
                        break;
                    case f:
                    case E:
                        if (this.isAd())
                            break;
                        this.stepRewind();
                        break;
                    case g:
                    case y:
                        if (this.isAd())
                            break;
                        this.stepForward();
                        break;
                    case b:
                        var S = !u;
                        this.setVolume({
                            isMuted: S
                        });
                        break;
                    case C:
                        s(!Object(Oe.f)());
                        break;
                    case A:
                        Object(Oe.f)() && s(!1);
                        break;
                    case _:
                        if (this.isAd())
                            break;
                        var T = m + 1 >= p.length ? 0 : m + 1;
                        this.setCaptions(T)
                    }
                }
            }
            ,
            t.prototype.isAd = function() {
                return this.props.playerStore.contentType === te.PLAYER_CONTENT_TYPE.ad
            }
            ,
            t.prototype.setInactive = function() {
                var e = this.props.dispatch;
                this.setState({
                    active: !1
                }),
                clearTimeout(this.renderControlTimeout),
                this.renderControlTimeout = window.setTimeout((function() {
                    e(Object(he.y)(!1))
                }
                ), 200)
            }
            ,
            t.prototype.showOverlayOnStartPlayback = function() {
                var e = this;
                this.props.playerStore.playerState === te.State.playing && (this.hideActiveTimer || (this.hideActiveTimer = window.setTimeout((function() {
                    e.setState({
                        isShowingOverlayOnStartPlayback: !1
                    }),
                    e.props.playerStore.playerState === te.State.playing && e.setInactive()
                }
                ), D.PLAYER_CONTROL_FIRST_SHOW_TIMEOUT)))
            }
            ,
            t.prototype.refreshActiveTimer = function() {
                if (!this.state.isShowingOverlayOnStartPlayback) {
                    var e = this.props
                      , t = e.playerStore.playerState
                      , n = e.dispatch;
                    clearTimeout(this.hideActiveTimer),
                    clearTimeout(this.renderControlTimeout),
                    this.state.active || (this.setState({
                        active: !0
                    }),
                    n(Object(he.y)(!0))),
                    t === te.State.playing && (this.hideActiveTimer = window.setTimeout(this.setInactive, D.PLAYER_CURSOR_IDLE_TIMEOUT))
                }
            }
            ,
            t.prototype.onClick = function(e) {
                (0,
                this.props.dispatch)(Object(he.y)(!0)),
                this.isAd() || (e.stopPropagation(),
                this.togglePlay())
            }
            ,
            t.prototype.onDoubleClick = function(e) {
                e.target !== this.playerOverlayRef.current || this.props.requestFullscreen(!Object(Oe.f)())
            }
            ,
            t.prototype.render = function() {
                var e, t, n, a = this.props, r = a.video, i = a.requestFullscreen, o = a.showAutoPlay, s = a.className, l = a.isMobile, c = a.castApiAvailable, u = a.title, d = a.seriesTitle, p = a.thumbnailSprites, m = a.playerStore, h = m.playerState, v = m.progress, f = v.position, E = v.duration, g = v.bufferPosition, y = v.isBuffering, b = m.volume, C = b.isMuted, A = b.volume, S = m.captions, T = S.captionsIndex, O = S.captionsList, M = m.quality, P = M.qualityIndex, w = M.qualityList, L = M.isHD, N = m.ad.adSequence, I = a.isFromAutoplay, k = a.basicCaptionSettings, D = a.handleCaptionSizeChange, j = a.handleCaptionBackgroundChange, x = a.isLoggedIn, V = a.castReceiverState, U = a.adBreaks, B = a.renderControls, H = this.state, Y = H.active, F = H.ratingActive, W = H.showLargePlayButton, G = H.isShowingOverlayOnStartPlayback, q = this.isAd(), K = !q && y, z = !q && o, Q = h === te.State.paused && Math.abs(f - E) > 1, Z = _()(Zn.a.webPlayerOverlay, ((e = {})[Zn.a.hideCursor] = !Y,
                e[Zn.a.isAd] = q,
                e), s), X = _()(Zn.a.lowerArea, ((t = {})[Zn.a.active] = Y,
                t[Zn.a.isAd] = q,
                t[Zn.a.autoplayVisible] = z,
                t)), J = _()(Zn.a.titleArea, ((n = {})[Zn.a.topActive] = Y || F,
                n)), $ = R.a.createElement(an, {
                    active: F,
                    ratings: r.ratings
                }), ee = R.a.createElement(ln, {
                    className: Zn.a.titleWrapper,
                    subtitle: d ? u : "",
                    subtitleClassName: Zn.a.subtitle,
                    title: d || u,
                    titleClassName: Zn.a.title,
                    ratingOverlay: $,
                    showTitle: Y,
                    showRating: F
                }), ne = c && V !== window.cast.framework.CastState.NO_DEVICES_AVAILABLE, ae = G && ne;
                return R.a.createElement("div", {
                    className: Z,
                    onClick: l ? void 0 : this.onClick,
                    onDoubleClick: l ? void 0 : this.onDoubleClick,
                    onMouseMove: l ? void 0 : this.onMouseMove,
                    onMouseLeave: l ? void 0 : this.onMouseLeave,
                    onTouchStart: l ? this.onTouchStart : void 0,
                    onTouchMove: l ? this.onTouchMove : void 0,
                    onTouchEnd: l ? this.onTouchEnd : void 0,
                    onTouchCancel: l ? this.onTouchCancel : void 0,
                    ref: this.playerOverlayRef
                }, W && R.a.createElement("div", {
                    className: Zn.a.centeredPlayButtonContainer
                }, R.a.createElement(Xt.a, {
                    className: Zn.a.playButton
                })), R.a.createElement(je.TransitionGroup, {
                    component: "div",
                    className: J
                }, R.a.createElement(je.CSSTransition, {
                    key: "title",
                    timeout: 200,
                    classNames: ea
                }, ee)), K ? R.a.createElement(nt.a, {
                    className: Zn.a.spinner
                }) : null, R.a.createElement(je.TransitionGroup, {
                    component: "div",
                    className: X
                }, R.a.createElement(je.CSSTransition, {
                    key: "message",
                    classNames: ea,
                    timeout: 200
                }, R.a.createElement("div", {
                    className: Zn.a.bottomMessage
                }, q ? R.a.createElement("div", {
                    key: "adMessage",
                    className: Zn.a.adGradient
                }, R.a.createElement(Qt, {
                    className: Zn.a.adMessage
                })) : null, z ? R.a.createElement(dn.a, {
                    key: "autoplay",
                    id: r.id,
                    isEpisode: !!r.series_id,
                    videoPaused: Q,
                    isFromAutoplay: I
                }) : null)), B ? R.a.createElement(je.CSSTransition, {
                    key: "control",
                    classNames: ea,
                    timeout: 200
                }, R.a.createElement("div", {
                    className: Zn.a.controlArea
                }, R.a.createElement(Zt.a, {
                    bufferPosition: g,
                    duration: E,
                    isAd: q,
                    isMobile: l,
                    position: f,
                    seek: this.seek,
                    thumbnailSprites: p,
                    enablePreview: !0,
                    adBreaks: U
                }), R.a.createElement($n, {
                    playerState: h,
                    isAd: q,
                    adSequence: N,
                    isMuted: C,
                    volume: A,
                    captionsList: O,
                    captionsIndex: T,
                    setCaptions: this.setCaptions,
                    toggleVolumeMute: this.toggleVolumeMute,
                    updateVolume: this.updateVolume,
                    isHD: L,
                    qualityList: w,
                    qualityIndex: P,
                    setQuality: this.setQuality,
                    requestFullscreen: i,
                    play: this.explicitPlay,
                    pause: this.explicitPause,
                    stepRewind: this.stepRewind,
                    stepForward: this.stepForward,
                    isMobile: l,
                    castApiAvailable: c,
                    basicCaptionSettings: k,
                    handleCaptionSizeChange: D,
                    handleCaptionBackgroundChange: j,
                    position: f,
                    isLoggedIn: x,
                    shouldInitShowCastTip: ae
                }))) : null))
            }
            ,
            t
        }(O.Component), na = Object(P.b)((function(e, t) {
            var n, a, r, i, o, s = e.player, l = e.auth, c = e.ui, u = null !== (a = null === (n = e.chromecast) || void 0 === n ? void 0 : n.castReceiverState) && void 0 !== a ? a : "", d = null !== (i = null === (r = e.chromecast) || void 0 === r ? void 0 : r.castApiAvailable) && void 0 !== i && i, p = null === (o = e.video) || void 0 === o ? void 0 : o.thumbnailSpritesById, m = t.video, h = void 0 === m ? {
                id: ""
            } : m, v = c.registrationPrompt.shownInTitles.includes(h.id);
            return {
                castReceiverState: u,
                castApiAvailable: d,
                playerStore: s,
                thumbnailSprites: (null == p ? void 0 : p[h.id]) || D.FREEZED_EMPTY_OBJECT,
                isLoggedIn: !(!l || !l.user),
                hasShownRegistrationPrompt: v,
                renderControls: c.renderControls
            }
        }
        ), null, null, {
            forwardRef: !0
        })(ta), aa = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.onPlayerCreate = function(e) {
                    var t, a;
                    n.props.showTVRatings.getValue() && (e.on(te.PLAYER_EVENTS.play, (function() {
                        var e;
                        null === (e = n.overlayComponent.current) || void 0 === e || e.showRatingOverlay()
                    }
                    )),
                    e.on(te.PLAYER_EVENTS.adStart, (function() {
                        var e;
                        null === (e = n.overlayComponent.current) || void 0 === e || e.setRatingState(!1)
                    }
                    )),
                    e.on(te.PLAYER_EVENTS.adComplete, (function() {
                        var e;
                        null === (e = n.overlayComponent.current) || void 0 === e || e.setShouldShowRating(!0)
                    }
                    ))),
                    null === (a = (t = n.props).onPlayerCreate) || void 0 === a || a.call(t, e)
                }
                ,
                n.overlayComponent = R.a.createRef(),
                n.props.showTVRatings.logExposure(),
                n.props.removeIma.logExposure(),
                n.props.webHlsUpgrade.logExposure(),
                n
            }
            return Object(W.__extends)(t, e),
            t.prototype.render = function() {
                var e = this.props
                  , t = e.className
                  , n = e.video
                  , a = e.belongSeries
                  , r = e.prerollUrl
                  , i = e.ready
                  , o = e.trailerId
                  , s = e.autoStart
                  , l = void 0 !== s && s
                  , c = e.startPosition
                  , u = e.captionSettings
                  , d = e.poster
                  , p = e.onPlayerSetupError
                  , m = e.isMonitoringEnabled
                  , h = e.userAgent
                  , v = e.userId
                  , f = e.experimentName
                  , E = e.experimentTreatmentName
                  , g = e.videoResource
                  , y = e.removeIma
                  , b = e.webHlsUpgrade
                  , C = e.performanceCollectorEnabled
                  , _ = u.background.toggle
                  , A = {
                    fontSize: u.font.size,
                    backgroundToggle: _
                }
                  , S = null;
                if (i) {
                    var T = this.props
                      , O = T.isMobile
                      , M = void 0 !== O && O
                      , P = T.requestFullscreen
                      , w = T.showAutoPlay
                      , L = T.title
                      , N = T.seriesTitle
                      , I = T.isFromAutoplay
                      , k = T.adBreaks
                      , D = T.handleCaptionSizeChange
                      , j = T.handleCaptionBackgroundChange
                      , x = T.webEnhancedRegistration;
                    S = R.a.createElement(na, {
                        ref: this.overlayComponent,
                        video: n,
                        requestFullscreen: P,
                        showAutoPlay: w,
                        isMobile: M,
                        seriesTitle: N,
                        title: L,
                        adBreaks: k,
                        isFromAutoplay: I,
                        basicCaptionSettings: A,
                        handleCaptionSizeChange: D,
                        handleCaptionBackgroundChange: j,
                        webEnhancedRegistration: x
                    })
                }
                return R.a.createElement("div", {
                    className: t
                }, R.a.createElement(Rt, {
                    key: "" + it()(g),
                    data: n,
                    belongSeries: a,
                    prerollUrl: r,
                    onPlayerCreate: this.onPlayerCreate,
                    onPlayerSetupError: p,
                    autoStart: l,
                    resumePos: c,
                    trailerId: o,
                    captionSettings: u,
                    poster: d,
                    playerType: ge.e.hls,
                    isMonitoringEnabled: m,
                    userAgent: h,
                    userId: v,
                    experimentName: f,
                    experimentTreatmentName: E,
                    videoResource: g,
                    analyticsConfig: st.a.getAnalyticsConfig(),
                    reuseVideoElement: !0,
                    removeIma: y.getValue(),
                    performanceCollectorEnabled: C,
                    useHlsNext: b.getValue()
                }), S)
            }
            ,
            t
        }(O.Component), ra = Object(B.a)(aa, {
            showTVRatings: Pt.a,
            removeIma: Mt.a,
            webHlsUpgrade: V.a,
            webEnhancedRegistration: x.b
        }), ia = n(1597), oa = n(1649), sa = n.n(oa), la = Object(ke.a)({
            cast: {
                defaultMessage: "Casting Now",
                id: "src/web/components/ChromecastPlayButton/ChromecastPlayButton:cast"
            }
        }), ca = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.handleClick = n.handleClick.bind(n),
                n
            }
            return Object(W.__extends)(t, e),
            t.prototype.handleClick = function() {
                var e = this.props
                  , t = e.castContent
                  , n = e.currentVideoIsCasting
                  , a = e.castVideoLoading
                  , r = e.castVideoLoadError;
                a || n && !r || t()
            }
            ,
            t.prototype.render = function() {
                var e = this.props
                  , t = e.currentVideoIsCasting
                  , n = e.className
                  , a = e.position
                  , r = e.duration
                  , i = e.castVideoLoadError
                  , o = e.castVideoLoading
                  , s = R.a.createElement(ia.c, {
                    className: sa.a.playPause
                });
                return !t || i || o || (s = R.a.createElement("div", {
                    className: sa.a.castingMessage
                }, R.a.createElement("div", {
                    className: sa.a.text
                }, R.a.createElement(tt.a, la.cast)), a && r ? R.a.createElement("div", {
                    className: sa.a.progressWrapper
                }, R.a.createElement("div", {
                    className: sa.a.progress,
                    style: {
                        width: a / r * 100 + "%"
                    }
                })) : null)),
                R.a.createElement("div", {
                    className: n,
                    onClick: this.handleClick
                }, R.a.createElement("span", {
                    key: "playPause",
                    className: sa.a.playbackButton
                }, s))
            }
            ,
            t
        }(O.Component), ua = Object(P.b)((function(e, t) {
            var n = e.chromecast
              , a = e.video.byId
              , r = t.contentId
              , i = n.contentId
              , o = n.position;
            return {
                currentVideoIsCasting: i === r,
                castVideoLoading: n.castVideoLoading,
                castVideoLoadError: n.castVideoLoadError,
                position: o,
                duration: (a[r] || {}).duration
            }
        }
        ))(ca), da = n(14), pa = n(547), ma = n(1596), ha = n.n(ma), va = function(e) {
            var t = e.className;
            return R.a.createElement(xe.a, {
                className: _()(ha.a.icon, t),
                viewBox: "0 0 66 66"
            }, R.a.createElement("path", {
                d: "M19.316 0L0 19.316v27.318l19.316 19.315h27.318l19.315-19.315V19.316L46.634 0H19.316zM1.5 46.013V19.937L19.937 1.5h26.076l18.436 18.437v26.076L46.013 64.449H19.937L1.5 46.013z"
            }), R.a.createElement("path", {
                d: "M38.16 28.66c0 3.128-.002 6.259.004 9.388.001.466-.156 1.051.544 1.173.657.115.782-.449.984-.88.885-1.897 1.758-3.799 2.65-5.692.589-1.245 1.697-1.558 2.843-.828.705.449.992 1.154.678 1.932-1.351 3.348-2.605 6.744-4.125 10.016-2.758 5.937-10.515 8.664-16.083 5.793-2.938-1.515-4.362-4.083-5.092-7.185-.633-2.688-.645-5.4-.575-8.13.096-3.76.17-7.52.254-11.279.006-.286.016-.574.045-.86.105-1.076.634-1.558 1.675-1.532 1.032.024 1.685.627 1.695 1.659.021 2.497.008 4.996.01 7.494 0 .23-.074.504.025.678.13.232.38.5.613.538.174.027.486-.25.582-.463.11-.242.06-.563.06-.848.005-3.417-.009-6.834.012-10.25.008-1.375 1.253-2.16 2.526-1.624.752.317 1.028.908 1.023 1.718-.02 3.157-.007 6.316-.006 9.474 0 .2-.07.444.018.594.152.26.4.46.61.685.224-.213.514-.391.655-.65.11-.203.037-.506.037-.764.002-3.905-.003-7.81.002-11.715.001-1.308.612-1.896 1.899-1.86 1.113.03 1.608.523 1.61 1.663.007 4.02.002 8.039.002 12.059 0 .2-.072.447.017.594.165.271.426.486.646.724.22-.247.594-.47.633-.744.095-.646.033-1.315.033-1.977 0-2.812-.01-5.626.006-8.44.01-1.248.888-1.974 2.088-1.784.87.14 1.398.752 1.4 1.676.007 3.214.003 6.43.003 9.646"
            }))
        }, fa = function() {
            var e = _()(ha.a.icon, ha.a.matureIcon);
            return R.a.createElement(xe.a, {
                className: e,
                viewBox: "0 0 67 67"
            }, R.a.createElement("g", null, R.a.createElement("path", {
                className: ha.a.matureEl1,
                d: "M1 66h65V1H1z"
            }), R.a.createElement("path", {
                className: ha.a.matureEl2,
                d: "M40 17h10v33h-6V28c-.44-.963-.433-1.861 0-3-.403-1.176-.396-2.068 0-3l-7 28h-6l-7-28c.396.932.403 1.824 0 3 .433 1.139.44 2.037 0 3v22h-6V17h10l6 26 6-26z"
            })))
        }, Ea = Object(ke.a)({
            adblock: {
                defaultMessage: "Please disable your ad-blocker to watch this title.",
                id: "src/web/components/VideoDetail/WarningBlocks/WarningBlocks:adblock"
            },
            adblockDesc: {
                defaultMessage: "For instructions on how to whitelist tubitv.com, visit our <customtag>support page</customtag>.",
                id: "src/web/components/VideoDetail/WarningBlocks/WarningBlocks:adblockDesc"
            },
            unavailable: {
                defaultMessage: "Content Unavailable",
                id: "src/web/components/VideoDetail/WarningBlocks/WarningBlocks:unavailable"
            },
            unavailableDesc: {
                defaultMessage: "Sorry, this video is not currently available.",
                id: "src/web/components/VideoDetail/WarningBlocks/WarningBlocks:unavailableDesc"
            },
            castUnavailable: {
                defaultMessage: "We're sorry, but Chromecast is not available for this title.",
                id: "src/web/components/VideoDetail/WarningBlocks/WarningBlocks:castUnavailable"
            },
            castUnavailableDesc: {
                defaultMessage: "Stop casting to watch this title in our web player",
                id: "src/web/components/VideoDetail/WarningBlocks/WarningBlocks:castUnavailableDesc"
            },
            error: {
                defaultMessage: "Sorry, there was a problem loading the video player.",
                id: "src/web/components/VideoDetail/WarningBlocks/WarningBlocks:error"
            },
            errorDesc: {
                defaultMessage: "Please try to reload the page.",
                id: "src/web/components/VideoDetail/WarningBlocks/WarningBlocks:errorDesc"
            },
            errorDesc2: {
                defaultMessage: "If you are using an ad-blocker, please disable it or <customtag>whitelist tubitv.com</customtag>",
                id: "src/web/components/VideoDetail/WarningBlocks/WarningBlocks:errorDesc2"
            },
            errorDesc3: {
                defaultMessage: "If the problem persists, please contact support@tubi.tv",
                id: "src/web/components/VideoDetail/WarningBlocks/WarningBlocks:errorDesc3"
            },
            matureSignIn: {
                defaultMessage: "Sign In",
                id: "src/web/components/VideoDetail/WarningBlocks/WarningBlocks:matureSignIn"
            },
            matureRegister: {
                defaultMessage: "Don't have an account? <customtag>Register</customtag>",
                id: "src/web/components/VideoDetail/WarningBlocks/WarningBlocks:matureRegister"
            },
            kidsModeMessage: {
                defaultMessage: "This video is rated above your allowed level",
                id: "src/web/components/VideoDetail/WarningBlocks/WarningBlocks:kidsModeMessage"
            }
        }), ga = function(e) {
            var t = e.className
              , n = _()(ha.a.warning, ha.a.adblock, t);
            return R.a.createElement("div", {
                className: n,
                "data-nosnippet": !0
            }, R.a.createElement(va, {
                className: ha.a.adblockIcon
            }), R.a.createElement("div", {
                className: ha.a.text
            }, R.a.createElement("div", {
                className: ha.a.head
            }, R.a.createElement(tt.a, Ea.adblock)), R.a.createElement("div", {
                className: ha.a.sub
            }, R.a.createElement(tt.a, o()({}, Ea.adblockDesc, {
                values: {
                    customtag: function(e) {
                        var t = Je()(e, 1)[0];
                        return R.a.createElement(et.a, {
                            to: "https://help.tubitv.com/hc/en-us/sections/204257827-How-to-whitelist-Tubi-TV"
                        }, t)
                    }
                }
            })))))
        }, ya = function(e) {
            var t = e.message
              , n = e.showLogin
              , a = void 0 === n || n
              , r = e.pathname
              , i = e.className
              , s = _()(ha.a.warning, ha.a.mature, i);
            return R.a.createElement("div", {
                className: s
            }, R.a.createElement(fa, null), R.a.createElement("div", {
                className: ha.a.text
            }, R.a.createElement("div", {
                className: ha.a.sub
            }, t)), a ? R.a.createElement("div", {
                className: ha.a.extra
            }, R.a.createElement(da.Link, {
                to: at.d.signIn + "?redirect=" + r
            }, R.a.createElement(Be.a, null, R.a.createElement(tt.a, Ea.matureSignIn))), R.a.createElement("br", null), R.a.createElement("span", {
                className: ha.a.hint
            }, R.a.createElement(tt.a, o()({}, Ea.matureRegister, {
                values: {
                    customtag: function(e) {
                        var t = Je()(e, 1)[0];
                        return R.a.createElement(et.a, {
                            to: at.d.register + "?redirect=" + r
                        }, t)
                    }
                }
            })))) : null)
        }, ba = function(e) {
            var t = e.className
              , n = _()(ha.a.warning, ha.a.unavailable, t);
            return R.a.createElement("div", {
                className: n
            }, R.a.createElement("div", {
                className: ha.a.text
            }, R.a.createElement("div", {
                className: ha.a.head
            }, R.a.createElement(tt.a, Ea.unavailable)), R.a.createElement("div", {
                className: ha.a.sub
            }, R.a.createElement(tt.a, Ea.unavailableDesc))))
        }, Ca = function(e) {
            var t = e.className
              , n = e.rating
              , a = void 0 === n ? null : n
              , r = _()(ha.a.warning, ha.a.unavailable, t);
            return R.a.createElement("div", {
                className: r
            }, a && a.length ? R.a.createElement(pa.a, {
                text: a[0].value,
                className: ha.a.ratingBadge
            }) : null, R.a.createElement("div", {
                className: ha.a.text
            }, R.a.createElement("div", {
                className: ha.a.head
            }, R.a.createElement(tt.a, Ea.kidsModeMessage))))
        }, _a = function(e) {
            var t = e.className
              , n = _()(ha.a.warning, ha.a.unavailable, t);
            return R.a.createElement("div", {
                className: n,
                "data-nosnippet": !0
            }, R.a.createElement("div", {
                className: ha.a.text
            }, R.a.createElement("div", {
                className: ha.a.head
            }, R.a.createElement(tt.a, Ea.error)), R.a.createElement("div", {
                className: ha.a.sub
            }, R.a.createElement(tt.a, Ea.errorDesc)), R.a.createElement("div", {
                className: ha.a.sub
            }, R.a.createElement(tt.a, o()({}, Ea.errorDesc2, {
                values: {
                    customtag: function(e) {
                        var t = Je()(e, 1)[0];
                        return R.a.createElement(et.a, {
                            to: "https://help.tubitv.com/hc/en-us/sections/204257827-How-to-whitelist-Tubi-TV"
                        }, t)
                    }
                }
            }))), R.a.createElement("div", {
                className: ha.a.sub
            }, R.a.createElement(tt.a, Ea.errorDesc3))))
        }, Aa = function(e, t) {
            Object(Pe.k)({
                type: fe.p.videoInfo,
                subtype: fe.h.PLAYBACK.WEB_MOBILE_PLAY_BUTTON,
                message: {
                    id: e,
                    title: t
                }
            })
        }, Sa = n(1595), Ta = n.n(Sa), Oa = Object(ke.a)({
            play: {
                defaultMessage: "Play",
                id: "src/web/components/VideoDetail/PlayerArea/MobilePlayButton:play"
            }
        }), Ra = (Ln = wn = function(e) {
            function t() {
                var e, n, a, r;
                p()(this, t);
                for (var i = arguments.length, o = Array(i), s = 0; s < i; s++)
                    o[s] = arguments[s];
                return n = a = f()(this, (e = t.__proto__ || u()(t)).call.apply(e, [this].concat(o))),
                a.getResumePosition = function() {
                    var e = a.props.viewHistory;
                    if (!e)
                        return 0;
                    var t = e.contentType
                      , n = e.position
                      , r = e.id
                      , i = e.episodes
                      , o = n || 0;
                    if ("series" === t) {
                        var s = void 0;
                        for (var l in i)
                            if (i[l].contentId === parseInt(r, 10)) {
                                s = i[l];
                                break
                            }
                        o = s ? s.position : 0
                    }
                    return o
                }
                ,
                a.trackMobilePlayButtonClick = function() {
                    var e = a.props
                      , t = e.id
                      , n = e.title;
                    Aa(t, n)
                }
                ,
                r = n,
                f()(a, r)
            }
            return g()(t, e),
            h()(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.viewHistory
                      , n = e.duration
                      , a = e.isInWebRefresh
                      , r = t ? this.getResumePosition() : 0;
                    return R.a.createElement("div", {
                        className: Ta.a.mobilePlayButton,
                        onClick: this.trackMobilePlayButtonClick
                    }, R.a.createElement(Xt.a, {
                        className: _()(Ta.a.play, l()({}, Ta.a.withWebRefresh, a))
                    }), a ? R.a.createElement("div", {
                        className: Ta.a.playText
                    }, R.a.createElement(tt.a, Oa.play)) : null, r ? R.a.createElement("div", {
                        className: Ta.a.progressWrapper
                    }, R.a.createElement("div", {
                        className: Ta.a.progress,
                        style: {
                            width: r / n * 100 + "%"
                        }
                    })) : null)
                }
            }]),
            t
        }(O.PureComponent),
        wn.propTypes = {
            viewHistory: T.a.object,
            title: T.a.string.isRequired,
            id: T.a.string.isRequired,
            duration: T.a.number,
            isInWebRefresh: T.a.bool
        },
        Ln), Ma = Object(ke.a)({
            parentalRestrictedMessage: {
                defaultMessage: "This video is rated above your allowed level. Please adjust your <parentallink>Parental Controls</parentallink> settings.",
                id: "src/web/components/VideoDetail/PlayerArea/PlayerArea:parentalRestrictedMessage"
            },
            loginGatedMessage: {
                defaultMessage: "Mature rating. Sign in or register to continue watching.",
                id: "src/web/components/VideoDetail/PlayerArea/PlayerArea:loginGatedMessage"
            }
        }), Pa = (In = Nn = function(e) {
            function t(e) {
                p()(this, t);
                var n = f()(this, (t.__proto__ || u()(t)).call(this, e));
                return n.castVideo = function() {
                    var e = n.props
                      , t = e.video.id;
                    (0,
                    e.castVideo)(t)
                }
                ,
                n.playerAreaRef = R.a.createRef(),
                n
            }
            return g()(t, e),
            h()(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    if (this.props.isInWebRefresh) {
                        var t = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
                        this.scrollObserver = Object(de.a)(window, "scroll").subscribe((function() {
                            var n = e.playerAreaRef.current;
                            if (n) {
                                var a = (.8 * t - window.scrollY) / (.8 * t);
                                n.style.opacity = String(a > 0 ? a : 0)
                            }
                        }
                        ))
                    }
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.scrollObserver && this.scrollObserver.unsubscribe()
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this.props, n = t.isMobile, a = t.video, r = t.viewHistory, i = t.belongSeries, s = t.ADBFound, c = t.isLoggedIn, u = t.prerollUrl, d = t.onPlayerCreate, p = t.removePlayer, m = t.aboveParental, h = t.showAutoPlay, v = t.mobilePlaying, f = t.mobilePlaybackEnabled, E = t.playbackStarted, g = t.isCasting, y = t.userId, b = t.seriesTitle, C = t.isContentReady, A = t.autoStart, S = t.startPosition, T = t.captionSettings, O = t.playerSetupError, M = t.onPlayerSetupError, P = t.isMonitoringEnabled, w = t.userAgent, L = t.experimentName, N = t.experimentTreatmentName, I = t.isFullscreen, k = t.isFromAutoplay, D = t.handleCaptionSizeChange, j = t.handleCaptionBackgroundChange, x = t.isContentLoginGated, V = t.isKidsModeEnabled, U = t.videoResource, B = t.adBreaks, H = t.isInWebRefresh, Y = t.handleMobilePlayClick, F = t.requestFullscreen, W = t.performanceCollectorEnabled, G = a.id, q = a.title, K = a.type, z = a.duration, Q = Object(we.h)({
                        type: K,
                        id: G,
                        title: q
                    }), Z = E ? "" : Object(J.d)(a);
                    if (C && !U)
                        return p(),
                        R.a.createElement(ba, null);
                    if (g)
                        return p(),
                        R.a.createElement("div", {
                            className: Ta.a.castButton
                        }, R.a.createElement("div", {
                            className: Ta.a.castBody
                        }, R.a.createElement(ua, {
                            className: Ta.a.chromecastPlayButton,
                            contentId: G,
                            castContent: this.castVideo
                        })));
                    if (n && !f) {
                        var X = this.context.deviceId;
                        return R.a.createElement("a", {
                            href: Object(we.f)(a, X)
                        }, R.a.createElement(Ra, {
                            viewHistory: r,
                            duration: z,
                            title: q,
                            id: G
                        }))
                    }
                    if (s)
                        return p(),
                        R.a.createElement(ga, null);
                    if (m && !c && V)
                        return p(),
                        R.a.createElement(Ca, {
                            rating: a.ratings
                        });
                    var $ = m && c;
                    if ($ || x) {
                        p();
                        var ee = $ ? R.a.createElement(tt.a, o()({}, Ma.parentalRestrictedMessage, {
                            values: {
                                parentallink: function(e) {
                                    var t = Je()(e, 1)[0];
                                    return R.a.createElement(et.a, {
                                        className: Ta.a.parentalLink,
                                        to: at.d.parentalControl + "?ref=" + Q
                                    }, t)
                                }
                            }
                        })) : R.a.createElement(tt.a, Ma.loginGatedMessage);
                        return R.a.createElement(ya, {
                            message: ee,
                            showLogin: x,
                            pathname: Q
                        })
                    }
                    if (O)
                        return p(),
                        R.a.createElement(_a, null);
                    var te = n && !v
                      , ne = !E || te
                      , ae = _()(Ta.a.playerArea, (e = {},
                    l()(e, Ta.a.hidePlayer, ne),
                    l()(e, Ta.a.fullscreen, I),
                    e))
                      , re = R.a.createElement(ra, {
                        className: Ta.a.playerWrapper,
                        video: a,
                        belongSeries: i,
                        prerollUrl: u,
                        onPlayerCreate: d,
                        isMobile: n,
                        autoStart: A,
                        requestFullscreen: F,
                        showAutoPlay: h,
                        seriesTitle: b,
                        title: q,
                        ready: !ne,
                        startPosition: S,
                        captionSettings: T,
                        poster: Z,
                        onPlayerSetupError: M,
                        isMonitoringEnabled: P,
                        userAgent: w,
                        userId: y,
                        experimentName: L,
                        experimentTreatmentName: N,
                        isFromAutoplay: k,
                        handleCaptionSizeChange: D,
                        handleCaptionBackgroundChange: j,
                        videoResource: U,
                        adBreaks: B,
                        performanceCollectorEnabled: W
                    });
                    return R.a.createElement("div", {
                        className: Ta.a.fullHeight
                    }, R.a.createElement("section", {
                        className: ae,
                        ref: this.playerAreaRef
                    }, C ? re : null, n || C && !ne ? null : R.a.createElement("div", {
                        className: Ta.a.placeholder
                    }, R.a.createElement(nt.a, {
                        className: Ta.a.spinner
                    }))), n && C && te ? R.a.createElement("div", {
                        onClick: Y,
                        className: Ta.a.center
                    }, R.a.createElement(Ra, {
                        isInWebRefresh: H,
                        viewHistory: r,
                        duration: z,
                        title: q,
                        id: G
                    })) : null)
                }
            }]),
            t
        }(O.PureComponent),
        Nn.propTypes = {
            isMobile: T.a.bool.isRequired,
            video: T.a.object.isRequired,
            belongSeries: T.a.oneOfType([T.a.number, T.a.string]),
            viewHistory: T.a.object,
            series: T.a.object,
            ADBFound: T.a.bool,
            isLoggedIn: T.a.bool,
            castVideo: T.a.func,
            onPlayerCreate: T.a.func,
            removePlayer: T.a.func.isRequired,
            prerollUrl: T.a.string,
            aboveParental: T.a.bool,
            showAutoPlay: T.a.bool,
            mobilePlaybackEnabled: T.a.bool,
            mobilePlaying: T.a.bool,
            playbackStarted: T.a.bool,
            isCasting: T.a.bool,
            seriesTitle: T.a.string,
            userId: T.a.number,
            userBirthday: T.a.string,
            isContentReady: T.a.bool.isRequired,
            autoStart: T.a.bool.isRequired,
            startPosition: T.a.number,
            captionSettings: T.a.object.isRequired,
            playerSetupError: T.a.object,
            onPlayerSetupError: T.a.func,
            trackingURI: T.a.string.isRequired,
            userAgent: T.a.object,
            isMonitoringEnabled: T.a.bool.isRequired,
            experimentName: T.a.string,
            experimentTreatmentName: T.a.string,
            isContentLoginGated: T.a.bool,
            isFullscreen: T.a.bool,
            isFromAutoplay: T.a.bool.isRequired,
            handleCaptionSizeChange: T.a.func,
            handleCaptionBackgroundChange: T.a.func,
            isKidsModeEnabled: T.a.bool,
            videoResource: T.a.object,
            isInWebRefresh: T.a.bool,
            webMobileEnhancedRegistration: T.a.object,
            handleMobilePlayClick: T.a.func,
            requestFullscreen: T.a.func
        },
        Nn.contextTypes = {
            deviceId: T.a.string
        },
        In), wa = n(1647), La = n.n(wa), Na = function(e) {
            var t = e.children
              , n = e.playerErrorDetails
              , a = e.drmKeySystem
              , r = e.isContentReady
              , i = e.onChange
              , o = e.retryCount
              , s = e.video
              , l = Object(O.useMemo)((function() {
                if (!r)
                    return null;
                var e = s.video_resources
                  , t = void 0 === e ? [] : e
                  , n = new Ae.a({
                    drmKeySystem: a,
                    isDRMSupported: a !== te.DrmKeySystem.Invalid,
                    videoResources: t
                });
                return t.length > 0 && 0 === n.getAllLevels().length && Object(Pe.f)({
                    content_id: s.id
                }),
                n
            }
            ), [a, r, o, s]);
            return Object(O.useEffect)((function() {
                if (l) {
                    var e = l.getCurrentResource();
                    i(e)
                }
            }
            ), [l]),
            Object(O.useEffect)((function() {
                if (l) {
                    var e = void 0;
                    switch (n) {
                    case fe.k.HDCP_INCOMPLIANCE:
                    case fe.k.KEY_SYSTEM_LICENSE_REQUEST_FAILED:
                        e = l.fallback(),
                        i(e);
                        break;
                    case fe.k.UNKNOWN_DRM_ERROR:
                        e = l.fallback({
                            skipDRM: !0
                        }),
                        i(e)
                    }
                }
            }
            ), [n, l]),
            t
        }, Ia = (Dn = kn = function(e) {
            function t(e) {
                p()(this, t);
                var n = f()(this, (t.__proto__ || u()(t)).call(this, e));
                return n.setPlaybackStarted = function() {
                    n.state.playbackStarted || (n.setState({
                        playbackStarted: !0
                    }),
                    clearTimeout(n.playerReadyTimer))
                }
                ,
                n.removePlayer = function() {
                    n.viewHistoryTimer && clearInterval(n.viewHistoryTimer),
                    n.playerReadyTimer && clearTimeout(n.playerReadyTimer),
                    n.player && n.player.remove && (n.player.remove(),
                    n.player = null)
                }
                ,
                n.handleFullscreenChange = function() {
                    var e = n.props
                      , t = e.isMobile
                      , a = e.dispatch
                      , r = e.video.id
                      , i = !!Object(Oe.f)();
                    a(Object(he.i)(i));
                    var o = i ? "ON" : "OFF"
                      , s = Object(Se.h)(r, o);
                    if (Object(Pe.g)(Ee.m, s),
                    t) {
                        if (!i)
                            return n.setMobilePlayback(!1);
                        Object(Oe.j)("landscape")
                    }
                }
                ,
                n.onPlayerSetupError = function(e) {
                    var t = n.props.video.id;
                    U.a.error({
                        error: e,
                        contentId: t
                    }, "Player initialization error"),
                    n.setState({
                        playerSetupError: e
                    })
                }
                ,
                n.onPlayerCreate = function(e) {
                    var t = n.props
                      , a = t.video
                      , r = a.id
                      , i = a.duration
                      , o = a.title
                      , s = t.startPosition
                      , l = t.initPlayer
                      , c = t.dispatch
                      , u = t.isLoggedIn;
                    n.playerReadyTimer = setTimeout((function() {
                        U.a.error({
                            contentId: r
                        }, "Web player ready event timeout")
                    }
                    ), 45e3),
                    n.player = e,
                    l(n.player, s, i),
                    n.attachPlayProgressEvent(),
                    n.attachHistoryHandler(),
                    n.attachAnalyticsEvents(),
                    n.player.once(te.PLAYER_EVENTS.ready, n.setPlaybackStarted),
                    n.player.on(te.PLAYER_EVENTS.captionsChange, (function(e) {
                        var t = e.captionsIndex
                          , a = n.player.getCaptionsList()[t]
                          , r = a.lang
                          , i = a.label
                          , o = r || i
                          , s = "off" === o.toLowerCase() ? "" : o;
                        c(Object(ve.e)(s))
                    }
                    )),
                    n.attachUpNext(),
                    n.attachAdRules(),
                    n.player.on(te.PLAYER_EVENTS.error, (function(e) {
                        if (Object(Pe.n)({
                            contentId: r,
                            err: e,
                            isAd: !1,
                            position: n.player ? n.player.getPosition() : -1,
                            videoUrl: n.player && n.player.getMediaUrl()
                        }),
                        e && "Media attach timeout." === e.message)
                            U.a.error({
                                contentId: r
                            }, e.message);
                        else if (U.a.error({
                            err: e,
                            contentId: r
                        }, "Web player error"),
                        e && e.name && "NotAllowedError" === e.name)
                            n.setState({
                                allowAutostart: !1
                            });
                        else if (e && ("keySystemError" === e.type || e.details && e.details.startsWith("keySystem")))
                            switch (e.details) {
                            case "keySystemInvalidHdcpVersion":
                            case "keySystemLicenseInvalidStatus":
                                n.setState({
                                    playerErrorDetails: fe.k.HDCP_INCOMPLIANCE
                                });
                                break;
                            case "keySystemLicenseRequestFailed":
                                n.setState({
                                    playerErrorDetails: fe.k.KEY_SYSTEM_LICENSE_REQUEST_FAILED
                                });
                                break;
                            default:
                                n.setState({
                                    playerErrorDetails: fe.k.UNKNOWN_DRM_ERROR
                                })
                            }
                    }
                    )),
                    n.player.on(te.PLAYER_EVENTS.adError, (function(e) {
                        Object(Pe.n)({
                            contentId: r,
                            err: e,
                            isAd: !0,
                            position: n.player ? n.player.getPosition() : -1,
                            videoUrl: n.player && n.player.getAdUrl()
                        }),
                        U.a.error({
                            err: e,
                            contentId: r
                        }, "Web player ad error")
                    }
                    )),
                    n.player.on(te.PLAYER_EVENTS.play, (function() {
                        Object(Pe.e)(Ee.c, {
                            contentId: r,
                            title: o
                        })
                    }
                    ));
                    var d = Object(ve.a)();
                    d && (n.props.dispatch(Object(ve.b)(d)),
                    n.updateCaptionStylesInPlayer(JSON.parse(d))),
                    u || n.checkAndRemoveStoredPosition()
                }
                ,
                n.handleResize = function() {
                    n.setState({
                        vw: window.innerWidth
                    })
                }
                ,
                n.handleCaptionSizeChange = function(e) {
                    n.handleBasicSettingUpdate({
                        setting: "font",
                        attributeKey: "size",
                        attributeValue: Ke.i[e]
                    })
                }
                ,
                n.handleCaptionBackgroundChange = function(e) {
                    n.handleBasicSettingUpdate({
                        setting: "background",
                        attributeKey: "toggle",
                        attributeValue: Ke.c[e]
                    })
                }
                ,
                n.handleBasicSettingUpdate = function(e) {
                    n.props.dispatch(Object(ve.d)(e)).then((function(e) {
                        return n.updateCaptionStylesInPlayer(e)
                    }
                    ))
                }
                ,
                n.setMobilePlayback = function(e) {
                    if (n.player) {
                        var t = n.props.video.id;
                        if (e) {
                            n.player.play();
                            var a = Object(Se.m)(t, "RESUMED");
                            Object(Pe.g)(Ee.r, a)
                        } else {
                            n.player.pause();
                            var r = Object(Se.m)(t, "PAUSED");
                            Object(Pe.g)(Ee.r, r)
                        }
                        n.setState({
                            mobilePlaying: e
                        })
                    }
                }
                ,
                n.requestFullscreen = function(e) {
                    if (n.fullscreenEl) {
                        var t = n.fullscreenEl;
                        e ? Object(Oe.d)(t) : (Object(Oe.e)(),
                        n.state.mobilePlaying && n.setMobilePlayback(!1))
                    }
                }
                ,
                n.handleMobilePlayClick = function() {
                    var e = n.props
                      , t = e.dispatch
                      , a = e.webMobileEnhancedRegistration
                      , r = e.hasShownRegistrationPrompt
                      , i = e.video
                      , o = e.isLoggedIn
                      , s = e.isInMobileWhitelist;
                    if (!e.isMobile || s) {
                        if (!o) {
                            a.logExposure();
                            var l = a.getValue();
                            if (l === be.a.forced)
                                return void t(Object(he.w)({
                                    isOpen: !0
                                }));
                            if (l === be.a.optional && !r)
                                return void t(Object(he.w)({
                                    isOpen: !0,
                                    title: i.id,
                                    onClose: function() {
                                        n.handleMobilePlayClick()
                                    }
                                }))
                        }
                        n.setMobilePlayback(!0),
                        n.requestFullscreen(!0)
                    } else {
                        var c = n.context.deviceId;
                        window.location.href = Object(we.f)(i, c)
                    }
                }
                ,
                n.handleVideoResourceChange = function(e) {
                    var t = n.state
                      , a = t.playerErrorDetails
                      , r = t.videoResource;
                    n.player && !le()(r, e) && n.unmountPlayer();
                    var i = {
                        videoResource: e
                    };
                    if (a)
                        if (e)
                            i = o()({}, i, {
                                playerErrorDetails: null
                            }),
                            Object(Pe.k)({
                                level: "error",
                                type: fe.p.videoLoad,
                                subtype: fe.h.PLAYBACK.DRM_FALLBACK,
                                message: {
                                    content_id: n.props.video.id,
                                    failed_hdcp: r.license_server.hdcp_version,
                                    failed_type: r.type,
                                    failed_url: Object(ae.trimQueryString)(r.manifest.url),
                                    fallback_hdcp: oe()(e, ["license_server", "hdcp_version"], ""),
                                    fallback_type: e.type,
                                    fallback_url: Object(ae.trimQueryString)(e.manifest.url)
                                }
                            });
                        else {
                            i = o()({}, i, {
                                isDrmModalOpen: !0
                            });
                            var s = a === fe.k.HDCP_INCOMPLIANCE ? Re.d.PLAYER.HDCP_ERROR : Re.d.PLAYER.DRM_ERROR
                              , l = Object(Re.a)(Re.c.PLAYER, s);
                            Object(Pe.g)(Ee.j, Object(Se.e)(Object(me.c)(), re.DialogType.PLAYER_ERROR, l))
                        }
                    n.setState(i)
                }
                ,
                n.handleDrmErrorModalClose = function(e) {
                    var t = 0
                      , a = {
                        isDrmModalOpen: !1,
                        playerErrorDetails: null
                    };
                    if (e) {
                        var r = n.props.video
                          , i = n.state
                          , s = i.playerErrorDetails;
                        t = i.retryCount + 1,
                        Object(Pe.k)({
                            type: fe.p.videoInfo,
                            subtype: fe.h.PLAYBACK.VIDEO_RETRY,
                            message: {
                                content_id: r.id,
                                reason: s,
                                retry: t
                            }
                        }),
                        a = o()({}, a, {
                            retryCount: t
                        })
                    }
                    n.setState(a)
                }
                ,
                n.state = {
                    showAutoPlay: !1,
                    vw: e.isMobile ? D.BREAKPOINTS.sm : D.BREAKPOINTS.xl,
                    mobilePlaying: !1,
                    playbackStarted: !1,
                    playerSetupError: null,
                    allowAutostart: !0,
                    isDrmModalOpen: !1,
                    playerErrorDetails: null,
                    retryCount: 0,
                    videoResource: null
                },
                n.handleResize = ue()(n.handleResize, 250),
                n.fullscreenEl = Object(Oe.f)() || document.body,
                n
            }
            return g()(t, e),
            h()(t, [{
                key: "componentDidMount",
                value: function() {
                    this.resizeSource = Object(de.a)(window, "resize").pipe(Object(pe.a)(50)).subscribe(this.handleResize),
                    this.handleResize(),
                    Object(Oe.a)(document, D.FULLSCREEN_CHANGE_EVENTS, this.handleFullscreenChange)
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    var e = this.props
                      , t = e.web404Page
                      , n = e.isContentReady
                      , a = this.state.videoResource;
                    n && !a && t.logExposure()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    Object(Oe.k)(document, D.FULLSCREEN_CHANGE_EVENTS, this.handleFullscreenChange),
                    this.resizeSource.unsubscribe(),
                    this.unmountPlayer()
                }
            }, {
                key: "unmountPlayer",
                value: function() {
                    if (this.props.resetPlayer(),
                    this.player) {
                        var e = this.props
                          , t = e.dispatch
                          , n = e.video.id
                          , a = this.player.getPosition();
                        this.updateHistory(a, {
                            syncHistoryWithServer: !0
                        }),
                        this.removePlayer(),
                        this.secondsOfViewTime <= 10 && (t(Object(I.l)({
                            contentId: n,
                            resumePos: a,
                            viewTime: this.secondsOfViewTime,
                            isAutoplay: Object(me.d)().autoplay
                        })),
                        this.secondsOfViewTime = 0)
                    }
                }
            }, {
                key: "attachGlobalMethod",
                value: function() {
                    var e = this
                      , t = this.props.video
                      , n = t.duration
                      , a = t.credit_cuepoints
                      , r = void 0 === a ? {} : a;
                    window.tubiPlayer = {
                        seekTo: function(t) {
                            if (ee()(t))
                                e.player.seek(t);
                            else if (/^\d+%$/.test(t)) {
                                var a = Object(ne.clamp)(parseFloat(t) / 100, 0, 1);
                                e.player.seek(Math.floor(a * n))
                            } else {
                                if ("credits" !== t || !r.postlude)
                                    throw new Error("Unrecognized value for position when calling tubiPlayer.seekTo(" + t + ")");
                                e.player.seek(r.postlude)
                            }
                        }
                    }
                }
            }, {
                key: "checkAndRemoveStoredPosition",
                value: function() {
                    window.location.search.indexOf(D.START_POS_QUERY) > -1 && window.history.replaceState(null, null, window.location.href.replace(/\?startPos=\d*/, ""))
                }
            }, {
                key: "attachUpNext",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.nextContextVideo
                      , a = t.video
                      , r = a.duration
                      , i = a.credit_cuepoints
                      , o = void 0 === i ? {} : i;
                    if (n)
                        this.player.on(te.PLAYER_EVENTS.complete, (function() {
                            e.playNextContextVideo()
                        }
                        ));
                    else {
                        var s = o.postlude || r - 1
                          , l = !1;
                        this.player.on(te.PLAYER_EVENTS.time, (function(t) {
                            var n = t.position;
                            !l && n >= s ? (l = !0,
                            e.setState({
                                showAutoPlay: !0
                            })) : l && n < s && (l = !1,
                            e.setState({
                                showAutoPlay: !1
                            }))
                        }
                        ))
                    }
                }
            }, {
                key: "getContentAdUrl",
                value: function(e) {
                    var t = this.context.deviceId
                      , n = this.props
                      , a = n.video
                      , r = {
                        contentId: a.id,
                        deviceId: t,
                        position: e,
                        publisherId: a.publisher_id,
                        userId: n.userId,
                        coppaEnabled: n.isKidsModeEnabled
                    };
                    return Object(Me.c)(r)
                }
            }, {
                key: "updateHistory",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , n = t.syncHistoryWithServer
                      , a = void 0 !== n && n
                      , r = this.props
                      , i = r.video.id
                      , o = r.belongSeries
                      , s = r.addToHistory
                      , l = r.playerContentType
                      , c = r.isLoggedIn
                      , u = Math.floor(e);
                    c && s && l !== te.PLAYER_CONTENT_TYPE.ad && 0 !== u && s({
                        contentId: i,
                        contentType: o ? "episode" : "movie",
                        parentId: o || null,
                        position: u
                    }, {
                        syncHistoryWithServer: a
                    })
                }
            }, {
                key: "attachHistoryHandler",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.addToHistory
                      , a = t.video.duration;
                    n && (clearInterval(this.viewHistoryTimer),
                    this.viewHistoryTimer = setInterval((function() {
                        if (e.props.playerState === te.State.playing && e.player) {
                            var t = e.player.getPosition();
                            0 !== Math.floor(t) && e.updateHistory(t)
                        }
                    }
                    ), ge.f),
                    this.player.on(te.PLAYER_EVENTS.seek, (function(t) {
                        var n = t.offset;
                        e.updateHistory(n)
                    }
                    )),
                    this.player.on(te.PLAYER_EVENTS.complete, (function() {
                        e.updateHistory(a)
                    }
                    )))
                }
            }, {
                key: "getHDCP",
                value: function() {
                    var e = this.props.videoResource;
                    return e && e.license_server && e.license_server.hdcp_version
                }
            }, {
                key: "attachAnalyticsEvents",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.startPosition
                      , a = t.video.id
                      , r = !1;
                    this.player.on(te.PLAYER_EVENTS.firstFrame, (function() {
                        if (!r) {
                            r = !0;
                            var t = e.state.videoResource;
                            if (t)
                                (0,
                                e.props.dispatch)(Object(I.n)({
                                    contentId: a,
                                    resumePos: n,
                                    isAutoplay: Object(me.d)().autoplay,
                                    videoResourceType: t.type,
                                    videoResourceUrl: t.manifest.url
                                }))
                        }
                    }
                    ));
                    var i = function() {
                        var t = Object(Se.r)(a, e.player.getPosition());
                        Object(Pe.g)(Ee.z, t)
                    };
                    this.player.on(te.PLAYER_EVENTS.adPodComplete, i),
                    this.player.on(te.PLAYER_EVENTS.adPodEmpty, i),
                    this.player.on(te.PLAYER_EVENTS.startupPerformance, (function(t) {
                        var n = t.isAd
                          , a = t.metrics
                          , r = t.isAfterMidroll
                          , i = fe.h.PLAYBACK
                          , o = i.VOD_PERFORMANCE_METRIC
                          , s = i.AD_PERFORMANCE_METRIC
                          , l = e.props.videoResource;
                        (Object(Pe.k)({
                            type: fe.p.videoInfo,
                            subtype: n ? s : o,
                            message: n ? {
                                metrics: a
                            } : {
                                content_id: e.contentId,
                                metrics: a,
                                isAfterMidroll: r,
                                videoResourceType: l && l.type,
                                hdcp: e.getHDCP()
                            }
                        }),
                        n) || (new _e.a).post("/oz/performance/player-metrics", {
                            data: {
                                metrics: a
                            }
                        })
                    }
                    ))
                }
            }, {
                key: "attachAdRules",
                value: function() {
                    var e = this
                      , t = this.props.adBreaks.reduce((function(e, t) {
                        return 0 !== t && (e[t] = {
                            adPlayed: !1
                        }),
                        e
                    }
                    ), {});
                    this.player.on(te.PLAYER_EVENTS.time, (function(n) {
                        var a = n.position
                          , r = Math.floor(a);
                        t.hasOwnProperty(r) && !t[r].adPlayed && (t[r].adPlayed = !0,
                        e.player.playAdTag(e.getContentAdUrl(r)))
                    }
                    )),
                    this.player.on(te.PLAYER_EVENTS.seek, (function(t) {
                        var n = t.offset;
                        if (!(t.position <= 1)) {
                            var a = Math.floor(n);
                            e.player.once(te.PLAYER_EVENTS.seeked, (function() {
                                e.player.playAdTag(e.getContentAdUrl(a))
                            }
                            ))
                        }
                    }
                    ))
                }
            }, {
                key: "attachPlayProgressEvent",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.dispatch
                      , a = t.video.id
                      , r = this.player.getPosition();
                    this.secondsOfViewTime = 0,
                    this.player.on(te.PLAYER_EVENTS.time, (function(t) {
                        var i = t.position
                          , o = Math.floor(i);
                        o !== r && (r = o,
                        e.secondsOfViewTime++),
                        e.secondsOfViewTime >= 10 && (n(Object(I.l)({
                            contentId: a,
                            resumePos: i,
                            viewTime: e.secondsOfViewTime,
                            isAutoplay: Object(me.d)().autoplay
                        })),
                        e.secondsOfViewTime = 0)
                    }
                    ))
                }
            }, {
                key: "playNextContextVideo",
                value: function() {
                    var e = this.props.nextContextVideo;
                    this.context.router.push(Object(we.i)({
                        video: e
                    }))
                }
            }, {
                key: "updateCaptionStylesInPlayer",
                value: function(e) {
                    var t = Object(Te.a)(e);
                    this.player.setCaptionsStyles(t)
                }
            }, {
                key: "getAutoStart",
                value: function() {
                    return !this.props.isMobile && (!window.__Cypress__ && (this.state.allowAutostart && this.props.autoStart))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.belongSeries
                      , a = t.video
                      , r = t.startPosition
                      , i = t.series
                      , o = t.viewHistory
                      , s = t.trackingURI
                      , c = t.relatedContents
                      , u = t.handleCastClick
                      , d = t.posterUrl
                      , p = t.episodeSeasonIndex
                      , m = t.episodeIndex
                      , h = t.isMobile
                      , v = t.adBreaks
                      , f = t.ADBFound
                      , E = t.isLoggedIn
                      , g = t.aboveParental
                      , y = t.hasSubtitle
                      , b = t.isInMobileWhitelist
                      , C = t.isCasting
                      , A = t.castVideo
                      , S = t.userId
                      , T = t.userBirthday
                      , O = t.dispatch
                      , M = t.captionSettings
                      , P = t.isContentReady
                      , w = t.userAgent
                      , L = t.isMonitoringEnabled
                      , N = t.isFullscreen
                      , I = t.isFromAutoplay
                      , k = t.isContentLoginGated
                      , j = t.isKidsModeEnabled
                      , x = t.drmKeySystem
                      , V = t.webRefresh
                      , U = t.experimentName
                      , B = t.experimentTreatmentName
                      , H = t.web404Page
                      , Y = t.performanceCollectorEnabled
                      , F = t.isTransportControlShowup
                      , W = this.state
                      , G = W.mobilePlaying
                      , q = W.playbackStarted
                      , K = W.playerSetupError
                      , z = W.vw
                      , Q = W.isDrmModalOpen
                      , Z = W.playerErrorDetails
                      , X = W.retryCount
                      , J = W.videoResource
                      , $ = this.getContentAdUrl(r)
                      , ee = !!n
                      , te = void 0
                      , ne = void 0;
                    i && (te = i.title,
                    ne = i.id);
                    var ae = (ee ? i : a) || {}
                      , re = ae.hero_images
                      , ie = void 0 === re ? [] : re
                      , oe = ae.posterarts
                      , se = void 0 === oe ? [] : oe
                      , le = ae.backgrounds
                      , ce = (void 0 === le ? [] : le)[0] || ie[0] || se[0]
                      , ue = P && !J
                      , de = H.getValue() && ue
                      , pe = {
                        belongSeries: n,
                        content: a,
                        onCastClick: u,
                        related: c,
                        position: E ? r : null,
                        to: ee ? Object(we.h)({
                            type: D.SERIES_CONTENT_TYPE,
                            title: te,
                            id: ne
                        }) : null,
                        seasons: (i || {}).seasons,
                        seriesTitle: ee ? te : null,
                        posterUrl: d,
                        trackingURI: s,
                        vw: z,
                        episodeSeasonIndex: p,
                        episodeIndex: m,
                        hasSubtitle: y,
                        dispatch: O,
                        isContentReady: P,
                        playbackStarted: q,
                        handleMobilePlayClick: this.handleMobilePlayClick,
                        isContentUnavailable: de
                    }
                      , me = "linear-gradient(to top, " + Le.b.getAppThemeColor(j) + ", rgba(38, 38, 45, 0.4) 83%, rgba(38, 38, 45, 0.2))"
                      , he = null !== x
                      , ve = this.getAutoStart()
                      , fe = "enabled" === V.getValue();
                    return R.a.createElement(ze.a, null, (function(t) {
                        var c, u, d;
                        return R.a.createElement("div", {
                            className: _()(La.a.contentContainer, (c = {},
                            l()(c, La.a.reduceBottomMargin, t.enabledPage),
                            l()(c, La.a.transportShowup, F),
                            c))
                        }, t.enabledPage ? R.a.createElement(Qe.a, {
                            src: ce
                        }) : R.a.createElement(Ie.a, {
                            url: ce,
                            className: La.a.titleImage,
                            gradient: me
                        }), R.a.createElement("div", {
                            className: _()(La.a.positionPlayer, La.a.threeCol, (u = {},
                            l()(u, La.a.collapsed, !q && t.enabledPage),
                            l()(u, La.a.fullscreen, N),
                            l()(u, La.a.centerPlayer, fe),
                            l()(u, La.a.hidden, fe && de),
                            u))
                        }, he ? R.a.createElement(Na, {
                            drmKeySystem: x,
                            isContentReady: P,
                            onChange: e.handleVideoResourceChange,
                            playerErrorDetails: Z,
                            retryCount: X,
                            video: a
                        }, de ? null : R.a.createElement(Pa, {
                            key: a.id + "-" + (ve ? "true" : "false"),
                            isMobile: !!h,
                            belongSeries: n,
                            viewHistory: o,
                            series: i,
                            video: a,
                            adBreaks: v,
                            ADBFound: f,
                            isLoggedIn: E,
                            aboveParental: g,
                            isContentLoginGated: k,
                            showAutoPlay: e.state.showAutoPlay,
                            onPlayerCreate: e.onPlayerCreate,
                            removePlayer: e.removePlayer,
                            prerollUrl: $,
                            mobilePlaybackEnabled: b,
                            mobilePlaying: G,
                            playbackStarted: q,
                            isCasting: C,
                            castVideo: A,
                            seriesTitle: te,
                            userId: S,
                            userBirthday: T,
                            isContentReady: P,
                            autoStart: ve,
                            startPosition: r,
                            captionSettings: M,
                            playerSetupError: K,
                            onPlayerSetupError: e.onPlayerSetupError,
                            trackingURI: s,
                            userAgent: w,
                            isMonitoringEnabled: L,
                            isFullscreen: N,
                            isFromAutoplay: I,
                            handleCaptionSizeChange: e.handleCaptionSizeChange,
                            handleCaptionBackgroundChange: e.handleCaptionBackgroundChange,
                            isKidsModeEnabled: j,
                            videoResource: J,
                            isInWebRefresh: t.enabledPage,
                            handleMobilePlayClick: e.handleMobilePlayClick,
                            requestFullscreen: e.requestFullscreen,
                            experimentName: U,
                            experimentTreatmentName: B,
                            performanceCollectorEnabled: Y
                        })) : null), R.a.createElement("div", {
                            className: _()(La.a.positionContentDetail, (d = {},
                            l()(d, La.a.hidden, N),
                            l()(d, La.a.fullscreen, t.enabledPage && (!P || !q) && !h),
                            l()(d, La.a.centerPlayer, fe),
                            l()(d, La.a.noPlayer, t.enabledPage && de),
                            d))
                        }, t.enabledPage ? R.a.createElement(Ze.a, pe) : R.a.createElement(Ne.a, pe)), R.a.createElement(qe, {
                            isOpen: Q,
                            onClose: e.handleDrmErrorModalClose,
                            playerErrorDetails: Z
                        }))
                    }
                    ))
                }
            }]),
            t
        }(O.PureComponent),
        kn.propTypes = {
            handleCastClick: T.a.func,
            video: T.a.object.isRequired,
            startPosition: T.a.number.isRequired,
            belongSeries: T.a.oneOfType([T.a.string, T.a.number]),
            nextContextVideo: T.a.object,
            viewHistory: T.a.object,
            series: T.a.object,
            addToHistory: T.a.func,
            adBreaks: T.a.array.isRequired,
            ADBFound: T.a.bool,
            isLoggedIn: T.a.bool,
            relatedContents: T.a.array,
            hotContents: T.a.array,
            trackingURI: T.a.string.isRequired,
            aboveParental: T.a.bool,
            posterUrl: T.a.string,
            isMobile: T.a.bool,
            hasSubtitle: T.a.bool,
            userId: T.a.number,
            userBirthday: T.a.string,
            episodeSeasonIndex: T.a.number,
            episodeIndex: T.a.number,
            playerState: T.a.string.isRequired,
            playerContentType: T.a.string.isRequired,
            initPlayer: T.a.func.isRequired,
            resetPlayer: T.a.func.isRequired,
            isInMobileWhitelist: T.a.bool,
            isCasting: T.a.bool.isRequired,
            castVideo: T.a.func,
            dispatch: T.a.func.isRequired,
            captionSettings: T.a.object.isRequired,
            isContentReady: T.a.bool.isRequired,
            autoStart: T.a.bool.isRequired,
            userAgent: T.a.object,
            isMonitoringEnabled: T.a.bool.isRequired,
            isFullscreen: T.a.bool,
            isFromAutoplay: T.a.bool.isRequired,
            isContentLoginGated: T.a.bool,
            isKidsModeEnabled: T.a.bool,
            drmKeySystem: T.a.string,
            experimentName: T.a.string,
            experimentTreatmentName: T.a.string
        },
        kn.contextTypes = {
            router: T.a.object.isRequired,
            deviceId: T.a.string
        },
        Dn), ka = Object(B.a)(Object(P.b)((function(e, t) {
            var n = e.ui
              , a = n.registrationPrompt
              , r = n.renderControls
              , i = t.video;
            return {
                hasShownRegistrationPrompt: a.shownInTitles.includes(i.id),
                isTransportControlShowup: r
            }
        }
        ))(Ia), {
            webMobileEnhancedRegistration: be.b,
            webRefresh: Ce.a,
            web404Page: ye.a
        }), Da = n(677), ja = n(87), xa = {
            display: "none"
        }, Va = (xn = jn = function(e) {
            function t() {
                return p()(this, t),
                f()(this, (t.__proto__ || u()(t)).apply(this, arguments))
            }
            return g()(t, e),
            h()(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.description
                      , n = e.duration
                      , a = e.name
                      , r = e.thumbnail
                      , i = e.uploadDate;
                    return R.a.createElement("div", {
                        itemProp: "video",
                        itemScope: !0,
                        itemType: "//schema.org/VideoObject",
                        style: xa
                    }, R.a.createElement("meta", {
                        itemProp: "name",
                        property: "media:title",
                        content: a
                    }), R.a.createElement("span", {
                        property: "media:type",
                        content: "application/x-shockwave-flash"
                    }, R.a.createElement("meta", {
                        itemProp: "duration",
                        content: n
                    }), R.a.createElement("meta", {
                        itemProp: "thumbnailUrl",
                        rel: "media:thumbnail",
                        content: r
                    }), i ? R.a.createElement("meta", {
                        itemProp: "uploadDate",
                        content: i
                    }) : null, R.a.createElement("meta", {
                        itemProp: "description",
                        content: t
                    })))
                }
            }]),
            t
        }(O.PureComponent),
        jn.propTypes = {
            contentId: T.a.string.isRequired,
            duration: T.a.string,
            name: T.a.string,
            uploadDate: T.a.string,
            description: T.a.string
        },
        xn), Ua = Object(P.b)((function(e, t) {
            var n = e.video.byId[t.contentId] || {}
              , a = n.availability_starts
              , r = n.description
              , i = void 0 === r ? "" : r
              , o = n.duration
              , s = void 0 === o ? 0 : o
              , l = n.posterarts
              , c = void 0 === l ? [] : l
              , u = n.thumbnails
              , d = void 0 === u ? [] : u
              , p = n.title
              , m = void 0 === p ? "" : p
              , h = n.year;
            return {
                name: h ? m + " (" + h + ")" : m,
                thumbnail: Object(ja.b)(d[0] || c[0]),
                duration: Object(J.p)(s),
                uploadDate: a,
                description: i
            }
        }
        ))(Va), Ba = n(1645), Ha = n.n(Ba), Ya = (Un = Vn = function(e) {
            function t(e) {
                p()(this, t);
                var n = f()(this, (t.__proto__ || u()(t)).call(this, e));
                return n.handleCastClick = function(e) {
                    var t = n.props
                      , a = t.dispatch
                      , r = t.location.pathname;
                    a(Object(I.b)({
                        actorName: e,
                        componentType: b.ANALYTICS_COMPONENTS.castListComponent
                    })),
                    a(Object(N.e)(r))
                }
                ,
                n.addToHistoryWrapper = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , a = t.syncHistoryWithServer
                      , r = void 0 !== a && a
                      , i = n.props.dispatch;
                    Object(J.o)(e.position) && i(Object(L.a)(e)).then((function() {
                        r && i(Object(L.d)())
                    }
                    ))
                }
                ,
                n.initPlayer = function() {
                    n.props.dispatch(y.init.apply(void 0, arguments))
                }
                ,
                n.resetPlayer = function() {
                    n.props.dispatch(Object(y.reset)())
                }
                ,
                n.castVideoContent = function(e) {
                    n.props.dispatch(Object(w.a)(e))
                }
                ,
                n.getMemoizedMeta = Object(A.a)(J.h),
                n.state = {
                    ADBFound: !1
                },
                n.playerExperiments = [n.props.webHlsUpgrade],
                n
            }
            return g()(t, e),
            h()(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = this
                      , t = this.props.webEnhancedRegistration;
                    new q({
                        debug: !1
                    }).check().then((function(t) {
                        t && e.setState({
                            ADBFound: !0
                        })
                    }
                    )),
                    t && t.logExposure()
                }
            }, {
                key: "getStartPosition",
                value: function() {
                    return this.props.receiverPosition || parseInt(this.props.startPosFromQuery, 10) || this.props.startPosition
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.data
                      , n = e.series
                      , a = e.adBreaks
                      , r = e.isMobile
                      , i = e.isEpisode
                      , s = e.isLoggedIn
                      , c = e.relatedContents
                      , u = e.nextContextVideo
                      , d = e.history
                      , p = e.trackingURI
                      , m = e.parentalRating
                      , h = e.userId
                      , v = e.userBirthday
                      , f = e.episodeSeasonIndex
                      , E = e.episodeIndex
                      , g = e.playerState
                      , y = e.playerContentType
                      , b = e.dispatch
                      , C = e.isInMobileWhitelist
                      , A = e.isCasting
                      , S = e.captionSettings
                      , T = e.isContentReady
                      , O = e.autoStart
                      , P = e.userAgent
                      , w = e.isMonitoringEnabled
                      , L = e.isFullscreen
                      , N = e.isFromAutoplay
                      , I = e.shouldShowMatureContentModal
                      , k = e.isKidsModeEnabled
                      , x = e.drmKeySystem
                      , V = e.performanceCollectorEnabled
                      , U = this.state.ADBFound
                      , B = t.title
                      , H = t.id
                      , Y = t.ratings
                      , F = t.type
                      , W = t.posterarts
                      , G = (void 0 === W ? [] : W)[0];
                    n && n.posterarts[0] && (G = n.posterarts[0]);
                    var q = k && (!s || s && m === j.b.ADULTS) ? j.b.OKIDS : m
                      , K = {
                        dispatch: b,
                        nextContextVideo: u,
                        series: n,
                        aboveParental: Object(X.c)(q, Y),
                        episodeSeasonIndex: f,
                        episodeIndex: E,
                        playerState: g,
                        playerContentType: y,
                        autoStart: O,
                        isMonitoringEnabled: w
                    }
                      , z = _()(Ha.a.video, l()({}, Ha.a.fullscreen, L))
                      , Q = this.getStartPosition()
                      , Z = I(t)
                      , J = this.getMemoizedMeta(t, n, i)
                      , $ = void 0
                      , ee = void 0
                      , te = this.playerExperiments.find((function(e) {
                        return e && null !== e.treatment
                    }
                    ));
                    return te && ($ = te.experimentName,
                    ee = te.treatment),
                    R.a.createElement("div", null, R.a.createElement(M.a, J), R.a.createElement("div", {
                        className: z,
                        key: t.id
                    }, R.a.createElement(ka, o()({
                        key: B
                    }, K, {
                        handleCastClick: this.handleCastClick,
                        belongSeries: t.series_id,
                        video: t,
                        startPosition: Q,
                        viewHistory: d,
                        addToHistory: F === D.CLIP_CONTENT_TYPE ? null : this.addToHistoryWrapper,
                        adBreaks: a,
                        isMobile: r,
                        ADBFound: U,
                        isLoggedIn: s,
                        relatedContents: c,
                        trackingURI: p,
                        posterUrl: G,
                        userId: h,
                        userBirthday: v,
                        initPlayer: this.initPlayer,
                        resetPlayer: this.resetPlayer,
                        isInMobileWhitelist: C,
                        isCasting: A,
                        castVideo: this.castVideoContent,
                        dispatch: b,
                        captionSettings: S,
                        isContentReady: T,
                        userAgent: P,
                        isFullscreen: L,
                        isFromAutoplay: N,
                        isContentLoginGated: Z,
                        isKidsModeEnabled: k,
                        drmKeySystem: x,
                        experimentName: $,
                        experimentTreatmentName: ee,
                        performanceCollectorEnabled: V
                    })), R.a.createElement(Ua, {
                        contentId: t.id
                    })), R.a.createElement(Da.default, {
                        contentId: H
                    }))
                }
            }]),
            t
        }(O.Component),
        Vn.propTypes = {
            dispatch: T.a.func,
            handleCastClick: T.a.func,
            data: T.a.object.isRequired,
            startPosition: T.a.number.isRequired,
            adBreaks: T.a.array,
            path: T.a.string,
            id: T.a.string,
            nextContextVideo: T.a.object,
            history: T.a.object,
            series: T.a.object,
            isLoggedIn: T.a.bool.isRequired,
            isEpisode: T.a.bool.isRequired,
            isMobile: T.a.bool,
            trackingURI: T.a.string.isRequired,
            relatedContents: T.a.array,
            parentalRating: T.a.number,
            userId: T.a.number,
            userBirthday: T.a.string,
            episodeSeasonIndex: T.a.number,
            episodeIndex: T.a.number,
            playerState: T.a.string.isRequired,
            playerContentType: T.a.string.isRequired,
            isInMobileWhitelist: T.a.bool.isRequired,
            isCasting: T.a.bool.isRequired,
            captionSettings: T.a.object,
            isContentReady: T.a.bool.isRequired,
            autoStart: T.a.bool.isRequired,
            userAgent: T.a.object,
            isMonitoringEnabled: T.a.bool.isRequired,
            isFullscreen: T.a.bool,
            isFromAutoplay: T.a.bool.isRequired,
            startPosFromQuery: T.a.string,
            shouldShowMatureContentModal: T.a.func.isRequired,
            isKidsModeEnabled: T.a.bool,
            drmKeySystem: T.a.string,
            receiverPosition: T.a.number
        },
        Vn.defaultProps = {
            adBreaks: [],
            relatedContents: [],
            isFullscreen: !1
        },
        Un);
        var Fa = function(e, t) {
            var n = t.params
              , a = t.location
              , r = t.webEnhancedRegistration
              , i = e.captionSettings
              , o = e.video
              , s = e.container
              , l = e.routing
              , c = e.history
              , u = e.tracking.trackingURI
              , d = e.auth
              , p = e.ui
              , m = p.isMobile
              , h = p.userAgent
              , v = p.fullscreen
              , f = p.isKidsModeEnabled
              , E = p.ageGateModal
              , g = p.registrationPrompt
              , y = e.userSettings
              , b = y.parentalRating
              , C = y.birthday
              , _ = e.player
              , A = e.chromecast
              , S = n.id
              , T = !(!d || !d.user)
              , O = a.query
              , R = void 0 === O ? {} : O
              , M = "true" === R.autoplay
              , P = !T && r.getValue() !== x.a.control
              , w = M || "google-feed" === R.utm_source || "true" === R.start;
            E.isVisible && (w = !1),
            !P || !g.isOpen && g.shownInTitles.includes(S) || (w = !1);
            var L = R.startPos
              , N = o.byId
              , I = o.adBreaksById
              , k = N[S] || {}
              , j = k.series_id
              , V = A.castReceiverState
              , U = A.position
              , B = !("undefined" == typeof window || !window.cast || V !== window.cast.framework.CastState.CONNECTED)
              , W = (j ? N["0" + j] : null) || null
              , G = j ? "0" + j : "" + S
              , q = Object(F.d)(e, S)
              , Q = null;
            if (s.containerContext && k.type === D.CLIP_CONTENT_TYPE) {
                var Z = s.containerChildrenIdMap[s.containerContext] || []
                  , X = Z[Z.indexOf(S) + 1];
                X && N[X] && (Q = N[X])
            }
            var $ = T ? d.user.userId : null
              , ee = c.contentIdMap[G]
              , te = Object(J.e)({
                history: ee,
                contentId: S,
                byId: N,
                isSeries: !1
            }).position
              , ne = W && Object(z.a)(S, W.seasons) || {}
              , ae = ne.season
              , re = ne.episode
              , ie = m && Object(K.c)(h)
              , oe = I[S];
            return {
                trackingURI: u,
                id: S,
                data: k,
                startPosition: Math.max(te, 0),
                path: l.path,
                series: W,
                isMobile: !!m,
                isEpisode: !!k.series_id,
                isLoggedIn: T,
                userId: $,
                userBirthday: C,
                adBreaks: oe,
                history: ee,
                relatedContents: q,
                parentalRating: b,
                episodeSeasonIndex: ae,
                episodeIndex: re,
                playerState: _.playerState,
                playerContentType: _.contentType,
                isInMobileWhitelist: ie,
                isCasting: B,
                isContentReady: Object(J.m)(k) && void 0 !== oe,
                nextContextVideo: Q,
                captionSettings: i,
                autoStart: w,
                userAgent: h,
                isMonitoringEnabled: Object(H.c)(e),
                performanceCollectorEnabled: Object(H.b)(e),
                isFullscreen: v,
                isFromAutoplay: M,
                startPosFromQuery: L,
                shouldShowMatureContentModal: Object(Y.h)(e),
                isKidsModeEnabled: f,
                drmKeySystem: _.drmKeySystem,
                receiverPosition: U
            }
        }
          , Wa = Object(P.b)(Fa)(Ya);
        Wa.fetchData = function(e) {
            var t = e.getState
              , n = e.dispatch
              , a = []
              , i = e.params.id
              , o = t()
              , s = o.auth
              , l = void 0 === s ? {} : s
              , c = o.video.byId;
            return l.user,
            c[i] || a.push(n(Object(k.f)(i))),
            a.push(n(y.drmActions.updateDrmKeySystem())),
            r.a.all(a).then((function() {
                t().video.byId[i].series_id
            }
            )).catch((function(e) {
                var t = Object(Q.b)(e.errType);
                return U.a[t]({
                    error: e,
                    contentId: i
                }, "error when loading data for video container"),
                r.a.reject(e)
            }
            ))
        }
        ,
        Wa.fetchDataDeferred = function(e) {
            var t = e.getState
              , n = e.dispatch
              , a = e.params.id
              , i = [n(y.drmActions.updateDrmKeySystem()), n(Object(k.f)(a)), Object(Z.a)(n(Object(k.c)(a)))];
            return r.a.all(i).then((function() {
                var e = t().video.byId[a]
                  , i = e.series_id
                  , o = e.type === D.SERIES_CONTENT_TYPE ? "0" + a : a
                  , s = [n(Object(k.d)(o))];
                return i && s.push(n(Object(k.e)(i))),
                r.a.all(s)
            }
            )).catch((function(e) {
                var t = Object(Q.b)(e.errType);
                return U.a[t]({
                    error: e,
                    contentId: a
                }, "error when loading related contents for video container"),
                r.a.reject(e)
            }
            ))
        }
        ,
        Wa.reserveContainerContext = !0,
        Wa.hasDynamicMeta = !0;
        var Ga = Ya;
        t.default = Object(B.a)(Wa, {
            webEnhancedRegistration: x.b,
            webHlsUpgrade: V.a
        })
    },
    1838: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "CHANNELS_LIMIT", (function() {
            return tn
        }
        )),
        n.d(t, "LivePlayer", (function() {
            return nn
        }
        )),
        n.d(t, "mapStateToProps", (function() {
            return an
        }
        )),
        n.d(t, "fetchData", (function() {
            return rn
        }
        )),
        n.d(t, "loadEnoughDataForChannelGuide", (function() {
            return on
        }
        ));
        var a, r = n(9), i = n.n(r), o = n(1), s = n(347), l = n(0), c = n.n(l), u = n(440), d = n(19), p = n(41), m = n(2), h = function(e) {
            return {
                loading: e,
                type: m.ad
            }
        }, v = n(116), f = n(8), E = n.n(f), g = n(1697), y = n.n(g), b = n(11), C = n(276), _ = n(444), A = n(680), S = n.n(A), T = n(558), O = n.n(T), R = n(690), M = n(5), P = n(59), w = n(71), L = n(1568), N = n(1536), I = n(150), k = n.n(I), D = n(304);
        !function(e) {
            e.HOME = "HOME",
            e.PLAYER = "PLAYER",
            e.DETAILS = "DETAILS",
            e.CONTAINER_LIST = "CONTAINER_LIST",
            e.CONTAINER_DETAILS = "CONTAINER_DETAILS",
            e.EPISODES = "EPISODES",
            e.SEARCH = "SEARCH",
            e.PERSONALIZATION = "PERSONALIZATION",
            e.NONE = "NONE"
        }(a || (a = {}));
        var j = function(e, t) {
            if (!e)
                return {
                    imageUrls: M.FREEZED_EMPTY_ARRAY
                };
            var n, a, r = e.backgrounds, i = void 0 === r ? [] : r, o = t ? [] : e.posterarts, s = (a = o,
            (n = i).length > 0 && a.length > 0 && n[0] === a[0]), l = k()(i) ? M.FREEZED_EMPTY_ARRAY : i;
            return {
                imageUrls: s ? M.FREEZED_EMPTY_ARRAY : l
            }
        }
          , x = function(e) {
            if (!e)
                return a.NONE;
            switch (!0) {
            case e.startsWith("/ott/player"):
            case e.startsWith("/ott/live"):
                return a.PLAYER;
            case e.startsWith("/search"):
                return a.SEARCH;
            case "/containers/regular" === e || "/containers/channel" === e:
                return a.CONTAINER_LIST;
            case e.startsWith("/container/regular") || e.startsWith("/container/channel"):
                return a.CONTAINER_DETAILS;
            case "/" === e || e.startsWith("/mode") || e.startsWith("/my-list"):
                return a.HOME;
            case Object(D.a)(e):
                return a.DETAILS;
            case e.startsWith("/ott/series") && e.indexOf("/episodes") > -1:
                return a.EPISODES;
            case e.startsWith("/personalization"):
                return a.PERSONALIZATION;
            default:
                return a.NONE
            }
        }
          , V = n(240)
          , U = []
          , B = n(42)
          , H = n(218)
          , Y = n(165)
          , F = n(4)
          , W = n.n(F)
          , G = n(1708)
          , q = n.n(G)
          , K = n(385)
          , z = n.n(K)
          , Q = n(46);
        var Z, X = Object(d.b)((function(e) {
            return {
                isSlowDevice: e.ui.isSlowDevice
            }
        }
        ))((function(e) {
            return (0,
            e.render)(e.isSlowDevice)
        }
        )), J = function(e) {
            var t = Object(l.useMemo)((function() {
                return function(t) {
                    var n = e.children
                      , a = e.useTransition
                      , r = e.className
                      , i = e.component
                      , s = void 0 === i ? "span" : i
                      , l = e.transitionName
                      , u = e.transitionEnter
                      , d = e.transitionLeave
                      , p = e.transitionAppear
                      , m = e.timeout
                      , h = e.onEnter
                      , v = e.onEntering
                      , f = e.onEntered
                      , E = e.onExit
                      , g = e.onExiting
                      , y = e.onExited
                      , b = Object(o.__rest)(e, ["children", "useTransition", "className", "component", "transitionName", "transitionEnter", "transitionLeave", "transitionAppear", "timeout", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited"]);
                    if (void 0 === a ? t : !a)
                        return c.a.createElement(s, W()({
                            className: r
                        }, b), n);
                    var C = null
                      , _ = z()({
                        onEnter: h,
                        onEntering: v,
                        onEntered: f,
                        onExit: E,
                        onExiting: g,
                        onExited: y
                    }, (function(e) {
                        return !!e
                    }
                    ));
                    return n && (C = Array.isArray(n) ? n.map((function(e, t) {
                        return e && c.a.createElement(Q.CSSTransition, W()({
                            key: e.key || t,
                            classNames: l,
                            timeout: m
                        }, _), e)
                    }
                    )) : c.a.createElement(Q.CSSTransition, W()({
                        key: n.key,
                        classNames: l,
                        timeout: m
                    }, _), n)),
                    c.a.createElement(Q.TransitionGroup, {
                        component: s,
                        className: r,
                        enter: u,
                        exit: d,
                        appear: p
                    }, C)
                }
            }
            ), q()(e.children));
            return c.a.createElement(X, {
                render: t
            })
        }, $ = n(1709), ee = n.n($), te = {
            enter: ee.a.backgroundEnter,
            enterActive: ee.a.backgroundEnterActive,
            exit: ee.a.backgroundLeave,
            exitActive: ee.a.backgroundLeaveActive,
            appear: ee.a.backgroundEnter,
            appearActive: ee.a.backgroundEnterActive
        }, ne = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.getImageStyle = function(e) {
                    if (e)
                        return n.bgImageStyles[e] || (n.bgImageStyles[e] = {
                            backgroundImage: "url(" + e + ")"
                        }),
                        n.bgImageStyles[e]
                }
                ,
                n.bgImageStyles = {},
                n
            }
            return Object(o.__extends)(t, e),
            t.prototype.render = function() {
                var e, t, n = this.props, a = n.fullScreen, r = n.imageUrl, i = n.ifBgImageMatchActiveContent, o = n.isKidsModeEnabled, s = n.isSlowDevice, l = n.showGeneric, u = n.transitionAppear, d = n.isLivePoster, p = n.isSponsorshipBg;
                l || (t = this.getImageStyle(r));
                var m = E()(o ? ee.a.kidsBgImg : ee.a.bgImg, ((e = {})[ee.a.fullscreen] = !!a,
                e[ee.a.livePoster] = d,
                e[ee.a.fadeOut] = !i && !s,
                e[ee.a.sponsorshipBg] = p,
                e[ee.a.slowDevice] = !!s,
                e));
                return c.a.createElement(J, {
                    transitionName: te,
                    component: "div",
                    timeout: 900,
                    transitionAppear: u,
                    useTransition: !s && !l
                }, c.a.createElement("div", {
                    key: r,
                    className: m,
                    style: t
                }))
            }
            ,
            t.defaultProps = {
                ifBgImageMatchActiveContent: !0
            },
            t
        }(l.PureComponent), ae = Object(d.b)((function(e) {
            var t = e.ui
              , n = t.isSlowDevice
              , a = t.isKidsModeEnabled;
            return {
                ifBgImageMatchActiveContent: e.ottUI.background.ifBgImageMatchActiveContent,
                isKidsModeEnabled: a,
                isSlowDevice: n
            }
        }
        ))((function(e) {
            var t, n = e.imageUrls, a = e.fullScreen, r = e.transitionAppear, i = e.isSlowDevice, o = e.ifBgImageMatchActiveContent, s = e.forceCycle, u = void 0 !== s && s, d = e.isKidsModeEnabled, p = e.gradientOnly, m = e.isLivePoster, h = e.onBgCycle, v = e.isSponsorshipBg, f = e.isHigherSponsorshipBg, g = e.imageUrlIndex, y = n && Array.isArray(n) ? n[g || 0] : "", b = Object(l.useState)(y || ""), C = b[0], _ = b[1], A = !n || 0 === n.length, S = Object(l.useCallback)((function(e) {
                if (Array.isArray(n)) {
                    var t = n[e];
                    t && C !== t && _(t)
                }
            }
            ), [n, C]);
            Object(l.useEffect)((function() {
                if (Z && clearInterval(Z),
                n && -1 === n.indexOf(C) && (_(n[0]),
                h && h(0)),
                (!i || u) && n)
                    return Z = window.setInterval((function() {
                        _((function(e) {
                            var t = (n.indexOf(e) + 1) % n.length;
                            return h && h(t),
                            n[t]
                        }
                        ))
                    }
                    ), 5e3),
                    function() {
                        Z && clearInterval(Z)
                    }
            }
            ), [n, u]),
            Object(l.useEffect)((function() {
                void 0 !== g && S(g)
            }
            ), [g, S]);
            var T = E()(ee.a.ottBackground, ((t = {})[ee.a.generic] = A,
            t[ee.a.fullscreen] = !!a,
            t[ee.a.liveStyle] = !!m,
            t[ee.a.sponsorshipBg] = !!v,
            t[ee.a.higherSponsorshipBg] = f,
            t));
            return c.a.createElement("div", {
                className: T
            }, p ? null : c.a.createElement(ne, {
                transitionAppear: r,
                isSlowDevice: i,
                showGeneric: A,
                imageUrl: C,
                fullScreen: a,
                isKidsModeEnabled: d,
                ifBgImageMatchActiveContent: o,
                isLivePoster: m,
                isSponsorshipBg: v
            }))
        }
        )), re = n(35), ie = n(369), oe = n(105);
        Object(w.a)(Object(re.a)((function(e) {
            return e.fire.containerUI.containerId
        }
        ), w.i, (function(e) {
            var t = e.fire.containerUI.section
              , n = e.ottUI
              , a = n.topNav.isActive
              , r = n.leftNav.isExpanded;
            return t === M.GRID_SECTION && !r && !a
        }
        ), (function(e, t, n) {
            return n && t.length > 0 && !!e && e !== t[0].id
        }
        )));
        var se = function(e) {
            return !!M.IS_TOP_NAV_ENABLED && Object(oe.a)("topNav", e.ui.twoDigitCountryCode)
        }
          , le = (Object(re.a)(se, ie.a, ie.b, H.b, (function(e, t, n, a) {
            return e && !a && n && t !== M.CONTENT_MODES.queue && t !== M.CONTENT_MODES.espanol
        }
        )),
        n(811));
        var ce = function() {
            try {
                document.body.parentElement.classList.add("bg-image-loaded")
            } catch (e) {}
        }
          , ue = n(1710)
          , de = n.n(ue);
        function pe(e) {
            var t, a = e.fullScreen, r = void 0 !== a && a, i = e.isKidsModeEnabled, o = void 0 !== i && i, s = e.isLiveGradient, u = void 0 !== s && s, d = e.isScreenSaver, p = void 0 !== d && d, m = e.isTopNavEnabled, h = e.isLiveNewsPlayerPage, v = void 0 !== h && h, f = e.isComingSoon, g = void 0 !== f && f, y = "", b = [n(1711)];
            p ? y = de.a.screenSaverGradient : o ? (y = de.a.kidsGradient,
            r && b.push(n(1712))) : y = m && u && !v ? de.a.topNavGradient : u ? de.a.liveGradient : g ? de.a.comingSoonGradient : de.a.gradient,
            Object(l.useEffect)((function() {
                Object(le.a)(b).then(ce)
            }
            ), [b.join(";")]);
            var C = E()(y, ((t = {})[de.a.fullscreen] = r,
            t[de.a.kidsGradient] = p && o,
            t));
            return c.a.createElement("div", {
                className: C
            })
        }
        var me = Object(d.b)((function(e) {
            return {
                uiFidelity: e.ui.uiFidelity,
                isTopNavEnabled: se(e),
                isLiveNewsPlayerPage: !1
            }
        }
        ))(pe)
          , he = n(1707)
          , ve = n.n(he)
          , fe = {
            appear: ve.a.backgroundAppear,
            appearActive: ve.a.backgroundAppearActive,
            enter: ve.a.backgroundEnter,
            enterActive: ve.a.backgroundEnterActive,
            leave: ve.a.backgroundLeave,
            leaveActive: ve.a.backgroundLeaveActive
        }
          , Ee = function() {
            return c.a.createElement("div", null, c.a.createElement(J, {
                transitionName: fe,
                component: "div",
                transitionAppear: !0,
                timeout: 1e3
            }, c.a.createElement("div", {
                className: ve.a.background
            })), c.a.createElement("div", {
                className: ve.a.gradient
            }))
        }
          , ge = n(508)
          , ye = n(1706)
          , be = n.n(ye)
          , Ce = []
          , _e = {
            appear: be.a.backgroundAppear,
            appearActive: be.a.backgroundAppearActive,
            enter: be.a.backgroundEnter,
            enterActive: be.a.backgroundEnterActive,
            leave: be.a.backgroundLeave,
            leaveActive: be.a.backgroundLeaveActive
        }
          , Ae = []
          , Se = Object(R.a)(O.a, S.a)
          , Te = Object(d.b)((function(e, t) {
            var n, r, i = e.ui, s = e.tracking, l = e.fire, c = e.auth, u = t.location, d = x(null == u ? void 0 : u.pathname), p = d === a.PLAYER, m = d === a.PLAYER || d === a.NONE, h = d === a.CONTAINER_LIST;
            (null == t ? void 0 : t.imageUrls) && (null === (n = null == t ? void 0 : t.imageUrls) || void 0 === n ? void 0 : n.length) > 0 && (m = !1);
            var v = i.backOverrides
              , f = i.isSlowDevice
              , E = i.isKidsModeEnabled
              , g = i.uiFidelity
              , y = s.trackingURI
              , b = l.containerUI.containerId
              , C = !(!c || !c.user)
              , _ = !!v[M.BACK_FROM_DETAIL_TO_HOME]
              , A = (Object(B.c)(e) && Object(Y.f)() || !_) && E
              , S = Object(H.f)(e)
              , T = !1
              , O = !1
              , R = !1
              , I = !1;
            if (d === a.HOME) {
                var k = function(e) {
                    var t = e.auth
                      , n = e.ottUI
                      , a = e.video.byId
                      , r = e.live
                      , i = e.fire
                      , o = n.debouncedGridUI
                      , s = o.activeContainerId
                      , l = o.gridIndex
                      , c = o.section
                      , u = Object(w.e)(e, {})
                      , d = u.isFetching
                      , p = u.ttl
                      , m = u.containerChildrenIdMap
                      , h = u.containerIdMap
                      , v = !(!t || !t.user)
                      , f = i.containerUI.containerId
                      , E = f === M.COMING_SOON_CONTAINER_ID
                      , g = f === M.HISTORY_CONTAINER_ID && !v
                      , y = "number" != typeof p || Object(P.isCacheValid)(p)
                      , b = Object(w.i)(e).length && y
                      , C = d && !b
                      , _ = !1
                      , A = !1;
                    if (!(c === M.GRID_SECTION))
                        return {
                            imageUrls: M.FREEZED_EMPTY_ARRAY
                        };
                    if (!v && s === M.HISTORY_CONTAINER_ID)
                        return {
                            imageUrls: M.FREEZED_EMPTY_ARRAY,
                            isCWPromptActive: g
                        };
                    var S = m[s];
                    if (S && !C) {
                        var T = S[l];
                        if (T) {
                            var O = a[T]
                              , R = h[T]
                              , L = j(null != R ? R : O, !!R);
                            _ = (A = (null == O ? void 0 : O.type) === M.LIVE_CONTENT_TYPE) && !r.loading,
                            U = L.imageUrls
                        }
                    }
                    return {
                        imageUrls: U = C ? [] : U,
                        isLiveVideo: A,
                        showLiveVideoBackground: _,
                        isCWPromptActive: g,
                        isComingSoonActive: E
                    }
                }(e);
                Ae = k.imageUrls,
                T = k.isLiveVideo,
                O = k.showLiveVideoBackground,
                R = k.isCWPromptActive,
                I = k.isComingSoonActive
            }
            b !== M.HISTORY_CONTAINER_ID || C || (Ae = Ce),
            d === a.CONTAINER_DETAILS && (Ae = f ? Ce : function(e) {
                var t = e.ottUI
                  , n = e.video.byId
                  , a = t.containerGrid.activeContainerVideoGridId
                  , r = Object(N.a)(e)
                  , i = Math.max(r.indexOf(a), 0)
                  , o = n[r[i]] || {};
                return {
                    imageUrls: j(o, !1).imageUrls
                }
            }(e).imageUrls),
            d === a.DETAILS && (Ae = function(e, t) {
                var n = e.video.byId
                  , a = t.params
                  , r = t.location.pathname
                  , i = null == a ? void 0 : a.id
                  , o = 0 === r.indexOf("/series") ? Object(V.a)(String(i)) : i;
                return o && n[o] ? {
                    imageUrls: j(n[o], !1).imageUrls
                } : {
                    imageUrls: M.FREEZED_EMPTY_ARRAY
                }
            }(e, Object(o.__assign)({}, t)).imageUrls),
            d === a.EPISODES && (Ae = function(e, t) {
                var n = t.params
                  , a = e.video.byId["0" + (null == n ? void 0 : n.id)];
                return a ? {
                    imageUrls: j(a, !1).imageUrls
                } : {
                    imageUrls: M.FREEZED_EMPTY_ARRAY
                }
            }(e, Object(o.__assign)({}, t)).imageUrls),
            d === a.SEARCH && (Ae = f ? Ce : function(e) {
                var t = e.search
                  , n = t.activeIdx
                  , a = t.activeSection
                  , r = t.hash
                  , i = t.key
                  , o = e.video.byId
                  , s = Object(L.a)(e)
                  , l = r[(i || "").trim()]
                  , c = a === M.ACTIVE_AREA.grid
                  , u = "" === i ? s : l;
                if (!u)
                    return {
                        imageUrls: U
                    };
                var d = "number" == typeof n ? u[n] : null
                  , p = "string" == typeof d ? o[d] : null;
                return p && c && (U = j(p, !1).imageUrls),
                c || (U = M.FREEZED_EMPTY_ARRAY),
                {
                    imageUrls: U
                }
            }(e).imageUrls),
            Ae = Se(Ae);
            var D = function(e, t) {
                var n, r = t.location, i = x(null == r ? void 0 : r.pathname), o = e.container, s = e.contentMode, l = e.ottUI, c = e.fire, u = e.ui, d = u.isSlowDevice, p = u.isKidsModeEnabled, m = l.contentMode.active, h = l.containerGrid.activeContainerGridId, v = c.containerUI.containerId, f = null === (n = (m === M.CONTENT_MODES.all ? o.containerIdMap : s[m].containerIdMap)[i === a.CONTAINER_DETAILS ? h : v]) || void 0 === n ? void 0 : n.sponsorship;
                if ([a.HOME, a.CONTAINER_DETAILS].includes(i) && f && !p) {
                    var E = d ? f.image_urls.brand_color : f.image_urls.brand_background;
                    return {
                        imageUrls: [E],
                        isSponsorshipBg: !0,
                        isHigherSponsorshipBg: !!E && d && i === a.CONTAINER_DETAILS
                    }
                }
                return {
                    imageUrls: M.FREEZED_EMPTY_ARRAY
                }
            }(e, t)
              , F = D.imageUrls
              , W = D.isHigherSponsorshipBg;
            return {
                isSlowDeviceDesign: f && !M.IS_HOMEGRID_HIGH_END_DESIGN_ENABLED,
                isKidsModeEnabled: A,
                uiFidelity: g,
                isScreensaverVisible: S,
                pathname: y,
                imageUrls: (null === (r = t.imageUrls) || void 0 === r ? void 0 : r.length) ? t.imageUrls : Ae,
                isLiveVideo: T,
                showLiveVideoBackground: O,
                hideBackgroundWrapper: m,
                hideBackground: h,
                isCWPromptActive: R,
                isComingSoonActive: I,
                isPlaybackPage: p,
                sponsorshipBgUrls: F,
                isHigherSponsorshipBg: W
            }
        }
        ))((function(e) {
            var t = e.isSlowDeviceDesign
              , n = e.isKidsModeEnabled
              , a = void 0 !== n && n
              , r = e.imageUrls
              , i = void 0 === r ? Ce : r
              , o = e.isCWPromptActive
              , s = e.isComingSoonActive
              , u = e.showLiveVideoBackground
              , d = e.isLiveVideo
              , p = e.uiFidelity
              , m = e.isPlaybackPage
              , h = e.isScreensaverVisible
              , v = e.hideBackgroundWrapper
              , f = e.hideBackground
              , g = e.sponsorshipBgUrls
              , y = e.isHigherSponsorshipBg
              , b = Object(l.useMemo)((function() {
                return g.filter(Boolean)
            }
            ), [g.join(",")]);
            if (m || h)
                return null;
            if (o)
                return c.a.createElement(Ee, null);
            var C = !0;
            C = !t && Object(ge.c)(p, ge.a.High);
            var _ = c.a.createElement(ae, {
                imageUrls: i,
                gradientOnly: s || u,
                isLivePoster: d
            })
              , A = g.length ? c.a.createElement(ae, {
                imageUrls: b,
                isHigherSponsorshipBg: y,
                isSponsorshipBg: !0
            }) : null
              , S = E()(be.a.backgroundWrapper)
              , T = c.a.createElement(me, {
                isKidsModeEnabled: a,
                isLiveGradient: d,
                isComingSoon: s
            });
            if (v)
                return null;
            if (f)
                return T;
            var O = d && !u ? c.a.createElement("div", {
                className: be.a.loading
            }) : null;
            return C ? c.a.createElement(c.a.Fragment, null, c.a.createElement(J, {
                className: S,
                component: "div",
                transitionAppear: !1,
                timeout: 1e3,
                transitionName: _e
            }, _), T, A, O) : c.a.createElement(c.a.Fragment, null, _, T, A, O)
        }
        ));
        var Oe, Re = function(e) {
            return function(t) {
                function n() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return Object(o.__extends)(n, t),
                n.prototype.render = function() {
                    var t = this.props
                      , n = t.location
                      , a = t.params
                      , r = t.shouldUseBackgroundWrapper
                      , i = void 0 === r || r;
                    return c.a.createElement(c.a.Fragment, null, i ? c.a.createElement(Te, {
                        location: n,
                        params: a
                    }) : null, c.a.createElement(e, this.props))
                }
                ,
                n
            }(c.a.PureComponent)
        }, Me = n(1701), Pe = n.n(Me), we = Object(b.a)({
            justAMomentMessage: {
                defaultMessage: "Just a moment",
                id: "src/common/components/PlayerLoadingExperience/PlayerLoadingExperience:justAMomentMessage"
            },
            ticketMessage: {
                defaultMessage: "We're printing your ticket...",
                id: "src/common/components/PlayerLoadingExperience/PlayerLoadingExperience:ticketMessage"
            },
            popcornMessage: {
                defaultMessage: "Popping the popcorn...",
                id: "src/common/components/PlayerLoadingExperience/PlayerLoadingExperience:popcornMessage"
            },
            headingInMessage: {
                defaultMessage: "Heading into the show...",
                id: "src/common/components/PlayerLoadingExperience/PlayerLoadingExperience:headingInMessage"
            },
            largeSodaMessage: {
                defaultMessage: "Grabbing a large soda and candy...",
                id: "src/common/components/PlayerLoadingExperience/PlayerLoadingExperience:largeSodaMessage"
            }
        }), Le = [{
            message: we.popcornMessage,
            src: n(1702)
        }, {
            message: we.headingInMessage,
            src: n(1703)
        }, {
            message: we.largeSodaMessage,
            src: n(1704)
        }], Ne = function(e) {
            var t = e.className
              , a = Object(C.a)()
              , r = Object(l.useState)(0)
              , i = r[0]
              , s = r[1]
              , u = Object(l.useState)((function() {
                return Object(o.__spreadArrays)([{
                    message: we.ticketMessage,
                    src: n(1705)
                }], y()(Le))
            }
            ))[0];
            Object(l.useEffect)((function() {
                var e = setInterval((function() {
                    s((function(e) {
                        return (e + 1) % u.length
                    }
                    ))
                }
                ), 5e3);
                return function() {
                    clearInterval(e)
                }
            }
            ), []);
            var d = u[i]
              , p = d.message
              , m = d.src;
            return c.a.createElement("div", {
                className: E()(Pe.a.loadingExperience, t)
            }, c.a.createElement("div", {
                className: Pe.a.copy
            }, a.formatMessage(we.justAMomentMessage)), c.a.createElement("div", {
                className: Pe.a.message
            }, a.formatMessage(p)), c.a.createElement("div", {
                className: Pe.a.animationWrapper
            }, c.a.createElement(_.a, {
                className: Pe.a.spinner
            }), c.a.createElement("img", {
                src: m,
                className: Pe.a.gif,
                alt: ""
            })))
        }, Ie = (Re(Ne),
        n(13)), ke = n(18), De = n(263), je = n(21), xe = n(93), Ve = n(151), Ue = n.n(Ve), Be = n(1723), He = n.n(Be), Ye = n(1539), Fe = Object(d.b)((function(e) {
            var t = e.captionSettings;
            return {
                captions: t.defaultCaptions,
                captionConfig: t
            }
        }
        ))((function(e) {
            var t, n = e.wrapper, a = e.captions, r = e.captionConfig, i = e.classname, o = Object(l.useState)(""), s = o[0], u = o[1];
            function d() {
                n && u((n.getActiveCaptions(a) || [""]).join(" "))
            }
            return Object(l.useEffect)((function() {
                if (n && (n.setCaptions(a),
                "" !== a))
                    return n.addListener(M.TUBI_PLAYER_EVENTS.time, d),
                    function() {
                        n.removeListener(M.TUBI_PLAYER_EVENTS.time, d)
                    }
            }
            ), [n, a]),
            n && "" !== a && "" !== s ? (t = Object(Ye.a)(r),
            c.a.createElement("div", {
                className: i
            }, c.a.createElement("div", {
                className: "subtitleWindow",
                style: t.window
            }, c.a.createElement("span", {
                style: t.font
            }, He()(s))))) : null
        }
        )), We = n(681), Ge = n(661), qe = n(36), Ke = n(1714), ze = n.n(Ke), Qe = n(303), Ze = n.n(Qe), Xe = n(439), Je = n(322), $e = n(30), et = n(32), tt = n(6), nt = n(137), at = n(68), rt = n(442), it = n(23), ot = n(87);
        Oe = n(1825).default;
        var st = function(e) {
            function t(t) {
                var n = e.call(this) || this;
                n.isDestroyed = !1,
                n.stallTimer = null,
                n.useHlsNext = !1,
                n.loadHls = function(e) {
                    var t = e.videoElement
                      , a = e.mediaUrl
                      , r = e.title
                      , i = void 0 === r ? "" : r
                      , s = e.id
                      , l = void 0 === s ? "" : s
                      , c = e.autoplay
                      , u = e.performanceCollectorEnabled
                      , d = e.shouldReportBufferChange
                      , p = void 0 !== d && d;
                    return Object(o.__awaiter)(n, void 0, void 0, (function() {
                        var e, n, r, s, d, m, h;
                        return Object(o.__generator)(this, (function(o) {
                            return e = this.useHlsNext,
                            n = Object(rt.e)({
                                useHlsNext: e
                            }),
                            !1,
                            r = new Oe({
                                videoElement: t,
                                mediaUrl: a,
                                id: l,
                                title: i,
                                autoplay: c,
                                debug: !1,
                                performanceCollectorEnabled: u,
                                shouldReportBufferChange: p,
                                eventHandlers: {
                                    waitingHandler: this.waitingHandler,
                                    canplayHandler: this.canplayHandler,
                                    reload: this.reload
                                },
                                useHlsNext: e,
                                extraOptions: n
                            }),
                            s = null === (d = Oe.getExternalHls) || void 0 === d ? void 0 : d.call(Oe),
                            u && (this.performanceCollector = new Xe.PerformanceCollector({
                                debug: !1,
                                ExternalHls: s,
                                reporter: function(e) {
                                    Object(it.k)({
                                        type: et.p.videoInfo,
                                        subtype: et.h.PLAYBACK.LIVE_PERFORMANCE_METRIC,
                                        message: {
                                            content_id: l,
                                            metrics: e
                                        }
                                    }),
                                    (new nt.a).post("/oz/performance/live-player-metrics", {
                                        data: {
                                            metrics: e
                                        }
                                    })
                                }
                            })),
                            null === (m = this.performanceCollector) || void 0 === m || m.setVideoElement(t),
                            r.setup(),
                            this.hls = null === (h = r.getPlayer) || void 0 === h ? void 0 : h.call(r),
                            this.adapter = r,
                            [2]
                        }
                        ))
                    }
                    ))
                }
                ,
                n.loadWebMAF = function(e) {
                    var t = e.mediaUrl
                      , a = new Oe({
                        mediaUrl: void 0 === t ? "" : t
                    });
                    n.adapter = a
                }
                ,
                n.onHDMIConnected = function(e) {
                    var t = e.hdmi_connection;
                    Object(it.k)({
                        type: et.p.videoInfo,
                        subtype: et.h.PLAYBACK.ON_HDMI_CONNECTED,
                        message: {
                            source: "live",
                            isHdmiConnected: t ? "connected" : "disconnected"
                        }
                    }),
                    t ? (n.isHDMIConnected = !0,
                    n.play()) : (n.isHDMIConnected = !1,
                    clearTimeout(n.stallTimer),
                    n.pause(),
                    window.location.href = Object(ot.b)(tt.c.home))
                }
                ,
                n.registerHDMIConnectedEvent = function() {
                    try {
                        var e = Object($e.b)({
                            debug: !1
                        });
                        e.registerHandler("onHdmiConnected", n.onHDMIConnected),
                        e.init()
                    } catch (e) {
                        Object(it.k)({
                            type: et.p.clientInfo,
                            subtype: et.h.JSBRIDGE.HDMI_CONNECTION,
                            message: {
                                error_name: e.name || e.code || "unknown error",
                                error_message: e.message || "error setting up dsbridge"
                            }
                        }),
                        Ie.a.error(e, "error when setting up dsbridge for HDMI connection handler")
                    }
                }
                ,
                n.play = function() {
                    var e;
                    Object(at.h)() || null === (e = n.adapter) || void 0 === e || e.play()
                }
                ,
                n.pause = function() {
                    var e;
                    null === (e = n.adapter) || void 0 === e || e.pause()
                }
                ,
                n.destroy = function() {
                    var e, t;
                    clearTimeout(n.stallTimer),
                    n.removeAllListeners(),
                    null === (e = n.performanceCollector) || void 0 === e || e.destroy(),
                    n.bindEvents(!0),
                    null === (t = n.adapter) || void 0 === t || t.remove(),
                    n.isDestroyed = !0
                }
                ,
                n.emitReady = function() {
                    n.emit(M.TUBI_PLAYER_EVENTS.ready)
                }
                ,
                n.captionsListChange = function() {
                    n.emit(M.TUBI_PLAYER_EVENTS.captionsListChange),
                    n.emit(M.TUBI_PLAYER_EVENTS.allSubtitlesAvailable)
                }
                ,
                n.emitPlay = function() {
                    n.emit(M.TUBI_PLAYER_EVENTS.play)
                }
                ,
                n.emitError = function(e) {
                    n.emit(M.TUBI_PLAYER_EVENTS.error, e)
                }
                ,
                n.time = function() {
                    var e = n.getPosition();
                    e && n.emit(M.TUBI_PLAYER_EVENTS.time, {
                        position: e
                    })
                }
                ,
                n.emitBufferAppended = function(e) {
                    n.emit(M.TUBI_PLAYER_EVENTS.bufferChange, e)
                }
                ,
                n.reload = function(e, t) {
                    var a, r, i = void 0 === t ? {} : t, o = i.needReattach, s = void 0 !== o && o, l = i.manuallyReload, c = void 0 !== l && l;
                    n.videoElement.error || s ? (null === (a = n.hls) || void 0 === a || a.recoverMediaError(),
                    !Object(at.h)() && n.isHDMIConnected && n.play()) : null === (r = n.hls) || void 0 === r || r.startLoad(),
                    Object(it.i)({
                        contentId: n.id,
                        position: n.getPosition(),
                        videoUrl: n.url,
                        isAd: !1,
                        err: e,
                        hasReattached: s,
                        manuallyReload: c
                    })
                }
                ,
                n.pauseHandler = function() {
                    !Object(at.h)() && n.isHDMIConnected && (n.play(),
                    Object(it.j)({
                        contentId: n.id,
                        position: n.getPosition()
                    }))
                }
                ,
                n.waitingHandler = function() {
                    clearTimeout(n.stallTimer),
                    n.stallTimer = setTimeout((function() {
                        var e = {
                            code: "one-min-live-stall",
                            message: "live stream get stalled for more than one minute",
                            fatal: !0
                        };
                        n.emit(M.TUBI_PLAYER_EVENTS.error, e, n.url),
                        n.reload(e, {
                            needReattach: !0
                        })
                    }
                    ), 6e4)
                }
                ,
                n.canplayHandler = function() {
                    clearTimeout(n.stallTimer)
                }
                ,
                n.visibilityChangeHandler = function() {
                    Object(at.h)() ? (clearTimeout(n.stallTimer),
                    n.pause()) : n.play()
                }
                ;
                var a = t.videoElement
                  , r = t.mediaUrl
                  , i = t.id
                  , s = t.title
                  , l = t.autoplay
                  , c = void 0 === l || l
                  , u = t.useHlsNext
                  , d = void 0 !== u && u;
                return n.isHDMIConnected = !0,
                n.isLivePlayer = !0,
                n.videoElement = a,
                n.url = r,
                n.id = i || "",
                n.title = s || "",
                n.reference = n,
                n.autoplay = c,
                n.useHlsNext = d,
                n.setup(t),
                n
            }
            return Object(o.__extends)(t, e),
            t.prototype.setup = function(e) {
                var t = e.videoElement
                  , n = e.mediaUrl
                  , a = e.id
                  , r = void 0 === a ? "" : a
                  , i = e.title
                  , s = void 0 === i ? "" : i
                  , l = e.autoplay
                  , c = void 0 === l || l
                  , u = e.performanceCollectorEnabled
                  , d = e.shouldReportBufferChange
                  , p = void 0 !== d && d
                  , m = e.shouldRemoveUsedBuffer
                  , h = void 0 !== m && m;
                return Object(o.__awaiter)(this, void 0, void 0, (function() {
                    return Object(o.__generator)(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return [3, 1];
                        case 1:
                            return [4, this.loadHls({
                                videoElement: t,
                                mediaUrl: n,
                                title: s,
                                id: r,
                                autoplay: c,
                                performanceCollectorEnabled: u,
                                shouldReportBufferChange: p,
                                shouldRemoveUsedBuffer: h
                            })];
                        case 2:
                            e.sent(),
                            e.label = 3;
                        case 3:
                            return this.bindEvents(),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.bindEvents = function(e) {
                var t, n, a, r, i, o, s;
                void 0 === e && (e = !1);
                var l = e ? "removeEventListener" : "addEventListener"
                  , c = e ? "off" : "on";
                null === (t = this.adapter) || void 0 === t || t[c](M.TUBI_PLAYER_EVENTS.ready, this.emitReady),
                null === (n = this.adapter) || void 0 === n || n[c](M.TUBI_PLAYER_EVENTS.error, this.emitError),
                null === (a = this.adapter) || void 0 === a || a[c](M.TUBI_PLAYER_EVENTS.play, this.emitPlay),
                null === (r = this.adapter) || void 0 === r || r[c](M.TUBI_PLAYER_EVENTS.bufferChange, this.emitBufferAppended),
                null === (i = this.adapter) || void 0 === i || i[c](M.TUBI_PLAYER_EVENTS.time, this.time),
                null === (o = this.adapter) || void 0 === o || o[c](M.TUBI_PLAYER_EVENTS.pause, this.pauseHandler),
                null === (s = this.adapter) || void 0 === s || s[c](M.TUBI_PLAYER_EVENTS.captionsListChange, this.captionsListChange),
                document[l]("visibilitychange", this.visibilityChangeHandler),
                this.autoplay && this.addListener(M.TUBI_PLAYER_EVENTS.ready, this.play)
            }
            ,
            t.prototype.onPS5Event = function(e) {
                return "onAppResume" === e || "onForeground" === e ? this.play() : this.pause()
            }
            ,
            t.prototype.getPosition = function() {
                var e;
                return (null === (e = this.adapter) || void 0 === e ? void 0 : e.getPosition()) || 0
            }
            ,
            t.prototype.getTotalDroppedFrames = function() {
                var e, t;
                return (null === (t = null === (e = this.adapter) || void 0 === e ? void 0 : e.getTotalDroppedFrames) || void 0 === t ? void 0 : t.call(e)) || 0
            }
            ,
            t.prototype.getFramesPerSecond = function() {
                var e, t;
                return (null === (t = null === (e = this.adapter) || void 0 === e ? void 0 : e.getFPS) || void 0 === t ? void 0 : t.call(e)) || 0
            }
            ,
            t.prototype.getDuration = function() {
                return 1 / 0
            }
            ,
            t.prototype.getResource = function() {
                return this.url
            }
            ,
            t.prototype.getTitle = function() {
                return this.title
            }
            ,
            t.prototype.getBitrate = function() {
                var e, t;
                return (null === (t = null === (e = this.adapter) || void 0 === e ? void 0 : e.getBitrate) || void 0 === t ? void 0 : t.call(e)) || 0
            }
            ,
            t.prototype.setVolume = function(e) {
                var t, n;
                this.emit(M.TUBI_PLAYER_EVENTS.volume, e),
                null === (n = null === (t = this.adapter) || void 0 === t ? void 0 : t.setVolume) || void 0 === n || n.call(t, e)
            }
            ,
            t.prototype.setMute = function(e) {
                var t, n;
                this.emit(M.TUBI_PLAYER_EVENTS.mute, e),
                null === (n = null === (t = this.adapter) || void 0 === t ? void 0 : t.setMute) || void 0 === n || n.call(t, e)
            }
            ,
            t.prototype.getActiveCaptions = function(e) {
                var t, n;
                return (null === (n = null === (t = this.adapter) || void 0 === t ? void 0 : t.getActiveCaptions) || void 0 === n ? void 0 : n.call(t, e)) || []
            }
            ,
            t.prototype.setCaptions = function(e) {
                var t;
                null === (t = this.adapter) || void 0 === t || t.setCaptions(e)
            }
            ,
            t
        }(Je.EventEmitter)
          , lt = n(66)
          , ct = n(24)
          , ut = n(26)
          , dt = n(1593)
          , pt = n(16)
          , mt = function(e) {
            var t, n = e.video, a = e.getAdQuery, r = e.videoPlayer, i = e.performanceCollectorEnabled, c = e.shouldRemoveUsedBuffer, u = e.useHlsNext, p = n || {}, m = p.id, v = void 0 === m ? "" : m, f = p.title, E = void 0 === f ? "" : f, g = Object(d.e)(), y = Object(dt.b)({
                videoResources: (null == n ? void 0 : n.video_resources) || [],
                isDRMSupported: !1
            }), b = y.getCurrentResource(), C = (null === (t = null == b ? void 0 : b.manifest) || void 0 === t ? void 0 : t.url) || "", _ = Object(l.useRef)(null), A = Object(l.useState)(null), S = A[0], T = A[1];
            return Object(l.useEffect)((function() {
                if (_.current && C && v) {
                    var e = a()
                      , t = e.deviceId
                      , n = e.userId
                      , r = new st({
                        videoElement: _.current,
                        mediaUrl: Object(qe.addQueryStringToUrl)(C, Ze()(Object(o.__assign)(Object(o.__assign)({}, e), {
                            platform: Object(ut.d)()
                        }), ze.a)),
                        id: v,
                        title: E,
                        deviceId: t,
                        userId: n,
                        performanceCollectorEnabled: i,
                        shouldReportBufferChange: !1,
                        shouldRemoveUsedBuffer: c,
                        useHlsNext: u
                    });
                    return T(r),
                    function() {
                        T(null),
                        g(h(!0))
                    }
                }
            }
            ), [C]),
            function(e) {
                var t = e.wrapper
                  , n = e.videoPlayer
                  , a = e.id
                  , r = Object(d.e)()
                  , i = Object(l.useRef)(0)
                  , o = Object(l.useRef)(null);
                function c(e) {
                    var t = e.position
                      , n = Math.floor(t);
                    "number" != typeof o.current && (o.current = n),
                    n !== o.current && (o.current = n,
                    i.current++),
                    i.current >= 10 && u()
                }
                function u() {
                    r(Object(lt.j)({
                        contentId: a,
                        videoPlayer: n,
                        viewTime: i.current
                    })),
                    i.current = 0
                }
                Object(l.useEffect)((function() {
                    return null == t || t.addListener(M.TUBI_PLAYER_EVENTS.time, c),
                    function() {
                        null == t || t.removeListener(M.TUBI_PLAYER_EVENTS.time, c)
                    }
                }
                ), [t, n]),
                Object(l.useEffect)((function() {
                    return null == t || t.addListener(M.TUBI_PLAYER_EVENTS.ready, (function() {
                        return r(Object(lt.m)({
                            contentId: a,
                            videoPlayer: n,
                            videoResourceType: s.VideoResourceTypeState.VIDEO_RESOURCE_TYPE_HLSV3
                        }))
                    }
                    )),
                    null == t || t.addListener(M.TUBI_PLAYER_EVENTS.subtitleChange, (function(e) {
                        var t = Object(pt.y)(a, e ? s.ToggleState.ON : s.ToggleState.OFF);
                        Object(it.g)(ct.J, t)
                    }
                    )),
                    function() {
                        i.current > 0 && u(),
                        o.current = null,
                        i.current = 0
                    }
                }
                ), [t])
            }({
                wrapper: S,
                videoPlayer: r,
                id: v
            }),
            function(e) {
                var t = e.wrapper
                  , n = Object(d.e)();
                Object(l.useEffect)((function() {
                    if (t) {
                        var e = function e() {
                            n(h(!1)),
                            t.removeListener(M.TUBI_PLAYER_EVENTS.time, e)
                        };
                        return t.addListener(M.TUBI_PLAYER_EVENTS.time, e),
                        function() {
                            t.removeListener(M.TUBI_PLAYER_EVENTS.time, e)
                        }
                    }
                }
                ), [t])
            }({
                wrapper: S
            }),
            {
                wrapper: S,
                videoRef: _,
                streamUrl: C,
                videoResourceManager: y
            }
        }
          , ht = n(689)
          , vt = n(76)
          , ft = n.n(vt)
          , Et = n(1540)
          , gt = n(438)
          , yt = n(441)
          , bt = n.n(yt)
          , Ct = n(96)
          , _t = n(1541)
          , At = n(1601)
          , St = n(49)
          , Tt = Object(l.memo)((function(e) {
            var t = e.on
              , n = Object(o.__rest)(e, ["on"]);
            return c.a.createElement(St.a, W()({
                viewBox: "0 0 24 24"
            }, n), t ? c.a.createElement(c.a.Fragment, null, c.a.createElement("path", {
                d: "M8.786 11H7.214c-1.687 0-3.02 0-4.116 1.097-1.09 1.089-1.096 2.447-1.098 3.889v-.201.429l.001-.198c.002 1.439.008 2.797 1.097 3.887C4.195 21 5.527 21 7.214 21h1.571c1.687 0 3.02 0 4.118-1.098 1.092-1.094 1.094-2.457 1.095-3.903-.001-1.445-.003-2.81-1.096-3.901C11.805 11 10.473 11 8.786 11zm0 8H7.214c-1.52 0-2.212-.021-2.703-.512-.46-.46-.509-1.112-.511-2.487.002-1.377.051-2.029.512-2.489.49-.491 1.183-.512 2.702-.512h1.571c1.52 0 2.212.021 2.703.512.459.459.508 1.108.511 2.476v.023c-.002 1.368-.052 2.019-.51 2.477-.491.491-1.184.512-2.703.512z",
                fill: "currentColor"
            }), c.a.createElement("path", {
                d: "M20.782 5.225l-.003-.002C19.695 4.148 18.241 4 16.831 4H9.154c-1.404 0-2.853.149-3.933 1.229-.939.93-1.16 2.121-1.207 3.253A.494.494 0 004.506 9h4.28c1.804 0 4.153-.179 5.836 1.504 1.68 1.678 1.376 3.873 1.378 5.497v1.168c0 .46.372.832.832.832 1.637 0 2.936-.208 3.951-1.225C21.906 15.652 22 14.15 22 12.831V9.177c0-1.323-.094-2.829-1.218-3.952z",
                fill: "currentColor"
            })) : c.a.createElement(c.a.Fragment, null, c.a.createElement("path", {
                d: "M7.786 12H6.214c-1.569 0-2.605 0-3.41.805-.766.765-.802 1.747-.803 3.195.002 1.447.038 2.429.804 3.196C3.609 20 4.646 20 6.214 20h1.571c1.569 0 2.605 0 3.411-.805.766-.766.801-1.749.803-3.196-.002-1.447-.038-2.429-.804-3.195C10.391 12 9.354 12 7.786 12z",
                fill: "currentColor"
            }), c.a.createElement("path", {
                d: "M20.515 5.487C19.194 4.181 17.391 4 15.64 4H9.28c-1.743 0-3.538.182-4.855 1.497-.976.967-1.314 2.185-1.428 3.396V10h2.001v-.924c.088-.924.313-1.641.837-2.161C6.503 6.248 7.437 6 9.28 6h6.359c1.858 0 2.798.246 3.464.905.747.747.897 1.879.897 3.465v2.27c0 1.889-.234 2.793-.896 3.455-.661.66-1.599.905-3.464.905H14v2h1.64c2.033 0 3.641-.254 4.878-1.491C21.886 16.141 22 14.278 22 12.64v-2.27c0-1.643-.114-3.511-1.485-4.883z",
                fill: "currentColor"
            })))
        }
        ))
          , Ot = Object(l.memo)((function(e) {
            return c.a.createElement(St.a, W()({
                viewBox: "0 0 24 24"
            }, e), c.a.createElement("path", {
                d: "M12 14a2 2 0 100-4 2 2 0 000 4z",
                fill: "#fff"
            }), c.a.createElement("path", {
                d: "M9.172 7.758a.999.999 0 00-1.414 0A5.954 5.954 0 006 12a5.96 5.96 0 001.758 4.243.997.997 0 001.414 0 .999.999 0 000-1.414A3.975 3.975 0 018 12c0-1.068.416-2.072 1.172-2.828a1 1 0 000-1.414zM16.242 7.758a.999.999 0 10-1.414 1.414A3.97 3.97 0 0116 12a3.973 3.973 0 01-1.172 2.829.999.999 0 101.414 1.414A5.961 5.961 0 0018 12c0-1.602-.624-3.11-1.758-4.242z",
                fill: "#fff",
                fillOpacity: ".4"
            }), c.a.createElement("path", {
                d: "M6.343 6.343A.999.999 0 104.93 4.929c-3.899 3.898-3.899 10.243 0 14.142a.997.997 0 001.414 0 .999.999 0 000-1.414c-3.119-3.119-3.119-8.194 0-11.314zM19.071 4.929a.999.999 0 10-1.414 1.414c3.119 3.119 3.119 8.194 0 11.313a.999.999 0 101.414 1.414c3.9-3.897 3.9-10.242 0-14.141z",
                fill: "#fff",
                fillOpacity: ".4"
            }))
        }
        ))
          , Rt = n(141)
          , Mt = n.n(Rt)
          , Pt = {
            up: c.a.createElement(l.Fragment, null, c.a.createElement("path", {
                d: "M15 5.00002V7.00002C17.757 7.00002 20 9.24302 20 12C20 14.757 17.757 17 15 17V19C18.866 19 22 15.866 22 12C22 8.13402 18.866 5.00002 15 5.00002Z",
                fill: "currentColor"
            }), ",", c.a.createElement("path", {
                d: "M18 12C18 10.343 16.657 9.00002 15 9.00002V11C15.551 11 16 11.449 16 12C16 12.551 15.551 13 15 13V15C16.657 15 18 13.657 18 12Z",
                fill: "currentColor"
            }), ",", c.a.createElement("path", {
                d: "M12.383 2.07602C12.379 2.07402 12.374 2.07502 12.37 2.07302C12.262 2.03002 12.15 2.01102 12.038 2.00702C12.025 2.00702 12.013 1.99902 12 1.99902C11.978 1.99902 11.958 2.01002 11.936 2.01202C11.849 2.01802 11.766 2.03402 11.683 2.06202C11.65 2.07302 11.619 2.08202 11.587 2.09602C11.483 2.14302 11.385 2.20402 11.301 2.28702C11.298 2.29002 11.295 2.29002 11.292 2.29302L7.167 6.41902C6.793 6.79102 6.288 7.00002 5.76 7.00002L5.292 6.99902C3.131 6.99902 2 8.12002 2 10.261V13.739C2 15.879 3.131 17 5.292 17L5.761 16.999C6.288 16.999 6.793 17.208 7.167 17.58L11.293 21.706C11.296 21.709 11.299 21.709 11.302 21.712C11.387 21.795 11.485 21.855 11.588 21.903C11.619 21.917 11.651 21.926 11.684 21.937C11.766 21.965 11.85 21.981 11.937 21.987C11.958 21.989 11.978 22 12 22C12.013 22 12.025 21.993 12.038 21.992C12.15 21.988 12.262 21.969 12.37 21.926C12.374 21.924 12.379 21.925 12.383 21.923C12.756 21.769 13 21.404 13 21V3.00002C13 2.59602 12.756 2.23002 12.383 2.07602ZM11 18.102C11 18.28 10.785 18.369 10.659 18.243L8.586 16.17C7.836 15.42 6.818 14.998 5.758 14.998H5.468C5.456 14.998 5.445 14.996 5.433 14.996L5.432 14.998C4.51 14.999 4 14.518 4 13.558V10.442C4 9.48102 4.51 9.00002 5.431 9.00002L5.432 9.00202C5.444 9.00202 5.456 9.00002 5.467 9.00002H5.757C6.818 9.00002 7.835 8.57902 8.585 7.82802L10.658 5.75502C10.785 5.63002 11 5.71902 11 5.89702V18.102Z",
                fill: "currentColor"
            }), ","),
            mid: c.a.createElement(l.Fragment, null, c.a.createElement("path", {
                d: "M13.383 2.07602C13.379 2.07402 13.374 2.07502 13.37 2.07302C13.262 2.03002 13.15 2.01102 13.038 2.00702C13.025 2.00702 13.013 1.99902 13 1.99902C12.978 1.99902 12.958 2.01002 12.936 2.01202C12.849 2.01802 12.766 2.03402 12.683 2.06202C12.65 2.07302 12.619 2.08202 12.587 2.09602C12.483 2.14302 12.385 2.20402 12.301 2.28702C12.298 2.29002 12.295 2.29002 12.292 2.29302L8.167 6.41902C7.793 6.79102 7.288 7.00002 6.76 7.00002L6.292 6.99902C4.131 6.99902 3 8.12002 3 10.261V13.739C3 15.879 4.131 17 6.292 17L6.761 16.999C7.288 16.999 7.793 17.208 8.167 17.58L12.293 21.706C12.296 21.709 12.299 21.709 12.302 21.712C12.387 21.795 12.485 21.855 12.588 21.903C12.619 21.917 12.651 21.926 12.684 21.937C12.766 21.965 12.85 21.981 12.937 21.987C12.958 21.989 12.978 22 13 22C13.013 22 13.025 21.993 13.038 21.992C13.15 21.988 13.262 21.969 13.37 21.926C13.374 21.924 13.379 21.925 13.383 21.923C13.756 21.769 14 21.404 14 21V3.00002C14 2.59602 13.756 2.23002 13.383 2.07602ZM12 18.102C12 18.28 11.785 18.369 11.659 18.243L9.586 16.17C8.836 15.42 7.818 14.998 6.758 14.998H6.468C6.456 14.998 6.445 14.996 6.433 14.996L6.432 14.998C5.51 14.999 5 14.518 5 13.558V10.442C5 9.48102 5.51 9.00002 6.431 9.00002L6.432 9.00202C6.444 9.00202 6.456 9.00002 6.467 9.00002H6.757C7.818 9.00002 8.835 8.57902 9.585 7.82802L11.658 5.75502C11.785 5.63002 12 5.71902 12 5.89702V18.102Z",
                fill: "currentColor"
            }), ",", c.a.createElement("path", {
                d: "M16 7.00002V9.00002C17.654 9.00002 19 10.346 19 12C19 13.654 17.654 15 16 15V17C18.761 17 21 14.761 21 12C21 9.23902 18.761 7.00002 16 7.00002Z",
                fill: "currentColor"
            }), ","),
            mute: c.a.createElement(l.Fragment, null, c.a.createElement("path", {
                d: "M20.707 3.29301C20.316 2.90201 19.684 2.90201 19.293 3.29301L3.29301 19.293C2.90201 19.684 2.90201 20.316 3.29301 20.707C3.48801 20.902 3.74401 21 4.00001 21C4.25601 21 4.51201 20.902 4.70701 20.707L20.707 4.70701C21.098 4.31601 21.098 3.68401 20.707 3.29301Z",
                fill: "currentColor"
            }), ",", c.a.createElement("path", {
                d: "M14 18.102C14 18.28 13.785 18.369 13.659 18.243L11.829 16.413L10.415 17.827L14.294 21.706C14.297 21.709 14.3 21.709 14.303 21.712C14.388 21.795 14.486 21.855 14.589 21.903C14.62 21.917 14.652 21.926 14.685 21.937C14.767 21.965 14.851 21.981 14.938 21.987C14.958 21.989 14.978 22 15 22C15.013 22 15.025 21.993 15.038 21.992C15.15 21.988 15.262 21.969 15.37 21.926C15.374 21.924 15.379 21.925 15.383 21.923C15.756 21.769 16 21.404 16 21V12.242L14 14.242V18.102Z",
                fill: "currentColor"
            }), ",", c.a.createElement("path", {
                d: "M7.00001 12.758V10.442C7.00001 9.48101 7.51001 9.00001 8.43101 9.00001L8.43201 9.00201C8.44401 9.00201 8.45601 9.00001 8.46701 9.00001H9.08301C10.144 9.00001 11.161 8.57901 11.911 7.82801L16.032 3.70701C16.423 3.31601 16.423 2.68401 16.032 2.29301C15.641 1.90201 15.009 1.90201 14.618 2.29301L10.492 6.41901C10.119 6.79101 9.61301 7.00001 9.08601 7.00001L8.29201 6.99901C6.13101 6.99901 5.00001 8.12001 5.00001 10.261V13.739C5.00001 14.076 5.03801 14.378 5.09401 14.664L7.00001 12.758Z",
                fill: "currentColor"
            }), ",")
        }
          , wt = Object(l.memo)((function(e) {
            var t = e.type
              , n = Object(o.__rest)(e, ["type"]);
            return Object(l.useMemo)((function() {
                return c.a.createElement(St.a, W()({
                    viewBox: "0 0 24 24"
                }, n), Pt[t])
            }
            ), [t, Mt()(n).join(",")])
        }
        ))
          , Lt = n(1722)
          , Nt = n.n(Lt)
          , It = "topLeft"
          , kt = "topRight"
          , Dt = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    isActive: !1
                },
                t.handleMouseEnter = function() {
                    t.setState({
                        isActive: !0
                    })
                }
                ,
                t.handleMouseLeave = function() {
                    t.setState({
                        isActive: !1
                    })
                }
                ,
                t
            }
            return Object(o.__extends)(t, e),
            t.getDerivedStateFromProps = function(e, t) {
                var n = e.initActive
                  , a = t.prevInitActive
                  , r = t.isActive;
                return void 0 !== n && n !== a ? n !== r ? {
                    isActive: n,
                    prevInitActive: n
                } : {
                    prevInitActive: n
                } : null
            }
            ,
            t.prototype.render = function() {
                var e, t, n = this.props, a = n.text, r = n.children, i = n.className, o = n.placement, s = E()(Nt.a.WithTooltip, ((e = {})[Nt.a.active] = this.state.isActive,
                e), i), l = E()(Nt.a.tooltipText, ((t = {})[Nt.a.topLeft] = o === It,
                t[Nt.a.topRight] = o === kt,
                t));
                return c.a.createElement("div", {
                    className: s
                }, c.a.createElement("div", {
                    className: l
                }, a), c.a.createElement("div", {
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave
                }, r))
            }
            ,
            t
        }(l.PureComponent)
          , jt = n(1563)
          , xt = n(1607)
          , Vt = n.n(xt)
          , Ut = n(29)
          , Bt = n(1600)
          , Ht = n(1721)
          , Yt = n.n(Ht)
          , Ft = Object(b.a)({
            channelGuide: {
                defaultMessage: "Channel Guide",
                id: "src/web/components/WebLiveChannelGuide/WebLiveChannelGuide:channelGuide"
            }
        })
          , Wt = function(e) {
            var t, n, a = e.active, r = e.onClick, i = e.open, o = e.data, s = o.title, l = o.thumbnails[0], u = E()(Yt.a.channelGuideItem, ((t = {})[Yt.a.active] = a,
            t)), d = E()(Yt.a.arrowIcon, ((n = {})[Yt.a.open] = i,
            n));
            return c.a.createElement("div", {
                className: u,
                onClick: function() {
                    return r(o)
                }
            }, c.a.createElement("div", {
                className: Yt.a.logo
            }, c.a.createElement("img", {
                src: l,
                alt: "Logo for " + s + " channel"
            })), c.a.createElement("div", {
                className: Yt.a.title
            }, s), a ? c.a.createElement(Bt.a, {
                className: d
            }) : null)
        };
        var Gt = Object(d.b)((function(e) {
            return {
                channelList: Object(N.c)(e)
            }
        }
        ))((function(e) {
            var t, n = e.channelList, a = e.currentId, r = e.isMobile, i = Object(o.__spreadArrays)(n), s = Vt()(i, (function(e) {
                return e.id === a
            }
            ))[0], u = Object(d.e)(), p = Object(C.a)(), m = Object(l.useState)(!1), v = m[0], f = m[1], g = Object(l.useCallback)((function(e) {
                var t = Object(je.i)({
                    video: e
                });
                u(h(!0)),
                u(Object(Ut.push)(t))
            }
            ), []), y = E()(Yt.a.channelGuide, ((t = {})[Yt.a.open] = v,
            t[Yt.a.mobile] = r,
            t));
            return s && i.length ? c.a.createElement("div", {
                className: y
            }, c.a.createElement("div", {
                className: Yt.a.title
            }, p.formatMessage(Ft.channelGuide), " "), c.a.createElement(Wt, {
                data: s,
                active: !0,
                onClick: function() {
                    return f(!v)
                },
                open: v
            }), c.a.createElement("div", {
                className: Yt.a.scrollContainer
            }, i.map((function(e) {
                return c.a.createElement(Wt, {
                    key: e.id,
                    data: e,
                    onClick: g
                })
            }
            )))) : null
        }
        ))
          , qt = n(1720)
          , Kt = n.n(qt)
          , zt = Object(b.a)({
            live: {
                defaultMessage: "Live",
                id: "src/web/components/WebLivePlayerOverlay/WebLivePlayerOverlay:live"
            },
            cc: {
                defaultMessage: "Closed Captions",
                id: "src/web/components/WebLivePlayerOverlay/WebLivePlayerOverlay:cc"
            },
            closeFullscreen: {
                defaultMessage: "Close Fullscreen",
                id: "src/web/components/WebLivePlayerOverlay/WebLivePlayerOverlay:closeFullscreen"
            },
            goFullscreen: {
                defaultMessage: "Go Fullscreen",
                id: "src/web/components/WebLivePlayerOverlay/WebLivePlayerOverlay:goFullscreen"
            }
        })
          , Qt = Object(l.memo)(Object(d.b)((function(e) {
            return {
                volume: e.player.volume
            }
        }
        ))((function(e) {
            var t, n, a = e.title, r = e.description, i = e.contentId, o = e.wrapper, u = e.hasSubtitle, p = e.loading, m = e.children, h = e.isMobile, v = e.containerRef, f = e.volume, g = f.isMuted, y = f.volume, b = Object(l.useState)(!0), _ = b[0], A = b[1], S = Object(l.useState)(!1), T = S[0], O = S[1], R = Object(d.f)((function(e) {
                return e.captionSettings.defaultCaptions
            }
            )), P = Object(l.useState)(!1), w = P[0], L = P[1], N = Object(d.e)(), I = Object(C.a)(), k = g ? "mute" : y > 50 ? "up" : "mid", D = Object(l.useRef)(), j = Object(l.useCallback)((function(e) {
                v.current && (e ? Object(at.d)(v.current) : Object(at.e)(),
                Object(it.g)(ct.m, Object(pt.h)(i, e ? s.ToggleState.ON : s.ToggleState.OFF)))
            }
            ), [i]), x = function() {
                var e = !!Object(at.f)();
                O(e),
                e !== T && O(e)
            };
            Object(l.useEffect)((function() {
                try {
                    var e = JSON.parse(Ct.b(gt.PLAYER_STORAGE_VOLUME))
                      , t = JSON.parse(Ct.b(gt.PLAYER_STORAGE_MUTE));
                    void 0 === e && void 0 === t || N(Object(Et.updateVolume)({
                        isMuted: t,
                        volume: e
                    }))
                } catch (e) {}
            }
            ), []),
            Object(l.useEffect)((function() {
                o && (o.setVolume(y),
                o.setMute(g))
            }
            ), [o]);
            var V = Object(l.useCallback)((function() {
                N(Object(Et.updateVolume)({
                    isMuted: !g
                })),
                Ct.f(gt.PLAYER_STORAGE_MUTE, ft()(!g)),
                null == o || o.setMute(!g)
            }
            ), [o, g])
              , U = Object(l.useCallback)((function(e) {
                N(Object(Et.updateVolume)({
                    volume: e
                })),
                Ct.f(gt.PLAYER_STORAGE_VOLUME, ft()(e)),
                null == o || o.setVolume(e)
            }
            ), [o, y])
              , B = bt()((function() {
                var e = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
                !w && e <= 960 && L(!0),
                w && e > 960 && L(!1)
            }
            ), 250);
            Object(l.useEffect)((function() {
                return Object(at.a)(document, M.FULLSCREEN_CHANGE_EVENTS, x),
                function() {
                    Object(at.k)(document, M.FULLSCREEN_CHANGE_EVENTS, x)
                }
            }
            ), []),
            Object(l.useEffect)((function() {
                return B(),
                Object(at.a)(window, "resize", B),
                function() {
                    Object(at.k)(window, "resize", B)
                }
            }
            ), [w]);
            var H = function(e) {
                var t;
                return E()(e, ((t = {})[Kt.a.active] = _,
                t))
            }
              , Y = Object(l.useCallback)((function() {
                j(!T)
            }
            ), [T])
              , F = Object(l.useCallback)((function() {
                var e = R ? "" : "English";
                N(Object(_t.e)(e))
            }
            ), [R, N])
              , W = bt()((function() {
                _ && A(!1)
            }
            ), 500, {
                leading: !1
            })
              , G = bt()((function() {
                D.current && clearTimeout(D.current),
                _ || A(!0),
                D.current = window.setTimeout((function() {
                    A(!1)
                }
                ), M.PLAYER_CURSOR_IDLE_TIMEOUT)
            }
            ), 50);
            Object(l.useEffect)((function() {
                var e = window.setTimeout((function() {
                    A(!1)
                }
                ), M.PLAYER_CONTROL_FIRST_SHOW_TIMEOUT)
                  , t = Object(_t.a)();
                return t && N(Object(_t.b)(t)),
                function() {
                    clearTimeout(D.current),
                    clearTimeout(e)
                }
            }
            ), []);
            var q = E()(Kt.a.controlItem, ((t = {})[Kt.a.iconActive] = !!R,
            t))
              , K = E()(Kt.a.volumeBar, ((n = {})[Kt.a.volumeBarMute] = "mute" === k,
            n));
            if (h)
                return c.a.createElement("div", {
                    className: Kt.a.livePlayerOverlayMobile
                }, c.a.createElement("div", {
                    className: Kt.a.title
                }, a), c.a.createElement("div", {
                    className: Kt.a.description
                }, r), m, c.a.createElement(Gt, {
                    currentId: i
                }));
            var z = c.a.createElement(Gt, {
                currentId: i,
                isMobile: w
            });
            return c.a.createElement(c.a.Fragment, null, m, w && !p ? z : null, p ? null : c.a.createElement("div", {
                className: Kt.a.livePlayerOverlay,
                onScroll: G,
                onMouseMove: G,
                onMouseLeave: W
            }, c.a.createElement("div", {
                className: H(Kt.a.titleArea)
            }, c.a.createElement("div", {
                className: Kt.a.title
            }, a), c.a.createElement("div", {
                className: Kt.a.description
            }, r)), c.a.createElement("div", {
                className: H(Kt.a.controlArea)
            }, w ? null : z, c.a.createElement("div", {
                className: Kt.a.live
            }, c.a.createElement(Ot, {
                className: Kt.a.liveIcon
            }), I.formatMessage(zt.live)), c.a.createElement("div", {
                className: Kt.a.controls
            }, c.a.createElement("div", {
                className: Kt.a.volume
            }, c.a.createElement("div", {
                className: K
            }, c.a.createElement(jt.a, {
                min: 0,
                max: 100,
                value: y,
                onChanged: U,
                isLive: !0
            })), c.a.createElement(wt, {
                type: k,
                className: Kt.a.controlItem,
                onClick: V
            })), u ? c.a.createElement(Dt, {
                text: I.formatMessage(zt.cc)
            }, c.a.createElement(At.a, {
                className: q,
                onClick: F
            })) : null, c.a.createElement(Dt, {
                text: I.formatMessage(T ? zt.closeFullscreen : zt.goFullscreen)
            }, c.a.createElement(Tt, {
                on: T,
                onClick: Y,
                className: Kt.a.controlItem
            }))))), p && T ? c.a.createElement("div", {
                className: Kt.a.loadingBackground
            }, c.a.createElement(Ne, {
                isDeeplink: !1
            })) : null)
        }
        )))
          , Zt = n(1713)
          , Xt = n.n(Zt)
          , Jt = Object(d.b)((function(e, t) {
            var n, a = t.contentId, r = e.video, i = e.auth, o = e.ui, s = e.live;
            return {
                channel: r.byId[a],
                deviceId: i.deviceId,
                userId: null === (n = i.user) || void 0 === n ? void 0 : n.userId,
                isKidsModeEnabled: o.isKidsModeEnabled,
                loading: s.loading,
                isMobile: o.isMobile,
                videoPlayer: s.videoPlayer,
                performanceCollectorEnabled: Object(ht.a)(e),
                isMonitoringEnabled: Object(ht.c)(e)
            }
        }
        ))((function(e) {
            var t = e.channel
              , a = e.deviceId
              , r = e.contentId
              , i = e.userId
              , s = e.isKidsModeEnabled
              , u = e.loading
              , d = e.isMobile
              , p = e.videoPlayer
              , m = e.performanceCollectorEnabled
              , h = e.isMonitoringEnabled
              , v = t || {}
              , f = v.publisher_id
              , E = v.title
              , g = v.description
              , y = v.has_subtitle
              , b = v.lang
              , C = Object(l.useRef)(null)
              , _ = {
                contentId: r,
                deviceId: a,
                publisherId: f,
                userId: i,
                coppaEnabled: s
            }
              , A = Object(Ge.a)(We.a)
              , S = [A]
              , T = mt({
                video: t,
                getAdQuery: function() {
                    return Object(rt.h)(_)
                },
                videoPlayer: p,
                performanceCollectorEnabled: m,
                useHlsNext: A.getValue()
            })
              , O = T.wrapper
              , R = T.videoRef
              , M = T.streamUrl;
            return Object(l.useEffect)((function() {
                var e;
                return h && O && n.e(26).then(n.bind(null, 1851)).then((function(t) {
                    var n = t.setup;
                    if (!O.isDestroyed) {
                        var s = S.find((function(e) {
                            return e && null !== e.treatment
                        }
                        ));
                        e = n(O, Object(o.__assign)({
                            contentId: r,
                            title: E,
                            userId: i,
                            deviceId: a,
                            analyticsConfig: Ue.a.getAnalyticsConfig(),
                            lang: b
                        }, s && {
                            experimentName: s.experimentName,
                            experimentTreatmentName: s.treatment
                        }))
                    }
                }
                )).catch((function(e) {
                    Ie.a.error(e, "Failed to setup youbora")
                }
                )),
                function() {
                    null == e || e.remove(),
                    null == O || O.destroy()
                }
            }
            ), [O]),
            t && M ? c.a.createElement("div", {
                className: Xt.a.livePlayerContainer,
                ref: C
            }, c.a.createElement(Qt, {
                wrapper: O,
                contentId: r,
                title: E,
                description: g,
                onFullscreenPress: O,
                loading: u,
                hasSubtitle: !!y,
                isMobile: d,
                containerRef: C
            }, c.a.createElement("video", {
                ref: R,
                className: Xt.a.livePlayer
            })), y ? c.a.createElement(Fe, {
                wrapper: O,
                classname: Xt.a.subtitleArea
            }) : null) : null
        }
        ))
          , $t = n(1696)
          , en = n.n($t)
          , tn = 9999
          , nn = function(e) {
            var t = e.posterUrl
              , n = e.contentId
              , a = e.loading
              , r = e.video
              , i = e.isMobile;
            Object(l.useEffect)((function() {
                i && (window.location.href = Object(je.f)(r))
            }
            ), []);
            var o = Object(l.useMemo)((function() {
                return Object(xe.h)(r, void 0, void 0)
            }
            ), [r]);
            return c.a.createElement(c.a.Fragment, null, c.a.createElement(u.a, o), c.a.createElement("div", {
                className: en.a.live
            }, t ? c.a.createElement("div", {
                className: en.a.background,
                style: {
                    backgroundImage: "url('" + t + "')"
                }
            }) : null, a ? c.a.createElement(Ne, {
                isDeeplink: !1
            }) : null, c.a.createElement(Jt, {
                contentId: n
            })))
        }
          , an = function(e, t) {
            var n, a, r, i = t.params.id, o = e.video.byId[i];
            return {
                video: o,
                contentId: i,
                posterUrl: (null === (n = null == o ? void 0 : o.backgrounds) || void 0 === n ? void 0 : n[0]) || (null === (a = null == o ? void 0 : o.posterarts) || void 0 === a ? void 0 : a[0]),
                hasSubtitle: null !== (r = null == o ? void 0 : o.has_subtitle) && void 0 !== r && r,
                loading: e.live.loading,
                isMobile: e.ui.isMobile
            }
        };
        function rn(e) {
            var t = e.getState
              , n = e.dispatch
              , a = e.params;
            return Object(o.__awaiter)(this, void 0, void 0, (function() {
                var e, r, l, c;
                return Object(o.__generator)(this, (function(o) {
                    switch (o.label) {
                    case 0:
                        if (e = a.id,
                        n({
                            videoPlayer: s.VideoPlayerState.DEFAULT,
                            type: m.bd
                        }),
                        r = t(),
                        r.video.byId[e])
                            return [2];
                        o.label = 1;
                    case 1:
                        return o.trys.push([1, 3, , 4]),
                        [4, n(Object(v.f)(e))];
                    case 2:
                        return o.sent(),
                        [3, 4];
                    case 3:
                        return l = o.sent(),
                        c = Object(De.b)(l.errType),
                        Ie.a[c]({
                            error: l,
                            contentId: e
                        }, "error when loading data for WebLivePlayer container"),
                        [2, i.a.reject(l)];
                    case 4:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        function on(e) {
            var t = e.getState
              , n = e.dispatch;
            return Object(o.__awaiter)(this, void 0, void 0, (function() {
                var e;
                return Object(o.__generator)(this, (function(a) {
                    switch (a.label) {
                    case 0:
                        return e = t(),
                        e.live.channelGuideLoaded ? [3, 2] : [4, n(Object(p.f)({
                            scope: M.HOME_DATA_SCOPE.all,
                            contentMode: M.CONTENT_MODES.linear,
                            limit: tn,
                            loadChannelGuide: !0
                        }))];
                    case 1:
                        a.sent(),
                        a.label = 2;
                    case 2:
                        return n(Object(ke.a)(m.Mc, {
                            channelGuideLoaded: !0
                        })),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        var sn = Object(d.b)(an)(nn);
        sn.fetchData = rn,
        sn.fetchDataDeferred = on,
        sn.hasDynamicMeta = !0;
        t.default = sn
    },
    1850: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "mapStateToProps", (function() {
            return z
        }
        )),
        n.d(t, "rawChromecastSender", (function() {
            return Z
        }
        ));
        var a = n(40)
          , r = n.n(a)
          , i = n(1)
          , o = n(0)
          , s = n.n(o)
          , l = n(19)
          , c = n(30)
          , u = n(1591)
          , d = n(27)
          , p = n(116)
          , m = n(2)
          , h = n(1536)
          , v = n(18)
          , f = n(1592)
          , E = n(44)
          , g = n(1632)
          , y = n(205)
          , b = n.n(y)
          , C = n(8)
          , _ = n.n(C)
          , A = n(11)
          , S = n(276)
          , T = n(871)
          , O = n(1634)
          , R = n(1602)
          , M = n(1597)
          , P = n(239)
          , w = n(4)
          , L = n.n(w)
          , N = n(49)
          , I = function(e) {
            return s.a.createElement(N.a, L()({
                viewBox: "0 0 40 40"
            }, e), s.a.createElement("g", {
                fill: "none",
                fillRule: "evenodd",
                transform: "translate(8 10)"
            }, s.a.createElement("path", {
                fill: "currentColor",
                d: "M14.787 0c-.359 0-.776.151-1.22.47L8 5H2C.887 5 0 5.858 0 6.968v7.064C0 15.142.887 16 2 16h6l5.567 4.53c.444.319.861.47 1.22.47.725 0 1.213-.618 1.213-1.714V1.714C16 .618 15.512 0 14.787 0M14 3v15.304l-4.738-3.855A2 2 0 0 0 8 14l-6 .032V7h6c.46 0 .906-.158 1.262-.449L14 2.848m.921-.864h.005-.005"
            }), s.a.createElement("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M19.002 8c.929.54 1.54 1.458 1.54 2.5S19.93 12.46 19 13"
            }), s.a.createElement("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M18.635 4C21.742 4.854 24 7.441 24 10.5s-2.26 5.646-5.367 6.5"
            })))
        }
          , k = n(1563)
          , D = n(1779)
          , j = n.n(D)
          , x = Object(A.a)({
            castOn: {
                defaultMessage: "Ready to cast",
                id: "src/web/components/ChromecastController/ChromecastController:castOn"
            },
            castOnDevice: {
                defaultMessage: "Ready to cast on {deviceName}",
                id: "src/web/components/ChromecastController/ChromecastController:castOnDevice"
            },
            playBegin: {
                defaultMessage: "Play any title to begin casting",
                id: "src/web/components/ChromecastController/ChromecastController:playBegin"
            },
            errorCasting: {
                defaultMessage: "We experienced an error. Please try that again.",
                id: "src/web/components/ChromecastController/ChromecastController:errorCasting"
            },
            castLoading: {
                defaultMessage: "Preparing your video",
                id: "src/web/components/ChromecastController/ChromecastController:castLoading"
            },
            castAd: {
                defaultMessage: "Your title will resume shortly",
                id: "src/web/components/ChromecastController/ChromecastController:castAd"
            }
        })
          , V = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return Object(i.__extends)(t, e),
            t.prototype.render = function() {
                var e = this.props
                  , t = e.deviceName
                  , n = e.castPlayerState
                  , a = e.seriesTitle
                  , r = e.videoTitle
                  , i = e.isAd
                  , o = e.position
                  , l = e.duration
                  , c = e.seek
                  , u = e.isMuted
                  , d = e.volumeLevel
                  , p = e.updateVolume
                  , m = e.toggleVolumeMute
                  , h = e.setCaptions
                  , v = e.captionsEnabled
                  , f = e.togglePlayPause
                  , E = e.castVideoLoadError
                  , g = e.castVideoLoading
                  , y = e.captionsAvailable
                  , C = window.chrome.cast.media.PlayerState
                  , _ = C.IDLE
                  , A = C.PLAYING
                  , S = C.BUFFERING;
                if (n === _)
                    return s.a.createElement(U, {
                        deviceName: t,
                        error: !!E,
                        loading: !!g
                    });
                var T = n === A
                  , R = n === S;
                return s.a.createElement("div", {
                    key: "ccStatusBar",
                    className: j.a.chromecastWrapper
                }, s.a.createElement(b.a, {
                    className: j.a.container
                }, s.a.createElement("div", {
                    className: j.a.chromecastController
                }, s.a.createElement("div", {
                    className: j.a.titleWrapper
                }, i ? s.a.createElement(H, null) : s.a.createElement(B, {
                    seriesTitle: a,
                    videoTitle: r
                })), s.a.createElement("div", {
                    className: j.a.transportControls
                }, s.a.createElement("div", {
                    className: j.a.left
                }, s.a.createElement("div", {
                    key: "playPause",
                    className: j.a.playPause
                }, T || R ? s.a.createElement(M.b, {
                    onClick: f,
                    className: j.a.icon
                }) : s.a.createElement(M.c, {
                    onClick: f,
                    className: j.a.icon
                }))), s.a.createElement("div", {
                    className: j.a.center
                }, l && o ? s.a.createElement(O.a, {
                    position: o,
                    duration: l,
                    isAd: i,
                    seek: c
                }) : null), s.a.createElement("div", {
                    className: j.a.right
                }, s.a.createElement(Y, {
                    isMuted: u,
                    volumeLevel: d,
                    updateVolume: p,
                    toggleVolumeMute: m,
                    setCaptions: h,
                    captionsEnabled: v,
                    captionsAvailable: y
                }))))))
            }
            ,
            t
        }(o.Component)
          , U = function(e) {
            var t = e.deviceName
              , n = e.error
              , a = e.loading
              , r = Object(S.a)()
              , i = t ? r.formatMessage(x.castOnDevice, {
                deviceName: t
            }) : r.formatMessage(x.castOn)
              , o = s.a.createElement("div", {
                className: j.a.idleMessageWrapper
            }, s.a.createElement("div", {
                className: j.a.title
            }, i), s.a.createElement("div", {
                className: j.a.subtitle
            }, r.formatMessage(x.playBegin)));
            return (n || a) && (o = s.a.createElement("div", {
                className: j.a.idleMessageWrapper
            }, s.a.createElement("div", {
                className: j.a.title
            }, r.formatMessage(n ? x.errorCasting : x.castLoading)))),
            s.a.createElement("div", {
                className: j.a.chromecastWrapper
            }, s.a.createElement(b.a, {
                className: j.a.container
            }, o, s.a.createElement("div", {
                className: j.a.buttonWrapper
            }, s.a.createElement("button", {
                class: j.a.button,
                is: "google-cast-button"
            }))))
        }
          , B = function(e) {
            var t = e.seriesTitle
              , n = void 0 === t ? "" : t
              , a = e.videoTitle;
            return s.a.createElement("div", {
                className: j.a.ccTitle
            }, s.a.createElement("div", {
                className: j.a.title
            }, n || a), n ? s.a.createElement("div", {
                className: j.a.subtitle
            }, a) : null)
        }
          , H = function() {
            return s.a.createElement("div", {
                className: j.a.adMessage
            }, s.a.createElement("div", null, s.a.createElement(T.a, x.castAd)))
        }
          , Y = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.hideVolumeRangeTimer = null,
                n.showVolumeRangeTimer = null,
                n.onClickCaptions = function() {
                    var e = n.props;
                    (0,
                    e.setCaptions)(!e.captionsEnabled && "1")
                }
                ,
                n.showVolumeRange = function() {
                    clearTimeout(n.hideVolumeRangeTimer),
                    n.showVolumeRangeTimer = setTimeout((function() {
                        n.state.showVolumeRange || n.setState({
                            showVolumeRange: !0
                        })
                    }
                    ), 200)
                }
                ,
                n.hideVolumeRange = function() {
                    clearTimeout(n.showVolumeRangeTimer),
                    n.hideVolumeRangeTimer = setTimeout((function() {
                        n.state.showVolumeRange && n.setState({
                            showVolumeRange: !1
                        })
                    }
                    ), 200)
                }
                ,
                n.state = {
                    showVolumeRange: !1
                },
                n
            }
            return Object(i.__extends)(t, e),
            t.prototype.render = function() {
                var e, t = this.props, n = t.captionsAvailable, a = t.isMuted, r = t.volumeLevel, i = t.updateVolume, o = t.captionsEnabled, l = t.toggleVolumeMute, c = this.state.showVolumeRange, u = _()(j.a.captionsArea, ((e = {})[j.a.enabled] = o,
                e));
                return s.a.createElement("div", {
                    className: j.a.ccButtons
                }, s.a.createElement("div", null, s.a.createElement("div", {
                    className: j.a.castButton
                }, s.a.createElement(R.a, null))), s.a.createElement("div", {
                    key: "volume",
                    className: j.a.volumeArea,
                    onMouseEnter: this.showVolumeRange,
                    onMouseLeave: this.hideVolumeRange,
                    onClick: l
                }, !a && c ? s.a.createElement("div", {
                    className: j.a.volumeRange
                }, s.a.createElement(k.a, {
                    min: 1,
                    max: 100,
                    value: 100 * r,
                    onChanging: i
                })) : null, a ? s.a.createElement(P.a, {
                    className: j.a.icon
                }) : s.a.createElement(I, {
                    className: j.a.icon
                })), n ? s.a.createElement("div", {
                    onClick: this.onClickCaptions,
                    className: u
                }, s.a.createElement(M.a, {
                    className: j.a.icon
                })) : null)
            }
            ,
            t
        }(o.PureComponent)
          , F = n(1562)
          , W = n(1778)
          , G = n.n(W)
          , q = E.b.isStagingOrAlpha
          , K = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.checkCastAvailabilityTimeout = null,
                n.checkCastAvailability = function() {
                    window.hasOwnProperty("castApiAvailable") && (!window.castApiAvailable || window.cast && window.cast.framework) ? window.castApiAvailable && (n.props.dispatch(Object(v.a)(m.Dc, {
                        castApiAvailable: !0
                    })),
                    n.onCastApiAvailable()) : n.checkCastAvailabilityTimeout = setTimeout(n.checkCastAvailability, 100)
                }
                ,
                n.onCastApiAvailable = function() {
                    var e, t = n.props.dispatch, a = window.cast, r = window.cast.framework.RemotePlayerEventType, i = r.CURRENT_TIME_CHANGED, o = r.PLAYER_STATE_CHANGED, s = r.VOLUME_LEVEL_CHANGED, l = r.IS_MUTED_CHANGED, c = r.MEDIA_INFO_CHANGED;
                    n.playerControllerHandlers = ((e = {})[i] = function(e) {
                        var t = e.value;
                        n.props.isAd || (n.props.dispatch(Object(v.a)(m.Jc, {
                            value: parseInt(t, 10)
                        })),
                        n.checkShouldShowAutoPlay(parseInt(t, 10)))
                    }
                    ,
                    e[o] = function(e) {
                        var t = e.value;
                        t && n.props.dispatch(Object(v.a)(m.Ic, {
                            playerState: t
                        }))
                    }
                    ,
                    e[s] = function(e) {
                        var t = e.value;
                        n.props.dispatch(Object(v.a)(m.Lc, {
                            volumeLevel: t
                        }))
                    }
                    ,
                    e[l] = function(e) {
                        var t = e.value;
                        n.props.dispatch(Object(v.a)(m.Hc, {
                            isMuted: !!t
                        }))
                    }
                    ,
                    e[c] = function(e) {
                        var t = e.value
                          , a = void 0 === t ? {} : t;
                        if (a && a.customData) {
                            var r = (a.customData.content || {}).contentId;
                            n.props.contentId !== r && (n.log("New content ID is casting: " + r),
                            n.props.dispatch(Object(v.a)(m.Fc, {
                                contentId: r
                            })))
                        }
                    }
                    ,
                    e),
                    n.castContext = a.framework.CastContext.getInstance();
                    var u = n.castContext.getCastState();
                    t(Object(v.a)(m.Kc, {
                        castState: u
                    })),
                    u === a.framework.CastState.CONNECTED && n.onConnected(),
                    n.castContext.addEventListener(a.framework.CastContextEventType.CAST_STATE_CHANGED, (function(e) {
                        var r = e.castState;
                        t(Object(v.a)(m.Kc, {
                            castState: r
                        })),
                        r === a.framework.CastState.CONNECTED ? n.onConnected() : r === a.framework.CastState.NOT_CONNECTED && n.onDisconnected()
                    }
                    ))
                }
                ,
                n.checkShouldShowAutoPlay = function(e) {
                    var t = n.props
                      , a = t.autoPlayShowTime
                      , r = t.dispatch
                      , i = t.chromecastAutoplayVisible;
                    e && a && e >= a && !i && r(Object(d.g)(!0))
                }
                ,
                n.autoplay = function(e) {
                    var t = e.contentId
                      , a = e.isFromAutoplayAutomatic
                      , r = e.isFromAutoplayDeliberate;
                    (0,
                    n.props.dispatch)(Object(u.a)(t, {
                        isFromAutoplayAutomatic: a,
                        isFromAutoplayDeliberate: r,
                        resumeFromCurrentPosition: !1
                    })),
                    Object(f.a)({
                        type: F.b.AUTOPLAY_START
                    })
                }
                ,
                n.initPlayerController = function() {
                    n.log("initPlayerController", n.playerController);
                    var e = n.props.dispatch
                      , t = window.cast
                      , a = n.castSession.getMediaSession();
                    if (!a)
                        return n.log("Cannot find current media", a);
                    n.log("detaching and reattaching ad listener"),
                    a.removeUpdateListener(n.updateAdStatus),
                    a.addUpdateListener(n.updateAdStatus),
                    n.playerController && (n.log("removing event handlers off playerController"),
                    r()(n.playerControllerHandlers).forEach((function(e) {
                        n.playerController.removeEventListener(e, n.playerControllerHandlers[e])
                    }
                    )),
                    n.playerController = null);
                    var i = new t.framework.RemotePlayer;
                    n.playerController = new t.framework.RemotePlayerController(i),
                    n.log("new playerController", i, n.playerController);
                    var o = i.playerState;
                    o && e(Object(v.a)(m.Ic, {
                        playerState: o
                    })),
                    n.log("attaching event handlers onto playerController"),
                    r()(n.playerControllerHandlers).forEach((function(e) {
                        n.playerController.addEventListener(e, n.playerControllerHandlers[e])
                    }
                    ))
                }
                ,
                n.updateAdStatus = function() {
                    var e = n.castSession.getMediaSession() || {}
                      , t = n.props
                      , a = t.isAd
                      , r = t.dispatch
                      , i = (e.customData || {}).isPlayingAd;
                    void 0 !== i && (n.log("updateAdStatus. isPlayingAd:", i),
                    i !== a && r(Object(v.a)(m.Cc, {
                        isAd: i
                    })))
                }
                ,
                n.onConnected = function() {
                    n.log("On connected");
                    var e = n.props
                      , t = e.currentPageContentId
                      , a = e.dispatch
                      , r = e.isVideoPage
                      , i = e.isFromAutoplayAutomatic
                      , o = e.isFromAutoplayDeliberate
                      , s = window.cast;
                    n.castSession = n.castContext.getCurrentSession();
                    var l = n.castSession.getCastDevice()
                      , c = l.friendlyName
                      , d = l.volume
                      , p = d.muted
                      , h = d.level;
                    a(Object(v.a)(m.Gc, {
                        deviceName: c,
                        isMuted: p,
                        volumeLevel: h
                    })),
                    n.castSession.addEventListener(s.framework.SessionEventType.MEDIA_SESSION, (function(e) {
                        var t, a, r = (e || {}).mediaSession.media;
                        if (r && !r.contentId && !(null === (a = null === (t = r.customData) || void 0 === t ? void 0 : t.content) || void 0 === a ? void 0 : a.contentId))
                            return n.log("Media session has no contentId, ignore media_session event", e);
                        n.initPlayerController()
                    }
                    ));
                    var f = n.castSession.getMediaSession();
                    if (f)
                        return n.joinMediaSession(f);
                    r && (n.log("Video page detected, cast contentId:", t),
                    a(Object(u.a)(t, {
                        isFromAutoplayAutomatic: i,
                        isFromAutoplayDeliberate: o,
                        resumeFromCurrentPosition: !0
                    })))
                }
                ,
                n.joinMediaSession = function(e) {
                    n.log("joining session", e),
                    n.props.dispatch(Object(v.a)(m.Jc, {
                        value: e.getEstimatedTime()
                    })),
                    n.initPlayerController()
                }
                ,
                n.onDisconnected = function() {
                    n.log("on disconnected"),
                    n.playerController = null,
                    n.castSession = null
                }
                ,
                n.seek = function(e) {
                    n.log("seek to", e);
                    var t = n.castSession.getMediaSession()
                      , a = new window.chrome.cast.media.SeekRequest;
                    a.currentTime = e,
                    t.seek(a, (function() {
                        n.log("Seeked to ", e)
                    }
                    ), (function(t) {
                        return n.log("Error seeking to ", e, t)
                    }
                    ))
                }
                ,
                n.updateVolume = function(e) {
                    n.log("UPDATE VOLUME", e / 100);
                    var t = n.castSession.getMediaSession()
                      , a = e / 100
                      , r = new window.chrome.cast.Volume(a)
                      , i = new window.chrome.cast.media.VolumeRequest(r);
                    t.setVolume(i, (function() {
                        n.props.dispatch(Object(v.a)(m.Lc, {
                            volumeLevel: a
                        }))
                    }
                    ))
                }
                ,
                n.toggleVolumeMute = function() {
                    n.playerController && n.playerController.muteOrUnmute()
                }
                ,
                n.setCaptions = function(e) {
                    var t = n.props.dispatch
                      , a = [];
                    e && a.push(e);
                    var r = n.castSession.getMediaSession()
                      , i = new window.chrome.cast.media.EditTracksInfoRequest(a);
                    r.editTracksInfo(i, (function() {
                        return t(Object(v.a)(m.Ec, {
                            captionsEnabled: !!e
                        }))
                    }
                    ), (function(e) {
                        return n.log("edit tracks error", e)
                    }
                    ))
                }
                ,
                n.togglePlayPause = function() {
                    n.playerController && n.playerController.playOrPause()
                }
                ,
                n.log = function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    q && console.log.apply(console, Object(i.__spreadArrays)(["## chromecast sender-"], e))
                }
                ,
                n.castSession = null,
                n.playerController = null,
                n.castContext = null,
                n
            }
            return Object(i.__extends)(t, e),
            t.prototype.componentDidMount = function() {
                setTimeout((function() {
                    window.castApiAvailable || (window.castApiAvailable = !1)
                }
                ), 6e4),
                this.checkCastAvailabilityTimeout = setTimeout(this.checkCastAvailability, 100)
            }
            ,
            t.prototype.componentDidUpdate = function(e) {
                var t = e.contentId
                  , n = this.props
                  , a = n.contentId
                  , r = n.dispatch;
                t !== a && (r(Object(p.f)(a)),
                this.initPlayerController())
            }
            ,
            t.prototype.componentWillUnmount = function() {
                clearTimeout(this.checkCastAvailabilityTimeout)
            }
            ,
            t.prototype.onAutoplayContentLoaded = function(e, t) {
                var n = e[0];
                Object(f.a)({
                    type: F.b.AUTOPLAY_SHOW,
                    data: {
                        video: n,
                        timeLeft: t
                    }
                })
            }
            ,
            t.prototype.onAutoplayPause = function() {
                Object(f.a)({
                    type: F.b.AUTOPLAY_PAUSE
                })
            }
            ,
            t.prototype.onAutoplayResume = function() {
                Object(f.a)({
                    type: F.b.AUTOPLAY_RESUME
                })
            }
            ,
            t.prototype.render = function() {
                var e = this.props
                  , t = e.castReceiverState
                  , n = e.castApiAvailable
                  , a = e.castPlayerState
                  , r = e.deviceName
                  , i = e.seriesTitle
                  , o = e.videoTitle
                  , l = e.position
                  , u = e.duration
                  , d = e.isMuted
                  , p = e.volumeLevel
                  , m = e.isAd
                  , h = e.captionsEnabled
                  , v = e.castVideoLoading
                  , f = e.castVideoLoadError
                  , E = e.captionsAvailable
                  , y = e.contentId
                  , b = e.isSeries
                  , C = e.isFromAutoplay
                  , _ = e.chromecastAutoplayVisible;
                if (!n || !Object(c.e)(t))
                    return null;
                var A = a === window.chrome.cast.media.PlayerState.PAUSED;
                return s.a.createElement(s.a.Fragment, null, _ && s.a.createElement("div", {
                    className: G.a.chromeCastAutoPlayWrapper
                }, s.a.createElement(g.a, {
                    id: y,
                    isEpisode: b,
                    videoPaused: A,
                    isFromAutoplay: C,
                    onAutoplay: this.autoplay,
                    onPause: this.onAutoplayPause,
                    onResume: this.onAutoplayResume,
                    onAutoplayContentLoaded: this.onAutoplayContentLoaded,
                    contentLimit: 1
                })), s.a.createElement(V, {
                    deviceName: r,
                    castPlayerState: a,
                    seriesTitle: i,
                    videoTitle: o,
                    position: l,
                    duration: u,
                    seek: this.seek,
                    updateVolume: this.updateVolume,
                    toggleVolumeMute: this.toggleVolumeMute,
                    togglePlayPause: this.togglePlayPause,
                    setCaptions: this.setCaptions,
                    captionsEnabled: h,
                    isMuted: d,
                    volumeLevel: p,
                    isAd: m,
                    castVideoLoading: v,
                    castVideoLoadError: f,
                    captionsAvailable: E
                }))
            }
            ,
            t
        }(o.Component)
          , z = function(e) {
            var t = e.chromecast
              , n = void 0 === t ? {} : t
              , a = e.routing
              , r = e.tracking.fromAutoplayDeliberate
              , i = e.video.byId
              , o = e.ui.chromecastAutoplayVisible
              , s = n.castReceiverState
              , l = n.castApiAvailable
              , c = n.contentId
              , u = n.deviceName
              , d = n.position
              , p = n.isMuted
              , m = n.castPlayerState
              , v = n.isAd
              , f = n.captionsEnabled
              , E = n.volumeLevel
              , g = n.castVideoLoading
              , y = n.castVideoLoadError
              , b = i[c] || {}
              , C = b.title
              , _ = b.duration
              , A = b.has_subtitle
              , S = b.credit_cuepoints
              , T = void 0 === S ? {} : S
              , O = ""
              , R = !1;
            b.series_id && (O = (i["0" + b.series_id] || {}).title,
            R = !0);
            var M = "undefined" == typeof window ? [] : window.location.pathname.split("/").filter(Boolean)
              , P = ["tv-shows", "movies", "video"].indexOf(M[0]) >= 0
              , w = "";
            P && (w = M[1]);
            var L = (a && a.locationBeforeTransitions && a.locationBeforeTransitions.query || {}).autoplay
              , N = void 0 === L ? null : L
              , I = T.postlude || _ - 1;
            return {
                isFromAutoplay: !!N,
                isFromAutoplayDeliberate: !(!N || !r),
                isFromAutoplayAutomatic: !(!N || r),
                castApiAvailable: l,
                castReceiverState: s,
                castPlayerState: m,
                deviceName: u,
                seriesTitle: O,
                videoTitle: C,
                captionsAvailable: !!A,
                position: d,
                duration: _,
                isMuted: p,
                volumeLevel: E,
                isAd: v,
                captionsEnabled: f,
                castVideoLoading: g,
                castVideoLoadError: y,
                contentId: c,
                isVideoPage: P,
                currentPageContentId: w,
                autoplayContents: Object(h.b)(e, c),
                isSeries: R,
                autoPlayShowTime: I,
                chromecastAutoplayVisible: o
            }
        }
          , Q = Object(l.b)(z)(K)
          , Z = K;
        t.default = Q
    },
    1852: function(e, t, n) {
        "use strict";
        n.r(t);
        var a, r, i, o, s = n(9), l = n.n(s), c = n(37), u = n.n(c), d = n(33), p = n.n(d), m = n(34), h = n.n(m), v = n(28), f = n.n(v), E = n(38), g = n.n(E), y = n(17), b = n(3), C = n.n(b), _ = n(0), A = n.n(_), S = n(440), T = n(19), O = n(219), R = n(66), M = n(116), P = n(13), w = n(1564), L = n(266), N = n(240), I = n(263), k = n(21), D = n(87), j = n(93), x = n(677), V = n(12), U = n.n(V), B = n(36), H = n(8), Y = n.n(H), F = n(441), W = n.n(F), G = n(29), q = n(5), K = n(68), z = n(44), Q = n(1631), Z = n(678), X = n(114), J = n(1594), $ = n(1630), ee = n(1692), te = n.n(ee), ne = (r = a = function(e) {
            function t(e) {
                p()(this, t);
                var n = f()(this, (t.__proto__ || u()(t)).call(this, e));
                return n.handleResize = function() {
                    n.setState({
                        vw: window.innerWidth
                    })
                }
                ,
                n.handleWatch = function() {
                    var e = n.context.deviceId
                      , t = n.props
                      , a = t.dispatch
                      , r = t.latestEpisodeInfo
                      , i = t.isMobile
                      , o = t.mobilePlaybackEnabled;
                    if (!i || o) {
                        var s = Object(k.i)({
                            video: r
                        });
                        s = Object(B.addQueryStringToUrl)(s, U()({}, q.AUTO_START_QUERY_PARAM_FROM_LINK, !0)),
                        a(Object(G.push)(s))
                    } else
                        window.location.href = Object(k.f)(r, e)
                }
                ,
                n.state = {
                    vw: q.BREAKPOINTS.xl
                },
                n.handleResize = W()(n.handleResize, 250),
                n
            }
            return g()(t, e),
            h()(t, [{
                key: "componentDidMount",
                value: function() {
                    Object(K.a)(window, "resize", this.handleResize),
                    this.handleResize()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    Object(K.k)(window, "resize", this.handleResize)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.series
                      , n = e.trackingURI
                      , a = e.handleCastClick
                      , r = e.latestEpisodeInfo
                      , i = e.dispatch
                      , o = e.isKidsModeEnabled
                      , s = this.state.vw
                      , l = t.backgrounds
                      , c = void 0 === l ? [] : l
                      , u = t.hero_images
                      , d = void 0 === u ? [] : u
                      , p = t.posterarts
                      , m = void 0 === p ? [] : p
                      , h = c[0] || d[0] || m[0]
                      , v = m[0]
                      , f = "linear-gradient(to top, " + z.b.getAppThemeColor(o) + ", rgba(38, 38, 45, 0.4) 83%, rgba(38, 38, 45, 0.2))"
                      , E = {
                        belongSeries: t.id,
                        content: t,
                        dispatch: i,
                        onCastClick: a,
                        onClickWatch: r ? this.handleWatch : null,
                        posterUrl: v,
                        seasons: t.seasons,
                        trackingURI: n,
                        vw: s,
                        isSeriesDetail: !0
                    };
                    return A.a.createElement(X.a, null, (function(e) {
                        return A.a.createElement("div", {
                            className: Y()(te.a.series, U()({}, te.a.refresh, e.enabledPage))
                        }, e.enabledPage ? A.a.createElement(J.a, {
                            src: h
                        }) : A.a.createElement(Z.a, {
                            className: te.a.titleImage,
                            gradient: f,
                            url: h
                        }), A.a.createElement("div", {
                            className: te.a.positionContentDetail
                        }, e.enabledPage ? A.a.createElement($.a, E) : A.a.createElement(Q.a, E)))
                    }
                    ))
                }
            }]),
            t
        }(_.Component),
        a.propTypes = {
            dispatch: C.a.func,
            handleCastClick: C.a.func,
            history: C.a.object,
            isMobile: C.a.bool,
            latestEpisodeInfo: C.a.object,
            mobilePlaybackEnabled: C.a.bool.isRequired,
            series: C.a.object.isRequired,
            trackingURI: C.a.string.isRequired,
            isKidsModeEnabled: C.a.bool
        },
        a.contextTypes = {
            deviceId: C.a.string.isRequired,
            router: C.a.object.isRequired
        },
        r), ae = (o = i = function(e) {
            function t(e) {
                p()(this, t);
                var n = f()(this, (t.__proto__ || u()(t)).call(this, e));
                return n.handleCastClick = function(e) {
                    var t = n.props
                      , a = t.dispatch
                      , r = t.location.pathname;
                    a(Object(R.b)({
                        actorName: e,
                        componentType: y.ANALYTICS_COMPONENTS.castListComponent
                    })),
                    a(Object(O.e)(r))
                }
                ,
                n.meta = n.getMeta(),
                n
            }
            return g()(t, e),
            h()(t, [{
                key: "getMeta",
                value: function() {
                    var e = this.props.series
                      , t = e.posterarts
                      , n = void 0 === t ? [] : t
                      , a = e.thumbnails
                      , r = e.title
                      , i = e.description
                      , o = e.id
                      , s = Object(k.i)({
                        video: e,
                        absolute: !0
                    })
                      , l = Object(k.f)(e)
                      , c = Object(D.b)(n[0] || a[0])
                      , u = "utm_campaign=applink&utm_medium=mobile_web&utm_source=fbapplink&utm_content=" + o
                      , d = "contentType=series&contentId=" + o;
                    return {
                        title: Object(j.f)(r, "- Free TV Series | Tubi"),
                        link: [{
                            rel: "canonical",
                            href: s
                        }],
                        meta: [{
                            name: "keywords",
                            content: r + ", Free, Movies, TV shows, legal, streaming, HD, full length"
                        }, {
                            name: "description",
                            content: "Watch " + r + " Free Online. " + i + " | Full season and episodes - free online streaming fast high quality legal movies and TV television shows"
                        }, {
                            property: "og:title",
                            content: r
                        }, {
                            property: "og:image",
                            content: c
                        }, {
                            property: "og:url",
                            content: s
                        }, {
                            property: "og:type",
                            content: "tv_show"
                        }, {
                            property: "og:description",
                            content: i
                        }, {
                            property: "twitter:title",
                            content: r
                        }, {
                            property: "twitter:description",
                            content: i
                        }, {
                            property: "twitter:image",
                            content: c
                        }, {
                            property: "al:android:url",
                            content: "tubitv://media-details?" + d + "&" + u
                        }, {
                            property: "al:web:url",
                            content: s
                        }, {
                            property: "al:ios:url",
                            content: l
                        }]
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.series
                      , n = e.isMobile
                      , a = e.isKidsModeEnabled
                      , r = e.latestEpisodeInfo
                      , i = e.history
                      , o = e.trackingURI
                      , s = e.isInMobileWhitelist
                      , l = e.dispatch
                      , c = t.id;
                    return A.a.createElement("div", {
                        key: c
                    }, A.a.createElement(S.a, this.meta), A.a.createElement(ne, {
                        series: t,
                        dispatch: l,
                        latestEpisodeInfo: r,
                        history: i,
                        isMobile: n,
                        handleCastClick: this.handleCastClick,
                        trackingURI: o,
                        mobilePlaybackEnabled: s,
                        isKidsModeEnabled: a
                    }), A.a.createElement(x.default, {
                        contentId: Object(N.a)(c)
                    }))
                }
            }]),
            t
        }(_.Component),
        i.propTypes = {
            dispatch: C.a.func.isRequired,
            series: C.a.object.isRequired,
            latestEpisodeInfo: C.a.object,
            history: C.a.object,
            isMobile: C.a.bool,
            trackingURI: C.a.string.isRequired,
            isInMobileWhitelist: C.a.bool.isRequired
        },
        o);
        var re = Object(T.b)((function(e, t) {
            var n = e.video
              , a = e.history
              , r = e.ui
              , i = e.tracking
              , o = n.byId
              , s = "0" + t.params.id
              , l = o[s] || {}
              , c = r.isMobile
              , u = r.userAgent
              , d = r.isKidsModeEnabled
              , p = c && Object(L.c)(u)
              , m = a.contentIdMap[s] || {};
            return {
                isInMobileWhitelist: p,
                series: l,
                latestEpisodeInfo: Object(w.a)(e, s),
                history: m,
                isMobile: c,
                trackingURI: i.trackingURI,
                isKidsModeEnabled: d
            }
        }
        ))(ae);
        re.fetchData = function(e) {
            var t = e.dispatch
              , n = e.params.id;
            return t(Object(M.e)(n, !0)).catch((function(e) {
                var t = Object(I.b)(e.errType);
                return P.a[t]({
                    error: e,
                    contentId: n
                }, "error when loading data for Series container"),
                l.a.reject(e)
            }
            ))
        }
        ,
        re.reserveContainerContext = !0,
        re.hasDynamicMeta = !0;
        t.default = re
    }
}, 0, [26]]);