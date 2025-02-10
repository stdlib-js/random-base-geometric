// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.2-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-probability@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.2.2-esm/index.mjs";import{factory as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@v0.3.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.3-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.4-esm/index.mjs";function u(e,t){var s=e();return 0===s&&(s=e()),j(f(s)/f(1-t))}function g(){var j,f,g,c;if(0===arguments.length)f=l();else if(1===arguments.length&&n(arguments[0]))if(o(j=arguments[0],"prng")){if(!i(j.prng))throw new TypeError(h("0oN6u","prng",j.prng));f=j.prng}else f=l(j);else{if(!r(c=arguments[0]))throw new TypeError(h("0oN6y",c));if(arguments.length>1){if(!n(j=arguments[1]))throw new TypeError(h("0oN2V",j));if(o(j,"prng")){if(!i(j.prng))throw new TypeError(h("0oN6u","prng",j.prng));f=j.prng}else f=l(j)}else f=l()}return e(g=void 0===c?function(e){if(p(e)||e<0||e>1)return NaN;return u(f,e)}:function(){return u(f,c)},"NAME","geometric"),j&&j.prng?(e(g,"seed",null),e(g,"seedLength",null),s(g,"state",d(null),m),e(g,"stateLength",null),e(g,"byteLength",null),e(g,"toJSON",d(null)),e(g,"PRNG",f)):(t(g,"seed",(function(){return f.seed})),t(g,"seedLength",(function(){return f.seedLength})),s(g,"state",(function(){return f.state}),(function(e){f.state=e})),t(g,"stateLength",(function(){return f.stateLength})),t(g,"byteLength",(function(){return f.byteLength})),e(g,"toJSON",(function(){var e={type:"PRNG"};e.name=g.NAME,e.state=a(f.state),e.params=void 0===c?[]:[c];return e})),e(g,"PRNG",f),f=f.normalized),g}var c=g();e(c,"factory",g);export{c as default,g as factory};
//# sourceMappingURL=index.mjs.map
