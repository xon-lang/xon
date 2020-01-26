parser grammar XonParser
    ;

options {
    tokenVocab = XonLexer;
}

program: (scope)*;

// importDeclaration: path = StringLiteral '{' members += ID (',' members += ID)* '}';

scope:         ID (scopeArgument (',' scopeArgument)*)? '{' scopeBody? '}';
scopeArgument: name = ID ':' type = ID ('=' expression)?;
scopeBody:     (statement ';')+;

statement: ID '=' expression # assignmentStatement | expression # expressionStatement;

expression
    : ID                                                                        # idExpression
    | '(' expression ')'                                                        # parenthesizedExpression
    | object = expression '[' index = expression ']'                            # indexExpression
    | '[' items += expression* ']'                                              # arrayLiteralExpression
    | DecimalLiteral                                                            # integerLiteralExpression
    | FloatLiteral                                                              # floatLiteralExpression
    | BooleanLiteral                                                            # booleanLiteralExpression
    | CharacterLiteral                                                          # characterLiteralExpression
    | StringLiteral                                                             # stringLiteralExpression
    | left = expression operation = ('*' | '/') right = expression              # mulDivExpression
    | left = expression operation = ('+' | '-') right = expression              # addSubExpression
    | ('+' | '-' | '!') expression                                              # unaryExpression
    | expression '.' ID                                                         # propertyExpression
    | object = expression '(' args += expression? (',' args += expression)* ')' # functionCallExpression
    | '\\' expression                                                           # lambdaExpression
    ;