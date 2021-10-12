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
    IMPORT libraryPath (
        AS alias = LOWER_ID
        | (':' libraryMember (',' libraryMember)*)?
    )
    ;
libraryPath:   '.'* names += LOWER_ID ('.' names += LOWER_ID)*;
libraryMember: name = id | AS alias = id;

definition:
    name = UPPER_ID genericParameters? parameters? (IS type)? ':' NL INDENT (
        member
        | NL
    )+ DEDENT
    ;

member:
    name = LOWER_ID type? (('=' | ':') expression)?                      # propertyMember
    | name = LOWER_ID type? NL INDENT (assignment | NL)+ DEDENT          # hierarchyMember
    | INIT body                                                          # initMember
    | (INFIX | PREFIX | POSTFIX) operator parameters type? functionBody? # operatorMember
    | name = LOWER_ID genericParameters? parameters type? functionBody?  # methodMember
    ;

extensionMember:
    receiver = type '.' name = LOWER_ID genericParameters? parameters? result = type? functionBody?
    ;

test: TEST expression? body?;

function: name = LOWER_ID genericParameters? parameters type? functionBody?;

statement:
    FOR (value = LOWER_ID (',' index = LOWER_ID)? IN)? expression body # forStatement
    | WHILE expression body                                            # whileStatement
    | DO operatorBody WHILE expression                                 # doWhileStatement
    | IF expression body (ELSE operatorBody)?                          # ifStatement
    | BREAK                                                            # breakStatement
    | RETURN expression?                                               # returnStatement
    | ACTUAL expression NL+ EXPECT expression                          # assertStatement
    | PREPROCESSOR                                                     # preprocessorStatement
    | assignment                                                       # assignmentStatement
    | expression                                                       # expressionStatement
    ;

assignment:
    name = UPPER_ID '=' type                                            # typeAssignment
    | name = LOWER_ID type? '=' expression                              # idAssignment
    | name = LOWER_ID type? NL INDENT (assignment | NL)+ DEDENT         # hierarchyAssignment
    | '[' names += LOWER_ID (',' names += LOWER_ID)* ']' '=' expression # arrayAssignment
    | '{' names += LOWER_ID (',' names += LOWER_ID)* '}' '=' expression # objectAssignment
    | '$' name = LOWER_ID '=' expression                                # thisMemberAssignment
    | expression '.' name = LOWER_ID '=' expression                     # memberAssignment
    | expression '[' expression ']' '=' expression                      # indexAssignment
    ;

expression:
    name = LOWER_ID                                                     # idExpression
    | '$'                                                               # instanceExpression
    | '$' name = LOWER_ID                                               # instanceMemberExpression
    | literal                                                           # literalExpression
    | expression genericArguments? arguments                            # callExpression
    | expression '[' expression ']'                                     # indexExpression
    | '(' expression ')'                                                # parenthesizedExpression
    | '[' (expression (',' expression)*)? ']'                           # arrayExpression
    | expression '?'? '.' name = LOWER_ID                               # memberExpression
    | operator expression                                               # prefixExpression
    | left = expression op += '^' right = expression                    # powExpression
    | left = expression op += ('*' | '/' | '%') right = expression      # mulDivModExpression
    | left = expression op += ('+' | '-') right = expression            # addSubExpression
    | left = expression op += '.' op += '.' right = expression          # rangeExpression
    | left = expression op += LOWER_ID right = expression               # infixExpression
    | left = expression op += '?' right = expression                    # elvisExpression
    | left = expression op += ('<' | '>') op += '='? right = expression # relationalExpression
    | left = expression op += ('=' | '!') op += '=' right = expression  # equalityExpression
    | left = expression op += '&' op += '&' right = expression          # conjunctionExpression
    | left = expression op += '|' op += '|' right = expression          # disjunctionExpression
    | expression '|' name = LOWER_ID ':' expression                     # pipeExpression
    | '\\' (parameter (',' parameter)*)? expression                     # lambdaExpression
    ;

type:
    name = UPPER_ID genericArguments?        # plainType
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
    LOWER_ID
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

id: UPPER_ID | LOWER_ID; // | INIT | ACTUAL | EXPECT | IMPORT | EXPORT;

// mb type always shoud be an interface?
parameter:         name = LOWER_ID type? ('#' meta = LOWER_ID)?;
parameters:        '(' (parameter (',' parameter)*)? ')';
argument:          (name = LOWER_ID '=')? expression;
arguments:         '(' (argument (',' argument)*)? ')';
typeParameters:    '(' (type (',' type)*)? ')';
genericArguments:  '<' type (',' type)* '>';
genericParameters: '<' names += UPPER_ID (',' names += UPPER_ID)* '>';
body:              ':' statement | ':' NL* INDENT (statement | NL)+ DEDENT;
operatorBody:      body | statement;
functionBody:      body | NL* '=' NL* statement;
