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

statement: ID '=' expression # assignmentStatement;

expression
    : ID                                                           # idExpression
    | '(' expression ')'                                           # parenthesizedExpression
    | object = expression '[' index = expression ']'               # indexExpression
    | '[' items += expression* ']'                                 # arrayLiteralExpression
    | DecimalLiteral                                               # integerLiteralExpression
    | FloatLiteral                                                 # floatLiteralExpression
    | BooleanLiteral                                               # booleanLiteralExpression
    | CharacterLiteral                                             # characterLiteralExpression
    | StringLiteral                                                # stringLiteralExpression
    | left = expression operation = ('*' | '/') right = expression # mulDivExpression
    | left = expression operation = ('+' | '-') right = expression # addSubExpression
    | ('+' | '-' | '!') expression                                 # unaryExpression
    | expression '.' ID                                            # propertyExpression
    | function = expression '(' args += expression? (
        ',' args += expression
    )* ')' # functionCallExpression
    ;