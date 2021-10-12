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
    id                                                                  # idExpression
    | '$'                                                               # instanceExpression
    | '$' id                                                            # instanceMemberExpression
    | literal                                                           # literalExpression
    | expression genericArguments? arguments                            # callExpression
    | expression '[' expression ']'                                     # indexExpression
    | '(' expression ')'                                                # parenthesizedExpression
    | '[' (expression (',' expression)*)? ']'                           # arrayExpression
    | expression '?'? '.' id                                            # memberExpression
    | operator expression                                               # prefixExpression
    | left = expression op += '^' right = expression                    # powExpression
    | left = expression op += ('*' | '/' | '%') right = expression      # mulDivModExpression
    | left = expression op += ('+' | '-') right = expression            # addSubExpression
    | left = expression op += '.' op += '.' right = expression          # rangeExpression
    | left = expression op += ID right = expression                     # infixExpression
    | left = expression op += '?' right = expression                    # elvisExpression
    | left = expression op += ('<' | '>') op += '='? right = expression # relationalExpression
    | left = expression op += ('=' | '!') op += '=' right = expression  # equalityExpression
    | left = expression op += '&' op += '&' right = expression          # conjunctionExpression
    | left = expression op += '|' op += '|' right = expression          # disjunctionExpression
    | expression '|' id ':' expression                                  # pipeExpression
    | '\\' (id (',' id)* ':')? expression                               # lambdaExpression
    ;

type:
    id genericArguments?                     # plainType
    | literal                                # literalType
    | type '?'                               # nullableType
    | type '[' ']'                           # arrayType
    | type '&' type                          # intersectionType
    | type '|' type                          # unionType
    | genericParameters? typeParameters type # functionType
    | '(' type ')'                           # parenthesizedType
    ;

literal:
    NULL_LITERAL      # nullLiteral
    | BOOLEAN_LITERAL # booleanLiteral
    | INTEGER_LITERAL # integerLiteral
    | FLOAT_LITERAL   # floatLiteral
    | CHAR_LITERAL    # charLiteral
    | STRING_LITERAL  # stringLiteral
    ;

operator:
    ID
    | (
        '~'
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
    )+
    ;

id: ID | INIT | ACTUAL | EXPECT | IMPORT | EXPORT;

// mb type always shoud be an interface?
parameter:         name = id type ('#' meta = id)?;
parameters:        '(' (parameter (',' parameter)*)? ')';
argument:          (id '=')? expression;
arguments:         '(' (argument (',' argument)*)? ')';
typeParameters:    '(' (type (',' type)*)? ')';
genericArguments:  '<' type (',' type)* '>';
genericParameters: '<' id (',' id)* '>';
body:              ':' statement | ':' NL* INDENT (statement | NL)+ DEDENT;
operatorBody:      body | statement;
functionBody:      body | NL* '=' NL* statement;
