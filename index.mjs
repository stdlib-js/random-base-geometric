// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-probability@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.1.1-esm/index.mjs";import{factory as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@v0.1.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.1.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.1.1-esm/index.mjs";function g(e,t){var s=e();return 0===s&&(s=e()),j(f(s)/f(1-t))}function u(){var j,f,u,c;if(0===arguments.length)f=l();else if(1===arguments.length&&n(arguments[0]))if(o(j=arguments[0],"prng")){if(!i(j.prng))throw new TypeError(h("0oN6u,JI","prng",j.prng));f=j.prng}else f=l(j);else{if(!r(c=arguments[0]))throw new TypeError(h("0oN6y,NS",c));if(arguments.length>1){if(!n(j=arguments[1]))throw new TypeError(h("0oN2V,FD",j));if(o(j,"prng")){if(!i(j.prng))throw new TypeError(h("0oN6u,JI","prng",j.prng));f=j.prng}else f=l(j)}else f=l()}return e(u=void 0===c?J:E,"NAME","geometric"),j&&j.prng?(e(u,"seed",null),e(u,"seedLength",null),s(u,"state",d(null),m),e(u,"stateLength",null),e(u,"byteLength",null),e(u,"toJSON",d(null)),e(u,"PRNG",f)):(t(u,"seed",v),t(u,"seedLength",b),s(u,"state",N,w),t(u,"stateLength",y),t(u,"byteLength",x),e(u,"toJSON",L),e(u,"PRNG",f),f=f.normalized),u;function v(){return f.seed}function b(){return f.seedLength}function y(){return f.stateLength}function x(){return f.byteLength}function N(){return f.state}function w(e){f.state=e}function L(){var e={type:"PRNG"};return e.name=u.NAME,e.state=a(f.state),e.params=void 0===c?[]:[c],e}function E(){return g(f,c)}function J(e){return p(e)||e<0||e>1?NaN:g(f,e)}}var c=u();e(c,"factory",u);export{c as default,u as factory};
//# sourceMappingURL=index.mjs.map