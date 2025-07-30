(function () {
  const c = document.createElement('link').relList;
  if (c && c.supports && c.supports('modulepreload')) return;
  for (const p of document.querySelectorAll('link[rel="modulepreload"]')) o(p);
  new MutationObserver((p) => {
    for (const h of p)
      if (h.type === 'childList')
        for (const x of h.addedNodes) x.tagName === 'LINK' && x.rel === 'modulepreload' && o(x);
  }).observe(document, { childList: !0, subtree: !0 });
  function f(p) {
    const h = {};
    return (
      p.integrity && (h.integrity = p.integrity),
      p.referrerPolicy && (h.referrerPolicy = p.referrerPolicy),
      p.crossOrigin === 'use-credentials' ? (h.credentials = 'include')
      : p.crossOrigin === 'anonymous' ? (h.credentials = 'omit')
      : (h.credentials = 'same-origin'),
      h
    );
  }
  function o(p) {
    if (p.ep) return;
    p.ep = !0;
    const h = f(p);
    fetch(p.href, h);
  }
})();
function ig(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, 'default') ? r.default : r;
}
var Ns = { exports: {} },
  Hn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dd;
function lb() {
  if (Dd) return Hn;
  Dd = 1;
  var r = Symbol.for('react.transitional.element'),
    c = Symbol.for('react.fragment');
  function f(o, p, h) {
    var x = null;
    if ((h !== void 0 && (x = '' + h), p.key !== void 0 && (x = '' + p.key), 'key' in p)) {
      h = {};
      for (var _ in p) _ !== 'key' && (h[_] = p[_]);
    } else h = p;
    return ((p = h.ref), { $$typeof: r, type: o, key: x, ref: p !== void 0 ? p : null, props: h });
  }
  return ((Hn.Fragment = c), (Hn.jsx = f), (Hn.jsxs = f), Hn);
}
var zd;
function ab() {
  return (zd || ((zd = 1), (Ns.exports = lb())), Ns.exports);
}
var s = ab(),
  ws = { exports: {} },
  be = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Md;
function nb() {
  if (Md) return be;
  Md = 1;
  var r = Symbol.for('react.transitional.element'),
    c = Symbol.for('react.portal'),
    f = Symbol.for('react.fragment'),
    o = Symbol.for('react.strict_mode'),
    p = Symbol.for('react.profiler'),
    h = Symbol.for('react.consumer'),
    x = Symbol.for('react.context'),
    _ = Symbol.for('react.forward_ref'),
    y = Symbol.for('react.suspense'),
    g = Symbol.for('react.memo'),
    A = Symbol.for('react.lazy'),
    b = Symbol.iterator;
  function j(v) {
    return v === null || typeof v != 'object' ?
        null
      : ((v = (b && v[b]) || v['@@iterator']), typeof v == 'function' ? v : null);
  }
  var B = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    E = Object.assign,
    w = {};
  function C(v, q, I) {
    ((this.props = v), (this.context = q), (this.refs = w), (this.updater = I || B));
  }
  ((C.prototype.isReactComponent = {}),
    (C.prototype.setState = function (v, q) {
      if (typeof v != 'object' && typeof v != 'function' && v != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, v, q, 'setState');
    }),
    (C.prototype.forceUpdate = function (v) {
      this.updater.enqueueForceUpdate(this, v, 'forceUpdate');
    }));
  function N() {}
  N.prototype = C.prototype;
  function S(v, q, I) {
    ((this.props = v), (this.context = q), (this.refs = w), (this.updater = I || B));
  }
  var R = (S.prototype = new N());
  ((R.constructor = S), E(R, C.prototype), (R.isPureReactComponent = !0));
  var V = Array.isArray,
    K = { H: null, A: null, T: null, S: null, V: null },
    ie = Object.prototype.hasOwnProperty;
  function re(v, q, I, $, le, ue) {
    return (
      (I = ue.ref),
      { $$typeof: r, type: v, key: q, ref: I !== void 0 ? I : null, props: ue }
    );
  }
  function he(v, q) {
    return re(v.type, q, void 0, void 0, void 0, v.props);
  }
  function oe(v) {
    return typeof v == 'object' && v !== null && v.$$typeof === r;
  }
  function ce(v) {
    var q = { '=': '=0', ':': '=2' };
    return (
      '$' +
      v.replace(/[=:]/g, function (I) {
        return q[I];
      })
    );
  }
  var P = /\/+/g;
  function ne(v, q) {
    return typeof v == 'object' && v !== null && v.key != null ? ce('' + v.key) : q.toString(36);
  }
  function W() {}
  function M(v) {
    switch (v.status) {
      case 'fulfilled':
        return v.value;
      case 'rejected':
        throw v.reason;
      default:
        switch (
          (typeof v.status == 'string' ?
            v.then(W, W)
          : ((v.status = 'pending'),
            v.then(
              function (q) {
                v.status === 'pending' && ((v.status = 'fulfilled'), (v.value = q));
              },
              function (q) {
                v.status === 'pending' && ((v.status = 'rejected'), (v.reason = q));
              }
            )),
          v.status)
        ) {
          case 'fulfilled':
            return v.value;
          case 'rejected':
            throw v.reason;
        }
    }
    throw v;
  }
  function ee(v, q, I, $, le) {
    var ue = typeof v;
    (ue === 'undefined' || ue === 'boolean') && (v = null);
    var J = !1;
    if (v === null) J = !0;
    else
      switch (ue) {
        case 'bigint':
        case 'string':
        case 'number':
          J = !0;
          break;
        case 'object':
          switch (v.$$typeof) {
            case r:
            case c:
              J = !0;
              break;
            case A:
              return ((J = v._init), ee(J(v._payload), q, I, $, le));
          }
      }
    if (J)
      return (
        (le = le(v)),
        (J = $ === '' ? '.' + ne(v, 0) : $),
        V(le) ?
          ((I = ''),
          J != null && (I = J.replace(P, '$&/') + '/'),
          ee(le, q, I, '', function (nt) {
            return nt;
          }))
        : le != null &&
          (oe(le) &&
            (le = he(
              le,
              I +
                (le.key == null || (v && v.key === le.key) ?
                  ''
                : ('' + le.key).replace(P, '$&/') + '/') +
                J
            )),
          q.push(le)),
        1
      );
    J = 0;
    var ye = $ === '' ? '.' : $ + ':';
    if (V(v))
      for (var pe = 0; pe < v.length; pe++)
        (($ = v[pe]), (ue = ye + ne($, pe)), (J += ee($, q, I, ue, le)));
    else if (((pe = j(v)), typeof pe == 'function'))
      for (v = pe.call(v), pe = 0; !($ = v.next()).done; )
        (($ = $.value), (ue = ye + ne($, pe++)), (J += ee($, q, I, ue, le)));
    else if (ue === 'object') {
      if (typeof v.then == 'function') return ee(M(v), q, I, $, le);
      throw (
        (q = String(v)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (q === '[object Object]' ? 'object with keys {' + Object.keys(v).join(', ') + '}' : q) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    }
    return J;
  }
  function O(v, q, I) {
    if (v == null) return v;
    var $ = [],
      le = 0;
    return (
      ee(v, $, '', '', function (ue) {
        return q.call(I, ue, le++);
      }),
      $
    );
  }
  function F(v) {
    if (v._status === -1) {
      var q = v._result;
      ((q = q()),
        q.then(
          function (I) {
            (v._status === 0 || v._status === -1) && ((v._status = 1), (v._result = I));
          },
          function (I) {
            (v._status === 0 || v._status === -1) && ((v._status = 2), (v._result = I));
          }
        ),
        v._status === -1 && ((v._status = 0), (v._result = q)));
    }
    if (v._status === 1) return v._result.default;
    throw v._result;
  }
  var Q =
    typeof reportError == 'function' ? reportError : (
      function (v) {
        if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
          var q = new window.ErrorEvent('error', {
            bubbles: !0,
            cancelable: !0,
            message:
              typeof v == 'object' && v !== null && typeof v.message == 'string' ?
                String(v.message)
              : String(v),
            error: v,
          });
          if (!window.dispatchEvent(q)) return;
        } else if (typeof process == 'object' && typeof process.emit == 'function') {
          process.emit('uncaughtException', v);
          return;
        }
        console.error(v);
      }
    );
  function te() {}
  return (
    (be.Children = {
      map: O,
      forEach: function (v, q, I) {
        O(
          v,
          function () {
            q.apply(this, arguments);
          },
          I
        );
      },
      count: function (v) {
        var q = 0;
        return (
          O(v, function () {
            q++;
          }),
          q
        );
      },
      toArray: function (v) {
        return (
          O(v, function (q) {
            return q;
          }) || []
        );
      },
      only: function (v) {
        if (!oe(v))
          throw Error('React.Children.only expected to receive a single React element child.');
        return v;
      },
    }),
    (be.Component = C),
    (be.Fragment = f),
    (be.Profiler = p),
    (be.PureComponent = S),
    (be.StrictMode = o),
    (be.Suspense = y),
    (be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K),
    (be.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (v) {
        return K.H.useMemoCache(v);
      },
    }),
    (be.cache = function (v) {
      return function () {
        return v.apply(null, arguments);
      };
    }),
    (be.cloneElement = function (v, q, I) {
      if (v == null) throw Error('The argument must be a React element, but you passed ' + v + '.');
      var $ = E({}, v.props),
        le = v.key,
        ue = void 0;
      if (q != null)
        for (J in (q.ref !== void 0 && (ue = void 0), q.key !== void 0 && (le = '' + q.key), q))
          !ie.call(q, J) ||
            J === 'key' ||
            J === '__self' ||
            J === '__source' ||
            (J === 'ref' && q.ref === void 0) ||
            ($[J] = q[J]);
      var J = arguments.length - 2;
      if (J === 1) $.children = I;
      else if (1 < J) {
        for (var ye = Array(J), pe = 0; pe < J; pe++) ye[pe] = arguments[pe + 2];
        $.children = ye;
      }
      return re(v.type, le, void 0, void 0, ue, $);
    }),
    (be.createContext = function (v) {
      return (
        (v = {
          $$typeof: x,
          _currentValue: v,
          _currentValue2: v,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (v.Provider = v),
        (v.Consumer = { $$typeof: h, _context: v }),
        v
      );
    }),
    (be.createElement = function (v, q, I) {
      var $,
        le = {},
        ue = null;
      if (q != null)
        for ($ in (q.key !== void 0 && (ue = '' + q.key), q))
          ie.call(q, $) && $ !== 'key' && $ !== '__self' && $ !== '__source' && (le[$] = q[$]);
      var J = arguments.length - 2;
      if (J === 1) le.children = I;
      else if (1 < J) {
        for (var ye = Array(J), pe = 0; pe < J; pe++) ye[pe] = arguments[pe + 2];
        le.children = ye;
      }
      if (v && v.defaultProps)
        for ($ in ((J = v.defaultProps), J)) le[$] === void 0 && (le[$] = J[$]);
      return re(v, ue, void 0, void 0, null, le);
    }),
    (be.createRef = function () {
      return { current: null };
    }),
    (be.forwardRef = function (v) {
      return { $$typeof: _, render: v };
    }),
    (be.isValidElement = oe),
    (be.lazy = function (v) {
      return { $$typeof: A, _payload: { _status: -1, _result: v }, _init: F };
    }),
    (be.memo = function (v, q) {
      return { $$typeof: g, type: v, compare: q === void 0 ? null : q };
    }),
    (be.startTransition = function (v) {
      var q = K.T,
        I = {};
      K.T = I;
      try {
        var $ = v(),
          le = K.S;
        (le !== null && le(I, $),
          typeof $ == 'object' && $ !== null && typeof $.then == 'function' && $.then(te, Q));
      } catch (ue) {
        Q(ue);
      } finally {
        K.T = q;
      }
    }),
    (be.unstable_useCacheRefresh = function () {
      return K.H.useCacheRefresh();
    }),
    (be.use = function (v) {
      return K.H.use(v);
    }),
    (be.useActionState = function (v, q, I) {
      return K.H.useActionState(v, q, I);
    }),
    (be.useCallback = function (v, q) {
      return K.H.useCallback(v, q);
    }),
    (be.useContext = function (v) {
      return K.H.useContext(v);
    }),
    (be.useDebugValue = function () {}),
    (be.useDeferredValue = function (v, q) {
      return K.H.useDeferredValue(v, q);
    }),
    (be.useEffect = function (v, q, I) {
      var $ = K.H;
      if (typeof I == 'function')
        throw Error('useEffect CRUD overload is not enabled in this build of React.');
      return $.useEffect(v, q);
    }),
    (be.useId = function () {
      return K.H.useId();
    }),
    (be.useImperativeHandle = function (v, q, I) {
      return K.H.useImperativeHandle(v, q, I);
    }),
    (be.useInsertionEffect = function (v, q) {
      return K.H.useInsertionEffect(v, q);
    }),
    (be.useLayoutEffect = function (v, q) {
      return K.H.useLayoutEffect(v, q);
    }),
    (be.useMemo = function (v, q) {
      return K.H.useMemo(v, q);
    }),
    (be.useOptimistic = function (v, q) {
      return K.H.useOptimistic(v, q);
    }),
    (be.useReducer = function (v, q, I) {
      return K.H.useReducer(v, q, I);
    }),
    (be.useRef = function (v) {
      return K.H.useRef(v);
    }),
    (be.useState = function (v) {
      return K.H.useState(v);
    }),
    (be.useSyncExternalStore = function (v, q, I) {
      return K.H.useSyncExternalStore(v, q, I);
    }),
    (be.useTransition = function () {
      return K.H.useTransition();
    }),
    (be.version = '19.1.0'),
    be
  );
}
var Ld;
function Ms() {
  return (Ld || ((Ld = 1), (ws.exports = nb())), ws.exports);
}
var H = Ms();
const Yn = ig(H);
var As = { exports: {} },
  qn = {},
  Ts = { exports: {} },
  _s = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ud;
function ib() {
  return (
    Ud ||
      ((Ud = 1),
      (function (r) {
        function c(O, F) {
          var Q = O.length;
          O.push(F);
          e: for (; 0 < Q; ) {
            var te = (Q - 1) >>> 1,
              v = O[te];
            if (0 < p(v, F)) ((O[te] = F), (O[Q] = v), (Q = te));
            else break e;
          }
        }
        function f(O) {
          return O.length === 0 ? null : O[0];
        }
        function o(O) {
          if (O.length === 0) return null;
          var F = O[0],
            Q = O.pop();
          if (Q !== F) {
            O[0] = Q;
            e: for (var te = 0, v = O.length, q = v >>> 1; te < q; ) {
              var I = 2 * (te + 1) - 1,
                $ = O[I],
                le = I + 1,
                ue = O[le];
              if (0 > p($, Q))
                le < v && 0 > p(ue, $) ?
                  ((O[te] = ue), (O[le] = Q), (te = le))
                : ((O[te] = $), (O[I] = Q), (te = I));
              else if (le < v && 0 > p(ue, Q)) ((O[te] = ue), (O[le] = Q), (te = le));
              else break e;
            }
          }
          return F;
        }
        function p(O, F) {
          var Q = O.sortIndex - F.sortIndex;
          return Q !== 0 ? Q : O.id - F.id;
        }
        if (
          ((r.unstable_now = void 0),
          typeof performance == 'object' && typeof performance.now == 'function')
        ) {
          var h = performance;
          r.unstable_now = function () {
            return h.now();
          };
        } else {
          var x = Date,
            _ = x.now();
          r.unstable_now = function () {
            return x.now() - _;
          };
        }
        var y = [],
          g = [],
          A = 1,
          b = null,
          j = 3,
          B = !1,
          E = !1,
          w = !1,
          C = !1,
          N = typeof setTimeout == 'function' ? setTimeout : null,
          S = typeof clearTimeout == 'function' ? clearTimeout : null,
          R = typeof setImmediate < 'u' ? setImmediate : null;
        function V(O) {
          for (var F = f(g); F !== null; ) {
            if (F.callback === null) o(g);
            else if (F.startTime <= O) (o(g), (F.sortIndex = F.expirationTime), c(y, F));
            else break;
            F = f(g);
          }
        }
        function K(O) {
          if (((w = !1), V(O), !E))
            if (f(y) !== null) ((E = !0), ie || ((ie = !0), ne()));
            else {
              var F = f(g);
              F !== null && ee(K, F.startTime - O);
            }
        }
        var ie = !1,
          re = -1,
          he = 5,
          oe = -1;
        function ce() {
          return C ? !0 : !(r.unstable_now() - oe < he);
        }
        function P() {
          if (((C = !1), ie)) {
            var O = r.unstable_now();
            oe = O;
            var F = !0;
            try {
              e: {
                ((E = !1), w && ((w = !1), S(re), (re = -1)), (B = !0));
                var Q = j;
                try {
                  t: {
                    for (V(O), b = f(y); b !== null && !(b.expirationTime > O && ce()); ) {
                      var te = b.callback;
                      if (typeof te == 'function') {
                        ((b.callback = null), (j = b.priorityLevel));
                        var v = te(b.expirationTime <= O);
                        if (((O = r.unstable_now()), typeof v == 'function')) {
                          ((b.callback = v), V(O), (F = !0));
                          break t;
                        }
                        (b === f(y) && o(y), V(O));
                      } else o(y);
                      b = f(y);
                    }
                    if (b !== null) F = !0;
                    else {
                      var q = f(g);
                      (q !== null && ee(K, q.startTime - O), (F = !1));
                    }
                  }
                  break e;
                } finally {
                  ((b = null), (j = Q), (B = !1));
                }
                F = void 0;
              }
            } finally {
              F ? ne() : (ie = !1);
            }
          }
        }
        var ne;
        if (typeof R == 'function')
          ne = function () {
            R(P);
          };
        else if (typeof MessageChannel < 'u') {
          var W = new MessageChannel(),
            M = W.port2;
          ((W.port1.onmessage = P),
            (ne = function () {
              M.postMessage(null);
            }));
        } else
          ne = function () {
            N(P, 0);
          };
        function ee(O, F) {
          re = N(function () {
            O(r.unstable_now());
          }, F);
        }
        ((r.unstable_IdlePriority = 5),
          (r.unstable_ImmediatePriority = 1),
          (r.unstable_LowPriority = 4),
          (r.unstable_NormalPriority = 3),
          (r.unstable_Profiling = null),
          (r.unstable_UserBlockingPriority = 2),
          (r.unstable_cancelCallback = function (O) {
            O.callback = null;
          }),
          (r.unstable_forceFrameRate = function (O) {
            0 > O || 125 < O ?
              console.error(
                'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
              )
            : (he = 0 < O ? Math.floor(1e3 / O) : 5);
          }),
          (r.unstable_getCurrentPriorityLevel = function () {
            return j;
          }),
          (r.unstable_next = function (O) {
            switch (j) {
              case 1:
              case 2:
              case 3:
                var F = 3;
                break;
              default:
                F = j;
            }
            var Q = j;
            j = F;
            try {
              return O();
            } finally {
              j = Q;
            }
          }),
          (r.unstable_requestPaint = function () {
            C = !0;
          }),
          (r.unstable_runWithPriority = function (O, F) {
            switch (O) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                O = 3;
            }
            var Q = j;
            j = O;
            try {
              return F();
            } finally {
              j = Q;
            }
          }),
          (r.unstable_scheduleCallback = function (O, F, Q) {
            var te = r.unstable_now();
            switch (
              (typeof Q == 'object' && Q !== null ?
                ((Q = Q.delay), (Q = typeof Q == 'number' && 0 < Q ? te + Q : te))
              : (Q = te),
              O)
            ) {
              case 1:
                var v = -1;
                break;
              case 2:
                v = 250;
                break;
              case 5:
                v = 1073741823;
                break;
              case 4:
                v = 1e4;
                break;
              default:
                v = 5e3;
            }
            return (
              (v = Q + v),
              (O = {
                id: A++,
                callback: F,
                priorityLevel: O,
                startTime: Q,
                expirationTime: v,
                sortIndex: -1,
              }),
              Q > te ?
                ((O.sortIndex = Q),
                c(g, O),
                f(y) === null && O === f(g) && (w ? (S(re), (re = -1)) : (w = !0), ee(K, Q - te)))
              : ((O.sortIndex = v), c(y, O), E || B || ((E = !0), ie || ((ie = !0), ne()))),
              O
            );
          }),
          (r.unstable_shouldYield = ce),
          (r.unstable_wrapCallback = function (O) {
            var F = j;
            return function () {
              var Q = j;
              j = F;
              try {
                return O.apply(this, arguments);
              } finally {
                j = Q;
              }
            };
          }));
      })(_s)),
    _s
  );
}
var Bd;
function rb() {
  return (Bd || ((Bd = 1), (Ts.exports = ib())), Ts.exports);
}
var js = { exports: {} },
  at = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hd;
function ub() {
  if (Hd) return at;
  Hd = 1;
  var r = Ms();
  function c(y) {
    var g = 'https://react.dev/errors/' + y;
    if (1 < arguments.length) {
      g += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var A = 2; A < arguments.length; A++) g += '&args[]=' + encodeURIComponent(arguments[A]);
    }
    return (
      'Minified React error #' +
      y +
      '; visit ' +
      g +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function f() {}
  var o = {
      d: {
        f,
        r: function () {
          throw Error(c(522));
        },
        D: f,
        C: f,
        L: f,
        m: f,
        X: f,
        S: f,
        M: f,
      },
      p: 0,
      findDOMNode: null,
    },
    p = Symbol.for('react.portal');
  function h(y, g, A) {
    var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: p,
      key: b == null ? null : '' + b,
      children: y,
      containerInfo: g,
      implementation: A,
    };
  }
  var x = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function _(y, g) {
    if (y === 'font') return '';
    if (typeof g == 'string') return g === 'use-credentials' ? g : '';
  }
  return (
    (at.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (at.createPortal = function (y, g) {
      var A = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)) throw Error(c(299));
      return h(y, g, null, A);
    }),
    (at.flushSync = function (y) {
      var g = x.T,
        A = o.p;
      try {
        if (((x.T = null), (o.p = 2), y)) return y();
      } finally {
        ((x.T = g), (o.p = A), o.d.f());
      }
    }),
    (at.preconnect = function (y, g) {
      typeof y == 'string' &&
        (g ?
          ((g = g.crossOrigin),
          (g =
            typeof g == 'string' ?
              g === 'use-credentials' ?
                g
              : ''
            : void 0))
        : (g = null),
        o.d.C(y, g));
    }),
    (at.prefetchDNS = function (y) {
      typeof y == 'string' && o.d.D(y);
    }),
    (at.preinit = function (y, g) {
      if (typeof y == 'string' && g && typeof g.as == 'string') {
        var A = g.as,
          b = _(A, g.crossOrigin),
          j = typeof g.integrity == 'string' ? g.integrity : void 0,
          B = typeof g.fetchPriority == 'string' ? g.fetchPriority : void 0;
        A === 'style' ?
          o.d.S(y, typeof g.precedence == 'string' ? g.precedence : void 0, {
            crossOrigin: b,
            integrity: j,
            fetchPriority: B,
          })
        : A === 'script' &&
          o.d.X(y, {
            crossOrigin: b,
            integrity: j,
            fetchPriority: B,
            nonce: typeof g.nonce == 'string' ? g.nonce : void 0,
          });
      }
    }),
    (at.preinitModule = function (y, g) {
      if (typeof y == 'string')
        if (typeof g == 'object' && g !== null) {
          if (g.as == null || g.as === 'script') {
            var A = _(g.as, g.crossOrigin);
            o.d.M(y, {
              crossOrigin: A,
              integrity: typeof g.integrity == 'string' ? g.integrity : void 0,
              nonce: typeof g.nonce == 'string' ? g.nonce : void 0,
            });
          }
        } else g == null && o.d.M(y);
    }),
    (at.preload = function (y, g) {
      if (typeof y == 'string' && typeof g == 'object' && g !== null && typeof g.as == 'string') {
        var A = g.as,
          b = _(A, g.crossOrigin);
        o.d.L(y, A, {
          crossOrigin: b,
          integrity: typeof g.integrity == 'string' ? g.integrity : void 0,
          nonce: typeof g.nonce == 'string' ? g.nonce : void 0,
          type: typeof g.type == 'string' ? g.type : void 0,
          fetchPriority: typeof g.fetchPriority == 'string' ? g.fetchPriority : void 0,
          referrerPolicy: typeof g.referrerPolicy == 'string' ? g.referrerPolicy : void 0,
          imageSrcSet: typeof g.imageSrcSet == 'string' ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == 'string' ? g.imageSizes : void 0,
          media: typeof g.media == 'string' ? g.media : void 0,
        });
      }
    }),
    (at.preloadModule = function (y, g) {
      if (typeof y == 'string')
        if (g) {
          var A = _(g.as, g.crossOrigin);
          o.d.m(y, {
            as: typeof g.as == 'string' && g.as !== 'script' ? g.as : void 0,
            crossOrigin: A,
            integrity: typeof g.integrity == 'string' ? g.integrity : void 0,
          });
        } else o.d.m(y);
    }),
    (at.requestFormReset = function (y) {
      o.d.r(y);
    }),
    (at.unstable_batchedUpdates = function (y, g) {
      return y(g);
    }),
    (at.useFormState = function (y, g, A) {
      return x.H.useFormState(y, g, A);
    }),
    (at.useFormStatus = function () {
      return x.H.useHostTransitionStatus();
    }),
    (at.version = '19.1.0'),
    at
  );
}
var qd;
function sb() {
  if (qd) return js.exports;
  qd = 1;
  function r() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (c) {
        console.error(c);
      }
  }
  return (r(), (js.exports = ub()), js.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gd;
function ob() {
  if (Gd) return qn;
  Gd = 1;
  var r = rb(),
    c = Ms(),
    f = sb();
  function o(e) {
    var t = 'https://react.dev/errors/' + e;
    if (1 < arguments.length) {
      t += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++) t += '&args[]=' + encodeURIComponent(arguments[l]);
    }
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function p(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function h(e) {
    var t = e,
      l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (l = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function x(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function _(e) {
    if (h(e) !== e) throw Error(o(188));
  }
  function y(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = h(e)), t === null)) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var l = e, a = t; ; ) {
      var n = l.return;
      if (n === null) break;
      var i = n.alternate;
      if (i === null) {
        if (((a = n.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === i.child) {
        for (i = n.child; i; ) {
          if (i === l) return (_(n), e);
          if (i === a) return (_(n), t);
          i = i.sibling;
        }
        throw Error(o(188));
      }
      if (l.return !== a.return) ((l = n), (a = i));
      else {
        for (var u = !1, d = n.child; d; ) {
          if (d === l) {
            ((u = !0), (l = n), (a = i));
            break;
          }
          if (d === a) {
            ((u = !0), (a = n), (l = i));
            break;
          }
          d = d.sibling;
        }
        if (!u) {
          for (d = i.child; d; ) {
            if (d === l) {
              ((u = !0), (l = i), (a = n));
              break;
            }
            if (d === a) {
              ((u = !0), (a = i), (l = n));
              break;
            }
            d = d.sibling;
          }
          if (!u) throw Error(o(189));
        }
      }
      if (l.alternate !== a) throw Error(o(190));
    }
    if (l.tag !== 3) throw Error(o(188));
    return l.stateNode.current === l ? e : t;
  }
  function g(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = g(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var A = Object.assign,
    b = Symbol.for('react.element'),
    j = Symbol.for('react.transitional.element'),
    B = Symbol.for('react.portal'),
    E = Symbol.for('react.fragment'),
    w = Symbol.for('react.strict_mode'),
    C = Symbol.for('react.profiler'),
    N = Symbol.for('react.provider'),
    S = Symbol.for('react.consumer'),
    R = Symbol.for('react.context'),
    V = Symbol.for('react.forward_ref'),
    K = Symbol.for('react.suspense'),
    ie = Symbol.for('react.suspense_list'),
    re = Symbol.for('react.memo'),
    he = Symbol.for('react.lazy'),
    oe = Symbol.for('react.activity'),
    ce = Symbol.for('react.memo_cache_sentinel'),
    P = Symbol.iterator;
  function ne(e) {
    return e === null || typeof e != 'object' ?
        null
      : ((e = (P && e[P]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var W = Symbol.for('react.client.reference');
  function M(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.$$typeof === W ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case E:
        return 'Fragment';
      case C:
        return 'Profiler';
      case w:
        return 'StrictMode';
      case K:
        return 'Suspense';
      case ie:
        return 'SuspenseList';
      case oe:
        return 'Activity';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case B:
          return 'Portal';
        case R:
          return (e.displayName || 'Context') + '.Provider';
        case S:
          return (e._context.displayName || 'Context') + '.Consumer';
        case V:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case re:
          return ((t = e.displayName || null), t !== null ? t : M(e.type) || 'Memo');
        case he:
          ((t = e._payload), (e = e._init));
          try {
            return M(e(t));
          } catch {}
      }
    return null;
  }
  var ee = Array.isArray,
    O = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    F = f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Q = { pending: !1, data: null, method: null, action: null },
    te = [],
    v = -1;
  function q(e) {
    return { current: e };
  }
  function I(e) {
    0 > v || ((e.current = te[v]), (te[v] = null), v--);
  }
  function $(e, t) {
    (v++, (te[v] = e.current), (e.current = t));
  }
  var le = q(null),
    ue = q(null),
    J = q(null),
    ye = q(null);
  function pe(e, t) {
    switch (($(J, t), $(ue, e), $(le, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? ud(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI))) ((t = ud(t)), (e = sd(t, e)));
        else
          switch (e) {
            case 'svg':
              e = 1;
              break;
            case 'math':
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (I(le), $(le, e));
  }
  function nt() {
    (I(le), I(ue), I(J));
  }
  function Ha(e) {
    e.memoizedState !== null && $(ye, e);
    var t = le.current,
      l = sd(t, e.type);
    t !== l && ($(ue, e), $(le, l));
  }
  function Jl(e) {
    (ue.current === e && (I(le), I(ue)), ye.current === e && (I(ye), (zn._currentValue = Q)));
  }
  var qa = Object.prototype.hasOwnProperty,
    kl = r.unstable_scheduleCallback,
    Il = r.unstable_cancelCallback,
    cr = r.unstable_shouldYield,
    Zn = r.unstable_requestPaint,
    wt = r.unstable_now,
    me = r.unstable_getCurrentPriorityLevel,
    Se = r.unstable_ImmediatePriority,
    ze = r.unstable_UserBlockingPriority,
    Ve = r.unstable_NormalPriority,
    Ol = r.unstable_LowPriority,
    Xn = r.unstable_IdlePriority,
    fr = r.log,
    Hg = r.unstable_setDisableYieldValue,
    Ga = null,
    dt = null;
  function il(e) {
    if ((typeof fr == 'function' && Hg(e), dt && typeof dt.setStrictMode == 'function'))
      try {
        dt.setStrictMode(Ga, e);
      } catch {}
  }
  var gt = Math.clz32 ? Math.clz32 : Yg,
    qg = Math.log,
    Gg = Math.LN2;
  function Yg(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((qg(e) / Gg) | 0)) | 0);
  }
  var Vn = 256,
    Qn = 4194304;
  function Rl(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Fn(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      i = e.suspendedLanes,
      u = e.pingedLanes;
    e = e.warmLanes;
    var d = a & 134217727;
    return (
      d !== 0 ?
        ((a = d & ~i),
        a !== 0 ?
          (n = Rl(a))
        : ((u &= d), u !== 0 ? (n = Rl(u)) : l || ((l = d & ~e), l !== 0 && (n = Rl(l)))))
      : ((d = a & ~i),
        d !== 0 ? (n = Rl(d))
        : u !== 0 ? (n = Rl(u))
        : l || ((l = a & ~e), l !== 0 && (n = Rl(l)))),
      n === 0 ? 0
      : (
        t !== 0 &&
        t !== n &&
        (t & i) === 0 &&
        ((i = n & -n), (l = t & -t), i >= l || (i === 32 && (l & 4194048) !== 0))
      ) ?
        t
      : n
    );
  }
  function Ya(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Zg(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ys() {
    var e = Vn;
    return ((Vn <<= 1), (Vn & 4194048) === 0 && (Vn = 256), e);
  }
  function Zs() {
    var e = Qn;
    return ((Qn <<= 1), (Qn & 62914560) === 0 && (Qn = 4194304), e);
  }
  function dr(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function Za(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Xg(e, t, l, a, n, i) {
    var u = e.pendingLanes;
    ((e.pendingLanes = l),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= l),
      (e.entangledLanes &= l),
      (e.errorRecoveryDisabledLanes &= l),
      (e.shellSuspendCounter = 0));
    var d = e.entanglements,
      m = e.expirationTimes,
      z = e.hiddenUpdates;
    for (l = u & ~l; 0 < l; ) {
      var G = 31 - gt(l),
        X = 1 << G;
      ((d[G] = 0), (m[G] = -1));
      var L = z[G];
      if (L !== null)
        for (z[G] = null, G = 0; G < L.length; G++) {
          var U = L[G];
          U !== null && (U.lane &= -536870913);
        }
      l &= ~X;
    }
    (a !== 0 && Xs(e, a, 0),
      i !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(u & ~t)));
  }
  function Xs(e, t, l) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var a = 31 - gt(t);
    ((e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (l & 4194090)));
  }
  function Vs(e, t) {
    var l = (e.entangledLanes |= t);
    for (e = e.entanglements; l; ) {
      var a = 31 - gt(l),
        n = 1 << a;
      ((n & t) | (e[a] & t) && (e[a] |= t), (l &= ~n));
    }
  }
  function gr(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function hr(e) {
    return (
      (e &= -e),
      2 < e ?
        8 < e ?
          (e & 134217727) !== 0 ?
            32
          : 268435456
        : 8
      : 2
    );
  }
  function Qs() {
    var e = F.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : _d(e.type));
  }
  function Vg(e, t) {
    var l = F.p;
    try {
      return ((F.p = e), t());
    } finally {
      F.p = l;
    }
  }
  var rl = Math.random().toString(36).slice(2),
    tt = '__reactFiber$' + rl,
    rt = '__reactProps$' + rl,
    Wl = '__reactContainer$' + rl,
    pr = '__reactEvents$' + rl,
    Qg = '__reactListeners$' + rl,
    Fg = '__reactHandles$' + rl,
    Fs = '__reactResources$' + rl,
    Xa = '__reactMarker$' + rl;
  function br(e) {
    (delete e[tt], delete e[rt], delete e[pr], delete e[Qg], delete e[Fg]);
  }
  function Pl(e) {
    var t = e[tt];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if ((t = l[Wl] || l[tt])) {
        if (((l = t.alternate), t.child !== null || (l !== null && l.child !== null)))
          for (e = dd(e); e !== null; ) {
            if ((l = e[tt])) return l;
            e = dd(e);
          }
        return t;
      }
      ((e = l), (l = e.parentNode));
    }
    return null;
  }
  function ea(e) {
    if ((e = e[tt] || e[Wl])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function Va(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function ta(e) {
    var t = e[Fs];
    return (t || (t = e[Fs] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
  }
  function Ke(e) {
    e[Xa] = !0;
  }
  var Ks = new Set(),
    $s = {};
  function Dl(e, t) {
    (la(e, t), la(e + 'Capture', t));
  }
  function la(e, t) {
    for ($s[e] = t, e = 0; e < t.length; e++) Ks.add(t[e]);
  }
  var Kg = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    Js = {},
    Is = {};
  function $g(e) {
    return (
      qa.call(Is, e) ? !0
      : qa.call(Js, e) ? !1
      : Kg.test(e) ? (Is[e] = !0)
      : ((Js[e] = !0), !1)
    );
  }
  function Kn(e, t, l) {
    if ($g(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case 'undefined':
          case 'function':
          case 'symbol':
            e.removeAttribute(t);
            return;
          case 'boolean':
            var a = t.toLowerCase().slice(0, 5);
            if (a !== 'data-' && a !== 'aria-') {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, '' + l);
      }
  }
  function $n(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, '' + l);
    }
  }
  function Zt(e, t, l, a) {
    if (a === null) e.removeAttribute(l);
    else {
      switch (typeof a) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, '' + a);
    }
  }
  var yr, Ws;
  function aa(e) {
    if (yr === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        ((yr = (t && t[1]) || ''),
          (Ws =
            (
              -1 <
              l.stack.indexOf(`
    at`)
            ) ?
              ' (<anonymous>)'
            : -1 < l.stack.indexOf('@') ? '@unknown:0:0'
            : ''));
      }
    return (
      `
` +
      yr +
      e +
      Ws
    );
  }
  var mr = !1;
  function vr(e, t) {
    if (!e || mr) return '';
    mr = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var X = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(X.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(X, []);
                } catch (U) {
                  var L = U;
                }
                Reflect.construct(e, [], X);
              } else {
                try {
                  X.call();
                } catch (U) {
                  L = U;
                }
                e.call(X.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (U) {
                L = U;
              }
              (X = e()) && typeof X.catch == 'function' && X.catch(function () {});
            }
          } catch (U) {
            if (U && L && typeof U.stack == 'string') return [U.stack, L.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, 'name');
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        });
      var i = a.DetermineComponentFrameRoot(),
        u = i[0],
        d = i[1];
      if (u && d) {
        var m = u.split(`
`),
          z = d.split(`
`);
        for (n = a = 0; a < m.length && !m[a].includes('DetermineComponentFrameRoot'); ) a++;
        for (; n < z.length && !z[n].includes('DetermineComponentFrameRoot'); ) n++;
        if (a === m.length || n === z.length)
          for (a = m.length - 1, n = z.length - 1; 1 <= a && 0 <= n && m[a] !== z[n]; ) n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (m[a] !== z[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || m[a] !== z[n])) {
                  var G =
                    `
` + m[a].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      G.includes('<anonymous>') &&
                      (G = G.replace('<anonymous>', e.displayName)),
                    G
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      ((mr = !1), (Error.prepareStackTrace = l));
    }
    return (l = e ? e.displayName || e.name : '') ? aa(l) : '';
  }
  function Jg(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return aa(e.type);
      case 16:
        return aa('Lazy');
      case 13:
        return aa('Suspense');
      case 19:
        return aa('SuspenseList');
      case 0:
      case 15:
        return vr(e.type, !1);
      case 11:
        return vr(e.type.render, !1);
      case 1:
        return vr(e.type, !0);
      case 31:
        return aa('Activity');
      default:
        return '';
    }
  }
  function Ps(e) {
    try {
      var t = '';
      do ((t += Jg(e)), (e = e.return));
      while (e);
      return t;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  function At(e) {
    switch (typeof e) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return e;
      default:
        return '';
    }
  }
  function eo(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function Ig(e) {
    var t = eo(e) ? 'checked' : 'value',
      l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      a = '' + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof l < 'u' &&
      typeof l.get == 'function' &&
      typeof l.set == 'function'
    ) {
      var n = l.get,
        i = l.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (u) {
            ((a = '' + u), i.call(this, u));
          },
        }),
        Object.defineProperty(e, t, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (u) {
            a = '' + u;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Jn(e) {
    e._valueTracker || (e._valueTracker = Ig(e));
  }
  function to(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(),
      a = '';
    return (
      e &&
        (a =
          eo(e) ?
            e.checked ?
              'true'
            : 'false'
          : e.value),
      (e = a),
      e !== l ? (t.setValue(e), !0) : !1
    );
  }
  function In(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Wg = /[\n"\\]/g;
  function Tt(e) {
    return e.replace(Wg, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function xr(e, t, l, a, n, i, u, d) {
    ((e.name = ''),
      u != null && typeof u != 'function' && typeof u != 'symbol' && typeof u != 'boolean' ?
        (e.type = u)
      : e.removeAttribute('type'),
      t != null ?
        u === 'number' ?
          ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + At(t))
        : e.value !== '' + At(t) && (e.value = '' + At(t))
      : (u !== 'submit' && u !== 'reset') || e.removeAttribute('value'),
      t != null ? Sr(e, u, At(t))
      : l != null ? Sr(e, u, At(l))
      : a != null && e.removeAttribute('value'),
      n == null && i != null && (e.defaultChecked = !!i),
      n != null && (e.checked = n && typeof n != 'function' && typeof n != 'symbol'),
      d != null && typeof d != 'function' && typeof d != 'symbol' && typeof d != 'boolean' ?
        (e.name = '' + At(d))
      : e.removeAttribute('name'));
  }
  function lo(e, t, l, a, n, i, u, d) {
    if (
      (i != null &&
        typeof i != 'function' &&
        typeof i != 'symbol' &&
        typeof i != 'boolean' &&
        (e.type = i),
      t != null || l != null)
    ) {
      if (!((i !== 'submit' && i !== 'reset') || t != null)) return;
      ((l = l != null ? '' + At(l) : ''),
        (t = t != null ? '' + At(t) : l),
        d || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((a = a ?? n),
      (a = typeof a != 'function' && typeof a != 'symbol' && !!a),
      (e.checked = d ? e.checked : !!a),
      (e.defaultChecked = !!a),
      u != null &&
        typeof u != 'function' &&
        typeof u != 'symbol' &&
        typeof u != 'boolean' &&
        (e.name = u));
  }
  function Sr(e, t, l) {
    (t === 'number' && In(e.ownerDocument) === e) ||
      e.defaultValue === '' + l ||
      (e.defaultValue = '' + l);
  }
  function na(e, t, l, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var n = 0; n < l.length; n++) t['$' + l[n]] = !0;
      for (l = 0; l < e.length; l++)
        ((n = t.hasOwnProperty('$' + e[l].value)),
          e[l].selected !== n && (e[l].selected = n),
          n && a && (e[l].defaultSelected = !0));
    } else {
      for (l = '' + At(l), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === l) {
          ((e[n].selected = !0), a && (e[n].defaultSelected = !0));
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ao(e, t, l) {
    if (t != null && ((t = '' + At(t)), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? '' + At(l) : '';
  }
  function no(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(o(92));
        if (ee(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0];
        }
        l = a;
      }
      (l == null && (l = ''), (t = l));
    }
    ((l = At(t)),
      (e.defaultValue = l),
      (a = e.textContent),
      a === l && a !== '' && a !== null && (e.value = a));
  }
  function ia(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Pg = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function io(e, t, l) {
    var a = t.indexOf('--') === 0;
    l == null || typeof l == 'boolean' || l === '' ?
      a ? e.setProperty(t, '')
      : t === 'float' ? (e.cssFloat = '')
      : (e[t] = '')
    : a ? e.setProperty(t, l)
    : typeof l != 'number' || l === 0 || Pg.has(t) ?
      t === 'float' ?
        (e.cssFloat = l)
      : (e[t] = ('' + l).trim())
    : (e[t] = l + 'px');
  }
  function ro(e, t, l) {
    if (t != null && typeof t != 'object') throw Error(o(62));
    if (((e = e.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf('--') === 0 ? e.setProperty(a, '')
          : a === 'float' ? (e.cssFloat = '')
          : (e[a] = ''));
      for (var n in t) ((a = t[n]), t.hasOwnProperty(n) && l[n] !== a && io(e, n, a));
    } else for (var i in t) t.hasOwnProperty(i) && io(e, i, t[i]);
  }
  function Er(e) {
    if (e.indexOf('-') === -1) return !1;
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var eh = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height'],
    ]),
    th =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Wn(e) {
    return th.test('' + e) ?
        "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var Nr = null;
  function wr(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ra = null,
    ua = null;
  function uo(e) {
    var t = ea(e);
    if (t && (e = t.stateNode)) {
      var l = e[rt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (xr(
              e,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name
            ),
            (t = l.name),
            l.type === 'radio' && t != null)
          ) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll('input[name="' + Tt('' + t) + '"][type="radio"]'), t = 0;
              t < l.length;
              t++
            ) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var n = a[rt] || null;
                if (!n) throw Error(o(90));
                xr(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (t = 0; t < l.length; t++) ((a = l[t]), a.form === e.form && to(a));
          }
          break e;
        case 'textarea':
          ao(e, l.value, l.defaultValue);
          break e;
        case 'select':
          ((t = l.value), t != null && na(e, !!l.multiple, t, !1));
      }
    }
  }
  var Ar = !1;
  function so(e, t, l) {
    if (Ar) return e(t, l);
    Ar = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((Ar = !1),
        (ra !== null || ua !== null) &&
          (Ui(), ra && ((t = ra), (e = ua), (ua = ra = null), uo(t), e)))
      )
        for (t = 0; t < e.length; t++) uo(e[t]);
    }
  }
  function Qa(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[rt] || null;
    if (a === null) return null;
    l = a[t];
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        ((a = !a.disabled) ||
          ((e = e.type),
          (a = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
          (e = !a));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != 'function') throw Error(o(231, t, typeof l));
    return l;
  }
  var Xt = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    Tr = !1;
  if (Xt)
    try {
      var Fa = {};
      (Object.defineProperty(Fa, 'passive', {
        get: function () {
          Tr = !0;
        },
      }),
        window.addEventListener('test', Fa, Fa),
        window.removeEventListener('test', Fa, Fa));
    } catch {
      Tr = !1;
    }
  var ul = null,
    _r = null,
    Pn = null;
  function oo() {
    if (Pn) return Pn;
    var e,
      t = _r,
      l = t.length,
      a,
      n = 'value' in ul ? ul.value : ul.textContent,
      i = n.length;
    for (e = 0; e < l && t[e] === n[e]; e++);
    var u = l - e;
    for (a = 1; a <= u && t[l - a] === n[i - a]; a++);
    return (Pn = n.slice(e, 1 < a ? 1 - a : void 0));
  }
  function ei(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function ti() {
    return !0;
  }
  function co() {
    return !1;
  }
  function ut(e) {
    function t(l, a, n, i, u) {
      ((this._reactName = l),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = i),
        (this.target = u),
        (this.currentTarget = null));
      for (var d in e) e.hasOwnProperty(d) && ((l = e[d]), (this[d] = l ? l(i) : i[d]));
      return (
        (this.isDefaultPrevented =
          (
            i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
          ) ?
            ti
          : co),
        (this.isPropagationStopped = co),
        this
      );
    }
    return (
      A(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault ?
              l.preventDefault()
            : typeof l.returnValue != 'unknown' && (l.returnValue = !1),
            (this.isDefaultPrevented = ti));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation ?
              l.stopPropagation()
            : typeof l.cancelBubble != 'unknown' && (l.cancelBubble = !0),
            (this.isPropagationStopped = ti));
        },
        persist: function () {},
        isPersistent: ti,
      }),
      t
    );
  }
  var zl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    li = ut(zl),
    Ka = A({}, zl, { view: 0, detail: 0 }),
    lh = ut(Ka),
    jr,
    Cr,
    $a,
    ai = A({}, Ka, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Or,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return (
          e.relatedTarget === void 0 ?
            e.fromElement === e.srcElement ?
              e.toElement
            : e.fromElement
          : e.relatedTarget
        );
      },
      movementX: function (e) {
        return 'movementX' in e ?
            e.movementX
          : (e !== $a &&
              ($a && e.type === 'mousemove' ?
                ((jr = e.screenX - $a.screenX), (Cr = e.screenY - $a.screenY))
              : (Cr = jr = 0),
              ($a = e)),
            jr);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Cr;
      },
    }),
    fo = ut(ai),
    ah = A({}, ai, { dataTransfer: 0 }),
    nh = ut(ah),
    ih = A({}, Ka, { relatedTarget: 0 }),
    kr = ut(ih),
    rh = A({}, zl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    uh = ut(rh),
    sh = A({}, zl, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    oh = ut(sh),
    ch = A({}, zl, { data: 0 }),
    go = ut(ch),
    fh = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    dh = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    gh = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function hh(e) {
    var t = this.nativeEvent;
    return (
      t.getModifierState ? t.getModifierState(e)
      : (e = gh[e]) ? !!t[e]
      : !1
    );
  }
  function Or() {
    return hh;
  }
  var ph = A({}, Ka, {
      key: function (e) {
        if (e.key) {
          var t = fh[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return (
          e.type === 'keypress' ? ((e = ei(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup' ? dh[e.keyCode] || 'Unidentified'
          : ''
        );
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Or,
      charCode: function (e) {
        return e.type === 'keypress' ? ei(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return (
          e.type === 'keypress' ? ei(e)
          : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode
          : 0
        );
      },
    }),
    bh = ut(ph),
    yh = A({}, ai, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    ho = ut(yh),
    mh = A({}, Ka, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Or,
    }),
    vh = ut(mh),
    xh = A({}, zl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Sh = ut(xh),
    Eh = A({}, ai, {
      deltaX: function (e) {
        return (
          'deltaX' in e ? e.deltaX
          : 'wheelDeltaX' in e ? -e.wheelDeltaX
          : 0
        );
      },
      deltaY: function (e) {
        return (
          'deltaY' in e ? e.deltaY
          : 'wheelDeltaY' in e ? -e.wheelDeltaY
          : 'wheelDelta' in e ? -e.wheelDelta
          : 0
        );
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Nh = ut(Eh),
    wh = A({}, zl, { newState: 0, oldState: 0 }),
    Ah = ut(wh),
    Th = [9, 13, 27, 32],
    Rr = Xt && 'CompositionEvent' in window,
    Ja = null;
  Xt && 'documentMode' in document && (Ja = document.documentMode);
  var _h = Xt && 'TextEvent' in window && !Ja,
    po = Xt && (!Rr || (Ja && 8 < Ja && 11 >= Ja)),
    bo = ' ',
    yo = !1;
  function mo(e, t) {
    switch (e) {
      case 'keyup':
        return Th.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function vo(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var sa = !1;
  function jh(e, t) {
    switch (e) {
      case 'compositionend':
        return vo(t);
      case 'keypress':
        return t.which !== 32 ? null : ((yo = !0), bo);
      case 'textInput':
        return ((e = t.data), e === bo && yo ? null : e);
      default:
        return null;
    }
  }
  function Ch(e, t) {
    if (sa)
      return e === 'compositionend' || (!Rr && mo(e, t)) ?
          ((e = oo()), (Pn = _r = ul = null), (sa = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return po && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var kh = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function xo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!kh[e.type] : t === 'textarea';
  }
  function So(e, t, l, a) {
    (ra ?
      ua ? ua.push(a)
      : (ua = [a])
    : (ra = a),
      (t = Zi(t, 'onChange')),
      0 < t.length &&
        ((l = new li('onChange', 'change', null, l, a)), e.push({ event: l, listeners: t })));
  }
  var Ia = null,
    Wa = null;
  function Oh(e) {
    ld(e, 0);
  }
  function ni(e) {
    var t = Va(e);
    if (to(t)) return e;
  }
  function Eo(e, t) {
    if (e === 'change') return t;
  }
  var No = !1;
  if (Xt) {
    var Dr;
    if (Xt) {
      var zr = 'oninput' in document;
      if (!zr) {
        var wo = document.createElement('div');
        (wo.setAttribute('oninput', 'return;'), (zr = typeof wo.oninput == 'function'));
      }
      Dr = zr;
    } else Dr = !1;
    No = Dr && (!document.documentMode || 9 < document.documentMode);
  }
  function Ao() {
    Ia && (Ia.detachEvent('onpropertychange', To), (Wa = Ia = null));
  }
  function To(e) {
    if (e.propertyName === 'value' && ni(Wa)) {
      var t = [];
      (So(t, Wa, e, wr(e)), so(Oh, t));
    }
  }
  function Rh(e, t, l) {
    e === 'focusin' ?
      (Ao(), (Ia = t), (Wa = l), Ia.attachEvent('onpropertychange', To))
    : e === 'focusout' && Ao();
  }
  function Dh(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return ni(Wa);
  }
  function zh(e, t) {
    if (e === 'click') return ni(t);
  }
  function Mh(e, t) {
    if (e === 'input' || e === 'change') return ni(t);
  }
  function Lh(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var ht = typeof Object.is == 'function' ? Object.is : Lh;
  function Pa(e, t) {
    if (ht(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var l = Object.keys(e),
      a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!qa.call(t, n) || !ht(e[n], t[n])) return !1;
    }
    return !0;
  }
  function _o(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function jo(e, t) {
    var l = _o(e);
    e = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = e + l.textContent.length), e <= t && a >= t)) return { node: l, offset: t - e };
        e = a;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = _o(l);
    }
  }
  function Co(e, t) {
    return (
      e && t ?
        e === t ? !0
        : e && e.nodeType === 3 ? !1
        : t && t.nodeType === 3 ? Co(e, t.parentNode)
        : 'contains' in e ? e.contains(t)
        : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1
    );
  }
  function ko(e) {
    e =
      e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ?
        e.ownerDocument.defaultView
      : window;
    for (var t = In(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == 'string';
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = In(e.document);
    }
    return t;
  }
  function Mr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  var Uh = Xt && 'documentMode' in document && 11 >= document.documentMode,
    oa = null,
    Lr = null,
    en = null,
    Ur = !1;
  function Oo(e, t, l) {
    var a =
      l.window === l ? l.document
      : l.nodeType === 9 ? l
      : l.ownerDocument;
    Ur ||
      oa == null ||
      oa !== In(a) ||
      ((a = oa),
      'selectionStart' in a && Mr(a) ?
        (a = { start: a.selectionStart, end: a.selectionEnd })
      : ((a = ((a.ownerDocument && a.ownerDocument.defaultView) || window).getSelection()),
        (a = {
          anchorNode: a.anchorNode,
          anchorOffset: a.anchorOffset,
          focusNode: a.focusNode,
          focusOffset: a.focusOffset,
        })),
      (en && Pa(en, a)) ||
        ((en = a),
        (a = Zi(Lr, 'onSelect')),
        0 < a.length &&
          ((t = new li('onSelect', 'select', null, t, l)),
          e.push({ event: t, listeners: a }),
          (t.target = oa))));
  }
  function Ml(e, t) {
    var l = {};
    return (
      (l[e.toLowerCase()] = t.toLowerCase()),
      (l['Webkit' + e] = 'webkit' + t),
      (l['Moz' + e] = 'moz' + t),
      l
    );
  }
  var ca = {
      animationend: Ml('Animation', 'AnimationEnd'),
      animationiteration: Ml('Animation', 'AnimationIteration'),
      animationstart: Ml('Animation', 'AnimationStart'),
      transitionrun: Ml('Transition', 'TransitionRun'),
      transitionstart: Ml('Transition', 'TransitionStart'),
      transitioncancel: Ml('Transition', 'TransitionCancel'),
      transitionend: Ml('Transition', 'TransitionEnd'),
    },
    Br = {},
    Ro = {};
  Xt &&
    ((Ro = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete ca.animationend.animation,
      delete ca.animationiteration.animation,
      delete ca.animationstart.animation),
    'TransitionEvent' in window || delete ca.transitionend.transition);
  function Ll(e) {
    if (Br[e]) return Br[e];
    if (!ca[e]) return e;
    var t = ca[e],
      l;
    for (l in t) if (t.hasOwnProperty(l) && l in Ro) return (Br[e] = t[l]);
    return e;
  }
  var Do = Ll('animationend'),
    zo = Ll('animationiteration'),
    Mo = Ll('animationstart'),
    Bh = Ll('transitionrun'),
    Hh = Ll('transitionstart'),
    qh = Ll('transitioncancel'),
    Lo = Ll('transitionend'),
    Uo = new Map(),
    Hr =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  Hr.push('scrollEnd');
  function zt(e, t) {
    (Uo.set(e, t), Dl(t, [e]));
  }
  var Bo = new WeakMap();
  function _t(e, t) {
    if (typeof e == 'object' && e !== null) {
      var l = Bo.get(e);
      return l !== void 0 ? l : ((t = { value: e, source: t, stack: Ps(t) }), Bo.set(e, t), t);
    }
    return { value: e, source: t, stack: Ps(t) };
  }
  var jt = [],
    fa = 0,
    qr = 0;
  function ii() {
    for (var e = fa, t = (qr = fa = 0); t < e; ) {
      var l = jt[t];
      jt[t++] = null;
      var a = jt[t];
      jt[t++] = null;
      var n = jt[t];
      jt[t++] = null;
      var i = jt[t];
      if (((jt[t++] = null), a !== null && n !== null)) {
        var u = a.pending;
        (u === null ? (n.next = n) : ((n.next = u.next), (u.next = n)), (a.pending = n));
      }
      i !== 0 && Ho(l, n, i);
    }
  }
  function ri(e, t, l, a) {
    ((jt[fa++] = e),
      (jt[fa++] = t),
      (jt[fa++] = l),
      (jt[fa++] = a),
      (qr |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a));
  }
  function Gr(e, t, l, a) {
    return (ri(e, t, l, a), ui(e));
  }
  function da(e, t) {
    return (ri(e, null, null, t), ui(e));
  }
  function Ho(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, i = e.return; i !== null; )
      ((i.childLanes |= l),
        (a = i.alternate),
        a !== null && (a.childLanes |= l),
        i.tag === 22 && ((e = i.stateNode), e === null || e._visibility & 1 || (n = !0)),
        (e = i),
        (i = i.return));
    return e.tag === 3 ?
        ((i = e.stateNode),
        n &&
          t !== null &&
          ((n = 31 - gt(l)),
          (e = i.hiddenUpdates),
          (a = e[n]),
          a === null ? (e[n] = [t]) : a.push(t),
          (t.lane = l | 536870912)),
        i)
      : null;
  }
  function ui(e) {
    if (50 < Tn) throw ((Tn = 0), (Fu = null), Error(o(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var ga = {};
  function Gh(e, t, l, a) {
    ((this.tag = e),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function pt(e, t, l, a) {
    return new Gh(e, t, l, a);
  }
  function Yr(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Vt(e, t) {
    var l = e.alternate;
    return (
      l === null ?
        ((l = pt(e.tag, t, e.key, e.mode)),
        (l.elementType = e.elementType),
        (l.type = e.type),
        (l.stateNode = e.stateNode),
        (l.alternate = e),
        (e.alternate = l))
      : ((l.pendingProps = t),
        (l.type = e.type),
        (l.flags = 0),
        (l.subtreeFlags = 0),
        (l.deletions = null)),
      (l.flags = e.flags & 65011712),
      (l.childLanes = e.childLanes),
      (l.lanes = e.lanes),
      (l.child = e.child),
      (l.memoizedProps = e.memoizedProps),
      (l.memoizedState = e.memoizedState),
      (l.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (l.sibling = e.sibling),
      (l.index = e.index),
      (l.ref = e.ref),
      (l.refCleanup = e.refCleanup),
      l
    );
  }
  function qo(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return (
      l === null ?
        ((e.childLanes = 0),
        (e.lanes = t),
        (e.child = null),
        (e.subtreeFlags = 0),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.updateQueue = null),
        (e.dependencies = null),
        (e.stateNode = null))
      : ((e.childLanes = l.childLanes),
        (e.lanes = l.lanes),
        (e.child = l.child),
        (e.subtreeFlags = 0),
        (e.deletions = null),
        (e.memoizedProps = l.memoizedProps),
        (e.memoizedState = l.memoizedState),
        (e.updateQueue = l.updateQueue),
        (e.type = l.type),
        (t = l.dependencies),
        (e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function si(e, t, l, a, n, i) {
    var u = 0;
    if (((a = e), typeof e == 'function')) Yr(e) && (u = 1);
    else if (typeof e == 'string')
      u =
        Zp(e, l, le.current) ? 26
        : e === 'html' || e === 'head' || e === 'body' ? 27
        : 5;
    else
      e: switch (e) {
        case oe:
          return ((e = pt(31, l, t, n)), (e.elementType = oe), (e.lanes = i), e);
        case E:
          return Ul(l.children, n, i, t);
        case w:
          ((u = 8), (n |= 24));
          break;
        case C:
          return ((e = pt(12, l, t, n | 2)), (e.elementType = C), (e.lanes = i), e);
        case K:
          return ((e = pt(13, l, t, n)), (e.elementType = K), (e.lanes = i), e);
        case ie:
          return ((e = pt(19, l, t, n)), (e.elementType = ie), (e.lanes = i), e);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case N:
              case R:
                u = 10;
                break e;
              case S:
                u = 9;
                break e;
              case V:
                u = 11;
                break e;
              case re:
                u = 14;
                break e;
              case he:
                ((u = 16), (a = null));
                break e;
            }
          ((u = 29), (l = Error(o(130, e === null ? 'null' : typeof e, ''))), (a = null));
      }
    return ((t = pt(u, l, t, n)), (t.elementType = e), (t.type = a), (t.lanes = i), t);
  }
  function Ul(e, t, l, a) {
    return ((e = pt(7, e, a, t)), (e.lanes = l), e);
  }
  function Zr(e, t, l) {
    return ((e = pt(6, e, null, t)), (e.lanes = l), e);
  }
  function Xr(e, t, l) {
    return (
      (t = pt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = l),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var ha = [],
    pa = 0,
    oi = null,
    ci = 0,
    Ct = [],
    kt = 0,
    Bl = null,
    Qt = 1,
    Ft = '';
  function Hl(e, t) {
    ((ha[pa++] = ci), (ha[pa++] = oi), (oi = e), (ci = t));
  }
  function Go(e, t, l) {
    ((Ct[kt++] = Qt), (Ct[kt++] = Ft), (Ct[kt++] = Bl), (Bl = e));
    var a = Qt;
    e = Ft;
    var n = 32 - gt(a) - 1;
    ((a &= ~(1 << n)), (l += 1));
    var i = 32 - gt(t) + n;
    if (30 < i) {
      var u = n - (n % 5);
      ((i = (a & ((1 << u) - 1)).toString(32)),
        (a >>= u),
        (n -= u),
        (Qt = (1 << (32 - gt(t) + n)) | (l << n) | a),
        (Ft = i + e));
    } else ((Qt = (1 << i) | (l << n) | a), (Ft = e));
  }
  function Vr(e) {
    e.return !== null && (Hl(e, 1), Go(e, 1, 0));
  }
  function Qr(e) {
    for (; e === oi; ) ((oi = ha[--pa]), (ha[pa] = null), (ci = ha[--pa]), (ha[pa] = null));
    for (; e === Bl; )
      ((Bl = Ct[--kt]),
        (Ct[kt] = null),
        (Ft = Ct[--kt]),
        (Ct[kt] = null),
        (Qt = Ct[--kt]),
        (Ct[kt] = null));
  }
  var it = null,
    He = null,
    Te = !1,
    ql = null,
    Ut = !1,
    Fr = Error(o(519));
  function Gl(e) {
    var t = Error(o(418, ''));
    throw (an(_t(t, e)), Fr);
  }
  function Yo(e) {
    var t = e.stateNode,
      l = e.type,
      a = e.memoizedProps;
    switch (((t[tt] = e), (t[rt] = a), l)) {
      case 'dialog':
        (Ne('cancel', t), Ne('close', t));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        Ne('load', t);
        break;
      case 'video':
      case 'audio':
        for (l = 0; l < jn.length; l++) Ne(jn[l], t);
        break;
      case 'source':
        Ne('error', t);
        break;
      case 'img':
      case 'image':
      case 'link':
        (Ne('error', t), Ne('load', t));
        break;
      case 'details':
        Ne('toggle', t);
        break;
      case 'input':
        (Ne('invalid', t),
          lo(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0),
          Jn(t));
        break;
      case 'select':
        Ne('invalid', t);
        break;
      case 'textarea':
        (Ne('invalid', t), no(t, a.value, a.defaultValue, a.children), Jn(t));
    }
    ((l = a.children),
      (
        (typeof l != 'string' && typeof l != 'number' && typeof l != 'bigint') ||
        t.textContent === '' + l ||
        a.suppressHydrationWarning === !0 ||
        rd(t.textContent, l)
      ) ?
        (a.popover != null && (Ne('beforetoggle', t), Ne('toggle', t)),
        a.onScroll != null && Ne('scroll', t),
        a.onScrollEnd != null && Ne('scrollend', t),
        a.onClick != null && (t.onclick = Xi),
        (t = !0))
      : (t = !1),
      t || Gl(e));
  }
  function Zo(e) {
    for (it = e.return; it; )
      switch (it.tag) {
        case 5:
        case 13:
          Ut = !1;
          return;
        case 27:
        case 3:
          Ut = !0;
          return;
        default:
          it = it.return;
      }
  }
  function tn(e) {
    if (e !== it) return !1;
    if (!Te) return (Zo(e), (Te = !0), !1);
    var t = e.tag,
      l;
    if (
      ((l = t !== 3 && t !== 27) &&
        ((l = t === 5) &&
          ((l = e.type), (l = !(l !== 'form' && l !== 'button') || os(e.type, e.memoizedProps))),
        (l = !l)),
      l && He && Gl(e),
      Zo(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((l = e.data), l === '/$')) {
              if (t === 0) {
                He = Lt(e.nextSibling);
                break e;
              }
              t--;
            } else (l !== '$' && l !== '$!' && l !== '$?') || t++;
          e = e.nextSibling;
        }
        He = null;
      }
    } else
      t === 27 ?
        ((t = He), Nl(e.type) ? ((e = gs), (gs = null), (He = e)) : (He = t))
      : (He = it ? Lt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function ln() {
    ((He = it = null), (Te = !1));
  }
  function Xo() {
    var e = ql;
    return (e !== null && (ct === null ? (ct = e) : ct.push.apply(ct, e), (ql = null)), e);
  }
  function an(e) {
    ql === null ? (ql = [e]) : ql.push(e);
  }
  var Kr = q(null),
    Yl = null,
    Kt = null;
  function sl(e, t, l) {
    ($(Kr, t._currentValue), (t._currentValue = l));
  }
  function $t(e) {
    ((e._currentValue = Kr.current), I(Kr));
  }
  function $r(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate;
      if (
        ((e.childLanes & t) !== t ?
          ((e.childLanes |= t), a !== null && (a.childLanes |= t))
        : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        e === l)
      )
        break;
      e = e.return;
    }
  }
  function Jr(e, t, l, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var i = n.dependencies;
      if (i !== null) {
        var u = n.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var d = i;
          i = n;
          for (var m = 0; m < t.length; m++)
            if (d.context === t[m]) {
              ((i.lanes |= l),
                (d = i.alternate),
                d !== null && (d.lanes |= l),
                $r(i.return, l, e),
                a || (u = null));
              break e;
            }
          i = d.next;
        }
      } else if (n.tag === 18) {
        if (((u = n.return), u === null)) throw Error(o(341));
        ((u.lanes |= l), (i = u.alternate), i !== null && (i.lanes |= l), $r(u, l, e), (u = null));
      } else u = n.child;
      if (u !== null) u.return = n;
      else
        for (u = n; u !== null; ) {
          if (u === e) {
            u = null;
            break;
          }
          if (((n = u.sibling), n !== null)) {
            ((n.return = u.return), (u = n));
            break;
          }
          u = u.return;
        }
      n = u;
    }
  }
  function nn(e, t, l, a) {
    e = null;
    for (var n = t, i = !1; n !== null; ) {
      if (!i) {
        if ((n.flags & 524288) !== 0) i = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var u = n.alternate;
        if (u === null) throw Error(o(387));
        if (((u = u.memoizedProps), u !== null)) {
          var d = n.type;
          ht(n.pendingProps.value, u.value) || (e !== null ? e.push(d) : (e = [d]));
        }
      } else if (n === ye.current) {
        if (((u = n.alternate), u === null)) throw Error(o(387));
        u.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (e !== null ? e.push(zn) : (e = [zn]));
      }
      n = n.return;
    }
    (e !== null && Jr(t, e, l, a), (t.flags |= 262144));
  }
  function fi(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!ht(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Zl(e) {
    ((Yl = e), (Kt = null), (e = e.dependencies), e !== null && (e.firstContext = null));
  }
  function lt(e) {
    return Vo(Yl, e);
  }
  function di(e, t) {
    return (Yl === null && Zl(e), Vo(e, t));
  }
  function Vo(e, t) {
    var l = t._currentValue;
    if (((t = { context: t, memoizedValue: l, next: null }), Kt === null)) {
      if (e === null) throw Error(o(308));
      ((Kt = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
    } else Kt = Kt.next = t;
    return l;
  }
  var Yh =
      typeof AbortController < 'u' ? AbortController : (
        function () {
          var e = [],
            t = (this.signal = {
              aborted: !1,
              addEventListener: function (l, a) {
                e.push(a);
              },
            });
          this.abort = function () {
            ((t.aborted = !0),
              e.forEach(function (l) {
                return l();
              }));
          };
        }
      ),
    Zh = r.unstable_scheduleCallback,
    Xh = r.unstable_NormalPriority,
    Qe = {
      $$typeof: R,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Ir() {
    return { controller: new Yh(), data: new Map(), refCount: 0 };
  }
  function rn(e) {
    (e.refCount--,
      e.refCount === 0 &&
        Zh(Xh, function () {
          e.controller.abort();
        }));
  }
  var un = null,
    Wr = 0,
    ba = 0,
    ya = null;
  function Vh(e, t) {
    if (un === null) {
      var l = (un = []);
      ((Wr = 0),
        (ba = es()),
        (ya = {
          status: 'pending',
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        }));
    }
    return (Wr++, t.then(Qo, Qo), t);
  }
  function Qo() {
    if (--Wr === 0 && un !== null) {
      ya !== null && (ya.status = 'fulfilled');
      var e = un;
      ((un = null), (ba = 0), (ya = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Qh(e, t) {
    var l = [],
      a = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (n) {
          l.push(n);
        },
      };
    return (
      e.then(
        function () {
          ((a.status = 'fulfilled'), (a.value = t));
          for (var n = 0; n < l.length; n++) (0, l[n])(t);
        },
        function (n) {
          for (a.status = 'rejected', a.reason = n, n = 0; n < l.length; n++) (0, l[n])(void 0);
        }
      ),
      a
    );
  }
  var Fo = O.S;
  O.S = function (e, t) {
    (typeof t == 'object' && t !== null && typeof t.then == 'function' && Vh(e, t),
      Fo !== null && Fo(e, t));
  };
  var Xl = q(null);
  function Pr() {
    var e = Xl.current;
    return e !== null ? e : De.pooledCache;
  }
  function gi(e, t) {
    t === null ? $(Xl, Xl.current) : $(Xl, t.pool);
  }
  function Ko() {
    var e = Pr();
    return e === null ? null : { parent: Qe._currentValue, pool: e };
  }
  var sn = Error(o(460)),
    $o = Error(o(474)),
    hi = Error(o(542)),
    eu = { then: function () {} };
  function Jo(e) {
    return ((e = e.status), e === 'fulfilled' || e === 'rejected');
  }
  function pi() {}
  function Io(e, t, l) {
    switch (
      ((l = e[l]), l === void 0 ? e.push(t) : l !== t && (t.then(pi, pi), (t = l)), t.status)
    ) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), Po(e), e);
      default:
        if (typeof t.status == 'string') t.then(pi, pi);
        else {
          if (((e = De), e !== null && 100 < e.shellSuspendCounter)) throw Error(o(482));
          ((e = t),
            (e.status = 'pending'),
            e.then(
              function (a) {
                if (t.status === 'pending') {
                  var n = t;
                  ((n.status = 'fulfilled'), (n.value = a));
                }
              },
              function (a) {
                if (t.status === 'pending') {
                  var n = t;
                  ((n.status = 'rejected'), (n.reason = a));
                }
              }
            ));
        }
        switch (t.status) {
          case 'fulfilled':
            return t.value;
          case 'rejected':
            throw ((e = t.reason), Po(e), e);
        }
        throw ((on = t), sn);
    }
  }
  var on = null;
  function Wo() {
    if (on === null) throw Error(o(459));
    var e = on;
    return ((on = null), e);
  }
  function Po(e) {
    if (e === sn || e === hi) throw Error(o(483));
  }
  var ol = !1;
  function tu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function lu(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function cl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function fl(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (_e & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (a.pending = t),
        (t = ui(e)),
        Ho(e, null, l),
        t
      );
    }
    return (ri(e, a, t, l), ui(e));
  }
  function cn(e, t, l) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194048) !== 0))) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (l |= a), (t.lanes = l), Vs(e, l));
    }
  }
  function au(e, t) {
    var l = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var n = null,
        i = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var u = { lane: l.lane, tag: l.tag, payload: l.payload, callback: null, next: null };
          (i === null ? (n = i = u) : (i = i.next = u), (l = l.next));
        } while (l !== null);
        i === null ? (n = i = t) : (i = i.next = t);
      } else n = i = t;
      ((l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: i,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (e.updateQueue = l));
      return;
    }
    ((e = l.lastBaseUpdate),
      e === null ? (l.firstBaseUpdate = t) : (e.next = t),
      (l.lastBaseUpdate = t));
  }
  var nu = !1;
  function fn() {
    if (nu) {
      var e = ya;
      if (e !== null) throw e;
    }
  }
  function dn(e, t, l, a) {
    nu = !1;
    var n = e.updateQueue;
    ol = !1;
    var i = n.firstBaseUpdate,
      u = n.lastBaseUpdate,
      d = n.shared.pending;
    if (d !== null) {
      n.shared.pending = null;
      var m = d,
        z = m.next;
      ((m.next = null), u === null ? (i = z) : (u.next = z), (u = m));
      var G = e.alternate;
      G !== null &&
        ((G = G.updateQueue),
        (d = G.lastBaseUpdate),
        d !== u && (d === null ? (G.firstBaseUpdate = z) : (d.next = z), (G.lastBaseUpdate = m)));
    }
    if (i !== null) {
      var X = n.baseState;
      ((u = 0), (G = z = m = null), (d = i));
      do {
        var L = d.lane & -536870913,
          U = L !== d.lane;
        if (U ? (we & L) === L : (a & L) === L) {
          (L !== 0 && L === ba && (nu = !0),
            G !== null &&
              (G = G.next =
                { lane: 0, tag: d.tag, payload: d.payload, callback: null, next: null }));
          e: {
            var ge = e,
              fe = d;
            L = t;
            var Oe = l;
            switch (fe.tag) {
              case 1:
                if (((ge = fe.payload), typeof ge == 'function')) {
                  X = ge.call(Oe, X, L);
                  break e;
                }
                X = ge;
                break e;
              case 3:
                ge.flags = (ge.flags & -65537) | 128;
              case 0:
                if (
                  ((ge = fe.payload),
                  (L = typeof ge == 'function' ? ge.call(Oe, X, L) : ge),
                  L == null)
                )
                  break e;
                X = A({}, X, L);
                break e;
              case 2:
                ol = !0;
            }
          }
          ((L = d.callback),
            L !== null &&
              ((e.flags |= 64),
              U && (e.flags |= 8192),
              (U = n.callbacks),
              U === null ? (n.callbacks = [L]) : U.push(L)));
        } else
          ((U = { lane: L, tag: d.tag, payload: d.payload, callback: d.callback, next: null }),
            G === null ? ((z = G = U), (m = X)) : (G = G.next = U),
            (u |= L));
        if (((d = d.next), d === null)) {
          if (((d = n.shared.pending), d === null)) break;
          ((U = d),
            (d = U.next),
            (U.next = null),
            (n.lastBaseUpdate = U),
            (n.shared.pending = null));
        }
      } while (!0);
      (G === null && (m = X),
        (n.baseState = m),
        (n.firstBaseUpdate = z),
        (n.lastBaseUpdate = G),
        i === null && (n.shared.lanes = 0),
        (vl |= u),
        (e.lanes = u),
        (e.memoizedState = X));
    }
  }
  function ec(e, t) {
    if (typeof e != 'function') throw Error(o(191, e));
    e.call(t);
  }
  function tc(e, t) {
    var l = e.callbacks;
    if (l !== null) for (e.callbacks = null, e = 0; e < l.length; e++) ec(l[e], t);
  }
  var ma = q(null),
    bi = q(0);
  function lc(e, t) {
    ((e = ll), $(bi, e), $(ma, t), (ll = e | t.baseLanes));
  }
  function iu() {
    ($(bi, ll), $(ma, ma.current));
  }
  function ru() {
    ((ll = bi.current), I(ma), I(bi));
  }
  var dl = 0,
    ve = null,
    Ce = null,
    Ze = null,
    yi = !1,
    va = !1,
    Vl = !1,
    mi = 0,
    gn = 0,
    xa = null,
    Fh = 0;
  function Ge() {
    throw Error(o(321));
  }
  function uu(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++) if (!ht(e[l], t[l])) return !1;
    return !0;
  }
  function su(e, t, l, a, n, i) {
    return (
      (dl = i),
      (ve = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (O.H = e === null || e.memoizedState === null ? Hc : qc),
      (Vl = !1),
      (i = l(a, n)),
      (Vl = !1),
      va && (i = nc(t, l, a, n)),
      ac(e),
      i
    );
  }
  function ac(e) {
    O.H = wi;
    var t = Ce !== null && Ce.next !== null;
    if (((dl = 0), (Ze = Ce = ve = null), (yi = !1), (gn = 0), (xa = null), t)) throw Error(o(300));
    e === null || $e || ((e = e.dependencies), e !== null && fi(e) && ($e = !0));
  }
  function nc(e, t, l, a) {
    ve = e;
    var n = 0;
    do {
      if ((va && (xa = null), (gn = 0), (va = !1), 25 <= n)) throw Error(o(301));
      if (((n += 1), (Ze = Ce = null), e.updateQueue != null)) {
        var i = e.updateQueue;
        ((i.lastEffect = null),
          (i.events = null),
          (i.stores = null),
          i.memoCache != null && (i.memoCache.index = 0));
      }
      ((O.H = ep), (i = t(l, a)));
    } while (va);
    return i;
  }
  function Kh() {
    var e = O.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? hn(t) : t),
      (e = e.useState()[0]),
      (Ce !== null ? Ce.memoizedState : null) !== e && (ve.flags |= 1024),
      t
    );
  }
  function ou() {
    var e = mi !== 0;
    return ((mi = 0), e);
  }
  function cu(e, t, l) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l));
  }
  function fu(e) {
    if (yi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      yi = !1;
    }
    ((dl = 0), (Ze = Ce = ve = null), (va = !1), (gn = mi = 0), (xa = null));
  }
  function st() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (Ze === null ? (ve.memoizedState = Ze = e) : (Ze = Ze.next = e), Ze);
  }
  function Xe() {
    if (Ce === null) {
      var e = ve.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ce.next;
    var t = Ze === null ? ve.memoizedState : Ze.next;
    if (t !== null) ((Ze = t), (Ce = e));
    else {
      if (e === null) throw ve.alternate === null ? Error(o(467)) : Error(o(310));
      ((Ce = e),
        (e = {
          memoizedState: Ce.memoizedState,
          baseState: Ce.baseState,
          baseQueue: Ce.baseQueue,
          queue: Ce.queue,
          next: null,
        }),
        Ze === null ? (ve.memoizedState = Ze = e) : (Ze = Ze.next = e));
    }
    return Ze;
  }
  function du() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function hn(e) {
    var t = gn;
    return (
      (gn += 1),
      xa === null && (xa = []),
      (e = Io(xa, e, t)),
      (t = ve),
      (Ze === null ? t.memoizedState : Ze.next) === null &&
        ((t = t.alternate), (O.H = t === null || t.memoizedState === null ? Hc : qc)),
      e
    );
  }
  function vi(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return hn(e);
      if (e.$$typeof === R) return lt(e);
    }
    throw Error(o(438, String(e)));
  }
  function gu(e) {
    var t = null,
      l = ve.updateQueue;
    if ((l !== null && (t = l.memoCache), t == null)) {
      var a = ve.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      l === null && ((l = du()), (ve.updateQueue = l)),
      (l.memoCache = t),
      (l = t.data[t.index]),
      l === void 0)
    )
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = ce;
    return (t.index++, l);
  }
  function Jt(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function xi(e) {
    var t = Xe();
    return hu(t, Ce, e);
  }
  function hu(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = l;
    var n = e.baseQueue,
      i = a.pending;
    if (i !== null) {
      if (n !== null) {
        var u = n.next;
        ((n.next = i.next), (i.next = u));
      }
      ((t.baseQueue = n = i), (a.pending = null));
    }
    if (((i = e.baseState), n === null)) e.memoizedState = i;
    else {
      t = n.next;
      var d = (u = null),
        m = null,
        z = t,
        G = !1;
      do {
        var X = z.lane & -536870913;
        if (X !== z.lane ? (we & X) === X : (dl & X) === X) {
          var L = z.revertLane;
          if (L === 0)
            (m !== null &&
              (m = m.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: z.action,
                  hasEagerState: z.hasEagerState,
                  eagerState: z.eagerState,
                  next: null,
                }),
              X === ba && (G = !0));
          else if ((dl & L) === L) {
            ((z = z.next), L === ba && (G = !0));
            continue;
          } else
            ((X = {
              lane: 0,
              revertLane: z.revertLane,
              action: z.action,
              hasEagerState: z.hasEagerState,
              eagerState: z.eagerState,
              next: null,
            }),
              m === null ? ((d = m = X), (u = i)) : (m = m.next = X),
              (ve.lanes |= L),
              (vl |= L));
          ((X = z.action), Vl && l(i, X), (i = z.hasEagerState ? z.eagerState : l(i, X)));
        } else
          ((L = {
            lane: X,
            revertLane: z.revertLane,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null,
          }),
            m === null ? ((d = m = L), (u = i)) : (m = m.next = L),
            (ve.lanes |= X),
            (vl |= X));
        z = z.next;
      } while (z !== null && z !== t);
      if (
        (m === null ? (u = i) : (m.next = d),
        !ht(i, e.memoizedState) && (($e = !0), G && ((l = ya), l !== null)))
      )
        throw l;
      ((e.memoizedState = i), (e.baseState = u), (e.baseQueue = m), (a.lastRenderedState = i));
    }
    return (n === null && (a.lanes = 0), [e.memoizedState, a.dispatch]);
  }
  function pu(e) {
    var t = Xe(),
      l = t.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch,
      n = l.pending,
      i = t.memoizedState;
    if (n !== null) {
      l.pending = null;
      var u = (n = n.next);
      do ((i = e(i, u.action)), (u = u.next));
      while (u !== n);
      (ht(i, t.memoizedState) || ($e = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (l.lastRenderedState = i));
    }
    return [i, a];
  }
  function ic(e, t, l) {
    var a = ve,
      n = Xe(),
      i = Te;
    if (i) {
      if (l === void 0) throw Error(o(407));
      l = l();
    } else l = t();
    var u = !ht((Ce || n).memoizedState, l);
    (u && ((n.memoizedState = l), ($e = !0)), (n = n.queue));
    var d = sc.bind(null, a, n, e);
    if (
      (pn(2048, 8, d, [e]), n.getSnapshot !== t || u || (Ze !== null && Ze.memoizedState.tag & 1))
    ) {
      if (((a.flags |= 2048), Sa(9, Si(), uc.bind(null, a, n, l, t), null), De === null))
        throw Error(o(349));
      i || (dl & 124) !== 0 || rc(a, t, l);
    }
    return l;
  }
  function rc(e, t, l) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: l }),
      (t = ve.updateQueue),
      t === null ?
        ((t = du()), (ve.updateQueue = t), (t.stores = [e]))
      : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e)));
  }
  function uc(e, t, l, a) {
    ((t.value = l), (t.getSnapshot = a), oc(t) && cc(e));
  }
  function sc(e, t, l) {
    return l(function () {
      oc(t) && cc(e);
    });
  }
  function oc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !ht(e, l);
    } catch {
      return !0;
    }
  }
  function cc(e) {
    var t = da(e, 2);
    t !== null && xt(t, e, 2);
  }
  function bu(e) {
    var t = st();
    if (typeof e == 'function') {
      var l = e;
      if (((e = l()), Vl)) {
        il(!0);
        try {
          l();
        } finally {
          il(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Jt,
        lastRenderedState: e,
      }),
      t
    );
  }
  function fc(e, t, l, a) {
    return ((e.baseState = l), hu(e, Ce, typeof a == 'function' ? a : Jt));
  }
  function $h(e, t, l, a, n) {
    if (Ni(e)) throw Error(o(485));
    if (((e = t.action), e !== null)) {
      var i = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (u) {
          i.listeners.push(u);
        },
      };
      (O.T !== null ? l(!0) : (i.isTransition = !1),
        a(i),
        (l = t.pending),
        l === null ?
          ((i.next = t.pending = i), dc(t, i))
        : ((i.next = l.next), (t.pending = l.next = i)));
    }
  }
  function dc(e, t) {
    var l = t.action,
      a = t.payload,
      n = e.state;
    if (t.isTransition) {
      var i = O.T,
        u = {};
      O.T = u;
      try {
        var d = l(n, a),
          m = O.S;
        (m !== null && m(u, d), gc(e, t, d));
      } catch (z) {
        yu(e, t, z);
      } finally {
        O.T = i;
      }
    } else
      try {
        ((i = l(n, a)), gc(e, t, i));
      } catch (z) {
        yu(e, t, z);
      }
  }
  function gc(e, t, l) {
    l !== null && typeof l == 'object' && typeof l.then == 'function' ?
      l.then(
        function (a) {
          hc(e, t, a);
        },
        function (a) {
          return yu(e, t, a);
        }
      )
    : hc(e, t, l);
  }
  function hc(e, t, l) {
    ((t.status = 'fulfilled'),
      (t.value = l),
      pc(t),
      (e.state = l),
      (t = e.pending),
      t !== null &&
        ((l = t.next), l === t ? (e.pending = null) : ((l = l.next), (t.next = l), dc(e, l))));
  }
  function yu(e, t, l) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do ((t.status = 'rejected'), (t.reason = l), pc(t), (t = t.next));
      while (t !== a);
    }
    e.action = null;
  }
  function pc(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function bc(e, t) {
    return t;
  }
  function yc(e, t) {
    if (Te) {
      var l = De.formState;
      if (l !== null) {
        e: {
          var a = ve;
          if (Te) {
            if (He) {
              t: {
                for (var n = He, i = Ut; n.nodeType !== 8; ) {
                  if (!i) {
                    n = null;
                    break t;
                  }
                  if (((n = Lt(n.nextSibling)), n === null)) {
                    n = null;
                    break t;
                  }
                }
                ((i = n.data), (n = i === 'F!' || i === 'F' ? n : null));
              }
              if (n) {
                ((He = Lt(n.nextSibling)), (a = n.data === 'F!'));
                break e;
              }
            }
            Gl(a);
          }
          a = !1;
        }
        a && (t = l[0]);
      }
    }
    return (
      (l = st()),
      (l.memoizedState = l.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: bc,
        lastRenderedState: t,
      }),
      (l.queue = a),
      (l = Lc.bind(null, ve, a)),
      (a.dispatch = l),
      (a = bu(!1)),
      (i = Eu.bind(null, ve, !1, a.queue)),
      (a = st()),
      (n = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = n),
      (l = $h.bind(null, ve, n, i, l)),
      (n.dispatch = l),
      (a.memoizedState = e),
      [t, l, !1]
    );
  }
  function mc(e) {
    var t = Xe();
    return vc(t, Ce, e);
  }
  function vc(e, t, l) {
    if (
      ((t = hu(e, t, bc)[0]),
      (e = xi(Jt)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var a = hn(t);
      } catch (u) {
        throw u === sn ? hi : u;
      }
    else a = t;
    t = Xe();
    var n = t.queue,
      i = n.dispatch;
    return (
      l !== t.memoizedState && ((ve.flags |= 2048), Sa(9, Si(), Jh.bind(null, n, l), null)),
      [a, i, e]
    );
  }
  function Jh(e, t) {
    e.action = t;
  }
  function xc(e) {
    var t = Xe(),
      l = Ce;
    if (l !== null) return vc(t, l, e);
    (Xe(), (t = t.memoizedState), (l = Xe()));
    var a = l.queue.dispatch;
    return ((l.memoizedState = e), [t, a, !1]);
  }
  function Sa(e, t, l, a) {
    return (
      (e = { tag: e, create: l, deps: a, inst: t, next: null }),
      (t = ve.updateQueue),
      t === null && ((t = du()), (ve.updateQueue = t)),
      (l = t.lastEffect),
      l === null ?
        (t.lastEffect = e.next = e)
      : ((a = l.next), (l.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function Si() {
    return { destroy: void 0, resource: void 0 };
  }
  function Sc() {
    return Xe().memoizedState;
  }
  function Ei(e, t, l, a) {
    var n = st();
    ((a = a === void 0 ? null : a), (ve.flags |= e), (n.memoizedState = Sa(1 | t, Si(), l, a)));
  }
  function pn(e, t, l, a) {
    var n = Xe();
    a = a === void 0 ? null : a;
    var i = n.memoizedState.inst;
    Ce !== null && a !== null && uu(a, Ce.memoizedState.deps) ?
      (n.memoizedState = Sa(t, i, l, a))
    : ((ve.flags |= e), (n.memoizedState = Sa(1 | t, i, l, a)));
  }
  function Ec(e, t) {
    Ei(8390656, 8, e, t);
  }
  function Nc(e, t) {
    pn(2048, 8, e, t);
  }
  function wc(e, t) {
    return pn(4, 2, e, t);
  }
  function Ac(e, t) {
    return pn(4, 4, e, t);
  }
  function Tc(e, t) {
    if (typeof t == 'function') {
      e = e();
      var l = t(e);
      return function () {
        typeof l == 'function' ? l() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function _c(e, t, l) {
    ((l = l != null ? l.concat([e]) : null), pn(4, 4, Tc.bind(null, t, e), l));
  }
  function mu() {}
  function jc(e, t) {
    var l = Xe();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && uu(t, a[1]) ? a[0] : ((l.memoizedState = [e, t]), e);
  }
  function Cc(e, t) {
    var l = Xe();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && uu(t, a[1])) return a[0];
    if (((a = e()), Vl)) {
      il(!0);
      try {
        e();
      } finally {
        il(!1);
      }
    }
    return ((l.memoizedState = [a, t]), a);
  }
  function vu(e, t, l) {
    return l === void 0 || (dl & 1073741824) !== 0 ?
        (e.memoizedState = t)
      : ((e.memoizedState = l), (e = Df()), (ve.lanes |= e), (vl |= e), l);
  }
  function kc(e, t, l, a) {
    return (
      ht(l, t) ? l
      : ma.current !== null ? ((e = vu(e, l, a)), ht(e, t) || ($e = !0), e)
      : (dl & 42) === 0 ? (($e = !0), (e.memoizedState = l))
      : ((e = Df()), (ve.lanes |= e), (vl |= e), t)
    );
  }
  function Oc(e, t, l, a, n) {
    var i = F.p;
    F.p = i !== 0 && 8 > i ? i : 8;
    var u = O.T,
      d = {};
    ((O.T = d), Eu(e, !1, t, l));
    try {
      var m = n(),
        z = O.S;
      if (
        (z !== null && z(d, m), m !== null && typeof m == 'object' && typeof m.then == 'function')
      ) {
        var G = Qh(m, a);
        bn(e, t, G, vt(e));
      } else bn(e, t, a, vt(e));
    } catch (X) {
      bn(e, t, { then: function () {}, status: 'rejected', reason: X }, vt());
    } finally {
      ((F.p = i), (O.T = u));
    }
  }
  function Ih() {}
  function xu(e, t, l, a) {
    if (e.tag !== 5) throw Error(o(476));
    var n = Rc(e).queue;
    Oc(
      e,
      n,
      t,
      Q,
      l === null ? Ih : (
        function () {
          return (Dc(e), l(a));
        }
      )
    );
  }
  function Rc(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Q,
      baseState: Q,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Jt,
        lastRenderedState: Q,
      },
      next: null,
    };
    var l = {};
    return (
      (t.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Jt,
          lastRenderedState: l,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function Dc(e) {
    var t = Rc(e).next.queue;
    bn(e, t, {}, vt());
  }
  function Su() {
    return lt(zn);
  }
  function zc() {
    return Xe().memoizedState;
  }
  function Mc() {
    return Xe().memoizedState;
  }
  function Wh(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = vt();
          e = cl(l);
          var a = fl(t, e, l);
          (a !== null && (xt(a, t, l), cn(a, t, l)), (t = { cache: Ir() }), (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function Ph(e, t, l) {
    var a = vt();
    ((l = { lane: a, revertLane: 0, action: l, hasEagerState: !1, eagerState: null, next: null }),
      Ni(e) ? Uc(t, l) : ((l = Gr(e, t, l, a)), l !== null && (xt(l, e, a), Bc(l, t, a))));
  }
  function Lc(e, t, l) {
    var a = vt();
    bn(e, t, l, a);
  }
  function bn(e, t, l, a) {
    var n = { lane: a, revertLane: 0, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Ni(e)) Uc(t, n);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var u = t.lastRenderedState,
            d = i(u, l);
          if (((n.hasEagerState = !0), (n.eagerState = d), ht(d, u)))
            return (ri(e, t, n, 0), De === null && ii(), !1);
        } catch {
        } finally {
        }
      if (((l = Gr(e, t, n, a)), l !== null)) return (xt(l, e, a), Bc(l, t, a), !0);
    }
    return !1;
  }
  function Eu(e, t, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: es(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ni(e))
    ) {
      if (t) throw Error(o(479));
    } else ((t = Gr(e, l, a, 2)), t !== null && xt(t, e, 2));
  }
  function Ni(e) {
    var t = e.alternate;
    return e === ve || (t !== null && t === ve);
  }
  function Uc(e, t) {
    va = yi = !0;
    var l = e.pending;
    (l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)), (e.pending = t));
  }
  function Bc(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (l |= a), (t.lanes = l), Vs(e, l));
    }
  }
  var wi = {
      readContext: lt,
      use: vi,
      useCallback: Ge,
      useContext: Ge,
      useEffect: Ge,
      useImperativeHandle: Ge,
      useLayoutEffect: Ge,
      useInsertionEffect: Ge,
      useMemo: Ge,
      useReducer: Ge,
      useRef: Ge,
      useState: Ge,
      useDebugValue: Ge,
      useDeferredValue: Ge,
      useTransition: Ge,
      useSyncExternalStore: Ge,
      useId: Ge,
      useHostTransitionStatus: Ge,
      useFormState: Ge,
      useActionState: Ge,
      useOptimistic: Ge,
      useMemoCache: Ge,
      useCacheRefresh: Ge,
    },
    Hc = {
      readContext: lt,
      use: vi,
      useCallback: function (e, t) {
        return ((st().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: lt,
      useEffect: Ec,
      useImperativeHandle: function (e, t, l) {
        ((l = l != null ? l.concat([e]) : null), Ei(4194308, 4, Tc.bind(null, t, e), l));
      },
      useLayoutEffect: function (e, t) {
        return Ei(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Ei(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var l = st();
        t = t === void 0 ? null : t;
        var a = e();
        if (Vl) {
          il(!0);
          try {
            e();
          } finally {
            il(!1);
          }
        }
        return ((l.memoizedState = [a, t]), a);
      },
      useReducer: function (e, t, l) {
        var a = st();
        if (l !== void 0) {
          var n = l(t);
          if (Vl) {
            il(!0);
            try {
              l(t);
            } finally {
              il(!1);
            }
          }
        } else n = t;
        return (
          (a.memoizedState = a.baseState = n),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n,
          }),
          (a.queue = e),
          (e = e.dispatch = Ph.bind(null, ve, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = st();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = bu(e);
        var t = e.queue,
          l = Lc.bind(null, ve, t);
        return ((t.dispatch = l), [e.memoizedState, l]);
      },
      useDebugValue: mu,
      useDeferredValue: function (e, t) {
        var l = st();
        return vu(l, e, t);
      },
      useTransition: function () {
        var e = bu(!1);
        return ((e = Oc.bind(null, ve, e.queue, !0, !1)), (st().memoizedState = e), [!1, e]);
      },
      useSyncExternalStore: function (e, t, l) {
        var a = ve,
          n = st();
        if (Te) {
          if (l === void 0) throw Error(o(407));
          l = l();
        } else {
          if (((l = t()), De === null)) throw Error(o(349));
          (we & 124) !== 0 || rc(a, t, l);
        }
        n.memoizedState = l;
        var i = { value: l, getSnapshot: t };
        return (
          (n.queue = i),
          Ec(sc.bind(null, a, i, e), [e]),
          (a.flags |= 2048),
          Sa(9, Si(), uc.bind(null, a, i, l, t), null),
          l
        );
      },
      useId: function () {
        var e = st(),
          t = De.identifierPrefix;
        if (Te) {
          var l = Ft,
            a = Qt;
          ((l = (a & ~(1 << (32 - gt(a) - 1))).toString(32) + l),
            (t = '«' + t + 'R' + l),
            (l = mi++),
            0 < l && (t += 'H' + l.toString(32)),
            (t += '»'));
        } else ((l = Fh++), (t = '«' + t + 'r' + l.toString(32) + '»'));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Su,
      useFormState: yc,
      useActionState: yc,
      useOptimistic: function (e) {
        var t = st();
        t.memoizedState = t.baseState = e;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return ((t.queue = l), (t = Eu.bind(null, ve, !0, l)), (l.dispatch = t), [e, t]);
      },
      useMemoCache: gu,
      useCacheRefresh: function () {
        return (st().memoizedState = Wh.bind(null, ve));
      },
    },
    qc = {
      readContext: lt,
      use: vi,
      useCallback: jc,
      useContext: lt,
      useEffect: Nc,
      useImperativeHandle: _c,
      useInsertionEffect: wc,
      useLayoutEffect: Ac,
      useMemo: Cc,
      useReducer: xi,
      useRef: Sc,
      useState: function () {
        return xi(Jt);
      },
      useDebugValue: mu,
      useDeferredValue: function (e, t) {
        var l = Xe();
        return kc(l, Ce.memoizedState, e, t);
      },
      useTransition: function () {
        var e = xi(Jt)[0],
          t = Xe().memoizedState;
        return [typeof e == 'boolean' ? e : hn(e), t];
      },
      useSyncExternalStore: ic,
      useId: zc,
      useHostTransitionStatus: Su,
      useFormState: mc,
      useActionState: mc,
      useOptimistic: function (e, t) {
        var l = Xe();
        return fc(l, Ce, e, t);
      },
      useMemoCache: gu,
      useCacheRefresh: Mc,
    },
    ep = {
      readContext: lt,
      use: vi,
      useCallback: jc,
      useContext: lt,
      useEffect: Nc,
      useImperativeHandle: _c,
      useInsertionEffect: wc,
      useLayoutEffect: Ac,
      useMemo: Cc,
      useReducer: pu,
      useRef: Sc,
      useState: function () {
        return pu(Jt);
      },
      useDebugValue: mu,
      useDeferredValue: function (e, t) {
        var l = Xe();
        return Ce === null ? vu(l, e, t) : kc(l, Ce.memoizedState, e, t);
      },
      useTransition: function () {
        var e = pu(Jt)[0],
          t = Xe().memoizedState;
        return [typeof e == 'boolean' ? e : hn(e), t];
      },
      useSyncExternalStore: ic,
      useId: zc,
      useHostTransitionStatus: Su,
      useFormState: xc,
      useActionState: xc,
      useOptimistic: function (e, t) {
        var l = Xe();
        return Ce !== null ? fc(l, Ce, e, t) : ((l.baseState = e), [e, l.queue.dispatch]);
      },
      useMemoCache: gu,
      useCacheRefresh: Mc,
    },
    Ea = null,
    yn = 0;
  function Ai(e) {
    var t = yn;
    return ((yn += 1), Ea === null && (Ea = []), Io(Ea, e, t));
  }
  function mn(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function Ti(e, t) {
    throw t.$$typeof === b ?
        Error(o(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          o(
            31,
            e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e
          )
        ));
  }
  function Gc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Yc(e) {
    function t(k, T) {
      if (e) {
        var D = k.deletions;
        D === null ? ((k.deletions = [T]), (k.flags |= 16)) : D.push(T);
      }
    }
    function l(k, T) {
      if (!e) return null;
      for (; T !== null; ) (t(k, T), (T = T.sibling));
      return null;
    }
    function a(k) {
      for (var T = new Map(); k !== null; )
        (k.key !== null ? T.set(k.key, k) : T.set(k.index, k), (k = k.sibling));
      return T;
    }
    function n(k, T) {
      return ((k = Vt(k, T)), (k.index = 0), (k.sibling = null), k);
    }
    function i(k, T, D) {
      return (
        (k.index = D),
        e ?
          ((D = k.alternate),
          D !== null ?
            ((D = D.index), D < T ? ((k.flags |= 67108866), T) : D)
          : ((k.flags |= 67108866), T))
        : ((k.flags |= 1048576), T)
      );
    }
    function u(k) {
      return (e && k.alternate === null && (k.flags |= 67108866), k);
    }
    function d(k, T, D, Z) {
      return T === null || T.tag !== 6 ?
          ((T = Zr(D, k.mode, Z)), (T.return = k), T)
        : ((T = n(T, D)), (T.return = k), T);
    }
    function m(k, T, D, Z) {
      var ae = D.type;
      return (
        ae === E ? G(k, T, D.props.children, Z, D.key)
        : (
          T !== null &&
          (T.elementType === ae ||
            (typeof ae == 'object' && ae !== null && ae.$$typeof === he && Gc(ae) === T.type))
        ) ?
          ((T = n(T, D.props)), mn(T, D), (T.return = k), T)
        : ((T = si(D.type, D.key, D.props, null, k.mode, Z)), mn(T, D), (T.return = k), T)
      );
    }
    function z(k, T, D, Z) {
      return (
          T === null ||
            T.tag !== 4 ||
            T.stateNode.containerInfo !== D.containerInfo ||
            T.stateNode.implementation !== D.implementation
        ) ?
          ((T = Xr(D, k.mode, Z)), (T.return = k), T)
        : ((T = n(T, D.children || [])), (T.return = k), T);
    }
    function G(k, T, D, Z, ae) {
      return T === null || T.tag !== 7 ?
          ((T = Ul(D, k.mode, Z, ae)), (T.return = k), T)
        : ((T = n(T, D)), (T.return = k), T);
    }
    function X(k, T, D) {
      if ((typeof T == 'string' && T !== '') || typeof T == 'number' || typeof T == 'bigint')
        return ((T = Zr('' + T, k.mode, D)), (T.return = k), T);
      if (typeof T == 'object' && T !== null) {
        switch (T.$$typeof) {
          case j:
            return ((D = si(T.type, T.key, T.props, null, k.mode, D)), mn(D, T), (D.return = k), D);
          case B:
            return ((T = Xr(T, k.mode, D)), (T.return = k), T);
          case he:
            var Z = T._init;
            return ((T = Z(T._payload)), X(k, T, D));
        }
        if (ee(T) || ne(T)) return ((T = Ul(T, k.mode, D, null)), (T.return = k), T);
        if (typeof T.then == 'function') return X(k, Ai(T), D);
        if (T.$$typeof === R) return X(k, di(k, T), D);
        Ti(k, T);
      }
      return null;
    }
    function L(k, T, D, Z) {
      var ae = T !== null ? T.key : null;
      if ((typeof D == 'string' && D !== '') || typeof D == 'number' || typeof D == 'bigint')
        return ae !== null ? null : d(k, T, '' + D, Z);
      if (typeof D == 'object' && D !== null) {
        switch (D.$$typeof) {
          case j:
            return D.key === ae ? m(k, T, D, Z) : null;
          case B:
            return D.key === ae ? z(k, T, D, Z) : null;
          case he:
            return ((ae = D._init), (D = ae(D._payload)), L(k, T, D, Z));
        }
        if (ee(D) || ne(D)) return ae !== null ? null : G(k, T, D, Z, null);
        if (typeof D.then == 'function') return L(k, T, Ai(D), Z);
        if (D.$$typeof === R) return L(k, T, di(k, D), Z);
        Ti(k, D);
      }
      return null;
    }
    function U(k, T, D, Z, ae) {
      if ((typeof Z == 'string' && Z !== '') || typeof Z == 'number' || typeof Z == 'bigint')
        return ((k = k.get(D) || null), d(T, k, '' + Z, ae));
      if (typeof Z == 'object' && Z !== null) {
        switch (Z.$$typeof) {
          case j:
            return ((k = k.get(Z.key === null ? D : Z.key) || null), m(T, k, Z, ae));
          case B:
            return ((k = k.get(Z.key === null ? D : Z.key) || null), z(T, k, Z, ae));
          case he:
            var xe = Z._init;
            return ((Z = xe(Z._payload)), U(k, T, D, Z, ae));
        }
        if (ee(Z) || ne(Z)) return ((k = k.get(D) || null), G(T, k, Z, ae, null));
        if (typeof Z.then == 'function') return U(k, T, D, Ai(Z), ae);
        if (Z.$$typeof === R) return U(k, T, D, di(T, Z), ae);
        Ti(T, Z);
      }
      return null;
    }
    function ge(k, T, D, Z) {
      for (
        var ae = null, xe = null, se = T, de = (T = 0), Ie = null;
        se !== null && de < D.length;
        de++
      ) {
        se.index > de ? ((Ie = se), (se = null)) : (Ie = se.sibling);
        var Ae = L(k, se, D[de], Z);
        if (Ae === null) {
          se === null && (se = Ie);
          break;
        }
        (e && se && Ae.alternate === null && t(k, se),
          (T = i(Ae, T, de)),
          xe === null ? (ae = Ae) : (xe.sibling = Ae),
          (xe = Ae),
          (se = Ie));
      }
      if (de === D.length) return (l(k, se), Te && Hl(k, de), ae);
      if (se === null) {
        for (; de < D.length; de++)
          ((se = X(k, D[de], Z)),
            se !== null &&
              ((T = i(se, T, de)), xe === null ? (ae = se) : (xe.sibling = se), (xe = se)));
        return (Te && Hl(k, de), ae);
      }
      for (se = a(se); de < D.length; de++)
        ((Ie = U(se, k, de, D[de], Z)),
          Ie !== null &&
            (e && Ie.alternate !== null && se.delete(Ie.key === null ? de : Ie.key),
            (T = i(Ie, T, de)),
            xe === null ? (ae = Ie) : (xe.sibling = Ie),
            (xe = Ie)));
      return (
        e &&
          se.forEach(function (jl) {
            return t(k, jl);
          }),
        Te && Hl(k, de),
        ae
      );
    }
    function fe(k, T, D, Z) {
      if (D == null) throw Error(o(151));
      for (
        var ae = null, xe = null, se = T, de = (T = 0), Ie = null, Ae = D.next();
        se !== null && !Ae.done;
        de++, Ae = D.next()
      ) {
        se.index > de ? ((Ie = se), (se = null)) : (Ie = se.sibling);
        var jl = L(k, se, Ae.value, Z);
        if (jl === null) {
          se === null && (se = Ie);
          break;
        }
        (e && se && jl.alternate === null && t(k, se),
          (T = i(jl, T, de)),
          xe === null ? (ae = jl) : (xe.sibling = jl),
          (xe = jl),
          (se = Ie));
      }
      if (Ae.done) return (l(k, se), Te && Hl(k, de), ae);
      if (se === null) {
        for (; !Ae.done; de++, Ae = D.next())
          ((Ae = X(k, Ae.value, Z)),
            Ae !== null &&
              ((T = i(Ae, T, de)), xe === null ? (ae = Ae) : (xe.sibling = Ae), (xe = Ae)));
        return (Te && Hl(k, de), ae);
      }
      for (se = a(se); !Ae.done; de++, Ae = D.next())
        ((Ae = U(se, k, de, Ae.value, Z)),
          Ae !== null &&
            (e && Ae.alternate !== null && se.delete(Ae.key === null ? de : Ae.key),
            (T = i(Ae, T, de)),
            xe === null ? (ae = Ae) : (xe.sibling = Ae),
            (xe = Ae)));
      return (
        e &&
          se.forEach(function (tb) {
            return t(k, tb);
          }),
        Te && Hl(k, de),
        ae
      );
    }
    function Oe(k, T, D, Z) {
      if (
        (typeof D == 'object' &&
          D !== null &&
          D.type === E &&
          D.key === null &&
          (D = D.props.children),
        typeof D == 'object' && D !== null)
      ) {
        switch (D.$$typeof) {
          case j:
            e: {
              for (var ae = D.key; T !== null; ) {
                if (T.key === ae) {
                  if (((ae = D.type), ae === E)) {
                    if (T.tag === 7) {
                      (l(k, T.sibling), (Z = n(T, D.props.children)), (Z.return = k), (k = Z));
                      break e;
                    }
                  } else if (
                    T.elementType === ae ||
                    (typeof ae == 'object' &&
                      ae !== null &&
                      ae.$$typeof === he &&
                      Gc(ae) === T.type)
                  ) {
                    (l(k, T.sibling), (Z = n(T, D.props)), mn(Z, D), (Z.return = k), (k = Z));
                    break e;
                  }
                  l(k, T);
                  break;
                } else t(k, T);
                T = T.sibling;
              }
              D.type === E ?
                ((Z = Ul(D.props.children, k.mode, Z, D.key)), (Z.return = k), (k = Z))
              : ((Z = si(D.type, D.key, D.props, null, k.mode, Z)),
                mn(Z, D),
                (Z.return = k),
                (k = Z));
            }
            return u(k);
          case B:
            e: {
              for (ae = D.key; T !== null; ) {
                if (T.key === ae)
                  if (
                    T.tag === 4 &&
                    T.stateNode.containerInfo === D.containerInfo &&
                    T.stateNode.implementation === D.implementation
                  ) {
                    (l(k, T.sibling), (Z = n(T, D.children || [])), (Z.return = k), (k = Z));
                    break e;
                  } else {
                    l(k, T);
                    break;
                  }
                else t(k, T);
                T = T.sibling;
              }
              ((Z = Xr(D, k.mode, Z)), (Z.return = k), (k = Z));
            }
            return u(k);
          case he:
            return ((ae = D._init), (D = ae(D._payload)), Oe(k, T, D, Z));
        }
        if (ee(D)) return ge(k, T, D, Z);
        if (ne(D)) {
          if (((ae = ne(D)), typeof ae != 'function')) throw Error(o(150));
          return ((D = ae.call(D)), fe(k, T, D, Z));
        }
        if (typeof D.then == 'function') return Oe(k, T, Ai(D), Z);
        if (D.$$typeof === R) return Oe(k, T, di(k, D), Z);
        Ti(k, D);
      }
      return (typeof D == 'string' && D !== '') || typeof D == 'number' || typeof D == 'bigint' ?
          ((D = '' + D),
          T !== null && T.tag === 6 ?
            (l(k, T.sibling), (Z = n(T, D)), (Z.return = k), (k = Z))
          : (l(k, T), (Z = Zr(D, k.mode, Z)), (Z.return = k), (k = Z)),
          u(k))
        : l(k, T);
    }
    return function (k, T, D, Z) {
      try {
        yn = 0;
        var ae = Oe(k, T, D, Z);
        return ((Ea = null), ae);
      } catch (se) {
        if (se === sn || se === hi) throw se;
        var xe = pt(29, se, null, k.mode);
        return ((xe.lanes = Z), (xe.return = k), xe);
      } finally {
      }
    };
  }
  var Na = Yc(!0),
    Zc = Yc(!1),
    Ot = q(null),
    Bt = null;
  function gl(e) {
    var t = e.alternate;
    ($(Fe, Fe.current & 1),
      $(Ot, e),
      Bt === null && (t === null || ma.current !== null || t.memoizedState !== null) && (Bt = e));
  }
  function Xc(e) {
    if (e.tag === 22) {
      if (($(Fe, Fe.current), $(Ot, e), Bt === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (Bt = e);
      }
    } else hl();
  }
  function hl() {
    ($(Fe, Fe.current), $(Ot, Ot.current));
  }
  function It(e) {
    (I(Ot), Bt === e && (Bt = null), I(Fe));
  }
  var Fe = q(0);
  function _i(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || l.data === '$?' || ds(l))) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  function Nu(e, t, l, a) {
    ((t = e.memoizedState),
      (l = l(a, t)),
      (l = l == null ? t : A({}, t, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l));
  }
  var wu = {
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals;
      var a = vt(),
        n = cl(a);
      ((n.payload = t),
        l != null && (n.callback = l),
        (t = fl(e, n, a)),
        t !== null && (xt(t, e, a), cn(t, e, a)));
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals;
      var a = vt(),
        n = cl(a);
      ((n.tag = 1),
        (n.payload = t),
        l != null && (n.callback = l),
        (t = fl(e, n, a)),
        t !== null && (xt(t, e, a), cn(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var l = vt(),
        a = cl(l);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = fl(e, a, l)),
        t !== null && (xt(t, e, l), cn(t, e, l)));
    },
  };
  function Vc(e, t, l, a, n, i, u) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function' ? e.shouldComponentUpdate(a, i, u)
      : t.prototype && t.prototype.isPureReactComponent ? !Pa(l, a) || !Pa(n, i)
      : !0
    );
  }
  function Qc(e, t, l, a) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(l, a),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(l, a),
      t.state !== e && wu.enqueueReplaceState(t, t.state, null));
  }
  function Ql(e, t) {
    var l = t;
    if ('ref' in t) {
      l = {};
      for (var a in t) a !== 'ref' && (l[a] = t[a]);
    }
    if ((e = e.defaultProps)) {
      l === t && (l = A({}, l));
      for (var n in e) l[n] === void 0 && (l[n] = e[n]);
    }
    return l;
  }
  var ji =
    typeof reportError == 'function' ? reportError : (
      function (e) {
        if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
          var t = new window.ErrorEvent('error', {
            bubbles: !0,
            cancelable: !0,
            message:
              typeof e == 'object' && e !== null && typeof e.message == 'string' ?
                String(e.message)
              : String(e),
            error: e,
          });
          if (!window.dispatchEvent(t)) return;
        } else if (typeof process == 'object' && typeof process.emit == 'function') {
          process.emit('uncaughtException', e);
          return;
        }
        console.error(e);
      }
    );
  function Fc(e) {
    ji(e);
  }
  function Kc(e) {
    console.error(e);
  }
  function $c(e) {
    ji(e);
  }
  function Ci(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Jc(e, t, l) {
    try {
      var a = e.onCaughtError;
      a(l.value, { componentStack: l.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function Au(e, t, l) {
    return (
      (l = cl(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Ci(e, t);
      }),
      l
    );
  }
  function Ic(e) {
    return ((e = cl(e)), (e.tag = 3), e);
  }
  function Wc(e, t, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == 'function') {
      var i = a.value;
      ((e.payload = function () {
        return n(i);
      }),
        (e.callback = function () {
          Jc(t, l, a);
        }));
    }
    var u = l.stateNode;
    u !== null &&
      typeof u.componentDidCatch == 'function' &&
      (e.callback = function () {
        (Jc(t, l, a),
          typeof n != 'function' && (xl === null ? (xl = new Set([this])) : xl.add(this)));
        var d = a.stack;
        this.componentDidCatch(a.value, { componentStack: d !== null ? d : '' });
      });
  }
  function tp(e, t, l, a, n) {
    if (((l.flags |= 32768), a !== null && typeof a == 'object' && typeof a.then == 'function')) {
      if (((t = l.alternate), t !== null && nn(t, l, n, !0), (l = Ot.current), l !== null)) {
        switch (l.tag) {
          case 13:
            return (
              Bt === null ? $u() : l.alternate === null && qe === 0 && (qe = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === eu ?
                (l.flags |= 16384)
              : ((t = l.updateQueue),
                t === null ? (l.updateQueue = new Set([a])) : t.add(a),
                Iu(e, a, n)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === eu ?
                (l.flags |= 16384)
              : ((t = l.updateQueue),
                t === null ?
                  ((t = { transitions: null, markerInstances: null, retryQueue: new Set([a]) }),
                  (l.updateQueue = t))
                : ((l = t.retryQueue), l === null ? (t.retryQueue = new Set([a])) : l.add(a)),
                Iu(e, a, n)),
              !1
            );
        }
        throw Error(o(435, l.tag));
      }
      return (Iu(e, a, n), $u(), !1);
    }
    if (Te)
      return (
        (t = Ot.current),
        t !== null ?
          ((t.flags & 65536) === 0 && (t.flags |= 256),
          (t.flags |= 65536),
          (t.lanes = n),
          a !== Fr && ((e = Error(o(422), { cause: a })), an(_t(e, l))))
        : (a !== Fr && ((t = Error(o(423), { cause: a })), an(_t(t, l))),
          (e = e.current.alternate),
          (e.flags |= 65536),
          (n &= -n),
          (e.lanes |= n),
          (a = _t(a, l)),
          (n = Au(e.stateNode, a, n)),
          au(e, n),
          qe !== 4 && (qe = 2)),
        !1
      );
    var i = Error(o(520), { cause: a });
    if (((i = _t(i, l)), An === null ? (An = [i]) : An.push(i), qe !== 4 && (qe = 2), t === null))
      return !0;
    ((a = _t(a, l)), (l = t));
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (e = n & -n),
            (l.lanes |= e),
            (e = Au(l.stateNode, a, e)),
            au(l, e),
            !1
          );
        case 1:
          if (
            ((t = l.type),
            (i = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == 'function' ||
                (i !== null &&
                  typeof i.componentDidCatch == 'function' &&
                  (xl === null || !xl.has(i)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = Ic(n)),
              Wc(n, e, l, a),
              au(l, n),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Pc = Error(o(461)),
    $e = !1;
  function We(e, t, l, a) {
    t.child = e === null ? Zc(t, null, l, a) : Na(t, e.child, l, a);
  }
  function ef(e, t, l, a, n) {
    l = l.render;
    var i = t.ref;
    if ('ref' in a) {
      var u = {};
      for (var d in a) d !== 'ref' && (u[d] = a[d]);
    } else u = a;
    return (
      Zl(t),
      (a = su(e, t, l, u, i, n)),
      (d = ou()),
      e !== null && !$e ?
        (cu(e, t, n), Wt(e, t, n))
      : (Te && d && Vr(t), (t.flags |= 1), We(e, t, a, n), t.child)
    );
  }
  function tf(e, t, l, a, n) {
    if (e === null) {
      var i = l.type;
      return typeof i == 'function' && !Yr(i) && i.defaultProps === void 0 && l.compare === null ?
          ((t.tag = 15), (t.type = i), lf(e, t, i, a, n))
        : ((e = si(l.type, null, a, t, t.mode, n)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((i = e.child), !Du(e, n))) {
      var u = i.memoizedProps;
      if (((l = l.compare), (l = l !== null ? l : Pa), l(u, a) && e.ref === t.ref))
        return Wt(e, t, n);
    }
    return ((t.flags |= 1), (e = Vt(i, a)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function lf(e, t, l, a, n) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Pa(i, a) && e.ref === t.ref)
        if ((($e = !1), (t.pendingProps = a = i), Du(e, n))) (e.flags & 131072) !== 0 && ($e = !0);
        else return ((t.lanes = e.lanes), Wt(e, t, n));
    }
    return Tu(e, t, l, a, n);
  }
  function af(e, t, l) {
    var a = t.pendingProps,
      n = a.children,
      i = e !== null ? e.memoizedState : null;
    if (a.mode === 'hidden') {
      if ((t.flags & 128) !== 0) {
        if (((a = i !== null ? i.baseLanes | l : l), e !== null)) {
          for (n = t.child = e.child, i = 0; n !== null; )
            ((i = i | n.lanes | n.childLanes), (n = n.sibling));
          t.childLanes = i & ~a;
        } else ((t.childLanes = 0), (t.child = null));
        return nf(e, t, a, l);
      }
      if ((l & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && gi(t, i !== null ? i.cachePool : null),
          i !== null ? lc(t, i) : iu(),
          Xc(t));
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          nf(e, t, i !== null ? i.baseLanes | l : l, l)
        );
    } else
      i !== null ?
        (gi(t, i.cachePool), lc(t, i), hl(), (t.memoizedState = null))
      : (e !== null && gi(t, null), iu(), hl());
    return (We(e, t, n, l), t.child);
  }
  function nf(e, t, l, a) {
    var n = Pr();
    return (
      (n = n === null ? null : { parent: Qe._currentValue, pool: n }),
      (t.memoizedState = { baseLanes: l, cachePool: n }),
      e !== null && gi(t, null),
      iu(),
      Xc(t),
      e !== null && nn(e, t, a, !0),
      null
    );
  }
  function ki(e, t) {
    var l = t.ref;
    if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != 'function' && typeof l != 'object') throw Error(o(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function Tu(e, t, l, a, n) {
    return (
      Zl(t),
      (l = su(e, t, l, a, void 0, n)),
      (a = ou()),
      e !== null && !$e ?
        (cu(e, t, n), Wt(e, t, n))
      : (Te && a && Vr(t), (t.flags |= 1), We(e, t, l, n), t.child)
    );
  }
  function rf(e, t, l, a, n, i) {
    return (
      Zl(t),
      (t.updateQueue = null),
      (l = nc(t, a, l, n)),
      ac(e),
      (a = ou()),
      e !== null && !$e ?
        (cu(e, t, i), Wt(e, t, i))
      : (Te && a && Vr(t), (t.flags |= 1), We(e, t, l, i), t.child)
    );
  }
  function uf(e, t, l, a, n) {
    if ((Zl(t), t.stateNode === null)) {
      var i = ga,
        u = l.contextType;
      (typeof u == 'object' && u !== null && (i = lt(u)),
        (i = new l(a, i)),
        (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
        (i.updater = wu),
        (t.stateNode = i),
        (i._reactInternals = t),
        (i = t.stateNode),
        (i.props = a),
        (i.state = t.memoizedState),
        (i.refs = {}),
        tu(t),
        (u = l.contextType),
        (i.context = typeof u == 'object' && u !== null ? lt(u) : ga),
        (i.state = t.memoizedState),
        (u = l.getDerivedStateFromProps),
        typeof u == 'function' && (Nu(t, l, u, a), (i.state = t.memoizedState)),
        typeof l.getDerivedStateFromProps == 'function' ||
          typeof i.getSnapshotBeforeUpdate == 'function' ||
          (typeof i.UNSAFE_componentWillMount != 'function' &&
            typeof i.componentWillMount != 'function') ||
          ((u = i.state),
          typeof i.componentWillMount == 'function' && i.componentWillMount(),
          typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount(),
          u !== i.state && wu.enqueueReplaceState(i, i.state, null),
          dn(t, a, i, n),
          fn(),
          (i.state = t.memoizedState)),
        typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
        (a = !0));
    } else if (e === null) {
      i = t.stateNode;
      var d = t.memoizedProps,
        m = Ql(l, d);
      i.props = m;
      var z = i.context,
        G = l.contextType;
      ((u = ga), typeof G == 'object' && G !== null && (u = lt(G)));
      var X = l.getDerivedStateFromProps;
      ((G = typeof X == 'function' || typeof i.getSnapshotBeforeUpdate == 'function'),
        (d = t.pendingProps !== d),
        G ||
          (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof i.componentWillReceiveProps != 'function') ||
          ((d || z !== u) && Qc(t, i, a, u)),
        (ol = !1));
      var L = t.memoizedState;
      ((i.state = L),
        dn(t, a, i, n),
        fn(),
        (z = t.memoizedState),
        d || L !== z || ol ?
          (typeof X == 'function' && (Nu(t, l, X, a), (z = t.memoizedState)),
          (m = ol || Vc(t, l, m, a, L, z, u)) ?
            (G ||
              (typeof i.UNSAFE_componentWillMount != 'function' &&
                typeof i.componentWillMount != 'function') ||
              (typeof i.componentWillMount == 'function' && i.componentWillMount(),
              typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount()),
            typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
          : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
            (t.memoizedProps = a),
            (t.memoizedState = z)),
          (i.props = a),
          (i.state = z),
          (i.context = u),
          (a = m))
        : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308), (a = !1)));
    } else {
      ((i = t.stateNode),
        lu(e, t),
        (u = t.memoizedProps),
        (G = Ql(l, u)),
        (i.props = G),
        (X = t.pendingProps),
        (L = i.context),
        (z = l.contextType),
        (m = ga),
        typeof z == 'object' && z !== null && (m = lt(z)),
        (d = l.getDerivedStateFromProps),
        (z = typeof d == 'function' || typeof i.getSnapshotBeforeUpdate == 'function') ||
          (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof i.componentWillReceiveProps != 'function') ||
          ((u !== X || L !== m) && Qc(t, i, a, m)),
        (ol = !1),
        (L = t.memoizedState),
        (i.state = L),
        dn(t, a, i, n),
        fn());
      var U = t.memoizedState;
      u !== X || L !== U || ol || (e !== null && e.dependencies !== null && fi(e.dependencies)) ?
        (typeof d == 'function' && (Nu(t, l, d, a), (U = t.memoizedState)),
        (
          (G =
            ol ||
            Vc(t, l, G, a, L, U, m) ||
            (e !== null && e.dependencies !== null && fi(e.dependencies)))
        ) ?
          (z ||
            (typeof i.UNSAFE_componentWillUpdate != 'function' &&
              typeof i.componentWillUpdate != 'function') ||
            (typeof i.componentWillUpdate == 'function' && i.componentWillUpdate(a, U, m),
            typeof i.UNSAFE_componentWillUpdate == 'function' &&
              i.UNSAFE_componentWillUpdate(a, U, m)),
          typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
        : (typeof i.componentDidUpdate != 'function' ||
            (u === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != 'function' ||
            (u === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 1024),
          (t.memoizedProps = a),
          (t.memoizedState = U)),
        (i.props = a),
        (i.state = U),
        (i.context = m),
        (a = G))
      : (typeof i.componentDidUpdate != 'function' ||
          (u === e.memoizedProps && L === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != 'function' ||
          (u === e.memoizedProps && L === e.memoizedState) ||
          (t.flags |= 1024),
        (a = !1));
    }
    return (
      (i = a),
      ki(e, t),
      (a = (t.flags & 128) !== 0),
      i || a ?
        ((i = t.stateNode),
        (l = a && typeof l.getDerivedStateFromError != 'function' ? null : i.render()),
        (t.flags |= 1),
        e !== null && a ?
          ((t.child = Na(t, e.child, null, n)), (t.child = Na(t, null, l, n)))
        : We(e, t, l, n),
        (t.memoizedState = i.state),
        (e = t.child))
      : (e = Wt(e, t, n)),
      e
    );
  }
  function sf(e, t, l, a) {
    return (ln(), (t.flags |= 256), We(e, t, l, a), t.child);
  }
  var _u = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function ju(e) {
    return { baseLanes: e, cachePool: Ko() };
  }
  function Cu(e, t, l) {
    return ((e = e !== null ? e.childLanes & ~l : 0), t && (e |= Rt), e);
  }
  function of(e, t, l) {
    var a = t.pendingProps,
      n = !1,
      i = (t.flags & 128) !== 0,
      u;
    if (
      ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (Fe.current & 2) !== 0),
      u && ((n = !0), (t.flags &= -129)),
      (u = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Te) {
        if ((n ? gl(t) : hl(), Te)) {
          var d = He,
            m;
          if ((m = d)) {
            e: {
              for (m = d, d = Ut; m.nodeType !== 8; ) {
                if (!d) {
                  d = null;
                  break e;
                }
                if (((m = Lt(m.nextSibling)), m === null)) {
                  d = null;
                  break e;
                }
              }
              d = m;
            }
            d !== null ?
              ((t.memoizedState = {
                dehydrated: d,
                treeContext: Bl !== null ? { id: Qt, overflow: Ft } : null,
                retryLane: 536870912,
                hydrationErrors: null,
              }),
              (m = pt(18, null, null, 0)),
              (m.stateNode = d),
              (m.return = t),
              (t.child = m),
              (it = t),
              (He = null),
              (m = !0))
            : (m = !1);
          }
          m || Gl(t);
        }
        if (((d = t.memoizedState), d !== null && ((d = d.dehydrated), d !== null)))
          return (ds(d) ? (t.lanes = 32) : (t.lanes = 536870912), null);
        It(t);
      }
      return (
        (d = a.children),
        (a = a.fallback),
        n ?
          (hl(),
          (n = t.mode),
          (d = Oi({ mode: 'hidden', children: d }, n)),
          (a = Ul(a, n, l, null)),
          (d.return = t),
          (a.return = t),
          (d.sibling = a),
          (t.child = d),
          (n = t.child),
          (n.memoizedState = ju(l)),
          (n.childLanes = Cu(e, u, l)),
          (t.memoizedState = _u),
          a)
        : (gl(t), ku(t, d))
      );
    }
    if (((m = e.memoizedState), m !== null && ((d = m.dehydrated), d !== null))) {
      if (i)
        t.flags & 256 ? (gl(t), (t.flags &= -257), (t = Ou(e, t, l)))
        : t.memoizedState !== null ? (hl(), (t.child = e.child), (t.flags |= 128), (t = null))
        : (hl(),
          (n = a.fallback),
          (d = t.mode),
          (a = Oi({ mode: 'visible', children: a.children }, d)),
          (n = Ul(n, d, l, null)),
          (n.flags |= 2),
          (a.return = t),
          (n.return = t),
          (a.sibling = n),
          (t.child = a),
          Na(t, e.child, null, l),
          (a = t.child),
          (a.memoizedState = ju(l)),
          (a.childLanes = Cu(e, u, l)),
          (t.memoizedState = _u),
          (t = n));
      else if ((gl(t), ds(d))) {
        if (((u = d.nextSibling && d.nextSibling.dataset), u)) var z = u.dgst;
        ((u = z),
          (a = Error(o(419))),
          (a.stack = ''),
          (a.digest = u),
          an({ value: a, source: null, stack: null }),
          (t = Ou(e, t, l)));
      } else if (($e || nn(e, t, l, !1), (u = (l & e.childLanes) !== 0), $e || u)) {
        if (
          ((u = De),
          u !== null &&
            ((a = l & -l),
            (a = (a & 42) !== 0 ? 1 : gr(a)),
            (a = (a & (u.suspendedLanes | l)) !== 0 ? 0 : a),
            a !== 0 && a !== m.retryLane))
        )
          throw ((m.retryLane = a), da(e, a), xt(u, e, a), Pc);
        (d.data === '$?' || $u(), (t = Ou(e, t, l)));
      } else
        d.data === '$?' ?
          ((t.flags |= 192), (t.child = e.child), (t = null))
        : ((e = m.treeContext),
          (He = Lt(d.nextSibling)),
          (it = t),
          (Te = !0),
          (ql = null),
          (Ut = !1),
          e !== null &&
            ((Ct[kt++] = Qt),
            (Ct[kt++] = Ft),
            (Ct[kt++] = Bl),
            (Qt = e.id),
            (Ft = e.overflow),
            (Bl = t)),
          (t = ku(t, a.children)),
          (t.flags |= 4096));
      return t;
    }
    return n ?
        (hl(),
        (n = a.fallback),
        (d = t.mode),
        (m = e.child),
        (z = m.sibling),
        (a = Vt(m, { mode: 'hidden', children: a.children })),
        (a.subtreeFlags = m.subtreeFlags & 65011712),
        z !== null ? (n = Vt(z, n)) : ((n = Ul(n, d, l, null)), (n.flags |= 2)),
        (n.return = t),
        (a.return = t),
        (a.sibling = n),
        (t.child = a),
        (a = n),
        (n = t.child),
        (d = e.child.memoizedState),
        d === null ?
          (d = ju(l))
        : ((m = d.cachePool),
          m !== null ?
            ((z = Qe._currentValue), (m = m.parent !== z ? { parent: z, pool: z } : m))
          : (m = Ko()),
          (d = { baseLanes: d.baseLanes | l, cachePool: m })),
        (n.memoizedState = d),
        (n.childLanes = Cu(e, u, l)),
        (t.memoizedState = _u),
        a)
      : (gl(t),
        (l = e.child),
        (e = l.sibling),
        (l = Vt(l, { mode: 'visible', children: a.children })),
        (l.return = t),
        (l.sibling = null),
        e !== null &&
          ((u = t.deletions), u === null ? ((t.deletions = [e]), (t.flags |= 16)) : u.push(e)),
        (t.child = l),
        (t.memoizedState = null),
        l);
  }
  function ku(e, t) {
    return ((t = Oi({ mode: 'visible', children: t }, e.mode)), (t.return = e), (e.child = t));
  }
  function Oi(e, t) {
    return (
      (e = pt(22, e, null, t)),
      (e.lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    );
  }
  function Ou(e, t, l) {
    return (
      Na(t, e.child, null, l),
      (e = ku(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function cf(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    (a !== null && (a.lanes |= t), $r(e.return, t, l));
  }
  function Ru(e, t, l, a, n) {
    var i = e.memoizedState;
    i === null ?
      (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: a,
        tail: l,
        tailMode: n,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = a),
      (i.tail = l),
      (i.tailMode = n));
  }
  function ff(e, t, l) {
    var a = t.pendingProps,
      n = a.revealOrder,
      i = a.tail;
    if ((We(e, t, a.children, l), (a = Fe.current), (a & 2) !== 0))
      ((a = (a & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && cf(e, l, t);
          else if (e.tag === 19) cf(e, l, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      a &= 1;
    }
    switch (($(Fe, a), n)) {
      case 'forwards':
        for (l = t.child, n = null; l !== null; )
          ((e = l.alternate), e !== null && _i(e) === null && (n = l), (l = l.sibling));
        ((l = n),
          l === null ? ((n = t.child), (t.child = null)) : ((n = l.sibling), (l.sibling = null)),
          Ru(t, !1, n, l, i));
        break;
      case 'backwards':
        for (l = null, n = t.child, t.child = null; n !== null; ) {
          if (((e = n.alternate), e !== null && _i(e) === null)) {
            t.child = n;
            break;
          }
          ((e = n.sibling), (n.sibling = l), (l = n), (n = e));
        }
        Ru(t, !0, l, null, i);
        break;
      case 'together':
        Ru(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Wt(e, t, l) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (vl |= t.lanes), (l & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((nn(e, t, l, !1), (l & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, l = Vt(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        ((e = e.sibling), (l = l.sibling = Vt(e, e.pendingProps)), (l.return = t));
      l.sibling = null;
    }
    return t.child;
  }
  function Du(e, t) {
    return (e.lanes & t) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && fi(e)));
  }
  function lp(e, t, l) {
    switch (t.tag) {
      case 3:
        (pe(t, t.stateNode.containerInfo), sl(t, Qe, e.memoizedState.cache), ln());
        break;
      case 27:
      case 5:
        Ha(t);
        break;
      case 4:
        pe(t, t.stateNode.containerInfo);
        break;
      case 10:
        sl(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return (
            a.dehydrated !== null ? (gl(t), (t.flags |= 128), null)
            : (l & t.child.childLanes) !== 0 ? of(e, t, l)
            : (gl(t), (e = Wt(e, t, l)), e !== null ? e.sibling : null)
          );
        gl(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (
          ((a = (l & t.childLanes) !== 0),
          a || (nn(e, t, l, !1), (a = (l & t.childLanes) !== 0)),
          n)
        ) {
          if (a) return ff(e, t, l);
          t.flags |= 128;
        }
        if (
          ((n = t.memoizedState),
          n !== null && ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          $(Fe, Fe.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), af(e, t, l));
      case 24:
        sl(t, Qe, e.memoizedState.cache);
    }
    return Wt(e, t, l);
  }
  function df(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) $e = !0;
      else {
        if (!Du(e, l) && (t.flags & 128) === 0) return (($e = !1), lp(e, t, l));
        $e = (e.flags & 131072) !== 0;
      }
    else (($e = !1), Te && (t.flags & 1048576) !== 0 && Go(t, ci, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var a = t.elementType,
            n = a._init;
          if (((a = n(a._payload)), (t.type = a), typeof a == 'function'))
            Yr(a) ?
              ((e = Ql(a, e)), (t.tag = 1), (t = uf(null, t, a, e, l)))
            : ((t.tag = 0), (t = Tu(null, t, a, e, l)));
          else {
            if (a != null) {
              if (((n = a.$$typeof), n === V)) {
                ((t.tag = 11), (t = ef(null, t, a, e, l)));
                break e;
              } else if (n === re) {
                ((t.tag = 14), (t = tf(null, t, a, e, l)));
                break e;
              }
            }
            throw ((t = M(a) || a), Error(o(306, t, '')));
          }
        }
        return t;
      case 0:
        return Tu(e, t, t.type, t.pendingProps, l);
      case 1:
        return ((a = t.type), (n = Ql(a, t.pendingProps)), uf(e, t, a, n, l));
      case 3:
        e: {
          if ((pe(t, t.stateNode.containerInfo), e === null)) throw Error(o(387));
          a = t.pendingProps;
          var i = t.memoizedState;
          ((n = i.element), lu(e, t), dn(t, a, null, l));
          var u = t.memoizedState;
          if (
            ((a = u.cache),
            sl(t, Qe, a),
            a !== i.cache && Jr(t, [Qe], l, !0),
            fn(),
            (a = u.element),
            i.isDehydrated)
          )
            if (
              ((i = { element: a, isDehydrated: !1, cache: u.cache }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              t = sf(e, t, a, l);
              break e;
            } else if (a !== n) {
              ((n = _t(Error(o(424)), t)), an(n), (t = sf(e, t, a, l)));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === 'HTML' ? e.ownerDocument.body : e;
              }
              for (
                He = Lt(e.firstChild),
                  it = t,
                  Te = !0,
                  ql = null,
                  Ut = !0,
                  l = Zc(t, null, a, l),
                  t.child = l;
                l;

              )
                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
            }
          else {
            if ((ln(), a === n)) {
              t = Wt(e, t, l);
              break e;
            }
            We(e, t, a, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          ki(e, t),
          e === null ?
            (l = bd(t.type, null, t.pendingProps, null)) ?
              (t.memoizedState = l)
            : Te ||
              ((l = t.type),
              (e = t.pendingProps),
              (a = Vi(J.current).createElement(l)),
              (a[tt] = t),
              (a[rt] = e),
              et(a, l, e),
              Ke(a),
              (t.stateNode = a))
          : (t.memoizedState = bd(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          Ha(t),
          e === null &&
            Te &&
            ((a = t.stateNode = gd(t.type, t.pendingProps, J.current)),
            (it = t),
            (Ut = !0),
            (n = He),
            Nl(t.type) ? ((gs = n), (He = Lt(a.firstChild))) : (He = n)),
          We(e, t, t.pendingProps.children, l),
          ki(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Te &&
            ((n = a = He) &&
              ((a = kp(a, t.type, t.pendingProps, Ut)),
              a !== null ?
                ((t.stateNode = a), (it = t), (He = Lt(a.firstChild)), (Ut = !1), (n = !0))
              : (n = !1)),
            n || Gl(t)),
          Ha(t),
          (n = t.type),
          (i = t.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (a = i.children),
          os(n, i) ? (a = null) : u !== null && os(n, u) && (t.flags |= 32),
          t.memoizedState !== null && ((n = su(e, t, Kh, null, null, l)), (zn._currentValue = n)),
          ki(e, t),
          We(e, t, a, l),
          t.child
        );
      case 6:
        return (
          e === null &&
            Te &&
            ((e = l = He) &&
              ((l = Op(l, t.pendingProps, Ut)),
              l !== null ? ((t.stateNode = l), (it = t), (He = null), (e = !0)) : (e = !1)),
            e || Gl(t)),
          null
        );
      case 13:
        return of(e, t, l);
      case 4:
        return (
          pe(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = Na(t, null, a, l)) : We(e, t, a, l),
          t.child
        );
      case 11:
        return ef(e, t, t.type, t.pendingProps, l);
      case 7:
        return (We(e, t, t.pendingProps, l), t.child);
      case 8:
        return (We(e, t, t.pendingProps.children, l), t.child);
      case 12:
        return (We(e, t, t.pendingProps.children, l), t.child);
      case 10:
        return ((a = t.pendingProps), sl(t, t.type, a.value), We(e, t, a.children, l), t.child);
      case 9:
        return (
          (n = t.type._context),
          (a = t.pendingProps.children),
          Zl(t),
          (n = lt(n)),
          (a = a(n)),
          (t.flags |= 1),
          We(e, t, a, l),
          t.child
        );
      case 14:
        return tf(e, t, t.type, t.pendingProps, l);
      case 15:
        return lf(e, t, t.type, t.pendingProps, l);
      case 19:
        return ff(e, t, l);
      case 31:
        return (
          (a = t.pendingProps),
          (l = t.mode),
          (a = { mode: a.mode, children: a.children }),
          e === null ?
            ((l = Oi(a, l)), (l.ref = t.ref), (t.child = l), (l.return = t), (t = l))
          : ((l = Vt(e.child, a)), (l.ref = t.ref), (t.child = l), (l.return = t), (t = l)),
          t
        );
      case 22:
        return af(e, t, l);
      case 24:
        return (
          Zl(t),
          (a = lt(Qe)),
          e === null ?
            ((n = Pr()),
            n === null &&
              ((n = De),
              (i = Ir()),
              (n.pooledCache = i),
              i.refCount++,
              i !== null && (n.pooledCacheLanes |= l),
              (n = i)),
            (t.memoizedState = { parent: a, cache: n }),
            tu(t),
            sl(t, Qe, n))
          : ((e.lanes & l) !== 0 && (lu(e, t), dn(t, null, null, l), fn()),
            (n = e.memoizedState),
            (i = t.memoizedState),
            n.parent !== a ?
              ((n = { parent: a, cache: a }),
              (t.memoizedState = n),
              t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n),
              sl(t, Qe, a))
            : ((a = i.cache), sl(t, Qe, a), a !== n.cache && Jr(t, [Qe], l, !0))),
          We(e, t, t.pendingProps.children, l),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function Pt(e) {
    e.flags |= 4;
  }
  function gf(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Sd(t))) {
      if (
        ((t = Ot.current),
        t !== null &&
          ((we & 4194048) === we ?
            Bt !== null
          : ((we & 62914560) !== we && (we & 536870912) === 0) || t !== Bt))
      )
        throw ((on = eu), $o);
      e.flags |= 8192;
    }
  }
  function Ri(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 && ((t = e.tag !== 22 ? Zs() : 536870912), (e.lanes |= t), (_a |= t)));
  }
  function vn(e, t) {
    if (!Te)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var l = null; t !== null; ) (t.alternate !== null && (l = t), (t = t.sibling));
          l === null ? (e.tail = null) : (l.sibling = null);
          break;
        case 'collapsed':
          l = e.tail;
          for (var a = null; l !== null; ) (l.alternate !== null && (a = l), (l = l.sibling));
          a === null ?
            t || e.tail === null ?
              (e.tail = null)
            : (e.tail.sibling = null)
          : (a.sibling = null);
      }
  }
  function Be(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      a = 0;
    if (t)
      for (var n = e.child; n !== null; )
        ((l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = e),
          (n = n.sibling));
    else
      for (n = e.child; n !== null; )
        ((l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = e),
          (n = n.sibling));
    return ((e.subtreeFlags |= a), (e.childLanes = l), t);
  }
  function ap(e, t, l) {
    var a = t.pendingProps;
    switch ((Qr(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Be(t), null);
      case 1:
        return (Be(t), null);
      case 3:
        return (
          (l = t.stateNode),
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          $t(Qe),
          nt(),
          l.pendingContext && ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (tn(t) ?
              Pt(t)
            : e === null ||
              (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
              ((t.flags |= 1024), Xo())),
          Be(t),
          null
        );
      case 26:
        return (
          (l = t.memoizedState),
          e === null ? (Pt(t), l !== null ? (Be(t), gf(t, l)) : (Be(t), (t.flags &= -16777217)))
          : l ?
            l !== e.memoizedState ?
              (Pt(t), Be(t), gf(t, l))
            : (Be(t), (t.flags &= -16777217))
          : (e.memoizedProps !== a && Pt(t), Be(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        (Jl(t), (l = J.current));
        var n = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== a && Pt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(o(166));
            return (Be(t), null);
          }
          ((e = le.current), tn(t) ? Yo(t) : ((e = gd(n, a, l)), (t.stateNode = e), Pt(t)));
        }
        return (Be(t), null);
      case 5:
        if ((Jl(t), (l = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && Pt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(o(166));
            return (Be(t), null);
          }
          if (((e = le.current), tn(t))) Yo(t);
          else {
            switch (((n = Vi(J.current)), e)) {
              case 1:
                e = n.createElementNS('http://www.w3.org/2000/svg', l);
                break;
              case 2:
                e = n.createElementNS('http://www.w3.org/1998/Math/MathML', l);
                break;
              default:
                switch (l) {
                  case 'svg':
                    e = n.createElementNS('http://www.w3.org/2000/svg', l);
                    break;
                  case 'math':
                    e = n.createElementNS('http://www.w3.org/1998/Math/MathML', l);
                    break;
                  case 'script':
                    ((e = n.createElement('div')),
                      (e.innerHTML = '<script><\/script>'),
                      (e = e.removeChild(e.firstChild)));
                    break;
                  case 'select':
                    ((e =
                      typeof a.is == 'string' ?
                        n.createElement('select', { is: a.is })
                      : n.createElement('select')),
                      a.multiple ? (e.multiple = !0) : a.size && (e.size = a.size));
                    break;
                  default:
                    e =
                      typeof a.is == 'string' ?
                        n.createElement(l, { is: a.is })
                      : n.createElement(l);
                }
            }
            ((e[tt] = t), (e[rt] = a));
            e: for (n = t.child; n !== null; ) {
              if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
              else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                ((n.child.return = n), (n = n.child));
                continue;
              }
              if (n === t) break e;
              for (; n.sibling === null; ) {
                if (n.return === null || n.return === t) break e;
                n = n.return;
              }
              ((n.sibling.return = n.return), (n = n.sibling));
            }
            t.stateNode = e;
            e: switch ((et(e, l, a), l)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                e = !!a.autoFocus;
                break e;
              case 'img':
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && Pt(t);
          }
        }
        return (Be(t), (t.flags &= -16777217), null);
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && Pt(t);
        else {
          if (typeof a != 'string' && t.stateNode === null) throw Error(o(166));
          if (((e = J.current), tn(t))) {
            if (((e = t.stateNode), (l = t.memoizedProps), (a = null), (n = it), n !== null))
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            ((e[tt] = t),
              (e = !!(
                e.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                rd(e.nodeValue, l)
              )),
              e || Gl(t));
          } else ((e = Vi(e).createTextNode(a)), (e[tt] = t), (t.stateNode = e));
        }
        return (Be(t), null);
      case 13:
        if (
          ((a = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((n = tn(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!n) throw Error(o(318));
              if (((n = t.memoizedState), (n = n !== null ? n.dehydrated : null), !n))
                throw Error(o(317));
              n[tt] = t;
            } else (ln(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Be(t), (n = !1));
          } else
            ((n = Xo()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
              (n = !0));
          if (!n) return t.flags & 256 ? (It(t), t) : (It(t), null);
        }
        if ((It(t), (t.flags & 128) !== 0)) return ((t.lanes = l), t);
        if (((l = a !== null), (e = e !== null && e.memoizedState !== null), l)) {
          ((a = t.child),
            (n = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (n = a.alternate.memoizedState.cachePool.pool));
          var i = null;
          (a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (i = a.memoizedState.cachePool.pool),
            i !== n && (a.flags |= 2048));
        }
        return (l !== e && l && (t.child.flags |= 8192), Ri(t, t.updateQueue), Be(t), null);
      case 4:
        return (nt(), e === null && ns(t.stateNode.containerInfo), Be(t), null);
      case 10:
        return ($t(t.type), Be(t), null);
      case 19:
        if ((I(Fe), (n = t.memoizedState), n === null)) return (Be(t), null);
        if (((a = (t.flags & 128) !== 0), (i = n.rendering), i === null))
          if (a) vn(n, !1);
          else {
            if (qe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((i = _i(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      vn(n, !1),
                      e = i.updateQueue,
                      t.updateQueue = e,
                      Ri(t, e),
                      t.subtreeFlags = 0,
                      e = l,
                      l = t.child;
                    l !== null;

                  )
                    (qo(l, e), (l = l.sibling));
                  return ($(Fe, (Fe.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            n.tail !== null &&
              wt() > Mi &&
              ((t.flags |= 128), (a = !0), vn(n, !1), (t.lanes = 4194304));
          }
        else {
          if (!a)
            if (((e = _i(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (a = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Ri(t, e),
                vn(n, !0),
                n.tail === null && n.tailMode === 'hidden' && !i.alternate && !Te)
              )
                return (Be(t), null);
            } else
              2 * wt() - n.renderingStartTime > Mi &&
                l !== 536870912 &&
                ((t.flags |= 128), (a = !0), vn(n, !1), (t.lanes = 4194304));
          n.isBackwards ?
            ((i.sibling = t.child), (t.child = i))
          : ((e = n.last), e !== null ? (e.sibling = i) : (t.child = i), (n.last = i));
        }
        return n.tail !== null ?
            ((t = n.tail),
            (n.rendering = t),
            (n.tail = t.sibling),
            (n.renderingStartTime = wt()),
            (t.sibling = null),
            (e = Fe.current),
            $(Fe, a ? (e & 1) | 2 : e & 1),
            t)
          : (Be(t), null);
      case 22:
      case 23:
        return (
          It(t),
          ru(),
          (a = t.memoizedState !== null),
          e !== null ?
            (e.memoizedState !== null) !== a && (t.flags |= 8192)
          : a && (t.flags |= 8192),
          a ?
            (l & 536870912) !== 0 &&
            (t.flags & 128) === 0 &&
            (Be(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Be(t),
          (l = t.updateQueue),
          l !== null && Ri(t, l.retryQueue),
          (l = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== l && (t.flags |= 2048),
          e !== null && I(Xl),
          null
        );
      case 24:
        return (
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          $t(Qe),
          Be(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function np(e, t) {
    switch ((Qr(t), t.tag)) {
      case 1:
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 3:
        return (
          $t(Qe),
          nt(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return (Jl(t), null);
      case 13:
        if ((It(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(o(340));
          ln();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (I(Fe), null);
      case 4:
        return (nt(), null);
      case 10:
        return ($t(t.type), null);
      case 22:
      case 23:
        return (
          It(t),
          ru(),
          e !== null && I(Xl),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return ($t(Qe), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function hf(e, t) {
    switch ((Qr(t), t.tag)) {
      case 3:
        ($t(Qe), nt());
        break;
      case 26:
      case 27:
      case 5:
        Jl(t);
        break;
      case 4:
        nt();
        break;
      case 13:
        It(t);
        break;
      case 19:
        I(Fe);
        break;
      case 10:
        $t(t.type);
        break;
      case 22:
      case 23:
        (It(t), ru(), e !== null && I(Xl));
        break;
      case 24:
        $t(Qe);
    }
  }
  function xn(e, t) {
    try {
      var l = t.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & e) === e) {
            a = void 0;
            var i = l.create,
              u = l.inst;
            ((a = i()), (u.destroy = a));
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (d) {
      Re(t, t.return, d);
    }
  }
  function pl(e, t, l) {
    try {
      var a = t.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        a = i;
        do {
          if ((a.tag & e) === e) {
            var u = a.inst,
              d = u.destroy;
            if (d !== void 0) {
              ((u.destroy = void 0), (n = t));
              var m = l,
                z = d;
              try {
                z();
              } catch (G) {
                Re(n, m, G);
              }
            }
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (G) {
      Re(t, t.return, G);
    }
  }
  function pf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        tc(t, l);
      } catch (a) {
        Re(e, e.return, a);
      }
    }
  }
  function bf(e, t, l) {
    ((l.props = Ql(e.type, e.memoizedProps)), (l.state = e.memoizedState));
    try {
      l.componentWillUnmount();
    } catch (a) {
      Re(e, t, a);
    }
  }
  function Sn(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof l == 'function' ? (e.refCleanup = l(a)) : (l.current = a);
      }
    } catch (n) {
      Re(e, t, n);
    }
  }
  function Ht(e, t) {
    var l = e.ref,
      a = e.refCleanup;
    if (l !== null)
      if (typeof a == 'function')
        try {
          a();
        } catch (n) {
          Re(e, t, n);
        } finally {
          ((e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null));
        }
      else if (typeof l == 'function')
        try {
          l(null);
        } catch (n) {
          Re(e, t, n);
        }
      else l.current = null;
  }
  function yf(e) {
    var t = e.type,
      l = e.memoizedProps,
      a = e.stateNode;
    try {
      e: switch (t) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          l.autoFocus && a.focus();
          break e;
        case 'img':
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      Re(e, e.return, n);
    }
  }
  function zu(e, t, l) {
    try {
      var a = e.stateNode;
      (Ap(a, e.type, l, t), (a[rt] = t));
    } catch (n) {
      Re(e, e.return, n);
    }
  }
  function mf(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && Nl(e.type)) || e.tag === 4
    );
  }
  function Mu(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || mf(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if ((e.tag === 27 && Nl(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Lu(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      ((e = e.stateNode),
        t ?
          (l.nodeType === 9 ? l.body
          : l.nodeName === 'HTML' ? l.ownerDocument.body
          : l
          ).insertBefore(e, t)
        : ((t =
            l.nodeType === 9 ? l.body
            : l.nodeName === 'HTML' ? l.ownerDocument.body
            : l),
          t.appendChild(e),
          (l = l._reactRootContainer),
          l != null || t.onclick !== null || (t.onclick = Xi)));
    else if (
      a !== 4 &&
      (a === 27 && Nl(e.type) && ((l = e.stateNode), (t = null)), (e = e.child), e !== null)
    )
      for (Lu(e, t, l), e = e.sibling; e !== null; ) (Lu(e, t, l), (e = e.sibling));
  }
  function Di(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6) ((e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e));
    else if (a !== 4 && (a === 27 && Nl(e.type) && (l = e.stateNode), (e = e.child), e !== null))
      for (Di(e, t, l), e = e.sibling; e !== null; ) (Di(e, t, l), (e = e.sibling));
  }
  function vf(e) {
    var t = e.stateNode,
      l = e.memoizedProps;
    try {
      for (var a = e.type, n = t.attributes; n.length; ) t.removeAttributeNode(n[0]);
      (et(t, a, l), (t[tt] = e), (t[rt] = l));
    } catch (i) {
      Re(e, e.return, i);
    }
  }
  var el = !1,
    Ye = !1,
    Uu = !1,
    xf = typeof WeakSet == 'function' ? WeakSet : Set,
    Je = null;
  function ip(e, t) {
    if (((e = e.containerInfo), (us = Ii), (e = ko(e)), Mr(e))) {
      if ('selectionStart' in e) var l = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          l = ((l = e.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset,
              i = a.focusNode;
            a = a.focusOffset;
            try {
              (l.nodeType, i.nodeType);
            } catch {
              l = null;
              break e;
            }
            var u = 0,
              d = -1,
              m = -1,
              z = 0,
              G = 0,
              X = e,
              L = null;
            t: for (;;) {
              for (
                var U;
                X !== l || (n !== 0 && X.nodeType !== 3) || (d = u + n),
                  X !== i || (a !== 0 && X.nodeType !== 3) || (m = u + a),
                  X.nodeType === 3 && (u += X.nodeValue.length),
                  (U = X.firstChild) !== null;

              )
                ((L = X), (X = U));
              for (;;) {
                if (X === e) break t;
                if (
                  (L === l && ++z === n && (d = u),
                  L === i && ++G === a && (m = u),
                  (U = X.nextSibling) !== null)
                )
                  break;
                ((X = L), (L = X.parentNode));
              }
              X = U;
            }
            l = d === -1 || m === -1 ? null : { start: d, end: m };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (ss = { focusedElem: e, selectionRange: l }, Ii = !1, Je = t; Je !== null; )
      if (((t = Je), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null))
        ((e.return = t), (Je = e));
      else
        for (; Je !== null; ) {
          switch (((t = Je), (i = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && i !== null) {
                ((e = void 0),
                  (l = t),
                  (n = i.memoizedProps),
                  (i = i.memoizedState),
                  (a = l.stateNode));
                try {
                  var ge = Ql(l.type, n, l.elementType === l.type);
                  ((e = a.getSnapshotBeforeUpdate(ge, i)),
                    (a.__reactInternalSnapshotBeforeUpdate = e));
                } catch (fe) {
                  Re(l, l.return, fe);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)) fs(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      fs(e);
                      break;
                    default:
                      e.textContent = '';
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(o(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (Je = e));
            break;
          }
          Je = t.return;
        }
  }
  function Sf(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (bl(e, l), a & 4 && xn(5, l));
        break;
      case 1:
        if ((bl(e, l), a & 4))
          if (((e = l.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (u) {
              Re(l, l.return, u);
            }
          else {
            var n = Ql(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (u) {
              Re(l, l.return, u);
            }
          }
        (a & 64 && pf(l), a & 512 && Sn(l, l.return));
        break;
      case 3:
        if ((bl(e, l), a & 64 && ((e = l.updateQueue), e !== null))) {
          if (((t = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            tc(e, t);
          } catch (u) {
            Re(l, l.return, u);
          }
        }
        break;
      case 27:
        t === null && a & 4 && vf(l);
      case 26:
      case 5:
        (bl(e, l), t === null && a & 4 && yf(l), a & 512 && Sn(l, l.return));
        break;
      case 12:
        bl(e, l);
        break;
      case 13:
        (bl(e, l),
          a & 4 && wf(e, l),
          a & 64 &&
            ((e = l.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null && ((l = hp.bind(null, l)), Rp(e, l)))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || el), !a)) {
          ((t = (t !== null && t.memoizedState !== null) || Ye), (n = el));
          var i = Ye;
          ((el = a),
            (Ye = t) && !i ? yl(e, l, (l.subtreeFlags & 8772) !== 0) : bl(e, l),
            (el = n),
            (Ye = i));
        }
        break;
      case 30:
        break;
      default:
        bl(e, l);
    }
  }
  function Ef(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Ef(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && br(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var Le = null,
    ot = !1;
  function tl(e, t, l) {
    for (l = l.child; l !== null; ) (Nf(e, t, l), (l = l.sibling));
  }
  function Nf(e, t, l) {
    if (dt && typeof dt.onCommitFiberUnmount == 'function')
      try {
        dt.onCommitFiberUnmount(Ga, l);
      } catch {}
    switch (l.tag) {
      case 26:
        (Ye || Ht(l, t),
          tl(e, t, l),
          l.memoizedState ?
            l.memoizedState.count--
          : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)));
        break;
      case 27:
        Ye || Ht(l, t);
        var a = Le,
          n = ot;
        (Nl(l.type) && ((Le = l.stateNode), (ot = !1)),
          tl(e, t, l),
          kn(l.stateNode),
          (Le = a),
          (ot = n));
        break;
      case 5:
        Ye || Ht(l, t);
      case 6:
        if (((a = Le), (n = ot), (Le = null), tl(e, t, l), (Le = a), (ot = n), Le !== null))
          if (ot)
            try {
              (Le.nodeType === 9 ? Le.body
              : Le.nodeName === 'HTML' ? Le.ownerDocument.body
              : Le
              ).removeChild(l.stateNode);
            } catch (i) {
              Re(l, t, i);
            }
          else
            try {
              Le.removeChild(l.stateNode);
            } catch (i) {
              Re(l, t, i);
            }
        break;
      case 18:
        Le !== null &&
          (ot ?
            ((e = Le),
            fd(
              e.nodeType === 9 ? e.body
              : e.nodeName === 'HTML' ? e.ownerDocument.body
              : e,
              l.stateNode
            ),
            Bn(e))
          : fd(Le, l.stateNode));
        break;
      case 4:
        ((a = Le),
          (n = ot),
          (Le = l.stateNode.containerInfo),
          (ot = !0),
          tl(e, t, l),
          (Le = a),
          (ot = n));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Ye || pl(2, l, t), Ye || pl(4, l, t), tl(e, t, l));
        break;
      case 1:
        (Ye ||
          (Ht(l, t), (a = l.stateNode), typeof a.componentWillUnmount == 'function' && bf(l, t, a)),
          tl(e, t, l));
        break;
      case 21:
        tl(e, t, l);
        break;
      case 22:
        ((Ye = (a = Ye) || l.memoizedState !== null), tl(e, t, l), (Ye = a));
        break;
      default:
        tl(e, t, l);
    }
  }
  function wf(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Bn(e);
      } catch (l) {
        Re(t, t.return, l);
      }
  }
  function rp(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new xf()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new xf()),
          t
        );
      default:
        throw Error(o(435, e.tag));
    }
  }
  function Bu(e, t) {
    var l = rp(e);
    t.forEach(function (a) {
      var n = pp.bind(null, e, a);
      l.has(a) || (l.add(a), a.then(n, n));
    });
  }
  function bt(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          i = e,
          u = t,
          d = u;
        e: for (; d !== null; ) {
          switch (d.tag) {
            case 27:
              if (Nl(d.type)) {
                ((Le = d.stateNode), (ot = !1));
                break e;
              }
              break;
            case 5:
              ((Le = d.stateNode), (ot = !1));
              break e;
            case 3:
            case 4:
              ((Le = d.stateNode.containerInfo), (ot = !0));
              break e;
          }
          d = d.return;
        }
        if (Le === null) throw Error(o(160));
        (Nf(i, u, n),
          (Le = null),
          (ot = !1),
          (i = n.alternate),
          i !== null && (i.return = null),
          (n.return = null));
      }
    if (t.subtreeFlags & 13878) for (t = t.child; t !== null; ) (Af(t, e), (t = t.sibling));
  }
  var Mt = null;
  function Af(e, t) {
    var l = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (bt(t, e), yt(e), a & 4 && (pl(3, e, e.return), xn(3, e), pl(5, e, e.return)));
        break;
      case 1:
        (bt(t, e),
          yt(e),
          a & 512 && (Ye || l === null || Ht(l, l.return)),
          a & 64 &&
            el &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((l = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = l === null ? a : l.concat(a))))));
        break;
      case 26:
        var n = Mt;
        if ((bt(t, e), yt(e), a & 512 && (Ye || l === null || Ht(l, l.return)), a & 4)) {
          var i = l !== null ? l.memoizedState : null;
          if (((a = e.memoizedState), l === null))
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  ((a = e.type), (l = e.memoizedProps), (n = n.ownerDocument || n));
                  t: switch (a) {
                    case 'title':
                      ((i = n.getElementsByTagName('title')[0]),
                        (!i ||
                          i[Xa] ||
                          i[tt] ||
                          i.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          i.hasAttribute('itemprop')) &&
                          ((i = n.createElement(a)),
                          n.head.insertBefore(i, n.querySelector('head > title'))),
                        et(i, a, l),
                        (i[tt] = e),
                        Ke(i),
                        (a = i));
                      break e;
                    case 'link':
                      var u = vd('link', 'href', n).get(a + (l.href || ''));
                      if (u) {
                        for (var d = 0; d < u.length; d++)
                          if (
                            ((i = u[d]),
                            i.getAttribute('href') ===
                              (l.href == null || l.href === '' ? null : l.href) &&
                              i.getAttribute('rel') === (l.rel == null ? null : l.rel) &&
                              i.getAttribute('title') === (l.title == null ? null : l.title) &&
                              i.getAttribute('crossorigin') ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            u.splice(d, 1);
                            break t;
                          }
                      }
                      ((i = n.createElement(a)), et(i, a, l), n.head.appendChild(i));
                      break;
                    case 'meta':
                      if ((u = vd('meta', 'content', n).get(a + (l.content || '')))) {
                        for (d = 0; d < u.length; d++)
                          if (
                            ((i = u[d]),
                            i.getAttribute('content') ===
                              (l.content == null ? null : '' + l.content) &&
                              i.getAttribute('name') === (l.name == null ? null : l.name) &&
                              i.getAttribute('property') ===
                                (l.property == null ? null : l.property) &&
                              i.getAttribute('http-equiv') ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              i.getAttribute('charset') === (l.charSet == null ? null : l.charSet))
                          ) {
                            u.splice(d, 1);
                            break t;
                          }
                      }
                      ((i = n.createElement(a)), et(i, a, l), n.head.appendChild(i));
                      break;
                    default:
                      throw Error(o(468, a));
                  }
                  ((i[tt] = e), Ke(i), (a = i));
                }
                e.stateNode = a;
              } else xd(n, e.type, e.stateNode);
            else e.stateNode = md(n, a, e.memoizedProps);
          else
            i !== a ?
              (i === null ?
                l.stateNode !== null && ((l = l.stateNode), l.parentNode.removeChild(l))
              : i.count--,
              a === null ? xd(n, e.type, e.stateNode) : md(n, a, e.memoizedProps))
            : a === null && e.stateNode !== null && zu(e, e.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        (bt(t, e),
          yt(e),
          a & 512 && (Ye || l === null || Ht(l, l.return)),
          l !== null && a & 4 && zu(e, e.memoizedProps, l.memoizedProps));
        break;
      case 5:
        if ((bt(t, e), yt(e), a & 512 && (Ye || l === null || Ht(l, l.return)), e.flags & 32)) {
          n = e.stateNode;
          try {
            ia(n, '');
          } catch (U) {
            Re(e, e.return, U);
          }
        }
        (a & 4 &&
          e.stateNode != null &&
          ((n = e.memoizedProps), zu(e, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (Uu = !0));
        break;
      case 6:
        if ((bt(t, e), yt(e), a & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          ((a = e.memoizedProps), (l = e.stateNode));
          try {
            l.nodeValue = a;
          } catch (U) {
            Re(e, e.return, U);
          }
        }
        break;
      case 3:
        if (
          ((Ki = null),
          (n = Mt),
          (Mt = Qi(t.containerInfo)),
          bt(t, e),
          (Mt = n),
          yt(e),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Bn(t.containerInfo);
          } catch (U) {
            Re(e, e.return, U);
          }
        Uu && ((Uu = !1), Tf(e));
        break;
      case 4:
        ((a = Mt), (Mt = Qi(e.stateNode.containerInfo)), bt(t, e), yt(e), (Mt = a));
        break;
      case 12:
        (bt(t, e), yt(e));
        break;
      case 13:
        (bt(t, e),
          yt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) != (l !== null && l.memoizedState !== null) &&
            (Xu = wt()),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), Bu(e, a))));
        break;
      case 22:
        n = e.memoizedState !== null;
        var m = l !== null && l.memoizedState !== null,
          z = el,
          G = Ye;
        if (((el = z || n), (Ye = G || m), bt(t, e), (Ye = G), (el = z), yt(e), a & 8192))
          e: for (
            t = e.stateNode,
              t._visibility = n ? t._visibility & -2 : t._visibility | 1,
              n && (l === null || m || el || Ye || Fl(e)),
              l = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                m = l = t;
                try {
                  if (((i = m.stateNode), n))
                    ((u = i.style),
                      typeof u.setProperty == 'function' ?
                        u.setProperty('display', 'none', 'important')
                      : (u.display = 'none'));
                  else {
                    d = m.stateNode;
                    var X = m.memoizedProps.style,
                      L = X != null && X.hasOwnProperty('display') ? X.display : null;
                    d.style.display = L == null || typeof L == 'boolean' ? '' : ('' + L).trim();
                  }
                } catch (U) {
                  Re(m, m.return, U);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                m = t;
                try {
                  m.stateNode.nodeValue = n ? '' : m.memoizedProps;
                } catch (U) {
                  Re(m, m.return, U);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) || t.memoizedState === null || t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              (l === t && (l = null), (t = t.return));
            }
            (l === t && (l = null), (t.sibling.return = t.return), (t = t.sibling));
          }
        a & 4 &&
          ((a = e.updateQueue),
          a !== null && ((l = a.retryQueue), l !== null && ((a.retryQueue = null), Bu(e, l))));
        break;
      case 19:
        (bt(t, e),
          yt(e),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), Bu(e, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (bt(t, e), yt(e));
    }
  }
  function yt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null; ) {
          if (mf(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(o(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              i = Mu(e);
            Di(e, i, n);
            break;
          case 5:
            var u = l.stateNode;
            l.flags & 32 && (ia(u, ''), (l.flags &= -33));
            var d = Mu(e);
            Di(e, d, u);
            break;
          case 3:
          case 4:
            var m = l.stateNode.containerInfo,
              z = Mu(e);
            Lu(e, z, m);
            break;
          default:
            throw Error(o(161));
        }
      } catch (G) {
        Re(e, e.return, G);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Tf(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (Tf(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling));
      }
  }
  function bl(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (Sf(e, t.alternate, t), (t = t.sibling));
  }
  function Fl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (pl(4, t, t.return), Fl(t));
          break;
        case 1:
          Ht(t, t.return);
          var l = t.stateNode;
          (typeof l.componentWillUnmount == 'function' && bf(t, t.return, l), Fl(t));
          break;
        case 27:
          kn(t.stateNode);
        case 26:
        case 5:
          (Ht(t, t.return), Fl(t));
          break;
        case 22:
          t.memoizedState === null && Fl(t);
          break;
        case 30:
          Fl(t);
          break;
        default:
          Fl(t);
      }
      e = e.sibling;
    }
  }
  function yl(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        n = e,
        i = t,
        u = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (yl(n, i, l), xn(4, i));
          break;
        case 1:
          if ((yl(n, i, l), (a = i), (n = a.stateNode), typeof n.componentDidMount == 'function'))
            try {
              n.componentDidMount();
            } catch (z) {
              Re(a, a.return, z);
            }
          if (((a = i), (n = a.updateQueue), n !== null)) {
            var d = a.stateNode;
            try {
              var m = n.shared.hiddenCallbacks;
              if (m !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < m.length; n++) ec(m[n], d);
            } catch (z) {
              Re(a, a.return, z);
            }
          }
          (l && u & 64 && pf(i), Sn(i, i.return));
          break;
        case 27:
          vf(i);
        case 26:
        case 5:
          (yl(n, i, l), l && a === null && u & 4 && yf(i), Sn(i, i.return));
          break;
        case 12:
          yl(n, i, l);
          break;
        case 13:
          (yl(n, i, l), l && u & 4 && wf(n, i));
          break;
        case 22:
          (i.memoizedState === null && yl(n, i, l), Sn(i, i.return));
          break;
        case 30:
          break;
        default:
          yl(n, i, l);
      }
      t = t.sibling;
    }
  }
  function Hu(e, t) {
    var l = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (l = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== l && (e != null && e.refCount++, l != null && rn(l)));
  }
  function qu(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && rn(e)));
  }
  function qt(e, t, l, a) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (_f(e, t, l, a), (t = t.sibling));
  }
  function _f(e, t, l, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (qt(e, t, l, a), n & 2048 && xn(9, t));
        break;
      case 1:
        qt(e, t, l, a);
        break;
      case 3:
        (qt(e, t, l, a),
          n & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && rn(e))));
        break;
      case 12:
        if (n & 2048) {
          (qt(e, t, l, a), (e = t.stateNode));
          try {
            var i = t.memoizedProps,
              u = i.id,
              d = i.onPostCommit;
            typeof d == 'function' &&
              d(u, t.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
          } catch (m) {
            Re(t, t.return, m);
          }
        } else qt(e, t, l, a);
        break;
      case 13:
        qt(e, t, l, a);
        break;
      case 23:
        break;
      case 22:
        ((i = t.stateNode),
          (u = t.alternate),
          t.memoizedState !== null ?
            i._visibility & 2 ?
              qt(e, t, l, a)
            : En(e, t)
          : i._visibility & 2 ? qt(e, t, l, a)
          : ((i._visibility |= 2), wa(e, t, l, a, (t.subtreeFlags & 10256) !== 0)),
          n & 2048 && Hu(u, t));
        break;
      case 24:
        (qt(e, t, l, a), n & 2048 && qu(t.alternate, t));
        break;
      default:
        qt(e, t, l, a);
    }
  }
  function wa(e, t, l, a, n) {
    for (n = n && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var i = e,
        u = t,
        d = l,
        m = a,
        z = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (wa(i, u, d, m, n), xn(8, u));
          break;
        case 23:
          break;
        case 22:
          var G = u.stateNode;
          (u.memoizedState !== null ?
            G._visibility & 2 ?
              wa(i, u, d, m, n)
            : En(i, u)
          : ((G._visibility |= 2), wa(i, u, d, m, n)),
            n && z & 2048 && Hu(u.alternate, u));
          break;
        case 24:
          (wa(i, u, d, m, n), n && z & 2048 && qu(u.alternate, u));
          break;
        default:
          wa(i, u, d, m, n);
      }
      t = t.sibling;
    }
  }
  function En(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e,
          a = t,
          n = a.flags;
        switch (a.tag) {
          case 22:
            (En(l, a), n & 2048 && Hu(a.alternate, a));
            break;
          case 24:
            (En(l, a), n & 2048 && qu(a.alternate, a));
            break;
          default:
            En(l, a);
        }
        t = t.sibling;
      }
  }
  var Nn = 8192;
  function Aa(e) {
    if (e.subtreeFlags & Nn) for (e = e.child; e !== null; ) (jf(e), (e = e.sibling));
  }
  function jf(e) {
    switch (e.tag) {
      case 26:
        (Aa(e),
          e.flags & Nn && e.memoizedState !== null && Vp(Mt, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        Aa(e);
        break;
      case 3:
      case 4:
        var t = Mt;
        ((Mt = Qi(e.stateNode.containerInfo)), Aa(e), (Mt = t));
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null ?
            ((t = Nn), (Nn = 16777216), Aa(e), (Nn = t))
          : Aa(e));
        break;
      default:
        Aa(e);
    }
  }
  function Cf(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function wn(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          ((Je = a), Of(a, e));
        }
      Cf(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (kf(e), (e = e.sibling));
  }
  function kf(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (wn(e), e.flags & 2048 && pl(9, e, e.return));
        break;
      case 3:
        wn(e);
        break;
      case 12:
        wn(e);
        break;
      case 22:
        var t = e.stateNode;
        (
          e.memoizedState !== null &&
          t._visibility & 2 &&
          (e.return === null || e.return.tag !== 13)
        ) ?
          ((t._visibility &= -3), zi(e))
        : wn(e);
        break;
      default:
        wn(e);
    }
  }
  function zi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          ((Je = a), Of(a, e));
        }
      Cf(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (pl(8, t, t.return), zi(t));
          break;
        case 22:
          ((l = t.stateNode), l._visibility & 2 && ((l._visibility &= -3), zi(t)));
          break;
        default:
          zi(t);
      }
      e = e.sibling;
    }
  }
  function Of(e, t) {
    for (; Je !== null; ) {
      var l = Je;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          pl(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          rn(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) ((a.return = l), (Je = a));
      else
        e: for (l = e; Je !== null; ) {
          a = Je;
          var n = a.sibling,
            i = a.return;
          if ((Ef(a), a === l)) {
            Je = null;
            break e;
          }
          if (n !== null) {
            ((n.return = i), (Je = n));
            break e;
          }
          Je = i;
        }
    }
  }
  var up = {
      getCacheForType: function (e) {
        var t = lt(Qe),
          l = t.data.get(e);
        return (l === void 0 && ((l = e()), t.data.set(e, l)), l);
      },
    },
    sp = typeof WeakMap == 'function' ? WeakMap : Map,
    _e = 0,
    De = null,
    Ee = null,
    we = 0,
    je = 0,
    mt = null,
    ml = !1,
    Ta = !1,
    Gu = !1,
    ll = 0,
    qe = 0,
    vl = 0,
    Kl = 0,
    Yu = 0,
    Rt = 0,
    _a = 0,
    An = null,
    ct = null,
    Zu = !1,
    Xu = 0,
    Mi = 1 / 0,
    Li = null,
    xl = null,
    Pe = 0,
    Sl = null,
    ja = null,
    Ca = 0,
    Vu = 0,
    Qu = null,
    Rf = null,
    Tn = 0,
    Fu = null;
  function vt() {
    if ((_e & 2) !== 0 && we !== 0) return we & -we;
    if (O.T !== null) {
      var e = ba;
      return e !== 0 ? e : es();
    }
    return Qs();
  }
  function Df() {
    Rt === 0 && (Rt = (we & 536870912) === 0 || Te ? Ys() : 536870912);
    var e = Ot.current;
    return (e !== null && (e.flags |= 32), Rt);
  }
  function xt(e, t, l) {
    (((e === De && (je === 2 || je === 9)) || e.cancelPendingCommit !== null) &&
      (ka(e, 0), El(e, we, Rt, !1)),
      Za(e, l),
      ((_e & 2) === 0 || e !== De) &&
        (e === De && ((_e & 2) === 0 && (Kl |= l), qe === 4 && El(e, we, Rt, !1)), Gt(e)));
  }
  function zf(e, t, l) {
    if ((_e & 6) !== 0) throw Error(o(327));
    var a = (!l && (t & 124) === 0 && (t & e.expiredLanes) === 0) || Ya(e, t),
      n = a ? fp(e, t) : Ju(e, t, !0),
      i = a;
    do {
      if (n === 0) {
        Ta && !a && El(e, t, 0, !1);
        break;
      } else {
        if (((l = e.current.alternate), i && !op(l))) {
          ((n = Ju(e, t, !1)), (i = !1));
          continue;
        }
        if (n === 2) {
          if (((i = t), e.errorRecoveryDisabledLanes & i)) var u = 0;
          else
            ((u = e.pendingLanes & -536870913),
              (u =
                u !== 0 ? u
                : u & 536870912 ? 536870912
                : 0));
          if (u !== 0) {
            t = u;
            e: {
              var d = e;
              n = An;
              var m = d.current.memoizedState.isDehydrated;
              if ((m && (ka(d, u).flags |= 256), (u = Ju(d, u, !1)), u !== 2)) {
                if (Gu && !m) {
                  ((d.errorRecoveryDisabledLanes |= i), (Kl |= i), (n = 4));
                  break e;
                }
                ((i = ct), (ct = n), i !== null && (ct === null ? (ct = i) : ct.push.apply(ct, i)));
              }
              n = u;
            }
            if (((i = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          (ka(e, 0), El(e, t, 0, !0));
          break;
        }
        e: {
          switch (((a = e), (i = n), i)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              El(a, t, Rt, !ml);
              break e;
            case 2:
              ct = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && ((n = Xu + 300 - wt()), 10 < n)) {
            if ((El(a, t, Rt, !ml), Fn(a, 0, !0) !== 0)) break e;
            a.timeoutHandle = od(
              Mf.bind(null, a, l, ct, Li, Zu, t, Rt, Kl, _a, ml, i, 2, -0, 0),
              n
            );
            break e;
          }
          Mf(a, l, ct, Li, Zu, t, Rt, Kl, _a, ml, i, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Gt(e);
  }
  function Mf(e, t, l, a, n, i, u, d, m, z, G, X, L, U) {
    if (
      ((e.timeoutHandle = -1),
      (X = t.subtreeFlags),
      (X & 8192 || (X & 16785408) === 16785408) &&
        ((Dn = { stylesheets: null, count: 0, unsuspend: Xp }), jf(t), (X = Qp()), X !== null))
    ) {
      ((e.cancelPendingCommit = X(Yf.bind(null, e, t, i, l, a, n, u, d, m, G, 1, L, U))),
        El(e, i, u, !z));
      return;
    }
    Yf(e, t, i, l, a, n, u, d, m);
  }
  function op(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        t.flags & 16384 &&
        ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            i = n.getSnapshot;
          n = n.value;
          try {
            if (!ht(i(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = t.child), t.subtreeFlags & 16384 && l !== null)) ((l.return = t), (t = l));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function El(e, t, l, a) {
    ((t &= ~Yu),
      (t &= ~Kl),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes));
    for (var n = t; 0 < n; ) {
      var i = 31 - gt(n),
        u = 1 << i;
      ((a[i] = -1), (n &= ~u));
    }
    l !== 0 && Xs(e, l, t);
  }
  function Ui() {
    return (_e & 6) === 0 ? (_n(0), !1) : !0;
  }
  function Ku() {
    if (Ee !== null) {
      if (je === 0) var e = Ee.return;
      else ((e = Ee), (Kt = Yl = null), fu(e), (Ea = null), (yn = 0), (e = Ee));
      for (; e !== null; ) (hf(e.alternate, e), (e = e.return));
      Ee = null;
    }
  }
  function ka(e, t) {
    var l = e.timeoutHandle;
    (l !== -1 && ((e.timeoutHandle = -1), _p(l)),
      (l = e.cancelPendingCommit),
      l !== null && ((e.cancelPendingCommit = null), l()),
      Ku(),
      (De = e),
      (Ee = l = Vt(e.current, null)),
      (we = t),
      (je = 0),
      (mt = null),
      (ml = !1),
      (Ta = Ya(e, t)),
      (Gu = !1),
      (_a = Rt = Yu = Kl = vl = qe = 0),
      (ct = An = null),
      (Zu = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var n = 31 - gt(a),
          i = 1 << n;
        ((t |= e[n]), (a &= ~i));
      }
    return ((ll = t), ii(), l);
  }
  function Lf(e, t) {
    ((ve = null),
      (O.H = wi),
      t === sn || t === hi ? ((t = Wo()), (je = 3))
      : t === $o ? ((t = Wo()), (je = 4))
      : (je =
          t === Pc ? 8
          : t !== null && typeof t == 'object' && typeof t.then == 'function' ? 6
          : 1),
      (mt = t),
      Ee === null && ((qe = 1), Ci(e, _t(t, e.current))));
  }
  function Uf() {
    var e = O.H;
    return ((O.H = wi), e === null ? wi : e);
  }
  function Bf() {
    var e = O.A;
    return ((O.A = up), e);
  }
  function $u() {
    ((qe = 4),
      ml || ((we & 4194048) !== we && Ot.current !== null) || (Ta = !0),
      ((vl & 134217727) === 0 && (Kl & 134217727) === 0) || De === null || El(De, we, Rt, !1));
  }
  function Ju(e, t, l) {
    var a = _e;
    _e |= 2;
    var n = Uf(),
      i = Bf();
    ((De !== e || we !== t) && ((Li = null), ka(e, t)), (t = !1));
    var u = qe;
    e: do
      try {
        if (je !== 0 && Ee !== null) {
          var d = Ee,
            m = mt;
          switch (je) {
            case 8:
              (Ku(), (u = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Ot.current === null && (t = !0);
              var z = je;
              if (((je = 0), (mt = null), Oa(e, d, m, z), l && Ta)) {
                u = 0;
                break e;
              }
              break;
            default:
              ((z = je), (je = 0), (mt = null), Oa(e, d, m, z));
          }
        }
        (cp(), (u = qe));
        break;
      } catch (G) {
        Lf(e, G);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Kt = Yl = null),
      (_e = a),
      (O.H = n),
      (O.A = i),
      Ee === null && ((De = null), (we = 0), ii()),
      u
    );
  }
  function cp() {
    for (; Ee !== null; ) Hf(Ee);
  }
  function fp(e, t) {
    var l = _e;
    _e |= 2;
    var a = Uf(),
      n = Bf();
    De !== e || we !== t ? ((Li = null), (Mi = wt() + 500), ka(e, t)) : (Ta = Ya(e, t));
    e: do
      try {
        if (je !== 0 && Ee !== null) {
          t = Ee;
          var i = mt;
          t: switch (je) {
            case 1:
              ((je = 0), (mt = null), Oa(e, t, i, 1));
              break;
            case 2:
            case 9:
              if (Jo(i)) {
                ((je = 0), (mt = null), qf(t));
                break;
              }
              ((t = function () {
                ((je !== 2 && je !== 9) || De !== e || (je = 7), Gt(e));
              }),
                i.then(t, t));
              break e;
            case 3:
              je = 7;
              break e;
            case 4:
              je = 5;
              break e;
            case 7:
              Jo(i) ? ((je = 0), (mt = null), qf(t)) : ((je = 0), (mt = null), Oa(e, t, i, 7));
              break;
            case 5:
              var u = null;
              switch (Ee.tag) {
                case 26:
                  u = Ee.memoizedState;
                case 5:
                case 27:
                  var d = Ee;
                  if (!u || Sd(u)) {
                    ((je = 0), (mt = null));
                    var m = d.sibling;
                    if (m !== null) Ee = m;
                    else {
                      var z = d.return;
                      z !== null ? ((Ee = z), Bi(z)) : (Ee = null);
                    }
                    break t;
                  }
              }
              ((je = 0), (mt = null), Oa(e, t, i, 5));
              break;
            case 6:
              ((je = 0), (mt = null), Oa(e, t, i, 6));
              break;
            case 8:
              (Ku(), (qe = 6));
              break e;
            default:
              throw Error(o(462));
          }
        }
        dp();
        break;
      } catch (G) {
        Lf(e, G);
      }
    while (!0);
    return (
      (Kt = Yl = null),
      (O.H = a),
      (O.A = n),
      (_e = l),
      Ee !== null ? 0 : ((De = null), (we = 0), ii(), qe)
    );
  }
  function dp() {
    for (; Ee !== null && !cr(); ) Hf(Ee);
  }
  function Hf(e) {
    var t = df(e.alternate, e, ll);
    ((e.memoizedProps = e.pendingProps), t === null ? Bi(e) : (Ee = t));
  }
  function qf(e) {
    var t = e,
      l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = rf(l, t, t.pendingProps, t.type, void 0, we);
        break;
      case 11:
        t = rf(l, t, t.pendingProps, t.type.render, t.ref, we);
        break;
      case 5:
        fu(t);
      default:
        (hf(l, t), (t = Ee = qo(t, ll)), (t = df(l, t, ll)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Bi(e) : (Ee = t));
  }
  function Oa(e, t, l, a) {
    ((Kt = Yl = null), fu(t), (Ea = null), (yn = 0));
    var n = t.return;
    try {
      if (tp(e, n, t, l, we)) {
        ((qe = 1), Ci(e, _t(l, e.current)), (Ee = null));
        return;
      }
    } catch (i) {
      if (n !== null) throw ((Ee = n), i);
      ((qe = 1), Ci(e, _t(l, e.current)), (Ee = null));
      return;
    }
    t.flags & 32768 ?
      (Te || a === 1 ? (e = !0)
      : Ta || (we & 536870912) !== 0 ? (e = !1)
      : ((ml = e = !0),
        (a === 2 || a === 9 || a === 3 || a === 6) &&
          ((a = Ot.current), a !== null && a.tag === 13 && (a.flags |= 16384))),
      Gf(t, e))
    : Bi(t);
  }
  function Bi(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Gf(t, ml);
        return;
      }
      e = t.return;
      var l = ap(t.alternate, t, ll);
      if (l !== null) {
        Ee = l;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Ee = t;
        return;
      }
      Ee = t = e;
    } while (t !== null);
    qe === 0 && (qe = 5);
  }
  function Gf(e, t) {
    do {
      var l = np(e.alternate, e);
      if (l !== null) {
        ((l.flags &= 32767), (Ee = l));
        return;
      }
      if (
        ((l = e.return),
        l !== null && ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Ee = e;
        return;
      }
      Ee = e = l;
    } while (e !== null);
    ((qe = 6), (Ee = null));
  }
  function Yf(e, t, l, a, n, i, u, d, m) {
    e.cancelPendingCommit = null;
    do Hi();
    while (Pe !== 0);
    if ((_e & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (
        ((i = t.lanes | t.childLanes),
        (i |= qr),
        Xg(e, l, i, u, d, m),
        e === De && ((Ee = De = null), (we = 0)),
        (ja = t),
        (Sl = e),
        (Ca = l),
        (Vu = i),
        (Qu = n),
        (Rf = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ?
          ((e.callbackNode = null),
          (e.callbackPriority = 0),
          bp(Ve, function () {
            return (Ff(), null);
          }))
        : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = O.T), (O.T = null), (n = F.p), (F.p = 2), (u = _e), (_e |= 4));
        try {
          ip(e, t, l);
        } finally {
          ((_e = u), (F.p = n), (O.T = a));
        }
      }
      ((Pe = 1), Zf(), Xf(), Vf());
    }
  }
  function Zf() {
    if (Pe === 1) {
      Pe = 0;
      var e = Sl,
        t = ja,
        l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        ((l = O.T), (O.T = null));
        var a = F.p;
        F.p = 2;
        var n = _e;
        _e |= 4;
        try {
          Af(t, e);
          var i = ss,
            u = ko(e.containerInfo),
            d = i.focusedElem,
            m = i.selectionRange;
          if (u !== d && d && d.ownerDocument && Co(d.ownerDocument.documentElement, d)) {
            if (m !== null && Mr(d)) {
              var z = m.start,
                G = m.end;
              if ((G === void 0 && (G = z), 'selectionStart' in d))
                ((d.selectionStart = z), (d.selectionEnd = Math.min(G, d.value.length)));
              else {
                var X = d.ownerDocument || document,
                  L = (X && X.defaultView) || window;
                if (L.getSelection) {
                  var U = L.getSelection(),
                    ge = d.textContent.length,
                    fe = Math.min(m.start, ge),
                    Oe = m.end === void 0 ? fe : Math.min(m.end, ge);
                  !U.extend && fe > Oe && ((u = Oe), (Oe = fe), (fe = u));
                  var k = jo(d, fe),
                    T = jo(d, Oe);
                  if (
                    k &&
                    T &&
                    (U.rangeCount !== 1 ||
                      U.anchorNode !== k.node ||
                      U.anchorOffset !== k.offset ||
                      U.focusNode !== T.node ||
                      U.focusOffset !== T.offset)
                  ) {
                    var D = X.createRange();
                    (D.setStart(k.node, k.offset),
                      U.removeAllRanges(),
                      fe > Oe ?
                        (U.addRange(D), U.extend(T.node, T.offset))
                      : (D.setEnd(T.node, T.offset), U.addRange(D)));
                  }
                }
              }
            }
            for (X = [], U = d; (U = U.parentNode); )
              U.nodeType === 1 && X.push({ element: U, left: U.scrollLeft, top: U.scrollTop });
            for (typeof d.focus == 'function' && d.focus(), d = 0; d < X.length; d++) {
              var Z = X[d];
              ((Z.element.scrollLeft = Z.left), (Z.element.scrollTop = Z.top));
            }
          }
          ((Ii = !!us), (ss = us = null));
        } finally {
          ((_e = n), (F.p = a), (O.T = l));
        }
      }
      ((e.current = t), (Pe = 2));
    }
  }
  function Xf() {
    if (Pe === 2) {
      Pe = 0;
      var e = Sl,
        t = ja,
        l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        ((l = O.T), (O.T = null));
        var a = F.p;
        F.p = 2;
        var n = _e;
        _e |= 4;
        try {
          Sf(e, t.alternate, t);
        } finally {
          ((_e = n), (F.p = a), (O.T = l));
        }
      }
      Pe = 3;
    }
  }
  function Vf() {
    if (Pe === 4 || Pe === 3) {
      ((Pe = 0), Zn());
      var e = Sl,
        t = ja,
        l = Ca,
        a = Rf;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ?
        (Pe = 5)
      : ((Pe = 0), (ja = Sl = null), Qf(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (
        (n === 0 && (xl = null),
        hr(l),
        (t = t.stateNode),
        dt && typeof dt.onCommitFiberRoot == 'function')
      )
        try {
          dt.onCommitFiberRoot(Ga, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((t = O.T), (n = F.p), (F.p = 2), (O.T = null));
        try {
          for (var i = e.onRecoverableError, u = 0; u < a.length; u++) {
            var d = a[u];
            i(d.value, { componentStack: d.stack });
          }
        } finally {
          ((O.T = t), (F.p = n));
        }
      }
      ((Ca & 3) !== 0 && Hi(),
        Gt(e),
        (n = e.pendingLanes),
        (l & 4194090) !== 0 && (n & 42) !== 0 ?
          e === Fu ?
            Tn++
          : ((Tn = 0), (Fu = e))
        : (Tn = 0),
        _n(0));
    }
  }
  function Qf(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), rn(t)));
  }
  function Hi(e) {
    return (Zf(), Xf(), Vf(), Ff());
  }
  function Ff() {
    if (Pe !== 5) return !1;
    var e = Sl,
      t = Vu;
    Vu = 0;
    var l = hr(Ca),
      a = O.T,
      n = F.p;
    try {
      ((F.p = 32 > l ? 32 : l), (O.T = null), (l = Qu), (Qu = null));
      var i = Sl,
        u = Ca;
      if (((Pe = 0), (ja = Sl = null), (Ca = 0), (_e & 6) !== 0)) throw Error(o(331));
      var d = _e;
      if (
        ((_e |= 4),
        kf(i.current),
        _f(i, i.current, u, l),
        (_e = d),
        _n(0, !1),
        dt && typeof dt.onPostCommitFiberRoot == 'function')
      )
        try {
          dt.onPostCommitFiberRoot(Ga, i);
        } catch {}
      return !0;
    } finally {
      ((F.p = n), (O.T = a), Qf(e, t));
    }
  }
  function Kf(e, t, l) {
    ((t = _t(l, t)),
      (t = Au(e.stateNode, t, 2)),
      (e = fl(e, t, 2)),
      e !== null && (Za(e, 2), Gt(e)));
  }
  function Re(e, t, l) {
    if (e.tag === 3) Kf(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Kf(t, e, l);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof a.componentDidCatch == 'function' && (xl === null || !xl.has(a)))
          ) {
            ((e = _t(l, e)),
              (l = Ic(2)),
              (a = fl(t, l, 2)),
              a !== null && (Wc(l, a, t, e), Za(a, 2), Gt(a)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Iu(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new sp();
      var n = new Set();
      a.set(t, n);
    } else ((n = a.get(t)), n === void 0 && ((n = new Set()), a.set(t, n)));
    n.has(l) || ((Gu = !0), n.add(l), (e = gp.bind(null, e, t, l)), t.then(e, e));
  }
  function gp(e, t, l) {
    var a = e.pingCache;
    (a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & l),
      (e.warmLanes &= ~l),
      De === e &&
        (we & l) === l &&
        (qe === 4 || (qe === 3 && (we & 62914560) === we && 300 > wt() - Xu) ?
          (_e & 2) === 0 && ka(e, 0)
        : (Yu |= l),
        _a === we && (_a = 0)),
      Gt(e));
  }
  function $f(e, t) {
    (t === 0 && (t = Zs()), (e = da(e, t)), e !== null && (Za(e, t), Gt(e)));
  }
  function hp(e) {
    var t = e.memoizedState,
      l = 0;
    (t !== null && (l = t.retryLane), $f(e, l));
  }
  function pp(e, t) {
    var l = 0;
    switch (e.tag) {
      case 13:
        var a = e.stateNode,
          n = e.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    (a !== null && a.delete(t), $f(e, l));
  }
  function bp(e, t) {
    return kl(e, t);
  }
  var qi = null,
    Ra = null,
    Wu = !1,
    Gi = !1,
    Pu = !1,
    $l = 0;
  function Gt(e) {
    (e !== Ra && e.next === null && (Ra === null ? (qi = Ra = e) : (Ra = Ra.next = e)),
      (Gi = !0),
      Wu || ((Wu = !0), mp()));
  }
  function _n(e, t) {
    if (!Pu && Gi) {
      Pu = !0;
      do
        for (var l = !1, a = qi; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var i = 0;
            else {
              var u = a.suspendedLanes,
                d = a.pingedLanes;
              ((i = (1 << (31 - gt(42 | e) + 1)) - 1),
                (i &= n & ~(u & ~d)),
                (i =
                  i & 201326741 ? (i & 201326741) | 1
                  : i ? i | 2
                  : 0));
            }
            i !== 0 && ((l = !0), Pf(a, i));
          } else
            ((i = we),
              (i = Fn(
                a,
                a === De ? i : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (i & 3) === 0 || Ya(a, i) || ((l = !0), Pf(a, i)));
          a = a.next;
        }
      while (l);
      Pu = !1;
    }
  }
  function yp() {
    Jf();
  }
  function Jf() {
    Gi = Wu = !1;
    var e = 0;
    $l !== 0 && (Tp() && (e = $l), ($l = 0));
    for (var t = wt(), l = null, a = qi; a !== null; ) {
      var n = a.next,
        i = If(a, t);
      (i === 0 ?
        ((a.next = null), l === null ? (qi = n) : (l.next = n), n === null && (Ra = l))
      : ((l = a), (e !== 0 || (i & 3) !== 0) && (Gi = !0)),
        (a = n));
    }
    _n(e);
  }
  function If(e, t) {
    for (
      var l = e.suspendedLanes,
        a = e.pingedLanes,
        n = e.expirationTimes,
        i = e.pendingLanes & -62914561;
      0 < i;

    ) {
      var u = 31 - gt(i),
        d = 1 << u,
        m = n[u];
      (m === -1 ?
        ((d & l) === 0 || (d & a) !== 0) && (n[u] = Zg(d, t))
      : m <= t && (e.expiredLanes |= d),
        (i &= ~d));
    }
    if (
      ((t = De),
      (l = we),
      (l = Fn(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      (a = e.callbackNode),
      l === 0 || (e === t && (je === 2 || je === 9)) || e.cancelPendingCommit !== null)
    )
      return (a !== null && a !== null && Il(a), (e.callbackNode = null), (e.callbackPriority = 0));
    if ((l & 3) === 0 || Ya(e, l)) {
      if (((t = l & -l), t === e.callbackPriority)) return t;
      switch ((a !== null && Il(a), hr(l))) {
        case 2:
        case 8:
          l = ze;
          break;
        case 32:
          l = Ve;
          break;
        case 268435456:
          l = Xn;
          break;
        default:
          l = Ve;
      }
      return (
        (a = Wf.bind(null, e)),
        (l = kl(l, a)),
        (e.callbackPriority = t),
        (e.callbackNode = l),
        t
      );
    }
    return (
      a !== null && a !== null && Il(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Wf(e, t) {
    if (Pe !== 0 && Pe !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var l = e.callbackNode;
    if (Hi() && e.callbackNode !== l) return null;
    var a = we;
    return (
      (a = Fn(e, e === De ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      a === 0 ? null : (
        (zf(e, a, t),
        If(e, wt()),
        e.callbackNode != null && e.callbackNode === l ? Wf.bind(null, e) : null)
      )
    );
  }
  function Pf(e, t) {
    if (Hi()) return null;
    zf(e, t, !0);
  }
  function mp() {
    jp(function () {
      (_e & 6) !== 0 ? kl(Se, yp) : Jf();
    });
  }
  function es() {
    return ($l === 0 && ($l = Ys()), $l);
  }
  function ed(e) {
    return (
      e == null || typeof e == 'symbol' || typeof e == 'boolean' ? null
      : typeof e == 'function' ? e
      : Wn('' + e)
    );
  }
  function td(e, t) {
    var l = t.ownerDocument.createElement('input');
    return (
      (l.name = t.name),
      (l.value = t.value),
      e.id && l.setAttribute('form', e.id),
      t.parentNode.insertBefore(l, t),
      (e = new FormData(e)),
      l.parentNode.removeChild(l),
      e
    );
  }
  function vp(e, t, l, a, n) {
    if (t === 'submit' && l && l.stateNode === n) {
      var i = ed((n[rt] || null).action),
        u = a.submitter;
      u &&
        ((t = (t = u[rt] || null) ? ed(t.formAction) : u.getAttribute('formAction')),
        t !== null && ((i = t), (u = null)));
      var d = new li('action', 'action', null, a, n);
      e.push({
        event: d,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if ($l !== 0) {
                  var m = u ? td(n, u) : new FormData(n);
                  xu(l, { pending: !0, data: m, method: n.method, action: i }, null, m);
                }
              } else
                typeof i == 'function' &&
                  (d.preventDefault(),
                  (m = u ? td(n, u) : new FormData(n)),
                  xu(l, { pending: !0, data: m, method: n.method, action: i }, i, m));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var ts = 0; ts < Hr.length; ts++) {
    var ls = Hr[ts],
      xp = ls.toLowerCase(),
      Sp = ls[0].toUpperCase() + ls.slice(1);
    zt(xp, 'on' + Sp);
  }
  (zt(Do, 'onAnimationEnd'),
    zt(zo, 'onAnimationIteration'),
    zt(Mo, 'onAnimationStart'),
    zt('dblclick', 'onDoubleClick'),
    zt('focusin', 'onFocus'),
    zt('focusout', 'onBlur'),
    zt(Bh, 'onTransitionRun'),
    zt(Hh, 'onTransitionStart'),
    zt(qh, 'onTransitionCancel'),
    zt(Lo, 'onTransitionEnd'),
    la('onMouseEnter', ['mouseout', 'mouseover']),
    la('onMouseLeave', ['mouseout', 'mouseover']),
    la('onPointerEnter', ['pointerout', 'pointerover']),
    la('onPointerLeave', ['pointerout', 'pointerover']),
    Dl('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    Dl(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    Dl('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Dl('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    Dl(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    Dl(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ));
  var jn =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    Ep = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(jn)
    );
  function ld(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l],
        n = a.event;
      a = a.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var u = a.length - 1; 0 <= u; u--) {
            var d = a[u],
              m = d.instance,
              z = d.currentTarget;
            if (((d = d.listener), m !== i && n.isPropagationStopped())) break e;
            ((i = d), (n.currentTarget = z));
            try {
              i(n);
            } catch (G) {
              ji(G);
            }
            ((n.currentTarget = null), (i = m));
          }
        else
          for (u = 0; u < a.length; u++) {
            if (
              ((d = a[u]),
              (m = d.instance),
              (z = d.currentTarget),
              (d = d.listener),
              m !== i && n.isPropagationStopped())
            )
              break e;
            ((i = d), (n.currentTarget = z));
            try {
              i(n);
            } catch (G) {
              ji(G);
            }
            ((n.currentTarget = null), (i = m));
          }
      }
    }
  }
  function Ne(e, t) {
    var l = t[pr];
    l === void 0 && (l = t[pr] = new Set());
    var a = e + '__bubble';
    l.has(a) || (ad(t, e, 2, !1), l.add(a));
  }
  function as(e, t, l) {
    var a = 0;
    (t && (a |= 4), ad(l, e, a, t));
  }
  var Yi = '_reactListening' + Math.random().toString(36).slice(2);
  function ns(e) {
    if (!e[Yi]) {
      ((e[Yi] = !0),
        Ks.forEach(function (l) {
          l !== 'selectionchange' && (Ep.has(l) || as(l, !1, e), as(l, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Yi] || ((t[Yi] = !0), as('selectionchange', !1, t));
    }
  }
  function ad(e, t, l, a) {
    switch (_d(t)) {
      case 2:
        var n = $p;
        break;
      case 8:
        n = Jp;
        break;
      default:
        n = ms;
    }
    ((l = n.bind(null, t, l, e)),
      (n = void 0),
      !Tr || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (n = !0),
      a ?
        n !== void 0 ?
          e.addEventListener(t, l, { capture: !0, passive: n })
        : e.addEventListener(t, l, !0)
      : n !== void 0 ? e.addEventListener(t, l, { passive: n })
      : e.addEventListener(t, l, !1));
  }
  function is(e, t, l, a, n) {
    var i = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var u = a.tag;
        if (u === 3 || u === 4) {
          var d = a.stateNode.containerInfo;
          if (d === n) break;
          if (u === 4)
            for (u = a.return; u !== null; ) {
              var m = u.tag;
              if ((m === 3 || m === 4) && u.stateNode.containerInfo === n) return;
              u = u.return;
            }
          for (; d !== null; ) {
            if (((u = Pl(d)), u === null)) return;
            if (((m = u.tag), m === 5 || m === 6 || m === 26 || m === 27)) {
              a = i = u;
              continue e;
            }
            d = d.parentNode;
          }
        }
        a = a.return;
      }
    so(function () {
      var z = i,
        G = wr(l),
        X = [];
      e: {
        var L = Uo.get(e);
        if (L !== void 0) {
          var U = li,
            ge = e;
          switch (e) {
            case 'keypress':
              if (ei(l) === 0) break e;
            case 'keydown':
            case 'keyup':
              U = bh;
              break;
            case 'focusin':
              ((ge = 'focus'), (U = kr));
              break;
            case 'focusout':
              ((ge = 'blur'), (U = kr));
              break;
            case 'beforeblur':
            case 'afterblur':
              U = kr;
              break;
            case 'click':
              if (l.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              U = fo;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              U = nh;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              U = vh;
              break;
            case Do:
            case zo:
            case Mo:
              U = uh;
              break;
            case Lo:
              U = Sh;
              break;
            case 'scroll':
            case 'scrollend':
              U = lh;
              break;
            case 'wheel':
              U = Nh;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              U = oh;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              U = ho;
              break;
            case 'toggle':
            case 'beforetoggle':
              U = Ah;
          }
          var fe = (t & 4) !== 0,
            Oe = !fe && (e === 'scroll' || e === 'scrollend'),
            k =
              fe ?
                L !== null ?
                  L + 'Capture'
                : null
              : L;
          fe = [];
          for (var T = z, D; T !== null; ) {
            var Z = T;
            if (
              ((D = Z.stateNode),
              (Z = Z.tag),
              (Z !== 5 && Z !== 26 && Z !== 27) ||
                D === null ||
                k === null ||
                ((Z = Qa(T, k)), Z != null && fe.push(Cn(T, Z, D))),
              Oe)
            )
              break;
            T = T.return;
          }
          0 < fe.length && ((L = new U(L, ge, null, l, G)), X.push({ event: L, listeners: fe }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((L = e === 'mouseover' || e === 'pointerover'),
            (U = e === 'mouseout' || e === 'pointerout'),
            L && l !== Nr && (ge = l.relatedTarget || l.fromElement) && (Pl(ge) || ge[Wl]))
          )
            break e;
          if (
            (U || L) &&
            ((L =
              G.window === G ? G
              : (L = G.ownerDocument) ? L.defaultView || L.parentWindow
              : window),
            U ?
              ((ge = l.relatedTarget || l.toElement),
              (U = z),
              (ge = ge ? Pl(ge) : null),
              ge !== null &&
                ((Oe = h(ge)), (fe = ge.tag), ge !== Oe || (fe !== 5 && fe !== 27 && fe !== 6)) &&
                (ge = null))
            : ((U = null), (ge = z)),
            U !== ge)
          ) {
            if (
              ((fe = fo),
              (Z = 'onMouseLeave'),
              (k = 'onMouseEnter'),
              (T = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((fe = ho), (Z = 'onPointerLeave'), (k = 'onPointerEnter'), (T = 'pointer')),
              (Oe = U == null ? L : Va(U)),
              (D = ge == null ? L : Va(ge)),
              (L = new fe(Z, T + 'leave', U, l, G)),
              (L.target = Oe),
              (L.relatedTarget = D),
              (Z = null),
              Pl(G) === z &&
                ((fe = new fe(k, T + 'enter', ge, l, G)),
                (fe.target = D),
                (fe.relatedTarget = Oe),
                (Z = fe)),
              (Oe = Z),
              U && ge)
            )
              t: {
                for (fe = U, k = ge, T = 0, D = fe; D; D = Da(D)) T++;
                for (D = 0, Z = k; Z; Z = Da(Z)) D++;
                for (; 0 < T - D; ) ((fe = Da(fe)), T--);
                for (; 0 < D - T; ) ((k = Da(k)), D--);
                for (; T--; ) {
                  if (fe === k || (k !== null && fe === k.alternate)) break t;
                  ((fe = Da(fe)), (k = Da(k)));
                }
                fe = null;
              }
            else fe = null;
            (U !== null && nd(X, L, U, fe, !1),
              ge !== null && Oe !== null && nd(X, Oe, ge, fe, !0));
          }
        }
        e: {
          if (
            ((L = z ? Va(z) : window),
            (U = L.nodeName && L.nodeName.toLowerCase()),
            U === 'select' || (U === 'input' && L.type === 'file'))
          )
            var ae = Eo;
          else if (xo(L))
            if (No) ae = Mh;
            else {
              ae = Dh;
              var xe = Rh;
            }
          else
            ((U = L.nodeName),
              !U || U.toLowerCase() !== 'input' || (L.type !== 'checkbox' && L.type !== 'radio') ?
                z && Er(z.elementType) && (ae = Eo)
              : (ae = zh));
          if (ae && (ae = ae(e, z))) {
            So(X, ae, l, G);
            break e;
          }
          (xe && xe(e, L, z),
            e === 'focusout' &&
              z &&
              L.type === 'number' &&
              z.memoizedProps.value != null &&
              Sr(L, 'number', L.value));
        }
        switch (((xe = z ? Va(z) : window), e)) {
          case 'focusin':
            (xo(xe) || xe.contentEditable === 'true') && ((oa = xe), (Lr = z), (en = null));
            break;
          case 'focusout':
            en = Lr = oa = null;
            break;
          case 'mousedown':
            Ur = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Ur = !1), Oo(X, l, G));
            break;
          case 'selectionchange':
            if (Uh) break;
          case 'keydown':
          case 'keyup':
            Oo(X, l, G);
        }
        var se;
        if (Rr)
          e: {
            switch (e) {
              case 'compositionstart':
                var de = 'onCompositionStart';
                break e;
              case 'compositionend':
                de = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                de = 'onCompositionUpdate';
                break e;
            }
            de = void 0;
          }
        else
          sa ?
            mo(e, l) && (de = 'onCompositionEnd')
          : e === 'keydown' && l.keyCode === 229 && (de = 'onCompositionStart');
        (de &&
          (po &&
            l.locale !== 'ko' &&
            (sa || de !== 'onCompositionStart' ?
              de === 'onCompositionEnd' && sa && (se = oo())
            : ((ul = G), (_r = 'value' in ul ? ul.value : ul.textContent), (sa = !0))),
          (xe = Zi(z, de)),
          0 < xe.length &&
            ((de = new go(de, e, null, l, G)),
            X.push({ event: de, listeners: xe }),
            se ? (de.data = se) : ((se = vo(l)), se !== null && (de.data = se)))),
          (se = _h ? jh(e, l) : Ch(e, l)) &&
            ((de = Zi(z, 'onBeforeInput')),
            0 < de.length &&
              ((xe = new go('onBeforeInput', 'beforeinput', null, l, G)),
              X.push({ event: xe, listeners: de }),
              (xe.data = se))),
          vp(X, e, z, l, G));
      }
      ld(X, t);
    });
  }
  function Cn(e, t, l) {
    return { instance: e, listener: t, currentTarget: l };
  }
  function Zi(e, t) {
    for (var l = t + 'Capture', a = []; e !== null; ) {
      var n = e,
        i = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          i === null ||
          ((n = Qa(e, l)),
          n != null && a.unshift(Cn(e, n, i)),
          (n = Qa(e, t)),
          n != null && a.push(Cn(e, n, i))),
        e.tag === 3)
      )
        return a;
      e = e.return;
    }
    return [];
  }
  function Da(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function nd(e, t, l, a, n) {
    for (var i = t._reactName, u = []; l !== null && l !== a; ) {
      var d = l,
        m = d.alternate,
        z = d.stateNode;
      if (((d = d.tag), m !== null && m === a)) break;
      ((d !== 5 && d !== 26 && d !== 27) ||
        z === null ||
        ((m = z),
        n ?
          ((z = Qa(l, i)), z != null && u.unshift(Cn(l, z, m)))
        : n || ((z = Qa(l, i)), z != null && u.push(Cn(l, z, m)))),
        (l = l.return));
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var Np = /\r\n?/g,
    wp = /\u0000|\uFFFD/g;
  function id(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        Np,
        `
`
      )
      .replace(wp, '');
  }
  function rd(e, t) {
    return ((t = id(t)), id(e) === t);
  }
  function Xi() {}
  function ke(e, t, l, a, n, i) {
    switch (l) {
      case 'children':
        typeof a == 'string' ?
          t === 'body' || (t === 'textarea' && a === '') || ia(e, a)
        : (typeof a == 'number' || typeof a == 'bigint') && t !== 'body' && ia(e, '' + a);
        break;
      case 'className':
        $n(e, 'class', a);
        break;
      case 'tabIndex':
        $n(e, 'tabindex', a);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        $n(e, l, a);
        break;
      case 'style':
        ro(e, a, i);
        break;
      case 'data':
        if (t !== 'object') {
          $n(e, 'data', a);
          break;
        }
      case 'src':
      case 'href':
        if (a === '' && (t !== 'a' || l !== 'href')) {
          e.removeAttribute(l);
          break;
        }
        if (a == null || typeof a == 'function' || typeof a == 'symbol' || typeof a == 'boolean') {
          e.removeAttribute(l);
          break;
        }
        ((a = Wn('' + a)), e.setAttribute(l, a));
        break;
      case 'action':
      case 'formAction':
        if (typeof a == 'function') {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == 'function' &&
            (l === 'formAction' ?
              (t !== 'input' && ke(e, t, 'name', n.name, n, null),
              ke(e, t, 'formEncType', n.formEncType, n, null),
              ke(e, t, 'formMethod', n.formMethod, n, null),
              ke(e, t, 'formTarget', n.formTarget, n, null))
            : (ke(e, t, 'encType', n.encType, n, null),
              ke(e, t, 'method', n.method, n, null),
              ke(e, t, 'target', n.target, n, null)));
        if (a == null || typeof a == 'symbol' || typeof a == 'boolean') {
          e.removeAttribute(l);
          break;
        }
        ((a = Wn('' + a)), e.setAttribute(l, a));
        break;
      case 'onClick':
        a != null && (e.onclick = Xi);
        break;
      case 'onScroll':
        a != null && Ne('scroll', e);
        break;
      case 'onScrollEnd':
        a != null && Ne('scrollend', e);
        break;
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(o(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(o(60));
            e.innerHTML = l;
          }
        }
        break;
      case 'multiple':
        e.multiple = a && typeof a != 'function' && typeof a != 'symbol';
        break;
      case 'muted':
        e.muted = a && typeof a != 'function' && typeof a != 'symbol';
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        break;
      case 'autoFocus':
        break;
      case 'xlinkHref':
        if (a == null || typeof a == 'function' || typeof a == 'boolean' || typeof a == 'symbol') {
          e.removeAttribute('xlink:href');
          break;
        }
        ((l = Wn('' + a)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', l));
        break;
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        a != null && typeof a != 'function' && typeof a != 'symbol' ?
          e.setAttribute(l, '' + a)
        : e.removeAttribute(l);
        break;
      case 'inert':
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        a && typeof a != 'function' && typeof a != 'symbol' ?
          e.setAttribute(l, '')
        : e.removeAttribute(l);
        break;
      case 'capture':
      case 'download':
        a === !0 ? e.setAttribute(l, '')
        : a !== !1 && a != null && typeof a != 'function' && typeof a != 'symbol' ?
          e.setAttribute(l, a)
        : e.removeAttribute(l);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        a != null && typeof a != 'function' && typeof a != 'symbol' && !isNaN(a) && 1 <= a ?
          e.setAttribute(l, a)
        : e.removeAttribute(l);
        break;
      case 'rowSpan':
      case 'start':
        a == null || typeof a == 'function' || typeof a == 'symbol' || isNaN(a) ?
          e.removeAttribute(l)
        : e.setAttribute(l, a);
        break;
      case 'popover':
        (Ne('beforetoggle', e), Ne('toggle', e), Kn(e, 'popover', a));
        break;
      case 'xlinkActuate':
        Zt(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a);
        break;
      case 'xlinkArcrole':
        Zt(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a);
        break;
      case 'xlinkRole':
        Zt(e, 'http://www.w3.org/1999/xlink', 'xlink:role', a);
        break;
      case 'xlinkShow':
        Zt(e, 'http://www.w3.org/1999/xlink', 'xlink:show', a);
        break;
      case 'xlinkTitle':
        Zt(e, 'http://www.w3.org/1999/xlink', 'xlink:title', a);
        break;
      case 'xlinkType':
        Zt(e, 'http://www.w3.org/1999/xlink', 'xlink:type', a);
        break;
      case 'xmlBase':
        Zt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a);
        break;
      case 'xmlLang':
        Zt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a);
        break;
      case 'xmlSpace':
        Zt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a);
        break;
      case 'is':
        Kn(e, 'is', a);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < l.length) || (l[0] !== 'o' && l[0] !== 'O') || (l[1] !== 'n' && l[1] !== 'N')) &&
          ((l = eh.get(l) || l), Kn(e, l, a));
    }
  }
  function rs(e, t, l, a, n, i) {
    switch (l) {
      case 'style':
        ro(e, a, i);
        break;
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(o(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(o(60));
            e.innerHTML = l;
          }
        }
        break;
      case 'children':
        typeof a == 'string' ?
          ia(e, a)
        : (typeof a == 'number' || typeof a == 'bigint') && ia(e, '' + a);
        break;
      case 'onScroll':
        a != null && Ne('scroll', e);
        break;
      case 'onScrollEnd':
        a != null && Ne('scrollend', e);
        break;
      case 'onClick':
        a != null && (e.onclick = Xi);
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        if (!$s.hasOwnProperty(l))
          e: {
            if (
              l[0] === 'o' &&
              l[1] === 'n' &&
              ((n = l.endsWith('Capture')),
              (t = l.slice(2, n ? l.length - 7 : void 0)),
              (i = e[rt] || null),
              (i = i != null ? i[l] : null),
              typeof i == 'function' && e.removeEventListener(t, i, n),
              typeof a == 'function')
            ) {
              (typeof i != 'function' &&
                i !== null &&
                (l in e ? (e[l] = null) : e.hasAttribute(l) && e.removeAttribute(l)),
                e.addEventListener(t, a, n));
              break e;
            }
            l in e ? (e[l] = a)
            : a === !0 ? e.setAttribute(l, '')
            : Kn(e, l, a);
          }
    }
  }
  function et(e, t, l) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'img':
        (Ne('error', e), Ne('load', e));
        var a = !1,
          n = !1,
          i;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var u = l[i];
            if (u != null)
              switch (i) {
                case 'src':
                  a = !0;
                  break;
                case 'srcSet':
                  n = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(o(137, t));
                default:
                  ke(e, t, i, u, l, null);
              }
          }
        (n && ke(e, t, 'srcSet', l.srcSet, l, null), a && ke(e, t, 'src', l.src, l, null));
        return;
      case 'input':
        Ne('invalid', e);
        var d = (i = u = n = null),
          m = null,
          z = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var G = l[a];
            if (G != null)
              switch (a) {
                case 'name':
                  n = G;
                  break;
                case 'type':
                  u = G;
                  break;
                case 'checked':
                  m = G;
                  break;
                case 'defaultChecked':
                  z = G;
                  break;
                case 'value':
                  i = G;
                  break;
                case 'defaultValue':
                  d = G;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (G != null) throw Error(o(137, t));
                  break;
                default:
                  ke(e, t, a, G, l, null);
              }
          }
        (lo(e, i, d, m, z, u, n, !1), Jn(e));
        return;
      case 'select':
        (Ne('invalid', e), (a = u = i = null));
        for (n in l)
          if (l.hasOwnProperty(n) && ((d = l[n]), d != null))
            switch (n) {
              case 'value':
                i = d;
                break;
              case 'defaultValue':
                u = d;
                break;
              case 'multiple':
                a = d;
              default:
                ke(e, t, n, d, l, null);
            }
        ((t = i),
          (l = u),
          (e.multiple = !!a),
          t != null ? na(e, !!a, t, !1) : l != null && na(e, !!a, l, !0));
        return;
      case 'textarea':
        (Ne('invalid', e), (i = n = a = null));
        for (u in l)
          if (l.hasOwnProperty(u) && ((d = l[u]), d != null))
            switch (u) {
              case 'value':
                a = d;
                break;
              case 'defaultValue':
                n = d;
                break;
              case 'children':
                i = d;
                break;
              case 'dangerouslySetInnerHTML':
                if (d != null) throw Error(o(91));
                break;
              default:
                ke(e, t, u, d, l, null);
            }
        (no(e, a, n, i), Jn(e));
        return;
      case 'option':
        for (m in l)
          if (l.hasOwnProperty(m) && ((a = l[m]), a != null))
            switch (m) {
              case 'selected':
                e.selected = a && typeof a != 'function' && typeof a != 'symbol';
                break;
              default:
                ke(e, t, m, a, l, null);
            }
        return;
      case 'dialog':
        (Ne('beforetoggle', e), Ne('toggle', e), Ne('cancel', e), Ne('close', e));
        break;
      case 'iframe':
      case 'object':
        Ne('load', e);
        break;
      case 'video':
      case 'audio':
        for (a = 0; a < jn.length; a++) Ne(jn[a], e);
        break;
      case 'image':
        (Ne('error', e), Ne('load', e));
        break;
      case 'details':
        Ne('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        (Ne('error', e), Ne('load', e));
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (z in l)
          if (l.hasOwnProperty(z) && ((a = l[z]), a != null))
            switch (z) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(o(137, t));
              default:
                ke(e, t, z, a, l, null);
            }
        return;
      default:
        if (Er(t)) {
          for (G in l)
            l.hasOwnProperty(G) && ((a = l[G]), a !== void 0 && rs(e, t, G, a, l, void 0));
          return;
        }
    }
    for (d in l) l.hasOwnProperty(d) && ((a = l[d]), a != null && ke(e, t, d, a, l, null));
  }
  function Ap(e, t, l, a) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'input':
        var n = null,
          i = null,
          u = null,
          d = null,
          m = null,
          z = null,
          G = null;
        for (U in l) {
          var X = l[U];
          if (l.hasOwnProperty(U) && X != null)
            switch (U) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                m = X;
              default:
                a.hasOwnProperty(U) || ke(e, t, U, null, a, X);
            }
        }
        for (var L in a) {
          var U = a[L];
          if (((X = l[L]), a.hasOwnProperty(L) && (U != null || X != null)))
            switch (L) {
              case 'type':
                i = U;
                break;
              case 'name':
                n = U;
                break;
              case 'checked':
                z = U;
                break;
              case 'defaultChecked':
                G = U;
                break;
              case 'value':
                u = U;
                break;
              case 'defaultValue':
                d = U;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (U != null) throw Error(o(137, t));
                break;
              default:
                U !== X && ke(e, t, L, U, a, X);
            }
        }
        xr(e, u, d, m, z, G, i, n);
        return;
      case 'select':
        U = u = d = L = null;
        for (i in l)
          if (((m = l[i]), l.hasOwnProperty(i) && m != null))
            switch (i) {
              case 'value':
                break;
              case 'multiple':
                U = m;
              default:
                a.hasOwnProperty(i) || ke(e, t, i, null, a, m);
            }
        for (n in a)
          if (((i = a[n]), (m = l[n]), a.hasOwnProperty(n) && (i != null || m != null)))
            switch (n) {
              case 'value':
                L = i;
                break;
              case 'defaultValue':
                d = i;
                break;
              case 'multiple':
                u = i;
              default:
                i !== m && ke(e, t, n, i, a, m);
            }
        ((t = d),
          (l = u),
          (a = U),
          L != null ?
            na(e, !!l, L, !1)
          : !!a != !!l && (t != null ? na(e, !!l, t, !0) : na(e, !!l, l ? [] : '', !1)));
        return;
      case 'textarea':
        U = L = null;
        for (d in l)
          if (((n = l[d]), l.hasOwnProperty(d) && n != null && !a.hasOwnProperty(d)))
            switch (d) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                ke(e, t, d, null, a, n);
            }
        for (u in a)
          if (((n = a[u]), (i = l[u]), a.hasOwnProperty(u) && (n != null || i != null)))
            switch (u) {
              case 'value':
                L = n;
                break;
              case 'defaultValue':
                U = n;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (n != null) throw Error(o(91));
                break;
              default:
                n !== i && ke(e, t, u, n, a, i);
            }
        ao(e, L, U);
        return;
      case 'option':
        for (var ge in l)
          if (((L = l[ge]), l.hasOwnProperty(ge) && L != null && !a.hasOwnProperty(ge)))
            switch (ge) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                ke(e, t, ge, null, a, L);
            }
        for (m in a)
          if (((L = a[m]), (U = l[m]), a.hasOwnProperty(m) && L !== U && (L != null || U != null)))
            switch (m) {
              case 'selected':
                e.selected = L && typeof L != 'function' && typeof L != 'symbol';
                break;
              default:
                ke(e, t, m, L, a, U);
            }
        return;
      case 'img':
      case 'link':
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (var fe in l)
          ((L = l[fe]),
            l.hasOwnProperty(fe) && L != null && !a.hasOwnProperty(fe) && ke(e, t, fe, null, a, L));
        for (z in a)
          if (((L = a[z]), (U = l[z]), a.hasOwnProperty(z) && L !== U && (L != null || U != null)))
            switch (z) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (L != null) throw Error(o(137, t));
                break;
              default:
                ke(e, t, z, L, a, U);
            }
        return;
      default:
        if (Er(t)) {
          for (var Oe in l)
            ((L = l[Oe]),
              l.hasOwnProperty(Oe) &&
                L !== void 0 &&
                !a.hasOwnProperty(Oe) &&
                rs(e, t, Oe, void 0, a, L));
          for (G in a)
            ((L = a[G]),
              (U = l[G]),
              !a.hasOwnProperty(G) ||
                L === U ||
                (L === void 0 && U === void 0) ||
                rs(e, t, G, L, a, U));
          return;
        }
    }
    for (var k in l)
      ((L = l[k]),
        l.hasOwnProperty(k) && L != null && !a.hasOwnProperty(k) && ke(e, t, k, null, a, L));
    for (X in a)
      ((L = a[X]),
        (U = l[X]),
        !a.hasOwnProperty(X) || L === U || (L == null && U == null) || ke(e, t, X, L, a, U));
  }
  var us = null,
    ss = null;
  function Vi(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function ud(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function sd(e, t) {
    if (e === 0)
      switch (t) {
        case 'svg':
          return 1;
        case 'math':
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === 'foreignObject' ? 0 : e;
  }
  function os(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      typeof t.children == 'bigint' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var cs = null;
  function Tp() {
    var e = window.event;
    return (
      e && e.type === 'popstate' ?
        e === cs ?
          !1
        : ((cs = e), !0)
      : ((cs = null), !1)
    );
  }
  var od = typeof setTimeout == 'function' ? setTimeout : void 0,
    _p = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    cd = typeof Promise == 'function' ? Promise : void 0,
    jp =
      typeof queueMicrotask == 'function' ? queueMicrotask
      : typeof cd < 'u' ?
        function (e) {
          return cd.resolve(null).then(e).catch(Cp);
        }
      : od;
  function Cp(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Nl(e) {
    return e === 'head';
  }
  function fd(e, t) {
    var l = t,
      a = 0,
      n = 0;
    do {
      var i = l.nextSibling;
      if ((e.removeChild(l), i && i.nodeType === 8))
        if (((l = i.data), l === '/$')) {
          if (0 < a && 8 > a) {
            l = a;
            var u = e.ownerDocument;
            if ((l & 1 && kn(u.documentElement), l & 2 && kn(u.body), l & 4))
              for (l = u.head, kn(l), u = l.firstChild; u; ) {
                var d = u.nextSibling,
                  m = u.nodeName;
                (u[Xa] ||
                  m === 'SCRIPT' ||
                  m === 'STYLE' ||
                  (m === 'LINK' && u.rel.toLowerCase() === 'stylesheet') ||
                  l.removeChild(u),
                  (u = d));
              }
          }
          if (n === 0) {
            (e.removeChild(i), Bn(t));
            return;
          }
          n--;
        } else l === '$' || l === '$?' || l === '$!' ? n++ : (a = l.charCodeAt(0) - 48);
      else a = 0;
      l = i;
    } while (l);
    Bn(t);
  }
  function fs(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (((t = t.nextSibling), l.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (fs(l), br(l));
          continue;
        case 'SCRIPT':
        case 'STYLE':
          continue;
        case 'LINK':
          if (l.rel.toLowerCase() === 'stylesheet') continue;
      }
      e.removeChild(l);
    }
  }
  function kp(e, t, l, a) {
    for (; e.nodeType === 1; ) {
      var n = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (a) {
        if (!e[Xa])
          switch (t) {
            case 'meta':
              if (!e.hasAttribute('itemprop')) break;
              return e;
            case 'link':
              if (
                ((i = e.getAttribute('rel')),
                i === 'stylesheet' && e.hasAttribute('data-precedence'))
              )
                break;
              if (
                i !== n.rel ||
                e.getAttribute('href') !== (n.href == null || n.href === '' ? null : n.href) ||
                e.getAttribute('crossorigin') !== (n.crossOrigin == null ? null : n.crossOrigin) ||
                e.getAttribute('title') !== (n.title == null ? null : n.title)
              )
                break;
              return e;
            case 'style':
              if (e.hasAttribute('data-precedence')) break;
              return e;
            case 'script':
              if (
                ((i = e.getAttribute('src')),
                (i !== (n.src == null ? null : n.src) ||
                  e.getAttribute('type') !== (n.type == null ? null : n.type) ||
                  e.getAttribute('crossorigin') !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  i &&
                  e.hasAttribute('async') &&
                  !e.hasAttribute('itemprop'))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === 'input' && e.type === 'hidden') {
        var i = n.name == null ? null : '' + n.name;
        if (n.type === 'hidden' && e.getAttribute('name') === i) return e;
      } else return e;
      if (((e = Lt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Op(e, t, l) {
    if (t === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !l) ||
        ((e = Lt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function ds(e) {
    return e.data === '$!' || (e.data === '$?' && e.ownerDocument.readyState === 'complete');
  }
  function Rp(e, t) {
    var l = e.ownerDocument;
    if (e.data !== '$?' || l.readyState === 'complete') t();
    else {
      var a = function () {
        (t(), l.removeEventListener('DOMContentLoaded', a));
      };
      (l.addEventListener('DOMContentLoaded', a), (e._reactRetry = a));
    }
  }
  function Lt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === '$' || t === '$!' || t === '$?' || t === 'F!' || t === 'F')) break;
        if (t === '/$') return null;
      }
    }
    return e;
  }
  var gs = null;
  function dd(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === '$' || l === '$!' || l === '$?') {
          if (t === 0) return e;
          t--;
        } else l === '/$' && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function gd(e, t, l) {
    switch (((t = Vi(l)), e)) {
      case 'html':
        if (((e = t.documentElement), !e)) throw Error(o(452));
        return e;
      case 'head':
        if (((e = t.head), !e)) throw Error(o(453));
        return e;
      case 'body':
        if (((e = t.body), !e)) throw Error(o(454));
        return e;
      default:
        throw Error(o(451));
    }
  }
  function kn(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    br(e);
  }
  var Dt = new Map(),
    hd = new Set();
  function Qi(e) {
    return (
      typeof e.getRootNode == 'function' ? e.getRootNode()
      : e.nodeType === 9 ? e
      : e.ownerDocument
    );
  }
  var al = F.d;
  F.d = { f: Dp, r: zp, D: Mp, C: Lp, L: Up, m: Bp, X: qp, S: Hp, M: Gp };
  function Dp() {
    var e = al.f(),
      t = Ui();
    return e || t;
  }
  function zp(e) {
    var t = ea(e);
    t !== null && t.tag === 5 && t.type === 'form' ? Dc(t) : al.r(e);
  }
  var za = typeof document > 'u' ? null : document;
  function pd(e, t, l) {
    var a = za;
    if (a && typeof t == 'string' && t) {
      var n = Tt(t);
      ((n = 'link[rel="' + e + '"][href="' + n + '"]'),
        typeof l == 'string' && (n += '[crossorigin="' + l + '"]'),
        hd.has(n) ||
          (hd.add(n),
          (e = { rel: e, crossOrigin: l, href: t }),
          a.querySelector(n) === null &&
            ((t = a.createElement('link')), et(t, 'link', e), Ke(t), a.head.appendChild(t))));
    }
  }
  function Mp(e) {
    (al.D(e), pd('dns-prefetch', e, null));
  }
  function Lp(e, t) {
    (al.C(e, t), pd('preconnect', e, t));
  }
  function Up(e, t, l) {
    al.L(e, t, l);
    var a = za;
    if (a && e && t) {
      var n = 'link[rel="preload"][as="' + Tt(t) + '"]';
      t === 'image' && l && l.imageSrcSet ?
        ((n += '[imagesrcset="' + Tt(l.imageSrcSet) + '"]'),
        typeof l.imageSizes == 'string' && (n += '[imagesizes="' + Tt(l.imageSizes) + '"]'))
      : (n += '[href="' + Tt(e) + '"]');
      var i = n;
      switch (t) {
        case 'style':
          i = Ma(e);
          break;
        case 'script':
          i = La(e);
      }
      Dt.has(i) ||
        ((e = A(
          { rel: 'preload', href: t === 'image' && l && l.imageSrcSet ? void 0 : e, as: t },
          l
        )),
        Dt.set(i, e),
        a.querySelector(n) !== null ||
          (t === 'style' && a.querySelector(On(i))) ||
          (t === 'script' && a.querySelector(Rn(i))) ||
          ((t = a.createElement('link')), et(t, 'link', e), Ke(t), a.head.appendChild(t)));
    }
  }
  function Bp(e, t) {
    al.m(e, t);
    var l = za;
    if (l && e) {
      var a = t && typeof t.as == 'string' ? t.as : 'script',
        n = 'link[rel="modulepreload"][as="' + Tt(a) + '"][href="' + Tt(e) + '"]',
        i = n;
      switch (a) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          i = La(e);
      }
      if (
        !Dt.has(i) &&
        ((e = A({ rel: 'modulepreload', href: e }, t)), Dt.set(i, e), l.querySelector(n) === null)
      ) {
        switch (a) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (l.querySelector(Rn(i))) return;
        }
        ((a = l.createElement('link')), et(a, 'link', e), Ke(a), l.head.appendChild(a));
      }
    }
  }
  function Hp(e, t, l) {
    al.S(e, t, l);
    var a = za;
    if (a && e) {
      var n = ta(a).hoistableStyles,
        i = Ma(e);
      t = t || 'default';
      var u = n.get(i);
      if (!u) {
        var d = { loading: 0, preload: null };
        if ((u = a.querySelector(On(i)))) d.loading = 5;
        else {
          ((e = A({ rel: 'stylesheet', href: e, 'data-precedence': t }, l)),
            (l = Dt.get(i)) && hs(e, l));
          var m = (u = a.createElement('link'));
          (Ke(m),
            et(m, 'link', e),
            (m._p = new Promise(function (z, G) {
              ((m.onload = z), (m.onerror = G));
            })),
            m.addEventListener('load', function () {
              d.loading |= 1;
            }),
            m.addEventListener('error', function () {
              d.loading |= 2;
            }),
            (d.loading |= 4),
            Fi(u, t, a));
        }
        ((u = { type: 'stylesheet', instance: u, count: 1, state: d }), n.set(i, u));
      }
    }
  }
  function qp(e, t) {
    al.X(e, t);
    var l = za;
    if (l && e) {
      var a = ta(l).hoistableScripts,
        n = La(e),
        i = a.get(n);
      i ||
        ((i = l.querySelector(Rn(n))),
        i ||
          ((e = A({ src: e, async: !0 }, t)),
          (t = Dt.get(n)) && ps(e, t),
          (i = l.createElement('script')),
          Ke(i),
          et(i, 'link', e),
          l.head.appendChild(i)),
        (i = { type: 'script', instance: i, count: 1, state: null }),
        a.set(n, i));
    }
  }
  function Gp(e, t) {
    al.M(e, t);
    var l = za;
    if (l && e) {
      var a = ta(l).hoistableScripts,
        n = La(e),
        i = a.get(n);
      i ||
        ((i = l.querySelector(Rn(n))),
        i ||
          ((e = A({ src: e, async: !0, type: 'module' }, t)),
          (t = Dt.get(n)) && ps(e, t),
          (i = l.createElement('script')),
          Ke(i),
          et(i, 'link', e),
          l.head.appendChild(i)),
        (i = { type: 'script', instance: i, count: 1, state: null }),
        a.set(n, i));
    }
  }
  function bd(e, t, l, a) {
    var n = (n = J.current) ? Qi(n) : null;
    if (!n) throw Error(o(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof l.precedence == 'string' && typeof l.href == 'string' ?
            ((t = Ma(l.href)),
            (l = ta(n).hoistableStyles),
            (a = l.get(t)),
            a || ((a = { type: 'style', instance: null, count: 0, state: null }), l.set(t, a)),
            a)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (
          l.rel === 'stylesheet' &&
          typeof l.href == 'string' &&
          typeof l.precedence == 'string'
        ) {
          e = Ma(l.href);
          var i = ta(n).hoistableStyles,
            u = i.get(e);
          if (
            (u ||
              ((n = n.ownerDocument || n),
              (u = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              i.set(e, u),
              (i = n.querySelector(On(e))) && !i._p && ((u.instance = i), (u.state.loading = 5)),
              Dt.has(e) ||
                ((l = {
                  rel: 'preload',
                  as: 'style',
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                Dt.set(e, l),
                i || Yp(n, e, l, u.state))),
            t && a === null)
          )
            throw Error(o(528, ''));
          return u;
        }
        if (t && a !== null) throw Error(o(529, ''));
        return null;
      case 'script':
        return (
          (t = l.async),
          (l = l.src),
          typeof l == 'string' && t && typeof t != 'function' && typeof t != 'symbol' ?
            ((t = La(l)),
            (l = ta(n).hoistableScripts),
            (a = l.get(t)),
            a || ((a = { type: 'script', instance: null, count: 0, state: null }), l.set(t, a)),
            a)
          : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(o(444, e));
    }
  }
  function Ma(e) {
    return 'href="' + Tt(e) + '"';
  }
  function On(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function yd(e) {
    return A({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function Yp(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + ']') ?
      (a.loading = 1)
    : ((t = e.createElement('link')),
      (a.preload = t),
      t.addEventListener('load', function () {
        return (a.loading |= 1);
      }),
      t.addEventListener('error', function () {
        return (a.loading |= 2);
      }),
      et(t, 'link', l),
      Ke(t),
      e.head.appendChild(t));
  }
  function La(e) {
    return '[src="' + Tt(e) + '"]';
  }
  function Rn(e) {
    return 'script[async]' + e;
  }
  function md(e, t, l) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var a = e.querySelector('style[data-href~="' + Tt(l.href) + '"]');
          if (a) return ((t.instance = a), Ke(a), a);
          var n = A({}, l, {
            'data-href': l.href,
            'data-precedence': l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (e.ownerDocument || e).createElement('style')),
            Ke(a),
            et(a, 'style', n),
            Fi(a, l.precedence, e),
            (t.instance = a)
          );
        case 'stylesheet':
          n = Ma(l.href);
          var i = e.querySelector(On(n));
          if (i) return ((t.state.loading |= 4), (t.instance = i), Ke(i), i);
          ((a = yd(l)),
            (n = Dt.get(n)) && hs(a, n),
            (i = (e.ownerDocument || e).createElement('link')),
            Ke(i));
          var u = i;
          return (
            (u._p = new Promise(function (d, m) {
              ((u.onload = d), (u.onerror = m));
            })),
            et(i, 'link', a),
            (t.state.loading |= 4),
            Fi(i, l.precedence, e),
            (t.instance = i)
          );
        case 'script':
          return (
            (i = La(l.src)),
            (n = e.querySelector(Rn(i))) ?
              ((t.instance = n), Ke(n), n)
            : ((a = l),
              (n = Dt.get(i)) && ((a = A({}, l)), ps(a, n)),
              (e = e.ownerDocument || e),
              (n = e.createElement('script')),
              Ke(n),
              et(n, 'link', a),
              e.head.appendChild(n),
              (t.instance = n))
          );
        case 'void':
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === 'stylesheet' &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), Fi(a, l.precedence, e));
    return t.instance;
  }
  function Fi(e, t, l) {
    for (
      var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        n = a.length ? a[a.length - 1] : null,
        i = n,
        u = 0;
      u < a.length;
      u++
    ) {
      var d = a[u];
      if (d.dataset.precedence === t) i = d;
      else if (i !== n) break;
    }
    i ?
      i.parentNode.insertBefore(e, i.nextSibling)
    : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild));
  }
  function hs(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function ps(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var Ki = null;
  function vd(e, t, l) {
    if (Ki === null) {
      var a = new Map(),
        n = (Ki = new Map());
      n.set(l, a);
    } else ((n = Ki), (a = n.get(l)), a || ((a = new Map()), n.set(l, a)));
    if (a.has(e)) return a;
    for (a.set(e, null), l = l.getElementsByTagName(e), n = 0; n < l.length; n++) {
      var i = l[n];
      if (
        !(i[Xa] || i[tt] || (e === 'link' && i.getAttribute('rel') === 'stylesheet')) &&
        i.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var u = i.getAttribute(t) || '';
        u = e + u;
        var d = a.get(u);
        d ? d.push(i) : a.set(u, [i]);
      }
    }
    return a;
  }
  function xd(e, t, l) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(l, t === 'title' ? e.querySelector('head > title') : null));
  }
  function Zp(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case 'meta':
      case 'title':
        return !0;
      case 'style':
        if (typeof t.precedence != 'string' || typeof t.href != 'string' || t.href === '') break;
        return !0;
      case 'link':
        if (
          typeof t.rel != 'string' ||
          typeof t.href != 'string' ||
          t.href === '' ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case 'stylesheet':
            return ((e = t.disabled), typeof t.precedence == 'string' && e == null);
          default:
            return !0;
        }
      case 'script':
        if (
          t.async &&
          typeof t.async != 'function' &&
          typeof t.async != 'symbol' &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == 'string'
        )
          return !0;
    }
    return !1;
  }
  function Sd(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  var Dn = null;
  function Xp() {}
  function Vp(e, t, l) {
    if (Dn === null) throw Error(o(475));
    var a = Dn;
    if (
      t.type === 'stylesheet' &&
      (typeof l.media != 'string' || matchMedia(l.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var n = Ma(l.href),
          i = e.querySelector(On(n));
        if (i) {
          ((e = i._p),
            e !== null &&
              typeof e == 'object' &&
              typeof e.then == 'function' &&
              (a.count++, (a = $i.bind(a)), e.then(a, a)),
            (t.state.loading |= 4),
            (t.instance = i),
            Ke(i));
          return;
        }
        ((i = e.ownerDocument || e),
          (l = yd(l)),
          (n = Dt.get(n)) && hs(l, n),
          (i = i.createElement('link')),
          Ke(i));
        var u = i;
        ((u._p = new Promise(function (d, m) {
          ((u.onload = d), (u.onerror = m));
        })),
          et(i, 'link', l),
          (t.instance = i));
      }
      (a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (a.count++,
          (t = $i.bind(a)),
          e.addEventListener('load', t),
          e.addEventListener('error', t)));
    }
  }
  function Qp() {
    if (Dn === null) throw Error(o(475));
    var e = Dn;
    return (
      e.stylesheets && e.count === 0 && bs(e, e.stylesheets),
      0 < e.count ?
        function (t) {
          var l = setTimeout(function () {
            if ((e.stylesheets && bs(e, e.stylesheets), e.unsuspend)) {
              var a = e.unsuspend;
              ((e.unsuspend = null), a());
            }
          }, 6e4);
          return (
            (e.unsuspend = t),
            function () {
              ((e.unsuspend = null), clearTimeout(l));
            }
          );
        }
      : null
    );
  }
  function $i() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) bs(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var Ji = null;
  function bs(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++, (Ji = new Map()), t.forEach(Fp, e), (Ji = null), $i.call(e)));
  }
  function Fp(e, t) {
    if (!(t.state.loading & 4)) {
      var l = Ji.get(e);
      if (l) var a = l.get(null);
      else {
        ((l = new Map()), Ji.set(e, l));
        for (
          var n = e.querySelectorAll('link[data-precedence],style[data-precedence]'), i = 0;
          i < n.length;
          i++
        ) {
          var u = n[i];
          (u.nodeName === 'LINK' || u.getAttribute('media') !== 'not all') &&
            (l.set(u.dataset.precedence, u), (a = u));
        }
        a && l.set(null, a);
      }
      ((n = t.instance),
        (u = n.getAttribute('data-precedence')),
        (i = l.get(u) || a),
        i === a && l.set(null, n),
        l.set(u, n),
        this.count++,
        (a = $i.bind(this)),
        n.addEventListener('load', a),
        n.addEventListener('error', a),
        i ?
          i.parentNode.insertBefore(n, i.nextSibling)
        : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(n, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var zn = {
    $$typeof: R,
    Provider: null,
    Consumer: null,
    _currentValue: Q,
    _currentValue2: Q,
    _threadCount: 0,
  };
  function Kp(e, t, l, a, n, i, u, d) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = dr(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = dr(0)),
      (this.hiddenUpdates = dr(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = i),
      (this.onRecoverableError = u),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = d),
      (this.incompleteTransitions = new Map()));
  }
  function Ed(e, t, l, a, n, i, u, d, m, z, G, X) {
    return (
      (e = new Kp(e, t, l, u, d, m, z, X)),
      (t = 1),
      i === !0 && (t |= 24),
      (i = pt(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (t = Ir()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (i.memoizedState = { element: a, isDehydrated: l, cache: t }),
      tu(i),
      e
    );
  }
  function Nd(e) {
    return e ? ((e = ga), e) : ga;
  }
  function wd(e, t, l, a, n, i) {
    ((n = Nd(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = cl(t)),
      (a.payload = { element: l }),
      (i = i === void 0 ? null : i),
      i !== null && (a.callback = i),
      (l = fl(e, a, t)),
      l !== null && (xt(l, e, t), cn(l, e, t)));
  }
  function Ad(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function ys(e, t) {
    (Ad(e, t), (e = e.alternate) && Ad(e, t));
  }
  function Td(e) {
    if (e.tag === 13) {
      var t = da(e, 67108864);
      (t !== null && xt(t, e, 67108864), ys(e, 67108864));
    }
  }
  var Ii = !0;
  function $p(e, t, l, a) {
    var n = O.T;
    O.T = null;
    var i = F.p;
    try {
      ((F.p = 2), ms(e, t, l, a));
    } finally {
      ((F.p = i), (O.T = n));
    }
  }
  function Jp(e, t, l, a) {
    var n = O.T;
    O.T = null;
    var i = F.p;
    try {
      ((F.p = 8), ms(e, t, l, a));
    } finally {
      ((F.p = i), (O.T = n));
    }
  }
  function ms(e, t, l, a) {
    if (Ii) {
      var n = vs(a);
      if (n === null) (is(e, t, a, Wi, l), jd(e, a));
      else if (Wp(n, e, t, l, a)) a.stopPropagation();
      else if ((jd(e, a), t & 4 && -1 < Ip.indexOf(e))) {
        for (; n !== null; ) {
          var i = ea(n);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (((i = i.stateNode), i.current.memoizedState.isDehydrated)) {
                  var u = Rl(i.pendingLanes);
                  if (u !== 0) {
                    var d = i;
                    for (d.pendingLanes |= 2, d.entangledLanes |= 2; u; ) {
                      var m = 1 << (31 - gt(u));
                      ((d.entanglements[1] |= m), (u &= ~m));
                    }
                    (Gt(i), (_e & 6) === 0 && ((Mi = wt() + 500), _n(0)));
                  }
                }
                break;
              case 13:
                ((d = da(i, 2)), d !== null && xt(d, i, 2), Ui(), ys(i, 2));
            }
          if (((i = vs(a)), i === null && is(e, t, a, Wi, l), i === n)) break;
          n = i;
        }
        n !== null && a.stopPropagation();
      } else is(e, t, a, null, l);
    }
  }
  function vs(e) {
    return ((e = wr(e)), xs(e));
  }
  var Wi = null;
  function xs(e) {
    if (((Wi = null), (e = Pl(e)), e !== null)) {
      var t = h(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (((e = x(t)), e !== null)) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((Wi = e), null);
  }
  function _d(e) {
    switch (e) {
      case 'beforetoggle':
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'toggle':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 2;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 8;
      case 'message':
        switch (me()) {
          case Se:
            return 2;
          case ze:
            return 8;
          case Ve:
          case Ol:
            return 32;
          case Xn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ss = !1,
    wl = null,
    Al = null,
    Tl = null,
    Mn = new Map(),
    Ln = new Map(),
    _l = [],
    Ip =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function jd(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        wl = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Al = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Tl = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Mn.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Ln.delete(t.pointerId);
    }
  }
  function Un(e, t, l, a, n, i) {
    return e === null || e.nativeEvent !== i ?
        ((e = {
          blockedOn: t,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: i,
          targetContainers: [n],
        }),
        t !== null && ((t = ea(t)), t !== null && Td(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        n !== null && t.indexOf(n) === -1 && t.push(n),
        e);
  }
  function Wp(e, t, l, a, n) {
    switch (t) {
      case 'focusin':
        return ((wl = Un(wl, e, t, l, a, n)), !0);
      case 'dragenter':
        return ((Al = Un(Al, e, t, l, a, n)), !0);
      case 'mouseover':
        return ((Tl = Un(Tl, e, t, l, a, n)), !0);
      case 'pointerover':
        var i = n.pointerId;
        return (Mn.set(i, Un(Mn.get(i) || null, e, t, l, a, n)), !0);
      case 'gotpointercapture':
        return ((i = n.pointerId), Ln.set(i, Un(Ln.get(i) || null, e, t, l, a, n)), !0);
    }
    return !1;
  }
  function Cd(e) {
    var t = Pl(e.target);
    if (t !== null) {
      var l = h(t);
      if (l !== null) {
        if (((t = l.tag), t === 13)) {
          if (((t = x(l)), t !== null)) {
            ((e.blockedOn = t),
              Vg(e.priority, function () {
                if (l.tag === 13) {
                  var a = vt();
                  a = gr(a);
                  var n = da(l, a);
                  (n !== null && xt(n, l, a), ys(l, a));
                }
              }));
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Pi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = vs(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(l.type, l);
        ((Nr = a), l.target.dispatchEvent(a), (Nr = null));
      } else return ((t = ea(l)), t !== null && Td(t), (e.blockedOn = l), !1);
      t.shift();
    }
    return !0;
  }
  function kd(e, t, l) {
    Pi(e) && l.delete(t);
  }
  function Pp() {
    ((Ss = !1),
      wl !== null && Pi(wl) && (wl = null),
      Al !== null && Pi(Al) && (Al = null),
      Tl !== null && Pi(Tl) && (Tl = null),
      Mn.forEach(kd),
      Ln.forEach(kd));
  }
  function er(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Ss || ((Ss = !0), r.unstable_scheduleCallback(r.unstable_NormalPriority, Pp)));
  }
  var tr = null;
  function Od(e) {
    tr !== e &&
      ((tr = e),
      r.unstable_scheduleCallback(r.unstable_NormalPriority, function () {
        tr === e && (tr = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t],
            a = e[t + 1],
            n = e[t + 2];
          if (typeof a != 'function') {
            if (xs(a || l) === null) continue;
            break;
          }
          var i = ea(l);
          i !== null &&
            (e.splice(t, 3),
            (t -= 3),
            xu(i, { pending: !0, data: n, method: l.method, action: a }, a, n));
        }
      }));
  }
  function Bn(e) {
    function t(m) {
      return er(m, e);
    }
    (wl !== null && er(wl, e),
      Al !== null && er(Al, e),
      Tl !== null && er(Tl, e),
      Mn.forEach(t),
      Ln.forEach(t));
    for (var l = 0; l < _l.length; l++) {
      var a = _l[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < _l.length && ((l = _l[0]), l.blockedOn === null); )
      (Cd(l), l.blockedOn === null && _l.shift());
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          i = l[a + 1],
          u = n[rt] || null;
        if (typeof i == 'function') u || Od(l);
        else if (u) {
          var d = null;
          if (i && i.hasAttribute('formAction')) {
            if (((n = i), (u = i[rt] || null))) d = u.formAction;
            else if (xs(n) !== null) continue;
          } else d = u.action;
          (typeof d == 'function' ? (l[a + 1] = d) : (l.splice(a, 3), (a -= 3)), Od(l));
        }
      }
  }
  function Es(e) {
    this._internalRoot = e;
  }
  ((lr.prototype.render = Es.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      var l = t.current,
        a = vt();
      wd(l, a, e, t, null, null);
    }),
    (lr.prototype.unmount = Es.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (wd(e.current, 2, null, e, null, null), Ui(), (t[Wl] = null));
        }
      }));
  function lr(e) {
    this._internalRoot = e;
  }
  lr.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Qs();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < _l.length && t !== 0 && t < _l[l].priority; l++);
      (_l.splice(l, 0, e), l === 0 && Cd(e));
    }
  };
  var Rd = c.version;
  if (Rd !== '19.1.0') throw Error(o(527, Rd, '19.1.0'));
  F.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function' ?
          Error(o(188))
        : ((e = Object.keys(e).join(',')), Error(o(268, e)));
    return ((e = y(t)), (e = e !== null ? g(e) : null), (e = e === null ? null : e.stateNode), e);
  };
  var eb = {
    bundleType: 0,
    version: '19.1.0',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: O,
    reconcilerVersion: '19.1.0',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var ar = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ar.isDisabled && ar.supportsFiber)
      try {
        ((Ga = ar.inject(eb)), (dt = ar));
      } catch {}
  }
  return (
    (qn.createRoot = function (e, t) {
      if (!p(e)) throw Error(o(299));
      var l = !1,
        a = '',
        n = Fc,
        i = Kc,
        u = $c,
        d = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
          t.onCaughtError !== void 0 && (i = t.onCaughtError),
          t.onRecoverableError !== void 0 && (u = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 && (d = t.unstable_transitionCallbacks)),
        (t = Ed(e, 1, !1, null, null, l, a, n, i, u, d, null)),
        (e[Wl] = t.current),
        ns(e),
        new Es(t)
      );
    }),
    (qn.hydrateRoot = function (e, t, l) {
      if (!p(e)) throw Error(o(299));
      var a = !1,
        n = '',
        i = Fc,
        u = Kc,
        d = $c,
        m = null,
        z = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (i = l.onUncaughtError),
          l.onCaughtError !== void 0 && (u = l.onCaughtError),
          l.onRecoverableError !== void 0 && (d = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 && (m = l.unstable_transitionCallbacks),
          l.formState !== void 0 && (z = l.formState)),
        (t = Ed(e, 1, !0, t, l ?? null, a, n, i, u, d, m, z)),
        (t.context = Nd(null)),
        (l = t.current),
        (a = vt()),
        (a = gr(a)),
        (n = cl(a)),
        (n.callback = null),
        fl(l, n, a),
        (l = a),
        (t.current.lanes = l),
        Za(t, l),
        Gt(t),
        (e[Wl] = t.current),
        ns(e),
        new lr(t)
      );
    }),
    (qn.version = '19.1.0'),
    qn
  );
}
var Yd;
function cb() {
  if (Yd) return As.exports;
  Yd = 1;
  function r() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (c) {
        console.error(c);
      }
  }
  return (r(), (As.exports = ob()), As.exports);
}
var fb = cb();
const db = ig(fb),
  rg = ['shift', 'alt', 'meta', 'mod', 'ctrl', 'control'],
  gb = {
    esc: 'escape',
    return: 'enter',
    left: 'arrowleft',
    right: 'arrowright',
    up: 'arrowup',
    down: 'arrowdown',
    ShiftLeft: 'shift',
    ShiftRight: 'shift',
    AltLeft: 'alt',
    AltRight: 'alt',
    MetaLeft: 'meta',
    MetaRight: 'meta',
    OSLeft: 'meta',
    OSRight: 'meta',
    ControlLeft: 'ctrl',
    ControlRight: 'ctrl',
  };
function Cl(r) {
  return (gb[r.trim()] || r.trim()).toLowerCase().replace(/key|digit|numpad/, '');
}
function ug(r) {
  return rg.includes(r);
}
function Cs(r, c = ',') {
  return r.toLowerCase().split(c);
}
function ks(r, c = '+', f = '>', o = !1, p) {
  let h = [],
    x = !1;
  r.includes(f) ?
    ((x = !0),
    (h = r
      .toLocaleLowerCase()
      .split(f)
      .map((g) => Cl(g))))
  : (h = r
      .toLocaleLowerCase()
      .split(c)
      .map((g) => Cl(g)));
  const _ = {
      alt: h.includes('alt'),
      ctrl: h.includes('ctrl') || h.includes('control'),
      shift: h.includes('shift'),
      meta: h.includes('meta'),
      mod: h.includes('mod'),
      useKey: o,
    },
    y = h.filter((g) => !rg.includes(g));
  return { ..._, keys: y, description: p, isSequence: x };
}
(typeof document < 'u' &&
  (document.addEventListener('keydown', (r) => {
    r.code !== void 0 && sg([Cl(r.code)]);
  }),
  document.addEventListener('keyup', (r) => {
    r.code !== void 0 && og([Cl(r.code)]);
  })),
  typeof window < 'u' &&
    (window.addEventListener('blur', () => {
      nl.clear();
    }),
    window.addEventListener('contextmenu', () => {
      setTimeout(() => {
        nl.clear();
      }, 0);
    })));
const nl = new Set();
function Ls(r) {
  return Array.isArray(r);
}
function hb(r, c = ',') {
  return (Ls(r) ? r : r.split(c)).every((f) => nl.has(f.trim().toLowerCase()));
}
function sg(r) {
  const c = Array.isArray(r) ? r : [r];
  (nl.has('meta') && nl.forEach((f) => !ug(f) && nl.delete(f.toLowerCase())),
    c.forEach((f) => nl.add(f.toLowerCase())));
}
function og(r) {
  const c = Array.isArray(r) ? r : [r];
  r === 'meta' ? nl.clear() : c.forEach((f) => nl.delete(f.toLowerCase()));
}
function pb(r, c, f) {
  ((typeof f == 'function' && f(r, c)) || f === !0) && r.preventDefault();
}
function bb(r, c, f) {
  return typeof f == 'function' ? f(r, c) : f === !0 || f === void 0;
}
function yb(r) {
  return cg(r, ['input', 'textarea', 'select']);
}
function cg(r, c = !1) {
  const { target: f, composed: o } = r;
  let p;
  return (
    mb(f) && o ? (p = r.composedPath()[0] && r.composedPath()[0].tagName) : (p = f && f.tagName),
    Ls(c) ? !!(p && c && c.some((h) => h.toLowerCase() === p.toLowerCase())) : !!(p && c && c)
  );
}
function mb(r) {
  return !!r.tagName && !r.tagName.startsWith('-') && r.tagName.includes('-');
}
function vb(r, c) {
  return (
    r.length === 0 && c ?
      (console.warn(
        'A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'
      ),
      !0)
    : c ? r.some((f) => c.includes(f)) || r.includes('*')
    : !0
  );
}
const xb = (r, c, f = !1) => {
    const { alt: o, meta: p, mod: h, shift: x, ctrl: _, keys: y, useKey: g } = c,
      { code: A, key: b, ctrlKey: j, metaKey: B, shiftKey: E, altKey: w } = r,
      C = Cl(A);
    if (g && y?.length === 1 && y.includes(b)) return !0;
    if (
      !(y != null && y.includes(C)) &&
      !['ctrl', 'control', 'unknown', 'meta', 'alt', 'shift', 'os'].includes(C)
    )
      return !1;
    if (!f) {
      if ((o !== w && C !== 'alt') || (x !== E && C !== 'shift')) return !1;
      if (h) {
        if (!B && !j) return !1;
      } else if (
        (p !== B && C !== 'meta' && C !== 'os') ||
        (_ !== j && C !== 'ctrl' && C !== 'control')
      )
        return !1;
    }
    return (
      y && y.length === 1 && y.includes(C) ? !0
      : y ? hb(y)
      : !y
    );
  },
  fg = H.createContext(void 0),
  Sb = () => H.useContext(fg);
function Eb({ addHotkey: r, removeHotkey: c, children: f }) {
  return s.jsx(fg.Provider, { value: { addHotkey: r, removeHotkey: c }, children: f });
}
function Us(r, c) {
  return r && c && typeof r == 'object' && typeof c == 'object' ?
      Object.keys(r).length === Object.keys(c).length &&
        Object.keys(r).reduce((f, o) => f && Us(r[o], c[o]), !0)
    : r === c;
}
const dg = H.createContext({
    hotkeys: [],
    activeScopes: [],
    toggleScope: () => {},
    enableScope: () => {},
    disableScope: () => {},
  }),
  ur = () => H.useContext(dg),
  Nb = ({ initiallyActiveScopes: r = ['*'], children: c }) => {
    const [f, o] = H.useState(r),
      [p, h] = H.useState([]),
      x = H.useCallback((b) => {
        o((j) => (j.includes('*') ? [b] : Array.from(new Set([...j, b]))));
      }, []),
      _ = H.useCallback((b) => {
        o((j) => j.filter((B) => B !== b));
      }, []),
      y = H.useCallback((b) => {
        o((j) =>
          j.includes(b) ? j.filter((B) => B !== b)
          : j.includes('*') ? [b]
          : Array.from(new Set([...j, b]))
        );
      }, []),
      g = H.useCallback((b) => {
        h((j) => [...j, b]);
      }, []),
      A = H.useCallback((b) => {
        h((j) => j.filter((B) => !Us(B, b)));
      }, []);
    return s.jsx(dg.Provider, {
      value: { activeScopes: f, hotkeys: p, enableScope: x, disableScope: _, toggleScope: y },
      children: s.jsx(Eb, { addHotkey: g, removeHotkey: A, children: c }),
    });
  };
function wb(r) {
  const c = H.useRef(void 0);
  return (Us(c.current, r) || (c.current = r), c.current);
}
const Zd = (r) => {
    (r.stopPropagation(), r.preventDefault(), r.stopImmediatePropagation());
  },
  Ab = typeof window < 'u' ? H.useLayoutEffect : H.useEffect;
function Me(r, c, f, o) {
  const p = H.useRef(null),
    h = H.useRef(!1),
    x =
      f instanceof Array ?
        o instanceof Array ?
          void 0
        : o
      : f,
    _ = Ls(r) ? r.join(x?.delimiter) : r,
    y =
      f instanceof Array ? f
      : o instanceof Array ? o
      : void 0,
    g = H.useCallback(c, y ?? []),
    A = H.useRef(g);
  y ? (A.current = g) : (A.current = c);
  const b = wb(x),
    { activeScopes: j } = ur(),
    B = Sb();
  return (
    Ab(() => {
      if (b?.enabled === !1 || !vb(j, b?.scopes)) return;
      let E = [],
        w;
      const C = (V, K = !1) => {
          var ie;
          if (!(yb(V) && !cg(V, b?.enableOnFormTags))) {
            if (p.current !== null) {
              const re = p.current.getRootNode();
              if (
                (re instanceof Document || re instanceof ShadowRoot) &&
                re.activeElement !== p.current &&
                !p.current.contains(re.activeElement)
              ) {
                Zd(V);
                return;
              }
            }
            ((ie = V.target) != null &&
              ie.isContentEditable &&
              !(b != null && b.enableOnContentEditable)) ||
              Cs(_, b?.delimiter).forEach((re) => {
                var he, oe, ce, P;
                if (re.includes(b?.splitKey ?? '+') && re.includes(b?.sequenceSplitKey ?? '>')) {
                  console.warn(
                    `Hotkey ${re} contains both ${b?.splitKey ?? '+'} and ${b?.sequenceSplitKey ?? '>'} which is not supported.`
                  );
                  return;
                }
                const ne = ks(re, b?.splitKey, b?.sequenceSplitKey, b?.useKey, b?.description);
                if (ne.isSequence) {
                  w = setTimeout(() => {
                    E = [];
                  }, b?.sequenceTimeoutMs ?? 1e3);
                  const W = ne.useKey ? V.key : Cl(V.code);
                  if (ug(W.toLowerCase())) return;
                  E.push(W);
                  const M = (he = ne.keys) == null ? void 0 : he[E.length - 1];
                  if (W !== M) {
                    ((E = []), w && clearTimeout(w));
                    return;
                  }
                  E.length === ((oe = ne.keys) == null ? void 0 : oe.length) &&
                    (A.current(V, ne), w && clearTimeout(w), (E = []));
                } else if (
                  xb(V, ne, b?.ignoreModifiers) ||
                  ((ce = ne.keys) != null && ce.includes('*'))
                ) {
                  if (((P = b?.ignoreEventWhen) != null && P.call(b, V)) || (K && h.current))
                    return;
                  if ((pb(V, ne, b?.preventDefault), !bb(V, ne, b?.enabled))) {
                    Zd(V);
                    return;
                  }
                  (A.current(V, ne), K || (h.current = !0));
                }
              });
          }
        },
        N = (V) => {
          V.code !== void 0 &&
            (sg(Cl(V.code)),
            ((b?.keydown === void 0 && b?.keyup !== !0) || (b != null && b.keydown)) && C(V));
        },
        S = (V) => {
          V.code !== void 0 && (og(Cl(V.code)), (h.current = !1), b != null && b.keyup && C(V, !0));
        },
        R = p.current || x?.document || document;
      return (
        R.addEventListener('keyup', S, x?.eventListenerOptions),
        R.addEventListener('keydown', N, x?.eventListenerOptions),
        B &&
          Cs(_, b?.delimiter).forEach((V) =>
            B.addHotkey(ks(V, b?.splitKey, b?.sequenceSplitKey, b?.useKey, b?.description))
          ),
        () => {
          (R.removeEventListener('keyup', S, x?.eventListenerOptions),
            R.removeEventListener('keydown', N, x?.eventListenerOptions),
            B &&
              Cs(_, b?.delimiter).forEach((V) =>
                B.removeHotkey(ks(V, b?.splitKey, b?.sequenceSplitKey, b?.useKey, b?.description))
              ),
            (E = []),
            w && clearTimeout(w));
        }
      );
    }, [_, b, j]),
    p
  );
}
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tb = (r) => r.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  _b = (r) =>
    r.replace(/^([A-Z])|[\s-_]+(\w)/g, (c, f, o) => (o ? o.toUpperCase() : f.toLowerCase())),
  Xd = (r) => {
    const c = _b(r);
    return c.charAt(0).toUpperCase() + c.slice(1);
  },
  gg = (...r) =>
    r
      .filter((c, f, o) => !!c && c.trim() !== '' && o.indexOf(c) === f)
      .join(' ')
      .trim(),
  jb = (r) => {
    for (const c in r) if (c.startsWith('aria-') || c === 'role' || c === 'title') return !0;
  };
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Cb = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kb = H.forwardRef(
  (
    {
      color: r = 'currentColor',
      size: c = 24,
      strokeWidth: f = 2,
      absoluteStrokeWidth: o,
      className: p = '',
      children: h,
      iconNode: x,
      ..._
    },
    y
  ) =>
    H.createElement(
      'svg',
      {
        ref: y,
        ...Cb,
        width: c,
        height: c,
        stroke: r,
        strokeWidth: o ? (Number(f) * 24) / Number(c) : f,
        className: gg('lucide', p),
        ...(!h && !jb(_) && { 'aria-hidden': 'true' }),
        ..._,
      },
      [...x.map(([g, A]) => H.createElement(g, A)), ...(Array.isArray(h) ? h : [h])]
    )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ue = (r, c) => {
  const f = H.forwardRef(({ className: o, ...p }, h) =>
    H.createElement(kb, {
      ref: h,
      iconNode: c,
      className: gg(`lucide-${Tb(Xd(r))}`, `lucide-${r}`, o),
      ...p,
    })
  );
  return ((f.displayName = Xd(r)), f);
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ob = [
    ['path', { d: 'M15 12H3', key: '6jk70r' }],
    ['path', { d: 'M17 18H3', key: '1amg6g' }],
    ['path', { d: 'M21 6H3', key: '1jwq7v' }],
  ],
  Rb = Ue('align-left', Ob);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Db = [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]],
  Gn = Ue('check', Db);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zb = [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]],
  Bs = Ue('chevron-down', zb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mb = [['path', { d: 'm9 18 6-6-6-6', key: 'mthhwq' }]],
  hg = Ue('chevron-right', Mb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lb = [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' }],
    ['path', { d: 'M12 3v18', key: '108xh3' }],
  ],
  Ub = Ue('columns-2', Lb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bb = [
    ['rect', { width: '14', height: '14', x: '8', y: '8', rx: '2', ry: '2', key: '17jyea' }],
    ['path', { d: 'M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2', key: 'zix9uf' }],
  ],
  pg = Ue('copy', Bb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hb = [
    [
      'path',
      {
        d: 'M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21',
        key: 'g5wo59',
      },
    ],
    ['path', { d: 'm5.082 11.09 8.828 8.828', key: '1wx5vj' }],
  ],
  qb = Ue('eraser', Hb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gb = [
    ['path', { d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z', key: '1rqfz7' }],
    ['path', { d: 'M9 10h6', key: '9gxzsh' }],
    ['path', { d: 'M12 13V7', key: 'h0r20n' }],
    ['path', { d: 'M9 17h6', key: 'r8uit2' }],
  ],
  bg = Ue('file-diff', Gb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yb = [
    ['path', { d: 'M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5', key: '1couwa' }],
    ['path', { d: 'M14 2v4a2 2 0 0 0 2 2h4', key: 'tnqrlb' }],
    [
      'path',
      {
        d: 'M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z',
        key: '1y4qbx',
      },
    ],
  ],
  yg = Ue('file-pen', Yb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zb = [
    ['path', { d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z', key: '1rqfz7' }],
    ['path', { d: 'M14 2v4a2 2 0 0 0 2 2h4', key: 'tnqrlb' }],
    ['path', { d: 'M9 15h6', key: 'cctwl0' }],
    ['path', { d: 'M12 18v-6', key: '17g6i2' }],
  ],
  mg = Ue('file-plus', Zb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xb = [
    ['path', { d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z', key: '1rqfz7' }],
    ['path', { d: 'M14 2v4a2 2 0 0 0 2 2h4', key: 'tnqrlb' }],
    ['path', { d: 'm14.5 12.5-5 5', key: 'b62r18' }],
    ['path', { d: 'm9.5 12.5 5 5', key: '1rk7el' }],
  ],
  vg = Ue('file-x', Xb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vb = [
    [
      'path',
      {
        d: 'm6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2',
        key: 'usdka0',
      },
    ],
  ],
  Qb = Ue('folder-open', Vb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fb = [
    [
      'path',
      {
        d: 'M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z',
        key: '1kt360',
      },
    ],
  ],
  Kb = Ue('folder', Fb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $b = [
    ['path', { d: 'M10 8h.01', key: '1r9ogq' }],
    ['path', { d: 'M12 12h.01', key: '1mp3jc' }],
    ['path', { d: 'M14 8h.01', key: '1primd' }],
    ['path', { d: 'M16 12h.01', key: '1l6xoz' }],
    ['path', { d: 'M18 8h.01', key: 'emo2bl' }],
    ['path', { d: 'M6 8h.01', key: 'x9i8wu' }],
    ['path', { d: 'M7 16h10', key: 'wp8him' }],
    ['path', { d: 'M8 12h.01', key: 'czm47f' }],
    ['rect', { width: '20', height: '16', x: '2', y: '4', rx: '2', key: '18n3k1' }],
  ],
  Jb = Ue('keyboard', $b);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ib = [
    ['path', { d: 'M3 12h.01', key: 'nlz23k' }],
    ['path', { d: 'M3 18h.01', key: '1tta3j' }],
    ['path', { d: 'M3 6h.01', key: '1rqtza' }],
    ['path', { d: 'M8 12h13', key: '1za7za' }],
    ['path', { d: 'M8 18h13', key: '1lx6n3' }],
    ['path', { d: 'M8 6h13', key: 'ik3vkj' }],
  ],
  Wb = Ue('list', Ib);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pb = [
    ['path', { d: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z', key: '1lielz' }],
  ],
  xg = Ue('message-square', Pb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ey = [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' }],
    ['path', { d: 'M9 3v18', key: 'fh3hqa' }],
    ['path', { d: 'm16 15-3-3 3-3', key: '14y99z' }],
  ],
  ty = Ue('panel-left-close', ey);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ly = [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' }],
    ['path', { d: 'M9 3v18', key: 'fh3hqa' }],
  ],
  ay = Ue('panel-left', ly);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ny = [
    [
      'path',
      {
        d: 'M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z',
        key: '1a8usu',
      },
    ],
  ],
  iy = Ue('pen', ny);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ry = [
    ['path', { d: 'M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8', key: 'v9h5vc' }],
    ['path', { d: 'M21 3v5h-5', key: '1q7to0' }],
    ['path', { d: 'M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16', key: '3uifl3' }],
    ['path', { d: 'M8 16H3v5', key: '1cv678' }],
  ],
  uy = Ue('refresh-cw', ry);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sy = [
    ['path', { d: 'm21 21-4.34-4.34', key: '14j7rj' }],
    ['circle', { cx: '11', cy: '11', r: '8', key: '4ej97u' }],
  ],
  oy = Ue('search', sy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cy = [
    [
      'path',
      {
        d: 'M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z',
        key: '1qme2f',
      },
    ],
    ['circle', { cx: '12', cy: '12', r: '3', key: '1v7zrd' }],
  ],
  Sg = Ue('settings', cy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fy = [['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' }]],
  dy = Ue('square', fy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gy = [
    ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
    ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
  ],
  Hs = Ue('x', gy);
function Eg({ checked: r, onChange: c, label: f, className: o = '', title: p }) {
  const h = (_) => {
      (_.stopPropagation(), c(!r));
    },
    x = (_) => {
      (_.key === 'Enter' || _.key === ' ') && (_.preventDefault(), _.stopPropagation(), c(!r));
    };
  return s.jsxs('div', {
    className: `flex items-center gap-2 text-xs text-github-text-primary cursor-pointer ${o}`,
    title: p,
    onClick: h,
    onKeyDown: x,
    role: 'checkbox',
    'aria-checked': r,
    tabIndex: 0,
    children: [
      s.jsx('div', {
        className: `w-4 h-4 rounded border flex items-center justify-center transition-all duration-200 cursor-pointer ${r ? 'bg-github-accent border-github-accent' : 'bg-github-bg-tertiary border-github-text-muted hover:border-github-accent/50'}`,
        children: r && s.jsx(Gn, { size: 10, className: 'text-white' }),
      }),
      f && s.jsx('span', { className: 'select-none', children: f }),
    ],
  });
}
function hy({ commentsCount: r, isCopiedAll: c, onCopyAll: f, onDeleteAll: o, onViewAll: p }) {
  const [h, x] = H.useState(!1),
    _ = H.useRef(null);
  H.useEffect(() => {
    const b = (j) => {
      _.current && !_.current.contains(j.target) && x(!1);
    };
    return (
      document.addEventListener('mousedown', b),
      () => document.removeEventListener('mousedown', b)
    );
  }, []);
  const y = () => {
      (f(), x(!1));
    },
    g = () => {
      (o(), x(!1));
    },
    A = () => {
      (p?.(), x(!1));
    };
  return s.jsxs('div', {
    className: 'relative',
    ref: _,
    children: [
      s.jsxs('div', {
        className: 'flex',
        children: [
          s.jsxs('button', {
            onClick: y,
            className:
              'text-xs px-3 py-1.5 pr-2 rounded-l transition-all whitespace-nowrap flex items-center gap-1.5',
            style: {
              backgroundColor: 'var(--color-yellow-btn-bg)',
              color: 'var(--color-yellow-btn-text)',
              border: '1px solid var(--color-yellow-btn-border)',
              borderRight: 'none',
            },
            onMouseEnter: (b) => {
              ((b.currentTarget.style.backgroundColor = 'var(--color-yellow-btn-hover-bg)'),
                (b.currentTarget.style.borderColor = 'var(--color-yellow-btn-hover-border)'));
            },
            onMouseLeave: (b) => {
              ((b.currentTarget.style.backgroundColor = 'var(--color-yellow-btn-bg)'),
                (b.currentTarget.style.borderColor = 'var(--color-yellow-btn-border)'));
            },
            title: `Copy all ${r} comments to AI coding agent`,
            children: [
              c ? s.jsx(Gn, { size: 12 }) : s.jsx(pg, { size: 12 }),
              c ? 'Copied All!' : `Copy All Prompt (${r})`,
            ],
          }),
          s.jsx('button', {
            onClick: () => x(!h),
            className: 'text-xs px-2 py-1.5 rounded-r transition-all flex items-center border-l',
            style: {
              backgroundColor: 'var(--color-yellow-btn-bg)',
              color: 'var(--color-yellow-btn-text)',
              borderTop: '1px solid var(--color-yellow-btn-border)',
              borderRight: '1px solid var(--color-yellow-btn-border)',
              borderBottom: '1px solid var(--color-yellow-btn-border)',
              borderLeft: '1px solid var(--color-yellow-btn-border)',
            },
            onMouseEnter: (b) => {
              ((b.currentTarget.style.backgroundColor = 'var(--color-yellow-btn-hover-bg)'),
                (b.currentTarget.style.borderColor = 'var(--color-yellow-btn-hover-border)'));
            },
            onMouseLeave: (b) => {
              ((b.currentTarget.style.backgroundColor = 'var(--color-yellow-btn-bg)'),
                (b.currentTarget.style.borderColor = 'var(--color-yellow-btn-border)'));
            },
            title: 'More options',
            children: s.jsx(Bs, {
              size: 12,
              className: `transition-transform duration-200 ${h ? 'rotate-180' : ''}`,
            }),
          }),
        ],
      }),
      h &&
        s.jsxs('div', {
          className:
            'absolute left-0 right-0 bg-github-bg-primary border border-github-border rounded-b z-50 pb-px',
          style: { borderTop: 'none' },
          children: [
            p &&
              s.jsxs('button', {
                onClick: A,
                className:
                  'w-full text-left px-3 py-2 text-xs flex items-center gap-2 text-github-text-primary hover:bg-github-bg-tertiary transition-colors',
                disabled: r === 0,
                children: [s.jsx(Wb, { size: 12 }), 'View All Comments'],
              }),
            s.jsxs('button', {
              onClick: g,
              className:
                'w-full text-left px-3 py-2 text-xs flex items-center gap-2 text-github-text-primary hover:bg-github-bg-tertiary transition-colors',
              children: [s.jsx(qb, { size: 12 }), 'Cleanup All Prompt'],
            }),
          ],
        }),
    ],
  });
}
function qs({
  comment: r,
  onGeneratePrompt: c,
  onRemoveComment: f,
  onUpdateComment: o,
  onClick: p,
}) {
  const [h, x] = H.useState(!1),
    [_, y] = H.useState(!1),
    [g, A] = H.useState(r.body),
    b = async (N) => {
      N.stopPropagation();
      try {
        const S = c(r);
        (await navigator.clipboard.writeText(S), x(!0), setTimeout(() => x(!1), 2e3));
      } catch (S) {
        console.error('Failed to copy prompt:', S);
      }
    },
    j = (N) => {
      (N.stopPropagation(), y(!0), A(r.body));
    },
    B = () => {
      (y(!1), A(r.body));
    },
    E = (N) => {
      (N?.stopPropagation(), g.trim() !== r.body && o(r.id, g.trim()), y(!1));
    },
    w = (N) => {
      (N.stopPropagation(), f(r.id));
    },
    C = (N) => {
      N.key === 'Enter' && (N.metaKey || N.ctrlKey) ?
        (N.preventDefault(), E())
      : N.key === 'Escape' && (N.preventDefault(), B());
    };
  return (
    Me(
      'escape',
      () => {
        _ && B();
      },
      { enableOnFormTags: ['textarea'], enabled: _ },
      [_]
    ),
    Me(
      'mod+enter',
      () => {
        _ && E();
      },
      { enableOnFormTags: ['textarea'], enabled: _ },
      [_, g, r.body]
    ),
    s.jsxs('div', {
      id: `comment-${r.id}`,
      className: `p-3 bg-github-bg-tertiary border border-yellow-600/50 rounded-md border-l-4 border-l-yellow-400 shadow-sm transition-all ${p ? 'hover:shadow-md cursor-pointer' : ''}`,
      onClick: p,
      children: [
        s.jsxs('div', {
          className: 'flex items-center justify-between mb-2 gap-3',
          children: [
            s.jsx('div', {
              className:
                'flex items-center gap-2 text-xs text-github-text-secondary flex-1 min-w-0',
              children: s.jsxs('span', {
                className:
                  'font-mono px-1 py-0.5 rounded overflow-hidden text-ellipsis whitespace-nowrap',
                style: {
                  backgroundColor: 'var(--color-yellow-path-bg)',
                  color: 'var(--color-yellow-path-text)',
                },
                children: [
                  r.file,
                  ':',
                  Array.isArray(r.line) ? `${r.line[0]}-${r.line[1]}` : r.line,
                ],
              }),
            }),
            s.jsx('div', {
              className: 'flex items-center gap-2',
              children:
                !_ &&
                s.jsxs(s.Fragment, {
                  children: [
                    s.jsx('button', {
                      onClick: b,
                      className: 'text-xs px-2 py-1 rounded transition-all whitespace-nowrap',
                      style: {
                        backgroundColor: 'var(--color-yellow-btn-bg)',
                        color: 'var(--color-yellow-btn-text)',
                        border: '1px solid var(--color-yellow-btn-border)',
                      },
                      onMouseEnter: (N) => {
                        ((N.currentTarget.style.backgroundColor =
                          'var(--color-yellow-btn-hover-bg)'),
                          (N.currentTarget.style.borderColor =
                            'var(--color-yellow-btn-hover-border)'));
                      },
                      onMouseLeave: (N) => {
                        ((N.currentTarget.style.backgroundColor = 'var(--color-yellow-btn-bg)'),
                          (N.currentTarget.style.borderColor = 'var(--color-yellow-btn-border)'));
                      },
                      title: 'Copy prompt for AI coding agent',
                      children: h ? 'Copied!' : 'Copy Prompt',
                    }),
                    s.jsx('button', {
                      onClick: j,
                      className:
                        'text-xs p-1.5 bg-github-bg-tertiary text-github-text-secondary border border-github-border rounded hover:text-github-text-primary hover:bg-github-bg-primary transition-all',
                      title: 'Edit',
                      children: s.jsx(iy, { size: 12 }),
                    }),
                    s.jsx('button', {
                      onClick: w,
                      className:
                        'text-xs p-1.5 bg-github-bg-tertiary text-green-600 border border-github-border rounded hover:bg-green-500/10 hover:border-green-600 transition-all',
                      title: 'Resolve',
                      children: s.jsx(Gn, { size: 12 }),
                    }),
                  ],
                }),
            }),
          ],
        }),
        _ ?
          s.jsxs('div', {
            children: [
              s.jsx('textarea', {
                value: g,
                onChange: (N) => A(N.target.value),
                className:
                  'w-full text-github-text-primary text-sm leading-6 bg-github-bg-secondary border border-github-border rounded px-2 py-1 resize-none focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600/30',
                rows: Math.max(
                  2,
                  g.split(`
`).length
                ),
                placeholder: 'Edit your comment...',
                autoFocus: !0,
                onClick: (N) => N.stopPropagation(),
                onKeyDown: (N) => {
                  (N.stopPropagation(), C(N));
                },
              }),
              s.jsxs('div', {
                className: 'flex gap-2 justify-end mt-2',
                children: [
                  s.jsx('button', {
                    type: 'button',
                    onClick: B,
                    className:
                      'text-xs px-3 py-1.5 bg-github-bg-tertiary text-github-text-primary border border-github-border rounded hover:opacity-80 transition-all',
                    children: 'Cancel',
                  }),
                  s.jsx('button', {
                    type: 'button',
                    onClick: E,
                    className: 'text-xs px-3 py-1.5 rounded transition-all disabled:opacity-50',
                    style: {
                      backgroundColor: 'var(--color-yellow-btn-bg)',
                      color: 'var(--color-yellow-btn-text)',
                      border: '1px solid var(--color-yellow-btn-border)',
                    },
                    onMouseEnter: (N) => {
                      ((N.currentTarget.style.backgroundColor = 'var(--color-yellow-btn-hover-bg)'),
                        (N.currentTarget.style.borderColor =
                          'var(--color-yellow-btn-hover-border)'));
                    },
                    onMouseLeave: (N) => {
                      ((N.currentTarget.style.backgroundColor = 'var(--color-yellow-btn-bg)'),
                        (N.currentTarget.style.borderColor = 'var(--color-yellow-btn-border)'));
                    },
                    disabled: !g.trim(),
                    children: 'Submit',
                  }),
                ],
              }),
            ],
          })
        : s.jsx('div', {
            className: 'text-github-text-primary text-sm leading-6 whitespace-pre-wrap',
            children: r.body,
          }),
      ],
    })
  );
}
function py({
  isOpen: r,
  onClose: c,
  onNavigate: f,
  comments: o,
  onRemoveComment: p,
  onGeneratePrompt: h,
  onUpdateComment: x,
}) {
  const [_, y] = H.useState(0),
    g = H.useRef([]),
    { enableScope: A, disableScope: b } = ur(),
    j = [...o].sort((C, N) => {
      const S = C.file.localeCompare(N.file);
      if (S !== 0) return S;
      const R = Array.isArray(C.line) ? C.line[0] : C.line,
        V = Array.isArray(N.line) ? N.line[0] : N.line;
      return R - V;
    }),
    B = H.useCallback(
      (C) => {
        (f(C), c());
      },
      [f, c]
    ),
    E = H.useCallback(
      (C) => {
        confirm(`Delete this comment?

"${C.body}"`) && (p(C.id), _ >= j.length - 1 && _ > 0 && y(_ - 1));
      },
      [p, _, j.length]
    );
  H.useEffect(
    () => (
      r ? (A('comments-list'), b('navigation')) : (A('navigation'), b('comments-list'), y(0)),
      () => {
        (A('navigation'), b('comments-list'));
      }
    ),
    [r, A, b]
  );
  const w = { scopes: 'comments-list', enableOnFormTags: !1 };
  return (
    Me('escape', () => c(), w, [c]),
    Me('j, down', () => y((C) => Math.min(C + 1, j.length - 1)), w, [j.length]),
    Me('k, up', () => y((C) => Math.max(C - 1, 0)), w, []),
    Me(
      'enter',
      () => {
        j[_] && B(j[_]);
      },
      w,
      [_, j, B]
    ),
    Me(
      'd',
      () => {
        j[_] && E(j[_]);
      },
      w,
      [_, j, E]
    ),
    H.useEffect(() => {
      g.current[_] && g.current[_]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, [_]),
    r ?
      s.jsxs('div', {
        className: 'fixed inset-0 z-50 flex items-center justify-center',
        children: [
          s.jsx('div', { className: 'absolute inset-0 bg-black/50', onClick: c }),
          s.jsxs('div', {
            className:
              'relative bg-github-bg-primary border border-github-border rounded-lg shadow-lg max-w-4xl w-full max-h-[80vh] overflow-hidden',
            children: [
              s.jsxs('div', {
                className:
                  'sticky top-0 bg-github-bg-primary border-b border-github-border px-6 py-4',
                children: [
                  s.jsxs('div', {
                    className: 'flex items-center justify-between mb-2',
                    children: [
                      s.jsx('h2', {
                        className: 'text-lg font-semibold text-github-text-primary',
                        children: 'All Comments',
                      }),
                      s.jsx('button', {
                        onClick: c,
                        className:
                          'text-github-text-secondary hover:text-github-text-primary transition-colors',
                        'aria-label': 'Close comments list',
                        children: s.jsx(Hs, { size: 20 }),
                      }),
                    ],
                  }),
                  s.jsxs('div', {
                    className: 'text-xs text-github-text-secondary',
                    children: [
                      s.jsx('span', { className: 'font-mono', children: 'j/k' }),
                      ' or ',
                      s.jsx('span', { className: 'font-mono', children: '↑/↓' }),
                      ' to navigate • ',
                      s.jsx('span', { className: 'font-mono', children: 'Enter' }),
                      ' to jump •',
                      ' ',
                      s.jsx('span', { className: 'font-mono', children: 'd' }),
                      ' to delete • ',
                      s.jsx('span', { className: 'font-mono', children: 'Esc' }),
                      ' ',
                      'to close',
                    ],
                  }),
                ],
              }),
              s.jsx('div', {
                className: 'overflow-y-auto max-h-[calc(80vh-120px)]',
                children: s.jsx('div', {
                  className: 'p-6',
                  children:
                    j.length === 0 ?
                      s.jsx('p', {
                        className: 'text-github-text-secondary text-center',
                        children: 'No comments yet',
                      })
                    : s.jsxs(s.Fragment, {
                        children: [
                          s.jsx('div', {
                            className: 'space-y-2',
                            children: j.map((C, N) =>
                              s.jsx(
                                'div',
                                {
                                  ref: (S) => {
                                    g.current[N] = S;
                                  },
                                  className: `${_ === N ? 'ring-2 ring-blue-500 rounded' : ''}`,
                                  children: s.jsx(qs, {
                                    comment: C,
                                    onGeneratePrompt: h,
                                    onRemoveComment: p,
                                    onUpdateComment: x,
                                    onClick: (S) => {
                                      (S.stopPropagation(), y(N), B(C));
                                    },
                                  }),
                                },
                                C.id
                              )
                            ),
                          }),
                          j.length > 0 &&
                            s.jsxs('div', {
                              className:
                                'mt-4 pt-4 border-t border-github-border text-xs text-github-text-secondary text-center',
                              children: [_ + 1, ' of ', j.length, ' comments'],
                            }),
                        ],
                      }),
                }),
              }),
            ],
          }),
        ],
      })
    : null
  );
}
function Ng(r) {
  return (r && r.split('.').pop()?.toLowerCase()) || null;
}
function by(r) {
  return (r && r.split('/').pop()) || '';
}
const yy = [
  'jpg',
  'jpeg',
  'png',
  'gif',
  'bmp',
  'svg',
  'webp',
  'ico',
  'tiff',
  'tif',
  'avif',
  'heic',
  'heif',
];
function my(r) {
  if (!r) return !1;
  const c = Ng(r);
  return c ? yy.includes(c) : !1;
}
function wg({ onSubmit: r, onCancel: c }) {
  const [f, o] = H.useState(''),
    [p, h] = H.useState(!1),
    x = async (y) => {
      if ((y.preventDefault(), !!f.trim())) {
        h(!0);
        try {
          (await r(f.trim()), o(''));
        } catch (g) {
          console.error('Failed to submit comment:', g);
        } finally {
          h(!1);
        }
      }
    },
    _ = (y) => {
      y.key === 'Enter' && (y.metaKey || y.ctrlKey) ? x(y) : y.key === 'Escape' && c();
    };
  return s.jsxs('form', {
    className:
      'm-2 mx-3 p-3 bg-github-bg-tertiary border border-yellow-600/50 rounded-md border-l-4 border-l-yellow-400',
    onSubmit: x,
    children: [
      s.jsxs('div', {
        className: 'flex items-center justify-between mb-2',
        children: [
          s.jsx('span', {
            className: 'text-sm font-medium',
            style: { color: 'var(--color-yellow-path-text)' },
            children: 'Add a comment',
          }),
          s.jsx('span', {
            className: 'text-xs text-github-text-muted',
            children: 'Cmd+Enter to submit • Escape to cancel',
          }),
        ],
      }),
      s.jsx('textarea', {
        className:
          'w-full min-h-[60px] mb-2 resize-y bg-github-bg-secondary border border-github-border rounded px-3 py-2 text-github-text-primary text-sm leading-6 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/30 focus:min-h-[80px] disabled:opacity-50',
        value: f,
        onChange: (y) => o(y.target.value),
        onKeyDown: _,
        placeholder: 'Leave a comment...',
        rows: 3,
        autoFocus: !0,
        disabled: p,
      }),
      s.jsxs('div', {
        className: 'flex gap-2 justify-end',
        children: [
          s.jsx('button', {
            type: 'button',
            onClick: c,
            className:
              'text-xs px-3 py-1.5 bg-github-bg-tertiary text-github-text-primary border border-github-border rounded hover:opacity-80 transition-all disabled:opacity-50',
            disabled: p,
            children: 'Cancel',
          }),
          s.jsx('button', {
            type: 'submit',
            className: 'text-xs px-3 py-1.5 rounded transition-all disabled:opacity-50',
            style: {
              backgroundColor: 'var(--color-yellow-btn-bg)',
              color: 'var(--color-yellow-btn-text)',
              border: '1px solid var(--color-yellow-btn-border)',
            },
            onMouseEnter: (y) => {
              ((y.currentTarget.style.backgroundColor = 'var(--color-yellow-btn-hover-bg)'),
                (y.currentTarget.style.borderColor = 'var(--color-yellow-btn-hover-border)'));
            },
            onMouseLeave: (y) => {
              ((y.currentTarget.style.backgroundColor = 'var(--color-yellow-btn-bg)'),
                (y.currentTarget.style.borderColor = 'var(--color-yellow-btn-border)'));
            },
            disabled: !f.trim() || p,
            children: p ? 'Submitting...' : 'Submit',
          }),
        ],
      }),
    ],
  });
}
const ir = Yn.memo(({ onMouseDown: r, onMouseUp: c, title: f = 'Add a comment' }) =>
  s.jsx('button', {
    className:
      'absolute -right-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded transition-all duration-150 hover:scale-110 z-10',
    style: {
      backgroundColor: 'var(--color-yellow-btn-bg)',
      color: 'var(--color-yellow-btn-text)',
      border: '1px solid var(--color-yellow-btn-border)',
    },
    onMouseEnter: (o) => {
      ((o.currentTarget.style.backgroundColor = 'var(--color-yellow-btn-hover-bg)'),
        (o.currentTarget.style.borderColor = 'var(--color-yellow-btn-hover-border)'));
    },
    onMouseLeave: (o) => {
      ((o.currentTarget.style.backgroundColor = 'var(--color-yellow-btn-bg)'),
        (o.currentTarget.style.borderColor = 'var(--color-yellow-btn-border)'));
    },
    onMouseDown: r,
    onMouseUp: c,
    title: f,
    children: s.jsx(xg, { className: 'w-4 h-4' }),
  })
);
ir.displayName = 'CommentButton';
const vy = 2,
  xy = 100;
function Sy(r) {
  return !(r.length < vy || r.length > xy);
}
function Vd(r) {
  return r.toLowerCase();
}
function Qd(r) {
  const c = r.trim();
  return c ? c.match(/^\w+$/) !== null && Sy(c) : !1;
}
const Ey = 200,
  Ag = H.createContext(void 0);
function Ny({ children: r }) {
  const [c, f] = H.useState(null),
    o = H.useRef(null),
    p = H.useCallback(() => {
      o.current && (clearTimeout(o.current), (o.current = null));
    }, []),
    h = H.useCallback(
      (g) => {
        const A = g.target;
        if (!A.classList.contains('word-token')) return;
        p();
        const b = A.getAttribute('data-word');
        b &&
          (o.current = setTimeout(() => {
            f(b);
          }, Ey));
      },
      [p]
    ),
    x = H.useCallback(() => {
      (p(), f(null));
    }, [p]),
    _ = H.useCallback((g) => (c ? Vd(g) === Vd(c) : !1), [c]);
  H.useEffect(
    () => () => {
      o.current && clearTimeout(o.current);
    },
    []
  );
  const y = { highlightedWord: c, handleMouseOver: h, handleMouseOut: x, isWordHighlighted: _ };
  return s.jsx(Ag.Provider, { value: y, children: r });
}
function wy() {
  const r = H.useContext(Ag);
  if (!r) throw new Error('useWordHighlight must be used within a WordHighlightProvider');
  return r;
}
function Tg(r) {
  var c,
    f,
    o = '';
  if (typeof r == 'string' || typeof r == 'number') o += r;
  else if (typeof r == 'object')
    if (Array.isArray(r)) {
      var p = r.length;
      for (c = 0; c < p; c++) r[c] && (f = Tg(r[c])) && (o && (o += ' '), (o += f));
    } else for (f in r) r[f] && (o && (o += ' '), (o += f));
  return o;
}
function _g() {
  for (var r, c, f = 0, o = '', p = arguments.length; f < p; f++)
    (r = arguments[f]) && (c = Tg(r)) && (o && (o += ' '), (o += c));
  return o;
}
var Ay = Object.create,
  sr = Object.defineProperty,
  Ty = Object.defineProperties,
  _y = Object.getOwnPropertyDescriptor,
  jy = Object.getOwnPropertyDescriptors,
  jg = Object.getOwnPropertyNames,
  rr = Object.getOwnPropertySymbols,
  Cy = Object.getPrototypeOf,
  Gs = Object.prototype.hasOwnProperty,
  Cg = Object.prototype.propertyIsEnumerable,
  Fd = (r, c, f) =>
    c in r ? sr(r, c, { enumerable: !0, configurable: !0, writable: !0, value: f }) : (r[c] = f),
  Yt = (r, c) => {
    for (var f in c || (c = {})) Gs.call(c, f) && Fd(r, f, c[f]);
    if (rr) for (var f of rr(c)) Cg.call(c, f) && Fd(r, f, c[f]);
    return r;
  },
  or = (r, c) => Ty(r, jy(c)),
  kg = (r, c) => {
    var f = {};
    for (var o in r) Gs.call(r, o) && c.indexOf(o) < 0 && (f[o] = r[o]);
    if (r != null && rr) for (var o of rr(r)) c.indexOf(o) < 0 && Cg.call(r, o) && (f[o] = r[o]);
    return f;
  },
  ky = (r, c) =>
    function () {
      return (c || (0, r[jg(r)[0]])((c = { exports: {} }).exports, c), c.exports);
    },
  Oy = (r, c) => {
    for (var f in c) sr(r, f, { get: c[f], enumerable: !0 });
  },
  Ry = (r, c, f, o) => {
    if ((c && typeof c == 'object') || typeof c == 'function')
      for (let p of jg(c))
        !Gs.call(r, p) &&
          p !== f &&
          sr(r, p, { get: () => c[p], enumerable: !(o = _y(c, p)) || o.enumerable });
    return r;
  },
  Dy = (r, c, f) => (
    (f = r != null ? Ay(Cy(r)) : {}),
    Ry(!r || !r.__esModule ? sr(f, 'default', { value: r, enumerable: !0 }) : f, r)
  ),
  zy = ky({
    '../../node_modules/.pnpm/prismjs@1.29.0_patch_hash=vrxx3pzkik6jpmgpayxfjunetu/node_modules/prismjs/prism.js'(
      r,
      c
    ) {
      var f = (function () {
        var o = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
          p = 0,
          h = {},
          x = {
            util: {
              encode: function E(w) {
                return (
                  w instanceof _ ? new _(w.type, E(w.content), w.alias)
                  : Array.isArray(w) ? w.map(E)
                  : w
                      .replace(/&/g, '&amp;')
                      .replace(/</g, '&lt;')
                      .replace(/\u00a0/g, ' ')
                );
              },
              type: function (E) {
                return Object.prototype.toString.call(E).slice(8, -1);
              },
              objId: function (E) {
                return (E.__id || Object.defineProperty(E, '__id', { value: ++p }), E.__id);
              },
              clone: function E(w, C) {
                C = C || {};
                var N, S;
                switch (x.util.type(w)) {
                  case 'Object':
                    if (((S = x.util.objId(w)), C[S])) return C[S];
                    ((N = {}), (C[S] = N));
                    for (var R in w) w.hasOwnProperty(R) && (N[R] = E(w[R], C));
                    return N;
                  case 'Array':
                    return (
                      (S = x.util.objId(w)),
                      C[S] ?
                        C[S]
                      : ((N = []),
                        (C[S] = N),
                        w.forEach(function (V, K) {
                          N[K] = E(V, C);
                        }),
                        N)
                    );
                  default:
                    return w;
                }
              },
              getLanguage: function (E) {
                for (; E; ) {
                  var w = o.exec(E.className);
                  if (w) return w[1].toLowerCase();
                  E = E.parentElement;
                }
                return 'none';
              },
              setLanguage: function (E, w) {
                ((E.className = E.className.replace(RegExp(o, 'gi'), '')),
                  E.classList.add('language-' + w));
              },
              isActive: function (E, w, C) {
                for (var N = 'no-' + w; E; ) {
                  var S = E.classList;
                  if (S.contains(w)) return !0;
                  if (S.contains(N)) return !1;
                  E = E.parentElement;
                }
                return !!C;
              },
            },
            languages: {
              plain: h,
              plaintext: h,
              text: h,
              txt: h,
              extend: function (E, w) {
                var C = x.util.clone(x.languages[E]);
                for (var N in w) C[N] = w[N];
                return C;
              },
              insertBefore: function (E, w, C, N) {
                N = N || x.languages;
                var S = N[E],
                  R = {};
                for (var V in S)
                  if (S.hasOwnProperty(V)) {
                    if (V == w) for (var K in C) C.hasOwnProperty(K) && (R[K] = C[K]);
                    C.hasOwnProperty(V) || (R[V] = S[V]);
                  }
                var ie = N[E];
                return (
                  (N[E] = R),
                  x.languages.DFS(x.languages, function (re, he) {
                    he === ie && re != E && (this[re] = R);
                  }),
                  R
                );
              },
              DFS: function E(w, C, N, S) {
                S = S || {};
                var R = x.util.objId;
                for (var V in w)
                  if (w.hasOwnProperty(V)) {
                    C.call(w, V, w[V], N || V);
                    var K = w[V],
                      ie = x.util.type(K);
                    ie === 'Object' && !S[R(K)] ?
                      ((S[R(K)] = !0), E(K, C, null, S))
                    : ie === 'Array' && !S[R(K)] && ((S[R(K)] = !0), E(K, C, V, S));
                  }
              },
            },
            plugins: {},
            highlight: function (E, w, C) {
              var N = { code: E, grammar: w, language: C };
              if ((x.hooks.run('before-tokenize', N), !N.grammar))
                throw new Error('The language "' + N.language + '" has no grammar.');
              return (
                (N.tokens = x.tokenize(N.code, N.grammar)),
                x.hooks.run('after-tokenize', N),
                _.stringify(x.util.encode(N.tokens), N.language)
              );
            },
            tokenize: function (E, w) {
              var C = w.rest;
              if (C) {
                for (var N in C) w[N] = C[N];
                delete w.rest;
              }
              var S = new A();
              return (b(S, S.head, E), g(E, S, w, S.head, 0), B(S));
            },
            hooks: {
              all: {},
              add: function (E, w) {
                var C = x.hooks.all;
                ((C[E] = C[E] || []), C[E].push(w));
              },
              run: function (E, w) {
                var C = x.hooks.all[E];
                if (!(!C || !C.length)) for (var N = 0, S; (S = C[N++]); ) S(w);
              },
            },
            Token: _,
          };
        function _(E, w, C, N) {
          ((this.type = E),
            (this.content = w),
            (this.alias = C),
            (this.length = (N || '').length | 0));
        }
        _.stringify = function E(w, C) {
          if (typeof w == 'string') return w;
          if (Array.isArray(w)) {
            var N = '';
            return (
              w.forEach(function (ie) {
                N += E(ie, C);
              }),
              N
            );
          }
          var S = {
              type: w.type,
              content: E(w.content, C),
              tag: 'span',
              classes: ['token', w.type],
              attributes: {},
              language: C,
            },
            R = w.alias;
          (R && (Array.isArray(R) ? Array.prototype.push.apply(S.classes, R) : S.classes.push(R)),
            x.hooks.run('wrap', S));
          var V = '';
          for (var K in S.attributes)
            V += ' ' + K + '="' + (S.attributes[K] || '').replace(/"/g, '&quot;') + '"';
          return (
            '<' +
            S.tag +
            ' class="' +
            S.classes.join(' ') +
            '"' +
            V +
            '>' +
            S.content +
            '</' +
            S.tag +
            '>'
          );
        };
        function y(E, w, C, N) {
          E.lastIndex = w;
          var S = E.exec(C);
          if (S && N && S[1]) {
            var R = S[1].length;
            ((S.index += R), (S[0] = S[0].slice(R)));
          }
          return S;
        }
        function g(E, w, C, N, S, R) {
          for (var V in C)
            if (!(!C.hasOwnProperty(V) || !C[V])) {
              var K = C[V];
              K = Array.isArray(K) ? K : [K];
              for (var ie = 0; ie < K.length; ++ie) {
                if (R && R.cause == V + ',' + ie) return;
                var re = K[ie],
                  he = re.inside,
                  oe = !!re.lookbehind,
                  ce = !!re.greedy,
                  P = re.alias;
                if (ce && !re.pattern.global) {
                  var ne = re.pattern.toString().match(/[imsuy]*$/)[0];
                  re.pattern = RegExp(re.pattern.source, ne + 'g');
                }
                for (
                  var W = re.pattern || re, M = N.next, ee = S;
                  M !== w.tail && !(R && ee >= R.reach);
                  ee += M.value.length, M = M.next
                ) {
                  var O = M.value;
                  if (w.length > E.length) return;
                  if (!(O instanceof _)) {
                    var F = 1,
                      Q;
                    if (ce) {
                      if (((Q = y(W, ee, E, oe)), !Q || Q.index >= E.length)) break;
                      var I = Q.index,
                        te = Q.index + Q[0].length,
                        v = ee;
                      for (v += M.value.length; I >= v; ) ((M = M.next), (v += M.value.length));
                      if (((v -= M.value.length), (ee = v), M.value instanceof _)) continue;
                      for (
                        var q = M;
                        q !== w.tail && (v < te || typeof q.value == 'string');
                        q = q.next
                      )
                        (F++, (v += q.value.length));
                      (F--, (O = E.slice(ee, v)), (Q.index -= ee));
                    } else if (((Q = y(W, 0, O, oe)), !Q)) continue;
                    var I = Q.index,
                      $ = Q[0],
                      le = O.slice(0, I),
                      ue = O.slice(I + $.length),
                      J = ee + O.length;
                    R && J > R.reach && (R.reach = J);
                    var ye = M.prev;
                    (le && ((ye = b(w, ye, le)), (ee += le.length)), j(w, ye, F));
                    var pe = new _(V, he ? x.tokenize($, he) : $, P, $);
                    if (((M = b(w, ye, pe)), ue && b(w, M, ue), F > 1)) {
                      var nt = { cause: V + ',' + ie, reach: J };
                      (g(E, w, C, M.prev, ee, nt), R && nt.reach > R.reach && (R.reach = nt.reach));
                    }
                  }
                }
              }
            }
        }
        function A() {
          var E = { value: null, prev: null, next: null },
            w = { value: null, prev: E, next: null };
          ((E.next = w), (this.head = E), (this.tail = w), (this.length = 0));
        }
        function b(E, w, C) {
          var N = w.next,
            S = { value: C, prev: w, next: N };
          return ((w.next = S), (N.prev = S), E.length++, S);
        }
        function j(E, w, C) {
          for (var N = w.next, S = 0; S < C && N !== E.tail; S++) N = N.next;
          ((w.next = N), (N.prev = w), (E.length -= S));
        }
        function B(E) {
          for (var w = [], C = E.head.next; C !== E.tail; ) (w.push(C.value), (C = C.next));
          return w;
        }
        return x;
      })();
      ((c.exports = f), (f.default = f));
    },
  }),
  Y = Dy(zy());
((Y.languages.markup = {
  comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
  prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
  doctype: {
    pattern:
      /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: !0,
    inside: {
      'internal-subset': {
        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
        lookbehind: !0,
        greedy: !0,
        inside: null,
      },
      string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
      punctuation: /^<!|>$|[[\]]/,
      'doctype-tag': /^DOCTYPE/i,
      name: /[^\s<>'"]+/,
    },
  },
  cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
  tag: {
    pattern:
      /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: !0,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/,
        inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
      },
      'special-attr': [],
      'attr-value': {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          punctuation: [
            { pattern: /^=/, alias: 'attr-equals' },
            { pattern: /^(\s*)["']|["']$/, lookbehind: !0 },
          ],
        },
      },
      punctuation: /\/?>/,
      'attr-name': { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } },
    },
  },
  entity: [{ pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' }, /&#x?[\da-f]{1,8};/i],
}),
  (Y.languages.markup.tag.inside['attr-value'].inside.entity = Y.languages.markup.entity),
  (Y.languages.markup.doctype.inside['internal-subset'].inside = Y.languages.markup),
  Y.hooks.add('wrap', function (r) {
    r.type === 'entity' && (r.attributes.title = r.content.replace(/&amp;/, '&'));
  }),
  Object.defineProperty(Y.languages.markup.tag, 'addInlined', {
    value: function (r, o) {
      var f = {},
        f =
          ((f['language-' + o] = {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: !0,
            inside: Y.languages[o],
          }),
          (f.cdata = /^<!\[CDATA\[|\]\]>$/i),
          { 'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: f } }),
        o = ((f['language-' + o] = { pattern: /[\s\S]+/, inside: Y.languages[o] }), {});
      ((o[r] = {
        pattern: RegExp(
          /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
            /__/g,
            function () {
              return r;
            }
          ),
          'i'
        ),
        lookbehind: !0,
        greedy: !0,
        inside: f,
      }),
        Y.languages.insertBefore('markup', 'cdata', o));
    },
  }),
  Object.defineProperty(Y.languages.markup.tag, 'addAttribute', {
    value: function (r, c) {
      Y.languages.markup.tag.inside['special-attr'].push({
        pattern: RegExp(
          /(^|["'\s])/.source +
            '(?:' +
            r +
            ')' +
            /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
          'i'
        ),
        lookbehind: !0,
        inside: {
          'attr-name': /^[^\s=]+/,
          'attr-value': {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: !0,
                alias: [c, 'language-' + c],
                inside: Y.languages[c],
              },
              punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/],
            },
          },
        },
      });
    },
  }),
  (Y.languages.html = Y.languages.markup),
  (Y.languages.mathml = Y.languages.markup),
  (Y.languages.svg = Y.languages.markup),
  (Y.languages.xml = Y.languages.extend('markup', {})),
  (Y.languages.ssml = Y.languages.xml),
  (Y.languages.atom = Y.languages.xml),
  (Y.languages.rss = Y.languages.xml),
  (function (r) {
    var c = { pattern: /\\[\\(){}[\]^$+*?|.]/, alias: 'escape' },
      f =
        /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/,
      o = '(?:[^\\\\-]|' + f.source + ')',
      o = RegExp(o + '-' + o),
      p = { pattern: /(<|')[^<>']+(?=[>']$)/, lookbehind: !0, alias: 'variable' };
    r.languages.regex = {
      'char-class': {
        pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,
        lookbehind: !0,
        inside: {
          'char-class-negation': { pattern: /(^\[)\^/, lookbehind: !0, alias: 'operator' },
          'char-class-punctuation': { pattern: /^\[|\]$/, alias: 'punctuation' },
          range: {
            pattern: o,
            inside: { escape: f, 'range-punctuation': { pattern: /-/, alias: 'operator' } },
          },
          'special-escape': c,
          'char-set': { pattern: /\\[wsd]|\\p\{[^{}]+\}/i, alias: 'class-name' },
          escape: f,
        },
      },
      'special-escape': c,
      'char-set': { pattern: /\.|\\[wsd]|\\p\{[^{}]+\}/i, alias: 'class-name' },
      backreference: [
        { pattern: /\\(?![123][0-7]{2})[1-9]/, alias: 'keyword' },
        { pattern: /\\k<[^<>']+>/, alias: 'keyword', inside: { 'group-name': p } },
      ],
      anchor: { pattern: /[$^]|\\[ABbGZz]/, alias: 'function' },
      escape: f,
      group: [
        {
          pattern: /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,
          alias: 'punctuation',
          inside: { 'group-name': p },
        },
        { pattern: /\)/, alias: 'punctuation' },
      ],
      quantifier: { pattern: /(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/, alias: 'number' },
      alternation: { pattern: /\|/, alias: 'keyword' },
    };
  })(Y),
  (Y.languages.clike = {
    comment: [
      { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 },
      { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
    ],
    string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
    'class-name': {
      pattern:
        /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: { punctuation: /[.\\]/ },
    },
    keyword:
      /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/,
  }),
  (Y.languages.javascript = Y.languages.extend('clike', {
    'class-name': [
      Y.languages.clike['class-name'],
      {
        pattern:
          /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0,
      },
    ],
    keyword: [
      { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
      {
        pattern:
          /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0,
      },
    ],
    function:
      /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(
        /(^|[^\w$])/.source +
          '(?:' +
          /NaN|Infinity/.source +
          '|' +
          /0[bB][01]+(?:_[01]+)*n?/.source +
          '|' +
          /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
          '|' +
          /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
          '|' +
          /\d+(?:_\d+)*n/.source +
          '|' +
          /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
            .source +
          ')' +
          /(?![\w$])/.source
      ),
      lookbehind: !0,
    },
    operator:
      /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
  })),
  (Y.languages.javascript['class-name'][0].pattern =
    /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
  Y.languages.insertBefore('javascript', 'keyword', {
    regex: {
      pattern: RegExp(
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source +
          /\//.source +
          '(?:' +
          /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source +
          '|' +
          /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/
            .source +
          ')' +
          /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        'regex-source': {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: 'language-regex',
          inside: Y.languages.regex,
        },
        'regex-delimiter': /^\/|\/$/,
        'regex-flags': /^[a-z]+$/,
      },
    },
    'function-variable': {
      pattern:
        /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: 'function',
    },
    parameter: [
      {
        pattern:
          /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: Y.languages.javascript,
      },
      {
        pattern:
          /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: !0,
        inside: Y.languages.javascript,
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: Y.languages.javascript,
      },
      {
        pattern:
          /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: Y.languages.javascript,
      },
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
  }),
  Y.languages.insertBefore('javascript', 'string', {
    hashbang: { pattern: /^#!.*/, greedy: !0, alias: 'comment' },
    'template-string': {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: !0,
      inside: {
        'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: !0,
          inside: {
            'interpolation-punctuation': { pattern: /^\$\{|\}$/, alias: 'punctuation' },
            rest: Y.languages.javascript,
          },
        },
        string: /[\s\S]+/,
      },
    },
    'string-property': {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: !0,
      greedy: !0,
      alias: 'property',
    },
  }),
  Y.languages.insertBefore('javascript', 'operator', {
    'literal-property': {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: !0,
      alias: 'property',
    },
  }),
  Y.languages.markup &&
    (Y.languages.markup.tag.addInlined('script', 'javascript'),
    Y.languages.markup.tag.addAttribute(
      /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
        .source,
      'javascript'
    )),
  (Y.languages.js = Y.languages.javascript),
  (Y.languages.actionscript = Y.languages.extend('javascript', {
    keyword:
      /\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,
    operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/,
  })),
  (Y.languages.actionscript['class-name'].alias = 'function'),
  delete Y.languages.actionscript.parameter,
  delete Y.languages.actionscript['literal-property'],
  Y.languages.markup &&
    Y.languages.insertBefore('actionscript', 'string', {
      xml: {
        pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
        lookbehind: !0,
        inside: Y.languages.markup,
      },
    }),
  (function (r) {
    var c = /#(?!\{).+/,
      f = { pattern: /#\{[^}]+\}/, alias: 'variable' };
    ((r.languages.coffeescript = r.languages.extend('javascript', {
      comment: c,
      string: [
        { pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0 },
        { pattern: /"(?:\\[\s\S]|[^\\"])*"/, greedy: !0, inside: { interpolation: f } },
      ],
      keyword:
        /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
      'class-member': { pattern: /@(?!\d)\w+/, alias: 'variable' },
    })),
      r.languages.insertBefore('coffeescript', 'comment', {
        'multiline-comment': { pattern: /###[\s\S]+?###/, alias: 'comment' },
        'block-regex': {
          pattern: /\/{3}[\s\S]*?\/{3}/,
          alias: 'regex',
          inside: { comment: c, interpolation: f },
        },
      }),
      r.languages.insertBefore('coffeescript', 'string', {
        'inline-javascript': {
          pattern: /`(?:\\[\s\S]|[^\\`])*`/,
          inside: {
            delimiter: { pattern: /^`|`$/, alias: 'punctuation' },
            script: {
              pattern: /[\s\S]+/,
              alias: 'language-javascript',
              inside: r.languages.javascript,
            },
          },
        },
        'multiline-string': [
          { pattern: /'''[\s\S]*?'''/, greedy: !0, alias: 'string' },
          { pattern: /"""[\s\S]*?"""/, greedy: !0, alias: 'string', inside: { interpolation: f } },
        ],
      }),
      r.languages.insertBefore('coffeescript', 'keyword', { property: /(?!\d)\w+(?=\s*:(?!:))/ }),
      delete r.languages.coffeescript['template-string'],
      (r.languages.coffee = r.languages.coffeescript));
  })(Y),
  (function (r) {
    var c = (r.languages.javadoclike = {
      parameter: {
        pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,
        lookbehind: !0,
      },
      keyword: { pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m, lookbehind: !0 },
      punctuation: /[{}]/,
    });
    (Object.defineProperty(c, 'addSupport', {
      value: function (f, o) {
        (f = typeof f == 'string' ? [f] : f).forEach(function (p) {
          var h = function (b) {
              (b.inside || (b.inside = {}), (b.inside.rest = o));
            },
            x = 'doc-comment';
          if ((_ = r.languages[p])) {
            var _,
              y = _[x];
            if (
              ((y =
                y ||
                (_ = r.languages.insertBefore(p, 'comment', {
                  'doc-comment': {
                    pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
                    lookbehind: !0,
                    alias: 'comment',
                  },
                }))[x]) instanceof RegExp && (y = _[x] = { pattern: y }),
              Array.isArray(y))
            )
              for (var g = 0, A = y.length; g < A; g++)
                (y[g] instanceof RegExp && (y[g] = { pattern: y[g] }), h(y[g]));
            else h(y);
          }
        });
      },
    }),
      c.addSupport(['java', 'javascript', 'php'], c));
  })(Y),
  (function (r) {
    var c = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,
      c =
        ((r.languages.css = {
          comment: /\/\*[\s\S]*?\*\//,
          atrule: {
            pattern: RegExp(
              '@[\\w-](?:' +
                /[^;{\s"']|\s+(?!\s)/.source +
                '|' +
                c.source +
                ')*?' +
                /(?:;|(?=\s*\{))/.source
            ),
            inside: {
              rule: /^@[\w-]+/,
              'selector-function-argument': {
                pattern:
                  /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                lookbehind: !0,
                alias: 'selector',
              },
              keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 },
            },
          },
          url: {
            pattern: RegExp(
              '\\burl\\((?:' + c.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)',
              'i'
            ),
            greedy: !0,
            inside: {
              function: /^url/i,
              punctuation: /^\(|\)$/,
              string: { pattern: RegExp('^' + c.source + '$'), alias: 'url' },
            },
          },
          selector: {
            pattern: RegExp(
              `(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + c.source + ')*(?=\\s*\\{)'
            ),
            lookbehind: !0,
          },
          string: { pattern: c, greedy: !0 },
          property: {
            pattern:
              /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            lookbehind: !0,
          },
          important: /!important\b/i,
          function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 },
          punctuation: /[(){};:,]/,
        }),
        (r.languages.css.atrule.inside.rest = r.languages.css),
        r.languages.markup);
    c && (c.tag.addInlined('style', 'css'), c.tag.addAttribute('style', 'css'));
  })(Y),
  (function (r) {
    var c = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      c =
        ((r.languages.css.selector = {
          pattern: r.languages.css.selector.pattern,
          lookbehind: !0,
          inside: (c = {
            'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
            'pseudo-class': /:[-\w]+/,
            class: /\.[-\w]+/,
            id: /#[-\w]+/,
            attribute: {
              pattern: RegExp(`\\[(?:[^[\\]"']|` + c.source + ')*\\]'),
              greedy: !0,
              inside: {
                punctuation: /^\[|\]$/,
                'case-sensitivity': { pattern: /(\s)[si]$/i, lookbehind: !0, alias: 'keyword' },
                namespace: {
                  pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
                  lookbehind: !0,
                  inside: { punctuation: /\|$/ },
                },
                'attr-name': { pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/, lookbehind: !0 },
                'attr-value': [
                  c,
                  { pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/, lookbehind: !0 },
                ],
                operator: /[|~*^$]?=/,
              },
            },
            'n-th': [
              {
                pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                lookbehind: !0,
                inside: { number: /[\dn]+/, operator: /[+-]/ },
              },
              { pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0 },
            ],
            combinator: />|\+|~|\|\|/,
            punctuation: /[(),]/,
          }),
        }),
        (r.languages.css.atrule.inside['selector-function-argument'].inside = c),
        r.languages.insertBefore('css', 'property', {
          variable: {
            pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
            lookbehind: !0,
          },
        }),
        { pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/, lookbehind: !0 }),
      f = { pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/, lookbehind: !0 };
    r.languages.insertBefore('css', 'function', {
      operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0 },
      hexcode: { pattern: /\B#[\da-f]{3,8}\b/i, alias: 'color' },
      color: [
        {
          pattern:
            /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
          lookbehind: !0,
        },
        {
          pattern:
            /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
          inside: { unit: c, number: f, function: /[\w-]+(?=\()/, punctuation: /[(),]/ },
        },
      ],
      entity: /\\[\da-f]{1,8}/i,
      unit: c,
      number: f,
    });
  })(Y),
  (function (r) {
    var c = /[*&][^\s[\]{},]+/,
      f = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
      o = '(?:' + f.source + '(?:[ 	]+' + c.source + ')?|' + c.source + '(?:[ 	]+' + f.source + ')?)',
      p =
        /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
          /<PLAIN>/g,
          function () {
            return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/
              .source;
          }
        ),
      h = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
    function x(_, y) {
      y = (y || '').replace(/m/g, '') + 'm';
      var g =
        /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
          .replace(/<<prop>>/g, function () {
            return o;
          })
          .replace(/<<value>>/g, function () {
            return _;
          });
      return RegExp(g, y);
    }
    ((r.languages.yaml = {
      scalar: {
        pattern: RegExp(
          /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
            /<<prop>>/g,
            function () {
              return o;
            }
          )
        ),
        lookbehind: !0,
        alias: 'string',
      },
      comment: /#.*/,
      key: {
        pattern: RegExp(
          /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
            .replace(/<<prop>>/g, function () {
              return o;
            })
            .replace(/<<key>>/g, function () {
              return '(?:' + p + '|' + h + ')';
            })
        ),
        lookbehind: !0,
        greedy: !0,
        alias: 'atrule',
      },
      directive: { pattern: /(^[ \t]*)%.+/m, lookbehind: !0, alias: 'important' },
      datetime: {
        pattern: x(
          /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
            .source
        ),
        lookbehind: !0,
        alias: 'number',
      },
      boolean: { pattern: x(/false|true/.source, 'i'), lookbehind: !0, alias: 'important' },
      null: { pattern: x(/null|~/.source, 'i'), lookbehind: !0, alias: 'important' },
      string: { pattern: x(h), lookbehind: !0, greedy: !0 },
      number: {
        pattern: x(
          /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,
          'i'
        ),
        lookbehind: !0,
      },
      tag: f,
      important: c,
      punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
    }),
      (r.languages.yml = r.languages.yaml));
  })(Y),
  (function (r) {
    var c = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
    function f(g) {
      return (
        (g = g.replace(/<inner>/g, function () {
          return c;
        })),
        RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + g + ')')
      );
    }
    var o = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,
      p = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function () {
        return o;
      }),
      h = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source,
      x =
        ((r.languages.markdown = r.languages.extend('markup', {})),
        r.languages.insertBefore('markdown', 'prolog', {
          'front-matter-block': {
            pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
            lookbehind: !0,
            greedy: !0,
            inside: {
              punctuation: /^---|---$/,
              'front-matter': {
                pattern: /\S+(?:\s+\S+)*/,
                alias: ['yaml', 'language-yaml'],
                inside: r.languages.yaml,
              },
            },
          },
          blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: 'punctuation' },
          table: {
            pattern: RegExp('^' + p + h + '(?:' + p + ')*', 'm'),
            inside: {
              'table-data-rows': {
                pattern: RegExp('^(' + p + h + ')(?:' + p + ')*$'),
                lookbehind: !0,
                inside: {
                  'table-data': { pattern: RegExp(o), inside: r.languages.markdown },
                  punctuation: /\|/,
                },
              },
              'table-line': {
                pattern: RegExp('^(' + p + ')' + h + '$'),
                lookbehind: !0,
                inside: { punctuation: /\||:?-{3,}:?/ },
              },
              'table-header-row': {
                pattern: RegExp('^' + p + '$'),
                inside: {
                  'table-header': {
                    pattern: RegExp(o),
                    alias: 'important',
                    inside: r.languages.markdown,
                  },
                  punctuation: /\|/,
                },
              },
            },
          },
          code: [
            {
              pattern:
                /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
              lookbehind: !0,
              alias: 'keyword',
            },
            {
              pattern: /^```[\s\S]*?^```$/m,
              greedy: !0,
              inside: {
                'code-block': {
                  pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                  lookbehind: !0,
                },
                'code-language': { pattern: /^(```).+/, lookbehind: !0 },
                punctuation: /```/,
              },
            },
          ],
          title: [
            {
              pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
              alias: 'important',
              inside: { punctuation: /==+$|--+$/ },
            },
            {
              pattern: /(^\s*)#.+/m,
              lookbehind: !0,
              alias: 'important',
              inside: { punctuation: /^#+|#+$/ },
            },
          ],
          hr: {
            pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
            lookbehind: !0,
            alias: 'punctuation',
          },
          list: {
            pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
            lookbehind: !0,
            alias: 'punctuation',
          },
          'url-reference': {
            pattern:
              /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
            inside: {
              variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
              string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
              punctuation: /^[\[\]!:]|[<>]/,
            },
            alias: 'url',
          },
          bold: {
            pattern: f(
              /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
                .source
            ),
            lookbehind: !0,
            greedy: !0,
            inside: {
              content: { pattern: /(^..)[\s\S]+(?=..$)/, lookbehind: !0, inside: {} },
              punctuation: /\*\*|__/,
            },
          },
          italic: {
            pattern: f(
              /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
                .source
            ),
            lookbehind: !0,
            greedy: !0,
            inside: {
              content: { pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: !0, inside: {} },
              punctuation: /[*_]/,
            },
          },
          strike: {
            pattern: f(/(~~?)(?:(?!~)<inner>)+\2/.source),
            lookbehind: !0,
            greedy: !0,
            inside: {
              content: { pattern: /(^~~?)[\s\S]+(?=\1$)/, lookbehind: !0, inside: {} },
              punctuation: /~~?/,
            },
          },
          'code-snippet': {
            pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
            lookbehind: !0,
            greedy: !0,
            alias: ['code', 'keyword'],
          },
          url: {
            pattern: f(
              /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
                .source
            ),
            lookbehind: !0,
            greedy: !0,
            inside: {
              operator: /^!/,
              content: { pattern: /(^\[)[^\]]+(?=\])/, lookbehind: !0, inside: {} },
              variable: { pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: !0 },
              url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
              string: { pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/, lookbehind: !0 },
            },
          },
        }),
        ['url', 'bold', 'italic', 'strike'].forEach(function (g) {
          ['url', 'bold', 'italic', 'strike', 'code-snippet'].forEach(function (A) {
            g !== A && (r.languages.markdown[g].inside.content.inside[A] = r.languages.markdown[A]);
          });
        }),
        r.hooks.add('after-tokenize', function (g) {
          (g.language !== 'markdown' && g.language !== 'md') ||
            (function A(b) {
              if (b && typeof b != 'string')
                for (var j = 0, B = b.length; j < B; j++) {
                  var E,
                    w = b[j];
                  w.type !== 'code' ?
                    A(w.content)
                  : ((E = w.content[1]),
                    (w = w.content[3]),
                    E &&
                      w &&
                      E.type === 'code-language' &&
                      w.type === 'code-block' &&
                      typeof E.content == 'string' &&
                      ((E = E.content.replace(/\b#/g, 'sharp').replace(/\b\+\+/g, 'pp')),
                      (E = 'language-' + (E = (/[a-z][\w-]*/i.exec(E) || [''])[0].toLowerCase())),
                      w.alias ?
                        typeof w.alias == 'string' ?
                          (w.alias = [w.alias, E])
                        : w.alias.push(E)
                      : (w.alias = [E])));
                }
            })(g.tokens);
        }),
        r.hooks.add('wrap', function (g) {
          if (g.type === 'code-block') {
            for (var A = '', b = 0, j = g.classes.length; b < j; b++) {
              var B = g.classes[b],
                B = /language-(.+)/.exec(B);
              if (B) {
                A = B[1];
                break;
              }
            }
            var E,
              w = r.languages[A];
            w ?
              (g.content = r.highlight(
                (function (C) {
                  return (
                    (C = C.replace(x, '')),
                    (C = C.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (N, S) {
                      var R;
                      return (S = S.toLowerCase())[0] === '#' ?
                          ((R = S[1] === 'x' ? parseInt(S.slice(2), 16) : Number(S.slice(1))), y(R))
                        : _[S] || N;
                    }))
                  );
                })(g.content),
                w,
                A
              ))
            : A &&
              A !== 'none' &&
              r.plugins.autoloader &&
              ((E = 'md-' + new Date().valueOf() + '-' + Math.floor(1e16 * Math.random())),
              (g.attributes.id = E),
              r.plugins.autoloader.loadLanguages(A, function () {
                var C = document.getElementById(E);
                C && (C.innerHTML = r.highlight(C.textContent, r.languages[A], A));
              }));
          }
        }),
        RegExp(r.languages.markup.tag.pattern.source, 'gi')),
      _ = { amp: '&', lt: '<', gt: '>', quot: '"' },
      y = String.fromCodePoint || String.fromCharCode;
    r.languages.md = r.languages.markdown;
  })(Y),
  (Y.languages.graphql = {
    comment: /#.*/,
    description: {
      pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
      greedy: !0,
      alias: 'string',
      inside: {
        'language-markdown': {
          pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
          lookbehind: !0,
          inside: Y.languages.markdown,
        },
      },
    },
    string: { pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/, greedy: !0 },
    number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    boolean: /\b(?:false|true)\b/,
    variable: /\$[a-z_]\w*/i,
    directive: { pattern: /@[a-z_]\w*/i, alias: 'function' },
    'attr-name': {
      pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
      greedy: !0,
    },
    'atom-input': { pattern: /\b[A-Z]\w*Input\b/, alias: 'class-name' },
    scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
    constant: /\b[A-Z][A-Z_\d]*\b/,
    'class-name': {
      pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
      lookbehind: !0,
    },
    fragment: {
      pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
      lookbehind: !0,
      alias: 'function',
    },
    'definition-mutation': {
      pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
      lookbehind: !0,
      alias: 'function',
    },
    'definition-query': { pattern: /(\bquery\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: 'function' },
    keyword:
      /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
    operator: /[!=|&]|\.{3}/,
    'property-query': /\w+(?=\s*\()/,
    object: /\w+(?=\s*\{)/,
    punctuation: /[!(){}\[\]:=,]/,
    property: /\w+/,
  }),
  Y.hooks.add('after-tokenize', function (r) {
    if (r.language === 'graphql')
      for (
        var c = r.tokens.filter(function (E) {
            return typeof E != 'string' && E.type !== 'comment' && E.type !== 'scalar';
          }),
          f = 0;
        f < c.length;

      ) {
        var o = c[f++];
        if (o.type === 'keyword' && o.content === 'mutation') {
          var p = [];
          if (b(['definition-mutation', 'punctuation']) && A(1).content === '(') {
            f += 2;
            var h = j(/^\($/, /^\)$/);
            if (h === -1) continue;
            for (; f < h; f++) {
              var x = A(0);
              x.type === 'variable' && (B(x, 'variable-input'), p.push(x.content));
            }
            f = h + 1;
          }
          if (
            b(['punctuation', 'property-query']) &&
            A(0).content === '{' &&
            (f++, B(A(0), 'property-mutation'), 0 < p.length)
          ) {
            var _ = j(/^\{$/, /^\}$/);
            if (_ !== -1)
              for (var y = f; y < _; y++) {
                var g = c[y];
                g.type === 'variable' && 0 <= p.indexOf(g.content) && B(g, 'variable-input');
              }
          }
        }
      }
    function A(E) {
      return c[f + E];
    }
    function b(E, w) {
      w = w || 0;
      for (var C = 0; C < E.length; C++) {
        var N = A(C + w);
        if (!N || N.type !== E[C]) return;
      }
      return 1;
    }
    function j(E, w) {
      for (var C = 1, N = f; N < c.length; N++) {
        var S = c[N],
          R = S.content;
        if (S.type === 'punctuation' && typeof R == 'string') {
          if (E.test(R)) C++;
          else if (w.test(R) && --C === 0) return N;
        }
      }
      return -1;
    }
    function B(E, w) {
      var C = E.alias;
      (C ? Array.isArray(C) || (E.alias = C = [C]) : (E.alias = C = []), C.push(w));
    }
  }),
  (Y.languages.sql = {
    comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/, lookbehind: !0 },
    variable: [{ pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 }, /@[\w.$]+/],
    string: {
      pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
      greedy: !0,
      lookbehind: !0,
    },
    identifier: {
      pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
      greedy: !0,
      lookbehind: !0,
      inside: { punctuation: /^`|`$/ },
    },
    function:
      /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
    keyword:
      /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
    boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
    number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
    operator:
      /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
    punctuation: /[;[\]()`,.]/,
  }),
  (function (r) {
    var c = r.languages.javascript['template-string'],
      f = c.pattern.source,
      o = c.inside.interpolation,
      p = o.inside['interpolation-punctuation'],
      h = o.pattern.source;
    function x(b, j) {
      if (r.languages[b])
        return {
          pattern: RegExp('((?:' + j + ')\\s*)' + f),
          lookbehind: !0,
          greedy: !0,
          inside: {
            'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
            'embedded-code': { pattern: /[\s\S]+/, alias: b },
          },
        };
    }
    function _(b, j, B) {
      return (
        (b = { code: b, grammar: j, language: B }),
        r.hooks.run('before-tokenize', b),
        (b.tokens = r.tokenize(b.code, b.grammar)),
        r.hooks.run('after-tokenize', b),
        b.tokens
      );
    }
    function y(b, j, B) {
      var C = r.tokenize(b, { interpolation: { pattern: RegExp(h), lookbehind: !0 } }),
        E = 0,
        w = {},
        C = _(
          C.map(function (S) {
            if (typeof S == 'string') return S;
            for (
              var R, V, S = S.content;
              b.indexOf(((V = E++), (R = '___' + B.toUpperCase() + '_' + V + '___'))) !== -1;

            );
            return ((w[R] = S), R);
          }).join(''),
          j,
          B
        ),
        N = Object.keys(w);
      return (
        (E = 0),
        (function S(R) {
          for (var V = 0; V < R.length; V++) {
            if (E >= N.length) return;
            var K,
              ie,
              re,
              he,
              oe,
              ce,
              P,
              ne = R[V];
            typeof ne == 'string' || typeof ne.content == 'string' ?
              ((K = N[E]),
              (P = (ce = typeof ne == 'string' ? ne : ne.content).indexOf(K)) !== -1 &&
                (++E,
                (ie = ce.substring(0, P)),
                (oe = w[K]),
                (re = void 0),
                ((he = {})['interpolation-punctuation'] = p),
                (he = r.tokenize(oe, he)).length === 3 &&
                  ((re = [1, 1]).push.apply(re, _(he[1], r.languages.javascript, 'javascript')),
                  he.splice.apply(he, re)),
                (re = new r.Token('interpolation', he, o.alias, oe)),
                (he = ce.substring(P + K.length)),
                (oe = []),
                ie && oe.push(ie),
                oe.push(re),
                he && (S((ce = [he])), oe.push.apply(oe, ce)),
                typeof ne == 'string' ?
                  (R.splice.apply(R, [V, 1].concat(oe)), (V += oe.length - 1))
                : (ne.content = oe)))
            : ((P = ne.content), Array.isArray(P) ? S(P) : S([P]));
          }
        })(C),
        new r.Token(B, C, 'language-' + B, b)
      );
    }
    r.languages.javascript['template-string'] = [
      x(
        'css',
        /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/
          .source
      ),
      x('html', /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),
      x('svg', /\bsvg/.source),
      x('markdown', /\b(?:markdown|md)/.source),
      x('graphql', /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),
      x('sql', /\bsql/.source),
      c,
    ].filter(Boolean);
    var g = { javascript: !0, js: !0, typescript: !0, ts: !0, jsx: !0, tsx: !0 };
    function A(b) {
      return (
        typeof b == 'string' ? b
        : Array.isArray(b) ? b.map(A).join('')
        : A(b.content)
      );
    }
    r.hooks.add('after-tokenize', function (b) {
      b.language in g &&
        (function j(B) {
          for (var E = 0, w = B.length; E < w; E++) {
            var C,
              N,
              S,
              R = B[E];
            typeof R != 'string' &&
              ((C = R.content),
              Array.isArray(C) ?
                R.type === 'template-string' ?
                  ((R = C[1]),
                  C.length === 3 &&
                    typeof R != 'string' &&
                    R.type === 'embedded-code' &&
                    ((N = A(R)),
                    (R = R.alias),
                    (R = Array.isArray(R) ? R[0] : R),
                    (S = r.languages[R])) &&
                    (C[1] = y(N, S, R)))
                : j(C)
              : typeof C != 'string' && j([C]));
          }
        })(b.tokens);
    });
  })(Y),
  (function (r) {
    ((r.languages.typescript = r.languages.extend('javascript', {
      'class-name': {
        pattern:
          /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
        lookbehind: !0,
        greedy: !0,
        inside: null,
      },
      builtin:
        /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/,
    })),
      r.languages.typescript.keyword.push(
        /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
        /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
        /\btype\b(?=\s*(?:[\{*]|$))/
      ),
      delete r.languages.typescript.parameter,
      delete r.languages.typescript['literal-property']);
    var c = r.languages.extend('typescript', {});
    (delete c['class-name'],
      (r.languages.typescript['class-name'].inside = c),
      r.languages.insertBefore('typescript', 'function', {
        decorator: {
          pattern: /@[$\w\xA0-\uFFFF]+/,
          inside: { at: { pattern: /^@/, alias: 'operator' }, function: /^[\s\S]+/ },
        },
        'generic-function': {
          pattern:
            /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
          greedy: !0,
          inside: {
            function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
            generic: { pattern: /<[\s\S]+/, alias: 'class-name', inside: c },
          },
        },
      }),
      (r.languages.ts = r.languages.typescript));
  })(Y),
  (function (r) {
    var c = r.languages.javascript,
      f = /\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source,
      o = '(@(?:arg|argument|param|property)\\s+(?:' + f + '\\s+)?)';
    ((r.languages.jsdoc = r.languages.extend('javadoclike', {
      parameter: {
        pattern: RegExp(o + /(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source),
        lookbehind: !0,
        inside: { punctuation: /\./ },
      },
    })),
      r.languages.insertBefore('jsdoc', 'keyword', {
        'optional-parameter': {
          pattern: RegExp(o + /\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source),
          lookbehind: !0,
          inside: {
            parameter: {
              pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/,
              lookbehind: !0,
              inside: { punctuation: /\./ },
            },
            code: {
              pattern: /(=)[\s\S]*(?=\]$)/,
              lookbehind: !0,
              inside: c,
              alias: 'language-javascript',
            },
            punctuation: /[=[\]]/,
          },
        },
        'class-name': [
          {
            pattern: RegExp(
              /(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(
                /<TYPE>/g,
                function () {
                  return f;
                }
              )
            ),
            lookbehind: !0,
            inside: { punctuation: /\./ },
          },
          {
            pattern: RegExp('(@[a-z]+\\s+)' + f),
            lookbehind: !0,
            inside: {
              string: c.string,
              number: c.number,
              boolean: c.boolean,
              keyword: r.languages.typescript.keyword,
              operator: /=>|\.\.\.|[&|?:*]/,
              punctuation: /[.,;=<>{}()[\]]/,
            },
          },
        ],
        example: {
          pattern: /(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,
          lookbehind: !0,
          inside: {
            code: {
              pattern: /^([\t ]*(?:\*\s*)?)\S.*$/m,
              lookbehind: !0,
              inside: c,
              alias: 'language-javascript',
            },
          },
        },
      }),
      r.languages.javadoclike.addSupport('javascript', r.languages.jsdoc));
  })(Y),
  (function (r) {
    ((r.languages.flow = r.languages.extend('javascript', {})),
      r.languages.insertBefore('flow', 'keyword', {
        type: [
          {
            pattern:
              /\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/,
            alias: 'class-name',
          },
        ],
      }),
      (r.languages.flow['function-variable'].pattern =
        /(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i),
      delete r.languages.flow.parameter,
      r.languages.insertBefore('flow', 'operator', {
        'flow-punctuation': { pattern: /\{\||\|\}/, alias: 'punctuation' },
      }),
      Array.isArray(r.languages.flow.keyword) ||
        (r.languages.flow.keyword = [r.languages.flow.keyword]),
      r.languages.flow.keyword.unshift(
        { pattern: /(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/, lookbehind: !0 },
        {
          pattern:
            /(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/,
          lookbehind: !0,
        }
      ));
  })(Y),
  (Y.languages.n4js = Y.languages.extend('javascript', {
    keyword:
      /\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,
  })),
  Y.languages.insertBefore('n4js', 'constant', {
    annotation: { pattern: /@+\w+/, alias: 'operator' },
  }),
  (Y.languages.n4jsd = Y.languages.n4js),
  (function (r) {
    function c(x, _) {
      return RegExp(
        x.replace(/<ID>/g, function () {
          return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
        }),
        _
      );
    }
    (r.languages.insertBefore('javascript', 'function-variable', {
      'method-variable': {
        pattern: RegExp('(\\.\\s*)' + r.languages.javascript['function-variable'].pattern.source),
        lookbehind: !0,
        alias: ['function-variable', 'method', 'function', 'property-access'],
      },
    }),
      r.languages.insertBefore('javascript', 'function', {
        method: {
          pattern: RegExp('(\\.\\s*)' + r.languages.javascript.function.source),
          lookbehind: !0,
          alias: ['function', 'property-access'],
        },
      }),
      r.languages.insertBefore('javascript', 'constant', {
        'known-class-name': [
          {
            pattern:
              /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
            alias: 'class-name',
          },
          { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: 'class-name' },
        ],
      }),
      r.languages.insertBefore('javascript', 'keyword', {
        imports: {
          pattern: c(
            /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/
              .source
          ),
          lookbehind: !0,
          inside: r.languages.javascript,
        },
        exports: {
          pattern: c(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),
          lookbehind: !0,
          inside: r.languages.javascript,
        },
      }),
      r.languages.javascript.keyword.unshift(
        { pattern: /\b(?:as|default|export|from|import)\b/, alias: 'module' },
        {
          pattern:
            /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
          alias: 'control-flow',
        },
        { pattern: /\bnull\b/, alias: ['null', 'nil'] },
        { pattern: /\bundefined\b/, alias: 'nil' }
      ),
      r.languages.insertBefore('javascript', 'operator', {
        spread: { pattern: /\.{3}/, alias: 'operator' },
        arrow: { pattern: /=>/, alias: 'operator' },
      }),
      r.languages.insertBefore('javascript', 'punctuation', {
        'property-access': { pattern: c(/(\.\s*)#?<ID>/.source), lookbehind: !0 },
        'maybe-class-name': {
          pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
          lookbehind: !0,
        },
        dom: {
          pattern:
            /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
          alias: 'variable',
        },
        console: { pattern: /\bconsole(?=\s*\.)/, alias: 'class-name' },
      }));
    for (
      var f = ['function', 'function-variable', 'method', 'method-variable', 'property-access'],
        o = 0;
      o < f.length;
      o++
    ) {
      var h = f[o],
        p = r.languages.javascript[h],
        h =
          (p = r.util.type(p) === 'RegExp' ? (r.languages.javascript[h] = { pattern: p }) : p)
            .inside || {};
      (p.inside = h)['maybe-class-name'] = /^[A-Z][\s\S]*/;
    }
  })(Y),
  (function (r) {
    var c = r.util.clone(r.languages.javascript),
      f = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
      o = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
      p = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
    function h(y, g) {
      return (
        (y = y
          .replace(/<S>/g, function () {
            return f;
          })
          .replace(/<BRACES>/g, function () {
            return o;
          })
          .replace(/<SPREAD>/g, function () {
            return p;
          })),
        RegExp(y, g)
      );
    }
    ((p = h(p).source),
      (r.languages.jsx = r.languages.extend('markup', c)),
      (r.languages.jsx.tag.pattern = h(
        /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/
          .source
      )),
      (r.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
      (r.languages.jsx.tag.inside['attr-value'].pattern =
        /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
      (r.languages.jsx.tag.inside.tag.inside['class-name'] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
      (r.languages.jsx.tag.inside.comment = c.comment),
      r.languages.insertBefore(
        'inside',
        'attr-name',
        { spread: { pattern: h(/<SPREAD>/.source), inside: r.languages.jsx } },
        r.languages.jsx.tag
      ),
      r.languages.insertBefore(
        'inside',
        'special-attr',
        {
          script: {
            pattern: h(/=<BRACES>/.source),
            alias: 'language-javascript',
            inside: {
              'script-punctuation': { pattern: /^=(?=\{)/, alias: 'punctuation' },
              rest: r.languages.jsx,
            },
          },
        },
        r.languages.jsx.tag
      ));
    function x(y) {
      for (var g = [], A = 0; A < y.length; A++) {
        var b = y[A],
          j = !1;
        (typeof b != 'string' &&
          (b.type === 'tag' && b.content[0] && b.content[0].type === 'tag' ?
            b.content[0].content[0].content === '</' ?
              0 < g.length && g[g.length - 1].tagName === _(b.content[0].content[1]) && g.pop()
            : b.content[b.content.length - 1].content !== '/>' &&
              g.push({ tagName: _(b.content[0].content[1]), openedBraces: 0 })
          : 0 < g.length && b.type === 'punctuation' && b.content === '{' ?
            g[g.length - 1].openedBraces++
          : (
            0 < g.length &&
            0 < g[g.length - 1].openedBraces &&
            b.type === 'punctuation' &&
            b.content === '}'
          ) ?
            g[g.length - 1].openedBraces--
          : (j = !0)),
          (j || typeof b == 'string') &&
            0 < g.length &&
            g[g.length - 1].openedBraces === 0 &&
            ((j = _(b)),
            A < y.length - 1 &&
              (typeof y[A + 1] == 'string' || y[A + 1].type === 'plain-text') &&
              ((j += _(y[A + 1])), y.splice(A + 1, 1)),
            0 < A &&
              (typeof y[A - 1] == 'string' || y[A - 1].type === 'plain-text') &&
              ((j = _(y[A - 1]) + j), y.splice(A - 1, 1), A--),
            (y[A] = new r.Token('plain-text', j, null, j))),
          b.content && typeof b.content != 'string' && x(b.content));
      }
    }
    var _ = function (y) {
      return (
        y ?
          typeof y == 'string' ? y
          : typeof y.content == 'string' ? y.content
          : y.content.map(_).join('')
        : ''
      );
    };
    r.hooks.add('after-tokenize', function (y) {
      (y.language !== 'jsx' && y.language !== 'tsx') || x(y.tokens);
    });
  })(Y),
  (function (r) {
    var c = r.util.clone(r.languages.typescript),
      c =
        ((r.languages.tsx = r.languages.extend('jsx', c)),
        delete r.languages.tsx.parameter,
        delete r.languages.tsx['literal-property'],
        r.languages.tsx.tag);
    ((c.pattern = RegExp(
      /(^|[^\w$]|(?=<\/))/.source + '(?:' + c.pattern.source + ')',
      c.pattern.flags
    )),
      (c.lookbehind = !0));
  })(Y),
  (Y.languages.swift = {
    comment: {
      pattern:
        /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,
      lookbehind: !0,
      greedy: !0,
    },
    'string-literal': [
      {
        pattern: RegExp(
          /(^|[^"#])/.source +
            '(?:' +
            /"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source +
            '|' +
            /"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source +
            ')' +
            /(?!["#])/.source
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          interpolation: {
            pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/,
            lookbehind: !0,
            inside: null,
          },
          'interpolation-punctuation': { pattern: /^\)|\\\($/, alias: 'punctuation' },
          punctuation: /\\(?=[\r\n])/,
          string: /[\s\S]+/,
        },
      },
      {
        pattern: RegExp(
          /(^|[^"#])(#+)/.source +
            '(?:' +
            /"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source +
            '|' +
            /"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source +
            ')\\2'
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          interpolation: {
            pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,
            lookbehind: !0,
            inside: null,
          },
          'interpolation-punctuation': { pattern: /^\)|\\#+\($/, alias: 'punctuation' },
          string: /[\s\S]+/,
        },
      },
    ],
    directive: {
      pattern: RegExp(
        /#/.source +
          '(?:' +
          /(?:elseif|if)\b/.source +
          '(?:[ 	]*' +
          /(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/
            .source +
          ')+|' +
          /(?:else|endif)\b/.source +
          ')'
      ),
      alias: 'property',
      inside: {
        'directive-name': /^#\w+/,
        boolean: /\b(?:false|true)\b/,
        number: /\b\d+(?:\.\d+)*\b/,
        operator: /!|&&|\|\||[<>]=?/,
        punctuation: /[(),]/,
      },
    },
    literal: {
      pattern:
        /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,
      alias: 'constant',
    },
    'other-directive': { pattern: /#\w+\b/, alias: 'property' },
    attribute: { pattern: /@\w+/, alias: 'atrule' },
    'function-definition': { pattern: /(\bfunc\s+)\w+/, lookbehind: !0, alias: 'function' },
    label: {
      pattern: /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,
      lookbehind: !0,
      alias: 'important',
    },
    keyword:
      /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,
    boolean: /\b(?:false|true)\b/,
    nil: { pattern: /\bnil\b/, alias: 'constant' },
    'short-argument': /\$\d+\b/,
    omit: { pattern: /\b_\b/, alias: 'keyword' },
    number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
    'class-name': /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,
    function: /\b[a-z_]\w*(?=\s*\()/i,
    constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
    operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,
    punctuation: /[{}[\]();,.:\\]/,
  }),
  Y.languages.swift['string-literal'].forEach(function (r) {
    r.inside.interpolation.inside = Y.languages.swift;
  }),
  (function (r) {
    ((r.languages.kotlin = r.languages.extend('clike', {
      keyword: {
        pattern:
          /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,
        lookbehind: !0,
      },
      function: [
        { pattern: /(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/, greedy: !0 },
        { pattern: /(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/, lookbehind: !0, greedy: !0 },
      ],
      number:
        /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,
      operator:
        /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/,
    })),
      delete r.languages.kotlin['class-name']);
    var c = {
      'interpolation-punctuation': { pattern: /^\$\{?|\}$/, alias: 'punctuation' },
      expression: { pattern: /[\s\S]+/, inside: r.languages.kotlin },
    };
    (r.languages.insertBefore('kotlin', 'string', {
      'string-literal': [
        {
          pattern: /"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,
          alias: 'multiline',
          inside: {
            interpolation: { pattern: /\$(?:[a-z_]\w*|\{[^{}]*\})/i, inside: c },
            string: /[\s\S]+/,
          },
        },
        {
          pattern: /"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,
          alias: 'singleline',
          inside: {
            interpolation: {
              pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,
              lookbehind: !0,
              inside: c,
            },
            string: /[\s\S]+/,
          },
        },
      ],
      char: { pattern: /'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/, greedy: !0 },
    }),
      delete r.languages.kotlin.string,
      r.languages.insertBefore('kotlin', 'keyword', {
        annotation: { pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/, alias: 'builtin' },
      }),
      r.languages.insertBefore('kotlin', 'function', {
        label: { pattern: /\b\w+@|@\w+\b/, alias: 'symbol' },
      }),
      (r.languages.kt = r.languages.kotlin),
      (r.languages.kts = r.languages.kotlin));
  })(Y),
  (Y.languages.c = Y.languages.extend('clike', {
    comment: {
      pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
      greedy: !0,
    },
    string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0 },
    'class-name': {
      pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
      lookbehind: !0,
    },
    keyword:
      /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
    function: /\b[a-z_]\w*(?=\s*\()/i,
    number:
      /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
    operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
  })),
  Y.languages.insertBefore('c', 'string', {
    char: { pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/, greedy: !0 },
  }),
  Y.languages.insertBefore('c', 'string', {
    macro: {
      pattern:
        /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
      lookbehind: !0,
      greedy: !0,
      alias: 'property',
      inside: {
        string: [{ pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 }, Y.languages.c.string],
        char: Y.languages.c.char,
        comment: Y.languages.c.comment,
        'macro-name': [
          { pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: !0 },
          { pattern: /(^#\s*define\s+)\w+\b(?=\()/i, lookbehind: !0, alias: 'function' },
        ],
        directive: { pattern: /^(#\s*)[a-z]+/, lookbehind: !0, alias: 'keyword' },
        'directive-hash': /^#/,
        punctuation: /##|\\(?=[\r\n])/,
        expression: { pattern: /\S[\s\S]*/, inside: Y.languages.c },
      },
    },
  }),
  Y.languages.insertBefore('c', 'function', {
    constant:
      /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/,
  }),
  delete Y.languages.c.boolean,
  (Y.languages.objectivec = Y.languages.extend('c', {
    string: { pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0 },
    keyword:
      /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
    operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/,
  })),
  delete Y.languages.objectivec['class-name'],
  (Y.languages.objc = Y.languages.objectivec),
  (Y.languages.reason = Y.languages.extend('clike', {
    string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/, greedy: !0 },
    'class-name': /\b[A-Z]\w*/,
    keyword:
      /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
    operator:
      /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/,
  })),
  Y.languages.insertBefore('reason', 'class-name', {
    char: { pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/, greedy: !0 },
    constructor: /\b[A-Z]\w*\b(?!\s*\.)/,
    label: { pattern: /\b[a-z]\w*(?=::)/, alias: 'symbol' },
  }),
  delete Y.languages.reason.function,
  (function (r) {
    for (var c = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, f = 0; f < 2; f++)
      c = c.replace(/<self>/g, function () {
        return c;
      });
    ((c = c.replace(/<self>/g, function () {
      return /[^\s\S]/.source;
    })),
      (r.languages.rust = {
        comment: [
          { pattern: RegExp(/(^|[^\\])/.source + c), lookbehind: !0, greedy: !0 },
          { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
        ],
        string: { pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/, greedy: !0 },
        char: {
          pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,
          greedy: !0,
        },
        attribute: {
          pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,
          greedy: !0,
          alias: 'attr-name',
          inside: { string: null },
        },
        'closure-params': {
          pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
          lookbehind: !0,
          greedy: !0,
          inside: {
            'closure-punctuation': { pattern: /^\||\|$/, alias: 'punctuation' },
            rest: null,
          },
        },
        'lifetime-annotation': { pattern: /'\w+/, alias: 'symbol' },
        'fragment-specifier': { pattern: /(\$\w+:)[a-z]+/, lookbehind: !0, alias: 'punctuation' },
        variable: /\$\w+/,
        'function-definition': { pattern: /(\bfn\s+)\w+/, lookbehind: !0, alias: 'function' },
        'type-definition': {
          pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/,
          lookbehind: !0,
          alias: 'class-name',
        },
        'module-declaration': [
          { pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/, lookbehind: !0, alias: 'namespace' },
          {
            pattern:
              /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
            lookbehind: !0,
            alias: 'namespace',
            inside: { punctuation: /::/ },
          },
        ],
        keyword: [
          /\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,
          /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/,
        ],
        function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
        macro: { pattern: /\b\w+!/, alias: 'property' },
        constant: /\b[A-Z_][A-Z_\d]+\b/,
        'class-name': /\b[A-Z]\w*\b/,
        namespace: {
          pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
          inside: { punctuation: /::/ },
        },
        number:
          /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,
        boolean: /\b(?:false|true)\b/,
        punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
        operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/,
      }),
      (r.languages.rust['closure-params'].inside.rest = r.languages.rust),
      (r.languages.rust.attribute.inside.string = r.languages.rust.string));
  })(Y),
  (Y.languages.go = Y.languages.extend('clike', {
    string: { pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/, lookbehind: !0, greedy: !0 },
    keyword:
      /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
    boolean: /\b(?:_|false|iota|nil|true)\b/,
    number: [
      /\b0(?:b[01_]+|o[0-7_]+)i?\b/i,
      /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,
      /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i,
    ],
    operator:
      /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
    builtin:
      /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/,
  })),
  Y.languages.insertBefore('go', 'string', {
    char: { pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/, greedy: !0 },
  }),
  delete Y.languages.go['class-name'],
  (function (r) {
    var c =
        /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
      f = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function () {
        return c.source;
      });
    ((r.languages.cpp = r.languages.extend('c', {
      'class-name': [
        {
          pattern: RegExp(
            /(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(
              /<keyword>/g,
              function () {
                return c.source;
              }
            )
          ),
          lookbehind: !0,
        },
        /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
        /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
        /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/,
      ],
      keyword: c,
      number: {
        pattern:
          /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
        greedy: !0,
      },
      operator:
        />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
      boolean: /\b(?:false|true)\b/,
    })),
      r.languages.insertBefore('cpp', 'string', {
        module: {
          pattern: RegExp(
            /(\b(?:import|module)\s+)/.source +
              '(?:' +
              /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source +
              '|' +
              /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(
                /<mod-name>/g,
                function () {
                  return f;
                }
              ) +
              ')'
          ),
          lookbehind: !0,
          greedy: !0,
          inside: { string: /^[<"][\s\S]+/, operator: /:/, punctuation: /\./ },
        },
        'raw-string': { pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/, alias: 'string', greedy: !0 },
      }),
      r.languages.insertBefore('cpp', 'keyword', {
        'generic-function': {
          pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
          inside: {
            function: /^\w+/,
            generic: { pattern: /<[\s\S]+/, alias: 'class-name', inside: r.languages.cpp },
          },
        },
      }),
      r.languages.insertBefore('cpp', 'operator', {
        'double-colon': { pattern: /::/, alias: 'punctuation' },
      }),
      r.languages.insertBefore('cpp', 'class-name', {
        'base-clause': {
          pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
          lookbehind: !0,
          greedy: !0,
          inside: r.languages.extend('cpp', {}),
        },
      }),
      r.languages.insertBefore(
        'inside',
        'double-colon',
        { 'class-name': /\b[a-z_]\w*\b(?!\s*::)/i },
        r.languages.cpp['base-clause']
      ));
  })(Y),
  (Y.languages.python = {
    comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0 },
    'string-interpolation': {
      pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
      greedy: !0,
      inside: {
        interpolation: {
          pattern:
            /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
          lookbehind: !0,
          inside: {
            'format-spec': { pattern: /(:)[^:(){}]+(?=\}$)/, lookbehind: !0 },
            'conversion-option': { pattern: /![sra](?=[:}]$)/, alias: 'punctuation' },
            rest: null,
          },
        },
        string: /[\s\S]+/,
      },
    },
    'triple-quoted-string': {
      pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
      greedy: !0,
      alias: 'string',
    },
    string: { pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i, greedy: !0 },
    function: { pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g, lookbehind: !0 },
    'class-name': { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
    decorator: {
      pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
      lookbehind: !0,
      alias: ['annotation', 'punctuation'],
      inside: { punctuation: /\./ },
    },
    keyword:
      /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
    builtin:
      /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
    boolean: /\b(?:False|None|True)\b/,
    number:
      /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
    operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
    punctuation: /[{}[\];(),.:]/,
  }),
  (Y.languages.python['string-interpolation'].inside.interpolation.inside.rest =
    Y.languages.python),
  (Y.languages.py = Y.languages.python),
  (Y.languages.json = {
    property: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, lookbehind: !0, greedy: !0 },
    string: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, lookbehind: !0, greedy: !0 },
    comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
    number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    punctuation: /[{}[\],]/,
    operator: /:/,
    boolean: /\b(?:false|true)\b/,
    null: { pattern: /\bnull\b/, alias: 'keyword' },
  }),
  (Y.languages.webmanifest = Y.languages.json));
var Et = {};
Oy(Et, {
  dracula: () => Ly,
  duotoneDark: () => By,
  duotoneLight: () => qy,
  github: () => Yy,
  gruvboxMaterialDark: () => ym,
  gruvboxMaterialLight: () => vm,
  jettwaveDark: () => om,
  jettwaveLight: () => fm,
  nightOwl: () => Xy,
  nightOwlLight: () => Qy,
  oceanicNext: () => Ky,
  okaidia: () => Jy,
  oneDark: () => gm,
  oneLight: () => pm,
  palenight: () => Wy,
  shadesOfPurple: () => em,
  synthwave84: () => lm,
  ultramin: () => nm,
  vsDark: () => Og,
  vsLight: () => um,
});
var My = {
    plain: { color: '#F8F8F2', backgroundColor: '#282A36' },
    styles: [
      { types: ['prolog', 'constant', 'builtin'], style: { color: 'rgb(189, 147, 249)' } },
      { types: ['inserted', 'function'], style: { color: 'rgb(80, 250, 123)' } },
      { types: ['deleted'], style: { color: 'rgb(255, 85, 85)' } },
      { types: ['changed'], style: { color: 'rgb(255, 184, 108)' } },
      { types: ['punctuation', 'symbol'], style: { color: 'rgb(248, 248, 242)' } },
      { types: ['string', 'char', 'tag', 'selector'], style: { color: 'rgb(255, 121, 198)' } },
      {
        types: ['keyword', 'variable'],
        style: { color: 'rgb(189, 147, 249)', fontStyle: 'italic' },
      },
      { types: ['comment'], style: { color: 'rgb(98, 114, 164)' } },
      { types: ['attr-name'], style: { color: 'rgb(241, 250, 140)' } },
    ],
  },
  Ly = My,
  Uy = {
    plain: { backgroundColor: '#2a2734', color: '#9a86fd' },
    styles: [
      {
        types: ['comment', 'prolog', 'doctype', 'cdata', 'punctuation'],
        style: { color: '#6c6783' },
      },
      { types: ['namespace'], style: { opacity: 0.7 } },
      { types: ['tag', 'operator', 'number'], style: { color: '#e09142' } },
      { types: ['property', 'function'], style: { color: '#9a86fd' } },
      { types: ['tag-id', 'selector', 'atrule-id'], style: { color: '#eeebff' } },
      { types: ['attr-name'], style: { color: '#c4b9fe' } },
      {
        types: [
          'boolean',
          'string',
          'entity',
          'url',
          'attr-value',
          'keyword',
          'control',
          'directive',
          'unit',
          'statement',
          'regex',
          'atrule',
          'placeholder',
          'variable',
        ],
        style: { color: '#ffcc99' },
      },
      { types: ['deleted'], style: { textDecorationLine: 'line-through' } },
      { types: ['inserted'], style: { textDecorationLine: 'underline' } },
      { types: ['italic'], style: { fontStyle: 'italic' } },
      { types: ['important', 'bold'], style: { fontWeight: 'bold' } },
      { types: ['important'], style: { color: '#c4b9fe' } },
    ],
  },
  By = Uy,
  Hy = {
    plain: { backgroundColor: '#faf8f5', color: '#728fcb' },
    styles: [
      {
        types: ['comment', 'prolog', 'doctype', 'cdata', 'punctuation'],
        style: { color: '#b6ad9a' },
      },
      { types: ['namespace'], style: { opacity: 0.7 } },
      { types: ['tag', 'operator', 'number'], style: { color: '#063289' } },
      { types: ['property', 'function'], style: { color: '#b29762' } },
      { types: ['tag-id', 'selector', 'atrule-id'], style: { color: '#2d2006' } },
      { types: ['attr-name'], style: { color: '#896724' } },
      {
        types: [
          'boolean',
          'string',
          'entity',
          'url',
          'attr-value',
          'keyword',
          'control',
          'directive',
          'unit',
          'statement',
          'regex',
          'atrule',
        ],
        style: { color: '#728fcb' },
      },
      { types: ['placeholder', 'variable'], style: { color: '#93abdc' } },
      { types: ['deleted'], style: { textDecorationLine: 'line-through' } },
      { types: ['inserted'], style: { textDecorationLine: 'underline' } },
      { types: ['italic'], style: { fontStyle: 'italic' } },
      { types: ['important', 'bold'], style: { fontWeight: 'bold' } },
      { types: ['important'], style: { color: '#896724' } },
    ],
  },
  qy = Hy,
  Gy = {
    plain: { color: '#393A34', backgroundColor: '#f6f8fa' },
    styles: [
      {
        types: ['comment', 'prolog', 'doctype', 'cdata'],
        style: { color: '#999988', fontStyle: 'italic' },
      },
      { types: ['namespace'], style: { opacity: 0.7 } },
      { types: ['string', 'attr-value'], style: { color: '#e3116c' } },
      { types: ['punctuation', 'operator'], style: { color: '#393A34' } },
      {
        types: [
          'entity',
          'url',
          'symbol',
          'number',
          'boolean',
          'variable',
          'constant',
          'property',
          'regex',
          'inserted',
        ],
        style: { color: '#36acaa' },
      },
      { types: ['atrule', 'keyword', 'attr-name', 'selector'], style: { color: '#00a4db' } },
      { types: ['function', 'deleted', 'tag'], style: { color: '#d73a49' } },
      { types: ['function-variable'], style: { color: '#6f42c1' } },
      { types: ['tag', 'selector', 'keyword'], style: { color: '#00009f' } },
    ],
  },
  Yy = Gy,
  Zy = {
    plain: { color: '#d6deeb', backgroundColor: '#011627' },
    styles: [
      { types: ['changed'], style: { color: 'rgb(162, 191, 252)', fontStyle: 'italic' } },
      { types: ['deleted'], style: { color: 'rgba(239, 83, 80, 0.56)', fontStyle: 'italic' } },
      {
        types: ['inserted', 'attr-name'],
        style: { color: 'rgb(173, 219, 103)', fontStyle: 'italic' },
      },
      { types: ['comment'], style: { color: 'rgb(99, 119, 119)', fontStyle: 'italic' } },
      { types: ['string', 'url'], style: { color: 'rgb(173, 219, 103)' } },
      { types: ['variable'], style: { color: 'rgb(214, 222, 235)' } },
      { types: ['number'], style: { color: 'rgb(247, 140, 108)' } },
      {
        types: ['builtin', 'char', 'constant', 'function'],
        style: { color: 'rgb(130, 170, 255)' },
      },
      { types: ['punctuation'], style: { color: 'rgb(199, 146, 234)' } },
      {
        types: ['selector', 'doctype'],
        style: { color: 'rgb(199, 146, 234)', fontStyle: 'italic' },
      },
      { types: ['class-name'], style: { color: 'rgb(255, 203, 139)' } },
      { types: ['tag', 'operator', 'keyword'], style: { color: 'rgb(127, 219, 202)' } },
      { types: ['boolean'], style: { color: 'rgb(255, 88, 116)' } },
      { types: ['property'], style: { color: 'rgb(128, 203, 196)' } },
      { types: ['namespace'], style: { color: 'rgb(178, 204, 214)' } },
    ],
  },
  Xy = Zy,
  Vy = {
    plain: { color: '#403f53', backgroundColor: '#FBFBFB' },
    styles: [
      { types: ['changed'], style: { color: 'rgb(162, 191, 252)', fontStyle: 'italic' } },
      { types: ['deleted'], style: { color: 'rgba(239, 83, 80, 0.56)', fontStyle: 'italic' } },
      {
        types: ['inserted', 'attr-name'],
        style: { color: 'rgb(72, 118, 214)', fontStyle: 'italic' },
      },
      { types: ['comment'], style: { color: 'rgb(152, 159, 177)', fontStyle: 'italic' } },
      {
        types: ['string', 'builtin', 'char', 'constant', 'url'],
        style: { color: 'rgb(72, 118, 214)' },
      },
      { types: ['variable'], style: { color: 'rgb(201, 103, 101)' } },
      { types: ['number'], style: { color: 'rgb(170, 9, 130)' } },
      { types: ['punctuation'], style: { color: 'rgb(153, 76, 195)' } },
      {
        types: ['function', 'selector', 'doctype'],
        style: { color: 'rgb(153, 76, 195)', fontStyle: 'italic' },
      },
      { types: ['class-name'], style: { color: 'rgb(17, 17, 17)' } },
      { types: ['tag'], style: { color: 'rgb(153, 76, 195)' } },
      {
        types: ['operator', 'property', 'keyword', 'namespace'],
        style: { color: 'rgb(12, 150, 155)' },
      },
      { types: ['boolean'], style: { color: 'rgb(188, 84, 84)' } },
    ],
  },
  Qy = Vy,
  St = {
    char: '#D8DEE9',
    comment: '#999999',
    keyword: '#c5a5c5',
    primitive: '#5a9bcf',
    string: '#8dc891',
    variable: '#d7deea',
    boolean: '#ff8b50',
    tag: '#fc929e',
    function: '#79b6f2',
    className: '#FAC863',
  },
  Fy = {
    plain: { backgroundColor: '#282c34', color: '#ffffff' },
    styles: [
      { types: ['attr-name'], style: { color: St.keyword } },
      { types: ['attr-value'], style: { color: St.string } },
      {
        types: ['comment', 'block-comment', 'prolog', 'doctype', 'cdata', 'shebang'],
        style: { color: St.comment },
      },
      {
        types: ['property', 'number', 'function-name', 'constant', 'symbol', 'deleted'],
        style: { color: St.primitive },
      },
      { types: ['boolean'], style: { color: St.boolean } },
      { types: ['tag'], style: { color: St.tag } },
      { types: ['string'], style: { color: St.string } },
      { types: ['punctuation'], style: { color: St.string } },
      { types: ['selector', 'char', 'builtin', 'inserted'], style: { color: St.char } },
      { types: ['function'], style: { color: St.function } },
      { types: ['operator', 'entity', 'url', 'variable'], style: { color: St.variable } },
      { types: ['keyword'], style: { color: St.keyword } },
      { types: ['atrule', 'class-name'], style: { color: St.className } },
      { types: ['important'], style: { fontWeight: '400' } },
      { types: ['bold'], style: { fontWeight: 'bold' } },
      { types: ['italic'], style: { fontStyle: 'italic' } },
      { types: ['namespace'], style: { opacity: 0.7 } },
    ],
  },
  Ky = Fy,
  $y = {
    plain: { color: '#f8f8f2', backgroundColor: '#272822' },
    styles: [
      { types: ['changed'], style: { color: 'rgb(162, 191, 252)', fontStyle: 'italic' } },
      { types: ['deleted'], style: { color: '#f92672', fontStyle: 'italic' } },
      { types: ['inserted'], style: { color: 'rgb(173, 219, 103)', fontStyle: 'italic' } },
      { types: ['comment'], style: { color: '#8292a2', fontStyle: 'italic' } },
      { types: ['string', 'url'], style: { color: '#a6e22e' } },
      { types: ['variable'], style: { color: '#f8f8f2' } },
      { types: ['number'], style: { color: '#ae81ff' } },
      {
        types: ['builtin', 'char', 'constant', 'function', 'class-name'],
        style: { color: '#e6db74' },
      },
      { types: ['punctuation'], style: { color: '#f8f8f2' } },
      { types: ['selector', 'doctype'], style: { color: '#a6e22e', fontStyle: 'italic' } },
      { types: ['tag', 'operator', 'keyword'], style: { color: '#66d9ef' } },
      { types: ['boolean'], style: { color: '#ae81ff' } },
      { types: ['namespace'], style: { color: 'rgb(178, 204, 214)', opacity: 0.7 } },
      { types: ['tag', 'property'], style: { color: '#f92672' } },
      { types: ['attr-name'], style: { color: '#a6e22e !important' } },
      { types: ['doctype'], style: { color: '#8292a2' } },
      { types: ['rule'], style: { color: '#e6db74' } },
    ],
  },
  Jy = $y,
  Iy = {
    plain: { color: '#bfc7d5', backgroundColor: '#292d3e' },
    styles: [
      { types: ['comment'], style: { color: 'rgb(105, 112, 152)', fontStyle: 'italic' } },
      { types: ['string', 'inserted'], style: { color: 'rgb(195, 232, 141)' } },
      { types: ['number'], style: { color: 'rgb(247, 140, 108)' } },
      {
        types: ['builtin', 'char', 'constant', 'function'],
        style: { color: 'rgb(130, 170, 255)' },
      },
      { types: ['punctuation', 'selector'], style: { color: 'rgb(199, 146, 234)' } },
      { types: ['variable'], style: { color: 'rgb(191, 199, 213)' } },
      { types: ['class-name', 'attr-name'], style: { color: 'rgb(255, 203, 107)' } },
      { types: ['tag', 'deleted'], style: { color: 'rgb(255, 85, 114)' } },
      { types: ['operator'], style: { color: 'rgb(137, 221, 255)' } },
      { types: ['boolean'], style: { color: 'rgb(255, 88, 116)' } },
      { types: ['keyword'], style: { fontStyle: 'italic' } },
      { types: ['doctype'], style: { color: 'rgb(199, 146, 234)', fontStyle: 'italic' } },
      { types: ['namespace'], style: { color: 'rgb(178, 204, 214)' } },
      { types: ['url'], style: { color: 'rgb(221, 221, 221)' } },
    ],
  },
  Wy = Iy,
  Py = {
    plain: { color: '#9EFEFF', backgroundColor: '#2D2A55' },
    styles: [
      { types: ['changed'], style: { color: 'rgb(255, 238, 128)' } },
      { types: ['deleted'], style: { color: 'rgba(239, 83, 80, 0.56)' } },
      { types: ['inserted'], style: { color: 'rgb(173, 219, 103)' } },
      { types: ['comment'], style: { color: 'rgb(179, 98, 255)', fontStyle: 'italic' } },
      { types: ['punctuation'], style: { color: 'rgb(255, 255, 255)' } },
      { types: ['constant'], style: { color: 'rgb(255, 98, 140)' } },
      { types: ['string', 'url'], style: { color: 'rgb(165, 255, 144)' } },
      { types: ['variable'], style: { color: 'rgb(255, 238, 128)' } },
      { types: ['number', 'boolean'], style: { color: 'rgb(255, 98, 140)' } },
      { types: ['attr-name'], style: { color: 'rgb(255, 180, 84)' } },
      {
        types: ['keyword', 'operator', 'property', 'namespace', 'tag', 'selector', 'doctype'],
        style: { color: 'rgb(255, 157, 0)' },
      },
      {
        types: ['builtin', 'char', 'constant', 'function', 'class-name'],
        style: { color: 'rgb(250, 208, 0)' },
      },
    ],
  },
  em = Py,
  tm = {
    plain: {
      backgroundColor: 'linear-gradient(to bottom, #2a2139 75%, #34294f)',
      backgroundImage: '#34294f',
      color: '#f92aad',
      textShadow: '0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3',
    },
    styles: [
      {
        types: ['comment', 'block-comment', 'prolog', 'doctype', 'cdata'],
        style: { color: '#495495', fontStyle: 'italic' },
      },
      { types: ['punctuation'], style: { color: '#ccc' } },
      {
        types: ['tag', 'attr-name', 'namespace', 'number', 'unit', 'hexcode', 'deleted'],
        style: { color: '#e2777a' },
      },
      {
        types: ['property', 'selector'],
        style: {
          color: '#72f1b8',
          textShadow: '0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475',
        },
      },
      { types: ['function-name'], style: { color: '#6196cc' } },
      {
        types: ['boolean', 'selector-id', 'function'],
        style: {
          color: '#fdfdfd',
          textShadow: '0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975',
        },
      },
      {
        types: ['class-name', 'maybe-class-name', 'builtin'],
        style: {
          color: '#fff5f6',
          textShadow: '0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75',
        },
      },
      {
        types: ['constant', 'symbol'],
        style: {
          color: '#f92aad',
          textShadow: '0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3',
        },
      },
      {
        types: ['important', 'atrule', 'keyword', 'selector-class'],
        style: {
          color: '#f4eee4',
          textShadow: '0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575',
        },
      },
      { types: ['string', 'char', 'attr-value', 'regex', 'variable'], style: { color: '#f87c32' } },
      { types: ['parameter'], style: { fontStyle: 'italic' } },
      { types: ['entity', 'url'], style: { color: '#67cdcc' } },
      { types: ['operator'], style: { color: 'ffffffee' } },
      { types: ['important', 'bold'], style: { fontWeight: 'bold' } },
      { types: ['italic'], style: { fontStyle: 'italic' } },
      { types: ['entity'], style: { cursor: 'help' } },
      { types: ['inserted'], style: { color: 'green' } },
    ],
  },
  lm = tm,
  am = {
    plain: { color: '#282a2e', backgroundColor: '#ffffff' },
    styles: [
      { types: ['comment'], style: { color: 'rgb(197, 200, 198)' } },
      {
        types: ['string', 'number', 'builtin', 'variable'],
        style: { color: 'rgb(150, 152, 150)' },
      },
      {
        types: ['class-name', 'function', 'tag', 'attr-name'],
        style: { color: 'rgb(40, 42, 46)' },
      },
    ],
  },
  nm = am,
  im = {
    plain: { color: '#9CDCFE', backgroundColor: '#1E1E1E' },
    styles: [
      { types: ['prolog'], style: { color: 'rgb(0, 0, 128)' } },
      { types: ['comment'], style: { color: 'rgb(106, 153, 85)' } },
      {
        types: ['builtin', 'changed', 'keyword', 'interpolation-punctuation'],
        style: { color: 'rgb(86, 156, 214)' },
      },
      { types: ['number', 'inserted'], style: { color: 'rgb(181, 206, 168)' } },
      { types: ['constant'], style: { color: 'rgb(100, 102, 149)' } },
      { types: ['attr-name', 'variable'], style: { color: 'rgb(156, 220, 254)' } },
      {
        types: ['deleted', 'string', 'attr-value', 'template-punctuation'],
        style: { color: 'rgb(206, 145, 120)' },
      },
      { types: ['selector'], style: { color: 'rgb(215, 186, 125)' } },
      { types: ['tag'], style: { color: 'rgb(78, 201, 176)' } },
      { types: ['tag'], languages: ['markup'], style: { color: 'rgb(86, 156, 214)' } },
      { types: ['punctuation', 'operator'], style: { color: 'rgb(212, 212, 212)' } },
      { types: ['punctuation'], languages: ['markup'], style: { color: '#808080' } },
      { types: ['function'], style: { color: 'rgb(220, 220, 170)' } },
      { types: ['class-name'], style: { color: 'rgb(78, 201, 176)' } },
      { types: ['char'], style: { color: 'rgb(209, 105, 105)' } },
    ],
  },
  Og = im,
  rm = {
    plain: { color: '#000000', backgroundColor: '#ffffff' },
    styles: [
      { types: ['comment'], style: { color: 'rgb(0, 128, 0)' } },
      { types: ['builtin'], style: { color: 'rgb(0, 112, 193)' } },
      { types: ['number', 'variable', 'inserted'], style: { color: 'rgb(9, 134, 88)' } },
      { types: ['operator'], style: { color: 'rgb(0, 0, 0)' } },
      { types: ['constant', 'char'], style: { color: 'rgb(129, 31, 63)' } },
      { types: ['tag'], style: { color: 'rgb(128, 0, 0)' } },
      { types: ['attr-name'], style: { color: 'rgb(255, 0, 0)' } },
      { types: ['deleted', 'string'], style: { color: 'rgb(163, 21, 21)' } },
      { types: ['changed', 'punctuation'], style: { color: 'rgb(4, 81, 165)' } },
      { types: ['function', 'keyword'], style: { color: 'rgb(0, 0, 255)' } },
      { types: ['class-name'], style: { color: 'rgb(38, 127, 153)' } },
    ],
  },
  um = rm,
  sm = {
    plain: { color: '#f8fafc', backgroundColor: '#011627' },
    styles: [
      { types: ['prolog'], style: { color: '#000080' } },
      { types: ['comment'], style: { color: '#6A9955' } },
      {
        types: ['builtin', 'changed', 'keyword', 'interpolation-punctuation'],
        style: { color: '#569CD6' },
      },
      { types: ['number', 'inserted'], style: { color: '#B5CEA8' } },
      { types: ['constant'], style: { color: '#f8fafc' } },
      { types: ['attr-name', 'variable'], style: { color: '#9CDCFE' } },
      {
        types: ['deleted', 'string', 'attr-value', 'template-punctuation'],
        style: { color: '#cbd5e1' },
      },
      { types: ['selector'], style: { color: '#D7BA7D' } },
      { types: ['tag'], style: { color: '#0ea5e9' } },
      { types: ['tag'], languages: ['markup'], style: { color: '#0ea5e9' } },
      { types: ['punctuation', 'operator'], style: { color: '#D4D4D4' } },
      { types: ['punctuation'], languages: ['markup'], style: { color: '#808080' } },
      { types: ['function'], style: { color: '#7dd3fc' } },
      { types: ['class-name'], style: { color: '#0ea5e9' } },
      { types: ['char'], style: { color: '#D16969' } },
    ],
  },
  om = sm,
  cm = {
    plain: { color: '#0f172a', backgroundColor: '#f1f5f9' },
    styles: [
      { types: ['prolog'], style: { color: '#000080' } },
      { types: ['comment'], style: { color: '#6A9955' } },
      {
        types: ['builtin', 'changed', 'keyword', 'interpolation-punctuation'],
        style: { color: '#0c4a6e' },
      },
      { types: ['number', 'inserted'], style: { color: '#B5CEA8' } },
      { types: ['constant'], style: { color: '#0f172a' } },
      { types: ['attr-name', 'variable'], style: { color: '#0c4a6e' } },
      {
        types: ['deleted', 'string', 'attr-value', 'template-punctuation'],
        style: { color: '#64748b' },
      },
      { types: ['selector'], style: { color: '#D7BA7D' } },
      { types: ['tag'], style: { color: '#0ea5e9' } },
      { types: ['tag'], languages: ['markup'], style: { color: '#0ea5e9' } },
      { types: ['punctuation', 'operator'], style: { color: '#475569' } },
      { types: ['punctuation'], languages: ['markup'], style: { color: '#808080' } },
      { types: ['function'], style: { color: '#0e7490' } },
      { types: ['class-name'], style: { color: '#0ea5e9' } },
      { types: ['char'], style: { color: '#D16969' } },
    ],
  },
  fm = cm,
  dm = {
    plain: {
      backgroundColor: 'hsl(220, 13%, 18%)',
      color: 'hsl(220, 14%, 71%)',
      textShadow: '0 1px rgba(0, 0, 0, 0.3)',
    },
    styles: [
      { types: ['comment', 'prolog', 'cdata'], style: { color: 'hsl(220, 10%, 40%)' } },
      { types: ['doctype', 'punctuation', 'entity'], style: { color: 'hsl(220, 14%, 71%)' } },
      {
        types: [
          'attr-name',
          'class-name',
          'maybe-class-name',
          'boolean',
          'constant',
          'number',
          'atrule',
        ],
        style: { color: 'hsl(29, 54%, 61%)' },
      },
      { types: ['keyword'], style: { color: 'hsl(286, 60%, 67%)' } },
      {
        types: ['property', 'tag', 'symbol', 'deleted', 'important'],
        style: { color: 'hsl(355, 65%, 65%)' },
      },
      {
        types: ['selector', 'string', 'char', 'builtin', 'inserted', 'regex', 'attr-value'],
        style: { color: 'hsl(95, 38%, 62%)' },
      },
      { types: ['variable', 'operator', 'function'], style: { color: 'hsl(207, 82%, 66%)' } },
      { types: ['url'], style: { color: 'hsl(187, 47%, 55%)' } },
      { types: ['deleted'], style: { textDecorationLine: 'line-through' } },
      { types: ['inserted'], style: { textDecorationLine: 'underline' } },
      { types: ['italic'], style: { fontStyle: 'italic' } },
      { types: ['important', 'bold'], style: { fontWeight: 'bold' } },
      { types: ['important'], style: { color: 'hsl(220, 14%, 71%)' } },
    ],
  },
  gm = dm,
  hm = {
    plain: { backgroundColor: 'hsl(230, 1%, 98%)', color: 'hsl(230, 8%, 24%)' },
    styles: [
      { types: ['comment', 'prolog', 'cdata'], style: { color: 'hsl(230, 4%, 64%)' } },
      { types: ['doctype', 'punctuation', 'entity'], style: { color: 'hsl(230, 8%, 24%)' } },
      {
        types: ['attr-name', 'class-name', 'boolean', 'constant', 'number', 'atrule'],
        style: { color: 'hsl(35, 99%, 36%)' },
      },
      { types: ['keyword'], style: { color: 'hsl(301, 63%, 40%)' } },
      {
        types: ['property', 'tag', 'symbol', 'deleted', 'important'],
        style: { color: 'hsl(5, 74%, 59%)' },
      },
      {
        types: [
          'selector',
          'string',
          'char',
          'builtin',
          'inserted',
          'regex',
          'attr-value',
          'punctuation',
        ],
        style: { color: 'hsl(119, 34%, 47%)' },
      },
      { types: ['variable', 'operator', 'function'], style: { color: 'hsl(221, 87%, 60%)' } },
      { types: ['url'], style: { color: 'hsl(198, 99%, 37%)' } },
      { types: ['deleted'], style: { textDecorationLine: 'line-through' } },
      { types: ['inserted'], style: { textDecorationLine: 'underline' } },
      { types: ['italic'], style: { fontStyle: 'italic' } },
      { types: ['important', 'bold'], style: { fontWeight: 'bold' } },
      { types: ['important'], style: { color: 'hsl(230, 8%, 24%)' } },
    ],
  },
  pm = hm,
  bm = {
    plain: { color: '#ebdbb2', backgroundColor: '#292828' },
    styles: [
      {
        types: [
          'imports',
          'class-name',
          'maybe-class-name',
          'constant',
          'doctype',
          'builtin',
          'function',
        ],
        style: { color: '#d8a657' },
      },
      { types: ['property-access'], style: { color: '#7daea3' } },
      { types: ['tag'], style: { color: '#e78a4e' } },
      { types: ['attr-name', 'char', 'url', 'regex'], style: { color: '#a9b665' } },
      { types: ['attr-value', 'string'], style: { color: '#89b482' } },
      {
        types: ['comment', 'prolog', 'cdata', 'operator', 'inserted'],
        style: { color: '#a89984' },
      },
      {
        types: [
          'delimiter',
          'boolean',
          'keyword',
          'selector',
          'important',
          'atrule',
          'property',
          'variable',
          'deleted',
        ],
        style: { color: '#ea6962' },
      },
      { types: ['entity', 'number', 'symbol'], style: { color: '#d3869b' } },
    ],
  },
  ym = bm,
  mm = {
    plain: { color: '#654735', backgroundColor: '#f9f5d7' },
    styles: [
      {
        types: [
          'delimiter',
          'boolean',
          'keyword',
          'selector',
          'important',
          'atrule',
          'property',
          'variable',
          'deleted',
        ],
        style: { color: '#af2528' },
      },
      {
        types: ['imports', 'class-name', 'maybe-class-name', 'constant', 'doctype', 'builtin'],
        style: { color: '#b4730e' },
      },
      { types: ['string', 'attr-value'], style: { color: '#477a5b' } },
      { types: ['property-access'], style: { color: '#266b79' } },
      { types: ['function', 'attr-name', 'char', 'url'], style: { color: '#72761e' } },
      { types: ['tag'], style: { color: '#b94c07' } },
      {
        types: ['comment', 'prolog', 'cdata', 'operator', 'inserted'],
        style: { color: '#a89984' },
      },
      { types: ['entity', 'number', 'symbol'], style: { color: '#924f79' } },
    ],
  },
  vm = mm,
  xm = (r) =>
    H.useCallback(
      (c) => {
        var f = c,
          { className: o, style: p, line: h } = f,
          x = kg(f, ['className', 'style', 'line']);
        const _ = or(Yt({}, x), { className: _g('token-line', o) });
        return (
          typeof r == 'object' && 'plain' in r && (_.style = r.plain),
          typeof p == 'object' && (_.style = Yt(Yt({}, _.style || {}), p)),
          _
        );
      },
      [r]
    ),
  Sm = (r) => {
    const c = H.useCallback(
      ({ types: f, empty: o }) => {
        if (r != null) {
          {
            if (f.length === 1 && f[0] === 'plain')
              return o != null ? { display: 'inline-block' } : void 0;
            if (f.length === 1 && o != null) return r[f[0]];
          }
          return Object.assign(o != null ? { display: 'inline-block' } : {}, ...f.map((p) => r[p]));
        }
      },
      [r]
    );
    return H.useCallback(
      (f) => {
        var o = f,
          { token: p, className: h, style: x } = o,
          _ = kg(o, ['token', 'className', 'style']);
        const y = or(Yt({}, _), {
          className: _g('token', ...p.types, h),
          children: p.content,
          style: c(p),
        });
        return (x != null && (y.style = Yt(Yt({}, y.style || {}), x)), y);
      },
      [c]
    );
  },
  Em = /\r\n|\r|\n/,
  Kd = (r) => {
    r.length === 0 ?
      r.push({
        types: ['plain'],
        content: `
`,
        empty: !0,
      })
    : r.length === 1 &&
      r[0].content === '' &&
      ((r[0].content = `
`),
      (r[0].empty = !0));
  },
  $d = (r, c) => {
    const f = r.length;
    return f > 0 && r[f - 1] === c ? r : r.concat(c);
  },
  Nm = (r) => {
    const c = [[]],
      f = [r],
      o = [0],
      p = [r.length];
    let h = 0,
      x = 0,
      _ = [];
    const y = [_];
    for (; x > -1; ) {
      for (; (h = o[x]++) < p[x]; ) {
        let g,
          A = c[x];
        const j = f[x][h];
        if (
          (typeof j == 'string' ?
            ((A = x > 0 ? A : ['plain']), (g = j))
          : ((A = $d(A, j.type)), j.alias && (A = $d(A, j.alias)), (g = j.content)),
          typeof g != 'string')
        ) {
          (x++, c.push(A), f.push(g), o.push(0), p.push(g.length));
          continue;
        }
        const B = g.split(Em),
          E = B.length;
        _.push({ types: A, content: B[0] });
        for (let w = 1; w < E; w++) (Kd(_), y.push((_ = [])), _.push({ types: A, content: B[w] }));
      }
      (x--, c.pop(), f.pop(), o.pop(), p.pop());
    }
    return (Kd(_), y);
  },
  Jd = Nm,
  wm = ({ prism: r, code: c, grammar: f, language: o }) =>
    H.useMemo(() => {
      if (f == null) return Jd([c]);
      const p = { code: c, grammar: f, language: o, tokens: [] };
      return (
        r.hooks.run('before-tokenize', p),
        (p.tokens = r.tokenize(c, f)),
        r.hooks.run('after-tokenize', p),
        Jd(p.tokens)
      );
    }, [c, f, o, r]),
  Am = (r, c) => {
    const { plain: f } = r,
      o = r.styles.reduce((p, h) => {
        const { languages: x, style: _ } = h;
        return (
          (x && !x.includes(c)) ||
            h.types.forEach((y) => {
              const g = Yt(Yt({}, p[y]), _);
              p[y] = g;
            }),
          p
        );
      }, {});
    return ((o.root = f), (o.plain = or(Yt({}, f), { backgroundColor: void 0 })), o);
  },
  Tm = Am,
  _m = ({ children: r, language: c, code: f, theme: o, prism: p }) => {
    const h = c.toLowerCase(),
      x = Tm(o, h),
      _ = xm(x),
      y = Sm(x),
      g = p.languages[h],
      A = wm({ prism: p, language: h, code: f, grammar: g });
    return r({
      tokens: A,
      className: `prism-code language-${h}`,
      style: x != null ? x.root : {},
      getLineProps: _,
      getTokenProps: y,
    });
  },
  jm = (r) =>
    H.createElement(
      _m,
      or(Yt({}, r), {
        prism: r.prism || Y,
        theme: r.theme || Og,
        code: r.code,
        language: r.language,
      })
    );
/*! Bundled license information:

prismjs/prism.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)
*/ const Cm = 'modulepreload',
  km = function (r) {
    return '/' + r;
  },
  Id = {},
  ft = function (c, f, o) {
    let p = Promise.resolve();
    if (f && f.length > 0) {
      let y = function (g) {
        return Promise.all(
          g.map((A) =>
            Promise.resolve(A).then(
              (b) => ({ status: 'fulfilled', value: b }),
              (b) => ({ status: 'rejected', reason: b })
            )
          )
        );
      };
      document.getElementsByTagName('link');
      const x = document.querySelector('meta[property=csp-nonce]'),
        _ = x?.nonce || x?.getAttribute('nonce');
      p = y(
        f.map((g) => {
          if (((g = km(g)), g in Id)) return;
          Id[g] = !0;
          const A = g.endsWith('.css'),
            b = A ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${g}"]${b}`)) return;
          const j = document.createElement('link');
          if (
            ((j.rel = A ? 'stylesheet' : Cm),
            A || (j.as = 'script'),
            (j.crossOrigin = ''),
            (j.href = g),
            _ && j.setAttribute('nonce', _),
            document.head.appendChild(j),
            A)
          )
            return new Promise((B, E) => {
              (j.addEventListener('load', B),
                j.addEventListener('error', () => E(new Error(`Unable to preload CSS for ${g}`))));
            });
        })
      );
    }
    function h(x) {
      const _ = new Event('vite:preloadError', { cancelable: !0 });
      if (((_.payload = x), window.dispatchEvent(_), !_.defaultPrevented)) throw x;
    }
    return p.then((x) => {
      for (const _ of x || []) _.status === 'rejected' && h(_.reason);
      return c().catch(h);
    });
  },
  nr = {};
function Rg(r) {
  if (!nr[r]) {
    const f = {
      bash: () => ft(() => import('./prism-bash-DTkDXsAh.js'), []),
      sh: () => ft(() => import('./prism-bash-DTkDXsAh.js'), []),
      shell: () => ft(() => import('./prism-bash-DTkDXsAh.js'), []),
      php: async () => (
        await ft(() => import('./prism-markup-templating-Ct1xsyfA.js'), []),
        ft(() => import('./prism-php-DV5bsRmW.js').then((o) => o.p), [])
      ),
      sql: () => ft(() => import('./prism-sql-AgAyy5H_.js'), []),
      ruby: () => ft(() => import('./prism-ruby-4o3yvDCn.js').then((o) => o.p), []),
      java: () => ft(() => import('./prism-java-tbtVr0zK.js').then((o) => o.p), []),
      scala: async () => (await Rg('java'), ft(() => import('./prism-scala-BjNo2HkN.js'), [])),
      solidity: () => ft(() => import('./prism-solidity-7TdUKRVB.js').then((o) => o.p), []),
      vim: () => ft(() => import('./prism-vim-uciLQ2PQ.js'), []),
      dart: () => ft(() => import('./prism-dart-MjriiaMt.js'), []),
      csharp: () => ft(() => import('./prism-csharp-cjMWCgun.js').then((o) => o.p), []),
      protobuf: () => ft(() => import('./prism-protobuf-DiQ_z8B5.js'), []),
    }[r];
    if (!f)
      return (
        console.warn(`No loader available for language: ${r}`),
        Promise.reject(new Error(`Unsupported language: ${r}`))
      );
    nr[r] = f()
      .then(() => {})
      .catch((o) => {
        throw (delete nr[r], console.warn(`Failed to load language: ${r}`, o), o);
      });
  }
  return nr[r];
}
typeof global < 'u' ? (global.Prism = Y) : typeof window < 'u' && (window.Prism = Y);
const Wd = [
  'markup',
  'html',
  'xml',
  'svg',
  'javascript',
  'js',
  'typescript',
  'ts',
  'jsx',
  'tsx',
  'css',
  'c',
  'cpp',
  'swift',
  'kotlin',
  'objectivec',
  'reason',
  'rust',
  'go',
  'graphql',
  'yaml',
  'yml',
  'json',
  'markdown',
  'md',
  'python',
  'py',
];
function Om(r, c) {
  const [f, o] = H.useState(() => Wd.includes(c) || !!Y.languages[c]);
  return (
    H.useEffect(() => {
      if (!f) {
        if (Wd.includes(c)) {
          o(!0);
          return;
        }
        Rg(c)
          .then(() => {
            o(!0);
          })
          .catch(() => {
            o(!1);
          });
      }
    }, [c, f]),
    { ready: f, actualLang: f ? c : 'text' }
  );
}
const Pd = [
    { id: 'github', label: 'GitHub Light' },
    { id: 'vsLight', label: 'VS Light' },
    { id: 'oneLight', label: 'One Light' },
    { id: 'gruvboxMaterialLight', label: 'Gruvbox Material Light' },
    { id: 'nightOwlLight', label: 'Night Owl Light' },
  ],
  eg = [
    { id: 'vsDark', label: 'VS Dark' },
    { id: 'oneDark', label: 'One Dark' },
    { id: 'gruvboxMaterialDark', label: 'Gruvbox Material Dark' },
    { id: 'nightOwl', label: 'Night Owl' },
    { id: 'dracula', label: 'Dracula' },
    { id: 'okaidia', label: 'Okaidia' },
  ];
function Rm(r) {
  return {
    ...r,
    styles: r.styles.map((c) => ({
      ...c,
      style: { ...c.style, background: void 0, backgroundColor: void 0 },
    })),
  };
}
function Dm(r) {
  let c;
  switch (r) {
    case 'github':
      c = Et.github;
      break;
    case 'vsLight':
      c = Et.vsLight;
      break;
    case 'oneLight':
      c = Et.oneLight;
      break;
    case 'gruvboxMaterialLight':
      c = Et.gruvboxMaterialLight;
      break;
    case 'nightOwlLight':
      c = Et.nightOwlLight;
      break;
    case 'vsDark':
      c = Et.vsDark;
      break;
    case 'oneDark':
      c = Et.oneDark;
      break;
    case 'gruvboxMaterialDark':
      c = Et.gruvboxMaterialDark;
      break;
    case 'nightOwl':
      c = Et.nightOwl;
      break;
    case 'dracula':
      c = Et.dracula;
      break;
    case 'okaidia':
      c = Et.okaidia;
      break;
    default:
      c = Et.vsDark;
  }
  return Rm(c);
}
function zm(r) {
  const c = by(r).toLowerCase(),
    f = Ng(r),
    o = {
      dockerfile: 'docker',
      makefile: 'makefile',
      '.gitignore': 'git',
      '.env': 'bash',
      '.bashrc': 'bash',
      '.zshrc': 'bash',
      '.bash_profile': 'bash',
      '.profile': 'bash',
    };
  return o[c] ?
      o[c]
    : {
        ts: 'typescript',
        tsx: 'tsx',
        js: 'javascript',
        jsx: 'jsx',
        json: 'json',
        css: 'css',
        scss: 'css',
        html: 'html',
        sh: 'bash',
        bash: 'bash',
        zsh: 'bash',
        fish: 'bash',
        yml: 'yaml',
        yaml: 'yaml',
        md: 'markdown',
        py: 'python',
        rb: 'ruby',
        go: 'go',
        rs: 'rust',
        java: 'java',
        cpp: 'cpp',
        c: 'c',
        php: 'php',
        sql: 'sql',
        xml: 'xml',
        swift: 'swift',
        kt: 'kotlin',
        scala: 'scala',
        r: 'r',
        lua: 'lua',
        perl: 'perl',
        dockerfile: 'docker',
        makefile: 'makefile',
        gitignore: 'git',
        env: 'bash',
        conf: 'nginx',
        ini: 'ini',
        toml: 'toml',
        sol: 'solidity',
        vim: 'vim',
        dart: 'dart',
        cs: 'csharp',
        proto: 'protobuf',
      }[f || ''] || 'text';
}
let Dg = '';
function Mm(r) {
  Dg = r;
}
function Lm({
  code: r,
  language: c,
  className: f,
  syntaxTheme: o = 'vsDark',
  renderToken: p,
  onMouseOver: h,
  onMouseOut: x,
}) {
  const _ = c || zm(Dg),
    { actualLang: y } = Om(r, _),
    g = Dm(o);
  return s.jsx(jm, {
    code: r,
    language: y,
    theme: g,
    prism: Y,
    children: ({ style: A, tokens: b, getLineProps: j, getTokenProps: B }) =>
      s.jsx('span', {
        className: f,
        style: { ...A, background: 'transparent', backgroundColor: 'transparent' },
        onMouseOver: h,
        onMouseOut: x,
        children: b.map((E, w) =>
          s.jsx(
            'span',
            {
              ...j({ line: E }),
              children: E.map((C, N) =>
                p ? p(C, N, B) : s.jsx('span', { ...B({ token: C }) }, N)
              ),
            },
            w
          )
        ),
      }),
  });
}
function Ds(r) {
  const { handleMouseOver: c, handleMouseOut: f, isWordHighlighted: o } = wy(),
    p = (h, x, _) => {
      const y = _({ token: h }),
        g = h.content.split(/( +)/);
      if (g.length === 1 && g[0] && !Qd(g[0])) return s.jsx('span', { ...y }, x);
      const A = g.map((b, j) => {
        if (!b) return null;
        if (Qd(b)) {
          const B = b.trim(),
            E = o(B);
          return s.jsx(
            'span',
            { className: `word-token ${E ? 'word-highlight' : ''}`, 'data-word': B, children: b },
            `${x}-${j}`
          );
        }
        return s.jsx('span', { children: b }, `${x}-${j}`);
      });
      return s.jsx('span', { ...y, children: A }, x);
    };
  return s.jsx(Lm, { ...r, renderToken: p, onMouseOver: c, onMouseOut: f });
}
const Um = (r) => {
    switch (r.type) {
      case 'add':
        return 'bg-diff-addition-bg';
      case 'delete':
        return 'bg-diff-deletion-bg';
      default:
        return 'bg-transparent';
    }
  },
  Bm = (r) => {
    switch (r.type) {
      case 'add':
        return '+';
      case 'delete':
        return '-';
      default:
        return ' ';
    }
  },
  zg = Yn.memo(
    ({
      line: r,
      lineId: c,
      isCurrentLine: f = !1,
      hoveredLine: o,
      selectedLineStyle: p,
      onMouseEnter: h,
      onMouseLeave: x,
      onMouseMove: _,
      onCommentButtonMouseDown: y,
      onCommentButtonMouseUp: g,
      syntaxTheme: A,
    }) => {
      const b = r.newLineNumber || r.oldLineNumber,
        j = o === b && b,
        B = f ? 'keyboard-cursor' : '';
      return s.jsxs('tr', {
        id: c,
        className: `group ${Um(r)} relative ${p} ${B}`,
        onMouseEnter: h,
        onMouseLeave: x,
        onMouseMove: _,
        children: [
          s.jsx('td', {
            className:
              'w-[50px] px-2 text-right text-github-text-muted bg-github-bg-secondary border-r border-github-border select-none align-top relative',
            children: r.oldLineNumber || '',
          }),
          s.jsxs('td', {
            className:
              'w-[50px] px-2 text-right text-github-text-muted bg-github-bg-secondary border-r border-github-border select-none align-top relative overflow-visible',
            children: [
              s.jsx('span', { className: 'pr-5', children: r.newLineNumber || '' }),
              j && s.jsx(ir, { onMouseDown: y, onMouseUp: g }),
            ],
          }),
          s.jsx('td', {
            className: 'p-0 w-full relative align-top',
            children: s.jsxs('div', {
              className: 'flex items-center relative min-h-[16px]',
              children: [
                s.jsx('span', {
                  className: `w-5 text-center text-github-text-muted flex-shrink-0 bg-github-bg-secondary border-r border-github-border ${
                    r.type === 'add' ? 'text-github-accent bg-diff-addition-bg'
                    : r.type === 'delete' ? 'text-github-danger bg-diff-deletion-bg'
                    : ''
                  }`,
                  children: Bm(r),
                }),
                s.jsx(Ds, {
                  code: r.content,
                  className:
                    'flex-1 px-3 text-github-text-primary whitespace-pre-wrap break-all overflow-wrap-break-word select-text [&_pre]:m-0 [&_pre]:p-0 [&_pre]:!bg-transparent [&_pre]:font-inherit [&_pre]:text-inherit [&_pre]:leading-inherit [&_code]:!bg-transparent [&_code]:font-inherit [&_code]:text-inherit [&_code]:leading-inherit',
                  syntaxTheme: A,
                }),
              ],
            }),
          }),
        ],
      });
    }
  );
zg.displayName = 'DiffLineRow';
function Hm({
  chunk: r,
  chunkIndex: c,
  comments: f,
  onAddComment: o,
  onGeneratePrompt: p,
  onRemoveComment: h,
  onUpdateComment: x,
  syntaxTheme: _,
  cursor: y = null,
  fileIndex: g = 0,
  commentTrigger: A,
  onCommentTriggerHandled: b,
}) {
  const [j, B] = H.useState(null),
    [E, w] = H.useState(null),
    [C, N] = H.useState(!1),
    [S, R] = H.useState(null),
    [V, K] = H.useState(null);
  (H.useEffect(() => {
    if (A?.lineIndex !== void 0) {
      const M = r.lines[A.lineIndex];
      if (M && M.type !== 'delete') {
        const ee = M.newLineNumber;
        ee && (R({ side: 'new', lineNumber: ee }), b?.());
      }
    }
  }, [A, r.lines, b]),
    H.useEffect(() => {
      if (C) {
        const M = () => {
          (N(!1), B(null), w(null));
        };
        return (
          document.addEventListener('mouseup', M),
          () => {
            document.removeEventListener('mouseup', M);
          }
        );
      }
    }, [C]));
  const ie = H.useCallback(
      (M, ee) => {
        S?.side === M && S?.lineNumber === ee ? R(null) : R({ side: M, lineNumber: ee });
      },
      [S]
    ),
    re = H.useCallback(() => {
      R(null);
    }, []),
    he = H.useCallback(
      async (M) => {
        S !== null && (await o(S.lineNumber, M), R(null));
      },
      [S, o]
    ),
    oe = (M) => f.filter((ee) => (Array.isArray(ee.line) ? ee.line[1] === M : ee.line === M)),
    ce = (M) =>
      M.oldLine?.type === 'delete' && M.newLine?.type === 'add' ?
        M.newLineNumber ?
          'right'
        : 'left'
      : M.oldLine?.type === 'delete' ? 'left'
      : M.newLine?.type === 'add' ? 'right'
      : 'full',
    P = (M, ee) => {
      const O = M === 'old' ? ee.oldLineNumber : ee.newLineNumber;
      if (!O) return '';
      if (C && j && E && j.side === M && E.side === M) {
        const F = Math.min(j.lineNumber, E.lineNumber),
          Q = Math.max(j.lineNumber, E.lineNumber);
        if (O >= F && O <= Q) {
          let te =
            'after:bg-blue-100 after:absolute after:inset-0 after:opacity-30 after:border-l-4 after:border-blue-500 after:pointer-events-none';
          return (
            O === F && (te += ' after:border-t-2'),
            O === Q && (te += ' after:border-b-2'),
            te
          );
        }
      }
      if (S && S.side === M) {
        const F = Array.isArray(S.lineNumber) ? S.lineNumber : [S.lineNumber, S.lineNumber],
          Q = F[0],
          te = F[1];
        if (Q !== void 0 && te !== void 0 && O >= Q && O <= te)
          return 'after:bg-diff-selected-bg after:absolute after:inset-0 after:border-l-5 after:border-l-diff-selected-border after:pointer-events-none';
      }
      return '';
    },
    W = ((M) => {
      const ee = [];
      let O = r.oldStart,
        F = r.newStart,
        Q = 0;
      for (; Q < M.length; ) {
        const te = M[Q];
        if (!te) {
          Q++;
          continue;
        }
        if (te.type === 'normal')
          (ee.push({
            oldLine: te,
            newLine: { ...te },
            oldLineNumber: te.oldLineNumber ?? O,
            newLineNumber: te.newLineNumber ?? F,
            oldLineOriginalIndex: Q,
            newLineOriginalIndex: Q,
          }),
            O++,
            F++,
            Q++);
        else if (te.type === 'delete') {
          let v = Q + 1;
          for (; v < M.length && M[v]?.type === 'delete'; ) v++;
          const q = M.slice(Q, v),
            I = Q,
            $ = [],
            le = v;
          for (; v < M.length && M[v]?.type === 'add'; ) {
            const J = M[v];
            (J && $.push(J), v++);
          }
          const ue = Math.max(q.length, $.length);
          for (let J = 0; J < ue; J++) {
            const ye = q[J],
              pe = $[J];
            ee.push({
              oldLine: ye,
              newLine: pe,
              oldLineNumber: ye ? (ye.oldLineNumber ?? O + J) : void 0,
              newLineNumber: pe ? (pe.newLineNumber ?? F + J) : void 0,
              oldLineOriginalIndex: ye ? I + J : void 0,
              newLineOriginalIndex: pe ? le + J : void 0,
            });
          }
          ((O += q.length), (F += $.length), (Q = v));
        } else
          te.type === 'add' &&
            (ee.push({
              newLine: te,
              newLineNumber: te.newLineNumber ?? F,
              newLineOriginalIndex: Q,
            }),
            F++,
            Q++);
      }
      return ee;
    })(r.lines);
  return s.jsx('div', {
    className: 'bg-github-bg-primary border border-github-border rounded-md overflow-hidden',
    children: s.jsx('table', {
      className: 'w-full border-collapse font-mono text-xs leading-5',
      children: s.jsx('tbody', {
        children: W.map((M, ee) => {
          const O =
              M.newLineNumber ? oe(M.newLineNumber)
              : M.oldLineNumber ? oe(M.oldLineNumber)
              : [],
            F = M.oldLineOriginalIndex ?? -1,
            Q = M.newLineOriginalIndex ?? -1,
            te =
              y ?
                y.side === 'left' && F >= 0 ? y.chunkIndex === c && y.lineIndex === F
                : y.side === 'right' && Q >= 0 ? y.chunkIndex === c && y.lineIndex === Q
                : !1
              : !1,
            v = F >= 0 ? `file-${g}-chunk-${c}-line-${F}-left` : void 0,
            q = Q >= 0 ? `file-${g}-chunk-${c}-line-${Q}-right` : void 0,
            I = te && y?.side === 'left',
            $ = te && y?.side === 'right',
            le = 'keyboard-cursor';
          return s.jsxs(
            Yn.Fragment,
            {
              children: [
                s.jsxs('tr', {
                  className: 'group',
                  onMouseEnter: (ue) => {
                    const J = ue.target,
                      ye = J.closest('td:nth-child(1)') || J.closest('td:nth-child(2)'),
                      pe = J.closest('td:nth-child(3)') || J.closest('td:nth-child(4)');
                    ye && M.oldLineNumber ?
                      K({ side: 'old', lineNumber: M.oldLineNumber })
                    : pe && M.newLineNumber && K({ side: 'new', lineNumber: M.newLineNumber });
                  },
                  onMouseMove: (ue) => {
                    const J = ue.target,
                      ye = J.closest('td:nth-child(1)') || J.closest('td:nth-child(2)'),
                      pe = J.closest('td:nth-child(3)') || J.closest('td:nth-child(4)');
                    (ye && M.oldLineNumber ?
                      (V?.side !== 'old' || V?.lineNumber !== M.oldLineNumber) &&
                      K({ side: 'old', lineNumber: M.oldLineNumber })
                    : pe &&
                      M.newLineNumber &&
                      (V?.side !== 'new' || V?.lineNumber !== M.newLineNumber) &&
                      K({ side: 'new', lineNumber: M.newLineNumber }),
                      C &&
                        j &&
                        (j.side === 'old' && M.oldLineNumber ?
                          w({ side: 'old', lineNumber: M.oldLineNumber })
                        : j.side === 'new' &&
                          M.newLineNumber &&
                          w({ side: 'new', lineNumber: M.newLineNumber })));
                  },
                  onMouseLeave: () => K(null),
                  children: [
                    s.jsxs('td', {
                      id: v,
                      className: `w-[60px] px-2 text-right text-github-text-muted bg-github-bg-secondary border-r border-github-border select-none align-top relative overflow-visible ${I ? le : ''}`,
                      children: [
                        s.jsx('span', { className: 'pr-5', children: M.oldLineNumber || '' }),
                        V?.side === 'old' &&
                          V?.lineNumber === M.oldLineNumber &&
                          s.jsx(ir, {
                            onMouseDown: (ue) => {
                              (ue.stopPropagation(),
                                M.oldLineNumber &&
                                  (B({ side: 'old', lineNumber: M.oldLineNumber }),
                                  w({ side: 'old', lineNumber: M.oldLineNumber }),
                                  N(!0)));
                            },
                            onMouseUp: (ue) => {
                              if ((ue.stopPropagation(), !M.oldLineNumber || !j)) {
                                (N(!1), B(null), w(null));
                                return;
                              }
                              const J = E && E.side === 'old' ? E.lineNumber : M.oldLineNumber;
                              if (j.side !== 'old' || j.lineNumber === J)
                                ie('old', M.oldLineNumber);
                              else {
                                const ye = Math.min(j.lineNumber, J),
                                  pe = Math.max(j.lineNumber, J);
                                ie('old', [ye, pe]);
                              }
                              (N(!1), B(null), w(null));
                            },
                          }),
                      ],
                    }),
                    s.jsx('td', {
                      className: `w-1/2 p-0 align-top border-r border-github-border relative ${
                        M.oldLine?.type === 'delete' ? 'bg-diff-deletion-bg'
                        : M.oldLine?.type === 'normal' ? 'bg-transparent'
                        : 'bg-github-bg-secondary'
                      } ${P('old', M)} ${I ? le : ''}`,
                      children:
                        M.oldLine &&
                        s.jsx('div', {
                          className: 'flex items-center relative min-h-[20px] px-3',
                          children: s.jsx(Ds, {
                            code: M.oldLine.content,
                            className:
                              'flex-1 text-github-text-primary whitespace-pre-wrap break-all overflow-wrap-break-word select-text [&_pre]:m-0 [&_pre]:p-0 [&_pre]:!bg-transparent [&_pre]:font-inherit [&_pre]:text-inherit [&_pre]:leading-inherit [&_code]:!bg-transparent [&_code]:font-inherit [&_code]:text-inherit [&_code]:leading-inherit',
                            syntaxTheme: _,
                          }),
                        }),
                    }),
                    s.jsxs('td', {
                      id: q,
                      className: `w-[60px] px-2 text-right text-github-text-muted bg-github-bg-secondary border-r border-github-border select-none align-top relative overflow-visible ${$ ? le : ''}`,
                      children: [
                        s.jsx('span', { className: 'pr-5', children: M.newLineNumber || '' }),
                        V?.side === 'new' &&
                          V?.lineNumber === M.newLineNumber &&
                          s.jsx(ir, {
                            onMouseDown: (ue) => {
                              (ue.stopPropagation(),
                                M.newLineNumber &&
                                  (B({ side: 'new', lineNumber: M.newLineNumber }),
                                  w({ side: 'new', lineNumber: M.newLineNumber }),
                                  N(!0)));
                            },
                            onMouseUp: (ue) => {
                              if ((ue.stopPropagation(), !M.newLineNumber || !j)) {
                                (N(!1), B(null), w(null));
                                return;
                              }
                              const J = E && E.side === 'new' ? E.lineNumber : M.newLineNumber;
                              if (j.side !== 'new' || j.lineNumber === J)
                                ie('new', M.newLineNumber);
                              else {
                                const ye = Math.min(j.lineNumber, J),
                                  pe = Math.max(j.lineNumber, J);
                                ie('new', [ye, pe]);
                              }
                              (N(!1), B(null), w(null));
                            },
                          }),
                      ],
                    }),
                    s.jsx('td', {
                      className: `w-1/2 p-0 align-top relative ${
                        M.newLine?.type === 'add' ? 'bg-diff-addition-bg'
                        : M.newLine?.type === 'normal' ? 'bg-transparent'
                        : 'bg-github-bg-secondary'
                      } ${P('new', M)} ${$ ? le : ''}`,
                      children:
                        M.newLine &&
                        s.jsx('div', {
                          className: 'flex items-center relative min-h-[20px] px-3',
                          children: s.jsx(Ds, {
                            code: M.newLine.content,
                            className:
                              'flex-1 text-github-text-primary whitespace-pre-wrap break-all overflow-wrap-break-word select-text [&_pre]:m-0 [&_pre]:p-0 [&_pre]:!bg-transparent [&_pre]:font-inherit [&_pre]:text-inherit [&_pre]:leading-inherit [&_code]:!bg-transparent [&_code]:font-inherit [&_code]:text-inherit [&_code]:leading-inherit',
                            syntaxTheme: _,
                          }),
                        }),
                    }),
                  ],
                }),
                O.length > 0 &&
                  s.jsx('tr', {
                    className: 'bg-github-bg-secondary',
                    children: s.jsx('td', {
                      colSpan: 4,
                      className: 'p-0 border-t border-github-border',
                      children: O.map((ue) => {
                        const J = ce(M);
                        return s.jsx(
                          'div',
                          {
                            className: `flex ${
                              J === 'left' ? 'justify-start'
                              : J === 'right' ? 'justify-end'
                              : 'justify-center'
                            }`,
                            children: s.jsx('div', {
                              className: `${J === 'full' ? 'w-full' : 'w-1/2'} m-2 mx-4`,
                              children: s.jsx(qs, {
                                comment: ue,
                                onGeneratePrompt: p,
                                onRemoveComment: h,
                                onUpdateComment: x,
                              }),
                            }),
                          },
                          ue.id
                        );
                      }),
                    }),
                  }),
                S &&
                  ((S.side === 'old' && S.lineNumber === M.oldLineNumber) ||
                    (S.side === 'new' && S.lineNumber === M.newLineNumber) ||
                    (Array.isArray(S.lineNumber) &&
                      ((S.side === 'new' && S.lineNumber[1] === M.newLineNumber) ||
                        (S.side === 'old' && S.lineNumber[1] === M.oldLineNumber)))) &&
                  s.jsx('tr', {
                    className: 'bg-github-bg-secondary',
                    children: s.jsx('td', {
                      colSpan: 4,
                      className: 'p-0 border-t border-github-border',
                      children: s.jsx('div', {
                        className: `flex ${
                          ce(M) === 'left' ? 'justify-start'
                          : ce(M) === 'right' ? 'justify-end'
                          : 'justify-center'
                        }`,
                        children: s.jsx('div', {
                          className: `${ce(M) === 'full' ? 'w-full' : 'w-1/2'}`,
                          children: s.jsx(wg, { onSubmit: he, onCancel: re }),
                        }),
                      }),
                    }),
                  }),
              ],
            },
            ee
          );
        }),
      }),
    }),
  });
}
function qm({
  chunk: r,
  chunkIndex: c,
  comments: f,
  onAddComment: o,
  onGeneratePrompt: p,
  onRemoveComment: h,
  onUpdateComment: x,
  mode: _ = 'inline',
  syntaxTheme: y,
  cursor: g = null,
  fileIndex: A = 0,
  commentTrigger: b,
  onCommentTriggerHandled: j,
}) {
  const [B, E] = H.useState(null),
    [w, C] = H.useState(null),
    [N, S] = H.useState(!1),
    [R, V] = H.useState(null),
    [K, ie] = H.useState(null);
  (H.useEffect(() => {
    if (b?.lineIndex !== void 0) {
      const W = r.lines[b.lineIndex];
      if (W) {
        const M = W.newLineNumber || W.oldLineNumber;
        M && (V(M), j?.());
      }
    }
  }, [b, r.lines, j]),
    H.useEffect(() => {
      if (N) {
        const W = () => {
          (S(!1), E(null), C(null));
        };
        return (
          document.addEventListener('mouseup', W),
          () => {
            document.removeEventListener('mouseup', W);
          }
        );
      }
    }, [N]));
  const re = H.useCallback(
      (W) => {
        V(R === W ? null : W);
      },
      [R]
    ),
    he = H.useCallback(() => {
      V(null);
    }, []),
    oe = H.useCallback(
      async (W) => {
        R !== null && (await o(R, W), V(null));
      },
      [R, o]
    ),
    ce = (W) => f.filter((M) => (Array.isArray(M.line) ? M.line[1] === W : M.line === W)),
    P = (W) => {
      if (_ === 'inline') return 'full';
      switch (W.type) {
        case 'delete':
          return 'left';
        case 'add':
          return 'right';
        default:
          return 'full';
      }
    },
    ne = (W) => {
      if (!W) return '';
      if (N && B && w) {
        const M = Math.min(B, w),
          ee = Math.max(B, w);
        if (W >= M && W <= ee) {
          let O =
            'after:bg-blue-100 after:absolute after:inset-0 after:opacity-30 after:border-l-4 after:border-blue-500 after:pointer-events-none';
          return (W === M && (O += ' after:border-t-2'), W === ee && (O += ' after:border-b-2'), O);
        }
      }
      if (R) {
        const M = Array.isArray(R) ? R[0] : R,
          ee = Array.isArray(R) ? R[1] : R;
        if (W >= M && W <= ee)
          return 'after:bg-diff-selected-bg after:absolute after:inset-0 after:border-l-5 after:border-l-diff-selected-border after:pointer-events-none';
      }
      return '';
    };
  return _ === 'side-by-side' ?
      s.jsx(Hm, {
        chunk: r,
        chunkIndex: c,
        comments: f,
        onAddComment: o,
        onGeneratePrompt: p,
        onRemoveComment: h,
        onUpdateComment: x,
        syntaxTheme: y,
        cursor: g,
        fileIndex: A,
        commentTrigger: b,
        onCommentTriggerHandled: j,
      })
    : s.jsx('div', {
        className: 'bg-github-bg-primary',
        children: s.jsx('table', {
          className: 'w-full border-collapse font-mono text-xs leading-5',
          children: s.jsx('tbody', {
            children: r.lines.map((W, M) => {
              const ee = ce(W.newLineNumber || W.oldLineNumber || 0),
                O = `file-${A}-chunk-${c}-line-${M}`,
                F = g && g.chunkIndex === c && g.lineIndex === M;
              return s.jsxs(
                Yn.Fragment,
                {
                  children: [
                    s.jsx(zg, {
                      line: W,
                      index: M,
                      lineId: O,
                      isCurrentLine: F || !1,
                      hoveredLine: K,
                      selectedLineStyle: ne(W.newLineNumber || W.oldLineNumber),
                      onMouseEnter: () => {
                        const Q = W.newLineNumber || W.oldLineNumber;
                        Q && ie(Q);
                      },
                      onMouseLeave: () => ie(null),
                      onMouseMove: () => {
                        if (N && B) {
                          const Q = W.newLineNumber || W.oldLineNumber;
                          Q && C(Q);
                        }
                      },
                      onCommentButtonMouseDown: (Q) => {
                        Q.stopPropagation();
                        const te = W.newLineNumber || W.oldLineNumber;
                        te && (E(te), C(te), S(!0));
                      },
                      onCommentButtonMouseUp: (Q) => {
                        Q.stopPropagation();
                        const te = W.newLineNumber || W.oldLineNumber;
                        if (!te || !B) {
                          (S(!1), E(null), C(null));
                          return;
                        }
                        const v = w || te;
                        if (B === v) re(te);
                        else {
                          const q = Math.min(B, v),
                            I = Math.max(B, v);
                          re([q, I]);
                        }
                        (S(!1), E(null), C(null));
                      },
                      syntaxTheme: y,
                    }),
                    ee.map((Q) => {
                      const te = P(W);
                      return s.jsx(
                        'tr',
                        {
                          className: 'bg-github-bg-secondary',
                          children: s.jsx('td', {
                            colSpan: 3,
                            className: 'p-0 border-t border-github-border',
                            children: s.jsx('div', {
                              className: `flex ${
                                te === 'left' ? 'justify-start'
                                : te === 'right' ? 'justify-end'
                                : 'justify-center'
                              }`,
                              children: s.jsx('div', {
                                className: `${te === 'full' ? 'w-full' : 'w-1/2'} m-2 mx-4`,
                                children: s.jsx(qs, {
                                  comment: Q,
                                  onGeneratePrompt: p,
                                  onRemoveComment: h,
                                  onUpdateComment: x,
                                }),
                              }),
                            }),
                          }),
                        },
                        Q.id
                      );
                    }),
                    R &&
                      (R === (W.newLineNumber || W.oldLineNumber) ||
                        (Array.isArray(R) && R[1] === (W.newLineNumber || W.oldLineNumber))) &&
                      s.jsx('tr', {
                        className: 'bg-[var(--bg-secondary)]',
                        children: s.jsx('td', {
                          colSpan: 3,
                          className: 'p-0 border-t border-[var(--border-muted)]',
                          children: s.jsx('div', {
                            className: `flex ${
                              P(W) === 'left' ? 'justify-start'
                              : P(W) === 'right' ? 'justify-end'
                              : 'justify-center'
                            }`,
                            children: s.jsx('div', {
                              className: `${P(W) === 'full' ? 'w-full' : 'w-1/2'}`,
                              children: s.jsx(wg, { onSubmit: oe, onCancel: he }),
                            }),
                          }),
                        }),
                      }),
                  ],
                },
                M
              );
            }),
          }),
        }),
      });
}
function Ba() {
  return document.getElementById('root')?.dataset.staticMode === 'true';
}
function Gm({ file: r, mode: c = 'inline', baseCommitish: f, targetCommitish: o }) {
  const p = r.status === 'deleted',
    h = r.status === 'added',
    x = r.status === 'modified' || r.status === 'renamed',
    _ = f || 'HEAD~1',
    y = o || 'HEAD',
    [g, A] = H.useState({}),
    [b, j] = H.useState({}),
    B = async (S, R) => {
      try {
        const V = S.naturalWidth,
          K = S.naturalHeight,
          he = (await (await fetch(S.src)).blob()).size;
        R({ width: V, height: K, size: he });
      } catch (V) {
        console.error('Failed to get image info:', V);
      }
    },
    E = (S) =>
      S ?
        S < 1024 ? `${S} B`
        : S < 1024 * 1024 ? `${(S / 1024).toFixed(1)} KB`
        : `${(S / (1024 * 1024)).toFixed(1)} MB`
      : '',
    w = (S) => (!S.width || !S.height ? '' : `W: ${S.width}px | H: ${S.height}px`),
    C = (S, R, V) => {
      if (Ba()) {
        const K =
            S.split('/')
              .pop()
              ?.replace(/\.[^.]+$/, '') || '',
          ie = S.split('.').pop() || '';
        return `./images/${K}_${V}.${ie}`;
      }
      return `/api/blob/${S}?ref=${R}`;
    },
    N = {
      backgroundImage: `
      linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%),
      linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%)
    `,
      backgroundSize: '20px 20px',
      backgroundPosition: '0 0, 10px 10px',
      backgroundColor: 'white',
    };
  return (
    p ?
      s.jsx('div', {
        className: 'bg-github-bg-primary p-4',
        children: s.jsxs('div', {
          className: 'text-center',
          children: [
            s.jsx('div', {
              className: 'mb-2',
              children: s.jsx('span', {
                className: 'text-github-danger font-medium',
                children: 'Deleted Image',
              }),
            }),
            s.jsxs('div', {
              className:
                'inline-block border border-github-border rounded-md p-4 bg-github-bg-secondary',
              children: [
                s.jsx('div', {
                  className: 'text-github-text-muted mb-2',
                  style: { fontSize: '14px' },
                  children: 'Previous version:',
                }),
                s.jsx('img', {
                  src: C(r.oldPath || r.path, _, 'old'),
                  alt: `Previous version of ${r.oldPath || r.path}`,
                  className: 'max-w-full max-h-96 border border-github-border rounded mx-auto',
                  style: N,
                  onLoad: (S) => B(S.currentTarget, A),
                  onError: (S) => {
                    const R = S.target;
                    ((R.style.display = 'none'), R.nextElementSibling?.classList.remove('hidden'));
                  },
                }),
                s.jsx('div', {
                  className: 'hidden text-github-text-muted text-sm mt-2',
                  children: 'Image could not be loaded',
                }),
                (g.width || g.size) &&
                  s.jsxs('div', {
                    className: 'text-github-text-muted mt-2',
                    style: { fontSize: '14px' },
                    children: [w(g), w(g) && E(g.size) && ' | ', E(g.size)],
                  }),
              ],
            }),
          ],
        }),
      })
    : h ?
      s.jsx('div', {
        className: 'bg-github-bg-primary p-4',
        children: s.jsxs('div', {
          className: 'text-center',
          children: [
            s.jsx('div', {
              className: 'mb-2',
              children: s.jsx('span', {
                className: 'text-github-accent font-medium',
                children: 'Added Image',
              }),
            }),
            s.jsxs('div', {
              className:
                'inline-block border border-github-border rounded-md p-4 bg-github-bg-secondary',
              children: [
                s.jsx('div', {
                  className: 'text-github-text-muted mb-2',
                  style: { fontSize: '14px' },
                  children: 'New file:',
                }),
                s.jsx('img', {
                  src: C(r.path, y, 'new'),
                  alt: `New image ${r.path}`,
                  className: 'max-w-full max-h-96 border border-github-border rounded mx-auto',
                  style: N,
                  onLoad: (S) => B(S.currentTarget, j),
                  onError: (S) => {
                    const R = S.target;
                    ((R.style.display = 'none'), R.nextElementSibling?.classList.remove('hidden'));
                  },
                }),
                s.jsx('div', {
                  className: 'hidden text-github-text-muted text-sm mt-2',
                  children: 'Image could not be loaded',
                }),
                (b.width || b.size) &&
                  s.jsxs('div', {
                    className: 'text-github-text-muted mt-2',
                    style: { fontSize: '14px' },
                    children: [w(b), w(b) && E(b.size) && ' | ', E(b.size)],
                  }),
              ],
            }),
          ],
        }),
      })
    : x ?
      c === 'side-by-side' ?
        s.jsxs('div', {
          className: 'bg-github-bg-primary p-4',
          children: [
            s.jsx('div', {
              className: 'text-center mb-4',
              children: s.jsx('span', {
                className: 'text-github-text-primary font-medium',
                children: 'Modified Image',
              }),
            }),
            s.jsxs('div', {
              className: 'grid grid-cols-2 gap-4',
              children: [
                s.jsx('div', {
                  className: 'text-center',
                  children: s.jsxs('div', {
                    className: 'border border-github-border rounded-md p-4 bg-github-bg-secondary',
                    children: [
                      s.jsx('div', {
                        className: 'text-github-text-muted mb-2',
                        style: { fontSize: '14px' },
                        children: 'Previous version:',
                      }),
                      s.jsx('img', {
                        src: C(r.oldPath || r.path, _, 'old'),
                        alt: `Previous version of ${r.oldPath || r.path}`,
                        className:
                          'max-w-full max-h-96 border border-github-border rounded mx-auto',
                        style: N,
                        onLoad: (S) => B(S.currentTarget, A),
                        onError: (S) => {
                          const R = S.target;
                          ((R.style.display = 'none'),
                            R.nextElementSibling?.classList.remove('hidden'));
                        },
                      }),
                      s.jsx('div', {
                        className: 'hidden text-github-text-muted text-sm mt-2',
                        children: 'Image could not be loaded',
                      }),
                      (g.width || g.size) &&
                        s.jsxs('div', {
                          className: 'text-github-text-muted mt-2',
                          style: { fontSize: '14px' },
                          children: [w(g), w(g) && E(g.size) && ' | ', E(g.size)],
                        }),
                    ],
                  }),
                }),
                s.jsx('div', {
                  className: 'text-center',
                  children: s.jsxs('div', {
                    className: 'border border-github-border rounded-md p-4 bg-github-bg-secondary',
                    children: [
                      s.jsx('div', {
                        className: 'text-github-text-muted mb-2',
                        style: { fontSize: '14px' },
                        children: 'Current version:',
                      }),
                      s.jsx('img', {
                        src: C(r.path, y, 'new'),
                        alt: `Current version of ${r.path}`,
                        className:
                          'max-w-full max-h-96 border border-github-border rounded mx-auto',
                        style: N,
                        onLoad: (S) => B(S.currentTarget, j),
                        onError: (S) => {
                          const R = S.target;
                          ((R.style.display = 'none'),
                            R.nextElementSibling?.classList.remove('hidden'));
                        },
                      }),
                      s.jsx('div', {
                        className: 'hidden text-github-text-muted text-sm mt-2',
                        children: 'Image could not be loaded',
                      }),
                      (b.width || b.size) &&
                        s.jsxs('div', {
                          className: 'text-github-text-muted mt-2',
                          style: { fontSize: '14px' },
                          children: [w(b), w(b) && E(b.size) && ' | ', E(b.size)],
                        }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        })
      : s.jsxs('div', {
          className: 'bg-github-bg-primary p-4',
          children: [
            s.jsx('div', {
              className: 'text-center mb-4',
              children: s.jsx('span', {
                className: 'text-github-text-primary font-medium',
                children: 'Modified Image',
              }),
            }),
            s.jsxs('div', {
              className: 'space-y-6',
              children: [
                s.jsx('div', {
                  className: 'text-center',
                  children: s.jsxs('div', {
                    className:
                      'border border-github-border rounded-md p-4 bg-github-bg-secondary inline-block',
                    children: [
                      s.jsx('div', {
                        className: 'text-github-text-muted mb-2',
                        style: { fontSize: '14px' },
                        children: 'Previous version:',
                      }),
                      s.jsx('img', {
                        src: C(r.oldPath || r.path, _, 'old'),
                        alt: `Previous version of ${r.oldPath || r.path}`,
                        className:
                          'max-w-full max-h-96 border border-github-border rounded mx-auto',
                        style: N,
                        onLoad: (S) => B(S.currentTarget, A),
                        onError: (S) => {
                          const R = S.target;
                          ((R.style.display = 'none'),
                            R.nextElementSibling?.classList.remove('hidden'));
                        },
                      }),
                      s.jsx('div', {
                        className: 'hidden text-github-text-muted text-sm mt-2',
                        children: 'Image could not be loaded',
                      }),
                      (g.width || g.size) &&
                        s.jsxs('div', {
                          className: 'text-github-text-muted mt-2',
                          style: { fontSize: '14px' },
                          children: [w(g), w(g) && E(g.size) && ' | ', E(g.size)],
                        }),
                    ],
                  }),
                }),
                s.jsx('div', {
                  className: 'text-center',
                  children: s.jsxs('div', {
                    className:
                      'border border-github-border rounded-md p-4 bg-github-bg-secondary inline-block',
                    children: [
                      s.jsx('div', {
                        className: 'text-github-text-muted mb-2',
                        style: { fontSize: '14px' },
                        children: 'Current version:',
                      }),
                      s.jsx('img', {
                        src: C(r.path, y, 'new'),
                        alt: `Current version of ${r.path}`,
                        className:
                          'max-w-full max-h-96 border border-github-border rounded mx-auto',
                        style: N,
                        onLoad: (S) => B(S.currentTarget, j),
                        onError: (S) => {
                          const R = S.target;
                          ((R.style.display = 'none'),
                            R.nextElementSibling?.classList.remove('hidden'));
                        },
                      }),
                      s.jsx('div', {
                        className: 'hidden text-github-text-muted text-sm mt-2',
                        children: 'Image could not be loaded',
                      }),
                      (b.width || b.size) &&
                        s.jsxs('div', {
                          className: 'text-github-text-muted mt-2',
                          style: { fontSize: '14px' },
                          children: [w(b), w(b) && E(b.size) && ' | ', E(b.size)],
                        }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        })
    : null
  );
}
function Ym({
  file: r,
  comments: c,
  diffMode: f,
  reviewedFiles: o,
  onToggleReviewed: p,
  onAddComment: h,
  onGeneratePrompt: x,
  onRemoveComment: _,
  onUpdateComment: y,
  syntaxTheme: g,
  baseCommitish: A,
  targetCommitish: b,
  cursor: j = null,
  fileIndex: B = 0,
  commentTrigger: E,
  onCommentTriggerHandled: w,
}) {
  const C = o.has(r.path),
    [N, S] = H.useState(!1);
  Mm(r.path);
  const R = (K) => {
      switch (K) {
        case 'added':
          return s.jsx(mg, { size: 16, className: 'text-github-accent' });
        case 'deleted':
          return s.jsx(vg, { size: 16, className: 'text-github-danger' });
        case 'renamed':
          return s.jsx(yg, { size: 16, className: 'text-github-warning' });
        default:
          return s.jsx(bg, { size: 16, className: 'text-github-text-secondary' });
      }
    },
    V = async (K, ie, re) => {
      try {
        await h(r.path, K, ie, re);
      } catch (he) {
        console.error('Failed to add comment:', he);
      }
    };
  return s.jsxs('div', {
    className: 'bg-github-bg-primary',
    children: [
      s.jsxs('div', {
        className:
          'bg-github-bg-secondary border-t-2 border-t-github-accent border-b border-github-border px-5 py-4 flex items-center justify-between flex-wrap gap-3 sticky top-0 z-10',
        children: [
          s.jsxs('div', {
            className: 'flex items-center gap-2 flex-1 min-w-0',
            children: [
              s.jsx('button', {
                onClick: () => p(r.path),
                className:
                  'text-github-text-muted hover:text-github-text-primary transition-colors cursor-pointer',
                title: C ? 'Expand file' : 'Collapse file',
                children: C ? s.jsx(hg, { size: 16 }) : s.jsx(Bs, { size: 16 }),
              }),
              R(r.status),
              s.jsx('h2', {
                className:
                  'text-sm font-mono text-github-text-primary m-0 overflow-hidden text-ellipsis whitespace-nowrap',
                children: r.path,
              }),
              s.jsx('button', {
                className: `bg-transparent border-none cursor-pointer px-1.5 py-1 rounded text-sm transition-all hover:bg-github-bg-tertiary ${N ? 'text-github-accent' : 'text-github-text-secondary hover:text-github-text-primary'}`,
                onClick: () => {
                  navigator.clipboard
                    .writeText(r.path)
                    .then(() => {
                      (console.log('File path copied to clipboard:', r.path),
                        S(!0),
                        setTimeout(() => S(!1), 2e3));
                    })
                    .catch((K) => {
                      console.error('Failed to copy file path:', K);
                    });
                },
                title: 'Copy file path',
                children: N ? s.jsx(Gn, { size: 14 }) : s.jsx(pg, { size: 14 }),
              }),
              r.oldPath &&
                r.oldPath !== r.path &&
                s.jsxs('span', {
                  className: 'text-xs text-github-text-muted italic',
                  children: ['(renamed from ', r.oldPath, ')'],
                }),
            ],
          }),
          s.jsxs('div', {
            className: 'flex items-center gap-3',
            children: [
              s.jsxs('div', {
                className: 'flex items-center gap-2 text-xs',
                children: [
                  s.jsxs('span', {
                    className: 'font-medium px-1 py-0.5 rounded text-github-accent bg-green-100/10',
                    children: ['+', r.additions],
                  }),
                  s.jsxs('span', {
                    className: 'font-medium px-1 py-0.5 rounded text-github-danger bg-red-100/10',
                    children: ['-', r.deletions],
                  }),
                ],
              }),
              s.jsxs('button', {
                onClick: () => p(r.path),
                className: `flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${o.has(r.path) ? 'bg-github-accent text-white' : 'dark:bg-slate-600 dark:text-white dark:border-slate-500 dark:hover:bg-slate-500 dark:hover:border-slate-400 bg-github-bg-secondary text-github-text-primary border border-github-border hover:bg-github-bg-tertiary hover:border-github-text-muted'}`,
                title: o.has(r.path) ? 'Mark as not reviewed' : 'Mark as reviewed',
                children: [
                  o.has(r.path) ? s.jsx(Gn, { size: 14 }) : s.jsx(dy, { size: 14 }),
                  'Viewed',
                ],
              }),
            ],
          }),
        ],
      }),
      !C &&
        s.jsx('div', {
          className: 'overflow-y-auto',
          children:
            my(r.path) ?
              s.jsx(Gm, { file: r, mode: f, baseCommitish: A, targetCommitish: b })
            : r.chunks.map((K, ie) =>
                s.jsxs(
                  'div',
                  {
                    id: `chunk-${r.path.replace(/[^a-zA-Z0-9]/g, '-')}-${ie}`,
                    className: 'border-b border-github-border',
                    children: [
                      s.jsx('div', {
                        className: 'bg-github-bg-tertiary px-3 py-2 border-b border-github-border',
                        children: s.jsx('code', {
                          className: 'text-github-text-secondary text-xs font-mono',
                          children: K.header,
                        }),
                      }),
                      s.jsx(qm, {
                        chunk: K,
                        chunkIndex: ie,
                        comments: c,
                        onAddComment: V,
                        onGeneratePrompt: x,
                        onRemoveComment: _,
                        onUpdateComment: y,
                        mode: f,
                        syntaxTheme: g,
                        cursor: j,
                        fileIndex: B,
                        commentTrigger: E?.chunkIndex === ie ? E : null,
                        onCommentTriggerHandled: w,
                      }),
                    ],
                  },
                  ie
                )
              ),
        }),
    ],
  });
}
function Zm(r) {
  const c = { name: '', path: '', isDirectory: !0, children: [] };
  r.forEach((o) => {
    const p = o.path.split('/');
    let h = c;
    for (let x = 0; x < p.length; x++) {
      const _ = p[x];
      if (!_) continue;
      const y = x === p.length - 1,
        g = p.slice(0, x + 1).join('/');
      h.children || (h.children = []);
      let A = h.children.find((b) => b.name === _);
      (A ||
        ((A = {
          name: _,
          path: g,
          isDirectory: !y,
          children: y ? void 0 : [],
          file: y ? o : void 0,
        }),
        h.children.push(A)),
        (h = A));
    }
  });
  const f = (o) => {
    if (!o.isDirectory || !o.children) return o;
    if (
      ((o.children = o.children.map(f)),
      o.children.length === 1 && o.children[0]?.isDirectory && o.children[0]?.children)
    ) {
      const p = o.children[0];
      if (p)
        return o.name ?
            { ...o, name: `${o.name}/${p.name}`, path: p.path, children: p.children }
          : o;
    }
    return o;
  };
  return f(c);
}
function Xm({ files: r, onScrollToFile: c, comments: f, reviewedFiles: o, onToggleReviewed: p }) {
  const h = Zm(r),
    x = (N) => {
      if (!N.isDirectory || !N.children) return [];
      const S = [];
      return (
        N.path && S.push(N.path),
        N.children.forEach((R) => {
          S.push(...x(R));
        }),
        S
      );
    },
    [_, y] = H.useState(() => new Set(x(h))),
    [g, A] = H.useState(''),
    b = (N) => f.filter((S) => S.file === N).length,
    j = (N) => {
      if (!g.trim()) return N;
      if (N.isDirectory && N.children) {
        const S = N.children.map((R) => j(R)).filter((R) => R !== null);
        return S.length > 0 ? { ...N, children: S } : null;
      } else if (N.file) return N.file.path.toLowerCase().includes(g.toLowerCase()) ? N : null;
      return null;
    },
    B = j(h) || { ...h, children: [] },
    E = (N) => {
      switch (N) {
        case 'added':
          return s.jsx(mg, { size: 16, className: 'text-github-accent' });
        case 'deleted':
          return s.jsx(vg, { size: 16, className: 'text-github-danger' });
        case 'renamed':
          return s.jsx(yg, { size: 16, className: 'text-github-warning' });
        default:
          return s.jsx(bg, { size: 16, className: 'text-github-text-secondary' });
      }
    },
    w = (N) => {
      y((S) => {
        const R = new Set(S);
        return (R.has(N) ? R.delete(N) : R.add(N), R);
      });
    },
    C = (N, S = 0) => {
      if (N.isDirectory && N.children) {
        const R = _.has(N.path);
        return s.jsxs(
          'div',
          {
            children: [
              N.name &&
                s.jsxs('div', {
                  className:
                    'flex items-center gap-2 px-4 py-2 hover:bg-github-bg-tertiary cursor-pointer',
                  style: { paddingLeft: `${S * 16 + 16}px` },
                  onClick: () => w(N.path),
                  children: [
                    R ? s.jsx(Bs, { size: 16 }) : s.jsx(hg, { size: 16 }),
                    R ?
                      s.jsx(Qb, { size: 16, className: 'text-github-text-secondary' })
                    : s.jsx(Kb, { size: 16, className: 'text-github-text-secondary' }),
                    s.jsx('span', {
                      className:
                        'text-sm text-github-text-primary font-medium flex-1 overflow-hidden text-ellipsis whitespace-nowrap',
                      title: N.name,
                      children: N.name,
                    }),
                  ],
                }),
              (R || !N.name) && N.children.map((V) => C(V, S + 1)),
            ],
          },
          N.path
        );
      } else if (N.file) {
        const R = N.file,
          V = b(R.path),
          K = o.has(R.path);
        return s.jsxs(
          'div',
          {
            className: `flex items-center gap-2 px-4 py-2 hover:bg-github-bg-tertiary cursor-pointer transition-colors ${K ? 'opacity-70' : ''}`,
            style: { paddingLeft: `${S * 16 + 16}px` },
            onClick: () => c(R.path),
            children: [
              s.jsx(Eg, {
                checked: K,
                onChange: () => {
                  p(R.path);
                },
                title: K ? 'Mark as not reviewed' : 'Mark as reviewed',
                className: 'z-10',
              }),
              E(N.file.status),
              s.jsx('span', {
                className: `text-sm text-github-text-primary flex-1 overflow-hidden text-ellipsis whitespace-nowrap ${K ? 'line-through text-github-text-muted' : ''}`,
                title: N.file.path,
                children: N.name,
              }),
              V > 0 &&
                s.jsxs('span', {
                  className:
                    'text-github-warning text-sm font-medium ml-auto flex items-center gap-1',
                  children: [s.jsx(xg, { size: 14 }), V],
                }),
            ],
          },
          R.path
        );
      }
      return null;
    };
  return s.jsxs('div', {
    className: 'h-full flex flex-col',
    children: [
      s.jsxs('div', {
        className: 'px-4 py-3 border-b border-github-border bg-github-bg-tertiary',
        children: [
          s.jsxs('h3', {
            className: 'text-sm font-semibold text-github-text-primary m-0 mb-3',
            children: ['Files changed (', r.length, ')'],
          }),
          s.jsxs('div', {
            className: 'relative',
            children: [
              s.jsx(oy, {
                size: 16,
                className:
                  'absolute left-3 top-1/2 transform -translate-y-1/2 text-github-text-muted',
              }),
              s.jsx('input', {
                type: 'text',
                placeholder: 'Filter files...',
                value: g,
                onChange: (N) => A(N.target.value),
                className:
                  'w-full pl-9 pr-3 py-2 text-sm bg-github-bg-primary border border-github-border rounded-md focus:outline-none focus:border-github-accent text-github-text-primary placeholder-github-text-muted',
              }),
            ],
          }),
        ],
      }),
      s.jsx('div', { className: 'flex-1 overflow-y-auto', children: B.children?.map((N) => C(N)) }),
    ],
  });
}
function Vm({ style: r }) {
  return s.jsx('svg', {
    width: '98',
    height: '96',
    viewBox: '0, 0, 98, 96',
    style: r,
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-label': 'GitHub',
    role: 'img',
    children: s.jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z',
      fill: 'currentColor',
    }),
  });
}
function Qm({ isOpen: r, onClose: c }) {
  const { enableScope: f, disableScope: o } = ur();
  return (
    Me('escape', () => c(), { enabled: r }, [c, r]),
    H.useEffect(
      () => (
        r ? o('navigation') : f('navigation'),
        () => {
          f('navigation');
        }
      ),
      [r, f, o]
    ),
    r ?
      s.jsxs('div', {
        className: 'fixed inset-0 z-50 flex items-center justify-center',
        children: [
          s.jsx('div', { className: 'absolute inset-0 bg-black/50', onClick: c }),
          s.jsxs('div', {
            className:
              'relative bg-github-bg-primary border border-github-border rounded-lg shadow-lg max-w-4xl w-full mx-4 max-h-[80vh] overflow-y-auto',
            children: [
              s.jsxs('div', {
                className:
                  'sticky top-0 bg-github-bg-primary border-b border-github-border px-6 py-4 flex items-center justify-between',
                children: [
                  s.jsx('h2', {
                    className: 'text-lg font-semibold text-github-text-primary',
                    children: 'Keyboard Shortcuts',
                  }),
                  s.jsx('button', {
                    onClick: c,
                    className:
                      'text-github-text-secondary hover:text-github-text-primary transition-colors',
                    'aria-label': 'Close help modal',
                    children: s.jsx(Hs, { size: 20 }),
                  }),
                ],
              }),
              s.jsxs('div', {
                className: 'px-6 py-4 grid grid-cols-1 lg:grid-cols-2 gap-6',
                children: [
                  s.jsxs('section', {
                    children: [
                      s.jsx('h3', {
                        className: 'text-sm font-semibold text-github-text-primary mb-2',
                        children: 'Line Navigation',
                      }),
                      s.jsxs('div', {
                        className: 'space-y-1',
                        children: [
                          s.jsxs('div', {
                            className: 'flex justify-between text-sm',
                            children: [
                              s.jsxs('div', {
                                className: 'flex gap-2',
                                children: [
                                  s.jsx('kbd', {
                                    className:
                                      'px-2 py-1 bg-github-bg-tertiary border border-github-border rounded text-github-text-primary font-mono',
                                    children: 'j',
                                  }),
                                  s.jsx('kbd', {
                                    className:
                                      'px-2 py-1 bg-github-bg-tertiary border border-github-border rounded text-github-text-primary font-mono',
                                    children: '↓',
                                  }),
                                ],
                              }),
                              s.jsx('span', {
                                className: 'text-github-text-secondary',
                                children: 'Next line',
                              }),
                            ],
                          }),
                          s.jsxs('div', {
                            className: 'flex justify-between text-sm',
                            children: [
                              s.jsxs('div', {
                                className: 'flex gap-2',
                                children: [
                                  s.jsx('kbd', {
                                    className:
                                      'px-2 py-1 bg-github-bg-tertiary border border-github-border rounded text-github-text-primary font-mono',
                                    children: 'k',
                                  }),
                                  s.jsx('kbd', {
                                    className:
                                      'px-2 py-1 bg-github-bg-tertiary border border-github-border rounded text-github-text-primary font-mono',
                                    children: '↑',
                                  }),
                                ],
                              }),
                              s.jsx('span', {
                                className: 'text-github-text-secondary',
                                children: 'Previous line',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs('section', {
                    children: [
                      s.jsx('h3', {
                        className: 'text-sm font-semibold text-github-text-primary mb-2',
                        children: 'File Navigation',
                      }),
                      s.jsxs('div', {
                        className: 'space-y-1',
                        children: [
                          s.jsxs('div', {
                            className: 'flex justify-between text-sm',
                            children: [
                              s.jsx('kbd', {
                                className:
                                  'px-2 py-1 bg-github-bg-tertiary border border-github-border rounded text-github-text-primary font-mono',
                                children: ']',
                              }),
                              s.jsx('span', {
                                className: 'text-github-text-secondary',
                                children: 'Next file',
                              }),
                            ],
                          }),
                          s.jsxs('div', {
                            className: 'flex justify-between text-sm',
                            children: [
                              s.jsx('kbd', {
                                className:
                                  'px-2 py-1 bg-github-bg-tertiary border border-github-border rounded text-github-text-primary font-mono',
                                children: '[',
                              }),
                              s.jsx('span', {
                                className: 'text-github-text-secondary',
                                children: 'Previous file',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs('section', {
                    children: [
                      s.jsx('h3', {
                        className: 'text-sm font-semibold text-github-text-primary mb-2',
                        children: 'Chunk Navigation',
                      }),
                      s.jsxs('div', {
                        className: 'space-y-1',
                        children: [
                          s.jsxs('div', {
                            className: 'flex justify-between text-sm',
                            children: [
                              s.jsx('kbd', {
                                className:
                                  'px-2 py-1 bg-github-bg-tertiary border border-github-border rounded text-github-text-primary font-mono',
                                children: 'n',
                              }),
                              s.jsx('span', {
                                className: 'text-github-text-secondary',
                                children: 'Next change chunk (added/deleted lines)',
                              }),
                            ],
                          }),
                          s.jsxs('div', {
                            className: 'flex justify-between text-sm',
                            children: [
                              s.jsx('kbd', {
                                className:
                                  'px-2 py-1 bg-github-bg-tertiary border border-github-border rounded text-github-text-primary font-mono',
                                children: 'p',
                              }),
                              s.jsx('span', {
                                className: 'text-github-text-secondary',
                                children: 'Previous change chunk (added/deleted lines)',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs('section', {
                    children: [
                      s.jsx('h3', {
                        className: 'text-sm font-semibold text-github-text-primary mb-2',
                        children: 'Comment Navigation',
                      }),
                      s.jsxs('div', {
                        className: 'space-y-1',
                        children: [
                          s.jsxs('div', {
                            className: 'flex justify-between text-sm',
                            children: [
                              s.jsx('kbd', {
                                className:
                                  'px-2 py-1 bg-github-bg-tertiary border border-github-border rounded text-github-text-primary font-mono',
                                children: 'N',
                              }),
                              s.jsx('span', {
                                className: 'text-github-text-secondary',
                                children: 'Next comment',
                              }),
                            ],
                          }),
                          s.jsxs('div', {
                            className: 'flex justify-between text-sm',
                            children: [
                              s.jsx('kbd', {
                                className:
                                  'px-2 py-1 bg-github-bg-tertiary border border-github-border rounded text-github-text-primary font-mono',
                                children: 'P',
                              }),
                              s.jsx('span', {
                                className: 'text-github-text-secondary',
                                children: 'Previous comment',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs('section', {
                    children: [
                      s.jsx('h3', {
                        className: 'text-sm font-semibold text-github-text-primary mb-2',
                        children: 'Side Navigation (Side-by-side mode)',
                      }),
                      s.jsxs('div', {
                        className: 'space-y-1',
                        children: [
                          s.jsxs('div', {
                            className: 'flex justify-between text-sm',
                            children: [
                              s.jsxs('div', {
                                className: 'flex gap-2',
                                children: [
                                  s.jsx('kbd', {
                                    className:
                                      'px-2 py-1 bg-github-bg-tertiary border border-github-border rounded text-github-text-primary font-mono',
                                    children: 'h',
                                  }),
                                  s.jsx('kbd', {
                                    className:
                                      'px-2 py-1 bg-github-bg-tertiary border border-github-border rounded text-github-text-primary font-mono',
                                    children: '←',
                                  }),
                                ],
                              }),
                              s.jsx('span', {
                                className: 'text-github-text-secondary',
                                children: 'Focus left side',
                              }),
                            ],
                          }),
                          s.jsxs('div', {
                            className: 'flex justify-between text-sm',
                            children: [
                              s.jsxs('div', {
                                className: 'flex gap-2',
                                children: [
                                  s.jsx('kbd', {
                                    className:
                                      'px-2 py-1 bg-github-bg-tertiary border border-github-border rounded text-github-text-primary font-mono',
                                    children: 'l',
                                  }),
                                  s.jsx('kbd', {
                                    className:
                                      'px-2 py-1 bg-github-bg-tertiary border border-github-border rounded text-github-text-primary font-mono',
                                    children: '→',
                                  }),
                                ],
                              }),
                              s.jsx('span', {
                                className: 'text-github-text-secondary',
                                children: 'Focus right side',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs('section', {
                    children: [
                      s.jsx('h3', {
                        className: 'text-sm font-semibold text-github-text-primary mb-2',
                        children: 'Comment Management',
                      }),
                      s.jsxs('div', {
                        className: 'space-y-1',
                        children: [
                          s.jsxs('div', {
                            className: 'flex justify-between text-sm',
                            children: [
                              s.jsxs('div', {
                                className: 'flex items-center gap-1',
                                children: [
                                  s.jsx('kbd', {
                                    className:
                                      'px-2 py-1 bg-github-bg-tertiary border border-github-border rounded text-github-text-primary font-mono',
                                    children: 'Shift',
                                  }),
                                  s.jsx('span', {
                                    className: 'text-github-text-muted',
                                    children: '+',
                                  }),
                                  s.jsx('kbd', {
                                    className:
                                      'px-2 py-1 bg-github-bg-tertiary border border-github-border rounded text-github-text-primary font-mono',
                                    children: 'L',
                                  }),
                                ],
                              }),
                              s.jsx('span', {
                                className: 'text-github-text-secondary',
                                children: 'View all comments list',
                              }),
                            ],
                          }),
                          s.jsxs('div', {
                            className: 'flex justify-between text-sm',
                            children: [
                              s.jsxs('div', {
                                className: 'flex items-center gap-1',
                                children: [
                                  s.jsx('kbd', {
                                    className:
                                      'px-2 py-1 bg-github-bg-tertiary border border-github-border rounded text-github-text-primary font-mono',
                                    children: 'Shift',
                                  }),
                                  s.jsx('span', {
                                    className: 'text-github-text-muted',
                                    children: '+',
                                  }),
                                  s.jsx('kbd', {
                                    className:
                                      'px-2 py-1 bg-github-bg-tertiary border border-github-border rounded text-github-text-primary font-mono',
                                    children: 'C',
                                  }),
                                ],
                              }),
                              s.jsx('span', {
                                className: 'text-github-text-secondary',
                                children: 'Copy all comments prompt',
                              }),
                            ],
                          }),
                          s.jsxs('div', {
                            className: 'flex justify-between text-sm',
                            children: [
                              s.jsxs('div', {
                                className: 'flex items-center gap-1',
                                children: [
                                  s.jsx('kbd', {
                                    className:
                                      'px-2 py-1 bg-github-bg-tertiary border border-github-border rounded text-github-text-primary font-mono',
                                    children: 'Shift',
                                  }),
                                  s.jsx('span', {
                                    className: 'text-github-text-muted',
                                    children: '+',
                                  }),
                                  s.jsx('kbd', {
                                    className:
                                      'px-2 py-1 bg-github-bg-tertiary border border-github-border rounded text-github-text-primary font-mono',
                                    children: 'D',
                                  }),
                                ],
                              }),
                              s.jsx('span', {
                                className: 'text-github-text-secondary',
                                children: 'Delete all comments',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs('section', {
                    children: [
                      s.jsx('h3', {
                        className: 'text-sm font-semibold text-github-text-primary mb-2',
                        children: 'Actions',
                      }),
                      s.jsxs('div', {
                        className: 'space-y-1',
                        children: [
                          s.jsxs('div', {
                            className: 'flex justify-between text-sm',
                            children: [
                              s.jsx('kbd', {
                                className:
                                  'px-2 py-1 bg-github-bg-tertiary border border-github-border rounded text-github-text-primary font-mono',
                                children: 'r',
                              }),
                              s.jsx('span', {
                                className: 'text-github-text-secondary',
                                children: 'Toggle review state of current file',
                              }),
                            ],
                          }),
                          s.jsxs('div', {
                            className: 'flex justify-between text-sm',
                            children: [
                              s.jsx('kbd', {
                                className:
                                  'px-2 py-1 bg-github-bg-tertiary border border-github-border rounded text-github-text-primary font-mono',
                                children: 'c',
                              }),
                              s.jsx('span', {
                                className: 'text-github-text-secondary',
                                children: 'Add comment at current line',
                              }),
                            ],
                          }),
                          s.jsxs('div', {
                            className: 'flex justify-between text-sm',
                            children: [
                              s.jsx('kbd', {
                                className:
                                  'px-2 py-1 bg-github-bg-tertiary border border-github-border rounded text-github-text-primary font-mono',
                                children: '.',
                              }),
                              s.jsx('span', {
                                className: 'text-github-text-secondary',
                                children: 'Move cursor to center of viewport',
                              }),
                            ],
                          }),
                          s.jsxs('div', {
                            className: 'flex justify-between text-sm',
                            children: [
                              s.jsx('kbd', {
                                className:
                                  'px-2 py-1 bg-github-bg-tertiary border border-github-border rounded text-github-text-primary font-mono',
                                children: '?',
                              }),
                              s.jsx('span', {
                                className: 'text-github-text-secondary',
                                children: 'Show/hide this help',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsx('div', {
                    className: 'pt-4 border-t border-github-border lg:col-span-2',
                    children: s.jsx('p', {
                      className: 'text-xs text-github-text-secondary',
                      children: 'Shortcuts are disabled when typing in input fields.',
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    : null
  );
}
function Fm({ style: r }) {
  return s.jsxs('svg', {
    style: r,
    viewBox: '0 0 720 190',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-label': 'difit',
    role: 'img',
    children: [
      s.jsx('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M440.487 5.90627C432.164 9.01695 427.318 16.2817 427.318 25.649C427.318 35.9474 433.206 43.6458 442.714 45.7819C451.336 47.7188 459.606 44.3893 464.84 36.8737C466.923 33.8843 467.35 32.4073 467.606 27.3105C467.773 23.9957 467.492 20.0154 466.983 18.4654C465.699 14.5629 460.869 9.13088 456.854 7.07513C452.57 4.88086 444.73 4.32102 440.487 5.90627ZM596.658 6.653C588.927 9.55794 584.572 15.4908 583.887 24.0465C583.17 33.0212 586.83 39.8868 594.382 43.7278C603.739 48.4877 615.574 44.5081 620.482 34.9515C625.35 25.4728 622.15 13.4916 613.37 8.32678C608.986 5.74808 601.154 4.96365 596.658 6.653ZM368.585 7.68006C367.464 8.80629 367.302 12.903 367.302 40.2286V71.4878L363.832 68.1329C353.432 58.0787 335.595 52.668 319.246 54.6082C310.542 55.641 299.81 59.1369 293.3 63.0607C278.56 71.9427 266.453 89.5576 263.139 106.945C261.765 114.155 261.602 129.431 262.825 136.365C265.723 152.796 274.795 168.36 286.716 177.355C298.275 186.077 310.237 190 325.274 190C340.687 190 353.943 185.273 362.869 176.594L367.302 172.284V178.215C367.302 186.902 366.946 186.724 384.303 186.709C392.243 186.702 399.29 186.347 399.964 185.919C401.04 185.236 401.189 174.47 401.189 97.1224C401.189 23.7236 401.003 8.87842 400.068 7.74809C398.433 5.77021 370.547 5.71037 368.585 7.68006ZM526.937 7.94153C519.783 10.0325 515.359 12.5834 510.029 17.6867C501.959 25.4129 498.766 34.4597 498.766 49.5975V58.8517H490.659C484.378 58.8517 482.263 59.1418 481.268 60.1394C480.214 61.1976 479.986 63.6558 479.986 73.91C479.986 82.5264 480.289 86.6977 480.966 87.3764C481.601 88.0141 484.903 88.36 490.356 88.36H498.766V136.692C498.766 183.638 498.811 185.048 500.345 185.873C502.433 186.994 529.394 186.994 531.482 185.873C533.016 185.048 533.061 183.638 533.061 136.692V88.36H549.334C563.038 88.36 565.809 88.1568 566.89 87.0723C568.782 85.1723 568.782 62.0394 566.89 60.1394C565.808 59.0541 563.029 58.8517 549.231 58.8517H532.856L533.216 51.9721C533.604 44.5499 534.721 41.9147 538.546 39.3958C540.377 38.1901 543.049 37.904 554.661 37.6737C562.626 37.5155 569.018 37.0343 569.602 36.5483C570.892 35.4761 571.046 10.3579 569.777 7.9776C568.978 6.47923 567.918 6.39562 550.384 6.45054C535.269 6.49808 530.93 6.77431 526.937 7.94153ZM654.931 26.4834C653.136 27.7662 653.094 28.1572 653.094 43.3245V58.8517H644.567C633.342 58.8517 633.497 58.6443 633.497 73.6059C633.497 88.5674 633.342 88.36 644.567 88.36H653.094V122.636C653.094 159.998 653.439 163.935 657.362 171.354C661.848 179.838 669.111 184.99 680.857 188.022C687.996 189.866 707.647 189.269 714.309 187.007C719.756 185.158 719.86 184.87 719.969 171.298C720.082 157.364 720.441 157.791 709.174 158.48C695.386 159.324 689.341 156.938 687.388 149.883C686.927 148.214 686.58 134.435 686.577 117.663L686.572 88.36H702.068H717.564L718.87 86.3592C719.946 84.7108 720.129 82.3461 719.91 72.9575C719.719 64.8279 719.321 61.1689 718.522 60.2041C717.553 59.0345 715.315 58.8517 701.987 58.8517H686.572L686.546 43.8926C686.526 31.8556 686.28 28.613 685.288 27.2941C684.156 25.7884 682.945 25.6351 670.412 25.4129C658.94 25.2088 656.476 25.3793 654.931 26.4834ZM431.459 60.1394C430.316 61.2877 430.178 68.0001 430.188 121.82C430.197 168.838 430.429 182.667 431.232 184.262L432.264 186.311L446.657 186.535C458.941 186.725 461.242 186.567 462.353 185.452C463.521 184.279 463.655 177.845 463.655 122.786C463.655 68.0985 463.515 61.2877 462.372 60.1394C460.469 58.2287 433.362 58.2287 431.459 60.1394ZM587.799 60.4369C587.238 61.4894 586.954 82.56 586.954 123.084C586.954 177.502 587.093 184.285 588.236 185.434C590.138 187.342 616.431 187.342 618.333 185.434C619.476 184.285 619.615 177.447 619.615 122.482C619.615 75.6149 619.38 60.5828 618.636 59.8353C617.947 59.1443 613.344 58.8517 603.15 58.8517C589.644 58.8517 588.586 58.9607 587.799 60.4369ZM347.956 87.3469C362.023 93.9543 369.138 107.306 367.775 124.535C366.623 139.097 359.678 149.866 347.83 155.463C337.073 160.544 325.541 160.523 315.049 155.403C293.381 144.83 288.765 112.315 306.417 94.5961C313.92 87.0641 322.021 84.1412 334.301 84.5354C341.49 84.7666 343.224 85.124 347.956 87.3469Z',
        fill: 'currentColor',
      }),
      s.jsx('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M9.42299 0.744751C4.61699 2.15275 2.03999 5.66375 0.956994 12.2768C-0.369006 20.3728 -0.294006 170.791 1.03899 176.572C2.29699 182.031 4.81699 185.308 9.65399 187.774C13.265 189.615 16.865 189.684 108.63 189.684C163.129 189.684 204.095 189.304 204.41 188.795C206 188.5 206 188.795 207.5 188C211.167 187.079 216.779 180.138 218.005 175.584C218.682 173.068 218.939 143.952 218.756 90.4718C218.487 11.7478 218.417 9.10275 216.535 6.62675C215.466 5.22075 213.441 3.19575 212.035 2.12675C209.546 0.23575 206.839 0.17975 110.978 0.0167504C55.373 -0.0782496 11.148 0.239751 9.42299 0.744751ZM203.778 14.8838C205.558 16.6638 205.509 172.577 203.728 175.005C202.577 176.574 198.865 176.688 156.978 176.446L111.478 176.184L111.226 138.684L110.974 101.184H84.059C69.255 101.184 56.808 101.52 56.397 101.931C55.986 102.343 60.674 107.82 66.814 114.104C72.954 120.388 77.978 126.202 77.978 127.026C77.978 129.577 74.769 134.267 71.896 135.916C69.609 137.229 68.75 137.278 66.704 136.217C63.533 134.572 28.705 99.1448 27.757 96.5998C27.36 95.5348 27.491 93.4308 28.049 91.9238C28.955 89.4768 68.498 49.6838 70.024 49.6838C70.366 49.6838 72.356 51.1627 74.447 52.9697C77.589 55.6867 78.118 56.6658 77.498 58.6198C77.086 59.9198 72.075 65.8308 66.363 71.7568C60.651 77.6818 55.978 83.0148 55.978 83.6068C55.978 84.3488 64.068 84.6838 81.952 84.6838H107.927H110.666C111.144 82.5 110.978 73.4537 110.978 46.2337V13.6838H156.778C191.067 13.6838 202.88 13.9858 203.778 14.8838ZM148.803 52.7217C146.51 54.0597 144.845 59.5997 145.74 62.9107C146.146 64.4107 150.657 69.9308 155.764 75.1788C161.411 80.9788 164.547 84.8988 163.764 85.1788C163.057 85.4318 151.549 85.7608 138.19 85.9108C117.896 86.1388 113.747 86.4308 112.956 87.6838C112.435 88.5088 112.002 91.7228 111.993 94.8268C111.982 99.0598 112.373 100.622 113.56 101.077C114.43 101.411 126.13 101.684 139.56 101.684C156.121 101.684 163.978 102.026 163.978 102.746C163.978 103.33 160.187 107.607 155.554 112.251C146.244 121.582 144.276 125.371 146.069 130.514C147.321 134.107 149.576 135.684 153.463 135.684C155.522 135.684 159.843 131.902 173.778 117.904C191.699 99.9008 194.978 96.0678 194.978 93.1208C194.978 91.1338 157.422 53.8238 154.163 52.5728C151.322 51.4818 150.908 51.4937 148.803 52.7217Z',
        fill: 'currentColor',
      }),
    ],
  });
}
function Km({ shouldReload: r, isReloading: c, onReload: f, changeType: o, className: p = '' }) {
  if (Ba() || !r) return null;
  const h = () => {
    switch (o) {
      case 'commit':
        return 'New commits available';
      case 'staging':
        return 'Staging changes detected';
      case 'file':
        return 'File changes detected';
      default:
        return 'Changes detected';
    }
  };
  return s.jsxs('button', {
    onClick: f,
    disabled: c,
    className: `
        flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md border ${p}
        ${c ? 'bg-github-text-primary text-github-bg-primary border-github-text-primary cursor-not-allowed' : 'bg-github-text-primary text-github-bg-primary border-github-text-primary'}
      `,
    title: `${h()} - Click to refresh`,
    children: [s.jsx(uy, { size: 12, className: `${c ? 'animate-spin' : ''}` }), 'Refresh'],
  });
}
const $m = {
    fontSize: 14,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif',
    theme: 'dark',
    syntaxTheme: 'vsDark',
  },
  Jm = [
    {
      name: 'System Font',
      value:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif',
    },
    { name: 'Menlo', value: 'Menlo, Monaco, "Courier New", monospace' },
    { name: 'SF Mono', value: 'SF Mono, Consolas, "Liberation Mono", monospace' },
    { name: 'Fira Code', value: '"Fira Code", "Courier New", monospace' },
    { name: 'JetBrains Mono', value: '"JetBrains Mono", "Courier New", monospace' },
  ];
function Im({ isOpen: r, onClose: c, settings: f, onSettingsChange: o }) {
  const [p, h] = H.useState(f),
    { enableScope: x, disableScope: _ } = ur();
  (H.useEffect(() => {
    h(f);
  }, [f]),
    H.useEffect(() => {
      o(p);
    }, [p, o]),
    H.useEffect(
      () => (
        r ? _('navigation') : x('navigation'),
        () => {
          x('navigation');
        }
      ),
      [r, x, _]
    ));
  const y = () =>
      p.theme === 'auto' ?
        window.matchMedia('(prefers-color-scheme: dark)').matches ?
          'dark'
        : 'light'
      : p.theme,
    g = () => (y() === 'light' ? Pd : eg),
    A = (j) => {
      const B = { ...p, theme: j },
        w =
          (
            (j === 'auto' ?
              window.matchMedia('(prefers-color-scheme: dark)').matches ?
                'dark'
              : 'light'
            : j) === 'light'
          ) ?
            Pd
          : eg;
      if (!w.some((N) => N.id === p.syntaxTheme) && w.length > 0) {
        const N = w[0];
        N && (B.syntaxTheme = N.id);
      }
      h(B);
    },
    b = () => {
      h($m);
    };
  return r ?
      s.jsx('div', {
        className: 'fixed inset-0 flex items-center justify-center z-50 pointer-events-none',
        children: s.jsxs('div', {
          className:
            'bg-github-bg-secondary border border-github-border rounded-lg w-full max-w-md mx-4 pointer-events-auto',
          children: [
            s.jsxs('div', {
              className: 'flex items-center justify-between p-4 border-b border-github-border',
              children: [
                s.jsxs('h2', {
                  className:
                    'text-lg font-semibold text-github-text-primary flex items-center gap-2',
                  children: [s.jsx(Sg, { size: 20 }), 'Appearance Settings'],
                }),
                s.jsx('button', {
                  onClick: c,
                  className: 'text-github-text-secondary hover:text-github-text-primary p-1',
                  children: s.jsx(Hs, { size: 18 }),
                }),
              ],
            }),
            s.jsxs('div', {
              className: 'p-4 space-y-6',
              children: [
                s.jsxs('div', {
                  children: [
                    s.jsx('label', {
                      className: 'block text-sm font-medium text-github-text-primary mb-2',
                      children: 'Font Size',
                    }),
                    s.jsxs('div', {
                      className: 'flex items-center gap-3',
                      children: [
                        s.jsx('input', {
                          type: 'range',
                          min: '10',
                          max: '20',
                          step: '1',
                          value: p.fontSize,
                          onChange: (j) => h({ ...p, fontSize: parseInt(j.target.value) }),
                          className: 'flex-1 accent-github-accent',
                        }),
                        s.jsxs('span', {
                          className: 'text-sm text-github-text-secondary w-8 text-right',
                          children: [p.fontSize, 'px'],
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs('div', {
                  children: [
                    s.jsx('label', {
                      className: 'block text-sm font-medium text-github-text-primary mb-2',
                      children: 'Font Family',
                    }),
                    s.jsx('select', {
                      value: p.fontFamily,
                      onChange: (j) => h({ ...p, fontFamily: j.target.value }),
                      className:
                        'w-full p-2 bg-github-bg-tertiary border border-github-border rounded text-github-text-primary text-sm',
                      children: Jm.map((j) =>
                        s.jsx('option', { value: j.value, children: j.name }, j.value)
                      ),
                    }),
                  ],
                }),
                s.jsxs('div', {
                  children: [
                    s.jsx('label', {
                      className: 'block text-sm font-medium text-github-text-primary mb-2',
                      children: 'Theme',
                    }),
                    s.jsx('div', {
                      className: 'flex gap-2',
                      children: ['light', 'dark', 'auto'].map((j) =>
                        s.jsx(
                          'button',
                          {
                            onClick: () => A(j),
                            className: `px-3 py-2 text-sm rounded border transition-colors ${p.theme === j ? 'bg-github-accent text-white border-github-accent' : 'bg-github-bg-tertiary text-github-text-secondary border-github-border hover:text-github-text-primary'}`,
                            children: j.charAt(0).toUpperCase() + j.slice(1),
                          },
                          j
                        )
                      ),
                    }),
                  ],
                }),
                s.jsxs('div', {
                  children: [
                    s.jsx('label', {
                      className: 'block text-sm font-medium text-github-text-primary mb-2',
                      children: 'Syntax Highlighting Theme',
                    }),
                    s.jsx('select', {
                      value: p.syntaxTheme,
                      onChange: (j) => h({ ...p, syntaxTheme: j.target.value }),
                      className:
                        'w-full p-2 bg-github-bg-tertiary border border-github-border rounded text-github-text-primary text-sm',
                      children: g().map((j) =>
                        s.jsx('option', { value: j.id, children: j.label }, j.id)
                      ),
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs('div', {
              className: 'flex items-center justify-between p-4 border-t border-github-border',
              children: [
                s.jsx('button', {
                  onClick: b,
                  className:
                    'px-3 py-2 text-sm text-github-text-secondary hover:text-github-text-primary',
                  children: 'Reset to Default',
                }),
                s.jsx('button', {
                  onClick: c,
                  className:
                    'px-4 py-2 text-sm bg-github-accent text-white rounded hover:bg-green-600',
                  children: 'Close',
                }),
              ],
            }),
          ],
        }),
      })
    : null;
}
const tg = {
    position: 'absolute',
    fontSize: '16px',
    pointerEvents: 'none',
    zIndex: 100,
    transform: 'translateY(20px) scale(0.5)',
    opacity: 0,
  },
  Wm = ({ isActive: r }) =>
    r ?
      s.jsxs(s.Fragment, {
        children: [
          s.jsx('div', {
            className: 'animate-sparkle-rise',
            style: { ...tg, left: '-12px', animationDelay: '0s' },
            children: '✨',
          }),
          s.jsx('div', {
            className: 'animate-sparkle-rise',
            style: { ...tg, right: '-12px', animationDelay: '0.3s' },
            children: '✨',
          }),
        ],
      })
    : null,
  lg = {
    fontSize: 14,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif',
    theme: 'dark',
    syntaxTheme: 'vsDark',
  },
  ag = 'reviewit-appearance-settings';
function Pm() {
  const [r, c] = H.useState(lg);
  (H.useEffect(() => {
    try {
      const p = localStorage.getItem(ag);
      if (p) {
        const h = JSON.parse(p);
        c({ ...lg, ...h });
      }
    } catch (p) {
      console.warn('Failed to load appearance settings from localStorage:', p);
    }
  }, []),
    H.useEffect(() => {
      const p = document.documentElement;
      if (
        (p.style.setProperty('--app-font-size', `${r.fontSize}px`),
        p.style.setProperty('--app-font-family', r.fontFamily),
        r.theme === 'auto')
      ) {
        const h = window.matchMedia('(prefers-color-scheme: dark)');
        f(h.matches ? 'dark' : 'light');
        const x = (_) => {
          f(_.matches ? 'dark' : 'light');
        };
        return (h.addEventListener('change', x), () => h.removeEventListener('change', x));
      } else {
        f(r.theme);
        return;
      }
    }, [r]));
  const f = (p) => {
    const h = document.documentElement;
    (h.setAttribute('data-theme', p),
      p === 'light' ?
        (h.style.setProperty('--color-github-bg-primary', '#ffffff'),
        h.style.setProperty('--color-github-bg-secondary', '#f6f8fa'),
        h.style.setProperty('--color-github-bg-tertiary', '#f1f3f4'),
        h.style.setProperty('--color-github-border', '#d1d9e0'),
        h.style.setProperty('--color-github-text-primary', '#24292f'),
        h.style.setProperty('--color-github-text-secondary', '#656d76'),
        h.style.setProperty('--color-github-text-muted', '#8c959f'),
        h.style.setProperty('--color-github-accent', '#1f883d'),
        h.style.setProperty('--color-github-danger', '#cf222e'),
        h.style.setProperty('--color-github-warning', '#bf8700'),
        h.style.setProperty('--color-diff-addition-bg', '#d1f4cd'),
        h.style.setProperty('--color-diff-addition-border', '#1f883d'),
        h.style.setProperty('--color-diff-deletion-bg', '#ffd8d3'),
        h.style.setProperty('--color-diff-deletion-border', '#cf222e'),
        h.style.setProperty('--color-diff-neutral-bg', '#f1f3f4'),
        h.style.setProperty('--color-comment-bg', '#fff8e1'),
        h.style.setProperty('--color-comment-border', '#ffd54f'),
        h.style.setProperty('--color-comment-text', '#5d4037'),
        h.style.setProperty('--color-yellow-btn-bg', '#fef3c7'),
        h.style.setProperty('--color-yellow-btn-border', '#f59e0b'),
        h.style.setProperty('--color-yellow-btn-text', '#92400e'),
        h.style.setProperty('--color-yellow-btn-hover-bg', '#fde68a'),
        h.style.setProperty('--color-yellow-btn-hover-border', '#d97706'),
        h.style.setProperty('--color-yellow-path-bg', '#fde68a'),
        h.style.setProperty('--color-yellow-path-text', '#92400e'))
      : (h.style.setProperty('--color-github-bg-primary', '#0d1117'),
        h.style.setProperty('--color-github-bg-secondary', '#161b22'),
        h.style.setProperty('--color-github-bg-tertiary', '#21262d'),
        h.style.setProperty('--color-github-border', '#30363d'),
        h.style.setProperty('--color-github-text-primary', '#f0f6fc'),
        h.style.setProperty('--color-github-text-secondary', '#8b949e'),
        h.style.setProperty('--color-github-text-muted', '#6e7681'),
        h.style.setProperty('--color-github-accent', '#238636'),
        h.style.setProperty('--color-github-danger', '#da3633'),
        h.style.setProperty('--color-github-warning', '#d29922'),
        h.style.setProperty('--color-diff-addition-bg', '#0d4429'),
        h.style.setProperty('--color-diff-addition-border', '#1b7c3d'),
        h.style.setProperty('--color-diff-deletion-bg', '#67060c'),
        h.style.setProperty('--color-diff-deletion-border', '#da3633'),
        h.style.setProperty('--color-diff-neutral-bg', '#21262d'),
        h.style.setProperty('--color-comment-bg', '#1c2128'),
        h.style.setProperty('--color-comment-border', '#373e47'),
        h.style.setProperty('--color-comment-text', '#e6edf3'),
        h.style.setProperty('--color-yellow-btn-bg', 'rgba(180, 83, 9, 0.2)'),
        h.style.setProperty('--color-yellow-btn-border', 'rgba(217, 119, 6, 0.5)'),
        h.style.setProperty('--color-yellow-btn-text', '#fbbf24'),
        h.style.setProperty('--color-yellow-btn-hover-bg', 'rgba(180, 83, 9, 0.3)'),
        h.style.setProperty('--color-yellow-btn-hover-border', '#d97706'),
        h.style.setProperty('--color-yellow-path-bg', 'rgba(180, 83, 9, 0.3)'),
        h.style.setProperty('--color-yellow-path-text', '#fbbf24')),
      (document.body.style.backgroundColor = 'var(--color-github-bg-primary)'),
      (document.body.style.color = 'var(--color-github-text-primary)'));
  };
  return {
    settings: r,
    updateSettings: (p) => {
      c(p);
      try {
        localStorage.setItem(ag, JSON.stringify(p));
      } catch (h) {
        console.warn('Failed to save appearance settings to localStorage:', h);
      }
    },
  };
}
var Mg = ((r) => (
  (r.DEFAULT = 'default'),
  (r.WORKING = 'working'),
  (r.STAGED = 'staged'),
  (r.DOT = 'dot'),
  (r.SPECIFIC = 'specific'),
  r
))(Mg || {});
function e0(r) {
  const c = H.useRef(null),
    f = H.useRef(null),
    o = H.useRef(0),
    p = 5,
    h = 3e3,
    [x, _] = H.useState({
      isWatchEnabled: !1,
      diffMode: Mg.DEFAULT,
      shouldReload: !1,
      isReloading: !1,
      lastChangeTime: null,
      lastChangeType: null,
      connectionStatus: 'disconnected',
    }),
    [y, g] = H.useState(null),
    A = H.useCallback(() => {
      if (!Ba() && !c.current)
        try {
          const B = new EventSource('/api/watch');
          ((c.current = B),
            (B.onopen = () => {
              (console.log('Connected to file watch service'),
                _((E) => ({ ...E, connectionStatus: 'connected' })),
                (o.current = 0),
                g(null));
            }),
            (B.onmessage = (E) => {
              try {
                const w = JSON.parse(E.data);
                switch (w.type) {
                  case 'connected':
                    _((C) => ({
                      ...C,
                      isWatchEnabled: !0,
                      diffMode: w.diffMode,
                      connectionStatus: 'connected',
                    }));
                    break;
                  case 'reload':
                    (console.log('File changes detected, showing reload button:', w.changeType),
                      _((C) => ({
                        ...C,
                        shouldReload: !0,
                        lastChangeTime: new Date(),
                        lastChangeType: w.changeType,
                      })));
                    break;
                  case 'error':
                    (console.error('File watch error:', w.message),
                      g(w.message || 'File watch error occurred'));
                    break;
                }
              } catch (w) {
                console.error('Error parsing watch event:', w);
              }
            }),
            (B.onerror = () => {
              (console.log('File watch connection lost'),
                _((E) => ({ ...E, connectionStatus: 'disconnected' })),
                c.current && (c.current.close(), (c.current = null)),
                o.current < p ?
                  (_((E) => ({ ...E, connectionStatus: 'reconnecting' })),
                  (o.current += 1),
                  (f.current = setTimeout(() => {
                    (console.log(
                      `Attempting to reconnect to file watch service (${o.current}/${p})...`
                    ),
                      A());
                  }, h)))
                : (console.error('Max reconnection attempts reached'),
                  g('Lost connection to file watch service')));
            }));
        } catch (B) {
          (console.error('Failed to connect to file watch service:', B),
            g('Failed to connect to file watch service'));
        }
    }, [p, h]),
    b = H.useCallback(async () => {
      if (!x.isReloading) {
        _((B) => ({ ...B, isReloading: !0 }));
        try {
          (r && (await r()),
            _((B) => ({
              ...B,
              shouldReload: !1,
              isReloading: !1,
              lastChangeTime: null,
              lastChangeType: null,
            })));
        } catch (B) {
          (console.error('Reload failed:', B),
            g('Failed to reload diff data'),
            _((E) => ({ ...E, isReloading: !1 })));
        }
      }
    }, [r, x.isReloading]),
    j = () => {
      (c.current && (c.current.close(), (c.current = null)),
        f.current && (clearTimeout(f.current), (f.current = null)));
    };
  return (
    H.useEffect(() => (A(), j), [A]),
    H.useEffect(() => j, []),
    {
      shouldReload: x.shouldReload,
      isConnected: x.connectionStatus === 'connected',
      error: y,
      reload: b,
      watchState: x,
    }
  );
}
const zs = { SCROLL_CONTAINER: 'main.overflow-y-auto' };
function Ua(r, c) {
  const f = `file-${r.fileIndex}-chunk-${r.chunkIndex}-line-${r.lineIndex}`;
  return c === 'side-by-side' ? `${f}-${r.side}` : f;
}
function Lg(r, c) {
  return `${r}:${c}`;
}
function t0(r, c) {
  const f = c[r.fileIndex]?.chunks[r.chunkIndex]?.lines[r.lineIndex];
  return f && (f.type === 'add' || f.type === 'delete' || f.type === 'normal') ? f.type : null;
}
function Nt(r, c) {
  const f = t0(r, c);
  return (
    f ?
      f === 'normal' ? !0
      : f === 'delete' ? r.side === 'left'
      : f === 'add' ? r.side === 'right'
      : !1
    : !1
  );
}
function Ug(r, c) {
  return Nt(r, c) ? r : { ...r, side: r.side === 'left' ? 'right' : 'left' };
}
const ng = { VIEWPORT_OFFSET_RATIO: 1 / 3 };
function l0(r, c, f, o) {
  return {
    line: (p) => {
      const h = r[p.fileIndex];
      return !h || o?.has(h.path) ? !1 : f === 'inline' || Nt(p, r);
    },
    chunk: (p) => {
      const h = r[p.fileIndex];
      if (!h || o?.has(h.path)) return !1;
      const x = h.chunks[p.chunkIndex]?.lines[p.lineIndex];
      if (!x || x.type === 'normal') return !1;
      if (p.lineIndex === 0) return !0;
      const _ = h.chunks[p.chunkIndex]?.lines[p.lineIndex - 1];
      return !_ || _.type === 'normal';
    },
    comment: (p) => {
      const h = r[p.fileIndex];
      if (!h || o?.has(h.path)) return !1;
      const x = h.chunks[p.chunkIndex]?.lines[p.lineIndex];
      if (!x || x.type === 'delete') return !1;
      const _ = x.newLineNumber;
      if (!_) return !1;
      const y = Lg(h.path, _);
      return c.has(y);
    },
    file: (p) => p.chunkIndex === 0 && p.lineIndex === 0,
  };
}
function a0() {
  return (r) => {
    const c = document.getElementById(r);
    if (!c) return;
    const f = document.querySelector(zs.SCROLL_CONTAINER);
    if (!f) throw new Error(`Scrollable container (${zs.SCROLL_CONTAINER}) not found`);
    const o = c.getBoundingClientRect(),
      p = f.getBoundingClientRect(),
      h = f.clientHeight,
      x = f.scrollTop,
      _ = Math.max(p.top, 0),
      y = Math.min(p.bottom, window.innerHeight);
    if (!(o.top >= _ && o.bottom <= y)) {
      const w = n0(c, f) - h * ng.VIEWPORT_OFFSET_RATIO;
      f.scrollTop = Math.max(0, w);
      return;
    }
    const A = o.bottom > Math.min(p.bottom, window.innerHeight),
      j = c.offsetTop - f.offsetTop - h * ng.VIEWPORT_OFFSET_RATIO,
      B = j > x;
    A && B && (f.scrollTop = Math.max(0, j));
  };
}
function n0(r, c) {
  let f = r,
    o = 0;
  for (; f && f !== c && f.offsetParent; ) ((o += f.offsetTop), (f = f.offsetParent));
  return (f && f !== c && (o += f.offsetTop), o);
}
function i0(r) {
  return r || { fileIndex: 0, chunkIndex: 0, lineIndex: -1, side: 'right' };
}
function r0(r, c, f) {
  return (
    f && r.fileIndex === c.fileIndex && r.chunkIndex === c.chunkIndex && r.lineIndex === c.lineIndex
  );
}
function u0(r, c, f) {
  let { fileIndex: o, chunkIndex: p, lineIndex: h } = r;
  const x = f.length;
  let _ = 0;
  if (c === 'next')
    for (h++; _ < x; ) {
      if (f[o]?.chunks[p]?.lines[h]) return { ...r, fileIndex: o, chunkIndex: p, lineIndex: h };
      (p++, (h = 0), f[o]?.chunks[p] || (o++, (p = 0), (h = 0), o >= x && ((o = 0), _++)));
    }
  else
    for (h--; _ < x; ) {
      if (h < 0)
        if ((p--, p < 0)) {
          (o--, o < 0 && ((o = x - 1), _++));
          const y = f[o];
          if (y && y.chunks.length > 0) {
            p = y.chunks.length - 1;
            const g = y.chunks[p];
            h = g && g.lines.length > 0 ? g.lines.length - 1 : -1;
          } else ((p = -1), (h = -1));
        } else {
          const y = f[o]?.chunks[p];
          h = y && y.lines.length > 0 ? y.lines.length - 1 : -1;
        }
      if (h >= 0 && f[o]?.chunks[p]?.lines[h])
        return { ...r, fileIndex: o, chunkIndex: p, lineIndex: h };
      h < 0 || h--;
    }
  return null;
}
function s0(r, c, f, o, p) {
  let h = r,
    x = !1;
  for (; h; ) {
    const _ = u0(h, c, o);
    if (!_ || ((h = _), r0(h, r, x))) break;
    if (((x = !0), f(h, o))) {
      const y = Ug(h, o);
      return { position: y, scrollTarget: Ua(y, p) };
    }
  }
  return { position: null, scrollTarget: null };
}
function o0({
  files: r,
  comments: c,
  viewMode: f = 'inline',
  reviewedFiles: o,
  onToggleReviewed: p,
  onCreateComment: h,
  onCopyAllComments: x,
  onDeleteAllComments: _,
  onShowCommentsList: y,
}) {
  const [g, A] = H.useState(null),
    [b, j] = H.useState(!1),
    B = H.useMemo(() => a0(), []),
    E = H.useMemo(() => {
      const ce = new Map();
      return (
        c.forEach((P) => {
          const ne = Array.isArray(P.line) ? P.line[0] : P.line,
            W = Lg(P.file, ne);
          (ce.has(W) || ce.set(W, []), ce.get(W)?.push(P));
        }),
        ce
      );
    }, [c]),
    w = H.useMemo(() => l0(r, E, f, o), [r, E, f, o]),
    C = H.useCallback(
      (ce, P) => {
        if (r.length === 0) return { position: null, scrollTarget: null };
        const ne = i0(g);
        return s0(ne, ce, P, r, f);
      },
      [g, r, f]
    ),
    N = H.useCallback(
      (ce) => (P) => {
        const ne = C(P, ce);
        ne.position && (A(ne.position), ne.scrollTarget && B(ne.scrollTarget));
      },
      [C, B]
    ),
    S = H.useMemo(() => N(w.line), [N, w.line]),
    R = H.useMemo(() => N(w.chunk), [N, w.chunk]),
    V = H.useMemo(() => N(w.file), [N, w.file]),
    K = H.useMemo(() => N(w.comment), [N, w.comment]),
    ie = H.useCallback(
      (ce) => {
        if (!g || f !== 'side-by-side') return;
        let P = { ...g, side: ce };
        const ne = r[g.fileIndex]?.chunks[g.chunkIndex]?.lines[g.lineIndex];
        if (ne) {
          if (ce === 'left' && ne.type === 'add' && g.lineIndex > 0) {
            if (r[g.fileIndex]?.chunks[g.chunkIndex]?.lines[g.lineIndex - 1]?.type === 'delete') {
              ((P = { ...P, lineIndex: g.lineIndex - 1 }), A(P), B(Ua(P, f)));
              return;
            }
          } else if (
            ce === 'right' &&
            ne.type === 'delete' &&
            r[g.fileIndex]?.chunks[g.chunkIndex]?.lines[g.lineIndex + 1]?.type === 'add'
          ) {
            ((P = { ...P, lineIndex: g.lineIndex + 1 }), A(P), B(Ua(P, f)));
            return;
          }
        }
        if (!Nt(P, r)) {
          const W = r[g.fileIndex];
          if (!W) return;
          const M = W.chunks[g.chunkIndex];
          if (M) {
            for (let ee = g.lineIndex + 1; ee < M.lines.length; ee++) {
              const O = { ...P, lineIndex: ee };
              if (Nt(O, r)) {
                P = O;
                break;
              }
            }
            if (!Nt(P, r))
              for (let ee = g.lineIndex - 1; ee >= 0; ee--) {
                const O = { ...P, lineIndex: ee };
                if (Nt(O, r)) {
                  P = O;
                  break;
                }
              }
          }
          if (!Nt(P, r)) {
            for (let ee = g.chunkIndex + 1; ee < W.chunks.length; ee++) {
              const O = W.chunks[ee];
              if (O) {
                for (let F = 0; F < O.lines.length; F++) {
                  const Q = { ...P, chunkIndex: ee, lineIndex: F };
                  if (Nt(Q, r)) {
                    P = Q;
                    break;
                  }
                }
                if (Nt(P, r)) break;
              }
            }
            if (!Nt(P, r))
              for (let ee = g.chunkIndex - 1; ee >= 0; ee--) {
                const O = W.chunks[ee];
                if (O) {
                  for (let F = O.lines.length - 1; F >= 0; F--) {
                    const Q = { ...P, chunkIndex: ee, lineIndex: F };
                    if (Nt(Q, r)) {
                      P = Q;
                      break;
                    }
                  }
                  if (Nt(P, r)) break;
                }
              }
          }
        }
        (A(P), B(Ua(P, f)));
      },
      [g, f, B, r]
    ),
    re = H.useCallback(() => {
      const ce = document.querySelector(zs.SCROLL_CONTAINER);
      if (!ce) return;
      const P = ce.getBoundingClientRect(),
        ne = P.top + P.height / 2;
      let W = 1 / 0,
        M = null;
      (r.forEach((ee, O) => {
        ee.chunks.forEach((F, Q) => {
          F.lines.forEach((te, v) => {
            const q = f === 'side-by-side' ? ['left', 'right'] : ['right'];
            for (const I of q) {
              const $ = { fileIndex: O, chunkIndex: Q, lineIndex: v, side: I };
              if (f === 'side-by-side' && !Nt($, r)) continue;
              const le = Ua($, f),
                ue = document.getElementById(le);
              if (ue) {
                const J = ue.getBoundingClientRect(),
                  ye = J.top + J.height / 2,
                  pe = Math.abs(ye - ne);
                J.top < P.bottom && J.bottom > P.top && pe < W && ((W = pe), (M = $));
              }
            }
          });
        });
      }),
        M && A(M));
    }, [r, f, A]),
    he = H.useCallback(
      (ce) => {
        const P = Ug(ce, r);
        (A(P), B(Ua(P, f)));
      },
      [r, f, B]
    ),
    oe = { scopes: 'navigation', enableOnFormTags: !1, preventDefault: !0 };
  return (
    Me('j, down', () => S('next'), oe, [S]),
    Me('k, up', () => S('prev'), oe, [S]),
    Me('n', () => R('next'), oe, [R]),
    Me('p', () => R('prev'), oe, [R]),
    Me('shift+n', () => K('next'), oe, [K]),
    Me('shift+p', () => K('prev'), oe, [K]),
    Me(']', () => V('next'), { ...oe, useKey: !0 }, [V]),
    Me('[', () => V('prev'), { ...oe, useKey: !0 }, [V]),
    Me('h, left', () => ie('left'), { ...oe, enabled: f === 'side-by-side' }, [ie, f]),
    Me('l, right', () => ie('right'), { ...oe, enabled: f === 'side-by-side' }, [ie, f]),
    Me(
      'r',
      () => {
        if (g) {
          const ce = r[g.fileIndex];
          ce && p(ce.path);
        }
      },
      oe,
      [g, r, p]
    ),
    Me(
      'c',
      () => {
        if (g && h) {
          const ce = r[g.fileIndex]?.chunks[g.chunkIndex]?.lines[g.lineIndex];
          ce && ce.type !== 'delete' && h();
        }
      },
      oe,
      [g, r, h]
    ),
    Me('?', () => j(!b), { ...oe, useKey: !0 }, [b]),
    Me('.', () => re(), { ...oe, useKey: !0 }, [re]),
    Me(
      'shift+c',
      () => {
        x && x();
      },
      { ...oe, scopes: ['navigation', 'comments-list'] },
      [x]
    ),
    Me(
      'shift+d',
      () => {
        _ && _();
      },
      { ...oe, scopes: ['navigation', 'comments-list'] },
      [_]
    ),
    Me(
      'shift+l',
      () => {
        y && y();
      },
      oe,
      [y]
    ),
    { cursor: g, isHelpOpen: b, setIsHelpOpen: j, setCursorPosition: he }
  );
}
function c0(r) {
  const [c, f] = H.useState([]),
    o = r ? `difit-comments-${r}` : 'difit-comments';
  (H.useEffect(() => {
    const A = localStorage.getItem(o);
    if (A)
      try {
        f(JSON.parse(A));
      } catch (b) {
        console.error('Failed to parse saved comments:', b);
      }
  }, [o]),
    H.useEffect(() => {
      localStorage.setItem(o, JSON.stringify(c));
    }, [c, o]));
  const p = (A, b, j, B) => {
      console.log('Adding comment with codeContent:', B);
      const E = {
        id: `${A}:${Array.isArray(b) ? `${b[0]}-${b[1]}` : b}:${Date.now()}`,
        file: A,
        line: b,
        body: j,
        timestamp: new Date().toISOString(),
        codeContent: B,
      };
      return (f((w) => [...w, E]), E);
    },
    h = (A) => {
      f((b) => b.filter((j) => j.id !== A));
    },
    x = (A, b) => {
      f((j) => j.map((B) => (B.id === A ? { ...B, body: b } : B)));
    },
    _ = () => {
      (f([]), localStorage.removeItem(o));
    },
    y = (A) =>
      Array.isArray(A.line) ?
        `${A.file}:L${A.line[0]}-L${A.line[1]}
${A.body}`
      : `${A.file}:L${A.line}
${A.body}`;
  return {
    comments: c,
    addComment: p,
    removeComment: h,
    updateComment: x,
    clearAllComments: _,
    generatePrompt: y,
    generateAllCommentsPrompt: () =>
      c.length === 0 ?
        'No comments available.'
      : c.map(y).join(`
=====
`),
  };
}
const Os = new Map();
let f0 = 0;
function Rs(r) {
  return (Os.has(r) || Os.set(r, `file-${++f0}`), Os.get(r) ?? '');
}
function d0(r, c, f) {
  for (let o = 0; o < r.chunks.length; o++) {
    const p = r.chunks[o];
    if (p)
      for (let h = 0; h < p.lines.length; h++) {
        const x = p.lines[h];
        if (!x) continue;
        if ((x.newLineNumber || x.oldLineNumber) === f)
          return {
            fileIndex: c,
            chunkIndex: o,
            lineIndex: h,
            side: x.newLineNumber ? 'right' : 'left',
          };
      }
  }
  return null;
}
function g0(r, c) {
  const f = c.findIndex((h) => h.path === r.file);
  if (f === -1) return null;
  const o = c[f];
  if (!o) return null;
  const p = Array.isArray(r.line) ? r.line[1] : r.line;
  return d0(o, f, p);
}
function h0() {
  const [r, c] = H.useState(null),
    [f, o] = H.useState(new Set()),
    [p, h] = H.useState('side-by-side'),
    [x, _] = H.useState(!0),
    [y, g] = H.useState(!0),
    [A, b] = H.useState(null),
    [j, B] = H.useState(!1),
    [E, w] = H.useState(320),
    [C, N] = H.useState(!1),
    [S, R] = H.useState(!0),
    [V, K] = H.useState(!1),
    [ie, re] = H.useState(!1),
    [he, oe] = H.useState(!1),
    [ce, P] = H.useState(!1),
    { settings: ne, updateSettings: W } = Pm(),
    {
      comments: M,
      addComment: ee,
      removeComment: O,
      updateComment: F,
      clearAllComments: Q,
      generatePrompt: te,
      generateAllCommentsPrompt: v,
    } = c0(r?.commit),
    q = (me) => {
      o((Se) => {
        const ze = new Set(Se);
        return (
          ze.has(me) ?
            ze.delete(me)
          : (ze.add(me),
            setTimeout(() => {
              const Ol = document.getElementById(Rs(me));
              Ol && Ol.scrollIntoView({ behavior: 'instant', block: 'start' });
            }, 100)),
          ze
        );
      });
    },
    [I, $] = H.useState(null),
    {
      shouldReload: le,
      reload: ue,
      watchState: J,
    } = e0(async () => {
      await kl();
    }),
    {
      cursor: ye,
      isHelpOpen: pe,
      setIsHelpOpen: nt,
      setCursorPosition: Ha,
    } = o0({
      files: r?.files || [],
      comments: M,
      viewMode: p,
      reviewedFiles: f,
      onToggleReviewed: q,
      onCreateComment: () => {
        ye && $({ fileIndex: ye.fileIndex, chunkIndex: ye.chunkIndex, lineIndex: ye.lineIndex });
      },
      onCopyAllComments: () => {
        M.length > 0 && Zn();
      },
      onDeleteAllComments: () => {
        M.length > 0 && confirm('Delete all comments?') && Q();
      },
      onShowCommentsList: () => {
        P(!0);
      },
    }),
    Jl = (me) => {
      (me.preventDefault(), K(!0));
      const Se = me.clientX,
        ze = E,
        Ve = (Xn) => {
          const fr = Math.max(200, Math.min(600, ze + (Xn.clientX - Se)));
          w(fr);
        },
        Ol = () => {
          (K(!1),
            document.removeEventListener('mousemove', Ve),
            document.removeEventListener('mouseup', Ol));
        };
      (document.addEventListener('mousemove', Ve), document.addEventListener('mouseup', Ol));
    },
    qa = (me) => {
      const Se = [
          'pnpm-lock.yaml',
          'package-lock.json',
          'yarn.lock',
          'Cargo.lock',
          'Gemfile.lock',
          'composer.lock',
          'Pipfile.lock',
          'poetry.lock',
          'go.sum',
          'mix.lock',
        ],
        ze = me.split('/').pop() || '';
      return Se.includes(ze);
    },
    kl = H.useCallback(async () => {
      const me = async () => {
        const Se = await fetch('./diff-data.json');
        if (!Se.ok) throw new Error('Failed to fetch static diff data');
        const ze = await Se.json();
        return (ze.mode && h(ze.mode), x ? ze.ignoreWhitespace : ze.showWhitespace);
      };
      try {
        let Se;
        if (Ba()) Se = await me();
        else {
          const Ve = await fetch(`/api/diff?ignoreWhitespace=${x}`);
          if (!Ve.ok) throw new Error('Failed to fetch diff data');
          ((Se = await Ve.json()), Se.mode && h(Se.mode));
        }
        c(Se);
        const ze = Se.files.filter((Ve) => qa(Ve.path)).map((Ve) => Ve.path);
        ze.length > 0 && o((Ve) => new Set([...Ve, ...ze]));
      } catch (Se) {
        b(Se instanceof Error ? Se.message : 'Unknown error');
      } finally {
        g(!1);
      }
    }, [x]);
  H.useEffect(() => {
    kl();
  }, [kl]);
  const Il = H.useRef(!1);
  (H.useEffect(() => {
    r?.clearComments &&
      !Il.current &&
      ((Il.current = !0),
      Q(),
      console.log('✅ All existing comments cleared as requested via --clean flag'));
  }, [r?.clearComments, Q]),
    H.useEffect(() => {
      r &&
        (f.size < r.files.length ?
          oe(!1)
        : f.size === r.files.length &&
          !he &&
          (re(!0),
          oe(!0),
          setTimeout(() => {
            re(!1);
          }, 1e3)));
    }, [f.size, r, he]),
    H.useEffect(() => {
      if (Ba()) return;
      if (M.length > 0) {
        const Se = JSON.stringify({ comments: M });
        fetch('/api/comments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: Se,
        }).catch((ze) => {
          console.error('Failed to sync comments:', ze);
        });
      }
      const me = () => {
        if (M.length > 0) {
          const Se = JSON.stringify({ comments: M });
          navigator.sendBeacon('/api/comments', Se);
        }
      };
      return (
        window.addEventListener('beforeunload', me),
        () => {
          window.removeEventListener('beforeunload', me);
        }
      );
    }, [M]),
    H.useEffect(() => {
      if (Ba()) return;
      const me = new EventSource('/api/heartbeat');
      return (
        (me.onopen = () => {
          console.log('Connected to server heartbeat');
        }),
        (me.onerror = () => {
          (console.log('Server connection lost'), me.close());
        }),
        () => {
          me.close();
        }
      );
    }, []));
  const cr = (me, Se, ze, Ve) => (ee(me, Se, ze, Ve), Promise.resolve()),
    Zn = async () => {
      try {
        const me = v();
        (await navigator.clipboard.writeText(me), B(!0), setTimeout(() => B(!1), 2e3));
      } catch (me) {
        console.error('Failed to copy all comments prompt:', me);
      }
    },
    wt = (me) => {
      if (!r) return;
      const Se = g0(me, r.files);
      Se && Ha(Se);
    };
  return (
    y ?
      s.jsx('div', {
        className: 'flex items-center justify-center h-screen bg-github-bg-primary',
        children: s.jsx('div', {
          className: 'text-github-text-secondary text-base',
          children: 'Loading diff...',
        }),
      })
    : A ?
      s.jsxs('div', {
        className:
          'flex flex-col items-center justify-center h-screen bg-github-bg-primary text-center gap-2',
        children: [
          s.jsx('h2', { className: 'text-github-danger text-2xl mb-2', children: 'Error' }),
          s.jsx('p', { className: 'text-github-text-secondary text-base', children: A }),
        ],
      })
    : r ?
      s.jsx(Ny, {
        children: s.jsxs('div', {
          className: 'h-screen flex flex-col',
          children: [
            s.jsxs('header', {
              className: 'bg-github-bg-secondary border-b border-github-border flex items-center',
              children: [
                s.jsxs('div', {
                  className: `px-4 py-3 flex items-center justify-between gap-4 ${V ? '' : '!transition-all !duration-300 !ease-in-out'}`,
                  style: {
                    width: S ? `${E}px` : 'auto',
                    minWidth: S ? '200px' : 'auto',
                    maxWidth: S ? '600px' : 'auto',
                  },
                  children: [
                    s.jsx('h1', {
                      children: s.jsx(Fm, {
                        style: { height: '18px', color: 'var(--color-github-text-secondary)' },
                      }),
                    }),
                    s.jsxs('div', {
                      className: 'flex items-center gap-1',
                      children: [
                        s.jsx('button', {
                          onClick: () => R(!S),
                          className:
                            'p-2 text-github-text-secondary hover:text-github-text-primary hover:bg-github-bg-tertiary rounded transition-colors',
                          title: S ? 'Collapse file tree' : 'Expand file tree',
                          'aria-expanded': S,
                          'aria-controls': 'file-tree-panel',
                          'aria-label': 'Toggle file tree panel',
                          children: S ? s.jsx(ty, { size: 18 }) : s.jsx(ay, { size: 18 }),
                        }),
                        s.jsx('button', {
                          onClick: () => N(!0),
                          className:
                            'p-2 text-github-text-secondary hover:text-github-text-primary hover:bg-github-bg-tertiary rounded transition-colors',
                          title: 'Appearance Settings',
                          children: s.jsx(Sg, { size: 18 }),
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsx('div', {
                  className: `border-r border-github-border ${V ? '' : '!transition-all !duration-300 !ease-in-out'}`,
                  style: {
                    width: S ? '4px' : '0px',
                    height: 'calc(100% - 16px)',
                    margin: '8px 0',
                    transform: 'translateX(-2px)',
                  },
                }),
                s.jsxs('div', {
                  className: 'flex-1 px-4 py-3 flex items-center justify-between gap-4',
                  children: [
                    s.jsxs('div', {
                      className: 'flex items-center gap-3',
                      children: [
                        s.jsxs('div', {
                          className:
                            'flex bg-github-bg-tertiary border border-github-border rounded-md p-1',
                          children: [
                            s.jsxs('button', {
                              onClick: () => h('side-by-side'),
                              className: `px-3 py-1.5 text-xs font-medium rounded transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${p === 'side-by-side' ? 'bg-github-bg-primary text-github-text-primary shadow-sm' : 'text-github-text-secondary hover:text-github-text-primary'}`,
                              children: [s.jsx(Ub, { size: 14 }), 'Side by Side'],
                            }),
                            s.jsxs('button', {
                              onClick: () => h('inline'),
                              className: `px-3 py-1.5 text-xs font-medium rounded transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${p === 'inline' ? 'bg-github-bg-primary text-github-text-primary shadow-sm' : 'text-github-text-secondary hover:text-github-text-primary'}`,
                              children: [s.jsx(Rb, { size: 14 }), 'Inline'],
                            }),
                          ],
                        }),
                        s.jsx(Eg, {
                          checked: x,
                          onChange: _,
                          label: 'Ignore Whitespace',
                          title: x ? 'Show whitespace changes' : 'Ignore whitespace changes',
                        }),
                        s.jsx(Km, {
                          shouldReload: le,
                          isReloading: J.isReloading,
                          onReload: ue,
                          changeType: J.lastChangeType,
                        }),
                      ],
                    }),
                    s.jsxs('div', {
                      className: 'flex items-center gap-4 text-sm text-github-text-secondary',
                      children: [
                        M.length > 0 &&
                          s.jsx(hy, {
                            commentsCount: M.length,
                            isCopiedAll: j,
                            onCopyAll: Zn,
                            onDeleteAll: Q,
                            onViewAll: () => P(!0),
                          }),
                        s.jsxs('div', {
                          className: 'flex flex-col gap-1 items-center',
                          children: [
                            s.jsxs('div', {
                              className: 'text-xs relative',
                              children: [
                                f.size === r.files.length ?
                                  'All diffs difit-ed!'
                                : `${f.size} / ${r.files.length} files viewed`,
                                s.jsx(Wm, { isActive: ie }),
                              ],
                            }),
                            s.jsx('div', {
                              className:
                                'relative h-2 bg-github-bg-tertiary rounded-full overflow-hidden',
                              style: {
                                width: '90px',
                                border: '1px solid var(--color-github-border)',
                              },
                              children: s.jsx('div', {
                                className:
                                  'absolute top-0 right-0 h-full transition-all duration-300 ease-out',
                                style: {
                                  width: `${((r.files.length - f.size) / r.files.length) * 100}%`,
                                  backgroundColor: (() => {
                                    const me = ((r.files.length - f.size) / r.files.length) * 100;
                                    return (
                                      me > 50 ? 'var(--color-github-accent)'
                                      : me > 20 ? 'var(--color-github-warning)'
                                      : 'var(--color-github-danger)'
                                    );
                                  })(),
                                },
                              }),
                            }),
                          ],
                        }),
                        s.jsxs('span', {
                          children: [
                            'Reviewing:',
                            ' ',
                            s.jsx('code', {
                              className:
                                'bg-github-bg-tertiary px-1.5 py-0.5 rounded text-xs text-github-text-primary',
                              children:
                                r.commit.includes('...') ?
                                  s.jsxs(s.Fragment, {
                                    children: [
                                      s.jsxs('span', {
                                        className: 'text-github-text-secondary font-medium',
                                        children: [r.commit.split('...')[0], '...'],
                                      }),
                                      s.jsx('span', {
                                        className: 'font-medium',
                                        children: r.commit.split('...')[1],
                                      }),
                                    ],
                                  })
                                : r.commit,
                            }),
                          ],
                        }),
                        s.jsxs('span', {
                          children: [
                            r.files.length,
                            ' file',
                            r.files.length !== 1 ? 's' : '',
                            ' changed',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs('div', {
              className: 'flex flex-1 overflow-hidden',
              children: [
                s.jsx('div', {
                  className: `relative overflow-hidden ${V ? '' : '!transition-all !duration-300 !ease-in-out'}`,
                  style: { width: S ? `${E}px` : '0px' },
                  children: s.jsxs('aside', {
                    id: 'file-tree-panel',
                    className:
                      'bg-github-bg-secondary border-r border-github-border overflow-y-auto flex flex-col',
                    style: {
                      width: `${E}px`,
                      minWidth: '200px',
                      maxWidth: '600px',
                      height: '100%',
                    },
                    children: [
                      s.jsx('div', {
                        className: 'flex-1 overflow-y-auto',
                        children: s.jsx(Xm, {
                          files: r.files,
                          onScrollToFile: (me) => {
                            const Se = document.getElementById(Rs(me));
                            Se && Se.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          },
                          comments: M,
                          reviewedFiles: f,
                          onToggleReviewed: q,
                        }),
                      }),
                      s.jsxs('div', {
                        className:
                          'p-4 border-t border-github-border flex justify-between items-center',
                        children: [
                          s.jsxs('button', {
                            onClick: () => nt(!0),
                            className:
                              'flex items-center gap-1.5 text-github-text-secondary hover:text-github-text-primary transition-colors',
                            title: 'Keyboard shortcuts (Shift+?)',
                            children: [
                              s.jsx(Jb, { size: 16 }),
                              s.jsx('span', { className: 'text-sm', children: 'Shortcuts' }),
                            ],
                          }),
                          s.jsxs('a', {
                            href: 'https://github.com/yoshiko-pg/difit',
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            className:
                              'flex items-center gap-2 text-github-text-secondary hover:text-github-text-primary transition-colors',
                            title: 'View on GitHub',
                            children: [
                              s.jsx('span', { className: 'text-sm', children: 'Star on GitHub' }),
                              s.jsx(Vm, { style: { height: '18px', width: '18px' } }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                s.jsx('div', {
                  className: `bg-github-border hover:bg-github-text-muted cursor-col-resize ${V ? '' : '!transition-all !duration-300 !ease-in-out'}`,
                  style: { width: S ? '4px' : '0px' },
                  onMouseDown: Jl,
                  title: 'Drag to resize file list',
                }),
                s.jsx('main', {
                  className: 'flex-1 overflow-y-auto',
                  children: r.files.map((me, Se) =>
                    s.jsx(
                      'div',
                      {
                        id: Rs(me.path),
                        className: 'mb-6',
                        children: s.jsx(Ym, {
                          file: me,
                          comments: M.filter((ze) => ze.file === me.path),
                          diffMode: p,
                          reviewedFiles: f,
                          onToggleReviewed: q,
                          onAddComment: cr,
                          onGeneratePrompt: te,
                          onRemoveComment: O,
                          onUpdateComment: F,
                          syntaxTheme: ne.syntaxTheme,
                          baseCommitish: r.baseCommitish,
                          targetCommitish: r.targetCommitish,
                          cursor: ye?.fileIndex === Se ? ye : null,
                          fileIndex: Se,
                          commentTrigger: I?.fileIndex === Se ? I : null,
                          onCommentTriggerHandled: () => $(null),
                        }),
                      },
                      me.path
                    )
                  ),
                }),
              ],
            }),
            s.jsx(Im, { isOpen: C, onClose: () => N(!1), settings: ne, onSettingsChange: W }),
            s.jsx(Qm, { isOpen: pe, onClose: () => nt(!1) }),
            s.jsx(py, {
              isOpen: ce,
              onClose: () => P(!1),
              onNavigate: wt,
              comments: M,
              onRemoveComment: O,
              onGeneratePrompt: te,
              onUpdateComment: F,
            }),
          ],
        }),
      })
    : s.jsxs('div', {
        className:
          'flex flex-col items-center justify-center h-screen bg-github-bg-primary text-center gap-2',
        children: [
          s.jsx('h2', { className: 'text-github-danger text-2xl mb-2', children: 'No data' }),
          s.jsx('p', {
            className: 'text-github-text-secondary text-base',
            children: 'No diff data available',
          }),
        ],
      })
  );
}
const Bg = document.getElementById('root');
if (!Bg) throw new Error('Root element not found');
db.createRoot(Bg).render(
  s.jsx(Yn.StrictMode, {
    children: s.jsx(Nb, { initiallyActiveScopes: ['navigation'], children: s.jsx(h0, {}) }),
  })
);
export { ig as g };
