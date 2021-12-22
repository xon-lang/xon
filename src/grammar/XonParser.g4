parser grammar XonParser;

options {
    tokenVocab = XonLexer;
}

source:     (library | export | NL)* ( definition | NL)*;
export:     EXPORT path = expr;
library:    IMPORT path = expr ':' members += expr (',' members += expr)*;
definition: modifier id generics? type = expr? (IS arguments)? body?;

statement:
    parameter                                          # parameterStatement
    | expr                                             # expressionStatement
    | id '=' expr                                      # assignmentStatement
    | FOR (value = id (',' index = id)? IN)? expr body # forStatement
    | WHILE expr body                                  # whileStatement
    | DO body WHILE expr                               # doWhileStatement
    | IF expr thenBody = body (ELSE elseBody = body)?  # ifStatement
    | BREAK                                            # breakStatement
    | RETURN expr?                                     # returnStatement
    | ACTUAL actual = expr NL+ EXPECT expect = expr    # assertStatement
    | PREPROCESSOR                                     # preprocessorStatement
    ;

expr:
    literal                                                   # literalExpression
    | id generics?                                            # idExpression
    | '(' expr ')'                                            # parenthesizedExpression
    | '[' arguments? ']'                                      # arrayExpression
    | '{' (parameter (',' parameter)* ','?)? '}'              # objectExpression
    | '(' (parameter (',' parameter)* ','?)? ')' expr? body   # methodExpression
    | expr '(' arguments? ')'                                 # invokeExpression
    | expr '?'                                                # nullableExpression
    | expr '.' id generics?                                   # memberExpression
    | '...' expr                                              # spreadExpression
    | op = ('-' | '+' | NOT) expr                             # prefixExpression
    | left = expr op = (IS | AS | IN) right = expr            # infixExpression
    | left = expr op = '^' right = expr                       # powExpression
    | left = expr op = ('*' | '/' | '%') right = expr         # mulDivModExpression
    | left = expr op = ('+' | '-') right = expr               # addSubExpression
    | left = expr op = '..' right = expr                      # rangeExpression
    | left = expr op = ('<' | '<=' | '>=' | '>') right = expr # relationalExpression
    | left = expr op = ('==' | '!=') right = expr             # equalityExpression
    | left = expr op = '&&' right = expr                      # conjunctionExpression
    | left = expr op = '||' right = expr                      # disjunctionExpression
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

parameter: '...'? parameterId generics? type = expr? (IS arguments)? body?;
arguments: expr (',' expr)* ','?;
generics:  '<' '|' arguments '|' '>';

parameterId: id | STRING_LITERAL;
id:          modifier | ID | IS | AS | IN;
modifier:    TYPE | CLASS | INTERFACE | OBJECT | ENUM;
operator:    '^' | '*' | '/' | '%' | '+' | '-' | '<' | '>' | '=';
