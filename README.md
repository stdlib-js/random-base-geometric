<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Geometric Random Numbers

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Geometric][geometric] distributed pseudorandom numbers.

<section class="installation">

## Installation

```bash
npm install @stdlib/random-base-geometric
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var geometric = require( '@stdlib/random-base-geometric' );
```

#### geometric( p )

Returns a pseudorandom number drawn from a [geometric][geometric] distribution with success probability `p`.

```javascript
var r = geometric( 0.8 );
// returns <number>
```

If `p < 0` or `p > 1`, the function returns `NaN`.

```javascript
var r = geometric( 3.14 );
// returns NaN

r = geometric( -0.5 );
// returns NaN
```

If `p` is `NaN`, the function returns `NaN`.

```javascript
var r = geometric( NaN );
// returns NaN
```

#### geometric.factory( \[p, ]\[options] )

Returns a pseudorandom number generator (PRNG) for generating pseudorandom numbers drawn from a [geometric][geometric] distribution.

```javascript
var rand = geometric.factory();

var r = rand( 0.3 );
// returns <number>
```

If provided `p`, the returned generator returns random variates from the specified distribution.

```javascript
var rand = geometric.factory( 0.6 );

var r = rand();
// returns <number>

r = rand();
// returns <number>
```

If not provided `p`, the returned generator requires that `p` be provided at each invocation.

```javascript
var rand = geometric.factory();

var r = rand( 0.67 );
// returns <number>

r = rand( 0.42 );
// returns <number>
```

The function accepts the following `options`:

-   **prng**: pseudorandom number generator for generating uniformly distributed pseudorandom numbers on the interval `[0,1)`. If provided, the function **ignores** both the `state` and `seed` options. In order to seed the returned pseudorandom number generator, one must seed the provided `prng` (assuming the provided `prng` is seedable).
-   **seed**: pseudorandom number generator seed.
-   **state**: a [`Uint32Array`][@stdlib/array/uint32] containing pseudorandom number generator state. If provided, the function ignores the `seed` option.
-   **copy**: `boolean` indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators. Setting this option to `true` ensures that a returned generator has exclusive control over its internal state. Default: `true`.

To use a custom PRNG as the underlying source of uniformly distributed pseudorandom numbers, set the `prng` option.

```javascript
var minstd = require( '@stdlib/random-base-minstd' );

var rand = geometric.factory({
    'prng': minstd.normalized
});

var r = rand( 0.9 );
// returns <number>
```

To seed a pseudorandom number generator, set the `seed` option.

```javascript
var rand1 = geometric.factory({
    'seed': 12345
});

var r1 = rand1( 0.9 );
// returns <number>

var rand2 = geometric.factory( 0.9, {
    'seed': 12345
});

var r2 = rand2();
// returns <number>

var bool = ( r1 === r2 );
// returns true
```

To return a generator having a specific initial state, set the generator `state` option.

```javascript
var rand;
var bool;
var r;
var i;

// Generate pseudorandom numbers, thus progressing the generator state:
for ( i = 0; i < 1000; i++ ) {
    r = geometric( 0.3 );
}

// Create a new PRNG initialized to the current state of `geometric`:
rand = geometric.factory({
    'state': geometric.state
});

// Test that the generated pseudorandom numbers are the same:
bool = ( rand( 0.3 ) === geometric( 0.3 ) );
// returns true
```

#### geometric.NAME

The generator name.

```javascript
var str = geometric.NAME;
// returns 'geometric'
```

#### geometric.PRNG

The underlying pseudorandom number generator.

```javascript
var prng = geometric.PRNG;
// returns <Function>
```

#### geometric.seed

The value used to seed `geometric()`.

```javascript
var rand;
var r;
var i;

// Generate pseudorandom values...
for ( i = 0; i < 100; i++ ) {
    r = geometric( 0.5 );
}

// Generate the same pseudorandom values...
rand = geometric.factory( 0.5, {
    'seed': geometric.seed
});
for ( i = 0; i < 100; i++ ) {
    r = rand();
}
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = geometric.factory({
    'prng': Math.random
});

var seed = rand.seed;
// returns null
```

#### geometric.seedLength

Length of generator seed.

```javascript
var len = geometric.seedLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = geometric.factory({
    'prng': Math.random
});

var len = rand.seedLength;
// returns null
```

#### geometric.state

Writable property for getting and setting the generator state.

```javascript
var r = geometric( 0.3 );
// returns <number>

r = geometric( 0.3 );
// returns <number>

// ...

// Get a copy of the current state:
var state = geometric.state;
// returns <Uint32Array>

r = geometric( 0.3 );
// returns <number>

r = geometric( 0.3 );
// returns <number>

// Reset the state:
geometric.state = state;

// Replay the last two pseudorandom numbers:
r = geometric( 0.3 );
// returns <number>

r = geometric( 0.3 );
// returns <number>

// ...
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = geometric.factory({
    'prng': Math.random
});

var state = rand.state;
// returns null
```

#### geometric.stateLength

Length of generator state.

```javascript
var len = geometric.stateLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = geometric.factory({
    'prng': Math.random
});

var len = rand.stateLength;
// returns null
```

#### geometric.byteLength

Size (in bytes) of generator state.

```javascript
var sz = geometric.byteLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = geometric.factory({
    'prng': Math.random
});

var sz = rand.byteLength;
// returns null
```

#### geometric.toJSON()

Serializes the pseudorandom number generator as a JSON object.

```javascript
var o = geometric.toJSON();
// returns { 'type': 'PRNG', 'name': '...', 'state': {...}, 'params': [] }
```

If provided a PRNG for uniformly distributed numbers, this method returns `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = geometric.factory({
    'prng': Math.random
});

var o = rand.toJSON();
// returns null
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If PRNG state is "shared" (meaning a state array was provided during PRNG creation and **not** copied) and one sets the generator state to a state array having a different length, the PRNG does **not** update the existing shared state and, instead, points to the newly provided state array. In order to synchronize PRNG output according to the new shared state array, the state array for **each** relevant PRNG must be **explicitly** set.
-   If PRNG state is "shared" and one sets the generator state to a state array of the same length, the PRNG state is updated (along with the state of all other PRNGs sharing the PRNG's state array).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var geometric = require( '@stdlib/random-base-geometric' );

var seed;
var rand;
var i;

// Generate pseudorandom numbers...
for ( i = 0; i < 100; i++ ) {
    console.log( geometric( 0.4 ) );
}

// Create a new pseudorandom number generator...
seed = 1234;
rand = geometric.factory( 0.4, {
    'seed': seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}

// Create another pseudorandom number generator using a previous seed...
rand = geometric.factory( 0.4, {
    'seed': geometric.seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/random-array/geometric`][@stdlib/random/array/geometric]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a geometric distribution.</span>
-   <span class="package-name">[`@stdlib/random-iter/geometric`][@stdlib/random/iter/geometric]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a geometric distribution.</span>
-   <span class="package-name">[`@stdlib/random-streams/geometric`][@stdlib/random/streams/geometric]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a geometric distribution.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/random-base-geometric.svg
[npm-url]: https://npmjs.org/package/@stdlib/random-base-geometric

[test-image]: https://github.com/stdlib-js/random-base-geometric/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/random-base-geometric/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/random-base-geometric/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/random-base-geometric?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/random-base-geometric.svg
[dependencies-url]: https://david-dm.org/stdlib-js/random-base-geometric/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/random-base-geometric/tree/deno
[deno-readme]: https://github.com/stdlib-js/random-base-geometric/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/random-base-geometric/tree/umd
[umd-readme]: https://github.com/stdlib-js/random-base-geometric/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/random-base-geometric/tree/esm
[esm-readme]: https://github.com/stdlib-js/random-base-geometric/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/random-base-geometric/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/random-base-geometric/main/LICENSE

[geometric]: https://en.wikipedia.org/wiki/Geometric_distribution

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32

<!-- <related-links> -->

[@stdlib/random/array/geometric]: https://github.com/stdlib-js/random-array-geometric

[@stdlib/random/iter/geometric]: https://github.com/stdlib-js/random-iter-geometric

[@stdlib/random/streams/geometric]: https://github.com/stdlib-js/random-streams-geometric

<!-- </related-links> -->

</section>

<!-- /.links -->
