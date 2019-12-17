parser grammar XonParser
    ;

options {
    tokenVocab = XonLexer;
}

module: importDeclaration* statement*; //(classDeclaration | functionDeclaration)

importDeclaration: path = StringLiteral '{' members += ID (',' members += ID)* '}';

// class
classDeclaration: name = ID '{' (function)* '}';

// propertyDeclaration: nameType ('=' value = expression)?;

// function
function
    : ID ('(' ')' | '(' functionArgument (',' functionArgument)* ')') '{' (expression ';')* '}'
    ;

functionArgument: type = ID name = ID ('=' expression)?;

statement: ID '=' expression # assignmentStatement;

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
    | '(' ID (',' ID)* ')' '=>' expression                                      # lambdaExpression
    ;