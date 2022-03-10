#!/bin/bash

rm -rf dist
mkdir dist

find src -name "*.ts" -a ! -name "*.test.ts" ! -name "*.gen.ts" | cpio -p -dumv dist
cp package.json dist
cp README.md dist
cp LICENSE dist
cp tsconfig.json dist

cd dist
npx cti create -e tests, test-helper, .antlr -i .test.ts -w -f .
npx tsc
find . -name "*.ts" -a ! -name "*.d.ts" -exec rm -rf {} \;
git init
cd ..
