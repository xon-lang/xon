parser grammar XonParser;

options {
    tokenVocab = XonLexer;
}

source: (library | export | NL)* ( sourceMember | NL)*;
sourceMember:
    classType       # classTypeSourceMember
    | extensionType # extensionTypeSourceMember
    | property      # propertySourceMember
    | method        # methodSourceMember
    | test          # testSourceMember
    ;

export: EXPORT libraryPath;
library:
    IMPORT libraryPath (
        AS alias = LOWER_ID
        | ':' libraryMember (',' libraryMember)*
    )?
    ;
libraryPath:     points += '.'* libraryPathPart ('.' libraryPathPart)*;
libraryPathPart: '@'? LOWER_ID;
libraryMember:   name = id | name = id AS alias = id;

classType:
    name = UPPER_ID genericParameters? parameters? (IS type)? ':' (
        classTypeMember
        | NL INDENT ( classTypeMember | NL)+ DEDENT
    )?
    ;

classTypeMember:
    '.' '.' '.' name = UPPER_ID arguments                              # includeClassTypeMember
    | property                                                         # propertyClassTypeMember
    | method                                                           # methodClassTypeMember
    | INIT body                                                        # initClassTypeMember
    | (INFIX | PREFIX | POSTFIX) operator parameters type? methodBody? # operatorClassTypeMember
    ;

extensionType:
    EXTENSION name = UPPER_ID genericParameters? ':' (
        extensionTypeMember
        | NL INDENT ( extensionTypeMember | NL)+ DEDENT
    )?
    ;

extensionTypeMember:
    '.' '.' '.' name = UPPER_ID arguments # includeExtensionTypeMember
    | property                            # propertyExtensionTypeMember
    | method                              # methodExtensionTypeMember
    ;

test: TEST expression? body?;

property: name = LOWER_ID type? (('=' | ':') expression)?;

method: name = LOWER_ID genericParameters? parameters type? methodBody?;

statement:
    FOR (value = LOWER_ID (',' index = LOWER_ID)? IN)? expression body # forStatement
    | WHILE expression body                                            # whileStatement
    | DO body WHILE expression                                         # doWhileStatement
    | IF expression thenBody = body (ELSE elseBody = body)?            # ifStatement
    | BREAK                                                            # breakStatement
    | RETURN expression?                                               # returnStatement
    | ACTUAL actual = expression NL+ EXPECT expect = expression        # assertStatement
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
    | name = UPPER_ID genericArguments? arguments                       # instantiationExpression
    | literal                                                           # literalExpression
    | expression genericArguments? arguments                            # callExpression
    | expression '[' expression ']'                                     # indexExpression
    | '(' expression ')'                                                # parenthesizedExpression
    | '[' (expression (',' expression)*)? ']'                           # arrayExpression
    | expression '?'? '.' name = LOWER_ID                               # memberExpression
    | op += ('!' | '-' | '+') expression                                # prefixExpression
    | left = expression op += '^' right = expression                    # powExpression
    | left = expression op += ('*' | '/' | '%') right = expression      # mulDivModExpression
    | left = expression op += ('+' | '-') right = expression            # addSubExpression
    | left = expression op += '.' op += '.' right = expression          # rangeExpression
    | left = expression op += '?' right = expression                    # elvisExpression
    | left = expression op += ('<' | '>') op += '='? right = expression # relationalExpression
    | left = expression op += ('=' | '!') op += '=' right = expression  # equalityExpression
    | left = expression op += '&' op += '&' right = expression          # conjunctionExpression
    | left = expression op += '|' op += '|' right = expression          # disjunctionExpression
    | expression '|' name = LOWER_ID ':' expression                     # pipeExpression
    | '\\' (parameter (',' parameter)* ':')? expression                 # lambdaExpression
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
    (
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
parameter:         name = LOWER_ID type? ('#' meta = UPPER_ID)?;
parameters:        '(' (parameter (',' parameter)*)? ')';
argument:          (name = LOWER_ID '=')? expression;
arguments:         '(' (argument (',' argument)*)? ')';
typeParameters:    '(' (type (',' type)*)? ')';
genericArguments:  '<' (type (',' type)*)? '>';
genericParameters: '<' names += UPPER_ID (',' names += UPPER_ID)* '>';
body:              ':' statement? | ':' NL* INDENT (statement | NL)* DEDENT;
methodBody:        NL* '=' NL* statement | body;
