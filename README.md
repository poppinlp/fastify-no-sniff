# fastify-no-sniff

[![Build Status][ci-img]][ci-url]
[![Code coverage][cov-img]][cov-url]
[![Code style][lint-img]][lint-url]
[![Dependency Status][dep-img]][dep-url]
[![Dev Dependency Status][dev-dep-img]][dev-dep-url]
[![NPM version][npm-ver-img]][npm-url]
[![NPM downloads][npm-dl-img]][npm-url]
[![NPM license][npm-lc-img]][npm-url]

Fastify plugin to prevent mimetype from being sniffed

## Why?

You may know [dont-sniff-mimetype](https://github.com/helmetjs/dont-sniff-mimetype) as a [dont-sniff-mimetype middleware](https://helmetjs.github.io/docs/dont-sniff-mimetype/) used in [helmet](https://github.com/helmetjs/helmet). And you could use it as a middleware in fastify also. So why i made this plugin?

You may find the reason in [benchmark result](./benchmarks/benchmark.txt) and wish you like it. :)

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

- 0.2.0:
  - Add test case
  - Add code coverage
  - Add benchmarks
- 0.1.1:
  - Init version

[ci-img]: https://img.shields.io/travis/poppinlp/fastify-no-sniff.svg?style=flat-square
[ci-url]: https://travis-ci.org/poppinlp/fastify-no-sniff
[cov-img]: https://img.shields.io/coveralls/poppinlp/fastify-no-sniff.svg?style=flat-square
[cov-url]: https://coveralls.io/github/poppinlp/fastify-no-sniff?branch=master
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
