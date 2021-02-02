parser grammar XonParser;

options {
    tokenVocab = XonLexer;
}

@parser::header { 
// @ts-nocheck
}

program: imports* statement* definition*;

imports:      importPath ':' importMember (',' importMember)* | LineBreak;
importPath:   ID ('-' ID)* '/' ID ('-' ID)*;
importMember: name = ID ('as' alias = ID)?;

definition: ID ':' LineBreak INDENT member+ DEDENT;
member:
    ID type                                             # propertyMember
    | ID '(' (argument (',' argument)*)? ')' type? body # methodMember
    | 'infix' '+' '(' argument ')' type body            # infixOperatorMember
    | LineBreak                                         # lineBreakMember
    ;
argument: ID type;
type:     ID ('[' ']')?;

statement:
    'if' expression body ('elif' expression body)* ('else' body)?                     # ifStatement
    | 'loop' ((value = ID (',' key = ID?)? (',' index = ID)? 'in')? expression)? body # loopStatement
    | 'break'                                                                         # breakStatement
    | 'return' expression?                                                            # returnStatement
    | ID '=' expression                                                               # assignmentStatement
    | expression                                                                      # expressionStatement
    | Preprocessor                                                                    # preprocessorStatement
    | LineBreak                                                                       # lineBreakStatement
    ;

body: ':' LineBreak INDENT statement+ DEDENT;

expression:
    ID                                                                            # idExpression
    | literal                                                                     # literalExpression
    | object = expression '(' (args += expression (',' args += expression)*)? ')' # functionExpression
    | value = expression '[' index = expression ']'                               # indexExpression
    | expression '.' ID                                                           # memberExpression
    | base = expression '^' exponent = expression                                 # powExpression
    | '-' expression                                                              # unaryMinusExpression
    | '!' expression                                                              # logicalNotExpression
    | left = expression operation = ('*' | '/' | '%') right = expression          # mulDivModExpression
    | left = expression operation = ('+' | '-') right = expression                # addSubExpression
    | left = expression operation = ('<' | '<=' | '>=' | '>') right = expression  # relationalExpression
    | left = expression operation = ('==' | '!=') right = expression              # equalityExpression
    | left = expression '&&' right = expression                                   # logicalAndExpression
    | left = expression '||' right = expression                                   # logicalOrExpression
    | '[' (expression (',' expression)*)? ']'                                     # arrayExpression
    | '{' (ID ':' expression (',' ID ':' expression)*)? '}'                       # objectExpression
    | '(' expression ')'                                                          # parenthesizedExpression
    | left = expression '|' (ID ':')? right = expression                          # pipeExpression
    | '\\' (ID (',' ID)* ':')? expression                                         # lambdaExpression
    ;

literal:
    BooleanLiteral  # booleanLiteral
    | NumberLiteral # numberLiteral
    | StringLiteral # stringLiteral
    ;