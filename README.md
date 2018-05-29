# fastify-no-sniff

[![Code style][lint-img]][lint-url]
[![Dependency Status][dep-img]][dep-url]
[![Dev Dependency Status][dev-dep-img]][dev-dep-url]
[![NPM version][npm-ver-img]][npm-url]
[![NPM downloads][npm-dl-img]][npm-url]
[![NPM license][npm-lc-img]][npm-url]

Fastify plugin to prevent mimetype from being sniffed

## Why?

You may know [dont-sniff-mimetype](https://github.com/helmetjs/dont-sniff-mimetype) as a [dont-sniff-mimetype middleware](https://helmetjs.github.io/docs/dont-sniff-mimetype/) used in [helmet](https://github.com/helmetjs/helmet). And you could use it as a middleware in fastify also. So why i made this plugin?

Benchmark with no plugin:

```txt
Running 20s test @ http://127.0.0.1:10290/pudge/rest/v0/benchmark
1000 connections

Stat         Avg     Stdev   Max
Latency (ms) 32.37   8.9     1139.09
Req/Sec      30444   1051.31 31048
Bytes/Sec    4.53 MB 170 kB  4.63 MB

609k requests in 20s, 90.7 MB read
```

Benchmark with x-xss-protection as middleware:

```txt
Running 20s test @ http://127.0.0.1:10290/pudge/rest/v0/benchmark
1000 connections

Stat         Avg     Stdev   Max
Latency (ms) 29.7    206.15  9985.63
Req/Sec      26531.4 2840.13 27911
Bytes/Sec    4.86 MB 526 kB  5.08 MB

531k requests in 20s, 96.6 MB read
308 errors (308 timeouts)
```

Benchmark with this plugin:

```txt
Running 20s test @ http://127.0.0.1:10290/pudge/rest/v0/benchmark
1000 connections

Stat         Avg     Stdev  Max
Latency (ms) 34.19   7.21   246.74
Req/Sec      28849.6 1316.6 30104
Bytes/Sec    5.24 MB 227 kB 5.48 MB

577k requests in 20s, 105 MB read
```

So that's the reason and wish you like it. :)

## Install

Via npm:

```shell
npm i fastify-no-sniff
```

Via yarn:

```shell
yarn add fastify-no-sniff
```

## Usage

```js
const fastify = require('fastify');
const fastifyNoSniff = require('fastify-no-sniff');

const app = fastify();
app.register(fastifyNoSniff);

app.listen(3000, err => {
  if (err) throw err;
});
```

## Changelog

- 0.1.1: Init version

## Todo

- Add test case
- Add ci
- Add benchmark scripts

[lint-img]: https://img.shields.io/badge/code%20style-handsome-brightgreen.svg?style=flat-square
[lint-url]: https://github.com/poppinlp/eslint-config-handsome
[dep-img]: https://img.shields.io/david/poppinlp/fastify-no-sniff.svg?style=flat-square
[dep-url]: https://david-dm.org/poppinlp/fastify-no-sniff
[dev-dep-img]: https://img.shields.io/david/dev/poppinlp/fastify-no-sniff.svg?style=flat-square
[dev-dep-url]: https://david-dm.org/poppinlp/fastify-no-sniff#info=devDependencies
[npm-ver-img]: https://img.shields.io/npm/v/fastify-no-sniff.svg?style=flat-square
[npm-dl-img]: https://img.shields.io/npm/dm/fastify-no-sniff.svg?style=flat-square
[npm-lc-img]: https://img.shields.io/npm/l/fastify-no-sniff.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/fastify-no-sniff
