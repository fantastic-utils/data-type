# @fantastic-utils/data-type

[![NPM version](https://img.shields.io/npm/v/@fantastic-utils/data-type.svg?style=flat)](https://npmjs.org/package/@fantastic-utils/data-type)
[![NPM downloads](http://img.shields.io/npm/dm/@fantastic-utils/data-type.svg?style=flat)](https://npmjs.org/package/@fantastic-utils/data-type)

This is a library for get correct data type from javascript values. Why use this lib? As `typeof` have some limitations.

## Quick Start

```bash
npm install @fantastic-utils/data-type
```

```ts
import { getDataType } from '@fantastic-utils/data-type';

getDataType(1); // return Number
getDataType('a'); // return String
getDataType({}); // return Object
getDataType([]); // return Array
getDataType(false); // return Boolean
getDataType(Symbol('a')); // return Symbol
getDataType(new WeakMap()); // return WeakMap
getDataType(new Map()); // return Map
getDataType(new Proxy({}, {})); // return Object
getDataType(new Proxy([], {})); // return Array
getDataType(new Promise(() => {})); // return Promise
getDataType(Promise.resolve(1)); // return Promise
getDataType(NaN); // return Number
getDataType(Infinity); // return Number
getDataType(() => {}); // return Function
getDataType(new Websocket('wss://example.com')); // return Websocket

// etc...
```

## Development

```bash
$ npm install
```

```bash
$ npm run dev
$ npm run build
```

## LICENSE

MIT
