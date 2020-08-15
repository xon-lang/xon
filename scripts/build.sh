#!/bin/sh

npx rimraf dist
mkdir dist

find src -name "*.ts" -a ! -name "*.test.ts" | cpio -p -dumv dist
cp package.json dist
cp *.md dist

npx cti create -e tests, test-helper, .antlr -i .test.ts -w -f ./dist
npx tsc -p tsconfig.dist.json
find dist -name "*.ts" -a ! -name "*.d.ts" -exec rm -rf {} \;