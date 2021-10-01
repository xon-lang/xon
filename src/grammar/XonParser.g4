parser grammar XonParser;

options {
    tokenVocab = XonLexer;
}

listing:           (library | NL)* ( definition | function | statement | NL)*;
library:           scope = id '.' name = id (':' libraryMember (',' libraryMember)*)?;
libraryMember:     name = librartMemberName (AS alias = librartMemberName)?;
librartMemberName: id | DEFINITION_ID;

definition:
    DEFINITION_ID genericParameters? parameters? (IS type)? ':' NL INDENT (
        member
        | NL
    )+ DEDENT
    ;

member:
    id type ('=' expression)?                                    # propertyMember
    | INIT body                                                  # initMember
    | (INFIX | PREFIX | POSTFIX) operator parameters type? body? # operatorMember
    | id genericParameters? parameters type? body?               # methodMember
    | TEST expression body?                                      # testMember
    ;

function: id genericParameters? parameters result = type? body?;

extensionMethod:
    receiver = type '.' id genericParameters? parameters result = type? body?
    ;

statement:
    FOR (value = id (',' index = id)? IN)? expression body # forStatement
    | WHILE expression body                                # whileStatement
    | IF expression body (ELSE body)?                      # ifStatement
    | BREAK                                                # breakStatement
    | RETURN expression?                                   # returnStatement
    | ACTUAL ':' expression NL+ EXPECT ':' expression      # assertStatement
    | PREPROCESSOR                                         # preprocessorStatement
    | assignment                                           # assignmentStatement
    | expression                                           # expressionStatement
    ;

assignment:
    id type? '=' expression                        # idAssignment
    | '[' id (',' id)* ']' '=' expression          # arrayAssignment
    | '{' id (',' id)* '}' '=' expression          # objectAssignment
    | THIS id '=' expression                       # thisMemberAssignment
    | expression '.' id '=' expression             # memberAssignment
    | expression '[' expression ']' '=' expression # indexAssignment
    ;

expression:
    THIS                                        # instanceExpression
    | DEFINITION_ID genericArguments? arguments # instantiationExpression
    | id                                        # idExpression
    | literal                                   # literalExpression
    | expression genericArguments? arguments    # callExpression
    | expression '[' expression ']'             # indexExpression
    | expression '?'? '.' expression            # memberExpression
    | (operator+ | ID) expression               # prefixExpression
    | expression (operator+ | ID)               # postfixExpression
    | expression '^' expression                 # powExpression
    | expression ('*' | '/' | '%') expression   # mulDivModExpression
    | expression ('+' | '-') expression         # addSubExpression
    | expression '.' '.' expression             # rangeExpression
    | expression ID expression                  # infixExpression
    | expression '?' expression                 # elvisExpression
    | expression ('<' | '>') '='? expression    # relationalExpression
    | expression ('=' '=' | '!' '=') expression # equalityExpression
    | expression '&' '&'? expression            # conjunctionExpression
    | expression '|' '|'? expression            # disjunctionExpression
    | expression '|' id ':' expression          # pipeExpression
    | '[' (expression (',' expression)*)? ']'   # arrayExpression
    | '(' expression ')'                        # parenthesizedExpression
    | '\\' (id (',' id)* ':')? expression       # lambdaExpression
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
    DEFINITION_ID genericArguments?          # plainType
    | literal                                # literalType
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

id:
    ID
    | IS
    | AS
    | IF
    | IN
    | OR
    | FOR
    | NOT
    | AND
    | ELSE
    | INIT
    | LOOP
    | THIS
    | BREAK
    | WHILE
    | ACTUAL
    | EXPECT
    | RETURN
    ;

parameter:         id type ('#' DEFINITION_ID)?;
parameters:        '(' (parameter (',' parameter)*)? ')';
argument:          (id '=')? expression;
arguments:         '(' (argument (',' argument)*)? ')';
typeParameters:    '(' (type (',' type)*)? ')';
genericArguments:  '<' type (',' type)* '>';
genericParameters: '<' DEFINITION_ID (',' DEFINITION_ID)* '>';
body:              ':' statement | ':' NL INDENT (statement | NL)+ DEDENT;
functionBody:      body | NL? '=' NL? expression;
