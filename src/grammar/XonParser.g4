parser grammar XonParser;

options {
    tokenVocab = XonLexer;
}

program: (library | statement | definition | LineBreak)*;

library:       libraryPath ':' libraryMember (',' libraryMember)*;
libraryPath:   ID ('-' ID)* '/' ID ('-' ID)*;
libraryMember: name = ID ('as' alias = ID)?;

definition: id ('is' type)? ':' LineBreak INDENT (member | LineBreak)+ DEDENT;
member:
    ID '(' (parameter (',' parameter)*)? ')' type? body?  # methodMember
    | '@' '(' (parameter (',' parameter)*)? ')' body?     # initMember
    | '@' '[' parameter (',' parameter)* ']' type body?   # indexMember
    | operator '(' parameter ',' parameter ')' type body? # operatorMember
    | ID type                                             # propertyMember
    ;

type:
    id                                           # plainType
    | id '<' type (',' type)* '>'                # genericType
    | type '[' ']'                               # arrayType
    | '(' (parameter (',' parameter)*)? ')' type # functionType
    | type '|' type                              # unionType
    | '(' type ')'                               # parenthesizedType
    | type '#' id                                # metaType
    ;

statement:
    'if' expression body ('elif' expression body)* ('else' body)?                     # ifStatement
    | 'loop' ((value = ID (',' key = ID?)? (',' index = ID)? 'in')? expression)? body # loopStatement
    | 'break'                                                                         # breakStatement
    | 'return' expression?                                                            # returnStatement
    | ID '=' expression                                                               # assignmentStatement
    | expression                                                                      # expressionStatement
    | Preprocessor                                                                    # preprocessorStatement
    ;

expression:
    ID                                                                              # idExpression
    | '@'                                                                           # instanceExpression
    | literal                                                                       # literalExpression
    | expression ('.' id)? '(' (argument (',' argument)*)? ')'                      # methodExpression
    | expression ('.' id)? '[' (argument (',' argument)*)? ']'                      # indexExpression
    | expression '.' id                                                             # propertyExpression
    | expression operator expression                                                # operatorExpression
    | StringFormatStart (expression StringFormatMiddle)* expression StringFormatEnd # stringFormatExpression
    | '[' expression (',' expression)* ']'                                          # arrayExpression
    | '{' (ID ':' expression (',' ID ':' expression)*)? '}'                         # objectExpression
    | '(' expression ')'                                                            # parenthesizedExpression
    | '\\' (parameter (',' parameter)* ':')? expression                             # lambdaExpression
    ;

literal:
    BooleanLiteral   # booleanLiteral
    | IntegerLiteral # integerLiteral
    | FloatLiteral   # floatLiteral
    | CharLiteral    # charLiteral
    | StringLiteral  # stringLiteral
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

parameter: ID type?;
argument:  (ID '=')? expression;
body:      ':' LineBreak INDENT (statement | LineBreak)+ DEDENT;
id:        ID;
