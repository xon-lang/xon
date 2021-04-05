parser grammar XonParser;

options {
    tokenVocab = XonLexer;
}

program: (library | statement | definition | LINE_BREAK)*;

library:       libraryPath ':' libraryMember (',' libraryMember)*;
libraryPath:   id ('-' id)* '/' id ('-' id)*;
libraryMember: name = id ('as' alias = id)?;

definition:
    name = id generics? ('is' type)? ':' LINE_BREAK INDENT (
        member
        | LINE_BREAK
    )+ DEDENT
    ;
member:
    name = id generics? '(' (parameter (',' parameter)*)? ')' type? body?    # methodMember
    | name = '@' generics? '(' (parameter (',' parameter)*)? ')' type? body? # initMember
    | name = '@' generics? '[' parameter (',' parameter)* ']' type body?     # indexMember
    | name = operator generics? '(' parameter ',' parameter ')' type body?   # operatorMember
    | name = id generics? type body?                                         # propertyMember
    ;

type:
    id                                           # plainType
    | id '<' type (',' type)* '>'                # genericType
    | type '[' ']'                               # arrayType
    | '{' (parameter (',' parameter)*)? '}'      # objectType
    | '(' (parameter (',' parameter)*)? ')' type # functionType
    | type '|' type                              # unionType
    | '(' type ')'                               # parenthesizedType
    | literal                                    # literalType
    | type '#' id                                # metaType
    ;

statement:
    'if' expression body ('elif' expression body)* ('else' body)?                     # ifStatement
    | 'loop' ((value = id (',' key = id?)? (',' index = id)? 'in')? expression)? body # loopStatement
    | 'break'                                                                         # breakStatement
    | 'return' expression?                                                            # returnStatement
    | id '=' expression                                                               # assignmentStatement
    | expression                                                                      # expressionStatement
    | PREPROCESSOR                                                                    # preprocessorStatement
    ;

expression:
    id                                                                                    # idExpression
    | '@'                                                                                 # instanceExpression
    | literal                                                                             # literalExpression
    | expression '.' id                                                                   # memberExpression
    | expression '(' (argument (',' argument)*)? ')'                                      # methodExpression
    | expression '[' (argument (',' argument)*)? ']'                                      # indexExpression
    | expression operator expression                                                      # operatorExpression
    | STRING_FORMAT_START (expression STRING_FORMAT_MIDDLE)* expression STRING_FORMAT_END # stringFormatExpression
    | '[' (argument (',' argument)*)? ']'                                                 # arrayExpression
    | '(' expression ')'                                                                  # parenthesizedExpression
    | '\\' (parameter (',' parameter)* ':')? expression                                   # lambdaExpression
    ;

literal:
    BOOLEAN_LITERAL   # booleanLiteral
    | INTEGER_LITERAL # integerLiteral
    | FLOAT_LITERAL   # floatLiteral
    | CHAR_LITERAL    # charLiteral
    | STRING_LITERAL  # stringLiteral
    ;

// helpful rules
operator:
    '+'
    | '-'
    | '*'
    | '/'
    | '%'
    | '<' '='?
    | '=' '='
    | '>' '='?
    | '!' '='?
    | '^'
    | '&' '&'?
    | '|' '|'?
    | '.' '.' '.'?
    ;

parameter: id type?;
argument:  (id '=')? expression;
generics:  '<' id (',' id)* '>';
body:      ':' LINE_BREAK INDENT (statement | LINE_BREAK)+ DEDENT;
id:        ID;
