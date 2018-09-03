# Moleculer template: `nano-ts`
:mortar_board: Minimal project template for one Moleculer microservice with typescript.

## Features
- Moleculer v0.13.x with `moleculer.config.ts`
- Simple project with a demo `greeter` service
- Transporter & Cacher
- Docker & Docker Compose files
- Unit tests with [Jest](http://facebook.github.io/jest/)
- Lint with [TSLint](https://palantir.github.io/tslint/)
- Launch file for debugging in [VSCode](https://code.visualstudio.com/)


## Install
To install use the [moleculer-cli](https://github.com/moleculerjs/moleculer-cli) tool.

```bash
$ moleculer init nano-ts my-project
```

## Prompts
```
$ moleculer init nano-ts my-project

Template repo: moleculerjs/moleculer-template-nano
? Select a transporter NATS (recommended)
? Would you like use cache? Yes
? Select a cacher solution Memory
? Add Docker files? Yes
? Use TSLint to lint your code? Yes
? Setup unit tests with Jest? Yes
Create 'moleculer-nano' folder...
? Would you like to run 'npm install'? Yes
```

## NPM scripts
- `npm run dev` - Start service.js with hot-reloading and REPL.
- `npm lint` - Run linting
- `npm run ci` - Start testing in watch mode
- `npm start` - Start service.js in production mode
- `npm test` - Run tests & generate coverage report

## License
This template is available under the [MIT license](https://tldrlegal.com/license/mit-license).

## Contact
Copyright (c) 2018 MoleculerJS

[![@moleculerjs](https://img.shields.io/badge/github-moleculerjs-green.svg)](https://github.com/moleculerjs) [![@MoleculerJS](https://img.shields.io/badge/twitter-MoleculerJS-blue.svg)](https://twitter.com/MoleculerJS)
