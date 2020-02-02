generate_grammar()
{
    npx rimraf .antlr
    npx antlr4ts *.g4 -o .antlr -no-listener
    cd .antlr
    cp XonLexer.ts ../xon-lexer.ts
    cp XonParser.ts ../xon-parser.ts
}

cd src/grammar

lexer_date=$(date -r XonLexer.g4 "+%Y-%m-%d %H:%M:%S")
lexer_ts_date=$(date -r xon-lexer.ts "+%Y-%m-%d %H:%M:%S")

parser_date=$(date -r XonParser.g4 "+%Y-%m-%d %H:%M:%S")
parser_ts_date=$(date -r xon-parser.ts "+%Y-%m-%d %H:%M:%S")


if [[ "$lexer_date" > "$lexer_ts_date" ]] ;
then
    generate_grammar
fi

if [[ "$parser_date" > "$parser_ts_date" ]] ;
then
    generate_grammar
fi