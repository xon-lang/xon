parser grammar XonParser;

options {
    tokenVocab = XonLexer;
}

program: (library | statement | definition | NL)*;

library:       libraryPath ':' libraryMember (',' libraryMember)*;
libraryPath:   id ('-' id)* '/' id ('-' id)*;
libraryMember: name = id (AS alias = id)?;

definition:
    id generics? parameters? (IS type)? NL INDENT (member | NL)+ DEDENT
    ;

member:
    id type ('=' expression)?                     # propertyMember
    | 'init' body                                 # initMember
    | '@' generics? '[' parameter ']' type? body? # indexMember
    | operator generics? parameters type? body?   # operatorMember
    | id generics? parameters type? body?         # methodMember
    ;

statement:
    LOOP ((value = id (',' key = id?)? (',' index = id)? IN)? expression)? ':' body # loopStatement
    | IF expression THEN body (ELSE body)?                                          # ifStatement
    | BREAK                                                                         # breakStatement
    | RETURN expression?                                                            # returnStatement
    | id type? '=' expression                                                       # assignmentStatement
    | expression                                                                    # expressionStatement
    | PREPROCESSOR                                                                  # preprocessorStatement
    ;

expression:
    id                                                 # idExpression
    | '@'                                              # instanceExpression
    | literal                                          # literalExpression
    | expression '.' id                                # memberExpression
    | expression ('<' type (',' type)* '>')? arguments # methodExpression
    | expression '[' expression ']'                    # indexExpression
    | expression operator expression                   # operatorExpression
    | '[' (expression (',' expression)*)? ']'          # arrayExpression
    | '(' expression ')'                               # parenthesizedExpression
    | '\\' (parameter (',' parameter)* ':')? statement # lambdaExpression
    ;

literal:
    BOOLEAN_LITERAL   # booleanLiteral
    | INTEGER_LITERAL # integerLiteral
    | FLOAT_LITERAL   # floatLiteral
    | CHAR_LITERAL    # charLiteral
    | STRING_LITERAL  # stringLiteral
    ;

type:
    id ('<' type (',' type)* '>')?                                      # plainType
    | literal                                                           # literalType
    | type '?'                                                          # nullableType
    | type '[' ']'                                                      # arrayType
    | type '|' type                                                     # unionType
    | '(' (params += type (',' params += type)*)? ')' returnType = type # functionType
    | '(' (params += type (',' params += type)*)? ')'                   # actionType
    | '(' type ')'                                                      # parenthesizedType
    ;

operator:
    '+'
    | '-'
    | '*'
    | '/'
    | '%'
    | '^'
    | '=' '='
    | '<' '='?
    | '>' '='?
    | '!' '='?
    | '&' '&'?
    | '|' '|'?
    | '.' '.' '.'?
    ;

id:         ID;
parameter:  name = id type? ('#' meta = id)? ('=' expression);
parameters: '(' (parameter (',' parameter)*)? ')';
argument:   (id '=')? expression;
arguments:  '(' (argument (',' argument)*)? ')';
generics:   '<' id (',' id)* '>';
body:       statement | NL INDENT (statement | NL)+ DEDENT;
