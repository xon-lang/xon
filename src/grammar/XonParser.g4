parser grammar XonParser;

options {
    tokenVocab = XonLexer;
}

source: NL* (statement (NL+ | EOF))*?;

statement:
    IMPORT path = expr ':' members += expr (',' members += expr)* ','?   # importStatement
    | EXPORT path = expr                                                 # exportStatement
    | FOR (value = declaration (',' index = declaration)? IN)? expr body # forStatement
    | WHILE expr body                                                    # whileStatement
    | DO body WHILE expr                                                 # doWhileStatement
    | IF expr thenBody = body (ELSE elseBody = body)?                    # ifStatement
    | BREAK                                                              # breakStatement
    | RETURN expr?                                                       # returnStatement
    | ACTUAL actual = expr NL+ EXPECT expect = expr                      # assertStatement
    | PREPROCESSOR                                                       # preprocessorStatement
    | declaration                                                        # declarationStatement
    | id '=' expr                                                        # assignmentStatement
    | expr                                                               # expressionStatement
    ;

expr:
    id                                                                 # idExpression
    | '[' (expr (',' expr)* ','?)? ']'                                 # arrayExpression
    | '{' (declaration (',' declaration)* ','?)? '}'                   # objectExpression
    | instance = expr '(' (args += expr (',' args += expr)* ','?)? ')' # invokeExpression
    | instance = expr '[' (args += expr (',' args += expr)* ','?)? ']' # indexExpression
    | expr '?'                                                         # nullableExpression
    | expr '.' id                                                      # memberExpression
    | '...' expr                                                       # spreadExpression
    | op = ('-' | '+' | NOT) expr                                      # prefixExpression
    | left = expr op = '^' right = expr                                # powExpression
    | left = expr op = ('*' | '/' | '%') right = expr                  # mulDivModExpression
    | left = expr op = ('+' | '-') right = expr                        # addSubExpression
    | left = expr op = '..' right = expr                               # rangeExpression
    | left = expr op = ('<' | '<=' | '>=' | '>') right = expr          # relationalExpression
    | left = expr op = ('==' | '!=') right = expr                      # equalityExpression
    | left = expr op = '&&' right = expr                               # conjunctionExpression
    | left = expr op = '||' right = expr                               # disjunctionExpression
    | left = expr op = (IS | AS | IN) right = expr                     # infixExpression
    | literal                                                          # literalExpression
    | '(' (declaration (',' declaration)* ','?)? ')' expr?             # methodExpression
    | '[' (declaration (',' declaration)* ','?)? ']' expr?             # indexerExpression
    | '(' expr ')'                                                     # parenthesizedExpression
    ;

literal:
    INTEGER_LITERAL  # integerLiteral
    | FLOAT_LITERAL  # floatLiteral
    | CHAR_LITERAL   # charLiteral
    | STRING_LITERAL # stringLiteral
    | REGEX_LITERAL  # regexLiteral
    ;

body:
    ':' statement                              # singleBody
    | ':'? NL+ INDENT (statement | NL)+ DEDENT # multipleBody
    ;

declaration:
    modifier id type = expr? IS base = expr body?
    | modifier id type = expr? body?
    | '...'? id type = expr? body?
    ;
modifier: TYPE | CLASS | OBJECT | ENUM | MODEL;
id:
    (name = ID | operator) (
        '<' '|' declaration (',' declaration)* ','? '|' '>'
    )?
    ;
operator: '^' | '*' | '/' | '%' | '+' | '-' | '<' | '>' | '=';
