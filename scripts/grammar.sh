#!/bin/bash

copy_ts_and_clean() {
    cp .antlr/XonLexer.ts xon-lexer.ts
    cp .antlr/XonParser.ts xon-parser.ts
    rm -rf .antlr
    clear
    echo "Grammar compiled successfully!"
}

cd src/grammar || exit

lexer_date=$(date -r XonLexer.g4 "+%Y-%m-%d %H:%M:%S")
lexer_ts_date=$(date -r xon-lexer.ts "+%Y-%m-%d %H:%M:%S")

parser_date=$(date -r XonParser.g4 "+%Y-%m-%d %H:%M:%S")
parser_ts_date=$(date -r xon-parser.ts "+%Y-%m-%d %H:%M:%S")

if [[ "$lexer_date" > "$lexer_ts_date" || "$parser_date" > "$parser_ts_date" ]]; then
    npx -- antlr4ts -Werror -o .antlr -no-listener -no-visitor *.g4 && copy_ts_and_clean
else
    clear
    echo "Grammar compiled files already up to date!"
fi
