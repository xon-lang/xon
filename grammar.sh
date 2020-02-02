generate_grammar()
{
    cd src/grammar
    npx rimraf .antlr
    npx antlr4ts *.g4 -o .antlr
    cd .antlr
    cp XonLexer.ts ../xon-lexer.ts
    cp XonParser.ts ../xon-parser.ts
    npx rimraf .antlr
}


lexer_date=$(date -r ./src/grammar/XonLexer.g4 "+%Y-%m-%d %H:%M:%S")
lexer_ts_date=$(date -r ./src/grammar/.antlr/XonLexer.ts "+%Y-%m-%d %H:%M:%S")
parser_date=$(date -r ./src/grammar/XonParser.g4 "+%Y-%m-%d %H:%M:%S")
parser_ts_date=$(date -r ./src/grammar/.antlr/XonParser.ts "+%Y-%m-%d %H:%M:%S")


if [[ "$lexer_date" > "$lexer_ts_date" ]] ;
then
    generate_grammar
fi

if [[ "$parser_date" > "$parser_ts_date" ]] ;
then
    generate_grammar
fi