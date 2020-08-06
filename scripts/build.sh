#!/bin/sh

npx rimraf dist
cp -r src/ dist/
cp package.json dist
cp *.md dist

npx cti create -e tests, test-helper, .antlr -i .test.ts -w -f ./dist
npx tsc -p tsconfig.dist.json
