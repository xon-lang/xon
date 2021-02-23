parser grammar XonParser;

options {
    tokenVocab = XonLexer;
}

@parser::header { 
// @ts-nocheck
}

program: (library | statement | definition | LineBreak)*;

library:       libraryPath ':' libraryMember (',' libraryMember)*;
libraryPath:   ID ('-' ID)* '/' ID ('-' ID)*;
libraryMember: name = TypeId ('as' alias = TypeId)?;

type:
    name = TypeId ('<' type (',' type)* '>')? ('#' meta = TypeId)?
    | '#' meta = TypeId
    ;

definition:
    '_'? TypeId ('is' type)? ':' LineBreak INDENT (member | LineBreak)+ DEDENT
    ;
member:
    '_'? ID type                                              # propertyMember
    | '_'? ID '(' (argument (',' argument)*)? ')' type? body? # methodMember
    | '@' '(' (argument (',' argument)*)? ')' body?           # initMember
    | 'infix' operator+ '(' argument ')' type body?           # infixOperatorMember
    | 'prefix' operator+ '(' ')' type body?                   # prefixOperatorMember
    | 'postfix' operator+ '(' ')' type body?                  # postfixOperatorMember
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
    | expression '(' (fnArg (',' fnArg)*)? ')'                                      # functionExpression
    | expression '[' expression ']'                                                 # indexExpression
    | expression operator+ expression                                               # infixExpression
    | operator+ expression                                                          # prefixExpression
    | expression operator+                                                          # postfixExpression
    | StringFormatStart (expression StringFormatMiddle)* expression StringFormatEnd # stringFormatExpression
    | '[' (expression (',' expression)*)? ']'                                       # arrayExpression
    | '{' (ID ':' expression (',' ID ':' expression)*)? '}'                         # objectExpression
    | '(' expression ')'                                                            # parenthesizedExpression
    | '(' (ID type? (',' ID type?)*)? ')' ':' expression                            # lambdaExpression
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
argument: ID type;
body:     ':' LineBreak INDENT (statement | LineBreak)+ DEDENT;
fnArg:    (ID '=')? expression;