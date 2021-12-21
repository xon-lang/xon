parser grammar XonParser;

options {
    tokenVocab = XonLexer;
}

source:  (library | export | NL)* (definition | NL)*;
export:  EXPORT path = expr;
library: IMPORT path = expr ':' members += expr (',' members += expr)*;

definition: parameter (IS arguments)? (NL+ INDENT (attribute | NL)+ DEDENT)?;
attribute:  attributeId generics? type = expr? body?;

statement:
    expr                                               # expressionStatement
    | FOR (value = id (',' index = id)? IN)? expr body # forStatement
    | WHILE expr body                                  # whileStatement
    | DO body WHILE expr                               # doWhileStatement
    | IF expr thenBody = body (ELSE elseBody = body)?  # ifStatement
    | BREAK                                            # breakStatement
    | RETURN expr?                                     # returnStatement
    | ACTUAL actual = expr NL+ EXPECT expect = expr    # assertStatement
    | PREPROCESSOR                                     # preprocessorStatement
    | id '=' expr                                      # assignmentStatement
    ;

expr:
    literal                                                   # literalExpression
    | id generics?                                            # idExpression
    | '(' expr ')'                                            # parenthesizedExpression
    | '[' arguments? ']'                                      # arrayExpression
    | '{' (attribute (',' attribute)* ','?)? '}'              # objectExpression
    | '(' (parameter (',' parameter)* ','?)? ')' expr         # methodExpression
    | expr '(' arguments? ')'                                 # invokeExpression
    | expr '?'                                                # nullableExpression
    | expr '.' id                                             # memberExpression
    | expr ':' expr                                           # pairExpression
    | '...' expr                                              # spreadExpression
    | op = ('-' | '+' | NOT) expr                             # prefixExpression
    | left = expr op = (IS | AS | IN) right = expr            # infixExpression
    | left = expr op = '^' right = expr                       # powExpression
    | left = expr op = ('*' | '/' | '%') right = expr         # mulDivModExpression
    | left = expr op = ('+' | '-') right = expr               # addSubExpression
    | left = expr op = '..' right = expr                      # rangeExpression
    | left = expr op = '?' right = expr                       # elvisExpression
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

parameter: '...'? id generics? type = expr?;
arguments: expr (',' expr)* ','?;
generics:  '<' '|' arguments '|' '>';

id:          ID | IS | AS | IN;
attributeId: id | operator;
operator:    '^' | '*' | '/' | '%' | '+' | '-' | '<' | '>' | '=';
