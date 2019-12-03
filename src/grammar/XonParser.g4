parser grammar XonParser
    ;

options {
    tokenVocab = XonLexer;
}

module
    : importDeclaration* statement*
    ; //(classDeclaration | functionDeclaration)

importDeclaration
    : path = StringLiteral '{' members += ID (',' members += ID)* '}'
    ;

// class
classDeclaration
    : name = ID '{' (functionDeclaration | propertyDeclaration)* '}'
    ;

propertyDeclaration: nameType ('=' value = expression)?;

// function
functionDeclaration
    : name = ID args += nameType? (',' args += nameType)* '{' (
        statement ';'
    )* '}'
    ;

nameType: name = ID ':' type = ID;

declarationStatement: functionDeclaration;

statement
    : declarationStatement
    | assignmentStatement
    ; // | asmStatement

assignmentStatement: name = ID '=' value = expression;

asmStatement: AsmCode;

// asmStatement:
expression
    : ID                                             # idExpression
    | '(' expression ')'                             # parenthesizedExpression
    | object = expression '[' index = expression ']' # indexExpression
    | '[' items += expression* ']'                   # arrayLiteralExpression
    | DecimalLiteral                                 # integerLiteralExpression
    | FloatLiteral                                   # floatLiteralExpression
    | BooleanLiteral                                 # booleanLiteralExpression
    | CharacterLiteral                               # characterLiteralExpression
    | StringLiteral                                  # stringLiteralExpression
    | left = expression '*' right = expression       # multiplicationExpression
    | left = expression '/' right = expression       # divideExpression
    | left = expression '+' right = expression       # addExpression
    | left = expression '-' right = expression       # subtractionExpression
    | ('+' | '-' | '!') expression                   # unaryExpression
    | expression '.' ID                              # propertyExpression
    | function = expression '(' args += expression? (
        ',' args += expression
    )* ')' # functionCallExpression
    ;