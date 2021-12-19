parser grammar XonParser;

options {
    tokenVocab = XonLexer;
}

source: (library | export | NL)* ( definition | NL)*;

export:  EXPORT path = expr;
library: IMPORT path = expr ':' members += expr (',' members += expr)*;

definition:
    TYPE parameter                               # aliasDefinition
    | definitionModifier definitionHeader? body? # typeDefinition
    ;
definitionModifier: CLASS | ENUM | INTERFACE | OBJECT | EXTENSION;
definitionHeader:   id methodHeader? (IS arguments)?;

statement:
    FOR (value = id (',' index = id)? IN)? expr body  # forStatement
    | WHILE expr body                                 # whileStatement
    | DO body WHILE expr                              # doWhileStatement
    | IF expr thenBody = body (ELSE elseBody = body)? # ifStatement
    | BREAK                                           # breakStatement
    | RETURN expr?                                    # returnStatement
    | ACTUAL actual = expr NL+ EXPECT expect = expr   # assertStatement
    | PREPROCESSOR                                    # preprocessorStatement
    | id '=' expr                                     # assignmentStatement
    | parameter                                       # parameterStatement
    | expr                                            # expressionStatement
    ;

expr:
    '(' expr ')'                                              # parenthesizedExpression
    | id generics?                                            # idExpression
    | indexerHeader body                                      # indexerExpression
    | methodHeader body                                       # methodExpression
    | '[' arguments? ']'                                      # arrayExpression
    | '{' parameters? '}'                                     # objectExpression
    | expr '[' arguments? ']'                                 # indexExpression
    | expr '(' arguments? ')'                                 # invokeExpression
    | expr '?'                                                # nullableExpression
    | expr '.' attrId                                         # memberExpression
    | '...' expr                                              # spreadExpression
    | op = ('-' | '+' | NOT) expr                             # prefixExpression
    | left = expr op = id right = expr                        # infixExpression
    | left = expr op = '^' right = expr                       # powExpression
    | left = expr op = ('*' | '/' | '%') right = expr         # mulDivModExpression
    | left = expr op = ('+' | '-') right = expr               # addSubExpression
    | left = expr op = '..' right = expr                      # rangeExpression
    | left = expr op = '?' right = expr                       # elvisExpression
    | left = expr op = ('<' | '<=' | '>=' | '>') right = expr # relationalExpression
    | left = expr op = ('==' | '!=') right = expr             # equalityExpression
    | left = expr op = '&&' right = expr                      # conjunctionExpression
    | left = expr op = '||' right = expr                      # disjunctionExpression
    | left = expr '|' (id ':')? right = expr                  # pipeExpression
    | literal                                                 # literalExpression
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

parameter:     attrId generics? (type = expr)? body?;
parameters:    parameter (',' parameter)* ','?;
arguments:     expr (',' expr)* ','?;
methodHeader:  '(' parameters? ')' expr?;
indexerHeader: '[' parameters? ']' expr?;
generics:      '<' '|' arguments '|' '>';

attrId:   id | operator | STRING_LITERAL;
id:       ID | definitionModifier;
operator: '^' | '*' | '/' | '%' | '+' | '-' | '<' | '>' | '=';
