add a workflow to publish automatically:

```yaml
name: Publish main when tag is pushed

on:
    push:
        branches: [main]
        tags:
            - 'v*'

jobs:
    build:
        runs-on: ubuntu-latest

        strategy:
            matrix:
                node-version: [14.x]
        steps:
            - uses: actions/checkout@v2
              with:
                  fetch-depth: 0
            - name: Use Node.js ${{ matrix.node-version }}
              uses: actions/setup-node@v1
              with:
                  node-version: ${{ matrix.node-version }}
            - run: git fetch --no-tags --prune --depth=5 origin main
            - run: npm ci
            - run: npm run affected:build -- --base=origin/main
            - run: npm run affected:lint -- --base=origin/main
            - run: npm run affected:test -- --base=origin/main
            - run: npm run affected:e2e -- --base=origin/main
            - run: npm publish
              env:
                  NODE_AUTH_TOKEN: ${{ secrets.NPM_RUMBLESTUDIO }}
```
