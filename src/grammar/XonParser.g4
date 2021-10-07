parser grammar XonParser;

options {
    tokenVocab = XonLexer;
}

listing: (library | export | NL)* (
        definition
        | extensionMember
        | test
        | function
        | statement
        | NL
    )*
    ;

export: EXPORT libraryPath;
library:
    IMPORT libraryPath (AS id | (':' libraryMember (',' libraryMember)*)?)
    ;
libraryPath:   '.'* id ('.' id)*;
libraryMember: name = id | AS alias = id?;

definition:
    id genericParameters? parameters? (IS type)? ':' NL INDENT (member | NL)+ DEDENT
    ;

member:
    id type? (('=' | ':') expression)?                                   # propertyMember
    | id type? NL INDENT (assignment | NL)+ DEDENT                       # hierarchyMember
    | INIT body                                                          # initMember
    | (INFIX | PREFIX | POSTFIX) operator parameters type? functionBody? # operatorMember
    | id genericParameters? parameters type? functionBody?               # methodMember
    ;

extensionMember:
    receiver = type '.' id genericParameters? parameters? result = type? functionBody?
    ;

test: TEST expression? body?;

function: id genericParameters? parameters type? functionBody?;

statement:
    FOR (value = id (',' index = id)? IN)? expression body # forStatement
    | WHILE expression body                                # whileStatement
    | DO operatorBody WHILE expression                     # doWhileStatement
    | IF expression body (ELSE operatorBody)?              # ifStatement
    | BREAK                                                # breakStatement
    | RETURN expression?                                   # returnStatement
    | ACTUAL expression NL+ EXPECT expression              # assertStatement
    | PREPROCESSOR                                         # preprocessorStatement
    | assignment                                           # assignmentStatement
    | expression                                           # expressionStatement
    ;

assignment:
    id type? '=' expression                        # idAssignment
    | id type? NL INDENT (assignment | NL)+ DEDENT # hierarchyAssignment
    | '[' id (',' id)* ']' '=' expression          # arrayAssignment
    | '{' id (',' id)* '}' '=' expression          # objectAssignment
    | '$' id '=' expression                        # thisMemberAssignment
    | expression '.' id '=' expression             # memberAssignment
    | expression '[' expression ']' '=' expression # indexAssignment
    ;

expression:
    id                                                   # idExpression
    | '$'                                                # instanceExpression
    | '$' id                                             # instanceMemberExpression
    | literal                                            # literalExpression
    | expression genericArguments? arguments             # callExpression
    | expression '[' expression ']'                      # indexExpression
    | expression '?'? '.' id                             # memberExpression
    | (operator+ | ID) expression                        # prefixExpression
    | expression (operator+ | ID)                        # postfixExpression
    | expression op += '^' expression                    # powExpression
    | expression op += ('*' | '/' | '%') expression      # mulDivModExpression
    | expression op += ('+' | '-') expression            # addSubExpression
    | expression op += '.' op += '.' expression          # rangeExpression
    | expression op += ID expression                     # infixExpression
    | expression op += '?' expression                    # elvisExpression
    | expression op += ('<' | '>') op += '='? expression # relationalExpression
    | expression op += ('=' | '!') op += '=' expression  # equalityExpression
    | expression op += '&' op += '&' expression          # conjunctionExpression
    | expression op += '|' op += '|' expression          # disjunctionExpression
    | expression '|' id ':' expression                   # pipeExpression
    | '[' (expression (',' expression)*)? ']'            # arrayExpression
    | '(' expression ')'                                 # parenthesizedExpression
    | '\\' (id (',' id)* ':')? expression                # lambdaExpression
    ;

literal:
    NULL_LITERAL      # nullLiteral
    | BOOLEAN_LITERAL # booleanLiteral
    | INTEGER_LITERAL # integerLiteral
    | FLOAT_LITERAL   # floatLiteral
    | CHAR_LITERAL    # charLiteral
    | STRING_LITERAL  # stringLiteral
    ;

type:
    id genericArguments?                     # plainType
    | expression                             # literalType
    | type '?'                               # nullableType
    | type '[' ']'                           # arrayType
    | type '&' type                          # intersectionType
    | type '|' type                          # unionType
    | genericParameters? typeParameters type # functionType
    | '(' type ')'                           # parenthesizedType
    ;

operator:
    ID
    | '~'
    | '!'
    | '^'
    | '*'
    | '/'
    | '%'
    | '+'
    | '-'
    | '<'
    | '>'
    | '='
    | '&'
    | '|'
    | '.'
    ;

id: ID | INIT | ACTUAL | EXPECT | IMPORT | EXPORT;

parameter:         id type ('#' id)?;
parameters:        '(' (parameter (',' parameter)*)? ')';
argument:          (id '=')? expression;
arguments:         '(' (argument (',' argument)*)? ')';
typeParameters:    '(' (type (',' type)*)? ')';
genericArguments:  '<' type (',' type)* '>';
genericParameters: '<' id (',' id)* '>';
body:              ':' statement | ':' NL* INDENT (statement | NL)+ DEDENT;
operatorBody:      body | statement;
functionBody:      body | NL* '=' NL* statement;
