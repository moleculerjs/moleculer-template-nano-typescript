# {{projectName}}

## Build Setup

``` bash
# Install dependencies
npm install

# Start developing with REPL
npm run dev

# Start production
npm start
{{#jest}}

# Run unit tests
npm test

# Run continuous test mode
npm run ci
{{/jest}}
{{#lint}}

# Run TSLint
npm run lint
{{/lint}}
```

{{#docker}}
## Run in Docker

**Build Docker image**
```bash
$ docker build -t {{projectName}} .
```

**Start container**
```bash
$ docker run -d {{projectName}}
```
{{/docker}}