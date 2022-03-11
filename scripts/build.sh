#!/bin/bash

rm -rf dist
mkdir dist

find src -a -name "*.ts" ! -name "*.test.ts" ! -name "*.gen.ts" | cpio -p -dumv dist
cp package.json dist
cp README.md dist
cp LICENSE dist
cp tsconfig.dist.json dist
cp tsconfig.json dist

cd dist
npx cti create -e tests, test-helper, .antlr -i .test.ts -w -f .
npx tsc --project tsconfig.dist.json
npx tsconfig-replace-paths --project tsconfig.dist.json

find . -a -name "*.ts" ! -name "*.d.ts" -exec rm -rf {} \;
rm -rf tsconfig.dist.json
rm -rf tsconfig.json
git init
cd ..
