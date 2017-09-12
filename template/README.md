# {{projectName}}

## Build Setup

``` bash
# Install dependencies
npm install

# Start development mode with REPL
npm run dev
{{#jest}}

# Run unit tests
npm test

# Run continuous test mode
npm run ci
{{/jest}}
{{#lint}}

# Run ESLint
npm run lint
{{/lint}}
```