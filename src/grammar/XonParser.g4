parser grammar XonParser;

options {
    tokenVocab = XonLexer;
}

module: importDeclaration* statement*; //(classDeclaration | functionDeclaration)

importDeclaration: path = StringLiteral '{' members += ID (',' members += ID)* '}';

// class
classDeclaration: name = ID '{' ( functionDeclaration | propertyDeclaration)* '}';

propertyDeclaration: nameType ('=' value = expression)?;

// function
functionDeclaration: name = ID args += nameType? (',' args += nameType)* '{' (statement ';')* '}';

nameType: name = ID ':' type = ID;

variableDeclarationStatement: name = ID ':' dataType? value = expression;

declarationStatement: variableDeclarationStatement;

statement: declarationStatement | assignmentStatement | functionCall; // | asmStatement

assignmentStatement: name = ID '=' value = expression;

asmStatement: AsmCode;

// asmStatement:
expression:
    literal                                                   # literalExpression
    | ID                                                      # variableExpression
    | left = expression Plus right = expression               # addExpression
    | functionCall                                            # functionCallExpression
    | '[' array += expression? (',' array += expression)* ']' # arrayExpression;

literal: IntegerLiteral | FloatLiteral | BooleanLiteral | CharacterLiteral | StringLiteral;

functionCall: name = ID '(' args += expression? (',' args += expression)* ')';

dataType: PrimitiveDataType | ArrayDataType;