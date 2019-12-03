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
    | functionCall
    ; // | asmStatement

assignmentStatement: name = ID '=' value = expression;

asmStatement: AsmCode;

// asmStatement:
expression
    : ID                                       # idExpression
    | '(' expression ')'                       # parenthesizedExpression
    | integerLiteral                           # integerLiteralExpression
    | floatLiteral                             # floatLiteralExpression
    | booleanLiteral                           # booleanLiteralExpression
    | characterLiteral                         # characterLiteralExpression
    | stringLiteral                            # stringLiteralExpression
    | left = expression '*' right = expression # multiplicationExpression
    | left = expression '/' right = expression # divideExpression
    | left = expression '+' right = expression # addExpression
    | left = expression '-' right = expression # subtractionExpression
    // | left = expression ('*' | '+' | '-' | '/') right = expression    # binaryExpression
    | ('+' | '-' | '!') expression                                    # unaryExpression
    | expression '.' ID                                               # propertyExpression
    | object = expression '[' index = expression ']'                  # indexExpression
    | name = ID '(' args += expression? (',' args += expression)* ')' # functionCallExpression
    ;

functionCall
    : name = ID '(' args += expression? (',' args += expression)* ')'
    ;

dataType: PrimitiveDataType | ArrayDataType;

// literals
integerLiteral:   DecimalLiteral;
floatLiteral:     FloatLiteral;
booleanLiteral:   BooleanLiteral;
characterLiteral: CharacterLiteral;
stringLiteral:    StringLiteral;