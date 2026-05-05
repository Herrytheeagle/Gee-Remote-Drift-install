# Gee Remote Drift Install

[![Node.js CI](https://github.com/Herrytheeagle/Gee-Remote-Drift-install/actions/workflows/nodejs.yml/badge.svg)](https://github.com/Herrytheeagle/Gee-Remote-Drift-install/actions/workflows/nodejs.yml)

A reusable Drift snippet loader for Gee Remote Conferencing.

## Files

- `geedrift.js` — Browser loader and module wrapper for the Drift chat snippet.
- `package.json` — Package metadata and basic validation script.
- `README.md` — Project documentation.
- `LICENSE` — MIT license.

## Usage

### Browser

Include the built script directly in your HTML:

```html
<script src="geedrift.js"></script>
```

The default Drift app ID (`bbevn3v6ghc3`) is loaded automatically.

### JavaScript

```js
import GeeDrift from "./src/index.js";
GeeDrift.init();
```

Or in CommonJS with the built script:

```js
const GeeDrift = require("./geedrift.js");
GeeDrift.init();
```

### Custom app ID

```js
GeeDrift.init("your-app-id");
```

## Build

Install dependencies and build the bundle:

```sh
npm install
npm run build
```

## Validation

Run the following command to verify the source syntax:

```sh
npm run check
```
