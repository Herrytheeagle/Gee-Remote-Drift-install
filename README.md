# Remote Drift Install

[![Node.js CI](https://github.com/Herrytheeagle/Gee-Remote-Drift-install/actions/workflows/nodejs.yml/badge.svg)](https://github.com/Herrytheeagle/Gee-Remote-Drift-install/actions/workflows/nodejs.yml)

A reusable Drift snippet loader for Remote Conferencing. Install Drift live-chat widget for a remote conferencing service and package it as a small reusable integration module. 

What it does :-

Loads the Drift support/chat widget asynchronously
Provides a reusable module API: GeeDrift.init() / GeeDrift.load(appId)
Wraps the Drift snippet in a standard project structure
Builds a distributable UMD bundle for browser usage

Why it’s useful :-

Lets a conferencing website or product quickly add live support chat
Helps customers ask questions or get help while using the service
Supports remote conferencing users with real-time chat and tracking
Makes the integration reusable across pages or deployments

In real life :-

A customer-facing site for remote meetings could embed this script
Support teams could use Drift to chat with users during onboarding
Marketing or product teams could track user engagement through Drift
The repo structure makes it easier to maintain, build, and deploy

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
