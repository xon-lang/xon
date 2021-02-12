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
libraryMember: name = ID ('as' alias = ID)?;

definition: ID ('is' type)? ':' LineBreak INDENT (member | LineBreak)+ DEDENT;
member:
    ID type                                            # propertyMember
    | ID '(' (argument (',' argument)*)? ')' type body # methodMember
    | 'infix' operator '(' argument ')' type body?     # infixOperatorMember
    ;

operator: '+' | '-' | '*' | '/';
argument: ID type;
type:     ID ('<' type (',' type)* '>')?;

statement:
    'if' expression body ('elif' expression body)* ('else' body)?                     # ifStatement
    | 'loop' ((value = ID (',' key = ID?)? (',' index = ID)? 'in')? expression)? body # loopStatement
    | 'break'                                                                         # breakStatement
    | 'return' expression?                                                            # returnStatement
    | ID '=' expression                                                               # assignmentStatement
    | expression                                                                      # expressionStatement
    | Preprocessor                                                                    # preprocessorStatement
    ;

body: ':' LineBreak INDENT (statement | LineBreak)+ DEDENT;

fnArg: (ID '=')? expression;

expression:
    ID                                                                              # idExpression
    | literal                                                                       # literalExpression
    | object = expression '(' (fnArg (',' fnArg)*)? ')'                             # functionExpression
    | value = expression '[' index = expression ']'                                 # indexExpression
    | expression '.' ID                                                             # memberExpression
    | '-' expression                                                                # unaryMinusExpression
    | '!' expression                                                                # logicalNotExpression
    | left = expression operation = '^' right = expression                          # powExpression
    | left = expression operation = ('*' | '/' | '%') right = expression            # mulDivModExpression
    | left = expression operation = ('+' | '-') right = expression                  # addSubExpression
    | left = expression operation = ('<' | '<=' | '>=' | '>') right = expression    # relationalExpression
    | left = expression operation = ('==' | '!=') right = expression                # equalityExpression
    | left = expression operation = '&&' right = expression                         # logicalAndExpression
    | left = expression operation = '||' right = expression                         # logicalOrExpression
    | left = expression operation = '..' right = expression                         # rangeExpression
    | StringFormatStart (expression StringFormatMiddle)* expression StringFormatEnd # stringFormatExpression
    | '[' (expression (',' expression)*)? ']'                                       # arrayExpression
    | '{' (ID ':' expression (',' ID ':' expression)*)? '}'                         # objectExpression
    | '(' expression ')'                                                            # parenthesizedExpression
    | left = expression '|' (ID ':')? right = expression                            # pipeExpression
    | '(' (ID type? (',' ID type?)*)? ')' ':' expression                            # lambdaExpression
    ;

literal:
    BooleanLiteral   # booleanLiteral
    | FloatLiteral   # floatLiteral
    | IntegerLiteral # integerLiteral
    | CharLiteral    # charLiteral
    | StringLiteral  # stringLiteral
    ;