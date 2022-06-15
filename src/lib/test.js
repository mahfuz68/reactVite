// const numbers = [1, 2, 4];
// const a = [...numbers];
// numbers.push(123);
// const newNumbers = [...numbers, 33, 13, 53];
// console.log(newNumbers);
// console.log(a);

// function tick() {
//   console.log(new Date());
// }
// setInterval(tick, 1000);

(function (e) {
    function t(t) {
        for (
            var r, o, s = t[0], c = t[1], u = t[2], d = 0, l = [];
            d < s.length;
            d++
        ) {
            (o = s[d]),
            Object.prototype.hasOwnProperty.call(i, o) && i[o] && l.push(i[o][0]),
            (i[o] = 0);
        }
        for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
        p && p(t);
        while (l.length) l.shift()();
        return a.push.apply(a, u || []), n();
    }
    function n() {
        for (var e, t = 0; t < a.length; t++) {
            for (var n = a[t], r = !0, o = 1; o < n.length; o++) {
                const s = n[o];
                i[s] !== 0 && (r = !1);
            }
            r && (a.splice(t--, 1), (e = c((c.s = n[0]))));
        }
        return e;
    }
    const r = {};
    const o = { app: 0 };
    var i = { app: 0 };
    var a = [];
    function s(e) {
        return `${c.p}js/${{ disk: 'disk', policy: 'policy' }[e] || e}.${
            { disk: '66fe607a', policy: '281b4378' }[e]
        }.js`;
    }
    function c(t) {
        if (r[t]) return r[t].exports;
        const n = (r[t] = { i: t, l: !1, exports: {} });
        return e[t].call(n.exports, n, n.exports, c), (n.l = !0), n.exports;
    }
    (c.e = function (e) {
        const t = [];
        const n = { disk: 1, policy: 1 };
        o[e]
            ? t.push(o[e])
            : o[e] !== 0
        && n[e]
        && t.push(
            (o[e] = new Promise((t, n) => {
                for (
                    var r = `css/${{ disk: 'disk', policy: 'policy' }[e] || e}.${
                            { disk: 'a70725b6', policy: 'b151671f' }[e]
                        }.css`,
                        i = c.p + r,
                        a = document.getElementsByTagName('link'),
                        s = 0;
                    s < a.length;
                    s++
                ) {
                    var u = a[s];
                    var d = u.getAttribute('data-href') || u.getAttribute('href');
                    if (u.rel === 'stylesheet' && (d === r || d === i)) return t();
                }
                const l = document.getElementsByTagName('style');
                for (s = 0; s < l.length; s++) {
                    (u = l[s]), (d = u.getAttribute('data-href'));
                    if (d === r || d === i) return t();
                }
                const p = document.createElement('link');
                (p.rel = 'stylesheet'),
                (p.type = 'text/css'),
                (p.onload = t),
                (p.onerror = function (t) {
                    const r = (t && t.target && t.target.src) || i;
                    const a = new Error(`Loading CSS chunk ${e} failed.\n(${r})`);
                    (a.request = r), delete o[e], p.parentNode.removeChild(p), n(a);
                }),
                (p.href = i);
                const h = document.getElementsByTagName('head')[0];
                h.appendChild(p);
            }).then(() => {
                o[e] = 0;
            }))
        );
        let r = i[e];
        if (r !== 0) {
            if (r) t.push(r[2]);
            else {
                const a = new Promise((t, n) => {
                    r = i[e] = [t, n];
                });
                t.push((r[2] = a));
                let u;
                const d = document.createElement('script');
                (d.charset = 'utf-8'),
                (d.timeout = 120),
                c.nc && d.setAttribute('nonce', c.nc),
                (d.src = s(e));
                const l = new Error();
                u = function (t) {
                    (d.onerror = d.onload = null), clearTimeout(p);
                    const n = i[e];
                    if (n !== 0) {
                        if (n) {
                            const r = t && (t.type === 'load' ? 'missing' : t.type);
                            const o = t && t.target && t.target.src;
                            (l.message = `Loading chunk ${e} failed.\n(${r}: ${o})`),
                            (l.name = 'ChunkLoadError'),
                            (l.type = r),
                            (l.request = o),
                            n[1](l);
                        }
                        i[e] = void 0;
                    }
                };
                var p = setTimeout(() => {
                    u({ type: 'timeout', target: d });
                }, 12e4);
                (d.onerror = d.onload = u), document.head.appendChild(d);
            }
        }
        return Promise.all(t);
    }),
    (c.m = e),
    (c.c = r),
    (c.d = function (e, t, n) {
        c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (c.r = function (e) {
        typeof Symbol !== 'undefined'
        && Symbol.toStringTag
        && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (c.t = function (e, t) {
        if ((1 & t && (e = c(e)), 8 & t)) return e;
        if (4 & t && typeof e === 'object' && e && e.__esModule) return e;
        const n = Object.create(null);
        if (
            (c.r(n),
            Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
            2 & t && typeof e !== 'string')
        ) { for (const r in e) c.d(n, r, ((t) => e[t]).bind(null, r)); }
        return n;
    }),
    (c.n = function (e) {
        const t = e && e.__esModule
            ? function () {
                return e.default;
            }
            : function () {
                return e;
            };
        return c.d(t, 'a', t), t;
    }),
    (c.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (c.p = 'https://assets.entertainvideo.com/convertor/'),
    (c.oe = function (e) {
        throw (console.error(e), e);
    });
    let u = (window.webpackJsonp = window.webpackJsonp || []);
    const d = u.push.bind(u);
    (u.push = t), (u = u.slice());
    for (let l = 0; l < u.length; l++) t(u[l]);
    var p = d;
    a.push(['ce55', 'chunk-vendors']), n();
}({
    '0e11': function (e, t, n) {},
    '70ad': function (e, t, n) {
        const r = n('0e11');
        const o = n.n(r);
        o.a;
    },
    ce55(e, t, n) {
        n.r(t);
        const r = n('2b0e');
        const o = function () {
            const e = this;
            const t = e.$createElement;
            const n = e._self._c || t;
            return n('div', { attrs: { id: 'app' } }, [n('router-view')], 1);
        };
        const i = [];
        const a = (n('70ad'), n('2877'));
        const s = {};
        const c = Object(a.a)(s, o, i, !1, null, null, null);
        c.options.__file = 'App.vue';
        const u = c.exports;
        const d = n('8c4f');
        const l = n('2f62');
        function p(e, t) {
            return m(e) || f(e, t) || h();
        }
        function h() {
            throw new TypeError(
                'Invalid attempt to destructure non-iterable instance'
            );
        }
        function f(e, t) {
            const n = [];
            let r = !0;
            let o = !1;
            let i = void 0;
            try {
                for (
                    var a, s = e[Symbol.iterator]();
                    !(r = (a = s.next()).done);
                    r = !0
                ) if ((n.push(a.value), t && n.length === t)) break;
            } catch (c) {
                (o = !0), (i = c);
            } finally {
                try {
                    r || s.return == null || s.return();
                } finally {
                    if (o) throw i;
                }
            }
            return n;
        }
        function m(e) {
            if (Array.isArray(e)) return e;
        }
        const g = 'https://diskuploader.entertainvideo.com';
        const v = 'https://api.spdownload.com';
        const y = navigator.appVersion.match(/Chrome\/((?:\d+\.?)+)/);
        const b = y && y[1];
        const w = b && b.split('.');
        const k = b && parseInt(w[0]) >= 95;
        function S(e) {
            const t = new URL(e);
            return t.pathname.endsWith('.m3u8') || t.pathname.endsWith('.mpd');
        }
        function E() {
            return [{ id: '20000Ic9lz', source: '' }];
        }
        function _() {
            const e = navigator.userAgent;
            const t = e.indexOf('Android') > -1 || e.indexOf('Adr') > -1;
            return t ? 'Android' : 'IOS';
        }
        const O = {
            namespaced: !0,
            state: {
                video: {},
                errorMsg: '',
                isBuggyChrome: k,
                gifMap: E(),
                newsList: {
                    offset: 0,
                    loading: !1,
                    feeds: [],
                    signs: new Set()
                },
                isPC: !(
                    /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
          || window.localStorage.getItem('usingMobile')
                ),
                isIOS: _() === 'IOS'
            },
            mutations: {
                SET_VIDEO(e, t) {
                    e.video = t || {};
                },
                SET_VIDEO_ERROR(e, t) {
                    e.errorMsg = t.message;
                },
                SET_NEWSLIST_LOADING(e, t) {
                    e.newsList.loading = t;
                },
                SET_NEWSLIST_FEEDS(e, t) {
                    const n = ['7992015368', '8649904187', '9468748560'];
                    const r = (t.result || []).reduce(
                        (t, n) => (
                            e.newsList.signs.has(n.sign)
                || (e.newsList.signs.add(n.sign), t.push(n)),
                            t
                        ),
                        []
                    );
                    const o = r.reduce(
                        (t, r, o) => {
                            const i = p(t, 2);
                            const a = i[0];
                            let s = i[1];
                            return (
                                (r.headimg = r.s3_headimg
                                    ? 'https://assets-1.mdisk.me'.concat(r.s3_headimg)
                                    : r.headimg),
                                (r.publish = new Date(1e3 * r.utc_publish).toLocaleString(
                                    'en',
                                    {
                                        month: 'long',
                                        day: 'numeric',
                                        year: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    }
                                )),
                                (r.expanded = !1),
                                (r.ad = !1),
                                a.push(r),
                                (o + 1 + e.newsList.offset) % 3 === 0
                  && (a.push({ ad: !0, displayed: !1, adId: n[s] }),
                  (s = (s + 1) % n.length)),
                                [a, s]
                            );
                        },
                        [e.newsList.feeds, 0]
                    );
                    const i = p(o, 2);
                    const a = i[0];
                    i[1];
                    (e.newsList.feeds = a), (e.newsList.offset += t.result_num);
                },
                SET_ISPC(e, t) {
                    e.isPC = Boolean(t);
                }
            },
            actions: {
                fetchVideo(e, t) {
                    const n = e.commit;
                    const r = (e.dispatch, e.state);
                    if (t) {
                        let o = ''.concat(g, '/v1/file/cdnurl?param=').concat(t);
                        return (
                            r.isIOS
                && (o = ''
                    .concat(g, '/v1/file/cdnurl?param=')
                    .concat(t, '&sys=ios')),
                            fetch(o, { method: 'GET' })
                                .then((e) => (e.status >= 500
                                    ? {}
                                    : e.status >= 400
                                        ? e.text().then((e) => {
                                            throw new Error(e);
                                        })
                                        : e.json()))
                                .then((e) => {
                                    const r = e.source;
                                    const o = e.download;
                                    let i = o;
                                    i || (i = r);
                                    const a = i.match(/https?:\/\/([^/]*)/);
                                    const s = a[1];
                                    const c = S(i);
                                    const u = S(o);
                                    let d = e.display_name || '';
                                    d = d.length <= 4
                                        ? `${d.substring(0, Math.floor(d.length / 2))}***`
                                        : `${d.substring(0, 2)}***${d.substring(
                                            d.length - 2,
                                            d.length
                                        )}`;
                                    const l = e.poster || '';
                                    let p = e.filename || 'untitled';
                                    if (/k[_.]?g[_.]?f\s*(chapter)?\s*2?/i.test(p)) throw new Error('content blocked by copyright issue');
                                    (p = p.replace(/#/g, '')),
                                    (p = p.replace(
                                        /ass|anal|adult|blow|boob|booty|bhosadi|bdsm|cock|c0ck|chinal|chod|choochii|choot|chudai|chutiya|condom|cum|cunt|cumshots|cowgirl|chutmarike|dick|dildo|doggy\s*st(i|y)le|desi|doodh|deepthroat|ejackulate|ejaculate|f\*ck|faggot|fcuk|fisting|fuck|fudi|fingering|g\s*spot|ga*nd|genitalia|ghanta|gissum|gangbang|gfpd|haramzad|hijde|horny|hand\s*job|hot|kameenay|kanjri|katua|khota|khotey|kutiya|kutt(a|e|i)|klpd|lannd|lauda|lavda|loda|lodu|love\s*making|lund|lingerie|maachod|maachudi|madarchod|make(ing)?\s*love|mardana\s*kamzori|masturbate|mumme|muttha|morning\s*wood|naked|nipple|nude|nudity|orgasm|orgi|orgy|oral|pen+is|pennis|private\s*part|prostitut?|pussy|panties|penetration|pubic\s*hair|quickie|quiky|r\*pe|ra+ndi?|randva|rape|raping|reverse\s*cowgirl|\$ex|saala|se?x|strip|slut|seduce|threesome|tits|teen|ul?l(u|oo)|vagina|virginity|virgin|vibrator|whore|18+|badwap|beeg|bfxxx|brazzer|erotic|sax|sxe|tube|vidmate|xvideos?|xxx|xnxx?|xvedio/gi,
                                        '***'
                                    ));
                                    const h = {
                                        id: e.rid || t,
                                        type: 'raw_mp4',
                                        owner: d,
                                        name: p,
                                        src: i,
                                        downloadUrl: o,
                                        streamingUrl: r,
                                        playDomain: s,
                                        fromUser: e.from || '',
                                        userSrc: e.source_type || '',
                                        duration: e.duration || 0,
                                        poster: l,
                                        useOnlinePlayer: c,
                                        useOnlineDownloader: u,
                                        size: e.size || 0,
                                        width: e.width || 0,
                                        height: e.height || 0,
                                        publishTime: e.ts || 0
                                    };
                                    return n('SET_VIDEO', h), !0;
                                })
                                .catch((e) => (n('SET_VIDEO_ERROR', e), !1))
                        );
                    }
                },
                report(e, t) {
                    e.commit;
                    return fetch(''.concat(g, '/v1/report'), {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(t)
                    });
                },
                fetchSpDpwnloadLink(e) {
                    e.commit;
                    return fetch(''.concat(v, '/v1/version'), {
                        method: 'GET',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        }
                    });
                },
                fetchNewsList(e, t) {
                    const n = e.commit;
                    const r = e.state;
                    if (!r.newsList.loading) {
                        return (
                            n('SET_NEWSLIST_LOADING', !0),
                            fetch(
                                'https://feed.mdisk.me/api/get_list/all?offset='
                                    .concat(r.newsList.offset, '&size=')
                                    .concat(t || 10)
                            )
                                .then((e) => e.json())
                                .then((e) => {
                                    if (e.errno !== 0) throw new Error(e.msg);
                                    n('SET_NEWSLIST_FEEDS', e);
                                })
                                .catch(() => {})
                                .then(() => {
                                    n('SET_NEWSLIST_LOADING', !1);
                                })
                        );
                    }
                },
                updateisPC(e, t) {
                    const n = e.commit;
                    n('SET_ISPC', t);
                }
            }
        };
        r.a.use(l.a);
        const T = new l.a.Store({
            state: {},
            mutations: {},
            actions: {},
            modules: { disk: O }
        });
        const x = function () {
            return n.e('disk').then(n.bind(null, '0564'));
        };
        const j = function () {
            return n.e('disk').then(n.bind(null, '3e1a'));
        };
        const L = {
            path: '/',
            component: x,
            children: [
                {
                    path: 'tshare',
                    name: 'disk-home',
                    component: j,
                    meta: { title: 'Share' }
                },
                {
                    path: ':wh/:id',
                    name: 'short-link',
                    component: j,
                    meta: { title: 'Share' }
                }
            ],
            beforeEnter(e, t, n) {
                const r = e.params.id || e.query.id;
                if (!r) return n();
                T.dispatch('disk/fetchVideo', r).then((e) => {
                    if (e) {
                        const t = document.createElement('script');
                        (t.type = 'text/javascript'),
                        (t.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7075454219895485'),
                        t.setAttribute('crossorigin', 'anonymous');
                        const r = document.getElementsByTagName('head')[0];
                        r.appendChild(t), (t.onload = n), (t.onerror = n);
                    } else n();
                });
            }
        };
        const I = function () {
            return n.e('policy').then(n.bind(null, '45aa'));
        };
        const A = { path: '/policy', component: I };
        r.a.use(d.a);
        const P = new d.a({ mode: 'history', base: '/convertor/', routes: [L, A] });
        P.beforeEach((e, t, n) => {
            (document.title = e.meta.title), n();
        });
        const C = P;
        const N = n('a584');
        const D = n('31bd');
        const M = n('4eb5');
        const z = n.n(M);
        (r.a.config.productionTip = !1),
        r.a.use(N.a, { config: { id: 'G-WZYQT067C8' } }, C),
        r.a.use(z.a),
        Object(D.sync)(T, C),
        new r.a({
            router: C,
            store: T,
            render(e) {
                return e(u);
            }
        }).$mount('#app');
    }
}));
// # sourceMappingURL=app.56ac0da5.js.map
