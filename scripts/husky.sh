#!/bin/sh

npm install husky --save-dev
npx husky install
npx husky add .husky/pre-commit "npm run pre-commit"

echo "Add the next lines to the package.json scripts section"
echo "\"postinstall\": \"husky install\","
echo "\"prepublishOnly\": \"pinst --disable\","
echo "\"postpublish\": \"pinst --enable\""
