parser grammar XonParser;

options {
    tokenVocab = XonLexer;
}

program: (library | statement | definition | NL)*;

library:       libraryPath ':' libraryMember (',' libraryMember)*;
libraryPath:   id ('-' id)* '/' id ('-' id)*;
libraryMember: name = id (AS alias = id)?;

definition:
    name = id generics? (IS type)? ':' NL INDENT (member | NL)+ DEDENT
    ;

member:
    name = id generics? '(' (parameter (',' parameter)*)? ')' type? body?    # methodMember
    | name = '@' generics? '(' (parameter (',' parameter)*)? ')' type? body? # initMember
    | name = '@' generics? '[' parameter (',' parameter)* ']' type body?     # indexMember
    | name = operator generics? '(' parameter ',' parameter ')' type body?   # operatorMember
    | name = id generics? type ('=' body)?                                   # propertyMember
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
    LOOP ((value = id (',' key = id?)? (',' index = id)? IN)? expression)? ':' body # loopStatement
    | IF expression THEN body (ELSE body)?                                          # ifStatement
    | BREAK                                                                         # breakStatement
    | RETURN expression?                                                            # returnStatement
    | id '=' expression                                                             # assignmentStatement
    | expression                                                                    # expressionStatement
    | PREPROCESSOR                                                                  # preprocessorStatement
    ;

expression:
    id                                                  # idExpression
    | '@'                                               # instanceExpression
    | literal                                           # literalExpression
    | expression '.' id                                 # memberExpression
    | expression '(' (argument (',' argument)*)? ')'    # methodExpression
    | expression '[' (argument (',' argument)*)? ']'    # indexExpression
    | expression operator expression                    # operatorExpression
    | '[' (argument (',' argument)*)? ']'               # arrayExpression
    | '(' expression ')'                                # parenthesizedExpression
    | '\\' (parameter (',' parameter)* ':')? expression # lambdaExpression
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
    | '^'
    | '=' '='
    | '<' '='?
    | '>' '='?
    | '!' '='?
    | '&' '&'?
    | '|' '|'?
    | '.' '.' '.'?
    ;

id:        ID;
parameter: id type?;
argument:  (id '=')? expression;
generics:  '<' id (',' id)* '>';
body:      statement | NL INDENT (statement | NL)+ DEDENT;
