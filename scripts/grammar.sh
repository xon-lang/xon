#!/bin/sh

generate_grammar() {
    npx antlr4ts -Werror -o .antlr -no-listener -no-visitor *.g4
    cp .antlr/XonLexer.ts xon-lexer.ts
    cp .antlr/XonParser.ts xon-parser.ts && clear
    npx rimraf .antlr
}

cd src/grammar

lexer_date=$(date -r XonLexer.g4 "+%Y-%m-%d %H:%M:%S")
lexer_ts_date=$(date -r xon-lexer.ts "+%Y-%m-%d %H:%M:%S")

parser_date=$(date -r XonParser.g4 "+%Y-%m-%d %H:%M:%S")
parser_ts_date=$(date -r xon-parser.ts "+%Y-%m-%d %H:%M:%S")

if [[ "$lexer_date" > "$lexer_ts_date" ]]; then
    generate_grammar
elif [[ "$parser_date" > "$parser_ts_date" ]]; then
    generate_grammar
fi
