parser grammar XonParser;

options {
    tokenVocab = XonLexer;
}

program: (library | statement | definition | LineBreak)*;

library:       libraryPath ':' libraryMember (',' libraryMember)*;
libraryPath:   ID ('-' ID)* '/' ID ('-' ID)*;
libraryMember: name = ID ('as' alias = ID)?;

type: name = ID ('<' type (',' type)* '>')? ('#' meta = ID)? | '#' meta = ID;

definition: ID ('is' type)? ':' LineBreak INDENT (member | LineBreak)+ DEDENT;
member:
    ID type                                                      # propertyMember
    | ID '(' (parameter (',' parameter)*)? ')' type? body?       # methodMember
    | '@' '(' (parameter (',' parameter)*)? ')' body?            # initMember
    | operator+ '(' (parameter (',' parameter)*)? ')' type body? # operatorMember
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
    | '@' ID                                                                        # instanceMemberExpression
    | literal                                                                       # literalExpression
    | expression '(' (argument (',' argument)*)? ')'                                # functionExpression
    | expression '[' expression ']'                                                 # indexExpression
    | value = expression operator+ args += expression*                              # operatorExpression
    | StringFormatStart (expression StringFormatMiddle)* expression StringFormatEnd # stringFormatExpression
    | '[' (expression (',' expression)*)? ']'                                       # arrayExpression
    | '{' (ID ':' expression (',' ID ':' expression)*)? '}'                         # objectExpression
    | '(' expression ')'                                                            # parenthesizedExpression
    | '\\' (ID type (',' ID type)* ':' | ID (',' ID)* ':')? expression              # lambdaExpression
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
    | '<'
    | '='
    | '>'
    | '!'
    | '^'
    | '&'
    | '|'
    | '.'
    | ':'
    | '~'
    ;

parameter: ID type;
argument:  (ID '=')? expression;
body:      ':' LineBreak INDENT (statement | LineBreak)+ DEDENT;
