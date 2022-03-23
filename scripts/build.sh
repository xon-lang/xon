#!/bin/bash

rm -rf dist
mkdir dist

cp package.json dist
cp README.md dist
cp LICENSE dist
cp tsconfig.json dist
find src -a -name "*.ts" ! -name "*.test.ts" ! -name "*.gen.ts" | cpio -pdum dist

cd dist
npx cti create -w -f .
npx tsc

find . -a -name "*.ts" ! -name "*.d.ts" -exec rm -rf {} \;
rm -rf tsconfig.json
git init
cd ..
